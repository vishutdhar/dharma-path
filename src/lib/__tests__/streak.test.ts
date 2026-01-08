/**
 * Tests for streak calculation logic in updateDailyVisit()
 * These tests verify the timezone-related bugs identified in the analysis
 */

import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { updateDailyVisit, UserProgress } from '../progress';

// Helper to create a progress object
function createProgress(overrides: Partial<{
  streak: number;
  lastVisit: string;
  startDate: string;
}> = {}): UserProgress {
  return {
    completedLessons: [],
    currentLevel: 1,
    currentLesson: null,
    streak: overrides.streak ?? 5,
    lastVisit: overrides.lastVisit ?? new Date().toISOString(),
    startDate: overrides.startDate ?? '2024-01-01T00:00:00.000Z',
    bookmarks: [],
  };
}

describe('Streak Calculation - Bug Verification', () => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('Consecutive days correctly counted (local calendar days)', () => {
    it('visits on consecutive calendar days should increment streak', () => {
      // Using midday times for timezone independence
      // Jan 2 noon -> Jan 3 noon = consecutive calendar days = increment
      const lastVisit = new Date('2024-01-02T12:00:00.000Z'); // Jan 2 noon UTC
      const now = new Date('2024-01-03T12:00:00.000Z');       // Jan 3 noon UTC

      // Verify our test setup: dates are different
      expect(lastVisit.toISOString().split('T')[0]).toBe('2024-01-02');
      expect(now.toISOString().split('T')[0]).toBe('2024-01-03');

      // Set up localStorage with last visit
      const progress = createProgress({ streak: 5, lastVisit: lastVisit.toISOString() });
      localStorage.setItem('dharma_path_progress', JSON.stringify(progress));

      // Set system time to "now"
      vi.setSystemTime(now);

      // Call updateDailyVisit
      const result = updateDailyVisit();

      // CORRECT BEHAVIOR: streak should be 6 (consecutive calendar days)
      expect(result.streak).toBe(6);
    });
  });

  describe('Missed day correctly detected (local calendar days)', () => {
    it('visits spanning a missed calendar day should reset streak', () => {
      // Scenario: User visits Jan 2, SKIPS Jan 3 entirely, visits Jan 4
      // Using midday times to avoid timezone edge cases
      // This is clearly 2 calendar days apart in any timezone

      const lastVisit = new Date('2024-01-02T12:00:00.000Z'); // Jan 2 noon UTC
      const now = new Date('2024-01-04T12:00:00.000Z');       // Jan 4 noon UTC (48h later)

      // Jan 2 → Jan 4 = 2 calendar days apart = missed a day = RESET

      const progress = createProgress({ streak: 5, lastVisit: lastVisit.toISOString() });
      localStorage.setItem('dharma_path_progress', JSON.stringify(progress));

      vi.setSystemTime(now);

      const result = updateDailyVisit();

      // CORRECT BEHAVIOR: streak should be 1 (reset - missed Jan 3)
      expect(result.streak).toBe(1);
    });
  });

  describe('State consistency (no corruption)', () => {
    it('consecutive calendar days: both streak and lastVisit updated correctly', () => {
      // Using midday times for timezone independence
      const lastVisit = new Date('2024-01-02T12:00:00.000Z'); // Jan 2 noon UTC
      const now = new Date('2024-01-03T12:00:00.000Z');       // Jan 3 noon UTC (24 hours later)

      const progress = createProgress({ streak: 5, lastVisit: lastVisit.toISOString() });
      localStorage.setItem('dharma_path_progress', JSON.stringify(progress));

      vi.setSystemTime(now);

      const result = updateDailyVisit();

      // CORRECT: Streak incremented for consecutive calendar day
      expect(result.streak).toBe(6);

      // lastVisit updated to reflect the new visit
      expect(result.lastVisit).toBe(now.toISOString());
    });

    it('user visits 3 consecutive days and gets correct +2 streak', () => {
      // Using midday times for timezone independence
      const day1 = new Date('2024-01-02T12:00:00.000Z'); // Jan 2 noon
      const progress = createProgress({ streak: 5, lastVisit: day1.toISOString() });
      localStorage.setItem('dharma_path_progress', JSON.stringify(progress));

      // Day 2: Jan 3 noon - consecutive calendar day
      const day2 = new Date('2024-01-03T12:00:00.000Z');
      vi.setSystemTime(day2);
      const result1 = updateDailyVisit();
      expect(result1.streak).toBe(6); // CORRECT: incremented

      // Clear session flag for next "day"
      sessionStorage.clear();

      // Day 3: Jan 4 noon - consecutive calendar day
      const day3 = new Date('2024-01-04T12:00:00.000Z');
      vi.setSystemTime(day3);
      const result2 = updateDailyVisit();

      // CORRECT: User visited 3 consecutive days, streak = 7 (5 + 2)
      expect(result2.streak).toBe(7);
    });
  });

  describe('Basic streak functionality (should work correctly)', () => {
    it('increments streak for exactly 24 hours apart', () => {
      const lastVisit = new Date('2024-01-02T12:00:00.000Z');
      const now = new Date('2024-01-03T12:00:00.000Z'); // Exactly 24 hours

      const progress = createProgress({ streak: 5, lastVisit: lastVisit.toISOString() });
      localStorage.setItem('dharma_path_progress', JSON.stringify(progress));

      vi.setSystemTime(now);

      const result = updateDailyVisit();

      expect(result.streak).toBe(6);
    });

    it('increments streak for consecutive calendar days (varying hours)', () => {
      // Test that consecutive calendar days increment streak regardless of hours
      // Using midday times to be timezone-independent
      const lastVisit = new Date('2024-01-02T12:00:00.000Z'); // Jan 2 noon UTC
      const now = new Date('2024-01-03T18:00:00.000Z');       // Jan 3 6pm UTC (30 hours later)

      // Jan 2 → Jan 3 = 1 calendar day apart = consecutive = INCREMENT

      const progress = createProgress({ streak: 5, lastVisit: lastVisit.toISOString() });
      localStorage.setItem('dharma_path_progress', JSON.stringify(progress));

      vi.setSystemTime(now);

      const result = updateDailyVisit();

      expect(result.streak).toBe(6);
    });

    it('resets streak for exactly 48 hours apart', () => {
      const lastVisit = new Date('2024-01-02T12:00:00.000Z');
      const now = new Date('2024-01-04T12:00:00.000Z'); // Exactly 48 hours

      const progress = createProgress({ streak: 5, lastVisit: lastVisit.toISOString() });
      localStorage.setItem('dharma_path_progress', JSON.stringify(progress));

      vi.setSystemTime(now);

      const result = updateDailyVisit();

      expect(result.streak).toBe(1);
    });

    it('does not change streak for same calendar day', () => {
      // Use times close together to ensure they're on the same calendar day
      // in any timezone (UTC-12 to UTC+14)
      const lastVisit = new Date('2024-01-02T12:00:00.000Z'); // Jan 2 noon UTC
      const now = new Date('2024-01-02T14:00:00.000Z');       // Jan 2 2pm UTC (2 hours later)

      const progress = createProgress({ streak: 5, lastVisit: lastVisit.toISOString() });
      localStorage.setItem('dharma_path_progress', JSON.stringify(progress));

      vi.setSystemTime(now);

      const result = updateDailyVisit();

      expect(result.streak).toBe(5);
      // lastVisit should NOT be updated for same-day visits
      expect(result.lastVisit).toBe(lastVisit.toISOString());
    });
  });

  describe('Session protection', () => {
    it('does not double-increment streak in same session', () => {
      const lastVisit = new Date('2024-01-02T12:00:00.000Z');
      const now = new Date('2024-01-03T12:00:00.000Z');

      const progress = createProgress({ streak: 5, lastVisit: lastVisit.toISOString() });
      localStorage.setItem('dharma_path_progress', JSON.stringify(progress));

      vi.setSystemTime(now);

      // First call - should increment
      const result1 = updateDailyVisit();
      expect(result1.streak).toBe(6);

      // Second call in same session - should NOT increment again
      const result2 = updateDailyVisit();
      expect(result2.streak).toBe(6);

      // Third call - still should not increment
      const result3 = updateDailyVisit();
      expect(result3.streak).toBe(6);
    });

    it('allows streak update after session storage is cleared (new session)', () => {
      const day1 = new Date('2024-01-02T12:00:00.000Z');
      const day2 = new Date('2024-01-03T12:00:00.000Z');
      const day3 = new Date('2024-01-04T12:00:00.000Z');

      const progress = createProgress({ streak: 5, lastVisit: day1.toISOString() });
      localStorage.setItem('dharma_path_progress', JSON.stringify(progress));

      // Day 2 visit
      vi.setSystemTime(day2);
      const result1 = updateDailyVisit();
      expect(result1.streak).toBe(6);

      // Simulate new session (browser closed and reopened)
      sessionStorage.clear();

      // Day 3 visit
      vi.setSystemTime(day3);
      const result2 = updateDailyVisit();
      expect(result2.streak).toBe(7);
    });
  });

  describe('Edge cases', () => {
    it('handles first-ever visit (new user)', () => {
      // No existing progress in localStorage
      const now = new Date('2024-01-15T12:00:00.000Z');
      vi.setSystemTime(now);

      const result = updateDailyVisit();

      expect(result.streak).toBe(1);
      expect(result.lastVisit).toBe(now.toISOString());
    });

    it('handles very old lastVisit (user returning after long absence)', () => {
      const lastVisit = new Date('2023-01-01T12:00:00.000Z'); // 1 year ago
      const now = new Date('2024-01-15T12:00:00.000Z');

      const progress = createProgress({ streak: 100, lastVisit: lastVisit.toISOString() });
      localStorage.setItem('dharma_path_progress', JSON.stringify(progress));

      vi.setSystemTime(now);

      const result = updateDailyVisit();

      expect(result.streak).toBe(1); // Reset after long absence
    });

    it('handles streak of 1 correctly when incremented', () => {
      const lastVisit = new Date('2024-01-02T12:00:00.000Z');
      const now = new Date('2024-01-03T12:00:00.000Z');

      const progress = createProgress({ streak: 1, lastVisit: lastVisit.toISOString() });
      localStorage.setItem('dharma_path_progress', JSON.stringify(progress));

      vi.setSystemTime(now);

      const result = updateDailyVisit();

      expect(result.streak).toBe(2);
    });

    it('handles streak of 1 correctly when reset', () => {
      const lastVisit = new Date('2024-01-02T12:00:00.000Z');
      const now = new Date('2024-01-04T12:00:00.000Z'); // 2 days later

      const progress = createProgress({ streak: 1, lastVisit: lastVisit.toISOString() });
      localStorage.setItem('dharma_path_progress', JSON.stringify(progress));

      vi.setSystemTime(now);

      const result = updateDailyVisit();

      expect(result.streak).toBe(1); // Already 1, stays 1
    });
  });
});
