/**
 * Kaushitaki Upanishad (Kaushitaki Brahmana Upanishad)
 *
 * One of the 13 principal Upanishads, from the Rig Veda.
 * Contains approximately 80 verses across 4 chapters.
 *
 * This is a CURATED selection of approximately 40 key verses focusing on:
 * - Chapter 1: The Path of the Soul After Death (Devayana)
 * - Chapter 2: Life Force (Prana) as Supreme
 * - Chapter 3: Indra's Teaching to Pratardana
 * - Chapter 4: The True Self and Knowledge
 *
 * Key teachings:
 * - The journey of the soul after death
 * - Prana (life force) as the primary reality among all faculties
 * - The Self as pure consciousness
 * - Liberation through knowledge of the Self
 */

import { Upanishad, UpanishadVerse, UpanishadSection } from './types';

// =============================================================================
// CHAPTER 1: THE PATH OF THE SOUL AFTER DEATH (10 verses)
// =============================================================================

const chapter1Verses: UpanishadVerse[] = [
  {
    upanishad: 'kaushitaki',
    section: 1,
    verse: 1,
    sanskrit: 'चित्रो ह वै गार्ग्यायणिर्यक्ष्यमाणो हारुणिं वव्रे।',
    transliteration: 'citro ha vai gārgyāyaṇiryakṣyamāṇo hāruṇiṃ vavre |',
    translation: 'Chitra Gargyayani, when about to perform a sacrifice, chose Aruni as his priest.',
    explanation: {
      simple: 'A king named Chitra was preparing for a sacred ritual and selected the renowned sage Aruni (Uddalaka) to be his officiating priest.',
      deeper: 'This sets up one of the great reversals in Upanishadic literature - where a king teaches a brahmin priest, showing that spiritual knowledge transcends social hierarchy.'
    },
    practicalApplication: 'Remain open to receiving wisdom from unexpected sources - truth does not respect human categories.',
    themes: ['setting', 'sacrifice', 'introduction'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'kaushitaki',
    section: 1,
    verse: 2,
    sanskrit: 'तं ह पुत्रमुवाच श्वेतकेतुं गच्छ याजयेति।',
    transliteration: 'taṃ ha putramuvāca śvetaketuṃ gaccha yājayeti |',
    translation: 'Aruni sent his son Shvetaketu, saying: "Go, you conduct the sacrifice."',
    explanation: {
      simple: 'Aruni sent his learned son Shvetaketu to perform the priestly duties in his place.',
      deeper: 'Shvetaketu is the same student from the Chandogya Upanishad who received the "Tat Tvam Asi" teaching. Here we see him as a young priest, not yet humbled.'
    },
    practicalApplication: 'Sometimes we must be put in situations that reveal the limits of our knowledge.',
    themes: ['delegation', 'youth', 'setting'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'kaushitaki',
    section: 1,
    verse: 3,
    sanskrit: 'तमागतं राजा पप्रच्छ गौतमपुत्र अस्ति संवृतं लोकं यत्र मां प्रापयिष्यसि?',
    transliteration: 'tamāgataṃ rājā papraccha gautamaputra asti saṃvṛtaṃ lokaṃ yatra māṃ prāpayiṣyasi?',
    translation: 'When Shvetaketu arrived, the king asked him: "O son of Gautama, is there a sheltered place to which you can lead me?"',
    explanation: {
      simple: 'The king asked Shvetaketu a deep question about whether he knew the path to the immortal realm.',
      deeper: 'The "sheltered place" (samvrita loka) means a realm beyond return - the ultimate destination beyond the cycle of rebirth.'
    },
    practicalApplication: 'The deepest questions concern where we are ultimately going, not just our immediate destination.',
    themes: ['question', 'afterlife', 'path'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'kaushitaki',
    section: 1,
    verse: 4,
    sanskrit: 'स होवाच नेति। तं होवाच राजा पुनर्मैधि होतव्यमिति।',
    transliteration: 'sa hovāca neti | taṃ hovāca rājā punarmaidhi hotavyamiti |',
    translation: 'He replied: "No." The king said: "Then you must offer sacrifice for me again."',
    explanation: {
      simple: 'Shvetaketu admitted he did not know the answer, and the king required him to return and learn before completing the ritual.',
      deeper: 'Honest admission of ignorance is the beginning of true learning. The king values real knowledge over mere ritual performance.'
    },
    practicalApplication: 'It is better to admit not knowing than to pretend understanding. Honesty opens the door to learning.',
    themes: ['honesty', 'admission', 'learning'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'kaushitaki',
    section: 1,
    verse: 5,
    sanskrit: 'स ह पितुरुपेत्योवाच अनध्यापयैव मा भवानवोचदधीतवानसीति।',
    transliteration: 'sa ha pituripetyovāca anadhyāpayaiva mā bhavānavocadadhītavānasīti |',
    translation: 'He returned to his father and said: "Without having taught me, you told me I was learned!"',
    explanation: {
      simple: 'Shvetaketu returned home and confronted his father, saying he had been sent out unprepared and claiming to be educated when he was not.',
      deeper: 'This mirrors the Chandogya scene where Shvetaketu returns humbled. Multiple texts show his gradual education through humbling experiences.'
    },
    practicalApplication: 'Our education is incomplete until it addresses the ultimate questions of existence and liberation.',
    themes: ['humility', 'confrontation', 'education'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'kaushitaki',
    section: 1,
    verse: 6,
    sanskrit: 'एतत्तु खलु नाहमवेद्मि। हन्त अहमपि गत्वा ब्रह्मचर्यं वसानीति।',
    transliteration: 'etattu khalu nāhamavedmi | hanta ahamapi gatvā brahmacaryaṃ vasānīti |',
    translation: 'His father said: "I did not know this either. Come, let us both go and live as students with the king."',
    explanation: {
      simple: 'Aruni admitted he did not know the answer either. He suggested they both go to the king as humble students.',
      deeper: 'A brahmin sage becomes a student of a kshatriya king - showing that true wisdom respects no social boundaries.'
    },
    practicalApplication: 'True seekers are willing to become students at any age and from any teacher who has genuine knowledge.',
    themes: ['humility', 'learning', 'reversal'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    upanishad: 'kaushitaki',
    section: 1,
    verse: 7,
    sanskrit: 'ये वै के चास्माल्लोकात्प्रयन्ति चन्द्रमसमेव ते सर्वे गच्छन्ति।',
    transliteration: 'ye vai ke cāsmāllokātprayanti candramasameva te sarve gacchanti |',
    translation: 'All those who depart from this world go to the moon.',
    explanation: {
      simple: 'The king begins to teach: after death, all souls first go to the moon.',
      deeper: 'The moon represents the realm of the ancestors (pitriloka) - an intermediate station where the soul\'s destiny is determined.'
    },
    practicalApplication: 'Consider that death may be the beginning of a journey, not simply an ending.',
    themes: ['afterlife', 'moon', 'journey'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'kaushitaki',
    section: 1,
    verse: 8,
    sanskrit: 'तेषां प्राणैः पूर्वपक्षे आपूर्यते, अपरपक्षे प्रजनयति।',
    transliteration: 'teṣāṃ prāṇaiḥ pūrvapakṣe āpūryate, aparapakṣe prajanayati |',
    translation: 'By their life-breaths, the moon waxes in the bright fortnight; in the dark fortnight, it projects them for rebirth.',
    explanation: {
      simple: 'The moon waxes from receiving departing souls and wanes as it sends them back for rebirth.',
      deeper: 'This cosmic imagery shows the moon as a gateway between worlds - receiving souls and dispensing them according to their karma.'
    },
    practicalApplication: 'Contemplate how natural cycles might mirror spiritual realities beyond our ordinary perception.',
    themes: ['moon', 'cycles', 'rebirth'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'kaushitaki',
    section: 1,
    verse: 9,
    sanskrit: 'चन्द्रमास एव द्वारं स्वर्गस्य लोकस्य। तं य आह अभिप्रत्येति तं मुञ्चति।',
    transliteration: 'candramāsa eva dvāraṃ svargasya lokasya | taṃ ya āha abhipratyeti taṃ muñcati |',
    translation: 'The moon is the door of the heavenly world. One who answers its questions is released to go further.',
    explanation: {
      simple: 'The moon is like a gatekeeper. Those who can answer its questions pass through to higher realms.',
      deeper: 'The "questions" represent self-knowledge. Those who know themselves as the immortal Self pass beyond; others return to rebirth.'
    },
    practicalApplication: 'Self-knowledge is the key that opens doors to higher states of being.',
    themes: ['gateway', 'knowledge', 'liberation'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'kaushitaki',
    section: 1,
    verse: 10,
    sanskrit: 'यः पुनर्न प्रत्याह पर्जन्यो भूत्वा वर्षति। इह च पुनः प्राणिषु प्रजायते।',
    transliteration: 'yaḥ punarna pratyāha parjanyo bhūtvā varṣati | iha ca punaḥ prāṇiṣu prajāyate |',
    translation: 'But one who cannot answer becomes rain. Falling to earth, he is born again among living creatures.',
    explanation: {
      simple: 'Those without self-knowledge return as rain, falling to earth and being reborn according to their karma.',
      deeper: 'This describes the path of return (pitr-yana). The soul descends through rain, enters plants, and through food enters bodies for rebirth.'
    },
    practicalApplication: 'Without spiritual knowledge, we remain bound to the cycle of rebirth, propelled by the momentum of past actions.',
    themes: ['rebirth', 'cycle', 'return'],
    difficulty: 'intermediate',
  },
];

const section1: UpanishadSection = {
  number: 1,
  name: { sanskrit: 'प्रथमोऽध्यायः', english: 'The Path After Death' },
  summary: 'King Chitra teaches about the journey of the soul after death - the lunar gateway, the path of return (pitr-yana), and the path of non-return (deva-yana) for those with self-knowledge.',
  verses: chapter1Verses,
  isCurated: true,
  totalVerses: 12,
};

// =============================================================================
// CHAPTER 2: PRANA (LIFE FORCE) AS SUPREME (10 verses)
// =============================================================================

const chapter2Verses: UpanishadVerse[] = [
  {
    upanishad: 'kaushitaki',
    section: 2,
    verse: 1,
    sanskrit: 'प्राणो ब्रह्मेति ह स्माह कौषीतकिः।',
    transliteration: 'prāṇo brahmeti ha smāha kauṣītakiḥ |',
    translation: 'Prana is Brahman, declared Kaushitaki.',
    explanation: {
      simple: 'The sage Kaushitaki declared that the life force (prana) is identical with the supreme reality (Brahman).',
      deeper: 'This identifies the vital breath with ultimate reality - not as an equation but pointing to the consciousness that animates prana.'
    },
    practicalApplication: 'Notice how the life force animates your body - this energy points to something deeper.',
    themes: ['prana', 'brahman', 'identification'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'kaushitaki',
    section: 2,
    verse: 2,
    sanskrit: 'तस्य ह वा एतस्य प्राणस्य यो ब्रह्म मनो दूतम्।',
    transliteration: 'tasya ha vā etasya prāṇasya yo brahma mano dūtam |',
    translation: 'For this Prana which is Brahman, the mind is the messenger.',
    explanation: {
      simple: 'The mind serves as a messenger for the life force - it carries out the intentions of the vital energy.',
      deeper: 'The hierarchy is established: Prana/consciousness is primary, mind is secondary and serves it.'
    },
    practicalApplication: 'Observe how your mind follows the direction of your vital energy and attention.',
    themes: ['mind', 'prana', 'relationship'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'kaushitaki',
    section: 2,
    verse: 3,
    sanskrit: 'चक्षुः प्रतिहारः श्रोत्रमाख्याता वाक्परिवेष्ट्री।',
    transliteration: 'cakṣuḥ pratihāraḥ śrotraḥ ākhyātā vākparivesṭrī |',
    translation: 'The eye is the receiver, the ear is the reporter, speech is the attendant.',
    explanation: {
      simple: 'Each sense organ has a role in serving consciousness - eyes receive impressions, ears report sounds, speech communicates.',
      deeper: 'The senses are like servants in a royal court, each with a specific function in serving the sovereign consciousness.'
    },
    practicalApplication: 'Observe how your senses serve you - they are instruments, not the master.',
    themes: ['senses', 'servants', 'consciousness'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'kaushitaki',
    section: 2,
    verse: 4,
    sanskrit: 'एष ह वै यो अयं प्राणस्तस्मिन्निमे सर्वे प्रतिष्ठिता।',
    transliteration: 'eṣa ha vai yo ayaṃ prāṇastasminime sarve pratiṣṭhitā |',
    translation: 'In this Prana, all these are established.',
    explanation: {
      simple: 'All the senses, the mind, and all faculties are established in and depend on the life force.',
      deeper: 'Prana here points to the conscious principle that underlies all mental and sensory activities.'
    },
    practicalApplication: 'Recognize the life force as the foundation of all your capacities and abilities.',
    themes: ['foundation', 'prana', 'unity'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'kaushitaki',
    section: 2,
    verse: 5,
    sanskrit: 'स यावत्प्राणो ह वै सर्वाणि भूतान्यावन्यः।',
    transliteration: 'sa yāvatprāṇo ha vai sarvāṇi bhūtānyāvanyaḥ |',
    translation: 'Prana indeed is all these beings, as many as there are.',
    explanation: {
      simple: 'The life force is present in all living beings without exception.',
      deeper: 'This is a declaration of the universal presence of the conscious principle in all forms of life.'
    },
    practicalApplication: 'See the same life force that animates you as present in all living beings.',
    themes: ['universality', 'all beings', 'life'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'kaushitaki',
    section: 2,
    verse: 6,
    sanskrit: 'स वा एष प्राणः प्रज्ञात्मा, आनन्दोऽजरोऽमृतः।',
    transliteration: 'sa vā eṣa prāṇaḥ prajñātmā, ānando\'jaro\'mṛtaḥ |',
    translation: 'This Prana is the intelligent Self, bliss, ageless, immortal.',
    explanation: {
      simple: 'The life force is described as the conscious Self, characterized by bliss, freedom from aging, and deathlessness.',
      deeper: 'Here prana is explicitly equated with the Atman - pointing to its nature as pure consciousness, not just biological breath.'
    },
    practicalApplication: 'The consciousness that knows you are alive is itself beyond birth and death.',
    themes: ['atman', 'bliss', 'immortality'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'kaushitaki',
    section: 2,
    verse: 7,
    sanskrit: 'न साधुना कर्मणा भूयान्नो एवासाधुना कनीयान्।',
    transliteration: 'na sādhunā karmaṇā bhūyānno evāsādhunā kanīyān |',
    translation: 'It does not become greater by good deeds, nor less by bad deeds.',
    explanation: {
      simple: 'The true Self is not increased by good actions or diminished by bad actions - it remains unchanged.',
      deeper: 'Actions affect the subtle body and create karma, but the witness consciousness remains ever pure and unaffected.'
    },
    practicalApplication: 'Your essential nature is not improved or degraded by what you do - though actions have their consequences.',
    themes: ['unchanging', 'beyond karma', 'atman'],
    difficulty: 'advanced',
    famousVerse: true,
  },
  {
    upanishad: 'kaushitaki',
    section: 2,
    verse: 8,
    sanskrit: 'एष लोकाधिपतिः एष लोकपालः एष सर्वेश्वरः।',
    transliteration: 'eṣa lokādhipatiḥ eṣa lokapālaḥ eṣa sarveśvaraḥ |',
    translation: 'This is the lord of worlds, the protector of worlds, the lord of all.',
    explanation: {
      simple: 'The conscious Self is described as the supreme lord and protector of all worlds.',
      deeper: 'From the microcosmic perspective of one\'s own experience, the Self is indeed the sovereign of one\'s entire world.'
    },
    practicalApplication: 'Recognize the sovereignty of consciousness - it rules over your entire experienced universe.',
    themes: ['sovereignty', 'lordship', 'supreme'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'kaushitaki',
    section: 2,
    verse: 9,
    sanskrit: 'स मम आत्मेति विद्यात् अयमात्मेति उपासीत।',
    transliteration: 'sa mama ātmeti vidyāt ayamātmeti upāsīta |',
    translation: 'One should know "This is my Self" and meditate "This is the Self."',
    explanation: {
      simple: 'One should recognize the life force/consciousness as one\'s own Self and meditate upon this truth.',
      deeper: 'This is the practical instruction - direct recognition and steady contemplation of one\'s true identity.'
    },
    practicalApplication: 'Practice identifying with the conscious principle rather than with thoughts, emotions, or body.',
    themes: ['meditation', 'self-recognition', 'practice'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'kaushitaki',
    section: 2,
    verse: 10,
    sanskrit: 'तस्यैवं विदुषो लोके कीर्तिर्भवति नाक्षीयते।',
    transliteration: 'tasyaivaṃ viduṣo loke kīrtirbhavati nākṣīyate |',
    translation: 'For one who knows thus, there is fame in the world that never diminishes.',
    explanation: {
      simple: 'The one who realizes this truth attains an imperishable glory in the world.',
      deeper: 'True "fame" here means living in alignment with truth - such a life leaves an undying mark on the world.'
    },
    practicalApplication: 'Knowledge of the Self brings a lasting fulfillment that worldly achievements cannot match.',
    themes: ['knowledge', 'fulfillment', 'glory'],
    difficulty: 'beginner',
  },
];

const section2: UpanishadSection = {
  number: 2,
  name: { sanskrit: 'द्वितीयोऽध्यायः', english: 'Prana as Brahman' },
  summary: 'This chapter establishes Prana (the life force/consciousness) as identical with Brahman. It describes how all senses and faculties depend on Prana, and how the true Self is beyond increase or decrease by actions.',
  verses: chapter2Verses,
  isCurated: true,
  totalVerses: 15,
};

// =============================================================================
// CHAPTER 3: INDRA'S TEACHING TO PRATARDANA (10 verses)
// =============================================================================

const chapter3Verses: UpanishadVerse[] = [
  {
    upanishad: 'kaushitaki',
    section: 3,
    verse: 1,
    sanskrit: 'प्रतर्दनो ह वै दैवोदासिरिन्द्रस्य प्रियं धामोपजगाम।',
    transliteration: 'pratardano ha vai daivodāsirindrasya priyaṃ dhāmopajagāma |',
    translation: 'Pratardana, son of Divodasa, through battle reached the beloved abode of Indra.',
    explanation: {
      simple: 'The warrior Pratardana, through his valor in battle, reached the realm of Indra, king of the gods.',
      deeper: 'This frames the teaching as a reward for heroism - showing that spiritual knowledge is the highest boon, surpassing all worldly gifts.'
    },
    practicalApplication: 'The ultimate gift is not power or pleasure but the knowledge of your true Self.',
    themes: ['setting', 'valor', 'reward'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'kaushitaki',
    section: 3,
    verse: 2,
    sanskrit: 'तमिन्द्र उवाच प्रतर्दन वरं ते ददानीति।',
    transliteration: 'tamindra uvāca pratardana varaṃ te dadānīti |',
    translation: 'Indra said to him: "Pratardana, I shall give you a boon."',
    explanation: {
      simple: 'Indra offered to grant Pratardana any wish he desired.',
      deeper: 'This is the test of a true seeker - what will he choose when offered anything?'
    },
    practicalApplication: 'What would you ask for if offered any boon? Your answer reveals your true values.',
    themes: ['boon', 'choice', 'test'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'kaushitaki',
    section: 3,
    verse: 3,
    sanskrit: 'स होवाच त्वमेव मे वृणीष्व यं त्वं मन्यसे मनुष्याय हिततमम्।',
    transliteration: 'sa hovāca tvameva me vṛṇīṣva yaṃ tvaṃ manyase manuṣyāya hitatamam |',
    translation: 'Pratardana replied: "You choose for me what you consider most beneficial for a human being."',
    explanation: {
      simple: 'Wisely, Pratardana asked Indra to choose what is truly best for a human - trusting divine wisdom over his own desires.',
      deeper: 'This shows supreme humility and wisdom - recognizing that we may not know what is truly best for us.'
    },
    practicalApplication: 'Sometimes the wisest request is to ask for what is truly good, not what we think we want.',
    themes: ['wisdom', 'humility', 'trust'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    upanishad: 'kaushitaki',
    section: 3,
    verse: 4,
    sanskrit: 'स होवाचेन्द्रो न वै वरं वृणानो वृणीते। त्वमेव मे वरो भवेति।',
    transliteration: 'sa hovācendro na vai varaṃ vṛṇāno vṛṇīte | tvameva me varo bhaveti |',
    translation: 'Indra said: "One who is choosing a boon should indeed choose. But you yourself become the boon to me!"',
    explanation: {
      simple: 'Indra was so pleased by Pratardana\'s wise answer that he declared Pratardana himself to be a gift.',
      deeper: 'This mutual gift-giving establishes a sacred teacher-student relationship. The student\'s humility makes them worthy of the highest teaching.'
    },
    practicalApplication: 'When you approach wisdom with humility, you become receptive to receiving it.',
    themes: ['blessing', 'relationship', 'worthiness'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'kaushitaki',
    section: 3,
    verse: 5,
    sanskrit: 'मामेव विजानीहि एतदेव अहं मनुष्याय हिततमं मन्ये।',
    transliteration: 'māmeva vijānīhi etadeva ahaṃ manuṣyāya hitatamaṃ manye |',
    translation: 'Indra said: "Know Me alone. This I consider most beneficial for a human being."',
    explanation: {
      simple: 'Indra revealed that knowing him - knowing the true Self - is the greatest boon for any human.',
      deeper: 'Here Indra represents the supreme Self (Atman). Self-knowledge is declared the highest human attainment.'
    },
    practicalApplication: 'Above all other pursuits, seek to know your true Self - this is the most beneficial endeavor.',
    themes: ['self-knowledge', 'highest good', 'atman'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'kaushitaki',
    section: 3,
    verse: 6,
    sanskrit: 'अहं प्राणोऽस्मि प्रज्ञात्मा तं मामायुरमृतमित्युपास्स्व।',
    transliteration: 'ahaṃ prāṇo\'smi prajñātmā taṃ māmāyuramṛtamityupāssva |',
    translation: 'I am Prana, the intelligent Self. Worship Me as life, as immortality.',
    explanation: {
      simple: 'Indra declares his true nature as the conscious life force and instructs Pratardana to meditate on this as life and deathlessness.',
      deeper: 'The highest teaching: the Self is the conscious principle that gives life, and knowing this brings immortality.'
    },
    practicalApplication: 'Meditate on consciousness itself - the aware presence that gives life to all experience.',
    themes: ['prana', 'consciousness', 'immortality'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'kaushitaki',
    section: 3,
    verse: 7,
    sanskrit: 'आयुर्वै प्राणः प्राणो वा आयुः यावद्ध्यस्मिञ्शरीरे प्राणो वसति तावदायुः।',
    transliteration: 'āyurvai prāṇaḥ prāṇo vā āyuḥ yāvaddhyasmiñśarīre prāṇo vasati tāvadāyuḥ |',
    translation: 'Life is Prana, and Prana is life. As long as Prana dwells in this body, so long there is life.',
    explanation: {
      simple: 'Life and breath are inseparable - life exists as long as the life force remains in the body.',
      deeper: 'This points to the mystery of life - what makes a body alive? It is the presence of conscious energy.'
    },
    practicalApplication: 'Honor the life force in yourself and others - it is sacred and mysterious.',
    themes: ['life', 'prana', 'body'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'kaushitaki',
    section: 3,
    verse: 8,
    sanskrit: 'प्राणेनैवास्मिंलोके ज्योतिर्भवति। स यावत्प्राणो भवति तावदस्मिंलोके भवति।',
    transliteration: 'prāṇenaivāsmiṃloke jyotirbhavati | sa yāvatprāṇo bhavati tāvadasmiṃloke bhavati |',
    translation: 'Through Prana alone one shines in this world. As long as Prana exists, one exists in this world.',
    explanation: {
      simple: 'All human glory and ability comes through the life force. Without it, there is no worldly existence.',
      deeper: 'The "shining" refers to all abilities - speaking, thinking, perceiving. All depend on the conscious life force.'
    },
    practicalApplication: 'Recognize that your abilities and achievements all depend on the gift of conscious life.',
    themes: ['capability', 'dependence', 'life'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'kaushitaki',
    section: 3,
    verse: 9,
    sanskrit: 'एष हि खलु आत्मा यो अयं प्रज्ञानघन एष प्राणः।',
    transliteration: 'eṣa hi khalu ātmā yo ayaṃ prajñānaghana eṣa prāṇaḥ |',
    translation: 'This indeed is the Self - this mass of pure consciousness, this Prana.',
    explanation: {
      simple: 'The Self is described as a solid mass of consciousness - the same as the life force.',
      deeper: 'Prajnana-ghana means "dense consciousness" - pure awareness without gaps, the very substance of the Self.'
    },
    practicalApplication: 'Your true Self is not thoughts or experiences but the unbroken awareness in which they appear.',
    themes: ['atman', 'consciousness', 'identity'],
    difficulty: 'advanced',
    famousVerse: true,
  },
  {
    upanishad: 'kaushitaki',
    section: 3,
    verse: 10,
    sanskrit: 'न वाचं विजिज्ञासीत वक्तारं विद्यात्। न गन्धं विजिज्ञासीत घ्रातारं विद्यात्।',
    transliteration: 'na vācaṃ vijijñāsīta vaktāraṃ vidyāt | na gandhaṃ vijijñāsīta ghrātāraṃ vidyāt |',
    translation: 'One should not try to know speech, but the speaker. One should not try to know smell, but the smeller.',
    explanation: {
      simple: 'Instead of getting lost in objects of experience, know the experiencer - the conscious subject.',
      deeper: 'This is the method of self-inquiry - turning attention from objects to the subject, from the known to the knower.'
    },
    practicalApplication: 'Turn your attention from what you experience to who experiences. Find the seer, not the seen.',
    themes: ['self-inquiry', 'subject', 'method'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
];

const section3: UpanishadSection = {
  number: 3,
  name: { sanskrit: 'तृतीयोऽध्यायः', english: 'Indra\'s Teaching' },
  summary: 'Indra teaches the warrior Pratardana the highest truth: that the Self is pure consciousness (Prajnanam), identical with the life force. The method is to know the knower rather than the known.',
  verses: chapter3Verses,
  isCurated: true,
  totalVerses: 23,
};

// =============================================================================
// CHAPTER 4: THE TRUE SELF AND KNOWLEDGE (10 verses)
// =============================================================================

const chapter4Verses: UpanishadVerse[] = [
  {
    upanishad: 'kaushitaki',
    section: 4,
    verse: 1,
    sanskrit: 'एष ह्येवैनं सुकृतं लोकं नयति यं नयति। एष ह्येवैनं दुष्कृतं लोकं नयति यं नयति।',
    transliteration: 'eṣa hyevainaṃ sukṛtaṃ lokaṃ nayati yaṃ nayati | eṣa hyevainaṃ duṣkṛtaṃ lokaṃ nayati yaṃ nayati |',
    translation: 'It is He who leads one to the world of good deeds if He so leads. It is He who leads one to the world of evil deeds if He so leads.',
    explanation: {
      simple: 'The Self (as the inner controller) leads the individual to good or bad experiences according to their karma.',
      deeper: 'This teaches divine sovereignty - the Self orchestrates all experiences, using karma as the instrument of justice and evolution.'
    },
    practicalApplication: 'Trust that there is an intelligence behind your experiences, teaching you what you need to learn.',
    themes: ['karma', 'divine will', 'destiny'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'kaushitaki',
    section: 4,
    verse: 2,
    sanskrit: 'एष लोकपालः एष लोकाधिपतिः एष सर्वेश्वरः। स म आत्मेति विद्यात्।',
    transliteration: 'eṣa lokapālaḥ eṣa lokādhipatiḥ eṣa sarveśvaraḥ | sa ma ātmeti vidyāt |',
    translation: 'He is the world\'s guardian, the world\'s lord, the lord of all. Know that He is my Self.',
    explanation: {
      simple: 'The supreme lord and protector of all worlds is one\'s own Self - this is what must be known.',
      deeper: 'The cosmic lord (Ishvara) is not separate from one\'s Atman - this is the non-dual teaching.'
    },
    practicalApplication: 'The supreme power of the universe is not separate from your own true Self.',
    themes: ['atman', 'ishvara', 'identity'],
    difficulty: 'advanced',
    famousVerse: true,
  },
  {
    upanishad: 'kaushitaki',
    section: 4,
    verse: 3,
    sanskrit: 'अथातो निम्रोचनं वा एतत्पुरुषस्य यद्रात्रौ स्वप्नान्पश्यति।',
    transliteration: 'athāto nimrocanaṃ vā etatpuruṣasya yadrātrau svapnānpaśyati |',
    translation: 'Now, the setting (of the person) is when he sees dreams at night.',
    explanation: {
      simple: 'When a person dreams at night, this is described as a "setting" like the sun setting.',
      deeper: 'The dream state is analyzed as a withdrawal of consciousness from the external world into an internal realm of its own creation.'
    },
    practicalApplication: 'Observe your dream state - you create entire worlds from consciousness alone.',
    themes: ['dream', 'states', 'consciousness'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'kaushitaki',
    section: 4,
    verse: 4,
    sanskrit: 'स एष एतस्मिन्प्राणे एकधा भवति। तद्वाक्सह सर्वैर्नामभिः प्राणं अभिसमेति।',
    transliteration: 'sa eṣa etasminprāṇa ekadhā bhavati | tadvāksaha sarvairnāmabhiḥ prāṇaṃ abhisameti |',
    translation: 'Then he becomes one in this Prana. Speech with all names enters into Prana.',
    explanation: {
      simple: 'In deep sleep, all functions merge into the life force - speech, along with all objects it names, dissolves into Prana.',
      deeper: 'This describes the return to unity in deep sleep - all diversity returns to its source in consciousness.'
    },
    practicalApplication: 'In deep sleep, you experience the unity that underlies all diversity.',
    themes: ['deep sleep', 'unity', 'return'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'kaushitaki',
    section: 4,
    verse: 5,
    sanskrit: 'चक्षुः सह सर्वैरूपैः प्राणम् अभिसमेति। श्रोत्रं सह सर्वैः शब्दैः प्राणम् अभिसमेति।',
    transliteration: 'cakṣuḥ saha sarvairūpaiḥ prāṇam abhisameti | śrotraṃ saha sarvaiḥ śabdaiḥ prāṇam abhisameti |',
    translation: 'The eye with all forms enters Prana. The ear with all sounds enters Prana.',
    explanation: {
      simple: 'All sense faculties, along with their objects, merge back into the life force in deep sleep.',
      deeper: 'This shows that all experience arises from and returns to the same conscious source.'
    },
    practicalApplication: 'All your experiences emerge from and return to the same conscious awareness.',
    themes: ['senses', 'dissolution', 'unity'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'kaushitaki',
    section: 4,
    verse: 6,
    sanskrit: 'मनः सह सर्वैः संकल्पैः प्राणम् अभिसमेति। स यदा प्रतिबुध्यते।',
    transliteration: 'manaḥ saha sarvaiḥ saṃkalpaiḥ prāṇam abhisameti | sa yadā pratibudhyate |',
    translation: 'The mind with all thoughts enters Prana. When he awakens...',
    explanation: {
      simple: 'Even the mind with all its thoughts dissolves into Prana in sleep, and emerges again upon waking.',
      deeper: 'The continuity of the Self through these states proves it is beyond all states - the witness of them all.'
    },
    practicalApplication: 'You exist before, during, and after thoughts - you are the awareness, not the thoughts.',
    themes: ['mind', 'waking', 'continuity'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'kaushitaki',
    section: 4,
    verse: 7,
    sanskrit: 'यथाऽग्नेर्ज्वलतः सर्वा दिशो विस्फुलिङ्गा विप्रतिष्ठेरन्।',
    transliteration: 'yathā\'gnerjvalataḥ sarvā diśo visphliṅgā vipratiṣṭheran |',
    translation: 'Just as sparks fly forth in all directions from a blazing fire...',
    explanation: {
      simple: 'Like sparks emerging from a fire in all directions, so do all capacities emerge from the Self upon waking.',
      deeper: 'This beautiful image shows the Self as the source from which all mental and sensory activities emanate.'
    },
    practicalApplication: 'Your thoughts, perceptions, and abilities all arise from the fire of consciousness.',
    themes: ['emergence', 'source', 'fire'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'kaushitaki',
    section: 4,
    verse: 8,
    sanskrit: 'एवमेवास्मादात्मनः सर्वे प्राणाः यथायतनं विप्रतिष्ठन्ते। प्राणेभ्यो देवाः देवेभ्यो लोकाः।',
    transliteration: 'evamevāsmādātmanaḥ sarve prāṇāḥ yathāyatanaṃ vipratiṣṭhante | prāṇebhyo devāḥ devebhyo lokāḥ |',
    translation: 'Thus from this Self, all vital forces proceed to their respective places. From vital forces come the gods, from gods the worlds.',
    explanation: {
      simple: 'From the Self emerge all life forces, from them emerge the cosmic powers (devas), and from them emerge the worlds.',
      deeper: 'This cosmological teaching shows the Self as the ultimate source of all creation, from the most subtle to the grossest.'
    },
    practicalApplication: 'Your consciousness is the foundation of your entire experienced universe.',
    themes: ['creation', 'emanation', 'cosmology'],
    difficulty: 'advanced',
  },
  {
    upanishad: 'kaushitaki',
    section: 4,
    verse: 9,
    sanskrit: 'स एष प्रज्ञानात्मा यो अयं प्राणो यश्चायं प्रज्ञात्मा।',
    transliteration: 'sa eṣa prajñānātmā yo ayaṃ prāṇo yaścāyaṃ prajñātmā |',
    translation: 'This is the Self made of consciousness, which is this Prana, which is the intelligent Self.',
    explanation: {
      simple: 'The Self is pure consciousness, identical with the life force, identical with intelligence.',
      deeper: 'Three terms - Prana, Prajnana, and Atman - are equated, showing they are different aspects of one reality.'
    },
    practicalApplication: 'Life, intelligence, and consciousness are all aspects of your one true Self.',
    themes: ['identity', 'consciousness', 'unity'],
    difficulty: 'advanced',
  },
  {
    upanishad: 'kaushitaki',
    section: 4,
    verse: 10,
    sanskrit: 'तद्येतद्ब्रह्म तद्यदेतदमृतं तद्यदेतत्सत्यं तदेतन्मुक्तम्।',
    transliteration: 'tadyetadbrahma tadyadetadamṛtaṃ tadyadetatsatyaṃ tadetanmuktam |',
    translation: 'That is Brahman, that is the immortal, that is the truth, that is liberation.',
    explanation: {
      simple: 'The Self is Brahman (ultimate reality), immortal, true, and liberation itself.',
      deeper: 'The final equation: knowing the Self as Brahman is not just a means to liberation - it IS liberation.'
    },
    practicalApplication: 'Liberation is not something you attain but something you recognize - your true nature right now.',
    themes: ['brahman', 'liberation', 'truth'],
    difficulty: 'advanced',
    famousVerse: true,
  },
];

const section4: UpanishadSection = {
  number: 4,
  name: { sanskrit: 'चतुर्थोऽध्यायः', english: 'The True Self' },
  summary: 'The final chapter explores the states of consciousness (waking, dream, deep sleep) and how all faculties emerge from and dissolve into the Self. It concludes with the equation of Self = Brahman = Liberation.',
  verses: chapter4Verses,
  isCurated: true,
  totalVerses: 30,
};

// =============================================================================
// MAIN EXPORT
// =============================================================================

export const kaushitakiUpanishad: Upanishad = {
  id: 'kaushitaki',
  name: {
    sanskrit: 'कौषीतकिब्राह्मणोपनिषद्',
    english: 'Kaushitaki Upanishad',
    meaning: 'The Upanishad of the Kaushitaki Brahmana',
  },
  veda: 'rig',
  summary: 'The Kaushitaki Upanishad belongs to the Rig Veda and explores several profound themes: the journey of the soul after death, the supremacy of Prana (life force/consciousness), and Indra\'s teaching that Self-knowledge is the highest blessing. It is known for its dramatic reversal where a king teaches brahmins, and for its powerful declaration that the Self is "prajnana-ghana" - a mass of pure consciousness.',
  keyTeachings: [
    'The soul\'s journey after death passes through the moon as a gateway',
    'Those with self-knowledge pass to higher realms; others return for rebirth',
    'Prana (consciousness/life force) is Brahman - the ultimate reality',
    'The Self is unchanged by good or bad deeds',
    'Self-knowledge is the greatest gift for any human being',
    'Know the knower, not just the known',
    'All states of consciousness emerge from and dissolve into the Self',
    'Liberation is recognition of one\'s nature as Brahman',
  ],
  totalVerses: 80,
  includedVerses: 40,
  sections: [section1, section2, section3, section4],
  difficulty: 'advanced',
  estimatedReadTime: '30 min',
};
