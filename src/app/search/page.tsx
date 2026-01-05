'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { Search as SearchIcon, ArrowLeft, BookOpen, Lightbulb, Book, ScrollText, X } from 'lucide-react';
import Navigation from '@/components/Navigation';
import {
  search,
  SearchResult,
  SearchableLesson,
  SearchableVerse,
  SearchableGlossaryTerm,
  getAllGlossaryTerms,
  getMatchExcerpt,
  FuseResultMatch,
} from '@/lib/search';

// Quick links to popular topics
const quickLinks = [
  { label: 'What is Dharma?', href: '/learn/1-2-1' },
  { label: 'Understanding Karma', href: '/learn/1-2-2' },
  { label: 'The Bhagavad Gita', href: '/gita' },
  { label: 'Who is Krishna?', href: '/learn/3-1-2' },
  { label: 'The Ramayana', href: '/learn/2-1-1' },
  { label: 'Core Concepts', href: '/learn' },
];

// Debounce hook
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

type TabType = 'all' | 'lessons' | 'verses' | 'glossary';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const debouncedQuery = useDebounce(query, 300);

  // Perform search when debounced query changes
  useEffect(() => {
    if (debouncedQuery.length >= 2) {
      setIsSearching(true);
      // Small timeout to show loading state
      const timer = setTimeout(() => {
        const searchResults = search(debouncedQuery, 100);
        setResults(searchResults);
        setIsSearching(false);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setResults([]);
      setIsSearching(false);
    }
  }, [debouncedQuery]);

  // Filter results by type
  const filteredResults = useMemo(() => {
    if (activeTab === 'all') return results;
    return results.filter(r => {
      if (activeTab === 'lessons') return r.item.type === 'lesson';
      if (activeTab === 'verses') return r.item.type === 'verse';
      if (activeTab === 'glossary') return r.item.type === 'glossary';
      return true;
    });
  }, [results, activeTab]);

  // Count by type
  const counts = useMemo(() => ({
    all: results.length,
    lessons: results.filter(r => r.item.type === 'lesson').length,
    verses: results.filter(r => r.item.type === 'verse').length,
    glossary: results.filter(r => r.item.type === 'glossary').length,
  }), [results]);

  // Get glossary for empty state
  const glossaryTerms = getAllGlossaryTerms();

  const clearSearch = useCallback(() => {
    setQuery('');
    setResults([]);
  }, []);

  const isSearchActive = query.length > 0;

  return (
    <main className="min-h-screen pb-24 bg-cream-100 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-cream-200 dark:border-gray-700 sticky top-0 z-40 transition-colors">
        <div className="max-w-2xl lg:max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/" className="p-2 -ml-2 rounded-lg hover:bg-cream-100 dark:hover:bg-gray-700">
              <ArrowLeft size={24} className="text-gray-600 dark:text-gray-400" />
            </Link>
            <h1 className="font-heading text-xl font-bold text-gray-900 dark:text-gray-100">
              Search
            </h1>
          </div>

          {/* Search Input */}
          <div className="relative">
            <SearchIcon
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search lessons, verses, terms..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-3 bg-cream-50 dark:bg-gray-700 border border-cream-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-colors"
              autoFocus
            />
            {query && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-cream-200 dark:hover:bg-gray-600 text-gray-400 transition-colors"
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/* Tabs - only show when searching */}
          {isSearchActive && results.length > 0 && (
            <div className="flex gap-2 mt-4 overflow-x-auto pb-1">
              {(['all', 'lessons', 'verses', 'glossary'] as TabType[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    activeTab === tab
                      ? 'bg-saffron-500 text-white'
                      : 'bg-cream-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-cream-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {tab === 'all' && `All (${counts.all})`}
                  {tab === 'lessons' && `Lessons (${counts.lessons})`}
                  {tab === 'verses' && `Verses (${counts.verses})`}
                  {tab === 'glossary' && `Terms (${counts.glossary})`}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Content */}
      <div className="max-w-2xl lg:max-w-4xl mx-auto px-6 py-6">
        {/* Loading State */}
        {isSearching && (
          <div className="text-center py-12 text-gray-400">
            <div className="animate-pulse">Searching...</div>
          </div>
        )}

        {/* Search Results */}
        {!isSearching && isSearchActive && (
          <>
            {filteredResults.length > 0 ? (
              <div className="space-y-3">
                {filteredResults.map((result, idx) => (
                  <SearchResultCard key={`${result.item.type}-${idx}`} result={result} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-400">
                <SearchIcon size={48} className="mx-auto mb-4 opacity-50" />
                <p>No results found for "{query}"</p>
                <p className="text-sm mt-2">Try a different search term</p>
              </div>
            )}
          </>
        )}

        {/* Empty State - Quick Links & Glossary */}
        {!isSearchActive && (
          <>
            {/* Quick Links */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="text-saffron-500" size={20} />
                <h2 className="font-heading text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Popular Topics
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 bg-white dark:bg-gray-800 border border-cream-200 dark:border-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-saffron-50 dark:hover:bg-saffron-900/30 hover:border-saffron-200 dark:hover:border-saffron-700 hover:text-saffron-700 dark:hover:text-saffron-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Glossary */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="text-saffron-500" size={20} />
                <h2 className="font-heading text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Glossary of Terms
                </h2>
              </div>
              <div className="space-y-3">
                {glossaryTerms.map((item) => (
                  <div
                    key={item.term}
                    className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-cream-200 dark:border-gray-700 transition-colors"
                  >
                    <div className="flex items-baseline gap-3 mb-2">
                      <h3 className="font-heading text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {item.term}
                      </h3>
                      <span className="font-sanskrit text-saffron-600 dark:text-saffron-400 text-lg">
                        {item.sanskrit}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {item.definition}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Navigation */}
      <Navigation />
    </main>
  );
}

// =============================================================================
// SEARCH RESULT CARD COMPONENT
// =============================================================================

function SearchResultCard({ result }: { result: SearchResult }) {
  const { item, matches } = result;

  if (item.type === 'lesson') {
    return <LessonResultCard item={item} matches={matches} />;
  }

  if (item.type === 'verse') {
    return <VerseResultCard item={item} matches={matches} />;
  }

  if (item.type === 'glossary') {
    return <GlossaryResultCard item={item} />;
  }

  return null;
}

function LessonResultCard({
  item,
  matches,
}: {
  item: SearchableLesson;
  matches?: readonly FuseResultMatch[];
}) {
  // Find the best match to show as excerpt
  const contentMatch = matches?.find(m => m.key === 'content');
  const excerpt = contentMatch
    ? getMatchExcerpt(item.content, contentMatch.indices)
    : item.description;

  return (
    <Link href={`/learn/${item.id}`}>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-cream-200 dark:border-gray-700 hover:shadow-md hover:border-saffron-200 dark:hover:border-saffron-700 transition-all">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-saffron-100 dark:bg-saffron-900/30 rounded-lg flex items-center justify-center shrink-0">
            <Book className="text-saffron-600 dark:text-saffron-400" size={20} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 bg-saffron-100 dark:bg-saffron-900/30 text-saffron-700 dark:text-saffron-400 text-xs font-medium rounded">
                Lesson
              </span>
              <span className="text-xs text-gray-400">
                Level {item.levelId} · {item.moduleTitle}
              </span>
            </div>
            <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-1">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
              {excerpt}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

function VerseResultCard({
  item,
  matches,
}: {
  item: SearchableVerse;
  matches?: readonly FuseResultMatch[];
}) {
  // Find the best match to show
  const translationMatch = matches?.find(m => m.key === 'translation');
  const explanationMatch = matches?.find(m => m.key === 'explanation');

  const excerpt = translationMatch
    ? getMatchExcerpt(item.translation, translationMatch.indices)
    : explanationMatch
    ? getMatchExcerpt(item.explanation, explanationMatch.indices)
    : item.translation;

  return (
    <Link href={`/gita/${item.chapter}/${item.verse}`}>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-cream-200 dark:border-gray-700 hover:shadow-md hover:border-saffron-200 dark:hover:border-saffron-700 transition-all">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-maroon-100 dark:bg-maroon-900/30 rounded-lg flex items-center justify-center shrink-0">
            <ScrollText className="text-maroon-600 dark:text-maroon-400" size={20} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 bg-maroon-100 dark:bg-maroon-900/30 text-maroon-700 dark:text-maroon-400 text-xs font-medium rounded">
                Verse
              </span>
              {item.famousVerse && (
                <span className="px-2 py-0.5 bg-gold-100 dark:bg-gold-900/30 text-gold-700 dark:text-gold-400 text-xs font-medium rounded">
                  Famous
                </span>
              )}
            </div>
            <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-1">
              {item.reference}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 italic">
              "{excerpt}"
            </p>
            {item.themes.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {item.themes.slice(0, 3).map(theme => (
                  <span
                    key={theme}
                    className="px-2 py-0.5 bg-cream-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs rounded"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

function GlossaryResultCard({ item }: { item: SearchableGlossaryTerm }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-cream-200 dark:border-gray-700 transition-colors">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center shrink-0">
          <BookOpen className="text-green-600 dark:text-green-400" size={20} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded">
              Term
            </span>
          </div>
          <div className="flex items-baseline gap-2 mb-1">
            <h3 className="font-medium text-gray-900 dark:text-gray-100">
              {item.term}
            </h3>
            <span className="font-sanskrit text-saffron-600 dark:text-saffron-400">
              {item.sanskrit}
            </span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {item.definition}
          </p>
        </div>
      </div>
    </div>
  );
}
