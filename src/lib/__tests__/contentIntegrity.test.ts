import { describe, it, expect } from 'vitest';
import { chapters, type GitaChapterData } from '@/data/gitaData';

/**
 * Content Integrity Tests
 *
 * Validates that all content data (verses, lessons, etc.) has required fields
 * and follows the expected structure. This catches data entry errors early.
 */

describe('Content Integrity - Gita Chapters', () => {
  it('should have all 18 chapters', () => {
    expect(chapters).toBeDefined();
    expect(chapters.length).toBe(18);
  });

  it('all chapters should have required fields', () => {
    chapters.forEach((chapter: GitaChapterData, index: number) => {
      // Chapter number should match position
      expect(chapter.chapter_number).toBe(index + 1);

      // Required fields
      expect(chapter.name).toBeTruthy();
      expect(typeof chapter.name).toBe('string');
      expect(chapter.name.length).toBeGreaterThan(0);

      expect(chapter.name_meaning).toBeTruthy();
      expect(typeof chapter.name_meaning).toBe('string');

      expect(chapter.summary).toBeTruthy();
      expect(typeof chapter.summary).toBe('string');
      expect(chapter.summary.length).toBeGreaterThan(50); // Summaries should be substantial

      expect(chapter.verses_count).toBeTruthy();
      expect(typeof chapter.verses_count).toBe('number');
      expect(chapter.verses_count).toBeGreaterThan(0);
    });
  });

  it('chapter names should be unique', () => {
    const names = chapters.map((c) => c.name);
    const uniqueNames = [...new Set(names)];
    expect(uniqueNames.length).toBe(names.length);
  });

  it('total verse count should be 700-701 (Gita has 700 or 701 depending on Ch.13 verse numbering)', () => {
    // Note: The Gita traditionally has 700 verses, but some versions count Chapter 13
    // as having 35 verses (including verse 0), making the total 701. Both are valid.
    const totalVerses = chapters.reduce((sum, chapter) => sum + chapter.verses_count, 0);
    expect(totalVerses).toBeGreaterThanOrEqual(700);
    expect(totalVerses).toBeLessThanOrEqual(701);
  });

  it('chapter summaries should not contain placeholder text', () => {
    const placeholders = ['TODO', 'FIXME', 'XXX', 'Lorem ipsum', 'placeholder'];

    chapters.forEach((chapter) => {
      placeholders.forEach((placeholder) => {
        expect(chapter.summary.toLowerCase()).not.toContain(placeholder.toLowerCase());
      });
    });
  });
});

describe('Content Integrity - Chapter Verse Counts', () => {
  // Known verse counts for each chapter of the Bhagavad Gita
  const expectedVerseCounts: Record<number, number> = {
    1: 47,
    2: 72,
    3: 43,
    4: 42,
    5: 29,
    6: 47,
    7: 30,
    8: 28,
    9: 34,
    10: 42,
    11: 55,
    12: 20,
    13: 35,
    14: 27,
    15: 20,
    16: 24,
    17: 28,
    18: 78,
  };

  Object.entries(expectedVerseCounts).forEach(([chapterNum, expectedCount]) => {
    it(`chapter ${chapterNum} should have ${expectedCount} verses`, () => {
      const chapter = chapters.find((c) => c.chapter_number === parseInt(chapterNum));
      expect(chapter).toBeDefined();
      expect(chapter?.verses_count).toBe(expectedCount);
    });
  });
});

describe('Content Integrity - Data Quality', () => {
  it('chapter names should follow naming convention (Title Case)', () => {
    chapters.forEach((chapter) => {
      // First letter should be uppercase
      expect(chapter.name[0]).toBe(chapter.name[0].toUpperCase());
    });
  });

  it('summaries should end with proper punctuation', () => {
    // Valid ending punctuation includes single quotes for quoted phrases
    const validEndings = ['.', '!', '?', '"', "'"];
    chapters.forEach((chapter) => {
      const lastChar = chapter.summary.trim().slice(-1);
      expect(validEndings).toContain(lastChar);
    });
  });

  it('summaries should not be too short', () => {
    chapters.forEach((chapter) => {
      expect(chapter.summary.length).toBeGreaterThan(100);
    });
  });

  it('summaries should not be too long (max 500 chars for readability)', () => {
    chapters.forEach((chapter) => {
      expect(chapter.summary.length).toBeLessThan(500);
    });
  });
});

describe('Content Integrity - Sanskrit Names', () => {
  // All Gita chapter names should contain "Yoga"
  it('all chapter names should contain "Yoga"', () => {
    chapters.forEach((chapter) => {
      expect(chapter.name.toLowerCase()).toContain('yoga');
    });
  });

  // Key chapters should have specific names
  it('should have correctly named key chapters', () => {
    const keyChapters = {
      1: 'Vishada', // Arjuna Vishada Yoga
      2: 'Sankhya', // Sankhya Yoga
      3: 'Karma', // Karma Yoga
      6: 'Dhyana', // Dhyana Yoga
      11: 'Vishvarupa', // Vishvarupa Darshana Yoga
      18: 'Moksha', // Moksha Sannyasa Yoga
    };

    Object.entries(keyChapters).forEach(([chapterNum, keyWord]) => {
      const chapter = chapters.find((c) => c.chapter_number === parseInt(chapterNum));
      expect(chapter?.name.toLowerCase()).toContain(keyWord.toLowerCase());
    });
  });
});

describe('Content Integrity - Cross-references', () => {
  it('chapter numbers should be sequential starting from 1', () => {
    chapters.forEach((chapter, index) => {
      expect(chapter.chapter_number).toBe(index + 1);
    });
  });

  it('no duplicate chapter numbers', () => {
    const chapterNumbers = chapters.map((c) => c.chapter_number);
    const uniqueNumbers = [...new Set(chapterNumbers)];
    expect(uniqueNumbers.length).toBe(chapterNumbers.length);
  });
});
