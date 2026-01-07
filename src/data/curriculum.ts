// Curriculum structure for Dharma Path
// A comprehensive journey through Hindu philosophy, scripture, and practice

export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string; // e.g., "10 min"
  content?: string; // Markdown content
  completed?: boolean;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  lessons: Lesson[];
  locked?: boolean;
}

export interface Level {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  color: string; // Tailwind color class
  modules: Module[];
  requiredLevel?: number; // Previous level that must be completed
}

export const curriculum: Level[] = [
  // ============================================
  // LEVEL 1: THE FOUNDATION
  // 14 lessons across 3 modules
  // ============================================
  {
    id: 1,
    title: "The Foundation",
    subtitle: "Understanding the Basics",
    description: "Start here. Learn the core concepts that form the foundation of Hindu philosophy — what makes it unique, its central ideas, and the nature of the Divine.",
    color: "saffron",
    modules: [
      {
        id: "1-1",
        title: "What is Hinduism?",
        description: "Not a religion in the Western sense — discover what makes Hinduism unique",
        icon: "Compass",
        lessons: [
          {
            id: "1-1-1",
            title: "Not One Religion, But Many",
            description: "Understanding Hinduism's extraordinary diversity and underlying unity",
            duration: "8 min",
          },
          {
            id: "1-1-2",
            title: "Sanatana Dharma: The Eternal Way",
            description: "Why Hindus call their tradition 'eternal' and what that means",
            duration: "6 min",
          },
          {
            id: "1-1-3",
            title: "No Single Founder, No Single Book",
            description: "How Hinduism evolved organically over millennia",
            duration: "7 min",
          },
        ],
      },
      {
        id: "1-2",
        title: "Core Concepts",
        description: "The five foundational ideas you must understand",
        icon: "Lightbulb",
        lessons: [
          {
            id: "1-2-1",
            title: "Dharma: Duty & Cosmic Order",
            description: "Your role in the grand design of the universe",
            duration: "10 min",
          },
          {
            id: "1-2-2",
            title: "Karma: Action & Consequence",
            description: "Every action has a reaction — but it's far deeper than that",
            duration: "12 min",
          },
          {
            id: "1-2-3",
            title: "Samsara: The Cycle of Rebirth",
            description: "Why Hindus believe in reincarnation and what it means for this life",
            duration: "8 min",
          },
          {
            id: "1-2-4",
            title: "Moksha: Liberation",
            description: "The ultimate goal of human existence — freedom from the cycle",
            duration: "10 min",
          },
          {
            id: "1-2-5",
            title: "Atman & Brahman: Soul & Ultimate Reality",
            description: "You are not your body — discovering the deepest truth of existence",
            duration: "15 min",
          },
        ],
      },
      {
        id: "1-3",
        title: "The Divine in Hinduism",
        description: "Understanding the Hindu conception of God — one, many, and beyond",
        icon: "Sparkles",
        lessons: [
          {
            id: "1-3-1",
            title: "One God, Many Forms",
            description: "How one ultimate reality manifests as countless deities",
            duration: "10 min",
          },
          {
            id: "1-3-2",
            title: "The Trimurti: Brahma, Vishnu, Shiva",
            description: "Creator, Preserver, Destroyer — the cosmic cycle of existence",
            duration: "12 min",
          },
          {
            id: "1-3-3",
            title: "The Goddess: Shakti and Her Forms",
            description: "Durga, Lakshmi, Saraswati, Kali, Parvati — the Divine Feminine",
            duration: "12 min",
          },
          {
            id: "1-3-4",
            title: "Avatars: When God Descends",
            description: "The concept of divine incarnation and Vishnu's ten avatars",
            duration: "10 min",
          },
          {
            id: "1-3-5",
            title: "Key Deities You Should Know",
            description: "Ganesha, Hanuman, Kartikeya, and the gods of everyday worship",
            duration: "15 min",
          },
          {
            id: "1-3-6",
            title: "Ishta Devata: Your Personal Deity",
            description: "How Hindus choose and develop a relationship with their chosen form of God",
            duration: "8 min",
          },
        ],
      },
    ],
  },

  // ============================================
  // LEVEL 2: THE STORIES
  // 12 lessons across 2 modules
  // ============================================
  {
    id: 2,
    title: "The Stories",
    subtitle: "The Great Epics",
    description: "The two great epics that carry Hindu wisdom through narrative. These stories have shaped Indian civilization for millennia and contain profound teachings within their drama.",
    color: "maroon",
    requiredLevel: 1,
    modules: [
      {
        id: "2-1",
        title: "The Ramayana",
        description: "The journey of Lord Rama — a story of dharma, devotion, and the ideal life",
        icon: "Crown",
        lessons: [
          {
            id: "2-1-1",
            title: "The Epic Story: Rama's Journey",
            description: "From prince to exile to triumphant king — the complete arc",
            duration: "15 min",
          },
          {
            id: "2-1-2",
            title: "The Heroes: Rama, Sita, Lakshmana",
            description: "Understanding the ideals each hero represents",
            duration: "12 min",
          },
          {
            id: "2-1-3",
            title: "Hanuman: The Perfect Devotee",
            description: "Why millions worship this monkey god and what he teaches us",
            duration: "12 min",
          },
          {
            id: "2-1-4",
            title: "Ravana: Understanding the Villain",
            description: "The complex antagonist — scholar, devotee, and tragic figure",
            duration: "10 min",
          },
          {
            id: "2-1-5",
            title: "Lessons & Legacy",
            description: "Dharma, devotion, and the Ramayana's enduring influence",
            duration: "10 min",
          },
        ],
      },
      {
        id: "2-2",
        title: "The Mahabharata",
        description: "The world's longest epic — and the essential context for understanding the Gita",
        icon: "Swords",
        lessons: [
          {
            id: "2-2-1",
            title: "Origins: The Kuru Dynasty",
            description: "The cursed lineage and the roots of the great conflict",
            duration: "12 min",
          },
          {
            id: "2-2-2",
            title: "The Pandavas and Kauravas",
            description: "Two sets of cousins, one throne — how the rivalry began",
            duration: "15 min",
          },
          {
            id: "2-2-3",
            title: "The Dice Game & Exile",
            description: "The pivotal moment that made war inevitable",
            duration: "12 min",
          },
          {
            id: "2-2-4",
            title: "Key Characters: Warriors and Sages",
            description: "Bhishma, Drona, Karna, Krishna, Draupadi — the players in the drama",
            duration: "15 min",
          },
          {
            id: "2-2-5",
            title: "The Road to Kurukshetra",
            description: "Failed peace, gathering armies, and the eve of destruction",
            duration: "10 min",
          },
          {
            id: "2-2-6",
            title: "The Great War",
            description: "18 days of battle — key events, heroic deaths, and dharma tested",
            duration: "15 min",
          },
          {
            id: "2-2-7",
            title: "Aftermath: Victory's Price",
            description: "Ruling the ashes, the journey to heaven, and final lessons",
            duration: "12 min",
          },
        ],
      },
    ],
  },

  // ============================================
  // LEVEL 3: THE GITA
  // 17 lessons across 3 modules
  // ============================================
  {
    id: 3,
    title: "The Gita",
    subtitle: "The Song of God",
    description: "The Bhagavad Gita — 700 verses containing the essence of Hindu philosophy. This is the heart of the tradition, a practical guide to life, action, and liberation.",
    color: "gold",
    requiredLevel: 2,
    modules: [
      {
        id: "3-1",
        title: "Setting the Scene",
        description: "Understanding the context before diving into Krishna's teaching",
        icon: "Map",
        lessons: [
          {
            id: "3-1-1",
            title: "The Moment Before Battle",
            description: "Why Arjuna's crisis on the battlefield matters for all of us",
            duration: "8 min",
          },
          {
            id: "3-1-2",
            title: "Who is Krishna?",
            description: "Friend, charioteer, teacher, and the Supreme Being incarnate",
            duration: "10 min",
          },
        ],
      },
      {
        id: "3-2",
        title: "Journey Through the Gita",
        description: "All 18 chapters of the Bhagavad Gita — the complete teaching",
        icon: "BookOpen",
        lessons: [
          {
            id: "3-2-1",
            title: "Chapter 1: Arjuna's Despair",
            description: "The crisis that opens the door to wisdom",
            duration: "12 min",
          },
          {
            id: "3-2-2",
            title: "Chapter 2: The Eternal Soul",
            description: "The most important chapter — the soul never dies",
            duration: "18 min",
          },
          {
            id: "3-2-3",
            title: "Chapter 3: Karma Yoga",
            description: "The path of selfless action — act without attachment",
            duration: "15 min",
          },
          {
            id: "3-2-4",
            title: "Chapters 4-5: Knowledge and Renunciation",
            description: "Divine knowledge, sacrifice, and true renunciation",
            duration: "15 min",
          },
          {
            id: "3-2-5",
            title: "Chapter 6: The Path of Meditation",
            description: "Dhyana Yoga — mastering the mind through practice",
            duration: "12 min",
          },
          {
            id: "3-2-6",
            title: "Chapters 7-8: The Absolute Reality",
            description: "Knowledge of Brahman and attaining the Supreme",
            duration: "15 min",
          },
          {
            id: "3-2-7",
            title: "Chapters 9-10: Divine Glory",
            description: "The royal secret and Krishna's infinite manifestations",
            duration: "15 min",
          },
          {
            id: "3-2-8",
            title: "Chapter 11: The Universal Form",
            description: "The climax — Arjuna sees the entire universe within Krishna",
            duration: "15 min",
          },
          {
            id: "3-2-9",
            title: "Chapter 12: Bhakti Yoga",
            description: "The path of loving devotion — the easiest way",
            duration: "12 min",
          },
          {
            id: "3-2-10",
            title: "Chapters 13-14: Field, Knower, and the Gunas",
            description: "The nature of reality and the three qualities of existence",
            duration: "15 min",
          },
          {
            id: "3-2-11",
            title: "Chapters 15-16: The Supreme Being and Two Natures",
            description: "The cosmic tree, divine qualities, and demonic tendencies",
            duration: "15 min",
          },
          {
            id: "3-2-12",
            title: "Chapters 17-18: Faith and Liberation",
            description: "Three types of faith and the grand conclusion — moksha",
            duration: "18 min",
          },
        ],
      },
      {
        id: "3-3",
        title: "The Three Paths",
        description: "Synthesis — understanding how the different yogas work together",
        icon: "GitBranch",
        lessons: [
          {
            id: "3-3-1",
            title: "Karma Yoga: The Path of Action",
            description: "Doing your duty without attachment to results",
            duration: "12 min",
          },
          {
            id: "3-3-2",
            title: "Bhakti Yoga: The Path of Devotion",
            description: "Loving surrender to the Divine",
            duration: "12 min",
          },
          {
            id: "3-3-3",
            title: "Jnana Yoga: The Path of Knowledge",
            description: "Wisdom, discrimination, and self-inquiry",
            duration: "12 min",
          },
        ],
      },
    ],
  },

  // ============================================
  // LEVEL 4: GOING DEEPER
  // 16 lessons across 4 modules
  // ============================================
  {
    id: 4,
    title: "Going Deeper",
    subtitle: "Advanced Exploration",
    description: "For those ready to explore further — the Upanishads, the Vedas, the major traditions, and the living practices that make Hinduism a way of life.",
    color: "saffron",
    requiredLevel: 3,
    modules: [
      {
        id: "4-1",
        title: "The Upanishads",
        description: "The philosophical heart of Hinduism — dialogues on ultimate reality",
        icon: "Brain",
        lessons: [
          {
            id: "4-1-1",
            title: "What are the Upanishads?",
            description: "The 'end of the Vedas' — where philosophy begins",
            duration: "10 min",
          },
          {
            id: "4-1-2",
            title: "Isha Upanishad: The Lord in All",
            description: "The shortest and sweetest — seeing the Divine everywhere",
            duration: "12 min",
          },
          {
            id: "4-1-3",
            title: "Katha Upanishad: Death's Teaching",
            description: "Young Nachiketa learns the secret of immortality from Yama",
            duration: "15 min",
          },
          {
            id: "4-1-4",
            title: "Mandukya Upanishad: States of Consciousness",
            description: "Waking, dreaming, deep sleep, and the fourth state — turiya",
            duration: "12 min",
          },
          {
            id: "4-1-5",
            title: "The Great Sayings: Mahavakyas",
            description: "Tat Tvam Asi, Aham Brahmasmi — the ultimate truths",
            duration: "10 min",
          },
        ],
      },
      {
        id: "4-2",
        title: "The Four Traditions",
        description: "The major sampradayas — different paths to the same truth",
        icon: "Users",
        lessons: [
          {
            id: "4-2-1",
            title: "Unity in Diversity",
            description: "Why Hinduism has different paths and how they relate",
            duration: "8 min",
          },
          {
            id: "4-2-2",
            title: "Vaishnavism: Devotion to Vishnu",
            description: "Rama, Krishna, and the path of loving devotion",
            duration: "12 min",
          },
          {
            id: "4-2-3",
            title: "Shaivism: The Path of Shiva",
            description: "The ascetic, the dancer, the destroyer of ignorance",
            duration: "12 min",
          },
          {
            id: "4-2-4",
            title: "Shaktism: The Divine Feminine",
            description: "Worshipping God as Mother — Devi in all her forms",
            duration: "12 min",
          },
          {
            id: "4-2-5",
            title: "Smartism: All Paths Are One",
            description: "The liberal tradition — choose any deity, reach the same goal",
            duration: "10 min",
          },
        ],
      },
      {
        id: "4-3",
        title: "The Vedas",
        description: "The oldest scriptures — where it all began",
        icon: "ScrollText",
        lessons: [
          {
            id: "4-3-1",
            title: "What are the Vedas?",
            description: "Shruti — the 'heard' wisdom, the foundation of the tradition",
            duration: "10 min",
          },
          {
            id: "4-3-2",
            title: "The Four Vedas",
            description: "Rig, Yajur, Sama, Atharva — structure and purpose",
            duration: "15 min",
          },
          {
            id: "4-3-3",
            title: "Vedic Wisdom for Today",
            description: "How ancient hymns remain relevant in the modern world",
            duration: "10 min",
          },
        ],
      },
      {
        id: "4-4",
        title: "Hindu Practice",
        description: "How Hinduism is lived — worship, celebration, and life's journey",
        icon: "Flame",
        lessons: [
          {
            id: "4-4-1",
            title: "Puja: The Art of Worship",
            description: "Daily devotion, temple worship, and making offerings",
            duration: "12 min",
          },
          {
            id: "4-4-2",
            title: "Festivals: Celebrating the Divine",
            description: "Diwali, Holi, Navaratri, and the sacred calendar",
            duration: "15 min",
          },
          {
            id: "4-4-3",
            title: "Samskaras: Life's Sacred Milestones",
            description: "From birth to death — the sixteen sacraments",
            duration: "12 min",
          },
        ],
      },
    ],
  },

  // ============================================
  // LEVEL 5: THE PURANAS
  // ~20 lessons across 3 modules (starting with Bhagavata)
  // ============================================
  {
    id: 5,
    title: "The Puranas",
    subtitle: "Stories of the Gods",
    description: "The Puranas — ancient tales of creation, gods, and devotees that have shaped Hindu devotion for millennia. These stories carry profound wisdom through narrative, bringing philosophy to life.",
    color: "saffron",
    requiredLevel: 4,
    modules: [
      {
        id: "5-1",
        title: "The Bhagavata Purana",
        description: "The crown jewel of devotional literature — Krishna's life and the path of bhakti",
        icon: "Heart",
        lessons: [
          {
            id: "5-1-1",
            title: "What is the Bhagavata Purana?",
            description: "The 'Fifth Veda' — introduction, structure, and significance",
            duration: "10 min",
          },
          {
            id: "5-1-2",
            title: "Creation and Cosmic Cycles",
            description: "The universe's birth, destruction, and rebirth — the eternal dance",
            duration: "12 min",
          },
          {
            id: "5-1-3",
            title: "The Devotee Kings: Dhruva and Prahlada",
            description: "Two child-devotees who faced impossible odds with unshakeable faith",
            duration: "15 min",
          },
          {
            id: "5-1-4",
            title: "Krishna's Birth and Childhood",
            description: "The divine child — miraculous birth, escape from Kamsa, and early wonders",
            duration: "15 min",
          },
          {
            id: "5-1-5",
            title: "Krishna in Vrindavan",
            description: "The butter thief, the gopis, and the rasa lila — divine love in human form",
            duration: "15 min",
          },
          {
            id: "5-1-6",
            title: "Krishna's Later Life",
            description: "From Mathura to Dwarka — warrior, king, and friend",
            duration: "12 min",
          },
          {
            id: "5-1-7",
            title: "The Uddhava Gita",
            description: "Krishna's final teaching — wisdom for the age of Kali",
            duration: "12 min",
          },
          {
            id: "5-1-8",
            title: "The Bhagavata's Legacy",
            description: "How this text shaped bhakti movements and Hindu devotion",
            duration: "10 min",
          },
        ],
      },
      {
        id: "5-2",
        title: "The Shiva Purana",
        description: "The cosmic dancer, the ascetic, the destroyer — Shiva's tales",
        icon: "Moon",
        lessons: [
          {
            id: "5-2-1",
            title: "Shiva: The Cosmic Dancer",
            description: "Nataraja and the dance of creation and destruction",
            duration: "12 min",
          },
          {
            id: "5-2-2",
            title: "The Marriage of Shiva and Parvati",
            description: "The divine union — asceticism meets devotion",
            duration: "12 min",
          },
          {
            id: "5-2-3",
            title: "Ganesha and Kartikeya",
            description: "The divine sons — remover of obstacles and commander of armies",
            duration: "12 min",
          },
          {
            id: "5-2-4",
            title: "The Twelve Jyotirlingas",
            description: "Sacred sites of Shiva's light across India",
            duration: "10 min",
          },
          {
            id: "5-2-5",
            title: "Shaiva Philosophy",
            description: "Kashmir Shaivism, Shaiva Siddhanta — the path of Shiva",
            duration: "12 min",
          },
        ],
      },
      {
        id: "5-3",
        title: "Devi Mahatmya",
        description: "The glory of the Goddess — Durga's triumph over evil",
        icon: "Sparkles",
        lessons: [
          {
            id: "5-3-1",
            title: "The Goddess Awakens",
            description: "How the Divine Mother emerged from the gods' combined power",
            duration: "12 min",
          },
          {
            id: "5-3-2",
            title: "The Battle with Mahishasura",
            description: "The buffalo demon's defeat — evil conquered by divine feminine power",
            duration: "15 min",
          },
          {
            id: "5-3-3",
            title: "The Nine Nights: Navaratri",
            description: "The festival celebrating the Goddess's victory",
            duration: "10 min",
          },
          {
            id: "5-3-4",
            title: "Forms of the Divine Mother",
            description: "Durga, Lakshmi, Saraswati — the Goddess in all her aspects",
            duration: "12 min",
          },
        ],
      },
    ],
  },
  // ============================================
  // LEVEL 6: STUDY THE GITA
  // 18 lessons - One per chapter, verse-by-verse study
  // ============================================
  {
    id: 6,
    title: "Study the Gita",
    subtitle: "Read the Scripture",
    description: "Now that you've learned about the Bhagavad Gita, it's time to read it. Journey through all 18 chapters, studying the key verses with guidance and reflection.",
    color: "saffron",
    requiredLevel: 5,
    modules: [
      {
        id: "6-1",
        title: "Arjuna's Crisis & The Soul",
        description: "Chapters 1-4: From despair to divine knowledge",
        icon: "BookOpen",
        lessons: [
          {
            id: "6-1-1",
            title: "Chapter 1: Arjuna's Despair",
            description: "The battlefield crisis that sparked the greatest conversation",
            duration: "15 min",
          },
          {
            id: "6-1-2",
            title: "Chapter 2: The Eternal Soul",
            description: "Krishna's first teaching — you are not the body",
            duration: "20 min",
          },
          {
            id: "6-1-3",
            title: "Chapter 3: The Path of Action",
            description: "Karma Yoga — why action is superior to inaction",
            duration: "18 min",
          },
          {
            id: "6-1-4",
            title: "Chapter 4: Divine Knowledge",
            description: "The ancient wisdom and the nature of the Divine",
            duration: "18 min",
          },
        ],
      },
      {
        id: "6-2",
        title: "The Yoga of Practice",
        description: "Chapters 5-8: Renunciation, meditation, and the eternal",
        icon: "Flame",
        lessons: [
          {
            id: "6-2-1",
            title: "Chapter 5: Renunciation Through Action",
            description: "How to act in the world while remaining free",
            duration: "15 min",
          },
          {
            id: "6-2-2",
            title: "Chapter 6: The Path of Meditation",
            description: "Dhyana Yoga — mastering the mind through practice",
            duration: "18 min",
          },
          {
            id: "6-2-3",
            title: "Chapter 7: Knowledge & Realization",
            description: "Understanding the Divine in all its forms",
            duration: "15 min",
          },
          {
            id: "6-2-4",
            title: "Chapter 8: The Eternal Brahman",
            description: "What happens at death — and how to prepare",
            duration: "15 min",
          },
        ],
      },
      {
        id: "6-3",
        title: "Divine Revelation",
        description: "Chapters 9-12: The royal secret and cosmic vision",
        icon: "Eye",
        lessons: [
          {
            id: "6-3-1",
            title: "Chapter 9: The Royal Secret",
            description: "The most confidential knowledge of the Divine",
            duration: "18 min",
          },
          {
            id: "6-3-2",
            title: "Chapter 10: Divine Manifestations",
            description: "Krishna reveals where to find him in the world",
            duration: "18 min",
          },
          {
            id: "6-3-3",
            title: "Chapter 11: The Cosmic Vision",
            description: "Arjuna sees the Universal Form — awe and terror",
            duration: "20 min",
          },
          {
            id: "6-3-4",
            title: "Chapter 12: The Path of Devotion",
            description: "Bhakti Yoga — the way of love and surrender",
            duration: "15 min",
          },
        ],
      },
      {
        id: "6-4",
        title: "Knowledge & Liberation",
        description: "Chapters 13-18: The field, the gunas, and final freedom",
        icon: "Sunrise",
        lessons: [
          {
            id: "6-4-1",
            title: "Chapter 13: The Field & Knower",
            description: "Body, soul, and the witness within",
            duration: "18 min",
          },
          {
            id: "6-4-2",
            title: "Chapter 14: The Three Gunas",
            description: "Sattva, Rajas, Tamas — the forces that bind and free",
            duration: "15 min",
          },
          {
            id: "6-4-3",
            title: "Chapter 15: The Supreme Person",
            description: "The eternal tree and the Purushottama",
            duration: "15 min",
          },
          {
            id: "6-4-4",
            title: "Chapter 16: Divine & Demonic Natures",
            description: "Two paths of character — choose wisely",
            duration: "15 min",
          },
          {
            id: "6-4-5",
            title: "Chapter 17: Three Types of Faith",
            description: "How the gunas shape worship, food, and action",
            duration: "15 min",
          },
          {
            id: "6-4-6",
            title: "Chapter 18: Liberation Through Surrender",
            description: "The final teaching — abandon all and come to Me",
            duration: "20 min",
          },
        ],
      },
    ],
  },
  // ============================================
  // LEVEL 7: STUDY THE UPANISHADS
  // 10 lessons - Key Upanishads with verse study
  // ============================================
  {
    id: 7,
    title: "Study the Upanishads",
    subtitle: "The Philosophical Depths",
    description: "Explore the ancient wisdom texts that form the philosophical foundation of Hinduism. Read the key verses of the principal Upanishads.",
    color: "gold",
    requiredLevel: 6,
    modules: [
      {
        id: "7-1",
        title: "The Short Upanishads",
        description: "Four complete Upanishads — compact but profound",
        icon: "Scroll",
        lessons: [
          {
            id: "7-1-1",
            title: "Isha Upanishad",
            description: "18 verses on renunciation and the unity of all — complete study",
            duration: "25 min",
          },
          {
            id: "7-1-2",
            title: "Mandukya Upanishad",
            description: "12 verses on AUM and the four states of consciousness",
            duration: "20 min",
          },
          {
            id: "7-1-3",
            title: "Kena Upanishad",
            description: "35 verses — who is the power behind the powers?",
            duration: "25 min",
          },
          {
            id: "7-1-4",
            title: "Aitareya Upanishad",
            description: "33 verses on creation and consciousness",
            duration: "20 min",
          },
        ],
      },
      {
        id: "7-2",
        title: "The Story Upanishads",
        description: "Wisdom teachings wrapped in narrative",
        icon: "Feather",
        lessons: [
          {
            id: "7-2-1",
            title: "Katha Upanishad",
            description: "Nachiketa and Death — the secret of immortality",
            duration: "30 min",
          },
          {
            id: "7-2-2",
            title: "Mundaka Upanishad",
            description: "Two birds on a tree — higher and lower knowledge",
            duration: "25 min",
          },
          {
            id: "7-2-3",
            title: "Prashna Upanishad",
            description: "Six seekers, six questions — the dialogue of truth",
            duration: "25 min",
          },
        ],
      },
      {
        id: "7-3",
        title: "The Great Upanishads",
        description: "The longest and most profound texts — curated selections",
        icon: "Mountain",
        lessons: [
          {
            id: "7-3-1",
            title: "Taittiriya & Shvetashvatara",
            description: "The five koshas and Shaiva synthesis",
            duration: "30 min",
          },
          {
            id: "7-3-2",
            title: "Chandogya: Tat Tvam Asi",
            description: "The great teaching of 'You are That'",
            duration: "30 min",
          },
          {
            id: "7-3-3",
            title: "Brihadaranyaka: Yajnavalkya's Dialogues",
            description: "The philosopher-sage and the Maitreyi teaching",
            duration: "30 min",
          },
        ],
      },
    ],
  },
  // ============================================
  // LEVEL 8: STUDY THE VEDIC HYMNS
  // 6 lessons - The source mantras
  // ============================================
  {
    id: 8,
    title: "Study the Vedic Hymns",
    subtitle: "The Source",
    description: "Return to the source. Study the ancient hymns that seeded all of Hindu philosophy — mantras still chanted today after thousands of years.",
    color: "maroon",
    requiredLevel: 7,
    modules: [
      {
        id: "8-1",
        title: "The Sacred Mantras",
        description: "Hymns for daily practice and worship",
        icon: "Sun",
        lessons: [
          {
            id: "8-1-1",
            title: "Gayatri Mantra",
            description: "The supreme prayer — one verse that illuminates all",
            duration: "20 min",
          },
          {
            id: "8-1-2",
            title: "Agni Sukta",
            description: "The first hymn of the Rig Veda — invoking the sacred fire",
            duration: "20 min",
          },
          {
            id: "8-1-3",
            title: "Sri Sukta",
            description: "Hymn to Lakshmi — abundance and grace",
            duration: "25 min",
          },
        ],
      },
      {
        id: "8-2",
        title: "The Cosmic Hymns",
        description: "Profound contemplations on creation and existence",
        icon: "Stars",
        lessons: [
          {
            id: "8-2-1",
            title: "Nasadiya Sukta",
            description: "The Creation Hymn — questioning the origin of all",
            duration: "25 min",
          },
          {
            id: "8-2-2",
            title: "Purusha Sukta",
            description: "The Cosmic Person — universe from divine sacrifice",
            duration: "30 min",
          },
          {
            id: "8-2-3",
            title: "Shanti Suktas",
            description: "Peace invocations — may there be peace in all worlds",
            duration: "20 min",
          },
        ],
      },
    ],
  },
];

// Helper function to calculate total duration of a level
export function getLevelDuration(level: Level): string {
  let totalMinutes = 0;
  level.modules.forEach(module => {
    module.lessons.forEach(lesson => {
      const mins = parseInt(lesson.duration);
      if (!isNaN(mins)) totalMinutes += mins;
    });
  });

  if (totalMinutes >= 60) {
    const hours = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  }
  return `${totalMinutes}m`;
}

// Helper function to count lessons in a level
export function getLessonCount(level: Level): number {
  return level.modules.reduce((acc, module) => acc + module.lessons.length, 0);
}

// Helper function to count total lessons in curriculum
export function getTotalLessonCount(): number {
  return curriculum.reduce((acc, level) => acc + getLessonCount(level), 0);
}

// Helper function to get total curriculum duration
export function getTotalDuration(): string {
  let totalMinutes = 0;
  curriculum.forEach(level => {
    level.modules.forEach(module => {
      module.lessons.forEach(lesson => {
        const mins = parseInt(lesson.duration);
        if (!isNaN(mins)) totalMinutes += mins;
      });
    });
  });

  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;
  return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
}
