/**
 * Email Content Helper
 * Maps day numbers (1-128) to lesson/chapter content for daily emails
 *
 * Day mapping:
 * - Days 1-14: Level 1 - The Foundation (14 lessons)
 * - Days 15-26: Level 2 - The Stories (12 lessons)
 * - Days 27-43: Level 3 - The Gita (17 lessons)
 * - Days 44-59: Level 4 - Going Deeper (16 lessons)
 * - Days 60-76: Level 5 - The Puranas (17 lessons)
 * - Days 77-94: Level 6 - Study the Gita (18 lessons)
 * - Days 95-104: Level 7 - Study the Upanishads (10 lessons)
 * - Days 105-110: Level 8 - Study the Vedic Hymns (6 lessons)
 * - Days 111-128: Gita Chapters 1-18 (chapter summaries)
 */

import { curriculum, Lesson, Level, Module } from '@/data/curriculum';
import { lessonContent } from '@/data/lessonContent';

// Import all chapter data for Gita chapters
import chapter1 from '@/data/chapters/chapter1';
import chapter2 from '@/data/chapters/chapter2';
import chapter3 from '@/data/chapters/chapter3';
import chapter4 from '@/data/chapters/chapter4';
import chapter5 from '@/data/chapters/chapter5';
import chapter6 from '@/data/chapters/chapter6';
import chapter7 from '@/data/chapters/chapter7';
import chapter8 from '@/data/chapters/chapter8';
import chapter9 from '@/data/chapters/chapter9';
import chapter10 from '@/data/chapters/chapter10';
import chapter11 from '@/data/chapters/chapter11';
import chapter12 from '@/data/chapters/chapter12';
import chapter13 from '@/data/chapters/chapter13';
import chapter14 from '@/data/chapters/chapter14';
import chapter15 from '@/data/chapters/chapter15';
import chapter16 from '@/data/chapters/chapter16';
import chapter17 from '@/data/chapters/chapter17';
import chapter18 from '@/data/chapters/chapter18';

const gitaChapters = [
  chapter1, chapter2, chapter3, chapter4, chapter5, chapter6,
  chapter7, chapter8, chapter9, chapter10, chapter11, chapter12,
  chapter13, chapter14, chapter15, chapter16, chapter17, chapter18
];

export const TOTAL_DAYS = 128;

export interface EmailContent {
  day: number;
  type: 'lesson' | 'chapter';
  title: string;
  subtitle: string; // Level/Module name or "Bhagavad Gita"
  htmlContent: string;
  webUrl: string; // Deep link to the lesson/chapter on web
  lessonId?: string; // For lessons
  chapterNumber?: number; // For Gita chapters
}

/**
 * Get all lesson IDs in order from the curriculum
 */
function getAllLessonIds(): string[] {
  const lessonIds: string[] = [];

  for (const level of curriculum) {
    for (const module of level.modules) {
      for (const lesson of module.lessons) {
        lessonIds.push(lesson.id);
      }
    }
  }

  return lessonIds;
}

// Pre-compute the lesson ID array
const LESSON_IDS = getAllLessonIds();

// Export the total number of lessons (for external use)
export const TOTAL_LESSONS = LESSON_IDS.length;

/**
 * Get the lesson ID for a specific day (1-110)
 * Returns null for days 111-128 (Gita chapters, not lessons)
 */
export function getLessonIdForDay(day: number): string | null {
  if (day < 1 || day > LESSON_IDS.length) {
    return null;
  }
  return LESSON_IDS[day - 1];
}

/**
 * Get all lesson IDs from day 1 up to and including the given day
 * Used by mark-complete API to mark all lessons up to current day
 * Returns empty array for invalid days or days > 110
 */
export function getLessonIdsUpToDay(day: number): string[] {
  if (day < 1) {
    return [];
  }
  // Cap at total lessons (days 111+ are Gita chapters, not lessons)
  const maxDay = Math.min(day, LESSON_IDS.length);
  return LESSON_IDS.slice(0, maxDay);
}

/**
 * Get lesson metadata by ID
 */
function getLessonMetadata(lessonId: string): { lesson: Lesson; module: Module; level: Level } | null {
  for (const level of curriculum) {
    for (const module of level.modules) {
      for (const lesson of module.lessons) {
        if (lesson.id === lessonId) {
          return { lesson, module, level };
        }
      }
    }
  }
  return null;
}

/**
 * Get email content for a specific day (1-128)
 */
export function getEmailContentForDay(day: number): EmailContent | null {
  if (day < 1 || day > TOTAL_DAYS) {
    return null;
  }

  // Days 1-59: Lessons from curriculum
  if (day <= LESSON_IDS.length) {
    const lessonId = LESSON_IDS[day - 1];
    const metadata = getLessonMetadata(lessonId);

    if (!metadata) {
      console.error(`No metadata found for lesson ID: ${lessonId}`);
      return null;
    }

    const htmlContent = lessonContent[lessonId];

    if (!htmlContent) {
      console.error(`No content found for lesson ID: ${lessonId}`);
      return null;
    }

    return {
      day,
      type: 'lesson',
      title: metadata.lesson.title,
      subtitle: `Level ${metadata.level.id}: ${metadata.level.title} — ${metadata.module.title}`,
      htmlContent,
      webUrl: `/learn/${lessonId}`,
      lessonId,
    };
  }

  // Days 111-128: Gita chapter summaries
  const chapterIndex = day - LESSON_IDS.length - 1; // 0-indexed
  const chapter = gitaChapters[chapterIndex];

  if (!chapter) {
    console.error(`No chapter found for day ${day} (chapter index ${chapterIndex})`);
    return null;
  }

  // Build chapter HTML content from summary and key themes
  const chapterHtml = buildChapterEmailContent(chapter);

  return {
    day,
    type: 'chapter',
    title: `Chapter ${chapter.chapter}: ${chapter.name.english}`,
    subtitle: `Bhagavad Gita — ${chapter.name.sanskrit}`,
    htmlContent: chapterHtml,
    webUrl: `/gita/${chapter.chapter}`,
    chapterNumber: chapter.chapter,
  };
}

