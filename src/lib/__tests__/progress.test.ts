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
  getLevelProgress,
  getDaysSinceStart,
  isLevelUnlocked,
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
      // All 110 lessons (testing the logic)
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
        // Level 5 (17)
        '5-1-1', '5-1-2', '5-1-3', '5-1-4', '5-1-5', '5-1-6', '5-1-7', '5-1-8',
        '5-2-1', '5-2-2', '5-2-3', '5-2-4', '5-2-5',
        '5-3-1', '5-3-2', '5-3-3', '5-3-4',
        // Level 6 (18)
        '6-1-1', '6-1-2', '6-1-3', '6-1-4',
        '6-2-1', '6-2-2', '6-2-3', '6-2-4',
        '6-3-1', '6-3-2', '6-3-3', '6-3-4',
        '6-4-1', '6-4-2', '6-4-3', '6-4-4', '6-4-5', '6-4-6',
        // Level 7 (10)
        '7-1-1', '7-1-2', '7-1-3', '7-1-4',
        '7-2-1', '7-2-2', '7-2-3',
        '7-3-1', '7-3-2', '7-3-3',
        // Level 8 (6)
        '8-1-1', '8-1-2', '8-1-3',
        '8-2-1', '8-2-2', '8-2-3',
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
      // Complete all 110 lessons
      const allLessons = [
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
        // Level 5 (17)
        '5-1-1', '5-1-2', '5-1-3', '5-1-4', '5-1-5', '5-1-6', '5-1-7', '5-1-8',
        '5-2-1', '5-2-2', '5-2-3', '5-2-4', '5-2-5',
        '5-3-1', '5-3-2', '5-3-3', '5-3-4',
        // Level 6 (18)
        '6-1-1', '6-1-2', '6-1-3', '6-1-4',
        '6-2-1', '6-2-2', '6-2-3', '6-2-4',
        '6-3-1', '6-3-2', '6-3-3', '6-3-4',
        '6-4-1', '6-4-2', '6-4-3', '6-4-4', '6-4-5', '6-4-6',
        // Level 7 (10)
        '7-1-1', '7-1-2', '7-1-3', '7-1-4',
        '7-2-1', '7-2-2', '7-2-3',
        '7-3-1', '7-3-2', '7-3-3',
        // Level 8 (6)
        '8-1-1', '8-1-2', '8-1-3',
        '8-2-1', '8-2-2', '8-2-3',
      ];

      allLessons.forEach(lessonId => completeLesson(lessonId));
      const progress = getProgress();

      expect(progress.currentLesson).toBeNull();
      expect(progress.currentLevel).toBe(8);
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

  describe('findNextIncompleteLesson - Edge Cases', () => {
    it('handles duplicates in completed lessons array', () => {
      // User somehow has duplicates (shouldn't happen, but be robust)
      const completed = ['1-1-1', '1-1-1', '1-1-2', '1-1-2'];
      const result = findNextIncompleteLesson(completed);

      expect(result).toEqual({ lessonId: '1-1-3', levelId: 1 });
    });

    it('handles lessons completed out of order', () => {
      // User completed lessons 1, 3, 5 but not 2, 4
      const completed = ['1-1-1', '1-1-3', '1-2-2'];
      const result = findNextIncompleteLesson(completed);

      // Should return first missing: 1-1-2
      expect(result).toEqual({ lessonId: '1-1-2', levelId: 1 });
    });

    it('ignores invalid lesson IDs in completed array', () => {
      // Array contains some invalid IDs that don't exist in curriculum
      const completed = ['invalid-id', '1-1-1', 'not-a-lesson', '1-1-2'];
      const result = findNextIncompleteLesson(completed);

      // Should still work and return next valid lesson
      expect(result).toEqual({ lessonId: '1-1-3', levelId: 1 });
    });

    it('returns correct level for each level boundary', () => {
      // Test first lesson of each level
      const levelBoundaries = [
        { completed: [], expected: { lessonId: '1-1-1', levelId: 1 } },
        {
          completed: [
            '1-1-1', '1-1-2', '1-1-3',
            '1-2-1', '1-2-2', '1-2-3', '1-2-4', '1-2-5',
            '1-3-1', '1-3-2', '1-3-3', '1-3-4', '1-3-5', '1-3-6',
          ],
          expected: { lessonId: '2-1-1', levelId: 2 }
        },
      ];

      for (const { completed, expected } of levelBoundaries) {
        const result = findNextIncompleteLesson(completed);
        expect(result).toEqual(expected);
      }
    });

    it('handles completing only high-level lessons (gaps at start)', () => {
      // User somehow completed level 8 lessons but not level 1
      const completed = ['8-1-1', '8-1-2', '8-1-3', '8-2-1', '8-2-2', '8-2-3'];
      const result = findNextIncompleteLesson(completed);

      // Should return first lesson since level 1 is incomplete
      expect(result).toEqual({ lessonId: '1-1-1', levelId: 1 });
    });

    it('handles mixed completion across all levels', () => {
      // User completed first lesson of each level
      const completed = ['1-1-1', '2-1-1', '3-1-1', '4-1-1', '5-1-1', '6-1-1', '7-1-1', '8-1-1'];
      const result = findNextIncompleteLesson(completed);

      // Should return second lesson of level 1
      expect(result).toEqual({ lessonId: '1-1-2', levelId: 1 });
    });
  });

  describe('getLevelProgress', () => {
    beforeEach(() => {
      // Ensure clean state for each test
      localStorage.clear();
      sessionStorage.clear();
    });

    it('returns 0% when no lessons completed in level', () => {
      // Explicitly save empty progress to ensure clean state
      const emptyProgress: UserProgress = {
        completedLessons: [],
        currentLevel: 1,
        currentLesson: null,
        streak: 1,
        lastVisit: new Date().toISOString(),
        startDate: new Date().toISOString(),
        bookmarks: [],
      };
      saveProgress(emptyProgress);

      const progress = getLevelProgress(1, 14);
      expect(progress).toBe(0);
    });

    it('returns correct percentage for partial completion', () => {
      // Complete 7 of 14 lessons in level 1 = 50%
      const level1Lessons = ['1-1-1', '1-1-2', '1-1-3', '1-2-1', '1-2-2', '1-2-3', '1-2-4'];
      level1Lessons.forEach(l => completeLesson(l));

      const progress = getLevelProgress(1, 14);
      expect(progress).toBe(50);
    });

    it('returns 100% when all lessons completed in level', () => {
      // Complete all 14 lessons in level 1
      const allLevel1 = [
        '1-1-1', '1-1-2', '1-1-3',
        '1-2-1', '1-2-2', '1-2-3', '1-2-4', '1-2-5',
        '1-3-1', '1-3-2', '1-3-3', '1-3-4', '1-3-5', '1-3-6',
      ];
      allLevel1.forEach(l => completeLesson(l));

      const progress = getLevelProgress(1, 14);
      expect(progress).toBe(100);
    });

    it('only counts lessons from specified level', () => {
      // Complete lessons from different levels
      completeLesson('1-1-1'); // Level 1
      completeLesson('2-1-1'); // Level 2
      completeLesson('3-1-1'); // Level 3

      // Level 1 should only count the 1 lesson from level 1
      const level1Progress = getLevelProgress(1, 14);
      expect(level1Progress).toBe(7); // 1/14 = 7.14% rounded to 7

      // Level 2 should only count the 1 lesson from level 2
      const level2Progress = getLevelProgress(2, 12);
      expect(level2Progress).toBe(8); // 1/12 = 8.33% rounded to 8
    });

    it('handles level with no lessons completed (level 8)', () => {
      // Complete some level 1 lessons but nothing in level 8
      completeLesson('1-1-1');
      completeLesson('1-1-2');

      const progress = getLevelProgress(8, 6);
      expect(progress).toBe(0);
    });

    it('rounds to nearest integer', () => {
      // Complete 1 of 3 = 33.33...%
      completeLesson('8-1-1');
      const progress = getLevelProgress(8, 6);
      expect(progress).toBe(17); // 1/6 = 16.67% rounded to 17
    });
  });

  describe('getDaysSinceStart', () => {
    it('returns 1 for first day', () => {
      // startDate is today
      const today = new Date().toISOString();
      const progress: UserProgress = {
        completedLessons: [],
        currentLevel: 1,
        currentLesson: null,
        streak: 1,
        lastVisit: today,
        startDate: today,
        bookmarks: [],
      };
      saveProgress(progress);

      const days = getDaysSinceStart();
      expect(days).toBe(1);
    });

    it('returns correct count for past start date', () => {
      // Start date was 10 days ago
      const tenDaysAgo = new Date();
      tenDaysAgo.setDate(tenDaysAgo.getDate() - 9); // 9 days ago = day 10

      const progress: UserProgress = {
        completedLessons: [],
        currentLevel: 1,
        currentLesson: null,
        streak: 1,
        lastVisit: new Date().toISOString(),
        startDate: tenDaysAgo.toISOString(),
        bookmarks: [],
      };
      saveProgress(progress);

      const days = getDaysSinceStart();
      expect(days).toBe(10);
    });

    it('handles start date from months ago', () => {
      // Start date was 30 days ago
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 29);

      const progress: UserProgress = {
        completedLessons: [],
        currentLevel: 1,
        currentLesson: null,
        streak: 1,
        lastVisit: new Date().toISOString(),
        startDate: thirtyDaysAgo.toISOString(),
        bookmarks: [],
      };
      saveProgress(progress);

      const days = getDaysSinceStart();
      expect(days).toBe(30);
    });
  });

  describe('isLevelUnlocked', () => {
    it('returns true for level 1 (always unlocked)', () => {
      expect(isLevelUnlocked(1)).toBe(true);
    });

    it('returns true for level 8 (all levels always unlocked)', () => {
      // Per code comment: "All levels are always unlocked"
      expect(isLevelUnlocked(8)).toBe(true);
    });

    it('returns true regardless of requiredLevel parameter', () => {
      // Even if requiredLevel is specified, all levels are unlocked
      expect(isLevelUnlocked(5, 3)).toBe(true);
      expect(isLevelUnlocked(1, 8)).toBe(true);
    });

    it('returns true for any level number', () => {
      // Test all 8 levels
      for (let level = 1; level <= 8; level++) {
        expect(isLevelUnlocked(level)).toBe(true);
      }
    });
  });

  describe('completeLesson - Edge Cases', () => {
    it('handles completing last lesson of curriculum', () => {
      // Complete all lessons except the very last one
      const allButLast = [
        // Level 1-7 (all lessons)
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
        '5-1-1', '5-1-2', '5-1-3', '5-1-4', '5-1-5', '5-1-6', '5-1-7', '5-1-8',
        '5-2-1', '5-2-2', '5-2-3', '5-2-4', '5-2-5',
        '5-3-1', '5-3-2', '5-3-3', '5-3-4',
        '6-1-1', '6-1-2', '6-1-3', '6-1-4',
        '6-2-1', '6-2-2', '6-2-3', '6-2-4',
        '6-3-1', '6-3-2', '6-3-3', '6-3-4',
        '6-4-1', '6-4-2', '6-4-3', '6-4-4', '6-4-5', '6-4-6',
        '7-1-1', '7-1-2', '7-1-3', '7-1-4',
        '7-2-1', '7-2-2', '7-2-3',
        '7-3-1', '7-3-2', '7-3-3',
        '8-1-1', '8-1-2', '8-1-3',
        '8-2-1', '8-2-2', // Missing 8-2-3
      ];

      allButLast.forEach(l => completeLesson(l));

      // Verify next lesson is the last one
      const nextLesson = findNextIncompleteLesson(getProgress().completedLessons);
      expect(nextLesson).toEqual({ lessonId: '8-2-3', levelId: 8 });

      // Complete the last lesson
      const finalProgress = completeLesson('8-2-3');

      expect(finalProgress.currentLesson).toBeNull();
      expect(finalProgress.currentLevel).toBe(8);
      expect(finalProgress.completedLessons).toHaveLength(110);
    });

    it('returns same progress when completing already-completed lesson', () => {
      completeLesson('1-1-1');
      const firstProgress = getProgress();

      completeLesson('1-1-1'); // Complete again
      const secondProgress = getProgress();

      // Progress should be identical
      expect(secondProgress.completedLessons).toEqual(firstProgress.completedLessons);
      expect(secondProgress.currentLesson).toBe(firstProgress.currentLesson);
    });

    it('correctly advances through modules within a level', () => {
      // Complete module 1-1 (3 lessons)
      completeLesson('1-1-1');
      expect(getProgress().currentLesson).toBe('1-1-2');

      completeLesson('1-1-2');
      expect(getProgress().currentLesson).toBe('1-1-3');

      completeLesson('1-1-3');
      // Should advance to module 1-2
      expect(getProgress().currentLesson).toBe('1-2-1');
    });
  });
});
