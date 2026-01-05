'use client';

import { useEffect, useState } from 'react';
import { ArrowLeft, Lock, CheckCircle, Circle, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { curriculum, Level, getLevelDuration, getLessonCount } from '@/data/curriculum';
import { getProgress, UserProgress, getLevelProgress, isLevelUnlocked } from '@/lib/progress';

export default function LearnPage() {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [expandedLevel, setExpandedLevel] = useState<number | null>(1);

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
        </div>
      </div>

      {/* Navigation */}
      <Navigation />
    </main>
  );
}
