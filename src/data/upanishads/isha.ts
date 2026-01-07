/**
 * Isha Upanishad (ईशोपनिषद्)
 * "The Lord Dwells in All"
 *
 * Source: Shukla Yajur Veda
 * Verses: 18
 * Difficulty: Beginner
 *
 * The Isha Upanishad is one of the shortest yet most profound Upanishads.
 * It teaches that the Divine pervades everything, and shows how to live
 * in the world while remaining spiritually free.
 */

import { Upanishad, UpanishadVerse, UpanishadSection } from './types';

// =============================================================================
// VERSES
// =============================================================================

const verses: UpanishadVerse[] = [
  // -------------------------------------------------------------------------
  // VERSE 1 - The Foundation: God Pervades All
  // -------------------------------------------------------------------------
  {
    upanishad: 'isha',
    section: 1,
    verse: 1,
    sanskrit: `ईशावास्यमिदं सर्वं यत्किञ्च जगत्यां जगत् ।
तेन त्यक्तेन भुञ्जीथा मा गृधः कस्यस्विद्धनम् ॥`,
    transliteration: `īśāvāsyam idaṁ sarvaṁ yat kiñca jagatyāṁ jagat |
tena tyaktena bhuñjīthā mā gṛdhaḥ kasya svid dhanam ||`,
    translation:
      'All this — whatever exists in this changing universe — should be covered by the Lord. Protect yourself through detachment. Do not covet, for whose is wealth?',
    explanation: {
      simple:
        'Everything in the world is pervaded by the Divine. When you see God in all things, you naturally become detached from selfish desires. Enjoy life, but don\'t grasp at possessions — they ultimately belong to no one.',
      deeper:
        'This opening verse contains the entire teaching of the Upanishad. "Covered by the Lord" means seeing the Divine presence in every object and being. This vision transforms how we interact with the world — we enjoy without attachment, knowing that all belongs to the cosmic whole.',
    },
    practicalApplication:
      'Before grabbing something for yourself today — food, attention, credit — pause and remember that everything is permeated by the same Divine presence. This awareness naturally loosens the grip of greed and allows you to enjoy life more freely.',
    keyTerms: [
      { term: 'Īśā', meaning: 'The Lord, the Divine Controller' },
      { term: 'Vāsyam', meaning: 'To be covered, pervaded, enveloped' },
      { term: 'Tyaktena', meaning: 'Through renunciation, detachment' },
      { term: 'Bhuñjīthā', meaning: 'Enjoy, experience' },
    ],
    themes: ['divine-presence', 'detachment', 'enjoyment', 'non-grasping'],
    difficulty: 'beginner',
    famousVerse: true,
  },

  // -------------------------------------------------------------------------
  // VERSE 2 - Action Without Bondage
  // -------------------------------------------------------------------------
  {
    upanishad: 'isha',
    section: 1,
    verse: 2,
    sanskrit: `कुर्वन्नेवेह कर्माणि जिजीविषेच्छतं समाः ।
एवं त्वयि नान्यथेतोऽस्ति न कर्म लिप्यते नरे ॥`,
    transliteration: `kurvan eveha karmāṇi jijīviṣec chataṁ samāḥ |
evaṁ tvayi nānyatheto 'sti na karma lipyate nare ||`,
    translation:
      'By performing actions here, one may wish to live a hundred years. For you, there is no other way than this — action does not bind a person who lives thus.',
    explanation: {
      simple:
        'You can live a full, active life — even a hundred years — without being trapped by your actions. The key is how you act, not whether you act. When you work without selfish attachment, karma doesn\'t stick to you.',
      deeper:
        'This verse reconciles the apparent conflict between action and renunciation. True renunciation isn\'t giving up action but giving up the ego\'s claim on the fruits of action. This is the same teaching Krishna gives Arjuna in the Bhagavad Gita.',
    },
    practicalApplication:
      'You don\'t need to quit your job or abandon your responsibilities to be spiritual. Do your work fully, but release your death-grip on outcomes. When you act without obsessing over results, you stay mentally free even in the busiest life.',
    keyTerms: [
      { term: 'Karmāṇi', meaning: 'Actions, deeds' },
      { term: 'Jijīviṣet', meaning: 'One may wish to live' },
      { term: 'Śatam samāḥ', meaning: 'A hundred years' },
      { term: 'Na lipyate', meaning: 'Does not cling, does not bind' },
    ],
    themes: ['karma-yoga', 'action', 'detachment', 'longevity'],
    difficulty: 'beginner',
    famousVerse: true,
  },

  // -------------------------------------------------------------------------
  // VERSE 3 - The Fate of the Ignorant
  // -------------------------------------------------------------------------
  {
    upanishad: 'isha',
    section: 1,
    verse: 3,
    sanskrit: `असुर्या नाम ते लोका अन्धेन तमसावृताः ।
तांस्ते प्रेत्याभिगच्छन्ति ये के चात्महनो जनाः ॥`,
    transliteration: `asuryā nāma te lokā andhena tamasāvṛtāḥ |
tāṁs te pretyābhigacchanti ye ke cātmahano janāḥ ||`,
    translation:
      'Sunless are those worlds, covered in blinding darkness. To them go after death those who are slayers of the Self.',
    explanation: {
      simple:
        'Those who ignore their true spiritual nature — who "kill" their awareness of the Self by identifying only with the body and ego — enter a state of spiritual darkness. This isn\'t about hell; it\'s about the natural consequence of ignorance.',
      deeper:
        'Ātma-han (slayer of the Self) doesn\'t mean literal killing but ignoring, neglecting, or denying the inner Self. When we live as if we are only the body and mind, we condemn ourselves to confusion and suffering — the "sunless worlds" of ignorance.',
    },
    practicalApplication:
      'Every time you get completely lost in material concerns and forget your deeper nature, you enter a "sunless world" — a state of anxious forgetting. Make time daily to reconnect with your inner Self through meditation, reflection, or prayer.',
    keyTerms: [
      { term: 'Asuryā', meaning: 'Sunless, without light' },
      { term: 'Tamas', meaning: 'Darkness, ignorance' },
      { term: 'Ātmahanaḥ', meaning: 'Slayers of the Self, those who ignore their true nature' },
      { term: 'Pretya', meaning: 'After death, departing' },
    ],
    themes: ['ignorance', 'self-knowledge', 'consequences', 'darkness'],
    difficulty: 'intermediate',
  },

  // -------------------------------------------------------------------------
  // VERSE 4 - The Nature of the Self
  // -------------------------------------------------------------------------
  {
    upanishad: 'isha',
    section: 1,
    verse: 4,
    sanskrit: `अनेजदेकं मनसो जवीयो नैनद्देवा आप्नुवन्पूर्वमर्षत् ।
तद्धावतोऽन्यानत्येति तिष्ठत्तस्मिन्नपो मातरिश्वा दधाति ॥`,
    transliteration: `anejad ekaṁ manaso javīyo nainad devā āpnuvan pūrvam arṣat |
tad dhāvato 'nyān atyeti tiṣṭhat tasminn apo mātariśvā dadhāti ||`,
    translation:
      'Unmoving, It is One, swifter than the mind. The senses cannot reach It — It ran ahead of them. Standing still, It outpaces those who run. In It, the cosmic air supports all activity.',
    explanation: {
      simple:
        'The Self is a paradox: it doesn\'t move, yet it\'s faster than thought. It stays still, yet it\'s already everywhere you could go. This is because the Self isn\'t traveling through space — it IS the space in which all movement happens.',
      deeper:
        'This verse describes Brahman through apparent contradictions. How can something be both still and faster than the mind? Because the Self is not within time and space — it is the foundation upon which time and space exist. Everything moves within it, but it itself never moves.',
    },
    practicalApplication:
      'When your mind races with anxiety about the future, remember: your true Self is already there. It\'s already everywhere. You can\'t outrun yourself. This understanding brings profound peace — there\'s nowhere you need to rush to.',
    keyTerms: [
      { term: 'Anejat', meaning: 'Unmoving, still' },
      { term: 'Ekam', meaning: 'One, singular' },
      { term: 'Manaso javīyaḥ', meaning: 'Swifter than the mind' },
      { term: 'Mātariśvā', meaning: 'The cosmic wind/air, vital force' },
    ],
    themes: ['self-nature', 'paradox', 'stillness', 'omnipresence'],
    difficulty: 'intermediate',
    famousVerse: true,
  },

  // -------------------------------------------------------------------------
  // VERSE 5 - It Moves and Moves Not
  // -------------------------------------------------------------------------
  {
    upanishad: 'isha',
    section: 1,
    verse: 5,
    sanskrit: `तदेजति तन्नैजति तद्दूरे तद्वन्तिके ।
तदन्तरस्य सर्वस्य तदु सर्वस्यास्य बाह्यतः ॥`,
    transliteration: `tad ejati tan naijati tad dūre tad v antike |
tad antar asya sarvasya tad u sarvasyāsya bāhyataḥ ||`,
    translation:
      'It moves, and It moves not. It is far, and It is near. It is within all this, and It is outside all this.',
    explanation: {
      simple:
        'The Divine is full of beautiful contradictions. It seems to move with everything, yet remains perfectly still. It seems infinitely far away, yet is closer than your own breath. It\'s inside everything and outside everything at the same time.',
      deeper:
        'These paradoxes point to the nature of consciousness itself. Your awareness seems to travel with your attention, yet it never actually moves. The Self appears distant when we seek it outside, yet it\'s the very seeker. Understanding these paradoxes dissolves the illusion of separation.',
    },
    practicalApplication:
      'When God or truth seems distant, remember: what you seek is the very awareness that is doing the seeking. It\'s not somewhere else. Turn your attention inward and recognize what\'s already present — closer than close.',
    keyTerms: [
      { term: 'Ejati', meaning: 'Moves, stirs' },
      { term: 'Na ejati', meaning: 'Does not move' },
      { term: 'Dūre', meaning: 'Far away' },
      { term: 'Antike', meaning: 'Near, close by' },
    ],
    themes: ['paradox', 'omnipresence', 'immanence', 'transcendence'],
    difficulty: 'intermediate',
  },

  // -------------------------------------------------------------------------
  // VERSE 6 - Seeing the Self in All
  // -------------------------------------------------------------------------
  {
    upanishad: 'isha',
    section: 1,
    verse: 6,
    sanskrit: `यस्तु सर्वाणि भूतान्यात्मन्येवानुपश्यति ।
सर्वभूतेषु चात्मानं ततो न विजुगुप्सते ॥`,
    transliteration: `yas tu sarvāṇi bhūtāny ātmany evānupaśyati |
sarva-bhūteṣu cātmānaṁ tato na vijugupsate ||`,
    translation:
      'One who sees all beings in the Self alone, and the Self in all beings, does not feel hatred or revulsion toward anyone.',
    explanation: {
      simple:
        'When you truly see that the same consciousness that looks out through your eyes also looks out through every other being\'s eyes, how can you hate anyone? Hatred becomes impossible because you recognize yourself everywhere.',
      deeper:
        'This is the ethical consequence of non-dual realization. Vijugupsate means to feel disgust or to wish to hide from. When we see our own Self in others, we can no longer feel alienated from any being. Universal compassion arises naturally, not as a moral duty but as direct perception.',
    },
    practicalApplication:
      'When you encounter someone who triggers disgust, irritation, or hatred, pause. Look past their behavior to the consciousness within them — the same awareness that exists in you. This shift in perception doesn\'t excuse harmful behavior, but it dissolves the poison of hatred in your own heart.',
    keyTerms: [
      { term: 'Bhūtāni', meaning: 'Beings, creatures' },
      { term: 'Ātmani', meaning: 'In the Self' },
      { term: 'Anupaśyati', meaning: 'Sees, perceives directly' },
      { term: 'Na vijugupsate', meaning: 'Does not feel revulsion, does not shrink from' },
    ],
    themes: ['unity', 'compassion', 'self-in-all', 'non-hatred'],
    difficulty: 'beginner',
    famousVerse: true,
  },

  // -------------------------------------------------------------------------
  // VERSE 7 - Beyond Delusion and Grief
  // -------------------------------------------------------------------------
  {
    upanishad: 'isha',
    section: 1,
    verse: 7,
    sanskrit: `यस्मिन्सर्वाणि भूतान्यात्मैवाभूद्विजानतः ।
तत्र को मोहः कः शोक एकत्वमनुपश्यतः ॥`,
    transliteration: `yasmin sarvāṇi bhūtāny ātmaivābhūd vijānataḥ |
tatra ko mohaḥ kaḥ śoka ekatvam anupaśyataḥ ||`,
    translation:
      'When all beings have become one\'s own Self, for the one who knows this, where is delusion? Where is grief? One who sees oneness everywhere is free.',
    explanation: {
      simple:
        'When you realize that all beings are essentially your own Self, what\'s left to be confused about? What\'s left to grieve? The root of suffering is the sense of separation. Seeing oneness removes that root.',
      deeper:
        'Moha (delusion) arises from not knowing who we are. Śoka (grief) arises from believing we can lose what we love. Both depend on seeing ourselves as separate individuals in a world of separate things. The vision of oneness dissolves the foundation of all suffering.',
    },
    practicalApplication:
      'When you grieve a loss, part of the pain comes from feeling separate from what you lost. In moments of grief, try to feel the continued presence of what you love in a deeper dimension. Nothing is truly lost in the One.',
    keyTerms: [
      { term: 'Moha', meaning: 'Delusion, confusion, attachment' },
      { term: 'Śoka', meaning: 'Grief, sorrow' },
      { term: 'Ekatva', meaning: 'Oneness, unity' },
      { term: 'Vijānataḥ', meaning: 'Of one who knows, for the wise one' },
    ],
    themes: ['oneness', 'freedom-from-grief', 'delusion', 'liberation'],
    difficulty: 'intermediate',
    famousVerse: true,
  },

  // -------------------------------------------------------------------------
  // VERSE 8 - The Nature of Brahman
  // -------------------------------------------------------------------------
  {
    upanishad: 'isha',
    section: 1,
    verse: 8,
    sanskrit: `स पर्यगाच्छुक्रमकायमव्रणमस्नाविरं शुद्धमपापविद्धम् ।
कविर्मनीषी परिभूः स्वयम्भूर्याथातथ्यतोऽर्थान्व्यदधाच्छाश्वतीभ्यः समाभ्यः ॥`,
    transliteration: `sa paryagāc chukram akāyam avraṇam asnāviraṁ śuddham apāpa-viddham |
kavir manīṣī paribhūḥ svayambhūr yāthātathyato 'rthān vyadadhāc chāśvatībhyaḥ samābhyaḥ ||`,
    translation:
      'He pervades all — radiant, bodiless, without wound, without sinews, pure, untouched by evil. He is the Seer, the Thinker, all-pervading, self-existent. He has duly assigned purposes to all things for endless years.',
    explanation: {
      simple:
        'This verse describes the ultimate Reality (Brahman): pure consciousness without a physical body, untouched by any imperfection, self-existent, and the intelligence that orders the cosmos. This isn\'t a distant God but the very ground of your being.',
      deeper:
        'Each adjective reveals something important: Śukram (radiant) — Brahman is self-luminous awareness. Akāyam (bodiless) — beyond physical form. Svayambhū (self-existent) — depending on nothing else for existence. Kavi (Seer/Poet) — the creative intelligence behind all manifest form.',
    },
    practicalApplication:
      'When you feel limited by your body\'s condition or life circumstances, remember your true nature: pure, radiant, untouched by any wound. The limitations belong to the body-mind, not to the awareness that witnesses them.',
    keyTerms: [
      { term: 'Śukram', meaning: 'Radiant, bright, pure' },
      { term: 'Akāyam', meaning: 'Bodiless, without physical form' },
      { term: 'Svayambhū', meaning: 'Self-existent, self-born' },
      { term: 'Kavi', meaning: 'Seer, poet, wise one' },
    ],
    themes: ['brahman-nature', 'purity', 'self-existence', 'cosmic-order'],
    difficulty: 'intermediate',
  },

  // -------------------------------------------------------------------------
  // VERSE 9 - Knowledge and Ignorance (Part 1)
  // -------------------------------------------------------------------------
  {
    upanishad: 'isha',
    section: 1,
    verse: 9,
    sanskrit: `अन्धं तमः प्रविशन्ति येऽविद्यामुपासते ।
ततो भूय इव ते तमो य उ विद्यायां रताः ॥`,
    transliteration: `andhaṁ tamaḥ praviśanti ye 'vidyām upāsate |
tato bhūya iva te tamo ya u vidyāyāṁ ratāḥ ||`,
    translation:
      'Into blinding darkness enter those who worship ignorance. Into greater darkness, as it were, enter those who delight in knowledge alone.',
    explanation: {
      simple:
        'This surprising verse warns against two extremes. Those who pursue only material goals live in darkness. But those who pursue only intellectual or spiritual knowledge — while ignoring practical life — enter an even greater darkness.',
      deeper:
        'Avidya here means ritual actions and worldly knowledge. Vidya means higher spiritual knowledge. The Upanishad warns that exclusive focus on either leads to imbalance. Pure ritualism without understanding is empty; pure intellectualism without grounded practice is even more dangerous because it creates spiritual pride.',
    },
    practicalApplication:
      'Don\'t use spirituality to escape from life. The person who meditates all day but can\'t hold a job or maintain relationships isn\'t more evolved — they may be more lost. Integrate wisdom into practical living.',
    keyTerms: [
      { term: 'Andham tamaḥ', meaning: 'Blinding darkness' },
      { term: 'Avidyā', meaning: 'Ignorance, ritual action, worldly knowledge' },
      { term: 'Vidyā', meaning: 'Knowledge, spiritual wisdom' },
      { term: 'Ratāḥ', meaning: 'Delighting in, devoted to' },
    ],
    themes: ['balance', 'knowledge', 'ignorance', 'integration'],
    difficulty: 'intermediate',
  },

  // -------------------------------------------------------------------------
  // VERSE 10 - Different Results
  // -------------------------------------------------------------------------
  {
    upanishad: 'isha',
    section: 1,
    verse: 10,
    sanskrit: `अन्यदेवाहुर्विद्ययाऽन्यदाहुरविद्यया ।
इति शुश्रुम धीराणां ये नस्तद्विचचक्षिरे ॥`,
    transliteration: `anyad evāhur vidyayā 'nyad āhur avidyayā |
iti śuśruma dhīrāṇāṁ ye nas tad vicacakṣire ||`,
    translation:
      'Different is the result gained by knowledge, different is the result gained by ignorance — thus we have heard from the wise who taught us this.',
    explanation: {
      simple:
        'Knowledge and ritual action lead to different outcomes. The teachers of old understood this and passed down the teaching that both have their place and their unique fruits.',
      deeper:
        'This verse sets up the resolution in verses 11 and 14. Rather than rejecting either path, the Upanishad honors the lineage of wise teachers (dhīrāḥ) who taught that both vidya and avidya serve important purposes — they just need to be properly integrated.',
    },
    practicalApplication:
      'Respect both paths: the path of knowledge/meditation and the path of action/ritual. Don\'t dismiss practical spirituality as "lower" or intellectual spirituality as "dry." Each serves its purpose on the journey.',
    keyTerms: [
      { term: 'Anyat', meaning: 'Different, other' },
      { term: 'Dhīrāṇām', meaning: 'Of the wise, of the steady-minded' },
      { term: 'Vicacakṣire', meaning: 'Have explained, have taught' },
      { term: 'Śuśruma', meaning: 'We have heard' },
    ],
    themes: ['teaching-lineage', 'knowledge', 'action', 'tradition'],
    difficulty: 'beginner',
  },

  // -------------------------------------------------------------------------
  // VERSE 11 - Integration of Knowledge and Action
  // -------------------------------------------------------------------------
  {
    upanishad: 'isha',
    section: 1,
    verse: 11,
    sanskrit: `विद्यां चाविद्यां च यस्तद्वेदोभयं सह ।
अविद्यया मृत्युं तीर्त्वा विद्ययाऽमृतमश्नुते ॥`,
    transliteration: `vidyāṁ cāvidyāṁ ca yas tad vedobhayaṁ saha |
avidyayā mṛtyuṁ tīrtvā vidyayā 'mṛtam aśnute ||`,
    translation:
      'One who knows both knowledge and action together, crosses over death through action and attains immortality through knowledge.',
    explanation: {
      simple:
        'The solution isn\'t choosing knowledge over action or action over knowledge — it\'s integrating both. Through proper action, you overcome the obstacles of mortal life. Through true knowledge, you realize your immortal nature.',
      deeper:
        'This is the central teaching of the Isha Upanishad: integration rather than rejection. Avidya (action, ritual, worldly engagement) helps us navigate mortal life and purify the mind. Vidya (knowledge of the Self) reveals our true immortal nature. Both are needed for complete liberation.',
    },
    practicalApplication:
      'Don\'t try to transcend ordinary life before you\'ve properly lived it. Use work, relationships, and daily duties (avidya) to mature and purify yourself. Use meditation and self-inquiry (vidya) to recognize your eternal nature. Both together make a complete path.',
    keyTerms: [
      { term: 'Ubhayam saha', meaning: 'Both together' },
      { term: 'Mṛtyum', meaning: 'Death' },
      { term: 'Tīrtvā', meaning: 'Having crossed over' },
      { term: 'Amṛtam', meaning: 'Immortality, nectar of deathlessness' },
    ],
    themes: ['integration', 'balance', 'immortality', 'liberation'],
    difficulty: 'beginner',
    famousVerse: true,
  },

  // -------------------------------------------------------------------------
  // VERSE 12 - Manifest and Unmanifest (Part 1)
  // -------------------------------------------------------------------------
  {
    upanishad: 'isha',
    section: 1,
    verse: 12,
    sanskrit: `अन्धं तमः प्रविशन्ति येऽसम्भूतिमुपासते ।
ततो भूय इव ते तमो य उ सम्भूत्यां रताः ॥`,
    transliteration: `andhaṁ tamaḥ praviśanti ye 'sambhūtim upāsate |
tato bhūya iva te tamo ya u sambhūtyāṁ ratāḥ ||`,
    translation:
      'Into blinding darkness enter those who worship the unmanifest. Into greater darkness, as it were, enter those who delight in the manifest alone.',
    explanation: {
      simple:
        'This parallels verse 9 but applies to a different pair. Those who worship only the formless Absolute miss something. Those who worship only the world of forms miss even more. Balance is needed.',
      deeper:
        'Asambhūti (unmanifest, uncreated) refers to focusing only on the transcendent Brahman without form. Sambhūti (manifest, created) refers to focusing only on the world of names and forms. Exclusive devotion to either extreme leads to imbalance.',
    },
    practicalApplication:
      'Some people are so focused on formless meditation that they neglect the sacred in everyday life. Others are so focused on rituals and forms that they miss the formless essence. Honor both the form and the formless.',
    keyTerms: [
      { term: 'Asambhūti', meaning: 'The unmanifest, unborn, formless' },
      { term: 'Sambhūti', meaning: 'The manifest, born, with form' },
      { term: 'Ratāḥ', meaning: 'Devoted to, delighting in' },
    ],
    themes: ['form-formless', 'balance', 'transcendence', 'immanence'],
    difficulty: 'intermediate',
  },

  // -------------------------------------------------------------------------
  // VERSE 13 - Different Results of Each
  // -------------------------------------------------------------------------
  {
    upanishad: 'isha',
    section: 1,
    verse: 13,
    sanskrit: `अन्यदेवाहुः सम्भवादन्यदाहुरसम्भवात् ।
इति शुश्रुम धीराणां ये नस्तद्विचचक्षिरे ॥`,
    transliteration: `anyad evāhuḥ sambhavād anyad āhur asambhavāt |
iti śuśruma dhīrāṇāṁ ye nas tad vicacakṣire ||`,
    translation:
      'Different is what comes from the manifest, different is what comes from the unmanifest — thus we have heard from the wise who taught us this.',
    explanation: {
      simple:
        'Focusing on form and focusing on the formless each produce different results. The ancient teachers understood this and taught that both approaches have their place.',
      deeper:
        'This verse acknowledges that different spiritual practices yield different fruits. Worship of manifest forms (deities, sacred images) produces one kind of result. Meditation on the formless Absolute produces another. The wise integrate both.',
    },
    practicalApplication:
      'If you\'re drawn to devotion and deity worship, honor that. If you\'re drawn to formless meditation, honor that too. But don\'t assume your way is the only way. Each approach offers genuine spiritual benefits.',
    keyTerms: [
      { term: 'Sambhavāt', meaning: 'From the manifest, from becoming' },
      { term: 'Asambhavāt', meaning: 'From the unmanifest, from non-becoming' },
    ],
    themes: ['multiple-paths', 'form', 'formless', 'teaching-lineage'],
    difficulty: 'intermediate',
  },

  // -------------------------------------------------------------------------
  // VERSE 14 - Integration of Form and Formless
  // -------------------------------------------------------------------------
  {
    upanishad: 'isha',
    section: 1,
    verse: 14,
    sanskrit: `सम्भूतिं च विनाशं च यस्तद्वेदोभयं सह ।
विनाशेन मृत्युं तीर्त्वा सम्भूत्याऽमृतमश्नुते ॥`,
    transliteration: `sambhūtiṁ ca vināśaṁ ca yas tad vedobhayaṁ saha |
vināśena mṛtyuṁ tīrtvā sambhūtyā 'mṛtam aśnute ||`,
    translation:
      'One who knows both the manifest and destruction (dissolution) together, crosses over death through understanding dissolution and attains immortality through the manifest.',
    explanation: {
      simple:
        'Understanding that forms arise and pass away (vināśa) helps you release attachment to the impermanent. Understanding the manifest Divine (sambhūti) reveals immortality shining through all forms. Both insights together bring liberation.',
      deeper:
        'Vināśa (destruction/dissolution) represents understanding impermanence — all forms dissolve. This knowledge frees you from clinging to the temporary. Sambhūti (becoming/manifestation) represents seeing the eternal expressing through forms. Together, you see the deathless manifesting as the dance of arising and passing.',
    },
    practicalApplication:
      'When something you love changes or ends, remember both teachings: yes, forms dissolve (vināśa), so don\'t cling. But the immortal essence continues to manifest in new forms (sambhūti). This integration brings peace amid change.',
    keyTerms: [
      { term: 'Vināśa', meaning: 'Destruction, dissolution, death of form' },
      { term: 'Sambhūti', meaning: 'Becoming, manifestation' },
      { term: 'Ubhayam saha', meaning: 'Both together' },
    ],
    themes: ['impermanence', 'immortality', 'integration', 'liberation'],
    difficulty: 'intermediate',
  },

  // -------------------------------------------------------------------------
  // VERSE 15 - Prayer for the Removal of Veil
  // -------------------------------------------------------------------------
  {
    upanishad: 'isha',
    section: 1,
    verse: 15,
    sanskrit: `हिरण्मयेन पात्रेण सत्यस्यापिहितं मुखम् ।
तत्त्वं पूषन्नपावृणु सत्यधर्माय दृष्टये ॥`,
    transliteration: `hiraṇmayena pātreṇa satyasyāpihitaṁ mukham |
tat tvaṁ pūṣann apāvṛṇu satya-dharmāya dṛṣṭaye ||`,
    translation:
      'The face of Truth is covered by a golden disc. O Pushan, remove it, so that I, devoted to truth, may see It.',
    explanation: {
      simple:
        'The Truth is right here but covered by something dazzling — like a golden lid. The seeker prays: remove what hides the truth so I can see directly. This "golden disc" is the brilliant appearance of the world that distracts from the deeper Reality.',
      deeper:
        'Hiraṇmaya (golden) represents the attractive, glittering appearance of manifestation. It\'s beautiful but it conceals the truth beyond form. Pūṣan is the sun deity representing illumination. The prayer is: let the dazzle of appearances be removed so the truth-seeker can perceive what lies beyond.',
    },
    practicalApplication:
      'The world\'s glitter — success, pleasure, status — isn\'t evil, but it can blind you to deeper truths. Pray for clarity to see past the shiny surface to the reality beneath. Sometimes the golden lid is your own achievements.',
    keyTerms: [
      { term: 'Hiraṇmaya', meaning: 'Golden, made of gold' },
      { term: 'Pātra', meaning: 'Vessel, cover, disc' },
      { term: 'Pūṣan', meaning: 'The Sun deity, nourisher' },
      { term: 'Apāvṛṇu', meaning: 'Remove, uncover' },
    ],
    themes: ['truth', 'prayer', 'veil', 'illumination'],
    difficulty: 'beginner',
    famousVerse: true,
  },

  // -------------------------------------------------------------------------
  // VERSE 16 - Prayer to the Sun
  // -------------------------------------------------------------------------
  {
    upanishad: 'isha',
    section: 1,
    verse: 16,
    sanskrit: `पूषन्नेकर्षे यम सूर्य प्राजापत्य व्यूह रश्मीन्समूह तेजः ।
यत्ते रूपं कल्याणतमं तत्ते पश्यामि योऽसावसौ पुरुषः सोऽहमस्मि ॥`,
    transliteration: `pūṣann ekarṣe yama sūrya prājāpatya vyūha raśmīn samūha tejaḥ |
yat te rūpaṁ kalyāṇatamaṁ tat te paśyāmi yo 'sāv asau puruṣaḥ so 'ham asmi ||`,
    translation:
      'O Pushan, sole seer, O Yama, O Sun, O child of Prajapati, spread your rays and gather your brilliance. I see your most auspicious form. The Being there — that Being am I.',
    explanation: {
      simple:
        'The seeker asks the Sun to temper its blinding brilliance so the divine form within can be seen. And then comes the profound recognition: "That Being there — I am That." The essence of the sun and the essence of the seer are one.',
      deeper:
        'So\'ham asmi — "I am That" — is one of the great statements of identity. The Purusha (cosmic Person) seen in the sun is recognized as identical with the seer\'s own Self. Subject and object merge. This is the direct realization the Upanishad has been building toward.',
    },
    practicalApplication:
      'In meditation, when you touch something vast and luminous, don\'t worship it as separate from yourself. Recognize: "That which I perceive, I am." The witness and the witnessed share one essence.',
    keyTerms: [
      { term: 'Ekarṣi', meaning: 'Sole seer, the one who sees all' },
      { term: 'Puruṣa', meaning: 'The cosmic Person, the Self' },
      { term: "So'ham asmi", meaning: 'I am That, That I am' },
      { term: 'Kalyāṇatamam', meaning: 'Most auspicious, most beautiful' },
    ],
    themes: ['identity', 'self-realization', 'sun', 'soham'],
    difficulty: 'advanced',
    famousVerse: true,
  },

  // -------------------------------------------------------------------------
  // VERSE 17 - Prayer at Death
  // -------------------------------------------------------------------------
  {
    upanishad: 'isha',
    section: 1,
    verse: 17,
    sanskrit: `वायुरनिलममृतमथेदं भस्मान्तं शरीरम् ।
ॐ क्रतो स्मर कृतं स्मर क्रतो स्मर कृतं स्मर ॥`,
    transliteration: `vāyur anilam amṛtam athedam bhasmāntaṁ śarīram |
oṁ krato smara kṛtaṁ smara krato smara kṛtaṁ smara ||`,
    translation:
      'Let this life-breath merge into the immortal Air. Let this body end in ashes. OM! O mind, remember — remember what has been done. O mind, remember — remember what has been done.',
    explanation: {
      simple:
        'This is a prayer at the moment of death. The breath returns to the cosmic air; the body returns to ash. But there\'s an urgent call to the mind: remember! Remember what you\'ve learned. Remember your purpose. Don\'t forget at the crucial moment.',
      deeper:
        'Krato (from kratu, meaning will, purpose, or intelligence) is addressed twice with urgency. At death, the mind tends to scatter. The dying person is urged to hold onto awareness, to remember their spiritual purpose, to carry consciousness through the transition.',
    },
    practicalApplication:
      'Live in such a way that when death comes, you have something worth remembering. Daily spiritual practice builds a habit of remembrance that will serve you at the final moment. Don\'t wait until it\'s too late to remember what matters.',
    keyTerms: [
      { term: 'Vāyu', meaning: 'Wind, air, breath' },
      { term: 'Anilam', meaning: 'Air, wind' },
      { term: 'Amṛtam', meaning: 'Immortal, deathless' },
      { term: 'Krato', meaning: 'O will/purpose/mind' },
      { term: 'Smara', meaning: 'Remember!' },
    ],
    themes: ['death', 'remembrance', 'breath', 'transition'],
    difficulty: 'intermediate',
    famousVerse: true,
  },

  // -------------------------------------------------------------------------
  // VERSE 18 - Final Prayer for Guidance
  // -------------------------------------------------------------------------
  {
    upanishad: 'isha',
    section: 1,
    verse: 18,
    sanskrit: `अग्ने नय सुपथा राये अस्मान्विश्वानि देव वयुनानि विद्वान् ।
युयोध्यस्मज्जुहुराणमेनो भूयिष्ठां ते नम उक्तिं विधेम ॥`,
    transliteration: `agne naya supathā rāye asmān viśvāni deva vayunāni vidvān |
yuyodhy asmaj juhurāṇam eno bhūyiṣṭhāṁ te nama uktiṁ vidhema ||`,
    translation:
      'O Agni, lead us by the good path to prosperity, O God who knows all our deeds. Remove from us crooked sin. We offer you many words of praise.',
    explanation: {
      simple:
        'The Upanishad ends with a humble prayer to Agni (fire deity): guide us on the right path, you who know everything we\'ve done. Remove the twisting effects of our wrong actions. We bow to you with devotion.',
      deeper:
        'After all the philosophy, the Upanishad ends with devotional surrender. Juhurāṇam enas refers to crooked, deceptive sin — the kind that twists our character. The seeker asks not just for knowledge but for guidance and purification. Wisdom without devotion is incomplete.',
    },
    practicalApplication:
      'However much you learn, stay humble. End your practice with a prayer for guidance. Acknowledge that you don\'t know everything, that you need help, that there are forces greater than your individual will. This surrender completes the path.',
    keyTerms: [
      { term: 'Agni', meaning: 'Fire deity, the carrier of offerings' },
      { term: 'Supathā', meaning: 'By the good path' },
      { term: 'Rāye', meaning: 'To prosperity, to wealth (spiritual and material)' },
      { term: 'Enas', meaning: 'Sin, wrongdoing' },
      { term: 'Namaḥ', meaning: 'Prostration, obeisance, praise' },
    ],
    themes: ['prayer', 'guidance', 'purification', 'devotion'],
    difficulty: 'beginner',
    famousVerse: true,
  },
];

