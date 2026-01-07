/**
 * Taittiriya Upanishad (तैत्तिरीयोपनिषद्)
 *
 * Famous for the five sheaths (pancha koshas), the graduation address
 * (Shiksha Valli), and the bliss teaching (Brahmananda Valli).
 *
 * From: Krishna Yajur Veda (Taittiriya Aranyaka)
 * Structure: 3 Vallis (sections), 31 anuvakas
 */

import { Upanishad, UpanishadVerse, UpanishadSection } from './types';

// =============================================================================
// SHIKSHA VALLI: THE TEACHING ON EDUCATION (12 verses)
// The famous graduation address and values for life
// =============================================================================

const shikshaValliVerses: UpanishadVerse[] = [
  {
    upanishad: 'taittiriya',
    section: 1,
    verse: 1,
    sanskrit: 'शं नो मित्रः शं वरुणः। शं नो भवत्वर्यमा। शं न इन्द्रो बृहस्पतिः। शं नो विष्णुरुरुक्रमः। नमो ब्रह्मणे। नमस्ते वायो। त्वमेव प्रत्यक्षं ब्रह्मासि। त्वामेव प्रत्यक्षं ब्रह्म वदिष्यामि। ऋतं वदिष्यामि। सत्यं वदिष्यामि।',
    transliteration: 'śaṃ no mitraḥ śaṃ varuṇaḥ | śaṃ no bhavatvaryamā | śaṃ na indro bṛhaspatiḥ | śaṃ no viṣṇururukramaḥ | namo brahmaṇe | namaste vāyo | tvameva pratyakṣaṃ brahmāsi | tvāmeva pratyakṣaṃ brahma vadiṣyāmi | ṛtaṃ vadiṣyāmi | satyaṃ vadiṣyāmi |',
    translation: 'May Mitra be bliss to us, may Varuna be bliss. May Aryaman be bliss to us. May Indra and Brihaspati be bliss. May Vishnu of vast strides be bliss. Salutations to Brahman. Salutations to Vayu. You alone are the visible Brahman. I shall declare You as the visible Brahman. I shall speak cosmic order. I shall speak truth.',
    explanation: {
      simple: 'The Upanishad opens with an invocation to the cosmic gods for blessings. It then declares that Vayu (air/life-breath) is the visible Brahman, and commits to speaking truth.',
      deeper: 'Air is the immediate, experienceable form of the Divine - we live by breath. The commitment to rita (cosmic order) and satya (truth) establishes the foundation for learning.',
    },
    practicalApplication: 'Begin any important undertaking with invocation and a commitment to truth. Let your words be aligned with cosmic order.',
    themes: ['invocation', 'Vayu', 'truth', 'cosmic order'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'taittiriya',
    section: 1,
    verse: 2,
    sanskrit: 'शीक्षां व्याख्यास्यामः। वर्णः स्वरः। मात्रा बलम्। साम सन्तानः। इत्युक्तः शीक्षाध्यायः॥',
    transliteration: 'śīkṣāṃ vyākhyāsyāmaḥ | varṇaḥ svaraḥ | mātrā balam | sāma santānaḥ | ityuktaḥ śīkṣādhyāyaḥ ||',
    translation: 'We shall explain phonetics: letters, accent, quantity, strength, modulation, and combination. Thus the chapter on phonetics.',
    explanation: {
      simple: 'This section teaches the six aspects of Vedic pronunciation. Proper recitation requires mastering letters, tones, duration, emphasis, melody, and flow.',
      deeper: 'Sound is sacred. The science of phonetics (Shiksha) ensures the mantras retain their power through precise transmission across generations.',
    },
    practicalApplication: 'Pay attention to how you speak sacred sounds. Pronunciation matters in mantra and prayer.',
    themes: ['phonetics', 'pronunciation', 'sacred sound'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'taittiriya',
    section: 1,
    verse: 3,
    sanskrit: 'सह नौ यशः। सह नौ ब्रह्मवर्चसम्। अथातः संहिताया उपनिषदं व्याख्यास्यामः। पञ्चस्वधिकरणेषु।',
    transliteration: 'saha nau yaśaḥ | saha nau brahmavarcasam | athātaḥ saṃhitāyā upaniṣadaṃ vyākhyāsyāmaḥ | pañcasvadhikaraṇeṣu |',
    translation: 'May we both attain fame together. May we both attain the radiance of Brahman together. Now we shall explain the hidden teaching of conjunctions, in five categories.',
    explanation: {
      simple: 'Teacher and student pray to achieve glory and spiritual radiance together. The teaching on conjunctions (sandhi) follows in five categories: cosmic, luminous, intellectual, generational, and personal.',
      deeper: 'Upanishadic learning is a joint venture between guru and shishya. Both grow together. The five sandhis reveal how different realms are connected.',
    },
    practicalApplication: 'True education is a shared journey. Both teacher and student benefit when learning happens.',
    themes: ['teacher-student', 'conjunctions', 'five categories'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'taittiriya',
    section: 1,
    verse: 4,
    sanskrit: 'यश्छन्दसामृषभो विश्वरूपः। छन्दोभ्योऽध्यमृतात्संबभूव। स मेन्द्रो मेधया स्पृणोतु। अमृतस्य देव धारणो भूयासम्। शरीरं मे विचर्षणम्। जिह्वा मे मधुमत्तमा। कर्णाभ्यां भूरि विश्रुवम्।',
    transliteration: 'yaśchandasāmṛṣabho viśvarūpaḥ | chandobhyo\'dhyamṛtātsaṃbabhūva | sa mendro medhayā spṛṇotu | amṛtasya deva dhāraṇo bhūyāsam | śarīraṃ me vicarṣaṇam | jihvā me madhumattamā | karṇābhyāṃ bhūri viśruvam |',
    translation: 'May Indra, the bull of the Vedas, all-formed, born from immortality beyond the meters, bless me with intelligence. O God, may I be a vessel of immortality. May my body be capable, my tongue most sweet, may I hear abundantly with my ears.',
    explanation: {
      simple: 'This is a prayer for intelligence, physical capability, sweet speech, and keen hearing - the faculties needed for Vedic study.',
      deeper: 'The student invokes Indra (representing supreme intelligence) to become a "vessel of immortality" - one who can receive and hold the nectar of wisdom.',
    },
    practicalApplication: 'Pray for the faculties you need to learn: intelligence, health, clear expression, and attentive listening.',
    themes: ['intelligence', 'faculties', 'prayer for learning'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'taittiriya',
    section: 1,
    verse: 5,
    sanskrit: 'ब्रह्मणः कोशोऽसि मेधया पिहितः। श्रुतं मे गोपाय।',
    transliteration: 'brahmaṇaḥ kośo\'si medhayā pihitaḥ | śrutaṃ me gopāya |',
    translation: 'You are the sheath of Brahman, covered by intelligence. Protect what I have heard.',
    explanation: {
      simple: 'The student is called a "sheath of Brahman" - a container for divine knowledge. The prayer asks that learned wisdom be preserved.',
      deeper: 'Each student is a repository of sacred knowledge. The intellect protects this knowledge from being lost.',
    },
    practicalApplication: 'You are a vessel for wisdom. Protect what you learn through practice and reflection.',
    themes: ['sheath', 'preservation', 'knowledge'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'taittiriya',
    section: 1,
    verse: 6,
    sanskrit: 'आवहन्ती वितन्वाना कुर्वाणा चीरमात्मनः। वासांसि मम गावश्च अन्नपाने च सर्वदा। ततो मे श्रियमावह। लोमशां पशुभिः सह स्वाहा।',
    transliteration: 'āvahantī vitanvānā kurvāṇā cīramātmanaḥ | vāsāṃsi mama gāvaśca annapāne ca sarvadā | tato me śriyamāvaha | lomaśāṃ paśubhiḥ saha svāhā |',
    translation: 'May Shri (prosperity) come to me, bringing, expanding, creating lasting wealth for myself - clothing, cows, food and drink always. Therefore bring me prosperity, wool and cattle. Svaha!',
    explanation: {
      simple: 'The student prays for material prosperity alongside spiritual knowledge - clothing, food, cattle (wealth). Spirituality does not mean poverty.',
      deeper: 'The Vedic worldview integrates material and spiritual well-being. Artha (wealth) is one of the four legitimate goals of life.',
    },
    practicalApplication: 'It is appropriate to pray for prosperity to support your spiritual practice. Material and spiritual are not opposed.',
    themes: ['prosperity', 'material needs', 'Shri', 'integration'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'taittiriya',
    section: 1,
    verse: 7,
    sanskrit: 'आ मायन्तु ब्रह्मचारिणः स्वाहा। वि मायन्तु ब्रह्मचारिणः स्वाहा। प्र मायन्तु ब्रह्मचारिणः स्वाहा। दमायन्तु ब्रह्मचारिणः स्वाहा। शमायन्तु ब्रह्मचारिणः स्वाहा॥',
    transliteration: 'ā māyantu brahmacāriṇaḥ svāhā | vi māyantu brahmacāriṇaḥ svāhā | pra māyantu brahmacāriṇaḥ svāhā | damāyantu brahmacāriṇaḥ svāhā | śamāyantu brahmacāriṇaḥ svāhā ||',
    translation: 'May students come to me. May students come abundantly. May students come forward. May students have self-control. May students have peace.',
    explanation: {
      simple: 'A teacher\'s prayer for students: may they come, may they be numerous, may they be eager, self-controlled, and peaceful.',
      deeper: 'The guru tradition depends on worthy students. This prayer acknowledges the teacher\'s need for disciples to whom knowledge can be transmitted.',
    },
    practicalApplication: 'Teachers need students as much as students need teachers. The tradition continues through this sacred relationship.',
    themes: ['students', 'teacher prayer', 'tradition'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'taittiriya',
    section: 1,
    verse: 8,
    sanskrit: 'ॐ भूर्भुवः स्वः। तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि। धियो यो नः प्रचोदयात्॥',
    transliteration: 'oṃ bhūrbhuvaḥ svaḥ | tatsaviturvareṇyaṃ bhargo devasya dhīmahi | dhiyo yo naḥ pracodayāt ||',
    translation: 'OM. Earth, Atmosphere, Heaven. We meditate on the excellent glory of the divine Sun. May He inspire our intellects.',
    explanation: {
      simple: 'This is the Gayatri Mantra, the most sacred Vedic prayer. It invokes Savitri (the Sun-god) to illuminate our minds.',
      deeper: 'The Gayatri is the essence of the Vedas. The three worlds (bhuh, bhuvah, svah) are invoked, and we ask the Divine Light to guide our understanding.',
    },
    practicalApplication: 'Recite the Gayatri daily at sunrise. It purifies the mind and awakens spiritual intelligence.',
    themes: ['Gayatri', 'Sun', 'illumination', 'intellect'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    upanishad: 'taittiriya',
    section: 1,
    verse: 9,
    sanskrit: 'ॐ इति ब्रह्म। ॐ इतीदं सर्वम्। ॐ इत्येतदनुकृतिर्ह स्म वा अप्यो श्रावयेत्याश्रावयन्ति। ॐ इति सामानि गायन्ति। ॐ शोमिति शस्त्राणि शंसन्ति। ॐ इत्यध्वर्युः प्रतिगरं प्रतिगृणाति। ॐ इति ब्रह्मा प्रसौति। ॐ इत्यग्निहोत्रमनुजानाति।',
    transliteration: 'oṃ iti brahma | oṃ itīdaṃ sarvam | oṃ ityetadanukṛtirha sma vā apyo śrāvayetyāśrāvayanti | oṃ iti sāmāni gāyanti | oṃ śomiti śastrāṇi śaṃsanti | oṃ ityadhvaryuḥ pratigaraṃ pratigṛṇāti | oṃ iti brahmā prasauti | oṃ ityagnihotramanujānāti |',
    translation: 'OM is Brahman. OM is all this. OM is used to show assent - when one says "recite," they respond with OM. The Sama songs are sung with OM. The hymns are recited with "OM SOM." The Adhvaryu priest responds with OM. The Brahma priest gives permission with OM. One permits the fire sacrifice with OM.',
    explanation: {
      simple: 'OM pervades all Vedic rituals. It is the sound of Brahman, the sound of agreement, the beginning and response in all sacred actions.',
      deeper: 'OM is the sonic form of absolute reality. All ritual, all affirmation, all sacred communication begins and ends with OM.',
    },
    practicalApplication: 'Let OM be your foundation. Begin and end practices with OM. It connects you to the source of all.',
    themes: ['OM', 'Brahman', 'ritual', 'affirmation'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'taittiriya',
    section: 1,
    verse: 10,
    sanskrit: 'ऋतं च स्वाध्यायप्रवचने च। सत्यं च स्वाध्यायप्रवचने च। तपश्च स्वाध्यायप्रवचने च। दमश्च स्वाध्यायप्रवचने च। शमश्च स्वाध्यायप्रवचने च। अग्नयश्च स्वाध्यायप्रवचने च। अग्निहोत्रं च स्वाध्यायप्रवचने च। अतिथयश्च स्वाध्यायप्रवचने च। मानुषं च स्वाध्यायप्रवचने च। प्रजा च स्वाध्यायप्रवचने च। प्रजनश्च स्वाध्यायप्रवचने च। प्रजातिश्च स्वाध्यायप्रवचने च।',
    transliteration: 'ṛtaṃ ca svādhyāyapravacane ca | satyaṃ ca svādhyāyapravacane ca | tapaśca svādhyāyapravacane ca | damaśca svādhyāyapravacane ca | śamaśca svādhyāyapravacane ca | agnayaśca svādhyāyapravacane ca | agnihotraṃ ca svādhyāyapravacane ca | atithayaśca svādhyāyapravacane ca | mānuṣaṃ ca svādhyāyapravacane ca | prajā ca svādhyāyapravacane ca | prajanaśca svādhyāyapravacane ca | prajātiśca svādhyāyapravacane ca |',
    translation: 'Cosmic order - and the study and teaching of the Vedas. Truth - and study and teaching. Austerity - and study and teaching. Self-control - and study and teaching. Peace - and study and teaching. Sacred fires - and study and teaching. Fire sacrifice - and study and teaching. Guests - and study and teaching. Humanity - and study and teaching. Children - and study and teaching. Procreation - and study and teaching. Grandchildren - and study and teaching.',
    explanation: {
      simple: 'Various sages emphasize different values, but all agree on one thing: the study and teaching of the Vedas. This refrain connects all virtues to learning.',
      deeper: 'Svadhyaya (self-study) and pravachana (teaching) are the constant thread. Whatever else one values, Vedic learning remains central.',
    },
    practicalApplication: 'Whatever your other duties, maintain the habit of study and teaching. This is the thread that connects all virtue.',
    themes: ['svadhyaya', 'teaching', 'virtues', 'consensus'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'taittiriya',
    section: 1,
    verse: 11,
    sanskrit: 'वेदमनूच्याचार्योऽन्तेवासिनमनुशास्ति। सत्यं वद। धर्मं चर। स्वाध्यायान्मा प्रमदः। आचार्याय प्रियं धनमाहृत्य प्रजातन्तुं मा व्यवच्छेत्सीः। सत्यान्न प्रमदितव्यम्। धर्मान्न प्रमदितव्यम्। कुशलान्न प्रमदितव्यम्। भूत्यै न प्रमदितव्यम्। स्वाध्यायप्रवचनाभ्यां न प्रमदितव्यम्।',
    transliteration: 'vedamanūcyācāryo\'ntevāsinamanusāsti | satyaṃ vada | dharmaṃ cara | svādhyāyānmā pramadaḥ | ācāryāya priyaṃ dhanamāhṛtya prajātantuṃ mā vyavacchetsīḥ | satyānna pramaditavyam | dharmānna pramaditavyam | kuśalānna pramaditavyam | bhūtyai na pramaditavyam | svādhyāyapravacanābhyāṃ na pramaditavyam |',
    translation: 'Having taught the Vedas, the teacher instructs the student: Speak the truth. Practice dharma. Do not neglect self-study. Having brought the teacher his dear fee, do not cut off the line of descendants. Do not neglect truth. Do not neglect dharma. Do not neglect welfare. Do not neglect prosperity. Do not neglect study and teaching.',
    explanation: {
      simple: 'This is the famous graduation address. The teacher gives final instructions: be truthful, be righteous, keep studying, continue the family line, and maintain all duties.',
      deeper: 'The convocation address balances spiritual and worldly duties. Truth and dharma lead, but family, prosperity, and ongoing learning are also emphasized.',
    },
    practicalApplication: 'Integrate these instructions into daily life: speak truth, practice dharma, keep learning, maintain family, pursue prosperity wisely.',
    themes: ['graduation', 'truth', 'dharma', 'instructions'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    upanishad: 'taittiriya',
    section: 1,
    verse: 12,
    sanskrit: 'देवपितृकार्याभ्यां न प्रमदितव्यम्। मातृदेवो भव। पितृदेवो भव। आचार्यदेवो भव। अतिथिदेवो भव। यान्यनवद्यानि कर्माणि तानि सेवितव्यानि नो इतराणि। यान्यस्माकं सुचरितानि तानि त्वयोपास्यानि नो इतराणि।',
    transliteration: 'devapitṛkāryābhyāṃ na pramaditavyam | mātṛdevo bhava | pitṛdevo bhava | ācāryadevo bhava | atithidevo bhava | yānyanavadyāni karmāṇi tāni sevitavyāni no itarāṇi | yānyasmākaṃ sucaritāni tāni tvayopāsyāni no itarāṇi |',
    translation: 'Do not neglect duties to gods and ancestors. Let your mother be your god. Let your father be your god. Let your teacher be your god. Let your guest be your god. Only those actions that are blameless should be performed, not others. Only our good conducts should you follow, not others.',
    explanation: {
      simple: 'Four people are to be treated as divine: mother, father, teacher, and guest. Follow only blameless actions and the good examples of your teachers.',
      deeper: 'The famous "Matri devo bhava" teaching establishes the hierarchy of reverence. The visible gods (parents, teacher, guest) represent the invisible Divine.',
    },
    practicalApplication: 'Treat your mother, father, teacher, and guests with the reverence due to the Divine. They are God\'s representatives.',
    themes: ['mother', 'father', 'teacher', 'guest', 'god'],
    difficulty: 'beginner',
    famousVerse: true,
  },
];

// =============================================================================
// BRAHMANANDA VALLI: THE BLISS OF BRAHMAN (9 verses)
// The teaching on the five sheaths and degrees of bliss
// =============================================================================

const brahmanandaValliVerses: UpanishadVerse[] = [
  {
    upanishad: 'taittiriya',
    section: 2,
    verse: 1,
    sanskrit: 'ॐ ब्रह्मविदाप्नोति परम्। तदेषाभ्युक्ता। सत्यं ज्ञानमनन्तं ब्रह्म। यो वेद निहितं गुहायां परमे व्योमन्। सोऽश्नुते सर्वान्कामान्सह ब्रह्मणा विपश्चितेति।',
    transliteration: 'oṃ brahmavidāpnoti param | tadeṣābhyuktā | satyaṃ jñānamanantaṃ brahma | yo veda nihitaṃ guhāyāṃ parame vyoman | so\'śnute sarvānkāmānsaha brahmaṇā vipaściteti |',
    translation: 'OM. The knower of Brahman attains the Supreme. On this, there is the verse: Brahman is Truth, Knowledge, and Infinite. One who knows It as hidden in the cave of the heart, in the supreme space, realizes all desires together with Brahman, the wise one.',
    explanation: {
      simple: 'The central definition: Brahman is sat (truth/reality), jnana (consciousness/knowledge), and ananta (infinite). It is hidden in the heart and grants all wishes.',
      deeper: 'This is one of the most important Upanishadic definitions. Brahman has three essential attributes: real existence, pure consciousness, and infinitude. Knowing this brings ultimate fulfillment.',
    },
    practicalApplication: 'Seek what is true, conscious, and infinite - that is Brahman in your own heart. All desires are fulfilled in that realization.',
    themes: ['Brahman', 'satyam jnanam anantam', 'cave of heart', 'fulfillment'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'taittiriya',
    section: 2,
    verse: 2,
    sanskrit: 'तस्माद्वा एतस्मादात्मन आकाशः सम्भूतः। आकाशाद्वायुः। वायोरग्निः। अग्नेरापः। अद्भ्यः पृथिवी। पृथिव्या ओषधयः। ओषधीभ्योऽन्नम्। अन्नात्पुरुषः।',
    transliteration: 'tasmādvā etasmādātmana ākāśaḥ sambhūtaḥ | ākāśādvāyuḥ | vāyoragniḥ | agnerāpaḥ | adbhyaḥ pṛthivī | pṛthivyā oṣadhayaḥ | oṣadhībhyo\'nnam | annātpuruṣaḥ |',
    translation: 'From this Self arose space. From space arose air. From air arose fire. From fire arose water. From water arose earth. From earth arose plants. From plants arose food. From food arose the person.',
    explanation: {
      simple: 'The order of creation: from the Self, the five elements emerge in sequence (space→air→fire→water→earth), then plants, food, and finally the human being.',
      deeper: 'This is the tattva evolution: from the subtle (Atman) to the gross (physical body). Each level emerges from the previous, with consciousness as the ultimate source.',
    },
    practicalApplication: 'Trace your body back through food, plants, earth, water, fire, air, space - all the way to the Self. You are cosmic.',
    themes: ['creation', 'elements', 'evolution', 'Self as source'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'taittiriya',
    section: 2,
    verse: 3,
    sanskrit: 'स वा एष पुरुषोऽन्नरसमयः। तस्येदमेव शिरः। अयं दक्षिणः पक्षः। अयमुत्तरः पक्षः। अयमात्मा। इदं पुच्छं प्रतिष्ठा।',
    transliteration: 'sa vā eṣa puruṣo\'nnarasamayaḥ | tasyedameva śiraḥ | ayaṃ dakṣiṇaḥ pakṣaḥ | ayamuttaraḥ pakṣaḥ | ayamātmā | idaṃ pucchaṃ pratiṣṭhā |',
    translation: 'This person is made of the essence of food. This indeed is its head. This is the right side. This is the left side. This is the self (trunk). This is the tail, the foundation.',
    explanation: {
      simple: 'The first sheath (kosha) is Annamaya - made of food. The physical body is shaped like a bird with head, two wings, trunk, and tail.',
      deeper: 'The body is literally made of food. The five-part bird image is used for each kosha: head (primary), two wings (supporting), trunk (core), tail (foundation).',
    },
    practicalApplication: 'Recognize that your physical body is made of and sustained by food. Treat food as sacred - it becomes you.',
    themes: ['Annamaya kosha', 'food body', 'physical', 'bird image'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'taittiriya',
    section: 2,
    verse: 4,
    sanskrit: 'तस्माद्वा एतस्मादन्नरसमयात्। अन्योऽन्तर आत्मा प्राणमयः। तेनैष पूर्णः। स वा एष पुरुषविध एव। तस्य पुरुषविधताम्। अन्वयं पुरुषविधः। तस्य प्राण एव शिरः। व्यानो दक्षिणः पक्षः। अपान उत्तरः पक्षः। आकाश आत्मा। पृथिवी पुच्छं प्रतिष्ठा।',
    transliteration: 'tasmādvā etasmādannarasamayāt | anyo\'ntara ātmā prāṇamayaḥ | tenaiṣa pūrṇaḥ | sa vā eṣa puruṣavidha eva | tasya puruṣavidhatām | anvayaṃ puruṣavidhaḥ | tasya prāṇa eva śiraḥ | vyāno dakṣiṇaḥ pakṣaḥ | apāna uttaraḥ pakṣaḥ | ākāśa ātmā | pṛthivī pucchaṃ pratiṣṭhā |',
    translation: 'Different from and within this food sheath is another inner self made of vital breath. By that, this is filled. This also has the form of a person. Following the human form of that, this also is in human form. Of this, Prana is the head. Vyana is the right wing. Apana is the left wing. Space is the trunk. Earth is the tail, the foundation.',
    explanation: {
      simple: 'Inside the food body is the Pranamaya kosha - the energy body made of life-force. The five pranas form its parts.',
      deeper: 'The vital sheath fills and animates the physical body. Prana leads (head), Vyana and Apana are the balancing wings, space and earth provide context.',
    },
    practicalApplication: 'Beyond the physical body is your energy body. Work with breath (pranayama) to strengthen this vital sheath.',
    themes: ['Pranamaya kosha', 'vital body', 'prana', 'energy'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'taittiriya',
    section: 2,
    verse: 5,
    sanskrit: 'तस्माद्वा एतस्मात्प्राणमयात्। अन्योऽन्तर आत्मा मनोमयः। तेनैष पूर्णः। स वा एष पुरुषविध एव। तस्य पुरुषविधताम्। अन्वयं पुरुषविधः। तस्य यजुरेव शिरः। ऋग्दक्षिणः पक्षः। सामोत्तरः पक्षः। आदेश आत्मा। अथर्वाङ्गिरसः पुच्छं प्रतिष्ठा।',
    transliteration: 'tasmādvā etasmātprāṇamayāt | anyo\'ntara ātmā manomayaḥ | tenaiṣa pūrṇaḥ | sa vā eṣa puruṣavidha eva | tasya puruṣavidhatām | anvayaṃ puruṣavidhaḥ | tasya yajureva śiraḥ | ṛgdakṣiṇaḥ pakṣaḥ | sāmottaraḥ pakṣaḥ | ādeśa ātmā | atharvāṅgirasaḥ pucchaṃ pratiṣṭhā |',
    translation: 'Different from and within this vital sheath is another inner self made of mind. By that, this is filled. This also has human form. The Yajur Veda is its head. The Rig Veda is the right wing. The Sama Veda is the left wing. Instructions are the trunk. The Atharvangirasa is the tail, the foundation.',
    explanation: {
      simple: 'Inside the energy body is the Manomaya kosha - the mental body. Its parts are the four Vedas, showing that mind is structured by sacred knowledge.',
      deeper: 'The mental sheath is composed of the Vedas - showing that our thoughts are shaped by the wisdom we absorb. The mind is a product of what we learn.',
    },
    practicalApplication: 'Your mind is shaped by what you study. Fill it with wisdom (the Vedas) rather than trivial content.',
    themes: ['Manomaya kosha', 'mental body', 'mind', 'Vedas'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'taittiriya',
    section: 2,
    verse: 6,
    sanskrit: 'तस्माद्वा एतस्मान्मनोमयात्। अन्योऽन्तर आत्मा विज्ञानमयः। तेनैष पूर्णः। स वा एष पुरुषविध एव। तस्य पुरुषविधताम्। अन्वयं पुरुषविधः। तस्य श्रद्धैव शिरः। ऋतं दक्षिणः पक्षः। सत्यमुत्तरः पक्षः। योग आत्मा। महः पुच्छं प्रतिष्ठा।',
    transliteration: 'tasmādvā etasmānmanomayāt | anyo\'ntara ātmā vijñānamayaḥ | tenaiṣa pūrṇaḥ | sa vā eṣa puruṣavidha eva | tasya puruṣavidhatām | anvayaṃ puruṣavidhaḥ | tasya śraddhaiva śiraḥ | ṛtaṃ dakṣiṇaḥ pakṣaḥ | satyamuttaraḥ pakṣaḥ | yoga ātmā | mahaḥ pucchaṃ pratiṣṭhā |',
    translation: 'Different from and within this mental sheath is another inner self made of intellect/wisdom. By that, this is filled. This also has human form. Faith is its head. Cosmic order is the right wing. Truth is the left wing. Yoga is the trunk. The great (Mahat) is the tail, the foundation.',
    explanation: {
      simple: 'Inside the mental body is the Vijnanamaya kosha - the wisdom body. Its components are faith, cosmic order, truth, yoga, and the cosmic intelligence (Mahat).',
      deeper: 'The intellectual sheath operates through discrimination (viveka). It is supported by faith (shraddha), aligned with cosmic order (rita) and truth (satya), united through yoga.',
    },
    practicalApplication: 'Cultivate wisdom through faith, alignment with truth, and the practice of yoga. This develops the vijnanamaya kosha.',
    themes: ['Vijnanamaya kosha', 'wisdom body', 'intellect', 'discrimination'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'taittiriya',
    section: 2,
    verse: 7,
    sanskrit: 'तस्माद्वा एतस्माद्विज्ञानमयात्। अन्योऽन्तर आत्मानन्दमयः। तेनैष पूर्णः। स वा एष पुरुषविध एव। तस्य पुरुषविधताम्। अन्वयं पुरुषविधः। तस्य प्रियमेव शिरः। मोदो दक्षिणः पक्षः। प्रमोद उत्तरः पक्षः। आनन्द आत्मा। ब्रह्म पुच्छं प्रतिष्ठा।',
    transliteration: 'tasmādvā etasmādvijñānamayāt | anyo\'ntara ātmānandamayaḥ | tenaiṣa pūrṇaḥ | sa vā eṣa puruṣavidha eva | tasya puruṣavidhatām | anvayaṃ puruṣavidhaḥ | tasya priyameva śiraḥ | modo dakṣiṇaḥ pakṣaḥ | pramoda uttaraḥ pakṣaḥ | ānanda ātmā | brahma pucchaṃ pratiṣṭhā |',
    translation: 'Different from and within this wisdom sheath is another inner self made of bliss. By that, this is filled. This also has human form. Joy (priya) is its head. Delight (moda) is the right wing. Great delight (pramoda) is the left wing. Bliss (ananda) is the trunk. Brahman is the tail, the foundation.',
    explanation: {
      simple: 'The innermost sheath is Anandamaya kosha - the bliss body. It consists of degrees of joy, with Brahman as its foundation.',
      deeper: 'Priya (pleasure of anticipation), moda (pleasure of possession), and pramoda (pleasure of enjoyment) are steps leading to ananda (pure bliss), grounded in Brahman.',
    },
    practicalApplication: 'At your core, you are bliss. The five sheaths are coverings. Remove them through inquiry to experience your blissful nature.',
    themes: ['Anandamaya kosha', 'bliss body', 'joy', 'Brahman foundation'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'taittiriya',
    section: 2,
    verse: 8,
    sanskrit: 'असन्नेव स भवति। असद्ब्रह्मेति वेद चेत्। अस्ति ब्रह्मेति चेद्वेद। सन्तमेनं ततो विदुरिति।',
    transliteration: 'asanneva sa bhavati | asadbrahmeti veda cet | asti brahmeti cedveda | santamenaṃ tato viduriti |',
    translation: 'One becomes nonexistent if one knows Brahman as nonexistent. If one knows "Brahman exists," then by that, they know him as existent.',
    explanation: {
      simple: 'If you believe Brahman does not exist, you become as nothing. If you know Brahman exists, you are established in existence.',
      deeper: 'Our understanding of reality shapes our reality. Denial of Brahman leads to spiritual death; affirmation leads to fullness of being.',
    },
    practicalApplication: 'Affirm the existence of the Divine. This affirmation establishes you in reality rather than illusion.',
    themes: ['existence', 'nonexistence', 'belief', 'reality'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'taittiriya',
    section: 2,
    verse: 9,
    sanskrit: 'आनन्दो ब्रह्मेति व्यजानात्। आनन्दाध्येव खल्विमानि भूतानि जायन्ते। आनन्देन जातानि जीवन्ति। आनन्दं प्रयन्त्यभिसंविशन्तीति।',
    transliteration: 'ānando brahmeti vyajānāt | ānandādhyeva khalvimāni bhūtāni jāyante | ānandena jātāni jīvanti | ānandaṃ prayantyabhisaṃviśantīti |',
    translation: 'He knew: Bliss is Brahman. From bliss alone these beings are born. By bliss, once born, they live. Into bliss they go and merge upon departing.',
    explanation: {
      simple: 'Brahman is ananda (bliss). All beings emerge from bliss, are sustained by bliss, and return to bliss. Bliss is the ground of existence.',
      deeper: 'This is one of the most important declarations: Anando Brahma - Brahman IS bliss. Not that Brahman HAS bliss, but IS bliss itself.',
    },
    practicalApplication: 'You come from bliss, live by bliss, and return to bliss. Joy is not something to find - it is your source and destination.',
    themes: ['ananda', 'Brahman', 'source', 'sustenance', 'return'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
];

// =============================================================================
// BHRIGU VALLI: BHRIGU'S INQUIRY (10 verses)
// The story of Bhrigu's progressive realization
// =============================================================================

const bhriguValliVerses: UpanishadVerse[] = [
  {
    upanishad: 'taittiriya',
    section: 3,
    verse: 1,
    sanskrit: 'भृगुर्वै वारुणिः। वरुणं पितरमुपससार। अधीहि भगवो ब्रह्मेति। तस्मा एतत्प्रोवाच। अन्नं प्राणं चक्षुः श्रोत्रं मनो वाचमिति। तं होवाच। यतो वा इमानि भूतानि जायन्ते। येन जातानि जीवन्ति। यत्प्रयन्त्यभिसंविशन्ति। तद्विजिज्ञासस्व। तद्ब्रह्मेति।',
    transliteration: 'bhṛgurvai vāruṇiḥ | varuṇaṃ pitaramupasasāra | adhīhi bhagavo brahmeti | tasmā etatprovāca | annaṃ prāṇaṃ cakṣuḥ śrotraṃ mano vācamiti | taṃ hovāca | yato vā imāni bhūtāni jāyante | yena jātāni jīvanti | yatprayantyabhisaṃviśanti | tadvijijñāsasva | tadbrahmeti |',
    translation: 'Bhrigu, son of Varuna, approached his father Varuna and said: "Lord, teach me Brahman." He told him: "Food, vital breath, eye, ear, mind, speech." Then he said: "That from which these beings are born, by which they live once born, into which they enter upon departing - seek to know That. That is Brahman."',
    explanation: {
      simple: 'Bhrigu asks his father Varuna to teach him Brahman. Varuna gives him faculties to investigate and a definition: That which creates, sustains, and receives all beings - that is Brahman.',
      deeper: 'The father gives the son a method (tapas) and a criterion (origin-sustenance-dissolution). Bhrigu must discover for himself.',
    },
    practicalApplication: 'True teaching gives you the tools to discover, not just answers. Ask: What is the source, sustainer, and destination of all?',
    themes: ['Bhrigu', 'Varuna', 'inquiry', 'definition of Brahman'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'taittiriya',
    section: 3,
    verse: 2,
    sanskrit: 'स तपोऽतप्यत। स तपस्तप्त्वा। अन्नं ब्रह्मेति व्यजानात्। अन्नाद्ध्येव खल्विमानि भूतानि जायन्ते। अन्नेन जातानि जीवन्ति। अन्नं प्रयन्त्यभिसंविशन्तीति।',
    transliteration: 'sa tapo\'tapyata | sa tapastaptvā | annaṃ brahmeti vyajānāt | annāddhyeva khalvimāni bhūtāni jāyante | annena jātāni jīvanti | annaṃ prayantyabhisaṃviśantīti |',
    translation: 'He performed austerity. Having performed austerity, he understood: Food is Brahman. From food indeed these beings are born. By food they live once born. Into food they enter upon departing.',
    explanation: {
      simple: 'After meditation, Bhrigu first concludes that food is Brahman. All beings emerge from food, live by food, and become food upon death.',
      deeper: 'This corresponds to Annamaya kosha. It is a valid but incomplete understanding. The physical layer is real but not ultimate.',
    },
    practicalApplication: 'Honor food as sacred. It creates and sustains life. But recognize that food is only the outer layer of reality.',
    themes: ['food', 'tapas', 'first realization', 'Annamaya'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'taittiriya',
    section: 3,
    verse: 3,
    sanskrit: 'स तपोऽतप्यत। स तपस्तप्त्वा। प्राणो ब्रह्मेति व्यजानात्। प्राणाद्ध्येव खल्विमानि भूतानि जायन्ते। प्राणेन जातानि जीवन्ति। प्राणं प्रयन्त्यभिसंविशन्तीति।',
    transliteration: 'sa tapo\'tapyata | sa tapastaptvā | prāṇo brahmeti vyajānāt | prāṇāddhyeva khalvimāni bhūtāni jāyante | prāṇena jātāni jīvanti | prāṇaṃ prayantyabhisaṃviśantīti |',
    translation: 'He performed austerity. Having performed austerity, he understood: Prana is Brahman. From prana indeed these beings are born. By prana they live once born. Into prana they enter upon departing.',
    explanation: {
      simple: 'Deeper meditation reveals that vital breath (Prana) is Brahman. Life comes from prana, is sustained by prana, and returns to prana.',
      deeper: 'This corresponds to Pranamaya kosha. A subtler understanding than food, but still not the final truth.',
    },
    practicalApplication: 'Recognize prana as more fundamental than food. Without breath, food cannot sustain. But even prana is not the ultimate.',
    themes: ['prana', 'tapas', 'second realization', 'Pranamaya'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'taittiriya',
    section: 3,
    verse: 4,
    sanskrit: 'स तपोऽतप्यत। स तपस्तप्त्वा। मनो ब्रह्मेति व्यजानात्। मनसो ह्येव खल्विमानि भूतानि जायन्ते। मनसा जातानि जीवन्ति। मनः प्रयन्त्यभिसंविशन्तीति।',
    transliteration: 'sa tapo\'tapyata | sa tapastaptvā | mano brahmeti vyajānāt | manaso hyeva khalvimāni bhūtāni jāyante | manasā jātāni jīvanti | manaḥ prayantyabhisaṃviśantīti |',
    translation: 'He performed austerity. Having performed austerity, he understood: Mind is Brahman. From mind indeed these beings are born. By mind they live once born. Into mind they enter upon departing.',
    explanation: {
      simple: 'Further meditation reveals mind as Brahman. All creation, sustenance, and dissolution happen in mind.',
      deeper: 'This corresponds to Manomaya kosha. Mind is subtler than prana, but still an object of awareness, not awareness itself.',
    },
    practicalApplication: 'Mind shapes your reality. But the question remains: What is aware of mind?',
    themes: ['mind', 'tapas', 'third realization', 'Manomaya'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'taittiriya',
    section: 3,
    verse: 5,
    sanskrit: 'स तपोऽतप्यत। स तपस्तप्त्वा। विज्ञानं ब्रह्मेति व्यजानात्। विज्ञानाद्ध्येव खल्विमानि भूतानि जायन्ते। विज्ञानेन जातानि जीवन्ति। विज्ञानं प्रयन्त्यभिसंविशन्तीति।',
    transliteration: 'sa tapo\'tapyata | sa tapastaptvā | vijñānaṃ brahmeti vyajānāt | vijñānāddhyeva khalvimāni bhūtāni jāyante | vijñānena jātāni jīvanti | vijñānaṃ prayantyabhisaṃviśantīti |',
    translation: 'He performed austerity. Having performed austerity, he understood: Vijnana (intellect/wisdom) is Brahman. From vijnana indeed these beings are born. By vijnana they live once born. Into vijnana they enter upon departing.',
    explanation: {
      simple: 'Deeper still, Bhrigu realizes intellect/wisdom is Brahman. Understanding itself is the source of all.',
      deeper: 'This corresponds to Vijnanamaya kosha. Closer to the truth, but discriminating consciousness is still not pure consciousness.',
    },
    practicalApplication: 'Wisdom is closer to reality than mind. But even wisdom operates on something - what is that?',
    themes: ['vijnana', 'tapas', 'fourth realization', 'Vijnanamaya'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'taittiriya',
    section: 3,
    verse: 6,
    sanskrit: 'स तपोऽतप्यत। स तपस्तप्त्वा। आनन्दो ब्रह्मेति व्यजानात्। आनन्दाद्ध्येव खल्विमानि भूतानि जायन्ते। आनन्देन जातानि जीवन्ति। आनन्दं प्रयन्त्यभिसंविशन्तीति।',
    transliteration: 'sa tapo\'tapyata | sa tapastaptvā | ānando brahmeti vyajānāt | ānandāddhyeva khalvimāni bhūtāni jāyante | ānandena jātāni jīvanti | ānandaṃ prayantyabhisaṃviśantīti |',
    translation: 'He performed austerity. Having performed austerity, he understood: Ananda (bliss) is Brahman. From bliss indeed these beings are born. By bliss they live once born. Into bliss they enter upon departing.',
    explanation: {
      simple: 'Finally, Bhrigu realizes Ananda (bliss) is Brahman. This is the ultimate truth: everything comes from, lives by, and returns to bliss.',
      deeper: 'This corresponds to Anandamaya kosha. Bliss is the final answer, confirming the Brahmananda Valli teaching. Brahman IS bliss.',
    },
    practicalApplication: 'At the deepest level, reality is bliss. Your true nature is ananda. Meditate until you know this directly.',
    themes: ['ananda', 'tapas', 'final realization', 'Anandamaya', 'Brahman'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'taittiriya',
    section: 3,
    verse: 7,
    sanskrit: 'सैषा भार्गवी वारुणी विद्या। परमे व्योमन्प्रतिष्ठिता। स य एवं वेद प्रतितिष्ठति। अन्नवानन्नादो भवति। महान्भवति प्रजया पशुभिर्ब्रह्मवर्चसेन। महान्कीर्त्या॥',
    transliteration: 'saiṣā bhārgavī vāruṇī vidyā | parame vyomanpratiṣṭhitā | sa ya evaṃ veda pratitiṣṭhati | annavānanādo bhavati | mahānbhavati prajayā paśubhirbrahmanvarcasena | mahānkīrtyā ||',
    translation: 'This is the teaching of Bhrigu, son of Varuna, established in the supreme space. One who knows this becomes established. One becomes possessed of food and an eater of food. One becomes great in offspring, cattle, spiritual radiance, and fame.',
    explanation: {
      simple: 'This teaching from Bhrigu is established in the highest reality. The knower becomes established, prosperous, and great in all ways.',
      deeper: 'Knowledge of Brahman-as-bliss brings all blessings. Material and spiritual abundance flow from this realization.',
    },
    practicalApplication: 'True knowledge of Brahman does not impoverish - it enriches all aspects of life. Spiritual and material prosperity come together.',
    themes: ['Bhrigu vidya', 'establishment', 'prosperity', 'fullness'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'taittiriya',
    section: 3,
    verse: 8,
    sanskrit: 'अन्नं न निन्द्यात्। तद्व्रतम्। प्राणो वा अन्नम्। शरीरमन्नादम्। प्राणे शरीरं प्रतिष्ठितम्। शरीरे प्राणः प्रतिष्ठितः। तदेतदन्नमन्ने प्रतिष्ठितम्।',
    transliteration: 'annaṃ na nindyāt | tadvratam | prāṇo vā annam | śarīramannādam | prāṇe śarīraṃ pratiṣṭhitam | śarīre prāṇaḥ pratiṣṭhitaḥ | tadetadannamanne pratiṣṭhitam |',
    translation: 'One should not disparage food. That is the vow. Prana is food. The body is the eater of food. In prana, the body is established. In the body, prana is established. Thus food is established in food.',
    explanation: {
      simple: 'Never despise food - this is a sacred vow. Prana (breath) is itself food, and prana and body depend on each other. Everything is food to something.',
      deeper: 'The interdependence of all levels is shown. What eats is also eaten. The mutual support of prana and body illustrates cosmic reciprocity.',
    },
    practicalApplication: 'Respect all food. Recognize the sacred cycle: everything feeds everything. Give and receive with gratitude.',
    themes: ['food', 'respect', 'interdependence', 'vow'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'taittiriya',
    section: 3,
    verse: 9,
    sanskrit: 'अन्नं न परिचक्षीत। तद्व्रतम्। आपो वा अन्नम्। ज्योतिरन्नादम्। अप्सु ज्योतिः प्रतिष्ठितम्। ज्योतिष्यापः प्रतिष्ठिताः। तदेतदन्नमन्ने प्रतिष्ठितम्।',
    transliteration: 'annaṃ na paricakṣīta | tadvratam | āpo vā annam | jyotiranādam | apsu jyotiḥ pratiṣṭhitam | jyotiṣyāpaḥ pratiṣṭhitāḥ | tadetadannamanne pratiṣṭhitam |',
    translation: 'One should not reject food. That is the vow. Water is food. Fire is the eater of food. In water, fire is established. In fire, water is established. Thus food is established in food.',
    explanation: {
      simple: 'Never refuse food offered - this is a vow. Water is food; fire consumes water. Fire and water depend on each other. Again, everything feeds everything.',
      deeper: 'The elements themselves are in this food-eater relationship. Nothing exists independently; all is mutually supportive.',
    },
    practicalApplication: 'Do not refuse hospitality. See the sacred exchange in all giving and receiving.',
    themes: ['hospitality', 'water', 'fire', 'mutual support'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'taittiriya',
    section: 3,
    verse: 10,
    sanskrit: 'अन्नं बहु कुर्वीत। तद्व्रतम्। पृथिवी वा अन्नम्। आकाशोऽन्नादः। पृथिव्यामाकाशः प्रतिष्ठितः। आकाशे पृथिवी प्रतिष्ठिता। तदेतदन्नमन्ने प्रतिष्ठितम्। स य एतदन्नमन्ने प्रतिष्ठितं वेद प्रतितिष्ठति। अन्नवानन्नादो भवति। महान्भवति प्रजया पशुभिर्ब्रह्मवर्चसेन। महान्कीर्त्या॥',
    transliteration: 'annaṃ bahu kurvīta | tadvratam | pṛthivī vā annam | ākāśo\'nnādaḥ | pṛthivyāmākāśaḥ pratiṣṭhitaḥ | ākāśe pṛthivī pratiṣṭhitā | tadetadannamanne pratiṣṭhitam | sa ya etadannamanne pratiṣṭhitaṃ veda pratitiṣṭhati | annavānannādo bhavati | mahānbhavati prajayā paśubhirbrahmanvarcasena | mahānkīrtyā ||',
    translation: 'One should produce abundant food. That is the vow. Earth is food. Space is the eater of food. In earth, space is established. In space, earth is established. Thus food is established in food. One who knows this becomes established. One becomes possessed of food and an eater of food. One becomes great in offspring, cattle, spiritual radiance, and fame.',
    explanation: {
      simple: 'The final vow: produce abundant food. Earth and space support each other. Knowing this mutual support, one becomes established and prosperous.',
      deeper: 'The Upanishad concludes with the ethic of abundance. Create food generously. The universe is abundant; participate in that abundance.',
    },
    practicalApplication: 'Be productive and generous. Create abundance. The universe is not zero-sum; giving increases, not depletes.',
    themes: ['abundance', 'production', 'earth', 'space', 'prosperity'],
    difficulty: 'beginner',
    famousVerse: true,
  },
];

// =============================================================================
// SECTION DEFINITIONS
// =============================================================================

const shikshaValli: UpanishadSection = {
  number: 1,
  name: {
    sanskrit: 'शीक्षावल्ली',
    english: 'The Chapter on Education',
  },
  summary: 'Instructions for students on phonetics, the Gayatri mantra, and the famous graduation address: speak truth, practice dharma, honor mother-father-teacher-guest as gods.',
  verses: shikshaValliVerses,
  isCurated: false,
};

const brahmanandaValli: UpanishadSection = {
  number: 2,
  name: {
    sanskrit: 'ब्रह्मानन्दवल्ली',
    english: 'The Chapter on the Bliss of Brahman',
  },
  summary: 'The famous teaching on the five sheaths (pancha koshas): food, vital breath, mind, intellect, bliss - each more subtle than the previous. Brahman is defined as Satyam Jnanam Anantam (Truth, Knowledge, Infinite).',
  verses: brahmanandaValliVerses,
  isCurated: false,
};

const bhriguValli: UpanishadSection = {
  number: 3,
  name: {
    sanskrit: 'भृगुवल्ली',
    english: 'The Chapter of Bhrigu',
  },
  summary: 'Bhrigu\'s progressive inquiry through meditation: from food to prana to mind to wisdom to bliss. Each stage is valid but incomplete until reaching ananda as Brahman. The vows of respecting, not rejecting, and producing abundant food.',
  verses: bhriguValliVerses,
  isCurated: false,
};

// =============================================================================
// MAIN EXPORT
// =============================================================================

export const taittiriyaUpanishad: Upanishad = {
  id: 'taittiriya',
  name: {
    sanskrit: 'तैत्तिरीयोपनिषद्',
    english: 'Taittiriya Upanishad',
    meaning: 'The Upanishad of the Taittiriya School',
  },
  veda: 'yajur',
  summary: 'A profound teaching in three sections: the Shiksha Valli gives the famous graduation address with ethical instructions; the Brahmananda Valli reveals the five sheaths (koshas) and defines Brahman as truth-knowledge-infinity; the Bhrigu Valli shows progressive inquiry leading to the realization that bliss is Brahman.',
  keyTeachings: [
    'Matri devo bhava, Pitri devo bhava, Acharya devo bhava, Atithi devo bhava',
    'Satyam vada, Dharmam chara - Speak truth, Practice righteousness',
    'Brahman is Satyam Jnanam Anantam - Truth, Knowledge, Infinite',
    'Five koshas: Annamaya, Pranamaya, Manomaya, Vijnanamaya, Anandamaya',
    'Anando Brahma - Bliss is Brahman',
    'All beings arise from, live by, and return to bliss',
  ],
  totalVerses: 31,
  includedVerses: 31,
  sections: [shikshaValli, brahmanandaValli, bhriguValli],
  difficulty: 'intermediate',
};

export default taittiriyaUpanishad;
