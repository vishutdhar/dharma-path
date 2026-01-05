import { VerseContent, ChapterContent } from '../verseTemplate';

const verses: VerseContent[] = [
  {
    chapter: 16,
    verse: 1,
    sanskrit: "श्रीभगवानुवाच। अभयं सत्त्वसंशुद्धिर्ज्ञानयोगव्यवस्थितिः। दानं दमश्च यज्ञश्च स्वाध्यायस्तप आर्जवम्॥",
    transliteration: "śrī-bhagavān uvāca abhayaṁ sattva-saṁśuddhir jñāna-yoga-vyavasthitiḥ dānaṁ damaś ca yajñaś ca svādhyāyas tapa ārjavam",
    translation: "The Blessed Lord said: Fearlessness, purity of mind, steadfastness in knowledge-yoga, charity, self-control, sacrifice, study of scriptures, austerity, uprightness—",
    explanation: {
      simple: "Krishna begins listing divine qualities: fearlessness, mental purity, steady commitment to wisdom, generosity, self-control, performing sacred duties, studying scriptures, discipline, and honesty.",
      deeper: "The divine qualities (daivi sampada) begin: (1) abhaya—fearlessness (rooted in faith), (2) sattva-saṁśuddhi—purity of being/mind, (3) jñāna-yoga-vyavasthiti—firm establishment in the yoga of knowledge, (4) dāna—charity, (5) dama—self-control (of senses), (6) yajña—sacrifice/worship, (7) svādhyāya—scriptural study, (8) tapas—austerity, (9) ārjava—straightforwardness. These qualities characterize one destined for liberation."
    },
    practicalApplication: "Use this as a spiritual inventory. Rate yourself on each quality. Fearlessness: do you live from fear or trust? Generosity: do you give freely? Self-control: can you resist impulses? Identify your strongest and weakest areas.",
    keyTerms: [
      { term: "abhayam", meaning: "fearlessness" },
      { term: "sattva-saṁśuddhiḥ", meaning: "purity of mind" },
      { term: "dānam", meaning: "charity" },
      { term: "tapas", meaning: "austerity" }
    ],
    themes: ["divine qualities", "character development", "spiritual inventory"],
    difficulty: "beginner",
    famousVerse: true
  },
  {
    chapter: 16,
    verse: 2,
    sanskrit: "अहिंसा सत्यमक्रोधस्त्यागः शान्तिरपैशुनम्। दया भूतेष्वलोलुप्त्वं मार्दवं ह्रीरचापलम्॥",
    transliteration: "ahiṁsā satyam akrodhas tyāgaḥ śāntir apaiśunam dayā bhūteṣv aloluptvaṁ mārdavaṁ hrīr acāpalam",
    translation: "Non-violence, truthfulness, freedom from anger, renunciation, tranquility, aversion to fault-finding, compassion for beings, freedom from covetousness, gentleness, modesty, absence of fickleness—",
    explanation: {
      simple: "More divine qualities: non-violence, truth, freedom from anger, renunciation, peace, not criticizing others, compassion for all creatures, absence of greed, gentleness, modesty, and steadiness (not being flighty).",
      deeper: "Continuing the list: (10) ahiṁsā—non-violence, (11) satya—truth, (12) akrodha—freedom from anger, (13) tyāga—renunciation, (14) śānti—tranquility, (15) apaiśuna—not slandering/fault-finding, (16) dayā bhūteṣu—compassion for all beings, (17) aloluptva—freedom from greed, (18) mārdava—gentleness, (19) hrī—modesty/shame at wrongdoing, (20) acāpala—steadiness, not fickle."
    },
    practicalApplication: "Notice: both inner qualities (freedom from anger) and outer conduct (non-violence) matter. Modesty (hrī) means appropriate shame when you act wrongly—not suppression but healthy conscience. Acāpala (steadiness) counters the restless seeking of novelty.",
    keyTerms: [
      { term: "ahiṁsā", meaning: "non-violence" },
      { term: "satyam", meaning: "truthfulness" },
      { term: "akrodhaḥ", meaning: "freedom from anger" },
      { term: "dayā", meaning: "compassion" }
    ],
    themes: ["ethical conduct", "inner and outer qualities", "compassion"],
    difficulty: "beginner"
  },
  {
    chapter: 16,
    verse: 3,
    sanskrit: "तेजः क्षमा धृतिः शौचमद्रोहो नातिमानिता। भवन्ति सम्पदं दैवीमभिजातस्य भारत॥",
    transliteration: "tejaḥ kṣamā dhṛtiḥ śaucam adroho nātimānitā bhavanti sampadaṁ daivīm abhijātasya bhārata",
    translation: "Vigor, forgiveness, fortitude, purity, freedom from malice, absence of excessive pride—these belong to one born with divine endowment, O Bharata.",
    explanation: {
      simple: "Final divine qualities: vigor (spiritual energy), forgiveness, endurance, purity, absence of hatred, and freedom from excessive pride. These 26 qualities characterize one born with divine nature.",
      deeper: "Completing the list: (21) tejas—vigor, spiritual energy, (22) kṣamā—forgiveness, (23) dhṛti—fortitude/patience, (24) śauca—purity (external and internal), (25) adroha—freedom from malice/treachery, (26) na atimānitā—absence of excessive pride. 'Sampada daivī abhijātasya'—these are the divine endowment of one born for liberation."
    },
    practicalApplication: "These 26 qualities describe the character that naturally moves toward liberation. They're not just rules but the natural expression of a purified heart. Cultivate them not through strain but through understanding their value.",
    keyTerms: [
      { term: "tejaḥ", meaning: "vigor, energy" },
      { term: "kṣamā", meaning: "forgiveness" },
      { term: "dhṛtiḥ", meaning: "fortitude" },
      { term: "sampadaṁ daivīm", meaning: "divine endowment" }
    ],
    themes: ["divine nature complete", "character for liberation", "spiritual vigor"],
    difficulty: "beginner"
  },
  {
    chapter: 16,
    verse: 4,
    sanskrit: "दम्भो दर्पोऽभिमानश्च क्रोधः पारुष्यमेव च। अज्ञानं चाभिजातस्य पार्थ सम्पदमासुरीम्॥",
    transliteration: "dambho darpo 'bhimānaś ca krodhaḥ pāruṣyam eva ca ajñānaṁ cābhijātasya pārtha sampadam āsurīm",
    translation: "Hypocrisy, arrogance, excessive pride, anger, harshness, and ignorance—these belong to one born with demonic endowment, O Partha.",
    explanation: {
      simple: "Now the demonic qualities: hypocrisy (pretending virtue), arrogance, inflated pride, anger, cruel speech, and ignorance. These characterize one born with demonic nature.",
      deeper: "The demonic qualities (asuri sampada): (1) dambha—hypocrisy, pretense of virtue, (2) darpa—arrogance, (3) abhimāna—excessive self-conceit, (4) krodha—anger, (5) pāruṣya—harshness in speech, (6) ajñāna—ignorance (willful blindness to truth). These are 'sampadam āsurīm'—the demonic endowment. Note: not external demons, but internal tendencies."
    },
    practicalApplication: "Examine yourself honestly: Do you pretend to be better than you are? Do you feel superior? Do you speak harshly? These tendencies exist in all of us—recognizing them is the first step to transformation.",
    keyTerms: [
      { term: "dambhaḥ", meaning: "hypocrisy" },
      { term: "darpaḥ", meaning: "arrogance" },
      { term: "krodhaḥ", meaning: "anger" },
      { term: "sampadam āsurīm", meaning: "demonic endowment" }
    ],
    themes: ["demonic qualities", "self-examination", "inner demons"],
    difficulty: "beginner",
    famousVerse: true
  },
  {
    chapter: 16,
    verse: 5,
    sanskrit: "दैवी सम्पद्विमोक्षाय निबन्धायासुरी मता। मा शुचः सम्पदं दैवीमभिजातोऽसि पाण्डव॥",
    transliteration: "daivī sampad vimokṣāya nibandhāyāsurī matā mā śucaḥ sampadaṁ daivīm abhijāto 'si pāṇḍava",
    translation: "The divine endowment is deemed for liberation; the demonic for bondage. Grieve not, O Pandava; you are born with divine endowment.",
    explanation: {
      simple: "Divine qualities lead to liberation; demonic qualities lead to bondage. Krishna reassures Arjuna: don't worry—you were born with divine nature. This is encouragement for the sincere seeker.",
      deeper: "'Daivī sampad vimokṣāya'—divine endowment for liberation. 'Nibandhāya āsurī matā'—demonic considered for bondage. The stakes are clear: character determines destiny. 'Mā śucaḥ'—don't grieve. 'Daivīm sampadam abhijātaḥ asi'—you are born with divine endowment. Anyone sincerely studying this teaching likely has divine tendencies."
    },
    practicalApplication: "If you're drawn to spiritual teachings and self-improvement, you have divine tendencies. Don't obsess over your flaws—the very fact that you care about growth is a sign of daivi sampada. Build on your strengths.",
    keyTerms: [
      { term: "vimokṣāya", meaning: "for liberation" },
      { term: "nibandhāya", meaning: "for bondage" },
      { term: "mā śucaḥ", meaning: "grieve not" },
      { term: "abhijātaḥ", meaning: "born with" }
    ],
    themes: ["character and destiny", "encouragement", "path to liberation"],
    difficulty: "beginner"
  },
  {
    chapter: 16,
    verse: 6,
    sanskrit: "द्वौ भूतसर्गौ लोकेऽस्मिन्दैव आसुर एव च। दैवो विस्तरशः प्रोक्त आसुरं पार्थ मे श्रृणु॥",
    transliteration: "dvau bhūta-sargau loke 'smin daiva āsura eva ca daivo vistaraśaḥ prokta āsuraṁ pārtha me śṛṇu",
    translation: "There are two types of created beings in this world—the divine and the demonic. The divine has been described at length; hear from Me about the demonic, O Partha.",
    explanation: {
      simple: "There are two types of beings in this world: divine-natured and demon-natured. The divine nature has been described; now Krishna will explain the demonic in detail.",
      deeper: "'Dvau bhūta-sargau'—two types of created beings. This is psychological/ethical classification, not species. Divine nature was described in three verses; demonic nature will be described at length—perhaps because we need more help recognizing and avoiding it. 'Āsuram me śṛṇu'—hear about the demonic from Me."
    },
    practicalApplication: "The detailed description of demonic nature that follows isn't about judging others but about self-examination. Krishna describes these tendencies at length so we can recognize them in ourselves.",
    keyTerms: [
      { term: "bhūta-sargau", meaning: "types of created beings" },
      { term: "daivaḥ", meaning: "divine" },
      { term: "āsuraḥ", meaning: "demonic" },
      { term: "vistaraśaḥ", meaning: "at length" }
    ],
    themes: ["two types", "detailed description coming", "self-knowledge"],
    difficulty: "beginner"
  },
  {
    chapter: 16,
    verse: 7,
    sanskrit: "प्रवृत्तिं च निवृत्तिं च जना न विदुरासुराः। न शौचं नापि चाचारो न सत्यं तेषु विद्यते॥",
    transliteration: "pravṛttiṁ ca nivṛttiṁ ca janā na vidur āsurāḥ na śaucaṁ nāpi cācāro na satyaṁ teṣu vidyate",
    translation: "The demonic know not what to do and what to refrain from; neither purity, nor right conduct, nor truth is found in them.",
    explanation: {
      simple: "Demonic-natured people don't know right action from wrong action. They lack purity, proper conduct, and truthfulness. They've lost their moral compass.",
      deeper: "'Pravṛttim ca nivṛttim ca na viduḥ'—they don't know activity (what to do) and abstinence (what to avoid). This fundamental confusion marks the demonic. 'Na śaucam'—no purity. 'Na ācāraḥ'—no right conduct. 'Na satyam'—no truth. Three absences: cleanliness, behavior, honesty. Without these, ethical life is impossible."
    },
    practicalApplication: "The demonic state is characterized by moral confusion—not knowing right from wrong. Maintain clarity about what to do and what to avoid. When confused, consult conscience, scripture, and wise guides.",
    keyTerms: [
      { term: "pravṛttim", meaning: "activity, what to do" },
      { term: "nivṛttim", meaning: "abstinence, what to avoid" },
      { term: "śaucam", meaning: "purity" },
      { term: "ācāraḥ", meaning: "right conduct" }
    ],
    themes: ["moral confusion", "absence of virtue", "lost compass"],
    difficulty: "intermediate"
  },
  {
    chapter: 16,
    verse: 8,
    sanskrit: "असत्यमप्रतिष्ठं ते जगदाहुरनीश्वरम्। अपरस्परसम्भूतं किमन्यत्कामहैतुकम्॥",
    transliteration: "asatyam apratiṣṭhaṁ te jagad āhur anīśvaram aparaspara-sambhūtaṁ kim anyat kāma-haitukam",
    translation: "They say the universe is without truth, without foundation, without a God, not arising from mutual causation—what else but driven by lust?",
    explanation: {
      simple: "The demonic worldview: the universe has no truth, no foundation, no God, no real causation—it's all driven by random desire. This nihilistic view underlies demonic behavior.",
      deeper: "The demonic philosophy: 'asatyam'—without truth (no objective reality). 'Apratiṣṭham'—without foundation (nothing solid). 'Anīśvaram'—without God/Lord (no divine order). 'Aparaspara-sambhūtam'—not from mutual causation (denying karmic law). 'Kāma-haitukam'—caused by desire alone (random lust created everything). This materialist nihilism justifies unlimited selfish action."
    },
    practicalApplication: "Notice how worldview shapes behavior. If there's no truth, why be honest? If there's no God, why be good? If life is random, why care? A coherent spiritual worldview provides foundation for ethical living.",
    keyTerms: [
      { term: "asatyam", meaning: "without truth" },
      { term: "apratiṣṭham", meaning: "without foundation" },
      { term: "anīśvaram", meaning: "without God" },
      { term: "kāma-haitukam", meaning: "caused by desire" }
    ],
    themes: ["demonic worldview", "nihilism", "materialist philosophy"],
    difficulty: "intermediate"
  },
  {
    chapter: 16,
    verse: 9,
    sanskrit: "एतां दृष्टिमवष्टभ्य नष्टात्मानोऽल्पबुद्धयः। प्रभवन्त्युग्रकर्माणः क्षयाय जगतोऽहिताः॥",
    transliteration: "etāṁ dṛṣṭim avaṣṭabhya naṣṭātmāno 'lpa-buddhayaḥ prabhavanty ugra-karmāṇaḥ kṣayāya jagato 'hitāḥ",
    translation: "Holding this view, these lost souls with small intelligence, of cruel deeds, arise as enemies for the destruction of the world.",
    explanation: {
      simple: "Holding this nihilistic view, these people become spiritually lost, small-minded, cruel in actions, and enemies of the world, causing destruction rather than benefit.",
      deeper: "'Etām dṛṣṭim avaṣṭabhya'—holding to this view (nihilism). 'Naṣṭātmānaḥ'—lost souls (spiritual suicide). 'Alpa-buddhayaḥ'—small-minded. 'Ugra-karmāṇaḥ'—cruel in action. 'Prabhavanti kṣayāya jagataḥ ahitāḥ'—they arise as enemies for the world's destruction. Nihilistic philosophy leads to destructive behavior—if nothing matters, why not exploit and destroy?"
    },
    practicalApplication: "Ideas have consequences. A worldview denying meaning leads to meaningless cruelty. Guard your philosophy—what you believe shapes what you do. Cultivate a worldview that supports compassion and responsibility.",
    keyTerms: [
      { term: "naṣṭātmānaḥ", meaning: "lost souls" },
      { term: "alpa-buddhayaḥ", meaning: "small-minded" },
      { term: "ugra-karmāṇaḥ", meaning: "cruel in actions" },
      { term: "jagataḥ ahitāḥ", meaning: "enemies of the world" }
    ],
    themes: ["philosophy and behavior", "destructive tendencies", "enemies of humanity"],
    difficulty: "intermediate"
  },
  {
    chapter: 16,
    verse: 10,
    sanskrit: "काममाश्रित्य दुष्पूरं दम्भमानमदान्विताः। मोहाद्गृहीत्वासद्ग्राहान्प्रवर्तन्तेऽशुचिव्रताः॥",
    transliteration: "kāmam āśritya duṣpūraṁ dambha-māna-madānvitāḥ mohād gṛhītvāsad-grāhān pravartante 'śuci-vratāḥ",
    translation: "Giving themselves over to insatiable desire, filled with hypocrisy, pride, and arrogance, holding false notions through delusion, they act with impure resolves.",
    explanation: {
      simple: "They're consumed by desires that can never be satisfied. Full of pretense, pride, and arrogance, they hold false beliefs due to delusion and act with impure intentions.",
      deeper: "'Kāmam āśritya duṣpūram'—taking refuge in insatiable desire (it can never be filled). 'Dambha-māna-mada-anvitāḥ'—filled with hypocrisy, conceit, and intoxication. 'Mohāt gṛhītvā asad-grāhān'—having grasped false notions through delusion. 'Aśuci-vratāḥ'—of impure resolves. The picture: endless craving, false beliefs, and corrupt intentions."
    },
    practicalApplication: "Recognize the trap of insatiable desire: 'I'll be satisfied when...' never ends. No amount of acquisition satisfies. The problem isn't lack of attainment but the nature of desire itself.",
    keyTerms: [
      { term: "duṣpūram", meaning: "insatiable" },
      { term: "dambha", meaning: "hypocrisy" },
      { term: "asad-grāhān", meaning: "false notions" },
      { term: "aśuci-vratāḥ", meaning: "impure resolves" }
    ],
    themes: ["insatiable desire", "false beliefs", "corrupt motivation"],
    difficulty: "intermediate"
  },
  {
    chapter: 16,
    verse: 11,
    sanskrit: "चिन्तामपरिमेयां च प्रलयान्तामुपाश्रिताः। कामोपभोगपरमा एतावदिति निश्चिताः॥",
    transliteration: "cintām aparimeyāṁ ca pralayāntām upāśritāḥ kāmopabhoga-paramā etāvad iti niścitāḥ",
    translation: "Beset with immeasurable anxieties ending only in death, regarding gratification of desires as the highest goal, convinced that this is all—",
    explanation: {
      simple: "They carry endless anxieties that only end at death. They believe pleasure-seeking is life's highest purpose and are convinced there's nothing more than this worldly life.",
      deeper: "'Cintām aparimeyām pralayāntām'—immeasurable anxiety ending only at dissolution (death). This endless worry is the fruit of desire-based living. 'Kāma-upabhoga-paramāḥ'—holding sense gratification as supreme. 'Etāvat iti niścitāḥ'—convinced 'this is all.' The materialist conclusion: maximize pleasure before death, for there's nothing beyond."
    },
    practicalApplication: "Notice if anxiety fills your days. Endless worry often accompanies endless wanting. The belief that 'this is all' creates desperate grasping and fear. An open stance toward transcendence relieves this pressure.",
    keyTerms: [
      { term: "cintām aparimeyām", meaning: "immeasurable anxiety" },
      { term: "pralayāntām", meaning: "ending in death" },
      { term: "kāmopabhoga-paramāḥ", meaning: "sense pleasure as supreme" },
      { term: "etāvat", meaning: "this much only" }
    ],
    themes: ["endless anxiety", "pleasure-seeking", "materialist limitation"],
    difficulty: "intermediate"
  },
  {
    chapter: 16,
    verse: 12,
    sanskrit: "आशापाशशतैर्बद्धाः कामक्रोधपरायणाः। ईहन्ते कामभोगार्थमन्यायेनार्थसञ्चयान्॥",
    transliteration: "āśā-pāśa-śatair baddhāḥ kāma-krodha-parāyaṇāḥ īhante kāma-bhogārtham anyāyenārtha-sañcayān",
    translation: "Bound by hundreds of ropes of hope, devoted to lust and anger, they seek to amass wealth by unjust means for gratification of desires.",
    explanation: {
      simple: "Bound by hundreds of hopes and expectations, consumed by desire and anger, they strive to accumulate wealth through unjust means—all to satisfy their endless cravings.",
      deeper: "'Āśā-pāśa-śataiḥ baddhāḥ'—bound by hundreds of nooses of hope/expectation. Each hope is a rope binding the soul. 'Kāma-krodha-parāyaṇāḥ'—devoted to desire and anger. 'Īhante anyāyena artha-sañcayān'—strive to accumulate wealth unjustly. The progression: hope → desire → unjust action. Greed corrupts ethics."
    },
    practicalApplication: "Hope can be a trap when it becomes attachment to specific outcomes. Notice how many 'hopes' bind you—each unfulfilled creates frustration. Desire for more leads to unethical shortcuts. Contentment is the antidote.",
    keyTerms: [
      { term: "āśā-pāśa", meaning: "nooses of hope" },
      { term: "kāma-krodha-parāyaṇāḥ", meaning: "devoted to desire and anger" },
      { term: "anyāyena", meaning: "by unjust means" },
      { term: "artha-sañcayān", meaning: "accumulation of wealth" }
    ],
    themes: ["bondage of hope", "unjust acquisition", "greed"],
    difficulty: "intermediate"
  },
  {
    chapter: 16,
    verse: 13,
    sanskrit: "इदमद्य मया लब्धमिमं प्राप्स्ये मनोरथम्। इदमस्तीदमपि मे भविष्यति पुनर्धनम्॥",
    transliteration: "idam adya mayā labdham imaṁ prāpsye manoratham idam astīdam api me bhaviṣyati punar dhanam",
    translation: "'This today has been gained by me; this desire I shall obtain; this is mine, and this wealth also will be mine in future'—",
    explanation: {
      simple: "The demonic inner dialogue: 'I got this today; I'll get that desire fulfilled; this is mine; more wealth will be mine tomorrow.' Constant calculation of acquisition.",
      deeper: "Inner monologue of the acquisitive mind: 'idam adya mayā labdham'—this today has been obtained by me. 'Imam prāpsye manoratham'—this desire I shall attain. 'Idam asti'—this is (mine). 'Idam api me bhaviṣyati punaḥ dhanam'—this wealth also will be mine again. The mind is a calculator of gains, never at peace."
    },
    practicalApplication: "Listen to your inner monologue. Is it a constant calculation of what you have, want, and will get? This mental pattern itself is bondage. Practice gratitude for what is, rather than planning for what's next.",
    keyTerms: [
      { term: "labdham", meaning: "obtained" },
      { term: "prāpsye", meaning: "I shall attain" },
      { term: "manoratham", meaning: "desire, wish" },
      { term: "dhanam", meaning: "wealth" }
    ],
    themes: ["acquisitive mind", "endless wanting", "inner monologue"],
    difficulty: "intermediate"
  },
  {
    chapter: 16,
    verse: 14,
    sanskrit: "असौ मया हतः शत्रुर्हनिष्ये चापरानपि। ईश्वरोऽहमहं भोगी सिद्धोऽहं बलवान्सुखी॥",
    transliteration: "asau mayā hataḥ śatrur haniṣye cāparān api īśvaro 'ham ahaṁ bhogī siddho 'haṁ balavān sukhī",
    translation: "'That enemy has been slain by me, and others I shall slay too. I am the lord, I am the enjoyer; I am successful, powerful, and happy'—",
    explanation: {
      simple: "More demonic thinking: 'I killed that enemy; I'll kill more. I am the lord! I am the enjoyer! I am successful, powerful, happy!' This is the ego inflated to godhood.",
      deeper: "The ego's supreme inflation: 'asau mayā hataḥ śatruḥ'—that enemy slain by me. 'Haniṣye aparān api'—I shall slay others too. Then the declarations: 'Īśvaraḥ aham'—I am the Lord! 'Aham bhogī'—I am the enjoyer! 'Siddhaḥ aham'—I am perfected/successful! 'Balavān sukhī'—powerful and happy! The ultimate delusion: 'I am God.'"
    },
    practicalApplication: "Notice when you think 'I am the lord of my domain.' The ego constantly seeks to establish its supremacy. True strength comes from recognizing a power greater than the ego—this is why humility accompanies wisdom.",
    keyTerms: [
      { term: "īśvaraḥ aham", meaning: "I am the lord" },
      { term: "bhogī", meaning: "enjoyer" },
      { term: "siddhaḥ", meaning: "successful, perfected" },
      { term: "balavān", meaning: "powerful" }
    ],
    themes: ["ego inflation", "self-deification", "pride"],
    difficulty: "intermediate"
  },
  {
    chapter: 16,
    verse: 15,
    sanskrit: "आढ्योऽभिजनवानस्मि कोऽन्योऽस्ति सदृशो मया। यक्ष्ये दास्यामि मोदिष्य इत्यज्ञानविमोहिताः॥",
    transliteration: "āḍhyo 'bhijanavān asmi ko 'nyo 'sti sadṛśo mayā yakṣye dāsyāmi modiṣya ity ajñāna-vimohitāḥ",
    translation: "'I am wealthy and well-born; who else is like me? I shall sacrifice, I shall give charity, I shall rejoice'—thus deluded by ignorance.",
    explanation: {
      simple: "More demonic thinking: 'I'm rich and well-born—who is my equal? I'll sacrifice and give charity and enjoy!' Even charity becomes ego-gratification. All this is delusion.",
      deeper: "'Āḍhyaḥ abhijanavān asmi'—I am wealthy and well-born. 'Kaḥ anyaḥ asti sadṛśaḥ mayā'—who else is like me? Even religious acts become pride: 'yakṣye dāsyāmi modiṣye'—I shall sacrifice, give, rejoice. When sacrifice and charity become resume items for the ego, they lose spiritual value. 'Ajñāna-vimohitāḥ'—deluded by ignorance."
    },
    practicalApplication: "Beware of spiritual pride: 'Look how much I give, how much I pray, how spiritual I am.' Even good deeds become bondage when the ego claims them. Give anonymously, practice secretly, let the left hand not know what the right does.",
    keyTerms: [
      { term: "āḍhyaḥ", meaning: "wealthy" },
      { term: "abhijanavān", meaning: "well-born" },
      { term: "yakṣye", meaning: "I shall sacrifice" },
      { term: "ajñāna-vimohitāḥ", meaning: "deluded by ignorance" }
    ],
    themes: ["spiritual pride", "ego in religion", "charitable pride"],
    difficulty: "intermediate"
  },
  {
    chapter: 16,
    verse: 16,
    sanskrit: "अनेकचित्तविभ्रान्ता मोहजालसमावृताः। प्रसक्ताः कामभोगेषु पतन्ति नरकेऽशुचौ॥",
    transliteration: "aneka-citta-vibhrāntā moha-jāla-samāvṛtāḥ prasaktāḥ kāma-bhogeṣu patanti narake 'śucau",
    translation: "Bewildered by many thoughts, caught in the net of delusion, addicted to the gratification of desires, they fall into a foul hell.",
    explanation: {
      simple: "With minds scattered by countless thoughts, trapped in delusion's net, addicted to pleasure-seeking—they fall into a degraded state (hell).",
      deeper: "'Aneka-citta-vibhrāntāḥ'—bewildered by many minds/thoughts (no inner coherence). 'Moha-jāla-samāvṛtāḥ'—enveloped in delusion's net. 'Prasaktāḥ kāma-bhogeṣu'—attached to sense pleasures. 'Patanti narake aśucau'—fall into impure hell. 'Hell' here means degraded states—not just after death but in this life too."
    },
    practicalApplication: "A scattered mind caught in desires creates its own hell—anxiety, confusion, addiction. Hell isn't necessarily a future punishment but a present psychological state. Concentration, clarity, and contentment are the way out.",
    keyTerms: [
      { term: "aneka-citta-vibhrāntāḥ", meaning: "bewildered by many thoughts" },
      { term: "moha-jāla", meaning: "net of delusion" },
      { term: "prasaktāḥ", meaning: "addicted" },
      { term: "narake", meaning: "hell" }
    ],
    themes: ["mental confusion", "addiction", "degraded states"],
    difficulty: "intermediate"
  },
  {
    chapter: 16,
    verse: 17,
    sanskrit: "आत्मसम्भाविताः स्तब्धा धनमानमदान्विताः। यजन्ते नामयज्ञैस्ते दम्भेनाविधिपूर्वकम्॥",
    transliteration: "ātma-sambhāvitāḥ stabdhā dhana-māna-madānvitāḥ yajante nāma-yajñais te dambhenāvidhi-pūrvakam",
    translation: "Self-conceited, stubborn, filled with the pride and intoxication of wealth, they perform sacrifice in name only, hypocritically, without following proper rules.",
    explanation: {
      simple: "Full of self-importance and stubbornness, drunk on wealth-pride, they perform religious rituals just for show, hypocritically, without proper understanding or procedure.",
      deeper: "'Ātma-sambhāvitāḥ'—self-conceited (high self-regard). 'Stabdhāḥ'—stubborn, stiff-necked. 'Dhana-māna-mada-anvitāḥ'—filled with intoxication of wealth and honor. 'Yajante nāma-yajñaiḥ'—sacrifice in name only. 'Dambhena avidhi-pūrvakam'—hypocritically, without proper method. Their religion is performance, not transformation."
    },
    practicalApplication: "Is your spiritual practice genuine or for show? Do you meditate to transform or to tell others you meditate? Authentic practice may be invisible; performative practice seeks audience.",
    keyTerms: [
      { term: "ātma-sambhāvitāḥ", meaning: "self-conceited" },
      { term: "stabdhāḥ", meaning: "stubborn" },
      { term: "nāma-yajñaiḥ", meaning: "sacrifice in name only" },
      { term: "dambhena", meaning: "hypocritically" }
    ],
    themes: ["religious hypocrisy", "performative spirituality", "empty ritual"],
    difficulty: "intermediate"
  },
  {
    chapter: 16,
    verse: 18,
    sanskrit: "अहङ्कारं बलं दर्पं कामं क्रोधं च संश्रिताः। मामात्मपरदेहेषु प्रद्विषन्तोऽभ्यसूयकाः॥",
    transliteration: "ahaṅkāraṁ balaṁ darpaṁ kāmaṁ krodhaṁ ca saṁśritāḥ mām ātma-para-deheṣu pradviṣanto 'bhyasūyakāḥ",
    translation: "Possessed of ego, power, arrogance, lust, and anger, these malicious ones hate Me in their own and others' bodies.",
    explanation: {
      simple: "Consumed by ego, force, arrogance, lust, and anger, these envious people actually hate God—both the Divine in themselves and in others.",
      deeper: "Five possessions of the demonic: ahaṅkāra (ego), bala (force), darpa (arrogance), kāma (lust), krodha (anger). 'Mām pradviṣantaḥ'—they hate Me. Where? 'Ātma-para-deheṣu'—in their own and others' bodies. Since God dwells in all hearts, hating self or others is hating God. 'Abhyasūyakāḥ'—envious, finding fault even with the good."
    },
    practicalApplication: "Self-hatred and hatred of others are both hatred of the Divine who dwells in all. When you judge yourself harshly or condemn others, you're rejecting God's presence. Practice seeing the Divine in everyone, including yourself.",
    keyTerms: [
      { term: "ahaṅkāram", meaning: "ego" },
      { term: "pradviṣantaḥ", meaning: "hating" },
      { term: "ātma-para-deheṣu", meaning: "in own and others' bodies" },
      { term: "abhyasūyakāḥ", meaning: "envious" }
    ],
    themes: ["hatred of God in all", "self-hatred", "jealousy"],
    difficulty: "intermediate"
  },
  {
    chapter: 16,
    verse: 19,
    sanskrit: "तानहं द्विषतः क्रूरान्संसारेषु नराधमान्। क्षिपाम्यजस्रमशुभानासुरीष्वेव योनिषु॥",
    transliteration: "tān ahaṁ dviṣataḥ krūrān saṁsāreṣu narādhamān kṣipāmy ajasram aśubhān āsurīṣv eva yoniṣu",
    translation: "These cruel haters, the lowest of humanity, the inauspicious ones, I constantly cast into the cycles of rebirth in demonic wombs.",
    explanation: {
      simple: "These hateful, cruel, lowest people—I continuously throw them into demonic births in the cycle of existence. Their nature perpetuates through rebirth.",
      deeper: "'Tān dviṣataḥ krūrān narādhamān aśubhān'—those haters, cruel ones, lowest of men, inauspicious. 'Kṣipāmi ajasram'—I continuously cast. 'Saṁsāreṣu āsurīṣu eva yoniṣu'—into demonic wombs in the cycles. This isn't divine vindictiveness but karmic law: demonic nature leads to demonic births, perpetuating the cycle. Like attracts like."
    },
    practicalApplication: "This isn't punishment but natural consequence—demonic tendencies create demonic circumstances. Your character shapes your future. Cultivate divine qualities now to shape better conditions ahead.",
    keyTerms: [
      { term: "dviṣataḥ", meaning: "haters" },
      { term: "krūrān", meaning: "cruel" },
      { term: "narādhamān", meaning: "lowest of humanity" },
      { term: "āsurīṣu yoniṣu", meaning: "demonic wombs" }
    ],
    themes: ["karmic consequences", "perpetuation of nature", "demonic rebirth"],
    difficulty: "advanced"
  },
  {
    chapter: 16,
    verse: 20,
    sanskrit: "आसुरीं योनिमापन्ना मूढा जन्मनि जन्मनि। मामप्राप्यैव कौन्तेय ततो यान्त्यधमां गतिम्॥",
    transliteration: "āsurīṁ yonim āpannā mūḍhā janmani janmani mām aprāpyaiva kaunteya tato yānty adhamāṁ gatim",
    translation: "Entering demonic wombs birth after birth, these deluded ones, never attaining Me, O son of Kunti, thus fall to the lowest state.",
    explanation: {
      simple: "Birth after birth falling into demonic circumstances, these deluded ones never reach God and sink to ever lower states. It's a downward spiral.",
      deeper: "'Āsurīm yonim āpannāḥ'—entering demonic wombs. 'Mūḍhāḥ janmani janmani'—deluded ones, birth after birth. 'Mām aprāpya eva'—not attaining Me. Without divine connection, the spiral continues downward. 'Adhamām gatim yānti'—they go to the lowest state. Not one bad birth but a trajectory—each life making the next worse without intervention."
    },
    practicalApplication: "Break the cycle now. Whatever negative tendencies you have, address them in this life. Don't leave spiritual work for 'later'—the trajectory compounds. Today's effort shapes not just tomorrow but lifetimes.",
    keyTerms: [
      { term: "āsurīm yonim", meaning: "demonic womb" },
      { term: "janmani janmani", meaning: "birth after birth" },
      { term: "mām aprāpya", meaning: "not attaining Me" },
      { term: "adhamām gatim", meaning: "lowest state" }
    ],
    themes: ["downward spiral", "missing God", "urgency of transformation"],
    difficulty: "advanced"
  },
  {
    chapter: 16,
    verse: 21,
    sanskrit: "त्रिविधं नरकस्येदं द्वारं नाशनमात्मनः। कामः क्रोधस्तथा लोभस्तस्मादेतत्त्रयं त्यजेत्॥",
    transliteration: "tri-vidhaṁ narakasyedaṁ dvāraṁ nāśanam ātmanaḥ kāmaḥ krodhas tathā lobhas tasmād etat trayaṁ tyajet",
    translation: "Threefold is this gate of hell, destructive of the self—lust, anger, and greed. Therefore, one should abandon these three.",
    explanation: {
      simple: "There are three gates to hell that destroy the soul: lust, anger, and greed. Therefore, abandon all three. This is practical guidance for avoiding the demonic path.",
      deeper: "'Trividham narakasya dvāram'—threefold gate to hell. 'Nāśanam ātmanaḥ'—destructive of the Self. (1) Kāma—lust/desire, (2) krodha—anger, (3) lobha—greed. These three are the root of all demonic qualities previously listed. 'Tasmāt etat trayam tyajet'—therefore abandon these three. Simple instruction: avoid these three gates and you avoid hell."
    },
    practicalApplication: "When you feel desire, anger, or greed arising, recognize them as gates to suffering. You don't have to act on them. Pause, breathe, and choose differently. These three emotions, when acted upon, lead to destruction.",
    keyTerms: [
      { term: "tri-vidham dvāram", meaning: "threefold gate" },
      { term: "narakasya", meaning: "of hell" },
      { term: "kāmaḥ", meaning: "lust" },
      { term: "krodhaḥ", meaning: "anger" },
      { term: "lobhaḥ", meaning: "greed" }
    ],
    themes: ["three gates of hell", "root causes", "what to avoid"],
    difficulty: "beginner",
    famousVerse: true
  },
  {
    chapter: 16,
    verse: 22,
    sanskrit: "एतैर्विमुक्तः कौन्तेय तमोद्वारैस्त्रिभिर्नरः। आचरत्यात्मनः श्रेयस्ततो याति परां गतिम्॥",
    transliteration: "etair vimuktaḥ kaunteya tamo-dvārais tribhir naraḥ ācaraty ātmanaḥ śreyas tato yāti parāṁ gatim",
    translation: "One who is freed from these three gates of darkness, O son of Kunti, practices what is good for the self, and thus attains the supreme goal.",
    explanation: {
      simple: "A person freed from these three gates of darkness (lust, anger, greed) does what's truly good for themselves and thereby reaches the supreme goal. Freedom from these leads to liberation.",
      deeper: "'Etaiḥ vimuktaḥ tamo-dvāraiḥ tribhiḥ'—freed from these three gates of darkness. 'Ācarati ātmanaḥ śreyaḥ'—practices what is good for the self (follows dharma, pursues liberation). 'Tataḥ yāti parām gatim'—then attains the supreme goal. The negative (abandon the three) becomes positive (do what's good), leading to liberation."
    },
    practicalApplication: "Freedom from lust, anger, and greed isn't the end—it's the beginning. Once free from these obstacles, you naturally pursue what's truly beneficial. The path then becomes clear and straight to the goal.",
    keyTerms: [
      { term: "vimuktaḥ", meaning: "freed" },
      { term: "tamo-dvāraiḥ", meaning: "gates of darkness" },
      { term: "śreyaḥ", meaning: "what is good" },
      { term: "parām gatim", meaning: "supreme goal" }
    ],
    themes: ["freedom from vices", "pursuing the good", "path to liberation"],
    difficulty: "intermediate"
  },
  {
    chapter: 16,
    verse: 23,
    sanskrit: "यः शास्त्रविधिमुत्सृज्य वर्तते कामकारतः। न स सिद्धिमवाप्नोति न सुखं न परां गतिम्॥",
    transliteration: "yaḥ śāstra-vidhim utsṛjya vartate kāma-kārataḥ na sa siddhim avāpnoti na sukhaṁ na parāṁ gatim",
    translation: "One who discards scriptural injunctions and acts according to personal desire attains neither perfection, nor happiness, nor the supreme goal.",
    explanation: {
      simple: "One who rejects scriptural guidance and acts purely on personal whims achieves neither success, nor happiness, nor liberation. Following your desires alone doesn't lead to fulfillment.",
      deeper: "'Śāstra-vidhim utsṛjya'—having discarded scriptural injunctions. 'Vartate kāma-kārataḥ'—acts according to personal desire/whim. The result: 'na siddhim'—not perfection, 'na sukham'—not happiness, 'na parām gatim'—not the supreme goal. All three are missed by following mere desire. Scripture here means wisdom guidance, not arbitrary rules."
    },
    practicalApplication: "Following personal whims alone leads nowhere good. We need guidance from wisdom traditions—not blind obedience, but recognition that others have walked this path before and left directions. Don't reinvent the wheel.",
    keyTerms: [
      { term: "śāstra-vidhim", meaning: "scriptural injunctions" },
      { term: "utsṛjya", meaning: "having discarded" },
      { term: "kāma-kārataḥ", meaning: "according to desire" },
      { term: "siddhim", meaning: "perfection" }
    ],
    themes: ["scripture as guide", "following whims", "missing the goal"],
    difficulty: "intermediate"
  },
  {
    chapter: 16,
    verse: 24,
    sanskrit: "तस्माच्छास्त्रं प्रमाणं ते कार्याकार्यव्यवस्थितौ। ज्ञात्वा शास्त्रविधानोक्तं कर्म कर्तुमिहार्हसि॥",
    transliteration: "tasmāc chāstraṁ pramāṇaṁ te kāryākārya-vyavasthitau jñātvā śāstra-vidhānoktaṁ karma kartum ihārhasi",
    translation: "Therefore let scripture be your authority in determining what should be done and what should not be done. Knowing the scriptural injunctions, you should act here in this world.",
    explanation: {
      simple: "Therefore, let scripture be your guide for knowing right from wrong. Understanding what the scriptures teach, act accordingly in this world. Wisdom traditions illuminate the path.",
      deeper: "'Tasmāt śāstram pramāṇam te'—therefore let scripture be your authority/measure. 'Kārya-akārya-vyavasthitau'—in determining what to do and not do. 'Jñātvā śāstra-vidhāna-uktam'—knowing what is said by scriptural injunction. 'Karma kartum iha arhasi'—you should perform action here. The chapter concludes: use wisdom guidance (śāstra) for ethical clarity, then act accordingly."
    },
    practicalApplication: "When confused about right and wrong, consult wisdom traditions—scripture, wise teachers, tested ethical principles. Then act with confidence. This isn't blind faith but using the accumulated wisdom of those who've gone before.",
    keyTerms: [
      { term: "śāstram", meaning: "scripture" },
      { term: "pramāṇam", meaning: "authority, standard" },
      { term: "kāryākārya", meaning: "what to do and not do" },
      { term: "vidhānoktam", meaning: "said by injunction" }
    ],
    themes: ["scripture as guide", "ethical clarity", "wise action"],
    difficulty: "intermediate",
    famousVerse: true
  }
];

const chapter16: ChapterContent = {
  chapter: 16,
  name: {
    sanskrit: "Daivasura Sampad Vibhaga Yoga",
    english: "The Yoga of Divine and Demonic Natures"
  },
  summary: "Krishna describes two types of human nature: the divine (daivi sampada) leading to liberation, and the demonic (asuri sampada) leading to bondage. He identifies the three gates to hell: lust, anger, and greed. The chapter concludes by recommending scripture as the guide for distinguishing right from wrong action.",
  keyThemes: ["divine qualities", "demonic qualities", "three gates of hell", "scripture as guide", "character"],
  verseCount: 24,
  verses
};

export default chapter16;
