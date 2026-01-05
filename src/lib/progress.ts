// Progress tracking using localStorage

const STORAGE_KEY = 'dharma_path_progress';

export interface UserProgress {
  completedLessons: string[]; // Array of lesson IDs
  currentLevel: number;
  currentLesson: string | null;
  streak: number;
  lastVisit: string; // ISO date string
  startDate: string;
  bookmarks: string[]; // Verse references like "2:47"
}

const defaultProgress: UserProgress = {
  completedLessons: [],
  currentLevel: 1,
  currentLesson: null,
  streak: 0,
  lastVisit: new Date().toISOString(),
  startDate: new Date().toISOString(),
  bookmarks: [],
};

// Get progress from localStorage
export function getProgress(): UserProgress {
  if (typeof window === 'undefined') return defaultProgress;
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return defaultProgress;
    
    const progress = JSON.parse(stored) as UserProgress;
    
    // Update streak based on last visit
    const lastVisit = new Date(progress.lastVisit);
    const today = new Date();
    const daysDiff = Math.floor(
      (today.getTime() - lastVisit.getTime()) / (1000 * 60 * 60 * 24)
    );
    
    if (daysDiff === 1) {
      // Consecutive day - increment streak
      progress.streak += 1;
    } else if (daysDiff > 1) {
      // Streak broken
      progress.streak = 1;
    }
    // If same day, keep streak as is
    
    progress.lastVisit = today.toISOString();
    saveProgress(progress);
    
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

// Mark a lesson as completed
export function completeLesson(lessonId: string): UserProgress {
  const progress = getProgress();
  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId);
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
