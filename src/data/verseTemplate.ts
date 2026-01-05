// =============================================================================
// DHARMA PATH - VERSE CONTENT TEMPLATE
// =============================================================================
// This is the master template for all Gita verse content.
// Follow this structure for consistency and quality.
// =============================================================================

// -----------------------------------------------------------------------------
// TYPE DEFINITIONS
// -----------------------------------------------------------------------------

export interface VerseContent {
  // IDENTIFIERS
  chapter: number;
  verse: number;

  // SANSKRIT (keep standard - no changes needed)
  sanskrit: string;           // Devanagari script
  transliteration: string;    // Roman script pronunciation

  // TRANSLATION (our own - clear, modern English)
  translation: string;        // 1-2 sentences, simple language

  // EXPLANATION (the heart of our value-add)
  explanation: {
    simple: string;           // "In simple terms..." - 2-3 sentences for beginners
    deeper?: string;          // Optional deeper meaning for those who want more
  };

  // PRACTICAL APPLICATION (why it matters today)
  practicalApplication: string;  // How to apply this in daily life

  // KEY TERMS (define Sanskrit words used)
  keyTerms?: {
    term: string;             // Sanskrit word
    meaning: string;          // Simple English meaning
  }[];

  // METADATA
  themes: string[];           // e.g., ["soul", "death", "impermanence"]
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  famousVerse?: boolean;      // Is this a well-known verse?
}

export interface ChapterContent {
  chapter: number;
  name: {
    sanskrit: string;         // e.g., "Sankhya Yoga"
    english: string;          // e.g., "The Eternal Soul"
  };
  summary: string;            // 3-4 sentence chapter overview
  keyThemes: string[];        // Main concepts covered
  verseCount: number;
  verses: VerseContent[];
}

// -----------------------------------------------------------------------------
// EXAMPLE VERSES - Use these as reference when writing
// -----------------------------------------------------------------------------

export const exampleVerses: VerseContent[] = [
  // EXAMPLE 1: Famous verse (2.47) - The Karma Yoga verse
  {
    chapter: 2,
    verse: 47,
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि।।",
    transliteration: "karmaṇy evādhikāras te mā phaleṣu kadācana\nmā karma-phala-hetur bhūr mā te saṅgo 'stv akarmaṇi",

    translation: "You have the right to work, but never to the fruit of work. Don't let the results be your motive, and don't be attached to inaction either.",

    explanation: {
      simple: "Krishna is saying: focus on doing your best work, not on what you'll get from it. When we obsess over results—promotions, praise, money—we get anxious and make poor decisions. But this doesn't mean be lazy. Do your work fully, just release attachment to outcomes.",
      deeper: "This verse introduces 'Nishkama Karma'—selfless action. The ego wants credit and reward. By releasing attachment to fruits, we free ourselves from the emotional rollercoaster of success and failure, and act from a place of clarity rather than craving."
    },

    practicalApplication: "Before starting any task, tell yourself: 'I will do my absolute best, and then let go of what happens.' Whether it's a job interview, exam, or difficult conversation—prepare fully, execute with presence, then release. This reduces anxiety and paradoxically often leads to better results.",

    keyTerms: [
      { term: "Karma", meaning: "Action or work" },
      { term: "Phala", meaning: "Fruit or result" },
      { term: "Adhikara", meaning: "Right or authority" }
    ],

    themes: ["action", "detachment", "duty", "karma-yoga"],
    difficulty: "beginner",
    famousVerse: true
  },

  // EXAMPLE 2: Soul verse (2.22) - The clothes analogy
  {
    chapter: 2,
    verse: 22,
    sanskrit: "वासांसि जीर्णानि यथा विहाय नवानि गृह्णाति नरोऽपराणि।\nतथा शरीराणि विहाय जीर्णान्यन्यानि संयाति नवानि देही।।",
    transliteration: "vāsāṁsi jīrṇāni yathā vihāya navāni gṛhṇāti naro 'parāṇi\ntathā śarīrāṇi vihāya jīrṇāny anyāni saṁyāti navāni dehī",

    translation: "Just as a person discards worn-out clothes and puts on new ones, the soul discards worn-out bodies and enters new ones.",

    explanation: {
      simple: "Your body is like clothing for your soul. When clothes get old and worn out, you throw them away and get new ones. Death works the same way—it's just the soul changing bodies. The real 'you' continues.",
      deeper: "This verse offers one of Hinduism's most accessible explanations of reincarnation. The soul (atman) is the wearer; bodies are the worn. This reframes death not as an ending but as a transition—reducing our fear and attachment to the physical form."
    },

    practicalApplication: "When facing loss—whether of health, youth, or loved ones—remember that the physical form is temporary but the essence continues. This doesn't minimize grief, but offers perspective. You are not your body; you are the consciousness experiencing through it.",

    keyTerms: [
      { term: "Dehi", meaning: "The embodied one (soul)" },
      { term: "Sharira", meaning: "Body" },
      { term: "Atman", meaning: "Soul, the true self" }
    ],

    themes: ["soul", "death", "reincarnation", "impermanence"],
    difficulty: "beginner",
    famousVerse: true
  },

  // EXAMPLE 3: Divine incarnation verse (4.7)
  {
    chapter: 4,
    verse: 7,
    sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्।।",
    transliteration: "yadā yadā hi dharmasya glānir bhavati bhārata\nabhyutthānam adharmasya tadātmānaṁ sṛjāmy aham",

    translation: "Whenever righteousness declines and wrongdoing rises, O Arjuna, I manifest myself in the world.",

    explanation: {
      simple: "Krishna says that whenever the world falls into darkness—when people become selfish, cruel, and forget what's right—the Divine appears to restore balance. This has happened many times throughout history and will happen again.",
      deeper: "This is the foundational verse for the Hindu concept of 'Avatar'—divine descent. Unlike prophets who are chosen by God, an avatar IS God taking form. Krishna, Rama, and others are understood as these divine interventions during humanity's darkest hours."
    },

    practicalApplication: "In times of personal or global crisis, this verse offers hope: darkness is never permanent. But it also carries responsibility—we can be instruments of that restoration. When you see wrongdoing, don't just wait for divine intervention. Act with dharma yourself.",

    keyTerms: [
      { term: "Dharma", meaning: "Righteousness, cosmic order, one's duty" },
      { term: "Adharma", meaning: "Wrongdoing, unrighteousness" },
      { term: "Avatar", meaning: "Divine incarnation, God in human form" }
    ],

    themes: ["avatar", "dharma", "divine-intervention", "hope"],
    difficulty: "beginner",
    famousVerse: true
  }
];

