// Progress tracking using localStorage

const STORAGE_KEY = 'dharma_path_progress';
const STREAK_UPDATED_KEY = 'dharma_path_streak_updated_today';

export interface UserProgress {
  completedLessons: string[]; // Array of lesson IDs
  currentLevel: number;
  currentLesson: string | null;
  streak: number;
  lastVisit: string; // ISO date string
  startDate: string;
  bookmarks: string[]; // Verse references like "2:47"
  userId?: string; // User ID who owns this progress (for multi-user sync)
}

const defaultProgress: UserProgress = {
  completedLessons: [],
  currentLevel: 1,
  currentLesson: null,
  streak: 1,
  lastVisit: new Date().toISOString(),
  startDate: new Date().toISOString(),
  bookmarks: [],
};

// Helper to get today's date string (YYYY-MM-DD) for comparison
function getTodayDateString(): string {
  return new Date().toISOString().split('T')[0];
}

// Check if streak was already updated today (prevents race condition)
function wasStreakUpdatedToday(): boolean {
  if (typeof window === 'undefined') return false;
  const lastUpdate = sessionStorage.getItem(STREAK_UPDATED_KEY);
  return lastUpdate === getTodayDateString();
}

// Mark streak as updated for today
function markStreakUpdated(): void {
  if (typeof window === 'undefined') return;
  sessionStorage.setItem(STREAK_UPDATED_KEY, getTodayDateString());
}

// Get progress from localStorage (pure read - no side effects)
export function getProgress(): UserProgress {
  if (typeof window === 'undefined') return defaultProgress;

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // First visit - initialize with defaults and save
      saveProgress(defaultProgress);
      return defaultProgress;
    }

    return JSON.parse(stored) as UserProgress;
  } catch {
    return defaultProgress;
  }
}

// Update daily visit and streak - call this once on app load
// This is separated from getProgress to prevent race conditions
export function updateDailyVisit(): UserProgress {
  if (typeof window === 'undefined') return defaultProgress;

  // Prevent multiple updates in the same session
  if (wasStreakUpdatedToday()) {
    return getProgress();
  }

  try {
    const progress = getProgress();
    const lastVisit = new Date(progress.lastVisit);
    const today = new Date();

    // Compare dates without time
    const lastVisitDate = lastVisit.toISOString().split('T')[0];
    const todayDate = today.toISOString().split('T')[0];

    if (lastVisitDate === todayDate) {
      // Same day - no streak update needed
      return progress;
    }

    // Calculate days difference
    const daysDiff = Math.floor(
      (today.getTime() - lastVisit.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (daysDiff === 1) {
      // Consecutive day - increment streak
      progress.streak += 1;
    } else if (daysDiff > 1) {
      // Streak broken - reset to 1
      progress.streak = 1;
    }

    progress.lastVisit = today.toISOString();
    saveProgress(progress);
    markStreakUpdated();

    return progress;
  } catch {
    return defaultProgress;
  }
}

// Save progress to localStorage
export function saveProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

// Find the next incomplete lesson in the curriculum
// Returns { lessonId, levelId } or null if all completed
export function findNextIncompleteLesson(completedLessons: string[]): { lessonId: string; levelId: number } | null {
  // Import curriculum dynamically to avoid circular dependencies
  // Lesson IDs follow pattern: "level-module-lesson" (e.g., "1-1-1")
  // We iterate through all possible lessons in order
  const lessonOrder = [
    // Level 1: The Foundation (14 lessons)
    '1-1-1', '1-1-2', '1-1-3', // Module 1-1: What is Hinduism?
    '1-2-1', '1-2-2', '1-2-3', '1-2-4', '1-2-5', // Module 1-2: Core Concepts
    '1-3-1', '1-3-2', '1-3-3', '1-3-4', '1-3-5', '1-3-6', // Module 1-3: The Divine
    // Level 2: The Stories (12 lessons)
    '2-1-1', '2-1-2', '2-1-3', '2-1-4', '2-1-5', // Module 2-1: Ramayana
    '2-2-1', '2-2-2', '2-2-3', '2-2-4', '2-2-5', '2-2-6', '2-2-7', // Module 2-2: Mahabharata
    // Level 3: The Gita (17 lessons)
    '3-1-1', '3-1-2', // Module 3-1: Setting the Scene
    '3-2-1', '3-2-2', '3-2-3', '3-2-4', '3-2-5', '3-2-6', '3-2-7', '3-2-8', '3-2-9', '3-2-10', '3-2-11', '3-2-12', // Module 3-2: Journey
    '3-3-1', '3-3-2', '3-3-3', // Module 3-3: Three Paths
    // Level 4: Going Deeper (16 lessons)
    '4-1-1', '4-1-2', '4-1-3', '4-1-4', '4-1-5', // Module 4-1: Upanishads
    '4-2-1', '4-2-2', '4-2-3', '4-2-4', '4-2-5', // Module 4-2: Four Traditions
    '4-3-1', '4-3-2', '4-3-3', // Module 4-3: Vedas
    '4-4-1', '4-4-2', '4-4-3', // Module 4-4: Hindu Practice
  ];

  for (const lessonId of lessonOrder) {
    if (!completedLessons.includes(lessonId)) {
      // Extract level from lesson ID (first character)
      const levelId = parseInt(lessonId.split('-')[0]);
      return { lessonId, levelId };
    }
  }

  // All lessons completed
  return null;
}

// Mark a lesson as completed and update currentLesson to the next one
export function completeLesson(lessonId: string): UserProgress {
  const progress = getProgress();
  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId);

    // Find and set the next lesson to continue
    const nextLesson = findNextIncompleteLesson(progress.completedLessons);
    if (nextLesson) {
      progress.currentLesson = nextLesson.lessonId;
      progress.currentLevel = nextLesson.levelId;
    } else {
      // All lessons completed
      progress.currentLesson = null;
      progress.currentLevel = 4; // Stay on last level
    }

    saveProgress(progress);
  }
  return progress;
}

// Check if a lesson is completed
export function isLessonCompleted(lessonId: string): boolean {
  const progress = getProgress();
  return progress.completedLessons.includes(lessonId);
}

// Calculate level progress percentage
export function getLevelProgress(levelId: number, totalLessons: number): number {
  const progress = getProgress();
  const completedInLevel = progress.completedLessons.filter(
    id => id.startsWith(`${levelId}-`)
  ).length;
  return Math.round((completedInLevel / totalLessons) * 100);
}

// Check if a level is unlocked
// All levels are always unlocked - users have full autonomy to explore any content
// This aligns with Hinduism's philosophy of multiple valid paths for different seekers
export function isLevelUnlocked(levelId: number, requiredLevel?: number): boolean {
  return true;
}

// Bookmark a verse
export function toggleBookmark(verseRef: string): boolean {
  const progress = getProgress();
  const index = progress.bookmarks.indexOf(verseRef);
  
  if (index > -1) {
    progress.bookmarks.splice(index, 1);
    saveProgress(progress);
    return false; // Removed
  } else {
    progress.bookmarks.push(verseRef);
    saveProgress(progress);
    return true; // Added
  }
}

// Check if a verse is bookmarked
export function isBookmarked(verseRef: string): boolean {
  const progress = getProgress();
  return progress.bookmarks.includes(verseRef);
}

// Get days since started
export function getDaysSinceStart(): number {
  const progress = getProgress();
  const start = new Date(progress.startDate);
  const today = new Date();
  return Math.floor((today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
}

// Reset all progress (for testing)
export function resetProgress(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}
