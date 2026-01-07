/**
 * Mandukya Upanishad (माण्डूक्योपनिषद्)
 * "The Essence of Vedanta in 12 Verses"
 *
 * Source: Atharva Veda
 * Verses: 12
 * Difficulty: Intermediate
 *
 * The Mandukya Upanishad is the shortest of the principal Upanishads,
 * yet Shankaracharya considered it sufficient alone for liberation.
 * It analyzes the sacred syllable OM and maps it to the four states
 * of consciousness: waking, dreaming, deep sleep, and the "fourth" (turiya).
 */

import { Upanishad, UpanishadVerse, UpanishadSection } from './types';

// =============================================================================
// VERSES
// =============================================================================

const verses: UpanishadVerse[] = [
  // -------------------------------------------------------------------------
  // VERSE 1 - OM is Everything
  // -------------------------------------------------------------------------
  {
    upanishad: 'mandukya',
    section: 1,
    verse: 1,
    sanskrit: `ॐ इत्येतदक्षरमिदं सर्वं तस्योपव्याख्यानं भूतं भवद्भविष्यदिति सर्वमोङ्कार एव ।
यच्चान्यत्त्रिकालातीतं तदप्योङ्कार एव ॥`,
    transliteration: `oṁ ity etad akṣaram idaṁ sarvaṁ tasyopavyākhyānaṁ bhūtaṁ bhavad bhaviṣyad iti sarvam oṅkāra eva |
yac cānyat trikālātītaṁ tad apy oṅkāra eva ||`,
    translation:
      'OM — this syllable is all this. All that is past, present, and future is truly OM. And whatever transcends the three times — that too is OM.',
    explanation: {
      simple:
        'The sacred syllable OM represents everything that exists — past, present, and future. Even what lies beyond time is OM. This single sound contains the entire universe.',
      deeper:
        'The Upanishad begins with a sweeping declaration: OM is not just a mantra or symbol — it IS reality itself. Akṣara means both "syllable" and "imperishable." The sound OM and the imperishable Brahman are one. Everything that exists in time, and even the timeless itself, is contained in this sound.',
    },
    practicalApplication:
      'When you chant OM, you\'re not merely making a sound — you\'re invoking the totality of existence. Let this understanding transform a routine chant into a profound meditation on the nature of reality itself.',
    keyTerms: [
      { term: 'Oṁkāra', meaning: 'The syllable OM, the sacred sound' },
      { term: 'Akṣara', meaning: 'Syllable; also means imperishable' },
      { term: 'Trikāla', meaning: 'The three times: past, present, future' },
      { term: 'Atīta', meaning: 'Beyond, transcending' },
    ],
    themes: ['om', 'totality', 'time', 'transcendence'],
    difficulty: 'beginner',
    famousVerse: true,
  },

  // -------------------------------------------------------------------------
  // VERSE 2 - Brahman is OM
  // -------------------------------------------------------------------------
  {
    upanishad: 'mandukya',
    section: 1,
    verse: 2,
    sanskrit: `सर्वं ह्येतद्ब्रह्मायमात्मा ब्रह्म सोऽयमात्मा चतुष्पात् ॥`,
    transliteration: `sarvaṁ hy etad brahmāyam ātmā brahma so 'yam ātmā catuṣpāt ||`,
    translation:
      'All this is indeed Brahman. This Self is Brahman. This Self has four quarters (aspects).',
    explanation: {
      simple:
        'Everything is Brahman (ultimate reality). Your innermost Self (Atman) is also Brahman. And this Self can be understood through four aspects or "quarters" — which the following verses will explain.',
      deeper:
        'Catuṣpāt (four-quartered) introduces the key teaching structure. The Self appears to have four aspects — three states of consciousness we experience daily (waking, dreaming, deep sleep), plus a fourth that is our true nature. These aren\'t parts of a whole but perspectives on what is ultimately one.',
    },
    practicalApplication:
      'You already experience three states every day: waking, dreaming, and deep sleep. The Upanishad invites you to investigate: who is the one who moves through all three states? That witness is the fourth — your true Self.',
    keyTerms: [
      { term: 'Brahman', meaning: 'Ultimate reality, the Absolute' },
      { term: 'Ātmā', meaning: 'The Self, the true I' },
      { term: 'Catuṣpāt', meaning: 'Four-quartered, having four aspects' },
    ],
    themes: ['brahman', 'atman', 'four-states', 'identity'],
    difficulty: 'intermediate',
    mahavakya: {
      statement: 'अयमात्मा ब्रह्म',
      transliteration: 'Ayam Ātmā Brahma',
      meaning: 'This Self is Brahman',
    },
    famousVerse: true,
  },

  // -------------------------------------------------------------------------
  // VERSE 3 - The Waking State (Vaishvanara)
  // -------------------------------------------------------------------------
  {
    upanishad: 'mandukya',
    section: 1,
    verse: 3,
    sanskrit: `जागरितस्थानो बहिष्प्रज्ञः सप्ताङ्ग एकोनविंशतिमुखः स्थूलभुग्वैश्वानरः प्रथमः पादः ॥`,
    transliteration: `jāgarita-sthāno bahiṣ-prajñaḥ saptāṅga ekonaviṁśati-mukhaḥ sthūla-bhug vaiśvānaraḥ prathamaḥ pādaḥ ||`,
    translation:
      'The first quarter is Vaishvanara, whose sphere is the waking state, who is conscious of external objects, who has seven limbs and nineteen mouths, and who experiences gross (physical) objects.',
    explanation: {
      simple:
        'The first state is the waking state — when you\'re aware of the external world through your senses. In this state, consciousness seems to flow outward, and you experience physical objects. This is called Vaishvanara (the "universal person").',
      deeper:
        'The "seven limbs" refer to the cosmic body described in another Upanishad (head=heaven, eyes=sun, breath=air, etc.). The "nineteen mouths" are the five sense organs, five action organs, five pranas, plus mind, intellect, ego, and memory. This shows that even the waking state connects us to cosmic dimensions.',
    },
    practicalApplication:
      'Right now, reading this, you\'re in the waking state — consciousness directed outward through eyes and mind. Notice how this feels like reality. But you\'ll soon sleep, and that will seem equally real. The waking state is just one mode of experience, not the only reality.',
    keyTerms: [
      { term: 'Jāgarita', meaning: 'Waking, awake' },
      { term: 'Bahiṣ-prajña', meaning: 'Outward-knowing, externally conscious' },
      { term: 'Vaiśvānara', meaning: 'Universal person, the waker' },
      { term: 'Sthūla-bhuk', meaning: 'Experiencer of gross objects' },
    ],
    themes: ['waking-state', 'consciousness', 'external', 'vaishvanara'],
    difficulty: 'intermediate',
  },

  // -------------------------------------------------------------------------
  // VERSE 4 - The Dream State (Taijasa)
  // -------------------------------------------------------------------------
  {
    upanishad: 'mandukya',
    section: 1,
    verse: 4,
    sanskrit: `स्वप्नस्थानोऽन्तःप्रज्ञः सप्ताङ्ग एकोनविंशतिमुखः प्रविविक्तभुक्तैजसो द्वितीयः पादः ॥`,
    transliteration: `svapna-sthāno 'ntaḥ-prajñaḥ saptāṅga ekonaviṁśati-mukhaḥ pravivikta-bhuk taijaso dvitīyaḥ pādaḥ ||`,
    translation:
      'The second quarter is Taijasa, whose sphere is the dream state, who is conscious of internal objects, who has seven limbs and nineteen mouths, and who experiences subtle (mental) objects.',
    explanation: {
      simple:
        'The second state is dreaming — when consciousness turns inward and creates an entire world from mental impressions. In dreams, you experience subtle objects made of thought-stuff. This dreamer is called Taijasa (the "luminous one").',
      deeper:
        'Taijasa means "made of light" — dreams are luminous projections of the mind. Remarkably, in dreams you have a body, a world, other people — all created by your own consciousness. This shows the mind\'s creative power. While dreaming, that world seems completely real.',
    },
    practicalApplication:
      'Tonight in your dreams, the dream-world will seem as real as this one does now. This insight destabilizes the assumption that the waking state is "more real." Both states are experiences appearing in consciousness.',
    keyTerms: [
      { term: 'Svapna', meaning: 'Dream, sleep with dreams' },
      { term: 'Antaḥ-prajña', meaning: 'Inward-knowing, internally conscious' },
      { term: 'Taijasa', meaning: 'Luminous one, the dreamer' },
      { term: 'Pravivikta-bhuk', meaning: 'Experiencer of subtle objects' },
    ],
    themes: ['dream-state', 'consciousness', 'internal', 'taijasa'],
    difficulty: 'intermediate',
  },

  // -------------------------------------------------------------------------
  // VERSE 5 - Deep Sleep (Prajna)
  // -------------------------------------------------------------------------
  {
    upanishad: 'mandukya',
    section: 1,
    verse: 5,
    sanskrit: `यत्र सुप्तो न कञ्चन कामं कामयते न कञ्चन स्वप्नं पश्यति तत्सुषुप्तम् ।
सुषुप्तस्थान एकीभूतः प्रज्ञानघन एवानन्दमयो ह्यानन्दभुक्चेतोमुखः प्राज्ञस्तृतीयः पादः ॥`,
    transliteration: `yatra supto na kañcana kāmaṁ kāmayate na kañcana svapnaṁ paśyati tat suṣuptam |
suṣupta-sthāna ekībhūtaḥ prajñāna-ghana evānandamayo hy ānanda-bhuk ceto-mukhaḥ prājñas tṛtīyaḥ pādaḥ ||`,
    translation:
      'Where one asleep neither desires any desire nor sees any dream — that is deep sleep. The third quarter is Prajna, whose sphere is deep sleep, who has become unified, who is a mass of consciousness, who is full of bliss, who experiences bliss, and whose face is consciousness.',
    explanation: {
      simple:
        'The third state is deep, dreamless sleep — where there are no desires, no dreams, no distinctions. Here, consciousness becomes "a mass of awareness" (prajñāna-ghana), undifferentiated and blissful. This sleeper is called Prajna (the "wise one").',
      deeper:
        'In deep sleep, the duality of subject and object dissolves. There is no "I" separate from experience — just unified awareness. The bliss (ānanda) felt in deep sleep comes from temporarily dropping the burden of ego and separation. We wake refreshed because we\'ve touched our true nature.',
    },
    practicalApplication:
      'Why do you feel restored after deep sleep? Because you\'ve returned to your source — undifferentiated consciousness. The same peace is available in meditation. Deep sleep gives you daily proof that you can exist without thoughts, worries, or ego.',
    keyTerms: [
      { term: 'Suṣupti', meaning: 'Deep sleep, dreamless sleep' },
      { term: 'Ekībhūta', meaning: 'Become unified, undifferentiated' },
      { term: 'Prajñāna-ghana', meaning: 'A mass of consciousness, dense awareness' },
      { term: 'Prājña', meaning: 'The wise one, the deep sleeper' },
      { term: 'Ānanda-bhuk', meaning: 'Experiencer of bliss' },
    ],
    themes: ['deep-sleep', 'consciousness', 'bliss', 'prajna', 'unity'],
    difficulty: 'intermediate',
    famousVerse: true,
  },

  // -------------------------------------------------------------------------
  // VERSE 6 - Prajna as the Lord
  // -------------------------------------------------------------------------
  {
    upanishad: 'mandukya',
    section: 1,
    verse: 6,
    sanskrit: `एष सर्वेश्वर एष सर्वज्ञ एषोऽन्तर्याम्येष योनिः सर्वस्य प्रभवाप्ययौ हि भूतानाम् ॥`,
    transliteration: `eṣa sarveśvara eṣa sarvajña eṣo 'ntaryāmy eṣa yoniḥ sarvasya prabhavāpyayau hi bhūtānām ||`,
    translation:
      'This (Prajna) is the Lord of all. This is the all-knowing. This is the inner controller. This is the source of all — the origin and dissolution of all beings.',
    explanation: {
      simple:
        'The state of deep sleep (Prajna) is described as the Lord of all, the all-knowing, the inner controller. It\'s the womb from which waking and dreaming emerge, and into which they dissolve.',
      deeper:
        'Why is deep sleep called "all-knowing"? Because in that state, there is no ignorance about separate objects — there are no separate objects. The undifferentiated consciousness of deep sleep is the source-state from which differentiated experience arises. It\'s compared to the unmanifest seed from which the tree grows.',
    },
    practicalApplication:
      'The source of your waking life isn\'t in the world "out there" — it\'s in the depths of your own awareness, which you visit every night in deep sleep. Understanding this shifts where you look for truth and peace.',
    keyTerms: [
      { term: 'Sarveśvara', meaning: 'Lord of all' },
      { term: 'Sarvajña', meaning: 'All-knowing, omniscient' },
      { term: 'Antaryāmī', meaning: 'Inner controller, indweller' },
      { term: 'Yoni', meaning: 'Source, womb, origin' },
    ],
    themes: ['source', 'lord', 'deep-sleep', 'origin', 'dissolution'],
    difficulty: 'advanced',
  },

  // -------------------------------------------------------------------------
  // VERSE 7 - The Fourth State (Turiya)
  // -------------------------------------------------------------------------
  {
    upanishad: 'mandukya',
    section: 1,
    verse: 7,
    sanskrit: `नान्तःप्रज्ञं न बहिष्प्रज्ञं नोभयतःप्रज्ञं न प्रज्ञानघनं न प्रज्ञं नाप्रज्ञम् ।
अदृष्टमव्यवहार्यमग्राह्यमलक्षणमचिन्त्यमव्यपदेश्यमेकात्मप्रत्ययसारं प्रपञ्चोपशमं शान्तं शिवमद्वैतं चतुर्थं मन्यन्ते स आत्मा स विज्ञेयः ॥`,
    transliteration: `nāntaḥ-prajñaṁ na bahiṣ-prajñaṁ nobhayataḥ-prajñaṁ na prajñāna-ghanaṁ na prajñaṁ nāprajñam |
adṛṣṭam avyavahāryam agrāhyam alakṣaṇam acintyam avyapadeśyam ekātma-pratyaya-sāraṁ prapañcopaśamaṁ śāntaṁ śivam advaitaṁ caturthaṁ manyante sa ātmā sa vijñeyaḥ ||`,
    translation:
      'Not inwardly conscious, not outwardly conscious, not conscious both ways, not a mass of consciousness, not conscious, not unconscious — unseen, beyond transaction, ungraspable, without characteristics, unthinkable, indescribable, the essence of the awareness of one Self, the cessation of the world, peaceful, auspicious, non-dual — this they consider the fourth. This is the Self. This is to be known.',
    explanation: {
      simple:
        'The fourth state (Turiya) is described by what it is NOT — not waking, not dreaming, not deep sleep, not conscious in any ordinary sense, not unconscious either. It\'s beyond all description. This is your true Self — pure awareness itself, peaceful, non-dual, the end of all illusion.',
      deeper:
        'This famous verse uses negation (neti neti method) because Turiya cannot be grasped by thought or described by words. It\'s not a state among other states but the background awareness in which all states appear. "Cessation of the world" (prapañcopaśama) means the illusory appearance of multiplicity dissolves when Turiya is recognized.',
    },
    practicalApplication:
      'You cannot "achieve" Turiya because you already ARE it. It\'s not a special experience to be gained but your ever-present nature to be recognized. Look for what is present in waking, dreaming, and deep sleep — that unchanging awareness is the fourth.',
    keyTerms: [
      { term: 'Turīya', meaning: 'The fourth, beyond the three states' },
      { term: 'Advaita', meaning: 'Non-dual, without a second' },
      { term: 'Prapañcopaśama', meaning: 'Cessation of the world-appearance' },
      { term: 'Śānta', meaning: 'Peaceful' },
      { term: 'Śiva', meaning: 'Auspicious, benevolent' },
      { term: 'Vijñeya', meaning: 'To be known, to be realized' },
    ],
    themes: ['turiya', 'non-dual', 'self', 'transcendence', 'negation'],
    difficulty: 'advanced',
    famousVerse: true,
  },

  // -------------------------------------------------------------------------
  // VERSE 8 - OM and the Self are One
  // -------------------------------------------------------------------------
  {
    upanishad: 'mandukya',
    section: 1,
    verse: 8,
    sanskrit: `सोऽयमात्माध्यक्षरमोङ्कारोऽधिमात्रं पादा मात्रा मात्राश्च पादा अकार उकारो मकार इति ॥`,
    transliteration: `so 'yam ātmādhyakṣaram oṅkāro 'dhimātraṁ pādā mātrā mātrāś ca pādā akāra ukāro makāra iti ||`,
    translation:
      'This same Self is OM, considered from the standpoint of its syllables. The quarters are the letters, and the letters are the quarters: A, U, M.',
    explanation: {
      simple:
        'The sound OM and the Self are the same. OM can be analyzed into three sounds — A, U, M — and these correspond to the three states (waking, dreaming, deep sleep). The fourth is the silence after.',
      deeper:
        'This verse introduces the key meditation technique of the Mandukya: using the sound OM to understand consciousness. A-U-M maps onto Vaishvanara-Taijasa-Prajna. By meditating on OM, you can directly explore the states of consciousness within your own experience.',
    },
    practicalApplication:
      'When you chant OM, consciously experience each part: A (ah) as waking awareness, U (oo) as the subtle dream realm, M (mm) as the depths of deep sleep. Then rest in the silence after — that\'s the fourth.',
    keyTerms: [
      { term: 'Akṣara', meaning: 'Syllable, letter; also imperishable' },
      { term: 'Mātrā', meaning: 'Letter, unit, measure' },
      { term: 'Akāra', meaning: 'The letter A' },
      { term: 'Ukāra', meaning: 'The letter U' },
      { term: 'Makāra', meaning: 'The letter M' },
    ],
    themes: ['om', 'meditation', 'sound', 'self'],
    difficulty: 'intermediate',
  },

  // -------------------------------------------------------------------------
  // VERSE 9 - A = Waking State
  // -------------------------------------------------------------------------
  {
    upanishad: 'mandukya',
    section: 1,
    verse: 9,
    sanskrit: `जागरितस्थानो वैश्वानरोऽकारः प्रथमा मात्राऽऽप्तेरादिमत्त्वाद्वाऽऽप्नोति ह वै सर्वान्कामानादिश्च भवति य एवं वेद ॥`,
    transliteration: `jāgarita-sthāno vaiśvānaro 'kāraḥ prathamā mātrā āpter ādimattvād vāpnoti ha vai sarvān kāmān ādiś ca bhavati ya evaṁ veda ||`,
    translation:
      'Vaishvanara in the waking state is the letter A, the first syllable, because of pervading (āpti) or because of being first (ādimat). One who knows this attains all desires and becomes first.',
    explanation: {
      simple:
        'The sound A represents the waking state (Vaishvanara). A is the first letter, just as waking is the first state we recognize. One who understands this connection gains mastery in the waking world.',
      deeper:
        'Āpti (pervading) suggests the waking state pervades common experience — it\'s what most people take to be reality. Ādimat (being first) indicates A is the first letter in the Sanskrit alphabet, as waking is the foundation of ordinary experience. The promise of "attaining desires" relates to success in the manifest world.',
    },
    practicalApplication:
      'When you pronounce the A in OM, bring awareness to your waking life — your body, senses, the physical world around you. This conscious connection transforms automatic experience into sacred awareness.',
    keyTerms: [
      { term: 'Āpti', meaning: 'Pervading, obtaining' },
      { term: 'Ādimat', meaning: 'Being first, primacy' },
    ],
    themes: ['waking', 'a-sound', 'om-meditation', 'mastery'],
    difficulty: 'intermediate',
  },

  // -------------------------------------------------------------------------
  // VERSE 10 - U = Dream State
  // -------------------------------------------------------------------------
  {
    upanishad: 'mandukya',
    section: 1,
    verse: 10,
    sanskrit: `स्वप्नस्थानस्तैजस उकारो द्वितीया मात्रोत्कर्षादुभयत्वाद्वोत्कर्षति ह वै ज्ञानसन्ततिं समानश्च भवति नास्याब्रह्मवित्कुले भवति य एवं वेद ॥`,
    transliteration: `svapna-sthānas taijasa ukāro dvitīyā mātrotkarṣād ubhayatvād votkarṣati ha vai jñāna-santatiṁ samānaś ca bhavati nāsyābrahma-vit-kule bhavati ya evaṁ veda ||`,
    translation:
      'Taijasa in the dream state is the letter U, the second syllable, because of excellence (utkarṣa) or being intermediate (ubhayatva). One who knows this increases the flow of knowledge and becomes equal (to all). In their family, no one is born who does not know Brahman.',
    explanation: {
      simple:
        'The sound U represents the dream state (Taijasa). U is intermediate in the word OM, just as dreaming is intermediate between waking and deep sleep. Understanding this brings spiritual knowledge and influence.',
      deeper:
        'Utkarṣa (excellence, elevation) suggests the dream state "elevates" from gross to subtle. Ubhayatva (being between both) places dreaming between outer and inner experience. The blessing that "no one born ignorant of Brahman" suggests this knowledge transforms the family lineage.',
    },
    practicalApplication:
      'When you pronounce the U in OM, turn attention inward — to mental images, subtle feelings, the creative power of mind. Recognize that your consciousness can create entire worlds internally.',
    keyTerms: [
      { term: 'Utkarṣa', meaning: 'Excellence, elevation, raising up' },
      { term: 'Ubhayatva', meaning: 'Being between both, intermediate' },
      { term: 'Jñāna-santati', meaning: 'Continuity of knowledge, stream of wisdom' },
    ],
    themes: ['dream', 'u-sound', 'om-meditation', 'knowledge'],
    difficulty: 'intermediate',
  },

  // -------------------------------------------------------------------------
  // VERSE 11 - M = Deep Sleep
  // -------------------------------------------------------------------------
  {
    upanishad: 'mandukya',
    section: 1,
    verse: 11,
    sanskrit: `सुषुप्तस्थानः प्राज्ञो मकारस्तृतीया मात्रा मितेरपीतेर्वा मिनोति ह वा इदं सर्वमपीतिश्च भवति य एवं वेद ॥`,
    transliteration: `suṣupta-sthānaḥ prājño makāras tṛtīyā mātrā miter apīter vā minoti ha vā idaṁ sarvam apītiś ca bhavati ya evaṁ veda ||`,
    translation:
      'Prajna in deep sleep is the letter M, the third syllable, because of measuring (miti) or merging (apīti). One who knows this measures all this and becomes one into whom all merges.',
    explanation: {
      simple:
        'The sound M represents deep sleep (Prajna). M closes the sound of OM, just as deep sleep closes the cycle of daily experience. Understanding this brings the power to "measure" (understand) all things.',
      deeper:
        'Miti (measuring) suggests deep sleep is where all experience is "measured out" from — the undifferentiated source from which waking and dreaming are portioned. Apīti (merging) indicates how all distinctions merge back into unity in deep sleep. The realized one becomes the source into whom everything returns.',
    },
    practicalApplication:
      'When you pronounce the M in OM, let it hum into silence. Feel the mind settling, distinctions fading, like sinking into deep sleep while remaining aware. This is the doorway to the fourth.',
    keyTerms: [
      { term: 'Miti', meaning: 'Measuring, knowing' },
      { term: 'Apīti', meaning: 'Merging, dissolution, entering into' },
      { term: 'Minoti', meaning: 'Measures, comprehends' },
    ],
    themes: ['deep-sleep', 'm-sound', 'om-meditation', 'dissolution'],
    difficulty: 'intermediate',
  },

  // -------------------------------------------------------------------------
  // VERSE 12 - The Silence (Turiya)
  // -------------------------------------------------------------------------
  {
    upanishad: 'mandukya',
    section: 1,
    verse: 12,
    sanskrit: `अमात्रश्चतुर्थोऽव्यवहार्यः प्रपञ्चोपशमः शिवोऽद्वैत एवमोङ्कार आत्मैव संविशत्यात्मनाऽऽत्मानं य एवं वेद ॥`,
    transliteration: `amātraś caturtho 'vyavahāryaḥ prapañcopaśamaḥ śivo 'dvaita evam oṅkāra ātmaiva saṁviśaty ātmanātmānaṁ ya evaṁ veda ||`,
    translation:
      'The fourth is without measure (amātra), beyond transaction, the cessation of the world-appearance, auspicious, non-dual. Thus OM is verily the Self. One who knows this enters the Self by the Self.',
    explanation: {
      simple:
        'The fourth aspect of OM is the silence after — without measurement, beyond description, the end of all illusion, auspicious, non-dual. This is your true Self. One who realizes this becomes one with the Self.',
      deeper:
        'Amātra (measureless) means Turiya cannot be grasped as an object — it\'s not another "thing" to know. It\'s the knowing itself. "Enters the Self by the Self" (ātmanātmānam saṁviśati) describes self-recognition: the Self realizes itself as itself, without any intermediary. This is liberation.',
    },
    practicalApplication:
      'After chanting A-U-M, rest in the silence. Don\'t look for an experience. Don\'t wait for something to happen. Simply be. That silent awareness — present before, during, and after the sound — is what you truly are.',
    keyTerms: [
      { term: 'Amātra', meaning: 'Without measure, beyond syllables' },
      { term: 'Prapañcopaśama', meaning: 'Cessation of world-appearance' },
      { term: 'Advaita', meaning: 'Non-dual' },
      { term: 'Saṁviśati', meaning: 'Enters, merges into' },
    ],
    themes: ['turiya', 'silence', 'non-dual', 'liberation', 'self-realization'],
    difficulty: 'advanced',
    famousVerse: true,
  },
];

