'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import VerseCard from '@/components/VerseCard';
import { getChapter, getVerse, GitaChapter, GitaVerse } from '@/lib/api';
import { toggleBookmark, isBookmarked } from '@/lib/progress';

export default function ChapterPage() {
  const params = useParams();
  const chapterNum = parseInt(params.chapter as string);

  const [chapter, setChapter] = useState<GitaChapter | null>(null);
  const [verses, setVerses] = useState<GitaVerse[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentVerse, setCurrentVerse] = useState(1);
  const [bookmarks, setBookmarks] = useState<Set<string>>(new Set());

  useEffect(() => {
    const loadChapter = async () => {
      setLoading(true);
      const chapterData = await getChapter(chapterNum);
      setChapter(chapterData);

      if (chapterData) {
        // Load first verse immediately
        const firstVerse = await getVerse(chapterNum, 1);
        if (firstVerse) {
          setVerses([firstVerse]);
        }
      }
      setLoading(false);
    };

    loadChapter();
  }, [chapterNum]);

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
    <main className="min-h-screen pb-24 bg-cream-100">
      {/* Header */}
      <header className="bg-white border-b border-cream-200 sticky top-0 z-40">
        <div className="max-w-2xl lg:max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Link href="/gita" className="p-2 -ml-2 rounded-lg hover:bg-cream-100">
              <ArrowLeft size={24} className="text-gray-600" />
            </Link>
            <div className="flex-1">
              <h1 className="font-heading text-lg font-bold text-gray-900">
                Chapter {chapterNum}
              </h1>
              <p className="text-sm text-saffron-600">
                {chapterNames[chapterNum - 1] || chapter?.translation}
              </p>
            </div>
            {chapter && (
              <span className="text-sm text-gray-400">
                {currentVerse} / {chapter.verses_count}
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-2xl lg:max-w-4xl mx-auto px-6 py-6">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-saffron-200 border-t-saffron-500 rounded-full animate-spin mx-auto mb-4" />
              <p className="text-gray-500">Loading chapter...</p>
            </div>
          </div>
        ) : currentVerseData ? (
          <>
            {/* Verse Card */}
            <VerseCard
              verse={currentVerseData}
              showExpanded={false}
              onBookmark={handleBookmark}
              isBookmarked={bookmarks.has(`${chapterNum}:${currentVerse}`)}
            />

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={() => setCurrentVerse(prev => Math.max(1, prev - 1))}
                disabled={!canGoPrev}
                className={`
                  flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all
                  ${canGoPrev 
                    ? 'bg-white text-saffron-600 hover:bg-saffron-50 shadow-sm border border-cream-200' 
                    : 'bg-cream-200 text-cream-400 cursor-not-allowed'
                  }
                `}
              >
                <ChevronLeft size={20} />
                Previous
              </button>

              <button
                onClick={() => setCurrentVerse(prev => Math.min(chapter?.verses_count || prev, prev + 1))}
                disabled={!canGoNext}
                className={`
                  flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all
                  ${canGoNext 
                    ? 'bg-saffron-500 text-white hover:bg-saffron-600 shadow-lg' 
                    : 'bg-cream-200 text-cream-400 cursor-not-allowed'
                  }
                `}
              >
                Next
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Verse Picker */}
            <div className="mt-8">
              <p className="text-sm text-gray-500 mb-3 text-center">Jump to verse</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {Array.from({ length: chapter?.verses_count || 0 }, (_, i) => i + 1).map(num => (
                  <button
                    key={num}
                    onClick={() => setCurrentVerse(num)}
                    className={`
                      w-10 h-10 rounded-lg text-sm font-medium transition-all
                      ${num === currentVerse 
                        ? 'bg-saffron-500 text-white shadow-md' 
                        : 'bg-white text-gray-600 hover:bg-saffron-50 border border-cream-200'
                      }
                    `}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-20 text-gray-400">
            Could not load verse. Please try again.
          </div>
        )}
      </div>

      {/* Chapter Navigation */}
      <div className="fixed bottom-20 left-0 right-0 bg-white border-t border-cream-200 px-6 py-3">
        <div className="max-w-2xl lg:max-w-4xl mx-auto flex items-center justify-between">
          <Link
            href={chapterNum > 1 ? `/gita/${chapterNum - 1}` : '#'}
            className={`
              text-sm font-medium
              ${chapterNum > 1 ? 'text-saffron-600' : 'text-gray-300 pointer-events-none'}
            `}
          >
            ← Chapter {chapterNum - 1}
          </Link>
          <Link
            href="/gita"
            className="text-sm text-gray-500"
          >
            All Chapters
          </Link>
          <Link
            href={chapterNum < 18 ? `/gita/${chapterNum + 1}` : '#'}
            className={`
              text-sm font-medium
              ${chapterNum < 18 ? 'text-saffron-600' : 'text-gray-300 pointer-events-none'}
            `}
          >
            Chapter {chapterNum + 1} →
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <Navigation />
    </main>
  );
}
