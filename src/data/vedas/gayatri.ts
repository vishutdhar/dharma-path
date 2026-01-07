/**
 * Gayatri Mantra
 * Rig Veda 3.62.10
 *
 * The most sacred and widely chanted mantra in Hinduism.
 * A prayer to Savitri (the divine Sun) for enlightenment.
 * Traditionally chanted at sunrise, noon, and sunset.
 */

import { VedicHymn, VedicVerse } from './types';

const verses: VedicVerse[] = [
  {
    hymn: 'gayatri',
    verse: 1,
    sanskrit: `ॐ भूर्भुवः स्वः
तत्सवितुर्वरेण्यं
भर्गो देवस्य धीमहि
धियो यो नः प्रचोदयात् ॥`,
    transliteration: `oṃ bhūr bhuvaḥ svaḥ
tat savitur vareṇyaṃ
bhargo devasya dhīmahi
dhiyo yo naḥ pracodayāt`,
    translation: `Om. Earth, Atmosphere, Heaven.
We meditate on that excellent glory
Of the divine Sun (Savitri).
May it inspire our understanding.`,
    explanation: {
      simple: `The Gayatri is a prayer for enlightenment. We meditate on the brilliant light of the divine Sun — not just the physical sun, but the inner light of consciousness — and ask that it illuminate our minds and guide our thoughts toward truth.`,
      deeper: `The three vyahritis (bhur, bhuvaḥ, svaḥ) represent the three worlds: physical, subtle, and causal — or body, mind, and spirit. "Savitri" refers to the divine creative force that impels all existence. "Bharga" is the radiant light that dispels ignorance. The mantra is a complete spiritual practice: recognition of the cosmic order, meditation on divine light, and prayer for illumination.`,
    },
    practicalApplication: `Chant the Gayatri at sunrise, noon, or sunset — or anytime you seek clarity. Before making important decisions, before study, or when the mind feels clouded, this mantra invokes the light of understanding. Even silently repeating it brings focus and peace.`,
    keyTerms: [
      { term: 'Om', meaning: 'The primordial sound, representing ultimate reality' },
      { term: 'bhūr', meaning: 'Earth, the physical plane' },
      { term: 'bhuvaḥ', meaning: 'Atmosphere, the subtle/mental plane' },
      { term: 'svaḥ', meaning: 'Heaven, the causal/spiritual plane' },
      { term: 'tat', meaning: 'That (referring to Brahman/ultimate reality)' },
      { term: 'Savitṛ', meaning: 'The Sun god, divine creative force' },
      { term: 'vareṇya', meaning: 'Excellent, worthy of worship' },
      { term: 'bharga', meaning: 'Radiance, glory, light that dispels ignorance' },
      { term: 'dhīmahi', meaning: 'We meditate upon' },
      { term: 'dhī', meaning: 'Understanding, intelligence, wisdom' },
      { term: 'pracodayāt', meaning: 'May it inspire, impel, guide' },
    ],
    themes: ['enlightenment', 'meditation', 'sun worship', 'wisdom', 'divine light'],
    difficulty: 'beginner',
    famousVerse: true,
  },
];

export const gayatri: VedicHymn = {
  id: 'gayatri',

  name: {
    sanskrit: 'गायत्री मन्त्र',
    english: 'Gayatri Mantra',
    meaning: 'The Mantra in Gayatri Meter (a verse of 24 syllables in 3 lines of 8)',
  },

  veda: 'rig',
  reference: 'Rig Veda 3.62.10',

  summary: `The Gayatri Mantra is the most sacred and widely chanted verse in Hinduism. Addressed to Savitri (the divine Sun), it is a prayer for enlightenment — asking that the divine light illuminate our understanding. For thousands of years, it has been chanted daily by millions at sunrise, noon, and sunset.`,

  significance: `Called the "Mother of the Vedas," the Gayatri is considered the essence of all Vedic wisdom condensed into a single verse. Traditionally, it was imparted during the sacred thread ceremony (Upanayana) as the beginning of spiritual education. The mantra is believed to have the power to purify the mind, enhance intelligence, and lead to spiritual awakening. Gandhi called it "the most precious jewel in all of Vedic literature."`,

  totalVerses: 1,
  verses,

  themes: [
    'enlightenment',
    'sun worship',
    'meditation',
    'wisdom',
    'divine light',
    'daily practice',
  ],

  difficulty: 'beginner',
  estimatedReadTime: '5 min',

  usedIn: [
    'Daily sandhya vandana (twilight prayers)',
    'Upanayana (sacred thread ceremony)',
    'Beginning of any spiritual practice',
    'Morning meditation',
    'Before study or important work',
    'Homas and pujas (fire rituals and worship)',
  ],
};

export default gayatri;
