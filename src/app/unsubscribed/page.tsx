import Link from 'next/link';
import { MailX, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Unsubscribed | Dharma Path',
  description: 'You have been unsubscribed from daily email lessons.',
};

export default function UnsubscribedPage() {
  return (
    <main className="min-h-screen bg-cream-100 dark:bg-gray-900 flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-cream-200 dark:border-gray-700">
          <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <MailX className="text-amber-600 dark:text-amber-400" size={32} />
          </div>

          <h1 className="font-heading text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            You've Been Unsubscribed
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mb-6">
            You will no longer receive daily email lessons from Dharma Path.
            Your learning progress on the website is still saved.
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-500 mb-8">
            Changed your mind? You can re-subscribe anytime from your profile page.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-saffron-700 hover:bg-saffron-800 text-white rounded-lg font-medium transition-colors"
          >
            <ArrowLeft size={18} />
            Return to Dharma Path
          </Link>
        </div>
      </div>
    </main>
  );
}
