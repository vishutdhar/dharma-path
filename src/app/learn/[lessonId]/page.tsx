'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Clock,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Sparkles
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import { curriculum, Lesson, Module, Level } from '@/data/curriculum';
import { lessonContent } from '@/data/lessonContent';
import { completeLesson, isLessonCompleted, getProgress } from '@/lib/progress';

interface LessonContext {
  lesson: Lesson;
  module: Module;
  level: Level;
  prevLesson: Lesson | null;
  nextLesson: Lesson | null;
  lessonIndex: number;
  totalLessonsInModule: number;
}

function findLessonContext(lessonId: string): LessonContext | null {
  for (const level of curriculum) {
    for (const module of level.modules) {
      const lessonIndex = module.lessons.findIndex(l => l.id === lessonId);
      if (lessonIndex !== -1) {
        const lesson = module.lessons[lessonIndex];
        const prevLesson = lessonIndex > 0 ? module.lessons[lessonIndex - 1] : null;
        const nextLesson = lessonIndex < module.lessons.length - 1 ? module.lessons[lessonIndex + 1] : null;

        return {
          lesson,
          module,
          level,
          prevLesson,
          nextLesson,
          lessonIndex,
          totalLessonsInModule: module.lessons.length,
        };
      }
    }
  }
  return null;
}

// Find the next lesson across modules/levels
function findNextLessonGlobal(currentLessonId: string): Lesson | null {
  let foundCurrent = false;

  for (const level of curriculum) {
    for (const module of level.modules) {
      for (const lesson of module.lessons) {
        if (foundCurrent) {
          return lesson;
        }
        if (lesson.id === currentLessonId) {
          foundCurrent = true;
        }
      }
    }
  }
  return null;
}

