/**
 * Upanishads Index
 * Central export for all 13 principal Upanishads
 */

import {
  Upanishad,
  UpanishadId,
  UpanishadSummary,
  VedaSource,
} from './types';

// Import individual Upanishads (will be added as we create them)
import { ishaUpanishad } from './isha';
import { mandukyaUpanishad } from './mandukya';
import { kenaUpanishad } from './kena';
import { aitareyaUpanishad } from './aitareya';
import { kathaUpanishad } from './katha';
import { mundakaUpanishad } from './mundaka';
import { prashnaUpanishad } from './prashna';
import { taittiriyaUpanishad } from './taittiriya';
import { shvetashvataraUpanishad } from './shvetashvatara';
import { chandogyaUpanishad } from './chandogya';
import { brihadaranyakaUpanishad } from './brihadaranyaka';
import { kaushitakiUpanishad } from './kaushitaki';
import { maitriUpanishad } from './maitri';

// =============================================================================
// UPANISHAD METADATA
// Basic info for all 13 principal Upanishads (for list page before content is ready)
// =============================================================================

export const upanishadMetadata: Record<UpanishadId, UpanishadSummary> = {
  isha: {
    id: 'isha',
    name: { sanskrit: 'ईशोपनिषद्', english: 'Isha Upanishad' },
    veda: 'yajur',
    summary: 'The shortest Upanishad, teaching that the Divine pervades everything. Known for reconciling action and renunciation.',
    totalVerses: 18,
    includedVerses: 18,
    difficulty: 'beginner',
    isCurated: false,
  },
  mandukya: {
    id: 'mandukya',
    name: { sanskrit: 'माण्डूक्योपनिषद्', english: 'Mandukya Upanishad' },
    veda: 'atharva',
    summary: 'The essence of Vedanta in just 12 verses. Analyzes the sacred syllable OM and the four states of consciousness.',
    totalVerses: 12,
    includedVerses: 12,
    difficulty: 'intermediate',
    isCurated: false,
    mahavakya: 'Ayam Atma Brahma',
  },
  kena: {
    id: 'kena',
    name: { sanskrit: 'केनोपनिषद्', english: 'Kena Upanishad' },
    veda: 'sama',
    summary: 'Explores "By whom?" (kena) — what powers the mind and senses. Contains the famous story of Brahman humbling the gods.',
    totalVerses: 35,
    includedVerses: 35,
    difficulty: 'intermediate',
    isCurated: false,
  },
  katha: {
    id: 'katha',
    name: { sanskrit: 'कठोपनिषद्', english: 'Katha Upanishad' },
    veda: 'yajur',
    summary: 'Young Nachiketa meets Death and receives teachings on the immortal Self. Contains the famous chariot metaphor.',
    totalVerses: 119,
    includedVerses: 119,
    difficulty: 'beginner',
    isCurated: false,
  },
  mundaka: {
    id: 'mundaka',
    name: { sanskrit: 'मुण्डकोपनिषद्', english: 'Mundaka Upanishad' },
    veda: 'atharva',
    summary: 'Distinguishes higher knowledge (para vidya) from lower knowledge. Contains beautiful imagery of two birds on a tree.',
    totalVerses: 64,
    includedVerses: 64,
    difficulty: 'intermediate',
    isCurated: false,
  },
  prashna: {
    id: 'prashna',
    name: { sanskrit: 'प्रश्नोपनिषद्', english: 'Prashna Upanishad' },
    veda: 'atharva',
    summary: 'Six seekers ask six questions to sage Pippalada about creation, life force (prana), and the path to Brahman.',
    totalVerses: 67,
    includedVerses: 67,
    difficulty: 'intermediate',
    isCurated: false,
  },
  aitareya: {
    id: 'aitareya',
    name: { sanskrit: 'ऐतरेयोपनिषद्', english: 'Aitareya Upanishad' },
    veda: 'rig',
    summary: 'Describes the creation of the universe and the entry of the Self into the body. Contains the Mahavakya "Consciousness is Brahman."',
    totalVerses: 33,
    includedVerses: 33,
    difficulty: 'intermediate',
    isCurated: false,
    mahavakya: 'Prajnanam Brahma',
  },
  taittiriya: {
    id: 'taittiriya',
    name: { sanskrit: 'तैत्तिरीयोपनिषद्', english: 'Taittiriya Upanishad' },
    veda: 'yajur',
    summary: 'Presents the five sheaths (koshas) covering the Self — from food to bliss. Contains the famous graduation address.',
    totalVerses: 31,
    includedVerses: 31,
    difficulty: 'intermediate',
    isCurated: false,
  },
  shvetashvatara: {
    id: 'shvetashvatara',
    name: { sanskrit: 'श्वेताश्वतरोपनिषद्', english: 'Shvetashvatara Upanishad' },
    veda: 'yajur',
    summary: 'Synthesizes different paths: knowledge, devotion, and yoga. One of the few Upanishads with strong theistic elements.',
    totalVerses: 113,
    includedVerses: 113,
    difficulty: 'intermediate',
    isCurated: false,
  },
  chandogya: {
    id: 'chandogya',
    name: { sanskrit: 'छान्दोग्योपनिषद्', english: 'Chandogya Upanishad' },
    veda: 'sama',
    summary: 'One of the oldest and largest Upanishads. Contains the famous "Tat Tvam Asi" (You Are That) teaching from father to son.',
    totalVerses: 627,
    includedVerses: 100, // Curated
    difficulty: 'advanced',
    isCurated: true,
    mahavakya: 'Tat Tvam Asi',
  },
  brihadaranyaka: {
    id: 'brihadaranyaka',
    name: { sanskrit: 'बृहदारण्यकोपनिषद्', english: 'Brihadaranyaka Upanishad' },
    veda: 'yajur',
    summary: 'The largest and oldest Upanishad. Features the great sage Yajnavalkya and his dialogues on ultimate reality.',
    totalVerses: 435,
    includedVerses: 100, // Curated
    difficulty: 'advanced',
    isCurated: true,
    mahavakya: 'Aham Brahmasmi',
  },
  kaushitaki: {
    id: 'kaushitaki',
    name: { sanskrit: 'कौषीतकिब्राह्मणोपनिषद्', english: 'Kaushitaki Upanishad' },
    veda: 'rig',
    summary: 'Describes the path of the soul after death and the dialogue between Indra and Pratardana on the nature of the Self.',
    totalVerses: 80,
    includedVerses: 40, // Curated
    difficulty: 'advanced',
    isCurated: true,
  },
  maitri: {
    id: 'maitri',
    name: { sanskrit: 'मैत्र्युपनिषद्', english: 'Maitri Upanishad' },
    veda: 'yajur',
    summary: 'A later Upanishad that synthesizes earlier teachings. Discusses meditation on OM and the nature of Brahman.',
    totalVerses: 100,
    includedVerses: 50, // Curated
    difficulty: 'advanced',
    isCurated: true,
  },
};

