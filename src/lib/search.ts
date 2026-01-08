/**
 * Full-text search using Fuse.js
 * Searches across lessons, Gita verses, and glossary terms
 */

import Fuse, { FuseResultMatch, IFuseOptions } from 'fuse.js';
import { curriculum } from '@/data/curriculum';

// Re-export Fuse types for use in components
export type { FuseResultMatch };
import { lessonContent } from '@/data/lessonContent';
import { festivals } from '@/data/festivals';
import { upanishads } from '@/data/upanishads';
import { hymns } from '@/data/vedas';

// Import all Gita chapters
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

// =============================================================================
// TYPES
// =============================================================================

export interface SearchableLesson {
  type: 'lesson';
  id: string;
  title: string;
  description: string;
  content: string; // Stripped of HTML
  levelId: number;
  levelTitle: string;
  moduleTitle: string;
}

export interface SearchableVerse {
  type: 'verse';
  id: string; // "4.7"
  chapter: number;
  verse: number;
  reference: string; // "Gita 4.7"
  translation: string;
  explanation: string;
  practicalApplication: string;
  transliteration: string;
  themes: string[];
  famousVerse?: boolean;
}

export interface SearchableGlossaryTerm {
  type: 'glossary';
  term: string;
  sanskrit: string;
  definition: string;
}

export interface SearchableFestival {
  type: 'festival';
  id: string;
  name: string;
  sanskrit?: string;
  alternateNames: string;
  summary: string;
  month: string;
  themes: string[];
}

export interface SearchableUpanishadVerse {
  type: 'upanishad-verse';
  id: string; // "chandogya-6-8"
  upanishad: string;
  upanishadName: string;
  section: number;
  verse: number;
  reference: string; // "Chandogya 6.8"
  translation: string;
  explanation: string;
  practicalApplication: string;
  transliteration: string;
  themes: string[];
  famousVerse?: boolean;
  mahavakya?: boolean;
}

export interface SearchableVedicVerse {
  type: 'vedic-verse';
  id: string; // "agni-sukta-1"
  hymn: string;
  hymnName: string;
  verse: number;
  reference: string; // "Agni Sukta 1"
  translation: string;
  explanation: string;
  practicalApplication: string;
  transliteration: string;
  themes: string[];
  famousVerse?: boolean;
}

export type SearchableItem = SearchableLesson | SearchableVerse | SearchableGlossaryTerm | SearchableFestival | SearchableUpanishadVerse | SearchableVedicVerse;

export interface SearchResult {
  item: SearchableItem;
  score: number;
  matches?: readonly FuseResultMatch[];
}

// =============================================================================
// GLOSSARY DATA
// =============================================================================

const glossary: SearchableGlossaryTerm[] = [
  {
    type: 'glossary',
    term: 'Dharma',
    sanskrit: 'धर्म',
    definition: 'Righteous duty, cosmic order, moral law. Your role in maintaining universal harmony.',
  },
  {
    type: 'glossary',
    term: 'Karma',
    sanskrit: 'कर्म',
    definition: 'Action and its consequences. Every action creates an effect that returns to the doer.',
  },
  {
    type: 'glossary',
    term: 'Samsara',
    sanskrit: 'संसार',
    definition: 'The cycle of death and rebirth. The wheel of existence that continues until liberation.',
  },
  {
    type: 'glossary',
    term: 'Moksha',
    sanskrit: 'मोक्ष',
    definition: 'Liberation from the cycle of rebirth. The ultimate goal of human existence.',
  },
  {
    type: 'glossary',
    term: 'Atman',
    sanskrit: 'आत्मन्',
    definition: 'The individual soul. Your true self beyond the body and mind.',
  },
  {
    type: 'glossary',
    term: 'Brahman',
    sanskrit: 'ब्रह्मन्',
    definition: 'The ultimate reality. The infinite, unchanging ground of all existence.',
  },
  {
    type: 'glossary',
    term: 'Bhakti',
    sanskrit: 'भक्ति',
    definition: 'Devotion, loving surrender to the Divine. One of the paths to liberation.',
  },
  {
    type: 'glossary',
    term: 'Yoga',
    sanskrit: 'योग',
    definition: 'Union. A discipline or path that leads to oneness with the Divine.',
  },
  {
    type: 'glossary',
    term: 'Maya',
    sanskrit: 'माया',
    definition: 'Illusion. The power that makes the world appear as separate from Brahman.',
  },
  {
    type: 'glossary',
    term: 'Guru',
    sanskrit: 'गुरु',
    definition: 'Spiritual teacher. One who dispels the darkness of ignorance.',
  },
  {
    type: 'glossary',
    term: 'Mantra',
    sanskrit: 'मन्त्र',
    definition: 'Sacred utterance. Words or sounds used in meditation and worship.',
  },
  {
    type: 'glossary',
    term: 'Puja',
    sanskrit: 'पूजा',
    definition: 'Worship ritual. The act of showing reverence to a deity.',
  },
];

