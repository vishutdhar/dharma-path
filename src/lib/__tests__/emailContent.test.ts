import { describe, it, expect } from 'vitest';
import { getEmailContentForDay, TOTAL_DAYS } from '../emailContent';

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
});
