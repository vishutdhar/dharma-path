// Fallback data for Bhagavad Gita when API is unavailable
// This ensures the app works offline or if the API goes down

export interface GitaChapterData {
  chapter_number: number;
  verses_count: number;
  name: string;
  name_meaning: string;
  summary: string;
}

export interface GitaVerseData {
  chapter: number;
  verse: number;
  slok: string;
  transliteration: string;
  translation: string;
}

// All 18 chapters with metadata
export const chapters: GitaChapterData[] = [
  {
    chapter_number: 1,
    verses_count: 47,
    name: "Arjuna Vishada Yoga",
    name_meaning: "Arjuna's Dilemma",
    summary: "Arjuna sees his relatives and teachers arrayed for battle and is overcome with grief and moral confusion. He drops his bow and refuses to fight, setting the stage for Krishna's teachings."
  },
  {
    chapter_number: 2,
    verses_count: 72,
    name: "Sankhya Yoga",
    name_meaning: "The Eternal Soul",
    summary: "Krishna begins his teaching with the nature of the eternal soul (Atman), explaining that the Self cannot be killed. He introduces key concepts: the immortal soul, duty without attachment, and the characteristics of a wise person."
  },
  {
    chapter_number: 3,
    verses_count: 43,
    name: "Karma Yoga",
    name_meaning: "Path of Action",
    summary: "Krishna explains Karma Yoga - the path of selfless action. He teaches that one must perform their duty without attachment to results, and that inaction is not an option for those living in the world."
  },
  {
    chapter_number: 4,
    verses_count: 42,
    name: "Jnana Karma Sanyasa Yoga",
    name_meaning: "Path of Knowledge",
    summary: "Krishna reveals his divine nature and explains how he incarnates age after age to restore dharma. He teaches about the nature of action, inaction, and the liberating power of knowledge."
  },
  {
    chapter_number: 5,
    verses_count: 29,
    name: "Karma Sanyasa Yoga",
    name_meaning: "Renunciation of Action",
    summary: "Krishna reconciles the paths of action and renunciation, showing they lead to the same goal. True renunciation is mental detachment while still performing one's duties."
  },
  {
    chapter_number: 6,
    verses_count: 47,
    name: "Dhyana Yoga",
    name_meaning: "Path of Meditation",
    summary: "Krishna describes the practice of meditation (dhyana), including posture, technique, and the state of the accomplished yogi. He addresses what happens to those who fail to complete the path."
  },
  {
    chapter_number: 7,
    verses_count: 30,
    name: "Jnana Vijnana Yoga",
    name_meaning: "Knowledge and Realization",
    summary: "Krishna reveals his higher and lower nature, explaining how the material world emanates from him. He describes four types of devotees and why the wise worship him as the Supreme."
  },
  {
    chapter_number: 8,
    verses_count: 28,
    name: "Aksara Brahma Yoga",
    name_meaning: "The Imperishable Brahman",
    summary: "Krishna explains what happens at the time of death and how one's final thoughts determine the next birth. He describes the path of light and the path of darkness."
  },
  {
    chapter_number: 9,
    verses_count: 34,
    name: "Raja Vidya Raja Guhya Yoga",
    name_meaning: "Royal Knowledge, Royal Secret",
    summary: "Krishna reveals the 'king of secrets' - how he pervades the universe while remaining transcendent. He describes his accessibility to all devotees, regardless of birth or status."
  },
  {
    chapter_number: 10,
    verses_count: 42,
    name: "Vibhuti Yoga",
    name_meaning: "Divine Manifestations",
    summary: "Krishna describes his divine manifestations (vibhutis) - the extraordinary things in the world that represent his glory. Whatever is glorious, powerful, or beautiful is a spark of his splendor."
  },
  {
    chapter_number: 11,
    verses_count: 55,
    name: "Vishvarupa Darshana Yoga",
    name_meaning: "The Universal Form",
    summary: "The climax of the Gita: Krishna grants Arjuna divine vision to see his cosmic form (Vishvarupa), containing the entire universe. Arjuna sees past, present, and future, and is terrified and awestruck."
  },
  {
    chapter_number: 12,
    verses_count: 20,
    name: "Bhakti Yoga",
    name_meaning: "Path of Devotion",
    summary: "Krishna extols the path of devotion (bhakti) as the easiest and most direct path. He describes the qualities of his dear devotees - those who are equal to friend and foe, content, and surrendered."
  },
  {
    chapter_number: 13,
    verses_count: 35,
    name: "Ksetra Ksetrajna Vibhaga Yoga",
    name_meaning: "The Field and the Knower",
    summary: "Krishna distinguishes between the body (kshetra/field) and the soul (kshetrajna/knower of the field). He describes what constitutes true knowledge and the nature of Prakriti and Purusha."
  },
  {
    chapter_number: 14,
    verses_count: 27,
    name: "Gunatraya Vibhaga Yoga",
    name_meaning: "The Three Gunas",
    summary: "Krishna explains the three gunas (qualities) of material nature: sattva (goodness), rajas (passion), and tamas (ignorance). He describes how they bind the soul and how to transcend them."
  },
  {
    chapter_number: 15,
    verses_count: 20,
    name: "Purushottama Yoga",
    name_meaning: "The Supreme Person",
    summary: "Using the metaphor of the cosmic banyan tree, Krishna describes the material world and how to cut free from it. He reveals himself as Purushottama - the Supreme Person beyond both the perishable and imperishable."
  },
  {
    chapter_number: 16,
    verses_count: 24,
    name: "Daivasura Sampad Vibhaga Yoga",
    name_meaning: "Divine and Demonic Natures",
    summary: "Krishna contrasts divine qualities (fearlessness, purity, charity) with demonic ones (pride, anger, ignorance). He warns that demonic nature leads to bondage and suffering."
  },
  {
    chapter_number: 17,
    verses_count: 28,
    name: "Sraddhatraya Vibhaga Yoga",
    name_meaning: "Three Types of Faith",
    summary: "Krishna explains how the three gunas influence faith, food, sacrifice, austerity, and charity. He introduces the sacred syllables Om Tat Sat."
  },
  {
    chapter_number: 18,
    verses_count: 78,
    name: "Moksha Sanyasa Yoga",
    name_meaning: "Liberation Through Renunciation",
    summary: "The grand conclusion. Krishna summarizes his teachings, explains the nature of true renunciation, and delivers his final instruction: surrender completely to him and be free from all sin. 'Abandon all dharmas and take refuge in me alone.'"
  }
];

