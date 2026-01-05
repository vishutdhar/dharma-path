// =============================================================================
// CHAPTER 6: DHYANA YOGA - THE YOGA OF MEDITATION
// =============================================================================
// One of the most practical chapters with actual meditation instructions.
// Krishna teaches: true renunciation, self as friend or enemy, meditation
// posture, moderation in all things, the restless mind, and the greatest yogi.
// 47 verses covering the complete practice of meditation and mind control.
// =============================================================================

import { VerseContent, ChapterContent } from '../verseTemplate';

const verses: VerseContent[] = [
  // -------------------------------------------------------------------------
  // SECTION 1: TRUE RENUNCIATION (Verses 1-4)
  // One who acts without attachment is the true sannyasi
  // -------------------------------------------------------------------------
  {
    chapter: 6,
    verse: 1,
    sanskrit: "श्रीभगवानुवाच।\nअनाश्रितः कर्मफलं कार्यं कर्म करोति यः।\nस संन्यासी च योगी च न निरग्निर्न चाक्रियः।।",
    transliteration: "śrī bhagavān uvāca\nanāśritaḥ karma-phalaṁ kāryaṁ karma karoti yaḥ\nsa sannyāsī ca yogī ca na niragnir na cākriyaḥ",

    translation: "The Blessed Lord said: One who performs their duty without depending on the fruits of action is a true renunciate and yogi—not one who merely gives up fire rituals or action.",

    explanation: {
      simple: "Krishna redefines renunciation. A true sannyasi isn't someone who stops doing everything—it's someone who acts without being attached to results. You can be a renunciate while fully engaged in life.",
      deeper: "This verse dissolves the apparent contradiction from Chapter 5. True renunciation isn't about external actions (giving up rituals or duties) but internal attitude (giving up attachment to outcomes). The householder doing their duty without selfish motivation is more of a renunciate than the monk who has merely changed clothes."
    },

    practicalApplication: "You don't need to quit your job or move to a monastery. Practice renunciation right where you are by doing your work excellently while releasing attachment to specific outcomes. The inner transformation matters more than outer circumstances.",

    keyTerms: [
      { term: "Anashrita", meaning: "Not depending on, not seeking refuge in" },
      { term: "Karma-phalam", meaning: "Fruit of action" },
      { term: "Karya karma", meaning: "Duty, work that must be done" },
      { term: "Sannyasi", meaning: "Renunciate" },
      { term: "Niraagni", meaning: "One without fire (rituals)" }
    ],

    themes: ["renunciation", "karma-yoga", "inner-vs-outer"],
    difficulty: "intermediate"
  },

  {
    chapter: 6,
    verse: 2,
    sanskrit: "यं संन्यासमिति प्राहुर्योगं तं विद्धि पाण्डव।\nन ह्यसंन्यस्तसङ्कल्पो योगी भवति कश्चन।।",
    transliteration: "yaṁ sannyāsam iti prāhur yogaṁ taṁ viddhi pāṇḍava\nna hy asannyasta-saṅkalpo yogī bhavati kaścana",

    translation: "Know that what they call renunciation is the same as yoga, O Pandava. No one becomes a yogi without giving up selfish intentions.",

    explanation: {
      simple: "Renunciation and yoga are essentially the same thing. Both require letting go of selfish desires and personal agendas. You can't be a yogi while clinging to self-centered motives.",
      deeper: "Sankalpa (intention/resolve) drives action. When sankalpa is selfish, it binds us. The yogi doesn't stop having intentions—they stop having self-centered ones. This is the common ground between the path of renunciation and the path of action."
    },

    practicalApplication: "Examine your motivations. Before any action, ask: 'Is this for my ego's benefit or for genuine good?' The practice of yoga begins with this honest self-inquiry into our underlying intentions.",

    keyTerms: [
      { term: "Sankalpa", meaning: "Intention, resolve, will" },
      { term: "Asannyasta-sankalpa", meaning: "Without having given up selfish intentions" }
    ],

    themes: ["unity-of-paths", "intention", "selflessness"],
    difficulty: "intermediate"
  },

  {
    chapter: 6,
    verse: 3,
    sanskrit: "आरुरुक्षोर्मुनेर्योगं कर्म कारणमुच्यते।\nयोगारूढस्य तस्यैव शमः कारणमुच्यते।।",
    transliteration: "ārurukṣor muner yogaṁ karma kāraṇam ucyate\nyogārūḍhasya tasyaiva śamaḥ kāraṇam ucyate",

    translation: "For a sage aspiring to yoga, action is said to be the means. For one who has attained yoga, tranquility is said to be the means.",

    explanation: {
      simple: "There are two stages. First, when you're climbing toward yoga, action and effort are essential. Once you've reached the summit, peaceful stillness maintains your state. Different stages require different approaches.",
      deeper: "This describes the natural progression. Initially, we need active practice—discipline, effort, karma yoga. But once established in yoga, the emphasis shifts to maintaining that state through inner peace (shama). The climber needs different skills than one who has reached the peak."
    },

    practicalApplication: "Don't try to skip stages. If you're a beginner, embrace active practice—don't pretend you're already enlightened. If you're advanced, don't keep struggling when it's time to rest in stillness. Know your stage and act accordingly.",

    keyTerms: [
      { term: "Aarurukshu", meaning: "One who wishes to climb/ascend" },
      { term: "Muni", meaning: "Sage, one who reflects deeply" },
      { term: "Yogaarudha", meaning: "One established in yoga" },
      { term: "Shama", meaning: "Tranquility, inner peace" }
    ],

    themes: ["stages-of-practice", "effort-vs-stillness", "progression"],
    difficulty: "intermediate"
  },

  {
    chapter: 6,
    verse: 4,
    sanskrit: "यदा हि नेन्द्रियार्थेषु न कर्मस्वनुषज्जते।\nसर्वसङ्कल्पसंन्यासी योगारूढस्तदोच्यते।।",
    transliteration: "yadā hi nendriyārtheṣu na karmasv anuṣajjate\nsarva-saṅkalpa-sannyāsī yogārūḍhas tadocyate",

    translation: "When one is attached neither to sense objects nor to actions, having renounced all selfish intentions—then one is said to be established in yoga.",

    explanation: {
      simple: "You've truly arrived at yoga when sense pleasures don't pull you and you're not attached to your actions. It's not suppression but genuine freedom—these things simply lose their grip on you.",
      deeper: "Notice the double freedom: from sense objects (external world) and from actions themselves (internal identity with doership). The sarva-sankalpa-sannyasi has transcended both the desire for pleasure and the ego's need to be the 'doer.' This is genuine establishment in yoga."
    },

    practicalApplication: "This is the goal, not the starting point. Use it as a measure of progress. Are you less reactive to sense pleasures than before? Less identified with being the 'doer'? Progress is gradual but measurable.",

    keyTerms: [
      { term: "Indriyartha", meaning: "Sense objects, objects of the senses" },
      { term: "Anushajjate", meaning: "Attached to, clinging to" },
      { term: "Sarva-sankalpa-sannyasi", meaning: "One who has renounced all selfish intentions" }
    ],

    themes: ["non-attachment", "freedom", "established-in-yoga"],
    difficulty: "intermediate"
  },

  // -------------------------------------------------------------------------
  // SECTION 2: SELF AS FRIEND OR ENEMY (Verses 5-9)
  // The mind can elevate or degrade
  // -------------------------------------------------------------------------
  {
    chapter: 6,
    verse: 5,
    sanskrit: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः।।",
    transliteration: "uddhared ātmanātmānaṁ nātmānam avasādayet\nātmaiva hy ātmano bandhur ātmaiva ripur ātmanaḥ",

    translation: "Let a person lift themselves by their own self; let them not degrade themselves. For the self alone is the friend of the self, and the self alone is the enemy of the self.",

    explanation: {
      simple: "You are your own best friend and your own worst enemy. No one else can save you or destroy you the way you can. Take responsibility—you have the power to lift yourself up or bring yourself down.",
      deeper: "This verse uses 'atman' in multiple senses. The lower self (ego-mind) can be elevated by the higher Self (awareness). Or the lower self can drag down even our highest aspirations. We contain within us both the problem and the solution."
    },

    practicalApplication: "Stop waiting for external rescue—a perfect teacher, circumstance, or relationship. Start with what you have. Also stop blaming external factors for your suffering. Your response to life is in your hands.",

    keyTerms: [
      { term: "Uddharet", meaning: "Should lift up, elevate" },
      { term: "Avasadayet", meaning: "Should degrade, bring down" },
      { term: "Bandhu", meaning: "Friend, relative" },
      { term: "Ripu", meaning: "Enemy" }
    ],

    themes: ["self-responsibility", "self-mastery", "inner-power"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 6,
    verse: 6,
    sanskrit: "बन्धुरात्मात्मनस्तस्य येनात्मैवात्मना जितः।\nअनात्मनस्तु शत्रुत्वे वर्तेतात्मैव शत्रुवत्।।",
    transliteration: "bandhur ātmātmanas tasya yenātmaivātmanā jitaḥ\nanātmanas tu śatrutve vartetātmaiva śatruvat",

    translation: "For one who has conquered the self by the self, the self is a friend. But for one who has not conquered the self, the self behaves like an enemy.",

    explanation: {
      simple: "When you've mastered your own mind, it becomes your greatest ally—supporting you, guiding you, helping you. But an unmastered mind is hostile, constantly sabotaging your peace and goals.",
      deeper: "Self-conquest (atma-jaya) is the prerequisite for the self becoming a friend. The unconquered mind generates endless problems—anxiety, addiction, self-sabotage. The conquered mind becomes a powerful instrument for liberation."
    },

    practicalApplication: "Notice when your mind acts as friend (calm, clear, supportive) versus enemy (anxious, craving, critical). The goal is to increase the first and decrease the second through consistent practice.",

    keyTerms: [
      { term: "Jita", meaning: "Conquered, mastered" },
      { term: "Anatma", meaning: "Not-self, one who hasn't conquered themselves" },
      { term: "Shatrutva", meaning: "Enmity, state of being an enemy" }
    ],

    themes: ["self-mastery", "mind-control", "inner-friend-enemy"],
    difficulty: "beginner"
  },

  {
    chapter: 6,
    verse: 7,
    sanskrit: "जितात्मनः प्रशान्तस्य परमात्मा समाहितः।\nशीतोष्णसुखदुःखेषु तथा मानापमानयोः।।",
    transliteration: "jitātmanaḥ praśāntasya paramātmā samāhitaḥ\nśītoṣṇa-sukha-duḥkheṣu tathā mānāpamānayoḥ",

    translation: "For one who has conquered the self and is peaceful, the Supreme Self is steadily present—in cold and heat, pleasure and pain, honor and dishonor.",

    explanation: {
      simple: "When you've mastered yourself and found inner peace, you discover the divine presence within—and it remains constant regardless of external circumstances. Hot or cold, praised or blamed, it doesn't matter.",
      deeper: "The paramatma (Supreme Self) isn't found through searching outside but through inner conquest and peace. Once established, this presence is 'samahita'—steadily collected, always accessible—regardless of the pairs of opposites that life brings."
    },

    practicalApplication: "The test of spiritual progress is equanimity in opposites. When you're praised, do you get inflated? When criticized, crushed? Practice staying centered in both, and the deeper presence will become apparent.",

    keyTerms: [
      { term: "Jitaatma", meaning: "One who has conquered the self" },
      { term: "Prashanta", meaning: "Peaceful, tranquil" },
      { term: "Paramatma", meaning: "Supreme Self" },
      { term: "Samahita", meaning: "Steadily present, composed" },
      { term: "Mana-apamana", meaning: "Honor and dishonor" }
    ],

    themes: ["equanimity", "divine-presence", "pairs-of-opposites"],
    difficulty: "intermediate"
  },

  {
    chapter: 6,
    verse: 8,
    sanskrit: "ज्ञानविज्ञानतृप्तात्मा कूटस्थो विजितेन्द्रियः।\nयुक्त इत्युच्यते योगी समलोष्टाश्मकाञ्चनः।।",
    transliteration: "jñāna-vijñāna-tṛptātmā kūṭa-stho vijitendriyaḥ\nyukta ity ucyate yogī sama-loṣṭāśma-kāñcanaḥ",

    translation: "The yogi who is satisfied with knowledge and wisdom, who is unchanging, who has conquered the senses, and to whom a lump of earth, a stone, and gold are the same—such a one is said to be established in yoga.",

    explanation: {
      simple: "A true yogi is content with inner wisdom, stable and unchanging, master of their senses. Most remarkably, they see equal value in dirt, stone, and gold—material worth has lost its power over them.",
      deeper: "Jnana (theoretical knowledge) combined with vijnana (experiential wisdom) creates deep satisfaction. Kutastha means 'unchanging like an anvil'—experiences strike but don't alter the essence. The sama-loshta-ashma-kanchana (earth-stone-gold equality) is a radical test of non-attachment."
    },

    practicalApplication: "You don't need to literally treat gold like dirt. But notice your reactions—does expensive always seem 'better'? Does your heart rate change around wealth? The yogi's equanimity is the goal.",

    keyTerms: [
      { term: "Jnana", meaning: "Knowledge, theoretical understanding" },
      { term: "Vijnana", meaning: "Wisdom, experiential realization" },
      { term: "Kutastha", meaning: "Unchanging, immovable like an anvil" },
      { term: "Sama-loshta-ashma-kanchana", meaning: "Equal toward earth, stone, and gold" }
    ],

    themes: ["contentment", "stability", "non-attachment-to-wealth"],
    difficulty: "intermediate"
  },

  {
    chapter: 6,
    verse: 9,
    sanskrit: "सुहृन्मित्रार्युदासीनमध्यस्थद्वेष्यबन्धुषु।\nसाधुष्वपि च पापेषु समबुद्धिर्विशिष्यते।।",
    transliteration: "suhṛn-mitrāry-udāsīna-madhyastha-dveṣya-bandhuṣu\nsādhuṣv api ca pāpeṣu sama-buddhir viśiṣyate",

    translation: "One who has equal regard for well-wishers, friends, enemies, neutrals, mediators, the hateful, relatives, saints, and sinners—such a one excels.",

    explanation: {
      simple: "The highest yogi maintains equanimity toward everyone—friends and enemies, saints and sinners, relatives and strangers. This doesn't mean treating everyone identically, but seeing the same Self in all.",
      deeper: "This is sama-buddhi (equal vision) at its most challenging. Krishna lists the full spectrum of human relationships and says the yogi sees beyond these roles to the underlying reality. This is the vision of unity in diversity."
    },

    practicalApplication: "Notice your internal reactions to different people. Can you wish well for someone you dislike? Can you avoid special pleading for those you love? Practice seeing the humanity in everyone, regardless of their relationship to you.",

    keyTerms: [
      { term: "Suhrit", meaning: "Well-wisher" },
      { term: "Mitra", meaning: "Friend" },
      { term: "Ari", meaning: "Enemy" },
      { term: "Udasina", meaning: "Neutral, indifferent" },
      { term: "Madhyastha", meaning: "Mediator, impartial" },
      { term: "Sama-buddhi", meaning: "Equal vision, equal regard" }
    ],

    themes: ["equal-vision", "universal-love", "transcending-preferences"],
    difficulty: "advanced"
  },

  // -------------------------------------------------------------------------
  // SECTION 3: PRACTICE OF MEDITATION (Verses 10-17)
  // Detailed instructions on how to meditate
  // -------------------------------------------------------------------------
  {
    chapter: 6,
    verse: 10,
    sanskrit: "योगी युञ्जीत सततमात्मानं रहसि स्थितः।\nएकाकी यतचित्तात्मा निराशीरपरिग्रहः।।",
    transliteration: "yogī yuñjīta satatam ātmānaṁ rahasi sthitaḥ\nekākī yata-cittātmā nirāśīr aparigrahaḥ",

    translation: "The yogi should constantly practice meditation, dwelling in solitude, alone, with mind and body controlled, free from desires and possessiveness.",

    explanation: {
      simple: "Krishna begins practical instructions: Find a quiet place, be alone, control your mind and body, let go of desires and the need to possess. This is the setup for meditation.",
      deeper: "Each element matters: 'satatam' (constantly) emphasizes regularity; 'rahasi' (in solitude) removes distractions; 'ekaki' (alone) emphasizes the inner journey; 'yata-cittatma' (controlled mind-self) is the practice; 'nirashi apargraha' (desireless, non-possessive) is the mental attitude."
    },

    practicalApplication: "Create conditions for practice: a regular time, a quiet space, solitude. Come without agenda or desire for specific experiences. Just be present, without grasping for results or possessing spiritual achievements.",

    keyTerms: [
      { term: "Yunjita", meaning: "Should practice yoga, should yoke" },
      { term: "Satatam", meaning: "Constantly, regularly" },
      { term: "Rahasi", meaning: "In solitude, in a secluded place" },
      { term: "Ekaki", meaning: "Alone" },
      { term: "Nirashi", meaning: "Free from desires, without expectations" },
      { term: "Aparigraha", meaning: "Non-possessiveness" }
    ],

    themes: ["meditation-practice", "solitude", "non-attachment"],
    difficulty: "beginner"
  },

  {
    chapter: 6,
    verse: 11,
    sanskrit: "शुचौ देशे प्रतिष्ठाप्य स्थिरमासनमात्मनः।\nनात्युच्छ्रितं नातिनीचं चैलाजिनकुशोत्तरम्।।",
    transliteration: "śucau deśe pratiṣṭhāpya sthiram āsanam ātmanaḥ\nnāty-ucchritaṁ nāti-nīcaṁ cailājina-kuśottaram",

    translation: "In a clean place, having established a firm seat for oneself, neither too high nor too low, covered with cloth, deerskin, and kusha grass...",

    explanation: {
      simple: "Krishna gets very practical: find a clean spot, set up a stable seat that's not too high or low. In his time, this meant cloth over deerskin over kusha grass. The point is: create proper conditions.",
      deeper: "The emphasis on 'sthira' (firm/stable) and the middle path (not too high, not too low) reflects the yogic principle of moderation. External conditions support internal practice. A wobbly or uncomfortable seat distracts the mind."
    },

    practicalApplication: "Adapt this to modern life: a clean, dedicated space; a comfortable but alert sitting position; a cushion or chair at the right height. Don't obsess over perfect conditions, but do create supportive ones.",

    keyTerms: [
      { term: "Shuchi desha", meaning: "Clean place" },
      { term: "Sthira asana", meaning: "Firm/stable seat" },
      { term: "Na ati ucchrita", meaning: "Not too high" },
      { term: "Na ati nicha", meaning: "Not too low" },
      { term: "Kusha", meaning: "Sacred grass used for meditation seats" }
    ],

    themes: ["meditation-setup", "practical-instructions", "moderation"],
    difficulty: "beginner"
  },

  {
    chapter: 6,
    verse: 12,
    sanskrit: "तत्रैकाग्रं मनः कृत्वा यतचित्तेन्द्रियक्रियः।\nउपविश्यासने युञ्ज्याद्योगमात्मविशुद्धये।।",
    transliteration: "tatraikāgraṁ manaḥ kṛtvā yata-cittendriya-kriyaḥ\nupaviśyāsane yuñjyād yogam ātma-viśuddhaye",

    translation: "...there, making the mind one-pointed, with thought and senses controlled, seated on that seat, one should practice yoga for self-purification.",

    explanation: {
      simple: "Once seated, make your mind one-pointed. Control your thoughts and senses. The purpose? Self-purification—clearing away the mental debris that obscures your true nature.",
      deeper: "Ekagra (one-pointed) is the key. Scattered attention cannot reveal truth. The practice purifies (vishuddhi) the self, not by adding something but by removing the impurities that cloud awareness. Yoga is fundamentally a cleansing process."
    },

    practicalApplication: "Choose a focus—breath, mantra, sensation. When the mind wanders (it will), gently return to one-pointedness. Don't fight distractions; just keep coming back. This patient return IS the practice.",

    keyTerms: [
      { term: "Ekagra", meaning: "One-pointed, focused" },
      { term: "Yata-chitta-indriya-kriya", meaning: "With controlled mind-sense activities" },
      { term: "Atma-vishuddhi", meaning: "Self-purification" }
    ],

    themes: ["concentration", "one-pointedness", "purification"],
    difficulty: "beginner"
  },

  {
    chapter: 6,
    verse: 13,
    sanskrit: "समं कायशिरोग्रीवं धारयन्नचलं स्थिरः।\nसंप्रेक्ष्य नासिकाग्रं स्वं दिशश्चानवलोकयन्।।",
    transliteration: "samaṁ kāya-śiro-grīvaṁ dhārayann acalaṁ sthiraḥ\nsamprekṣya nāsikāgraṁ svaṁ diśaś cānavalokayan",

    translation: "Holding the body, head, and neck erect, motionless and steady, gazing at the tip of one's nose, not looking around...",

    explanation: {
      simple: "Posture instructions: spine, head, and neck aligned and straight. Be still and steady. Soft gaze toward the nose tip (or between the eyebrows). Don't let eyes wander around.",
      deeper: "The aligned spine allows energy to flow freely. Stillness calms the nervous system. The nasikagra (nose tip) gaze turns attention inward without strain. Not looking around (anavalokayan) prevents the mind from following the eyes into distraction."
    },

    practicalApplication: "Sit with dignity—spine naturally erect, not rigid. Let eyes close or softly gaze downward. Physical stillness supports mental stillness. If the body keeps moving, the mind will too.",

    keyTerms: [
      { term: "Sama", meaning: "Equal, aligned, straight" },
      { term: "Kaya-shiro-griva", meaning: "Body, head, neck" },
      { term: "Achala", meaning: "Unmoving, motionless" },
      { term: "Nasikagra", meaning: "Tip of the nose" },
      { term: "Anavalokayan", meaning: "Not looking around" }
    ],

    themes: ["posture", "stillness", "sense-withdrawal"],
    difficulty: "beginner"
  },

  {
    chapter: 6,
    verse: 14,
    sanskrit: "प्रशान्तात्मा विगतभीर्ब्रह्मचारिव्रते स्थितः।\nमनः संयम्य मच्चित्तो युक्त आसीत मत्परः।।",
    transliteration: "praśāntātmā vigata-bhīr brahmacāri-vrate sthitaḥ\nmanaḥ saṁyamya mac-citto yukta āsīta mat-paraḥ",

    translation: "...with a peaceful self, fearless, established in the vow of brahmacharya, controlling the mind, thinking of Me, let the yogi sit, devoted to Me as the supreme goal.",

    explanation: {
      simple: "The inner attitude: be peaceful, release fear, practice self-control (brahmacharya). Control the mind and fix it on the Divine. Sit in meditation with the Divine as your highest aim.",
      deeper: "Prashanta (peaceful) and vigata-bhih (fearless) describe the emotional foundation. Brahmacharya here means conservation of energy and self-control. Mat-chitta and mat-para (mind on Me, devoted to Me) show that yogic practice culminates in devotion."
    },

    practicalApplication: "Come to meditation with peace, not anxiety. Release fear of failure or expectation of specific experiences. Practice energy conservation (moderation in all things). Make your highest aim the Divine, however you understand it.",

    keyTerms: [
      { term: "Prashanta-atma", meaning: "Peaceful self" },
      { term: "Vigata-bhih", meaning: "Free from fear" },
      { term: "Brahmacharya", meaning: "Self-control, conservation of energy" },
      { term: "Mat-chitta", meaning: "Mind fixed on Me (Krishna/Divine)" },
      { term: "Mat-para", meaning: "Devoted to Me as supreme" }
    ],

    themes: ["peace", "fearlessness", "devotion", "self-control"],
    difficulty: "intermediate"
  },

  {
    chapter: 6,
    verse: 15,
    sanskrit: "युञ्जन्नेवं सदात्मानं योगी नियतमानसः।\nशान्तिं निर्वाणपरमां मत्संस्थामधिगच्छति।।",
    transliteration: "yuñjann evaṁ sadātmānaṁ yogī niyata-mānasaḥ\nśāntiṁ nirvāṇa-paramāṁ mat-saṁsthām adhigacchati",

    translation: "Thus constantly practicing, the yogi of controlled mind attains the peace of nirvana, the supreme state that abides in Me.",

    explanation: {
      simple: "By practicing consistently with a controlled mind, the yogi reaches ultimate peace—nirvana—which exists in the Divine. This is the result of the meditation practice just described.",
      deeper: "Nirvana (literally 'blown out'—extinction of ego-fire) combined with mat-samstha (established in Me) shows that liberation isn't mere negation but positive establishment in the Divine. The peace attained is 'parama'—supreme, not ordinary relaxation."
    },

    practicalApplication: "The promise: consistent practice leads to supreme peace. This isn't achieved overnight but through 'sada' (always) practicing. Trust the process; the destination is assured for those who persist.",

    keyTerms: [
      { term: "Sada", meaning: "Always, constantly" },
      { term: "Niyata-manasa", meaning: "Of controlled mind" },
      { term: "Nirvana-parama", meaning: "Supreme nirvana/liberation" },
      { term: "Mat-samstha", meaning: "Established in Me, abiding in Me" }
    ],

    themes: ["liberation", "peace", "consistent-practice"],
    difficulty: "intermediate"
  },

  {
    chapter: 6,
    verse: 16,
    sanskrit: "नात्यश्नतस्तु योगोऽस्ति न चैकान्तमनश्नतः।\nन चातिस्वप्नशीलस्य जाग्रतो नैव चार्जुन।।",
    transliteration: "nāty-aśnatas tu yogo 'sti na caikāntam anaśnataḥ\nna cāti-svapna-śīlasya jāgrato naiva cārjuna",

    translation: "Yoga is not for one who eats too much or too little, nor for one who sleeps too much or stays awake too much, O Arjuna.",

    explanation: {
      simple: "Balance is essential. If you overeat or starve yourself, yoga won't work. If you sleep too much or deprive yourself of sleep, yoga won't work. The middle path is necessary.",
      deeper: "This corrects extreme asceticism. Some seekers thought self-torture was spiritual. Krishna says no—extremes in either direction obstruct yoga. The body is the vehicle for spiritual practice and needs balanced care."
    },

    practicalApplication: "Don't use spiritual practice as an excuse for self-neglect or self-indulgence. Eat moderately, sleep adequately. Physical balance supports mental balance. Take care of your body—it's your meditation seat.",

    keyTerms: [
      { term: "Ati-ashnata", meaning: "One who eats too much" },
      { term: "Anashnata", meaning: "One who doesn't eat (fasting excessively)" },
      { term: "Ati-svapna-shila", meaning: "One who sleeps too much" },
      { term: "Jagrata", meaning: "One who stays awake (too much)" }
    ],

    themes: ["moderation", "middle-path", "balance"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 6,
    verse: 17,
    sanskrit: "युक्ताहारविहारस्य युक्तचेष्टस्य कर्मसु।\nयुक्तस्वप्नावबोधस्य योगो भवति दुःखहा।।",
    transliteration: "yuktāhāra-vihārasya yukta-ceṣṭasya karmasu\nyukta-svapnāvabodhasya yogo bhavati duḥkha-hā",

    translation: "For one who is moderate in eating and recreation, moderate in effort in activities, moderate in sleep and waking—yoga becomes the destroyer of sorrow.",

    explanation: {
      simple: "When you're balanced in eating, recreation, work, sleep, and waking—then yoga destroys suffering. Moderation in all things is the foundation for successful practice.",
      deeper: "Yukta (balanced, yoked) appears four times, emphasizing that yoga itself means balance. The result: duhkha-ha—yoga becomes the 'killer of suffering.' Not through extreme measures but through harmonious living does yoga fulfill its promise."
    },

    practicalApplication: "Audit your life for extremes. Where are you overdoing? Underdoing? Bring all dimensions—food, activity, rest, entertainment—toward the middle. This balanced life IS yoga in daily form.",

    keyTerms: [
      { term: "Yukta-ahara", meaning: "Balanced eating" },
      { term: "Yukta-vihara", meaning: "Balanced recreation" },
      { term: "Yukta-cheshta", meaning: "Balanced effort" },
      { term: "Yukta-svapna-avabodha", meaning: "Balanced sleep and waking" },
      { term: "Duhkha-ha", meaning: "Destroyer of sorrow" }
    ],

    themes: ["moderation", "balanced-living", "end-of-suffering"],
    difficulty: "beginner"
  },

  // -------------------------------------------------------------------------
  // SECTION 4: STEADINESS AND MIND CONTROL (Verses 18-28)
  // The mind like an unflickering flame
  // -------------------------------------------------------------------------
  {
    chapter: 6,
    verse: 18,
    sanskrit: "यदा विनियतं चित्तमात्मन्येवावतिष्ठते।\nनिःस्पृहः सर्वकामेभ्यो युक्त इत्युच्यते तदा।।",
    transliteration: "yadā viniyataṁ cittam ātmany evāvatiṣṭhate\nniḥspṛhaḥ sarva-kāmebhyo yukta ity ucyate tadā",

    translation: "When the perfectly controlled mind rests in the Self alone, free from longing for all desires—then one is said to be established in yoga.",

    explanation: {
      simple: "Yoga is achieved when your disciplined mind rests entirely in the Self, with no craving for anything else. That's the state of being 'yukta'—established, connected.",
      deeper: "The chitta (mind-stuff) that usually scatters outward toward objects becomes 'viniyata' (perfectly controlled) and 'avatishthate' (abides) in atman (Self). Nispriha (without longing) describes the natural state when the Self is found—desires lose their pull."
    },

    practicalApplication: "In meditation, notice when the mind settles into simple awareness, not reaching for anything. These moments of contentment without object are tastes of what Krishna describes. Cultivate and extend them.",

    keyTerms: [
      { term: "Viniyata chitta", meaning: "Perfectly controlled mind" },
      { term: "Atmani avatishthate", meaning: "Abides in the Self" },
      { term: "Nispriha", meaning: "Without longing, free from craving" },
      { term: "Yukta", meaning: "Established in yoga, connected" }
    ],

    themes: ["mind-control", "self-abidance", "desirelessness"],
    difficulty: "intermediate"
  },

  {
    chapter: 6,
    verse: 19,
    sanskrit: "यथा दीपो निवातस्थो नेङ्गते सोपमा स्मृता।\nयोगिनो यतचित्तस्य युञ्जतो योगमात्मनः।।",
    transliteration: "yathā dīpo nivāta-stho neṅgate sopamā smṛtā\nyogino yata-cittasya yuñjato yogam ātmanaḥ",

    translation: "As a lamp in a windless place does not flicker—this is the simile used for a yogi of controlled mind practicing yoga of the Self.",

    explanation: {
      simple: "A beautiful image: the yogi's mind is like a flame that doesn't flicker because there's no wind. In a windless place, the flame burns steady and bright. That's the controlled mind in meditation.",
      deeper: "The winds are the sense impressions and mental disturbances (vrittis). When these are stilled, awareness becomes steady (sthira) like the unflickering flame. This is one of the Gita's most famous meditation images."
    },

    practicalApplication: "Use this image in meditation. Visualize your awareness as a steady flame. When disturbances arise (the winds), notice how the flame wavers. Practice returning to stillness until the flame burns steady.",

    keyTerms: [
      { term: "Dipa", meaning: "Lamp, flame" },
      { term: "Nivata-stha", meaning: "In a windless place" },
      { term: "Na ingate", meaning: "Does not flicker/waver" },
      { term: "Upama", meaning: "Simile, comparison" },
      { term: "Yata-chitta", meaning: "Controlled mind" }
    ],

    themes: ["steadiness", "concentration", "meditation-imagery"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 6,
    verse: 20,
    sanskrit: "यत्रोपरमते चित्तं निरुद्धं योगसेवया।\nयत्र चैवात्मनात्मानं पश्यन्नात्मनि तुष्यति।।",
    transliteration: "yatroparamate cittaṁ niruddhaṁ yoga-sevayā\nyatra caivātmanātmānaṁ paśyann ātmani tuṣyati",

    translation: "Where the mind, restrained by the practice of yoga, becomes still; where seeing the Self by the Self, one rejoices in the Self...",

    explanation: {
      simple: "Through yoga practice, the mind becomes completely still. In that stillness, you see the Self through the Self—not through thoughts or concepts. And in that seeing, there's complete satisfaction.",
      deeper: "Uparamate (ceases, becomes still) and niruddha (restrained) describe the mind's quiescence. The triple use of 'atman' (seeing Self by Self in Self) points to direct, non-mediated self-knowledge. Tushyati (is satisfied) shows this isn't dry knowledge but fulfilling experience."
    },

    practicalApplication: "Notice moments when mental activity truly pauses—between thoughts, in deep relaxation, in moments of awe. These glimpses are doorways. Through practice, these pauses lengthen into abiding stillness.",

    keyTerms: [
      { term: "Uparamate", meaning: "Becomes still, ceases" },
      { term: "Niruddha", meaning: "Restrained, controlled" },
      { term: "Yoga-sevaya", meaning: "By practice of yoga" },
      { term: "Pashyan", meaning: "Seeing, perceiving" },
      { term: "Tushyati", meaning: "Is satisfied, rejoices" }
    ],

    themes: ["mental-stillness", "self-knowledge", "fulfillment"],
    difficulty: "intermediate"
  },

  {
    chapter: 6,
    verse: 21,
    sanskrit: "सुखमात्यन्तिकं यत्तद्बुद्धिग्राह्यमतीन्द्रियम्।\nवेत्ति यत्र न चैवायं स्थितश्चलति तत्त्वतः।।",
    transliteration: "sukham ātyantikaṁ yat tad buddhi-grāhyam atīndriyam\nvetti yatra na caivāyaṁ sthitaś calati tattvataḥ",

    translation: "...where one experiences the infinite bliss that is grasped by the purified intellect, beyond the senses; established there, one never departs from the truth...",

    explanation: {
      simple: "The yogi experiences boundless happiness that the senses can't reach—only a purified intellect can grasp it. Once established in this experience, one never falls away from truth.",
      deeper: "Atyantika sukha (infinite/ultimate happiness) is atindriya (beyond the senses)—it's not sensory pleasure magnified but a different category entirely. Buddhi-grahya (grasped by intellect) means direct intuitive knowing. Sthita chalati na (established, doesn't move) describes irreversible realization."
    },

    practicalApplication: "Sensory pleasures, however intense, are limited. Begin to distinguish between sense-dependent happiness and the deeper contentment that arises from stillness itself. The latter hints at what Krishna describes.",

    keyTerms: [
      { term: "Atyantika sukha", meaning: "Infinite/ultimate happiness" },
      { term: "Buddhi-grahya", meaning: "Grasped by the intellect" },
      { term: "Atindriya", meaning: "Beyond the senses" },
      { term: "Tattvata", meaning: "From the truth/reality" },
      { term: "Na chalati", meaning: "Doesn't move/depart" }
    ],

    themes: ["transcendent-bliss", "beyond-senses", "irreversible-attainment"],
    difficulty: "advanced"
  },

  {
    chapter: 6,
    verse: 22,
    sanskrit: "यं लब्ध्वा चापरं लाभं मन्यते नाधिकं ततः।\nयस्मिन्स्थितो न दुःखेन गुरुणापि विचाल्यते।।",
    transliteration: "yaṁ labdhvā cāparaṁ lābhaṁ manyate nādhikaṁ tataḥ\nyasmin sthito na duḥkhena guruṇāpi vicālyate",

    translation: "...having obtained which, one thinks there is no greater gain; established in which, one is not shaken even by the heaviest sorrow...",

    explanation: {
      simple: "Once you've attained this state, you know there's nothing better to gain. And when you're established in it, even the most terrible suffering can't shake you.",
      deeper: "This is the ultimate value proposition. Na adhika (nothing greater)—compared to Self-realization, all other gains are trivial. Guruna duhkhena na vichalyate (not shaken by heavy sorrow)—the test of attainment is equanimity in extreme difficulty, not just pleasant circumstances."
    },

    practicalApplication: "Notice what you currently consider the greatest possible gain—wealth, love, achievement? This verse suggests there's something beyond all these. And that 'something' makes you unshakeable. Keep this possibility alive in your practice.",

    keyTerms: [
      { term: "Labdhva", meaning: "Having obtained" },
      { term: "Apara labha", meaning: "Another gain" },
      { term: "Na adhika", meaning: "Nothing greater" },
      { term: "Guruna duhkhena", meaning: "By heavy sorrow" },
      { term: "Na vichalyate", meaning: "Not shaken" }
    ],

    themes: ["supreme-attainment", "unshakeable-peace", "ultimate-value"],
    difficulty: "intermediate"
  },

  {
    chapter: 6,
    verse: 23,
    sanskrit: "तं विद्याद्दुःखसंयोगवियोगं योगसंज्ञितम्।\nस निश्चयेन योक्तव्यो योगोऽनिर्विण्णचेतसा।।",
    transliteration: "taṁ vidyād duḥkha-saṁyoga-viyogaṁ yoga-saṁjñitam\nsa niścayena yoktavyo yogo 'nirviṇṇa-cetasā",

    translation: "Let this disconnection from union with sorrow be known as yoga. This yoga should be practiced with determination, with an undismayed mind.",

    explanation: {
      simple: "Krishna defines yoga as 'separation from union with sorrow.' In other words, yoga breaks the bond between you and suffering. Practice this with firm determination and an unwavering mind.",
      deeper: "A powerful definition: yoga is duhkha-samyoga-viyoga—disconnection from the connection with suffering. We're normally 'married' to our suffering. Yoga is the divorce. Nirvinna-chetasa (undismayed mind) indicates the patient persistence required."
    },

    practicalApplication: "You're not trying to eliminate sorrow from life—that's impossible. You're trying to end your identification with it. When suffering arises, practice: 'This sorrow exists, but I am not bound to it.' This is yoga.",

    keyTerms: [
      { term: "Duhkha-samyoga-viyoga", meaning: "Disconnection from union with sorrow" },
      { term: "Yoga-samjnita", meaning: "Known as yoga" },
      { term: "Nishchaya", meaning: "Determination, firm resolve" },
      { term: "Anirvinna-chetasa", meaning: "With undismayed/persistent mind" }
    ],

    themes: ["definition-of-yoga", "end-of-suffering", "determination"],
    difficulty: "intermediate",
    famousVerse: true
  },

  {
    chapter: 6,
    verse: 24,
    sanskrit: "सङ्कल्पप्रभवान्कामांस्त्यक्त्वा सर्वानशेषतः।\nमनसैवेन्द्रियग्रामं विनियम्य समन्ततः।।",
    transliteration: "saṅkalpa-prabhavān kāmāṁs tyaktvā sarvān aśeṣataḥ\nmanasaivendriya-grāmaṁ viniyamya samantataḥ",

    translation: "Abandoning completely all desires born of intention, restraining the entire group of senses by the mind from all directions...",

    explanation: {
      simple: "Give up all desires that arise from mental planning and scheming. Use the mind itself to control the senses completely, from every direction. Don't let any sense slip away unchecked.",
      deeper: "Desires arise from sankalpa (intention/imagination). By recognizing this origin, we can address desires at their source. The indriya-grama (group/village of senses) must be controlled 'samantata' (completely, from all sides)—no loopholes allowed."
    },

    practicalApplication: "Notice how desires begin as thoughts—imagining, planning, fantasizing. Catch them at this stage before they become compulsions. Use your awareness (mind) to oversee all sense activities, not just the obvious ones.",

    keyTerms: [
      { term: "Sankalpa-prabhava", meaning: "Born of intention/imagination" },
      { term: "Kama", meaning: "Desire" },
      { term: "Asheshata", meaning: "Completely, without remainder" },
      { term: "Indriya-grama", meaning: "Group of senses" },
      { term: "Samantata", meaning: "From all directions, completely" }
    ],

    themes: ["renunciation-of-desire", "sense-control", "mental-discipline"],
    difficulty: "intermediate"
  },

  {
    chapter: 6,
    verse: 25,
    sanskrit: "शनैः शनैरुपरमेद्बुद्ध्या धृतिगृहीतया।\nआत्मसंस्थं मनः कृत्वा न किञ्चिदपि चिन्तयेत्।।",
    transliteration: "śanaiḥ śanair uparamed buddhyā dhṛti-gṛhītayā\nātma-saṁsthaṁ manaḥ kṛtvā na kiñcid api cintayet",

    translation: "...gradually, step by step, let one attain stillness through the intellect held firm in patience. Having fixed the mind on the Self, let one not think of anything else.",

    explanation: {
      simple: "Go slowly—step by step. Use patient intelligence to become still. Place the mind firmly in the Self and don't think about anything else. Gradual progress with patience is the way.",
      deeper: "Shanai shanai (slowly, slowly) counters spiritual impatience. Dhriti (patience/fortitude) held by buddhi creates sustainable progress. Atma-samstha mana (mind established in Self) is the goal; na kinchit api chintayet (think of nothing at all) describes the method."
    },

    practicalApplication: "Don't rush. Spiritual development takes time—accept this. When thoughts arise in meditation, gently return to awareness itself (the Self), not to another thought. Patient, gradual practice is more effective than forceful effort.",

    keyTerms: [
      { term: "Shanai shanai", meaning: "Slowly, gradually" },
      { term: "Uparamet", meaning: "Should attain stillness" },
      { term: "Dhriti-grihita", meaning: "Held by patience/fortitude" },
      { term: "Atma-samstha", meaning: "Established in the Self" },
      { term: "Na kinchit chintayet", meaning: "Should not think of anything" }
    ],

    themes: ["gradual-progress", "patience", "mental-stillness"],
    difficulty: "beginner"
  },

  {
    chapter: 6,
    verse: 26,
    sanskrit: "यतो यतो निश्चरति मनश्चञ्चलमस्थिरम्।\nततस्ततो नियम्यैतदात्मन्येव वशं नयेत्।।",
    transliteration: "yato yato niścarati manaś cañcalam asthiram\ntatas tato niyamyaitad ātmany eva vaśaṁ nayet",

    translation: "Wherever the restless, unsteady mind wanders, from there let one restrain it and bring it back under the control of the Self alone.",

    explanation: {
      simple: "The mind is restless and unstable—it will wander. Wherever it goes, bring it back. Again and again, return it to the Self. This is the practice: endless gentle redirection.",
      deeper: "Chanchala (restless) and asthira (unsteady) honestly describe the untrained mind. Krishna doesn't say stop the wandering; he says 'tata tata' (from there, from there)—wherever it goes, bring it back. The practice is in the returning, not in never wandering."
    },

    practicalApplication: "This is the heart of meditation instruction. Don't be discouraged by wandering—it's expected. Success isn't a mind that never wanders; it's a mind that keeps coming back. Each return strengthens the capacity.",

    keyTerms: [
      { term: "Yata yata", meaning: "Wherever, wherever" },
      { term: "Nishcharati", meaning: "Wanders, goes out" },
      { term: "Chanchala", meaning: "Restless" },
      { term: "Asthira", meaning: "Unsteady" },
      { term: "Tata tata", meaning: "From there, from there" },
      { term: "Niyamya", meaning: "Restraining, bringing back" }
    ],

    themes: ["mind-wandering", "returning-to-self", "patient-practice"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 6,
    verse: 27,
    sanskrit: "प्रशान्तमनसं ह्येनं योगिनं सुखमुत्तमम्।\nउपैति शान्तरजसं ब्रह्मभूतमकल्मषम्।।",
    transliteration: "praśānta-manasaṁ hy enaṁ yoginaṁ sukham uttamam\nupaiti śānta-rajasaṁ brahma-bhūtam akalmaṣam",

    translation: "Supreme happiness comes to the yogi whose mind is peaceful, whose passion is calmed, who has become Brahman, and who is free from impurity.",

    explanation: {
      simple: "The highest happiness comes to the yogi with a peaceful mind. When agitation (rajas) is calmed, when you've realized your identity with Brahman, when impurities are cleared—supreme joy arises naturally.",
      deeper: "Four qualities converge: prashanta-manasa (peaceful mind), shanta-rajasa (calmed rajas/passion), brahma-bhuta (become Brahman/realized identity with the Absolute), and akalmasha (free from impurity). Together these bring uttama sukha (supreme happiness)."
    },

    practicalApplication: "Notice how peace, reduced agitation, expanded identity, and moral clarity tend to arise together. Work on any one, and the others develop. The supreme happiness isn't added on—it's what's revealed when obstacles are removed.",

    keyTerms: [
      { term: "Prashanta-manasa", meaning: "Peaceful mind" },
      { term: "Shanta-rajasa", meaning: "Calmed passion/agitation" },
      { term: "Brahma-bhuta", meaning: "Become Brahman, realized" },
      { term: "Akalmasha", meaning: "Free from impurity" },
      { term: "Uttama sukha", meaning: "Supreme happiness" }
    ],

    themes: ["peace", "realization", "supreme-happiness"],
    difficulty: "intermediate"
  },

  {
    chapter: 6,
    verse: 28,
    sanskrit: "युञ्जन्नेवं सदात्मानं योगी विगतकल्मषः।\nसुखेन ब्रह्मसंस्पर्शमत्यन्तं सुखमश्नुते।।",
    transliteration: "yuñjann evaṁ sadātmānaṁ yogī vigata-kalmaṣaḥ\nsukhena brahma-saṁsparśam atyantaṁ sukham aśnute",

    translation: "Thus constantly engaging the self, the yogi who is free from impurity easily attains the infinite bliss of contact with Brahman.",

    explanation: {
      simple: "By consistently practicing, the purified yogi easily touches Brahman and experiences infinite happiness. Once impurities are cleared, the contact becomes effortless and the joy boundless.",
      deeper: "Brahma-samsparsha (touch/contact with Brahman) suggests direct experiential union. Sukhena (easily) indicates that for the purified yogi, this isn't a struggle. Atyanta sukha (infinite happiness) is the result of this divine contact."
    },

    practicalApplication: "Purification makes everything easier. Instead of forcing meditation, work on clearing the obstacles—moral impurities, mental agitation, confused understanding. As these clear, practice becomes effortless and joy becomes natural.",

    keyTerms: [
      { term: "Sada", meaning: "Always, constantly" },
      { term: "Vigata-kalmasha", meaning: "Free from impurity" },
      { term: "Sukhena", meaning: "Easily, with ease" },
      { term: "Brahma-samsparsha", meaning: "Contact with Brahman" },
      { term: "Atyanta sukha", meaning: "Infinite happiness" }
    ],

    themes: ["effortless-practice", "divine-contact", "infinite-bliss"],
    difficulty: "intermediate"
  },

  // -------------------------------------------------------------------------
  // SECTION 5: VISION OF UNITY (Verses 29-32)
  // Seeing the Self in all beings
  // -------------------------------------------------------------------------
  {
    chapter: 6,
    verse: 29,
    sanskrit: "सर्वभूतस्थमात्मानं सर्वभूतानि चात्मनि।\nईक्षते योगयुक्तात्मा सर्वत्र समदर्शनः।।",
    transliteration: "sarva-bhūta-stham ātmānaṁ sarva-bhūtāni cātmani\nīkṣate yoga-yuktātmā sarvatra sama-darśanaḥ",

    translation: "One whose self is established in yoga sees the Self existing in all beings and all beings in the Self, seeing the same everywhere.",

    explanation: {
      simple: "The yogi sees the same Self in all beings and sees all beings within the Self. It's a complete vision of unity—the same divine presence everywhere, in everyone.",
      deeper: "This is sama-darshana (vision of sameness) at its fullest. Not just intellectually knowing unity, but actually seeing it—atman in all bhuta, all bhuta in atman. This reciprocal vision dissolves the illusion of separation."
    },

    practicalApplication: "Practice seeing the same awareness behind different eyes. The consciousness reading these words is the same consciousness in every being. Start with those you love, extend to strangers, then to those you dislike.",

    keyTerms: [
      { term: "Sarva-bhuta-stha", meaning: "Existing in all beings" },
      { term: "Atma", meaning: "Self" },
      { term: "Ikshate", meaning: "Sees, perceives" },
      { term: "Yoga-yukta-atma", meaning: "Self established in yoga" },
      { term: "Sama-darshana", meaning: "Vision of sameness/equality" }
    ],

    themes: ["vision-of-unity", "self-in-all", "equal-vision"],
    difficulty: "advanced",
    famousVerse: true
  },

  {
    chapter: 6,
    verse: 30,
    sanskrit: "यो मां पश्यति सर्वत्र सर्वं च मयि पश्यति।\nतस्याहं न प्रणश्यामि स च मे न प्रणश्यति।।",
    transliteration: "yo māṁ paśyati sarvatra sarvaṁ ca mayi paśyati\ntasyāhaṁ na praṇaśyāmi sa ca me na praṇaśyati",

    translation: "One who sees Me everywhere and sees everything in Me—I am never lost to them, nor are they ever lost to Me.",

    explanation: {
      simple: "If you see the Divine everywhere and see everything as existing within the Divine, you'll never lose the Divine and the Divine will never lose you. It's a mutual, unbreakable connection.",
      deeper: "The relationship becomes reciprocal: the devotee sees Krishna everywhere; Krishna never abandons the devotee. 'Na pranashyami' (I am not lost) and 'na pranashyati' (they are not lost) describe an eternal, indestructible bond of mutual presence."
    },

    practicalApplication: "Practice seeing the Divine in everyone and everything. Not just in temples or holy people, but in the ordinary and even the difficult. This practice creates an unshakeable relationship with the sacred.",

    keyTerms: [
      { term: "Pashyati", meaning: "Sees" },
      { term: "Sarvatra", meaning: "Everywhere" },
      { term: "Mayi", meaning: "In Me" },
      { term: "Na pranashyami", meaning: "I am not lost" },
      { term: "Na pranashyati", meaning: "They are not lost" }
    ],

    themes: ["divine-vision", "mutual-relationship", "eternal-bond"],
    difficulty: "intermediate",
    famousVerse: true
  },

  {
    chapter: 6,
    verse: 31,
    sanskrit: "सर्वभूतस्थितं यो मां भजत्येकत्वमास्थितः।\nसर्वथा वर्तमानोऽपि स योगी मयि वर्तते।।",
    transliteration: "sarva-bhūta-sthitaṁ yo māṁ bhajaty ekatvam āsthitaḥ\nsarvathā vartamāno 'pi sa yogī mayi vartate",

    translation: "The yogi who, established in oneness, worships Me dwelling in all beings, lives in Me, however they may otherwise act.",

    explanation: {
      simple: "When you worship the Divine as present in all beings, established in the vision of oneness—then no matter what you're doing externally, you're living in the Divine. Your actions don't determine this; your vision does.",
      deeper: "Ekatvam asthita (established in oneness) is the key. From this vision, bhajati (worship) becomes constant because the Divine is seen everywhere. Sarvatha vartamana (however one acts) shows that external activities don't disqualify this—the inner orientation matters."
    },

    practicalApplication: "You don't need to change your activities to live spiritually. You need to change your vision. See the Divine in every interaction, every being, every situation. Then your whole life becomes worship.",

    keyTerms: [
      { term: "Sarva-bhuta-sthita", meaning: "Dwelling in all beings" },
      { term: "Bhajati", meaning: "Worships, honors" },
      { term: "Ekatva", meaning: "Oneness, unity" },
      { term: "Sarvatha vartamana", meaning: "However one acts" },
      { term: "Mayi vartate", meaning: "Lives in Me" }
    ],

    themes: ["worship-through-vision", "oneness", "living-in-divine"],
    difficulty: "intermediate"
  },

  {
    chapter: 6,
    verse: 32,
    sanskrit: "आत्मौपम्येन सर्वत्र समं पश्यति योऽर्जुन।\nसुखं वा यदि वा दुःखं स योगी परमो मतः।।",
    transliteration: "ātmaupamyena sarvatra samaṁ paśyati yo 'rjuna\nsukhaṁ vā yadi vā duḥkhaṁ sa yogī paramo mataḥ",

    translation: "One who sees everywhere the same, through comparison with the self—whether in pleasure or pain, O Arjuna—that yogi is considered the highest.",

    explanation: {
      simple: "The supreme yogi is one who feels others' pleasure and pain as their own. By comparing everything to their own experience, they develop true empathy—knowing that just as I want happiness and avoid suffering, so does every being.",
      deeper: "Atmaupamyena (by comparison with oneself) is the method of developing universal compassion. It's not abstract philosophy but felt empathy: 'As I feel pain, so do others; as I want happiness, so do all beings.' This makes the yogi parama (supreme)."
    },

    practicalApplication: "When you see someone suffering, remember your own suffering. When you see someone happy, connect it to your own joy. This comparison (atmaupamya) transforms intellectual unity into felt compassion. This is the highest yoga.",

    keyTerms: [
      { term: "Atmaupamya", meaning: "Comparison with oneself, seeing as one's own self" },
      { term: "Sarvatra sama", meaning: "Same everywhere" },
      { term: "Sukha-duhkha", meaning: "Pleasure and pain" },
      { term: "Parama yogi", meaning: "Supreme yogi" }
    ],

    themes: ["empathy", "universal-compassion", "highest-yoga"],
    difficulty: "intermediate",
    famousVerse: true
  },

  // -------------------------------------------------------------------------
  // SECTION 6: ARJUNA'S DOUBT - THE RESTLESS MIND (Verses 33-36)
  // How can the mind be controlled?
  // -------------------------------------------------------------------------
  {
    chapter: 6,
    verse: 33,
    sanskrit: "अर्जुन उवाच।\nयोऽयं योगस्त्वया प्रोक्तः साम्येन मधुसूदन।\nएतस्याहं न पश्यामि चञ्चलत्वात्स्थितिं स्थिराम्।।",
    transliteration: "arjuna uvāca\nyo 'yaṁ yogas tvayā proktaḥ sāmyena madhusūdana\netasyāhaṁ na paśyāmi cañcalatvāt sthitiṁ sthirām",

    translation: "Arjuna said: This yoga of equanimity that you have described, O Madhusudana—I do not see how it can be steady, because of the mind's restlessness.",

    explanation: {
      simple: "Arjuna raises the practical objection everyone feels: 'Krishna, this sounds great, but the mind is so restless! How can anyone maintain this steady equanimity you're describing?'",
      deeper: "Arjuna's doubt is honest and relatable. He's understood the teaching (yoga of sameness/equanimity) but can't see how to stabilize it given the mind's chanchala (restless) nature. This opens the door for Krishna's practical response."
    },

    practicalApplication: "Have you felt this too? The teaching is clear but the mind won't cooperate. Don't suppress this doubt—bring it forward honestly. Krishna's response will address exactly this universal struggle.",

    keyTerms: [
      { term: "Samyena", meaning: "Through equanimity/evenness" },
      { term: "Chanchalatvat", meaning: "Because of restlessness" },
      { term: "Sthiti sthira", meaning: "Steady state, stable establishment" }
    ],

    themes: ["honest-doubt", "mind-restlessness", "practical-difficulty"],
    difficulty: "beginner"
  },

  {
    chapter: 6,
    verse: 34,
    sanskrit: "चञ्चलं हि मनः कृष्ण प्रमाथि बलवद्दृढम्।\nतस्याहं निग्रहं मन्ये वायोरिव सुदुष्करम्।।",
    transliteration: "cañcalaṁ hi manaḥ kṛṣṇa pramāthi balavad dṛḍham\ntasyāhaṁ nigrahaṁ manye vāyor iva su-duṣkaram",

    translation: "For the mind is restless, O Krishna, turbulent, powerful, and obstinate. I think controlling it is as difficult as controlling the wind.",

    explanation: {
      simple: "Arjuna describes the mind's nature: restless, turbulent, strong, and stubborn. Trying to control it feels like trying to catch the wind—seemingly impossible.",
      deeper: "Four adjectives capture the mind's challenge: chanchala (restless), pramathi (turbulent/disturbing), balavat (powerful), and dridha (obstinate/firm in its wandering). The wind simile is perfect—you can't grab wind, yet somehow the yogi must master this."
    },

    practicalApplication: "Acknowledge the difficulty honestly. The mind IS like wind. This isn't pessimism but realism. From this honest starting point, genuine progress becomes possible. Pretending the mind is easy to control helps no one.",

    keyTerms: [
      { term: "Chanchala", meaning: "Restless" },
      { term: "Pramathi", meaning: "Turbulent, disturbing" },
      { term: "Balavat", meaning: "Powerful, strong" },
      { term: "Dridha", meaning: "Obstinate, firm" },
      { term: "Nigraha", meaning: "Control, restraint" },
      { term: "Vayu", meaning: "Wind" },
      { term: "Sudushkara", meaning: "Very difficult to do" }
    ],

    themes: ["mind-nature", "difficulty-of-control", "honest-assessment"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 6,
    verse: 35,
    sanskrit: "श्रीभगवानुवाच।\nअसंशयं महाबाहो मनो दुर्निग्रहं चलम्।\nअभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते।।",
    transliteration: "śrī bhagavān uvāca\nasaṁśayaṁ mahā-bāho mano durnigrahaṁ calam\nabhyāsena tu kaunteya vairāgyeṇa ca gṛhyate",

    translation: "The Blessed Lord said: Undoubtedly, O mighty-armed one, the mind is restless and hard to control. But, O son of Kunti, it is mastered through practice and dispassion.",

    explanation: {
      simple: "Krishna agrees—yes, the mind is definitely hard to control! But it CAN be mastered through two things: practice (abhyasa) and dispassion (vairagya). These two together make the impossible possible.",
      deeper: "Krishna doesn't minimize the difficulty (asamsaya—undoubtedly it's hard). But he provides the solution: abhyasa (consistent practice) and vairagya (dispassion/non-attachment). These are the same two pillars Patanjali gives in the Yoga Sutras."
    },

    practicalApplication: "The two-part solution: Keep practicing consistently (abhyasa) AND cultivate dispassion toward the mind's productions (vairagya). Practice without dispassion becomes compulsive; dispassion without practice becomes passive. Together they work.",

    keyTerms: [
      { term: "Asamsaya", meaning: "Without doubt, undoubtedly" },
      { term: "Durnigraha", meaning: "Hard to control" },
      { term: "Chala", meaning: "Restless, moving" },
      { term: "Abhyasa", meaning: "Practice, repeated effort" },
      { term: "Vairagya", meaning: "Dispassion, non-attachment" },
      { term: "Grihyate", meaning: "Is mastered, is controlled" }
    ],

    themes: ["practice-and-dispassion", "mind-control", "path-to-mastery"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 6,
    verse: 36,
    sanskrit: "असंयतात्मना योगो दुष्प्राप इति मे मतिः।\nवश्यात्मना तु यतता शक्योऽवाप्तुमुपायतः।।",
    transliteration: "asaṁyatātmanā yogo duṣprāpa iti me matiḥ\nvaśyātmanā tu yatatā śakyo 'vāptum upāyataḥ",

    translation: "In My view, yoga is hard to attain for one of uncontrolled self. But for one who strives with a controlled self, it is possible to attain through proper means.",

    explanation: {
      simple: "Krishna clarifies: yoga is indeed hard for someone who hasn't developed self-control. But for someone who makes effort with growing self-mastery, using the right methods—it's definitely achievable.",
      deeper: "The distinction is between asamyata-atma (uncontrolled self) and vashya-atma (controlled self). The former finds yoga nearly impossible; the latter, through yatana (striving) and upaya (proper means), finds it shakya (possible). Self-control is both prerequisite and path."
    },

    practicalApplication: "Start where you are. You don't need perfect self-control to begin—but you do need to be working on it. Use proper methods (upaya): guidance, systematic practice, appropriate lifestyle. Progress is possible for the sincere seeker.",

    keyTerms: [
      { term: "Asamyata-atma", meaning: "One of uncontrolled self" },
      { term: "Dushprapa", meaning: "Hard to attain" },
      { term: "Vashya-atma", meaning: "One of controlled self" },
      { term: "Yatata", meaning: "Striving, making effort" },
      { term: "Upayata", meaning: "Through proper means" },
      { term: "Shakya", meaning: "Possible" }
    ],

    themes: ["self-control", "right-means", "attainability"],
    difficulty: "intermediate"
  },

  // -------------------------------------------------------------------------
  // SECTION 7: THE FAILED YOGI (Verses 37-45)
  // What happens to one who starts but doesn't complete the path?
  // -------------------------------------------------------------------------
  {
    chapter: 6,
    verse: 37,
    sanskrit: "अर्जुन उवाच।\nअयतिः श्रद्धयोपेतो योगाच्चलितमानसः।\nअप्राप्य योगसंसिद्धिं कां गतिं कृष्ण गच्छति।।",
    transliteration: "arjuna uvāca\nayatiḥ śraddhayopeto yogāc calita-mānasaḥ\naprāpya yoga-saṁsiddhiṁ kāṁ gatiṁ kṛṣṇa gacchati",

    translation: "Arjuna said: What happens to one who has faith but lacks effort, whose mind wanders from yoga, failing to attain perfection in yoga—what path do they follow, O Krishna?",

    explanation: {
      simple: "Arjuna asks a crucial question: What happens to someone who starts the spiritual path with faith but doesn't complete it? They believed but got distracted. Where do they end up?",
      deeper: "This addresses a real fear: What if I try and fail? Shraddhaya upeta (endowed with faith) but ayati (lacking effort/discipline) and chalita-manasa (mind wandered away). Yoga-samsiddhi (perfection in yoga) wasn't reached. What then?"
    },

    practicalApplication: "Have you worried about this? Starting but not finishing? Believing but failing to practice consistently? Arjuna voices the fear that keeps many from even beginning. Krishna's answer will be reassuring.",

    keyTerms: [
      { term: "Ayati", meaning: "Without effort/discipline" },
      { term: "Shraddha", meaning: "Faith" },
      { term: "Chalita-manasa", meaning: "Mind wandered away" },
      { term: "Yoga-samsiddhi", meaning: "Perfection in yoga" },
      { term: "Gati", meaning: "Path, destination, fate" }
    ],

    themes: ["incomplete-effort", "fear-of-failure", "fate-of-seeker"],
    difficulty: "beginner"
  },

  {
    chapter: 6,
    verse: 38,
    sanskrit: "कच्चिन्नोभयविभ्रष्टश्छिन्नाभ्रमिव नश्यति।\nअप्रतिष्ठो महाबाहो विमूढो ब्रह्मणः पथि।।",
    transliteration: "kaccin nobhaya-vibhraṣṭaś chinnābhram iva naśyati\napratiṣṭho mahā-bāho vimūḍho brahmaṇaḥ pathi",

    translation: "Having fallen from both, does one not perish like a scattered cloud, without foundation, O mighty-armed one, bewildered on the path to Brahman?",

    explanation: {
      simple: "Arjuna's fear deepens: Does the failed yogi lose both worlds—the material pleasures they gave up AND the spiritual realization they didn't achieve? Like a cloud that breaks apart and vanishes?",
      deeper: "Ubhaya-vibhrashta (fallen from both) is the nightmare scenario: worldly enjoyments were renounced but liberation wasn't attained. Chinna-abhra (torn cloud) is a powerful image—a cloud that breaks off can't return to the main cloud or become rain; it just dissipates."
    },

    practicalApplication: "This fear—losing both worlds—often keeps people from commitment. They hedge bets, never fully engaging either material or spiritual life. Arjuna brings this universal anxiety to Krishna.",

    keyTerms: [
      { term: "Ubhaya-vibhrashta", meaning: "Fallen from both (paths)" },
      { term: "Chinna-abhra", meaning: "Scattered/torn cloud" },
      { term: "Apratishtha", meaning: "Without foundation" },
      { term: "Vimudha", meaning: "Bewildered, confused" },
      { term: "Brahmana pathi", meaning: "On the path to Brahman" }
    ],

    themes: ["fear-of-failure", "losing-both-worlds", "spiritual-anxiety"],
    difficulty: "intermediate"
  },

  {
    chapter: 6,
    verse: 39,
    sanskrit: "एतन्मे संशयं कृष्ण छेत्तुमर्हस्यशेषतः।\nत्वदन्यः संशयस्यास्य छेत्ता न ह्युपपद्यते।।",
    transliteration: "etan me saṁśayaṁ kṛṣṇa chettum arhasy aśeṣataḥ\ntvad anyaḥ saṁśayasyāsya chettā na hy upapadyate",

    translation: "You should completely dispel this doubt of mine, O Krishna. For no one but You can remove this doubt.",

    explanation: {
      simple: "Arjuna asks Krishna to completely clear this doubt. Only Krishna can answer this—no one else is qualified to resolve such a profound question about spiritual destiny.",
      deeper: "The trust in the teacher is total: tvad-anya chetta na upapadyate (no other remover is possible). This faith allows Arjuna to receive the answer fully. A question asked with complete trust receives a complete answer."
    },

    practicalApplication: "Some doubts require a trusted guide. This isn't about blind faith but recognizing when we've reached our own understanding's limit. The sincere question to a qualified source opens doors that struggle alone cannot.",

    keyTerms: [
      { term: "Samshaya", meaning: "Doubt" },
      { term: "Chettum", meaning: "To cut, to dispel" },
      { term: "Asheshata", meaning: "Completely, without remainder" },
      { term: "Tvad-anya", meaning: "Other than You" },
      { term: "Chetta", meaning: "Cutter, remover" }
    ],

    themes: ["seeking-guidance", "trust-in-teacher", "doubt-resolution"],
    difficulty: "beginner"
  },

  {
    chapter: 6,
    verse: 40,
    sanskrit: "श्रीभगवानुवाच।\nपार्थ नैवेह नामुत्र विनाशस्तस्य विद्यते।\nन हि कल्याणकृत्कश्चिद्दुर्गतिं तात गच्छति।।",
    transliteration: "śrī bhagavān uvāca\npārtha naiveha nāmutra vināśas tasya vidyate\nna hi kalyāṇa-kṛt kaścid durgatiṁ tāta gacchati",

    translation: "The Blessed Lord said: O Partha, neither here nor hereafter is there destruction for that one. No one who does good, My dear friend, ever comes to grief.",

    explanation: {
      simple: "Krishna's answer is immediate and reassuring: The sincere seeker never perishes—neither in this world nor the next. Anyone who does good never meets a bad end. Your spiritual effort is never lost.",
      deeper: "Na eva iha na amutra (neither here nor there)—the seeker is protected in both worlds. Kalyana-krit (doer of good) never goes to durgati (bad destination). This is the cosmic insurance policy for sincere seekers. Good effort is never wasted."
    },

    practicalApplication: "Your spiritual efforts are banked in a cosmic account that can never be lost. Even if you don't complete the journey in this life, nothing is wasted. This should give confidence to begin and persist.",

    keyTerms: [
      { term: "Iha", meaning: "Here (in this world)" },
      { term: "Amutra", meaning: "There (in the next world)" },
      { term: "Vinasha", meaning: "Destruction, loss" },
      { term: "Kalyana-krit", meaning: "Doer of good" },
      { term: "Durgati", meaning: "Bad destination, misfortune" },
      { term: "Tata", meaning: "Dear one, my child" }
    ],

    themes: ["spiritual-assurance", "no-effort-lost", "divine-protection"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 6,
    verse: 41,
    sanskrit: "प्राप्य पुण्यकृतां लोकानुषित्वा शाश्वतीः समाः।\nशुचीनां श्रीमतां गेहे योगभ्रष्टोऽभिजायते।।",
    transliteration: "prāpya puṇya-kṛtāṁ lokān uṣitvā śāśvatīḥ samāḥ\nśucīnāṁ śrīmatāṁ gehe yoga-bhraṣṭo 'bhijāyate",

    translation: "Having attained the worlds of the righteous and dwelt there for countless years, the fallen yogi is reborn in the house of the pure and prosperous.",

    explanation: {
      simple: "Here's what happens to the fallen yogi: First, they enjoy heavenly worlds for ages. Then they're reborn into a good family—pure and prosperous. They get favorable conditions to continue their spiritual journey.",
      deeper: "Punya-kritam loka (worlds of the righteous) and shashvati sama (countless years) describe heavenly enjoyment. Then rebirth in shuchi (pure) and shrimat (prosperous) family provides both moral foundation and material support for renewed spiritual effort."
    },

    practicalApplication: "If you've made spiritual effort in this life, you're setting up better conditions for future lives—even if you don't complete the journey now. This long view can relieve spiritual anxiety.",

    keyTerms: [
      { term: "Punya-kritam loka", meaning: "Worlds of the righteous" },
      { term: "Shashvati sama", meaning: "Countless years" },
      { term: "Shuchi", meaning: "Pure" },
      { term: "Shrimat", meaning: "Prosperous, fortunate" },
      { term: "Yoga-bhrashta", meaning: "Fallen yogi" },
      { term: "Abhijayate", meaning: "Is born" }
    ],

    themes: ["rebirth", "favorable-conditions", "continuity-of-effort"],
    difficulty: "intermediate"
  },

  {
    chapter: 6,
    verse: 42,
    sanskrit: "अथवा योगिनामेव कुले भवति धीमताम्।\nएतद्धि दुर्लभतरं लोके जन्म यदीदृशम्।।",
    transliteration: "athavā yoginām eva kule bhavati dhīmatām\netad dhi durlabhataraṁ loke janma yad īdṛśam",

    translation: "Or one is born into a family of wise yogis. Such a birth is very rare in this world.",

    explanation: {
      simple: "Even better than a wealthy family—some fallen yogis are reborn directly into a family of wise yogis! This is the rarest and most precious birth, giving immediate access to spiritual wisdom.",
      deeper: "Yoginam dhimatam kule (family of wise yogis) is described as durlabhatara (even more rare/valuable). Material prosperity supports practice, but being born to realized yogis means immediate spiritual immersion and guidance."
    },

    practicalApplication: "If you've found genuine spiritual teachings and are drawn to practice, consider that you may already be the beneficiary of past-life spiritual effort. Don't waste this precious opportunity.",

    keyTerms: [
      { term: "Yoginam kule", meaning: "In a family of yogis" },
      { term: "Dhimat", meaning: "Wise, intelligent" },
      { term: "Durlabhatara", meaning: "More rare, very rare" },
      { term: "Janma", meaning: "Birth" }
    ],

    themes: ["rare-birth", "spiritual-family", "precious-opportunity"],
    difficulty: "intermediate"
  },

  {
    chapter: 6,
    verse: 43,
    sanskrit: "तत्र तं बुद्धिसंयोगं लभते पौर्वदेहिकम्।\nयतते च ततो भूयः संसिद्धौ कुरुनन्दन।।",
    transliteration: "tatra taṁ buddhi-saṁyogaṁ labhate paurva-dehikam\nyatate ca tato bhūyaḥ saṁsiddhau kuru-nandana",

    translation: "There one regains the mental development of the previous body, and strives even more for perfection, O joy of the Kurus.",

    explanation: {
      simple: "In that new birth, the yogi regains the spiritual development from their previous life. Then they continue striving, with even more intensity than before. The progress continues where it left off.",
      deeper: "Buddhi-samyoga (connection with intelligence/understanding) is paurva-dehika (from the previous body)—spiritual development carries over. Then bhuyah yatate (strives even more)—there's acceleration because of the foundation already laid."
    },

    practicalApplication: "Have you felt inexplicable attraction to spiritual matters? Instant understanding of teachings? This may be paurva-dehika buddhi—wisdom carried from before. Honor these inclinations; they're not random.",

    keyTerms: [
      { term: "Buddhi-samyoga", meaning: "Connection with intelligence/understanding" },
      { term: "Paurva-dehika", meaning: "From previous body/life" },
      { term: "Bhuyah", meaning: "Even more, again" },
      { term: "Yatate", meaning: "Strives" },
      { term: "Samsiddhi", meaning: "Complete perfection" }
    ],

    themes: ["spiritual-continuity", "past-life-development", "accelerated-progress"],
    difficulty: "intermediate"
  },

  {
    chapter: 6,
    verse: 44,
    sanskrit: "पूर्वाभ्यासेन तेनैव ह्रियते ह्यवशोऽपि सः।\nजिज्ञासुरपि योगस्य शब्दब्रह्मातिवर्तते।।",
    transliteration: "pūrvābhyāsena tenaiva hriyate hy avaśo 'pi saḥ\njijñāsur api yogasya śabda-brahmātivartate",

    translation: "By that previous practice, one is carried forward even helplessly. Even one who merely inquires about yoga transcends the Vedic rituals.",

    explanation: {
      simple: "Past practice creates momentum that carries you forward even without conscious effort. And even just being curious about yoga puts you beyond mere ritualism. The pull toward truth is powerful.",
      deeper: "Purva-abhyasa (previous practice) creates such strong samskaras that one is hriyate (carried) even avasha (helplessly/automatically). Even jijnasu (one who inquires) transcends shabda-brahma (the Vedas as ritual/sound)—sincere questioning already elevates."
    },

    practicalApplication: "Trust the pull you feel toward spiritual life—it may be momentum from past practice. And don't underestimate inquiry itself. Even your questions are spiritually significant, moving you beyond mere external religion.",

    keyTerms: [
      { term: "Purva-abhyasa", meaning: "Previous practice" },
      { term: "Hriyate", meaning: "Is carried, drawn" },
      { term: "Avasha", meaning: "Helplessly, involuntarily" },
      { term: "Jijnasu", meaning: "One who inquires" },
      { term: "Shabda-brahma", meaning: "Vedas as words/rituals" },
      { term: "Ativartate", meaning: "Transcends, goes beyond" }
    ],

    themes: ["spiritual-momentum", "power-of-inquiry", "transcending-ritual"],
    difficulty: "intermediate"
  },

  {
    chapter: 6,
    verse: 45,
    sanskrit: "प्रयत्नाद्यतमानस्तु योगी संशुद्धकिल्बिषः।\nअनेकजन्मसंसिद्धस्ततो याति परां गतिम्।।",
    transliteration: "prayatnād yatamānas tu yogī saṁśuddha-kilbiṣaḥ\naneka-janma-saṁsiddhas tato yāti parāṁ gatim",

    translation: "But the yogi who strives with effort, purified of all impurities, perfected through many births, then reaches the supreme goal.",

    explanation: {
      simple: "The yogi who keeps trying, life after life, gradually purifies all impurities. After many births of progress, they finally reach the supreme destination. Persistence across lifetimes guarantees success.",
      deeper: "Prayatna (effort) + yatamana (striving) over aneka-janma (many births) leads to samsuddha-kilbisha (completely purified of impurities) and finally para gati (supreme goal). The path may be long but the destination is certain."
    },

    practicalApplication: "Take the long view. You may not complete the journey in this life, but every effort counts. The combination of persistent striving and gradual purification, continued across whatever time is needed, guarantees success.",

    keyTerms: [
      { term: "Prayatna", meaning: "Effort" },
      { term: "Yatamana", meaning: "Striving" },
      { term: "Samsuddha-kilbisha", meaning: "Purified of impurities" },
      { term: "Aneka-janma", meaning: "Many births" },
      { term: "Samsiddha", meaning: "Perfected" },
      { term: "Para gati", meaning: "Supreme goal" }
    ],

    themes: ["persistence", "gradual-purification", "certain-success"],
    difficulty: "intermediate"
  },

  // -------------------------------------------------------------------------
  // SECTION 8: THE GREATEST YOGI (Verses 46-47)
  // The highest yoga is devotion
  // -------------------------------------------------------------------------
  {
    chapter: 6,
    verse: 46,
    sanskrit: "तपस्विभ्योऽधिको योगी ज्ञानिभ्योऽपि मतोऽधिकः।\nकर्मिभ्यश्चाधिको योगी तस्माद्योगी भवार्जुन।।",
    transliteration: "tapasvibhyo 'dhiko yogī jñānibhyo 'pi mato 'dhikaḥ\nkarmibhyaś cādhiko yogī tasmād yogī bhavārjuna",

    translation: "The yogi is greater than ascetics, greater even than the learned, greater than those who perform rituals. Therefore, be a yogi, O Arjuna.",

    explanation: {
      simple: "Krishna declares: The yogi is superior to those who practice austerities, superior to scholars, superior to ritualists. So become a yogi, Arjuna! This path integrates and transcends all others.",
      deeper: "Tapasvi (ascetic), jnani (knower), karmi (ritualist)—all valid paths, but the yogi is adhika (greater) than all. Why? Because yoga integrates discipline, knowledge, and action. Krishna's conclusion: 'tasmat yogi bhava'—therefore BE a yogi."
    },

    practicalApplication: "Don't settle for just austerity (tapas), just knowledge (jnana), or just ritual (karma) alone. Become a yogi who integrates all paths. This is Krishna's direct instruction to Arjuna—and to you.",

    keyTerms: [
      { term: "Tapasvi", meaning: "Ascetic, one who practices austerity" },
      { term: "Jnani", meaning: "Knower, person of knowledge" },
      { term: "Karmi", meaning: "One who performs rituals/actions" },
      { term: "Adhika", meaning: "Greater, superior" },
      { term: "Yogi bhava", meaning: "Be a yogi" }
    ],

    themes: ["superiority-of-yoga", "integration-of-paths", "direct-instruction"],
    difficulty: "beginner"
  },

  {
    chapter: 6,
    verse: 47,
    sanskrit: "योगिनामपि सर्वेषां मद्गतेनान्तरात्मना।\nश्रद्धावान्भजते यो मां स मे युक्ततमो मतः।।",
    transliteration: "yoginām api sarveṣāṁ mad-gatenāntar-ātmanā\nśraddhāvān bhajate yo māṁ sa me yuktatamo mataḥ",

    translation: "And of all yogis, the one who worships Me with faith, with inner self absorbed in Me—that one is the most united with Me, in My view.",

    explanation: {
      simple: "Among all yogis, the greatest is the one who worships Krishna with complete faith, whose inner being is absorbed in the Divine. This devotee is considered the most connected of all.",
      deeper: "Even among yogis, there are degrees. The yuktatama (most united/connected) is the one whose antaratma (inner self) is mad-gata (gone to Me) and who bhajate (worships) with shraddha (faith). The path of devotion (bhakti) is subtly elevated here."
    },

    practicalApplication: "All practices lead to devotion. Whether you start with meditation, knowledge, or action, the culmination is love for the Divine. Let your practice deepen into genuine devotion, not just technique.",

    keyTerms: [
      { term: "Yoginam api sarvesham", meaning: "Even among all yogis" },
      { term: "Mad-gata", meaning: "Gone to Me, absorbed in Me" },
      { term: "Antaratma", meaning: "Inner self" },
      { term: "Shraddhavan", meaning: "Full of faith" },
      { term: "Bhajate", meaning: "Worships, loves, serves" },
      { term: "Yuktatama", meaning: "Most united, most connected" }
    ],

    themes: ["supreme-yoga", "devotion", "faith-and-love"],
    difficulty: "beginner",
    famousVerse: true
  }
];

// Chapter metadata
const chapter6: ChapterContent = {
  chapter: 6,
  name: {
    sanskrit: "Dhyana Yoga",
    english: "The Yoga of Meditation"
  },
  summary: "Krishna teaches the complete practice of meditation and mind control. This practical chapter covers: true renunciation (acting without attachment), the self as friend or enemy, detailed meditation instructions (posture, place, attitude), the importance of moderation in all things, the restless mind and how to master it through practice and dispassion, the fate of the failed yogi (no spiritual effort is ever lost), and culminates in the famous declaration that the greatest yogi is one who feels others' joy and sorrow as their own, and who worships with complete faith and devotion.",
  keyThemes: ["meditation", "mind-control", "self-mastery", "moderation", "practice-and-dispassion", "spiritual-continuity", "empathy", "devotion"],
  verseCount: 47,
  verses: verses
};

export default chapter6;
