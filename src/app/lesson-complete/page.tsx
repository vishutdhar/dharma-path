'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, BookOpen, AlertCircle, ArrowRight } from 'lucide-react';
import { TOTAL_LESSONS } from '@/lib/emailContent';

export default function LessonCompletePage() {
  const searchParams = useSearchParams();

  // Success params
  const day = searchParams.get('day');
  const completed = searchParams.get('completed');
  const lessonId = searchParams.get('lesson');

  // Error handling
  const error = searchParams.get('error');

  if (error) {
    return <ErrorState error={error} />;
  }

  const dayNum = parseInt(day || '0');
  const completedNum = parseInt(completed || '0');

  return (
    <main className="min-h-screen bg-cream-100 dark:bg-gray-900 flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-cream-200 dark:border-gray-700">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="text-green-600 dark:text-green-400" size={32} />
          </div>

          <h1 className="font-heading text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Lesson Marked Complete!
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mb-2">
            {completedNum === 1 ? (
              <>Day {dayNum} has been marked as complete.</>
            ) : (
              <>Days 1-{dayNum} have been marked as complete.</>
            )}
          </p>

          <div className="bg-saffron-50 dark:bg-saffron-900/20 rounded-xl p-4 mb-6">
            <p className="text-saffron-800 dark:text-saffron-300 font-medium">
              {completedNum} of {TOTAL_LESSONS} lessons completed
            </p>
            <div className="mt-2 bg-saffron-200 dark:bg-saffron-800 rounded-full h-2">
              <div
                className="bg-saffron-600 dark:bg-saffron-400 h-2 rounded-full transition-all"
                style={{ width: `${Math.round((completedNum / TOTAL_LESSONS) * 100)}%` }}
              />
            </div>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-500 mb-6">
            Your progress has been synced. Open the app to continue your journey!
          </p>

          <div className="flex flex-col gap-3">
            {lessonId && (
              <Link
                href={`/learn/${lessonId}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-saffron-700 hover:bg-saffron-800 text-white rounded-lg font-medium transition-colors"
              >
                <BookOpen size={18} />
                Read Today's Lesson
                <ArrowRight size={18} />
              </Link>
            )}

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-gray-700 hover:bg-cream-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg font-medium transition-colors border border-cream-200 dark:border-gray-600"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

function ErrorState({ error }: { error: string }) {
  const errorMessages: Record<string, string> = {
    missing_params: 'Invalid link. Please use the link from your email.',
    invalid_day: 'Invalid day number in the link.',
    invalid_token: 'This link is no longer valid or has expired.',
    server_error: 'Something went wrong. Please try again later.',
  };

  const message = errorMessages[error] || 'An unexpected error occurred.';

  return (
    <main className="min-h-screen bg-cream-100 dark:bg-gray-900 flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-cream-200 dark:border-gray-700">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="text-red-600 dark:text-red-400" size={32} />
          </div>

          <h1 className="font-heading text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Unable to Mark Complete
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {message}
          </p>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-saffron-700 hover:bg-saffron-800 text-white rounded-lg font-medium transition-colors"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