/**
 * Build HTML content for a Gita chapter email
 */
function buildChapterEmailContent(chapter: typeof chapter1): string {
  const keyThemesList = chapter.keyThemes
    .map(theme => `<li>${capitalizeFirst(theme)}</li>`)
    .join('\n');

  // Get 3-5 famous/key verses to include
  const famousVerses = chapter.verses
    .filter(v => v.famousVerse)
    .slice(0, 3);

  let versesHtml = '';
  if (famousVerses.length > 0) {
    versesHtml = `
      <h2>Key Verses</h2>
      ${famousVerses.map(verse => `
        <div style="margin: 20px 0; padding: 15px; background: #f9f5f0; border-left: 3px solid #F97316; border-radius: 4px;">
          <p style="font-style: italic; color: #666; margin: 0 0 10px 0;">Verse ${verse.chapter}.${verse.verse}</p>
          <p style="font-size: 16px; margin: 0 0 10px 0;"><strong>"${verse.translation}"</strong></p>
          <p style="color: #555; margin: 0;">${verse.explanation.simple}</p>
        </div>
      `).join('')}
    `;
  }

  return `
    <h2>${chapter.name.sanskrit}</h2>
    <p style="font-style: italic; color: #666; margin-bottom: 20px;">
      ${chapter.verseCount} verses
    </p>

    <h2>Chapter Overview</h2>
    <p>${chapter.summary}</p>

    <h2>Key Themes</h2>
    <ul>
      ${keyThemesList}
    </ul>

    ${versesHtml}

    <p style="margin-top: 30px;">
      <strong>Explore the full chapter</strong> on the web to read all ${chapter.verseCount} verses
      with translations, explanations, and practical applications.
    </p>
  `;
}

/**
 * Get the level name for a given day
 * Matches the curriculum structure in the header comments
 */
export function getLevelForDay(day: number): string {
  if (day <= 14) return 'Level 1: The Foundation';
  if (day <= 26) return 'Level 2: The Stories';
  if (day <= 43) return 'Level 3: The Gita';
  if (day <= 59) return 'Level 4: Going Deeper';
  if (day <= 76) return 'Level 5: The Puranas';
  if (day <= 94) return 'Level 6: Study the Gita';
  if (day <= 104) return 'Level 7: Study the Upanishads';
  if (day <= 110) return 'Level 8: Study the Vedic Hymns';
  return 'Bhagavad Gita Chapters';
}

/**
 * Calculate progress percentage (0-100)
 */
export function getProgressPercentage(day: number): number {
  return Math.round((day / TOTAL_DAYS) * 100);
}

/**
 * Get a summary of what's coming next
 */
export function getNextDayPreview(currentDay: number): string | null {
  if (currentDay >= TOTAL_DAYS) {
    return null;
  }

  const nextContent = getEmailContentForDay(currentDay + 1);
  if (!nextContent) return null;

  return `Tomorrow: ${nextContent.title}`;
}

/**
 * Check if this is the final day
 */
export function isFinalDay(day: number): boolean {
  return day === TOTAL_DAYS;
}

/**
 * Helper to capitalize first letter
 */
function capitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, ' ');
}

/**
 * Get milestone message for special days
 * Matches the curriculum structure: 8 levels + Gita chapter summaries
 */
export function getMilestoneMessage(day: number): string | null {
  // Day 1: Welcome
  if (day === 1) {
    return `Welcome to your journey! Today begins your ${TOTAL_DAYS}-day path through Hindu wisdom.`;
  }
  // Day 14: End of Level 1
  if (day === 14) {
    return "Congratulations! You've completed Level 1: The Foundation. Tomorrow, we explore the great epics.";
  }
  // Day 26: End of Level 2
  if (day === 26) {
    return "Level 2 complete! You now know the stories. Tomorrow, we begin the Bhagavad Gita.";
  }
  // Day 43: End of Level 3
  if (day === 43) {
    return "You've completed the Gita overview! Time to go deeper into advanced topics.";
  }
  // Day 59: End of Level 4
  if (day === 59) {
    return "Level 4 complete! Tomorrow, we explore the Puranas — the great mythological texts.";
  }
  // Day 76: End of Level 5
  if (day === 76) {
    return "Level 5 complete! You've explored the Puranas. Tomorrow, we dive deeper into studying the Gita.";
  }
  // Day 94: End of Level 6
  if (day === 94) {
    return "Level 6 complete! You've studied the Gita in depth. Tomorrow, we explore the Upanishads.";
  }
  // Day 104: End of Level 7
  if (day === 104) {
    return "Level 7 complete! You've explored the Upanishads. Tomorrow, we study the Vedic Hymns.";
  }
  // Day 110: End of Level 8 (all lessons complete)
  if (day === 110) {
    return "All lessons complete! For the final 18 days, we'll journey through each chapter of the Bhagavad Gita with detailed summaries and key verses.";
  }
  // Day 128: Course completion
  if (day === TOTAL_DAYS) {
    return `You did it! ${TOTAL_DAYS} days of wisdom complete. You now have a comprehensive understanding of Hindu philosophy, the epics, the Puranas, the Upanishads, the Vedic Hymns, and the Bhagavad Gita.`;
  }

  // Weekly milestones
  if (day % 7 === 0) {
    return `Week ${day / 7} complete! ${TOTAL_DAYS - day} days remaining on your journey.`;
  }

  return null;
}
