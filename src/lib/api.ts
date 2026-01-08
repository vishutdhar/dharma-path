// Bhagavad Gita API Integration
// Using the vedicscriptures API: https://vedicscriptures.github.io/
// With caching and fallback to local data
// Priority: Our custom content > API > Fallback data

import {
  chapters as fallbackChapters,
  getChapterFallback,
  getVerseFallback,
  GitaChapterData,
  GitaVerseData
} from '@/data/gitaData';

// Import our custom chapter content
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

const API_BASE = 'https://vedicscriptures.github.io';

// Cache settings
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour
const CACHE_STORAGE_KEY = 'dharma_path_api_cache';

// In-memory cache (fallback if sessionStorage unavailable)
const memoryCache: Map<string, { data: any; timestamp: number }> = new Map();

export interface GitaVerse {
  chapter: number;
  verse: number;
  slok: string; // Sanskrit
  transliteration: string;
  // Primary English translations from the API
  purohit?: {
    et: string; // English translation by Shri Purohit Swami
  };
  siva?: {
    et: string; // English translation by Swami Sivananda
    ec?: string; // English commentary by Swami Sivananda
  };
  tej?: {
    ht?: string; // Hindi translation
    et?: string; // English translation (not always available)
  };
  spiura?: {
    et: string;
    author: string;
  };
  chinmay?: {
    hc: string;
  };
  // Our custom content (takes priority when available)
  customContent?: {
    translation: string;
    explanation: {
      simple: string;
      deeper?: string;
    };
    practicalApplication: string;
    keyTerms?: { term: string; meaning: string }[];
    themes?: string[];
  };
  // Additional commentaries available
  [key: string]: any;
}

export interface GitaChapter {
  chapter_number: number;
  verses_count: number;
  name: string;
  translation?: string;
  transliteration?: string;
  meaning?: {
    en: string;
    hi: string;
  };
  summary?: {
    en: string;
    hi: string;
  };
}

// Helper to get cached data (tries sessionStorage first, then memory)
function getFromCache<T>(key: string): T | null {
  // Check memory cache first (faster)
  const memCached = memoryCache.get(key);
  if (memCached && Date.now() - memCached.timestamp < CACHE_DURATION) {
    return memCached.data as T;
  }

  // Try sessionStorage (persists across page navigations)
  if (typeof window !== 'undefined') {
    try {
      const stored = sessionStorage.getItem(CACHE_STORAGE_KEY);
      if (stored) {
        const cache = JSON.parse(stored);
        const cached = cache[key];
        if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
          // Also populate memory cache for faster subsequent access
          memoryCache.set(key, cached);
          return cached.data as T;
        }
      }
    } catch {
      // sessionStorage not available or corrupted
    }
  }

  return null;
}

// Helper to set cache (writes to both memory and sessionStorage)
function setCache(key: string, data: any): void {
  const cacheEntry = { data, timestamp: Date.now() };

  // Always set memory cache
  memoryCache.set(key, cacheEntry);

  // Try to persist to sessionStorage
  if (typeof window !== 'undefined') {
    try {
      const stored = sessionStorage.getItem(CACHE_STORAGE_KEY);
      const cache = stored ? JSON.parse(stored) : {};

      // Clean up expired entries to prevent storage bloat
      const now = Date.now();
      for (const k of Object.keys(cache)) {
        if (now - cache[k].timestamp > CACHE_DURATION) {
          delete cache[k];
        }
      }

      cache[key] = cacheEntry;
      sessionStorage.setItem(CACHE_STORAGE_KEY, JSON.stringify(cache));
    } catch {
      // sessionStorage quota exceeded or not available - memory cache still works
    }
  }
}

// Convert fallback chapter to API format
function convertFallbackChapter(fallback: GitaChapterData): GitaChapter {
  return {
    chapter_number: fallback.chapter_number,
    verses_count: fallback.verses_count,
    name: fallback.name,
    translation: fallback.name_meaning,
    meaning: {
      en: fallback.name_meaning,
      hi: ''
    },
    summary: {
      en: fallback.summary,
      hi: ''
    }
  };
}