// =============================================================================
// SECTION
// =============================================================================

const section1: UpanishadSection = {
  number: 1,
  name: {
    sanskrit: 'ईशोपनिषद्',
    english: 'Complete Text',
  },
  summary:
    'The entire Isha Upanishad is traditionally counted as a single section of 18 mantras. It opens with the foundational teaching that everything is pervaded by the Divine, explores the nature of the Self, reconciles knowledge with action, and concludes with prayers for guidance at the moment of death.',
  verses,
  isCurated: false,
};

// =============================================================================
// COMPLETE UPANISHAD
// =============================================================================

export const ishaUpanishad: Upanishad = {
  id: 'isha',
  name: {
    sanskrit: 'ईशोपनिषद्',
    english: 'Isha Upanishad',
    meaning: 'The Upanishad of the Lord (Isha = Lord, Ruler)',
  },
  veda: 'yajur',
  summary:
    'The Isha Upanishad, also known as Ishavasya Upanishad, is one of the shortest yet most profound of the Upanishads. In just 18 verses, it teaches that the Divine pervades everything, reconciles the paths of action and knowledge, explores the nature of the Self, and concludes with powerful prayers for guidance through life and death. Gandhi considered its first verse to be the essence of Hinduism.',
  keyTeachings: [
    'Everything is pervaded by the Divine — see God in all things',
    'Enjoy life through detachment, not grasping',
    'Action and knowledge must be integrated, not chosen between',
    'The Self is both moving and unmoving, far and near',
    'One who sees the Self in all beings feels no hatred',
    'Remember your purpose, especially at the moment of death',
  ],
  totalVerses: 18,
  includedVerses: 18,
  sections: [section1],
  difficulty: 'beginner',
  estimatedReadTime: '30 min',
};
