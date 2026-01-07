/**
 * Upanishad Scripture Types
 * Data structures for the 13 principal Upanishads
 */

// =============================================================================
// TYPES
// =============================================================================

export type UpanishadId =
  | 'isha'
  | 'kena'
  | 'katha'
  | 'prashna'
  | 'mundaka'
  | 'mandukya'
  | 'taittiriya'
  | 'aitareya'
  | 'chandogya'
  | 'brihadaranyaka'
  | 'shvetashvatara'
  | 'kaushitaki'
  | 'maitri';

export type VedaSource = 'rig' | 'yajur' | 'sama' | 'atharva';

// =============================================================================
// VERSE INTERFACE
// =============================================================================

export interface UpanishadVerse {
  // Identification
  upanishad: UpanishadId;
  section: number;           // Chapter/Khanda/Valli number
  verse: number;             // Verse/Mantra number within section

  // Sanskrit text
  sanskrit: string;          // Devanagari script
  transliteration: string;   // IAST romanization

  // Translation (our own - clear, modern English)
  translation: string;

  // Explanation
  explanation: {
    simple: string;          // For beginners, 2-3 sentences
    deeper?: string;         // Optional deeper meaning
  };

  // Practical application for daily life
  practicalApplication: string;

  // Key Sanskrit terms in this verse
  keyTerms?: {
    term: string;            // Sanskrit word
    meaning: string;         // Simple definition
  }[];

  // Metadata
  themes: string[];          // e.g., ["brahman", "atman", "consciousness"]
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  famousVerse?: boolean;     // Well-known verse

  // If this verse contains a Mahavakya (great saying)
  mahavakya?: {
    statement: string;       // The Mahavakya in Sanskrit
    transliteration: string;
    meaning: string;
  };
}

// =============================================================================
// SECTION INTERFACE (Chapter/Khanda/Valli)
// =============================================================================

export interface UpanishadSection {
  number: number;
  name: {
    sanskrit: string;        // e.g., "Prathama Adhyaya"
    english: string;         // e.g., "Chapter One"
  };
  summary: string;           // Overview of section content
  verses: UpanishadVerse[];

  // For curated approach on long Upanishads
  isCurated: boolean;        // true = only key verses included, not complete
  totalVerses?: number;      // Total verses in original (for curated sections)
}

// =============================================================================
// UPANISHAD INTERFACE
// =============================================================================

export interface Upanishad {
  id: UpanishadId;

  name: {
    sanskrit: string;        // e.g., "ईशोपनिषद्"
    english: string;         // e.g., "Isha Upanishad"
    meaning: string;         // What the name means
  };

  // Source Veda
  veda: VedaSource;

  // Overview
  summary: string;           // 3-4 sentence description
  keyTeachings: string[];    // Main philosophical points

  // If this Upanishad contains a famous Mahavakya
  mahavakya?: {
    statement: string;
    transliteration: string;
    meaning: string;
  };

  // Verse counts
  totalVerses: number;       // Total verses in the original
  includedVerses: number;    // How many we include (same for short, less for curated)

  // Content
  sections: UpanishadSection[];

  // Metadata
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedReadTime: string; // e.g., "30 min"
}

// =============================================================================
// SUMMARY TYPE (for list pages)
// =============================================================================

export interface UpanishadSummary {
  id: UpanishadId;
  name: {
    sanskrit: string;
    english: string;
  };
  veda: VedaSource;
  summary: string;
  totalVerses: number;
  includedVerses: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  isCurated: boolean;        // true if we only include selected verses
  mahavakya?: string;        // The Mahavakya if this Upanishad has one
}

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Format verse reference for display
 * @example formatVerseRef('isha', 1, 1) => "Isha 1.1"
 */
export function formatVerseRef(upanishad: UpanishadId, section: number, verse: number): string {
  const name = upanishad.charAt(0).toUpperCase() + upanishad.slice(1);
  return `${name} ${section}.${verse}`;
}

/**
 * Get URL path for an Upanishad
 */
export function getUpanishadPath(upanishad: UpanishadId): string {
  return `/upanishads/${upanishad}`;
}

/**
 * Get URL path for a specific verse
 */
export function getVersePath(upanishad: UpanishadId, section: number, verse: number): string {
  return `/upanishads/${upanishad}/${section}-${verse}`;
}

/**
 * Get the Veda name in English
 */
export function getVedaName(veda: VedaSource): string {
  const names: Record<VedaSource, string> = {
    rig: 'Rig Veda',
    yajur: 'Yajur Veda',
    sama: 'Sama Veda',
    atharva: 'Atharva Veda',
  };
  return names[veda];
}
