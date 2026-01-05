'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to console in development
    console.error('Application error:', error);
  }, [error]);

  return (
    <main className="min-h-screen bg-cream-100 flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        {/* Error Icon */}
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="text-red-500" size={40} />
        </div>

        {/* Error Message */}
        <h1 className="font-heading text-2xl font-bold text-gray-900 mb-3">
          Something Went Wrong
        </h1>
        <p className="text-gray-600 mb-8">
          We encountered an unexpected error. Don't worry, your progress is safely stored.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-saffron-500 text-white font-semibold rounded-xl hover:bg-saffron-600 transition-colors shadow-lg"
          >
            <RefreshCw size={20} />
            Try Again
          </button>

          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-saffron-600 font-semibold rounded-xl hover:bg-saffron-50 transition-colors border border-saffron-200"
          >
            <Home size={20} />
            Go Home
          </Link>
        </div>

        {/* Error Details (Development Only) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 p-4 bg-gray-100 rounded-lg text-left">
            <p className="text-xs font-mono text-gray-500 break-all">
              {error.message}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
