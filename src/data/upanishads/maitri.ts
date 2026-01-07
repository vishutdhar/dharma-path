/**
 * Maitri Upanishad (Maitrayaniya Upanishad)
 *
 * One of the 13 principal Upanishads, from the Yajur Veda.
 * Contains approximately 100 verses across 7 chapters.
 *
 * This is a CURATED selection of approximately 50 key verses focusing on:
 * - Chapter 1-2: King Brihadratha's Renunciation and Quest
 * - Chapter 3: The Nature of the Individual Self
 * - Chapter 4: The Three Gunas and OM Meditation
 * - Chapter 6: The Supreme Brahman and Liberation
 *
 * Key teachings:
 * - The world as a source of suffering for the unenlightened
 * - The two aspects of Brahman (with and without qualities)
 * - The nature of the individual soul (jiva)
 * - Meditation on OM as the path to liberation
 * - The three gunas (qualities) of nature
 *
 * Note: This is a later Upanishad that synthesizes teachings from
 * multiple earlier sources, showing the development of Upanishadic thought.
 */

import { Upanishad, UpanishadVerse, UpanishadSection } from './types';

// =============================================================================
// CHAPTERS 1-2: KING BRIHADRATHA'S QUEST (12 verses)
// =============================================================================

const chapters1_2Verses: UpanishadVerse[] = [
  {
    upanishad: 'maitri',
    section: 1,
    verse: 1,
    sanskrit: 'ब्रह्मयज्ञो वै पूर्वमासीत्। तत्र ब्रह्मा ब्रह्मविद्यां प्रावोचत्।',
    transliteration: 'brahmayajño vai pūrvamāsīt | tatra brahmā brahmavidyāṃ prāvocat |',
    translation: 'In ancient times, there was a knowledge-sacrifice. There, Brahma proclaimed the knowledge of Brahman.',
    explanation: {
      simple: 'Long ago, the creator Brahma taught the science of the ultimate reality to seekers.',
      deeper: 'This frames the teaching as having ancient, divine origins - knowledge passed down through a sacred lineage.'
    },
    practicalApplication: 'The wisdom you seek has been sought by countless seekers before you - you join a timeless stream.',
    themes: ['lineage', 'knowledge', 'tradition'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'maitri',
    section: 1,
    verse: 2,
    sanskrit: 'बृहद्रथो नाम राजा। स पुत्रे राज्यं निर्याप्य अरण्यं निर्जगाम।',
    transliteration: 'bṛhadratho nāma rājā | sa putre rājyaṃ niryāpya araṇyaṃ nirjagāma |',
    translation: 'There was a king named Brihadratha. Having handed over his kingdom to his son, he retired to the forest.',
    explanation: {
      simple: 'King Brihadratha gave up his throne to his son and went to the forest to seek spiritual truth.',
      deeper: 'This represents the traditional fourth stage of life (sannyasa) - when one renounces worldly duties for spiritual pursuit.'
    },
    practicalApplication: 'There comes a time when external achievements no longer satisfy, and we must turn inward.',
    themes: ['renunciation', 'seeking', 'life stages'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'maitri',
    section: 1,
    verse: 3,
    sanskrit: 'परमां तपस्तप्यमानः सूर्यमुद्वीक्ष्य ऊर्ध्वबाहुस्तिष्ठति।',
    transliteration: 'paramāṃ tapastapyamānaḥ sūryamudvīkṣya ūrdhvabāhustiṣṭhati |',
    translation: 'Practicing the highest austerity, he stood with upraised arms, gazing at the sun.',
    explanation: {
      simple: 'The king performed intense spiritual practices, standing with arms raised while gazing at the sun.',
      deeper: 'The sun represents the supreme light of consciousness. Gazing at it symbolizes focusing on the highest truth.'
    },
    practicalApplication: 'Intense longing and focused attention are necessary for spiritual realization.',
    themes: ['tapas', 'austerity', 'sun'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'maitri',
    section: 1,
    verse: 4,
    sanskrit: 'अस्मिन् अल्पोदके शरीरे कस्तृप्तिर्विषयेषु कामवृत्तेः?',
    transliteration: 'asmin alpodake śarīre kastṛptirviṣayeṣu kāmavṛtteḥ? |',
    translation: 'In this body of little moisture, what satisfaction can there be in sense objects through the action of desire?',
    explanation: {
      simple: 'The king reflects: This perishable body cannot find lasting satisfaction through worldly pleasures.',
      deeper: 'This is viveka (discrimination) - seeing the limitation of all that is impermanent and dependent.'
    },
    practicalApplication: 'Question whether your pursuits of pleasure have ever brought lasting fulfillment.',
    themes: ['dispassion', 'reflection', 'body'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'maitri',
    section: 1,
    verse: 5,
    sanskrit: 'अस्मिन् संसारे किं कामोपभोगैः येषां सेवया पुनःपुनरस्मिंश्चक्रे भ्रमति।',
    transliteration: 'asmin saṃsāre kiṃ kāmopabhogaiḥ yeṣāṃ sevayā punaḥpunarasmiṃścakre bhramati |',
    translation: 'In this worldly existence, what use are the enjoyments of desire? By their pursuit, one wanders again and again in this wheel.',
    explanation: {
      simple: 'What is the point of chasing desires when doing so keeps us spinning in the cycle of birth and death?',
      deeper: 'This verse expresses vairagya (dispassion) born of understanding the futility of samsara.'
    },
    practicalApplication: 'Recognize how desire keeps you on the wheel of dissatisfaction - wanting, getting, wanting again.',
    themes: ['samsara', 'desire', 'wheel'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'maitri',
    section: 1,
    verse: 6,
    sanskrit: 'सर्वस्यास्य जगतः शोषयिता काल इत्यधिकृते किं कामोपभोगैः।',
    transliteration: 'sarvasyāsya jagataḥ śoṣayitā kāla ityadhikṛte kiṃ kāmopabhogaiḥ |',
    translation: 'When it is known that Time is the dryer-up of all this world, what use are the enjoyments of desire?',
    explanation: {
      simple: 'Since Time destroys everything in this world, what is the value of temporary pleasures?',
      deeper: 'Time (Kala) is the great destroyer - understanding impermanence leads to seeking the timeless.'
    },
    practicalApplication: 'Everything you chase will be taken by time - seek what is beyond time.',
    themes: ['time', 'impermanence', 'dispassion'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'maitri',
    section: 2,
    verse: 1,
    sanskrit: 'अथ शाकायन्यो भगवान्तमुवाच - उत्तिष्ठ उत्तिष्ठ वरं वृणीष्व।',
    transliteration: 'atha śākāyanyo bhagavāntamuvāca - uttiṣṭha uttiṣṭha varaṃ vṛṇīṣva |',
    translation: 'Then the blessed Shakayanya said to him: "Rise! Rise! Choose a boon!"',
    explanation: {
      simple: 'The sage Shakayanya appeared and offered to grant the king any wish.',
      deeper: 'When the seeker is ready through purification and longing, the teacher appears with the gift of knowledge.'
    },
    practicalApplication: 'Sincere seeking naturally attracts guidance - the teacher appears when the student is ready.',
    themes: ['teacher', 'boon', 'readiness'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'maitri',
    section: 2,
    verse: 2,
    sanskrit: 'स होवाच - भगवन्नात्मविद्वानात्मतत्त्वं मे ब्रूहीति।',
    transliteration: 'sa hovāca - bhagavannātmavidvānātmatattvaṃ me brūhīti |',
    translation: 'He replied: "Blessed one, you who know the Self - tell me the truth about the Self!"',
    explanation: {
      simple: 'The king asked only for knowledge of the Self - not for power, pleasure, or worldly gains.',
      deeper: 'This is the highest request a human can make - seeking the truth of one\'s own being.'
    },
    practicalApplication: 'Of all the things you could ask for, ask for self-knowledge - it includes everything else.',
    themes: ['request', 'self-knowledge', 'wisdom'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    upanishad: 'maitri',
    section: 2,
    verse: 3,
    sanskrit: 'आसीद्ध्येतदुक्तं पुराणे - दुर्विज्ञेय आत्मतत्त्वस्य प्रश्नो\'यम्।',
    transliteration: 'āsīddhyetaduktaṃ purāṇe - durvijñeya ātmatattvasyapraśno\'yam |',
    translation: 'The sage said: "It has been said of old - this question about the truth of the Self is hard to understand."',
    explanation: {
      simple: 'The sage acknowledged that questions about the Self are difficult and have been pondered since ancient times.',
      deeper: 'The difficulty lies not in the Self being obscure, but in the seeker being identified with what is not the Self.'
    },
    practicalApplication: 'The truth about yourself is both the simplest and most subtle thing to understand.',
    themes: ['difficulty', 'self-knowledge', 'tradition'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'maitri',
    section: 2,
    verse: 4,
    sanskrit: 'एतत्खल्वात्मानं विदित्वा देवाः सत्याः सन्तो देवत्वमभजन्त।',
    transliteration: 'etathalvātmānaṃ viditvā devāḥ satyāḥ santo devatvamabhajanta |',
    translation: 'Having known this Self, the gods, being true, attained their godhood.',
    explanation: {
      simple: 'Even the gods became divine by knowing the Self - this knowledge is the source of all greatness.',
      deeper: 'Divinity is not about supernatural powers but about knowing one\'s true nature as consciousness.'
    },
    practicalApplication: 'True nobility comes from self-knowledge, not from external status or power.',
    themes: ['gods', 'self-knowledge', 'divinity'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'maitri',
    section: 2,
    verse: 5,
    sanskrit: 'ऋषयो विद्याप्राप्त्या तदेव ब्रह्माभवन्। तदात्मानमात्मना विजानीहि।',
    transliteration: 'ṛṣayo vidyāprāptyā tadeva brahmābhavan | tadātmānamātmanā vijānīhi |',
    translation: 'The sages, by attaining this knowledge, became Brahman itself. Know the Self by the Self.',
    explanation: {
      simple: 'The ancient sages became one with ultimate reality through this knowledge. You must know yourself by yourself.',
      deeper: 'The Self can only be known by the Self - no external means can reveal what is already present as the knower.'
    },
    practicalApplication: 'Only you can know yourself - no one else can do it for you. Turn inward.',
    themes: ['sages', 'becoming', 'self-inquiry'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'maitri',
    section: 2,
    verse: 6,
    sanskrit: 'एवमेतद्ब्रह्मयोगं प्राप्य ब्रह्मैव भवतीत्येतदिहाख्यातम्।',
    transliteration: 'evametadbrahmayogaṃ prāpya brahmaiva bhavatītyetadihākhyātam |',
    translation: 'Thus, attaining union with Brahman, one becomes Brahman itself - this is what is taught here.',
    explanation: {
      simple: 'The ultimate result of this path is to realize oneself as Brahman, the supreme reality.',
      deeper: 'This is not becoming something new but recognizing what one already is - existence-consciousness-bliss.'
    },
    practicalApplication: 'The goal is not to become something different but to recognize your true nature.',
    themes: ['union', 'brahman', 'realization'],
    difficulty: 'intermediate',
  },
];

const section1_2: UpanishadSection = {
  number: 1,
  name: { sanskrit: 'प्रथम-द्वितीयोऽध्यायः', english: 'The King\'s Quest' },
  summary: 'King Brihadratha renounces his kingdom and through intense austerity attracts the sage Shakayanya. He asks for self-knowledge, and the sage explains that knowing the Self is how the gods became divine and sages became Brahman.',
  verses: chapters1_2Verses,
  isCurated: true,
  totalVerses: 20,
};

// =============================================================================
// CHAPTER 3: THE NATURE OF THE INDIVIDUAL SELF (12 verses)
// =============================================================================

const chapter3Verses: UpanishadVerse[] = [
  {
    upanishad: 'maitri',
    section: 3,
    verse: 1,
    sanskrit: 'अथ खल्वयमात्मा संसारी भवति सर्गे सर्गे।',
    transliteration: 'atha khalvayamātmā saṃsārī bhavati sarge sarge |',
    translation: 'Now, this Self becomes a transmigrator, creation after creation.',
    explanation: {
      simple: 'The individual self (jiva) wanders through birth after birth in the cycle of creation.',
      deeper: 'This describes the condition of the unenlightened self - identified with body-mind, it experiences repeated incarnations.'
    },
    practicalApplication: 'Consider that you have been seeking happiness through countless lifetimes - this life is an opportunity to end the search.',
    themes: ['transmigration', 'jiva', 'cycle'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'maitri',
    section: 3,
    verse: 2,
    sanskrit: 'स खल्वयं भूतात्मा भूतैरभिभूयमानो विशति गर्भे।',
    transliteration: 'sa khalvayaṃ bhūtātmā bhūtairabhbhūyamāno viśati garbhe |',
    translation: 'This self of the elements, overcome by the elements, enters the womb.',
    explanation: {
      simple: 'The individual self, overpowered by the material elements, enters a womb to be born again.',
      deeper: 'The soul, due to its karmic impressions and desires, is drawn to a particular body suited to its evolution.'
    },
    practicalApplication: 'Your current birth is not random but the result of accumulated tendencies - use it wisely.',
    themes: ['rebirth', 'elements', 'karma'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'maitri',
    section: 3,
    verse: 3,
    sanskrit: 'यद्वत्खलु कर्माभिभूतो विशति गर्भे तद्वद्विद्याभिभूतो विमुच्यते।',
    transliteration: 'yadvatkalu karmābhibhūto viśati garbhe tadvadvidyābhibhūto vimucyate |',
    translation: 'Just as one overpowered by karma enters the womb, so one overpowered by knowledge is liberated.',
    explanation: {
      simple: 'Just as karma binds and causes rebirth, so knowledge liberates and ends the cycle.',
      deeper: 'This is the fundamental teaching: ignorance binds, knowledge frees. The same self that was bound becomes free through understanding.'
    },
    practicalApplication: 'Knowledge has the power to liberate you from the very forces that have bound you for lifetimes.',
    themes: ['karma', 'knowledge', 'liberation'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'maitri',
    section: 3,
    verse: 4,
    sanskrit: 'त्रयो गुणाः सत्त्वं रजस्तम इति। तैरात्मा बद्धो भवति।',
    transliteration: 'trayo guṇāḥ sattvaṃ rajastama iti | tairātmā baddho bhavati |',
    translation: 'There are three qualities: sattva, rajas, and tamas. By these, the Self becomes bound.',
    explanation: {
      simple: 'The three qualities of nature - purity, activity, and inertia - are what bind the Self to worldly existence.',
      deeper: 'The gunas are the strands of prakriti (nature). As long as we identify with the body-mind, we are governed by them.'
    },
    practicalApplication: 'Observe which quality dominates you now - inertia, restlessness, or clarity. You can transcend all three.',
    themes: ['gunas', 'bondage', 'prakriti'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'maitri',
    section: 3,
    verse: 5,
    sanskrit: 'सत्त्वेन ऊर्ध्वं गच्छति, रजसा मध्ये तिष्ठति, तमसा अधो गच्छति।',
    transliteration: 'sattvena ūrdhvaṃ gacchati, rajasā madhye tiṣṭhati, tamasā adho gacchati |',
    translation: 'By sattva one goes upward, by rajas one stays in the middle, by tamas one goes downward.',
    explanation: {
      simple: 'Sattva leads to higher states, rajas keeps one in the human realm, tamas leads to lower states.',
      deeper: 'The gunas determine the direction of evolution - toward divinity, human rebirth, or devolution.'
    },
    practicalApplication: 'Cultivate sattva through purity, discrimination, and spiritual practice.',
    themes: ['gunas', 'evolution', 'direction'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'maitri',
    section: 3,
    verse: 6,
    sanskrit: 'गुणान्प्रकृतिसंभवान् विद्यात्। स्वयं तु अगुणो निर्गुणो भवति।',
    transliteration: 'guṇānprakṛtisaṃbhavān vidyāt | svayaṃ tu aguṇo nirguṇo bhavati |',
    translation: 'Know that the gunas arise from prakriti (nature). The Self itself is without qualities, beyond qualities.',
    explanation: {
      simple: 'While the gunas belong to nature, the true Self is beyond all qualities - it is pure awareness.',
      deeper: 'This is the key discrimination: identify not with the changing qualities but with the changeless witness.'
    },
    practicalApplication: 'You are not your moods, not your thoughts, not your tendencies - you are the awareness that knows them.',
    themes: ['nirguna', 'witness', 'discrimination'],
    difficulty: 'advanced',
    famousVerse: true,
  },
  {
    upanishad: 'maitri',
    section: 3,
    verse: 7,
    sanskrit: 'द्वे वाव ब्रह्मणो रूपे - मूर्तं चैवामूर्तं च।',
    transliteration: 'dve vāva brahmaṇo rūpe - mūrtaṃ caivāmūrtaṃ ca |',
    translation: 'Brahman has two forms - the formed and the formless.',
    explanation: {
      simple: 'The ultimate reality has two aspects: one with form (manifest universe) and one without form (pure consciousness).',
      deeper: 'Saguna Brahman (with qualities) and Nirguna Brahman (without qualities) are both valid ways of understanding the Absolute.'
    },
    practicalApplication: 'Both the world of forms and the formless awareness are aspects of one reality.',
    themes: ['saguna', 'nirguna', 'two forms'],
    difficulty: 'advanced',
    famousVerse: true,
  },
  {
    upanishad: 'maitri',
    section: 3,
    verse: 8,
    sanskrit: 'तत्र मूर्तं यत्पृथिव्यादि अमूर्तं तु तत्परम्।',
    transliteration: 'tatra mūrtaṃ yatpṛthivyādi amūrtaṃ tu tatparam |',
    translation: 'The formed is earth and so on. The formless is that which is beyond.',
    explanation: {
      simple: 'The physical world of elements is the formed aspect; the transcendent reality is the formless aspect.',
      deeper: 'Earth, water, fire, air, space are the formed. That which is beyond all of them is the formless Brahman.'
    },
    practicalApplication: 'See the divine in both the manifest world and in the silence beyond it.',
    themes: ['elements', 'transcendence', 'form'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'maitri',
    section: 3,
    verse: 9,
    sanskrit: 'तद्येतदमूर्तं तत्सत्यं तद्ब्रह्म तज्ज्योतिः।',
    transliteration: 'tadyetadamūrtaṃ tatsatyaṃ tadbrahma tajjyotiḥ |',
    translation: 'That which is formless is truth, is Brahman, is light.',
    explanation: {
      simple: 'The formless reality is truth itself, Brahman, pure light of consciousness.',
      deeper: 'Beyond all forms, there is only truth (sat), consciousness (brahman), and the light that reveals all.'
    },
    practicalApplication: 'Seek the light of consciousness that illumines all experiences, all forms.',
    themes: ['truth', 'brahman', 'light'],
    difficulty: 'advanced',
  },
  {
    upanishad: 'maitri',
    section: 3,
    verse: 10,
    sanskrit: 'तज्ज्योतिषां ज्योतिः। तदु देवा उपासते अमृतम्।',
    transliteration: 'tajjyotiṣāṃ jyotiḥ | tadu devā upāsate amṛtam |',
    translation: 'That is the light of lights. The gods worship it as the immortal.',
    explanation: {
      simple: 'That consciousness is the light that illumines all other lights. Even the gods meditate on it as the deathless.',
      deeper: 'All lights - sun, moon, fire, mind - are illumined by the one light of consciousness, which is self-luminous.'
    },
    practicalApplication: 'What light illumines your awareness of light? Seek that ultimate light.',
    themes: ['light of lights', 'immortal', 'gods'],
    difficulty: 'advanced',
    famousVerse: true,
  },
  {
    upanishad: 'maitri',
    section: 3,
    verse: 11,
    sanskrit: 'सर्वमेतदक्षरे प्रतिष्ठितम्। स एष आत्मान्तर्यामी।',
    transliteration: 'sarvametadakṣare pratiṣṭhitam | sa eṣa ātmāntaryāmī |',
    translation: 'All this is established in the Imperishable. That is the Self, the inner controller.',
    explanation: {
      simple: 'Everything exists in and depends on the imperishable Self, which is the inner ruler of all.',
      deeper: 'The Antaryami (inner controller) is not separate from the individual - it is one\'s own Self.'
    },
    practicalApplication: 'The inner controller you seek is your own Self - not some distant deity.',
    themes: ['imperishable', 'antaryami', 'foundation'],
    difficulty: 'advanced',
  },
  {
    upanishad: 'maitri',
    section: 3,
    verse: 12,
    sanskrit: 'स आत्मा सर्वभूतान्तरात्मा सर्वभूतेषु गूढः।',
    transliteration: 'sa ātmā sarvabhūtāntarātmā sarvabhūteṣu gūḍhaḥ |',
    translation: 'That Self is the inner Self of all beings, hidden in all beings.',
    explanation: {
      simple: 'The one Self dwells as the innermost reality in all living beings, though hidden.',
      deeper: 'Hidden by the coverings of body, senses, mind, and intellect, the Self remains ever-present and unchanging.'
    },
    practicalApplication: 'The same Self in you is in all beings - see through the surface differences to this shared essence.',
    themes: ['unity', 'hidden', 'all beings'],
    difficulty: 'intermediate',
  },
];

const section3: UpanishadSection = {
  number: 3,
  name: { sanskrit: 'तृतीयोऽध्यायः', english: 'The Individual Self' },
  summary: 'This chapter describes the individual soul\'s transmigration through the cycle of rebirth, bound by the three gunas. It teaches that knowledge liberates, and that the Self is beyond all qualities - the formless light that illumines everything.',
  verses: chapter3Verses,
  isCurated: true,
  totalVerses: 28,
};

// =============================================================================
// CHAPTER 4: OM AND THE THREE GUNAS (12 verses)
// =============================================================================

const chapter4Verses: UpanishadVerse[] = [
  {
    upanishad: 'maitri',
    section: 4,
    verse: 1,
    sanskrit: 'ओमित्येतदक्षरमिदं सर्वम्। तस्योपव्याख्यानम्।',
    transliteration: 'omityetadakṣaramidaṃ sarvam | tasyopavyākhyānam |',
    translation: 'OM - this syllable is all this. Here is its explanation.',
    explanation: {
      simple: 'The sacred syllable OM encompasses everything that exists. Now its meaning will be explained.',
      deeper: 'OM is not just a word but the sound-form of ultimate reality - it contains all that was, is, and will be.'
    },
    practicalApplication: 'Chanting OM connects you with the totality of existence - past, present, and future.',
    themes: ['om', 'sacred syllable', 'totality'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    upanishad: 'maitri',
    section: 4,
    verse: 2,
    sanskrit: 'ॐकारो वाव ब्रह्म। ॐकारोऽयं सर्वम्।',
    transliteration: 'oṃkāro vāva brahma | oṃkāro\'yaṃ sarvam |',
    translation: 'OM is indeed Brahman. OM is all this.',
    explanation: {
      simple: 'OM is Brahman itself. OM is this entire universe.',
      deeper: 'The sound OM is not merely a symbol of Brahman but is Brahman in its audible, accessible form.'
    },
    practicalApplication: 'When you chant OM with understanding, you are invoking ultimate reality itself.',
    themes: ['om', 'brahman', 'identity'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'maitri',
    section: 4,
    verse: 3,
    sanskrit: 'अकार उकार मकार इति। त्रिमात्रमोमिति।',
    transliteration: 'akāra ukāra makāra iti | trimātraomiti |',
    translation: 'A, U, M - these are the three measures (matras). Thus OM has three elements.',
    explanation: {
      simple: 'OM consists of three sounds: A, U, and M - together forming the complete syllable.',
      deeper: 'These three correspond to creation, preservation, and dissolution; waking, dream, and deep sleep; past, present, and future.'
    },
    practicalApplication: 'When chanting OM, be aware of its three parts merging into one unified sound.',
    themes: ['om', 'three parts', 'structure'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'maitri',
    section: 4,
    verse: 4,
    sanskrit: 'अकारेण पृथिवी लभ्यते। उकारेणान्तरिक्षम्। मकारेण द्युलोकः।',
    transliteration: 'akāreṇa pṛthivī labhyate | ukāreṇāntarikṣam | makāreṇa dyulokaḥ |',
    translation: 'By A, earth is attained. By U, the atmosphere. By M, the heaven.',
    explanation: {
      simple: 'Each sound of OM corresponds to a level of existence - earth, space, and heaven.',
      deeper: 'The three realms represent progressively subtler levels of reality, all contained within OM.'
    },
    practicalApplication: 'OM spans all levels of reality - from the grossest to the most subtle.',
    themes: ['om', 'three worlds', 'levels'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'maitri',
    section: 4,
    verse: 5,
    sanskrit: 'अकारो रजस्तेजस्। उकारः सत्त्वं प्रकाशः। मकारस्तमो ध्वान्तम्।',
    transliteration: 'akāro rajastejas | ukāraḥ sattvaṃ prakāśaḥ | makārastamo dhvāntam |',
    translation: 'A is rajas (fire, energy). U is sattva (light, purity). M is tamas (darkness, inertia).',
    explanation: {
      simple: 'The three sounds also correspond to the three gunas - activity, purity, and inertia.',
      deeper: 'Through OM, one can contemplate and ultimately transcend all three qualities of nature.'
    },
    practicalApplication: 'OM contains all qualities yet transcends them - use it to rise above your conditioning.',
    themes: ['om', 'gunas', 'correspondences'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'maitri',
    section: 4,
    verse: 6,
    sanskrit: 'ओमित्यात्मानं युञ्जीत। एष देवो ज्योतिर्मयः।',
    transliteration: 'omityātmānaṃ yuñjīta | eṣa devo jyotirmayaḥ |',
    translation: 'One should unite the Self with OM. This divinity is made of light.',
    explanation: {
      simple: 'The practice is to merge your sense of self with OM. This leads to the divine light.',
      deeper: 'OM meditation is a form of yoga (union) - the individual dissolves into the universal through the sound.'
    },
    practicalApplication: 'Practice chanting OM while feeling your individual identity merge with the infinite.',
    themes: ['om', 'meditation', 'union'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'maitri',
    section: 4,
    verse: 7,
    sanskrit: 'उदगीता ह्येष मनसा वेद्यो वाचा वदितव्यः।',
    transliteration: 'udagītā hyeṣa manasā vedyo vācā vaditavyaḥ |',
    translation: 'This is to be known by the mind and uttered by speech as the Udgitha (sacred chant).',
    explanation: {
      simple: 'OM should be both understood intellectually and chanted vocally as the sacred hymn.',
      deeper: 'True practice involves both jnana (knowledge) and upasana (meditation/worship) combined.'
    },
    practicalApplication: 'Combine understanding with practice - know what OM means while you chant it.',
    themes: ['udgitha', 'practice', 'knowledge'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'maitri',
    section: 4,
    verse: 8,
    sanskrit: 'एतेन प्राणायामेन मनः शुध्यति। मनसः शुद्धौ आत्मा प्रकाशते।',
    transliteration: 'etena prāṇāyāmena manaḥ śudhyati | manasaḥ śuddhau ātmā prakāśate |',
    translation: 'By this pranayama (breath control with OM), the mind is purified. When the mind is pure, the Self shines forth.',
    explanation: {
      simple: 'Breathing exercises combined with OM purify the mind. A pure mind reveals the Self.',
      deeper: 'The impurities of the mind are the only obstacle to self-knowledge. Remove them, and the ever-present Self is revealed.'
    },
    practicalApplication: 'Practice OM with conscious breathing to purify the mind and reveal your true nature.',
    themes: ['pranayama', 'purification', 'revelation'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'maitri',
    section: 4,
    verse: 9,
    sanskrit: 'तस्मादोमित्येतेनैवाक्षरेण तत्परं ब्रह्मोपासीत।',
    transliteration: 'tasmādomityetenaivākṣareṇa tatparaṃ brahmopāsīta |',
    translation: 'Therefore, one should meditate on the supreme Brahman through this syllable OM alone.',
    explanation: {
      simple: 'OM is the recommended method for approaching the supreme reality.',
      deeper: 'Among all meditation techniques, OM holds a special place as the direct sound-form of the Absolute.'
    },
    practicalApplication: 'Make OM your primary meditation - it is a direct path to the highest truth.',
    themes: ['om', 'meditation', 'instruction'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'maitri',
    section: 4,
    verse: 10,
    sanskrit: 'स वा एष ब्रह्म यः परमात्मा। स ओमित्येतेनाक्षरेण परिगृह्यते।',
    transliteration: 'sa vā eṣa brahma yaḥ paramātmā | sa omityetenākṣareṇa parigṛhyate |',
    translation: 'That which is Brahman, the Supreme Self - It is grasped through this syllable OM.',
    explanation: {
      simple: 'Brahman, the Supreme Self, can be attained through the practice of OM.',
      deeper: 'OM is not just a symbol but a vehicle - through it, one can reach what it represents.'
    },
    practicalApplication: 'OM is your access point to the infinite - use it consistently and with devotion.',
    themes: ['om', 'brahman', 'access'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'maitri',
    section: 4,
    verse: 11,
    sanskrit: 'अचिन्त्यो ह्ययं ह्यात्मा। तमोंकारेण प्राप्नोति विद्वान्।',
    transliteration: 'acintyo hyayaṃ hyātmā | tamoṃkāreṇa prāpnoti vidvān |',
    translation: 'This Self is indeed inconceivable. The wise one attains It through OM.',
    explanation: {
      simple: 'The Self cannot be grasped by ordinary thinking, but the wise attain it through OM meditation.',
      deeper: 'Since the Self is beyond concepts, a trans-conceptual method is needed. OM bypasses the thinking mind.'
    },
    practicalApplication: 'Don\'t try to think your way to the Self - use OM to transcend thought entirely.',
    themes: ['inconceivable', 'om', 'transcendence'],
    difficulty: 'advanced',
  },
  {
    upanishad: 'maitri',
    section: 4,
    verse: 12,
    sanskrit: 'तमोंकारेण पश्यत्यात्मानं तुरीयं पदम्।',
    transliteration: 'tamoṃkāreṇa paśyatyātmānaṃ turīyaṃ padam |',
    translation: 'Through OM, one sees the Self in the fourth state (turiya).',
    explanation: {
      simple: 'OM leads to the fourth state of consciousness - beyond waking, dream, and sleep - where the Self is realized.',
      deeper: 'Turiya is not really a "state" but the consciousness that underlies and pervades all three states.'
    },
    practicalApplication: 'Let OM take you beyond all states to the ever-present awareness that witnesses them all.',
    themes: ['turiya', 'om', 'self-realization'],
    difficulty: 'advanced',
    famousVerse: true,
  },
];

const section4: UpanishadSection = {
  number: 4,
  name: { sanskrit: 'चतुर्थोऽध्यायः', english: 'OM and the Gunas' },
  summary: 'This chapter presents the sacred syllable OM as identical with Brahman and as the means to attain liberation. It explains the three components (A, U, M) corresponding to the three gunas and three worlds, and teaches OM meditation as the path to the fourth state (turiya).',
  verses: chapter4Verses,
  isCurated: true,
  totalVerses: 20,
};

// =============================================================================
// CHAPTER 6: LIBERATION AND THE SUPREME (14 verses)
// =============================================================================

const chapter6Verses: UpanishadVerse[] = [
  {
    upanishad: 'maitri',
    section: 6,
    verse: 1,
    sanskrit: 'द्वे वाव ब्रह्मणी अभ्यध्येये - शब्दब्रह्म अशब्दब्रह्म च।',
    transliteration: 'dve vāva brahmaṇī abhyadhyeye - śabdabrahma aśabdabrahma ca |',
    translation: 'There are two Brahmans to be meditated upon - the sound-Brahman and the soundless Brahman.',
    explanation: {
      simple: 'Meditation can be on Brahman as sound (OM) or on Brahman as pure silence beyond all sound.',
      deeper: 'Shabda-Brahman is the approach through mantra; Ashabda-Brahman is direct abidance in silence.'
    },
    practicalApplication: 'Use sound (mantra) to reach silence. Both are valid approaches to the same reality.',
    themes: ['two brahmans', 'sound', 'silence'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'maitri',
    section: 6,
    verse: 2,
    sanskrit: 'शब्देनैवाशब्दं विव्रियते। ओमिति।',
    transliteration: 'śabdenaivāśabdaṃ vivriyate | omiti |',
    translation: 'By sound alone is the soundless revealed - that is, by OM.',
    explanation: {
      simple: 'Paradoxically, the soundless Brahman is revealed through the sound OM.',
      deeper: 'OM is the bridge between the manifest and unmanifest - through it, one passes from sound to silence.'
    },
    practicalApplication: 'Use OM as a gateway - follow its sound into the silence from which it emerges.',
    themes: ['om', 'sound', 'silence'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'maitri',
    section: 6,
    verse: 3,
    sanskrit: 'स ओमित्यनेन शब्देन सगुणं ब्रह्म। अथाशब्दं निर्गुणम्।',
    transliteration: 'sa omityanena śabdena saguṇaṃ brahma | athāśabdaṃ nirguṇam |',
    translation: 'Through this sound OM, one approaches Brahman with qualities. Then, the soundless - Brahman without qualities.',
    explanation: {
      simple: 'OM leads first to Brahman with qualities (saguna), then to the attributeless Brahman (nirguna).',
      deeper: 'This is the path of progressive transcendence - from name and form to the formless.'
    },
    practicalApplication: 'Start with form (deity, mantra, image), then let it dissolve into formlessness.',
    themes: ['saguna', 'nirguna', 'progression'],
    difficulty: 'advanced',
  },
  {
    upanishad: 'maitri',
    section: 6,
    verse: 4,
    sanskrit: 'मनो हि द्विविधं प्रोक्तं शुद्धं चाशुद्धमेव च।',
    transliteration: 'mano hi dvividhaṃ proktaṃ śuddhaṃ cāśuddhameva ca |',
    translation: 'The mind is said to be of two kinds - pure and impure.',
    explanation: {
      simple: 'There are two states of mind - one that is pure and conducive to realization, one that is impure and causes bondage.',
      deeper: 'The impure mind is full of desires and aversions; the pure mind is transparent to the Self.'
    },
    practicalApplication: 'Work to purify your mind through right action, right thought, and meditation.',
    themes: ['mind', 'purity', 'two kinds'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'maitri',
    section: 6,
    verse: 5,
    sanskrit: 'अशुद्धं कामसंकल्पं शुद्धं कामविवर्जितम्।',
    transliteration: 'aśuddhaṃ kāmasaṃkalpaṃ śuddhaṃ kāmavivarjitam |',
    translation: 'The impure is accompanied by desire; the pure is free from desire.',
    explanation: {
      simple: 'An impure mind is attached to desires; a pure mind is free from selfish wanting.',
      deeper: 'Desire here means selfish craving - the attempt to find wholeness through external objects.'
    },
    practicalApplication: 'Notice your desires - not to suppress them but to see they arise from a sense of incompleteness.',
    themes: ['desire', 'purity', 'freedom'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'maitri',
    section: 6,
    verse: 6,
    sanskrit: 'मन एव मनुष्याणां कारणं बन्धमोक्षयोः।',
    transliteration: 'mana eva manuṣyāṇāṃ kāraṇaṃ bandhamokṣayoḥ |',
    translation: 'The mind alone is the cause of bondage and liberation for human beings.',
    explanation: {
      simple: 'Your mind is what binds you and what can free you - it is the key to both conditions.',
      deeper: 'This famous verse teaches that liberation is not about external conditions but about the state of mind.'
    },
    practicalApplication: 'Work on your mind - it is the only thing standing between you and freedom.',
    themes: ['mind', 'bondage', 'liberation'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'maitri',
    section: 6,
    verse: 7,
    sanskrit: 'बन्धाय विषयासक्तं मुक्त्यै निर्विषयं मनः।',
    transliteration: 'bandhāya viṣayāsaktaṃ muktyai nirviṣayaṃ manaḥ |',
    translation: 'Attached to sense objects, it leads to bondage; free from sense objects, to liberation.',
    explanation: {
      simple: 'When the mind is attached to objects, it is bound. When free from attachment, it is liberated.',
      deeper: 'The objects themselves are not the problem - it is the mind\'s attachment that creates bondage.'
    },
    practicalApplication: 'Practice enjoying life without clinging. Use things without being used by them.',
    themes: ['attachment', 'detachment', 'freedom'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'maitri',
    section: 6,
    verse: 8,
    sanskrit: 'तद्विष्णोः परमं पदं सदा पश्यन्ति सूरयः।',
    transliteration: 'tadviṣṇoḥ paramaṃ padaṃ sadā paśyanti sūrayaḥ |',
    translation: 'The wise ones always see that supreme state of Vishnu.',
    explanation: {
      simple: 'The enlightened constantly perceive the highest reality, here called the supreme state of Vishnu.',
      deeper: 'Vishnu\'s supreme abode represents the ultimate consciousness - ever-present to those whose minds are pure.'
    },
    practicalApplication: 'What the wise see always, you can see right now - it is the awareness reading these words.',
    themes: ['vishnu', 'supreme state', 'wise'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'maitri',
    section: 6,
    verse: 9,
    sanskrit: 'अजो नित्यः शाश्वतो\'यं पुराणो न हन्यते हन्यमाने शरीरे।',
    transliteration: 'ajo nityaḥ śāśvato\'yaṃ purāṇo na hanyate hanyamāne śarīre |',
    translation: 'Unborn, eternal, everlasting, ancient - this is not slain when the body is slain.',
    explanation: {
      simple: 'The Self is unborn, eternal, and ancient. It does not die when the body dies.',
      deeper: 'This echoes the Katha Upanishad and Bhagavad Gita - the Self is beyond birth and death.'
    },
    practicalApplication: 'That which is aware of birth and death is itself beyond birth and death.',
    themes: ['immortality', 'self', 'body'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'maitri',
    section: 6,
    verse: 10,
    sanskrit: 'एको देवः सर्वभूतेषु गूढः सर्वव्यापी सर्वभूतान्तरात्मा।',
    transliteration: 'eko devaḥ sarvabhūteṣu gūḍhaḥ sarvavyāpī sarvabhūtāntarātmā |',
    translation: 'The one God hidden in all beings, all-pervading, the inner Self of all beings.',
    explanation: {
      simple: 'There is one divine reality hidden within all beings, pervading everything as the innermost Self.',
      deeper: 'This theistic language points to the same non-dual truth - the one Self appearing as many.'
    },
    practicalApplication: 'See the one presence in all beings - not as a belief but as direct perception.',
    themes: ['one god', 'hidden', 'all-pervading'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'maitri',
    section: 6,
    verse: 11,
    sanskrit: 'कर्माध्यक्षः सर्वभूताधिवासः साक्षी चेता केवलो निर्गुणश्च।',
    transliteration: 'karmādhyakṣaḥ sarvabhūtādhivāsaḥ sākṣī cetā kevalo nirguṇaśca |',
    translation: 'The overseer of karma, dwelling in all beings, the witness, the consciousness, alone, without qualities.',
    explanation: {
      simple: 'This Self oversees all actions, dwells in all, witnesses everything, is pure consciousness, solitary, and without qualities.',
      deeper: 'A beautiful set of attributes: overseer (not doer), witness (not involved), consciousness (not inert), alone (non-dual), nirguna (beyond qualities).'
    },
    practicalApplication: 'You are the witness of your actions, not the doer. Recognize this and be free.',
    themes: ['witness', 'consciousness', 'nirguna'],
    difficulty: 'advanced',
  },
  {
    upanishad: 'maitri',
    section: 6,
    verse: 12,
    sanskrit: 'य एनं वेद स एव मोक्षभाक् स मुक्तः।',
    transliteration: 'ya enaṃ veda sa eva mokṣabhāk sa muktaḥ |',
    translation: 'One who knows This attains liberation. Such a one is free.',
    explanation: {
      simple: 'Whoever truly knows this Self attains liberation. That person is already free.',
      deeper: 'Liberation is not a future attainment but present recognition. Knowing the Self IS being free.'
    },
    practicalApplication: 'Liberation is not far away - it is available in this very recognition.',
    themes: ['knowledge', 'liberation', 'freedom'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'maitri',
    section: 6,
    verse: 13,
    sanskrit: 'एतत्त्वं वेत्थ चेत्साधो मोक्षस्ते हस्तगोचरः।',
    transliteration: 'etattvaṃ vettha cetsādho mokṣaste hastagocaḥ |',
    translation: 'O virtuous one, if you know this truth, liberation is within your reach.',
    explanation: {
      simple: 'The sage addresses the seeker: If you understand this teaching, freedom is at hand.',
      deeper: 'Liberation is not at the end of a long journey but immediately available to understanding.'
    },
    practicalApplication: 'Freedom is as close as your own understanding. What have you been seeking is already present.',
    themes: ['liberation', 'understanding', 'immediacy'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'maitri',
    section: 6,
    verse: 14,
    sanskrit: 'ओमित्यात्मानं ध्यायथ। स्वस्ति वः पारमेश्यं तमसः परस्तात्।',
    transliteration: 'omityātmānaṃ dhyāyatha | svasti vaḥ pārameśyaṃ tamasaḥ parastāt |',
    translation: 'Meditate on the Self as OM. May you have wellbeing! The Supreme is beyond darkness.',
    explanation: {
      simple: 'The teaching concludes: Practice OM meditation. May you be blessed. The Supreme lies beyond all darkness of ignorance.',
      deeper: 'The final instruction and blessing - the method (OM), the prayer (svasti), and the goal (beyond darkness).'
    },
    practicalApplication: 'Take up the practice of OM. The light of the Self will dispel all darkness.',
    themes: ['om', 'blessing', 'light'],
    difficulty: 'beginner',
    famousVerse: true,
  },
];

const section6: UpanishadSection = {
  number: 6,
  name: { sanskrit: 'षष्ठोऽध्यायः', english: 'Liberation and the Supreme' },
  summary: 'The final teaching on the two Brahmans (sound and soundless), the two kinds of mind (pure and impure), and the famous declaration that mind alone is the cause of bondage and liberation. Concludes with the method of OM meditation and the blessing for liberation.',
  verses: chapter6Verses,
  isCurated: true,
  totalVerses: 32,
};

// =============================================================================
// MAIN EXPORT
// =============================================================================

export const maitriUpanishad: Upanishad = {
  id: 'maitri',
  name: {
    sanskrit: 'मैत्र्युपनिषद्',
    english: 'Maitri Upanishad',
    meaning: 'The Upanishad of Maitri (Friendliness/Benevolence)',
  },
  veda: 'yajur',
  summary: 'The Maitri Upanishad is a later, synthetic work that brings together teachings from multiple Upanishadic traditions. It presents a comprehensive philosophical framework including the nature of samsara, the three gunas, the two forms of Brahman (with and without qualities), and the practice of OM meditation. It is particularly known for its teaching that "the mind alone is the cause of bondage and liberation" and its detailed exposition of OM as the path to the fourth state (turiya).',
  keyTeachings: [
    'The world of sense pleasures cannot provide lasting satisfaction',
    'The Self transmigrates due to karma but is freed by knowledge',
    'The three gunas (sattva, rajas, tamas) bind the Self, but the Self is beyond all qualities',
    'Brahman has two forms: with qualities (saguna) and without qualities (nirguna)',
    'OM is Brahman in sound form and the means to attain the soundless Brahman',
    'The mind alone causes bondage (when attached) and liberation (when free)',
    'The Self is the witness, consciousness, alone, and without qualities',
    'Liberation is attained through knowledge of the Self',
  ],
  totalVerses: 100,
  includedVerses: 50,
  sections: [section1_2, section3, section4, section6],
  difficulty: 'advanced',
};
