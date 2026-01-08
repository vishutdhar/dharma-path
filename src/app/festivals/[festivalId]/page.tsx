'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, MapPin, Sparkles, ChevronRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { getFestivalById, festivals } from '@/data/festivals';

export default function FestivalPage() {
  const params = useParams();
  const festivalId = params.festivalId as string;
  const festival = getFestivalById(festivalId);

  if (!festival) {
    return (
      <main className="min-h-screen pb-24 bg-cream-100 dark:bg-gray-900 transition-colors">
        <div className="max-w-2xl lg:max-w-4xl mx-auto px-6 py-20 text-center">
          <p className="text-gray-500 dark:text-gray-400">Festival not found</p>
          <Link href="/learn" className="text-saffron-600 dark:text-saffron-400 mt-4 inline-block">
            Back to Learning Path
          </Link>
        </div>
        <Navigation />
      </main>
    );
  }

  // Find related festivals based on themes
  const relatedFestivals = festivals
    .filter(f => f.id !== festival.id && f.themes.some(t => festival.themes.includes(t)))
    .slice(0, 3);

  // Find previous and next festival
  const currentIndex = festivals.findIndex(f => f.id === festival.id);
  const prevFestival = currentIndex > 0 ? festivals[currentIndex - 1] : null;
  const nextFestival = currentIndex < festivals.length - 1 ? festivals[currentIndex + 1] : null;

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
              <p className="text-xs font-medium text-saffron-600 dark:text-saffron-400">
                Festival Guide
              </p>
              <h1 className="font-heading text-lg font-bold text-gray-900 dark:text-gray-100 truncate">
                {festival.name}
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-2xl lg:max-w-4xl mx-auto px-6 py-8">
        {/* Festival Header Card */}
        <div className="bg-gradient-to-br from-saffron-500 to-orange-400 rounded-2xl p-6 mb-6 text-white shadow-lg">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center shrink-0">
              <Sparkles size={28} />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-heading text-2xl font-bold mb-1">
                {festival.name}
              </h2>
              {festival.sanskrit && (
                <p className="text-saffron-100 text-lg mb-2">
                  {festival.sanskrit}
                </p>
              )}
              {festival.alternateNames && festival.alternateNames.length > 0 && (
                <p className="text-saffron-100 text-sm">
                  Also known as: {festival.alternateNames.join(', ')}
                </p>
              )}
            </div>
          </div>

          {/* Meta info */}
          <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-white/20">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span className="text-sm">{festival.month}</span>
            </div>
            {festival.duration && (
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span className="text-sm">{festival.duration}</span>
              </div>
            )}
            {festival.region && (
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span className="text-sm">{festival.region}</span>
              </div>
            )}
          </div>
        </div>

        {/* Summary */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-cream-200 dark:border-gray-700 p-6 mb-6 transition-colors">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            {festival.summary}
          </p>
        </div>

        {/* Main Content Sections */}
        <div className="space-y-6">
          {/* Significance */}
          <ContentSection
            title="Why We Celebrate"
            icon={<Sparkles size={20} />}
            content={festival.significance}
          />

          {/* Mythology */}
          <ContentSection
            title="The Story"
            icon={<Sparkles size={20} />}
            content={festival.mythology}
          />

          {/* How to Celebrate */}
          <ContentSection
            title="How to Celebrate"
            icon={<Sparkles size={20} />}
            content={festival.howToCelebrate}
          />

          {/* Spiritual Meaning */}
          <ContentSection
            title="Spiritual Meaning"
            icon={<Sparkles size={20} />}
            content={festival.spiritualMeaning}
          />
        </div>

        {/* Traditions & Foods */}
        {(festival.traditions || festival.foods) && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {festival.traditions && festival.traditions.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-cream-200 dark:border-gray-700 p-5 transition-colors">
                <h3 className="font-heading text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Traditions
                </h3>
                <div className="flex flex-wrap gap-2">
                  {festival.traditions.map((tradition, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-saffron-50 dark:bg-saffron-900/30 text-saffron-700 dark:text-saffron-300 text-sm rounded-full"
                    >
                      {tradition}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {festival.foods && festival.foods.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-cream-200 dark:border-gray-700 p-5 transition-colors">
                <h3 className="font-heading text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Traditional Foods
                </h3>
                <div className="flex flex-wrap gap-2">
                  {festival.foods.map((food, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm rounded-full"
                    >
                      {food}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Related Deities */}
        {festival.relatedDeities && festival.relatedDeities.length > 0 && (
          <div className="mt-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-cream-200 dark:border-gray-700 p-5 transition-colors">
            <h3 className="font-heading text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Associated Deities
            </h3>
            <div className="flex flex-wrap gap-2">
              {festival.relatedDeities.map((deity, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-maroon-50 dark:bg-maroon-900/30 text-maroon-700 dark:text-maroon-300 text-sm rounded-full border border-maroon-200 dark:border-maroon-800"
                >
                  {deity}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Related Festivals */}
        {relatedFestivals.length > 0 && (
          <div className="mt-8">
            <h3 className="font-heading text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Related Festivals
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {relatedFestivals.map((relFestival) => (
                <Link
                  key={relFestival.id}
                  href={`/festivals/${relFestival.id}`}
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-cream-200 dark:border-gray-700 hover:border-saffron-300 dark:hover:border-saffron-700 hover:shadow-md transition-all group"
                >
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-saffron-600 dark:group-hover:text-saffron-400">
                    {relFestival.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {relFestival.month}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Navigation between festivals */}
        <div className="flex items-center justify-between mt-8">
          {prevFestival ? (
            <Link
              href={`/festivals/${prevFestival.id}`}
              className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 text-saffron-600 dark:text-saffron-400 rounded-xl hover:bg-saffron-50 dark:hover:bg-gray-700 shadow-sm border border-cream-200 dark:border-gray-700 font-medium transition-all"
            >
              <ArrowLeft size={20} />
              {prevFestival.name}
            </Link>
          ) : (
            <div />
          )}

          {nextFestival && (
            <Link
              href={`/festivals/${nextFestival.id}`}
              className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 text-saffron-600 dark:text-saffron-400 rounded-xl hover:bg-saffron-50 dark:hover:bg-gray-700 shadow-sm border border-cream-200 dark:border-gray-700 font-medium transition-all"
            >
              {nextFestival.name}
              <ChevronRight size={20} />
            </Link>
          )}
        </div>

        {/* Back to Learn */}
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

// Content Section Component
function ContentSection({
  title,
  icon,
  content,
}: {
  title: string;
  icon: React.ReactNode;
  content: string;
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-cream-200 dark:border-gray-700 overflow-hidden transition-colors">
      {/* Section Header */}
      <div className="bg-saffron-50 dark:bg-saffron-900/30 px-6 py-4 border-b border-saffron-100 dark:border-saffron-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full text-saffron-600 dark:text-saffron-400 bg-white dark:bg-gray-800 flex items-center justify-center">
            {icon}
          </div>
          <h2 className="font-heading text-xl font-bold text-gray-900 dark:text-gray-100">
            {title}
          </h2>
        </div>
      </div>

      {/* Section Content */}
      <div className="p-6">
        <div
          className="prose prose-gray dark:prose-invert max-w-none prose-headings:font-heading prose-h3:text-lg prose-h3:font-semibold prose-h3:text-gray-900 dark:prose-h3:text-gray-100 prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-ul:my-3 prose-blockquote:border-saffron-500 prose-blockquote:bg-saffron-50 dark:prose-blockquote:bg-saffron-900/30 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-strong:text-gray-900 dark:prose-strong:text-gray-100"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
}
