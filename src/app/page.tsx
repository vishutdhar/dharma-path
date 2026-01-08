'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Flame,
  ChevronRight,
  BookOpen,
  Calendar,
  Sparkles
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Onboarding from '@/components/Onboarding';
import { VerseOfDaySkeleton } from '@/components/Skeleton';
import { curriculum, getLessonCount, Lesson, Level, Module } from '@/data/curriculum';
import { getDaysSinceStart, UserProgress, updateDailyVisit, findNextIncompleteLesson } from '@/lib/progress';
import { getVerseOfTheDay, getVerse, GitaVerse, formatVerseRef } from '@/lib/api';

const ONBOARDING_KEY = 'dharma_path_onboarding_complete';

// Helper to find lesson details by ID
function findLessonById(lessonId: string): { lesson: Lesson; module: Module; level: Level } | null {
  for (const level of curriculum) {
    for (const module of level.modules) {
      const lesson = module.lessons.find(l => l.id === lessonId);
      if (lesson) {
        return { lesson, module, level };
      }
    }
  }
  return null;
}

export default function HomePage() {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [verseOfDay, setVerseOfDay] = useState<GitaVerse | null>(null);
  const [loading, setLoading] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    // Track if component is still mounted to prevent memory leaks
    let isMounted = true;

    // Check if user has completed onboarding
    const hasCompletedOnboarding = localStorage.getItem(ONBOARDING_KEY);
    if (!hasCompletedOnboarding) {
      setShowOnboarding(true);
    }

    // Load progress and update daily visit (streak calculation)
    // Using updateDailyVisit() ensures streak is only calculated once per session
    const userProgress = updateDailyVisit();
    if (isMounted) {
      setProgress(userProgress);
    }

    // Load verse of the day with cleanup
    const loadVerse = async () => {
      try {
        const { chapter, verse } = getVerseOfTheDay();
        const verseData = await getVerse(chapter, verse);
        // Only update state if component is still mounted
        if (isMounted) {
          setVerseOfDay(verseData);
          setLoading(false);
        }
      } catch (_error) {
        // Handle error gracefully
        if (isMounted) {
          setLoading(false);
        }
      }
    };
    loadVerse();

    // Cleanup function to prevent state updates on unmounted component
    return () => {
      isMounted = false;
    };
  }, []);

  // Calculate overall progress
  const totalLessons = curriculum.reduce((acc, level) => acc + getLessonCount(level), 0);
  const completedLessons = progress?.completedLessons.length || 0;
  const overallProgress = Math.round((completedLessons / totalLessons) * 100);

  // Find the next lesson to continue
  // First try currentLesson from progress, then calculate from completedLessons
  const nextLessonId = progress?.currentLesson ||
    findNextIncompleteLesson(progress?.completedLessons || [])?.lessonId ||
    '1-1-1'; // Default to first lesson
  const nextLessonInfo = findLessonById(nextLessonId);

  // Handle onboarding completion
  const handleOnboardingComplete = () => {
    localStorage.setItem(ONBOARDING_KEY, 'true');
    setShowOnboarding(false);
  };

  // Show onboarding for first-time visitors
  if (showOnboarding) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  return (
    <main className="min-h-screen pb-24 bg-cream-100 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="bg-gradient-to-br from-saffron-600 via-saffron-500 to-orange-400 text-white">
        <div className="max-w-2xl lg:max-w-4xl mx-auto px-6 pt-12 pb-8">
          {/* Greeting */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-saffron-100 text-sm">Welcome back</p>
              <h1 className="font-heading text-2xl font-bold">Namaste 🙏</h1>
            </div>
            <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
              <Flame size={18} className="text-yellow-300" />
              <span className="font-semibold">{progress?.streak || 1} day streak</span>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white/10 rounded-xl p-3">
              <p className="text-2xl font-bold">{getDaysSinceStart()}</p>
              <p className="text-xs text-saffron-100">Days Learning</p>
            </div>
            <div className="bg-white/10 rounded-xl p-3">
              <p className="text-2xl font-bold">{completedLessons}</p>
              <p className="text-xs text-saffron-100">Lessons Done</p>
            </div>
            <div className="bg-white/10 rounded-xl p-3">
              <p className="text-2xl font-bold">{overallProgress}%</p>
              <p className="text-xs text-saffron-100">Complete</p>
            </div>
          </div>
        </div>

        {/* Curved bottom */}
        <div className="h-6 bg-cream-100 dark:bg-gray-900 rounded-t-[2rem] transition-colors" />
      </header>

      {/* Content */}
      <div className="max-w-2xl lg:max-w-4xl mx-auto px-6 -mt-2">
        {/* Continue Learning Card */}
        {nextLessonInfo && (
          <Link href={`/learn/${nextLessonId}`}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-6 card-hover border border-cream-200 dark:border-gray-700 transition-colors">
              <div className="flex items-center gap-2 text-saffron-600 dark:text-saffron-400 mb-2">
                <BookOpen size={18} />
                <span className="text-sm font-medium">Continue Learning</span>
              </div>

              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                Level {nextLessonInfo.level.id} · {nextLessonInfo.module.title}
              </p>
              <h2 className="font-heading text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
                {nextLessonInfo.lesson.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {nextLessonInfo.lesson.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="h-2 bg-cream-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full progress-bar rounded-full"
                      style={{ width: `${overallProgress}%` }}
                    />
                  </div>
                </div>
                <ChevronRight className="ml-4 text-saffron-500" size={24} />
              </div>
            </div>
          </Link>
        )}

        {/* Verse of the Day */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden mb-6 border border-cream-200 dark:border-gray-700 transition-colors">
          <div className="bg-gradient-to-r from-gold-500 to-saffron-500 px-6 py-3">
            <div className="flex items-center gap-2 text-white">
              <Sparkles size={18} />
              <span className="font-medium">Verse of the Day</span>
            </div>
          </div>

          {loading ? (
            <VerseOfDaySkeleton />
          ) : verseOfDay ? (
            <div className="p-6">
              <p className="text-sm text-saffron-600 dark:text-saffron-400 font-medium mb-3">
                {formatVerseRef(verseOfDay.chapter, verseOfDay.verse)}
              </p>

              <p className="sanskrit-text text-lg mb-4 text-center">
                {verseOfDay.slok?.split('\n')[0]}...
              </p>

              <blockquote className="text-gray-700 dark:text-gray-300 italic text-center leading-relaxed">
                "{verseOfDay.purohit?.et || verseOfDay.siva?.et || 'Translation loading...'}"
              </blockquote>

              <Link
                href={`/gita/${verseOfDay.chapter}/${verseOfDay.verse}`}
                className="mt-4 flex items-center justify-center gap-2 text-saffron-600 dark:text-saffron-400 font-medium"
              >
                Read Full Verse
                <ChevronRight size={18} />
              </Link>
            </div>
          ) : (
            <div className="p-6 text-center text-gray-400">
              Could not load verse. Check your connection.
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Link href="/gita">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md card-hover border border-cream-200 dark:border-gray-700 text-center transition-colors">
              <div className="w-12 h-12 bg-saffron-100 dark:bg-saffron-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen className="text-saffron-600 dark:text-saffron-400" size={24} />
              </div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100">Read Gita</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">All 18 chapters</p>
            </div>
          </Link>

          <Link href="/learn">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md card-hover border border-cream-200 dark:border-gray-700 text-center transition-colors">
              <div className="w-12 h-12 bg-saffron-100 dark:bg-saffron-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="text-saffron-600 dark:text-saffron-400" size={24} />
              </div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100">My Journey</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Track progress</p>
            </div>
          </Link>
        </div>

        {/* Learning Path Preview */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-heading text-lg font-semibold text-gray-900 dark:text-gray-100">
              Your Learning Path
            </h2>
            <Link href="/learn" className="text-sm text-saffron-600 dark:text-saffron-400 font-medium">
              View All
            </Link>
          </div>

          <div className="space-y-3">
            {curriculum.slice(0, 3).map((level, index) => (
              <div
                key={level.id}
                className={`
                  flex items-center gap-4 p-4 rounded-xl transition-colors
                  ${index === 0
                    ? 'bg-saffron-50 dark:bg-saffron-900/20 border border-saffron-200 dark:border-saffron-800'
                    : 'bg-white dark:bg-gray-800 border border-cream-200 dark:border-gray-700'
                  }
                `}
              >
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center font-bold
                  ${index === 0
                    ? 'bg-saffron-500 text-white'
                    : 'bg-cream-200 dark:bg-gray-700 text-cream-500 dark:text-gray-400'
                  }
                `}>
                  {level.id}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 dark:text-gray-100">{level.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{level.subtitle}</p>
                </div>
                <ChevronRight className="text-gray-300 dark:text-gray-600" size={20} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Navigation />
    </main>
  );
}
