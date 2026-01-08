'use client';

import Link from 'next/link';
import { ArrowLeft, BookOpen, ChevronRight, Sparkles, Lock } from 'lucide-react';
import Navigation from '@/components/Navigation';
import {
  getAllUpanishadSummaries,
  getVedaName,
  UpanishadSummary,
} from '@/data/upanishads/metadata';

export default function UpanishadsPage() {
  const allUpanishads = getAllUpanishadSummaries();

  // All 13 Upanishads are now complete
  const availableUpanishads = allUpanishads;
  const comingSoonUpanishads: UpanishadSummary[] = [];

  return (
    <main className="min-h-screen pb-24 bg-cream-100 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="bg-gradient-to-br from-saffron-600 to-saffron-500 text-white">
        <div className="max-w-2xl lg:max-w-4xl mx-auto px-6 pt-6 pb-8">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/" className="p-2 -ml-2 rounded-lg hover:bg-white/10">
              <ArrowLeft size={24} />
            </Link>
            <div>
              <h1 className="font-heading text-2xl font-bold">The Upanishads</h1>
              <p className="text-saffron-100 text-sm">
                The Philosophical Heart of Hinduism • 13 Principal Texts
              </p>
            </div>
          </div>

          {/* Decorative Sanskrit */}
          <div className="text-center py-4">
            <p className="font-sanskrit text-3xl text-white/80 mb-2">उपनिषद्</p>
            <p className="text-saffron-100 text-sm italic">Upaniṣad — "Sitting Near" (the teacher)</p>
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
              <BookOpen className="text-saffron-600 dark:text-saffron-400" size={24} />
            </div>
            <div>
              <h2 className="font-heading font-semibold text-gray-900 dark:text-gray-100 mb-1">
                Dialogues on Ultimate Reality
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                The Upanishads are the philosophical essence of the Vedas — ancient dialogues between
                teachers and seekers exploring the nature of reality, consciousness, and liberation.
                Each contains profound insights meant to be contemplated deeply.
              </p>
            </div>
          </div>
        </div>

        {/* Available Upanishads */}
        {availableUpanishads.length > 0 && (
          <>
            <h3 className="font-heading font-semibold text-gray-900 dark:text-gray-100 mb-3 px-1">
              Available Now
            </h3>
            <div className="space-y-3 mb-8">
              {availableUpanishads.map((upanishad) => (
                <UpanishadCard key={upanishad.id} upanishad={upanishad} available={true} />
              ))}
            </div>
          </>
        )}

        {/* Coming Soon */}
        {comingSoonUpanishads.length > 0 && (
          <>
            <h3 className="font-heading font-semibold text-gray-500 dark:text-gray-400 mb-3 px-1">
              Coming Soon
            </h3>
            <div className="space-y-3 opacity-60">
              {comingSoonUpanishads.map((upanishad) => (
                <UpanishadCard key={upanishad.id} upanishad={upanishad} available={false} />
              ))}
            </div>
          </>
        )}
      </div>

      <Navigation />
    </main>
  );
}

function UpanishadCard({
  upanishad,
  available,
}: {
  upanishad: UpanishadSummary;
  available: boolean;
}) {
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

  const content = (
    <div
      className={`bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-cream-200 dark:border-gray-700 transition-all ${
        available ? 'hover:shadow-md hover:border-saffron-200 dark:hover:border-saffron-700 card-hover' : ''
      }`}
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
            available
              ? 'bg-saffron-100 dark:bg-saffron-900/30'
              : 'bg-gray-100 dark:bg-gray-700'
          }`}
        >
          {available ? (
            <Sparkles
              className="text-saffron-600 dark:text-saffron-400"
              size={22}
            />
          ) : (
            <Lock className="text-gray-400 dark:text-gray-500" size={20} />
          )}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-medium text-gray-900 dark:text-gray-100">
              {upanishad.name.english}
            </h3>
            {upanishad.mahavakya && (
              <span className="px-2 py-0.5 text-xs bg-saffron-100 dark:bg-saffron-900/30 text-saffron-700 dark:text-saffron-400 rounded-full">
                Mahavakya
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-sanskrit">
            {upanishad.name.sanskrit}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
            {upanishad.summary}
          </p>
          <div className="flex items-center gap-3 mt-2 text-xs flex-wrap">
            <span className="text-saffron-600 dark:text-saffron-400">
              {upanishad.isCurated
                ? `${upanishad.includedVerses} of ${upanishad.totalVerses} verses`
                : `${upanishad.totalVerses} verses`}
            </span>
            {upanishad.isCurated && (
              <span className="px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">
                Curated
              </span>
            )}
            <span className="text-gray-300 dark:text-gray-600">•</span>
            <span className="text-gray-500 dark:text-gray-400">
              {getVedaName(upanishad.veda)}
            </span>
            <span className="text-gray-300 dark:text-gray-600">•</span>
            <span className={`px-1.5 py-0.5 rounded ${getDifficultyColor(upanishad.difficulty)}`}>
              {upanishad.difficulty}
            </span>
          </div>
        </div>

        {available && (
          <ChevronRight className="text-gray-300 dark:text-gray-600 shrink-0 mt-2" size={20} />
        )}
      </div>
    </div>
  );

  if (available) {
    return <Link href={`/upanishads/${upanishad.id}`}>{content}</Link>;
  }

  return content;
}
