// Supabase client for browser
import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Create a client that handles missing credentials gracefully
function createSupabaseClient(): SupabaseClient {
  if (!supabaseUrl || !supabaseAnonKey) {
    // Return a dummy client that won't make real requests
    // This prevents crashes when Supabase isn't configured
    console.warn('Supabase credentials not configured - cloud sync disabled');
  }
  return createClient(supabaseUrl || 'https://placeholder.supabase.co', supabaseAnonKey || 'placeholder');
}

export const supabase = createSupabaseClient();

// Database types
export interface DbUserProgress {
  id: string;
  user_id: string;
  completed_lessons: string[];
  current_level: number;
  current_lesson: string | null;
  streak: number;
  last_visit: string;
  start_date: string;
  bookmarks: string[];
  created_at: string;
  updated_at: string;
}
