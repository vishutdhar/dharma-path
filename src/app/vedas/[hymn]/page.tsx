'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import {
  ArrowLeft,
  BookOpen,
  ChevronRight,
  Star,
  ChevronLeft,
  Sun,
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import {
  getHymn,
  getHymnSummary,
  getVedaName,
  VedicHymn,
  VedicVerse,
  VedicHymnId,
  hymnSummaries,
} from '@/data/vedas';

// Validate hymn ID
function isValidHymnId(id: string): id is VedicHymnId {
  return hymnSummaries.some(h => h.id === id);
}

export default function HymnDetailPage() {
  const params = useParams();
  const hymnId = params.hymn as string;

  // Validate hymn ID
  if (!isValidHymnId(hymnId)) {
    notFound();
  }

  // Get hymn data
  const hymn = getHymn(hymnId);

  // If this hymn doesn't have content yet, show coming soon
  if (!hymn) {
    return <ComingSoonPage hymnId={hymnId} />;
  }

  const [currentVerseIndex, setCurrentVerseIndex] = useState(0);

  const verse = hymn.verses[currentVerseIndex];
  const totalVerses = hymn.verses.length;

  // Navigation helpers
  const canGoPrev = currentVerseIndex > 0;
  const canGoNext = currentVerseIndex < hymn.verses.length - 1;

  const goToPrev = () => {
    if (canGoPrev) {
      setCurrentVerseIndex(currentVerseIndex - 1);
    }
  };

  const goToNext = () => {
    if (canGoNext) {
      setCurrentVerseIndex(currentVerseIndex + 1);
    }
  };

  return (
    <main className="min-h-screen pb-24 bg-cream-100 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-cream-200 dark:border-gray-700 sticky top-0 z-40 transition-colors">
        <div className="max-w-2xl lg:max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Link
              href="/vedas"
              className="p-2 -ml-2 rounded-lg hover:bg-cream-100 dark:hover:bg-gray-700"
            >
              <ArrowLeft size={24} className="text-gray-600 dark:text-gray-400" />
            </Link>
            <div className="flex-1">
              <h1 className="font-heading text-lg font-bold text-gray-900 dark:text-gray-100">
                {hymn.name.english}
              </h1>
              <p className="text-sm text-saffron-600 dark:text-saffron-400">
                {hymn.reference} • Verse {verse.verse}
              </p>
            </div>
            <span className="text-sm text-gray-400">
              {currentVerseIndex + 1} / {totalVerses}
            </span>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-2xl lg:max-w-4xl mx-auto px-6 py-6">
        {/* Hymn Intro (on first verse only) */}
        {currentVerseIndex === 0 && (
          <div className="mb-6 p-4 bg-saffron-50 dark:bg-saffron-900/20 border border-saffron-200 dark:border-saffron-800 rounded-xl">
            <div className="flex items-start gap-3">
              <Sun size={20} className="text-saffron-600 dark:text-saffron-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-saffron-800 dark:text-saffron-200">
                  {hymn.name.english}
                </p>
                <p className="text-xs text-saffron-700 dark:text-saffron-300 mt-1">
                  {hymn.summary}
                </p>
                {hymn.usedIn && hymn.usedIn.length > 0 && (
                  <p className="text-xs text-saffron-600 dark:text-saffron-400 mt-2">
                    <strong>Used in:</strong> {hymn.usedIn.join(', ')}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {verse && (
          <>
            {/* Verse Card */}
            <VedicVerseCard verse={verse} hymnName={hymn.name.english} />

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={goToPrev}
                disabled={!canGoPrev}
                className={`
                  flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all
                  ${
                    canGoPrev
                      ? 'bg-white dark:bg-gray-800 text-saffron-600 dark:text-saffron-400 hover:bg-saffron-50 dark:hover:bg-gray-700 shadow-sm border border-cream-200 dark:border-gray-700'
                      : 'bg-cream-200 dark:bg-gray-700 text-cream-400 dark:text-gray-500 cursor-not-allowed'
                  }
                `}
              >
                <ChevronLeft size={20} />
                Previous
              </button>

              <button
                onClick={goToNext}
                disabled={!canGoNext}
                className={`
                  flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all
                  ${
                    canGoNext
                      ? 'bg-saffron-500 text-white hover:bg-saffron-600 shadow-lg'
                      : 'bg-cream-200 dark:bg-gray-700 text-cream-400 dark:text-gray-500 cursor-not-allowed'
                  }
                `}
              >
                Next
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Verse Picker */}
            {totalVerses > 1 && (
              <div className="mt-8">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 text-center">
                  Jump to verse
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {hymn.verses.map((v, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentVerseIndex(idx)}
                      className={`
                        w-10 h-10 rounded-lg text-sm font-medium transition-all
                        ${
                          idx === currentVerseIndex
                            ? 'bg-saffron-500 text-white shadow-md'
                            : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-saffron-50 dark:hover:bg-gray-700 border border-cream-200 dark:border-gray-700'
                        }
                      `}
                    >
                      {v.verse}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Navigation */}
            <div className="mt-8 text-center">
              <Link
                href="/vedas"
                className="text-sm text-gray-500 dark:text-gray-400 hover:underline"
              >
                ← Back to All Vedic Hymns
              </Link>
            </div>
          </>
        )}
      </div>

      <Navigation />
    </main>
  );
}

// Verse Card Component for Vedic Hymns
function VedicVerseCard({
  verse,
  hymnName,
}: {
  verse: VedicVerse;
  hymnName: string;
}) {
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

  return (
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
          <span className={`px-2 py-1 rounded text-xs ${getDifficultyColor(verse.difficulty)}`}>
            {verse.difficulty}
          </span>
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

        {/* Expandable Explanation */}
        <div className="mt-6">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center justify-center gap-2 w-full py-2 text-saffron-600 dark:text-saffron-400 hover:text-saffron-700 dark:hover:text-saffron-300 transition-colors"
          >
            <span className="text-sm font-medium">
              {expanded ? 'Hide Explanation' : 'What Does This Mean?'}
            </span>
            {expanded ? (
              <ChevronRight size={18} className="rotate-90" />
            ) : (
              <ChevronRight size={18} />
            )}
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
  );
}

// Coming Soon page for hymns without content yet
function ComingSoonPage({ hymnId }: { hymnId: string }) {
  const summary = getHymnSummary(hymnId as VedicHymnId);

  if (!summary) {
    notFound();
  }

  return (
    <main className="min-h-screen pb-24 bg-cream-100 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="bg-gradient-to-br from-saffron-600 to-saffron-500 text-white">
        <div className="max-w-2xl lg:max-w-4xl mx-auto px-6 pt-6 pb-8">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/vedas" className="p-2 -ml-2 rounded-lg hover:bg-white/10">
              <ArrowLeft size={24} />
            </Link>
            <div>
              <h1 className="font-heading text-2xl font-bold">{summary.name.english}</h1>
              <p className="text-saffron-100 text-sm">{summary.reference}</p>
            </div>
          </div>

          {/* Sanskrit Name */}
          <div className="text-center py-4">
            <p className="font-sanskrit text-3xl text-white/80 mb-2">{summary.name.sanskrit}</p>
          </div>
        </div>
        <div className="h-6 bg-cream-100 dark:bg-gray-900 rounded-t-[2rem] transition-colors" />
      </header>

      {/* Content */}
      <div className="max-w-2xl lg:max-w-4xl mx-auto px-6 -mt-2">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 text-center border border-cream-200 dark:border-gray-700">
          <div className="w-16 h-16 bg-saffron-100 dark:bg-saffron-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="text-saffron-600 dark:text-saffron-400" size={32} />
          </div>
          <h2 className="font-heading text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Coming Soon
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{summary.summary}</p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            This hymn will have {summary.totalVerses} {summary.totalVerses === 1 ? 'verse' : 'verses'}.
          </p>
          <Link
            href="/vedas"
            className="inline-block mt-6 px-6 py-3 bg-saffron-500 text-white rounded-xl font-medium hover:bg-saffron-600 transition-colors"
          >
            Explore Available Hymns
          </Link>
        </div>
      </div>

      <Navigation />
    </main>
  );
}
