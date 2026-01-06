import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getEmailContentForDay, TOTAL_DAYS } from '@/lib/emailContent';
import { generateDailyEmail, generateEmailSubject, generateCompletionEmail } from '@/lib/emailTemplate';

// Resend API for sending emails
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CRON_SECRET = process.env.CRON_SECRET;
const FROM_EMAIL = process.env.FROM_EMAIL || 'Dharma Path <lessons@dharmapath.app>';

// Create Supabase client with service role for cron jobs
function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    return null;
  }

  return createClient(supabaseUrl, supabaseServiceKey);
}

interface EmailSubscription {
  id: string;
  user_id: string;
  email: string;
  subscribed: boolean;
  current_day: number;
  last_sent_at: string | null;
}

/**
 * Send email via Resend API
 */
async function sendEmail(to: string, subject: string, html: string): Promise<boolean> {
  if (!RESEND_API_KEY) {
    console.error('RESEND_API_KEY not configured');
    return false;
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [to],
        subject,
        html,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error(`Failed to send email to ${to}:`, error);
      return false;
    }

    return true;
  } catch (error) {
    console.error(`Error sending email to ${to}:`, error);
    return false;
  }
}

/**
 * POST /api/cron/send-daily-emails
 *
 * Triggered daily by Vercel Cron to send lesson emails to all subscribed users.
 * Requires CRON_SECRET header for authentication.
 */
export async function POST(request: NextRequest) {
  // Verify cron secret (prevents unauthorized calls)
  const authHeader = request.headers.get('authorization');
  if (CRON_SECRET && authHeader !== `Bearer ${CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const supabase = getSupabaseClient();
  if (!supabase) {
    return NextResponse.json(
      { error: 'Database not configured' },
      { status: 500 }
    );
  }

  if (!RESEND_API_KEY) {
    return NextResponse.json(
      { error: 'Email service not configured' },
      { status: 500 }
    );
  }

  const results = {
    sent: 0,
    failed: 0,
    skipped: 0,
    completed: 0,
    errors: [] as string[],
  };

  try {
    // Get all subscribed users who haven't completed the journey
    const { data: subscribers, error: fetchError } = await supabase
      .from('email_subscriptions')
      .select('*')
      .eq('subscribed', true)
      .lte('current_day', TOTAL_DAYS);

    if (fetchError) {
      console.error('Error fetching subscribers:', fetchError);
      return NextResponse.json(
        { error: 'Failed to fetch subscribers', details: fetchError.message },
        { status: 500 }
      );
    }

    if (!subscribers || subscribers.length === 0) {
      return NextResponse.json({
        message: 'No subscribers to process',
        results,
      });
    }

    console.log(`Processing ${subscribers.length} subscribers...`);

    // Process each subscriber
    for (const subscriber of subscribers as EmailSubscription[]) {
      try {
        const { email, current_day, id } = subscriber;

        // Skip if already sent today (prevent double sends)
        if (subscriber.last_sent_at) {
          const lastSent = new Date(subscriber.last_sent_at);
          const now = new Date();
          const hoursSinceLastSend = (now.getTime() - lastSent.getTime()) / (1000 * 60 * 60);

          if (hoursSinceLastSend < 20) {
            // Less than 20 hours since last send - skip
            results.skipped++;
            continue;
          }
        }

        // Check if journey is complete
        if (current_day > TOTAL_DAYS) {
          // Send completion email and mark as done
          const completionHtml = generateCompletionEmail(email, id);
          const sent = await sendEmail(
            email,
            'Journey Complete - Dharma Path',
            completionHtml
          );

          if (sent) {
            // Unsubscribe after completion
            await supabase
              .from('email_subscriptions')
              .update({
                subscribed: false,
                last_sent_at: new Date().toISOString(),
              })
              .eq('id', id);

            results.completed++;
          } else {
            results.failed++;
          }
          continue;
        }

        // Get content for current day
        const content = getEmailContentForDay(current_day);
        if (!content) {
          console.error(`No content for day ${current_day}`);
          results.errors.push(`No content for day ${current_day}`);
          results.failed++;
          continue;
        }

        // Generate email HTML
        const emailHtml = generateDailyEmail({
          content,
          userEmail: email,
          unsubscribeToken: id, // Using subscription ID as token for simplicity
        });

        const subject = generateEmailSubject(content);

        // Send the email
        const sent = await sendEmail(email, subject, emailHtml);

        if (sent) {
          // Update subscriber: increment day and update last_sent_at
          const { error: updateError } = await supabase
            .from('email_subscriptions')
            .update({
              current_day: current_day + 1,
              last_sent_at: new Date().toISOString(),
            })
            .eq('id', id);

          if (updateError) {
            console.error(`Error updating subscriber ${id}:`, updateError);
            results.errors.push(`Update failed for ${email}`);
          }

          results.sent++;
          console.log(`Sent day ${current_day} to ${email}`);
        } else {
          results.failed++;
          results.errors.push(`Send failed for ${email}`);
        }

      } catch (subscriberError) {
        console.error(`Error processing subscriber:`, subscriberError);
        results.failed++;
        results.errors.push(`Error processing ${subscriber.email}`);
      }
    }

    return NextResponse.json({
      message: 'Daily emails processed',
      results,
    });

  } catch (error) {
    console.error('Cron job error:', error);
    return NextResponse.json(
      { error: 'Internal server error', results },
      { status: 500 }
    );
  }
}

/**
 * GET handler for manual testing / health check
 */
export async function GET(request: NextRequest) {
  // Verify cron secret
  const authHeader = request.headers.get('authorization');
  if (CRON_SECRET && authHeader !== `Bearer ${CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  return NextResponse.json({
    status: 'ok',
    message: 'Daily email cron endpoint ready',
    config: {
      resendConfigured: !!RESEND_API_KEY,
      supabaseConfigured: !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.SUPABASE_SERVICE_ROLE_KEY,
      cronSecretConfigured: !!CRON_SECRET,
    },
  });
}
