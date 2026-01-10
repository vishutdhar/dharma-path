import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getLessonIdsUpToDay, TOTAL_LESSONS } from '@/lib/emailContent';
import { findNextIncompleteLesson } from '@/lib/progress';

// UUID v4 format validation regex
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

/**
 * Validate UUID format to prevent unnecessary DB lookups
 */
function isValidUUID(str: string): boolean {
  return UUID_REGEX.test(str);
}

// Create Supabase client with service role for API operations
function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    return null;
  }

  return createClient(supabaseUrl, supabaseServiceKey);
}

/**
 * GET /api/mark-complete?token=xxx&day=5
 *
 * Marks lessons as complete when user clicks the email button.
 * Marks ALL lessons from day 1 up to the specified day.
 *
 * - token: The subscription ID (used as unsubscribe token in emails)
 * - day: The email day number (1-128)
 *
 * Redirects to the lesson page on success, or error page on failure.
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const token = searchParams.get('token');
  const dayParam = searchParams.get('day');

  // Validate parameters exist
  if (!token || !dayParam) {
    return NextResponse.redirect(
      new URL('/lesson-complete?error=missing_params', request.url)
    );
  }

  // Validate token format (UUID) - prevents unnecessary DB lookups
  if (!isValidUUID(token)) {
    return NextResponse.redirect(
      new URL('/lesson-complete?error=invalid_token', request.url)
    );
  }

  const day = parseInt(dayParam);
  if (isNaN(day) || day < 1 || day > 128) {
    return NextResponse.redirect(
      new URL('/lesson-complete?error=invalid_day', request.url)
    );
  }

  const supabase = getSupabaseClient();
  if (!supabase) {
    console.error('Supabase not configured for mark-complete');
    return NextResponse.redirect(
      new URL('/lesson-complete?error=server_error', request.url)
    );
  }

  try {
    // Look up subscription by ID (token) - include current_day for validation
    const { data: subscription, error: subError } = await supabase
      .from('email_subscriptions')
      .select('id, user_id, email, current_day')
      .eq('id', token)
      .single();

    if (subError || !subscription) {
      console.error('Subscription not found:', subError);
      return NextResponse.redirect(
        new URL('/lesson-complete?error=invalid_token', request.url)
      );
    }

    // SECURITY: Validate that the requested day has actually been sent to this user
    // current_day in DB is the NEXT day to be sent, so user has received days 1 to (current_day - 1)
    // Exception: current_day starts at 1, so day 1 is valid even when current_day is 1 (first email sent)
    const maxAllowedDay = Math.max(subscription.current_day, 1);
    if (day > maxAllowedDay) {
      console.error(`Day validation failed: requested day ${day} > max allowed ${maxAllowedDay}`);
      return NextResponse.redirect(
        new URL('/lesson-complete?error=invalid_day', request.url)
      );
    }

    const userId = subscription.user_id;

    // Get all lesson IDs from day 1 to current day
    const lessonsToComplete = getLessonIdsUpToDay(day);

    if (lessonsToComplete.length === 0) {
      // Day 111+ (Gita chapters) - no lessons to mark, just redirect
      return NextResponse.redirect(
        new URL(`/gita/${day - TOTAL_LESSONS}`, request.url)
      );
    }

    // Fetch existing progress
    const { data: existingProgress, error: fetchError } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', userId)
      .single();

    const now = new Date().toISOString();

    if (fetchError && fetchError.code !== 'PGRST116') {
      // PGRST116 = no rows found (new user, will insert)
      console.error('Error fetching progress:', fetchError);
      return NextResponse.redirect(
        new URL('/lesson-complete?error=server_error', request.url)
      );
    }

    if (existingProgress) {
      // Merge completed lessons (union of existing + new)
      const existingLessons = existingProgress.completed_lessons || [];
      const mergedLessons = Array.from(new Set([...existingLessons, ...lessonsToComplete]));

      // Find next incomplete lesson after merge
      const nextLesson = findNextIncompleteLesson(mergedLessons);

      // Update existing progress
      const { error: updateError } = await supabase
        .from('user_progress')
        .update({
          completed_lessons: mergedLessons,
          current_lesson: nextLesson?.lessonId || null,
          current_level: nextLesson?.levelId || 8,
          last_visit: now,
          updated_at: now,
        })
        .eq('user_id', userId);

      if (updateError) {
        console.error('Error updating progress:', updateError);
        return NextResponse.redirect(
          new URL('/lesson-complete?error=server_error', request.url)
        );
      }
    } else {
      // Create new progress record
      const nextLesson = findNextIncompleteLesson(lessonsToComplete);

      const { error: insertError } = await supabase
        .from('user_progress')
        .insert({
          user_id: userId,
          completed_lessons: lessonsToComplete,
          current_lesson: nextLesson?.lessonId || null,
          current_level: nextLesson?.levelId || 1,
          streak: 1,
          last_visit: now,
          start_date: now,
          bookmarks: [],
        });

      if (insertError) {
        console.error('Error inserting progress:', insertError);
        return NextResponse.redirect(
          new URL('/lesson-complete?error=server_error', request.url)
        );
      }
    }

    // Get the lesson ID for the current day to redirect to
    const currentLessonId = lessonsToComplete[lessonsToComplete.length - 1];

    // Redirect to success page with stats
    const successUrl = new URL('/lesson-complete', request.url);
    successUrl.searchParams.set('day', day.toString());
    successUrl.searchParams.set('completed', lessonsToComplete.length.toString());
    successUrl.searchParams.set('lesson', currentLessonId);

    return NextResponse.redirect(successUrl);

  } catch (error) {
    console.error('Error in mark-complete:', error);
    return NextResponse.redirect(
      new URL('/lesson-complete?error=server_error', request.url)
    );
  }
}
