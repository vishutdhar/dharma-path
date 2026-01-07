/**
 * Aitareya Upanishad (ऐतरेयोपनिषद्)
 * "Consciousness is Brahman"
 *
 * Source: Rig Veda (Aitareya Aranyaka)
 * Verses: 33 (3 chapters)
 * Difficulty: Intermediate
 *
 * The Aitareya Upanishad describes the creation of the universe and the human body,
 * how the Self enters and animates the body, and culminates in the great declaration
 * "Prajnanam Brahma" — Consciousness is Brahman.
 *
 * Contains one of the four Mahavakyas (Great Sayings) of Vedanta.
 */

import { Upanishad, UpanishadVerse, UpanishadSection } from './types';

// =============================================================================
// VERSES
// =============================================================================

const verses: UpanishadVerse[] = [
  // ===========================================================================
  // CHAPTER 1, SECTION 1: THE CREATION OF THE UNIVERSE
  // ===========================================================================

  // -------------------------------------------------------------------------
  // VERSE 1.1.1 - In the Beginning
  // -------------------------------------------------------------------------
  {
    upanishad: 'aitareya',
    section: 1,
    verse: 1,
    sanskrit: `आत्मा वा इदमेक एवाग्र आसीत् ।
नान्यत्किञ्चन मिषत् ।
स ईक्षत लोकान्नु सृजा इति ॥`,
    transliteration: `ātmā vā idam eka evāgra āsīt |
nānyat kiñcana miṣat |
sa īkṣata lokān nu sṛjā iti ||`,
    translation:
      'In the beginning, the Self alone existed. Nothing else was there. He thought: "Let me create the worlds."',
    explanation: {
      simple:
        'Before creation, only pure Consciousness (Atman) existed — nothing else. This Self, through mere intention, decided to create the universe. Creation begins with thought, with will.',
      deeper:
        'The word "Atman" here refers to the cosmic Self, Brahman. The creation is not mechanical but intentional (īkṣata — "He saw/thought"). This establishes that consciousness, not matter, is primary. The universe arises from awareness, not the other way around.',
    },
    practicalApplication:
      'Your intentions shape your reality. Just as the cosmic Self created through intention, your thoughts and will create your experience. What are you intending to create today?',
    keyTerms: [
      { term: 'Ātmā', meaning: 'The Self, pure consciousness' },
      { term: 'Eka', meaning: 'One, alone' },
      { term: 'Agra', meaning: 'In the beginning, before' },
      { term: 'Īkṣata', meaning: 'Thought, intended, saw' },
    ],
    themes: ['creation', 'consciousness', 'intention', 'oneness'],
    difficulty: 'intermediate',
    famousVerse: true,
  },

  // -------------------------------------------------------------------------
  // VERSE 1.1.2 - The Four Worlds
  // -------------------------------------------------------------------------
  {
    upanishad: 'aitareya',
    section: 1,
    verse: 2,
    sanskrit: `स इमाँल्लोकानसृजत ।
अम्भो मरीचीर्मरमापोऽदोऽम्भः परेण दिवम् ।
द्यौः प्रतिष्ठा अन्तरिक्षं मरीचयः ।
पृथिवी मरो या अधस्तात्ता आपः ॥`,
    transliteration: `sa imāṁl lokān asṛjata |
ambho marīcīr maram āpo 'do 'mbhaḥ pareṇa divam |
dyauḥ pratiṣṭhā antarikṣaṁ marīcayaḥ |
pṛthivī maro yā adhastāt tā āpaḥ ||`,
    translation:
      'He created these worlds: the waters above heaven, heaven itself, the mid-region of light rays, the earth below, and the waters beneath the earth.',
    explanation: {
      simple:
        'The Self created multiple planes of existence — celestial waters, heaven (the realm of light), the atmosphere, earth, and subterranean waters. This describes a layered cosmos emanating from consciousness.',
      deeper:
        'The cosmos is structured in layers, each serving a purpose in the divine economy. This cosmology isn\'t meant as literal geography but as a map of levels of reality, from the subtle (ambhas) to the gross (earth and lower waters).',
    },
    practicalApplication:
      'You exist on multiple levels too — physical, energetic, mental, intellectual, spiritual. Honor each layer of your being. Don\'t reduce yourself to just body or just mind.',
    keyTerms: [
      { term: 'Lokān', meaning: 'Worlds, realms' },
      { term: 'Ambhas', meaning: 'Waters' },
      { term: 'Dyaus', meaning: 'Heaven' },
      { term: 'Antarikṣa', meaning: 'Mid-region, atmosphere' },
      { term: 'Pṛthivī', meaning: 'Earth' },
    ],
    themes: ['cosmology', 'creation', 'worlds', 'levels-of-reality'],
    difficulty: 'intermediate',
  },

  // -------------------------------------------------------------------------
  // VERSE 1.1.3 - Creating the Guardians
  // -------------------------------------------------------------------------
  {
    upanishad: 'aitareya',
    section: 1,
    verse: 3,
    sanskrit: `स ईक्षतेमे नु लोकाः लोकपालान्नु सृजा इति ।
सोऽद्भ्य एव पुरुषं समुद्धृत्यामूर्छयत् ॥`,
    transliteration: `sa īkṣateme nu lokāḥ lokapālān nu sṛjā iti |
so 'dbhya eva puruṣaṁ samuddhṛtyāmūrchayat ||`,
    translation:
      'He thought: "Here are the worlds. Let me create guardians for these worlds." He drew forth a Person (Purusha) from the waters and gave it form.',
    explanation: {
      simple:
        'After creating the worlds, the Self created a cosmic Person to be the guardian and inhabitant of these realms. This Purusha was drawn from the primordial waters — the first embodied being.',
      deeper:
        'The Purusha here is the cosmic template for all embodied beings. Being "drawn from waters" suggests emergence from the subtle, formless state into form. This archetypal Person will become the model for human existence.',
    },
    practicalApplication:
      'You are made in the image of this cosmic Person. Your body isn\'t random — it\'s a microcosm designed to house and express consciousness. Respect your form as sacred.',
    keyTerms: [
      { term: 'Lokapāla', meaning: 'World-guardians, protectors' },
      { term: 'Puruṣa', meaning: 'Person, cosmic man' },
      { term: 'Adbhyas', meaning: 'From the waters' },
      { term: 'Amūrchayat', meaning: 'Gave form, solidified' },
    ],
    themes: ['purusha', 'embodiment', 'guardianship', 'form'],
    difficulty: 'intermediate',
  },

  // -------------------------------------------------------------------------
  // VERSE 1.1.4 - Incubating the Person
  // -------------------------------------------------------------------------
  {
    upanishad: 'aitareya',
    section: 1,
    verse: 4,
    sanskrit: `तमभ्यतपत् तस्याभितप्तस्य मुखं निरभिद्यत यथाऽण्डम् ।
मुखाद्वाग्वाचोऽग्निः ।
नासिके निरभिद्येतां नासिकाभ्यां प्राणः प्राणाद्वायुः ॥`,
    transliteration: `tam abhyatapat tasyābhitaptasya mukhaṁ nirabhidyata yathā'ṇḍam |
mukhād vāg vāco 'gniḥ |
nāsike nirabhidyetāṁ nāsikābhyāṁ prāṇaḥ prāṇād vāyuḥ ||`,
    translation:
      'He brooded over him. From the brooded-upon Person, the mouth opened like an egg. From the mouth came speech; from speech came Fire. The nostrils opened; from them came breath; from breath came Air.',
    explanation: {
      simple:
        'Through divine contemplation (tapas), the cosmic Person\'s body begins to develop. First the mouth opens, giving rise to speech and its cosmic counterpart, Fire (Agni). Then the nostrils open for breath, connected to Air (Vayu).',
      deeper:
        'Each sense organ is connected to a cosmic element and deity. Speech and Fire are linked because both illuminate and transform. Breath and Air share the quality of movement and life-force. The body is a microcosm of the universe.',
    },
    practicalApplication:
      'When you speak, you\'re wielding the power of fire — words can warm or burn. When you breathe, you\'re connecting with the cosmic wind. These aren\'t just biological functions; they\'re sacred.',
    keyTerms: [
      { term: 'Abhyatapat', meaning: 'Brooded over, heated with tapas' },
      { term: 'Vāk', meaning: 'Speech' },
      { term: 'Agni', meaning: 'Fire' },
      { term: 'Prāṇa', meaning: 'Breath' },
      { term: 'Vāyu', meaning: 'Air, wind' },
    ],
    themes: ['tapas', 'body-creation', 'speech', 'breath'],
    difficulty: 'intermediate',
  },

  // -------------------------------------------------------------------------
  // VERSE 1.1.5 - Eyes, Ears, Skin, and Mind
  // -------------------------------------------------------------------------
  {
    upanishad: 'aitareya',
    section: 1,
    verse: 5,
    sanskrit: `अक्षिणी निरभिद्येतामक्षिभ्यां चक्षुश्चक्षुष आदित्यः ।
कर्णौ निरभिद्येतां कर्णाभ्यां श्रोत्रं श्रोत्राद्दिशः ।
त्वङ्निरभिद्यत त्वचो लोमानि लोमभ्य ओषधिवनस्पतयः ।
हृदयं निरभिद्यत हृदयान्मनो मनसश्चन्द्रमाः ॥`,
    transliteration: `akṣiṇī nirabhidyetām akṣibhyāṁ cakṣuś cakṣuṣa ādityaḥ |
karṇau nirabhidyetāṁ karṇābhyāṁ śrotraṁ śrotrād diśaḥ |
tvaṅ nirabhidyata tvaco lomāni lomabhya oṣadhi-vanaspatayaḥ |
hṛdayaṁ nirabhidyata hṛdayān mano manasaś candramāḥ ||`,
    translation:
      'The eyes opened; from them came sight; from sight came the Sun. The ears opened; from them came hearing; from hearing came the Directions. The skin emerged; from skin came hair; from hair came plants and trees. The heart opened; from it came mind; from mind came the Moon.',
    explanation: {
      simple:
        'Each organ of the cosmic Person connects to a cosmic reality: eyes to the Sun (both illuminate), ears to the Directions (sound reveals space), skin/hair to vegetation, and mind to the Moon (both wax and wane, both reflect light).',
      deeper:
        'This establishes the profound teaching that microcosm mirrors macrocosm. The Sun that lights the world outside is the same power that enables your seeing. The mind\'s fluctuating nature mirrors the Moon\'s phases. We are not separate from the cosmos.',
    },
    practicalApplication:
      'When you look at the Sun, realize that same light-principle operates as your vision. When you notice your mind waxing and waning like the Moon, don\'t be disturbed — it\'s natural. You are the cosmos in miniature.',
    keyTerms: [
      { term: 'Cakṣus', meaning: 'Sight, eyes' },
      { term: 'Āditya', meaning: 'Sun' },
      { term: 'Śrotra', meaning: 'Hearing, ears' },
      { term: 'Diśaḥ', meaning: 'Directions, quarters' },
      { term: 'Manas', meaning: 'Mind' },
      { term: 'Candramās', meaning: 'Moon' },
    ],
    themes: ['microcosm-macrocosm', 'senses', 'cosmic-correspondences'],
    difficulty: 'intermediate',
  },

  // -------------------------------------------------------------------------
  // VERSE 1.1.6 - Navel, Genitals, and Anus
  // -------------------------------------------------------------------------
  {
    upanishad: 'aitareya',
    section: 1,
    verse: 6,
    sanskrit: `नाभिर्निरभिद्यत नाभ्या अपानोऽपानान्मृत्युः ।
शिश्नं निरभिद्यत शिश्नाद्रेतो रेतस आपः ॥`,
    transliteration: `nābhir nirabhidyata nābhyā apāno 'pānān mṛtyuḥ |
śiśnaṁ nirabhidyata śiśnād reto retasa āpaḥ ||`,
    translation:
      'The navel opened; from it came the outward breath (apana); from apana came Death. The generative organ opened; from it came seed; from seed came the Waters.',
    explanation: {
      simple:
        'The lower functions of the body also have cosmic correspondences. The downward breath (apana) that governs elimination is connected to Death (transformation, letting go). The reproductive power connects to primordial Waters (fertility, life\'s origin).',
      deeper:
        'Even the "lower" bodily functions are divine. Death isn\'t evil but a cosmic principle of transformation. Reproduction connects us to the primordial creative waters from which all life emerged. Nothing in the body is profane.',
    },
    practicalApplication:
      'Don\'t despise your body\'s "lower" functions. Elimination is letting go — a spiritual practice. Sexuality connects to the creative principle of the universe. Approach all aspects of embodiment with reverence.',
    keyTerms: [
      { term: 'Nābhi', meaning: 'Navel' },
      { term: 'Apāna', meaning: 'Downward breath, eliminative function' },
      { term: 'Mṛtyu', meaning: 'Death' },
      { term: 'Retas', meaning: 'Seed, reproductive fluid' },
      { term: 'Āpas', meaning: 'Waters' },
    ],
    themes: ['body', 'death', 'reproduction', 'cosmic-order'],
    difficulty: 'intermediate',
  },

  // ===========================================================================
  // CHAPTER 1, SECTION 2: THE DEITIES SEEK A HOME
  // ===========================================================================

  // -------------------------------------------------------------------------
  // VERSE 1.2.1 - The Deities Enter the World
  // -------------------------------------------------------------------------
  {
    upanishad: 'aitareya',
    section: 2,
    verse: 1,
    sanskrit: `ता एता देवताः सृष्टा अस्मिन्महत्यर्णवे प्रापतन् ।
तमशनापिपासाभ्यामन्ववार्जत् ।
ता एनमब्रुवन्नायतनं नः प्रजानीहि यस्मिन्प्रतिष्ठिता अन्नमदामेति ॥`,
    transliteration: `tā etā devatāḥ sṛṣṭā asmin mahaty arṇave prāpatan |
tam aśanā-pipāsābhyām anvavārjat |
tā enam abruvan āyatanaṁ naḥ prajānīhi yasmin pratiṣṭhitā annam adāmeti ||`,
    translation:
      'These deities, once created, fell into this great ocean (of existence). He subjected them to hunger and thirst. They said to Him: "Find us an abode in which we may dwell and eat food."',
    explanation: {
      simple:
        'The cosmic powers (deities of speech, breath, sight, etc.) found themselves thrown into existence and immediately experienced need — hunger and thirst. They asked the Creator for a stable home and sustenance.',
      deeper:
        'The deities represent the cosmic functions that will become our faculties. Their hunger symbolizes the inherent incompleteness of manifest existence — everything created needs something. This is why the world is characterized by desire.',
    },
    practicalApplication:
      'Your senses are always hungry — the eyes want to see more, the tongue wants more taste. This isn\'t a flaw; it\'s the nature of created existence. Recognize the hunger without being enslaved by it.',
    keyTerms: [
      { term: 'Devatāḥ', meaning: 'Deities, divine powers' },
      { term: 'Arṇava', meaning: 'Ocean' },
      { term: 'Aśanā-pipāsā', meaning: 'Hunger and thirst' },
      { term: 'Āyatana', meaning: 'Abode, dwelling place' },
    ],
    themes: ['desire', 'embodiment', 'need', 'seeking'],
    difficulty: 'intermediate',
  },

  // -------------------------------------------------------------------------
  // VERSE 1.2.2 - The Cow Rejected
  // -------------------------------------------------------------------------
  {
    upanishad: 'aitareya',
    section: 2,
    verse: 2,
    sanskrit: `ताभ्यो गामानयत्ता अब्रुवन्न वै नोऽयमलमिति ।
ताभ्योऽश्वमानयत्ता अब्रुवन्न वै नोऽयमलमिति ॥`,
    transliteration: `tābhyo gām ānayat tā abruvan na vai no 'yam alam iti |
tābhyo 'śvam ānayat tā abruvan na vai no 'yam alam iti ||`,
    translation:
      'He brought them a cow. They said: "This is not sufficient for us." He brought them a horse. They said: "This is not sufficient for us."',
    explanation: {
      simple:
        'The Creator offered various animal forms as potential homes for the deities, but none were adequate. The cow and horse — highly valued animals — were rejected. Something more suitable was needed.',
      deeper:
        'Animal bodies, while living, lack the capacity for self-reflection and spiritual development that the deities require. The search for the right "vehicle" continues until the human form is offered.',
    },
    practicalApplication:
      'You have something animals don\'t — the capacity to inquire "Who am I?" Don\'t waste this human opportunity on merely animal pursuits. Your form is specially designed for self-realization.',
    keyTerms: [
      { term: 'Gām', meaning: 'Cow' },
      { term: 'Aśvam', meaning: 'Horse' },
      { term: 'Alam', meaning: 'Sufficient, adequate' },
    ],
    themes: ['human-birth', 'special-opportunity', 'form'],
    difficulty: 'beginner',
  },

  // -------------------------------------------------------------------------
  // VERSE 1.2.3 - The Human Form Accepted
  // -------------------------------------------------------------------------
  {
    upanishad: 'aitareya',
    section: 2,
    verse: 3,
    sanskrit: `ताभ्यः पुरुषमानयत्ता अब्रुवन् सुकृतं बतेति ।
पुरुषो वाव सुकृतम् ।
ता अब्रवीद्यथायतनं प्रविशतेति ॥`,
    transliteration: `tābhyaḥ puruṣam ānayat tā abruvan sukṛtaṁ bateti |
puruṣo vāva sukṛtam |
tā abravīd yathāyatanaṁ praviśateti ||`,
    translation:
      'He brought them a human being (Purusha). They said: "Ah, this is well-made indeed!" For the human being is truly well-made. He said to them: "Enter into your respective abodes."',
    explanation: {
      simple:
        'Finally, the human form was presented, and the deities rejoiced — "Sukritam! Well-made!" The human body is perfectly designed to house all the cosmic powers. They were invited to enter and take their places.',
      deeper:
        'The human body is "well-made" (sukṛta) because it allows for both worldly functioning and spiritual realization. It\'s the optimal vehicle for the divine faculties. This is why human birth is considered precious.',
    },
    practicalApplication:
      'Your body is "well-made" by cosmic standards — a temple designed for divine powers. Treat it with the respect it deserves. Don\'t abuse this precious vehicle.',
    keyTerms: [
      { term: 'Puruṣa', meaning: 'Human being, person' },
      { term: 'Sukṛtam', meaning: 'Well-made, well-done' },
      { term: 'Yathāyatanam', meaning: 'Into respective abodes' },
      { term: 'Praviśata', meaning: 'Enter' },
    ],
    themes: ['human-body', 'sacred-vessel', 'divine-dwelling'],
    difficulty: 'beginner',
    famousVerse: true,
  },

  // -------------------------------------------------------------------------
  // VERSE 1.2.4 - Fire Enters as Speech
  // -------------------------------------------------------------------------
  {
    upanishad: 'aitareya',
    section: 2,
    verse: 4,
    sanskrit: `अग्निर्वाग्भूत्वा मुखं प्राविशत् ।
वायुः प्राणो भूत्वा नासिके प्राविशत् ।
आदित्यश्चक्षुर्भूत्वाऽक्षिणी प्राविशत् ।
दिशः श्रोत्रं भूत्वा कर्णौ प्राविशन् ॥`,
    transliteration: `agnir vāg bhūtvā mukhaṁ prāviśat |
vāyuḥ prāṇo bhūtvā nāsike prāviśat |
ādityaś cakṣur bhūtvā 'kṣiṇī prāviśat |
diśaḥ śrotraṁ bhūtvā karṇau prāviśan ||`,
    translation:
      'Fire became speech and entered the mouth. Air became breath and entered the nostrils. The Sun became sight and entered the eyes. The Directions became hearing and entered the ears.',
    explanation: {
      simple:
        'Each cosmic deity entered the human body through its corresponding organ. Fire (Agni) became our power of speech. Air (Vayu) became our breath. The Sun (Aditya) became our vision. The Directions (Dik) became our hearing.',
      deeper:
        'This explains why our faculties have cosmic connections. When you speak, Fire speaks through you. When you see, the Sun sees through your eyes. The body is a meeting point of cosmic and individual.',
    },
    practicalApplication:
      'Recognize the divine in your daily functions. Speaking is fire; breathing is wind; seeing is sunlight. You\'re not doing these alone — cosmic powers work through you.',
    keyTerms: [
      { term: 'Agni', meaning: 'Fire' },
      { term: 'Vāk', meaning: 'Speech' },
      { term: 'Prāviśat', meaning: 'Entered' },
    ],
    themes: ['deities-in-body', 'cosmic-faculties', 'indwelling'],
    difficulty: 'intermediate',
  },

  // -------------------------------------------------------------------------
  // VERSE 1.2.5 - Plants, Moon, Death, Waters Enter
  // -------------------------------------------------------------------------
  {
    upanishad: 'aitareya',
    section: 2,
    verse: 5,
    sanskrit: `ओषधिवनस्पतयो लोमानि भूत्वा त्वचं प्राविशन् ।
चन्द्रमा मनो भूत्वा हृदयं प्राविशत् ।
मृत्युरपानो भूत्वा नाभिं प्राविशत् ।
आपो रेतो भूत्वा शिश्नं प्राविशन् ॥`,
    transliteration: `oṣadhi-vanaspatayo lomāni bhūtvā tvacaṁ prāviśan |
candramā mano bhūtvā hṛdayaṁ prāviśat |
mṛtyur apāno bhūtvā nābhiṁ prāviśat |
āpo reto bhūtvā śiśnaṁ prāviśan ||`,
    translation:
      'Plants and trees became hair and entered the skin. The Moon became mind and entered the heart. Death became the downward breath and entered the navel. Waters became seed and entered the generative organ.',
    explanation: {
      simple:
        'The correspondences continue: plants govern our hair and skin, the Moon rules the mind (heart was considered the seat of mind), Death governs elimination (apana), and Waters govern reproduction.',
      deeper:
        'The mind-Moon connection is significant. Just as the Moon waxes, wanes, and has phases, so does the mind fluctuate. The heart as the seat of mind suggests that true thinking involves feeling — head and heart are not separate.',
    },
    practicalApplication:
      'When your mind fluctuates wildly, remember it\'s moon-like by nature. Don\'t demand constant clarity. When you face death or letting go, know that a cosmic principle (Mrityu) works through the apana breath to release what must be released.',
    keyTerms: [
      { term: 'Candramā', meaning: 'Moon' },
      { term: 'Manas', meaning: 'Mind' },
      { term: 'Hṛdaya', meaning: 'Heart' },
      { term: 'Mṛtyu', meaning: 'Death' },
      { term: 'Apāna', meaning: 'Downward breath' },
    ],
    themes: ['mind-moon', 'death', 'body-cosmos'],
    difficulty: 'intermediate',
  },

  // ===========================================================================
  // CHAPTER 1, SECTION 3: THE SELF SEEKS ENTRY
  // ===========================================================================

  // -------------------------------------------------------------------------
  // VERSE 1.3.1 - Hunger and Thirst Seek Inclusion
  // -------------------------------------------------------------------------
  {
    upanishad: 'aitareya',
    section: 3,
    verse: 1,
    sanskrit: `तमशनायापिपासे अब्रूतामावाभ्यामभिप्रजानीहीति ।
ते अब्रवीदेतास्वेव वां देवतास्वाभजाम्येतासु भागिन्यौ करोमीति ।
तस्माद्यस्यै कस्यै च देवतायै हविर्गृह्यते भागिन्यावेवास्यामशनायापिपासे भवतः ॥`,
    transliteration: `tam aśanāyā-pipāse abrūtām āvābhyām abhiprajānīhīti |
te abravīd etāsv eva vāṁ devatāsv ābhajāmy etāsu bhāginyau karomīti |
tasmād yasyai kasyai ca devatāyai havir gṛhyate bhāginyāv evāsyām aśanāyā-pipāse bhavataḥ ||`,
    translation:
      'Hunger and Thirst said to Him: "Provide an abode for us too." He said: "I assign you to these deities; I make you sharers with them." Therefore, to whichever deity an offering is made, hunger and thirst become sharers in it.',
    explanation: {
      simple:
        'Hunger and Thirst demanded their place too. The Creator assigned them to share in all the other deities. This is why every sense experience involves some desire — hunger and thirst pervade all faculties.',
      deeper:
        'Desire (hunger/thirst) is woven into every experience. Whenever the eye sees something beautiful, there\'s a hunger to see more. Whenever we hear something pleasing, there\'s thirst for more. Desire is not one sense but underlies them all.',
    },
    practicalApplication:
      'Notice how desire piggybacks on every experience. You can\'t taste without wanting. You can\'t see without craving. This isn\'t a problem to fix but a structure to understand. Awareness of this can create space.',
    keyTerms: [
      { term: 'Aśanāyā', meaning: 'Hunger' },
      { term: 'Pipāsā', meaning: 'Thirst' },
      { term: 'Bhāginī', meaning: 'Sharer, participant' },
      { term: 'Havis', meaning: 'Offering' },
    ],
    themes: ['desire', 'underlying-nature', 'all-pervading'],
    difficulty: 'intermediate',
  },

  // -------------------------------------------------------------------------
  // VERSE 1.3.2 - The Self Contemplates Entry
  // -------------------------------------------------------------------------
  {
    upanishad: 'aitareya',
    section: 3,
    verse: 2,
    sanskrit: `स ईक्षतेमे नु लोकाश्च लोकपालाश्चान्नमेभ्यः सृजा इति ॥`,
    transliteration: `sa īkṣateme nu lokāś ca lokapālāś cānnam ebhyaḥ sṛjā iti ||`,
    translation:
      'He thought: "Here are the worlds and the world-guardians. Let me create food for them."',
    explanation: {
      simple:
        'Having created the body with its faculties, the Self now considers creating food to sustain them. The body needs nourishment; the cosmic order requires sustenance.',
      deeper:
        'Food (anna) in Vedic thought is not just physical nutrition but everything that sustains life — experiences, sensations, objects of perception. The world itself becomes "food" for the senses.',
    },
    practicalApplication:
      'Everything you perceive is "food" for your senses and mind. Choose your diet carefully — not just physical food but what you feed your eyes, ears, and mind. Garbage in, garbage out.',
    keyTerms: [
      { term: 'Anna', meaning: 'Food, nourishment' },
      { term: 'Lokapāla', meaning: 'World-guardians' },
    ],
    themes: ['food', 'sustenance', 'nourishment'],
    difficulty: 'beginner',
  },

  // -------------------------------------------------------------------------
  // VERSE 1.3.3 - Food Created from Waters
  // -------------------------------------------------------------------------
  {
    upanishad: 'aitareya',
    section: 3,
    verse: 3,
    sanskrit: `सोऽपोऽभ्यतपत्ताभ्योऽभितप्ताभ्यो मूर्तिरजायत ।
या वै सा मूर्तिरजायतान्नं वै तत् ॥`,
    transliteration: `so 'po 'bhyatapat tābhyo 'bhitaptābhyo mūrtir ajāyata |
yā vai sā mūrtir ajāyatānnaṁ vai tat ||`,
    translation:
      'He brooded over the waters. From the brooded-upon waters, a form was born. That form that was born is indeed food.',
    explanation: {
      simple:
        'Through meditation on the primordial waters, food/form emerged. All material sustenance comes from the interplay of consciousness (brooding/tapas) and primordial substance (waters).',
      deeper:
        'Mūrti (form) and anna (food) are identified. All forms are potentially food — this isn\'t cannibalism but a recognition that existence is a cycle of consumption and transformation. Everything feeds something else.',
    },
    practicalApplication:
      'You are food for something else, even as you consume food. This isn\'t morbid — it\'s the cosmic economy of transformation. Accept your place in this cycle with grace.',
    keyTerms: [
      { term: 'Abhyatapat', meaning: 'Brooded over, heated' },
      { term: 'Āpas', meaning: 'Waters' },
      { term: 'Mūrti', meaning: 'Form' },
      { term: 'Anna', meaning: 'Food' },
    ],
    themes: ['food', 'form', 'transformation', 'cycle'],
    difficulty: 'intermediate',
  },

  // -------------------------------------------------------------------------
  // VERSE 1.3.4 - Food Tries to Escape
  // -------------------------------------------------------------------------
  {
    upanishad: 'aitareya',
    section: 3,
    verse: 4,
    sanskrit: `तदेनत्सृष्टं पराङ्त्यजिघांसत् ।
तद्वाचाऽजिघृक्षत्तन्नाशक्नोद्वाचा ग्रहीतुम् ।
स यद्धैनद्वाचाऽग्रहैष्यदभिव्याहृत्य हैवान्नमत्रप्स्यत् ॥`,
    transliteration: `tad enat sṛṣṭaṁ parāṅ tyajighāṁsat |
tad vācā 'jighṛkṣat tan nāśaknod vācā grahītum |
sa yad dhainad vācā 'grahaiṣyad abhivyāhṛtya haivānnam atrapsyat ||`,
    translation:
      'This food, having been created, tried to flee. He tried to grasp it with speech but could not seize it with speech. If he had seized it with speech, one would be satisfied merely by speaking of food.',
    explanation: {
      simple:
        'The newly created food tried to escape being consumed. The Self tried to catch it through speech (naming it), but that failed. If naming food satisfied hunger, we\'d be full just by talking about food!',
      deeper:
        'This humorous passage illustrates a profound truth: conceptual knowledge doesn\'t satisfy actual needs. You can\'t eat a menu, can\'t drink the word "water." Direct experience, not labels, is required.',
    },
    practicalApplication:
      'Don\'t confuse talking about spirituality with actual spiritual experience. Reading about meditation isn\'t meditating. Knowing about peace isn\'t being at peace. Direct experience is required.',
    keyTerms: [
      { term: 'Parāk', meaning: 'Away, fleeing' },
      { term: 'Ajighṛkṣat', meaning: 'Tried to grasp' },
      { term: 'Abhivyāhṛtya', meaning: 'By speaking about' },
      { term: 'Atrapsyat', meaning: 'Would have been satisfied' },
    ],
    themes: ['concept-vs-reality', 'direct-experience', 'speech-limits'],
    difficulty: 'intermediate',
  },

  // -------------------------------------------------------------------------
  // VERSE 1.3.5-9 - Other Faculties Fail
  // -------------------------------------------------------------------------
  {
    upanishad: 'aitareya',
    section: 3,
    verse: 5,
    sanskrit: `तत्प्राणेनाजिघृक्षत्तन्नाशक्नोत्प्राणेन ग्रहीतुम् ।
स यद्धैनत्प्राणेनाग्रहैष्यदभिप्राण्य हैवान्नमत्रप्स्यत् ॥`,
    transliteration: `tat prāṇenājighṛkṣat tan nāśaknot prāṇena grahītum |
sa yad dhainat prāṇenāgrahaiṣyad abhiprāṇya haivānnam atrapsyat ||`,
    translation:
      'He tried to grasp it with breath but could not seize it with breath. If he had seized it with breath, one would be satisfied merely by smelling food.',
    explanation: {
      simple:
        'Breath (smell) also couldn\'t capture food. If it could, we\'d be satisfied just by smelling a meal. The pleasant aroma whets appetite but doesn\'t fulfill it.',
    },
    practicalApplication:
      'Smell, sight, and anticipation increase desire but don\'t satisfy it. Notice how looking at pictures of food or smelling cooking increases hunger rather than satisfying it. Real nourishment requires actual eating.',
    themes: ['smell', 'anticipation', 'partial-satisfaction'],
    difficulty: 'beginner',
  },

  {
    upanishad: 'aitareya',
    section: 3,
    verse: 6,
    sanskrit: `तच्चक्षुषाऽजिघृक्षत्तन्नाशक्नोच्चक्षुषा ग्रहीतुम् ।
स यद्धैनच्चक्षुषाऽग्रहैष्यद्दृष्ट्वा हैवान्नमत्रप्स्यत् ॥`,
    transliteration: `tac cakṣuṣā 'jighṛkṣat tan nāśaknoc cakṣuṣā grahītum |
sa yad dhainac cakṣuṣā 'grahaiṣyad dṛṣṭvā haivānnam atrapsyat ||`,
    translation:
      'He tried to grasp it with sight but could not seize it with sight. If he had seized it with sight, one would be satisfied merely by seeing food.',
    explanation: {
      simple:
        'Sight also failed. Looking at food doesn\'t nourish — you can stare at a feast all day and still starve.',
    },
    practicalApplication:
      'Visual consumption isn\'t real consumption. "Window shopping" for life experiences, watching others live fully on social media — none of this actually nourishes you.',
    themes: ['sight', 'looking-vs-having', 'actual-experience'],
    difficulty: 'beginner',
  },

  {
    upanishad: 'aitareya',
    section: 3,
    verse: 7,
    sanskrit: `तच्छ्रोत्रेणाजिघृक्षत्तन्नाशक्नोच्छ्रोत्रेण ग्रहीतुम् ।
स यद्धैनच्छ्रोत्रेणाग्रहैष्यच्छ्रुत्वा हैवान्नमत्रप्स्यत् ॥`,
    transliteration: `tac chrotreṇājighṛkṣat tan nāśaknoc chrotreṇa grahītum |
sa yad dhainac chrotreṇāgrahaiṣyac chrutvā haivānnam atrapsyat ||`,
    translation:
      'He tried to grasp it with hearing but could not seize it with hearing. If he had seized it with hearing, one would be satisfied merely by hearing about food.',
    explanation: {
      simple:
        'Hearing about food doesn\'t feed you. All the podcasts about nutrition won\'t substitute for actual meals.',
    },
    practicalApplication:
      'Listening to spiritual teachers isn\'t the same as embodying their teachings. Information must become transformation. Are you just hearing about truth or actually living it?',
    themes: ['hearing', 'information-vs-realization'],
    difficulty: 'beginner',
  },

  {
    upanishad: 'aitareya',
    section: 3,
    verse: 8,
    sanskrit: `तत्त्वचाऽजिघृक्षत्तन्नाशक्नोत्त्वचा ग्रहीतुम् ।
स यद्धैनत्त्वचाऽग्रहैष्यत्स्पृष्ट्वा हैवान्नमत्रप्स्यत् ॥`,
    transliteration: `tat tvacā 'jighṛkṣat tan nāśaknot tvacā grahītum |
sa yad dhainat tvacā 'grahaiṣyat spṛṣṭvā haivānnam atrapsyat ||`,
    translation:
      'He tried to grasp it with skin but could not seize it with skin. If he had seized it with skin, one would be satisfied merely by touching food.',
    explanation: {
      simple:
        'Touch also fails to capture food. Holding food in your hands doesn\'t nourish you — you must actually eat it.',
    },
    practicalApplication:
      'Being in proximity to something isn\'t the same as having it. You can touch success, touch happiness, touch spirituality — but have you truly taken them in?',
    themes: ['touch', 'proximity-vs-integration'],
    difficulty: 'beginner',
  },

  {
    upanishad: 'aitareya',
    section: 3,
    verse: 9,
    sanskrit: `तन्मनसाऽजिघृक्षत्तन्नाशक्नोन्मनसा ग्रहीतुम् ।
स यद्धैनन्मनसाऽग्रहैष्यद्ध्यात्वा हैवान्नमत्रप्स्यत् ॥`,
    transliteration: `tan manasā 'jighṛkṣat tan nāśaknon manasā grahītum |
sa yad dhainan manasā 'grahaiṣyad dhyātvā haivānnam atrapsyat ||`,
    translation:
      'He tried to grasp it with mind but could not seize it with mind. If he had seized it with mind, one would be satisfied merely by thinking about food.',
    explanation: {
      simple:
        'Even the mind can\'t capture food. Meditating on food, visualizing meals, remembering past feasts — none of this nourishes the body.',
    },
    practicalApplication:
      'Thinking about something is not the same as having it. Mental rehearsal of success isn\'t success. Imagining peace isn\'t peace. At some point, you must act, embody, actually live.',
    themes: ['mind', 'thinking-vs-being'],
    difficulty: 'beginner',
  },

  // -------------------------------------------------------------------------
  // VERSE 1.3.10 - Apana Succeeds
  // -------------------------------------------------------------------------
  {
    upanishad: 'aitareya',
    section: 3,
    verse: 10,
    sanskrit: `तदपानेनाजिघृक्षत्तदाव्ययत् ।
सैषोऽन्नस्य ग्रहो यद्वायुरन्नायुर्वा एष यद्वायुः ॥`,
    transliteration: `tad apānenājighṛkṣat tad āvyayat |
saiṣo 'nnasya graho yad vāyur annāyur vā eṣa yad vāyuḥ ||`,
    translation:
      'He tried to grasp it with the apana (digestive breath) and succeeded. This is the grasper of food — Vayu (the vital air). This Vayu is indeed the life of food.',
    explanation: {
      simple:
        'Finally, the downward breath (apana) succeeded in grasping food. Apana governs digestion and assimilation. Food is truly "grasped" only when it\'s eaten, digested, and transformed into life energy.',
      deeper:
        'This teaching emphasizes that real acquisition requires metabolization, not mere contact. The apana transforms external substance into the body\'s own vitality. Similarly, spiritual teaching must be "digested" — reflected upon, practiced, integrated — to become wisdom.',
    },
    practicalApplication:
      'Are you digesting your experiences or just accumulating them? Real learning, real growth, comes from metabolizing — taking in, breaking down, and integrating into your being.',
    keyTerms: [
      { term: 'Apāna', meaning: 'Downward breath, digestive wind' },
      { term: 'Āvyayat', meaning: 'Succeeded in grasping, pervaded' },
      { term: 'Graha', meaning: 'Grasper, seizer' },
      { term: 'Annāyu', meaning: 'Life of food, that which gives food life' },
    ],
    themes: ['digestion', 'assimilation', 'integration'],
    difficulty: 'intermediate',
    famousVerse: true,
  },

  // -------------------------------------------------------------------------
  // VERSE 1.3.11 - The Self Ponders Entry
  // -------------------------------------------------------------------------
  {
    upanishad: 'aitareya',
    section: 3,
    verse: 11,
    sanskrit: `स ईक्षत कथं न्विदं मदृते स्यादिति ।
स ईक्षत कतरेण प्रपद्या इति ।
स ईक्षत यदि वाचाऽभिव्याहृतं यदि प्राणेनाभिप्राणितं यदि चक्षुषा दृष्टं यदि श्रोत्रेण श्रुतं यदि त्वचा स्पृष्टं यदि मनसा ध्यातं यद्यपानेनाभ्यपानितं यदि शिश्नेन विसृष्टमथ कोऽहमिति ॥`,
    transliteration: `sa īkṣata kathaṁ nv idaṁ mad ṛte syād iti |
sa īkṣata katareṇa prapadyā iti |
sa īkṣata yadi vācā 'bhivyāhṛtaṁ yadi prāṇenābhiprāṇitaṁ yadi cakṣuṣā dṛṣṭaṁ yadi śrotreṇa śrutaṁ yadi tvacā spṛṣṭaṁ yadi manasā dhyātaṁ yady apānenābhyapānitaṁ yadi śiśnena visṛṣṭam atha ko 'ham iti ||`,
    translation:
      'He thought: "How could this exist without me?" He thought: "By which path shall I enter?" He reflected: "If speaking is done by speech, breathing by breath, seeing by sight, hearing by ear, touching by skin, thinking by mind, digesting by apana, emitting by the organ — then who am I?"',
    explanation: {
      simple:
        'The Self realized that the body-mind couldn\'t function without it as the animating presence. But which door should it use to enter? Looking at all the faculties already assigned to their functions, it wondered: "Where do I fit? Who am I among all these?"',
      deeper:
        'This pivotal verse sets up the great inquiry. All functions have their cosmic deities. But the Self is not just another function — it is what makes all functions possible. The question "Who am I?" (ko\'ham) is the fundamental inquiry of Vedanta.',
    },
    practicalApplication:
      'You are not your speech, not your breath, not your sight, not your hearing, not your thoughts. If all these have their respective agents, who is the YOU that asks "Who am I?" Stay with this question.',
    keyTerms: [
      { term: 'Mad ṛte', meaning: 'Without me' },
      { term: 'Prapadyā', meaning: 'Shall I enter' },
      { term: 'Ko aham', meaning: 'Who am I?' },
    ],
    themes: ['self-inquiry', 'who-am-I', 'witness', 'beyond-functions'],
    difficulty: 'intermediate',
    famousVerse: true,
  },

  // -------------------------------------------------------------------------
  // VERSE 1.3.12 - The Self Enters Through the Crown
  // -------------------------------------------------------------------------
  {
    upanishad: 'aitareya',
    section: 3,
    verse: 12,
    sanskrit: `स एतमेव सीमानं विदार्यैतया द्वारा प्रापद्यत ।
सैषा विदृतिर्नाम द्वास्तदेतन्नान्दनम् ।
तस्य त्रय आवसथास्त्रयः स्वप्नाः ।
अयमावसथोऽयमावसथोऽयमावसथ इति ॥`,
    transliteration: `sa etam eva sīmānaṁ vidāryaitayā dvārā prāpadyata |
saiṣā vidṛtir nāma dvās tad etan nāndanam |
tasya traya āvasathās trayaḥ svapnāḥ |
ayam āvasatho 'yam āvasatho 'yam āvasatha iti ||`,
    translation:
      'He opened this very seam (at the crown of the head) and entered by that door. That door is called vidṛti (the "opening"). This is the place of bliss. He has three abodes, three dream states — this is an abode, this is an abode, this is an abode.',
    explanation: {
      simple:
        'The Self entered the body through the crown of the head — the fontanel, which is open at birth. This entry point is called the "opening" (vidṛti) and is associated with bliss. The Self then takes up three positions in the body, corresponding to different states of consciousness.',
      deeper:
        'The crown (brahmarandhra) is considered the doorway between individual and cosmic consciousness. The "three abodes" are traditionally the right eye (waking), mind/throat (dream), and heart (deep sleep). The Self is present in all states.',
    },
    practicalApplication:
      'The crown of your head is a significant spiritual center. Many traditions focus meditation here. The Self that entered through your crown is still present, animating every state of consciousness you experience.',
    keyTerms: [
      { term: 'Sīmān', meaning: 'Boundary, seam, crown' },
      { term: 'Vidṛti', meaning: 'Opening, split' },
      { term: 'Dvār', meaning: 'Door, gate' },
      { term: 'Nāndana', meaning: 'Place of bliss' },
      { term: 'Āvasatha', meaning: 'Abode, dwelling place' },
    ],
    themes: ['crown-center', 'entry-point', 'three-states', 'bliss'],
    difficulty: 'intermediate',
    famousVerse: true,
  },

  // -------------------------------------------------------------------------
  // VERSE 1.3.13 - The Self's First Awareness
  // -------------------------------------------------------------------------
  {
    upanishad: 'aitareya',
    section: 3,
    verse: 13,
    sanskrit: `स जातो भूतान्यभिव्यैख्यत् ।
किमिहान्यं वावदिषदिति ।
स एतमेव पुरुषं ब्रह्म ततममपश्यत् ।
इदमदर्शमिति ॥`,
    transliteration: `sa jāto bhūtāny abhivyaikhyat |
kim ihānyaṁ vāvadiṣad iti |
sa etam eva puruṣaṁ brahma tatamam apaśyat |
idam adarśam iti ||`,
    translation:
      'Once born (into the body), He surveyed the beings. "What else could one wish to speak about here?" He saw this very Person (Purusha) as the most expanded Brahman and said: "I have seen this!"',
    explanation: {
      simple:
        'Upon entering the body, the Self looked around and saw that everything is Brahman. Recognizing the all-pervading presence of the absolute, the Self exclaimed "I have seen this!" (Idam adarśam) — indicating direct recognition, not just intellectual understanding.',
      deeper:
        'The phrase "idam adarśam" (I have seen THIS) suggests direct perception of Brahman, not inference. The "Person" (Purusha) seen as the "most expanded Brahman" is the Self\'s recognition of its own cosmic nature. Seeing and being are unified.',
    },
    practicalApplication:
      'Have you had moments of "seeing" — not just thinking about, but directly perceiving — the unity of existence? These are moments of the Self recognizing itself. Treasure and cultivate them.',
    keyTerms: [
      { term: 'Jāta', meaning: 'Born, manifested' },
      { term: 'Abhivyaikhyat', meaning: 'Surveyed, looked over' },
      { term: 'Tatama', meaning: 'Most expanded, most pervading' },
      { term: 'Adarśam', meaning: 'I have seen' },
    ],
    themes: ['recognition', 'direct-seeing', 'brahman-everywhere'],
    difficulty: 'intermediate',
  },

  // -------------------------------------------------------------------------
  // VERSE 1.3.14 - Named Idandra
  // -------------------------------------------------------------------------
  {
    upanishad: 'aitareya',
    section: 3,
    verse: 14,
    sanskrit: `तस्मादिदन्द्रो नामेदन्द्रो ह वै नाम ।
तमिदन्द्रं सन्तमिन्द्र इत्याचक्षते परोक्षेण ।
परोक्षप्रिया इव हि देवाः परोक्षप्रिया इव हि देवाः ॥`,
    transliteration: `tasmād idandro nāmedandro ha vai nāma |
tam idandraṁ santam indra ity ācakṣate parokṣeṇa |
parokṣapriyā iva hi devāḥ parokṣapriyā iva hi devāḥ ||`,
    translation:
      'Therefore His name is Idandra ("I-saw-this"). Idandra is indeed His name. But they call Him Indra indirectly, for the gods love the indirect — the gods love the indirect.',
    explanation: {
      simple:
        'The Self\'s exclamation "Idam adarśam" (I saw this) became the name Idandra, which evolved into Indra. The gods prefer indirect names and hidden meanings — they don\'t reveal themselves directly.',
      deeper:
        'This playful etymology connects the experience of seeing (adarśam) to the deity Indra, king of the gods. The point is that Indra — supreme deity in the Vedas — is actually the Self that recognizes itself. The statement "gods love the indirect" acknowledges that spiritual truth is often veiled.',
    },
    practicalApplication:
      'Divine truth often hides in plain sight. The gods "love the indirect" — don\'t expect obvious answers. Be willing to look beneath surfaces, to find the sacred hidden in the ordinary.',
    keyTerms: [
      { term: 'Idandra', meaning: '"Idam-dra" — one who saw this' },
      { term: 'Indra', meaning: 'King of gods, the seer' },
      { term: 'Parokṣa', meaning: 'Indirect, hidden' },
      { term: 'Parokṣapriya', meaning: 'Lover of the indirect' },
    ],
    themes: ['hidden-truth', 'indirect-teaching', 'etymology'],
    difficulty: 'intermediate',
  },

  // ===========================================================================
  // CHAPTER 2: THE THREE BIRTHS
  // ===========================================================================

  // -------------------------------------------------------------------------
  // VERSE 2.1 - First Birth: In the Father
  // -------------------------------------------------------------------------
  {
    upanishad: 'aitareya',
    section: 4,
    verse: 1,
    sanskrit: `पुरुषे ह वा अयमादितोऽगर्भो भवति यदेतद्रेतः ।
तदेतत्सर्वेभ्योऽङ्गेभ्यस्तेजः संभूतमात्मन्येवात्मानं बिभर्ति ।
तद्यदा स्त्रियां सिञ्चत्यथैनज्जनयति ।
तदस्य प्रथमं जन्म ॥`,
    transliteration: `puruṣe ha vā ayam ādito garbho bhavati yad etad retaḥ |
tad etat sarvebhyo 'ṅgebhyas tejaḥ saṁbhūtam ātmany evātmānaṁ bibharti |
tad yadā striyāṁ siñcaty athainaj janayati |
tad asya prathamaṁ janma ||`,
    translation:
      'In the beginning, this one becomes an embryo in the person (father), which is the seed. This is the essence gathered from all limbs; he bears himself in himself. When he deposits it in a woman, he begets it. This is his first birth.',
    explanation: {
      simple:
        'The Upanishad now describes three "births" of the Self. The first birth is when the father produces seed — this seed contains the essence of all his limbs, carrying the Self into potential offspring. Depositing it in the mother begins the journey to physical manifestation.',
      deeper:
        'The Self doesn\'t just appear at conception — it exists first as potential in the father\'s body, gathered from all parts as "tejas" (essence, light). This first birth represents the transition from the purely unmanifest to the beginning of manifestation.',
    },
    practicalApplication:
      'You existed as potential before you were conceived — as essence in your father\'s body. Your existence didn\'t start at birth; it has been unfolding through multiple stages. Honor the journey.',
    keyTerms: [
      { term: 'Garbha', meaning: 'Embryo, womb' },
      { term: 'Retas', meaning: 'Seed, semen' },
      { term: 'Tejas', meaning: 'Essence, brilliance, light' },
      { term: 'Prathama janma', meaning: 'First birth' },
    ],
    themes: ['three-births', 'conception', 'essence', 'potential'],
    difficulty: 'intermediate',
  },

  // -------------------------------------------------------------------------
  // VERSE 2.2 - Second Birth: From the Mother
  // -------------------------------------------------------------------------
  {
    upanishad: 'aitareya',
    section: 4,
    verse: 2,
    sanskrit: `तत्स्त्रिया आत्मभूयं गच्छति यथा स्वमङ्गं तथा ।
तस्मादेनां न हिनस्ति ।
सास्यैतमात्मानमत्र गतं भावयति ॥`,
    transliteration: `tat striyā ātmabhūyaṁ gacchati yathā svam aṅgaṁ tathā |
tasmād enāṁ na hinasti |
sāsyaitam ātmānam atra gataṁ bhāvayati ||`,
    translation:
      'It becomes part of the woman\'s self, as if her own limb. Therefore it does not hurt her. She nourishes this self of his that has come to her.',
    explanation: {
      simple:
        'Once in the mother, the embryo becomes as if part of her own body — like one of her limbs. That\'s why pregnancy doesn\'t fundamentally "hurt" her (the body doesn\'t reject it). She nurtures this visiting self.',
      deeper:
        'The mother\'s body accepts the embryo as self, not other. This biological acceptance mirrors the spiritual truth that the Self in one being is the same Self in another. The mother nurtures "his self" because it\'s also her Self.',
    },
    practicalApplication:
      'The separation between self and other can dissolve — as it does between mother and child. Can you nurture others\' wellbeing as if it were your own? That\'s recognizing the one Self in all.',
    keyTerms: [
      { term: 'Ātmabhūya', meaning: 'Becoming one with the self' },
      { term: 'Aṅga', meaning: 'Limb' },
      { term: 'Na hinasti', meaning: 'Does not hurt' },
      { term: 'Bhāvayati', meaning: 'Nourishes, cultivates' },
    ],
    themes: ['mother', 'nurturing', 'self-in-other'],
    difficulty: 'beginner',
  },

  // -------------------------------------------------------------------------
  // VERSE 2.3 - Second Birth Proper
  // -------------------------------------------------------------------------
  {
    upanishad: 'aitareya',
    section: 4,
    verse: 3,
    sanskrit: `सा भावयित्री भावयितव्या भवति ।
तं स्त्री गर्भं बिभर्ति ।
सोऽग्र एव कुमारं जन्मनोऽग्रेऽधिभावयति ।
स यत्कुमारं जन्मनोऽग्रेऽधिभावयत्यात्मानमेव तद्भावयत्येषां लोकानां सन्तत्या ।
एवं सन्तता हीमे लोकाः ।
तदस्य द्वितीयं जन्म ॥`,
    transliteration: `sā bhāvayitrī bhāvayitavyā bhavati |
taṁ strī garbhaṁ bibharti |
so 'gra eva kumāraṁ janmano 'gre 'dhibhāvayati |
sa yat kumāraṁ janmano 'gre 'dhibhāvayaty ātmānam eva tad bhāvayaty eṣāṁ lokānāṁ santatyā |
evaṁ santatā hīme lokāḥ |
tad asya dvitīyaṁ janma ||`,
    translation:
      'She who nourishes is to be nourished. The woman bears the embryo. The father nourishes the child even before birth and after. By nourishing the child, he nourishes himself for the continuation of these worlds. For thus are these worlds continued. This is his second birth.',
    explanation: {
      simple:
        'The mother who nourishes must herself be nourished. The father continues to nurture the child before and after birth. In caring for the child, he\'s actually ensuring his own continuity and that of the cosmic order. Physical birth is the second birth.',
      deeper:
        'The cycle of nurturing (bhāvana) creates continuity. Parents nurture children who become parents who nurture children. Through this chain, both families and the cosmos continue. Your birth is part of this vast continuum.',
    },
    practicalApplication:
      'Nurturing others is nurturing yourself — not metaphorically, but because the same Self lives in all. Care for children, students, or anyone you guide is care for your own deeper nature.',
    keyTerms: [
      { term: 'Bhāvayitrī', meaning: 'She who nourishes' },
      { term: 'Garbha', meaning: 'Embryo, womb' },
      { term: 'Santatyā', meaning: 'For continuity' },
      { term: 'Dvitīya janma', meaning: 'Second birth' },
    ],
    themes: ['second-birth', 'physical-birth', 'continuity'],
    difficulty: 'intermediate',
  },

  // -------------------------------------------------------------------------
  // VERSE 2.4 - Third Birth: After Death
  // -------------------------------------------------------------------------
  {
    upanishad: 'aitareya',
    section: 4,
    verse: 4,
    sanskrit: `सोऽस्यायमात्मा पुण्येभ्यः कर्मभ्यः प्रतिधीयते ।
अथास्यायमितर आत्मा कृतकृत्यो वयोगतः प्रैति ।
स इतः प्रयन्नेव पुनर्जायते ।
तदस्य तृतीयं जन्म ॥`,
    transliteration: `so 'syāyam ātmā puṇyebhyaḥ karmabhyaḥ pratidhīyate |
athāsyāyam itara ātmā kṛtakṛtyo vayogataḥ praiti |
sa itaḥ prayann eva punar jāyate |
tad asya tṛtīyaṁ janma ||`,
    translation:
      'This self of his is established for virtuous deeds. Then the other self, having done what was to be done and having reached old age, departs. Departing from here, he is born again. This is his third birth.',
    explanation: {
      simple:
        'The grown person (second birth) lives, does good deeds, ages, and eventually dies. Upon leaving this body, the Self is born again — the third birth. The cycle continues based on karma.',
      deeper:
        'The "virtuous deeds" (puṇya karma) establish a foundation for future births. The phrase "kṛtakṛtya" (having done what was to be done) suggests completing one\'s purpose. Death isn\'t the end but another birth — the third in this scheme.',
    },
    practicalApplication:
      'You have been born before and may be born again. What you do now creates conditions for future existence. Are you completing what needs to be done, or leaving things undone?',
    keyTerms: [
      { term: 'Puṇya karma', meaning: 'Virtuous deeds' },
      { term: 'Kṛtakṛtya', meaning: 'Having accomplished one\'s purpose' },
      { term: 'Praiti', meaning: 'Departs, goes forth' },
      { term: 'Punar jāyate', meaning: 'Is born again' },
      { term: 'Tṛtīya janma', meaning: 'Third birth' },
    ],
    themes: ['third-birth', 'rebirth', 'karma', 'death'],
    difficulty: 'intermediate',
  },

  // -------------------------------------------------------------------------
  // VERSE 2.5 - The Sage Vamadeva's Realization
  // -------------------------------------------------------------------------
  {
    upanishad: 'aitareya',
    section: 4,
    verse: 5,
    sanskrit: `तदुक्तमृषिणा ।
गर्भे नु सन्नन्वेषामवेदमहं देवानां जनिमानि विश्वा शतं मा पुर आयसीररक्षन्नधः श्येनो जवसा निरदीयमिति ।
गर्भ एवैतच्छयानो वामदेव एवमुवाच ॥`,
    transliteration: `tad uktam ṛṣiṇā |
garbhe nu sann anveṣām avedam ahaṁ devānāṁ janimāni viśvā śataṁ mā pura āyasīr arakṣann adhaḥ śyeno javasā niradīyam iti |
garbha evaitac chayāno vāmadeva evam uvāca ||`,
    translation:
      'This was spoken by the sage: "While still in the womb, I knew all the births of these gods. A hundred iron fortresses held me, but I flew forth swiftly like a hawk." Vamadeva spoke thus while still lying in the womb.',
    explanation: {
      simple:
        'The sage Vamadeva realized his true nature while still in the womb. He declared that he knew all the divine births and that despite a hundred obstacles (iron fortresses), he flew free like a hawk. Enlightenment transcends physical limitations.',
      deeper:
        'This is a remarkable claim: full Self-realization while still unborn. The "iron fortresses" represent the bondage of bodies through countless births. But the awakened one escapes like a swift hawk. Physical circumstances don\'t limit consciousness.',
    },
    practicalApplication:
      'You don\'t need perfect circumstances to awaken. Vamadeva realized truth in the womb. Your current situation — however confining it seems — cannot imprison the Self that you are.',
    keyTerms: [
      { term: 'Garbha', meaning: 'Womb' },
      { term: 'Devānām janimāni', meaning: 'Births of the gods' },
      { term: 'Āyasī pura', meaning: 'Iron fortress' },
      { term: 'Śyena', meaning: 'Hawk' },
      { term: 'Vāmadeva', meaning: 'A Rig Vedic sage' },
    ],
    themes: ['enlightenment', 'sage', 'transcendence', 'freedom'],
    difficulty: 'intermediate',
    famousVerse: true,
  },

  // -------------------------------------------------------------------------
  // VERSE 2.6 - Vamadeva Became All
  // -------------------------------------------------------------------------
  {
    upanishad: 'aitareya',
    section: 4,
    verse: 6,
    sanskrit: `स एवं विद्वानस्माच्छरीरभेदादूर्ध्व उत्क्रम्यामुष्मिन्स्वर्गे लोके सर्वान्कामानाप्त्वाऽमृतः समभवत्समभवत् ॥`,
    transliteration: `sa evaṁ vidvān asmāc charīra-bhedād ūrdhva utkramyāmuṣmin svarge loke sarvān kāmān āptvā 'mṛtaḥ samabhavat samabhavat ||`,
    translation:
      'Thus knowing, he ascended upward from this body at death, obtained all desires in that heavenly world, and became immortal — became immortal.',
    explanation: {
      simple:
        'Vamadeva, through his knowledge, transcended death. Leaving the body, he attained all desires in the heavenly realm and became immortal. The repetition "became immortal, became immortal" emphasizes the certainty.',
      deeper:
        'The immortality isn\'t a reward earned but a recognition of what always was. "All desires obtained" means the ending of desire through fulfillment in the Self, not through gaining objects. True immortality is recognizing the Self that never dies.',
    },
    practicalApplication:
      'What would it mean to "obtain all desires"? Not to gratify every craving but to rest so fully in your true nature that wanting ceases. That\'s the immortality available now, not just after death.',
    keyTerms: [
      { term: 'Vidvān', meaning: 'The knower, wise one' },
      { term: 'Śarīra-bheda', meaning: 'Separation from body, death' },
      { term: 'Svarga loka', meaning: 'Heavenly world' },
      { term: 'Amṛta', meaning: 'Immortal, deathless' },
      { term: 'Samabhavat', meaning: 'Became, attained' },
    ],
    themes: ['immortality', 'liberation', 'fulfillment', 'death-transcendence'],
    difficulty: 'intermediate',
  },

  // ===========================================================================
  // CHAPTER 3: CONSCIOUSNESS IS BRAHMAN (PRAJNANAM BRAHMA)
  // ===========================================================================

  // -------------------------------------------------------------------------
  // VERSE 3.1 - Who is This Self?
  // -------------------------------------------------------------------------
  {
    upanishad: 'aitareya',
    section: 5,
    verse: 1,
    sanskrit: `कोऽयमात्मेति वयमुपास्महे ।
कतरः स आत्मा ।
येन वा पश्यति येन वा शृणोति येन वा गन्धानाजिघ्रति येन वा वाचं व्याकरोति येन वा स्वादु चास्वादु च विजानाति ॥`,
    transliteration: `ko 'yam ātmeti vayam upāsmahe |
kataraḥ sa ātmā |
yena vā paśyati yena vā śṛṇoti yena vā gandhān ājighrati yena vā vācaṁ vyākaroti yena vā svādu cāsvādu ca vijānāti ||`,
    translation:
      '"Who is this Self that we worship?" "Which one is the Self — that by which one sees, by which one hears, by which one smells odors, by which one utters speech, by which one discriminates the sweet and the unsweet?"',
    explanation: {
      simple:
        'The final chapter opens with the crucial question: Who is this Self we\'ve been discussing? Is it the power of sight? Hearing? Smell? Speech? Taste? Which faculty is the real Self?',
      deeper:
        'This sets up the climactic revelation. Each faculty has been associated with a cosmic deity. But the Self is not any single faculty — it\'s that which makes all faculties possible. The question aims to discriminate between instruments and their user.',
    },
    practicalApplication:
      'Ask yourself: Are you the seeing, or that which is aware of seeing? Are you the thinking, or that which knows thinking occurs? Keep discriminating between the instruments and their witness.',
    keyTerms: [
      { term: 'Ko ayam ātmā', meaning: 'Who is this Self?' },
      { term: 'Upāsmahe', meaning: 'We worship, we meditate upon' },
      { term: 'Yena', meaning: 'By which' },
      { term: 'Vijānāti', meaning: 'Discriminates, knows distinctly' },
    ],
    themes: ['self-inquiry', 'discrimination', 'faculties-vs-self'],
    difficulty: 'intermediate',
    famousVerse: true,
  },

  // -------------------------------------------------------------------------
  // VERSE 3.2 - The Heart and Mind
  // -------------------------------------------------------------------------
  {
    upanishad: 'aitareya',
    section: 5,
    verse: 2,
    sanskrit: `यदेतद्धृदयं मनश्चैतत् ।
संज्ञानमाज्ञानं विज्ञानं प्रज्ञानं मेधा दृष्टिर्धृतिर्मतिर्मनीषा जूतिः स्मृतिः सङ्कल्पः क्रतुरसुः कामो वश इति ।
सर्वाण्येवैतानि प्रज्ञानस्य नामधेयानि भवन्ति ॥`,
    transliteration: `yad etad dhṛdayaṁ manaś caitat |
saṁjñānam ājñānaṁ vijñānaṁ prajñānaṁ medhā dṛṣṭir dhṛtir matir manīṣā jūtiḥ smṛtiḥ saṅkalpaḥ kratur asuḥ kāmo vaśa iti |
sarvāṇy evaitāni prajñānasya nāmadheyāni bhavanti ||`,
    translation:
      'It is this heart (mind) itself. It is awareness, command, discernment, consciousness, wisdom, insight, steadfastness, thought, reflection, impulse, memory, intention, purpose, life, desire, and control. All these are indeed names of consciousness (prajnana).',
    explanation: {
      simple:
        'The answer begins: it\'s the heart-mind (hridaya-manas). But then a remarkable list follows — awareness, discernment, wisdom, memory, intention, desire, control — all these different mental functions are really just names for one thing: Consciousness (prajnana).',
      deeper:
        'This verse consolidates all the scattered faculties into one principle: prajnana (consciousness). Whether functioning as memory or as intention, as wisdom or as desire, it\'s all consciousness appearing in different modes. Unity underlies apparent diversity.',
    },
    practicalApplication:
      'Your wisdom, your desires, your intentions, your memory — they\'re not separate things but consciousness in different modes. This recognition can reduce inner conflict: it\'s all one awareness, playing different roles.',
    keyTerms: [
      { term: 'Hṛdaya', meaning: 'Heart, core' },
      { term: 'Saṁjñāna', meaning: 'Awareness' },
      { term: 'Vijñāna', meaning: 'Discernment' },
      { term: 'Prajñāna', meaning: 'Consciousness, pure awareness' },
      { term: 'Medhā', meaning: 'Intelligence, wisdom' },
      { term: 'Smṛti', meaning: 'Memory' },
      { term: 'Saṅkalpa', meaning: 'Intention, will' },
    ],
    themes: ['consciousness', 'unity-of-mind', 'prajnana'],
    difficulty: 'intermediate',
    famousVerse: true,
  },

  // -------------------------------------------------------------------------
  // VERSE 3.3 - MAHAVAKYA: Consciousness is Brahman
  // -------------------------------------------------------------------------
  {
    upanishad: 'aitareya',
    section: 5,
    verse: 3,
    sanskrit: `एष ब्रह्मैष इन्द्र एष प्रजापतिरेते सर्वे देवा इमानि च पञ्च महाभूतानि पृथिवी वायुराकाश आपो ज्योतींषीत्येतानीमानि च क्षुद्रमिश्राणीव बीजानीतराणि चेतराणि चाण्डजानि च जारुजानि च स्वेदजानि चोद्भिज्जानि चाश्वा गावः पुरुषा हस्तिनो यत्किञ्चेदं प्राणि जङ्गमं च पतत्रि च यच्च स्थावरं सर्वं तत्प्रज्ञानेत्रं प्रज्ञाने प्रतिष्ठितं प्रज्ञानेत्रो लोकः प्रज्ञा प्रतिष्ठा प्रज्ञानं ब्रह्म ॥`,
    transliteration: `eṣa brahmaìṣa indra eṣa prajāpatir ete sarve devā imāni ca pañca mahā-bhūtāni pṛthivī vāyur ākāśa āpo jyotīṁṣīty etānīmāni ca kṣudra-miśrāṇīva bījānītarāṇi cetarāṇi cāṇḍajāni ca jārujāni ca svedajāni codbhijjāni cāśvā gāvaḥ puruṣā hastino yat kiñcedaṁ prāṇi jaṅgamaṁ ca patatri ca yac ca sthāvaraṁ sarvaṁ tat prajñānetraṁ prajñāne pratiṣṭhitaṁ prajñānetro lokaḥ prajñā pratiṣṭhā prajñānaṁ brahma ||`,
    translation:
      'This is Brahman, this is Indra, this is Prajapati, these are all the gods, these are the five great elements — earth, air, space, water, light — these and those that are mixed, as it were, of fine seeds, those born from eggs, from wombs, from sweat, from sprouts — horses, cattle, humans, elephants, whatever breathes, whatever moves, whatever flies, whatever is stationary — all this is guided by consciousness, is established in consciousness. The world is guided by consciousness. Consciousness is the foundation. Consciousness is Brahman.',
    explanation: {
      simple:
        'This is the great climax — the Mahavakya "Prajnanam Brahma" (Consciousness is Brahman). Everything that exists — gods, elements, all creatures born in any way, all that moves or is still — is guided by and established in consciousness. Consciousness is the ultimate reality.',
      deeper:
        'One of the four Mahavakyas of Vedanta. Unlike other declarations that might seem abstract, this one is immediate: consciousness — the very awareness reading these words — IS Brahman. Not will become, not is like, but IS. The entire universe rests in and is pervaded by this consciousness.',
    },
    practicalApplication:
      'The consciousness that knows your experience right now is Brahman itself. Not a path to Brahman, not a reflection of Brahman — Brahman. This recognition is available in this very moment. What knows this?',
    keyTerms: [
      { term: 'Prajñāna', meaning: 'Consciousness, pure awareness' },
      { term: 'Brahma', meaning: 'The Absolute, ultimate reality' },
      { term: 'Prajñānetra', meaning: 'Guided by consciousness' },
      { term: 'Pratiṣṭhā', meaning: 'Foundation, support' },
      { term: 'Mahābhūta', meaning: 'Great elements' },
    ],
    themes: ['mahavakya', 'consciousness-is-brahman', 'all-pervading', 'foundation'],
    difficulty: 'intermediate',
    famousVerse: true,
    mahavakya: {
      statement: 'प्रज्ञानं ब्रह्म',
      transliteration: 'Prajñānam Brahma',
      meaning: 'Consciousness is Brahman',
    },
  },

  // -------------------------------------------------------------------------
  // VERSE 3.4 - Liberation Through This Knowledge
  // -------------------------------------------------------------------------
  {
    upanishad: 'aitareya',
    section: 5,
    verse: 4,
    sanskrit: `स एतेन प्रज्ञेनात्मनाऽस्माल्लोकादुत्क्रम्यामुष्मिन्स्वर्गे लोके सर्वान्कामानाप्त्वाऽमृतः समभवत्समभवत् ॥`,
    transliteration: `sa etena prajñenātmanā 'smāl lokād utkramyāmuṣmin svarge loke sarvān kāmān āptvā 'mṛtaḥ samabhavat samabhavat ||`,
    translation:
      'By this conscious Self, ascending from this world, he obtained all desires in that heavenly world and became immortal — became immortal.',
    explanation: {
      simple:
        'Through recognizing the Self as pure consciousness (prajna), one transcends this world. In the "heavenly world" (of liberation), all desires are fulfilled because one recognizes oneself as the source of all fulfillment. Such a one becomes immortal.',
      deeper:
        'The closing verse echoes Vamadeva\'s attainment. The repetition "samabhavat samabhavat" (became, became) emphasizes certainty. Liberation isn\'t uncertain or gradual — it\'s complete. Recognition of consciousness as Brahman IS liberation.',
    },
    practicalApplication:
      'You don\'t need to die to experience this. The consciousness that IS Brahman is present now. "Ascending" can mean rising to recognition in this very life. All desires are fulfilled when you discover you are their source.',
    keyTerms: [
      { term: 'Prajña ātmā', meaning: 'Conscious Self' },
      { term: 'Utkramya', meaning: 'Ascending, departing' },
      { term: 'Kāma', meaning: 'Desires' },
      { term: 'Amṛta', meaning: 'Immortal' },
    ],
    themes: ['liberation', 'immortality', 'fulfillment', 'recognition'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
];

// =============================================================================
// SECTIONS
// =============================================================================

const sections: UpanishadSection[] = [
  {
    number: 1,
    name: {
      sanskrit: 'प्रथम अध्याय - प्रथम खण्ड',
      english: 'The Creation of the Universe',
    },
    summary:
      'Describes how the Self, alone in the beginning, created the worlds through intention and then formed the cosmic Person (Purusha) from the waters.',
    verses: verses.filter((v) => v.section === 1),
    isCurated: false,
  },
  {
    number: 2,
    name: {
      sanskrit: 'प्रथम अध्याय - द्वितीय खण्ड',
      english: 'The Deities Seek a Home',
    },
    summary:
      'The cosmic powers (deities of fire, wind, sun, etc.) experience hunger and seek an abode. After rejecting animal forms, they accept the human body as "well-made" and enter their respective organs.',
    verses: verses.filter((v) => v.section === 2),
    isCurated: false,
  },
  {
    number: 3,
    name: {
      sanskrit: 'प्रथम अध्याय - तृतीय खण्ड',
      english: 'The Self Enters the Body',
    },
    summary:
      'Food is created to sustain the deities, but cannot be grasped by any sense — only by digestion (apana). The Self ponders "Who am I?" and enters through the crown of the head.',
    verses: verses.filter((v) => v.section === 3),
    isCurated: false,
  },
  {
    number: 4,
    name: {
      sanskrit: 'द्वितीय अध्याय',
      english: 'The Three Births',
    },
    summary:
      'Describes the three births of the Self: first as seed in the father, second as physical birth from the mother, and third as rebirth after death. Includes sage Vamadeva\'s realization while still in the womb.',
    verses: verses.filter((v) => v.section === 4),
    isCurated: false,
  },
  {
    number: 5,
    name: {
      sanskrit: 'तृतीय अध्याय',
      english: 'Consciousness is Brahman',
    },
    summary:
      'The climactic chapter asks "Who is the Self?" and reveals that all mental functions are names for one thing: consciousness (prajnana). Concludes with the Mahavakya: "Prajnanam Brahma" — Consciousness is Brahman.',
    verses: verses.filter((v) => v.section === 5),
    isCurated: false,
  },
];

// =============================================================================
// MAIN EXPORT
// =============================================================================

export const aitareyaUpanishad: Upanishad = {
  id: 'aitareya',
  name: {
    sanskrit: 'ऐतरेयोपनिषद्',
    english: 'Aitareya Upanishad',
    meaning: 'The Upanishad of Aitareya (the sage)',
  },
  veda: 'rig',
  summary:
    'The Aitareya Upanishad describes the creation of the universe and the human body, how cosmic powers entered as our faculties, and the Self\'s entry through the crown of the head. It culminates in the profound Mahavakya "Prajnanam Brahma" — Consciousness is Brahman.',
  keyTeachings: [
    'The Self alone existed in the beginning and created through intention',
    'The human body is "well-made" — perfectly designed to house divine faculties',
    'Each sense organ corresponds to a cosmic deity and element',
    'The Self enters through the crown of the head (brahmarandhra)',
    'All mental functions — memory, will, desire, wisdom — are names for consciousness',
    'MAHAVAKYA: Prajnanam Brahma — Consciousness is Brahman',
  ],
  mahavakya: {
    statement: 'प्रज्ञानं ब्रह्म',
    transliteration: 'Prajñānam Brahma',
    meaning: 'Consciousness is Brahman',
  },
  totalVerses: 33,
  includedVerses: 33,
  sections,
  difficulty: 'intermediate',
  estimatedReadTime: '25 min',
};

export default aitareyaUpanishad;
