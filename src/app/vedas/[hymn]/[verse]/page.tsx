'use client';

import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import {
  ArrowLeft,
  ChevronRight,
  Star,
  ChevronLeft,
  BookOpen,
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import ShareButton from '@/components/ShareButton';
import {
  getHymn,
  VedicHymnId,
  hymnSummaries,
} from '@/data/vedas';

// Validate hymn ID
function isValidHymnId(id: string): id is VedicHymnId {
  return hymnSummaries.some(h => h.id === id);
}

export default function VerseDetailPage() {
  const params = useParams();
  const hymnId = params.hymn as string;
  const verseNum = parseInt(params.verse as string, 10);

  // Validate hymn ID
  if (!isValidHymnId(hymnId)) {
    notFound();
  }

  // Get hymn data
  const hymn = getHymn(hymnId);

  if (!hymn) {
    notFound();
  }

  // Find the verse
  const verseIndex = hymn.verses.findIndex(v => v.verse === verseNum);
  if (verseIndex === -1) {
    notFound();
  }

  const verse = hymn.verses[verseIndex];
  const totalVerses = hymn.verses.length;

  // Navigation
  const prevVerse = verseIndex > 0 ? hymn.verses[verseIndex - 1] : null;
  const nextVerse = verseIndex < totalVerses - 1 ? hymn.verses[verseIndex + 1] : null;

  // Construct the URL for sharing
  const shareUrl = `/vedas/${hymnId}/${verse.verse}`;

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

  return (
    <main className="min-h-screen pb-24 bg-cream-100 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-cream-200 dark:border-gray-700 sticky top-0 z-40 transition-colors">
        <div className="max-w-2xl lg:max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Link
              href={`/vedas/${hymnId}`}
              aria-label="Go back"
              className="p-2 -ml-2 rounded-lg hover:bg-cream-100 dark:hover:bg-gray-700"
            >
              <ArrowLeft size={24} className="text-gray-600 dark:text-gray-400" />
            </Link>
            <div className="flex-1">
              <h1 className="font-heading text-lg font-bold text-gray-900 dark:text-gray-100">
                {hymn.name.english}
              </h1>
              <p className="text-sm text-saffron-700 dark:text-saffron-400">
                {hymn.reference} • Verse {verse.verse}
              </p>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {verseIndex + 1} / {totalVerses}
            </span>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-2xl lg:max-w-4xl mx-auto px-6 py-6">
        {/* Verse Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden transition-colors">
          {/* Header */}
          <div className="bg-gradient-to-r from-saffron-50 to-cream-100 dark:from-saffron-900/30 dark:to-gray-800 px-6 py-4 border-b border-cream-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-heading text-lg font-semibold text-saffron-800 dark:text-saffron-400">
                  Verse {verse.verse}
                </span>
                {verse.famousVerse && (
                  <span className="flex items-center gap-1 px-2 py-0.5 bg-saffron-100 dark:bg-saffron-900/30 text-saffron-700 dark:text-saffron-400 rounded-full text-xs">
                    <Star size={12} fill="currentColor" />
                    Famous
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <ShareButton
                  title={`${hymn.name.english} - Verse ${verse.verse}`}
                  text={verse.translation}
                  url={shareUrl}
                />
                <span className={`px-2 py-1 rounded text-xs ${getDifficultyColor(verse.difficulty)}`}>
                  {verse.difficulty}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Sanskrit */}
            <div className="font-sanskrit text-xl text-center mb-4 leading-relaxed text-gray-800 dark:text-gray-200 whitespace-pre-line">
              {verse.sanskrit}
            </div>

            {/* Transliteration */}
            <p className="text-center text-sm mb-6 italic text-gray-500 dark:text-gray-400 whitespace-pre-line">
              {verse.transliteration}
            </p>

            {/* Divider */}
            <div className="divider-gold my-6" />

            {/* Translation */}
            <blockquote className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center italic whitespace-pre-line">
              &ldquo;{verse.translation}&rdquo;
            </blockquote>

            {/* Explanation */}
            <div className="mt-6 space-y-4">
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
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          {prevVerse ? (
            <Link
              href={`/vedas/${hymnId}/${prevVerse.verse}`}
              className="flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all bg-white dark:bg-gray-800 text-saffron-700 dark:text-saffron-400 hover:bg-saffron-50 dark:hover:bg-gray-700 shadow-sm border border-cream-200 dark:border-gray-700"
            >
              <ChevronLeft size={20} />
              Previous
            </Link>
          ) : (
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl font-medium bg-cream-200 dark:bg-gray-700 text-cream-400 dark:text-gray-500 cursor-not-allowed">
              <ChevronLeft size={20} />
              Previous
            </div>
          )}

          {nextVerse ? (
            <Link
              href={`/vedas/${hymnId}/${nextVerse.verse}`}
              className="flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all bg-saffron-700 text-white hover:bg-saffron-800 shadow-lg"
            >
              Next
              <ChevronRight size={20} />
            </Link>
          ) : (
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl font-medium bg-cream-200 dark:bg-gray-700 text-cream-400 dark:text-gray-500 cursor-not-allowed">
              Next
              <ChevronRight size={20} />
            </div>
          )}
        </div>

        {/* View All Verses Link */}
        <div className="mt-8 text-center">
          <Link
            href={`/vedas/${hymnId}`}
            className="inline-flex items-center gap-2 text-sm text-saffron-700 dark:text-saffron-400 hover:underline"
          >
            <BookOpen size={16} />
            View all {totalVerses} verses in {hymn.name.english}
          </Link>
        </div>

        {/* Back Link */}
        <div className="mt-4 text-center">
          <Link
            href="/vedas"
            className="text-sm text-gray-500 dark:text-gray-400 hover:underline"
          >
            ← Back to All Vedic Hymns
          </Link>
        </div>
      </div>

      <Navigation />
    </main>
  );
}
