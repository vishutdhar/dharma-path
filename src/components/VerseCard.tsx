'use client';

import { useState } from 'react';
import { Bookmark, Share2, Volume2, ChevronDown, ChevronUp, Languages } from 'lucide-react';
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
  const [commentaryLang, setCommentaryLang] = useState<'en' | 'hi'>('en');

  // Get available commentaries
  const rawEnglishCommentary = verse.siva?.ec;
  const hindiCommentary = verse.chinmay?.hc;

  // Parse English commentary - API returns word breakdown + "Commentary" + actual text
  // Format: "4.7 यदा यदा whenever?..." followed by "Commentary Dharma is..."
  const parseEnglishCommentary = (raw: string | undefined) => {
    if (!raw) return { wordMeanings: '', commentary: '' };

    // Split on "Commentary" to separate word meanings from actual commentary
    const commentaryIndex = raw.indexOf('Commentary');
    if (commentaryIndex === -1) {
      return { wordMeanings: '', commentary: cleanupCommentary(raw) };
    }

    const wordMeanings = raw.substring(0, commentaryIndex).trim();
    const commentary = raw.substring(commentaryIndex + 'Commentary'.length).trim();

    return { wordMeanings, commentary: cleanupCommentary(commentary) };
  };

  // Clean up API text quality issues (random question marks, etc.)
  // The API has formatting issues where ? is used incorrectly throughout
  const cleanupCommentary = (text: string): string => {
    return text
      // FIRST: Fix isolated "?" with spaces around it (remove entirely)
      .replace(/\s+\?\s+/g, ' ')
      // Fix "word?Word" (no space) where next is capitalized - likely sentence break
      .replace(/\?([A-Z])/g, '. $1')
      // Fix "word? Word" where next word starts sentence (capitalized)
      .replace(/\?\s+([A-Z])/g, '. $1')
      // Fix "word? followed by lowercase" (clearly not a question)
      .replace(/\?\s*([a-z])/g, ', $1')
      // Fix "word? i.e." or similar abbreviations
      .replace(/\?\s*(i\.e\.|e\.g\.|etc\.|viz\.)/gi, ', $1')
      // Fix remaining question marks followed by common words
      .replace(/\?\s*(and|but|or|so|yet|for|nor|they|it|he|she|we|this|that|the|a|an|in|on|to|is|are|was|were)\s/gi, ', $1 ')
      // Fix ",is" or ", is" at start (artifact from "?is" conversion)
      .replace(/,\s*is\s/gi, ' is ')
      // Fix double periods
      .replace(/\.{2,}/g, '.')
      // Fix ", ," or ",," patterns
      .replace(/,\s*,/g, ',')
      // Fix " ," patterns (space before comma)
      .replace(/\s+,/g, ',')
      // Clean up any double spaces
      .replace(/\s{2,}/g, ' ')
      .trim();
  };

  const { wordMeanings, commentary: englishCommentary } = parseEnglishCommentary(rawEnglishCommentary);
  const hasCommentary = englishCommentary || hindiCommentary;
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
        {hasCommentary && (
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
                <div className="flex items-center justify-between mb-3">
                  <p className="font-medium text-saffron-700">Commentary:</p>
                  {/* Language toggle - only show if both languages available */}
                  {englishCommentary && hindiCommentary && (
                    <div className="flex items-center gap-1 bg-cream-200 rounded-full p-1">
                      <button
                        onClick={() => setCommentaryLang('en')}
                        className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                          commentaryLang === 'en'
                            ? 'bg-white text-saffron-700 shadow-sm'
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        English
                      </button>
                      <button
                        onClick={() => setCommentaryLang('hi')}
                        className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                          commentaryLang === 'hi'
                            ? 'bg-white text-saffron-700 shadow-sm'
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        Hindi
                      </button>
                    </div>
                  )}
                </div>

                {/* Commentary text */}
                <div className="leading-relaxed">
                  {commentaryLang === 'en' && englishCommentary ? (
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-7 text-[15px]">
                        {englishCommentary}
                      </p>
                      <p className="text-xs text-gray-400 text-right italic">
                        — Swami Sivananda
                      </p>
                    </div>
                  ) : hindiCommentary ? (
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-7 text-[15px]">
                        {hindiCommentary}
                      </p>
                      <p className="text-xs text-gray-400 text-right italic">
                        — Swami Chinmayananda
                      </p>
                    </div>
                  ) : englishCommentary ? (
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-7 text-[15px]">
                        {englishCommentary}
                      </p>
                      <p className="text-xs text-gray-400 text-right italic">
                        — Swami Sivananda
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
