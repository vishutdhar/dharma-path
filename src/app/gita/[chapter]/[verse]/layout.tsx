/**
 * Gita Verse Layout - SEO metadata for individual verses
 *
 * When someone shares a specific verse link:
 * - Title: "Bhagavad Gita 2:47 | Dharma Path"
 * - Description: A preview of this famous verse
 *
 * This is especially important for famous verses like 2:47 (Karma Yoga essence)
 */

import { Metadata } from 'next';
import { chapters } from '@/data/gitaData';

// Famous verse descriptions for SEO (most searched verses)
const famousVerses: Record<string, string> = {
  '2:47': 'You have the right to work, but never to the fruit of work. The essence of Karma Yoga and one of the most famous verses.',
  '2:14': 'The contacts of the senses with their objects cause cold and heat, pleasure and pain. They come and go; bear them patiently.',
  '2:20': 'The soul is never born nor dies. It is eternal, primeval, and not slain when the body is slain.',
  '2:22': 'As a person puts on new garments, giving up old ones, the soul similarly accepts new material bodies.',
  '4:7': 'Whenever righteousness declines and unrighteousness prevails, I manifest myself. Krishna\'s promise of divine intervention.',
  '4:8': 'To protect the good, destroy the wicked, and establish dharma, I appear age after age.',
  '9:22': 'To those who worship me with devotion, meditating on my transcendent form, I carry what they lack and preserve what they have.',
  '11:32': 'Time I am, the great destroyer of worlds. The famous verse quoted by Oppenheimer.',
  '18:66': 'Abandon all dharmas and surrender unto me alone. I shall deliver you from all sins. Do not grieve. The final teaching.',
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ chapter: string; verse: string }>;
}): Promise<Metadata> {
  const { chapter: chapterParam, verse: verseParam } = await params;
  const chapterNum = parseInt(chapterParam);
  const verseNum = parseInt(verseParam);

  const chapter = chapters.find(c => c.chapter_number === chapterNum);
  const verseRef = `${chapterNum}:${verseNum}`;

  // Check if this is a famous verse with custom description
  const famousDescription = famousVerses[verseRef];

  const title = `Bhagavad Gita ${verseRef}`;
  const baseDescription = famousDescription
    || `Verse ${verseNum} of Chapter ${chapterNum}${chapter ? ` (${chapter.name})` : ''}. Read with Sanskrit text, transliteration, translation, and practical commentary.`;

  return {
    title: title,
    description: baseDescription,
    openGraph: {
      title: `${title} | Dharma Path`,
      description: baseDescription,
      type: 'article',
      url: `https://mydharmapath.com/gita/${chapterNum}/${verseNum}`,
    },
    twitter: {
      card: 'summary',
      title: `${title} | Dharma Path`,
      description: baseDescription,
    },
    keywords: [
      'Bhagavad Gita',
      verseRef,
      `Gita ${verseRef}`,
      'Sanskrit verse',
      chapter?.name || '',
      'Hindu scripture',
    ].filter(Boolean),
  };
}

export default function VerseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
