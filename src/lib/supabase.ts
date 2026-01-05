// Supabase client for browser
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