export default function LessonPage() {
  const params = useParams();
  const router = useRouter();
  const lessonId = params.lessonId as string;

  const [context, setContext] = useState<LessonContext | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [justCompleted, setJustCompleted] = useState(false);

  useEffect(() => {
    const ctx = findLessonContext(lessonId);
    setContext(ctx);

    if (ctx) {
      setIsCompleted(isLessonCompleted(lessonId));
    }
  }, [lessonId]);

  const handleComplete = () => {
    completeLesson(lessonId);
    setIsCompleted(true);
    setJustCompleted(true);
    // User will manually navigate using the "Continue" button shown in UI
  };

  const handleContinue = () => {
    const nextLesson = context?.nextLesson || findNextLessonGlobal(lessonId);
    if (nextLesson) {
      router.push(`/learn/${nextLesson.id}`);
    } else {
      // All done - go back to learn page
      router.push('/learn');
    }
  };

  if (!context) {
    return (
      <main className="min-h-screen pb-24 bg-cream-100 dark:bg-gray-900 transition-colors">
        <div className="max-w-2xl lg:max-w-4xl mx-auto px-6 py-20 text-center">
          <p className="text-gray-500 dark:text-gray-400">Lesson not found</p>
          <Link href="/learn" className="text-saffron-600 dark:text-saffron-400 mt-4 inline-block">
            Back to Learning Path
          </Link>
        </div>
        <Navigation />
      </main>
    );
  }

  const { lesson, module, level, prevLesson, nextLesson, lessonIndex, totalLessonsInModule } = context;
  const globalNextLesson = nextLesson || findNextLessonGlobal(lessonId);

  // Color mapping for levels
  const colorClasses: Record<string, { bg: string; text: string; border: string; darkBg: string; darkBorder: string }> = {
    saffron: { bg: 'bg-saffron-50', text: 'text-saffron-600 dark:text-saffron-400', border: 'border-saffron-200', darkBg: 'dark:bg-saffron-900/30', darkBorder: 'dark:border-saffron-800' },
    maroon: { bg: 'bg-maroon-50', text: 'text-maroon-600 dark:text-maroon-400', border: 'border-maroon-200', darkBg: 'dark:bg-maroon-900/30', darkBorder: 'dark:border-maroon-800' },
    gold: { bg: 'bg-gold-50', text: 'text-gold-600 dark:text-gold-400', border: 'border-gold-200', darkBg: 'dark:bg-gold-900/30', darkBorder: 'dark:border-gold-800' },
  };
  const colors = colorClasses[level.color] || colorClasses.saffron;

  return (
    <main className="min-h-screen pb-24 bg-cream-100 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-cream-200 dark:border-gray-700 sticky top-0 z-40 transition-colors">
        <div className="max-w-2xl lg:max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Link href="/learn" className="p-2 -ml-2 rounded-lg hover:bg-cream-100 dark:hover:bg-gray-700">
              <ArrowLeft size={24} className="text-gray-600 dark:text-gray-400" />
            </Link>
            <div className="flex-1 min-w-0">
              <p className={`text-xs font-medium ${colors.text}`}>
                Level {level.id} · {module.title}
              </p>
              <h1 className="font-heading text-lg font-bold text-gray-900 dark:text-gray-100 truncate">
                {lesson.title}
              </h1>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Clock size={16} />
              {lesson.duration}
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white dark:bg-gray-800 border-b border-cream-200 dark:border-gray-700 transition-colors">
        <div className="max-w-2xl lg:max-w-4xl mx-auto px-6 py-3">
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Lesson {lessonIndex + 1} of {totalLessonsInModule}
            </span>
            <div className="flex-1 h-2 bg-cream-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-saffron-500 rounded-full transition-all duration-300"
                style={{ width: `${((lessonIndex + 1) / totalLessonsInModule) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl lg:max-w-4xl mx-auto px-6 py-8">
        {/* Lesson Card */}
        <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg border ${colors.border} ${colors.darkBorder} overflow-hidden transition-colors`}>
          {/* Lesson Header */}
          <div className={`${colors.bg} ${colors.darkBg} px-6 py-4 border-b ${colors.border} ${colors.darkBorder}`}>
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full ${colors.text} bg-white dark:bg-gray-800 flex items-center justify-center`}>
                <BookOpen size={20} />
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-gray-900 dark:text-gray-100">
                  {lesson.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{lesson.description}</p>
              </div>
            </div>
          </div>

          {/* Lesson Content */}
          <div className="p-6">
            {lessonContent[lessonId] ? (
              // Render lesson content
              // SECURITY NOTE: lessonContent comes from controlled static file (src/data/lessonContent.ts)
              // Not user-generated content. For production with external content, use DOMPurify:
              // npm install dompurify @types/dompurify
              // import DOMPurify from 'dompurify';
              // dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(lessonContent[lessonId]) }}
              <div
                className="prose prose-gray dark:prose-invert max-w-none prose-headings:font-heading prose-h2:text-xl prose-h2:font-semibold prose-h2:text-gray-900 dark:prose-h2:text-gray-100 prose-h2:mt-8 prose-h2:mb-4 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-blockquote:border-saffron-500 prose-blockquote:bg-saffron-50 dark:prose-blockquote:bg-saffron-900/30 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-strong:text-gray-900 dark:prose-strong:text-gray-100"
                dangerouslySetInnerHTML={{ __html: lessonContent[lessonId] }}
              />
            ) : (
              // Placeholder content for lessons without content yet
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-saffron-100 dark:bg-saffron-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="text-saffron-500 dark:text-saffron-400" size={32} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Content Coming Soon
                </h3>
                <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                  This lesson is being crafted with care. The full content for "{lesson.title}"
                  will be available soon. For now, you can mark this lesson as complete to continue your journey.
                </p>
              </div>
            )}
          </div>

          {/* Completion Section */}
          <div className="px-6 py-6 bg-cream-50 dark:bg-gray-700/50 border-t border-cream-200 dark:border-gray-600">
            {justCompleted ? (
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400 mb-4">
                  <CheckCircle2 size={24} />
                  <span className="font-semibold">Lesson Completed!</span>
                </div>
                {globalNextLesson ? (
                  <button
                    onClick={handleContinue}
                    className="w-full py-4 bg-saffron-500 text-white font-semibold rounded-xl hover:bg-saffron-600 transition-colors shadow-lg flex items-center justify-center gap-2"
                  >
                    Continue to Next Lesson
                    <ChevronRight size={20} />
                  </button>
                ) : (
                  <button
                    onClick={() => router.push('/learn')}
                    className="w-full py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-colors shadow-lg"
                  >
                    All Done! Back to Learning Path
                  </button>
                )}
              </div>
            ) : isCompleted ? (
              <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                <CheckCircle2 size={20} />
                <span className="font-medium">You've completed this lesson</span>
              </div>
            ) : (
              <button
                onClick={handleComplete}
                className="w-full py-4 bg-saffron-500 text-white font-semibold rounded-xl hover:bg-saffron-600 transition-colors shadow-lg"
              >
                Mark as Complete
              </button>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          {prevLesson ? (
            <Link
              href={`/learn/${prevLesson.id}`}
              className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 text-saffron-600 dark:text-saffron-400 rounded-xl hover:bg-saffron-50 dark:hover:bg-gray-700 shadow-sm border border-cream-200 dark:border-gray-700 font-medium transition-all"
            >
              <ChevronLeft size={20} />
              Previous
            </Link>
          ) : (
            <div />
          )}

          {globalNextLesson && !justCompleted && (
            <Link
              href={`/learn/${globalNextLesson.id}`}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all ${
                isCompleted
                  ? 'bg-saffron-500 text-white hover:bg-saffron-600 shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-400 border border-cream-200 dark:border-gray-700'
              }`}
            >
              Next
              <ChevronRight size={20} />
            </Link>
          )}
        </div>

        {/* Module Context */}
        <div className="mt-8 text-center">
          <Link
            href="/learn"
            className="text-sm text-saffron-600 dark:text-saffron-400 font-medium hover:underline"
          >
            ← Back to Learning Path
          </Link>
        </div>
      </div>

      <Navigation />
    </main>
  );
}