// Key verses with full data (famous/important verses that are commonly referenced)
export const keyVerses: GitaVerseData[] = [
  // Chapter 2 - The Eternal Soul
  {
    chapter: 2,
    verse: 7,
    slok: "कार्पण्यदोषोपहतस्वभावः पृच्छामि त्वां धर्मसम्मूढचेताः।\nयच्छ्रेयः स्यान्निश्चितं ब्रूहि तन्मे शिष्यस्तेऽहं शाधि मां त्वां प्रपन्नम्।।",
    transliteration: "kārpaṇya-doṣopahata-svabhāvaḥ pṛcchāmi tvāṁ dharma-sammūḍha-cetāḥ\nyac chreyaḥ syān niścitaṁ brūhi tan me śiṣyas te 'haṁ śādhi māṁ tvāṁ prapannam",
    translation: "My heart is overpowered by weakness; my mind is confused about my duty. I ask you to tell me clearly what is best for me. I am your disciple. Please instruct me, for I have surrendered unto you."
  },
  {
    chapter: 2,
    verse: 14,
    slok: "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः।\nआगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत।।",
    transliteration: "mātrā-sparśās tu kaunteya śītoṣṇa-sukha-duḥkha-dāḥ\nāgamāpāyino 'nityās tāṁs titikṣasva bhārata",
    translation: "O son of Kunti, the contact of the senses with their objects gives rise to feelings of cold and heat, pleasure and pain. They are temporary, coming and going. Bear them patiently, O Bharata."
  },
  {
    chapter: 2,
    verse: 20,
    slok: "न जायते म्रियते वा कदाचिन्नायं भूत्वा भविता वा न भूयः।\nअजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे।।",
    transliteration: "na jāyate mriyate vā kadācin nāyaṁ bhūtvā bhavitā vā na bhūyaḥ\najo nityaḥ śāśvato 'yaṁ purāṇo na hanyate hanyamāne śarīre",
    translation: "The soul is never born, nor does it ever die. It has not come into being, does not come into being, and will not come into being. It is unborn, eternal, ever-existing, and primeval. It is not slain when the body is slain."
  },
  {
    chapter: 2,
    verse: 22,
    slok: "वासांसि जीर्णानि यथा विहाय नवानि गृह्णाति नरोऽपराणि।\nतथा शरीराणि विहाय जीर्णान्यन्यानि संयाति नवानि देही।।",
    transliteration: "vāsāṁsi jīrṇāni yathā vihāya navāni gṛhṇāti naro 'parāṇi\ntathā śarīrāṇi vihāya jīrṇāny anyāni saṁyāti navāni dehī",
    translation: "As a person puts on new garments, giving up old ones, the soul similarly accepts new material bodies, giving up the old and useless ones."
  },
  {
    chapter: 2,
    verse: 47,
    slok: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि।।",
    transliteration: "karmaṇy evādhikāras te mā phaleṣu kadācana\nmā karma-phala-hetur bhūr mā te saṅgo 'stv akarmaṇi",
    translation: "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty."
  },
  // Chapter 3 - Karma Yoga
  {
    chapter: 3,
    verse: 19,
    slok: "तस्मादसक्तः सततं कार्यं कर्म समाचर।\nअसक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः।।",
    transliteration: "tasmād asaktaḥ satataṁ kāryaṁ karma samācara\nasakto hy ācaran karma param āpnoti pūruṣaḥ",
    translation: "Therefore, without attachment, always perform the work that must be done; for by performing action without attachment, one attains the Supreme."
  },
  // Chapter 4 - Knowledge
  {
    chapter: 4,
    verse: 7,
    slok: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्।।",
    transliteration: "yadā yadā hi dharmasya glānir bhavati bhārata\nabhyutthānam adharmasya tadātmānaṁ sṛjāmy aham",
    translation: "Whenever there is a decline of dharma and a rise of adharma, O Bharata, then I manifest myself."
  },
  {
    chapter: 4,
    verse: 8,
    slok: "परित्राणाय साधूनां विनाशाय च दुष्कृताम्।\nधर्मसंस्थापनार्थाय सम्भवामि युगे युगे।।",
    transliteration: "paritrāṇāya sādhūnāṁ vināśāya ca duṣkṛtām\ndharma-saṁsthāpanārthāya sambhavāmi yuge yuge",
    translation: "For the protection of the good, for the destruction of the wicked, and for the establishment of dharma, I appear in every age."
  },
  // Chapter 6 - Meditation
  {
    chapter: 6,
    verse: 5,
    slok: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः।।",
    transliteration: "uddhared ātmanātmānaṁ nātmānam avasādayet\nātmaiva hy ātmano bandhur ātmaiva ripur ātmanaḥ",
    translation: "One must elevate oneself by one's own mind, not degrade oneself. The mind is the friend of the conditioned soul, and the mind is also its enemy."
  },
  // Chapter 9 - Royal Secret
  {
    chapter: 9,
    verse: 22,
    slok: "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्।।",
    transliteration: "ananyāś cintayanto māṁ ye janāḥ paryupāsate\nteṣāṁ nityābhiyuktānāṁ yoga-kṣemaṁ vahāmy aham",
    translation: "To those who worship me alone, thinking of no other, to those who are ever united with me, I secure what they lack and preserve what they have."
  },
  // Chapter 11 - Universal Form
  {
    chapter: 11,
    verse: 32,
    slok: "श्रीभगवानुवाच।\nकालोऽस्मि लोकक्षयकृत्प्रवृद्धो लोकान्समाहर्तुमिह प्रवृत्तः।।",
    transliteration: "śrī-bhagavān uvāca\nkālo 'smi loka-kṣaya-kṛt pravṛddho lokān samāhartum iha pravṛttaḥ",
    translation: "The Supreme Lord said: I am time, the great destroyer of the worlds, and I have come here to destroy all people."
  },
  // Chapter 18 - Liberation
  {
    chapter: 18,
    verse: 66,
    slok: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।\nअहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः।।",
    transliteration: "sarva-dharmān parityajya mām ekaṁ śaraṇaṁ vraja\nahaṁ tvāṁ sarva-pāpebhyo mokṣayiṣyāmi mā śucaḥ",
    translation: "Abandon all varieties of dharma and just surrender unto me. I shall deliver you from all sinful reactions. Do not fear."
  },
  {
    chapter: 18,
    verse: 78,
    slok: "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः।\nतत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम।।",
    transliteration: "yatra yogeśvaraḥ kṛṣṇo yatra pārtho dhanur-dharaḥ\ntatra śrīr vijayo bhūtir dhruvā nītir matir mama",
    translation: "Wherever there is Krishna, the lord of yoga, and wherever there is Arjuna, the archer, there will certainly be opulence, victory, extraordinary power, and morality. This is my opinion."
  }
];

// Helper to get chapter by number
export function getChapterFallback(chapterNumber: number): GitaChapterData | null {
  return chapters.find(c => c.chapter_number === chapterNumber) || null;
}

// Helper to get verse (returns null if not in our key verses)
export function getVerseFallback(chapter: number, verse: number): GitaVerseData | null {
  return keyVerses.find(v => v.chapter === chapter && v.verse === verse) || null;
}

// Get all verses for a chapter (only returns key verses we have)
export function getChapterVersesFallback(chapterNumber: number): GitaVerseData[] {
  return keyVerses.filter(v => v.chapter === chapterNumber);
}
