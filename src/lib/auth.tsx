'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, Session, PostgrestError } from '@supabase/supabase-js';
import { supabase, isSupabaseConfigured } from './supabase';
import { getProgress, saveProgress, UserProgress } from './progress';
import {
  mergeProgress,
  cloudToLocal,
  isLocalProgressOwnedBy,
  isLocalProgressFromDifferentUser,
  createFreshProgress,
  DbUserProgress,
} from './sync';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signInWithEmail: (email: string, password: string) => Promise<{ error: Error | null }>;
  signUpWithEmail: (email: string, password: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
  syncProgress: () => Promise<void>;
  clearCloudProgress: () => Promise<boolean>;
  isSyncing: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSyncing, setIsSyncing] = useState(false);

  useEffect(() => {
    // Skip all Supabase operations if not properly configured
    if (!isSupabaseConfigured) {
      setLoading(false);
      return;
    }

    // Get initial session with timeout
    const timeoutId = setTimeout(() => {
      // If getSession takes too long, just proceed without auth
      if (process.env.NODE_ENV === 'development') {
        console.info('[Dharma Path] Auth check timed out - continuing with local storage');
      }
      setLoading(false);
    }, 5000);

    supabase.auth.getSession().then(({ data: { session }, error }) => {
      clearTimeout(timeoutId);

      if (error) {
        if (process.env.NODE_ENV === 'development') {
          console.error('[Dharma Path] Error getting session:', error);
        }
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
      if (process.env.NODE_ENV === 'development') {
        console.error('[Dharma Path] Failed to get auth session:', error);
      }
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

          // Ensure email subscription exists (auto-subscribe new users)
          if (session.user.email) {
            ensureEmailSubscription(session.user.id, session.user.email);
          }
        }
      }
    );

    return () => {
      clearTimeout(timeoutId);
      subscription.unsubscribe();
    };
  }, []);

  // Helper to add timeout to promises
  function withTimeout<T>(promise: Promise<T>, ms: number, errorMsg: string): Promise<T> {
    const timeout = new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error(errorMsg)), ms);
    });
    return Promise.race([promise, timeout]);
  }

  // Sync local progress with cloud
  // Strategy: Only merge if local progress belongs to current user, otherwise use cloud
  async function syncProgressWithCloud(userId: string) {
    // Skip if Supabase not configured
    if (!isSupabaseConfigured) {
      return;
    }

    setIsSyncing(true);
    try {
      const localProgress = getProgress();

      // Check if local progress belongs to a different user (using extracted functions)
      const localBelongsToCurrentUser = isLocalProgressOwnedBy(localProgress, userId);
      const localBelongsToDifferentUser = isLocalProgressFromDifferentUser(localProgress, userId);

      if (localBelongsToDifferentUser) {
        // Local storage has another user's data - DO NOT merge it
        console.info('[Dharma Path] Local progress belongs to different user, clearing local storage');
      }

      // Fetch cloud progress with 10 second timeout
      const fetchPromise = supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', userId)
        .single();
      const result = await withTimeout(
        Promise.resolve(fetchPromise),
        10000,
        'Sync timed out'
      );
      const { data: cloudProgress, error } = result as { data: DbUserProgress | null; error: PostgrestError | null };

      if (error && error.code !== 'PGRST116') {
        // PGRST116 = no rows found (new user)
        if (process.env.NODE_ENV === 'development') {
          console.error('[Dharma Path] Error fetching cloud progress:', error);
        }
        return;
      }

      if (!cloudProgress) {
        // New user with no cloud data
        if (localBelongsToCurrentUser && localProgress.completedLessons.length > 0) {
          // Upload their local progress to cloud (with userId tag)
          const taggedProgress = { ...localProgress, userId };
          saveProgress(taggedProgress);
          await withTimeout(
            uploadProgressToCloud(userId, taggedProgress),
            10000,
            'Upload timed out'
          );
        } else {
          // Clear any foreign local data and start fresh (using extracted function)
          const freshProgress = createFreshProgress(userId);
          saveProgress(freshProgress);
        }
      } else {
        // User has cloud data
        if (localBelongsToCurrentUser && !localBelongsToDifferentUser) {
          // Merge local + cloud (this is the same user, using extracted function)
          const mergedProgress = mergeProgress(localProgress, cloudProgress);
          mergedProgress.userId = userId; // Tag with userId
          saveProgress(mergedProgress);
          await withTimeout(
            uploadProgressToCloud(userId, mergedProgress),
            10000,
            'Upload timed out'
          );
        } else {
          // Local belongs to someone else - use cloud data only (using extracted function)
          const cloudAsLocal = cloudToLocal(cloudProgress, userId);
          saveProgress(cloudAsLocal);
        }
      }
    } catch (error) {
      // Silently fail in production - user still has local progress
      if (process.env.NODE_ENV === 'development') {
        console.error('[Dharma Path] Error syncing progress:', error);
      }
    } finally {
      setIsSyncing(false);
    }
  }

  // Upload progress to cloud
  async function uploadProgressToCloud(userId: string, progress: UserProgress) {
    if (!isSupabaseConfigured) return;

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

    if (error && process.env.NODE_ENV === 'development') {
      console.error('[Dharma Path] Error uploading progress:', error);
    }
  }

  // Public sync function
  async function syncProgress() {
    if (user) {
      await syncProgressWithCloud(user.id);
    }
  }

  // Ensure user has an email subscription (auto-subscribe on sign-up)
  async function ensureEmailSubscription(userId: string, email: string) {
    if (!isSupabaseConfigured) return;

    try {
      // Check if subscription already exists
      const { data: existing } = await supabase
        .from('email_subscriptions')
        .select('id')
        .eq('user_id', userId)
        .single();

      if (existing) {
        // Subscription already exists
        return;
      }

      // Create new subscription (auto-subscribed, starting at day 1)
      const { error } = await supabase
        .from('email_subscriptions')
        .insert({
          user_id: userId,
          email: email,
          subscribed: true,
          current_day: 1,
        });

      if (error && process.env.NODE_ENV === 'development') {
        console.error('[Dharma Path] Error creating email subscription:', error);
      }
    } catch (error) {
      // Silently fail - not critical for user experience
      if (process.env.NODE_ENV === 'development') {
        console.error('[Dharma Path] Error ensuring email subscription:', error);
      }
    }
  }

  // Clear cloud progress (for reset functionality)
  // Returns true if successful, false if failed
  async function clearCloudProgress(): Promise<boolean> {
    if (!user || !isSupabaseConfigured) {
      return true; // No user or no cloud = nothing to clear
    }

    try {
      const deletePromise = supabase
        .from('user_progress')
        .delete()
        .eq('user_id', user.id);
      const result = await withTimeout(
        Promise.resolve(deletePromise),
        10000,
        'Delete timed out'
      );
      const { error } = result as { error: PostgrestError | null };

      if (error) {
        if (process.env.NODE_ENV === 'development') {
          console.error('[Dharma Path] Error clearing cloud progress:', error);
        }
        return false;
      }

      return true;
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('[Dharma Path] Error clearing cloud progress:', error);
      }
      return false;
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
      clearCloudProgress,
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