// -----------------------------------------------------------------------------
// WRITING GUIDELINES
// -----------------------------------------------------------------------------

/*
TRANSLATION GUIDELINES:
- Use modern English (no "thou", "hath", "verily")
- Keep sentences short (max 20 words per sentence)
- Aim for 8th grade reading level
- Translate meaning, not just words
- Example: Instead of "The embodied one" → "the soul"

EXPLANATION GUIDELINES:
- Start with "Krishna is saying..." or "This verse teaches..."
- Use everyday analogies
- Connect to human experiences everyone understands
- The 'simple' explanation should make sense to someone with zero Hindu knowledge
- The 'deeper' explanation can introduce more concepts

PRACTICAL APPLICATION GUIDELINES:
- Make it actionable
- Use "you" language
- Give specific scenarios (job, relationships, stress)
- Don't be preachy—be helpful

KEY TERMS GUIDELINES:
- Only include Sanskrit terms actually used in the verse
- One-line definitions max
- If a term appears in multiple verses, define it consistently

THEMES GUIDELINES:
- Use lowercase, hyphenated tags
- Common themes: soul, death, action, detachment, duty, devotion, knowledge, meditation
- Max 5 themes per verse

QUALITY CHECKLIST:
□ Would a 16-year-old understand this?
□ Is the translation accurate to the original meaning?
□ Does the explanation answer "so what?"
□ Is the practical application actually practical?
□ Have I avoided jargon without explanation?
*/

// -----------------------------------------------------------------------------
// CHAPTER 2 TEMPLATE (Start here - 72 verses)
// -----------------------------------------------------------------------------

export const chapter2Template: ChapterContent = {
  chapter: 2,
  name: {
    sanskrit: "Sankhya Yoga",
    english: "The Eternal Soul"
  },
  summary: "This is the most important chapter of the Gita. Arjuna is paralyzed by grief, and Krishna begins his teaching. He explains that the soul is eternal—it cannot be killed. He introduces the core concepts: do your duty without attachment to results, the wise person is undisturbed by pleasure or pain, and the path to peace is through self-control.",
  keyThemes: ["soul", "death", "duty", "detachment", "wisdom", "equanimity"],
  verseCount: 72,
  verses: [] // TO BE FILLED - all 72 verses
};

// Export for use in the app
export default {
  exampleVerses,
  chapter2Template
};
