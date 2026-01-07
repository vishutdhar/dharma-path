'use client';

import { useEffect, useState } from 'react';
import { ArrowLeft, Lock, CheckCircle, Circle, ChevronRight, Calendar, BookOpen, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { curriculum, Level, getLevelDuration, getLessonCount } from '@/data/curriculum';
import { getProgress, UserProgress, getLevelProgress, isLevelUnlocked } from '@/lib/progress';
import { festivals } from '@/data/festivals';

export default function LearnPage() {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [expandedLevel, setExpandedLevel] = useState<number | null>(1);
  const [festivalsExpanded, setFestivalsExpanded] = useState(false);
  const [scripturesExpanded, setScripturesExpanded] = useState(false);

  useEffect(() => {
    const userProgress = getProgress();
    setProgress(userProgress);
  }, []);

  const toggleLevel = (levelId: number) => {
    setExpandedLevel(expandedLevel === levelId ? null : levelId);
  };

  return (
    <main className="min-h-screen pb-24 bg-cream-100 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-cream-200 dark:border-gray-700 sticky top-0 z-40 transition-colors">
        <div className="max-w-2xl lg:max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 -ml-2 rounded-lg hover:bg-cream-100 dark:hover:bg-gray-700">
              <ArrowLeft size={24} className="text-gray-600 dark:text-gray-400" />
            </Link>
            <div>
              <h1 className="font-heading text-xl font-bold text-gray-900 dark:text-gray-100">
                Your Learning Path
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Explore any topic that calls to you
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-2xl lg:max-w-4xl mx-auto px-6 py-6">
        {/* Overall Progress */}
        <div className="bg-gradient-to-br from-saffron-500 to-orange-400 rounded-2xl p-6 mb-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-saffron-100 text-sm mb-1">Overall Progress</p>
              <p className="text-3xl font-bold">
                {progress?.completedLessons.length || 0} / {curriculum.reduce((acc, l) => acc + getLessonCount(l), 0)}
              </p>
              <p className="text-saffron-100 text-sm">lessons completed</p>
            </div>
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold">
                {Math.round((progress?.completedLessons.length || 0) / curriculum.reduce((acc, l) => acc + getLessonCount(l), 0) * 100)}%
              </span>
            </div>
          </div>
        </div>

        {/* Levels */}
        <div className="space-y-4">
          {curriculum.map((level) => {
            const levelProgress = getLevelProgress(level.id, getLessonCount(level));
            const locked = !isLevelUnlocked(level.id, level.requiredLevel);
            const isExpanded = expandedLevel === level.id;
            const isComplete = levelProgress >= 100;

            return (
              <div
                key={level.id}
                className={`
                  bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md border transition-colors
                  ${locked ? 'border-cream-200 dark:border-gray-700 opacity-60' : 'border-cream-200 dark:border-gray-700'}
                `}
              >
                {/* Level Header */}
                <button
                  onClick={() => !locked && toggleLevel(level.id)}
                  disabled={locked}
                  className={`
                    w-full p-6 text-left transition-colors
                    ${locked ? 'cursor-not-allowed' : 'hover:bg-cream-50 dark:hover:bg-gray-700'}
                  `}
                >
                  <div className="flex items-start gap-4">
                    {/* Level indicator */}
                    <div className={`
                      w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0
                      ${isComplete
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                        : locked
                          ? 'bg-cream-200 dark:bg-gray-700 text-cream-400 dark:text-gray-500'
                          : 'bg-saffron-100 dark:bg-saffron-900/30 text-saffron-600 dark:text-saffron-400'
                      }
                    `}>
                      {isComplete ? (
                        <CheckCircle size={24} />
                      ) : locked ? (
                        <Lock size={20} />
                      ) : (
                        level.id
                      )}
                    </div>

                    {/* Level info */}
                    <div className="flex-1 min-w-0">
                      <h2 className="font-heading text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {level.title}
                      </h2>
                      <p className="text-saffron-600 dark:text-saffron-400 text-sm font-medium">
                        {level.subtitle}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 line-clamp-2">
                        {level.description}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
                        <span>{getLessonCount(level)} lessons</span>
                        <span>•</span>
                        <span>{getLevelDuration(level)}</span>
                        {!locked && (
                          <>
                            <span>•</span>
                            <span className="text-saffron-500 dark:text-saffron-400">{levelProgress}% complete</span>
                          </>
                        )}
                      </div>

                      {/* Progress bar */}
                      {!locked && (
                        <div className="mt-3 h-1.5 bg-cream-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full progress-bar rounded-full transition-all duration-500"
                            style={{ width: `${levelProgress}%` }}
                          />
                        </div>
                      )}
                    </div>

                    {/* Expand indicator */}
                    {!locked && (
                      <ChevronRight
                        className={`
                          text-gray-400 transition-transform shrink-0
                          ${isExpanded ? 'rotate-90' : ''}
                        `}
                        size={20}
                      />
                    )}
                  </div>
                </button>

                {/* Expanded Modules */}
                {isExpanded && !locked && (
                  <div className="px-6 pb-6 pt-2 border-t border-cream-100 dark:border-gray-700">
                    {level.modules.map((module, moduleIndex) => (
                      <div key={module.id} className="mt-4 first:mt-0">
                        <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                          {module.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                          {module.description}
                        </p>

                        {/* Lessons list */}
                        <div className="space-y-2 ml-2">
                          {module.lessons.map((lesson) => {
                            const isCompleted = progress?.completedLessons.includes(lesson.id);

                            return (
                              <Link
                                key={lesson.id}
                                href={`/learn/${lesson.id}`}
                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-cream-50 dark:hover:bg-gray-700 transition-colors group"
                              >
                                {isCompleted ? (
                                  <CheckCircle size={18} className="text-green-500 dark:text-green-400 shrink-0" />
                                ) : (
                                  <Circle size={18} className="text-cream-300 dark:text-gray-600 shrink-0" />
                                )}
                                <div className="flex-1 min-w-0">
                                  <p className={`text-sm ${isCompleted ? 'text-gray-500 dark:text-gray-400' : 'text-gray-700 dark:text-gray-300'}`}>
                                    {lesson.title}
                                  </p>
                                </div>
                                <span className="text-xs text-gray-400 shrink-0">
                                  {lesson.duration}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Scripture Exploration Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md border border-cream-200 dark:border-gray-700 transition-colors">
            {/* Scripture Header */}
            <button
              onClick={() => setScripturesExpanded(!scripturesExpanded)}
              className="w-full p-6 text-left transition-colors hover:bg-cream-50 dark:hover:bg-gray-700"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 bg-saffron-100 dark:bg-saffron-900/30 text-saffron-600 dark:text-saffron-400">
                  <BookOpen size={24} />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h2 className="font-heading text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Scripture Exploration
                  </h2>
                  <p className="text-saffron-600 dark:text-saffron-400 text-sm font-medium">
                    Dive into the Primary Texts
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 line-clamp-2">
                    Read the original scriptures verse-by-verse with explanations and practical applications
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
                    <span>2 scriptures</span>
                    <span>•</span>
                    <span>Explore anytime</span>
                  </div>
                </div>

                {/* Expand indicator */}
                <ChevronRight
                  className={`
                    text-gray-400 transition-transform shrink-0
                    ${scripturesExpanded ? 'rotate-90' : ''}
                  `}
                  size={20}
                />
              </div>
            </button>

            {/* Expanded Scripture Grid */}
            {scripturesExpanded && (
              <div className="px-6 pb-6 pt-2 border-t border-cream-100 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Explore the foundational texts of Hindu philosophy with verse-by-verse translations and explanations.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href="/gita"
                    className="bg-cream-50 dark:bg-gray-700 rounded-xl p-4 border border-cream-200 dark:border-gray-600 hover:border-saffron-300 dark:hover:border-saffron-700 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-saffron-100 dark:bg-saffron-900/30 flex items-center justify-center">
                        <BookOpen className="text-saffron-600 dark:text-saffron-400" size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-saffron-600 dark:group-hover:text-saffron-400">
                          Bhagavad Gita
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          18 chapters • 700 verses
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/upanishads"
                    className="bg-cream-50 dark:bg-gray-700 rounded-xl p-4 border border-cream-200 dark:border-gray-600 hover:border-saffron-300 dark:hover:border-saffron-700 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-saffron-100 dark:bg-saffron-900/30 flex items-center justify-center">
                        <Sparkles className="text-saffron-600 dark:text-saffron-400" size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-saffron-600 dark:group-hover:text-saffron-400">
                          Upanishads
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          13 principal texts
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Festivals Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md border border-cream-200 dark:border-gray-700 transition-colors">
            {/* Festivals Header */}
            <button
              onClick={() => setFestivalsExpanded(!festivalsExpanded)}
              className="w-full p-6 text-left transition-colors hover:bg-cream-50 dark:hover:bg-gray-700"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
                  <Calendar size={24} />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h2 className="font-heading text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Festival Guide
                  </h2>
                  <p className="text-orange-600 dark:text-orange-400 text-sm font-medium">
                    Celebrate with Understanding
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 line-clamp-2">
                    Discover the meaning behind Hindu festivals and learn how to celebrate them
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
                    <span>{festivals.length} festivals</span>
                    <span>•</span>
                    <span>Explore anytime</span>
                  </div>
                </div>

                {/* Expand indicator */}
                <ChevronRight
                  className={`
                    text-gray-400 transition-transform shrink-0
                    ${festivalsExpanded ? 'rotate-90' : ''}
                  `}
                  size={20}
                />
              </div>
            </button>

            {/* Expanded Festival Grid */}
            {festivalsExpanded && (
              <div className="px-6 pb-6 pt-2 border-t border-cream-100 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Learn what each festival means, why we celebrate it, and how to observe it authentically.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {festivals.map((festival) => (
                    <Link
                      key={festival.id}
                      href={`/festivals/${festival.id}`}
                      className="bg-cream-50 dark:bg-gray-700 rounded-xl p-4 border border-cream-200 dark:border-gray-600 hover:border-orange-300 dark:hover:border-orange-700 hover:shadow-md transition-all group"
                    >
                      <h3 className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 text-sm">
                        {festival.name}
                      </h3>
                      {festival.sanskrit && (
                        <p className="text-xs text-gray-400 mt-0.5">
                          {festival.sanskrit}
                        </p>
                      )}
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {festival.month}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Navigation />
    </main>
  );
}
