import Link from 'next/link';
import { AlertCircle, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Unsubscribe Error | Dharma Path',
  description: 'There was an error processing your unsubscribe request.',
};

export default function UnsubscribeErrorPage() {
  return (
    <main className="min-h-screen bg-cream-100 dark:bg-gray-900 flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-cream-200 dark:border-gray-700">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="text-red-600 dark:text-red-400" size={32} />
          </div>

          <h1 className="font-heading text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Something Went Wrong
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We couldn't process your unsubscribe request. This could be because
            the link was invalid or has already been used.
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-500 mb-8">
            You can manage your email subscription from your profile page after signing in.
          </p>

          <div className="flex flex-col gap-3">
            <Link
              href="/profile"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-saffron-700 hover:bg-saffron-800 text-white rounded-lg font-medium transition-colors"
            >
              Go to Profile
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
            >
              <ArrowLeft size={18} />
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
