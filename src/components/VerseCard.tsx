'use client';

import { useState } from 'react';
import { Bookmark, Share2, ChevronDown, ChevronUp } from 'lucide-react';
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

  const { wordMeanings: _wordMeanings, commentary: englishCommentary } = parseEnglishCommentary(rawEnglishCommentary);

  // Check for our custom content (takes priority)
  const hasCustomContent = !!verse.customContent;
  const hasApiCommentary = englishCommentary || hindiCommentary;
  const hasCommentary = hasCustomContent || hasApiCommentary;

  const verseRef = formatVerseRef(verse.chapter, verse.verse);
  // Use custom translation if available, otherwise API translation
  const translation = verse.customContent?.translation || getSimpleTranslation(verse);

  const handleShare = async () => {
    const text = `${verseRef}\n\n"${translation}"\n\nFrom the Bhagavad Gita`;
    
    if (navigator.share) {
      try {
        await navigator.share({ text });
      } catch (_err) {
        // User cancelled or error
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(text);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden transition-colors">
      {/* Header */}
      <div className="bg-gradient-to-r from-saffron-50 to-cream-100 dark:from-saffron-900/30 dark:to-gray-800 px-6 py-4 border-b border-cream-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <span className="font-heading text-lg font-semibold text-saffron-800 dark:text-saffron-400">
            {verseRef}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-full hover:bg-saffron-100 dark:hover:bg-saffron-900/30 text-saffron-600 dark:text-saffron-400 transition-colors"
              aria-label="Share verse"
            >
              <Share2 size={18} />
            </button>
            {onBookmark && (
              <button
                onClick={() => onBookmark(`${verse.chapter}:${verse.verse}`)}
                className={`p-2 rounded-full transition-colors ${
                  isBookmarked
                    ? 'bg-saffron-100 dark:bg-saffron-900/30 text-saffron-600 dark:text-saffron-400'
                    : 'hover:bg-saffron-100 dark:hover:bg-saffron-900/30 text-gray-400'
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
        <blockquote className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center italic">
          "{translation}"
        </blockquote>

        {/* Expandable commentary/explanation section */}
        {hasCommentary && (
          <div className="mt-6">
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center justify-center gap-2 w-full py-2 text-saffron-600 dark:text-saffron-400 hover:text-saffron-700 dark:hover:text-saffron-300 transition-colors"
            >
              <span className="text-sm font-medium">
                {expanded ? 'Hide Explanation' : 'What Does This Mean?'}
              </span>
              {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>

            {expanded && (
              <div className="mt-4 space-y-4 animate-fade-in">
                {/* Custom Content (our own explanations) */}
                {hasCustomContent && verse.customContent && (
                  <>
                    {/* Simple Explanation */}
                    <div className="p-4 bg-cream-50 dark:bg-gray-700/50 rounded-lg">
                      <p className="font-medium text-saffron-700 dark:text-saffron-400 mb-2">What This Means:</p>
                      <p className="text-gray-700 dark:text-gray-300 leading-7 text-[15px]">
                        {verse.customContent.explanation.simple}
                      </p>
                    </div>

                    {/* Deeper Explanation (if available) */}
                    {verse.customContent.explanation.deeper && (
                      <div className="p-4 bg-maroon-50 dark:bg-maroon-900/20 rounded-lg">
                        <p className="font-medium text-maroon-700 dark:text-maroon-400 mb-2">Going Deeper:</p>
                        <p className="text-gray-700 dark:text-gray-300 leading-7 text-[15px]">
                          {verse.customContent.explanation.deeper}
                        </p>
                      </div>
                    )}

                    {/* Practical Application */}
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-800">
                      <p className="font-medium text-green-700 dark:text-green-400 mb-2">How To Apply This:</p>
                      <p className="text-gray-700 dark:text-gray-300 leading-7 text-[15px]">
                        {verse.customContent.practicalApplication}
                      </p>
                    </div>

                    {/* Key Terms */}
                    {verse.customContent.keyTerms && verse.customContent.keyTerms.length > 0 && (
                      <div className="p-4 bg-white dark:bg-gray-700/50 rounded-lg border border-cream-200 dark:border-gray-600">
                        <p className="font-medium text-gray-700 dark:text-gray-300 mb-3">Key Sanskrit Terms:</p>
                        <div className="flex flex-wrap gap-2">
                          {verse.customContent.keyTerms.map((term, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1 px-3 py-1 bg-saffron-50 dark:bg-saffron-900/30 rounded-full text-sm"
                            >
                              <span className="font-medium text-saffron-700 dark:text-saffron-400">{term.term}</span>
                              <span className="text-gray-500 dark:text-gray-400">= {term.meaning}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* API Commentary (fallback when no custom content) */}
                {!hasCustomContent && hasApiCommentary && (
                  <div className="p-4 bg-cream-50 dark:bg-gray-700/50 rounded-lg text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-medium text-saffron-700 dark:text-saffron-400">Commentary:</p>
                      {/* Language toggle - only show if both languages available */}
                      {englishCommentary && hindiCommentary && (
                        <div className="flex items-center gap-1 bg-cream-200 dark:bg-gray-600 rounded-full p-1">
                          <button
                            onClick={() => setCommentaryLang('en')}
                            className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                              commentaryLang === 'en'
                                ? 'bg-white dark:bg-gray-800 text-saffron-700 dark:text-saffron-400 shadow-sm'
                                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                            }`}
                          >
                            English
                          </button>
                          <button
                            onClick={() => setCommentaryLang('hi')}
                            className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                              commentaryLang === 'hi'
                                ? 'bg-white dark:bg-gray-800 text-saffron-700 dark:text-saffron-400 shadow-sm'
                                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
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
                          <p className="text-gray-700 dark:text-gray-300 leading-7 text-[15px]">
                            {englishCommentary}
                          </p>
                          <p className="text-xs text-gray-400 text-right italic">
                            — Swami Sivananda
                          </p>
                        </div>
                      ) : hindiCommentary ? (
                        <div className="space-y-4">
                          <p className="text-gray-700 dark:text-gray-300 leading-7 text-[15px]">
                            {hindiCommentary}
                          </p>
                          <p className="text-xs text-gray-400 text-right italic">
                            — Swami Chinmayananda
                          </p>
                        </div>
                      ) : englishCommentary ? (
                        <div className="space-y-4">
                          <p className="text-gray-700 dark:text-gray-300 leading-7 text-[15px]">
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
        )}
      </div>
    </div>
  );
}
