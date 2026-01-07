'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import {
  ArrowLeft,
  BookOpen,
  ChevronRight,
  Sparkles,
  Star,
  ChevronLeft,
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import {
  getUpanishadById,
  getVedaName,
  isValidUpanishadId,
  Upanishad,
  UpanishadSection,
  UpanishadVerse,
  getAllUpanishadSummaries,
} from '@/data/upanishads';

export default function UpanishadDetailPage() {
  const params = useParams();
  const upanishadId = params.upanishad as string;

  // Validate upanishad ID
  if (!isValidUpanishadId(upanishadId)) {
    notFound();
  }

  // Get Upanishad data
  const upanishad = getUpanishadById(upanishadId);

  // If this Upanishad doesn't have content yet, show coming soon
  if (!upanishad) {
    return <ComingSoonPage upanishadId={upanishadId} />;
  }

  const [currentSection, setCurrentSection] = useState(0);
  const [currentVerseIndex, setCurrentVerseIndex] = useState(0);

  const section = upanishad.sections[currentSection];
  const verse = section?.verses[currentVerseIndex];

  const totalVerses = upanishad.sections.reduce(
    (acc, s) => acc + s.verses.length,
    0
  );

  // Calculate overall verse number (for display)
  const getCurrentVerseNumber = () => {
    let count = 0;
    for (let i = 0; i < currentSection; i++) {
      count += upanishad.sections[i].verses.length;
    }
    return count + currentVerseIndex + 1;
  };

  // Navigation helpers
  const canGoPrev = currentVerseIndex > 0 || currentSection > 0;
  const canGoNext =
    currentVerseIndex < section.verses.length - 1 ||
    currentSection < upanishad.sections.length - 1;

  const goToPrev = () => {
    if (currentVerseIndex > 0) {
      setCurrentVerseIndex(currentVerseIndex - 1);
    } else if (currentSection > 0) {
      const prevSection = upanishad.sections[currentSection - 1];
      setCurrentSection(currentSection - 1);
      setCurrentVerseIndex(prevSection.verses.length - 1);
    }
  };

  const goToNext = () => {
    if (currentVerseIndex < section.verses.length - 1) {
      setCurrentVerseIndex(currentVerseIndex + 1);
    } else if (currentSection < upanishad.sections.length - 1) {
      setCurrentSection(currentSection + 1);
      setCurrentVerseIndex(0);
    }
  };

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
              href="/upanishads"
              className="p-2 -ml-2 rounded-lg hover:bg-cream-100 dark:hover:bg-gray-700"
            >
              <ArrowLeft size={24} className="text-gray-600 dark:text-gray-400" />
            </Link>
            <div className="flex-1">
              <h1 className="font-heading text-lg font-bold text-gray-900 dark:text-gray-100">
                {upanishad.name.english}
              </h1>
              <p className="text-sm text-saffron-600 dark:text-saffron-400">
                {section.name.english} • Verse {verse.verse}
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
        {/* Curated Content Notice */}
        {upanishad.totalVerses !== upanishad.includedVerses && (
          <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
            <div className="flex items-start gap-3">
              <BookOpen size={20} className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
                  Curated Selection ({upanishad.includedVerses} of {upanishad.totalVerses} verses)
                </p>
                <p className="text-xs text-amber-700 dark:text-amber-300 mt-1">
                  A curated selection of key philosophical passages. The complete {upanishad.name.english} contains
                  additional sections on meditation techniques and sacred practices.
                </p>
              </div>
            </div>
          </div>
        )}

        {verse && (
          <>
            {/* Verse Card */}
            <UpanishadVerseCard verse={verse} upanishadName={upanishad.name.english} />

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

            {/* Section Navigation */}
            {upanishad.sections.length > 1 && (
              <div className="mt-8">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 text-center">
                  Jump to section
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {upanishad.sections.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setCurrentSection(idx);
                        setCurrentVerseIndex(0);
                      }}
                      className={`
                        px-4 py-2 rounded-lg text-sm font-medium transition-all
                        ${
                          idx === currentSection
                            ? 'bg-saffron-500 text-white shadow-md'
                            : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-saffron-50 dark:hover:bg-gray-700 border border-cream-200 dark:border-gray-700'
                        }
                      `}
                    >
                      {s.name.english}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Verse Picker */}
            <div className="mt-8">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 text-center">
                Jump to verse in {section.name.english}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {section.verses.map((v, idx) => (
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

            {/* Quick Navigation */}
            <div className="mt-8 text-center">
              <Link
                href="/upanishads"
                className="text-sm text-gray-500 dark:text-gray-400 hover:underline"
              >
                ← Back to All Upanishads
              </Link>
            </div>
          </>
        )}
      </div>

      <Navigation />
    </main>
  );
}

// Verse Card Component for Upanishads
function UpanishadVerseCard({
  verse,
  upanishadName,
}: {
  verse: UpanishadVerse;
  upanishadName: string;
}) {
  const [expanded, setExpanded] = useState(true); // Default expanded for scripture reading

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
              Verse {verse.section}.{verse.verse}
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

// Coming Soon page for Upanishads without content yet
function ComingSoonPage({ upanishadId }: { upanishadId: string }) {
  const allUpanishads = getAllUpanishadSummaries();
  const summary = allUpanishads.find((u) => u.id === upanishadId);

  if (!summary) {
    notFound();
  }

  return (
    <main className="min-h-screen pb-24 bg-cream-100 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="bg-gradient-to-br from-saffron-600 to-saffron-500 text-white">
        <div className="max-w-2xl lg:max-w-4xl mx-auto px-6 pt-6 pb-8">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/upanishads" className="p-2 -ml-2 rounded-lg hover:bg-white/10">
              <ArrowLeft size={24} />
            </Link>
            <div>
              <h1 className="font-heading text-2xl font-bold">{summary.name.english}</h1>
              <p className="text-saffron-100 text-sm">{getVedaName(summary.veda)}</p>
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
            This Upanishad will have {summary.totalVerses} verses
            {summary.isCurated ? ` (${summary.includedVerses} curated)` : ''}.
          </p>
          <Link
            href="/upanishads"
            className="inline-block mt-6 px-6 py-3 bg-saffron-500 text-white rounded-xl font-medium hover:bg-saffron-600 transition-colors"
          >
            Explore Available Upanishads
          </Link>
        </div>
      </div>

      <Navigation />
    </main>
  );
}
