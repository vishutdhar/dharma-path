/**
 * Vedic Hymns (Suktas) Types
 * Data structures for key hymns from the four Vedas
 */

// =============================================================================
// TYPES
// =============================================================================

export type VedicHymnId =
  | 'purusha-sukta'      // Rig Veda 10.90 - Cosmic creation
  | 'nasadiya-sukta'     // Rig Veda 10.129 - Creation hymn
  | 'gayatri'            // Rig Veda 3.62.10 - Most sacred mantra
  | 'shanti-suktas'      // Various - Peace invocations
  | 'agni-sukta'         // Rig Veda 1.1 - First hymn of Rig Veda
  | 'sri-sukta';         // Rig Veda appendix - Lakshmi hymn

export type VedaSource = 'rig' | 'yajur' | 'sama' | 'atharva';

// =============================================================================
// VERSE INTERFACE
// =============================================================================

export interface VedicVerse {
  // Identification
  hymn: VedicHymnId;
  verse: number;             // Verse/Mantra number

  // Sanskrit text
  sanskrit: string;          // Devanagari script
  transliteration: string;   // IAST romanization

  // Translation (clear, modern English)
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
  themes: string[];          // e.g., ["creation", "cosmic order", "sacrifice"]
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  famousVerse?: boolean;     // Well-known verse
}

// =============================================================================
// HYMN INTERFACE
// =============================================================================

export interface VedicHymn {
  id: VedicHymnId;

  name: {
    sanskrit: string;        // e.g., "पुरुषसूक्त"
    english: string;         // e.g., "Purusha Sukta"
    meaning: string;         // What the name means
  };

  // Source reference
  veda: VedaSource;
  reference: string;         // e.g., "Rig Veda 10.90"

  // Overview
  summary: string;           // 3-4 sentence description
  significance: string;      // Why this hymn is important

  // Content
  totalVerses: number;
  verses: VedicVerse[];

  // Metadata
  themes: string[];          // Main themes
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedReadTime: string; // e.g., "10 min"

  // Ritual usage (where/when this hymn is chanted)
  usedIn?: string[];         // e.g., ["Morning prayers", "Temple rituals"]
}

// =============================================================================
// SUMMARY TYPE (for list pages)
// =============================================================================

export interface VedicHymnSummary {
  id: VedicHymnId;
  name: {
    sanskrit: string;
    english: string;
  };
  veda: VedaSource;
  reference: string;
  summary: string;
  totalVerses: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  themes: string[];
}

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Format verse reference for display
 * @example formatVerseRef('purusha-sukta', 1) => "Purusha Sukta 1"
 */
export function formatVerseRef(hymn: VedicHymnId, verse: number): string {
  const name = hymn
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  return `${name} ${verse}`;
}

/**
 * Get URL path for a hymn
 */
export function getHymnPath(hymn: VedicHymnId): string {
  return `/vedas/${hymn}`;
}

/**
 * Get URL path for a specific verse
 */
export function getVersePath(hymn: VedicHymnId, verse: number): string {
  return `/vedas/${hymn}/${verse}`;
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

/**
 * Get hymn display name from ID
 */
export function getHymnDisplayName(id: VedicHymnId): string {
  const names: Record<VedicHymnId, string> = {
    'purusha-sukta': 'Purusha Sukta',
    'nasadiya-sukta': 'Nasadiya Sukta',
    'gayatri': 'Gayatri Mantra',
    'shanti-suktas': 'Shanti Suktas',
    'agni-sukta': 'Agni Sukta',
    'sri-sukta': 'Sri Sukta',
  };
  return names[id];
}
