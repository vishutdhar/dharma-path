import { describe, it, expect } from 'vitest';
import {
  generateDailyEmail,
  generateWelcomeEmail,
  generateCompletionEmail,
  generateEmailSubject,
  generatePlainTextEmail,
} from '../emailTemplate';
import { getEmailContentForDay, TOTAL_DAYS } from '../emailContent';

describe('emailTemplate', () => {
  // Sample data for testing
  const sampleLessonContent = getEmailContentForDay(1)!; // Day 1 is a lesson
  const sampleChapterContent = getEmailContentForDay(115)!; // Day 115 is a Gita chapter
  const sampleEmail = 'test@example.com';
  const sampleToken = '550e8400-e29b-41d4-a716-446655440000';

  describe('generateDailyEmail', () => {
    describe('HTML structure', () => {
      it('should contain DOCTYPE declaration', () => {
        const html = generateDailyEmail({
          content: sampleLessonContent,
          userEmail: sampleEmail,
          unsubscribeToken: sampleToken,
        });
        expect(html).toContain('<!DOCTYPE html>');
      });

      it('should contain html, head, and body tags', () => {
        const html = generateDailyEmail({
          content: sampleLessonContent,
          userEmail: sampleEmail,
          unsubscribeToken: sampleToken,
        });
        expect(html).toContain('<html lang="en">');
        expect(html).toContain('<head>');
        expect(html).toContain('<body');
        expect(html).toContain('</html>');
      });

      it('should contain dark mode meta tags', () => {
        const html = generateDailyEmail({
          content: sampleLessonContent,
          userEmail: sampleEmail,
          unsubscribeToken: sampleToken,
        });
        expect(html).toContain('name="color-scheme" content="light dark"');
        expect(html).toContain('name="supported-color-schemes" content="light dark"');
      });

      it('should contain dark mode CSS styles', () => {
        const html = generateDailyEmail({
          content: sampleLessonContent,
          userEmail: sampleEmail,
          unsubscribeToken: sampleToken,
        });
        expect(html).toContain('@media (prefers-color-scheme: dark)');
        expect(html).toContain('.email-body');
        expect(html).toContain('.email-text');
      });
    });

    describe('content elements', () => {
      it('should contain day number in header', () => {
        const html = generateDailyEmail({
          content: sampleLessonContent,
          userEmail: sampleEmail,
          unsubscribeToken: sampleToken,
        });
        expect(html).toContain(`Day ${sampleLessonContent.day} of ${TOTAL_DAYS}`);
      });

      it('should contain lesson title', () => {
        const html = generateDailyEmail({
          content: sampleLessonContent,
          userEmail: sampleEmail,
          unsubscribeToken: sampleToken,
        });
        expect(html).toContain(sampleLessonContent.title);
      });

      it('should contain subtitle/level info', () => {
        const html = generateDailyEmail({
          content: sampleLessonContent,
          userEmail: sampleEmail,
          unsubscribeToken: sampleToken,
        });
        expect(html).toContain(sampleLessonContent.subtitle);
      });

      it('should contain progress percentage', () => {
        const html = generateDailyEmail({
          content: sampleLessonContent,
          userEmail: sampleEmail,
          unsubscribeToken: sampleToken,
        });
        expect(html).toContain('% complete');
      });

      it('should contain preview text', () => {
        const html = generateDailyEmail({
          content: sampleLessonContent,
          userEmail: sampleEmail,
          unsubscribeToken: sampleToken,
        });
        expect(html).toContain('display: none; max-height: 0; overflow: hidden');
      });
    });

    describe('links', () => {
      it('should always contain unsubscribe link', () => {
        const html = generateDailyEmail({
          content: sampleLessonContent,
          userEmail: sampleEmail,
          unsubscribeToken: sampleToken,
        });
        expect(html).toContain('/api/unsubscribe');
        expect(html).toContain(`token=${sampleToken}`);
        expect(html).toContain(encodeURIComponent(sampleEmail));
      });

      it('should contain web URL link', () => {
        const html = generateDailyEmail({
          content: sampleLessonContent,
          userEmail: sampleEmail,
          unsubscribeToken: sampleToken,
        });
        expect(html).toContain(sampleLessonContent.webUrl);
      });

      it('should contain mark-complete link for lessons', () => {
        const html = generateDailyEmail({
          content: sampleLessonContent,
          userEmail: sampleEmail,
          unsubscribeToken: sampleToken,
        });
        expect(html).toContain('/api/mark-complete');
        expect(html).toContain(`day=${sampleLessonContent.day}`);
        expect(html).toContain('Mark Lesson Complete');
      });

      it('should contain "Continue Reading" for Gita chapters (not mark-complete)', () => {
        const html = generateDailyEmail({
          content: sampleChapterContent,
          userEmail: sampleEmail,
          unsubscribeToken: sampleToken,
        });
        expect(html).toContain('Continue Reading on App');
        // Should NOT have mark-complete button for chapters
        expect(html).not.toContain('Mark Lesson Complete');
      });
    });

    describe('milestone messages', () => {
      it('should contain welcome message on day 1', () => {
        const day1Content = getEmailContentForDay(1)!;
        const html = generateDailyEmail({
          content: day1Content,
          userEmail: sampleEmail,
          unsubscribeToken: sampleToken,
        });
        expect(html).toContain('Welcome to your journey');
      });

      it('should contain level completion message on day 14', () => {
        const day14Content = getEmailContentForDay(14)!;
        const html = generateDailyEmail({
          content: day14Content,
          userEmail: sampleEmail,
          unsubscribeToken: sampleToken,
        });
        expect(html).toContain('Level 1');
      });

      it('should contain weekly milestone on day 7', () => {
        const day7Content = getEmailContentForDay(7)!;
        const html = generateDailyEmail({
          content: day7Content,
          userEmail: sampleEmail,
          unsubscribeToken: sampleToken,
        });
        expect(html).toContain('Week 1 complete');
      });
    });

    describe('next day preview', () => {
      it('should contain next day preview for non-final days', () => {
        const html = generateDailyEmail({
          content: sampleLessonContent,
          userEmail: sampleEmail,
          unsubscribeToken: sampleToken,
        });
        expect(html).toContain('Tomorrow:');
      });

      it('should not contain next day preview on final day', () => {
        const finalDayContent = getEmailContentForDay(TOTAL_DAYS)!;
        const html = generateDailyEmail({
          content: finalDayContent,
          userEmail: sampleEmail,
          unsubscribeToken: sampleToken,
        });
        expect(html).not.toContain('Tomorrow:');
      });
    });
  });

  describe('generateWelcomeEmail', () => {
    const welcomeHtml = generateWelcomeEmail(sampleEmail, sampleToken);

    it('should contain DOCTYPE declaration', () => {
      expect(welcomeHtml).toContain('<!DOCTYPE html>');
    });

    it('should contain welcome title', () => {
      expect(welcomeHtml).toContain('Welcome to Dharma Path');
    });

    it('should contain total days', () => {
      expect(welcomeHtml).toContain(`${TOTAL_DAYS}-Day Journey`);
    });

    it('should contain level breakdown', () => {
      expect(welcomeHtml).toContain('Days 1-14');
      expect(welcomeHtml).toContain('The Foundation');
      expect(welcomeHtml).toContain('Days 111-128');
      expect(welcomeHtml).toContain('Gita Chapter Summaries');
    });

    it('should contain unsubscribe link', () => {
      expect(welcomeHtml).toContain('/api/unsubscribe');
      expect(welcomeHtml).toContain(`token=${sampleToken}`);
    });

    it('should contain dark mode meta tags', () => {
      expect(welcomeHtml).toContain('name="color-scheme" content="light dark"');
    });

    it('should contain explore button', () => {
      expect(welcomeHtml).toContain('Explore Dharma Path');
    });
  });

  describe('generateCompletionEmail', () => {
    const completionHtml = generateCompletionEmail(sampleEmail, sampleToken);

    it('should contain DOCTYPE declaration', () => {
      expect(completionHtml).toContain('<!DOCTYPE html>');
    });

    it('should contain completion title', () => {
      expect(completionHtml).toContain('Journey Complete');
    });

    it('should contain congratulations message', () => {
      expect(completionHtml).toContain('Congratulations');
    });

    it('should contain total days reference', () => {
      expect(completionHtml).toContain(`${TOTAL_DAYS} Days of Wisdom`);
    });

    it('should contain famous Gita quote', () => {
      expect(completionHtml).toContain('Bhagavad Gita 2.47');
    });

    it('should contain unsubscribe link', () => {
      expect(completionHtml).toContain('/api/unsubscribe');
    });

    it('should contain dark mode meta tags', () => {
      expect(completionHtml).toContain('name="color-scheme" content="light dark"');
    });

    it('should contain continue exploring button', () => {
      expect(completionHtml).toContain('Continue Exploring');
    });
  });

  describe('generateEmailSubject', () => {
    it('should generate correct subject for lesson', () => {
      const subject = generateEmailSubject(sampleLessonContent);
      expect(subject).toBe(`Day ${sampleLessonContent.day}: ${sampleLessonContent.title}`);
    });

    it('should generate correct subject for chapter', () => {
      const subject = generateEmailSubject(sampleChapterContent);
      expect(subject).toBe(`Day ${sampleChapterContent.day}: ${sampleChapterContent.title}`);
    });

    it('should follow "Day X: Title" format', () => {
      const subject = generateEmailSubject(sampleLessonContent);
      expect(subject).toMatch(/^Day \d+: .+$/);
    });
  });

  describe('generatePlainTextEmail', () => {
    const plainText = generatePlainTextEmail({
      content: sampleLessonContent,
      userEmail: sampleEmail,
      unsubscribeToken: sampleToken,
    });

    it('should contain DHARMA PATH header', () => {
      expect(plainText).toContain('DHARMA PATH');
    });

    it('should contain day and progress info', () => {
      expect(plainText).toContain(`Day ${sampleLessonContent.day} of ${TOTAL_DAYS}`);
    });

    it('should contain title', () => {
      expect(plainText).toContain(sampleLessonContent.title);
    });

    it('should contain web URL', () => {
      expect(plainText).toContain(sampleLessonContent.webUrl);
    });

    it('should contain unsubscribe URL', () => {
      expect(plainText).toContain('/api/unsubscribe');
    });

    it('should NOT contain HTML tags', () => {
      expect(plainText).not.toContain('<html');
      expect(plainText).not.toContain('<body');
      expect(plainText).not.toContain('<div');
      expect(plainText).not.toContain('<table');
    });

    it('should convert bold to asterisks', () => {
      // If the content has bold text, it should be converted
      expect(plainText).not.toContain('<strong>');
      expect(plainText).not.toContain('</strong>');
    });
  });

  describe('email consistency across all days', () => {
    it('should generate valid email for every day (1-128)', () => {
      for (let day = 1; day <= TOTAL_DAYS; day++) {
        const content = getEmailContentForDay(day)!;
        const html = generateDailyEmail({
          content,
          userEmail: sampleEmail,
          unsubscribeToken: sampleToken,
        });

        // Every email should have these essentials
        expect(html).toContain('<!DOCTYPE html>');
        expect(html).toContain('Dharma Path');
        expect(html).toContain(`Day ${day}`);
        expect(html).toContain('/api/unsubscribe');
      }
    });

    it('should have mark-complete button only for days 1-110 (lessons)', () => {
      // Test a few lesson days
      for (const day of [1, 50, 100, 110]) {
        const content = getEmailContentForDay(day)!;
        const html = generateDailyEmail({
          content,
          userEmail: sampleEmail,
          unsubscribeToken: sampleToken,
        });
        expect(html).toContain('Mark Lesson Complete');
      }

      // Test chapter days
      for (const day of [111, 120, 128]) {
        const content = getEmailContentForDay(day)!;
        const html = generateDailyEmail({
          content,
          userEmail: sampleEmail,
          unsubscribeToken: sampleToken,
        });
        expect(html).not.toContain('Mark Lesson Complete');
        expect(html).toContain('Continue Reading on App');
      }
    });
  });
});