// =============================================================================
// UTILITIES
// =============================================================================

/**
 * Strip HTML tags from content for indexing
 */
function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Truncate text to a maximum length, preserving word boundaries
 */
function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  const truncated = text.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  return lastSpace > 0 ? truncated.substring(0, lastSpace) + '...' : truncated + '...';
}

// =============================================================================
// INDEX BUILDERS
// =============================================================================

/**
 * Build searchable lessons from curriculum and content
 */
function buildLessonIndex(): SearchableLesson[] {
  const lessons: SearchableLesson[] = [];

  for (const level of curriculum) {
    for (const module of level.modules) {
      for (const lesson of module.lessons) {
        const htmlContent = lessonContent[lesson.id] || '';
        const strippedContent = stripHtml(htmlContent);

        lessons.push({
          type: 'lesson',
          id: lesson.id,
          title: lesson.title,
          description: lesson.description,
          content: truncateText(strippedContent, 2000), // Limit for performance
          levelId: level.id,
          levelTitle: level.title,
          moduleTitle: module.title,
        });
      }
    }
  }

  return lessons;
}

/**
 * Build searchable verses from all chapters
 */
function buildVerseIndex(): SearchableVerse[] {
  const allChapters = [
    chapter1, chapter2, chapter3, chapter4, chapter5, chapter6,
    chapter7, chapter8, chapter9, chapter10, chapter11, chapter12,
    chapter13, chapter14, chapter15, chapter16, chapter17, chapter18,
  ];

  const verses: SearchableVerse[] = [];

  for (const chapter of allChapters) {
    for (const verse of chapter.verses) {
      verses.push({
        type: 'verse',
        id: `${verse.chapter}.${verse.verse}`,
        chapter: verse.chapter,
        verse: verse.verse,
        reference: `Gita ${verse.chapter}.${verse.verse}`,
        translation: verse.translation,
        explanation: verse.explanation.simple + (verse.explanation.deeper ? ' ' + verse.explanation.deeper : ''),
        practicalApplication: verse.practicalApplication,
        transliteration: verse.transliteration,
        themes: verse.themes,
        famousVerse: verse.famousVerse,
      });
    }
  }

  return verses;
}

/**
 * Build searchable festivals from festival data
 */
function buildFestivalIndex(): SearchableFestival[] {
  return festivals.map(festival => ({
    type: 'festival',
    id: festival.id,
    name: festival.name,
    sanskrit: festival.sanskrit,
    alternateNames: festival.alternateNames?.join(', ') || '',
    summary: festival.summary,
    month: festival.month,
    themes: festival.themes,
  }));
}

/**
 * Build searchable Upanishad verses from all available Upanishads
 */
function buildUpanishadIndex(): SearchableUpanishadVerse[] {
  const verses: SearchableUpanishadVerse[] = [];

  for (const [_upanishadId, upanishad] of Object.entries(upanishads)) {
    if (!upanishad) continue;

    for (const section of upanishad.sections) {
      for (const verse of section.verses) {
        verses.push({
          type: 'upanishad-verse',
          id: `${verse.upanishad}-${verse.section}-${verse.verse}`,
          upanishad: verse.upanishad,
          upanishadName: upanishad.name.english,
          section: verse.section,
          verse: verse.verse,
          reference: `${upanishad.name.english} ${verse.section}.${verse.verse}`,
          translation: verse.translation,
          explanation: verse.explanation.simple + (verse.explanation.deeper ? ' ' + verse.explanation.deeper : ''),
          practicalApplication: verse.practicalApplication,
          transliteration: verse.transliteration,
          themes: verse.themes,
          famousVerse: verse.famousVerse,
          mahavakya: !!verse.mahavakya,
        });
      }
    }
  }

  return verses;
}

/**
 * Build searchable Vedic verses from all available hymns
 */
function buildVedicIndex(): SearchableVedicVerse[] {
  const verses: SearchableVedicVerse[] = [];

  for (const [_hymnId, hymn] of Object.entries(hymns)) {
    if (!hymn) continue;

    for (const verse of hymn.verses) {
      verses.push({
        type: 'vedic-verse',
        id: `${verse.hymn}-${verse.verse}`,
        hymn: verse.hymn,
        hymnName: hymn.name.english,
        verse: verse.verse,
        reference: `${hymn.name.english} ${verse.verse}`,
        translation: verse.translation,
        explanation: verse.explanation.simple + (verse.explanation.deeper ? ' ' + verse.explanation.deeper : ''),
        practicalApplication: verse.practicalApplication,
        transliteration: verse.transliteration,
        themes: verse.themes,
        famousVerse: verse.famousVerse,
      });
    }
  }

  return verses;
}

// =============================================================================
// SEARCH ENGINE
// =============================================================================

