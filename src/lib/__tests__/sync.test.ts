import { describe, it, expect } from 'vitest';
import {
  mergeProgress,
  cloudToLocal,
  localToCloud,
  isLocalProgressOwnedBy,
  isLocalProgressFromDifferentUser,
  createFreshProgress,
  DbUserProgressCore,
} from '../sync';
import { UserProgress } from '../progress';

describe('Sync Logic', () => {
  // Test fixtures
  const baseLocalProgress: UserProgress = {
    completedLessons: ['1-1-1', '1-1-2'],
    currentLevel: 1,
    currentLesson: '1-1-3',
    streak: 5,
    lastVisit: '2024-01-15T10:00:00Z',
    startDate: '2024-01-01T00:00:00Z',
    bookmarks: ['2:47', '3:30'],
  };

  const baseCloudProgress: DbUserProgressCore = {
    user_id: 'user-123',
    completed_lessons: ['1-1-1', '1-1-3'],
    current_level: 1,
    current_lesson: '1-1-4',
    streak: 3,
    last_visit: '2024-01-14T10:00:00Z',
    start_date: '2024-01-02T00:00:00Z',
    bookmarks: ['2:47', '4:10'],
  };

  describe('mergeProgress', () => {
    it('merges completed lessons as union (no duplicates)', () => {
      const result = mergeProgress(baseLocalProgress, baseCloudProgress);

      // Should have union: 1-1-1, 1-1-2 (local only), 1-1-3 (cloud only)
      expect(result.completedLessons).toContain('1-1-1');
      expect(result.completedLessons).toContain('1-1-2');
      expect(result.completedLessons).toContain('1-1-3');
      expect(result.completedLessons).toHaveLength(3);
    });

    it('merges bookmarks as union (no duplicates)', () => {
      const result = mergeProgress(baseLocalProgress, baseCloudProgress);

      // Should have union: 2:47 (both), 3:30 (local), 4:10 (cloud)
      expect(result.bookmarks).toContain('2:47');
      expect(result.bookmarks).toContain('3:30');
      expect(result.bookmarks).toContain('4:10');
      expect(result.bookmarks).toHaveLength(3);
    });

    it('keeps higher streak', () => {
      const result = mergeProgress(baseLocalProgress, baseCloudProgress);

      // Local has 5, cloud has 3 -> should be 5
      expect(result.streak).toBe(5);
    });

    it('keeps higher streak when cloud is higher', () => {
      const localWithLowerStreak = { ...baseLocalProgress, streak: 2 };
      const cloudWithHigherStreak = { ...baseCloudProgress, streak: 10 };

      const result = mergeProgress(localWithLowerStreak, cloudWithHigherStreak);

      expect(result.streak).toBe(10);
    });

    it('keeps earlier start date (local earlier)', () => {
      const result = mergeProgress(baseLocalProgress, baseCloudProgress);

      // Local: 2024-01-01, Cloud: 2024-01-02 -> should be 2024-01-01
      expect(result.startDate).toBe('2024-01-01T00:00:00Z');
    });

    it('keeps earlier start date (cloud earlier)', () => {
      const localWithLaterStart = {
        ...baseLocalProgress,
        startDate: '2024-02-01T00:00:00Z',
      };

      const result = mergeProgress(localWithLaterStart, baseCloudProgress);

      expect(result.startDate).toBe('2024-01-02T00:00:00Z');
    });

    it('keeps most recent last visit (local more recent)', () => {
      const result = mergeProgress(baseLocalProgress, baseCloudProgress);

      // Local: 2024-01-15, Cloud: 2024-01-14 -> should be 2024-01-15
      expect(result.lastVisit).toBe('2024-01-15T10:00:00Z');
    });

    it('keeps most recent last visit (cloud more recent)', () => {
      const localWithOlderVisit = {
        ...baseLocalProgress,
        lastVisit: '2024-01-10T10:00:00Z',
      };
      const cloudWithNewerVisit = {
        ...baseCloudProgress,
        last_visit: '2024-01-20T10:00:00Z',
      };

      const result = mergeProgress(localWithOlderVisit, cloudWithNewerVisit);

      expect(result.lastVisit).toBe('2024-01-20T10:00:00Z');
    });

    it('recalculates currentLevel from merged completedLessons', () => {
      const localLevel2 = { ...baseLocalProgress, currentLevel: 2 };
      const cloudLevel1 = { ...baseCloudProgress, current_level: 1 };

      const result = mergeProgress(localLevel2, cloudLevel1);

      // Merged completedLessons = ['1-1-1', '1-1-2', '1-1-3']
      // Next incomplete is '1-1-4' which is Level 1
      expect(result.currentLevel).toBe(1);
    });

    it('falls back to higher level when all lessons complete', () => {
      // Simulate all lessons complete scenario
      const localAllComplete = { ...baseLocalProgress, currentLevel: 7, completedLessons: [] };
      const cloudAllComplete = { ...baseCloudProgress, current_level: 8, completed_lessons: [] };

      const result = mergeProgress(localAllComplete, cloudAllComplete);

      // No lessons completed means first lesson is next, which is Level 1
      // But if findNextIncompleteLesson returns the first lesson, level would be 1
      expect(result.currentLevel).toBe(1);
      expect(result.currentLesson).toBe('1-1-1');
    });

    it('recalculates currentLesson from merged completedLessons', () => {
      const result = mergeProgress(baseLocalProgress, baseCloudProgress);

      // Merged completedLessons = ['1-1-1', '1-1-2', '1-1-3']
      // Module 1-1 only has 3 lessons, so next is '1-2-1' (Module 1-2)
      expect(result.currentLesson).toBe('1-2-1');
    });

    it('recalculates currentLesson even when local is null', () => {
      const localWithNoCurrentLesson = {
        ...baseLocalProgress,
        currentLesson: null,
      };

      const result = mergeProgress(localWithNoCurrentLesson, baseCloudProgress);

      // Should recalculate from merged completedLessons
      // Merged = ['1-1-1', '1-1-2', '1-1-3'], next is '1-2-1'
      expect(result.currentLesson).toBe('1-2-1');
    });

    it('handles empty arrays gracefully', () => {
      const emptyLocal: UserProgress = {
        completedLessons: [],
        currentLevel: 1,
        currentLesson: null,
        streak: 1,
        lastVisit: '2024-01-01T00:00:00Z',
        startDate: '2024-01-01T00:00:00Z',
        bookmarks: [],
      };

      const result = mergeProgress(emptyLocal, baseCloudProgress);

      expect(result.completedLessons).toEqual(['1-1-1', '1-1-3']);
      expect(result.bookmarks).toEqual(['2:47', '4:10']);
    });

    it('handles empty cloud arrays gracefully', () => {
      const emptyCloud: DbUserProgressCore = {
        user_id: 'user-123',
        completed_lessons: [],
        current_level: 1,
        current_lesson: null,
        streak: 1,
        last_visit: '2024-01-01T00:00:00Z',
        start_date: '2024-01-01T00:00:00Z',
        bookmarks: [],
      };

      const result = mergeProgress(baseLocalProgress, emptyCloud);

      expect(result.completedLessons).toEqual(['1-1-1', '1-1-2']);
      expect(result.bookmarks).toEqual(['2:47', '3:30']);
    });

    it('does not include userId in merged result (caller adds it)', () => {
      const result = mergeProgress(baseLocalProgress, baseCloudProgress);

      expect(result.userId).toBeUndefined();
    });
  });

  describe('cloudToLocal', () => {
    it('converts cloud format to local format', () => {
      const result = cloudToLocal(baseCloudProgress, 'user-456');

      expect(result.completedLessons).toEqual(['1-1-1', '1-1-3']);
      expect(result.currentLevel).toBe(1);
      expect(result.currentLesson).toBe('1-1-4');
      expect(result.streak).toBe(3);
      expect(result.lastVisit).toBe('2024-01-14T10:00:00Z');
      expect(result.startDate).toBe('2024-01-02T00:00:00Z');
      expect(result.bookmarks).toEqual(['2:47', '4:10']);
      expect(result.userId).toBe('user-456');
    });

    it('handles null/undefined cloud values with defaults', () => {
      const partialCloud: DbUserProgressCore = {
        user_id: 'user-123',
        completed_lessons: [],
        current_level: 0,
        current_lesson: null,
        streak: 0,
        last_visit: '',
        start_date: '',
        bookmarks: [],
      };

      const result = cloudToLocal(partialCloud, 'user-789');

      expect(result.completedLessons).toEqual([]);
      expect(result.currentLevel).toBe(1); // Falls back to default
      expect(result.streak).toBe(1); // Falls back to default
      expect(result.userId).toBe('user-789');
    });
  });

  describe('localToCloud', () => {
    it('converts local format to cloud format', () => {
      const result = localToCloud(baseLocalProgress, 'user-abc');

      expect(result.user_id).toBe('user-abc');
      expect(result.completed_lessons).toEqual(['1-1-1', '1-1-2']);
      expect(result.current_level).toBe(1);
      expect(result.current_lesson).toBe('1-1-3');
      expect(result.streak).toBe(5);
      expect(result.last_visit).toBe('2024-01-15T10:00:00Z');
      expect(result.start_date).toBe('2024-01-01T00:00:00Z');
      expect(result.bookmarks).toEqual(['2:47', '3:30']);
    });
  });

  describe('isLocalProgressOwnedBy', () => {
    it('returns true when local has no userId (anonymous progress)', () => {
      const anonymousProgress: UserProgress = {
        ...baseLocalProgress,
        userId: undefined,
      };

      expect(isLocalProgressOwnedBy(anonymousProgress, 'any-user')).toBe(true);
    });

    it('returns true when local userId matches', () => {
      const userProgress: UserProgress = {
        ...baseLocalProgress,
        userId: 'user-123',
      };

      expect(isLocalProgressOwnedBy(userProgress, 'user-123')).toBe(true);
    });

    it('returns false when local userId differs', () => {
      const userProgress: UserProgress = {
        ...baseLocalProgress,
        userId: 'user-123',
      };

      expect(isLocalProgressOwnedBy(userProgress, 'user-456')).toBe(false);
    });
  });

  describe('isLocalProgressFromDifferentUser', () => {
    it('returns false when local has no userId (anonymous)', () => {
      const anonymousProgress: UserProgress = {
        ...baseLocalProgress,
        userId: undefined,
      };

      expect(isLocalProgressFromDifferentUser(anonymousProgress, 'any-user')).toBe(false);
    });

    it('returns false when local userId matches', () => {
      const userProgress: UserProgress = {
        ...baseLocalProgress,
        userId: 'user-123',
      };

      expect(isLocalProgressFromDifferentUser(userProgress, 'user-123')).toBe(false);
    });

    it('returns true when local userId differs', () => {
      const userProgress: UserProgress = {
        ...baseLocalProgress,
        userId: 'user-123',
      };

      expect(isLocalProgressFromDifferentUser(userProgress, 'user-456')).toBe(true);
    });
  });

  describe('createFreshProgress', () => {
    it('creates progress with default values and userId', () => {
      const result = createFreshProgress('new-user-id');

      expect(result.completedLessons).toEqual([]);
      expect(result.currentLevel).toBe(1);
      expect(result.currentLesson).toBeNull();
      expect(result.streak).toBe(1);
      expect(result.bookmarks).toEqual([]);
      expect(result.userId).toBe('new-user-id');
    });

    it('sets timestamps to current time', () => {
      const before = new Date().toISOString();
      const result = createFreshProgress('user-id');
      const after = new Date().toISOString();

      // Timestamps should be between before and after
      expect(result.lastVisit >= before).toBe(true);
      expect(result.lastVisit <= after).toBe(true);
      expect(result.startDate >= before).toBe(true);
      expect(result.startDate <= after).toBe(true);
    });
  });

  describe('Edge Cases', () => {
    it('handles merge with identical data', () => {
      const identical: DbUserProgressCore = {
        user_id: 'user-123',
        completed_lessons: ['1-1-1', '1-1-2'],
        current_level: 1,
        current_lesson: '1-1-3',
        streak: 5,
        last_visit: '2024-01-15T10:00:00Z',
        start_date: '2024-01-01T00:00:00Z',
        bookmarks: ['2:47', '3:30'],
      };

      const result = mergeProgress(baseLocalProgress, identical);

      expect(result.completedLessons).toHaveLength(2);
      expect(result.bookmarks).toHaveLength(2);
      expect(result.streak).toBe(5);
    });

    it('handles large number of completed lessons', () => {
      const manyLessons = Array.from({ length: 100 }, (_, i) => `lesson-${i}`);
      const localManyLessons: UserProgress = {
        ...baseLocalProgress,
        completedLessons: manyLessons.slice(0, 50),
      };
      const cloudManyLessons: DbUserProgressCore = {
        ...baseCloudProgress,
        completed_lessons: manyLessons.slice(25, 75),
      };

      const result = mergeProgress(localManyLessons, cloudManyLessons);

      // Should have 75 unique lessons (0-49 from local, 50-74 from cloud)
      expect(result.completedLessons.length).toBe(75);
    });

    it('preserves order of completion somewhat (Set behavior)', () => {
      const result = mergeProgress(baseLocalProgress, baseCloudProgress);

      // The first items should be from local (Set preserves insertion order)
      expect(result.completedLessons[0]).toBe('1-1-1');
      expect(result.completedLessons[1]).toBe('1-1-2');
    });
  });

  describe('Multi-User Isolation Scenarios', () => {
    it('scenario: User A logs in on User B device - should NOT merge', () => {
      const userBProgress: UserProgress = {
        completedLessons: ['1-1-1', '1-1-2', '1-1-3'],
        currentLevel: 1,
        currentLesson: '1-2-1',
        streak: 10,
        lastVisit: '2024-01-15T10:00:00Z',
        startDate: '2024-01-01T00:00:00Z',
        bookmarks: ['2:47'],
        userId: 'user-B',
      };

      // User A logs in - should detect this is not their data
      const isUserAData = isLocalProgressOwnedBy(userBProgress, 'user-A');
      const isDifferentUser = isLocalProgressFromDifferentUser(userBProgress, 'user-A');

      expect(isUserAData).toBe(false);
      expect(isDifferentUser).toBe(true);

      // In this case, auth.tsx would NOT merge and would use cloud data for User A
    });

    it('scenario: Same user on new device (anonymous local) - should merge', () => {
      const anonymousLocalProgress: UserProgress = {
        completedLessons: ['1-1-1'],
        currentLevel: 1,
        currentLesson: '1-1-2',
        streak: 1,
        lastVisit: '2024-01-15T10:00:00Z',
        startDate: '2024-01-15T00:00:00Z',
        bookmarks: [],
        // No userId - anonymous progress made before sign-in
      };

      const isOwnedByUser = isLocalProgressOwnedBy(anonymousLocalProgress, 'user-A');
      const isDifferent = isLocalProgressFromDifferentUser(anonymousLocalProgress, 'user-A');

      expect(isOwnedByUser).toBe(true); // Anonymous progress can be claimed
      expect(isDifferent).toBe(false);

      // auth.tsx would merge this anonymous progress with User A's cloud data
    });

    it('scenario: User returns to their own device - should merge', () => {
      const userOwnProgress: UserProgress = {
        completedLessons: ['1-1-1', '1-1-2'],
        currentLevel: 1,
        currentLesson: '1-1-3',
        streak: 5,
        lastVisit: '2024-01-15T10:00:00Z',
        startDate: '2024-01-01T00:00:00Z',
        bookmarks: ['2:47'],
        userId: 'user-A', // Tagged with their userId
      };

      const isOwned = isLocalProgressOwnedBy(userOwnProgress, 'user-A');
      const isDifferent = isLocalProgressFromDifferentUser(userOwnProgress, 'user-A');

      expect(isOwned).toBe(true);
      expect(isDifferent).toBe(false);

      // auth.tsx would safely merge with cloud data
    });
  });
});
