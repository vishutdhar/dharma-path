/**
 * Dynamic Sitemap Generator
 *
 * This file automatically generates a sitemap.xml with ALL pages on your site.
 * Google uses this to discover and index every page.
 *
 * Next.js automatically serves this at /sitemap.xml
 */

import { MetadataRoute } from 'next';
import { curriculum } from '@/data/curriculum';
import { hymnSummaries } from '@/data/vedas';
import { festivals } from '@/data/festivals';

// Your domain
const BASE_URL = 'https://mydharmapath.com';

// Gita has 18 chapters with varying verse counts
const GITA_CHAPTERS = [
  { chapter: 1, verses: 47 },
  { chapter: 2, verses: 72 },
  { chapter: 3, verses: 43 },
  { chapter: 4, verses: 42 },
  { chapter: 5, verses: 29 },
  { chapter: 6, verses: 47 },
  { chapter: 7, verses: 30 },
  { chapter: 8, verses: 28 },
  { chapter: 9, verses: 34 },
  { chapter: 10, verses: 42 },
  { chapter: 11, verses: 55 },
  { chapter: 12, verses: 20 },
  { chapter: 13, verses: 35 },
  { chapter: 14, verses: 27 },
  { chapter: 15, verses: 20 },
  { chapter: 16, verses: 24 },
  { chapter: 17, verses: 28 },
  { chapter: 18, verses: 78 },
];

// Upanishads available in the app
const UPANISHADS = [
  'isha', 'kena', 'katha', 'prashna', 'mundaka', 'mandukya',
  'taittiriya', 'aitareya', 'chandogya', 'brihadaranyaka',
  'shvetashvatara', 'kaushitaki', 'maitri'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // =====================
  // 1. STATIC PAGES
  // =====================
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0, // Homepage is highest priority
    },
    {
      url: `${BASE_URL}/learn`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/gita`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/upanishads`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/vedas`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/search`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ];

  // =====================
  // 2. LESSON PAGES
  // =====================
  const lessonPages: MetadataRoute.Sitemap = [];

  for (const level of curriculum) {
    for (const module of level.modules) {
      for (const lesson of module.lessons) {
        lessonPages.push({
          url: `${BASE_URL}/learn/${lesson.id}`,
          lastModified: now,
          changeFrequency: 'monthly',
          priority: 0.7,
        });
      }
    }
  }

  // =====================
  // 3. GITA PAGES
  // =====================
  const gitaPages: MetadataRoute.Sitemap = [];

  for (const { chapter, verses } of GITA_CHAPTERS) {
    // Chapter page
    gitaPages.push({
      url: `${BASE_URL}/gita/${chapter}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    });

    // Individual verse pages
    for (let verse = 1; verse <= verses; verse++) {
      gitaPages.push({
        url: `${BASE_URL}/gita/${chapter}/${verse}`,
        lastModified: now,
        changeFrequency: 'yearly',
        priority: 0.6,
      });
    }
  }

  // =====================
  // 4. UPANISHAD PAGES
  // =====================
  const upanishadPages: MetadataRoute.Sitemap = UPANISHADS.map(upanishad => ({
    url: `${BASE_URL}/upanishads/${upanishad}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // =====================
  // 5. VEDA/HYMN PAGES
  // =====================
  const vedaPages: MetadataRoute.Sitemap = hymnSummaries.map(hymn => ({
    url: `${BASE_URL}/vedas/${hymn.id}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // =====================
  // 6. FESTIVAL PAGES
  // =====================
  const festivalPages: MetadataRoute.Sitemap = festivals.map(festival => ({
    url: `${BASE_URL}/festivals/${festival.id}`,
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  // Combine all pages
  return [
    ...staticPages,
    ...lessonPages,
    ...gitaPages,
    ...upanishadPages,
    ...vedaPages,
    ...festivalPages,
  ];
}
