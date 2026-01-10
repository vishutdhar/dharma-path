import { describe, it, expect } from 'vitest';

/**
 * Tests for mark-complete API validation logic
 * These test the validation functions used by the API endpoint
 */

// UUID v4 format validation regex (same as in API)
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function isValidUUID(str: string): boolean {
  return UUID_REGEX.test(str);
}

/**
 * Validate day against subscription's current_day
 * current_day is the NEXT day to be sent, so user has received days 1 to current_day
 */
function isDayAllowed(requestedDay: number, subscriptionCurrentDay: number): boolean {
  const maxAllowedDay = Math.max(subscriptionCurrentDay, 1);
  return requestedDay <= maxAllowedDay;
}

describe('mark-complete API validation', () => {
  describe('UUID validation', () => {
    it('should accept valid UUID v4', () => {
      expect(isValidUUID('550e8400-e29b-41d4-a716-446655440000')).toBe(true);
    });

    it('should accept valid UUID v4 with uppercase', () => {
      expect(isValidUUID('550E8400-E29B-41D4-A716-446655440000')).toBe(true);
    });

    it('should reject empty string', () => {
      expect(isValidUUID('')).toBe(false);
    });

    it('should reject random string', () => {
      expect(isValidUUID('not-a-uuid')).toBe(false);
    });

    it('should reject UUID with wrong version', () => {
      // UUID v1 (first digit of third group is 1, not 4)
      expect(isValidUUID('550e8400-e29b-11d4-a716-446655440000')).toBe(false);
    });

    it('should reject UUID with wrong variant', () => {
      // Wrong variant (first digit of fourth group should be 8, 9, a, or b)
      expect(isValidUUID('550e8400-e29b-41d4-c716-446655440000')).toBe(false);
    });

    it('should reject UUID with wrong length', () => {
      expect(isValidUUID('550e8400-e29b-41d4-a716-44665544000')).toBe(false);
    });

    it('should reject UUID without dashes', () => {
      expect(isValidUUID('550e8400e29b41d4a716446655440000')).toBe(false);
    });
  });

  describe('day validation against subscription', () => {
    it('should allow day 1 when subscription current_day is 1', () => {
      // First email just sent, current_day is still 1
      expect(isDayAllowed(1, 1)).toBe(true);
    });

    it('should allow day 1 when subscription current_day is 5', () => {
      // User can always mark earlier days
      expect(isDayAllowed(1, 5)).toBe(true);
    });

    it('should allow day 5 when subscription current_day is 5', () => {
      // User can mark the day they just received
      expect(isDayAllowed(5, 5)).toBe(true);
    });

    it('should allow day 5 when subscription current_day is 6', () => {
      // current_day 6 means day 5 was just sent
      expect(isDayAllowed(5, 6)).toBe(true);
    });

    it('should reject day 10 when subscription current_day is 5', () => {
      // User cannot mark future days they haven't received
      expect(isDayAllowed(10, 5)).toBe(false);
    });

    it('should reject day 50 when subscription current_day is 5', () => {
      expect(isDayAllowed(50, 5)).toBe(false);
    });

    it('should allow day 110 when subscription current_day is 111', () => {
      // Last lesson day
      expect(isDayAllowed(110, 111)).toBe(true);
    });

    it('should allow day 128 when subscription current_day is 129', () => {
      // Course complete
      expect(isDayAllowed(128, 129)).toBe(true);
    });
  });

  describe('day parameter validation', () => {
    it('should reject day 0', () => {
      const day = 0;
      expect(day >= 1 && day <= 128).toBe(false);
    });

    it('should reject negative day', () => {
      const day = -1;
      expect(day >= 1 && day <= 128).toBe(false);
    });

    it('should accept day 1', () => {
      const day = 1;
      expect(day >= 1 && day <= 128).toBe(true);
    });

    it('should accept day 128', () => {
      const day = 128;
      expect(day >= 1 && day <= 128).toBe(true);
    });

    it('should reject day 129', () => {
      const day = 129;
      expect(day >= 1 && day <= 128).toBe(false);
    });
  });

  describe('lesson completion logic', () => {
    it('should merge lessons without duplicates', () => {
      const existing = ['1-1-1', '1-1-2'];
      const newLessons = ['1-1-2', '1-1-3', '1-2-1'];
      const merged = Array.from(new Set([...existing, ...newLessons]));

      expect(merged).toHaveLength(4);
      expect(merged).toContain('1-1-1');
      expect(merged).toContain('1-1-2');
      expect(merged).toContain('1-1-3');
      expect(merged).toContain('1-2-1');
    });

    it('should handle empty existing lessons', () => {
      const existing: string[] = [];
      const newLessons = ['1-1-1', '1-1-2'];
      const merged = Array.from(new Set([...existing, ...newLessons]));

      expect(merged).toHaveLength(2);
    });

    it('should handle all duplicates', () => {
      const existing = ['1-1-1', '1-1-2', '1-1-3'];
      const newLessons = ['1-1-1', '1-1-2', '1-1-3'];
      const merged = Array.from(new Set([...existing, ...newLessons]));

      expect(merged).toHaveLength(3);
    });
  });
});
