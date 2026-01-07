/**
 * Kena Upanishad (केनोपनिषद्)
 * "By Whom?" - The Inquiry into Ultimate Power
 *
 * Source: Sama Veda (Jaiminiya Brahmana)
 * Verses: 35 (4 sections)
 * Difficulty: Intermediate
 *
 * The Kena Upanishad opens with a profound question: "By whom (kena) is the mind
 * directed?" It explores what powers our senses and mind, revealing that Brahman
 * is the power behind all powers, unknowable through ordinary means.
 *
 * Contains the famous story of Uma teaching the gods about Brahman.
 */

import { Upanishad, UpanishadVerse, UpanishadSection } from './types';

// =============================================================================
// VERSES
// =============================================================================

const verses: UpanishadVerse[] = [
  // ===========================================================================
  // SECTION 1 (KHANDA 1): THE GREAT QUESTIONS (Verses 1-9)
  // ===========================================================================

  // -------------------------------------------------------------------------
  // VERSE 1.1 - The Opening Question
  // -------------------------------------------------------------------------
  {
    upanishad: 'kena',
    section: 1,
    verse: 1,
    sanskrit: `केनेषितं पतति प्रेषितं मनः
केन प्राणः प्रथमः प्रैति युक्तः ।
केनेषितां वाचमिमां वदन्ति
चक्षुः श्रोत्रं क उ देवो युनक्ति ॥`,
    transliteration: `keneṣitaṁ patati preṣitaṁ manaḥ
kena prāṇaḥ prathamaḥ praiti yuktaḥ |
keneṣitāṁ vācam imāṁ vadanti
cakṣuḥ śrotraṁ ka u devo yunakti ||`,
    translation:
      'By whom directed does the mind go forth to its object? By whom commanded does the first life-breath move? By whom impelled do people utter speech? What god directs the eyes and ears?',
    explanation: {
      simple:
        'A student asks the deepest possible question: What is the power behind our powers? Our mind thinks, but what makes it think? Our eyes see, but what enables sight? Something deeper than our faculties must be operating them.',
      deeper:
        'This opening sets up the entire Upanishad\'s inquiry. The word "kena" (by whom/what) gives this Upanishad its name. The question points beyond the instruments (mind, senses) to the power that animates them. This is the fundamental inquiry of Vedanta.',
    },
    practicalApplication:
      'Next time you\'re thinking, pause and notice: who or what is aware that thinking is happening? This simple inquiry can reveal that you are not your thoughts — you are the awareness witnessing them.',
    keyTerms: [
      { term: 'Kena', meaning: 'By whom, by what' },
      { term: 'Manas', meaning: 'Mind' },
      { term: 'Prāṇa', meaning: 'Life-breath, vital energy' },
      { term: 'Deva', meaning: 'God, shining one, power' },
    ],
    themes: ['inquiry', 'consciousness', 'source-of-power', 'self-inquiry'],
    difficulty: 'intermediate',
    famousVerse: true,
  },

  // -------------------------------------------------------------------------
  // VERSE 1.2 - The Teacher's Answer
  // -------------------------------------------------------------------------
  {
    upanishad: 'kena',
    section: 1,
    verse: 2,
    sanskrit: `श्रोत्रस्य श्रोत्रं मनसो मनो यद्
वाचो ह वाचं स उ प्राणस्य प्राणः ।
चक्षुषश्चक्षुरतिमुच्य धीराः
प्रेत्यास्माल्लोकादमृता भवन्ति ॥`,
    transliteration: `śrotrasya śrotraṁ manaso mano yad
vāco ha vācaṁ sa u prāṇasya prāṇaḥ |
cakṣuṣaś cakṣur atimucya dhīrāḥ
pretyāsmāl lokād amṛtā bhavanti ||`,
    translation:
      'It is the Ear of the ear, the Mind of the mind, the Speech of speech, the Life of life, the Eye of the eye. The wise, freeing themselves from identification with these, become immortal when departing from this world.',
    explanation: {
      simple:
        'The teacher answers: Brahman is what enables the ear to hear, the mind to think, speech to speak. It\'s the power behind all our powers. Those who realize this — that they are this deeper awareness, not the instruments — attain immortality.',
      deeper:
        'This verse introduces the concept of Brahman as the "subject of all subjects" — that which can never become an object of knowledge because it is the very foundation of knowing itself. Like the eye that sees everything but cannot see itself, Brahman is the seer that cannot be seen.',
    },
    practicalApplication:
      'Your awareness is aware of your thoughts, but can you make your awareness into an object? Try it. You\'ll find that the "looker" always remains behind the looking. This is pointing to your true nature.',
    keyTerms: [
      { term: 'Śrotrasya śrotram', meaning: 'The Ear of the ear' },
      { term: 'Manaso manaḥ', meaning: 'The Mind of the mind' },
      { term: 'Dhīrāḥ', meaning: 'The wise, the steady' },
      { term: 'Amṛtā', meaning: 'Immortal' },
    ],
    themes: ['brahman', 'awareness', 'immortality', 'witness-consciousness'],
    difficulty: 'intermediate',
    famousVerse: true,
  },

  // -------------------------------------------------------------------------
  // VERSE 1.3 - Beyond the Senses
  // -------------------------------------------------------------------------
  {
    upanishad: 'kena',
    section: 1,
    verse: 3,
    sanskrit: `न तत्र चक्षुर्गच्छति न वाग्गच्छति नो मनः ।
न विद्मो न विजानीमो यथैतदनुशिष्यात् ॥`,
    transliteration: `na tatra cakṣur gacchati na vāg gacchati no manaḥ |
na vidmo na vijānīmo yathaitad anuśiṣyāt ||`,
    translation:
      'The eye does not go there, nor speech, nor the mind. We do not know It, we do not understand how one can teach about It.',
    explanation: {
      simple:
        'Brahman cannot be seen with eyes, described with words, or grasped by the mind. It\'s not that we lack information — the tools we use for knowing simply don\'t apply here. How then can it be taught?',
      deeper:
        'This verse acknowledges the fundamental paradox of spiritual teaching. The ultimate reality is beyond all instruments of knowledge, yet somehow it must be communicated. The teaching must point beyond itself, using words to transcend words.',
    },
    practicalApplication:
      'When you try to understand consciousness by thinking about it, you\'re using consciousness to study itself — like trying to see your own eyes directly. Recognize the limits of the mind and allow yourself to rest in not-knowing.',
    keyTerms: [
      { term: 'Na gacchati', meaning: 'Does not go, does not reach' },
      { term: 'Na vidmaḥ', meaning: 'We do not know' },
      { term: 'Anuśiṣyāt', meaning: 'One might teach' },
    ],
    themes: ['ineffability', 'limits-of-mind', 'paradox', 'apophatic-theology'],
    difficulty: 'intermediate',
  },

  // -------------------------------------------------------------------------
  // VERSE 1.4 - Different from the Known
  // -------------------------------------------------------------------------
  {
    upanishad: 'kena',
    section: 1,
    verse: 4,
    sanskrit: `अन्यदेव तद्विदितादथो अविदितादधि ।
इति शुश्रुम पूर्वेषां ये नस्तद्व्याचचक्षिरे ॥`,
    transliteration: `anyad eva tad viditād atho aviditād adhi |
iti śuśruma pūrveṣāṁ ye nas tad vyācacakṣire ||`,
    translation:
      'It is different from the known and also beyond the unknown. Thus we have heard from the ancients who explained it to us.',
    explanation: {
      simple:
        'Brahman is neither something you can know (like objects) nor something unknowable (like nothing). It\'s in a completely different category. This understanding comes from an unbroken lineage of teachers.',
      deeper:
        'The "known" refers to objects of knowledge; the "unknown" refers to what hasn\'t yet been known but could be. Brahman transcends both categories because it is the very ground of knowing itself. The reference to "ancients" establishes the teaching as belonging to an authentic lineage (parampara).',
    },
    practicalApplication:
      'When someone asks "Do you know God?" — recognize that the question assumes God is an object to be known. True understanding transcends the known/unknown duality. It\'s about being, not knowing about.',
    keyTerms: [
      { term: 'Anyat', meaning: 'Different, other' },
      { term: 'Viditāt', meaning: 'From the known' },
      { term: 'Aviditāt', meaning: 'From the unknown' },
      { term: 'Pūrveṣām', meaning: 'Of the ancients, of those who came before' },
    ],
    themes: ['transcendence', 'tradition', 'beyond-duality', 'lineage'],
    difficulty: 'intermediate',
  },

  // -------------------------------------------------------------------------
  // VERSE 1.5 - That Which Speech Cannot Reveal
  // -------------------------------------------------------------------------
  {
    upanishad: 'kena',
    section: 1,
    verse: 5,
    sanskrit: `यद्वाचानभ्युदितं येन वागभ्युद्यते ।
तदेव ब्रह्म त्वं विद्धि नेदं यदिदमुपासते ॥`,
    transliteration: `yad vācā anabhyuditaṁ yena vāg abhyudyate |
tad eva brahma tvaṁ viddhi nedaṁ yad idam upāsate ||`,
    translation:
      'That which is not expressed by speech, but by which speech is expressed — know That alone to be Brahman, not what people worship as this.',
    explanation: {
      simple:
        'Brahman is not something words can describe, but it\'s what gives words their power. Whatever concept of God you worship, if it can be defined and limited, it\'s not the ultimate. The real Brahman is the source behind all expression.',
      deeper:
        'This begins a series of verses using the formula: "That which X cannot reach, but which empowers X — that is Brahman." The verse distinguishes between concepts of God (which are mental constructs) and Brahman itself (the reality behind all concepts).',
    },
    practicalApplication:
      'Notice that the power to speak exists before any particular word. The capacity for expression is prior to all expressions. Rest in that capacity itself, rather than getting lost in the endless words it produces.',
    keyTerms: [
      { term: 'Vāk', meaning: 'Speech, word' },
      { term: 'Anabhyuditam', meaning: 'Not expressed, not illumined' },
      { term: 'Abhyudyate', meaning: 'Is expressed, is illumined' },
      { term: 'Upāsate', meaning: 'Worship, meditate upon' },
    ],
    themes: ['brahman', 'speech', 'source', 'beyond-worship'],
    difficulty: 'intermediate',
    famousVerse: true,
  },

  // -------------------------------------------------------------------------
  // VERSE 1.6 - That Which Mind Cannot Think
  // -------------------------------------------------------------------------
  {
    upanishad: 'kena',
    section: 1,
    verse: 6,
    sanskrit: `यन्मनसा न मनुते येनाहुर्मनो मतम् ।
तदेव ब्रह्म त्वं विद्धि नेदं यदिदमुपासते ॥`,
    transliteration: `yan manasā na manute yenāhur mano matam |
tad eva brahma tvaṁ viddhi nedaṁ yad idam upāsate ||`,
    translation:
      'That which cannot be thought by the mind, but by which, they say, the mind thinks — know That alone to be Brahman, not what people worship as this.',
    explanation: {
      simple:
        'You cannot think about the ultimate reality because it\'s what makes thinking possible in the first place. Any thought about Brahman is still just a thought — not Brahman itself. The thinker is closer to Brahman than any thought.',
      deeper:
        'The mind functions by making distinctions and creating concepts. But Brahman, being non-dual and infinite, cannot be captured in any concept. Yet without Brahman\'s light, no thinking could occur. This points to self-knowledge rather than object-knowledge.',
    },
    practicalApplication:
      'When you meditate, you might try to think your way to enlightenment. But notice: what is aware of your thoughts? That awareness is not itself a thought. Rest there.',
    keyTerms: [
      { term: 'Manas', meaning: 'Mind' },
      { term: 'Na manute', meaning: 'Does not think' },
      { term: 'Matam', meaning: 'Thought, known' },
    ],
    themes: ['mind', 'brahman', 'awareness', 'non-conceptual'],
    difficulty: 'intermediate',
  },

  // -------------------------------------------------------------------------
  // VERSE 1.7 - That Which the Eye Cannot See
  // -------------------------------------------------------------------------
  {
    upanishad: 'kena',
    section: 1,
    verse: 7,
    sanskrit: `यच्चक्षुषा न पश्यति येन चक्षूंषि पश्यति ।
तदेव ब्रह्म त्वं विद्धि नेदं यदिदमुपासते ॥`,
    transliteration: `yac cakṣuṣā na paśyati yena cakṣūṁṣi paśyati |
tad eva brahma tvaṁ viddhi nedaṁ yad idam upāsate ||`,
    translation:
      'That which cannot be seen by the eye, but by which the eyes see — know That alone to be Brahman, not what people worship as this.',
    explanation: {
      simple:
        'Your eyes can see everything in front of them, but they can never see themselves seeing. Similarly, Brahman is the seer that can never become the seen. It\'s what empowers all seeing but is not an object of sight.',
      deeper:
        'This verse points to the subject-object relationship. Every object of experience presupposes a subject that experiences it. Brahman is the ultimate subject — pure subjectivity that can never be objectified.',
    },
    practicalApplication:
      'Close your eyes. Now open them. The seeing happens, but can you see the seer? The awareness that registers "I see" is closer to you than anything seen. That\'s the direction to look.',
    keyTerms: [
      { term: 'Cakṣus', meaning: 'Eye' },
      { term: 'Na paśyati', meaning: 'Does not see' },
      { term: 'Paśyati', meaning: 'Sees' },
    ],
    themes: ['vision', 'seer', 'subject', 'brahman'],
    difficulty: 'intermediate',
  },

  // -------------------------------------------------------------------------
  // VERSE 1.8 - That Which the Ear Cannot Hear
  // -------------------------------------------------------------------------
  {
    upanishad: 'kena',
    section: 1,
    verse: 8,
    sanskrit: `यच्छ्रोत्रेण न शृणोति येन श्रोत्रमिदं श्रुतम् ।
तदेव ब्रह्म त्वं विद्धि नेदं यदिदमुपासते ॥`,
    transliteration: `yac chrotreṇa na śṛṇoti yena śrotram idaṁ śrutam |
tad eva brahma tvaṁ viddhi nedaṁ yad idam upāsate ||`,
    translation:
      'That which cannot be heard by the ear, but by which the ear hears — know That alone to be Brahman, not what people worship as this.',
    explanation: {
      simple:
        'The ear can hear every sound, but it cannot hear what makes hearing possible. Brahman is the "hearing of hearing" — the foundation of the capacity itself, not any particular sound.',
      deeper:
        'Sound requires a hearer. The hearer requires awareness. Awareness is self-luminous and doesn\'t require anything else to be known. This is Brahman — not an object heard but the very possibility of hearing.',
    },
    practicalApplication:
      'In a moment of silence, notice that awareness is present even when there\'s nothing to hear. That silent awareness is more fundamental than any sound. It\'s always there, whether sounds come or go.',
    keyTerms: [
      { term: 'Śrotra', meaning: 'Ear' },
      { term: 'Na śṛṇoti', meaning: 'Does not hear' },
      { term: 'Śrutam', meaning: 'Heard, that which hears' },
    ],
    themes: ['hearing', 'awareness', 'brahman', 'silence'],
    difficulty: 'intermediate',
  },

  // -------------------------------------------------------------------------
  // VERSE 1.9 - That Which Breath Cannot Enliven
  // -------------------------------------------------------------------------
  {
    upanishad: 'kena',
    section: 1,
    verse: 9,
    sanskrit: `यत्प्राणेन न प्राणिति येन प्राणः प्रणीयते ।
तदेव ब्रह्म त्वं विद्धि नेदं यदिदमुपासते ॥`,
    transliteration: `yat prāṇena na prāṇiti yena prāṇaḥ praṇīyate |
tad eva brahma tvaṁ viddhi nedaṁ yad idam upāsate ||`,
    translation:
      'That which cannot be enlivened by the breath, but by which breath is enlivened — know That alone to be Brahman, not what people worship as this.',
    explanation: {
      simple:
        'Even the life-force (prana) that keeps you alive is itself animated by something deeper. Brahman is the "life of life" — what gives vitality to vitality itself.',
      deeper:
        'Prāṇa is often considered the most fundamental force in the body-mind. But even prāṇa depends on Brahman for its functioning. This points to consciousness as more fundamental than energy or life-force.',
    },
    practicalApplication:
      'When you practice breathing exercises, notice: you\'re aware of the breath. That awareness doesn\'t depend on breath — it\'s present whether breath is fast, slow, or held. Awareness is the source; breath is the instrument.',
    keyTerms: [
      { term: 'Prāṇa', meaning: 'Life-breath, vital energy' },
      { term: 'Na prāṇiti', meaning: 'Does not breathe, does not enliven' },
      { term: 'Praṇīyate', meaning: 'Is led forth, is enlivened' },
    ],
    themes: ['prana', 'life-force', 'consciousness', 'brahman'],
    difficulty: 'intermediate',
  },

  // ===========================================================================
  // SECTION 2 (KHANDA 2): THE PARADOX OF KNOWING (Verses 1-5)
  // ===========================================================================

  // -------------------------------------------------------------------------
  // VERSE 2.1 - If You Think You Know
  // -------------------------------------------------------------------------
  {
    upanishad: 'kena',
    section: 2,
    verse: 1,
    sanskrit: `यदि मन्यसे सुवेदेति दभ्रमेवापि नूनं त्वं वेत्थ ब्रह्मणो रूपम् ।
यदस्य त्वं यदस्य देवेष्वथ नु मीमांस्यमेव ते मन्ये विदितम् ॥`,
    transliteration: `yadi manyase suvedeti dahram evāpi nūnaṁ tvaṁ vettha brahmaṇo rūpam |
yad asya tvaṁ yad asya deveṣv atha nu mīmāṁsyam eva te manye viditam ||`,
    translation:
      'If you think "I know It well," then surely you know but little — only the form of Brahman as it appears in you and among the gods. I think it needs further inquiry by you.',
    explanation: {
      simple:
        'The teacher challenges: if you think you understand Brahman, you\'ve probably only grasped a concept or form of it, not the reality itself. True understanding requires going deeper. Don\'t stop at intellectual comprehension.',
      deeper:
        'This verse prevents the student from settling into a comfortable but superficial understanding. Any "knowledge" of Brahman that can be stated is just another mental form. The inquiry must continue until the inquirer recognizes their own nature as Brahman.',
    },
    practicalApplication:
      'Beware of spiritual smugness. The moment you think "I\'ve got it," you\'ve probably grabbed a concept and mistaken it for reality. Stay humble and keep inquiring.',
    keyTerms: [
      { term: 'Suveda', meaning: 'Well-known, thoroughly understood' },
      { term: 'Dahram', meaning: 'Little, a small amount' },
      { term: 'Rūpam', meaning: 'Form, appearance' },
      { term: 'Mīmāṁsya', meaning: 'To be inquired into' },
    ],
    themes: ['humility', 'inquiry', 'knowledge-limits', 'deeper-understanding'],
    difficulty: 'intermediate',
    famousVerse: true,
  },

  // -------------------------------------------------------------------------
  // VERSE 2.2 - The Student's Reflection
  // -------------------------------------------------------------------------
  {
    upanishad: 'kena',
    section: 2,
    verse: 2,
    sanskrit: `नाहं मन्ये सुवेदेति नो न वेदेति वेद च ।
यो नस्तद्वेद तद्वेद नो न वेदेति वेद च ॥`,
    transliteration: `nāhaṁ manye suvedeti no na vedeti veda ca |
yo nas tad veda tad veda no na vedeti veda ca ||`,
    translation:
      'I do not think "I know It well," nor do I think "I do not know It." Among us, he who knows It, knows It; he knows neither "I know" nor "I know not."',
    explanation: {
      simple:
        'The student has understood: you can\'t claim to know Brahman (it\'s beyond concepts), but you also can\'t claim not to know it (you ARE it). True knowing transcends both claiming and denying. The one who "knows" doesn\'t frame it as knowledge.',
      deeper:
        'This paradoxical statement points to non-dual awareness. Brahman is not something external to know or not know — it is the knower itself. The division into "knower" and "known" dissolves in direct recognition.',
    },
    practicalApplication:
      'Next time someone asks "Do you know God?" or "Have you found enlightenment?" — notice how any answer traps you. The question assumes a duality that true understanding transcends. Rest in the space before the answer.',
    keyTerms: [
      { term: 'Na veda', meaning: 'Does not know' },
      { term: 'Veda', meaning: 'Knows' },
      { term: 'Suvedeti', meaning: 'I know well' },
    ],
    themes: ['paradox', 'non-dual-knowledge', 'transcendence', 'wisdom'],
    difficulty: 'advanced',
    famousVerse: true,
  },

  // -------------------------------------------------------------------------
  // VERSE 2.3 - Known to Those Who Don't Know
  // -------------------------------------------------------------------------
  {
    upanishad: 'kena',
    section: 2,
    verse: 3,
    sanskrit: `यस्यामतं तस्य मतं मतं यस्य न वेद सः ।
अविज्ञातं विजानतां विज्ञातमविजानताम् ॥`,
    transliteration: `yasyāmataṁ tasya mataṁ mataṁ yasya na veda saḥ |
avijñātaṁ vijānatāṁ vijñātam avijānatām ||`,
    translation:
      'To whom It is unknown, to him It is known; to whom It is known, he does not know. It is unknown to those who know, and known to those who do not know.',
    explanation: {
      simple:
        'This isn\'t a riddle — it\'s pointing to something profound. Those who think they\'ve captured Brahman in a concept have missed it. Those who humbly recognize they can\'t capture it conceptually are closer to the truth. Not-knowing IS the knowing.',
      deeper:
        'Brahman cannot be made into an object of knowledge like other things. When you know it\'s not an object, you "know" it correctly. When you try to know it as an object, you miss it entirely. This is jnana (wisdom) versus vijnana (conceptual knowledge).',
    },
    practicalApplication:
      'When you admit "I don\'t know," there\'s an openness and presence in that admission. That very presence is what you\'re looking for. The one who is aware of not-knowing — that awareness is the answer.',
    keyTerms: [
      { term: 'Amatam', meaning: 'Unknown, not thought' },
      { term: 'Matam', meaning: 'Known, thought' },
      { term: 'Avijñātam', meaning: 'Unknown' },
      { term: 'Vijñātam', meaning: 'Known' },
    ],
    themes: ['paradox', 'wisdom', 'unknowing', 'non-dual'],
    difficulty: 'advanced',
    famousVerse: true,
  },

  // -------------------------------------------------------------------------
  // VERSE 2.4 - Realization Moment by Moment
  // -------------------------------------------------------------------------
  {
    upanishad: 'kena',
    section: 2,
    verse: 4,
    sanskrit: `प्रतिबोधविदितं मतममृतत्वं हि विन्दते ।
आत्मना विन्दते वीर्यं विद्यया विन्दतेऽमृतम् ॥`,
    transliteration: `pratibodha-viditaṁ matam amṛtatvaṁ hi vindate |
ātmanā vindate vīryaṁ vidyayā vindate 'mṛtam ||`,
    translation:
      'It is known through every state of awakening; thus one attains immortality. Through the Self one gains strength; through knowledge one gains immortality.',
    explanation: {
      simple:
        'Brahman is realized not once but in every moment of awareness — each "awakening" of consciousness is a glimpse of it. Through recognizing your true Self, you gain inner strength. Through this knowledge, you transcend death.',
      deeper:
        '"Pratibodha" means "in every awakening" or "in each moment of cognition." This suggests that every act of knowing already contains the light of Brahman. Self-knowledge (ātma-vidyā) is the means to immortality because the Self is already deathless.',
    },
    practicalApplication:
      'You don\'t need a special meditation state to touch reality. Every moment you wake up to presence — even noticing "I am here, aware" — is a recognition of what\'s always true. Multiply these moments of awakening.',
    keyTerms: [
      { term: 'Pratibodha', meaning: 'In each awakening, cognition by cognition' },
      { term: 'Amṛtatvam', meaning: 'Immortality' },
      { term: 'Ātmanā', meaning: 'Through the Self' },
      { term: 'Vīryam', meaning: 'Strength, vigor, power' },
    ],
    themes: ['awakening', 'immortality', 'self-knowledge', 'strength'],
    difficulty: 'intermediate',
  },

  // -------------------------------------------------------------------------
  // VERSE 2.5 - Here and Now or Never
  // -------------------------------------------------------------------------
  {
    upanishad: 'kena',
    section: 2,
    verse: 5,
    sanskrit: `इह चेदवेदीदथ सत्यमस्ति न चेदिहावेदीन्महती विनष्टिः ।
भूतेषु भूतेषु विचित्य धीराः प्रेत्यास्माल्लोकादमृता भवन्ति ॥`,
    transliteration: `iha ced avedīd atha satyam asti na ced ihāvedīn mahatī vinaṣṭiḥ |
bhūteṣu bhūteṣu vicitya dhīrāḥ pretyāsmāl lokād amṛtā bhavanti ||`,
    translation:
      'If one knows It here, then there is truth; if one does not know It here, great is the loss. The wise, seeing It in every being, become immortal when departing from this world.',
    explanation: {
      simple:
        'The time to realize your true nature is now, in this life. Don\'t postpone awakening. If you miss this opportunity, it\'s a great loss. The wise see the same Self in all beings and thereby transcend death.',
      deeper:
        'This verse emphasizes the urgency of self-knowledge and its practical availability. "Here" means in this human body, this lifetime. The wise (dhīrāḥ) don\'t just understand this intellectually — they perceive it in every being, which naturally leads to compassion and unity.',
    },
    practicalApplication:
      'Don\'t wait for perfect conditions to pursue self-knowledge. The opportunity is here, now, in this body. Look for the same awareness that\'s reading these words in everyone you meet today. That practice itself transforms.',
    keyTerms: [
      { term: 'Iha', meaning: 'Here, in this life' },
      { term: 'Satyam', meaning: 'Truth, reality' },
      { term: 'Vinaṣṭiḥ', meaning: 'Loss, destruction' },
      { term: 'Bhūteṣu bhūteṣu', meaning: 'In being after being, in all beings' },
    ],
    themes: ['urgency', 'here-and-now', 'seeing-in-all', 'immortality'],
    difficulty: 'intermediate',
    famousVerse: true,
  },

  // ===========================================================================
  // SECTION 3 (KHANDA 3): THE STORY OF THE GODS AND BRAHMAN (Verses 1-12)
  // ===========================================================================

  // -------------------------------------------------------------------------
  // VERSE 3.1 - Victory of the Gods
  // -------------------------------------------------------------------------
  {
    upanishad: 'kena',
    section: 3,
    verse: 1,
    sanskrit: `ब्रह्म ह देवेभ्यो विजिग्ये तस्य ह ब्रह्मणो विजये देवा अमहीयन्त ॥`,
    transliteration: `brahma ha devebhyo vijigye tasya ha brahmaṇo vijaye devā amahīyanta ||`,
    translation:
      'Brahman once won a victory for the gods. In that victory of Brahman, the gods became exalted.',
    explanation: {
      simple:
        'This begins a famous story. The gods (devas) won a great battle, but it was really Brahman\'s power that won it. However, the gods didn\'t realize this — they thought they had won by their own strength.',
      deeper:
        'This allegorical story illustrates how our individual powers (represented by gods like Agni, Vayu, Indra) are actually borrowed from Brahman, the ultimate source. Pride in personal achievement is ignorance of this truth.',
    },
    practicalApplication:
      'When you succeed at something, notice the tendency to take full credit. Consider: where did your abilities come from? Your intelligence, energy, luck? Recognizing the ultimate source behind your powers cultivates humility.',
    keyTerms: [
      { term: 'Brahma', meaning: 'Brahman, the Absolute' },
      { term: 'Devebhyaḥ', meaning: 'For the gods' },
      { term: 'Vijigye', meaning: 'Won victory' },
      { term: 'Amahīyanta', meaning: 'Became glorified, exalted' },
    ],
    themes: ['story', 'pride', 'source-of-power', 'humility'],
    difficulty: 'beginner',
  },

  // -------------------------------------------------------------------------
  // VERSE 3.2 - The Gods' Pride
  // -------------------------------------------------------------------------
  {
    upanishad: 'kena',
    section: 3,
    verse: 2,
    sanskrit: `त ऐक्षन्तास्माकमेवायं विजयोऽस्माकमेवायं महिमेति ॥`,
    transliteration: `ta aikṣantāsmākam evāyaṁ vijayo 'smākam evāyaṁ mahimeti ||`,
    translation:
      'They thought: "This victory is ours alone! This glory is ours alone!"',
    explanation: {
      simple:
        'The gods became proud. They forgot that Brahman was the real power behind their victory and claimed all the credit for themselves.',
      deeper:
        'This represents the ego\'s tendency to appropriate what belongs to the whole. Just as our individual faculties work because of consciousness (which we don\'t create), the gods\' powers came from Brahman.',
    },
    practicalApplication:
      'Notice when you take credit for things that weren\'t entirely your doing. Your body works without your control. Your thoughts arise without your willing them. Who\'s really running the show?',
    keyTerms: [
      { term: 'Aikṣanta', meaning: 'They thought, they saw' },
      { term: 'Asmākam', meaning: 'Ours' },
      { term: 'Vijayaḥ', meaning: 'Victory' },
      { term: 'Mahimā', meaning: 'Glory, greatness' },
    ],
    themes: ['pride', 'ego', 'delusion', 'claiming-credit'],
    difficulty: 'beginner',
  },

  // -------------------------------------------------------------------------
  // VERSE 3.3 - Brahman Appears
  // -------------------------------------------------------------------------
  {
    upanishad: 'kena',
    section: 3,
    verse: 3,
    sanskrit: `तद्धैषां विज्ञाय तेभ्यो ह प्रादुर्बभूव तन्न व्यजानत किमिदं यक्षमिति ॥`,
    transliteration: `tad dhaiṣāṁ vijñāya tebhyo ha prādur babhūva tan na vyajānata kim idaṁ yakṣam iti ||`,
    translation:
      'Brahman perceived their pride. It appeared before them as a mysterious Yaksha (spirit), but they did not understand what this being was.',
    explanation: {
      simple:
        'Brahman saw the gods\' misunderstanding and decided to teach them. It appeared as a mysterious, glowing being (Yaksha). The gods couldn\'t recognize it — the very source of their power stood before them unknown.',
      deeper:
        'The Yaksha represents the mystery of ultimate reality. Even when Brahman is "right in front of us," we may not recognize it because we\'re looking for something else. The gods expected an object; Brahman transcends objecthood.',
    },
    practicalApplication:
      'Reality is not hidden in a distant cave — it\'s here, now, appearing as everything. The mystery is right before your eyes. Are you too busy looking for something special to notice the obvious?',
    keyTerms: [
      { term: 'Vijñāya', meaning: 'Having perceived, understood' },
      { term: 'Prādurbabhūva', meaning: 'Appeared, manifested' },
      { term: 'Yakṣa', meaning: 'Mysterious being, spirit' },
      { term: 'Na vyajānata', meaning: 'Did not recognize' },
    ],
    themes: ['appearance', 'mystery', 'non-recognition', 'teaching-moment'],
    difficulty: 'beginner',
  },

  // -------------------------------------------------------------------------
  // VERSE 3.4 - Agni is Sent
  // -------------------------------------------------------------------------
  {
    upanishad: 'kena',
    section: 3,
    verse: 4,
    sanskrit: `तेऽग्निमब्रुवन् जातवेद एतद्विजानीहि किमेतद्यक्षमिति तथेति ॥`,
    transliteration: `te 'gnim abruvan jātaveda etad vijānīhi kim etad yakṣam iti tatheti ||`,
    translation:
      'They said to Agni (Fire): "Jatavedas (O All-knowing One), find out what this spirit is." He said: "So be it."',
    explanation: {
      simple:
        'The gods sent Agni, the god of fire, to investigate. They called him "Jatavedas" — the one who knows all that is born, who illumines everything. Surely Fire, who sees all, could identify this being.',
      deeper:
        'Agni represents the faculty of perception and purification. The gods rely on him to "illuminate" the unknown. But as we\'ll see, even perception cannot perceive its own source.',
    },
    practicalApplication:
      'We often send our intellect to figure out spiritual matters. We try to "illuminate" the mystery with analysis. But can the flashlight light up itself? Watch what happens when investigation meets its source.',
    keyTerms: [
      { term: 'Agni', meaning: 'Fire god, power of perception' },
      { term: 'Jātavedas', meaning: 'Knower of all beings, all-knowing fire' },
      { term: 'Vijānīhi', meaning: 'Find out, investigate' },
    ],
    themes: ['investigation', 'fire', 'perception', 'inquiry'],
    difficulty: 'beginner',
  },

  // -------------------------------------------------------------------------
  // VERSE 3.5 - Agni's Claim
  // -------------------------------------------------------------------------
  {
    upanishad: 'kena',
    section: 3,
    verse: 5,
    sanskrit: `तदभ्यद्रवत्तमभ्यवदत्कोऽसीत्यग्निर्वा अहमस्मीत्यब्रवीज्जातवेदा वा अहमस्मीति ॥`,
    transliteration: `tad abhyadravat tam abhyavadat ko 'sīty agnir vā aham asmīty abravīj jātavedā vā aham asmīti ||`,
    translation:
      'He ran to It. It asked him: "Who are you?" He replied: "I am Agni. I am Jatavedas, the all-knower."',
    explanation: {
      simple:
        'Agni approached the mysterious being. When asked "Who are you?" he proudly declared his identity and titles. He defined himself by his role and power.',
      deeper:
        'The question "Who are you?" is the fundamental inquiry. Agni answers with his function and name — essentially saying "I am what I do." But is your identity really your function? This is the question the story explores.',
    },
    practicalApplication:
      'When someone asks "Who are you?" what do you say? Usually job, name, roles. But are you really just a collection of functions? What remains when all roles are stripped away?',
    keyTerms: [
      { term: 'Ko asi', meaning: 'Who are you?' },
      { term: 'Aham asmi', meaning: 'I am' },
    ],
    themes: ['identity', 'self-definition', 'pride', 'roles'],
    difficulty: 'beginner',
  },

  // -------------------------------------------------------------------------
  // VERSE 3.6 - Agni's Power Questioned
  // -------------------------------------------------------------------------
  {
    upanishad: 'kena',
    section: 3,
    verse: 6,
    sanskrit: `तस्मिंस्त्वयि किं वीर्यमित्यपीदं सर्वं दहेयं यदिदं पृथिव्यामिति ॥`,
    transliteration: `tasmiṁs tvayi kiṁ vīryam ity apīdaṁ sarvaṁ daheyaṁ yad idaṁ pṛthivyām iti ||`,
    translation:
      '"What power do you have?" the Yaksha asked. "I can burn everything on earth," Agni replied.',
    explanation: {
      simple:
        'The Yaksha asked about Agni\'s power. Fire proudly declared he could burn anything in the world. His power seemed unlimited.',
      deeper:
        'Agni identifies with his power as if it were his own independent ability. But power borrowed from Brahman is not truly independent. The test will reveal this.',
    },
    practicalApplication:
      'We all have abilities we\'re proud of. But try this: can you think without consciousness? Can you act without life force? Your powers depend on something you didn\'t create and can\'t fully control.',
    keyTerms: [
      { term: 'Vīryam', meaning: 'Power, strength' },
      { term: 'Daheyam', meaning: 'I could burn' },
      { term: 'Pṛthivyām', meaning: 'On earth' },
    ],
    themes: ['power', 'pride', 'ability', 'limitation'],
    difficulty: 'beginner',
  },

  // -------------------------------------------------------------------------
  // VERSE 3.7 - Agni's Test
  // -------------------------------------------------------------------------
  {
    upanishad: 'kena',
    section: 3,
    verse: 7,
    sanskrit: `तस्मै तृणं निदधावेतद्दहेति तदुपप्रेयाय सर्वजवेन तन्न शशाक दग्धुं स तत एव निववृते नैतदशकं विज्ञातुं यदेतद्यक्षमिति ॥`,
    transliteration: `tasmai tṛṇaṁ nidadhāv etad daheti tad uprapreyāya sarva-javena tan na śaśāka dagdhuṁ sa tata eva nivavṛte naitad aśakaṁ vijñātuṁ yad etad yakṣam iti ||`,
    translation:
      'The Yaksha placed a straw before him: "Burn this." Agni rushed at it with all his might but could not burn it. He returned and said: "I could not find out what this being is."',
    explanation: {
      simple:
        'The test was simple: burn a single straw. But Agni\'s fire had no effect. His power, which he thought was his own, simply didn\'t work. Humbled, he had to admit defeat.',
      deeper:
        'When separated from its source, power ceases to function. Agni\'s burning ability was always Brahman\'s power manifesting through him. The straw that couldn\'t be burned represents the absolute — nothing can touch it because it\'s the source of everything.',
    },
    practicalApplication:
      'Have you ever tried your hardest and completely failed at something that should have been easy? Sometimes life presents us with a "straw" we cannot burn — a reminder that our power has limits and a source beyond us.',
    keyTerms: [
      { term: 'Tṛṇam', meaning: 'Straw, grass blade' },
      { term: 'Daha', meaning: 'Burn' },
      { term: 'Na śaśāka', meaning: 'Could not, was unable' },
      { term: 'Nivavṛte', meaning: 'Returned' },
    ],
    themes: ['humility', 'failure', 'limitation', 'borrowed-power'],
    difficulty: 'beginner',
    famousVerse: true,
  },

  // -------------------------------------------------------------------------
  // VERSE 3.8 - Vayu is Sent
  // -------------------------------------------------------------------------
  {
    upanishad: 'kena',
    section: 3,
    verse: 8,
    sanskrit: `अथ वायुमब्रुवन् वायवेतद्विजानीहि किमेतद्यक्षमिति तथेति ॥`,
    transliteration: `atha vāyum abruvan vāyav etad vijānīhi kim etad yakṣam iti tatheti ||`,
    translation:
      'Then they said to Vayu (Wind): "O Vayu, find out what this spirit is." He said: "So be it."',
    explanation: {
      simple:
        'After Fire failed, the gods sent Wind to investigate. If Fire couldn\'t do it, perhaps the all-pervading Wind could.',
      deeper:
        'Vayu represents the vital force (prana) that pervades everything and makes life possible. Surely the life-breath itself would succeed where perception failed.',
    },
    practicalApplication:
      'When one approach fails, we try another. We send different faculties to solve the mystery. But can any faculty comprehend its own source?',
    keyTerms: [
      { term: 'Vāyu', meaning: 'Wind god, vital air' },
    ],
    themes: ['investigation', 'wind', 'prana', 'inquiry'],
    difficulty: 'beginner',
  },

  // -------------------------------------------------------------------------
  // VERSE 3.9 - Vayu's Claim
  // -------------------------------------------------------------------------
  {
    upanishad: 'kena',
    section: 3,
    verse: 9,
    sanskrit: `तदभ्यद्रवत्तमभ्यवदत्कोऽसीति वायुर्वा अहमस्मीत्यब्रवीन्मातरिश्वा वा अहमस्मीति ॥`,
    transliteration: `tad abhyadravat tam abhyavadat ko 'sīti vāyur vā aham asmīty abravīn mātariśvā vā aham asmīti ||`,
    translation:
      'He ran to It. It asked: "Who are you?" He replied: "I am Vayu. I am Matarishvan (he who moves in space, the cosmic breath)."',
    explanation: {
      simple:
        'Vayu gave his name and title, identifying himself as the cosmic breath that pervades all space. Like Agni, he defined himself by his function.',
      deeper:
        'Matarishvan is a Vedic name for Vayu emphasizing his role as the breath of the cosmos. But even this vast function doesn\'t touch the absolute.',
    },
    practicalApplication:
      'Even the breath that keeps us alive moment to moment is not the ultimate. It too has a source. Who breathes the breath?',
    keyTerms: [
      { term: 'Vāyu', meaning: 'Wind' },
      { term: 'Mātariśvan', meaning: 'One who moves in space, cosmic breath' },
    ],
    themes: ['identity', 'breath', 'cosmos', 'self-definition'],
    difficulty: 'beginner',
  },

  // -------------------------------------------------------------------------
  // VERSE 3.10 - Vayu's Test
  // -------------------------------------------------------------------------
  {
    upanishad: 'kena',
    section: 3,
    verse: 10,
    sanskrit: `तस्मिंस्त्वयि किं वीर्यमित्यपीदं सर्वमाददीय यदिदं पृथिव्यामिति ॥`,
    transliteration: `tasmiṁs tvayi kiṁ vīryam ity apīdaṁ sarvam ādadīya yad idaṁ pṛthivyām iti ||`,
    translation:
      '"What power do you have?" "I could blow away everything on earth," Vayu replied.',
    explanation: {
      simple:
        'Like Fire, Wind claimed unlimited power. He could move anything on earth, carry away mountains.',
    },
    practicalApplication:
      'Our vital force feels powerful — we can do so much! But like Agni\'s fire, Vayu\'s wind will meet its match.',
    keyTerms: [
      { term: 'Ādadīya', meaning: 'I could take up, carry away' },
    ],
    themes: ['power', 'pride', 'wind', 'claim'],
    difficulty: 'beginner',
  },

  // -------------------------------------------------------------------------
  // VERSE 3.11 - Vayu's Failure
  // -------------------------------------------------------------------------
  {
    upanishad: 'kena',
    section: 3,
    verse: 11,
    sanskrit: `तस्मै तृणं निदधावेतदाददस्वेति तदुपप्रेयाय सर्वजवेन तन्न शशाकादातुं स तत एव निववृते नैतदशकं विज्ञातुं यदेतद्यक्षमिति ॥`,
    transliteration: `tasmai tṛṇaṁ nidadhāv etad ādasveti tad uprapreyāya sarvajavena tan na śaśākādātuṁ sa tata eva nivavṛte naitad aśakaṁ vijñātuṁ yad etad yakṣam iti ||`,
    translation:
      'The Yaksha placed a straw before him: "Blow this away." Vayu rushed at it with all his might but could not move it. He returned and said: "I could not find out what this being is."',
    explanation: {
      simple:
        'The same test, the same result. Wind could not move a single straw. The all-pervading life-force was powerless before the source of all power.',
      deeper:
        'Both perception (Agni) and vital force (Vayu) failed. These represent our main ways of interacting with the world. Neither can grasp Brahman because Brahman is what enables them both.',
    },
    practicalApplication:
      'Neither thinking harder nor trying harder will reveal your true nature. Analysis and effort both fail at the threshold of the absolute. Something else is needed.',
    keyTerms: [
      { term: 'Ādasva', meaning: 'Take up, blow away' },
      { term: 'Na śaśāka', meaning: 'Could not' },
    ],
    themes: ['failure', 'humility', 'limitation', 'wind'],
    difficulty: 'beginner',
  },

  // -------------------------------------------------------------------------
  // VERSE 3.12 - Indra Approaches
  // -------------------------------------------------------------------------
  {
    upanishad: 'kena',
    section: 3,
    verse: 12,
    sanskrit: `अथेन्द्रमब्रुवन् मघवन्नेतद्विजानीहि किमेतद्यक्षमिति तथेति तदभ्यद्रवत्तस्मात्तिरोदधे ॥`,
    transliteration: `athendram abruvan maghavann etad vijānīhi kim etad yakṣam iti tatheti tad abhyadravat tasmāt tirodadhe ||`,
    translation:
      'Then they said to Indra: "O Maghavan (Bountiful Lord), find out what this spirit is." He said: "So be it." He ran toward It, but It vanished from his sight.',
    explanation: {
      simple:
        'Finally, Indra, king of the gods and lord of the mind, went to investigate. But before he could even ask a question, the Yaksha disappeared. The mind itself cannot catch Brahman.',
      deeper:
        'Indra represents the mind (manas). When the mind approaches the absolute with the attitude of grasping it as an object, the absolute "disappears." You cannot corner consciousness into a corner of consciousness.',
    },
    practicalApplication:
      'When you try to "get" enlightenment, it seems to slip away. The seeking mind creates the very distance it tries to close. What happens when the seeker stops and simply is?',
    keyTerms: [
      { term: 'Indra', meaning: 'King of gods, represents the mind' },
      { term: 'Maghavan', meaning: 'Bountiful Lord, generous one' },
      { term: 'Tirodadhe', meaning: 'Disappeared, vanished' },
    ],
    themes: ['mind', 'disappearance', 'seeking', 'unfindable'],
    difficulty: 'intermediate',
    famousVerse: true,
  },

  // ===========================================================================
  // SECTION 4 (KHANDA 4): UMA REVEALS THE TRUTH (Verses 1-9)
  // ===========================================================================

  // -------------------------------------------------------------------------
  // VERSE 4.1 - Uma Appears
  // -------------------------------------------------------------------------
  {
    upanishad: 'kena',
    section: 4,
    verse: 1,
    sanskrit: `स तस्मिन्नेवाकाशे स्त्रियमाजगाम बहुशोभमानामुमां हैमवतीं तां होवाच किमेतद्यक्षमिति ॥`,
    transliteration: `sa tasminn evākāśe striyam ājagāma bahu-śobhamānām umāṁ haimavatīṁ tāṁ hovāca kim etad yakṣam iti ||`,
    translation:
      'In that very space he came upon a woman of great beauty — Uma, daughter of the Himalayas. He asked her: "What was that spirit?"',
    explanation: {
      simple:
        'Where the mysterious being vanished, a beautiful goddess appeared — Uma (also known as Parvati), the Divine Mother. Indra asked her about the Yaksha. She, representing grace and wisdom, would teach what power and effort could not discover.',
      deeper:
        'Uma represents para vidya (higher knowledge), grace, and the shakti (power) of Brahman that reveals itself. When the masculine powers of action fail, the feminine power of receptive wisdom succeeds. Self-knowledge comes through grace, not force.',
    },
    practicalApplication:
      'When your efforts at understanding reach an impasse, relax into receptivity. Sometimes wisdom comes when we stop pushing and start listening. Grace fills the space that striving empties.',
    keyTerms: [
      { term: 'Umā', meaning: 'Goddess Uma/Parvati, the Divine Mother' },
      { term: 'Haimavatī', meaning: 'Daughter of Himavan (the Himalayas)' },
      { term: 'Bahu-śobhamānā', meaning: 'Of great splendor, very beautiful' },
    ],
    themes: ['grace', 'goddess', 'wisdom', 'feminine-divine'],
    difficulty: 'intermediate',
    famousVerse: true,
  },

  // -------------------------------------------------------------------------
  // VERSE 4.2 - Uma's Revelation
  // -------------------------------------------------------------------------
  {
    upanishad: 'kena',
    section: 4,
    verse: 2,
    sanskrit: `सा ब्रह्मेति होवाच ब्रह्मणो वा एतद्विजये महीयध्वमिति ततो हैव विदांचकार ब्रह्मेति ॥`,
    transliteration: `sā brahmeti hovāca brahmaṇo vā etad vijaye mahīyadhvam iti tato haiva vidāṁcakāra brahmeti ||`,
    translation:
      'She said: "It was Brahman. It was through the victory of Brahman that you became great." From her words, Indra understood that it was Brahman.',
    explanation: {
      simple:
        'Uma revealed the truth directly: that mysterious being was Brahman itself, and the gods\' victory was really Brahman\'s victory. They became great by Brahman\'s power, not their own. This simple teaching opened Indra\'s eyes.',
      deeper:
        'The direct statement "It was Brahman" (sa brahmeti) comes through Uma — through grace, not through investigation. Knowledge of Brahman is not acquired by effort but revealed through grace. The mind (Indra) becomes enlightened when it receives rather than grasps.',
    },
    practicalApplication:
      'The truth can sometimes be stated simply and directly. What if you stopped trying to figure it out and simply received the teaching: "That presence which is aware right now — that is Brahman"?',
    keyTerms: [
      { term: 'Brahma', meaning: 'Brahman, the Absolute' },
      { term: 'Vijaye', meaning: 'In the victory' },
      { term: 'Mahīyadhvam', meaning: 'You became great' },
      { term: 'Vidāṁcakāra', meaning: 'Came to know, understood' },
    ],
    themes: ['revelation', 'grace', 'recognition', 'truth'],
    difficulty: 'intermediate',
    famousVerse: true,
  },

  // -------------------------------------------------------------------------
  // VERSE 4.3 - Indra Excels
  // -------------------------------------------------------------------------
  {
    upanishad: 'kena',
    section: 4,
    verse: 3,
    sanskrit: `तस्माद्वा एते देवा अतितरामिवान्यान्देवान्यदग्निर्वायुरिन्द्रस्ते ह्येनन्नेदिष्ठं पस्पर्शुस्ते ह्येनत्प्रथमो विदांचकार ब्रह्मेति ॥`,
    transliteration: `tasmād vā ete devā atitarām ivānyān devān yad agnir vāyur indras te hy enan nediṣṭhaṁ pasparśus te hy enat prathamo vidāṁcakāra brahmeti ||`,
    translation:
      'Therefore these gods — Agni, Vayu, and Indra — surpass the other gods, for they touched It nearest; they first came to know It as Brahman.',
    explanation: {
      simple:
        'Fire, Wind, and Indra became the greatest gods because they had the closest encounter with Brahman. Though they initially failed to recognize it, they were the ones who "touched" it. Indra, who received Uma\'s teaching, was first to understand.',
      deeper:
        'Direct encounter with truth — even when we don\'t immediately understand — transforms us. The gods who struggled with the Yaksha were closer to reality than those who never tried. And Indra\'s openness to grace (Uma) completed the understanding.',
    },
    practicalApplication:
      'Don\'t be discouraged by initial failure in your spiritual inquiry. The struggle itself brings you closer. Stay open to grace, and understanding will dawn.',
    keyTerms: [
      { term: 'Atitarām', meaning: 'Surpass, excel' },
      { term: 'Nediṣṭham', meaning: 'Nearest, most closely' },
      { term: 'Pasparśuḥ', meaning: 'They touched' },
      { term: 'Prathamo', meaning: 'First' },
    ],
    themes: ['proximity', 'excellence', 'direct-encounter', 'transformation'],
    difficulty: 'intermediate',
  },

  // -------------------------------------------------------------------------
  // VERSE 4.4 - Indra Supreme
  // -------------------------------------------------------------------------
  {
    upanishad: 'kena',
    section: 4,
    verse: 4,
    sanskrit: `तस्माद्वा इन्द्रोऽतितरामिवान्यान्देवान् स ह्येनन्नेदिष्ठं पस्पर्श स ह्येनत्प्रथमो विदांचकार ब्रह्मेति ॥`,
    transliteration: `tasmād vā indro 'titarām ivānyān devān sa hy enan nediṣṭhaṁ pasparśa sa hy enat prathamo vidāṁcakāra brahmeti ||`,
    translation:
      'Therefore Indra surpasses the other gods most of all, for he touched It nearest; he first came to know It as Brahman.',
    explanation: {
      simple:
        'Among all the gods, Indra stands highest because he came closest and was first to truly understand. He stayed in the presence of the mystery when others turned back, and he received the teaching of Uma.',
      deeper:
        'The mind (Indra), when purified of its grasping tendency, is the instrument of self-knowledge. While it cannot "capture" Brahman, it can recognize that its own source is Brahman. This recognition happens through grace.',
    },
    practicalApplication:
      'Your mind may seem like an obstacle to spiritual realization, but it can also be the very instrument of awakening. A humble, receptive mind that stays present is what finally receives the truth.',
    themes: ['supremacy', 'mind', 'first-understanding', 'recognition'],
    difficulty: 'intermediate',
  },

  // -------------------------------------------------------------------------
  // VERSE 4.5 - The Teaching About Brahman (The Lightning Flash)
  // -------------------------------------------------------------------------
  {
    upanishad: 'kena',
    section: 4,
    verse: 5,
    sanskrit: `तस्यैष आदेशो यदेतद्विद्युतो व्यद्युतदा इतीन् न्यमीमिषदा इत्यधिदैवतम् ॥`,
    transliteration: `tasyaiṣa ādeśo yad etad vidyuto vyadyutadā itīn nyamīmiṣadā ity adhidaivatam ||`,
    translation:
      'This is the teaching about It: It is like a lightning flash — it appears for a moment and makes you blink "Ah!" — this is with reference to the divine sphere.',
    explanation: {
      simple:
        'How to understand Brahman? The Upanishad offers a vivid image: it\'s like lightning suddenly illuminating the darkness. For a split second, everything is revealed, and you can only gasp "Ah!" This describes glimpses of the divine in nature.',
      deeper:
        'The lightning metaphor captures the sudden, self-luminous, and brief nature of spiritual insight. You can\'t hold onto it or possess it — it flashes and vanishes. Yet in that flash, everything is illuminated. The "Ah!" (Ā) represents the natural response of wonder.',
    },
    practicalApplication:
      'Have you had moments when reality suddenly seemed vivid and alive? A flash of wonder at existence itself? These "lightning moments" are glimpses of Brahman. Don\'t try to hold them — let them illuminate and pass.',
    keyTerms: [
      { term: 'Ādeśa', meaning: 'Teaching, instruction, illustration' },
      { term: 'Vidyut', meaning: 'Lightning' },
      { term: 'Vyadyutat', meaning: 'Flashed' },
      { term: 'Nyamīmiṣat', meaning: 'Made one blink, caused to close the eyes' },
    ],
    themes: ['illustration', 'lightning', 'flash', 'wonder'],
    difficulty: 'intermediate',
    famousVerse: true,
  },

  // -------------------------------------------------------------------------
  // VERSE 4.6 - The Teaching About the Mind
  // -------------------------------------------------------------------------
  {
    upanishad: 'kena',
    section: 4,
    verse: 6,
    sanskrit: `अथाध्यात्मं यदेतद्गच्छतीव च मनोऽनेन चैतदुपस्मरत्यभीक्ष्णं सङ्कल्पः ॥`,
    transliteration: `athādhyātmaṁ yad etad gacchatīva ca mano 'nena caitad upasmaraty abhīkṣṇaṁ saṅkalpaḥ ||`,
    translation:
      'Now with reference to the self: It is that toward which the mind seems to move, and by which the mind repeatedly remembers — that intention or will (to know).',
    explanation: {
      simple:
        'In the inner realm too, Brahman can be glimpsed — it\'s what the mind is always moving toward, what we keep trying to remember or understand. That persistent pull toward knowing your own source is itself a pointer to Brahman.',
      deeper:
        'The mind\'s movement toward truth, its repeated attempts to grasp reality, its will to know — all these are Brahman manifesting as the drive for self-knowledge. The seeker is not separate from what\'s sought.',
    },
    practicalApplication:
      'Your desire to understand, your curiosity about consciousness, your longing for truth — where does that come from? The very impulse to seek is consciousness seeking itself. You\'re already connected to what you seek.',
    keyTerms: [
      { term: 'Adhyātmam', meaning: 'With reference to the self, in the inner realm' },
      { term: 'Gacchati iva', meaning: 'Seems to go toward' },
      { term: 'Upasmarati', meaning: 'Remembers, recalls' },
      { term: 'Saṅkalpa', meaning: 'Intention, will, thought' },
    ],
    themes: ['inner-realm', 'mind', 'seeking', 'remembrance'],
    difficulty: 'intermediate',
  },

  // -------------------------------------------------------------------------
  // VERSE 4.7 - Brahman Called "Tadvana"
  // -------------------------------------------------------------------------
  {
    upanishad: 'kena',
    section: 4,
    verse: 7,
    sanskrit: `तद्ध तद्वनं नाम तद्वनमित्युपासितव्यं स य एतदेवं वेदाभि हैनं सर्वाणि भूतानि संवाञ्छन्ति ॥`,
    transliteration: `tad dha tad-vanam nāma tad-vanam ity upāsitavyaṁ sa ya etad evaṁ vedābhi hainaṁ sarvāṇi bhūtāni saṁvāñchanti ||`,
    translation:
      'Brahman is called "Tadvana" — "the adorable" or "that toward which all things yearn." It should be meditated upon as Tadvana. One who knows It thus — all beings yearn for that person.',
    explanation: {
      simple:
        'Brahman has a name: "Tadvana" — the universally beloved, the one everything longs for. When you realize Brahman, you become like Brahman — all beings feel drawn to you because they sense the presence they\'re all unconsciously seeking.',
      deeper:
        '"Tadvana" can mean "adorable" (from √van, to desire/worship) or "that forest" (tad + vana, perhaps the forest of reality). The realized being becomes a magnet because they embody what everyone seeks. Unity attracts; separation repels.',
    },
    practicalApplication:
      'Notice how you\'re drawn to some people, places, or moments. That pull is recognizing something true. When you rest in your own being fully, others sense it. Authentic presence is magnetic.',
    keyTerms: [
      { term: 'Tadvana', meaning: 'The adorable, object of all longing' },
      { term: 'Upāsitavyam', meaning: 'To be meditated upon' },
      { term: 'Saṁvāñchanti', meaning: 'They yearn for, they long for' },
    ],
    themes: ['longing', 'magnetism', 'beloved', 'meditation'],
    difficulty: 'intermediate',
  },

  // -------------------------------------------------------------------------
  // VERSE 4.8 - Student Requests the Secret Doctrine
  // -------------------------------------------------------------------------
  {
    upanishad: 'kena',
    section: 4,
    verse: 8,
    sanskrit: `उपनिषदं भो ब्रूहीत्युक्ता त उपनिषद् ब्राह्मीं वाव त उपनिषदमब्रूमेति ॥`,
    transliteration: `upaniṣadaṁ bho brūhīty uktā ta upaniṣad brāhmīṁ vāva ta upaniṣadam abrūmeti ||`,
    translation:
      '"Sir, teach me the Upanishad (the secret doctrine)!" "The Upanishad has been told to you. We have indeed taught you the Upanishad concerning Brahman."',
    explanation: {
      simple:
        'The student asks for the secret teaching. The teacher replies: it\'s already been given. The entire dialogue about Brahman being the power behind all powers, the story of the gods, Uma\'s revelation — this IS the Upanishad.',
      deeper:
        'There is no secret beyond what has been revealed. The teaching is not hidden in some final formula — it\'s been unfolding throughout. Often we want a "secret" beyond the teaching, not realizing the teaching itself is the secret.',
    },
    practicalApplication:
      'Are you waiting for some final secret that will unlock everything? Perhaps you\'ve already received what you need. The teaching is here. The mystery is present. What\'s required is recognition, not more information.',
    keyTerms: [
      { term: 'Upaniṣad', meaning: 'Secret doctrine, esoteric teaching' },
      { term: 'Brāhmī', meaning: 'Concerning Brahman' },
      { term: 'Abrūma', meaning: 'We have told, we have taught' },
    ],
    themes: ['secret-teaching', 'completeness', 'recognition', 'transmission'],
    difficulty: 'intermediate',
  },

  // -------------------------------------------------------------------------
  // VERSE 4.9 - The Foundation of the Teaching
  // -------------------------------------------------------------------------
  {
    upanishad: 'kena',
    section: 4,
    verse: 9,
    sanskrit: `तस्यै तपो दमः कर्मेति प्रतिष्ठा वेदाः सर्वाङ्गानि सत्यमायतनम् ॥`,
    transliteration: `tasyai tapo damaḥ karmeti pratiṣṭhā vedāḥ sarvāṅgāni satyam āyatanam ||`,
    translation:
      'Its foundation is austerity, self-control, and action. The Vedas are all its limbs. Truth is its abode.',
    explanation: {
      simple:
        'This knowledge rests on a practical foundation: tapas (discipline), dama (self-control), and karma (right action). It\'s supported by all Vedic wisdom, and its home is truth. Knowledge without practice is incomplete.',
      deeper:
        'The teaching comes full circle. Knowledge of Brahman isn\'t separate from ethical living — it rests on and expresses through discipline, mastery, and action in the world. Truth (satya) is both the means and the goal.',
    },
    practicalApplication:
      'Spiritual knowledge must be grounded in practice. Self-discipline, self-control, and engaged action are not obstacles to enlightenment — they\'re its foundation. Live truthfully, and the truth lives through you.',
    keyTerms: [
      { term: 'Tapas', meaning: 'Austerity, spiritual discipline' },
      { term: 'Dama', meaning: 'Self-control, mastery of senses' },
      { term: 'Karma', meaning: 'Action, righteous deeds' },
      { term: 'Pratiṣṭhā', meaning: 'Foundation, support' },
      { term: 'Satya', meaning: 'Truth' },
      { term: 'Āyatana', meaning: 'Abode, resting place' },
    ],
    themes: ['practice', 'foundation', 'truth', 'ethics'],
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
      sanskrit: 'प्रथम खण्ड',
      english: 'The Great Questions',
    },
    summary:
      'The opening section poses the fundamental question: what power enables the mind, senses, and life-force to function? The answer reveals Brahman as the "power behind all powers" — the Ear of the ear, the Mind of the mind, the Eye of the eye.',
    verses: verses.filter((v) => v.section === 1),
    isCurated: false,
  },
  {
    number: 2,
    name: {
      sanskrit: 'द्वितीय खण्ड',
      english: 'The Paradox of Knowing',
    },
    summary:
      'This section explores the paradox of knowing Brahman. Those who claim to know it don\'t; those who know they can\'t conceptually grasp it are closer to truth. True knowing transcends the known/unknown duality.',
    verses: verses.filter((v) => v.section === 2),
    isCurated: false,
  },
  {
    number: 3,
    name: {
      sanskrit: 'तृतीय खण्ड',
      english: 'The Story of the Gods and Brahman',
    },
    summary:
      'The famous allegorical story: after winning a battle, the gods become proud. Brahman appears as a mysterious Yaksha and humbles Agni (Fire) and Vayu (Wind), who cannot burn or move a single straw before It.',
    verses: verses.filter((v) => v.section === 3),
    isCurated: false,
  },
  {
    number: 4,
    name: {
      sanskrit: 'चतुर्थ खण्ड',
      english: 'Uma Reveals the Truth',
    },
    summary:
      'Uma (the Divine Mother) appears and reveals the truth to Indra: the Yaksha was Brahman, the source of the gods\' victory. The section concludes with the lightning metaphor and the practical foundation of this knowledge.',
    verses: verses.filter((v) => v.section === 4),
    isCurated: false,
  },
];

// =============================================================================
// MAIN EXPORT
// =============================================================================

export const kenaUpanishad: Upanishad = {
  id: 'kena',
  name: {
    sanskrit: 'केनोपनिषद्',
    english: 'Kena Upanishad',
    meaning: 'The Upanishad of "By Whom?"',
  },
  veda: 'sama',
  summary:
    'The Kena Upanishad explores what powers the mind and senses, revealing Brahman as the ultimate source that cannot be grasped by the very faculties it empowers. It contains the famous story of the gods being humbled by Brahman in the form of a Yaksha, and Uma (the Divine Mother) revealing the truth.',
  keyTeachings: [
    'Brahman is the power behind all powers — the "Ear of the ear, Mind of the mind"',
    'That which the mind cannot think but by which the mind thinks — that is Brahman',
    'Those who claim to know Brahman don\'t; true knowing transcends conceptual knowledge',
    'Our abilities are borrowed from Brahman; pride in personal power is ignorance',
    'Grace (represented by Uma) reveals what effort cannot achieve',
    'Knowledge of Brahman is grounded in discipline, self-control, and truthful action',
  ],
  totalVerses: 35,
  includedVerses: 35,
  sections,
  difficulty: 'intermediate',
};

export default kenaUpanishad;