// Convert fallback verse to API format
function convertFallbackVerse(fallback: GitaVerseData): GitaVerse {
  return {
    chapter: fallback.chapter,
    verse: fallback.verse,
    slok: fallback.slok,
    transliteration: fallback.transliteration,
    purohit: {
      et: fallback.translation
    }
  };
}

// Fetch all chapters with caching and fallback
export async function getAllChapters(): Promise<GitaChapter[]> {
  const cacheKey = 'all-chapters';

  // Check cache first
  const cached = getFromCache<GitaChapter[]>(cacheKey);
  if (cached) return cached;

  try {
    const response = await fetch(`${API_BASE}/chapters`, {
      next: { revalidate: 3600 } // Next.js cache for 1 hour
    });
    if (!response.ok) throw new Error('Failed to fetch chapters');
    const data = await response.json();
    setCache(cacheKey, data);
    return data;
  } catch (error) {
    console.error('Error fetching chapters, using fallback:', error);
    // Return fallback data
    return fallbackChapters.map(convertFallbackChapter);
  }
}

// Fetch a specific chapter with caching and fallback
export async function getChapter(chapterNumber: number): Promise<GitaChapter | null> {
  const cacheKey = `chapter-${chapterNumber}`;

  // Check cache first
  const cached = getFromCache<GitaChapter>(cacheKey);
  if (cached) return cached;

  try {
    const response = await fetch(`${API_BASE}/chapter/${chapterNumber}`, {
      next: { revalidate: 3600 }
    });
    if (!response.ok) throw new Error('Failed to fetch chapter');
    const data = await response.json();
    setCache(cacheKey, data);
    return data;
  } catch (error) {
    console.error(`Error fetching chapter ${chapterNumber}, using fallback:`, error);
    // Return fallback data
    const fallback = getChapterFallback(chapterNumber);
    return fallback ? convertFallbackChapter(fallback) : null;
  }
}

// Get our custom content if available
function getCustomContent(chapterNum: number, verseNum: number) {
  // Map of our custom chapters
  const customChapters: { [key: number]: typeof chapter2 } = {
    1: chapter1,
    2: chapter2,
    3: chapter3,
    4: chapter4,
    5: chapter5,
    6: chapter6,
    7: chapter7,
    8: chapter8,
    9: chapter9,
    10: chapter10,
    11: chapter11,
    12: chapter12,
    13: chapter13,
    14: chapter14,
    15: chapter15,
    16: chapter16,
    17: chapter17,
    18: chapter18,
  };

  const chapter = customChapters[chapterNum];
  if (!chapter) return null;

  const verse = chapter.verses.find(v => v.verse === verseNum);
  if (!verse) return null;

  return verse;
}

// Fetch a specific verse with caching and fallback
// Priority: Custom content > API > Fallback
export async function getVerse(chapter: number, verse: number): Promise<GitaVerse | null> {
  const cacheKey = `verse-${chapter}-${verse}`;

  // Check cache first
  const cached = getFromCache<GitaVerse>(cacheKey);
  if (cached) return cached;

  // Check for our custom content first
  const customVerse = getCustomContent(chapter, verse);

  try {
    const response = await fetch(`${API_BASE}/slok/${chapter}/${verse}`, {
      next: { revalidate: 3600 }
    });
    if (!response.ok) throw new Error('Failed to fetch verse');
    const apiData = await response.json();

    // Merge custom content with API data (custom takes priority for display)
    const mergedData: GitaVerse = {
      ...apiData,
      // Keep Sanskrit and transliteration from API (standard)
      slok: customVerse?.sanskrit || apiData.slok,
      transliteration: customVerse?.transliteration || apiData.transliteration,
      // Add our custom content if available
      ...(customVerse && {
        customContent: {
          translation: customVerse.translation,
          explanation: customVerse.explanation,
          practicalApplication: customVerse.practicalApplication,
          keyTerms: customVerse.keyTerms,
          themes: customVerse.themes,
        }
      })
    };

    setCache(cacheKey, mergedData);
    return mergedData;
  } catch (error) {
    console.error(`Error fetching verse ${chapter}.${verse}, using fallback:`, error);

    // If we have custom content, use it even without API
    if (customVerse) {
      const customOnly: GitaVerse = {
        chapter,
        verse,
        slok: customVerse.sanskrit,
        transliteration: customVerse.transliteration,
        customContent: {
          translation: customVerse.translation,
          explanation: customVerse.explanation,
          practicalApplication: customVerse.practicalApplication,
          keyTerms: customVerse.keyTerms,
          themes: customVerse.themes,
        }
      };
      return customOnly;
    }

    // Return fallback data if we have it
    const fallback = getVerseFallback(chapter, verse);
    if (fallback) {
      return convertFallbackVerse(fallback);
    }
    // If no fallback, return a minimal verse object
    return {
      chapter,
      verse,
      slok: 'Verse not available offline',
      transliteration: '',
      purohit: {
        et: 'This verse is not available offline. Please check your internet connection.'
      }
    };
  }
}

