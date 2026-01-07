/**
 * Gita Chapter Layout - SEO metadata for each of the 18 chapters
 *
 * When someone shares a Gita chapter link, they'll see:
 * - Title: "Chapter 2: Sankhya Yoga - The Eternal Soul | Dharma Path"
 * - Description: The chapter summary
 *
 * This makes sharing on social media much more informative.
 */

import { Metadata } from 'next';
import { chapters } from '@/data/gitaData';

// Generate metadata for each Gita chapter
export async function generateMetadata({
  params,
}: {
  params: Promise<{ chapter: string }>;
}): Promise<Metadata> {
  const { chapter: chapterParam } = await params;
  const chapterNum = parseInt(chapterParam);

  // Validate chapter number
  if (isNaN(chapterNum) || chapterNum < 1 || chapterNum > 18) {
    return {
      title: 'Chapter Not Found',
      description: 'This chapter could not be found.',
    };
  }

  const chapter = chapters.find(c => c.chapter_number === chapterNum);

  if (!chapter) {
    return {
      title: `Bhagavad Gita Chapter ${chapterNum}`,
      description: `Read Chapter ${chapterNum} of the Bhagavad Gita with Sanskrit, transliteration, and commentary.`,
    };
  }

  const title = `Chapter ${chapterNum}: ${chapter.name} - ${chapter.name_meaning}`;
  const description = `${chapter.summary} Read all ${chapter.verses_count} verses with Sanskrit, transliteration, and practical commentary.`;

  return {
    title: title,
    description: description,
    openGraph: {
      title: `${title} | Bhagavad Gita`,
      description: description,
      type: 'article',
      url: `https://mydharmapath.com/gita/${chapterNum}`,
    },
    twitter: {
      card: 'summary',
      title: `${title} | Bhagavad Gita`,
      description: description,
    },
    keywords: [
      'Bhagavad Gita',
      `Chapter ${chapterNum}`,
      chapter.name,
      chapter.name_meaning,
      'Sanskrit',
      'Hindu scripture',
      'Krishna',
      'Arjuna',
    ],
  };
}

export default function ChapterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
