'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import VerseCard from '@/components/VerseCard';
import { getChapter, getVerse, GitaChapter, GitaVerse } from '@/lib/api';
import { toggleBookmark, isBookmarked } from '@/lib/progress';

export default function VersePage() {
  const params = useParams();
  const chapterNum = parseInt(params.chapter as string);
  const verseNum = parseInt(params.verse as string);

  const [chapter, setChapter] = useState<GitaChapter | null>(null);
  const [verse, setVerse] = useState<GitaVerse | null>(null);
  const [loading, setLoading] = useState(true);
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const [chapterData, verseData] = await Promise.all([
        getChapter(chapterNum),
        getVerse(chapterNum, verseNum)
      ]);
      setChapter(chapterData);
      setVerse(verseData);
      setBookmarked(isBookmarked(`${chapterNum}:${verseNum}`));
      setLoading(false);
    };

    loadData();
  }, [chapterNum, verseNum]);

  const handleBookmark = (ref: string) => {
    const isNowBookmarked = toggleBookmark(ref);
    setBookmarked(isNowBookmarked);
  };

  const canGoPrev = verseNum > 1;
  const canGoNext = chapter && verseNum < chapter.verses_count;
  const canGoPrevChapter = chapterNum > 1;
  const canGoNextChapter = chapterNum < 18;

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
            <Link href={`/gita/${chapterNum}`} className="p-2 -ml-2 rounded-lg hover:bg-cream-100">
              <ArrowLeft size={24} className="text-gray-600" />
            </Link>
            <div className="flex-1">
              <h1 className="font-heading text-lg font-bold text-gray-900">
                Gita {chapterNum}.{verseNum}
              </h1>
              <p className="text-sm text-saffron-600">
                Chapter {chapterNum}: {chapterNames[chapterNum - 1]}
              </p>
            </div>
            {chapter && (
              <span className="text-sm text-gray-400">
                {verseNum} / {chapter.verses_count}
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
              <p className="text-gray-500">Loading verse...</p>
            </div>
          </div>
        ) : verse ? (
          <>
            {/* Verse Card */}
            <VerseCard
              verse={verse}
              showExpanded={true}
              onBookmark={handleBookmark}
              isBookmarked={bookmarked}
            />

            {/* Verse Navigation */}
            <div className="flex items-center justify-between mt-6">
              {canGoPrev ? (
                <Link
                  href={`/gita/${chapterNum}/${verseNum - 1}`}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl font-medium bg-white text-saffron-600 hover:bg-saffron-50 shadow-sm border border-cream-200 transition-all"
                >
                  <ChevronLeft size={20} />
                  Verse {verseNum - 1}
                </Link>
              ) : canGoPrevChapter ? (
                <Link
                  href={`/gita/${chapterNum - 1}`}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl font-medium bg-white text-saffron-600 hover:bg-saffron-50 shadow-sm border border-cream-200 transition-all"
                >
                  <ChevronLeft size={20} />
                  Ch. {chapterNum - 1}
                </Link>
              ) : (
                <div />
              )}

              {canGoNext ? (
                <Link
                  href={`/gita/${chapterNum}/${verseNum + 1}`}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl font-medium bg-saffron-500 text-white hover:bg-saffron-600 shadow-lg transition-all"
                >
                  Verse {verseNum + 1}
                  <ChevronRight size={20} />
                </Link>
              ) : canGoNextChapter ? (
                <Link
                  href={`/gita/${chapterNum + 1}`}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl font-medium bg-saffron-500 text-white hover:bg-saffron-600 shadow-lg transition-all"
                >
                  Ch. {chapterNum + 1}
                  <ChevronRight size={20} />
                </Link>
              ) : (
                <div />
              )}
            </div>

            {/* Quick Navigation */}
            <div className="mt-8 text-center space-y-3">
              <Link
                href={`/gita/${chapterNum}`}
                className="text-sm text-saffron-600 font-medium hover:underline block"
              >
                View all verses in Chapter {chapterNum}
              </Link>
              <Link
                href="/gita"
                className="text-sm text-gray-500 hover:underline block"
              >
                ← Back to All Chapters
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-20 text-gray-400">
            <p>Could not load verse. Please try again.</p>
            <Link href="/gita" className="text-saffron-600 mt-4 inline-block">
              Back to Gita
            </Link>
          </div>
        )}
      </div>

      <Navigation />
    </main>
  );
}
