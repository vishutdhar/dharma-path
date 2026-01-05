'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search as SearchIcon, ArrowLeft, BookOpen, Lightbulb } from 'lucide-react';
import Navigation from '@/components/Navigation';

// Glossary of key terms
const glossary = [
  {
    term: 'Dharma',
    sanskrit: 'धर्म',
    definition: 'Righteous duty, cosmic order, moral law. Your role in maintaining universal harmony.',
  },
  {
    term: 'Karma',
    sanskrit: 'कर्म',
    definition: 'Action and its consequences. Every action creates an effect that returns to the doer.',
  },
  {
    term: 'Samsara',
    sanskrit: 'संसार',
    definition: 'The cycle of death and rebirth. The wheel of existence that continues until liberation.',
  },
  {
    term: 'Moksha',
    sanskrit: 'मोक्ष',
    definition: 'Liberation from the cycle of rebirth. The ultimate goal of human existence.',
  },
  {
    term: 'Atman',
    sanskrit: 'आत्मन्',
    definition: 'The individual soul. Your true self beyond the body and mind.',
  },
  {
    term: 'Brahman',
    sanskrit: 'ब्रह्मन्',
    definition: 'The ultimate reality. The infinite, unchanging ground of all existence.',
  },
  {
    term: 'Bhakti',
    sanskrit: 'भक्ति',
    definition: 'Devotion, loving surrender to the Divine. One of the paths to liberation.',
  },
  {
    term: 'Yoga',
    sanskrit: 'योग',
    definition: 'Union. A discipline or path that leads to oneness with the Divine.',
  },
  {
    term: 'Maya',
    sanskrit: 'माया',
    definition: 'Illusion. The power that makes the world appear as separate from Brahman.',
  },
  {
    term: 'Guru',
    sanskrit: 'गुरु',
    definition: 'Spiritual teacher. One who dispels the darkness of ignorance.',
  },
  {
    term: 'Mantra',
    sanskrit: 'मन्त्र',
    definition: 'Sacred utterance. Words or sounds used in meditation and worship.',
  },
  {
    term: 'Puja',
    sanskrit: 'पूजा',
    definition: 'Worship ritual. The act of showing reverence to a deity.',
  },
];

// Quick links to popular topics
const quickLinks = [
  { label: 'What is Dharma?', href: '/learn/1-2-1' },
  { label: 'Understanding Karma', href: '/learn/1-2-2' },
  { label: 'The Bhagavad Gita', href: '/gita' },
  { label: 'Who is Krishna?', href: '/learn/3-1-2' },
  { label: 'The Ramayana', href: '/learn/2-1-1' },
  { label: 'Core Concepts', href: '/learn' },
];

export default function SearchPage() {
  const [query, setQuery] = useState('');

  const filteredGlossary = query 
    ? glossary.filter(item => 
        item.term.toLowerCase().includes(query.toLowerCase()) ||
        item.definition.toLowerCase().includes(query.toLowerCase())
      )
    : glossary;

  return (
    <main className="min-h-screen pb-24 bg-cream-100">
      {/* Header */}
      <header className="bg-white border-b border-cream-200 sticky top-0 z-40">
        <div className="max-w-2xl lg:max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/" className="p-2 -ml-2 rounded-lg hover:bg-cream-100">
              <ArrowLeft size={24} className="text-gray-600" />
            </Link>
            <h1 className="font-heading text-xl font-bold text-gray-900">
              Search & Explore
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
              placeholder="Search terms, concepts..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-cream-50 border border-cream-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
            />
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-2xl lg:max-w-4xl mx-auto px-6 py-6">
        {/* Quick Links */}
        {!query && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="text-saffron-500" size={20} />
              <h2 className="font-heading text-lg font-semibold text-gray-900">
                Popular Topics
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 bg-white border border-cream-200 rounded-full text-sm font-medium text-gray-700 hover:bg-saffron-50 hover:border-saffron-200 hover:text-saffron-700 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Glossary */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="text-saffron-500" size={20} />
            <h2 className="font-heading text-lg font-semibold text-gray-900">
              {query ? 'Search Results' : 'Glossary of Terms'}
            </h2>
          </div>

          {filteredGlossary.length > 0 ? (
            <div className="space-y-3">
              {filteredGlossary.map((item) => (
                <div 
                  key={item.term}
                  className="bg-white rounded-xl p-4 shadow-sm border border-cream-200"
                >
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="font-heading text-lg font-semibold text-gray-900">
                      {item.term}
                    </h3>
                    <span className="font-sanskrit text-saffron-600 text-lg">
                      {item.sanskrit}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.definition}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-400">
              <SearchIcon size={48} className="mx-auto mb-4 opacity-50" />
              <p>No results found for "{query}"</p>
              <p className="text-sm mt-2">Try a different search term</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <Navigation />
    </main>
  );
}
