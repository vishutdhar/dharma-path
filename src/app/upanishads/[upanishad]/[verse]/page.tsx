'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import {
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  Star,
  Share2,
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import {
  getUpanishadById,
  getVedaName,
  isValidUpanishadId,
} from '@/data/upanishads';

export default function UpanishadVersePage() {
  const params = useParams();
  const upanishadId = params.upanishad as string;
  const verseParam = params.verse as string;

  // Parse verse param (format: "1-1" for section 1, verse 1)
  const [sectionNum, verseNum] = verseParam.split('-').map((n) => parseInt(n));

  // Validate upanishad ID
  if (!isValidUpanishadId(upanishadId)) {
    notFound();
  }

  // Get Upanishad data
  const upanishad = getUpanishadById(upanishadId);

  if (!upanishad) {
    notFound();
  }

  // Validate section and verse numbers
  if (isNaN(sectionNum) || isNaN(verseNum)) {
    notFound();
  }

  const section = upanishad.sections.find((s) => s.number === sectionNum);
  if (!section) {
    notFound();
  }

  const verse = section.verses.find((v) => v.verse === verseNum);
  if (!verse) {
    notFound();
  }

  // Find indices for navigation
  const sectionIndex = upanishad.sections.findIndex((s) => s.number === sectionNum);
  const verseIndex = section.verses.findIndex((v) => v.verse === verseNum);

  // Calculate total verse count and current position
  const totalVerses = upanishad.sections.reduce(
    (acc, s) => acc + s.verses.length,
    0
  );

  const getCurrentVerseNumber = () => {
    let count = 0;
    for (let i = 0; i < sectionIndex; i++) {
      count += upanishad.sections[i].verses.length;
    }
    return count + verseIndex + 1;
  };

  // Navigation helpers
  const getPrevVerse = (): { section: number; verse: number } | null => {
    if (verseIndex > 0) {
      return { section: sectionNum, verse: section.verses[verseIndex - 1].verse };
    } else if (sectionIndex > 0) {
      const prevSection = upanishad.sections[sectionIndex - 1];
      return {
        section: prevSection.number,
        verse: prevSection.verses[prevSection.verses.length - 1].verse,
      };
    }
    return null;
  };

  const getNextVerse = (): { section: number; verse: number } | null => {
    if (verseIndex < section.verses.length - 1) {
      return { section: sectionNum, verse: section.verses[verseIndex + 1].verse };
    } else if (sectionIndex < upanishad.sections.length - 1) {
      const nextSection = upanishad.sections[sectionIndex + 1];
      return { section: nextSection.number, verse: nextSection.verses[0].verse };
    }
    return null;
  };

  const prevVerse = getPrevVerse();
  const nextVerse = getNextVerse();

  const [expanded, setExpanded] = useState(true);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400';
      case 'intermediate':
        return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400';
      case 'advanced':
        return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400';
      default:
        return 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-400';
    }
  };

  const handleShare = async () => {
    const text = `${upanishad.name.english} ${sectionNum}.${verseNum}\n\n"${verse.translation}"\n\nFrom the Upanishads`;

    if (navigator.share) {
      try {
        await navigator.share({ text });
      } catch (_err) {
        // User cancelled or error
      }
    } else {
      navigator.clipboard.writeText(text);
    }
  };

  return (
    <main className="min-h-screen pb-24 bg-cream-100 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-cream-200 dark:border-gray-700 sticky top-0 z-40 transition-colors">
        <div className="max-w-2xl lg:max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Link
              href={`/upanishads/${upanishadId}`}
              className="p-2 -ml-2 rounded-lg hover:bg-cream-100 dark:hover:bg-gray-700"
            >
              <ArrowLeft size={24} className="text-gray-600 dark:text-gray-400" />
            </Link>
            <div className="flex-1">
              <h1 className="font-heading text-lg font-bold text-gray-900 dark:text-gray-100">
                {upanishad.name.english} {sectionNum}.{verseNum}
              </h1>
              <p className="text-sm text-saffron-600 dark:text-saffron-400">
                {section.name.english} • {getVedaName(upanishad.veda)}
              </p>
            </div>
            <span className="text-sm text-gray-400">
              {getCurrentVerseNumber()} / {totalVerses}
            </span>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-2xl lg:max-w-4xl mx-auto px-6 py-6">
        {/* Verse Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden transition-colors">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-saffron-50 to-cream-100 dark:from-saffron-900/30 dark:to-gray-800 px-6 py-4 border-b border-cream-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-heading text-lg font-semibold text-saffron-800 dark:text-saffron-400">
                  {upanishad.name.english} {sectionNum}.{verseNum}
                </span>
                {verse.famousVerse && (
                  <span className="flex items-center gap-1 px-2 py-0.5 bg-saffron-100 dark:bg-saffron-900/30 text-saffron-700 dark:text-saffron-400 rounded-full text-xs">
                    <Star size={12} fill="currentColor" />
                    Famous
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="p-2 rounded-full hover:bg-saffron-100 dark:hover:bg-saffron-900/30 text-saffron-600 dark:text-saffron-400 transition-colors"
                  aria-label="Share verse"
                >
                  <Share2 size={18} />
                </button>
                <span
                  className={`px-2 py-1 rounded text-xs ${getDifficultyColor(verse.difficulty)}`}
                >
                  {verse.difficulty}
                </span>
              </div>
            </div>
          </div>

          {/* Card Content */}
          <div className="p-6">
            {/* Sanskrit */}
            <div className="font-sanskrit text-xl text-center mb-4 leading-relaxed text-gray-800 dark:text-gray-200">
              {verse.sanskrit}
            </div>

            {/* Transliteration */}
            <p className="text-center text-sm mb-6 italic text-gray-500 dark:text-gray-400">
              {verse.transliteration}
            </p>

            {/* Divider */}
            <div className="divider-gold my-6" />

            {/* Translation */}
            <blockquote className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center italic">
              "{verse.translation}"
            </blockquote>

            {/* Mahavakya Badge */}
            {verse.mahavakya && (
              <div className="mt-6 p-4 bg-saffron-50 dark:bg-saffron-900/20 rounded-lg border border-saffron-200 dark:border-saffron-800">
                <p className="text-center text-sm font-medium text-saffron-800 dark:text-saffron-400 mb-1">
                  Mahavakya (Great Saying)
                </p>
                <p className="text-center font-sanskrit text-xl text-saffron-700 dark:text-saffron-300">
                  {verse.mahavakya.statement}
                </p>
                <p className="text-center text-sm italic text-saffron-600 dark:text-saffron-400">
                  {verse.mahavakya.transliteration}
                </p>
                <p className="text-center text-gray-600 dark:text-gray-400 mt-2">
                  "{verse.mahavakya.meaning}"
                </p>
              </div>
            )}

            {/* Expandable Explanation */}
            <div className="mt-6">
              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center justify-center gap-2 w-full py-2 text-saffron-600 dark:text-saffron-400 hover:text-saffron-700 dark:hover:text-saffron-300 transition-colors"
              >
                <span className="text-sm font-medium">
                  {expanded ? 'Hide Explanation' : 'What Does This Mean?'}
                </span>
                <ChevronRight
                  size={18}
                  className={expanded ? 'rotate-90' : ''}
                />
              </button>

              {expanded && (
                <div className="mt-4 space-y-4 animate-fade-in">
                  {/* Simple Explanation */}
                  <div className="p-4 bg-cream-50 dark:bg-gray-700/50 rounded-lg">
                    <p className="font-medium text-saffron-700 dark:text-saffron-400 mb-2">
                      What This Means:
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-7 text-[15px]">
                      {verse.explanation.simple}
                    </p>
                  </div>

                  {/* Deeper Explanation */}
                  {verse.explanation.deeper && (
                    <div className="p-4 bg-saffron-50 dark:bg-saffron-900/20 rounded-lg">
                      <p className="font-medium text-saffron-700 dark:text-saffron-400 mb-2">
                        Going Deeper:
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 leading-7 text-[15px]">
                        {verse.explanation.deeper}
                      </p>
                    </div>
                  )}

                  {/* Practical Application */}
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-800">
                    <p className="font-medium text-green-700 dark:text-green-400 mb-2">
                      How To Apply This:
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-7 text-[15px]">
                      {verse.practicalApplication}
                    </p>
                  </div>

                  {/* Key Terms */}
                  {verse.keyTerms && verse.keyTerms.length > 0 && (
                    <div className="p-4 bg-white dark:bg-gray-700/50 rounded-lg border border-cream-200 dark:border-gray-600">
                      <p className="font-medium text-gray-700 dark:text-gray-300 mb-3">
                        Key Sanskrit Terms:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {verse.keyTerms.map((term, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 px-3 py-1 bg-saffron-50 dark:bg-saffron-900/30 rounded-full text-sm"
                          >
                            <span className="font-medium text-saffron-700 dark:text-saffron-400">
                              {term.term}
                            </span>
                            <span className="text-gray-500 dark:text-gray-400">
                              = {term.meaning}
                            </span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Themes */}
                  {verse.themes && verse.themes.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {verse.themes.map((theme, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs"
                        >
                          #{theme}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Verse Navigation */}
        <div className="flex items-center justify-between mt-6">
          {prevVerse ? (
            <Link
              href={`/upanishads/${upanishadId}/${prevVerse.section}-${prevVerse.verse}`}
              className="flex items-center gap-2 px-4 py-3 rounded-xl font-medium bg-white dark:bg-gray-800 text-saffron-600 dark:text-saffron-400 hover:bg-saffron-50 dark:hover:bg-gray-700 shadow-sm border border-cream-200 dark:border-gray-700 transition-all"
            >
              <ChevronLeft size={20} />
              {prevVerse.section}.{prevVerse.verse}
            </Link>
          ) : (
            <div />
          )}

          {nextVerse ? (
            <Link
              href={`/upanishads/${upanishadId}/${nextVerse.section}-${nextVerse.verse}`}
              className="flex items-center gap-2 px-4 py-3 rounded-xl font-medium bg-saffron-500 text-white hover:bg-saffron-600 shadow-lg transition-all"
            >
              {nextVerse.section}.{nextVerse.verse}
              <ChevronRight size={20} />
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* Quick Navigation */}
        <div className="mt-8 text-center space-y-3">
          <Link
            href={`/upanishads/${upanishadId}`}
            className="text-sm text-saffron-600 dark:text-saffron-400 font-medium hover:underline block"
          >
            View all verses in {upanishad.name.english}
          </Link>
          <Link
            href="/upanishads"
            className="text-sm text-gray-500 dark:text-gray-400 hover:underline block"
          >
            ← Back to All Upanishads
          </Link>
        </div>
      </div>

      <Navigation />
    </main>
  );
}