// Fuse.js configuration
const fuseOptions: IFuseOptions<SearchableItem> = {
  includeScore: true,
  includeMatches: true,
  threshold: 0.4, // 0 = exact match, 1 = match anything
  minMatchCharLength: 2,
  ignoreLocation: true, // Search entire content, not just beginning
  keys: [
    // High priority - titles and terms
    { name: 'title', weight: 2.0 },
    { name: 'term', weight: 2.0 },
    { name: 'name', weight: 2.0 }, // Festival name
    { name: 'reference', weight: 1.8 },
    { name: 'alternateNames', weight: 1.5 }, // Festival alternate names
    // Medium priority - main content
    { name: 'translation', weight: 1.5 },
    { name: 'description', weight: 1.2 },
    { name: 'definition', weight: 1.2 },
    { name: 'summary', weight: 1.2 }, // Festival summary
    // Lower priority - supporting content
    { name: 'explanation', weight: 0.8 },
    { name: 'practicalApplication', weight: 0.7 },
    { name: 'month', weight: 0.6 }, // Festival month
    { name: 'content', weight: 0.5 },
    { name: 'transliteration', weight: 0.5 },
    { name: 'themes', weight: 0.4 },
    { name: 'sanskrit', weight: 0.3 },
  ],
};

// Singleton search index
let searchIndex: Fuse<SearchableItem> | null = null;
let allItems: SearchableItem[] = [];

/**
 * Initialize the search index (lazy loading)
 */
function getSearchIndex(): Fuse<SearchableItem> {
  if (!searchIndex) {
    const lessons = buildLessonIndex();
    const verses = buildVerseIndex();
    const festivalItems = buildFestivalIndex();
    const upanishadVerses = buildUpanishadIndex();
    const vedicVerses = buildVedicIndex();

    allItems = [...lessons, ...verses, ...glossary, ...festivalItems, ...upanishadVerses, ...vedicVerses];
    searchIndex = new Fuse(allItems, fuseOptions);

    console.log(`Search index built: ${lessons.length} lessons, ${verses.length} Gita verses, ${upanishadVerses.length} Upanishad verses, ${vedicVerses.length} Vedic verses, ${glossary.length} terms, ${festivalItems.length} festivals`);
  }
  return searchIndex;
}

/**
 * Perform a search across all content
 */
export function search(query: string, limit: number = 50): SearchResult[] {
  if (!query || query.length < 2) {
    return [];
  }

  const fuse = getSearchIndex();
  const results = fuse.search(query, { limit });

  return results.map(result => ({
    item: result.item,
    score: result.score ?? 1,
    matches: result.matches,
  }));
}

/**
 * Search only lessons
 */
export function searchLessons(query: string, limit: number = 20): SearchResult[] {
  const results = search(query, limit * 3);
  return results
    .filter(r => r.item.type === 'lesson')
    .slice(0, limit);
}

/**
 * Search only verses
 */
export function searchVerses(query: string, limit: number = 20): SearchResult[] {
  const results = search(query, limit * 3);
  return results
    .filter(r => r.item.type === 'verse')
    .slice(0, limit);
}

/**
 * Search only glossary terms
 */
export function searchGlossary(query: string, limit: number = 20): SearchResult[] {
  const results = search(query, limit * 3);
  return results
    .filter(r => r.item.type === 'glossary')
    .slice(0, limit);
}

/**
 * Search only festivals
 */
export function searchFestivals(query: string, limit: number = 20): SearchResult[] {
  const results = search(query, limit * 3);
  return results
    .filter(r => r.item.type === 'festival')
    .slice(0, limit);
}

/**
 * Search only Upanishad verses
 */
export function searchUpanishads(query: string, limit: number = 20): SearchResult[] {
  const results = search(query, limit * 3);
  return results
    .filter(r => r.item.type === 'upanishad-verse')
    .slice(0, limit);
}

/**
 * Search only Vedic verses
 */
export function searchVedas(query: string, limit: number = 20): SearchResult[] {
  const results = search(query, limit * 3);
  return results
    .filter(r => r.item.type === 'vedic-verse')
    .slice(0, limit);
}

/**
 * Get all glossary terms (for displaying when no search query)
 */
export function getAllGlossaryTerms(): SearchableGlossaryTerm[] {
  return glossary;
}

/**
 * Get excerpt around match for display
 */
export function getMatchExcerpt(
  text: string,
  matchIndices: readonly [number, number][] | undefined,
  contextLength: number = 60
): string {
  if (!matchIndices || matchIndices.length === 0 || !text) {
    return truncateText(text, contextLength * 2);
  }

  const [start, end] = matchIndices[0];
  const excerptStart = Math.max(0, start - contextLength);
  const excerptEnd = Math.min(text.length, end + contextLength);

  let excerpt = text.substring(excerptStart, excerptEnd);

  if (excerptStart > 0) excerpt = '...' + excerpt;
  if (excerptEnd < text.length) excerpt = excerpt + '...';

  return excerpt;
}
