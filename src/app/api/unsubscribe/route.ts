import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Create client inside handler to avoid build-time errors
function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    return null;
  }

  return createClient(supabaseUrl, supabaseServiceKey);
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const email = searchParams.get('email');

  if (!email) {
    return NextResponse.redirect(new URL('/unsubscribe-error', request.url));
  }

  const supabase = getSupabaseClient();

  if (!supabase) {
    console.error('Supabase not configured for unsubscribe');
    return NextResponse.redirect(new URL('/unsubscribe-error', request.url));
  }

  try {
    // Update subscription to unsubscribed
    const { error } = await supabase
      .from('email_subscriptions')
      .update({
        subscribed: false,
        unsubscribed_at: new Date().toISOString(),
      })
      .eq('email', email);

    if (error) {
      console.error('Error unsubscribing:', error);
      return NextResponse.redirect(new URL('/unsubscribe-error', request.url));
    }

    // Redirect to success page
    return NextResponse.redirect(new URL('/unsubscribed', request.url));
  } catch (error) {
    console.error('Error in unsubscribe:', error);
    return NextResponse.redirect(new URL('/unsubscribe-error', request.url));
  }
}