// Fetch all verses in a chapter (with batching for performance)
export async function getChapterVerses(chapterNumber: number): Promise<GitaVerse[]> {
  const chapter = await getChapter(chapterNumber);
  if (!chapter) return [];

  const verses: GitaVerse[] = [];

  // Fetch verses in parallel batches for better performance
  const batchSize = 10;
  for (let i = 1; i <= chapter.verses_count; i += batchSize) {
    const batch = [];
    for (let j = i; j < Math.min(i + batchSize, chapter.verses_count + 1); j++) {
      batch.push(getVerse(chapterNumber, j));
    }
    const results = await Promise.all(batch);
    verses.push(...results.filter((v): v is GitaVerse => v !== null));
  }

  return verses;
}

// Get the "Verse of the Day" - based on date for consistency
export function getVerseOfTheDay(): { chapter: number; verse: number } {
  // Create a predictable "random" verse based on the date
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
  );

  // Famous verses to cycle through
  const famousVerses = [
    { chapter: 2, verse: 47 },  // Karma yoga - rights to action only
    { chapter: 2, verse: 14 },  // Pleasure and pain are temporary
    { chapter: 2, verse: 22 },  // Soul changing bodies like clothes
    { chapter: 2, verse: 20 },  // The soul is eternal
    { chapter: 3, verse: 19 },  // Do your duty without attachment
    { chapter: 4, verse: 7 },   // Whenever dharma declines...
    { chapter: 4, verse: 8 },   // ...I manifest myself
    { chapter: 6, verse: 5 },   // Elevate yourself through your mind
    { chapter: 9, verse: 22 },  // I carry what they lack
    { chapter: 11, verse: 32 }, // I am time, destroyer of worlds
    { chapter: 18, verse: 66 }, // Surrender unto me
  ];

  return famousVerses[dayOfYear % famousVerses.length];
}

// Format verse reference (e.g., "Gita 2.47")
export function formatVerseRef(chapter: number, verse: number): string {
  return `Gita ${chapter}.${verse}`;
}

// Get simple English translation (prioritizing certain commentators)
export function getSimpleTranslation(verse: GitaVerse): string {
  // Priority order for simple translations
  // purohit and siva are the primary English translation fields from the API
  if (verse.purohit?.et) return verse.purohit.et;
  if (verse.siva?.et) return verse.siva.et;
  if (verse.tej?.et) return verse.tej.et;
  if (verse.spiura?.et) return verse.spiura.et;

  // Fallback: try to find any English translation
  for (const key of Object.keys(verse)) {
    if (typeof verse[key] === 'object' && verse[key]?.et) {
      return verse[key].et;
    }
  }

  return 'Translation not available';
}

// Prefetch chapters for faster subsequent loads
export async function prefetchChapters(): Promise<void> {
  try {
    await getAllChapters();
    console.log('Chapters prefetched successfully');
  } catch (error) {
    console.error('Failed to prefetch chapters:', error);
  }
}
