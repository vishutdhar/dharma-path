'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { useParams, useSearchParams, useRouter, notFound } from 'next/navigation';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import VerseCard from '@/components/VerseCard';
import { VerseCardSkeleton } from '@/components/Skeleton';
import { getChapter, getVerse, GitaChapter, GitaVerse } from '@/lib/api';
import { toggleBookmark } from '@/lib/progress';

export default function ChapterPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const chapterNum = parseInt(params.chapter as string);

  // Validate chapter number (Bhagavad Gita has exactly 18 chapters)
  if (isNaN(chapterNum) || chapterNum < 1 || chapterNum > 18) {
    notFound();
  }

  // Get initial verse from URL search params, default to 1
  const initialVerse = parseInt(searchParams.get('v') || '1') || 1;

  const [chapter, setChapter] = useState<GitaChapter | null>(null);
  const [verses, setVerses] = useState<GitaVerse[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentVerse, setCurrentVerse] = useState(initialVerse);
  const [bookmarks, setBookmarks] = useState<Set<string>>(new Set());
  const versePickerRef = useRef<HTMLDivElement>(null);
  const verseButtonRefs = useRef<Map<number, HTMLButtonElement>>(new Map());

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
        const validInitialVerse = Math.max(1, Math.min(initialVerse, chapterData.verses_count));

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
  }, [chapterNum, initialVerse]); // Re-run when chapter or initial verse from URL changes

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

  // Scroll current verse button to center in the horizontal picker
  // Uses getBoundingClientRect for accurate positioning (offsetLeft is relative to BODY, not container)
  // setTimeout defers execution until after browser paint
  // Depends on `chapter` so it re-runs after buttons are rendered (they need chapter.verses_count)
  useEffect(() => {
    // Don't run until chapter is loaded (buttons won't exist yet)
    if (!chapter) return;

    const timeoutId = setTimeout(() => {
      const button = verseButtonRefs.current.get(currentVerse);
      const container = versePickerRef.current;
      if (button && container) {
        // Use getBoundingClientRect for consistent coordinate system
        const containerRect = container.getBoundingClientRect();
        const buttonRect = button.getBoundingClientRect();

        // Calculate button's center position within the scrollable content
        // (buttonRect.left - containerRect.left) = button position in visible area
        // + container.scrollLeft = accounts for current scroll position
        // + buttonRect.width/2 = get to button center
        const buttonCenterInContent = (buttonRect.left - containerRect.left) + container.scrollLeft + (buttonRect.width / 2);

        // Scroll to position that puts button center in container center
        const scrollLeft = buttonCenterInContent - (containerRect.width / 2);

        container.scrollTo({
          left: Math.max(0, scrollLeft),
          behavior: 'smooth',
        });
      }
    }, 0);

    // Cleanup: cancel pending scroll if verse changes rapidly or component unmounts
    return () => clearTimeout(timeoutId);
  }, [currentVerse, chapter]);

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

            {/* Verse Picker - Horizontal Scroll */}
            <div className="mt-8">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 text-center">Jump to verse</p>
              <div
                ref={versePickerRef}
                className="flex gap-2 overflow-x-auto pb-2 px-4 -mx-4 snap-x snap-mandatory scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {Array.from({ length: chapter.verses_count }, (_, i) => i + 1).map(num => (
                  <button
                    key={num}
                    ref={(el) => {
                      if (el) verseButtonRefs.current.set(num, el);
                    }}
                    onClick={() => navigateToVerse(num)}
                    className={`
                      w-10 h-10 rounded-lg text-sm font-medium transition-all flex-shrink-0 snap-center
                      ${num === currentVerse
                        ? 'bg-saffron-700 text-white shadow-md scale-110'
                        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-saffron-50 dark:hover:bg-gray-700 border border-cream-200 dark:border-gray-700'
                      }
                    `}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Navigation */}
      <Navigation />
    </main>
  );
}
