/**
 * Vedic Hymns Index
 * Central export for all Vedic hymn data
 */

import { VedicHymn, VedicHymnId, VedicHymnSummary, VedaSource } from './types';
import { nasadiyaSukta } from './nasadiya-sukta';
import { gayatri } from './gayatri';

// =============================================================================
// ALL HYMNS
// =============================================================================

export const hymns: Record<VedicHymnId, VedicHymn> = {
  'nasadiya-sukta': nasadiyaSukta,
  'gayatri': gayatri,
  // More hymns will be added:
  // 'purusha-sukta': purushaSukta,
  // 'agni-sukta': agniSukta,
  // 'sri-sukta': sriSukta,
  // 'shanti-suktas': shantiSuktas,
} as Record<VedicHymnId, VedicHymn>;

// =============================================================================
// HYMN ORDER (for display)
// =============================================================================

export const hymnOrder: VedicHymnId[] = [
  'gayatri',           // Most sacred, accessible
  'nasadiya-sukta',    // Philosophical, profound
  'purusha-sukta',     // Cosmic creation
  'agni-sukta',        // First hymn of Rig Veda
  'sri-sukta',         // Lakshmi hymn
  'shanti-suktas',     // Peace invocations
];

// =============================================================================
// SUMMARIES (for list page)
// =============================================================================

export const hymnSummaries: VedicHymnSummary[] = [
  {
    id: 'gayatri',
    name: {
      sanskrit: 'गायत्री मन्त्र',
      english: 'Gayatri Mantra',
    },
    veda: 'rig',
    reference: 'Rig Veda 3.62.10',
    summary: 'The most sacred and widely chanted mantra in Hinduism. A prayer to Savitri (the Sun) for enlightenment and wisdom.',
    totalVerses: 1,
    difficulty: 'beginner',
    themes: ['enlightenment', 'sun worship', 'wisdom', 'daily practice'],
  },
  {
    id: 'nasadiya-sukta',
    name: {
      sanskrit: 'नासदीय सूक्त',
      english: 'Nasadiya Sukta',
    },
    veda: 'rig',
    reference: 'Rig Veda 10.129',
    summary: 'The Creation Hymn — one of the most philosophically profound texts in world literature, contemplating the mystery of existence with remarkable humility.',
    totalVerses: 7,
    difficulty: 'intermediate',
    themes: ['creation', 'cosmic mystery', 'non-duality', 'limits of knowledge'],
  },
  {
    id: 'purusha-sukta',
    name: {
      sanskrit: 'पुरुषसूक्त',
      english: 'Purusha Sukta',
    },
    veda: 'rig',
    reference: 'Rig Veda 10.90',
    summary: 'The Cosmic Person hymn describing how the universe emerged from the primordial being, Purusha, through cosmic sacrifice.',
    totalVerses: 16,
    difficulty: 'intermediate',
    themes: ['cosmic creation', 'sacrifice', 'cosmic order', 'Purusha'],
  },
  {
    id: 'agni-sukta',
    name: {
      sanskrit: 'अग्निसूक्त',
      english: 'Agni Sukta',
    },
    veda: 'rig',
    reference: 'Rig Veda 1.1',
    summary: 'The very first hymn of the Rig Veda, addressed to Agni, the god of fire. Sets the tone for the entire Vedic collection.',
    totalVerses: 9,
    difficulty: 'beginner',
    themes: ['fire', 'sacrifice', 'divine messenger', 'ritual'],
  },
  {
    id: 'sri-sukta',
    name: {
      sanskrit: 'श्रीसूक्त',
      english: 'Sri Sukta',
    },
    veda: 'rig',
    reference: 'Rig Veda (Khila)',
    summary: 'The Hymn to Lakshmi (Sri), the goddess of wealth, fortune, and prosperity. Widely chanted for blessings and abundance.',
    totalVerses: 15,
    difficulty: 'beginner',
    themes: ['Lakshmi', 'prosperity', 'abundance', 'blessing'],
  },
  {
    id: 'shanti-suktas',
    name: {
      sanskrit: 'शान्ति सूक्त',
      english: 'Shanti Suktas',
    },
    veda: 'yajur',
    reference: 'Various Upanishads',
    summary: 'Peace invocations (Shanti Mantras) that open and close Vedic study. Prayers for peace at all levels of existence.',
    totalVerses: 10,
    difficulty: 'beginner',
    themes: ['peace', 'harmony', 'blessing', 'study'],
  },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get a hymn by its ID
 */
export function getHymn(id: VedicHymnId): VedicHymn | undefined {
  return hymns[id];
}

/**
 * Get all available hymns
 */
export function getAllHymns(): VedicHymn[] {
  return Object.values(hymns);
}

/**
 * Get hymns by Veda
 */
export function getHymnsByVeda(veda: VedaSource): VedicHymn[] {
  return Object.values(hymns).filter(h => h.veda === veda);
}

/**
 * Get hymn summary by ID
 */
export function getHymnSummary(id: VedicHymnId): VedicHymnSummary | undefined {
  return hymnSummaries.find(s => s.id === id);
}

/**
 * Get available hymn summaries (only those with data)
 */
export function getAvailableHymnSummaries(): VedicHymnSummary[] {
  return hymnSummaries.filter(s => hymns[s.id] !== undefined);
}

/**
 * Check if a hymn has data loaded
 */
export function isHymnAvailable(id: VedicHymnId): boolean {
  return hymns[id] !== undefined;
}

// =============================================================================
// EXPORTS
// =============================================================================

export type { VedicHymn, VedicHymnId, VedicHymnSummary, VedicVerse, VedaSource } from './types';
export { nasadiyaSukta } from './nasadiya-sukta';
export { gayatri } from './gayatri';
