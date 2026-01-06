/**
 * Sync logic for merging local and cloud progress
 * Extracted for testability
 */

import { UserProgress } from './progress';
import { DbUserProgress } from './supabase';

// Re-export for convenience
export type { DbUserProgress };

/**
 * Merge local and cloud progress, keeping the best of both
 *
 * Strategy:
 * - completedLessons: Union of both (never lose progress)
 * - bookmarks: Union of both (never lose bookmarks)
 * - streak: Keep the higher value
 * - startDate: Keep the earlier date (preserve original start)
 * - lastVisit: Keep the most recent (accurate activity tracking)
 * - currentLevel: Keep the higher value (most progress)
 * - currentLesson: Prefer local if set, otherwise use cloud
 */
export function mergeProgress(local: UserProgress, cloud: DbUserProgress): UserProgress {
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

/**
 * Convert cloud progress to local format
 */
export function cloudToLocal(cloud: DbUserProgress, userId: string): UserProgress {
  return {
    completedLessons: cloud.completed_lessons || [],
    currentLevel: cloud.current_level || 1,
    currentLesson: cloud.current_lesson,
    streak: cloud.streak || 1,
    lastVisit: cloud.last_visit || new Date().toISOString(),
    startDate: cloud.start_date || new Date().toISOString(),
    bookmarks: cloud.bookmarks || [],
    userId,
  };
}

// Fields needed for uploading to cloud (excludes auto-generated fields)
export interface CloudProgressUpload {
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
 * Convert local progress to cloud format for upload
 * Note: Excludes auto-generated fields (id, created_at, updated_at)
 */
export function localToCloud(local: UserProgress, userId: string): CloudProgressUpload {
  return {
    user_id: userId,
    completed_lessons: local.completedLessons,
    current_level: local.currentLevel,
    current_lesson: local.currentLesson,
    streak: local.streak,
    last_visit: local.lastVisit,
    start_date: local.startDate,
    bookmarks: local.bookmarks,
  };
}

/**
 * Check if local progress belongs to the current user
 */
export function isLocalProgressOwnedBy(local: UserProgress, userId: string): boolean {
  return !local.userId || local.userId === userId;
}

/**
 * Check if local progress belongs to a different user
 */
export function isLocalProgressFromDifferentUser(local: UserProgress, userId: string): boolean {
  return !!local.userId && local.userId !== userId;
}

/**
 * Create fresh progress for a new user
 */
export function createFreshProgress(userId: string): UserProgress {
  return {
    completedLessons: [],
    currentLevel: 1,
    currentLesson: null,
    streak: 1,
    lastVisit: new Date().toISOString(),
    startDate: new Date().toISOString(),
    bookmarks: [],
    userId,
  };
}
