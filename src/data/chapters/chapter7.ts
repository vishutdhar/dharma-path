// =============================================================================
// CHAPTER 7: JNANA VIJNANA YOGA - THE YOGA OF KNOWLEDGE AND WISDOM
// =============================================================================
// Krishna reveals his divine nature and explains both theoretical knowledge
// (jnana) and realized wisdom (vijnana). He describes his two natures—lower
// (material) and higher (spiritual)—and explains why most people don't know him.
// 30 verses covering: divine nature, material/spiritual, types of seekers.
// =============================================================================

import { VerseContent, ChapterContent } from '../verseTemplate';

const verses: VerseContent[] = [
  // -------------------------------------------------------------------------
  // SECTION 1: COMPLETE KNOWLEDGE (Verses 1-3)
  // Krishna promises to reveal knowledge that leaves nothing unknown
  // -------------------------------------------------------------------------
  {
    chapter: 7,
    verse: 1,
    sanskrit: "श्रीभगवानुवाच।\nमय्यासक्तमनाः पार्थ योगं युञ्जन्मदाश्रयः।\nअसंशयं समग्रं मां यथा ज्ञास्यसि तच्छृणु।।",
    transliteration: "śrī-bhagavān uvāca\nmayy āsakta-manāḥ pārtha yogaṁ yuñjan mad-āśrayaḥ\nasaṁśayaṁ samagraṁ māṁ yathā jñāsyasi tac chṛṇu",

    translation: "The Supreme Lord said: With mind attached to Me, O Arjuna, practicing yoga and taking refuge in Me, hear how you shall know Me completely, without any doubt.",

    explanation: {
      simple: "Krishna begins by saying: 'Focus your mind on Me, practice yoga, and take shelter in Me—then you'll know Me completely, with zero doubt.' This isn't just intellectual knowledge; it's transformative understanding.",
      deeper: "Three elements are essential: attachment of mind (āsakta-manāḥ), practice (yogam yuñjan), and surrender (mad-āśrayaḥ). Knowledge without devotion and practice remains incomplete. All three must work together."
    },

    practicalApplication: "Complete understanding requires engagement, not just study. You can read about swimming forever, but you only truly know it when you're in the water. What truth are you studying that needs to become lived experience?",

    keyTerms: [
      { term: "Āsakta-manāḥ", meaning: "Mind attached/devoted" },
      { term: "Mad-āśraya", meaning: "Taking refuge in Me" },
      { term: "Samagram", meaning: "Completely, in full" }
    ],

    themes: ["devotion", "complete knowledge", "practice"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 7,
    verse: 2,
    sanskrit: "ज्ञानं तेऽहं सविज्ञानमिदं वक्ष्याम्यशेषतः।\nयज्ज्ञात्वा नेह भूयोऽन्यज्ज्ञातव्यमवशिष्यते।।",
    transliteration: "jñānaṁ te 'haṁ sa-vijñānam idaṁ vakṣyāmy aśeṣataḥ\nyaj jñātvā neha bhūyo 'nyaj jñātavyam avaśiṣyate",

    translation: "I shall teach you this knowledge along with realized wisdom, completely—knowing which, nothing more remains to be known in this world.",

    explanation: {
      simple: "Krishna promises both jnana (theoretical knowledge) and vijnana (realized wisdom). After knowing this, nothing else needs to be known. It's the ultimate education—comprehensive and complete.",
      deeper: "The distinction between jnana and vijnana is crucial. Jnana is 'knowing about'—intellectual understanding. Vijnana is 'knowing directly'—experiential realization. Both together constitute complete knowledge."
    },

    practicalApplication: "Don't stop at 'knowing about' truth. Push for direct experience. The difference between knowing a recipe and tasting food is the difference between jnana and vijnana.",

    keyTerms: [
      { term: "Jñāna", meaning: "Theoretical knowledge" },
      { term: "Vijñāna", meaning: "Realized wisdom, direct experience" },
      { term: "Aśeṣataḥ", meaning: "Completely, without remainder" }
    ],

    themes: ["knowledge vs wisdom", "completeness", "nothing more to know"],
    difficulty: "intermediate",
    famousVerse: true
  },

  {
    chapter: 7,
    verse: 3,
    sanskrit: "मनुष्याणां सहस्रेषु कश्चिद्यतति सिद्धये।\nयततामपि सिद्धानां कश्चिन्मां वेत्ति तत्त्वतः।।",
    transliteration: "manuṣyāṇāṁ sahasreṣu kaścid yatati siddhaye\nyatatām api siddhānāṁ kaścin māṁ vetti tattvataḥ",

    translation: "Among thousands of people, scarcely one strives for perfection. And among those who strive and succeed, scarcely one knows Me in truth.",

    explanation: {
      simple: "Krishna is honest: most people don't even try to understand truth. Of those who try, few succeed. Of those who succeed, very few truly know the Divine. It's rare—but not impossible.",
      deeper: "This verse is encouraging, not discouraging. Krishna is saying this knowledge IS attainable—you can be that rare one. The odds remind us how precious this opportunity is, not that we should give up."
    },

    practicalApplication: "You're already in a rare category if you're genuinely seeking. Don't take this seeking for granted. Most people never even ask the questions you're asking.",

    keyTerms: [
      { term: "Sahasreṣu", meaning: "Among thousands" },
      { term: "Siddhi", meaning: "Perfection, success" },
      { term: "Tattvataḥ", meaning: "In truth, in reality" }
    ],

    themes: ["rarity of seeking", "precious opportunity", "persistence"],
    difficulty: "beginner",
    famousVerse: true
  },

  // -------------------------------------------------------------------------
  // SECTION 2: KRISHNA'S TWO NATURES (Verses 4-12)
  // The lower (material) and higher (spiritual) aspects of divine nature
  // -------------------------------------------------------------------------
  {
    chapter: 7,
    verse: 4,
    sanskrit: "भूमिरापोऽनलो वायुः खं मनो बुद्धिरेव च।\nअहङ्कार इतीयं मे भिन्ना प्रकृतिरष्टधा।।",
    transliteration: "bhūmir āpo 'nalo vāyuḥ khaṁ mano buddhir eva ca\nahaṅkāra itīyaṁ me bhinnā prakṛtir aṣṭadhā",

    translation: "Earth, water, fire, air, space, mind, intellect, and ego—these eight comprise My separated material nature.",

    explanation: {
      simple: "Krishna lists the eight elements of His 'lower' or material nature: five physical elements (earth, water, fire, air, space) plus three subtle ones (mind, intellect, ego). The entire material world is made of these.",
      deeper: "Even mind, intellect, and ego are considered 'material' here—part of prakriti. This is radical: what we usually consider 'us' (our thoughts, intelligence, sense of self) is actually material, not our true essence."
    },

    practicalApplication: "Your thoughts, decisions, and even your sense of 'I' are part of material nature, not your deepest self. This creates space to observe these without being controlled by them.",

    keyTerms: [
      { term: "Prakriti", meaning: "Material nature" },
      { term: "Aṣṭadhā", meaning: "Eightfold" },
      { term: "Ahaṅkāra", meaning: "Ego, false identification" }
    ],

    themes: ["material nature", "eight elements", "mind as matter"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 7,
    verse: 5,
    sanskrit: "अपरेयमितस्त्वन्यां प्रकृतिं विद्धि मे पराम्।\nजीवभूतां महाबाहो ययेदं धार्यते जगत्।।",
    transliteration: "apareyam itas tv anyāṁ prakṛtiṁ viddhi me parām\njīva-bhūtāṁ mahā-bāho yayedaṁ dhāryate jagat",

    translation: "This is My lower nature. But know My higher nature, O mighty-armed—the living beings by which this entire world is sustained.",

    explanation: {
      simple: "Beyond the material eight elements is Krishna's 'higher' nature—the living souls (jiva). While matter is inert, souls are conscious. Together, matter and souls make up everything that exists.",
      deeper: "The souls (jivas) are what give life to matter. A body without a soul is just chemicals. The 'higher' nature is what animates, experiences, and gives meaning to the material world."
    },

    practicalApplication: "You are the consciousness that experiences, not the matter that is experienced. This distinction is liberating—you are not your body, thoughts, or possessions. You are the awareness behind them.",

    keyTerms: [
      { term: "Aparā", meaning: "Lower (nature)" },
      { term: "Parā", meaning: "Higher (nature)" },
      { term: "Jīva-bhūta", meaning: "Living entities, souls" }
    ],

    themes: ["higher nature", "soul vs matter", "consciousness"],
    difficulty: "intermediate",
    famousVerse: true
  },

  {
    chapter: 7,
    verse: 6,
    sanskrit: "एतद्योनीनि भूतानि सर्वाणीत्युपधारय।\nअहं कृत्स्नस्य जगतः प्रभवः प्रलयस्तथा।।",
    transliteration: "etad-yonīni bhūtāni sarvāṇīty upadhāraya\nahaṁ kṛtsnasya jagataḥ prabhavaḥ pralayas tathā",

    translation: "Know that all beings have these two natures as their source. I am the origin and dissolution of the entire universe.",

    explanation: {
      simple: "Everything that exists comes from these two natures—matter and spirit—and both come from Krishna. He is the source from which everything emerges and into which everything dissolves.",
      deeper: "This establishes Krishna as the ultimate cause. Unlike dualistic systems where matter and spirit are eternally separate, here both emerge from one divine source. Unity underlies apparent duality."
    },

    practicalApplication: "When you see apparent opposites—matter and spirit, body and soul, world and God—remember they share one source. Division is appearance; unity is deeper reality.",

    keyTerms: [
      { term: "Yoni", meaning: "Source, womb, origin" },
      { term: "Prabhava", meaning: "Origin, creation" },
      { term: "Pralaya", meaning: "Dissolution, cosmic destruction" }
    ],

    themes: ["divine source", "creation and dissolution", "unity"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 7,
    verse: 7,
    sanskrit: "मत्तः परतरं नान्यत्किञ्चिदस्ति धनञ्जय।\nमयि सर्वमिदं प्रोतं सूत्रे मणिगणा इव।।",
    transliteration: "mattaḥ parataraṁ nānyat kiñcid asti dhanañjaya\nmayi sarvam idaṁ protaṁ sūtre maṇi-gaṇā iva",

    translation: "There is nothing whatsoever higher than Me, O Arjuna. All this is strung on Me like pearls on a thread.",

    explanation: {
      simple: "Krishna declares: nothing is higher than Me. And everything—EVERYTHING—is connected to Me like pearls on a string. The string is invisible, but without it, no necklace. Without Krishna, no universe.",
      deeper: "The thread metaphor is beautiful. You see the pearls but not the thread that holds them together. Similarly, we see the world's diversity but not the divine unity that sustains it. Krishna is that invisible thread."
    },

    practicalApplication: "Look for the thread in your life—the invisible connection holding everything together. What underlying unity connects your diverse experiences? That unity is a glimpse of the Divine.",

    keyTerms: [
      { term: "Parataram", meaning: "Higher, superior" },
      { term: "Protam", meaning: "Strung, connected" },
      { term: "Sūtre maṇi-gaṇā", meaning: "Pearls on a thread" }
    ],

    themes: ["divine supremacy", "interconnection", "invisible unity"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 7,
    verse: 8,
    sanskrit: "रसोऽहमप्सु कौन्तेय प्रभास्मि शशिसूर्ययोः।\nप्रणवः सर्ववेदेषु शब्दः खे पौरुषं नृषु।।",
    transliteration: "raso 'ham apsu kaunteya prabhāsmi śaśi-sūryayoḥ\npraṇavaḥ sarva-vedeṣu śabdaḥ khe pauruṣaṁ nṛṣu",

    translation: "I am the taste in water, O son of Kunti, the light of the sun and moon, the sacred syllable Om in all the Vedas, sound in ether, and ability in humans.",

    explanation: {
      simple: "Krishna shows where to find Him: in water's refreshing taste, in sun and moonlight, in the sacred Om, in sound itself, in human capability. He's not distant—He's in the most basic experiences of life.",
      deeper: "By identifying with the essence of each thing—not water itself but its taste, not the sun but its light—Krishna points to the subtle, essential quality that makes each thing what it is. He is the 'is-ness' of everything."
    },

    practicalApplication: "Find the Divine in everyday experience. The refreshing quality of water, the warmth of sunlight, your ability to think and act—these aren't separate from the sacred. Life itself is saturated with divinity.",

    keyTerms: [
      { term: "Rasa", meaning: "Taste, essence" },
      { term: "Prabhā", meaning: "Light, radiance" },
      { term: "Praṇava", meaning: "Om, the sacred syllable" }
    ],

    themes: ["divine immanence", "everyday sacred", "essence of things"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 7,
    verse: 9,
    sanskrit: "पुण्यो गन्धः पृथिव्यां च तेजश्चास्मि विभावसौ।\nजीवनं सर्वभूतेषु तपश्चास्मि तपस्विषु।।",
    transliteration: "puṇyo gandhaḥ pṛthivyāṁ ca tejaś cāsmi vibhāvasau\njīvanaṁ sarva-bhūteṣu tapaś cāsmi tapasviṣu",

    translation: "I am the pure fragrance of the earth, the brilliance in fire, the life in all beings, and the austerity in ascetics.",

    explanation: {
      simple: "Continuing the theme: Krishna is the sweet smell of earth after rain, the brightness in fire, the vitality in all living things, and the discipline in those who practice austerity.",
      deeper: "Again, Krishna identifies with the essential quality: not earth but its fragrance, not fire but its brilliance, not organisms but life itself. He is what makes things alive, luminous, fragrant—the quality, not the quantity."
    },

    practicalApplication: "That feeling of aliveness you have right now? That's a touch of the Divine. The discipline you exercise when you choose growth over comfort? That too. The sacred isn't elsewhere—it's in your vitality and your effort.",

    keyTerms: [
      { term: "Puṇya gandha", meaning: "Pure/sacred fragrance" },
      { term: "Tejas", meaning: "Brilliance, radiance" },
      { term: "Tapas", meaning: "Austerity, disciplined effort" }
    ],

    themes: ["divine presence", "life force", "discipline as sacred"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 7,
    verse: 10,
    sanskrit: "बीजं मां सर्वभूतानां विद्धि पार्थ सनातनम्।\nबुद्धिर्बुद्धिमतामस्मि तेजस्तेजस्विनामहम्।।",
    transliteration: "bījaṁ māṁ sarva-bhūtānāṁ viddhi pārtha sanātanam\nbuddhir buddhimatām asmi tejas tejasvinām aham",

    translation: "Know Me, O Arjuna, as the eternal seed of all beings. I am the intelligence of the intelligent and the brilliance of the brilliant.",

    explanation: {
      simple: "Krishna is the seed—the origin and potential—of all life. He is what makes intelligent people intelligent, what makes brilliant people shine. The excellence in the excellent is Him.",
      deeper: "This is not abstract. When you marvel at someone's intelligence or brilliance, you're glimpsing Krishna. When you yourself have a moment of clarity or insight, that's not separate from the Divine."
    },

    practicalApplication: "The next time you're impressed by someone's wisdom or ability, recognize it as a window to the Divine. And when you have your own moments of insight—honor them as sacred, not merely 'yours.'",

    keyTerms: [
      { term: "Bīja", meaning: "Seed, origin" },
      { term: "Sanātana", meaning: "Eternal" },
      { term: "Buddhi", meaning: "Intelligence, wisdom" }
    ],

    themes: ["divine as seed", "intelligence", "brilliance"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 7,
    verse: 11,
    sanskrit: "बलं बलवतां चाहं कामरागविवर्जितम्।\nधर्माविरुद्धो भूतेषु कामोऽस्मि भरतर्षभ।।",
    transliteration: "balaṁ balavatāṁ cāhaṁ kāma-rāga-vivarjitam\ndharmāviruddho bhūteṣu kāmo 'smi bharatarṣabha",

    translation: "I am the strength of the strong, devoid of desire and attachment. I am desire in beings that is not contrary to dharma, O best of Bharatas.",

    explanation: {
      simple: "Krishna is strength without ego (strength 'devoid of desire and attachment'). And He is desire itself—but only desire that doesn't violate dharma. Even wanting things can be divine, if aligned with righteousness.",
      deeper: "This is liberating: desire isn't inherently bad. Krishna IS desire when it's dharmic. The problem isn't wanting—it's wanting wrongly. Passion aligned with righteousness is a form of the Divine."
    },

    practicalApplication: "Don't suppress desire—purify it. Ask: is what I want aligned with dharma? Righteous desire is divine energy. Selfish desire enslaves. The difference is alignment, not intensity.",

    keyTerms: [
      { term: "Bala", meaning: "Strength, power" },
      { term: "Kāma-rāga-vivarjita", meaning: "Free from desire and attachment" },
      { term: "Dharmāviruddha", meaning: "Not contrary to dharma" }
    ],

    themes: ["pure strength", "dharmic desire", "righteous passion"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 7,
    verse: 12,
    sanskrit: "ये चैव सात्त्विका भावा राजसास्तामसाश्च ये।\nमत्त एवेति तान्विद्धि न त्वहं तेषु ते मयि।।",
    transliteration: "ye caiva sāttvikā bhāvā rājasās tāmasāś ca ye\nmatta eveti tān viddhi na tv ahaṁ teṣu te mayi",

    translation: "Know that all states of being—whether of goodness, passion, or ignorance—come from Me. I am not in them, but they are in Me.",

    explanation: {
      simple: "The three gunas (sattva, rajas, tamas) all come from Krishna, but He's not limited by them. They're in Him; He's not in them. Like waves are in the ocean, but the ocean isn't confined to any wave.",
      deeper: "This resolves a paradox: if everything comes from God, doesn't that include evil? Yes, but Krishna transcends all qualities. The gunas manifest from Him, but He's the unchanging source beyond all change."
    },

    practicalApplication: "Your moods—clarity, agitation, dullness—all arise from the same source and return to it. Don't identify with any temporary state. You are the awareness in which all states appear and disappear.",

    keyTerms: [
      { term: "Sāttvika", meaning: "Of goodness, pure" },
      { term: "Rājasa", meaning: "Of passion, active" },
      { term: "Tāmasa", meaning: "Of ignorance, dull" }
    ],

    themes: ["three gunas", "transcendence", "source of all states"],
    difficulty: "intermediate",
    famousVerse: false
  },

  // -------------------------------------------------------------------------
  // SECTION 3: THE VEIL OF ILLUSION (Verses 13-19)
  // Why most people don't recognize the Divine
  // -------------------------------------------------------------------------
  {
    chapter: 7,
    verse: 13,
    sanskrit: "त्रिभिर्गुणमयैर्भावैरेभिः सर्वमिदं जगत्।\nमोहितं नाभिजानाति मामेभ्यः परमव्ययम्।।",
    transliteration: "tribhir guṇa-mayair bhāvair ebhiḥ sarvam idaṁ jagat\nmohitaṁ nābhijānāti mām ebhyaḥ param avyayam",

    translation: "Deluded by these three modes of material nature, the whole world does not recognize Me, who am above these modes and imperishable.",

    explanation: {
      simple: "The three gunas create a veil. When we're caught up in goodness, passion, or ignorance, we can't see what's beyond them—the imperishable Divine. Most people are so absorbed in these modes they miss the source.",
      deeper: "This isn't moral failing—it's the nature of how consciousness gets absorbed. Like being so caught up in a movie you forget you're in a theater. The gunas are mesmerizing, and we forget what's beyond them."
    },

    practicalApplication: "Whatever state you're in—calm, agitated, or dull—remember there's something beyond the state. The very awareness that notices your state is closer to your true nature than the state itself.",

    keyTerms: [
      { term: "Guṇamaya", meaning: "Composed of gunas" },
      { term: "Mohita", meaning: "Deluded, bewildered" },
      { term: "Avyaya", meaning: "Imperishable, unchanging" }
    ],

    themes: ["delusion", "gunas as veil", "missing the divine"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 7,
    verse: 14,
    sanskrit: "दैवी ह्येषा गुणमयी मम माया दुरत्यया।\nमामेव ये प्रपद्यन्ते मायामेतां तरन्ति ते।।",
    transliteration: "daivī hy eṣā guṇa-mayī mama māyā duratyayā\nmām eva ye prapadyante māyām etāṁ taranti te",

    translation: "This divine energy of Mine, consisting of the three modes, is very difficult to overcome. But those who surrender unto Me cross over this illusion.",

    explanation: {
      simple: "Maya (illusion) is powerful—'duratyaya' (hard to cross). Don't underestimate it. But there's a simple solution: surrender to Krishna. Those who do cross over maya like crossing a river.",
      deeper: "Note: maya is called 'divine' (daivi)—it's not evil, just concealing. And it's Krishna's own energy, which means He controls it. Surrender to Him, and His maya parts like waters for His devotee."
    },

    practicalApplication: "You can't intellectually 'figure out' your way past illusion—it's too powerful. But you can surrender. Devotion accomplishes what mere thinking cannot. Let go and let a higher power help.",

    keyTerms: [
      { term: "Daivī", meaning: "Divine" },
      { term: "Māyā", meaning: "Illusion, creative power" },
      { term: "Duratyayā", meaning: "Very difficult to overcome" }
    ],

    themes: ["maya", "surrender", "crossing over illusion"],
    difficulty: "intermediate",
    famousVerse: true
  },

  {
    chapter: 7,
    verse: 15,
    sanskrit: "न मां दुष्कृतिनो मूढाः प्रपद्यन्ते नराधमाः।\nमाययापहृतज्ञाना आसुरं भावमाश्रिताः।।",
    transliteration: "na māṁ duṣkṛtino mūḍhāḥ prapadyante narādhamāḥ\nmāyayāpahṛta-jñānā āsuraṁ bhāvam āśritāḥ",

    translation: "The evil-doers, the deluded, the lowest of humanity do not surrender to Me—their knowledge stolen by illusion, they embrace a demonic nature.",

    explanation: {
      simple: "Why don't some people surrender? Krishna lists reasons: evil actions (dushkritina), delusion (mudha), degraded values (naradhama), and knowledge obscured by maya. These lead to 'asuric' (demonic) disposition.",
      deeper: "This isn't condemnation—it's diagnosis. These aren't permanent categories of people but temporary states anyone can fall into. The door to surrender remains open; the question is whether one will walk through it."
    },

    practicalApplication: "If you find surrender difficult, examine: is there unaddressed wrongdoing? Persistent delusion? Values that need realigning? These create resistance. Address them, and surrender becomes natural.",

    keyTerms: [
      { term: "Duṣkṛti", meaning: "Evil-doer, miscreant" },
      { term: "Mūḍha", meaning: "Deluded, foolish" },
      { term: "Āsura bhāva", meaning: "Demonic nature/disposition" }
    ],

    themes: ["obstacles to surrender", "demonic nature", "maya stealing knowledge"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 7,
    verse: 16,
    sanskrit: "चतुर्विधा भजन्ते मां जनाः सुकृतिनोऽर्जुन।\nआर्तो जिज्ञासुरर्थार्थी ज्ञानी च भरतर्षभ।।",
    transliteration: "catur-vidhā bhajante māṁ janāḥ sukṛtino 'rjuna\nārto jijñāsur arthārthī jñānī ca bharatarṣabha",

    translation: "Four kinds of virtuous people worship Me, O Arjuna: the distressed, the seeker of knowledge, the seeker of wealth, and the wise.",

    explanation: {
      simple: "Four types come to God: (1) those in distress wanting relief, (2) curious seekers wanting knowledge, (3) those wanting material success, and (4) the wise who know the truth. All are 'sukritinah'—virtuous—because they turn to God.",
      deeper: "Even seeking God for material reasons is better than not seeking at all. The seeker of wealth who prays is closer to truth than the proud self-sufficient person. Any door into relationship with the Divine is valid."
    },

    practicalApplication: "Don't judge your spiritual motivation too harshly. If you came to spirituality seeking peace, success, or relief from suffering—that's fine! The important thing is you came. Motivation can mature over time.",

    keyTerms: [
      { term: "Sukṛti", meaning: "Virtuous, fortunate" },
      { term: "Ārta", meaning: "Distressed" },
      { term: "Jijñāsu", meaning: "Seeker of knowledge" },
      { term: "Arthārthī", meaning: "Seeker of wealth" }
    ],

    themes: ["four types of seekers", "valid motivations", "coming to God"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 7,
    verse: 17,
    sanskrit: "तेषां ज्ञानी नित्ययुक्त एकभक्तिर्विशिष्यते।\nप्रियो हि ज्ञानिनोऽत्यर्थमहं स च मम प्रियः।।",
    transliteration: "teṣāṁ jñānī nitya-yukta eka-bhaktir viśiṣyate\npriyo hi jñānino 'tyartham ahaṁ sa ca mama priyaḥ",

    translation: "Of these, the wise one who is ever united with Me through single-minded devotion is the best. For I am exceedingly dear to the wise, and they are dear to Me.",

    explanation: {
      simple: "Among the four, the jnani (wise one) is best—not because the others are bad, but because the wise one has single-pointed devotion (eka-bhakti) and constant connection (nitya-yukta). There's mutual love: Krishna loves them, they love Krishna.",
      deeper: "The wise don't seek God for something else—they seek God for God. This desireless love is the highest form of devotion. It's no longer transactional but relational, not 'I need' but 'I love.'"
    },

    practicalApplication: "What do you want from spirituality? Relief? Knowledge? Success? All valid. But the highest state is wanting connection itself—loving truth for its own sake, not for what it gets you.",

    keyTerms: [
      { term: "Jñānī", meaning: "The wise one" },
      { term: "Nitya-yukta", meaning: "Ever united" },
      { term: "Eka-bhakti", meaning: "Single-minded devotion" }
    ],

    themes: ["supreme devotion", "mutual love", "desireless seeking"],
    difficulty: "intermediate",
    famousVerse: true
  },

  {
    chapter: 7,
    verse: 18,
    sanskrit: "उदाराः सर्व एवैते ज्ञानी त्वात्मैव मे मतम्।\nआस्थितः स हि युक्तात्मा मामेवानुत्तमां गतिम्।।",
    transliteration: "udārāḥ sarva evaite jñānī tv ātmaiva me matam\nāsthitaḥ sa hi yuktātmā mām evānuttamāṁ gatim",

    translation: "All these are noble, but the wise one I consider as My very Self. For, with mind steadfast, they are established in Me alone as the supreme goal.",

    explanation: {
      simple: "All four types of seekers are noble (udara). But the wise one is so close to Krishna that Krishna considers them His own Self. They don't just seek Krishna—they're established in Krishna as their only goal.",
      deeper: "The phrase 'atmaiva me matam' (I consider as My Self) shows the ultimate intimacy. The distinction between devotee and Divine dissolves. This is non-dual realization expressed through devotion."
    },

    practicalApplication: "The path goes from seeking help, to seeking knowledge, to seeking success, to seeking the Divine itself. Where are you on this journey? All positions are noble; the direction is what matters.",

    keyTerms: [
      { term: "Udāra", meaning: "Noble, magnanimous" },
      { term: "Ātmaiva", meaning: "My very Self" },
      { term: "Anuttama gati", meaning: "Supreme goal" }
    ],

    themes: ["all seekers are noble", "ultimate identification", "supreme goal"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 7,
    verse: 19,
    sanskrit: "बहूनां जन्मनामन्ते ज्ञानवान्मां प्रपद्यते।\nवासुदेवः सर्वमिति स महात्मा सुदुर्लभः।।",
    transliteration: "bahūnāṁ janmanām ante jñānavān māṁ prapadyate\nvāsudevaḥ sarvam iti sa mahātmā su-durlabhaḥ",

    translation: "After many births, one who has true knowledge surrenders unto Me, knowing 'Vasudeva is everything.' Such a great soul is very rare.",

    explanation: {
      simple: "It takes many lifetimes to reach the realization: 'Everything is Vasudeva (Krishna).' When someone truly knows this—not just believes but KNOWS—they surrender completely. Such people are extremely rare.",
      deeper: "The phrase 'Vasudevah sarvam' (Vasudeva is all) is one of the Gita's most important declarations. Not 'Vasudeva is important' or 'Vasudeva created everything' but 'Vasudeva IS everything.' Total non-duality."
    },

    practicalApplication: "This realization may take lifetimes, but every step counts. Even glimpsing that 'all is One' changes you. You don't have to complete the journey today—just take the next step.",

    keyTerms: [
      { term: "Bahūnāṁ janmanām", meaning: "After many births" },
      { term: "Vāsudevaḥ sarvam", meaning: "Vasudeva (Krishna) is everything" },
      { term: "Su-durlabha", meaning: "Very rare" }
    ],

    themes: ["many lifetimes", "everything is divine", "rare realization"],
    difficulty: "intermediate",
    famousVerse: true
  },

  // -------------------------------------------------------------------------
  // SECTION 4: WORSHIP OF OTHER GODS (Verses 20-23)
  // Why people worship demigods and the results they get
  // -------------------------------------------------------------------------
  {
    chapter: 7,
    verse: 20,
    sanskrit: "कामैस्तैस्तैर्हृतज्ञानाः प्रपद्यन्तेऽन्यदेवताः।\nतं तं नियममास्थाय प्रकृत्या नियताः स्वया।।",
    transliteration: "kāmais tais tair hṛta-jñānāḥ prapadyante 'nya-devatāḥ\ntaṁ taṁ niyamam āsthāya prakṛtyā niyatāḥ svayā",

    translation: "Those whose knowledge is stolen by various desires surrender to other gods, following different rules and rituals according to their own nature.",

    explanation: {
      simple: "People worship various gods because specific desires drive them—wanting a child, wealth, success in war. Their particular nature (prakriti) pulls them toward deities who specialize in granting those desires.",
      deeper: "This isn't condemning deity worship—it's explaining why it happens. Desires fragment attention; people seek the divine specialist for their particular need rather than the unified source of all."
    },

    practicalApplication: "Notice how desires shape your spirituality. Do you go to different 'sources' for different needs? While not wrong, recognize this as fragmented seeking. Integration comes from recognizing one source behind all.",

    keyTerms: [
      { term: "Hṛta-jñānā", meaning: "Knowledge stolen/distracted" },
      { term: "Anya-devatā", meaning: "Other gods, demigods" },
      { term: "Prakriti", meaning: "One's own nature" }
    ],

    themes: ["desire-driven worship", "fragmented seeking", "nature shaping practice"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 7,
    verse: 21,
    sanskrit: "यो यो यां यां तनुं भक्तः श्रद्धयार्चितुमिच्छति।\nतस्य तस्याचलां श्रद्धां तामेव विदधाम्यहम्।।",
    transliteration: "yo yo yāṁ yāṁ tanuṁ bhaktaḥ śraddhayārcitum icchati\ntasya tasyācalāṁ śraddhāṁ tām eva vidadhāmy aham",

    translation: "Whatever form a devotee wishes to worship with faith, I make that faith steady.",

    explanation: {
      simple: "Krishna doesn't block people from worshipping other forms. Whatever deity someone approaches with faith, Krishna stabilizes that faith. He supports genuine devotion wherever it's directed.",
      deeper: "This is remarkably inclusive. Krishna, rather than demanding exclusive worship, strengthens faith wherever it's found. He's the power behind all worship, even worship that doesn't name Him directly."
    },

    practicalApplication: "Sincere faith matters more than perfect theology. If someone worships with genuine devotion, that devotion is being received and supported by the ultimate Divine, even if their concept is limited.",

    keyTerms: [
      { term: "Tanu", meaning: "Form, body" },
      { term: "Śraddhā", meaning: "Faith" },
      { term: "Acalā", meaning: "Steady, unwavering" }
    ],

    themes: ["inclusive divinity", "faith supported", "divine presence in all worship"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 7,
    verse: 22,
    sanskrit: "स तया श्रद्धया युक्तस्तस्याराधनमीहते।\nलभते च ततः कामान्मयैव विहितान्हि तान्।।",
    transliteration: "sa tayā śraddhayā yuktas tasyārādhanam īhate\nlabhate ca tataḥ kāmān mayaiva vihitān hi tān",

    translation: "Endowed with that faith, they worship that deity and obtain their desires—but those desires are actually granted by Me alone.",

    explanation: {
      simple: "With faith, people worship their chosen deity and get what they want. But here's the key: those blessings actually come from Krishna, working through that deity. He's the real power behind all divine response.",
      deeper: "The demigods are like department heads; Krishna is the CEO. When an employee gets a bonus from their department, it ultimately comes from the company. No deity grants anything independent of Krishna's will."
    },

    practicalApplication: "Whatever spiritual practice works for you, recognize the ultimate source behind it. The blessing you receive through any path comes from the same divine origin. Honor your path while recognizing its source.",

    keyTerms: [
      { term: "Ārādhana", meaning: "Worship, propitiation" },
      { term: "Kāma", meaning: "Desires" },
      { term: "Vihita", meaning: "Ordained, granted" }
    ],

    themes: ["ultimate source", "blessings through intermediaries", "one power behind all"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 7,
    verse: 23,
    sanskrit: "अन्तवत्तु फलं तेषां तद्भवत्यल्पमेधसाम्।\nदेवान्देवयजो यान्ति मद्भक्ता यान्ति मामपि।।",
    transliteration: "antavat tu phalaṁ teṣāṁ tad bhavaty alpa-medhasām\ndevān deva-yajo yānti mad-bhaktā yānti mām api",

    translation: "But the fruit gained by these people of small intelligence is temporary. Worshippers of the gods go to the gods; My devotees come to Me.",

    explanation: {
      simple: "The results of worshipping lesser gods are temporary—wealth, power, even heaven have an end. Those who worship devas go to devas; those who worship Krishna go to Krishna. The destination matches the devotion.",
      deeper: "This isn't snobbery—it's physics of spirituality. You go where your attention is. Limited goals give limited results. Only infinite devotion to the infinite yields infinite result."
    },

    practicalApplication: "What are you aiming for? Temporary relief? Lasting transformation? The level of your aspiration determines the level of your result. Aim high—not out of greed, but out of recognition of your true potential.",

    keyTerms: [
      { term: "Antavat", meaning: "Temporary, having an end" },
      { term: "Alpa-medhasa", meaning: "Of small intelligence" },
      { term: "Deva-yaja", meaning: "Worshipper of gods" }
    ],

    themes: ["temporary vs eternal", "destination matches aspiration", "limited vs unlimited"],
    difficulty: "intermediate",
    famousVerse: true
  },

  // -------------------------------------------------------------------------
  // SECTION 5: THE UNMANIFEST MADE MANIFEST (Verses 24-30)
  // Why people don't recognize Krishna and who does
  // -------------------------------------------------------------------------
  {
    chapter: 7,
    verse: 24,
    sanskrit: "अव्यक्तं व्यक्तिमापन्नं मन्यन्ते मामबुद्धयः।\nपरं भावमजानन्तो ममाव्ययमनुत्तमम्।।",
    transliteration: "avyaktaṁ vyaktim āpannaṁ manyante mām abuddhayaḥ\nparaṁ bhāvam ajānanto mamāvyayam anuttamam",

    translation: "The unintelligent think I was unmanifest before and have now become manifest. They do not know My higher nature—imperishable and supreme.",

    explanation: {
      simple: "Some people think Krishna is just a human who attained divinity, or a temporary incarnation of something formless. They miss that His supreme nature is eternal and unchanging—He didn't become divine; He always was.",
      deeper: "This addresses a common misunderstanding: that the formless is 'higher' than form, or that God 'becomes' human temporarily. Krishna's form is not less than His formless nature—it's the complete expression of divinity."
    },

    practicalApplication: "Don't assume the invisible is more real than the visible, or that abstract truth is higher than embodied truth. Divinity can be fully present in form. The teacher in front of you might be the teaching itself.",

    keyTerms: [
      { term: "Avyakta", meaning: "Unmanifest" },
      { term: "Vyakti", meaning: "Manifest form" },
      { term: "Para bhāva", meaning: "Supreme nature" }
    ],

    themes: ["form and formless", "eternal nature", "misconception"],
    difficulty: "advanced",
    famousVerse: false
  },

  {
    chapter: 7,
    verse: 25,
    sanskrit: "नाहं प्रकाशः सर्वस्य योगमायासमावृतः।\nमूढोऽयं नाभिजानाति लोको मामजमव्ययम्।।",
    transliteration: "nāhaṁ prakāśaḥ sarvasya yoga-māyā-samāvṛtaḥ\nmūḍho 'yaṁ nābhijānāti loko mām ajam avyayam",

    translation: "I am not revealed to everyone, being veiled by My divine creative power. This deluded world does not know Me, the unborn and imperishable.",

    explanation: {
      simple: "Krishna is hidden by His own yoga-maya (divine creative power). He doesn't reveal Himself to everyone. That's why the world, under delusion, doesn't recognize Him as the eternal, unborn reality.",
      deeper: "Yoga-maya is not deception but selective revelation. Krishna chooses when and to whom to be known. This makes genuine spiritual recognition a gift, not an achievement—grace, not accomplishment."
    },

    practicalApplication: "If you've had glimpses of truth, recognize them as grace, not entitlement. The Divine reveals itself when conditions are right. Your job is to be receptive, not to demand revelation.",

    keyTerms: [
      { term: "Yoga-māyā", meaning: "Divine creative/concealing power" },
      { term: "Aja", meaning: "Unborn" },
      { term: "Prakāśa", meaning: "Manifest, revealed" }
    ],

    themes: ["divine concealment", "grace of revelation", "veiled divinity"],
    difficulty: "advanced",
    famousVerse: false
  },

  {
    chapter: 7,
    verse: 26,
    sanskrit: "वेदाहं समतीतानि वर्तमानानि चार्जुन।\nभविष्याणि च भूतानि मां तु वेद न कश्चन।।",
    transliteration: "vedāhaṁ samatītāni vartamānāni cārjuna\nbhaviṣyāṇi ca bhūtāni māṁ tu veda na kaścana",

    translation: "I know all beings—past, present, and future, O Arjuna—but no one knows Me.",

    explanation: {
      simple: "Krishna knows every being across all time—past, present, future. But almost no one truly knows Him. The knowledge is asymmetric: He knows all; all don't know Him.",
      deeper: "This establishes Krishna's omniscience while acknowledging the rarity of knowing Him. God knows you completely; your knowing God is the work of spiritual life. The relationship is inherently asymmetric."
    },

    practicalApplication: "You are completely known by the Divine—every thought, every struggle, every aspiration. Nothing is hidden. This can be scary or comforting, depending on how you relate to it. Let it be comforting.",

    keyTerms: [
      { term: "Samatītāni", meaning: "Past (beings)" },
      { term: "Vartamānāni", meaning: "Present (beings)" },
      { term: "Bhaviṣyāṇi", meaning: "Future (beings)" }
    ],

    themes: ["divine omniscience", "being known", "asymmetric knowledge"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 7,
    verse: 27,
    sanskrit: "इच्छाद्वेषसमुत्थेन द्वन्द्वमोहेन भारत।\nसर्वभूतानि सम्मोहं सर्गे यान्ति परन्तप।।",
    transliteration: "icchā-dveṣa-samutthena dvandva-mohena bhārata\nsarva-bhūtāni sammohaṁ sarge yānti parantapa",

    translation: "O Bharata, by the delusion of opposites arising from desire and aversion, all beings fall into confusion at birth.",

    explanation: {
      simple: "From the moment of birth, beings are caught in the delusion of opposites: like/dislike, pleasure/pain, attraction/aversion. This 'dvandva-moha' (delusion of duality) is why we don't perceive the unified Divine.",
      deeper: "The root is desire (iccha) and aversion (dvesha). These create the mental habit of dividing reality into wanted and unwanted, loved and hated. This fragmentation obscures the wholeness of truth."
    },

    practicalApplication: "Notice how quickly your mind labels experiences as 'good' or 'bad,' 'wanted' or 'unwanted.' This automatic sorting is the very mechanism that obscures deeper reality. Can you observe before labeling?",

    keyTerms: [
      { term: "Icchā", meaning: "Desire" },
      { term: "Dveṣa", meaning: "Aversion, hatred" },
      { term: "Dvandva-moha", meaning: "Delusion of duality/opposites" }
    ],

    themes: ["duality delusion", "desire and aversion", "born into confusion"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 7,
    verse: 28,
    sanskrit: "येषां त्वन्तगतं पापं जनानां पुण्यकर्मणाम्।\nते द्वन्द्वमोहनिर्मुक्ता भजन्ते मां दृढव्रताः।।",
    transliteration: "yeṣāṁ tv anta-gataṁ pāpaṁ janānāṁ puṇya-karmaṇām\nte dvandva-moha-nirmuktā bhajante māṁ dṛḍha-vratāḥ",

    translation: "But those whose sins have ended, who perform virtuous deeds, who are freed from the delusion of duality—they worship Me with firm resolve.",

    explanation: {
      simple: "When negative karma has been exhausted through virtuous action, and the delusion of duality fades, people worship Krishna with unwavering commitment (dridha-vrata). Purity of action leads to clarity of vision.",
      deeper: "This shows the connection between ethics and enlightenment. It's not that 'good people' are rewarded; it's that virtuous action purifies the mind, making it capable of seeing beyond duality."
    },

    practicalApplication: "Your ethical choices affect your spiritual perception. Virtuous living isn't just morally right—it clears the lens through which you see reality. Bad actions cloud vision; good actions clarify it.",

    keyTerms: [
      { term: "Anta-gata pāpa", meaning: "Sins having ended" },
      { term: "Puṇya-karma", meaning: "Virtuous deeds" },
      { term: "Dṛḍha-vrata", meaning: "Firm resolve, steady vow" }
    ],

    themes: ["purity enables vision", "ethics and enlightenment", "firm devotion"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 7,
    verse: 29,
    sanskrit: "जरामरणमोक्षाय मामाश्रित्य यतन्ति ये।\nते ब्रह्म तद्विदुः कृत्स्नमध्यात्मं कर्म चाखिलम्।।",
    transliteration: "jarā-maraṇa-mokṣāya mām āśritya yatanti ye\nte brahma tad viduḥ kṛtsnam adhyātmaṁ karma cākhilam",

    translation: "Those who strive for liberation from old age and death, taking refuge in Me, know Brahman completely, the Self, and all about karma.",

    explanation: {
      simple: "Those who take shelter in Krishna to escape old age and death come to know everything: Brahman (ultimate reality), adhyatma (the Self), and karma (action and its laws). Complete refuge yields complete knowledge.",
      deeper: "The motivation (freedom from death) is natural and valid. Through taking refuge, comprehensive understanding dawns—not as academic learning but as direct knowing. Devotion becomes the doorway to jnana."
    },

    practicalApplication: "Wanting to transcend mortality is a legitimate spiritual motivation. You don't have to pretend you're not afraid of death. That very fear, when it drives you toward the Divine, leads to liberation.",

    keyTerms: [
      { term: "Jarā-maraṇa", meaning: "Old age and death" },
      { term: "Mokṣa", meaning: "Liberation" },
      { term: "Adhyātma", meaning: "The Self, spiritual nature" }
    ],

    themes: ["liberation motivation", "complete knowledge", "refuge leads to knowing"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 7,
    verse: 30,
    sanskrit: "साधिभूताधिदैवं मां साधियज्ञं च ये विदुः।\nप्रयाणकालेऽपि च मां ते विदुर्युक्तचेतसः।।",
    transliteration: "sādhibhūtādhidaivaṁ māṁ sādhiyajñaṁ ca ye viduḥ\nprayāṇa-kāle 'pi ca māṁ te vidur yukta-cetasaḥ",

    translation: "Those who know Me as governing material existence, the gods, and all sacrifice—they, with minds absorbed in Me, know Me even at the time of death.",

    explanation: {
      simple: "Those who understand Krishna as the reality behind the physical world (adhibhuta), the divine realm (adhidaiva), and all sacrifice (adhiyajna) maintain that knowing even at death. Their connection isn't broken by dying.",
      deeper: "This verse points forward to Chapter 8's topic: what happens at death. The mind's object at death determines the next destination. Those absorbed in Krishna go to Krishna—even the final moment doesn't sever the connection."
    },

    practicalApplication: "What occupies your mind most? That's likely what will occupy it at death. Cultivate awareness of the Divine now, so that when the final moment comes, that awareness is natural, not forced.",

    keyTerms: [
      { term: "Adhibhūta", meaning: "Governing physical existence" },
      { term: "Adhidaiva", meaning: "Governing the gods/cosmic powers" },
      { term: "Adhiyajña", meaning: "Governing sacrifice" },
      { term: "Prayāṇa-kāla", meaning: "Time of death, departure" }
    ],

    themes: ["comprehensive knowing", "death", "continuous awareness"],
    difficulty: "advanced",
    famousVerse: false
  }
];

const chapter7: ChapterContent = {
  chapter: 7,
  name: {
    sanskrit: "Jnana Vijnana Yoga",
    english: "The Yoga of Knowledge and Wisdom"
  },
  summary: "Krishna reveals his complete divine nature, explaining both theoretical knowledge (jnana) and experiential wisdom (vijnana). He describes his two energies—the lower material nature of eight elements and the higher spiritual nature of living beings. He explains why most people, deluded by the three gunas, don't recognize him, and describes the four types of people who do turn to him. He clarifies the relationship between worship of demigods and worship of the Supreme, showing that all divine response ultimately comes from one source.",
  keyThemes: ["knowledge", "realized wisdom", "divine nature", "maya", "seekers"],
  verseCount: 30,
  verses
};

export default chapter7;
