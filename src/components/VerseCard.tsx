'use client';

import { useState } from 'react';
import { Bookmark, Share2, Volume2, ChevronDown, ChevronUp } from 'lucide-react';
import { GitaVerse, formatVerseRef, getSimpleTranslation } from '@/lib/api';

interface VerseCardProps {
  verse: GitaVerse;
  showExpanded?: boolean;
  onBookmark?: (ref: string) => void;
  isBookmarked?: boolean;
}

export default function VerseCard({
  verse,
  showExpanded = false,
  onBookmark,
  isBookmarked = false,
}: VerseCardProps) {
  const [expanded, setExpanded] = useState(showExpanded);
  const verseRef = formatVerseRef(verse.chapter, verse.verse);
  const translation = getSimpleTranslation(verse);

  const handleShare = async () => {
    const text = `${verseRef}\n\n"${translation}"\n\nFrom the Bhagavad Gita`;
    
    if (navigator.share) {
      try {
        await navigator.share({ text });
      } catch (err) {
        // User cancelled or error
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(text);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-saffron-50 to-cream-100 px-6 py-4 border-b border-cream-200">
        <div className="flex items-center justify-between">
          <span className="font-heading text-lg font-semibold text-saffron-800">
            {verseRef}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-full hover:bg-saffron-100 text-saffron-600 transition-colors"
              aria-label="Share verse"
            >
              <Share2 size={18} />
            </button>
            {onBookmark && (
              <button
                onClick={() => onBookmark(`${verse.chapter}:${verse.verse}`)}
                className={`p-2 rounded-full transition-colors ${
                  isBookmarked 
                    ? 'bg-saffron-100 text-saffron-600' 
                    : 'hover:bg-saffron-100 text-gray-400'
                }`}
                aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark verse'}
              >
                <Bookmark size={18} fill={isBookmarked ? 'currentColor' : 'none'} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Sanskrit */}
        <div className="sanskrit-text text-center mb-4 leading-relaxed">
          {verse.slok}
        </div>

        {/* Transliteration */}
        {verse.transliteration && (
          <p className="transliteration text-center text-sm mb-6">
            {verse.transliteration}
          </p>
        )}

        {/* Divider */}
        <div className="divider-gold my-6" />

        {/* Translation */}
        <blockquote className="text-gray-700 text-lg leading-relaxed text-center italic">
          "{translation}"
        </blockquote>

        {/* Expandable commentary section */}
        {verse.chinmay?.hc && (
          <div className="mt-6">
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center justify-center gap-2 w-full py-2 text-saffron-600 hover:text-saffron-700 transition-colors"
            >
              <span className="text-sm font-medium">
                {expanded ? 'Hide Commentary' : 'Show Commentary'}
              </span>
              {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>

            {expanded && (
              <div className="mt-4 p-4 bg-cream-50 rounded-lg text-gray-600 text-sm leading-relaxed animate-fade-in">
                <p className="font-medium text-saffron-700 mb-2">Commentary:</p>
                {verse.chinmay.hc}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
