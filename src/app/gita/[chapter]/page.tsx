'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { useParams, useSearchParams, useRouter, notFound } from 'next/navigation';
import { ArrowLeft, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import VerseCard from '@/components/VerseCard';
import { VerseCardSkeleton } from '@/components/Skeleton';
import { getChapter, getVerse, GitaChapter, GitaVerse } from '@/lib/api';
import { toggleBookmark } from '@/lib/progress';

/**
 * Calculate which verse numbers to show in the pagination picker.
 * Always keeps the current verse centered when possible.
 * Handles edge cases at start and end of chapter.
 */
function getVisibleVerses(current: number, total: number, siblings: number = 2): number[] {
  const totalVisible = siblings * 2 + 1; // e.g., 5 for siblings=2

  // If total verses fit in visible range, show all
  if (total <= totalVisible) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  let start = current - siblings;
  let end = current + siblings;

  // Shift range if at start edge
  if (start < 1) {
    start = 1;
    end = totalVisible;
  }

  // Shift range if at end edge
  if (end > total) {
    end = total;
    start = total - totalVisible + 1;
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

export default function ChapterPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const chapterNum = parseInt(params.chapter as string);

  // Validate chapter number (Bhagavad Gita has exactly 18 chapters)
  if (isNaN(chapterNum) || chapterNum < 1 || chapterNum > 18) {
    notFound();
  }

  // Get verse from URL search params
  const urlVerse = parseInt(searchParams.get('v') || '1') || 1;

  const [chapter, setChapter] = useState<GitaChapter | null>(null);
  const [verses, setVerses] = useState<GitaVerse[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentVerse, setCurrentVerse] = useState(urlVerse);
  const [bookmarks, setBookmarks] = useState<Set<string>>(new Set());

  // Sync currentVerse with URL when searchParams changes (handles page load and browser back/forward)
  useEffect(() => {
    if (urlVerse !== currentVerse) {
      setCurrentVerse(urlVerse);
    }
  }, [urlVerse]);

  // Update URL when verse changes (without full page navigation)
  const updateVerseInUrl = useCallback((verseNum: number) => {
    // Use shallow routing to update URL without re-rendering the page
    const newUrl = verseNum === 1
      ? `/gita/${chapterNum}` // Clean URL for verse 1
      : `/gita/${chapterNum}?v=${verseNum}`;
    router.replace(newUrl, { scroll: false });
  }, [chapterNum, router]);

  // Wrapper function to update both state and URL
  const navigateToVerse = useCallback((verseNum: number) => {
    setCurrentVerse(verseNum);
    updateVerseInUrl(verseNum);
  }, [updateVerseInUrl]);

  useEffect(() => {
    const loadChapter = async () => {
      setLoading(true);
      const chapterData = await getChapter(chapterNum);
      setChapter(chapterData);

      if (chapterData) {
        // Validate and clamp the initial verse to valid range
        const validInitialVerse = Math.max(1, Math.min(urlVerse, chapterData.verses_count));

        // Update state if URL had invalid verse number
        if (validInitialVerse !== currentVerse) {
          setCurrentVerse(validInitialVerse);
        }

        // Load the initial verse (from URL or default to 1)
        const verseToLoad = await getVerse(chapterNum, validInitialVerse);
        if (verseToLoad) {
          setVerses([verseToLoad]);
        }
      }
      setLoading(false);
    };

    loadChapter();
  }, [chapterNum, urlVerse]); // Re-run when chapter or initial verse from URL changes

  // Load more verses as user navigates
  useEffect(() => {
    const loadVerse = async () => {
      if (!verses.find(v => v.verse === currentVerse)) {
        const verseData = await getVerse(chapterNum, currentVerse);
        if (verseData) {
          setVerses(prev => {
            const exists = prev.find(v => v.verse === currentVerse);
            if (exists) return prev;
            return [...prev, verseData].sort((a, b) => a.verse - b.verse);
          });
        }
      }
    };
    loadVerse();
  }, [currentVerse, chapterNum, verses]);

  const handleBookmark = (ref: string) => {
    const isNowBookmarked = toggleBookmark(ref);
    setBookmarks(prev => {
      const next = new Set(prev);
      if (isNowBookmarked) {
        next.add(ref);
      } else {
        next.delete(ref);
      }
      return next;
    });
  };

  const currentVerseData = verses.find(v => v.verse === currentVerse);
  const canGoPrev = currentVerse > 1;
  const canGoNext = chapter && currentVerse < chapter.verses_count;

  const chapterNames = [
    "Arjuna's Dilemma",
    "The Eternal Soul",
    "Path of Action",
    "Path of Knowledge",
    "Renunciation of Action",
    "Path of Meditation",
    "Knowledge & Realization",
    "The Imperishable Brahman",
    "Royal Knowledge",
    "Divine Manifestations",
    "The Universal Form",
    "Path of Devotion",
    "The Field & Knower",
    "The Three Gunas",
    "The Supreme Person",
    "Divine & Demonic",
    "Three Types of Faith",
    "Liberation",
  ];

  return (
    <main className="min-h-screen pb-24 bg-cream-100 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-cream-200 dark:border-gray-700 sticky top-0 z-40 transition-colors">
        <div className="max-w-2xl lg:max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Link href="/gita" aria-label="Go back" className="p-2 -ml-2 rounded-lg hover:bg-cream-100 dark:hover:bg-gray-700">
              <ArrowLeft size={24} className="text-gray-600 dark:text-gray-400" />
            </Link>
            <div className="flex-1">
              <h1 className="font-heading text-lg font-bold text-gray-900 dark:text-gray-100">
                Chapter {chapterNum}
              </h1>
              <p className="text-sm text-saffron-700 dark:text-saffron-400">
                {chapterNames[chapterNum - 1] || chapter?.translation}
              </p>
            </div>
            {chapter && (
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {currentVerse} / {chapter.verses_count}
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-2xl lg:max-w-4xl mx-auto px-6 py-6">
        {/* Verse Card - conditionally rendered */}
        {loading ? (
          <VerseCardSkeleton />
        ) : currentVerseData ? (
          <VerseCard
            verse={currentVerseData}
            showExpanded={false}
            onBookmark={handleBookmark}
            isBookmarked={bookmarks.has(`${chapterNum}:${currentVerse}`)}
          />
        ) : (
          <VerseCardSkeleton />
        )}

        {/* Navigation - always visible when chapter is loaded */}
        {!loading && chapter && (
          <>
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={() => navigateToVerse(Math.max(1, currentVerse - 1))}
                disabled={!canGoPrev}
                className={`
                  flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all
                  ${canGoPrev
                    ? 'bg-white dark:bg-gray-800 text-saffron-700 dark:text-saffron-400 hover:bg-saffron-50 dark:hover:bg-gray-700 shadow-sm border border-cream-200 dark:border-gray-700'
                    : 'bg-cream-200 dark:bg-gray-700 text-cream-400 dark:text-gray-500 cursor-not-allowed'
                  }
                `}
              >
                <ChevronLeft size={20} />
                Previous
              </button>

              <button
                onClick={() => navigateToVerse(Math.min(chapter?.verses_count || currentVerse, currentVerse + 1))}
                disabled={!canGoNext}
                className={`
                  flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all
                  ${canGoNext
                    ? 'bg-saffron-700 text-white hover:bg-saffron-800 shadow-lg'
                    : 'bg-cream-200 dark:bg-gray-700 text-cream-400 dark:text-gray-500 cursor-not-allowed'
                  }
                `}
              >
                Next
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Verse Picker - Pagination Style (always centered) */}
            <nav
              className="mt-8"
              role="navigation"
              aria-label="Verse navigation"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 text-center">Jump to verse</p>
              <div className="flex items-center justify-center gap-1 sm:gap-2">
                {/* Skip backward button */}
                <button
                  onClick={() => navigateToVerse(Math.max(1, currentVerse - 5))}
                  disabled={currentVerse <= 1}
                  aria-label="Go back 5 verses"
                  className={`
                    w-11 h-11 rounded-lg flex items-center justify-center transition-all
                    ${currentVerse > 1
                      ? 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-saffron-50 dark:hover:bg-gray-700 border border-cream-200 dark:border-gray-700'
                      : 'bg-cream-200 dark:bg-gray-700 text-cream-400 dark:text-gray-500 cursor-not-allowed'
                    }
                  `}
                >
                  <ChevronsLeft size={18} />
                </button>

                {/* Visible verse buttons */}
                {getVisibleVerses(currentVerse, chapter.verses_count, 2).map(num => (
                  <button
                    key={num}
                    onClick={() => navigateToVerse(num)}
                    aria-label={`Go to verse ${num}`}
                    aria-current={num === currentVerse ? 'page' : undefined}
                    className={`
                      w-11 h-11 rounded-lg text-sm font-medium transition-all
                      ${num === currentVerse
                        ? 'bg-saffron-700 text-white shadow-md scale-110'
                        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-saffron-50 dark:hover:bg-gray-700 border border-cream-200 dark:border-gray-700'
                      }
                    `}
                  >
                    {num}
                  </button>
                ))}

                {/* Skip forward button */}
                <button
                  onClick={() => navigateToVerse(Math.min(chapter.verses_count, currentVerse + 5))}
                  disabled={currentVerse >= chapter.verses_count}
                  aria-label="Go forward 5 verses"
                  className={`
                    w-11 h-11 rounded-lg flex items-center justify-center transition-all
                    ${currentVerse < chapter.verses_count
                      ? 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-saffron-50 dark:hover:bg-gray-700 border border-cream-200 dark:border-gray-700'
                      : 'bg-cream-200 dark:bg-gray-700 text-cream-400 dark:text-gray-500 cursor-not-allowed'
                    }
                  `}
                >
                  <ChevronsRight size={18} />
                </button>
              </div>
            </nav>
          </>
        )}
      </div>

      {/* Navigation */}
      <Navigation />
    </main>
  );
}
