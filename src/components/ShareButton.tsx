'use client';

import { useState } from 'react';
import { Share2, Check } from 'lucide-react';

const BASE_URL = 'https://mydharmapath.com';

interface ShareButtonProps {
  /** Title of the content (e.g., "Bhagavad Gita 2.47") */
  title: string;
  /** The main text/quote to share */
  text: string;
  /** Path to the content (e.g., "/gita/2/47") - will be appended to base URL */
  url: string;
  /** Optional additional CSS classes */
  className?: string;
  /** Optional size for the icon (default: 18) */
  size?: number;
}

/**
 * ShareButton - A reusable share button component for viral growth
 *
 * Features:
 * - Uses native Web Share API on mobile (shows native share sheet)
 * - Falls back to clipboard copy on desktop
 * - Shows visual feedback when copied
 * - Always includes the full URL for app discovery
 */
export default function ShareButton({
  title,
  text,
  url,
  className = '',
  size = 18,
}: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const fullUrl = `${BASE_URL}${url}`;

  // Format the share text with title and quote only
  // URL is passed separately to navigator.share() for proper link preview
  const shareText = `${title}\n\n"${text}"`;

  const handleShare = async () => {
    // Try native share API first (works on mobile)
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: shareText,
          url: fullUrl,
        });
        return; // Success - exit early
      } catch (err) {
        // User cancelled or share failed - fall through to clipboard
        if ((err as Error).name === 'AbortError') {
          return; // User cancelled, don't show copied state
        }
      }
    }

    // Fallback: Copy to clipboard (include URL since there's no separate url param)
    try {
      const clipboardText = `${shareText}\n\n${fullUrl}`;
      await navigator.clipboard.writeText(clipboardText);
      setCopied(true);

      // Reset copied state after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  };

  return (
    <button
      onClick={handleShare}
      className={`p-2 rounded-full hover:bg-saffron-100 dark:hover:bg-saffron-900/30 text-saffron-600 dark:text-saffron-400 transition-colors ${className}`}
      aria-label={copied ? 'Copied to clipboard' : 'Share'}
      title={copied ? 'Copied!' : 'Share'}
    >
      {copied ? (
        <Check size={size} className="text-green-500" />
      ) : (
        <Share2 size={size} />
      )}
    </button>
  );
}
