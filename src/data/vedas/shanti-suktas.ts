/**
 * Shanti Suktas - Peace Invocations
 * Various Upanishads and Vedic Sources
 *
 * Shanti Mantras (Peace Invocations) that traditionally open
 * and close Vedic study. These prayers invoke peace at all
 * levels of existence: individual, cosmic, and beyond.
 */

import { VedicHymn, VedicVerse } from './types';

const verses: VedicVerse[] = [
  {
    hymn: 'shanti-suktas',
    verse: 1,
    sanskrit: `ॐ सह नाववतु ।
सह नौ भुनक्तु ।
सह वीर्यं करवावहै ।
तेजस्वि नावधीतमस्तु मा विद्विषावहै ।
ॐ शान्तिः शान्तिः शान्तिः ॥`,
    transliteration: `oṃ saha nāvavatu |
saha nau bhunaktu |
saha vīryaṃ karavāvahai |
tejasvi nāvadhītam astu mā vidviṣāvahai |
oṃ śāntiḥ śāntiḥ śāntiḥ ||`,
    translation: `Om. May we both be protected.
May we both be nourished.
May we work together with great energy.
May our study be brilliant and effective. May we not hate each other.
Om, peace, peace, peace.`,
    explanation: {
      simple: `This prayer is recited together by teacher and student before study. It asks for mutual protection, nourishment, and energy. It prays that learning be powerful (tejasvī) and that no hatred arise between teacher and student. The three "śāntiḥ" invoke peace.`,
      deeper: `The dual forms ("nau" = both of us, "āvahai" = let us both) emphasize that learning is relationship. Knowledge flows when teacher and student are unified. "Mā vidviṣāvahai" (may we not hate) addresses the ego conflicts that can arise in teaching.`,
    },
    practicalApplication: `Before any learning or collaboration, invoke protection and harmony. Recognize that education is mutual — teachers learn from students too. Guard against ego and competition in knowledge exchange.`,
    keyTerms: [
      { term: 'nau', meaning: 'both of us' },
      { term: 'bhunaktu', meaning: 'may nourish, may enjoy' },
      { term: 'vīrya', meaning: 'vigor, energy, strength' },
      { term: 'tejasvī', meaning: 'brilliant, powerful' },
      { term: 'śānti', meaning: 'peace' },
    ],
    themes: ['teacher-student', 'mutual learning', 'protection', 'peace'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    hymn: 'shanti-suktas',
    verse: 2,
    sanskrit: `ॐ पूर्णमदः पूर्णमिदं पूर्णात्पूर्णमुदच्यते ।
पूर्णस्य पूर्णमादाय पूर्णमेवावशिष्यते ।
ॐ शान्तिः शान्तिः शान्तिः ॥`,
    transliteration: `oṃ pūrṇam adaḥ pūrṇam idaṃ pūrṇāt pūrṇam udacyate |
pūrṇasya pūrṇam ādāya pūrṇam evāvaśiṣyate |
oṃ śāntiḥ śāntiḥ śāntiḥ ||`,
    translation: `Om. That is complete, this is complete. From completeness comes completeness.
When completeness is taken from completeness, completeness alone remains.
Om, peace, peace, peace.`,
    explanation: {
      simple: `One of the most profound mathematical-mystical statements in world literature. "That" (Brahman, the Absolute) is complete. "This" (the world) is complete. The complete emerged from the complete. And even when the complete is taken from the complete, only completeness remains.`,
      deeper: `This defies ordinary arithmetic but describes the nature of infinity and Brahman. Like infinity minus infinity still equals infinity, the fullness of Brahman is never diminished by creation or by individual souls. This is the Isha Upanishad's opening, establishing non-dual completeness.`,
    },
    practicalApplication: `You are already complete. Nothing needs to be added to you. Draw from the infinite source and it remains infinite. Live from fullness, not lack. Give freely — true giving doesn't diminish the giver.`,
    keyTerms: [
      { term: 'pūrṇa', meaning: 'full, complete, whole' },
      { term: 'adaḥ', meaning: 'that (distant, transcendent)' },
      { term: 'idam', meaning: 'this (near, manifest)' },
      { term: 'udacyate', meaning: 'arises, comes forth' },
      { term: 'avaśiṣyate', meaning: 'remains' },
    ],
    themes: ['completeness', 'infinity', 'non-duality', 'wholeness'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    hymn: 'shanti-suktas',
    verse: 3,
    sanskrit: `ॐ असतो मा सद्गमय ।
तमसो मा ज्योतिर्गमय ।
मृत्योर्मा अमृतं गमय ।
ॐ शान्तिः शान्तिः शान्तिः ॥`,
    transliteration: `oṃ asato mā sadgamaya |
tamaso mā jyotirgamaya |
mṛtyormā amṛtaṃ gamaya |
oṃ śāntiḥ śāntiḥ śāntiḥ ||`,
    translation: `Om. Lead me from the unreal to the real.
Lead me from darkness to light.
Lead me from death to immortality.
Om, peace, peace, peace.`,
    explanation: {
      simple: `Three simple but profound prayers: from unreality to reality (sat), from darkness/ignorance to light/knowledge (jyoti), from death to deathlessness (amṛta). This is the complete spiritual journey in three lines.`,
      deeper: `These are not three separate prayers but one truth expressed three ways. Unreality, darkness, and death are the same condition (ignorance/avidya). Reality, light, and immortality are one truth (Brahman/ātman). The journey is from illusion to awakening.`,
    },
    practicalApplication: `Ask for guidance daily. Move toward truth, not comfortable illusions. Seek light/understanding, not blind belief. Remember that your deepest nature is deathless awareness, not the mortal body-mind.`,
    keyTerms: [
      { term: 'asat', meaning: 'unreal, non-being' },
      { term: 'sat', meaning: 'real, being, truth' },
      { term: 'tamas', meaning: 'darkness, ignorance' },
      { term: 'jyoti', meaning: 'light' },
      { term: 'amṛta', meaning: 'immortality, nectar of deathlessness' },
    ],
    themes: ['reality', 'light', 'immortality', 'transformation'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    hymn: 'shanti-suktas',
    verse: 4,
    sanskrit: `ॐ भद्रं कर्णेभिः शृणुयाम देवाः ।
भद्रं पश्येमाक्षभिर्यजत्राः ।
स्थिरैरङ्गैस्तुष्टुवाँसस्तनूभिः ।
व्यशेम देवहितं यदायुः ।
ॐ शान्तिः शान्तिः शान्तिः ॥`,
    transliteration: `oṃ bhadraṃ karṇebhiḥ śṛṇuyāma devāḥ |
bhadraṃ paśyemākṣabhir yajatrāḥ |
sthirair aṅgais tuṣṭuvāṃsas tanūbhiḥ |
vyaśema devahitaṃ yad āyuḥ |
oṃ śāntiḥ śāntiḥ śāntiḥ ||`,
    translation: `Om. May we hear with our ears what is auspicious, O Gods.
May we see with our eyes what is auspicious, O worshipful ones.
With steady limbs, with bodies strong in praise,
may we enjoy the life allotted by the Gods.
Om, peace, peace, peace.`,
    explanation: {
      simple: `A prayer for the senses to perceive only the good (bhadra). May we hear auspicious things, see auspicious things, and with healthy bodies enjoy the full span of life that the divine has granted us.`,
      deeper: `This prayer sanctifies the senses. Rather than treating body and senses as obstacles, it asks that they serve higher purpose — perceiving bhadra (auspicious, beneficial). "Devahita āyuḥ" (god-given lifespan) suggests accepting our mortal span with grace.`,
    },
    practicalApplication: `Consciously direct your senses toward the good. What you choose to hear and see shapes your mind. Maintain physical health as support for spiritual life. Accept your lifespan as sacred gift.`,
    keyTerms: [
      { term: 'bhadra', meaning: 'auspicious, good, blessed' },
      { term: 'karṇa', meaning: 'ear' },
      { term: 'akṣa', meaning: 'eye' },
      { term: 'āyuḥ', meaning: 'life, lifespan' },
    ],
    themes: ['senses', 'perception', 'health', 'auspiciousness'],
    difficulty: 'beginner',
  },
  {
    hymn: 'shanti-suktas',
    verse: 5,
    sanskrit: `ॐ आप्यायन्तु ममाङ्गानि वाक्प्राणश्चक्षुः श्रोत्रमथो बलमिन्द्रियाणि च सर्वाणि ।
सर्वं ब्रह्मौपनिषदं माहं ब्रह्म निराकुर्यां मा मा ब्रह्म निराकरोत् ।
अनिराकरणमस्त्वनिराकरणं मेऽस्तु ।
तदात्मनि निरते य उपनिषत्सु धर्मास्ते मयि सन्तु ते मयि सन्तु ।
ॐ शान्तिः शान्तिः शान्तिः ॥`,
    transliteration: `oṃ āpyāyantu mamāṅgāni vākprāṇaścakṣuḥ śrotram atho balam indriyāṇi ca sarvāṇi |
sarvaṃ brahmaupaniṣadaṃ māhaṃ brahma nirākuryāṃ mā mā brahma nirākarot |
anirākaraṇam astv anirākaraṇaṃ me 'stu |
tadātmani nirate ya upaniṣatsu dharmāste mayi santu te mayi santu |
oṃ śāntiḥ śāntiḥ śāntiḥ ||`,
    translation: `Om. May my limbs, speech, breath, eyes, ears, and all my senses grow strong.
All that exists is the Brahman of the Upanishads. May I never deny Brahman, may Brahman never deny me.
Let there be no denial, let there be no denial from me.
May all the virtues taught in the Upanishads dwell in me who delights in the Self. May they dwell in me.
Om, peace, peace, peace.`,
    explanation: {
      simple: `A comprehensive prayer: may the body and senses be strengthened. May I never reject Brahman (ultimate reality), and may Brahman never reject me. May the teachings of the Upanishads take root in me.`,
      deeper: `"Nirākaraṇa" (denial/rejection) works both ways — we can deny Brahman through ignorance, and we can feel rejected by truth. The prayer dissolves both. "Ātmani nirata" (delighting in the Self) is the state where Upanishadic teachings naturally abide.`,
    },
    practicalApplication: `Strengthen body as vessel for wisdom. Never reject truth, even uncomfortable truth. Study sacred texts not just intellectually but to embody their virtues. Delight in your deepest Self.`,
    keyTerms: [
      { term: 'āpyāyantu', meaning: 'may grow, flourish' },
      { term: 'brahma', meaning: 'ultimate reality, Brahman' },
      { term: 'nirākaraṇa', meaning: 'denial, rejection' },
      { term: 'dharma', meaning: 'teachings, virtues, laws' },
    ],
    themes: ['embodiment', 'non-rejection', 'Upanishads', 'integration'],
    difficulty: 'intermediate',
  },
  {
    hymn: 'shanti-suktas',
    verse: 6,
    sanskrit: `ॐ सर्वेषां स्वस्तिर्भवतु ।
सर्वेषां शान्तिर्भवतु ।
सर्वेषां पूर्णं भवतु ।
सर्वेषां मङ्गलं भवतु ।
ॐ शान्तिः शान्तिः शान्तिः ॥`,
    transliteration: `oṃ sarveṣāṃ svastir bhavatu |
sarveṣāṃ śāntir bhavatu |
sarveṣāṃ pūrṇaṃ bhavatu |
sarveṣāṃ maṅgalaṃ bhavatu |
oṃ śāntiḥ śāntiḥ śāntiḥ ||`,
    translation: `Om. May all beings be well.
May all beings have peace.
May all beings be complete.
May all beings be blessed.
Om, peace, peace, peace.`,
    explanation: {
      simple: `A universal blessing for all beings: svasti (well-being), śānti (peace), pūrṇa (completeness/fullness), and maṅgala (auspiciousness/blessing). The prayer extends outward to embrace all existence.`,
      deeper: `"Sarveṣāṃ" (of all) is emphasized four times — this is not private spirituality but universal compassion. Each blessing builds: well-being → peace → completeness → blessing. The progression shows spiritual development.`,
    },
    practicalApplication: `Extend your prayers beyond yourself. Wish well-being for all, including those you find difficult. Recognize that your peace is connected to universal peace. Practice universal blessing daily.`,
    keyTerms: [
      { term: 'sarveṣām', meaning: 'of all, for all beings' },
      { term: 'svasti', meaning: 'well-being, auspiciousness' },
      { term: 'pūrṇa', meaning: 'completeness, fullness' },
      { term: 'maṅgala', meaning: 'blessing, auspiciousness' },
    ],
    themes: ['universal blessing', 'all beings', 'compassion', 'well-being'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    hymn: 'shanti-suktas',
    verse: 7,
    sanskrit: `लोकाः समस्ताः सुखिनो भवन्तु ।
ॐ शान्तिः शान्तिः शान्तिः ॥`,
    transliteration: `lokāḥ samastāḥ sukhino bhavantu |
oṃ śāntiḥ śāntiḥ śāntiḥ ||`,
    translation: `May all the worlds be happy.
Om, peace, peace, peace.`,
    explanation: {
      simple: `Perhaps the most concise universal blessing in Sanskrit. "Lokāḥ samastāḥ" (all worlds/realms) includes not just earth but all planes of existence. "Sukhino bhavantu" — may they be happy.`,
      deeper: `"Loka" means world/realm — in Hindu cosmology there are multiple lokas. This prayer embraces all of them. "Sukha" (happiness) is the simple, direct wish. The brevity makes this easy to memorize and recite frequently.`,
    },
    practicalApplication: `Make this your constant prayer. It takes three seconds to recite. Wish happiness for all worlds, all beings, all dimensions of existence. Simple practices, repeated often, transform consciousness.`,
    keyTerms: [
      { term: 'loka', meaning: 'world, realm' },
      { term: 'samasta', meaning: 'all, entire' },
      { term: 'sukhī', meaning: 'happy, blissful' },
    ],
    themes: ['universal happiness', 'all worlds', 'simplicity', 'blessing'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    hymn: 'shanti-suktas',
    verse: 8,
    sanskrit: `ॐ द्यौः शान्तिरन्तरिक्षं शान्तिः पृथिवी शान्तिरापः शान्तिरोषधयः शान्तिः ।
वनस्पतयः शान्तिर्विश्वेदेवाः शान्तिर्ब्रह्म शान्तिः सर्वं शान्तिः शान्तिरेव शान्तिः ।
सा मा शान्तिरेधि ।
ॐ शान्तिः शान्तिः शान्तिः ॥`,
    transliteration: `oṃ dyauḥ śāntir antarikṣaṃ śāntiḥ pṛthivī śāntir āpaḥ śāntir oṣadhayaḥ śāntiḥ |
vanaspatayaḥ śāntir viśve devāḥ śāntir brahma śāntiḥ sarvaṃ śāntiḥ śāntir eva śāntiḥ |
sā mā śāntir edhi |
oṃ śāntiḥ śāntiḥ śāntiḥ ||`,
    translation: `Om. May there be peace in heaven, peace in the atmosphere, peace on earth, peace in water, peace in plants,
peace in trees, peace in the gods, peace in Brahman, peace in all things. May that peace come to me.
Om, peace, peace, peace.`,
    explanation: {
      simple: `This magnificent prayer systematically invokes peace in every layer of creation: sky, atmosphere, earth, water, herbs, trees, all gods, Brahman itself, and everything. Then it asks that this universal peace enter the worshipper.`,
      deeper: `The progression moves from outermost (sky) to innermost (Brahman), touching every realm: celestial, atmospheric, terrestrial, aquatic, botanical, divine, absolute. "Śāntir eva śāntiḥ" (peace itself is peace) — the ultimate reality IS peace. Personal peace comes from universal peace.`,
    },
    practicalApplication: `Recognize peace in nature — sky, water, plants. When seeking personal peace, connect to the peace already present in creation. You are not separate from this universal peace.`,
    keyTerms: [
      { term: 'dyauḥ', meaning: 'heaven, sky' },
      { term: 'antarikṣa', meaning: 'atmosphere, space between' },
      { term: 'pṛthivī', meaning: 'earth' },
      { term: 'oṣadhi', meaning: 'herb, medicinal plant' },
      { term: 'vanaspati', meaning: 'tree, lord of forest' },
    ],
    themes: ['cosmic peace', 'nature', 'layers of creation', 'universal'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    hymn: 'shanti-suktas',
    verse: 9,
    sanskrit: `ॐ भूर्भुवः स्वः । तत्सवितुर्वरेण्यं ।
भर्गो देवस्य धीमहि । धियो यो नः प्रचोदयात् ।
ॐ शान्तिः शान्तिः शान्तिः ॥`,
    transliteration: `oṃ bhūr bhuvaḥ svaḥ | tat savitur vareṇyaṃ |
bhargo devasya dhīmahi | dhiyo yo naḥ pracodayāt |
oṃ śāntiḥ śāntiḥ śāntiḥ ||`,
    translation: `Om. Earth, atmosphere, heaven. We meditate on the excellent glory
of the divine Savitri (Sun). May he illuminate our minds.
Om, peace, peace, peace.`,
    explanation: {
      simple: `This is the Gayatri Mantra with the vyāhṛtis (bhūr bhuvaḥ svaḥ = earth, atmosphere, heaven) and peace invocation. The most sacred Vedic mantra, it is a prayer to the sun god (Savitri) to illuminate the intellect (dhī).`,
      deeper: `The Gayatri is both a peace invocation and the central mantra of Vedic practice. "Bhargo" (radiance/glory) of the "deva" (divine/shining one) is meditated upon (dhīmahi). The prayer is for "dhī" (intellect/insight) to be "pracodayāt" (stimulated/illuminated).`,
    },
    practicalApplication: `Recite the Gayatri at dawn and dusk, facing the sun. Ask for mental illumination, not just peace. The highest peace comes through wisdom. Let your intellect be lit by divine light.`,
    keyTerms: [
      { term: 'bhūr', meaning: 'earth' },
      { term: 'bhuvaḥ', meaning: 'atmosphere' },
      { term: 'svaḥ', meaning: 'heaven' },
      { term: 'Savitṛ', meaning: 'sun, the stimulator' },
      { term: 'bharga', meaning: 'radiance, glory' },
      { term: 'dhī', meaning: 'intellect, insight' },
    ],
    themes: ['Gayatri', 'sun', 'illumination', 'intellect', 'meditation'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    hymn: 'shanti-suktas',
    verse: 10,
    sanskrit: `स्वस्ति न इन्द्रो वृद्धश्रवाः स्वस्ति नः पूषा विश्ववेदाः ।
स्वस्ति नस्तार्क्ष्यो अरिष्टनेमिः स्वस्ति नो बृहस्पतिर्दधातु ।
ॐ शान्तिः शान्तिः शान्तिः ॥`,
    transliteration: `svasti na indro vṛddhaśravāḥ svasti naḥ pūṣā viśvavedāḥ |
svasti nas tārkṣyo ariṣṭanemiḥ svasti no bṛhaspatir dadhātu |
oṃ śāntiḥ śāntiḥ śāntiḥ ||`,
    translation: `May Indra of great fame grant us well-being. May Pusha, knower of all, grant us well-being.
May Garuda of the invincible wheel grant us well-being. May Brihaspati grant us well-being.
Om, peace, peace, peace.`,
    explanation: {
      simple: `A prayer invoking four Vedic deities for well-being (svasti): Indra (king of gods, associated with power and fame), Pusha (sun god of nourishment, knower of all paths), Tarkshya/Garuda (the divine eagle, protector), and Brihaspati (teacher of gods, lord of wisdom).`,
      deeper: `Each deity represents a dimension of well-being: Indra = power/victory, Pusha = nourishment/guidance, Garuda = protection from obstacles, Brihaspati = wisdom/speech. Together they offer comprehensive blessing.`,
    },
    practicalApplication: `Seek well-being from multiple sources and forms. Recognize the different kinds of support you need: power, guidance, protection, wisdom. Invoke help from the divine in all its forms.`,
    keyTerms: [
      { term: 'svasti', meaning: 'well-being, auspiciousness' },
      { term: 'Indra', meaning: 'king of gods' },
      { term: 'Pūṣan', meaning: 'sun god, nourisher' },
      { term: 'Tārkṣya', meaning: 'Garuda, divine eagle' },
      { term: 'Bṛhaspati', meaning: 'lord of sacred speech' },
    ],
    themes: ['divine protection', 'Vedic gods', 'well-being', 'blessing'],
    difficulty: 'intermediate',
  },
];

export const shantiSuktas: VedicHymn = {
  id: 'shanti-suktas',

  name: {
    sanskrit: 'शान्ति सूक्त',
    english: 'Shanti Suktas',
    meaning: 'Peace Invocations',
  },

  veda: 'yajur',
  reference: 'Various Upanishads & Vedas',

  summary: `The Shanti Suktas are peace invocations that traditionally open and close Vedic study. They invoke peace (śānti) at all levels of existence — personal, communal, cosmic, and beyond. These prayers have been recited for millennia to create a sacred atmosphere for learning and to extend blessings to all beings.`,

  significance: `Shanti Mantras are fundamental to Hindu spiritual practice. The threefold repetition of "śāntiḥ" invokes peace against three types of suffering: ādhidaivika (cosmic/divine), ādhibhautika (environmental), and ādhyātmika (personal). These mantras transform the space of study into sacred ground and remind practitioners that individual peace depends on universal peace.`,

  totalVerses: 10,
  verses,

  themes: [
    'peace',
    'universal blessing',
    'teacher-student',
    'cosmic harmony',
    'well-being',
    'transformation',
  ],

  difficulty: 'beginner',
  estimatedReadTime: '20 min',

  usedIn: [
    'Opening Vedic study',
    'Closing Vedic study',
    'Meditation sessions',
    'Yoga classes',
    'Prayers and pujas',
    'Peace ceremonies',
    'Daily practice',
  ],
};

export default shantiSuktas;
