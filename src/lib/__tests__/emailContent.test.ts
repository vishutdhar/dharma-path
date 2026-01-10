import { describe, it, expect } from 'vitest';
import {
  getEmailContentForDay,
  getLessonIdForDay,
  getLessonIdsUpToDay,
  TOTAL_DAYS,
  TOTAL_LESSONS,
} from '../emailContent';

describe('emailContent', () => {
  describe('TOTAL_DAYS', () => {
    it('should be 128 days', () => {
      expect(TOTAL_DAYS).toBe(128);
    });
  });

  describe('getEmailContentForDay', () => {
    it('should return content for day 1', () => {
      const content = getEmailContentForDay(1);
      expect(content).not.toBeNull();
      expect(content?.day).toBe(1);
      expect(content?.type).toBe('lesson');
      expect(content?.title).toBeTruthy();
      expect(content?.htmlContent).toBeTruthy();
    });

    it('should return content for day 128 (last day)', () => {
      const content = getEmailContentForDay(128);
      expect(content).not.toBeNull();
      expect(content?.day).toBe(128);
      expect(content?.type).toBe('chapter');
    });

    it('should return null for day 0', () => {
      const content = getEmailContentForDay(0);
      expect(content).toBeNull();
    });

    it('should return null for day 129 (beyond total)', () => {
      const content = getEmailContentForDay(129);
      expect(content).toBeNull();
    });

    it('should return null for negative days', () => {
      const content = getEmailContentForDay(-1);
      expect(content).toBeNull();
    });

    it('should return lessons for days 1-110', () => {
      // Test a day from Level 8 (days 105-110)
      const content = getEmailContentForDay(107);
      expect(content).not.toBeNull();
      expect(content?.type).toBe('lesson');
      expect(content?.lessonId).toBeTruthy();
    });

    it('should return chapters for days 111-128', () => {
      const content = getEmailContentForDay(115);
      expect(content).not.toBeNull();
      expect(content?.type).toBe('chapter');
      expect(content?.chapterNumber).toBeTruthy();
    });

    it('should have valid webUrl for all days', () => {
      for (let day = 1; day <= TOTAL_DAYS; day++) {
        const content = getEmailContentForDay(day);
        expect(content?.webUrl).toMatch(/^\/(learn|gita)\//);
      }
    });
  });

  describe('TOTAL_LESSONS', () => {
    it('should be 110 lessons', () => {
      expect(TOTAL_LESSONS).toBe(110);
    });

    it('should equal TOTAL_DAYS minus 18 Gita chapters', () => {
      expect(TOTAL_LESSONS).toBe(TOTAL_DAYS - 18);
    });
  });

  describe('getLessonIdForDay', () => {
    it('should return first lesson ID for day 1', () => {
      const lessonId = getLessonIdForDay(1);
      expect(lessonId).toBe('1-1-1');
    });

    it('should return correct lesson ID for day 5', () => {
      const lessonId = getLessonIdForDay(5);
      expect(lessonId).toBe('1-2-2'); // 5th lesson in curriculum order
    });

    it('should return last lesson ID for day 110', () => {
      const lessonId = getLessonIdForDay(110);
      expect(lessonId).toBe('8-2-3'); // Last lesson (Level 8)
    });

    it('should return null for day 0', () => {
      const lessonId = getLessonIdForDay(0);
      expect(lessonId).toBeNull();
    });

    it('should return null for negative days', () => {
      const lessonId = getLessonIdForDay(-1);
      expect(lessonId).toBeNull();
    });

    it('should return null for day 111 (Gita chapter, not lesson)', () => {
      const lessonId = getLessonIdForDay(111);
      expect(lessonId).toBeNull();
    });

    it('should return null for day 128 (Gita chapter)', () => {
      const lessonId = getLessonIdForDay(128);
      expect(lessonId).toBeNull();
    });

    it('should return null for day beyond total', () => {
      const lessonId = getLessonIdForDay(200);
      expect(lessonId).toBeNull();
    });
  });

  describe('getLessonIdsUpToDay', () => {
    it('should return array with one lesson for day 1', () => {
      const lessons = getLessonIdsUpToDay(1);
      expect(lessons).toHaveLength(1);
      expect(lessons[0]).toBe('1-1-1');
    });

    it('should return array with 5 lessons for day 5', () => {
      const lessons = getLessonIdsUpToDay(5);
      expect(lessons).toHaveLength(5);
      expect(lessons[0]).toBe('1-1-1');
      expect(lessons[4]).toBe('1-2-2');
    });

    it('should return all 110 lessons for day 110', () => {
      const lessons = getLessonIdsUpToDay(110);
      expect(lessons).toHaveLength(110);
      expect(lessons[0]).toBe('1-1-1');
      expect(lessons[109]).toBe('8-2-3');
    });

    it('should return all 110 lessons for day 111 (caps at TOTAL_LESSONS)', () => {
      const lessons = getLessonIdsUpToDay(111);
      expect(lessons).toHaveLength(110);
    });

    it('should return all 110 lessons for day 128 (caps at TOTAL_LESSONS)', () => {
      const lessons = getLessonIdsUpToDay(128);
      expect(lessons).toHaveLength(110);
    });

    it('should return empty array for day 0', () => {
      const lessons = getLessonIdsUpToDay(0);
      expect(lessons).toHaveLength(0);
    });

    it('should return empty array for negative days', () => {
      const lessons = getLessonIdsUpToDay(-1);
      expect(lessons).toHaveLength(0);
    });

    it('should include all lessons in curriculum order', () => {
      const lessons = getLessonIdsUpToDay(14); // Level 1 has 14 lessons
      expect(lessons).toHaveLength(14);
      // First module: 3 lessons
      expect(lessons.slice(0, 3)).toEqual(['1-1-1', '1-1-2', '1-1-3']);
      // All should be Level 1
      lessons.forEach(id => {
        expect(id.startsWith('1-')).toBe(true);
      });
    });

    it('should match getEmailContentForDay lesson IDs', () => {
      // Verify that lessons returned match what getEmailContentForDay returns
      for (let day = 1; day <= TOTAL_LESSONS; day++) {
        const content = getEmailContentForDay(day);
        const lessonId = getLessonIdForDay(day);
        expect(content?.lessonId).toBe(lessonId);
      }
    });
  });
});
