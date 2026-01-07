/**
 * Upanishad Page Layout - SEO metadata for each Upanishad
 *
 * When someone shares an Upanishad link:
 * - Title: "Isha Upanishad | Dharma Path"
 * - Description: The Upanishad's summary and significance
 */

import { Metadata } from 'next';
import { upanishadMetadata } from '@/data/upanishads';
import { UpanishadId } from '@/data/upanishads/types';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ upanishad: string }>;
}): Promise<Metadata> {
  const { upanishad: upanishadId } = await params;
  const upanishad = upanishadMetadata[upanishadId as UpanishadId];

  if (!upanishad) {
    return {
      title: 'Upanishad Not Found',
      description: 'This Upanishad could not be found.',
    };
  }

  const title = upanishad.name.english;
  const description = `${upanishad.summary} ${upanishad.totalVerses} verses from the ${upanishad.veda.charAt(0).toUpperCase() + upanishad.veda.slice(1)} Veda with Sanskrit, translation, and commentary.`;

  return {
    title: title,
    description: description,
    openGraph: {
      title: `${title} | Dharma Path`,
      description: description,
      type: 'article',
      url: `https://mydharmapath.com/upanishads/${upanishadId}`,
    },
    twitter: {
      card: 'summary',
      title: `${title} | Dharma Path`,
      description: description,
    },
    keywords: [
      upanishad.name.english,
      'Upanishads',
      'Vedanta',
      `${upanishad.veda} Veda`,
      'Hindu scripture',
      'Sanskrit',
      'Brahman',
      'Atman',
    ],
  };
}

export default function UpanishadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
