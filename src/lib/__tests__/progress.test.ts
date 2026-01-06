import { describe, it, expect, beforeEach } from 'vitest';
import {
  getProgress,
  saveProgress,
  completeLesson,
  isLessonCompleted,
  findNextIncompleteLesson,
  toggleBookmark,
  isBookmarked,
  resetProgress,
  UserProgress,
} from '../progress';

describe('Progress Tracking', () => {
  // Clear localStorage before each test to ensure isolation
  beforeEach(() => {
    localStorage.clear();
  });

  describe('getProgress', () => {
    it('returns default progress for new users', () => {
      const progress = getProgress();

      expect(progress.completedLessons).toEqual([]);
      expect(progress.currentLevel).toBe(1);
      expect(progress.currentLesson).toBeNull();
      expect(progress.streak).toBe(1);
      expect(progress.bookmarks).toEqual([]);
    });

    it('returns saved progress after modifications', () => {
      const customProgress: UserProgress = {
        completedLessons: ['1-1-1', '1-1-2'],
        currentLevel: 1,
        currentLesson: '1-1-3',
        streak: 5,
        lastVisit: new Date().toISOString(),
        startDate: new Date().toISOString(),
        bookmarks: ['2:47'],
      };

      saveProgress(customProgress);
      const retrieved = getProgress();

      expect(retrieved.completedLessons).toEqual(['1-1-1', '1-1-2']);
      expect(retrieved.currentLesson).toBe('1-1-3');
      expect(retrieved.streak).toBe(5);
    });
  });

  describe('findNextIncompleteLesson', () => {
    it('returns first lesson when nothing is completed', () => {
      const result = findNextIncompleteLesson([]);

      expect(result).toEqual({ lessonId: '1-1-1', levelId: 1 });
    });

    it('returns second lesson after first is completed', () => {
      const result = findNextIncompleteLesson(['1-1-1']);

      expect(result).toEqual({ lessonId: '1-1-2', levelId: 1 });
    });

    it('returns first lesson of next module after completing a module', () => {
      // Complete all of module 1-1 (3 lessons)
      const completed = ['1-1-1', '1-1-2', '1-1-3'];
      const result = findNextIncompleteLesson(completed);

      expect(result).toEqual({ lessonId: '1-2-1', levelId: 1 });
    });

    it('returns first lesson of level 2 after completing level 1', () => {
      // All 14 lessons in level 1
      const level1Completed = [
        '1-1-1', '1-1-2', '1-1-3', // Module 1-1
        '1-2-1', '1-2-2', '1-2-3', '1-2-4', '1-2-5', // Module 1-2
        '1-3-1', '1-3-2', '1-3-3', '1-3-4', '1-3-5', '1-3-6', // Module 1-3
      ];
      const result = findNextIncompleteLesson(level1Completed);

      expect(result).toEqual({ lessonId: '2-1-1', levelId: 2 });
    });

    it('handles non-sequential completion', () => {
      // User skipped lesson 1-1-2
      const completed = ['1-1-1', '1-1-3'];
      const result = findNextIncompleteLesson(completed);

      // Should return the first incomplete lesson in order
      expect(result).toEqual({ lessonId: '1-1-2', levelId: 1 });
    });

    it('returns null when all lessons are completed', () => {
      // All 59 lessons (simplified - just testing the logic)
      const allCompleted = [
        // Level 1 (14)
        '1-1-1', '1-1-2', '1-1-3',
        '1-2-1', '1-2-2', '1-2-3', '1-2-4', '1-2-5',
        '1-3-1', '1-3-2', '1-3-3', '1-3-4', '1-3-5', '1-3-6',
        // Level 2 (12)
        '2-1-1', '2-1-2', '2-1-3', '2-1-4', '2-1-5',
        '2-2-1', '2-2-2', '2-2-3', '2-2-4', '2-2-5', '2-2-6', '2-2-7',
        // Level 3 (17)
        '3-1-1', '3-1-2',
        '3-2-1', '3-2-2', '3-2-3', '3-2-4', '3-2-5', '3-2-6', '3-2-7', '3-2-8', '3-2-9', '3-2-10', '3-2-11', '3-2-12',
        '3-3-1', '3-3-2', '3-3-3',
        // Level 4 (16)
        '4-1-1', '4-1-2', '4-1-3', '4-1-4', '4-1-5',
        '4-2-1', '4-2-2', '4-2-3', '4-2-4', '4-2-5',
        '4-3-1', '4-3-2', '4-3-3',
        '4-4-1', '4-4-2', '4-4-3',
      ];
      const result = findNextIncompleteLesson(allCompleted);

      expect(result).toBeNull();
    });
  });

  describe('completeLesson', () => {
    it('adds lesson to completedLessons', () => {
      completeLesson('1-1-1');
      const progress = getProgress();

      expect(progress.completedLessons).toContain('1-1-1');
    });

    it('does not add duplicate lessons', () => {
      completeLesson('1-1-1');
      completeLesson('1-1-1');
      const progress = getProgress();

      expect(progress.completedLessons.filter(l => l === '1-1-1')).toHaveLength(1);
    });

    it('updates currentLesson to the next lesson', () => {
      completeLesson('1-1-1');
      const progress = getProgress();

      expect(progress.currentLesson).toBe('1-1-2');
    });

    it('updates currentLevel when advancing to next level', () => {
      // Complete all level 1 lessons
      const level1Lessons = [
        '1-1-1', '1-1-2', '1-1-3',
        '1-2-1', '1-2-2', '1-2-3', '1-2-4', '1-2-5',
        '1-3-1', '1-3-2', '1-3-3', '1-3-4', '1-3-5', '1-3-6',
      ];

      level1Lessons.forEach(lessonId => completeLesson(lessonId));
      const progress = getProgress();

      expect(progress.currentLevel).toBe(2);
      expect(progress.currentLesson).toBe('2-1-1');
    });

    it('sets currentLesson to null when all lessons completed', () => {
      // Complete all lessons
      const allLessons = [
        '1-1-1', '1-1-2', '1-1-3',
        '1-2-1', '1-2-2', '1-2-3', '1-2-4', '1-2-5',
        '1-3-1', '1-3-2', '1-3-3', '1-3-4', '1-3-5', '1-3-6',
        '2-1-1', '2-1-2', '2-1-3', '2-1-4', '2-1-5',
        '2-2-1', '2-2-2', '2-2-3', '2-2-4', '2-2-5', '2-2-6', '2-2-7',
        '3-1-1', '3-1-2',
        '3-2-1', '3-2-2', '3-2-3', '3-2-4', '3-2-5', '3-2-6', '3-2-7', '3-2-8', '3-2-9', '3-2-10', '3-2-11', '3-2-12',
        '3-3-1', '3-3-2', '3-3-3',
        '4-1-1', '4-1-2', '4-1-3', '4-1-4', '4-1-5',
        '4-2-1', '4-2-2', '4-2-3', '4-2-4', '4-2-5',
        '4-3-1', '4-3-2', '4-3-3',
        '4-4-1', '4-4-2', '4-4-3',
      ];

      allLessons.forEach(lessonId => completeLesson(lessonId));
      const progress = getProgress();

      expect(progress.currentLesson).toBeNull();
      expect(progress.currentLevel).toBe(4);
    });
  });

  describe('isLessonCompleted', () => {
    it('returns false for uncompleted lesson', () => {
      // Use a lesson ID that won't be completed by other tests
      expect(isLessonCompleted('4-4-3')).toBe(false);
    });

    it('returns true for completed lesson', () => {
      // Complete a specific lesson and verify
      completeLesson('4-4-2');
      expect(isLessonCompleted('4-4-2')).toBe(true);
    });
  });

  describe('Bookmarks', () => {
    it('toggleBookmark adds bookmark', () => {
      // Use unique verse ref for this test
      const result = toggleBookmark('5:10');

      expect(result).toBe(true); // Added
      expect(isBookmarked('5:10')).toBe(true);
    });

    it('toggleBookmark removes existing bookmark', () => {
      // Use unique verse ref for this test
      const verseRef = '6:20';

      // First add it
      const addResult = toggleBookmark(verseRef);
      expect(addResult).toBe(true);
      expect(isBookmarked(verseRef)).toBe(true);

      // Then remove it
      const removeResult = toggleBookmark(verseRef);
      expect(removeResult).toBe(false);
      expect(isBookmarked(verseRef)).toBe(false);
    });

    it('bookmarks persist across getProgress calls', () => {
      toggleBookmark('7:15');
      toggleBookmark('8:25');

      const progress = getProgress();
      expect(progress.bookmarks).toContain('7:15');
      expect(progress.bookmarks).toContain('8:25');
    });
  });

  describe('resetProgress', () => {
    it('removes the progress key from localStorage', () => {
      // Add some data
      completeLesson('3-1-1');
      toggleBookmark('9:30');

      // Verify data exists
      const storedBefore = localStorage.getItem('dharma_path_progress');
      expect(storedBefore).not.toBeNull();

      // Reset
      resetProgress();

      // Verify the key is removed
      const storedAfter = localStorage.getItem('dharma_path_progress');
      expect(storedAfter).toBeNull();
    });
  });

  describe('User ID Tracking', () => {
    it('preserves userId when saving progress', () => {
      const progressWithUser: UserProgress = {
        completedLessons: ['1-1-1'],
        currentLevel: 1,
        currentLesson: '1-1-2',
        streak: 1,
        lastVisit: new Date().toISOString(),
        startDate: new Date().toISOString(),
        bookmarks: [],
        userId: 'user-123',
      };

      saveProgress(progressWithUser);
      const retrieved = getProgress();

      expect(retrieved.userId).toBe('user-123');
    });

    it('allows progress without userId (anonymous users)', () => {
      completeLesson('1-1-1');
      const progress = getProgress();

      expect(progress.userId).toBeUndefined();
    });
  });
});