// =============================================================================
// UPANISHADS COLLECTION
// Full Upanishad data (added as we create content)
// =============================================================================

export const upanishads: Partial<Record<UpanishadId, Upanishad>> = {
  isha: ishaUpanishad,
  mandukya: mandukyaUpanishad,
  kena: kenaUpanishad,
  aitareya: aitareyaUpanishad,
  katha: kathaUpanishad,
  mundaka: mundakaUpanishad,
  prashna: prashnaUpanishad,
  taittiriya: taittiriyaUpanishad,
  shvetashvatara: shvetashvataraUpanishad,
  chandogya: chandogyaUpanishad,
  brihadaranyaka: brihadaranyakaUpanishad,
  kaushitaki: kaushitakiUpanishad,
  maitri: maitriUpanishad,
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get all Upanishad summaries for the list page
 */
export function getAllUpanishadSummaries(): UpanishadSummary[] {
  return Object.values(upanishadMetadata);
}

/**
 * Get Upanishads by Veda
 */
export function getUpanishadsByVeda(veda: VedaSource): UpanishadSummary[] {
  return Object.values(upanishadMetadata).filter((u) => u.veda === veda);
}

/**
 * Get Upanishad by ID
 */
export function getUpanishadById(id: UpanishadId): Upanishad | undefined {
  return upanishads[id];
}

/**
 * Get Upanishad summary by ID
 */
export function getUpanishadSummary(id: UpanishadId): UpanishadSummary | undefined {
  return upanishadMetadata[id];
}

/**
 * Get all short Upanishads (under 50 verses)
 */
export function getShortUpanishads(): UpanishadSummary[] {
  return Object.values(upanishadMetadata).filter((u) => u.totalVerses <= 50);
}

/**
 * Get beginner-friendly Upanishads
 */
export function getBeginnerUpanishads(): UpanishadSummary[] {
  return Object.values(upanishadMetadata).filter((u) => u.difficulty === 'beginner');
}

/**
 * Get Upanishads that contain Mahavakyas
 */
export function getMahavakayaUpanishads(): UpanishadSummary[] {
  return Object.values(upanishadMetadata).filter((u) => u.mahavakya);
}

/**
 * Check if an Upanishad ID is valid
 */
export function isValidUpanishadId(id: string): id is UpanishadId {
  return id in upanishadMetadata;
}

// Re-export types
export * from './types';
