'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase, DbUserProgress } from './supabase';
import { getProgress, saveProgress, UserProgress } from './progress';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signInWithEmail: (email: string, password: string) => Promise<{ error: Error | null }>;
  signUpWithEmail: (email: string, password: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
  syncProgress: () => Promise<void>;
  isSyncing: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSyncing, setIsSyncing] = useState(false);

  useEffect(() => {
    // Check if Supabase is properly configured
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      // Supabase not configured - skip auth and just use local storage
      console.log('Supabase not configured - using local storage only');
      setLoading(false);
      return;
    }

    // Get initial session with timeout
    const timeoutId = setTimeout(() => {
      // If getSession takes too long, just proceed without auth
      console.log('Auth session check timed out - using local storage');
      setLoading(false);
    }, 5000);

    supabase.auth.getSession().then(({ data: { session }, error }) => {
      clearTimeout(timeoutId);

      if (error) {
        console.error('Error getting session:', error);
        setLoading(false);
        return;
      }

      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);

      // Sync progress if user is logged in
      if (session?.user) {
        syncProgressWithCloud(session.user.id);
      }
    }).catch((error) => {
      clearTimeout(timeoutId);
      console.error('Failed to get auth session:', error);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);

        if (event === 'SIGNED_IN' && session?.user) {
          // Sync local progress to cloud on sign in
          await syncProgressWithCloud(session.user.id);
        }
      }
    );

    return () => {
      clearTimeout(timeoutId);
      subscription.unsubscribe();
    };
  }, []);

  // Sync local progress with cloud
  // Strategy: Merge local and cloud, keeping the most complete data
  async function syncProgressWithCloud(userId: string) {
    setIsSyncing(true);
    try {
      const localProgress = getProgress();

      // Fetch cloud progress
      const { data: cloudProgress, error } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (error && error.code !== 'PGRST116') {
        // PGRST116 = no rows found (new user)
        console.error('Error fetching cloud progress:', error);
        return;
      }

      if (!cloudProgress) {
        // New user - upload local progress to cloud
        await uploadProgressToCloud(userId, localProgress);
      } else {
        // Existing user - merge progress
        const mergedProgress = mergeProgress(localProgress, cloudProgress);

        // Update local storage
        saveProgress(mergedProgress);

        // Update cloud
        await uploadProgressToCloud(userId, mergedProgress);
      }
    } catch (error) {
      console.error('Error syncing progress:', error);
    } finally {
      setIsSyncing(false);
    }
  }

  // Merge local and cloud progress, keeping the best of both
  function mergeProgress(local: UserProgress, cloud: DbUserProgress): UserProgress {
    // Merge completed lessons (union of both)
    const completedLessons = Array.from(new Set([
      ...local.completedLessons,
      ...cloud.completed_lessons
    ]));

    // Merge bookmarks (union of both)
    const bookmarks = Array.from(new Set([
      ...local.bookmarks,
      ...cloud.bookmarks
    ]));

    // Use the higher streak
    const streak = Math.max(local.streak, cloud.streak);

    // Use the earlier start date
    const localStart = new Date(local.startDate);
    const cloudStart = new Date(cloud.start_date);
    const startDate = localStart < cloudStart ? local.startDate : cloud.start_date;

    // Use most recent last visit
    const localVisit = new Date(local.lastVisit);
    const cloudVisit = new Date(cloud.last_visit);
    const lastVisit = localVisit > cloudVisit ? local.lastVisit : cloud.last_visit;

    return {
      completedLessons,
      currentLevel: Math.max(local.currentLevel, cloud.current_level),
      currentLesson: local.currentLesson || cloud.current_lesson,
      streak,
      lastVisit,
      startDate,
      bookmarks,
    };
  }

  // Upload progress to cloud
  async function uploadProgressToCloud(userId: string, progress: UserProgress) {
    const { error } = await supabase
      .from('user_progress')
      .upsert({
        user_id: userId,
        completed_lessons: progress.completedLessons,
        current_level: progress.currentLevel,
        current_lesson: progress.currentLesson,
        streak: progress.streak,
        last_visit: progress.lastVisit,
        start_date: progress.startDate,
        bookmarks: progress.bookmarks,
      }, {
        onConflict: 'user_id'
      });

    if (error) {
      console.error('Error uploading progress:', error);
    }
  }

  // Public sync function
  async function syncProgress() {
    if (user) {
      await syncProgressWithCloud(user.id);
    }
  }

  // Sign in with email
  async function signInWithEmail(email: string, password: string) {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { error: error as Error | null };
  }

  // Sign up with email
  async function signUpWithEmail(email: string, password: string) {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    return { error: error as Error | null };
  }

  // Sign out
  async function signOut() {
    await supabase.auth.signOut();
  }

  return (
    <AuthContext.Provider value={{
      user,
      session,
      loading,
      signInWithEmail,
      signUpWithEmail,
      signOut,
      syncProgress,
      isSyncing,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
