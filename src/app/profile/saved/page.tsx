'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Bookmark, BookOpen, Trash2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { getProgress, saveProgress, UserProgress } from '@/lib/progress';

export default function SavedVersesPage() {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [removingRef, setRemovingRef] = useState<string | null>(null);

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  const handleRemoveBookmark = (ref: string) => {
    if (!progress) return;

    setRemovingRef(ref);

    // Remove from bookmarks
    const updatedBookmarks = progress.bookmarks.filter(b => b !== ref);
    const updatedProgress = { ...progress, bookmarks: updatedBookmarks };

    saveProgress(updatedProgress);
    setProgress(updatedProgress);
    setRemovingRef(null);
  };

  const bookmarks = progress?.bookmarks || [];

  // Group bookmarks by chapter for better organization
  const groupedByChapter: Record<number, { chapter: number; verse: number; ref: string }[]> = {};

  bookmarks.forEach(ref => {
    const [chapter, verse] = ref.split(':').map(Number);
    if (!groupedByChapter[chapter]) {
      groupedByChapter[chapter] = [];
    }
    groupedByChapter[chapter].push({ chapter, verse, ref });
  });

  // Sort chapters and verses
  const sortedChapters = Object.keys(groupedByChapter)
    .map(Number)
    .sort((a, b) => a - b);

  return (
    <main className="min-h-screen pb-24 bg-cream-100 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-cream-200 dark:border-gray-700 sticky top-0 z-40 transition-colors">
        <div className="max-w-2xl lg:max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Link href="/profile" className="p-2 -ml-2 rounded-lg hover:bg-cream-100 dark:hover:bg-gray-700">
              <ArrowLeft size={24} className="text-gray-600 dark:text-gray-400" />
            </Link>
            <div className="flex-1">
              <h1 className="font-heading text-xl font-bold text-gray-900 dark:text-gray-100">
                Saved Verses
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {bookmarks.length} {bookmarks.length === 1 ? 'verse' : 'verses'} saved
              </p>
            </div>
            <div className="w-10 h-10 bg-saffron-100 dark:bg-saffron-900/30 rounded-full flex items-center justify-center">
              <Bookmark size={20} className="text-saffron-600 dark:text-saffron-400" />
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-2xl lg:max-w-4xl mx-auto px-6 py-6">
        {bookmarks.length === 0 ? (
          /* Empty State */
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-cream-200 dark:border-gray-700 p-8 text-center transition-colors">
            <div className="w-16 h-16 bg-cream-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen size={32} className="text-gray-400" />
            </div>
            <h2 className="font-heading text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              No Saved Verses Yet
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-sm mx-auto">
              When you find verses that resonate with you, tap the bookmark icon to save them here.
            </p>
            <Link
              href="/gita"
              className="inline-flex items-center gap-2 px-6 py-3 bg-saffron-500 text-white font-medium rounded-xl hover:bg-saffron-600 transition-colors"
            >
              <BookOpen size={18} />
              Explore Bhagavad Gita
            </Link>
          </div>
        ) : (
          /* Grouped by Chapter */
          <div className="space-y-4">
            {sortedChapters.map(chapter => {
              const verses = groupedByChapter[chapter].sort((a, b) => a.verse - b.verse);

              return (
                <div
                  key={chapter}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-cream-200 dark:border-gray-700 overflow-hidden transition-colors"
                >
                  {/* Chapter Header */}
                  <div className="bg-saffron-50 dark:bg-saffron-900/20 px-5 py-3 border-b border-saffron-100 dark:border-saffron-800">
                    <div className="flex items-center justify-between">
                      <h2 className="font-heading font-semibold text-saffron-800 dark:text-saffron-400">
                        Chapter {chapter}
                      </h2>
                      <span className="text-sm text-saffron-600 dark:text-saffron-500">
                        {verses.length} {verses.length === 1 ? 'verse' : 'verses'}
                      </span>
                    </div>
                  </div>

                  {/* Verses */}
                  <div className="divide-y divide-cream-100 dark:divide-gray-700">
                    {verses.map(({ verse, ref }) => (
                      <div
                        key={ref}
                        className="flex items-center justify-between px-5 py-3 hover:bg-cream-50 dark:hover:bg-gray-700/50 transition-colors"
                      >
                        <Link
                          href={`/gita/${chapter}/${verse}`}
                          className="flex-1 flex items-center gap-3"
                        >
                          <span className="w-8 h-8 bg-saffron-100 dark:bg-saffron-900/30 rounded-full flex items-center justify-center text-sm font-medium text-saffron-700 dark:text-saffron-400">
                            {verse}
                          </span>
                          <span className="font-medium text-gray-900 dark:text-gray-100">
                            Gita {chapter}.{verse}
                          </span>
                        </Link>

                        <button
                          onClick={() => handleRemoveBookmark(ref)}
                          disabled={removingRef === ref}
                          className="p-2 text-gray-400 hover:text-red-500 dark:hover:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors disabled:opacity-50"
                          aria-label="Remove bookmark"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Back to Profile */}
        <div className="mt-8 text-center">
          <Link
            href="/profile"
            className="text-sm text-saffron-600 dark:text-saffron-400 font-medium hover:underline"
          >
            ← Back to Profile
          </Link>
        </div>
      </div>

      <Navigation />
    </main>
  );
}
