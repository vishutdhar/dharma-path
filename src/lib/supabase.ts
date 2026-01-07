// Supabase client for browser
import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Check if Supabase is properly configured (not empty and not placeholder)
export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
  supabaseAnonKey &&
  !supabaseUrl.includes('placeholder') &&
  supabaseUrl.includes('supabase')
);

// Create a client that handles missing credentials gracefully
function createSupabaseClient(): SupabaseClient {
  if (!isSupabaseConfigured) {
    // Log once at startup (only in development)
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
      console.info('[Dharma Path] Running in offline mode - cloud sync disabled');
    }
  }
  // Still create client (needed for type safety), but it won't be used if not configured
  return createClient(
    supabaseUrl || 'https://placeholder.supabase.co',
    supabaseAnonKey || 'placeholder'
  );
}

export const supabase = createSupabaseClient();

// Database types

/**
 * Core progress data fields (used by sync functions)
 * This contains only the user-controlled data, not auto-generated DB fields
 */
export interface DbUserProgressCore {
  user_id: string;
  completed_lessons: string[];
  current_level: number;
  current_lesson: string | null;
  streak: number;
  last_visit: string;
  start_date: string;
  bookmarks: string[];
}

/**
 * Full database record including auto-generated fields
 * Extends DbUserProgressCore with id and timestamps
 */
export interface DbUserProgress extends DbUserProgressCore {
  id: string;
  created_at: string;
  updated_at: string;
}

export interface EmailSubscription {
  id: string;
  user_id: string;
  email: string;
  subscribed: boolean;
  current_day: number; // 1-77
  last_sent_at: string | null;
  subscribed_at: string;
  unsubscribed_at: string | null;
  created_at: string;
  updated_at: string;
}
