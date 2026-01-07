/**
 * Prashna Upanishad (प्रश्नोपनिषद्)
 *
 * The "Upanishad of Questions" - six seekers approach sage Pippalada
 * with six profound questions about creation, life, the Self, and liberation.
 *
 * From: Atharva Veda
 * Structure: 6 Prashnas (Questions), 67 verses
 */

import { Upanishad, UpanishadVerse, UpanishadSection } from './types';

// =============================================================================
// PRASHNA 1: THE ORIGIN OF CREATION (11 verses)
// Question: From where are creatures born?
// =============================================================================

const prashna1Verses: UpanishadVerse[] = [
  {
    upanishad: 'prashna',
    section: 1,
    verse: 1,
    sanskrit: 'सुकेशा च भारद्वाजः शैब्यश्च सत्यकामः सौर्यायणी च गार्ग्यः कौसल्यश्चाश्वलायनो भार्गवो वैदर्भिः कबन्धी कात्यायनस्ते हैते ब्रह्मपरा ब्रह्मनिष्ठाः परं ब्रह्मान्वेषमाणा एष ह वै तत्सर्वं वक्ष्यतीति ते ह समित्पाणयो भगवन्तं पिप्पलादमुपसन्नाः॥',
    transliteration: 'sukeśā ca bhāradvājaḥ śaibyaśca satyakāmaḥ sauryāyaṇī ca gārgyaḥ kausalyaścāśvalāyano bhārgavo vaidarbhiḥ kabandhī kātyāyanaste haite brahmaparā brahmaniṣṭhāḥ paraṃ brahmānveṣamāṇā eṣa ha vai tatsarvaṃ vakṣyatīti te ha samitpāṇayo bhagavantaṃ pippalādamupasannāḥ ||',
    translation: 'Sukesha Bharadvaja, Satyakama Shibi, Sauryayani Gargya, Kausalya Ashvalayana, Bhargava Vaidarbhi, and Kabandhi Katyayana - these six seekers, devoted to Brahman and seeking the supreme, approached the venerable sage Pippalada with firewood in hand.',
    explanation: {
      simple: 'Six sincere seekers approach the great sage Pippalada. Coming with firewood in hand shows their humility and readiness to serve the teacher.',
      deeper: 'The tradition of approaching a guru with samit (sacred firewood) signifies the readiness to kindle the fire of knowledge through disciplined study.',
    },
    practicalApplication: 'Approach learning with humility and readiness to serve. True knowledge comes to those who are sincerely prepared.',
    themes: ['guru-shishya', 'seeking', 'humility'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'prashna',
    section: 1,
    verse: 2,
    sanskrit: 'तान्ह स ऋषिरुवाच भूय एव तपसा ब्रह्मचर्येण श्रद्धया संवत्सरं संवत्स्यथ यथाकामं प्रश्नान्पृच्छत यदि विज्ञास्यामः सर्वं ह वो वक्ष्याम इति॥',
    transliteration: 'tānha sa ṛṣiruvāca bhūya eva tapasā brahmacaryeṇa śraddhayā saṃvatsaraṃ saṃvatsyatha yathākāmaṃ praśnānpṛcchata yadi vijñāsyāmaḥ sarvaṃ ha vo vakṣyāma iti ||',
    translation: 'The sage said to them: "Stay with me for one more year, practicing austerity, celibacy, and faith. Then ask whatever questions you wish. If I know, I will tell you everything."',
    explanation: {
      simple: 'The sage does not answer immediately. He asks them to prepare for a year through spiritual practices. Only a prepared mind can receive deep knowledge.',
      deeper: 'Tapas (austerity), brahmacharya (self-discipline), and shraddha (faith) purify the mind, making it receptive to truth.',
    },
    practicalApplication: 'Prepare yourself before seeking answers. Spiritual knowledge requires a purified and disciplined mind.',
    themes: ['preparation', 'tapas', 'brahmacharya', 'shraddha'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'prashna',
    section: 1,
    verse: 3,
    sanskrit: 'अथ कबन्धी कात्यायन उपेत्य पप्रच्छ। भगवन्कुतो ह वा इमाः प्रजाः प्रजायन्त इति॥',
    transliteration: 'atha kabandhī kātyāyana upetya papraccha | bhagavankuto ha vā imāḥ prajāḥ prajāyanta iti ||',
    translation: 'Then Kabandhi Katyayana approached and asked: "Lord, from where are these creatures born?"',
    explanation: {
      simple: 'The first question is fundamental: Where do all beings come from? What is the origin of creation?',
      deeper: 'This is the perennial question of cosmology that all philosophies address. The answer reveals the nature of ultimate reality.',
    },
    practicalApplication: 'Ask the fundamental questions: Where do I come from? What is the source of existence?',
    themes: ['origin', 'creation', 'fundamental question'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'prashna',
    section: 1,
    verse: 4,
    sanskrit: 'तस्मै स होवाच। प्रजाकामो वै प्रजापतिः स तपोऽतप्यत स तपस्तप्त्वा स मिथुनमुत्पादयते। रयिं च प्राणं चेत्येतौ मे बहुधा प्रजाः करिष्यत इति॥',
    transliteration: 'tasmai sa hovāca | prajākāmo vai prajāpatiḥ sa tapo\'tapyata sa tapastaptvā sa mithunamutpādayate | rayiṃ ca prāṇaṃ cetyetau me bahudhā prajāḥ kariṣyata iti ||',
    translation: 'The sage replied: "Prajapati, desiring offspring, performed austerity. Having performed austerity, he created a pair - Rayi (matter) and Prana (life-energy) - thinking: These two will produce creatures in many ways for me."',
    explanation: {
      simple: 'The Creator (Prajapati) produced two cosmic principles: matter (Rayi) and life-energy (Prana). All creation comes from the union of these two.',
      deeper: 'This is a profound cosmological teaching. The material principle (Rayi/Prakriti) and the vital principle (Prana/Purusha) together give rise to all forms of life.',
    },
    practicalApplication: 'See the interplay of matter and energy in all of life. You are both body (Rayi) and life-force (Prana).',
    themes: ['creation', 'Prajapati', 'Rayi', 'Prana', 'duality'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'prashna',
    section: 1,
    verse: 5,
    sanskrit: 'आदित्यो ह वै प्राणो रयिरेव चन्द्रमा रयिर्वा एतत्सर्वं यन्मूर्तं चामूर्तं च तस्मान्मूर्तिरेव रयिः॥',
    transliteration: 'ādityo ha vai prāṇo rayireva candramā rayirvā etatsarvaṃ yanmūrtaṃ cāmūrtaṃ ca tasmānmūrtireva rayiḥ ||',
    translation: 'The sun indeed is Prana (life-energy), and the moon is Rayi (matter). Matter is all this - whatever has form and is formless. Therefore, form itself is matter.',
    explanation: {
      simple: 'The sun represents the life-giving energy (Prana), while the moon represents matter (Rayi). Everything visible is matter.',
      deeper: 'The Upanishad uses cosmic symbols - sun and moon - to represent the fundamental duality of consciousness-energy and material substance.',
    },
    practicalApplication: 'Observe how the sun energizes all life while matter provides the forms. Your body is Rayi; your vitality is Prana.',
    themes: ['sun', 'moon', 'form', 'formless', 'cosmic symbolism'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'prashna',
    section: 1,
    verse: 6,
    sanskrit: 'अथादित्य उदयन्यत्प्राचीं दिशं प्रविशति तेन प्राच्यान्प्राणान्रश्मिषु सन्निधत्ते। यद्दक्षिणां यत्प्रतीचीं यदुदीचीं यदधो यदूर्ध्वं यदन्तरा दिशो यत्सर्वं प्रकाशयति तेन सर्वान्प्राणान्रश्मिषु सन्निधत्ते॥',
    transliteration: 'athāditya udayanayatprācīṃ diśaṃ praviśati tena prācyānprāṇānraśmiṣu sannidhatte | yaddakṣiṇāṃ yatpratīcīṃ yadudīcīṃ yadadho yadūrdhvaṃ yadantarā diśo yatsarvaṃ prakāśayati tena sarvānprāṇānraśmiṣu sannidhatte ||',
    translation: 'When the sun rises in the east, it gathers the eastern life-energies in its rays. When it illuminates the south, west, north, below, above, and all the intermediate directions, it gathers all life-energies in its rays.',
    explanation: {
      simple: 'The sun\'s rays reach everywhere and enliven all beings in all directions. The sun is like a cosmic life-giver.',
      deeper: 'Prana (life-energy) is universal, reaching all corners of existence. The sun symbolizes the omnipresent nature of vital force.',
    },
    practicalApplication: 'Like the sun, let your positive energy radiate in all directions. Be a source of vitality for those around you.',
    themes: ['sun', 'omnipresence', 'directions', 'life-energy'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'prashna',
    section: 1,
    verse: 7,
    sanskrit: 'स एष वैश्वानरो विश्वरूपः प्राणोऽग्निरुदयते। तदेतदृचाभ्युक्तम्॥',
    transliteration: 'sa eṣa vaiśvānaro viśvarūpaḥ prāṇo\'gnirudayate | tadetadṛcābhyuktam ||',
    translation: 'This Prana rises as the universal fire, Vaishvanara, taking all forms. This is declared in the Rig Veda:',
    explanation: {
      simple: 'The life-force (Prana) is also the cosmic fire that assumes all forms. It is the universal principle taking shape as everything.',
      deeper: 'Vaishvanara is the cosmic fire-energy, present in the sun, in the digestive fire, and in all life processes.',
    },
    practicalApplication: 'Recognize the same life-force that is in the sun is also the fire in your belly. Cosmic and individual are one.',
    themes: ['Vaishvanara', 'universal fire', 'all-forms'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'prashna',
    section: 1,
    verse: 8,
    sanskrit: 'विश्वरूपं हरिणं जातवेदसं परायणं ज्योतिरेकं तपन्तम्। सहस्ररश्मिः शतधा वर्तमानः प्राणः प्रजानामुदयत्येष सूर्यः॥',
    transliteration: 'viśvarūpaṃ hariṇaṃ jātavedasaṃ parāyaṇaṃ jyotirekaṃ tapantam | sahasraraśmiḥ śatadhā vartamānaḥ prāṇaḥ prajānāmudayatyeṣa sūryaḥ ||',
    translation: '"All-formed, golden, all-knowing, the supreme goal, the one light, the heating one - with thousand rays, existing in hundred ways - this sun rises as the Prana of all creatures."',
    explanation: {
      simple: 'This beautiful verse describes the sun as the life-breath of all beings. It has countless rays and manifests in countless ways.',
      deeper: 'The sun (Surya) is praised as Jatavedas (all-knowing), the one light (ekam jyoti), and the life of all creatures - pointing to its identity with Brahman.',
    },
    practicalApplication: 'Greet the sunrise with reverence. The light that warms the world is the same energy that sustains your life.',
    themes: ['sun', 'thousand rays', 'life of creatures', 'supreme goal'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    upanishad: 'prashna',
    section: 1,
    verse: 9,
    sanskrit: 'संवत्सरो वै प्रजापतिस्तस्यायने दक्षिणं चोत्तरं च। तद्ये ह वै तदिष्टापूर्ते कृतमित्युपासते ते चान्द्रमसमेव लोकमभिजयन्ते। त एव पुनरावर्तन्ते तस्मादेत ऋषयः प्रजाकामा दक्षिणं प्रतिपद्यन्ते। एष ह वै रयिर्यः पितृयाणः॥',
    transliteration: 'saṃvatsaro vai prajāpatistasyāyane dakṣiṇaṃ cottaraṃ ca | tadye ha vai tadiṣṭāpūrte kṛtamityupāsate te cāndramasameva lokamabhijayante | ta eva punarāvartante tasmādeta ṛṣayaḥ prajākāmā dakṣiṇaṃ pratipadyante | eṣa ha vai rayiryaḥ pitṛyāṇaḥ ||',
    translation: 'The year is Prajapati; it has two paths - southern and northern. Those who worship through ritual and charity go to the lunar world. They return again. Therefore, sages desiring offspring follow the southern path. This is the path of the fathers, which is Rayi (matter).',
    explanation: {
      simple: 'There are two cosmic paths after death: the southern path (of the moon/matter) leads to return, while the northern path leads beyond. Those focused on rituals and worldly desires take the southern path.',
      deeper: 'Pitryana (path of the fathers) leads to rebirth; Devayana (path of the gods) leads to liberation. This is the crucial distinction.',
    },
    practicalApplication: 'Consider: Are your actions aimed at temporary results, or at permanent liberation?',
    themes: ['two paths', 'southern path', 'rebirth', 'year as time'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'prashna',
    section: 1,
    verse: 10,
    sanskrit: 'अथोत्तरेण तपसा ब्रह्मचर्येण श्रद्धया विद्ययात्मानमन्विष्यादित्यमभिजयन्ते। एतद्वै प्राणानामायतनमेतदमृतमभयमेतत्परायणमेतस्मान्न पुनरावर्तन्त इत्येष निरोधः तदेष श्लोकः॥',
    transliteration: 'athottareṇa tapasā brahmacaryeṇa śraddhayā vidyayātmānamanviṣyādityamabhijayante | etadvai prāṇānāmāyatanametadamṛtamabhayametadparāyaṇametasmānna punarāvartanta ityeṣa nirodhaḥ tadeṣa ślokaḥ ||',
    translation: 'But by the northern path, through austerity, celibacy, faith, and knowledge, seeking the Self, they attain the sun. This is the abode of life-energies, the immortal, the fearless, the supreme goal. From there, they do not return. This is the cessation (of rebirth). On this, there is a verse:',
    explanation: {
      simple: 'The northern path - through self-discipline, knowledge, and seeking the Self - leads to the sun (the ultimate reality). From there, one never returns to the cycle of birth and death.',
      deeper: 'Devayana leads to moksha. The "sun" here represents Brahman, the immortal reality. This is the goal of spiritual life.',
    },
    practicalApplication: 'Focus on self-knowledge, discipline, and faith. These lead to permanent freedom, not temporary gains.',
    themes: ['northern path', 'liberation', 'no return', 'immortal'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'prashna',
    section: 1,
    verse: 11,
    sanskrit: 'पञ्चपादं पितरं द्वादशाकृतिं दिव आहुः परे अर्धे पुरीषिणम्। अथेमे अन्य उ परे विचक्षणं सप्तचक्रे षडर आहुरर्पितमिति॥',
    transliteration: 'pañcapādaṃ pitaraṃ dvādaśākṛtiṃ diva āhuḥ pare ardhe purīṣiṇam | atheme anya u pare vicakṣaṇaṃ saptacakre ṣaḍara āhurarpitamiti ||',
    translation: 'Some say the father (sun/time) has five feet, twelve forms, and is full of rain in the upper half of heaven. Others say this wise one is placed in a chariot of seven wheels with six spokes.',
    explanation: {
      simple: 'This verse uses poetic imagery to describe time (the year). Five seasons, twelve months, seven-wheeled chariot of time.',
      deeper: 'The cryptic symbolism: five feet are five seasons, twelve forms are months, seven wheels are days of the week, six spokes are six seasons. Time is the cosmic chariot carrying all beings.',
    },
    practicalApplication: 'Understand that you are traveling in the chariot of time. Use each day, month, and season wisely.',
    themes: ['time', 'year', 'cosmic symbolism', 'chariot'],
    difficulty: 'advanced',
  },
];

// =============================================================================
// PRASHNA 2: THE PRIMACY OF PRANA (13 verses)
// Question: How many powers support creation? Which is the greatest?
// =============================================================================

const prashna2Verses: UpanishadVerse[] = [
  {
    upanishad: 'prashna',
    section: 2,
    verse: 1,
    sanskrit: 'अथ हैनं भार्गवो वैदर्भिः पप्रच्छ। भगवन्कत्येव देवाः प्रजां विधारयन्ते कतर एतत्प्रकाशयन्ते कः पुनरेषां वरिष्ठ इति॥',
    transliteration: 'atha hainaṃ bhārgavo vaidarbhiḥ papraccha | bhagavankatyeva devāḥ prajāṃ vidhārayante katara etatprakāśayante kaḥ punareṣāṃ variṣṭha iti ||',
    translation: 'Then Bhargava Vaidarbhi asked: "Lord, how many gods support the creature? Which of them illumine this body? And which is the greatest among them?"',
    explanation: {
      simple: 'The second question: How many divine powers (senses, faculties) support the body? Which one is most important?',
      deeper: 'This question investigates the hierarchy among the bodily functions and reveals the supreme importance of Prana.',
    },
    practicalApplication: 'Ask: What truly keeps you alive? Beyond food, beyond senses - what is essential?',
    themes: ['gods', 'body', 'hierarchy', 'greatest'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'prashna',
    section: 2,
    verse: 2,
    sanskrit: 'तस्मै स होवाचाकाशो ह वा एष देवो वायुरग्निरापः पृथिवी वाङ्मनश्चक्षुः श्रोत्रं च। ते प्रकाश्याभिवदन्ति वयमेतद्बाणमवष्टभ्य विधारयामः॥',
    transliteration: 'tasmai sa hovācākāśo ha vā eṣa devo vāyuragniāpaḥ pṛthivī vāṅmanaścakṣuḥ śrotraṃ ca | te prakāśyābhivadanti vayametadbāṇamavaṣṭabhya vidhārayāmaḥ ||',
    translation: 'The sage replied: "Space, air, fire, water, earth, speech, mind, eye, and ear - these gods, shining forth, declare: We hold up this body together."',
    explanation: {
      simple: 'Nine divine powers (five elements plus four faculties) work together to sustain the body. Each claims to be essential.',
      deeper: 'The elements and senses are called "gods" (devas) because they shine forth and enable experience. Yet they all depend on something deeper.',
    },
    practicalApplication: 'Appreciate how many systems work together to keep you alive: elements, senses, mind - all cooperating.',
    themes: ['elements', 'senses', 'body', 'cooperation'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'prashna',
    section: 2,
    verse: 3,
    sanskrit: 'तान्वरिष्ठः प्राण उवाच। मा मोहमापद्यथ अहमेवैतत्पञ्चधात्मानं प्रविभज्यैतद्बाणमवष्टभ्य विधारयामीति ते अश्रद्दधाना बभूवुः॥',
    transliteration: 'tānvariṣṭhaḥ prāṇa uvāca | mā mohamāpadyatha ahamevaitatpañcadhātmānaṃ pravibhajyaitadbāṇamavaṣṭabhya vidhārayāmīti te aśraddadhānā babhūvuḥ ||',
    translation: 'Prana, the greatest among them, said: "Do not be deluded. I alone, dividing myself fivefold, hold up and support this body." But they did not believe him.',
    explanation: {
      simple: 'Prana (life-breath) claims to be the supreme power, dividing into five forms to sustain the body. But the other faculties are skeptical.',
      deeper: 'The five pranas are: prana (breath), apana (downward), vyana (pervading), udana (upward), and samana (equalizing). Together they sustain life.',
    },
    practicalApplication: 'Notice your breath - it is the foundation of life that the mind and senses depend upon.',
    themes: ['Prana', 'fivefold', 'supremacy', 'doubt'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'prashna',
    section: 2,
    verse: 4,
    sanskrit: 'स अभिमानादूर्ध्वमुत्क्रामत इव तस्मिन्नुत्क्रामत्यथेतरे सर्व एवोत्क्रामन्ते तस्मिंश्च प्रतिष्ठमाने सर्व एव प्रतिष्ठन्ते। तद्यथा मक्षिका मधुकरराजानमुत्क्रामन्तं सर्वा एवोत्क्रामन्ते तस्मिंश्च प्रतिष्ठमाने सर्वा एव प्रतिष्ठन्ते एवं वाङ्मनश्चक्षुः श्रोत्रं च ते प्रीताः प्राणं स्तुन्वन्ति॥',
    transliteration: 'sa abhimānādūrdhvamut krāmata iva tasminnut krāmatyathetare sarva evot krāmante tasmiṃśca pratiṣṭhamāne sarva eva pratiṣṭhante | tadyathā makṣikā madhukararājānamut krāmantaṃ sarvā evot krāmante tasmiṃśca pratiṣṭhamāne sarvā eva pratiṣṭhante evaṃ vāṅmanaścakṣuḥ śrotraṃ ca te prītāḥ prāṇaṃ stunvanti ||',
    translation: 'Out of pride, Prana seemed to rise upward to leave the body. When it started to leave, all the others also began to leave. When it settled back, all the others settled back too. Just as when the queen bee rises, all the bees rise with her, and when she settles, all settle - so speech, mind, eye, and ear, pleased, praised Prana.',
    explanation: {
      simple: 'Prana proved its supremacy by starting to leave. All other faculties immediately began to fail too. Like bees following their queen, all powers depend on Prana.',
      deeper: 'This is the famous demonstration of Prana\'s primacy. Death is the departure of Prana; with its departure, all faculties cease.',
    },
    practicalApplication: 'When the breath leaves, everything leaves. Honor and protect your life-breath through pranayama and healthy living.',
    themes: ['Prana supremacy', 'queen bee', 'dependence', 'proof'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    upanishad: 'prashna',
    section: 2,
    verse: 5,
    sanskrit: 'एषोऽग्निस्तपत्येष सूर्य एष पर्जन्यो मघवानेष वायुः। एष पृथिवी रयिर्देवः सदसच्चामृतं च यत्॥',
    transliteration: 'eṣo\'gnistapathyeṣa sūrya eṣa parjanyo maghavāneṣa vāyuḥ | eṣa pṛthivī rayirdevaḥ sadasaccāmṛtaṃ ca yat ||',
    translation: '"This Prana is the fire that heats, the sun, the rain-god, Indra, the wind. It is the earth, matter, the divine - what exists and what does not, and the immortal."',
    explanation: {
      simple: 'The hymn to Prana begins: Prana is everything - fire, sun, rain, wind, earth. It is existence, non-existence, and the immortal.',
      deeper: 'Prana is identified with all cosmic forces. It is both the manifest universe and the unmanifest, pointing to its identity with Brahman.',
    },
    practicalApplication: 'See Prana everywhere - in fire, wind, rain. The same life-force that breathes in you breathes in the universe.',
    themes: ['cosmic Prana', 'elements', 'existence', 'immortal'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'prashna',
    section: 2,
    verse: 6,
    sanskrit: 'अरा इव रथनाभौ प्राणे सर्वं प्रतिष्ठितम्। ऋचो यजूंषि सामानि यज्ञः क्षत्रं ब्रह्म च॥',
    transliteration: 'arā iva rathanābhau prāṇe sarvaṃ pratiṣṭhitam | ṛco yajūṃṣi sāmāni yajñaḥ kṣatraṃ brahma ca ||',
    translation: '"Like spokes in the hub of a wheel, everything is established in Prana - the Rig, Yajur, and Sama Vedas, sacrifice, the warrior class, and the priestly class."',
    explanation: {
      simple: 'Everything depends on Prana like spokes depend on the hub of a wheel. Even the sacred Vedas and social order rest on Prana.',
      deeper: 'The wheel metaphor beautifully illustrates Prana as the central support of all existence - religious, social, and cosmic.',
    },
    practicalApplication: 'Your breath is the hub around which your entire life revolves. Make it steady, deep, and conscious.',
    themes: ['wheel hub', 'Vedas', 'central support'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    upanishad: 'prashna',
    section: 2,
    verse: 7,
    sanskrit: 'प्रजापतिश्चरसि गर्भे त्वमेव प्रतिजायसे। तुभ्यं प्राण प्रजास्त्विमा बलिं हरन्ति यः प्राणैः प्रतितिष्ठसि॥',
    transliteration: 'prajāpatiścarasi garbhe tvameva pratijāyase | tubhyaṃ prāṇa prajāstvimā baliṃ haranti yaḥ prāṇaiḥ pratitiṣṭhasi ||',
    translation: '"As Prajapati, you move in the womb; you yourself are born again. To you, O Prana, these creatures bring offerings - you who abide with the life-breaths."',
    explanation: {
      simple: 'Prana is praised as the Creator who enters the womb and is reborn. All creatures offer tribute to Prana.',
      deeper: 'The continuity of life across generations is attributed to Prana. It is the thread that connects all births.',
    },
    practicalApplication: 'The same breath that sustained your ancestors sustains you. Honor this sacred continuity.',
    themes: ['womb', 'rebirth', 'Prajapati', 'offerings'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'prashna',
    section: 2,
    verse: 8,
    sanskrit: 'देवानामसि वह्नितमः पितॄणां प्रथमा स्वधा। ऋषीणां चरितं सत्यमथर्वाङ्गिरसामसि॥',
    transliteration: 'devānāmasi vahnitamaḥ pitṝṇāṃ prathamā svadhā | ṛṣīṇāṃ caritaṃ satyamatharvāṅgirasāmasi ||',
    translation: '"You are the chief carrier to the gods, the first offering to the ancestors. You are the true practice of the sages, of the Atharvangirases."',
    explanation: {
      simple: 'Prana carries offerings to gods, is the first gift to ancestors, and is the truth practiced by the sages.',
      deeper: 'All rituals, all spiritual practices ultimately operate through Prana. It is the medium of all sacred action.',
    },
    practicalApplication: 'Every sacred act is powered by breath. Make your breath conscious to make your actions sacred.',
    themes: ['offerings', 'ancestors', 'sages', 'truth'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'prashna',
    section: 2,
    verse: 9,
    sanskrit: 'इन्द्रस्त्वं प्राण तेजसा रुद्रोऽसि परिरक्षिता। त्वमन्तरिक्षे चरसि सूर्यस्त्वं ज्योतिषां पतिः॥',
    transliteration: 'indrastvaṃ prāṇa tejasā rudro\'si parirakṣitā | tvamantarikṣe carasi sūryastvaṃ jyotiṣāṃ patiḥ ||',
    translation: '"You are Indra through your power; you are Rudra as the protector. You move in the atmosphere; you are the sun, the lord of lights."',
    explanation: {
      simple: 'Prana is identified with the mighty gods: Indra (power), Rudra (protection), and Surya (light).',
      deeper: 'The cosmic deities are manifestations of the one Prana. Divine power, protective grace, and illuminating wisdom are all Prana.',
    },
    practicalApplication: 'Cultivate powerful, protective, illuminating energy through conscious breathing and living.',
    themes: ['Indra', 'Rudra', 'sun', 'lord of lights'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'prashna',
    section: 2,
    verse: 10,
    sanskrit: 'यदा त्वमभिवर्षस्यथेमाः प्राण ते प्रजाः। आनन्दरूपास्तिष्ठन्ति कामायान्नं भविष्यतीति॥',
    transliteration: 'yadā tvamabhivarṣasyathemāḥ prāṇa te prajāḥ | ānandarūpāstiṣṭhanti kāmāyānnaṃ bhaviṣyatīti ||',
    translation: '"When you send down rain, O Prana, these creatures of yours stand in bliss, thinking: There will be food according to our desire."',
    explanation: {
      simple: 'When Prana sends rain, all creatures rejoice, knowing that food will come. Prana provides for all.',
      deeper: 'Rain is a form of cosmic Prana nourishing all life. The joy of receiving rain points to Prana as the source of all abundance.',
    },
    practicalApplication: 'Be grateful for rain and food. Recognize Prana\'s generosity in all nourishment.',
    themes: ['rain', 'food', 'bliss', 'provision'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'prashna',
    section: 2,
    verse: 11,
    sanskrit: 'व्रात्यस्त्वं प्राणैकर्षिरत्ता विश्वस्य सत्पतिः। वयमाद्यस्य दातारः पिता त्वं मातरिश्व नः॥',
    transliteration: 'vrātyastvaṃ prāṇaikarṣirattā viśvasya satpatiḥ | vayamādyasya dātāraḥ pitā tvaṃ mātariśva naḥ ||',
    translation: '"You are the wandering ascetic, O Prana, the one seer, the consumer, the true lord of the world. We are the givers of the primary (offering); you, O Matarishvan, are our father."',
    explanation: {
      simple: 'Prana is called our father, the lord of truth, the wanderer who consumes and sustains all. We can only offer back what Prana gives.',
      deeper: 'Matarishvan is another name for Vayu/Prana. The acknowledgment of Prana as father shows recognition of the source of all life.',
    },
    practicalApplication: 'Recognize that everything you give comes first from Prana. You can only return what was given.',
    themes: ['father', 'ascetic', 'lord', 'Matarishvan'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'prashna',
    section: 2,
    verse: 12,
    sanskrit: 'या ते तनूर्वाचि प्रतिष्ठिता या श्रोत्रे या च चक्षुषि। या च मनसि सन्तता शिवां तां कुरु मोत्क्रमीः॥',
    transliteration: 'yā te tanūrvāci pratiṣṭhitā yā śrotre yā ca cakṣuṣi | yā ca manasi santatā śivāṃ tāṃ kuru motkramīḥ ||',
    translation: '"That form of yours which is established in speech, in hearing, in seeing, and which pervades the mind - make it auspicious. Do not depart!"',
    explanation: {
      simple: 'The hymn pleads: Prana, you who dwell in my speech, hearing, seeing, and mind - be gracious and do not leave me!',
      deeper: 'This is a prayer for life. Prana pervading all faculties is asked to remain auspicious and not withdraw (which would mean death).',
    },
    practicalApplication: 'Honor your senses and mind as homes of Prana. Keep them pure so Prana remains auspicious.',
    themes: ['speech', 'hearing', 'seeing', 'mind', 'auspicious'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'prashna',
    section: 2,
    verse: 13,
    sanskrit: 'प्राणस्येदं वशे सर्वं त्रिदिवे यत्प्रतिष्ठितम्। मातेव पुत्रान्रक्षस्व श्रीश्च प्रज्ञां च विधेहि न इति॥',
    transliteration: 'prāṇasyedaṃ vaśe sarvaṃ tridive yatpratiṣṭhitam | māteva putrānrakṣasva śrīśca prajñāṃ ca vidhehi na iti ||',
    translation: '"All this is in the power of Prana, as well as what is established in the three heavens. Protect us as a mother protects her children. Grant us prosperity and wisdom."',
    explanation: {
      simple: 'Everything on earth and in heaven is under Prana\'s control. The hymn ends with a prayer: Protect us like a mother, give us wealth and wisdom.',
      deeper: 'The maternal aspect of Prana is invoked - protective, nourishing, wisdom-bestowing. Prana is asked for both material and spiritual gifts.',
    },
    practicalApplication: 'Ask not only for protection but also for wisdom. Prana can grant both prosperity and spiritual insight.',
    themes: ['power', 'mother', 'protection', 'prosperity', 'wisdom'],
    difficulty: 'beginner',
    famousVerse: true,
  },
];

// =============================================================================
// PRASHNA 3: THE SOURCE AND FUNCTIONS OF PRANA (12 verses)
// Question: From where does Prana arise? How does it enter the body?
// =============================================================================

const prashna3Verses: UpanishadVerse[] = [
  {
    upanishad: 'prashna',
    section: 3,
    verse: 1,
    sanskrit: 'अथ हैनं कौसल्यश्चाश्वलायनः पप्रच्छ। भगवन्कुत एष प्राणो जायते कथमायात्यस्मिञ्शरीरे आत्मानं वा प्रविभज्य कथं प्रतिष्ठते केनोत्क्रमते कथं बाह्यमभिधत्ते कथमध्यात्ममिति॥',
    transliteration: 'atha hainaṃ kausalyaścāśvalāyanaḥ papraccha | bhagavankuta eṣa prāṇo jāyate kathamāyātyasmiñśarīre ātmānaṃ vā pravibhajya kathaṃ pratiṣṭhate kenotkramate kathaṃ bāhyamabhidhatte kathamadhyātmamiti ||',
    translation: 'Then Kausalya Ashvalayana asked: "Lord, from where is this Prana born? How does it come into this body? How does it abide after dividing itself? By what does it depart? How does it support the external world and the internal Self?"',
    explanation: {
      simple: 'The third question is comprehensive: Where does Prana come from? How does it enter, divide, and function in the body? How does it depart at death?',
      deeper: 'This inquiry goes to the heart of the mind-body-spirit connection and the mechanism of life and death.',
    },
    practicalApplication: 'Investigate: How does life-energy function in your own body? Where does your vitality come from?',
    themes: ['origin of Prana', 'body', 'division', 'departure'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'prashna',
    section: 3,
    verse: 2,
    sanskrit: 'तस्मै स होवाचातिप्रश्नान्पृच्छसि ब्रह्मिष्ठोऽसीति तस्मात्तेऽहं ब्रवीमि॥',
    transliteration: 'tasmai sa hovācātiprśnānpṛcchasi brahmiṣṭho\'sīti tasmātte\'haṃ bravīmi ||',
    translation: 'The sage replied: "You ask very profound questions. Since you are most devoted to Brahman, I will answer you."',
    explanation: {
      simple: 'The sage acknowledges that these are deep questions. He agrees to answer because the seeker is truly devoted to truth.',
      deeper: 'Ati-prashna (super-questions) deserve ati-uttara (super-answers). The teacher responds to the sincerity of the student.',
    },
    practicalApplication: 'Deep questions deserve deep answers. But only genuine seekers receive the fullest teachings.',
    themes: ['profound questions', 'devotion', 'worthiness'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'prashna',
    section: 3,
    verse: 3,
    sanskrit: 'आत्मन एष प्राणो जायते। यथैषा पुरुषे छायैतस्मिन्नेतदाततं मनोकृतेनायात्यस्मिञ्शरीरे॥',
    transliteration: 'ātmana eṣa prāṇo jāyate | yathaiṣā puruṣe chāyaitasminnnetadātataṃ manokṛtenāyātyasmiñśarīre ||',
    translation: '"Prana is born from the Self. Just as a shadow follows a person, so does Prana extend into the body by the action of the mind."',
    explanation: {
      simple: 'Prana comes from the Atman (Self) and follows it like a shadow follows a person. Mind is the bridge connecting Self and body.',
      deeper: 'This is crucial: Prana originates from Atman, not from matter. The mind (karma of past lives) brings Prana into a new body.',
    },
    practicalApplication: 'Your life-force comes from your deepest Self. Mind connects consciousness to the body.',
    themes: ['Atman', 'shadow', 'mind', 'origin'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'prashna',
    section: 3,
    verse: 4,
    sanskrit: 'यथा सम्राडेवाधिकृतान्विनियुङ्क्ते एतान्ग्रामानेतान्ग्रामानधितिष्ठस्वेत्येवमेवैष प्राण इतरान्प्राणान्पृथक्पृथगेव सन्निधत्ते॥',
    transliteration: 'yathā samrāḍevādhikṛtānviniyuṅkte etāngrāmānetāngrāmānadhitiṣṭhasvetyevamevaiṣa prāṇa itarānprāṇānpṛthakpṛthageva sannidhatte ||',
    translation: '"Just as an emperor appoints officers, saying \'Govern these villages, govern those villages,\' so does Prana station the other pranas, each in its separate place."',
    explanation: {
      simple: 'Like a king assigning governors to different regions, the main Prana assigns different functions to the five pranas in different body parts.',
      deeper: 'The metaphor of governance illustrates the hierarchical organization of vital functions. Prana is the sovereign; the sub-pranas are ministers.',
    },
    practicalApplication: 'Your body has an intelligent organization. Each function has its place. Honor this inner governance.',
    themes: ['emperor', 'governance', 'organization', 'delegation'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'prashna',
    section: 3,
    verse: 5,
    sanskrit: 'पायूपस्थेऽपानं चक्षुःश्रोत्रे मुखनासिकाभ्यां प्राणः स्वयं प्रातिष्ठते मध्ये तु समानः। एष ह्येतद्धुतमन्नं समं नयति तस्मादेताः सप्तार्चिषो भवन्ति॥',
    transliteration: 'pāyūpasthe\'pānaṃ cakṣuḥśrotre mukhanāsikābhyāṃ prāṇaḥ svayaṃ prātiṣṭhate madhye tu samānaḥ | eṣa hyetaddhutamannaṃ samaṃ nayati tasmādetāḥ saptārciṣo bhavanti ||',
    translation: '"Apana dwells in the organs of excretion and generation. Prana itself abides in the eye, ear, mouth, and nose. In the middle is Samana - it distributes the food-offering equally. From this arise the seven flames."',
    explanation: {
      simple: 'Apana governs lower functions (elimination, reproduction). Prana governs upper functions (senses). Samana in the middle distributes digested food.',
      deeper: 'The seven flames refer to the two eyes, two ears, two nostrils, and mouth - fed by Samana distributing nutrients.',
    },
    practicalApplication: 'Understand your body\'s energy zones: lower (elimination), middle (digestion), upper (senses). Each has its own prana.',
    themes: ['Apana', 'Samana', 'body zones', 'seven flames'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'prashna',
    section: 3,
    verse: 6,
    sanskrit: 'हृदि ह्येष आत्मा। अत्रैतदेकशतं नाडीनां तासां शतं शतमेकैकस्या द्वासप्ततिर्द्वासप्ततिः प्रतिशाखानाडीसहस्राणि भवन्त्यासु व्यानश्चरति॥',
    transliteration: 'hṛdi hyeṣa ātmā | atraitadekaśataṃ nāḍīnāṃ tāsāṃ śataṃ śatamekaikasyā dvāsaptatirdvāsaptatiḥ pratiśākhānāḍīsahasrāṇi bhavantyāsu vyānaścarati ||',
    translation: '"The Self resides in the heart. From here arise 101 nadis (channels). Each of these has 100 branches, and each branch has 72,000 sub-branches. In all these, Vyana circulates."',
    explanation: {
      simple: 'The Self dwells in the heart. From there, countless energy channels spread throughout the body. Vyana (the pervading breath) circulates through all of them.',
      deeper: 'The 72,000 nadis of yogic anatomy are mentioned here. Vyana maintains circulation and coordination throughout the system.',
    },
    practicalApplication: 'The heart is the seat of the Self. Energy channels radiate from there. Yoga practices work to purify these channels.',
    themes: ['heart', 'nadis', 'Vyana', 'channels'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'prashna',
    section: 3,
    verse: 7,
    sanskrit: 'अथैकयोर्ध्व उदानः पुण्येन पुण्यं लोकं नयति पापेन पापमुभाभ्यामेव मनुष्यलोकम्॥',
    transliteration: 'athaikayordhva udānaḥ puṇyena puṇyaṃ lokaṃ nayati pāpena pāpamubhābhyāmeva manuṣyalokam ||',
    translation: '"Through one of these (the central channel), Udana rises upward. By virtuous deeds, it leads to the virtuous world; by sinful deeds, to the sinful world; by both, to the human world."',
    explanation: {
      simple: 'Udana is the upward-moving breath that, at death, carries the soul to its next destination based on karma - heaven, hell, or rebirth as human.',
      deeper: 'The sushumna (central channel) is the path of liberation. Udana traveling through it at death determines the next birth.',
    },
    practicalApplication: 'Your deeds determine your destination. Cultivate virtue. At death, Udana will carry you according to your karma.',
    themes: ['Udana', 'karma', 'afterlife', 'worlds'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'prashna',
    section: 3,
    verse: 8,
    sanskrit: 'आदित्यो ह वै बाह्यः प्राण उदयत्येष ह्येनं चाक्षुषं प्राणमनुगृह्णानः। पृथिव्यां या देवता सैषा पुरुषस्य अपानमवष्टभ्यान्तरा यदाकाशः स समानो वायुर्व्यानः॥',
    transliteration: 'ādityo ha vai bāhyaḥ prāṇa udayatyeṣa hyenaṃ cākṣuṣaṃ prāṇamanugṛhṇānaḥ | pṛthivyāṃ yā devatā saiṣā puruṣasya apānamavaṣṭabhyāntarā yadākāśaḥ sa samāno vāyurvyānaḥ ||',
    translation: '"The sun indeed is the external Prana; rising, it supports the prana in the eye. The deity in the earth supports the person\'s apana. The space between is samana. The wind is vyana."',
    explanation: {
      simple: 'External cosmic forces correspond to internal pranas: Sun supports prana (in eyes), Earth supports apana, Space is samana, Wind is vyana.',
      deeper: 'The macrocosm-microcosm correspondence: cosmic forces and bodily pranas are the same energy at different scales.',
    },
    practicalApplication: 'Your body mirrors the cosmos. Sun, earth, space, and wind are within you as different forms of prana.',
    themes: ['sun', 'earth', 'space', 'wind', 'correspondence'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'prashna',
    section: 3,
    verse: 9,
    sanskrit: 'तेजो ह वाव उदानस्तस्माद्उपशान्ततेजाः। पुनर्भवमिन्द्रियैर्मनसि सम्पद्यमानैः॥',
    transliteration: 'tejo ha vāva udānastamādupaśāntatejāḥ | punarbhavamindriyairmanasi sampadyamānaiḥ ||',
    translation: '"Fire indeed is Udana. Therefore, when one\'s fire (heat) is extinguished, one is reborn, with the senses absorbed in the mind."',
    explanation: {
      simple: 'Udana is connected to the body\'s fire/heat. When body heat fades (at death), the soul departs for rebirth, with senses withdrawing into mind.',
      deeper: 'The process of death: body heat leaves, senses merge into mind, and Udana carries the subtle body to the next life.',
    },
    practicalApplication: 'Observe how fever, cold, and body heat relate to vitality. Udana maintains the inner fire.',
    themes: ['fire', 'Udana', 'death', 'rebirth'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'prashna',
    section: 3,
    verse: 10,
    sanskrit: 'यच्चित्तस्तेनैष प्राणमायाति प्राणस्तेजसा युक्तः सहात्मना यथासङ्कल्पितं लोकं नयति॥',
    transliteration: 'yaccittastenaiṣa prāṇamāyāti prāṇastejasā yuktaḥ sahātmanā yathāsaṅkalpitaṃ lokaṃ nayati ||',
    translation: '"Whatever is one\'s thought at death, with that one enters Prana. Prana, united with fire and the Self, leads to the world corresponding to one\'s thought."',
    explanation: {
      simple: 'Your last thought at death is crucial. Prana, combined with your consciousness, takes you to the world you were thinking of.',
      deeper: 'This echoes the Gita\'s teaching: whatever you remember at death, to that you go. The mind\'s last impression shapes the next birth.',
    },
    practicalApplication: 'Train your mind daily so that at death, it naturally turns to the Divine. Your last thought matters.',
    themes: ['last thought', 'death', 'destination', 'intention'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'prashna',
    section: 3,
    verse: 11,
    sanskrit: 'य एवं विद्वान्प्राणं वेद न हास्य प्रजा हीयतेऽमृतो भवति तदेषः श्लोकः॥',
    transliteration: 'ya evaṃ vidvānprāṇaṃ veda na hāsya prajā hīyate\'mṛto bhavati tadeṣaḥ ślokaḥ ||',
    translation: '"One who knows Prana thus - his offspring do not perish and he becomes immortal. On this, there is a verse:"',
    explanation: {
      simple: 'The knower of Prana gains two blessings: his lineage continues, and he attains immortality.',
      deeper: 'Knowledge of Prana is liberating. It connects one to the source of life itself, granting both worldly continuity and spiritual immortality.',
    },
    practicalApplication: 'Know your life-force deeply. This knowledge brings both material and spiritual benefits.',
    themes: ['knowledge', 'immortality', 'offspring', 'blessing'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'prashna',
    section: 3,
    verse: 12,
    sanskrit: 'उत्पत्तिमायतिं स्थानं विभुत्वं चैव पञ्चधा। अध्यात्मं चैव प्राणस्य विज्ञायामृतमश्नुते विज्ञायामृतमश्नुत इति॥',
    transliteration: 'utpattimāyatiṃ sthānaṃ vibhutvaṃ caiva pañcadhā | adhyātmaṃ caiva prāṇasya vijñāyāmṛtamaśnute vijñāyāmṛtamaśnuta iti ||',
    translation: '"Knowing the origin, arrival, abode, fivefold distribution, and the inner nature of Prana - one attains immortality, one attains immortality."',
    explanation: {
      simple: 'Complete knowledge of Prana includes: where it comes from, how it arrives in the body, where it dwells, its five forms, and its spiritual nature. This knowledge grants immortality.',
      deeper: 'The repetition emphasizes: comprehensive knowledge of Prana equals liberation. The whole Prashna has been building to this.',
    },
    practicalApplication: 'Study Prana thoroughly - its origin, forms, and spiritual significance. This complete knowledge liberates.',
    themes: ['complete knowledge', 'immortality', 'fivefold Prana'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
];

// =============================================================================
// PRASHNA 4: DREAM, DEEP SLEEP, AND THE SELF (11 verses)
// Question: What sleeps? What wakes? Who sees dreams? Who experiences bliss?
// =============================================================================

const prashna4Verses: UpanishadVerse[] = [
  {
    upanishad: 'prashna',
    section: 4,
    verse: 1,
    sanskrit: 'अथ हैनं सौर्यायणी गार्ग्यः पप्रच्छ। भगवन्नेतस्मिन्पुरुषे कानि स्वपन्ति कान्यस्मिञ्जाग्रति कतर एष देवः स्वप्नान्पश्यति कस्यैतत्सुखं भवति कस्मिन्नु सर्वे संप्रतिष्ठिता भवन्तीति॥',
    transliteration: 'atha hainaṃ sauryāyaṇī gārgyaḥ papraccha | bhagavannetasminpuruṣe kāni svapanti kānyasmiñjāgrati katara eṣa devaḥ svapnānpaśyati kasyaitatsukhaṃ bhavati kasminnu sarve saṃpratiṣṭhitā bhavantīti ||',
    translation: 'Then Gargya Sauryayani asked: "Lord, what powers sleep in this person? What stay awake? Which god sees dreams? Whose is this happiness of deep sleep? In whom are all these established?"',
    explanation: {
      simple: 'The fourth question explores the mystery of sleep: What happens to our faculties when we sleep? Who dreams? Who experiences the bliss of deep sleep?',
      deeper: 'This question leads to the revelation of the Self as the witness of all states - waking, dreaming, and deep sleep.',
    },
    practicalApplication: 'Observe what happens when you fall asleep. What withdraws? What remains aware even in dreams?',
    themes: ['sleep', 'dreams', 'waking', 'witness'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'prashna',
    section: 4,
    verse: 2,
    sanskrit: 'तस्मै स होवाच। यथा गार्ग्य मरीचयोऽर्कस्यास्तं गच्छतः सर्वा एतस्मिंस्तेजोमण्डल एकीभवन्ति ताः पुनः पुनरुदयतः प्रचरन्त्येवं ह वै तत्सर्वं परे देवे मनस्येकीभवति तेन तर्ह्येष पुरुषो न शृणोति न पश्यति न जिघ्रति न रसयते न स्पृशते नाभिवदते नादत्ते नानन्दयते न विसृजते नेयायते स्वपितीत्याचक्षते॥',
    transliteration: 'tasmai sa hovāca | yathā gārgya marīcayo\'rkasyāstaṃ gacchataḥ sarvā etasmiṃstejomṇḍala ekībhavanti tāḥ punaḥ punarudayataḥ pracarantyevaṃ ha vai tatsarvaṃ pare deve masyekībhavati tena tarhyeṣa puruṣo na śṛṇoti na paśyati na jighrati na rasayate na spṛśate nābhivadate nādatte nānandayate na visṛjate neyāyate svapitītyācakṣate ||',
    translation: 'The sage replied: "Just as, O Gargya, the rays of the setting sun all merge into that circle of light, and spread out again when it rises - so all the senses merge into the higher god, the mind. Therefore, this person then does not hear, see, smell, taste, touch, speak, grasp, enjoy, excrete, or move. They say: He sleeps."',
    explanation: {
      simple: 'When we sleep, all our senses withdraw and merge into the mind, like sunrays merging into the sun at sunset. That is why we do not hear, see, or sense anything.',
      deeper: 'Sleep is the temporary dissolution of sensory activity into its source (mind). This is a daily experience of the withdrawl that happens at death.',
    },
    practicalApplication: 'Notice how your senses withdraw as you fall asleep. This daily withdrawal mirrors deeper spiritual withdrawals.',
    themes: ['senses', 'sleep', 'sun analogy', 'withdrawal'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'prashna',
    section: 4,
    verse: 3,
    sanskrit: 'प्राणाग्नय एवैतस्मिन्पुरे जाग्रति। गार्हपत्यो ह वा एषोऽपानो व्यानोऽन्वाहार्यपचनो यद्गार्हपत्यात्प्रणीयते प्रणयनादाहवनीयः प्राणः॥',
    transliteration: 'prāṇāgnaya evaitasminpure jāgrati | gārhapatyo ha vā eṣo\'pāno vyāno\'nvāhāryapacano yadgārhapatyātpraṇīyate praṇayanādāhavanīyaḥ prāṇaḥ ||',
    translation: '"The fires of Prana alone remain awake in this city (body). Apana is the Garhapatya (household) fire; Vyana is the Anvaharyapachana (southern) fire. Since Prana is taken from Garhapatya fire, due to this leading forth, it is called Ahavaniya (offering) fire."',
    explanation: {
      simple: 'Even in sleep, the five pranas stay awake. They are compared to the three sacred fires of Vedic ritual. Apana, Vyana, and Prana are always working.',
      deeper: 'The three fires represent the continuous metabolic and vital processes that sustain life even during sleep. The body is a living temple with fires always burning.',
    },
    practicalApplication: 'Your breath continues even in sleep. Honor these tireless fires that maintain your life.',
    themes: ['three fires', 'Prana awake', 'body as temple'],
    difficulty: 'advanced',
  },
  {
    upanishad: 'prashna',
    section: 4,
    verse: 4,
    sanskrit: 'यदुच्छ्वासनिःश्वासावेतावाहुती समं नयतीति स समानः। मनो ह वाव यजमानः। इष्टफलमेवोदानः। स एनं यजमानमहरहर्ब्रह्म गमयति॥',
    transliteration: 'yaduccvāsaniḥśvāsāvetāvāhutī samaṃ nayatīti sa samānaḥ | mano ha vāva yajamānaḥ | iṣṭaphalamevodānaḥ | sa enaṃ yajamānamaharaharbraḥma gamayati ||',
    translation: '"Because Samana leads these two offerings - inhalation and exhalation - equally, it is called Samana (the equalizer). The mind is the sacrificer. Udana is the fruit of the sacrifice. It leads the sacrificer daily to Brahman."',
    explanation: {
      simple: 'Samana balances in-breath and out-breath. The mind performs the sacrifice of life. Udana, as the fruit of this sacrifice, leads us toward Brahman during deep sleep.',
      deeper: 'Every day, in deep sleep, we touch Brahman through Udana. The mind\'s activities are a continuous yajna (sacrifice).',
    },
    practicalApplication: 'Each breath is an offering. Deep sleep is daily communion with the Divine. Value rest as a spiritual practice.',
    themes: ['Samana', 'sacrifice', 'Udana', 'daily Brahman'],
    difficulty: 'advanced',
  },
  {
    upanishad: 'prashna',
    section: 4,
    verse: 5,
    sanskrit: 'अत्रैष देवः स्वप्ने महिमानमनुभवति। यद्दृष्टं दृष्टमनुपश्यति श्रुतं श्रुतमेवार्थमनुशृणोति देशदिगन्तरैश्च प्रत्यनुभूतं पुनः पुनः प्रत्यनुभवति दृष्टं चादृष्टं च श्रुतं चाश्रुतं चानुभूतं चाननुभूतं च सच्चासच्च सर्वं पश्यति सर्वः पश्यति॥',
    transliteration: 'atraiṣa devaḥ svapne mahimānamanubhavati | yaddṛṣṭaṃ dṛṣṭamanupaśyati śrutaṃ śrutamevārthamanuśṛṇoti deśadigantaraiśca pratyanubhūtaṃ punaḥ punaḥ pratyanubhavati dṛṣṭaṃ cādṛṣṭaṃ ca śrutaṃ cāśrutaṃ cānubhūtaṃ cānanubhūtaṃ ca saccāsacca sarvaṃ paśyati sarvaḥ paśyati ||',
    translation: '"Here this god (the Self) experiences its greatness in dream. What was seen, it sees again; what was heard, it hears again. What was experienced in different places and regions, it experiences again and again. Seen and unseen, heard and unheard, experienced and unexperienced, existent and non-existent - it sees all, being all, it sees."',
    explanation: {
      simple: 'In dreams, the Self experiences its creative power. It replays memories, creates new experiences, sees the real and unreal - all from within itself.',
      deeper: 'The dream state reveals the mind\'s creative power and the Self\'s independence from external objects. "Being all, it sees" hints at the Self\'s infinite nature.',
    },
    practicalApplication: 'In dreams, you are the creator, the created, and the witness. This hints at your true nature as consciousness itself.',
    themes: ['dreams', 'creative power', 'Self', 'all-seeing'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'prashna',
    section: 4,
    verse: 6,
    sanskrit: 'स यदा तेजसाभिभूतो भवति। अत्रैष देवः स्वप्नान्न पश्यत्यथ तदैतस्मिञ्शरीरे एतत्सुखं भवति॥',
    transliteration: 'sa yadā tejasābhibhūto bhavati | atraiṣa devaḥ svapnānna paśyatyatha tadaitasmiñśarīre etatsukhaṃ bhavati ||',
    translation: '"When one is overcome by light (deep sleep), then this god does not see dreams. Then in this body arises that happiness."',
    explanation: {
      simple: 'In deep sleep, even dreams cease. The Self merges into its own light. This brings the profound happiness of deep sleep.',
      deeper: 'Deep sleep (sushupti) is blissful because the Self temporarily returns to its source, free from the disturbance of waking or dreaming.',
    },
    practicalApplication: 'The peace of deep sleep is a taste of your true nature. Meditation aims to access this while awake.',
    themes: ['deep sleep', 'bliss', 'light', 'return to source'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'prashna',
    section: 4,
    verse: 7,
    sanskrit: 'स यथा सोम्य वयांसि वसोवृक्षं सम्प्रतिष्ठन्त एवं ह वै तत्सर्वं पर आत्मनि सम्प्रतिष्ठते॥',
    transliteration: 'sa yathā somya vayāṃsi vasovṛkṣaṃ sampratiṣṭhanta evaṃ ha vai tatsarvaṃ para ātmani sampratiṣṭhate ||',
    translation: '"Dear one, just as birds go to a tree for rest, so does everything find rest in the supreme Self."',
    explanation: {
      simple: 'All faculties, like birds returning to their tree at evening, return to rest in the supreme Self during deep sleep.',
      deeper: 'The beautiful image of birds coming home to roost illustrates how all aspects of experience have their source and resting place in Atman.',
    },
    practicalApplication: 'Like birds returning home, let all your scattered thoughts return to rest in the Self.',
    themes: ['birds', 'tree', 'rest', 'supreme Self'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    upanishad: 'prashna',
    section: 4,
    verse: 8,
    sanskrit: 'पृथिवी च पृथिवीमात्रा चापश्चापोमात्रा च तेजश्च तेजोमात्रा च वायुश्च वायुमात्रा चाकाशश्चाकाशमात्रा च चक्षुश्च द्रष्टव्यं च श्रोत्रं च श्रोतव्यं च घ्राणं च घ्रातव्यं च रसश्च रसयितव्यं च त्वक्च स्पर्शयितव्यं च वाक्च वक्तव्यं च हस्तौ चादातव्यं चोपस्थश्चानन्दयितव्यं च पायुश्च विसर्जयितव्यं च पादौ च गन्तव्यं च मनश्च मन्तव्यं च बुद्धिश्च बोद्धव्यं चाहंकारश्चाहंकर्तव्यं च चित्तं च चेतयितव्यं च तेजश्च विद्योतयितव्यं च प्राणश्च विधारयितव्यं च॥',
    transliteration: 'pṛthivī ca pṛthivīmātrā cāpaścāpomātrā ca tejaśca tejomātrā ca vāyuśca vāyumātrā cākāśaścākāśamātrā ca cakṣuśca draṣṭavyaṃ ca śrotraṃ ca śrotavyaṃ ca ghrāṇaṃ ca ghrātavyaṃ ca rasaśca rasayitavyaṃ ca tvakca sparśayitavyaṃ ca vākca vaktavyaṃ ca hastau cādātavyaṃ copasthaścānandayitavyaṃ ca pāyuśca visarjayitavyaṃ ca pādau ca gantavyaṃ ca manaśca mantavyaṃ ca buddhiśca boddhavyaṃ cāhaṃkāraścāhaṃkartavyaṃ ca cittaṃ ca cetayitavyaṃ ca tejaśca vidyotayitavyaṃ ca prāṇaśca vidhārayitavyaṃ ca ||',
    translation: '"Earth and earth-elements, water and water-elements, fire and fire-elements, air and air-elements, space and space-elements; eye and the visible, ear and the audible, nose and the smellable, tongue and the tasteable, skin and the touchable; speech and the speakable, hands and the graspable, generative organ and the enjoyable, excretory organ and the excretable, feet and the walkable; mind and the thinkable, intellect and the knowable, ego and the claimable, consciousness and the perceivable, light and the illuminable, Prana and the supportable."',
    explanation: {
      simple: 'This comprehensive list covers everything: five elements, five senses, five organs of action, and four aspects of inner mind. All these rest in the Self.',
      deeper: 'The complete catalogue of subjective and objective reality - all pairs of perceiver and perceived - all rest in the one Self.',
    },
    practicalApplication: 'Everything you experience, inside and outside, rests in the same Self. Recognize the unity underlying all diversity.',
    themes: ['elements', 'senses', 'organs', 'mind', 'complete list'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'prashna',
    section: 4,
    verse: 9,
    sanskrit: 'एष हि द्रष्टा स्प्रष्टा श्रोता घ्राता रसयिता मन्ता बोद्धा कर्ता विज्ञानात्मा पुरुषः। स परेऽक्षर आत्मनि सम्प्रतिष्ठते॥',
    transliteration: 'eṣa hi draṣṭā spraṣṭā śrotā ghrātā rasayitā mantā boddhā kartā vijñānātmā puruṣaḥ | sa pare\'kṣara ātmani sampratiṣṭhate ||',
    translation: '"For this is the seer, toucher, hearer, smeller, taster, thinker, knower, doer - the conscious person. This rests in the supreme, imperishable Self."',
    explanation: {
      simple: 'The individual self - the one who sees, hears, thinks, acts - is really the conscious person (Purusha). This rests in the supreme, unchanging Self.',
      deeper: 'The jiva (individual soul) is established in Atman (supreme Self). The perceiving subject finds its ground in the imperishable reality.',
    },
    practicalApplication: 'You, the experiencer of all experiences, rest in something even deeper - the imperishable Self.',
    themes: ['seer', 'knower', 'doer', 'imperishable Self'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'prashna',
    section: 4,
    verse: 10,
    sanskrit: 'परमेवाक्षरं प्रतिपद्यते स यो ह वै तदच्छायमशरीरमलोहितं शुभ्रमक्षरं वेदयते यस्तु सोम्य। स सर्वज्ञः सर्वो भवति तदेष श्लोकः॥',
    transliteration: 'paramevākṣaraṃ pratipadyate sa yo ha vai tadacchāyamaśarīramalohitaṃ śubhramakṣaraṃ vedayate yastu somya | sa sarvajñaḥ sarvo bhavati tadeṣa ślokaḥ ||',
    translation: '"One who knows that imperishable - shadowless, bodiless, bloodless, pure, imperishable - O dear one, becomes all-knowing, becomes all. On this there is a verse:"',
    explanation: {
      simple: 'One who realizes the imperishable Self - which has no shadow, no body, no blood - becomes omniscient and one with all.',
      deeper: 'The attributes describe pure consciousness: no shadow (self-luminous), no body (transcendent), no blood (not biological). Knowing this, one becomes infinite.',
    },
    practicalApplication: 'Seek that which is beyond all physical attributes. In knowing the formless, you become unlimited.',
    themes: ['imperishable', 'shadowless', 'all-knowing', 'becomes all'],
    difficulty: 'advanced',
    famousVerse: true,
  },
  {
    upanishad: 'prashna',
    section: 4,
    verse: 11,
    sanskrit: 'विज्ञानात्मा सह देवैश्च सर्वैः प्राणा भूतानि सम्प्रतिष्ठन्ति यत्र। तदक्षरं वेदयते यस्तु सोम्य स सर्वज्ञः सर्वमेवाविवेशेति॥',
    transliteration: 'vijñānātmā saha devaiśca sarvaiḥ prāṇā bhūtāni sampratiṣṭhanti yatra | tadakṣaraṃ vedayate yastu somya sa sarvajñaḥ sarvamevāviveśeti ||',
    translation: '"Where the conscious self, together with all the gods, pranas, and elements, is established - one who knows that imperishable, O dear one, becomes all-knowing and enters into all."',
    explanation: {
      simple: 'Everything - the conscious self, the gods (senses), the pranas, and all elements - is established in the imperishable. Knowing this, one enters into everything.',
      deeper: 'Liberation is entering into the all-pervading reality. The knower becomes the known - consciousness recognizes itself as the ground of all.',
    },
    practicalApplication: 'All diversity rests in one undivided reality. Know this and transcend the illusion of separation.',
    themes: ['all established', 'imperishable', 'enters all', 'liberation'],
    difficulty: 'advanced',
  },
];

// =============================================================================
// PRASHNA 5: MEDITATION ON OM (7 verses)
// Question: What world does one attain by meditating on OM?
// =============================================================================

const prashna5Verses: UpanishadVerse[] = [
  {
    upanishad: 'prashna',
    section: 5,
    verse: 1,
    sanskrit: 'अथ हैनं शैब्यः सत्यकामः पप्रच्छ। स यो ह वै तद्भगवन्मनुष्येषु प्रायणान्तमोंकारमभिध्यायीत कतमं वाव स तेन लोकं जयतीति॥',
    transliteration: 'atha hainaṃ śaibyaḥ satyakāmaḥ papraccha | sa yo ha vai tadbhagavanmanuṣyeṣu prāyaṇāntamoṃkāramabhidhyāyīta katamaṃ vāva sa tena lokaṃ jayatīti ||',
    translation: 'Then Satyakama Shibi asked: "Lord, if someone among humans meditates on OM until death, which world does he attain by that?"',
    explanation: {
      simple: 'The fifth question concerns OM meditation: What result does continuous meditation on OM bring?',
      deeper: 'This question elevates the discussion to the practice of upasana (meditation) and its fruits in terms of attainment.',
    },
    practicalApplication: 'Consider: What would happen if you meditated on OM throughout your life until death?',
    themes: ['OM', 'meditation', 'life-long practice', 'attainment'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'prashna',
    section: 5,
    verse: 2,
    sanskrit: 'तस्मै स होवाच। एतद्वै सत्यकाम परं चापरं च ब्रह्म यदोंकारः। तस्माद्विद्वानेतेनैवायतनेनैकतरमन्वेति॥',
    transliteration: 'tasmai sa hovāca | etadvai satyakāma paraṃ cāparaṃ ca brahma yadomkāraḥ | tasmādvidvānetenaivāyatanenaikataramanveti ||',
    translation: 'The sage replied: "O Satyakama, OM is both the higher (para) and lower (apara) Brahman. Therefore, the wise one, through this very means, attains one or the other."',
    explanation: {
      simple: 'OM represents both the manifest and unmanifest Brahman. Depending on how one meditates, one reaches either the higher or lower goal.',
      deeper: 'OM is the sound-form of reality at all levels. Saguna (with qualities) and Nirguna (without qualities) Brahman are both accessed through OM.',
    },
    practicalApplication: 'OM is the gateway to all levels of reality. Your depth of practice determines which level you reach.',
    themes: ['OM', 'higher Brahman', 'lower Brahman', 'means'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'prashna',
    section: 5,
    verse: 3,
    sanskrit: 'स यद्येकमात्रमभिध्यायीत स तेनैव संवेदितस्तूर्णमेव जगत्यामभिसम्पद्यते। तमृचो मनुष्यलोकमुपनयन्ते स तत्र तपसा ब्रह्मचर्येण श्रद्धया सम्पन्नो महिमानमनुभवति॥',
    transliteration: 'sa yadyekamātramabhidhyāyīta sa tenaiva saṃveditastūrṇameva jagatyāmabhisampadyate | tamṛco manuṣyalokamupanayante sa tatra tapasā brahmacaryeṇa śraddhayā sampanno mahimānamanubhavati ||',
    translation: '"If one meditates on OM with only one syllable (matra), thus informed, one quickly returns to the earth. The Rig Vedic hymns lead him to the human world, where, endowed with austerity, celibacy, and faith, he experiences greatness."',
    explanation: {
      simple: 'Meditating on OM superficially (one matra) leads to quick rebirth on earth, but with spiritual qualities that bring greatness.',
      deeper: 'Partial practice yields partial results. One-matra meditation brings human rebirth with good tendencies.',
    },
    practicalApplication: 'Even basic OM meditation improves your next life. But go deeper for higher results.',
    themes: ['one matra', 'human rebirth', 'greatness', 'partial practice'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'prashna',
    section: 5,
    verse: 4,
    sanskrit: 'अथ यदि द्विमात्रेण मनसि सम्पद्यते सोऽन्तरिक्षं यजुर्भिरुन्नीयते सोमलोकम्। स सोमलोके विभूतिमनुभूय पुनरावर्तते॥',
    transliteration: 'atha yadi dvimātreṇa manasi sampadyate so\'ntarikṣaṃ yajurbhirunnīyate somalokam | sa somaloke vibhūtimanubhūya punarāvartate ||',
    translation: '"If one meditates with two syllables (matras), one attains the mind (mental realm). One is led by the Yajur Veda to the lunar world. Having experienced glory in the lunar world, one returns again."',
    explanation: {
      simple: 'Two-matra meditation leads to the intermediate realm (the moon/mental world). After enjoying its glories, one returns to earth.',
      deeper: 'The lunar world represents the realm of mind and subtle experience. Enjoyment there is temporary; return is inevitable.',
    },
    practicalApplication: 'Intermediate practice brings intermediate results - heavenly experience, but still within the cycle.',
    themes: ['two matras', 'lunar world', 'return', 'mental realm'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'prashna',
    section: 5,
    verse: 5,
    sanskrit: 'यः पुनरेतं त्रिमात्रेणोमित्येतेनैवाक्षरेण परं पुरुषमभिध्यायीत स तेजसि सूर्ये सम्पन्नः। यथा पादोदरस्त्वचा विनिर्मुच्यत एवं ह वै स पाप्मना विनिर्मुक्तः स सामभिरुन्नीयते ब्रह्मलोकं स एतस्माज्जीवघनात्परात्परं पुरिशयं पुरुषमीक्षते तदेतौ श्लोकौ भवतः॥',
    transliteration: 'yaḥ punaretaṃ trimātreṇomityetenaivākṣareṇa paraṃ puruṣamabhidhyāyīta sa tejasi sūrye sampannaḥ | yathā pādodarastvacā vinirmucyata evaṃ ha vai sa pāpmanā vinirmuktaḥ sa sāmabhirunnīyate brahmalokam sa etasmājjīvaghanātparātparaṃ puriśayaṃ puruṣamīkṣate tadetau ślokau bhavataḥ ||',
    translation: '"But one who meditates on the supreme Person with all three matras of OM becomes united with the light in the sun. As a snake is freed from its skin, so is one freed from sin. One is led by the Sama Veda to the world of Brahma. From this mass of life, one sees the supreme Person dwelling in the city (body). On this, there are two verses:"',
    explanation: {
      simple: 'Full three-matra OM meditation leads to the sun (ultimate light) and the world of Brahma. One sheds sin like a snake sheds skin, and sees the supreme Person.',
      deeper: 'Complete practice yields complete results. The snake-skin metaphor shows total liberation from past karma. One attains Brahmaloka.',
    },
    practicalApplication: 'Commit to complete OM meditation - all three matras, with full understanding. This leads to liberation.',
    themes: ['three matras', 'sun', 'liberation', 'snake-skin', 'Brahmaloka'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'prashna',
    section: 5,
    verse: 6,
    sanskrit: 'तिस्रो मात्रा मृत्युमत्यः प्रयुक्ता अन्योन्यसक्ताः अनविप्रयुक्ताः। क्रियासु बाह्याभ्यन्तरमध्यमासु सम्यक्प्रयुक्तासु न कम्पते ज्ञः॥',
    transliteration: 'tisro mātrā mṛtyumatyaḥ prayuktā anyonyasaktāḥ anaviprayuktāḥ | kriyāsu bāhyābhyantaramadhyamāsu samyakprayuktāsu na kampate jñaḥ ||',
    translation: '"The three matras, when used subject to death, are connected to each other and not separated. In external, internal, and middle actions, when properly used, the knower does not tremble."',
    explanation: {
      simple: 'When the three parts of OM (A-U-M) are practiced properly in all activities - outer, inner, and middle - the wise person becomes unshakeable.',
      deeper: 'The three matras correspond to waking (external), dreaming (internal), and deep sleep (middle). Mastery of all three brings stability.',
    },
    practicalApplication: 'Practice OM in all states and activities. This brings unshakeable inner peace.',
    themes: ['three matras', 'activities', 'stability', 'unshakeable'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'prashna',
    section: 5,
    verse: 7,
    sanskrit: 'ऋग्भिरेतं यजुर्भिरन्तरिक्षं सामभिर्यत्तत्कवयो वेदयन्ते। तमोंकारेणैवायतनेनान्वेति विद्वान्यत्तच्छान्तमजरममृतमभयं परं चेति॥',
    transliteration: 'ṛgbhiretaṃ yajurbhirantarikṣaṃ sāmabhiryattatkavayo vedayante | tamoṃkāreṇaivāyatanenānveti vidvānyattacchāntamajramamṛtamabhayaṃ paraṃ ceti ||',
    translation: '"Through the Rig Veda (one attains) this world, through the Yajur Veda the intermediate realm, through the Sama Veda that which the seers know. Through OM alone as the means, the wise one attains that which is peaceful, undecaying, immortal, fearless, and supreme."',
    explanation: {
      simple: 'The three Vedas correspond to three worlds. But through OM, one reaches the ultimate: peaceful, immortal, fearless, supreme.',
      deeper: 'OM transcends all three Vedas and their goals. It is the direct path to the absolute - beyond birth, death, and fear.',
    },
    practicalApplication: 'OM is the supreme practice. Through it, attain what is beyond all limitation - the peaceful, immortal, fearless reality.',
    themes: ['three Vedas', 'OM supreme', 'peaceful', 'immortal', 'fearless'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
];

// =============================================================================
// PRASHNA 6: THE SIXTEEN-PARTED PERSON (8 verses)
// Question: Where is the sixteen-parted Person?
// =============================================================================

const prashna6Verses: UpanishadVerse[] = [
  {
    upanishad: 'prashna',
    section: 6,
    verse: 1,
    sanskrit: 'अथ हैनं सुकेशा भारद्वाजः पप्रच्छ। भगवन्हिरण्यनाभः कौसल्यो राजपुत्रो मामुपेत्यैतं प्रश्नमपृच्छत। षोडशकलं भारद्वाज पुरुषं वेत्थ। तमहं कुमारमब्रुवं नाहमिमं वेद। यद्यहमिममवेदिषं कथं ते नावक्ष्यमिति। समूलो वा एष परिशुष्यति योऽनृतमभिवदति तस्मान्नार्हाम्यनृतं वक्तुमिति। स तूष्णीं रथमारुह्य प्रवव्राज। तं त्वा पृच्छामि क्वासौ पुरुष इति॥',
    transliteration: 'atha hainaṃ sukeśā bhāradvājaḥ papraccha | bhagavanhiraṇyanābhaḥ kausalyo rājaputro māmupetyaitaṃ praśnamapṛcchata | ṣoḍaśakalaṃ bhāradvāja puruṣaṃ vettha | tamahaṃ kumāramabruvaṃ nāhamimaṃ veda | yadyahamimamavedṣaṃ kathaṃ te nāvakṣyamiti | samūlo vā eṣa pariśuṣyati yo\'nṛtamabhivadati tasmānnārhāmyanṛtaṃ vaktumiti | sa tūṣṇīṃ rathamāruhya pravavrāja | taṃ tvā pṛcchāmi kvāsau puruṣa iti ||',
    translation: 'Then Sukesha Bharadvaja asked: "Lord, prince Hiranyabha Kausalya once came to me and asked: Do you know the Person of sixteen parts, O Bharadvaja? I told the young man: I do not know him. If I knew, how would I not tell you? One who speaks untruth withers from the root. Therefore I must not speak untruth. He silently mounted his chariot and departed. I now ask you: Where is that Person?"',
    explanation: {
      simple: 'Sukesha admits he could not answer a prince\'s question about the sixteen-parted Person. He was honest rather than pretend knowledge. Now he asks Pippalada.',
      deeper: 'The story illustrates intellectual honesty. False teachers dry up at the root. True seekers acknowledge ignorance and seek qualified masters.',
    },
    practicalApplication: 'Be honest about what you know and do not know. Pretending wisdom destroys spiritual progress.',
    themes: ['honesty', 'sixteen parts', 'humility', 'true teacher'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'prashna',
    section: 6,
    verse: 2,
    sanskrit: 'तस्मै स होवाचेहैवान्तःशरीरे सोम्य स पुरुषो यस्मिन्नेताः षोडश कलाः प्रभवन्तीति॥',
    transliteration: 'tasmai sa hovācehaiventaḥśarīre somya sa puruṣo yasminnetāḥ ṣoḍaśa kalāḥ prabhavantīti ||',
    translation: 'The sage replied: "Here within this very body, dear one, is that Person in whom these sixteen parts arise."',
    explanation: {
      simple: 'The sixteen-parted Person is not far away - He is within this body. The sixteen parts arise from this inner Person.',
      deeper: 'The search ends within. The cosmic Person (Purusha) is the inner Self from which all aspects of experience emanate.',
    },
    practicalApplication: 'Do not seek the ultimate reality elsewhere. It is within you, right now, as the source of your being.',
    themes: ['within the body', 'sixteen parts', 'inner Person'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'prashna',
    section: 6,
    verse: 3,
    sanskrit: 'स ईक्षांचक्रे कस्मिन्नहमुत्क्रान्त उत्क्रान्तो भविष्यामि कस्मिन्वा प्रतिष्ठिते प्रतिष्ठास्यामीति॥',
    transliteration: 'sa īkṣāṃcakre kasminnnahamutkrānta utkrānto bhaviṣyāmi kasminvā pratiṣṭhite pratiṣṭhāsyāmīti ||',
    translation: '"He (the Person) thought: In whose departure will I depart? In whose staying will I stay?"',
    explanation: {
      simple: 'The Person contemplated: When what leaves, will I leave? When what stays, will I stay? This reveals the relationship between Self and parts.',
      deeper: 'The Self wonders about its relationship to its projections. If the parts leave, does the whole leave? This is the inquiry into manifestation.',
    },
    practicalApplication: 'Consider: What is your relationship to your body, mind, and senses? When they change, what changes?',
    themes: ['inquiry', 'departure', 'staying', 'relationship'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'prashna',
    section: 6,
    verse: 4,
    sanskrit: 'स प्राणमसृजत प्राणाच्छ्रद्धां खं वायुर्ज्योतिरापः पृथिवीन्द्रियं मनः। अन्नमन्नाद्वीर्यं तपो मन्त्राः कर्म लोका लोकेषु च नाम च॥',
    transliteration: 'sa prāṇamasṛjata prāṇācchraddhāṃ khaṃ vāyurjyotirāpaḥ pṛthivīndriyaṃ manaḥ | annamannādvīryaṃ tapo mantrāḥ karma lokā lokeṣu ca nāma ca ||',
    translation: '"He created Prana; from Prana: faith, space, air, fire, water, earth, senses, mind; from mind: food; from food: vigor, austerity, mantras, action, worlds, and name in worlds."',
    explanation: {
      simple: 'The Person created Prana first. From Prana came all the elements, senses, mind. From mind came food, and from food came all activities and the worlds.',
      deeper: 'The order of creation: Consciousness → Prana → Elements → Mind → Physical world. The sixteen parts are listed here.',
    },
    practicalApplication: 'Trace everything back to its source: world → food → mind → senses → elements → Prana → Consciousness.',
    themes: ['creation', 'sixteen parts', 'Prana first', 'emanation'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'prashna',
    section: 6,
    verse: 5,
    sanskrit: 'स यथेमा नद्यः स्यन्दमानाः समुद्रायणाः समुद्रं प्राप्यास्तं गच्छन्ति भिद्येते तासां नामरूपे समुद्र इत्येवं प्रोच्यते। एवमेवास्य परिद्रष्टुरिमाः षोडश कलाः पुरुषायणाः पुरुषं प्राप्यास्तं गच्छन्ति भिद्येते चासां नामरूपे पुरुष इत्येवं प्रोच्यते स एषोऽकलोऽमृतो भवति तदेष श्लोकः॥',
    transliteration: 'sa yathemā nadyaḥ syandamānāḥ samudrāyaṇāḥ samudraṃ prāpyāstaṃ gacchanti bhidyete tāsāṃ nāmarūpe samudra ityevaṃ procyate | evamevāsya paridraṣṭurimāḥ ṣoḍaśa kalāḥ puruṣāyaṇāḥ puruṣaṃ prāpyāstaṃ gacchanti bhidyete cāsāṃ nāmarūpe puruṣa ityevaṃ procyate sa eṣo\'kalo\'mṛto bhavati tadeṣa ślokaḥ ||',
    translation: '"Just as these rivers, flowing toward the ocean, upon reaching the ocean disappear, their name and form being dissolved - they are simply called \'ocean\' - so also these sixteen parts of the witnessing Person, flowing toward the Person, upon reaching the Person disappear, their name and form being dissolved - it is simply called \'Person.\' That one becomes partless and immortal. On this, there is a verse:"',
    explanation: {
      simple: 'Rivers lose their names and forms when they merge into the ocean. Similarly, the sixteen parts dissolve into the Person, becoming partless and immortal.',
      deeper: 'This is the famous river-ocean metaphor for liberation. Individual distinctions merge into the infinite. Names and forms are temporary; the essence is eternal.',
    },
    practicalApplication: 'Like a river reaching the ocean, let your limited self merge into the infinite Self. In that merging is immortality.',
    themes: ['rivers', 'ocean', 'dissolution', 'name and form', 'immortal'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'prashna',
    section: 6,
    verse: 6,
    sanskrit: 'अरा इव रथनाभौ कला यस्मिन्प्रतिष्ठिताः। तं वेद्यं पुरुषं वेद यथा मा वो मृत्युः परिव्यथा इति॥',
    transliteration: 'arā iva rathanābhau kalā yasminpratiṣṭhitāḥ | taṃ vedyaṃ puruṣaṃ veda yathā mā vo mṛtyuḥ parivyathā iti ||',
    translation: '"The parts are established in Him as spokes in a wheel\'s hub. Know that Person who is to be known, so that death may not grieve you."',
    explanation: {
      simple: 'All sixteen parts depend on the Person as spokes depend on the hub. Know this Person and death will not trouble you.',
      deeper: 'The wheel metaphor again: the Person is the center around which all else revolves. Knowledge of this center liberates from the fear of death.',
    },
    practicalApplication: 'Find your center - the unchanging Self. With that knowledge, death loses its power to frighten.',
    themes: ['wheel hub', 'spokes', 'death', 'liberation from fear'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    upanishad: 'prashna',
    section: 6,
    verse: 7,
    sanskrit: 'तान्होवाचैतावदेवाहमेतत्परं ब्रह्म वेद नातः परमस्तीति॥',
    transliteration: 'tānhovācaitāvaddevāhametatparaṃ brahma veda nātaḥ paramastīti ||',
    translation: 'The sage said to them: "This much indeed I know of the supreme Brahman. There is nothing higher than this."',
    explanation: {
      simple: 'Pippalada concludes: This is my complete knowledge of Brahman. Nothing is higher than what I have taught.',
      deeper: 'The teacher humbly states the extent of his knowledge while affirming that this knowledge reaches the ultimate. Nothing transcends Brahman.',
    },
    practicalApplication: 'Accept that some teachers have reached the highest. Receive their teaching with gratitude and practice it.',
    themes: ['conclusion', 'supreme Brahman', 'nothing higher', 'complete teaching'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'prashna',
    section: 6,
    verse: 8,
    sanskrit: 'ते तमर्चयन्तस्त्वं हि नः पिता योऽस्माकमविद्यायाः परं पारं तारयसीति। नमः परमऋषिभ्यो नमः परमऋषिभ्यः॥',
    transliteration: 'te tamarcayantastvaṃ hi naḥ pitā yo\'smākam avidyāyāḥ paraṃ pāraṃ tārayasīti | namaḥ paramaṛṣibhyo namaḥ paramaṛṣibhyaḥ ||',
    translation: 'They praised him: "You indeed are our father, who ferry us to the far shore beyond ignorance. Salutations to the supreme sages! Salutations to the supreme sages!"',
    explanation: {
      simple: 'The six seekers honor Pippalada as a spiritual father who has carried them across the ocean of ignorance. The Upanishad ends with salutations to the great sages.',
      deeper: 'The guru is the ferry-master who takes disciples across the ocean of ignorance to the shore of knowledge. Repeated salutations express profound gratitude.',
    },
    practicalApplication: 'Honor your teachers who guide you from darkness to light. They are spiritual parents worthy of highest respect.',
    themes: ['gratitude', 'father', 'ferry across', 'salutations', 'conclusion'],
    difficulty: 'beginner',
    famousVerse: true,
  },
];

// =============================================================================
// SECTION DEFINITIONS
// =============================================================================

const prashna1: UpanishadSection = {
  number: 1,
  name: {
    sanskrit: 'प्रथम प्रश्न',
    english: 'The Origin of Creation',
  },
  summary: 'Kabandhi asks: From where are creatures born? The answer: Prajapati created Rayi (matter) and Prana (life-energy). The sun is Prana; the moon is Rayi. Two paths after death: the southern path leads to return, the northern path leads to liberation.',
  verses: prashna1Verses,
  isCurated: false,
};

const prashna2: UpanishadSection = {
  number: 2,
  name: {
    sanskrit: 'द्वितीय प्रश्न',
    english: 'The Primacy of Prana',
  },
  summary: 'Bhargava asks: How many gods support the body? Which is greatest? Answer: Nine powers (elements and senses) but Prana is supreme. Like bees following the queen, all faculties depend on Prana. A beautiful hymn praises Prana as all gods, the cosmic fire, and our protecting mother.',
  verses: prashna2Verses,
  isCurated: false,
};

const prashna3: UpanishadSection = {
  number: 3,
  name: {
    sanskrit: 'तृतीय प्रश्न',
    english: 'The Source and Functions of Prana',
  },
  summary: 'Kausalya asks: From where is Prana born? How does it enter and function in the body? Answer: Prana is born from the Self. Like a king deploying officers, it assigns five pranas to different body regions. The heart has 72,000 nadis. One\'s last thought determines rebirth.',
  verses: prashna3Verses,
  isCurated: false,
};

const prashna4: UpanishadSection = {
  number: 4,
  name: {
    sanskrit: 'चतुर्थ प्रश्न',
    english: 'Dream, Deep Sleep, and the Self',
  },
  summary: 'Gargya asks: What sleeps and what wakes in a person? Who sees dreams? Who experiences the bliss of deep sleep? In whom are all these established?',
  verses: prashna4Verses,
  isCurated: false,
  totalVerses: 11,
};

const prashna5: UpanishadSection = {
  number: 5,
  name: {
    sanskrit: 'पञ्चम प्रश्न',
    english: 'Meditation on OM',
  },
  summary: 'Satyakama asks: What world does one attain by meditating on OM? The answer reveals the power of OM meditation at different levels.',
  verses: prashna5Verses,
  isCurated: false,
  totalVerses: 7,
};

const prashna6: UpanishadSection = {
  number: 6,
  name: {
    sanskrit: 'षष्ठ प्रश्न',
    english: 'The Sixteen-Parted Person',
  },
  summary: 'Sukesha asks about the sixteen-parted Person (Purusha). The sage reveals that the sixteen parts arise from and dissolve back into the Purusha, like rivers into the ocean.',
  verses: prashna6Verses,
  isCurated: false,
  totalVerses: 8,
};

// =============================================================================
// MAIN EXPORT
// =============================================================================

export const prashnaUpanishad: Upanishad = {
  id: 'prashna',
  name: {
    sanskrit: 'प्रश्नोपनिषद्',
    english: 'Prashna Upanishad',
    meaning: 'The Upanishad of Questions',
  },
  veda: 'atharva',
  summary: 'Six seekers approach sage Pippalada with six profound questions about creation, life-force (Prana), sleep, OM meditation, and the ultimate Person. Each answer builds on the previous, creating a comprehensive teaching on the nature of reality and the path to liberation.',
  keyTeachings: [
    'Creation arises from the union of Rayi (matter) and Prana (life-energy)',
    'Two paths after death: southern (return) and northern (liberation)',
    'Prana is the supreme power - all senses and faculties depend on it',
    'Prana is born from the Self and enters the body through mind\'s karma',
    'Five pranas govern different body functions',
    'The last thought at death determines the next birth',
    'Meditation on OM leads to higher worlds',
    'The sixteen parts of a person dissolve back into Purusha at liberation',
  ],
  totalVerses: 67,
  includedVerses: 67,
  sections: [prashna1, prashna2, prashna3, prashna4, prashna5, prashna6],
  difficulty: 'intermediate',
  estimatedReadTime: '40 min',
};

export default prashnaUpanishad;
