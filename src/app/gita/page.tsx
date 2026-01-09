'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, ChevronRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { getAllChapters, GitaChapter } from '@/lib/api';

export default function GitaPage() {
  const [chapters, setChapters] = useState<GitaChapter[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadChapters = async () => {
      const data = await getAllChapters();
      setChapters(data);
      setLoading(false);
    };
    loadChapters();
  }, []);

  // Chapter names and meanings (fallback data)
  const chapterInfo = [
    { name: "Arjuna's Dilemma", meaning: "The despair that precedes transformation" },
    { name: "The Eternal Soul", meaning: "Understanding your true nature" },
    { name: "Path of Action", meaning: "Karma Yoga - selfless service" },
    { name: "Path of Knowledge", meaning: "Wisdom through understanding" },
    { name: "Renunciation of Action", meaning: "True renunciation explained" },
    { name: "Path of Meditation", meaning: "Dhyana Yoga - the meditative path" },
    { name: "Knowledge & Realization", meaning: "Direct experience of truth" },
    { name: "The Imperishable Brahman", meaning: "The eternal absolute" },
    { name: "Royal Knowledge", meaning: "The king of secrets" },
    { name: "Divine Manifestations", meaning: "God in all things" },
    { name: "The Universal Form", meaning: "The cosmic vision" },
    { name: "Path of Devotion", meaning: "Bhakti Yoga - loving surrender" },
    { name: "The Field & Knower", meaning: "Body, soul, and awareness" },
    { name: "The Three Gunas", meaning: "Nature's three qualities" },
    { name: "The Supreme Person", meaning: "Transcending the material" },
    { name: "Divine & Demonic", meaning: "Two paths of being" },
    { name: "Three Types of Faith", meaning: "Sattvic, rajasic, tamasic" },
    { name: "Liberation Through Renunciation", meaning: "The final teaching" },
  ];

  return (
    <main className="min-h-screen pb-24 bg-cream-100 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="bg-gradient-to-br from-saffron-600 to-orange-500 text-white">
        <div className="max-w-2xl lg:max-w-4xl mx-auto px-6 pt-6 pb-8">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/" aria-label="Go back" className="p-2 -ml-2 rounded-lg hover:bg-white/10">
              <ArrowLeft size={24} />
            </Link>
            <div>
              <h1 className="font-heading text-2xl font-bold">
                Bhagavad Gita
              </h1>
              <p className="text-saffron-100 text-sm">
                The Song of God • 18 Chapters • 700 Verses
              </p>
            </div>
          </div>

          {/* Decorative Sanskrit */}
          <div className="text-center py-4">
            <p className="font-sanskrit text-3xl text-white/80 mb-2">
              श्रीमद्भगवद्गीता
            </p>
            <p className="text-saffron-100 text-sm italic">
              Śrīmad Bhagavad Gītā
            </p>
          </div>
        </div>
        <div className="h-6 bg-cream-100 dark:bg-gray-900 rounded-t-[2rem] transition-colors" />
      </header>

      {/* Content */}
      <div className="max-w-2xl lg:max-w-4xl mx-auto px-6 -mt-2">
        {/* Intro Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-6 border border-cream-200 dark:border-gray-700 transition-colors">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-saffron-100 dark:bg-saffron-900/30 rounded-full flex items-center justify-center shrink-0">
              <BookOpen className="text-saffron-700 dark:text-saffron-400" size={24} />
            </div>
            <div>
              <h2 className="font-heading font-semibold text-gray-900 dark:text-gray-100 mb-1">
                The Divine Song
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                The Bhagavad Gita is a 700-verse dialogue between Prince Arjuna
                and Lord Krishna. Read it chapter by chapter, verse by verse,
                with translations and commentary.
              </p>
            </div>
          </div>
        </div>

        {/* Chapters List */}
        {loading ? (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            Loading chapters...
          </div>
        ) : (
          <div className="space-y-3">
            {chapters.map((chapter, index) => (
              <Link
                key={chapter.chapter_number}
                href={`/gita/${chapter.chapter_number}`}
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-cream-200 dark:border-gray-700 hover:shadow-md hover:border-saffron-200 dark:hover:border-saffron-700 transition-all card-hover">
                  <div className="flex items-center gap-4">
                    {/* Chapter number */}
                    <div className="w-10 h-10 bg-saffron-100 dark:bg-saffron-900/30 rounded-full flex items-center justify-center font-bold text-saffron-700 dark:text-saffron-400 shrink-0">
                      {chapter.chapter_number}
                    </div>

                    {/* Chapter info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 dark:text-gray-100">
                        {chapterInfo[index]?.name || chapter.translation || `Chapter ${chapter.chapter_number}`}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                        {chapterInfo[index]?.meaning || chapter.meaning?.en || ''}
                      </p>
                      <p className="text-xs text-saffron-700 dark:text-saffron-400 mt-1">
                        {chapter.verses_count} verses
                      </p>
                    </div>

                    <ChevronRight className="text-gray-300 dark:text-gray-600 shrink-0" size={20} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Navigation */}
      <Navigation />
    </main>
  );
}