// =============================================================================
// SECTION
// =============================================================================

const section1: UpanishadSection = {
  number: 1,
  name: {
    sanskrit: 'माण्डूक्योपनिषद्',
    english: 'Complete Text',
  },
  summary:
    'The Mandukya Upanishad presents a complete philosophy in just 12 verses. It begins by declaring OM to be everything, then analyzes consciousness into four aspects: waking (Vaishvanara), dreaming (Taijasa), deep sleep (Prajna), and the fourth (Turiya). It maps these to the sounds A-U-M and the silence after, providing both a philosophical framework and a practical meditation technique.',
  verses,
  isCurated: false,
};

// =============================================================================
// COMPLETE UPANISHAD
// =============================================================================

export const mandukyaUpanishad: Upanishad = {
  id: 'mandukya',
  name: {
    sanskrit: 'माण्डूक्योपनिषद्',
    english: 'Mandukya Upanishad',
    meaning: 'Named after the sage Manduka (frog), or "Frog Upanishad"',
  },
  veda: 'atharva',
  summary:
    'The Mandukya Upanishad is the shortest of the principal Upanishads but is considered by many to be the most profound. Shankaracharya said that if one could study only one Upanishad, it should be this one. In just 12 verses, it analyzes consciousness into four states — waking, dreaming, deep sleep, and the transcendent fourth (Turiya) — and maps these to the sacred syllable OM (A-U-M plus silence). It contains the Mahavakya "This Self is Brahman."',
  keyTeachings: [
    'OM encompasses all of reality — past, present, future, and beyond',
    'Consciousness has four aspects: waking, dreaming, deep sleep, and the fourth',
    'The three states correspond to A-U-M; the fourth is the silence',
    'The fourth (Turiya) is your true Self — non-dual, peaceful, beyond description',
    'Liberation is the Self recognizing itself by itself',
    'Deep sleep proves you can exist in bliss without thoughts or ego',
  ],
  mahavakya: {
    statement: 'अयमात्मा ब्रह्म',
    transliteration: 'Ayam Ātmā Brahma',
    meaning: 'This Self is Brahman',
  },
  totalVerses: 12,
  includedVerses: 12,
  sections: [section1],
  difficulty: 'intermediate',
  estimatedReadTime: '20 min',
};
