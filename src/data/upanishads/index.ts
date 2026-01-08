/**
 * Upanishads Index
 * Central export for all 13 principal Upanishads
 *
 * NOTE: This file imports all upanishad content (~1.1MB).
 * For list pages that only need metadata, import from './metadata' instead.
 */

import { Upanishad, UpanishadId } from './types';

// Re-export everything from metadata (for backward compatibility)
export * from './metadata';

// Import individual Upanishads (content files - only loaded when this file is imported)
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
// UPANISHADS COLLECTION
// Full Upanishad data (all content loaded)
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
// CONTENT HELPER FUNCTIONS (require full upanishad data)
// =============================================================================

/**
 * Get Upanishad by ID (returns full content)
 * Use this only when you need the actual verse content
 */
export function getUpanishadById(id: UpanishadId): Upanishad | undefined {
  return upanishads[id];
}
