import Link from 'next/link';
import { Home, BookOpen, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-cream-100 flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        {/* 404 Display */}
        <div className="mb-6">
          <p className="text-8xl font-bold text-saffron-200">404</p>
          <div className="w-16 h-1 bg-saffron-500 mx-auto mt-2 rounded-full" />
        </div>

        {/* Message */}
        <h1 className="font-heading text-2xl font-bold text-gray-900 mb-3">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          The path you seek does not exist. Perhaps the journey itself is the destination.
        </p>

        {/* Sanskrit Quote */}
        <blockquote className="text-saffron-600 italic mb-8 px-4">
          "कर्मण्येवाधिकारस्ते"
          <br />
          <span className="text-sm text-gray-500 not-italic">
            — Your right is to action alone
          </span>
        </blockquote>

        {/* Navigation Options */}
        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-saffron-500 text-white font-semibold rounded-xl hover:bg-saffron-600 transition-colors shadow-lg"
          >
            <Home size={20} />
            Return Home
          </Link>

          <div className="flex gap-3">
            <Link
              href="/gita"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white text-saffron-600 font-medium rounded-xl hover:bg-saffron-50 transition-colors border border-saffron-200"
            >
              <BookOpen size={18} />
              Read Gita
            </Link>

            <Link
              href="/search"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white text-saffron-600 font-medium rounded-xl hover:bg-saffron-50 transition-colors border border-saffron-200"
            >
              <Search size={18} />
              Search
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
