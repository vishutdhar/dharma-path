/**
 * Mundaka Upanishad (मुण्डकोपनिषद्)
 *
 * One of the principal Upanishads, teaching the distinction between
 * higher knowledge (para vidya) and lower knowledge (apara vidya).
 * Contains the famous "two birds on a tree" metaphor and the
 * bow-arrow-target imagery for meditation.
 *
 * From: Atharva Veda
 * Structure: 3 Mundakas (chapters), 6 Sections, 64 verses
 */

import { Upanishad, UpanishadVerse, UpanishadSection } from './types';

// =============================================================================
// SECTION 1: THE TRADITION OF KNOWLEDGE (Mundaka 1, Khanda 1)
// Verses 1-9: The lineage of sacred knowledge
// =============================================================================

const section1Verses: UpanishadVerse[] = [
  {
    upanishad: 'mundaka',
    section: 1,
    verse: 1,
    sanskrit: 'ब्रह्मा देवानां प्रथमः संबभूव विश्वस्य कर्ता भुवनस्य गोप्ता। स ब्रह्मविद्यां सर्वविद्याप्रतिष्ठामथर्वाय ज्येष्ठपुत्राय प्राह॥',
    transliteration: 'brahmā devānāṃ prathamaḥ saṃbabhūva viśvasya kartā bhuvanasya goptā | sa brahmavidyāṃ sarvavidyāpratiṣṭhāmatharvāya jyeṣṭhaputrāya prāha ||',
    translation: 'Brahma, the creator of the universe and protector of the world, arose first among the gods. He taught the knowledge of Brahman, the foundation of all knowledge, to his eldest son Atharva.',
    explanation: {
      simple: 'The Upanishad begins by tracing the lineage of this sacred knowledge. Brahma, the creator god, first taught this wisdom to his son Atharva.',
      deeper: 'Brahma-vidya (knowledge of Brahman) is called the foundation of all knowledge because all other learning is incomplete without it.'
    },
    practicalApplication: 'Recognize that spiritual knowledge has been passed down through an unbroken lineage. You are part of this tradition.',
    themes: ['lineage', 'Brahma-vidya', 'tradition'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'mundaka',
    section: 1,
    verse: 2,
    sanskrit: 'अथर्वणे यां प्रवदेत ब्रह्माथर्वा तां पुरोवाचाङ्गिरे ब्रह्मविद्याम्। स भारद्वाजाय सत्यवहाय प्राह भारद्वाजोऽङ्गिरसे परावराम्॥',
    transliteration: 'atharvaṇe yāṃ pravadeta brahmātharvā tāṃ purovācāṅgire brahmavidyām | sa bhāradvājāya satyavahāya prāha bhāradvājo\'ṅgirase parāvarām ||',
    translation: 'Atharva taught this Brahma-vidya to Angir. Angir taught it to Satyavaha Bharadvaja, who in turn taught it to Angiras - both the higher and lower knowledge.',
    explanation: {
      simple: 'The knowledge passed from teacher to student: Atharva to Angir to Bharadvaja to Angiras. Each generation preserved and transmitted the wisdom.',
      deeper: 'The phrase "para-avara" (higher and lower) introduces the key distinction this Upanishad will elaborate.'
    },
    practicalApplication: 'Honor your teachers. Knowledge is a gift passed from generation to generation.',
    themes: ['guru-parampara', 'transmission', 'higher-lower'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'mundaka',
    section: 1,
    verse: 3,
    sanskrit: 'शौनको ह वै महाशालोऽङ्गिरसं विधिवदुपसन्नः पप्रच्छ। कस्मिन्नु भगवो विज्ञाते सर्वमिदं विज्ञातं भवतीति॥',
    transliteration: 'śaunako ha vai mahāśālo\'ṅgirasaṃ vidhivadupasannaḥ papraccha | kasminnubhagavo vijñāte sarvamidaṃ vijñātaṃ bhavatīti ||',
    translation: 'Shaunaka, a great householder, approached Angiras properly and asked: "Revered sir, what is that by knowing which everything becomes known?"',
    explanation: {
      simple: 'A wealthy householder named Shaunaka asks the ultimate question: Is there one thing whose knowledge reveals everything else?',
      deeper: 'This is the fundamental question of Vedanta. Shaunaka seeks the one knowledge that makes all other knowledge complete.'
    },
    practicalApplication: 'Ask yourself: What is the one thing I could know that would illuminate everything else?',
    themes: ['ultimate question', 'one knowledge', 'seeking'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    upanishad: 'mundaka',
    section: 1,
    verse: 4,
    sanskrit: 'तस्मै स होवाच। द्वे विद्ये वेदितव्ये इति ह स्म यद्ब्रह्मविदो वदन्ति परा चैवापरा च॥',
    transliteration: 'tasmai sa hovāca | dve vidye veditavye iti ha sma yadbrahmavido vadanti parā caivāparā ca ||',
    translation: 'To him he said: "Two kinds of knowledge are to be known - this is what the knowers of Brahman declare - the higher (para) and the lower (apara)."',
    explanation: {
      simple: 'Angiras answers: There are two types of knowledge - higher and lower. Both must be understood, but they are different in nature.',
      deeper: 'This distinction between para vidya (liberating knowledge) and apara vidya (preparatory knowledge) is central to the Mundaka.'
    },
    practicalApplication: 'Distinguish between knowledge that prepares you and knowledge that liberates you. Both have their place.',
    themes: ['two knowledges', 'para vidya', 'apara vidya'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    upanishad: 'mundaka',
    section: 1,
    verse: 5,
    sanskrit: 'तत्रापरा ऋग्वेदो यजुर्वेदः सामवेदोऽथर्ववेदः शिक्षा कल्पो व्याकरणं निरुक्तं छन्दो ज्योतिषमिति। अथ परा यया तदक्षरमधिगम्यते॥',
    transliteration: 'tatrāparā ṛgvedo yajurvedaḥ sāmavedo\'tharvavedaḥ śikṣā kalpo vyākaraṇaṃ niruktaṃ chando jyotiṣamiti | atha parā yayā tadakṣaramadhigamyate ||',
    translation: 'Of these, the lower knowledge is the Rig Veda, Yajur Veda, Sama Veda, Atharva Veda, phonetics, ritual, grammar, etymology, meter, and astronomy. The higher is that by which the Imperishable is realized.',
    explanation: {
      simple: 'Lower knowledge includes all the Vedas and their auxiliary sciences. Higher knowledge is direct realization of the Imperishable Brahman.',
      deeper: 'This is revolutionary: even the sacred Vedas are "lower" knowledge! They prepare the mind but don\'t directly reveal Brahman.'
    },
    practicalApplication: 'Don\'t mistake preparation for realization. Study is important, but knowing about something isn\'t the same as knowing it directly.',
    themes: ['Vedas as lower', 'direct realization', 'Imperishable'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'mundaka',
    section: 1,
    verse: 6,
    sanskrit: 'यत्तदद्रेश्यमग्राह्यमगोत्रमवर्णमचक्षुःश्रोत्रं तदपाणिपादम्। नित्यं विभुं सर्वगतं सुसूक्ष्मं तदव्ययं यद्भूतयोनिं परिपश्यन्ति धीराः॥',
    transliteration: 'yattadadreśyamagrāhyamagotramavarṇamacakṣuḥśrotraṃ tadapāṇipādam | nityaṃ vibhuṃ sarvagataṃ susūkṣmaṃ tadavyayaṃ yadbhūtayoniṃ paripaśyanti dhīrāḥ ||',
    translation: 'That which is invisible, ungraspable, without origin or qualities, without eyes or ears, without hands or feet - eternal, all-pervading, omnipresent, extremely subtle, imperishable - that is what the wise perceive as the source of all beings.',
    explanation: {
      simple: 'Brahman is described through negation: not visible, not graspable, without body parts or qualities. Yet it is the source of everything.',
      deeper: 'The via negativa (neti neti) approach: Brahman transcends all descriptions yet is the womb (yoni) from which all beings emerge.'
    },
    practicalApplication: 'What you seek cannot be seen with eyes or grasped with hands. Look for that which is beyond all qualities.',
    themes: ['via negativa', 'source of beings', 'transcendent'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'mundaka',
    section: 1,
    verse: 7,
    sanskrit: 'यथोर्णनाभिः सृजते गृह्णते च यथा पृथिव्यामोषधयः संभवन्ति। यथा सतः पुरुषात्केशलोमानि तथाक्षरात्संभवतीह विश्वम्॥',
    transliteration: 'yathorṇanābhiḥ sṛjate gṛhṇate ca yathā pṛthivyāmoṣadhayaḥ saṃbhavanti | yathā sataḥ puruṣātkeśalomāni tathākṣarātsaṃbhavatīha viśvam ||',
    translation: 'As a spider sends forth and draws in its thread, as plants grow on the earth, as hair grows from a living person - so from the Imperishable arises everything here.',
    explanation: {
      simple: 'Three beautiful metaphors for creation: the spider creates from itself, plants emerge from earth, hair grows from a person. Similarly, the universe emerges from Brahman.',
      deeper: 'These metaphors show creation is not separate from the creator. The world emerges from Brahman like web from spider - made of the creator\'s own substance.'
    },
    practicalApplication: 'The universe is not separate from its source. You are not separate from that source.',
    themes: ['creation metaphors', 'spider', 'non-separation'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    upanishad: 'mundaka',
    section: 1,
    verse: 8,
    sanskrit: 'तपसा चीयते ब्रह्म ततोऽन्नमभिजायते। अन्नात्प्राणो मनः सत्यं लोकाः कर्मसु चामृतम्॥',
    transliteration: 'tapasā cīyate brahma tato\'nnamabhijāyate | annātprāṇo manaḥ satyaṃ lokāḥ karmasu cāmṛtam ||',
    translation: 'Through tapas (creative heat), Brahman expands. From it food is born. From food comes life-breath, mind, truth, the worlds, and immortality through actions.',
    explanation: {
      simple: 'Creation unfolds through divine heat (tapas): first food (matter), then life, then mind, then worlds, and finally the fruits of action.',
      deeper: 'This describes cosmic evolution from subtle to gross. Tapas is the creative power that drives manifestation.'
    },
    practicalApplication: 'Creative heat (focused intention) produces results. What are you generating through your tapas?',
    themes: ['tapas', 'creation sequence', 'evolution'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'mundaka',
    section: 1,
    verse: 9,
    sanskrit: 'यः सर्वज्ञः सर्वविद्यस्य ज्ञानमयं तपः। तस्मादेतद्ब्रह्म नाम रूपमन्नं च जायते॥',
    transliteration: 'yaḥ sarvajñaḥ sarvavidyasya jñānamayaṃ tapaḥ | tasmādetadbrahma nāma rūpamannaṃ ca jāyate ||',
    translation: 'From Him who is all-knowing, whose tapas consists of knowledge, from that Brahman are born name, form, and food.',
    explanation: {
      simple: 'The all-knowing Brahman, whose creative power is knowledge itself, gives rise to names (words), forms (shapes), and food (matter).',
      deeper: 'Brahman\'s tapas is not effort but the natural radiance of infinite knowledge. From this, the world of name and form emerges.'
    },
    practicalApplication: 'Behind all names and forms is one knowing presence. See through names to the nameless.',
    themes: ['all-knowing', 'name and form', 'knowledge as tapas'],
    difficulty: 'intermediate',
  },
];

// =============================================================================
// SECTION 2: LOWER VS HIGHER KNOWLEDGE (Mundaka 1, Khanda 2)
// Verses 1-13: The limitation of rituals
// =============================================================================

const section2Verses: UpanishadVerse[] = [
  {
    upanishad: 'mundaka',
    section: 2,
    verse: 1,
    sanskrit: 'तदेतत्सत्यं मन्त्रेषु कर्माणि कवयो यान्यपश्यंस्तानि त्रेतायां बहुधा संततानि। तान्याचरथ नियतं सत्यकामा एष वः पन्थाः सुकृतस्य लोके॥',
    transliteration: 'tadetatstatyaṃ mantreṣu karmāṇi kavayo yānyapaśyaṃstāni tretāyāṃ bahudhā saṃtatāni | tānyācaratha niyataṃ satyakāmā eṣa vaḥ panthāḥ sukṛtasya loke ||',
    translation: 'This is the truth: the rituals which the sages saw in the mantras are variously elaborated in the three Vedas. Practice them constantly, you lovers of truth! This is your path to the world of good deeds.',
    explanation: {
      simple: 'The rituals described in the Vedas should be practiced by those seeking merit. This is the path of good action leading to good results.',
      deeper: 'This verse affirms the value of ritual (apara vidya) while setting up the contrast with higher knowledge.'
    },
    practicalApplication: 'Ritual and ethical action have their place. They purify the mind and prepare it for higher knowledge.',
    themes: ['ritual value', 'preparation', 'good deeds'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'mundaka',
    section: 2,
    verse: 2,
    sanskrit: 'यदा लेलायते ह्यर्चिः समिद्धे हव्यवाहने। तदाज्यभागावन्तरेणाहुतीः प्रतिपादयेत्॥',
    transliteration: 'yadā lelāyate hyarciḥ samiddhe havyavāhane | tadājyabhāgāvantareṇāhutīḥ pratipādayet ||',
    translation: 'When the flame flickers after the fire is kindled, then between the two portions of ghee one should offer the oblations.',
    explanation: {
      simple: 'Technical instruction for fire sacrifice: when the flame flickers properly, offer the oblations between the ghee portions.',
      deeper: 'The Upanishad describes ritual procedure before showing its limitations. Proper technique matters for ritual efficacy.'
    },
    practicalApplication: 'Whatever practice you do, do it correctly. Attention to detail matters in spiritual practice.',
    themes: ['ritual technique', 'fire sacrifice', 'precision'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'mundaka',
    section: 2,
    verse: 3,
    sanskrit: 'यस्याग्निहोत्रमदर्शमपौर्णमासमचातुर्मास्यमनाग्रयणमतिथिवर्जितं च। अहुतमवैश्वदेवमविधिना हुतमासप्तमांस्तस्य लोकान्हिनस्ति॥',
    transliteration: 'yasyāgnihotramadarśamapaurṇamāsamacāturmāsyamanāgrayaṇamatithivarjitaṃ ca | ahutamavaiśvadevamavидhinā hutamāsaptamāṃstasya lokānhinasti ||',
    translation: 'One whose fire sacrifice is without the new moon rite, full moon rite, four-monthly rites, harvest rite, without guests, without offerings, without the Vishvadeva rite, or performed improperly - it destroys his seven worlds.',
    explanation: {
      simple: 'Improper ritual performance doesn\'t just fail - it brings negative results. All the required elements must be present.',
      deeper: 'This shows ritual\'s double-edged nature: done properly it elevates, done improperly it harms. High stakes for ritual performers.'
    },
    practicalApplication: 'If you commit to a practice, do it fully and properly. Half-hearted efforts can be worse than none.',
    themes: ['proper ritual', 'consequences', 'commitment'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'mundaka',
    section: 2,
    verse: 4,
    sanskrit: 'काली कराली च मनोजवा च सुलोहिता या च सुधूम्रवर्णा। स्फुलिङ्गिनी विश्वरुची च देवी लेलायमाना इति सप्त जिह्वाः॥',
    transliteration: 'kālī karālī ca manojavā ca sulohitā yā ca sudhūmravarṇā | sphuliṅginī viśvarucī ca devī lelāyamānā iti sapta jihvāḥ ||',
    translation: 'Kali (black), Karali (terrifying), Manojava (swift as mind), Sulohita (deep red), Sudhumravarna (smoke-colored), Sphulingini (sparkling), and Vishvaruchi (all-gleaming) - these are the seven flickering tongues of fire.',
    explanation: {
      simple: 'The sacred fire is personified as having seven tongues with evocative names describing the flames\' different appearances.',
      deeper: 'Each tongue represents different aspects of the fire\'s transformative power. The fire is alive, conscious, divine.'
    },
    practicalApplication: 'See the sacred in natural phenomena. Fire is not just combustion - it\'s a living presence.',
    themes: ['fire worship', 'seven tongues', 'sacred fire'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'mundaka',
    section: 2,
    verse: 5,
    sanskrit: 'एतेषु यश्चरते भ्राजमानेषु यथाकालं चाहुतयो ह्याददायन्। तं नयन्त्येताः सूर्यस्य रश्मयो यत्र देवानां पतिरेकोऽधिवासः॥',
    transliteration: 'eteṣu yaścarate bhrājamāneṣu yathākālaṃ cāhutayo hyādadāyan | taṃ nayantyetāḥ sūryasya raśmayo yatra devānāṃ patireko\'dhivāsaḥ ||',
    translation: 'One who performs oblations in these shining flames at the proper times - these offerings carry him on the rays of the sun to where dwells the one lord of the gods.',
    explanation: {
      simple: 'Proper fire sacrifice at the right times carries the performer to heaven via the sun\'s rays, to the realm of Indra.',
      deeper: 'This describes the "path of the gods" (devayana) - good karma leads to heavenly realms via the solar path.'
    },
    practicalApplication: 'Sincere practice done properly does produce results. The path of action leads to higher realms.',
    themes: ['sun rays', 'heaven', 'path of gods'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'mundaka',
    section: 2,
    verse: 6,
    sanskrit: 'एह्येहीति तमाहुतयः सुवर्चसः सूर्यस्य रश्मिभिर्यजमानं वहन्ति। प्रियां वाचमभिवदन्त्योऽर्चयन्त्य एष वः पुण्यः सुकृतो ब्रह्मलोकः॥',
    transliteration: 'ehyehīti tamāhutayaḥ suvarcasaḥ sūryasya raśmibhiryajamānaṃ vahanti | priyāṃ vācamabhivadantyo\'rcayantya eṣa vaḥ puṇyaḥ sukṛto brahmalokaḥ ||',
    translation: '"Come, come!" say the radiant oblations, carrying the sacrificer on the sun\'s rays, praising him with pleasant words: "This is your meritorious Brahma-world, won by good deeds!"',
    explanation: {
      simple: 'The offerings themselves welcome and praise the ritualist, carrying him to the heavenly realm earned through his good actions.',
      deeper: 'Beautiful poetic imagery: the sacrifices become living beings that escort the performer to his reward.'
    },
    practicalApplication: 'Your good actions create positive forces that support and elevate you.',
    themes: ['merit', 'heavenly reward', 'personified offerings'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'mundaka',
    section: 2,
    verse: 7,
    sanskrit: 'प्लवा ह्येते अदृढा यज्ञरूपा अष्टादशोक्तमवरं येषु कर्म। एतच्छ्रेयो येऽभिनन्दन्ति मूढा जरामृत्युं ते पुनरेवापि यन्ति॥',
    transliteration: 'plavā hyete adṛḍhā yajñarūpā aṣṭādaśoktamavaraṃ yeṣu karma | etacchreyo ye\'bhinandanti mūḍhā jarāmṛtyuṃ te punarevāpi yanti ||',
    translation: 'But frail are these boats of the eighteen sacrificial forms in which the lower karma is expressed. The fools who delight in this as the highest good fall again into old age and death.',
    explanation: {
      simple: 'Now the limitation is revealed: rituals are like leaky boats. Those who think ritual is the highest path will age and die again.',
      deeper: 'This is the turning point: after describing ritual\'s benefits, the Upanishad reveals its fundamental limitation - it cannot liberate.'
    },
    practicalApplication: 'Don\'t mistake preparation for the goal. Good actions bring good results, but not liberation.',
    themes: ['ritual limitation', 'leaky boats', 'rebirth'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'mundaka',
    section: 2,
    verse: 8,
    sanskrit: 'अविद्यायामन्तरे वर्तमानाः स्वयं धीराः पण्डितंमन्यमानाः। जङ्घन्यमानाः परियन्ति मूढा अन्धेनैव नीयमाना यथान्धाः॥',
    transliteration: 'avidyāyāmantare vartamānāḥ svayaṃ dhīrāḥ paṇḍitaṃmanyamānāḥ | jaṅghanyamānāḥ pariyanti mūḍhā andhenaiva nīyamānā yathāndhāḥ ||',
    translation: 'Dwelling in the midst of ignorance, yet thinking themselves wise and learned, the deluded go round and round, afflicted, like the blind led by the blind.',
    explanation: {
      simple: 'Those who know only ritual think they are wise, but they wander in circles like blind people leading other blind people.',
      deeper: 'This verse (also in Katha) is the sharpest critique: religious knowledge without Self-knowledge is just sophisticated ignorance.'
    },
    practicalApplication: 'Don\'t assume knowledge equals wisdom. Question whether your learning leads to freedom or just more wandering.',
    themes: ['blind leading blind', 'false wisdom', 'delusion'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    upanishad: 'mundaka',
    section: 2,
    verse: 9,
    sanskrit: 'अविद्यायां बहुधा वर्तमाना वयं कृतार्था इत्यभिमन्यन्ति बालाः। यत्कर्मिणो न प्रवेदयन्ति रागात्तेनातुराः क्षीणलोकाश्च्यवन्ते॥',
    transliteration: 'avidyāyāṃ bahudhā vartamānā vayaṃ kṛtārthā ityabhimanyanti bālāḥ | yatkarmiṇo na pravedayanti rāgāttenāturāḥ kṣīṇalokāścyavante ||',
    translation: 'Living in ignorance in many ways, the childish think "We have accomplished our aim." Because ritualists, blinded by attachment, do not know (the Self), they fall from heaven when their merit is exhausted.',
    explanation: {
      simple: 'The immature think ritual success is the goal. But when heavenly merit runs out, they fall back down - their accomplishment was temporary.',
      deeper: 'Heaven is not liberation but a temporary reward. Attachment (raga) to results blinds one to the eternal Self.'
    },
    practicalApplication: 'Any achievement based on action will eventually be exhausted. Seek what cannot be depleted.',
    themes: ['temporary heaven', 'merit exhaustion', 'falling back'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'mundaka',
    section: 2,
    verse: 10,
    sanskrit: 'इष्टापूर्तं मन्यमाना वरिष्ठं नान्यच्छ्रेयो वेदयन्ते प्रमूढाः। नाकस्य पृष्ठे ते सुकृतेऽनुभूत्वेमं लोकं हीनतरं वा विशन्ति॥',
    transliteration: 'iṣṭāpūrtaṃ manyamānā variṣṭhaṃ nānyacchreyo vedayante pramūḍhāḥ | nākasya pṛṣṭhe te sukṛte\'nubhūtvemaṃ lokaṃ hīnataraṃ vā viśanti ||',
    translation: 'Thinking that sacrifices and charitable works are the highest, the deluded know nothing better. Having enjoyed their merit on heaven\'s heights, they enter this world or a lower one.',
    explanation: {
      simple: 'Those who think ritual and charity are the ultimate achievement enjoy heaven temporarily, then return to earth or worse.',
      deeper: 'Even the highest heavens are not permanent. The cycle continues until liberating knowledge is gained.'
    },
    practicalApplication: 'Charity and worship are good but not sufficient. Seek knowledge that ends the cycle.',
    themes: ['impermanent heaven', 'return', 'limitation of merit'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'mundaka',
    section: 2,
    verse: 11,
    sanskrit: 'तपःश्रद्धे ये ह्युपवसन्त्यरण्ये शान्ता विद्वांसो भैक्षचर्यां चरन्तः। सूर्यद्वारेण ते विरजाः प्रयान्ति यत्रामृतः स पुरुषो ह्यव्ययात्मा॥',
    transliteration: 'tapaḥśraddhe ye hyupavasantyaraṇye śāntā vidvāṃso bhaikṣacaryāṃ carantaḥ | sūryadvāreṇa te virajāḥ prayānti yatrāmṛtaḥ sa puruṣo hyavyayātmā ||',
    translation: 'But those who practice tapas and faith in the forest, peaceful, wise, living on alms - they pass through the sun\'s door, spotless, to where dwells that immortal, imperishable Purusha.',
    explanation: {
      simple: 'In contrast to ritualists, the forest-dwelling contemplatives who practice austerity and faith reach the immortal Purusha - permanent liberation.',
      deeper: 'This verse points to the higher path: not ritual but tapas, not social religion but forest contemplation, not heaven but the Imperishable.'
    },
    practicalApplication: 'Consider: What path leads to the permanent? Simplify, contemplate, seek the imperishable.',
    themes: ['forest dwellers', 'tapas', 'immortal Purusha'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'mundaka',
    section: 2,
    verse: 12,
    sanskrit: 'परीक्ष्य लोकान्कर्मचितान्ब्राह्मणो निर्वेदमायान्नास्त्यकृतः कृतेन। तद्विज्ञानार्थं स गुरुमेवाभिगच्छेत्समित्पाणिः श्रोत्रियं ब्रह्मनिष्ठम्॥',
    transliteration: 'parīkṣya lokānkarmacitānbrāhmaṇo nirvedamāyānnāstyakṛtaḥ kṛtena | tadvijñānārthaṃ sa gurumevābhigacchetsamitpāṇiḥ śrotriyaṃ brahmaniṣṭham ||',
    translation: 'Having examined the worlds won by karma, the Brahmin should arrive at dispassion: the uncreated cannot be attained by action. To know That, he should approach a teacher, fuel in hand, who is learned in scripture and established in Brahman.',
    explanation: {
      simple: 'After seeing that karma-based achievements are limited, one should develop dispassion and seek a qualified teacher for the higher knowledge.',
      deeper: 'This is the prescription: examine, become disillusioned with karma, then approach a realized teacher with humility (symbolized by fuel offering).'
    },
    practicalApplication: 'When you see action\'s limits, find a teacher established in truth. Approach with humility.',
    themes: ['dispassion', 'seek teacher', 'humility'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'mundaka',
    section: 2,
    verse: 13,
    sanskrit: 'तस्मै स विद्वानुपसन्नाय सम्यक्प्रशान्तचित्ताय शमान्विताय। येनाक्षरं पुरुषं वेद सत्यं प्रोवाच तां तत्त्वतो ब्रह्मविद्याम्॥',
    transliteration: 'tasmai sa vidvānupasannāya samyakpraśāntacittāya śamānvitāya | yenākṣaraṃ puruṣaṃ veda satyaṃ provāca tāṃ tattvato brahmavidyām ||',
    translation: 'To that student who has duly approached, whose mind is peaceful and controlled, the wise teacher truly teaches that Brahma-vidya by which one knows the imperishable Purusha, the Truth.',
    explanation: {
      simple: 'The qualified teacher teaches the truth about Brahman to the properly prepared student - one who approaches correctly with a peaceful, controlled mind.',
      deeper: 'Both teacher and student must be qualified. The teacher must know Brahman; the student must have peace and self-control.'
    },
    practicalApplication: 'Prepare yourself to receive teaching: cultivate peace and self-control. Then the truth can be transmitted.',
    themes: ['qualified student', 'transmission', 'Brahma-vidya'],
    difficulty: 'intermediate',
  },
];

// =============================================================================
// SECTION 3: BRAHMAN AS THE SOURCE (Mundaka 2, Khanda 1)
// Verses 1-10: The cosmic origin
// =============================================================================

const section3Verses: UpanishadVerse[] = [
  {
    upanishad: 'mundaka',
    section: 3,
    verse: 1,
    sanskrit: 'तदेतत्सत्यम्। यथा सुदीप्तात्पावकाद्विस्फुलिङ्गाः सहस्रशः प्रभवन्ते सरूपाः। तथाक्षराद्विविधाः सोम्य भावाः प्रजायन्ते तत्र चैवापि यन्ति॥',
    transliteration: 'tadetatsatyam | yathā sudīptātpāvakādvisphuliṅgāḥ sahasraśaḥ prabhavante sarūpāḥ | tathākṣarādvividhāḥ somya bhāvāḥ prajāyante tatra caivāpi yanti ||',
    translation: 'This is the truth: As from a blazing fire sparks of like nature fly forth by the thousands, so from the Imperishable, O gentle one, diverse beings come forth and return to it again.',
    explanation: {
      simple: 'Like countless sparks flying from a roaring fire and returning to it, all beings emerge from Brahman and return to Brahman.',
      deeper: 'The sparks are of the same nature as fire. Similarly, all beings are of the same nature as Brahman - not separate substances.'
    },
    practicalApplication: 'You are a spark of the infinite fire. Your nature is the same as the source.',
    themes: ['fire sparks', 'emergence', 'return'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    upanishad: 'mundaka',
    section: 3,
    verse: 2,
    sanskrit: 'दिव्यो ह्यमूर्तः पुरुषः सबाह्याभ्यन्तरो ह्यजः। अप्राणो ह्यमनाः शुभ्रो ह्यक्षरात्परतः परः॥',
    transliteration: 'divyo hyamūrtaḥ puruṣaḥ sabāhyābhyantaro hyajaḥ | aprāṇo hyamanāḥ śubhro hyakṣarātparataḥ paraḥ ||',
    translation: 'The divine Purusha is formless. He is both within and without, unborn, without breath, without mind, pure, higher than the highest Imperishable.',
    explanation: {
      simple: 'The supreme Person has no form, is everywhere (inside and outside), was never born, doesn\'t breathe or think, is pure, and transcends even the Imperishable.',
      deeper: 'This describes the para-Brahman - beyond even akshara (the imperishable). The absolute transcends all categories.'
    },
    practicalApplication: 'What you seek is beyond all description. Don\'t limit it to any concept.',
    themes: ['formless', 'transcendent', 'beyond imperishable'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'mundaka',
    section: 3,
    verse: 3,
    sanskrit: 'एतस्माज्जायते प्राणो मनः सर्वेन्द्रियाणि च। खं वायुर्ज्योतिरापः पृथिवी विश्वस्य धारिणी॥',
    transliteration: 'etasmājjāyate prāṇo manaḥ sarvendriyāṇi ca | khaṃ vāyurjyotirāpaḥ pṛthivī viśvasya dhāriṇī ||',
    translation: 'From Him arise life-breath, mind, and all the senses; space, air, fire, water, and earth - the supporter of all.',
    explanation: {
      simple: 'From Brahman emerge: prana (life-force), mind, senses, and the five elements - space, air, fire, water, earth.',
      deeper: 'This is the order of creation: from subtle (prana, mind) to gross (elements). The earth "supports all" as the final manifestation.'
    },
    practicalApplication: 'Everything you experience - breath, mind, senses, elements - has one source. Know that source.',
    themes: ['creation order', 'five elements', 'one source'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'mundaka',
    section: 3,
    verse: 4,
    sanskrit: 'अग्निर्मूर्धा चक्षुषी चन्द्रसूर्यौ दिशः श्रोत्रे वाग्विवृताश्च वेदाः। वायुः प्राणो हृदयं विश्वमस्य पद्भ्यां पृथिवी ह्येष सर्वभूतान्तरात्मा॥',
    transliteration: 'agnirmūrdhā cakṣuṣī candrasūryau diśaḥ śrotre vāgvivṛtāśca vedāḥ | vāyuḥ prāṇo hṛdayaṃ viśvamasya padbhyāṃ pṛthivī hyeṣa sarvabhūtāntarātmā ||',
    translation: 'Fire is His head, sun and moon His eyes, the directions His ears, the revealed Vedas His speech, air His breath, the universe His heart, earth His feet - He is the inner Self of all beings.',
    explanation: {
      simple: 'The cosmic Person\'s body is the universe: fire is head, sun/moon are eyes, directions are ears, Vedas are speech, air is breath, universe is heart, earth is feet.',
      deeper: 'This is the Virat Purusha - the cosmic form. Every part of creation is a limb of the divine body.'
    },
    practicalApplication: 'See the divine Person in all of creation. The universe is His body; you are part of it.',
    themes: ['cosmic Person', 'Virat', 'universe as body'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'mundaka',
    section: 3,
    verse: 5,
    sanskrit: 'तस्मादग्निः समिधो यस्य सूर्यः सोमात्पर्जन्य ओषधयः पृथिव्याम्। पुमान्रेतः सिञ्चति योषितायां बह्वीः प्रजाः पुरुषात्संप्रसूताः॥',
    transliteration: 'tasmādagniḥ samidho yasya sūryaḥ somātparjanya oṣadhayaḥ pṛthivyām | pumānretaḥ siñcati yoṣitāyāṃ bahvīḥ prajāḥ puruṣātsaṃprasūtāḥ ||',
    translation: 'From Him comes fire with the sun as fuel; from the moon comes rain; from rain come plants on earth; man sheds seed in woman - thus many creatures are born from the Purusha.',
    explanation: {
      simple: 'The cycle of creation: from Purusha comes fire/sun, from moon comes rain, rain grows plants, humans procreate - all beings come from the one Purusha.',
      deeper: 'This traces the chain of causation from the cosmic to the biological. All reproduction is ultimately from the one source.'
    },
    practicalApplication: 'Every birth is a manifestation of the cosmic Purusha. See the sacred in all life.',
    themes: ['cycle of creation', 'all from Purusha', 'sacred life'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'mundaka',
    section: 3,
    verse: 6,
    sanskrit: 'तस्माद्ऋचः साम यजूंषि दीक्षा यज्ञाश्च सर्वे क्रतवो दक्षिणाश्च। संवत्सरश्च यजमानश्च लोकाः सोमो यत्र पवते यत्र सूर्यः॥',
    transliteration: 'tasmādṛcaḥ sāma yajūṃṣi dīkṣā yajñāśca sarve kratavo dakṣiṇāśca | saṃvatsaraśca yajamānaśca lokāḥ somo yatra pavate yatra sūryaḥ ||',
    translation: 'From Him come the Rig, Sama, and Yajur Vedas, initiation, all sacrifices, rituals, gifts, the year, the sacrificer, and the worlds where the moon shines and the sun.',
    explanation: {
      simple: 'From Purusha come all the Vedas, all rituals, time itself (the year), those who sacrifice, and all the worlds illumined by sun and moon.',
      deeper: 'Even the means of worship (Vedas, rituals) emerge from the one being worshipped. The worshipper and worshipped are not separate.'
    },
    practicalApplication: 'Your practice itself comes from the divine. Worship and worshipped are one.',
    themes: ['Vedas from Purusha', 'ritual source', 'unity'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'mundaka',
    section: 3,
    verse: 7,
    sanskrit: 'तस्माच्च देवा बहुधा संप्रसूताः साध्या मनुष्याः पशवो वयांसि। प्राणापानौ व्रीहियवौ तपश्च श्रद्धा सत्यं ब्रह्मचर्यं विधिश्च॥',
    transliteration: 'tasmācca devā bahudhā saṃprasūtāḥ sādhyā manuṣyāḥ paśavo vayāṃsi | prāṇāpānau vrīhiyavau tapaśca śraddhā satyaṃ brahmacaryaṃ vidhiśca ||',
    translation: 'From Him come the many gods, celestial beings, humans, animals, birds; inhalation and exhalation; rice and barley; tapas, faith, truth, continence, and the law.',
    explanation: {
      simple: 'From Purusha come all beings (gods, humans, animals, birds), the vital breaths, grains, and spiritual qualities like faith, truth, and self-control.',
      deeper: 'Not just material beings but spiritual virtues themselves come from Brahman. Tapas, shraddha, satya, brahmacharya - all divine gifts.'
    },
    practicalApplication: 'Your capacity for truth, faith, and self-discipline is divine in origin. Honor these gifts.',
    themes: ['all beings', 'virtues from Brahman', 'divine gifts'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'mundaka',
    section: 3,
    verse: 8,
    sanskrit: 'सप्त प्राणाः प्रभवन्ति तस्मात्सप्तार्चिषः समिधः सप्त होमाः। सप्त इमे लोका येषु चरन्ति प्राणा गुहाशया निहिताः सप्त सप्त॥',
    transliteration: 'sapta prāṇāḥ prabhavanti tasmātsaptārciṣaḥ samidhaḥ sapta homāḥ | sapta ime lokā yeṣu caranti prāṇā guhāśayā nihitāḥ sapta sapta ||',
    translation: 'From Him come the seven pranas, the seven flames, seven kinds of fuel, seven oblations, and these seven worlds in which the pranas move, hidden in the cave, placed seven by seven.',
    explanation: {
      simple: 'Seven is the sacred number of manifestation: seven pranas (life-forces), seven flames, fuels, offerings, and worlds - all arranged in sevens, hidden in the heart-cave.',
      deeper: 'The seven pranas are: two eyes, two ears, two nostrils, and mouth. Seven worlds represent levels of existence.'
    },
    practicalApplication: 'Your seven sense openings connect you to seven worlds. The source of all is hidden in your heart.',
    themes: ['seven pranas', 'seven worlds', 'heart-cave'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'mundaka',
    section: 3,
    verse: 9,
    sanskrit: 'अतः समुद्रा गिरयश्च सर्वेऽस्मात्स्यन्दन्ते सिन्धवः सर्वरूपाः। अतश्च सर्वा ओषधयो रसश्च येनैष भूतैस्तिष्ठते ह्यन्तरात्मा॥',
    transliteration: 'ataḥ samudrā girayaśca sarve\'smātsyandante sindhavaḥ sarvarūpāḥ | ataśca sarvā oṣadhayo rasaśca yenaiṣa bhūtaistiṣṭhate hyantarātmā ||',
    translation: 'From Him come all the oceans and mountains; from Him flow rivers of all kinds; from Him come all plants and their essences, by which the inner Self abides in all beings.',
    explanation: {
      simple: 'All of nature - oceans, mountains, rivers, plants - emerges from Brahman. The essence (rasa) of plants sustains the inner Self in bodies.',
      deeper: 'The physical world is not separate from consciousness. The Self dwells in bodies sustained by the essence of plants (food).'
    },
    practicalApplication: 'Nature is not separate from divinity. The food you eat connects you to the cosmic source.',
    themes: ['nature from Brahman', 'essence', 'inner Self'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'mundaka',
    section: 3,
    verse: 10,
    sanskrit: 'पुरुष एवेदं विश्वं कर्म तपो ब्रह्म परामृतम्। एतद्यो वेद निहितं गुहायां सोऽविद्याग्रन्थिं विकिरतीह सोम्य॥',
    transliteration: 'puruṣa evedaṃ viśvaṃ karma tapo brahma parāmṛtam | etadyo veda nihitaṃ guhāyāṃ so\'vidyāgranthiṃ vikiratīha somya ||',
    translation: 'The Purusha alone is all this - karma, tapas, Brahman, the supreme immortal. One who knows this, hidden in the cave, cuts the knot of ignorance here, O gentle one.',
    explanation: {
      simple: 'Everything is Purusha - all action, all austerity, Brahman itself, the immortal. Knowing this truth hidden in the heart cuts ignorance\'s knot.',
      deeper: 'This summarizes the section: all is Purusha. The one who realizes this breaks free from ignorance in this very life.'
    },
    practicalApplication: 'The knot of ignorance can be cut now. Know that all is one Purusha.',
    themes: ['all is Purusha', 'knot cut', 'liberation here'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
];

// =============================================================================
// SECTION 4: THE TWO BIRDS (Mundaka 2, Khanda 2)
// Verses 1-11: The bow and arrow, the two birds
// =============================================================================

const section4Verses: UpanishadVerse[] = [
  {
    upanishad: 'mundaka',
    section: 4,
    verse: 1,
    sanskrit: 'आविः संनिहितं गुहाचरं नाम महत्पदमत्रैतत्समर्पितम्। एजत्प्राणन्निमिषच्च यदेतज्जानथ सदसद्वरेण्यं परं विज्ञानाद्यद्वरिष्ठं प्रजानाम्॥',
    transliteration: 'āviḥ saṃnihitaṃ guhācaraṃ nāma mahatpadamatraitatsamarpitam | ejatprāṇannimiṣacca yadetajjānatha sadasadvareṇyaṃ paraṃ vijñānādyadvariṣṭhaṃ prajānām ||',
    translation: 'Manifest, close by, moving in the cave of the heart - this is the great goal. In it is centered all that moves, breathes, and blinks. Know it as both being and non-being, the most desirable, beyond understanding, the highest of beings.',
    explanation: {
      simple: 'Brahman is not far away - it\'s manifest, near, in your heart. Everything that lives is centered in it. It transcends both existence and non-existence.',
      deeper: 'The cave (guha) is the heart. Brahman is not hidden in the sense of being far away - it\'s hidden in plain sight, in the heart.'
    },
    practicalApplication: 'What you seek is not far away. It\'s in your heart, manifest right now.',
    themes: ['heart-cave', 'near', 'being and non-being'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'mundaka',
    section: 4,
    verse: 2,
    sanskrit: 'यदर्चिमद्यदणुभ्योऽणु च यस्मिंल्लोका निहिता लोकिनश्च। तदेतदक्षरं ब्रह्म स प्राणस्तदु वाङ्मनः। तदेतत्सत्यं तदमृतं तद्वेद्धव्यं सोम्य विद्धि॥',
    transliteration: 'yadarcimadyadaṇubhyo\'ṇu ca yasmiṃllokā nihitā lokinaśca | tadetadakṣaraṃ brahma sa prāṇastadu vāṅmanaḥ | tadetatsatyaṃ tadamṛtaṃ tadveddhavyaṃ somya viddhi ||',
    translation: 'That which is radiant, subtler than the subtle, in which the worlds and their inhabitants are fixed - that is the imperishable Brahman. It is life, speech, and mind. It is truth, it is immortal. Know it as the target to be pierced, O gentle one!',
    explanation: {
      simple: 'Brahman is radiant, subtler than subtle, containing all worlds. It is your life, speech, mind. It is truth and immortality. This is your target!',
      deeper: '"Veddhavya" (to be pierced) introduces the bow-and-arrow metaphor that follows. Brahman is the bullseye.'
    },
    practicalApplication: 'Make Brahman your target. Pierce through to the truth with focused attention.',
    themes: ['target', 'subtler than subtle', 'truth'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'mundaka',
    section: 4,
    verse: 3,
    sanskrit: 'धनुर्गृहीत्वौपनिषदं महास्त्रं शरं ह्युपासानिशितं संधयीत। आयम्य तद्भावगतेन चेतसा लक्ष्यं तदेवाक्षरं सोम्य विद्धि॥',
    transliteration: 'dhanurgṛhītvaupaniṣadaṃ mahāstraṃ śaraṃ hyupāsāniśitaṃ saṃdhayīta | āyamya tadbhāvagatena cetasā lakṣyaṃ tadevākṣaraṃ somya viddhi ||',
    translation: 'Taking the great weapon of the Upanishad as a bow, place on it the arrow sharpened by meditation. Drawing it with a mind absorbed in That, pierce the target - the Imperishable, O gentle one!',
    explanation: {
      simple: 'The Upanishad is your bow. The arrow is your Self, sharpened by meditation. Draw with focused mind. Your target is the Imperishable - hit it!',
      deeper: 'This is one of the most famous meditation instructions. The Upanishadic teaching is the bow, the Self is the arrow, Brahman is the target.'
    },
    practicalApplication: 'Sharpen yourself through meditation. Focus completely. Pierce through to the eternal.',
    themes: ['bow and arrow', 'meditation', 'piercing'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'mundaka',
    section: 4,
    verse: 4,
    sanskrit: 'प्रणवो धनुः शरो ह्यात्मा ब्रह्म तल्लक्ष्यमुच्यते। अप्रमत्तेन वेद्धव्यं शरवत्तन्मयो भवेत्॥',
    transliteration: 'praṇavo dhanuḥ śaro hyātmā brahma tallakṣyamucyate | apramattena veddhavyaṃ śaravattanmayo bhavet ||',
    translation: 'OM is the bow, the Self is the arrow, Brahman is called the target. It should be pierced by one who is undistracted. Like the arrow, one should become one with the target.',
    explanation: {
      simple: 'OM is the bow, you (the Self) are the arrow, Brahman is the target. Stay focused! Like an arrow hitting its mark, you become one with Brahman.',
      deeper: 'The arrow doesn\'t remain separate from the target - it becomes embedded in it. Similarly, the Self realizes its unity with Brahman.'
    },
    practicalApplication: 'Use OM to launch yourself toward Brahman. Don\'t stop until you merge with the target.',
    themes: ['OM as bow', 'Self as arrow', 'becoming one'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    upanishad: 'mundaka',
    section: 4,
    verse: 5,
    sanskrit: 'यस्मिन्द्यौः पृथिवी चान्तरिक्षमोतं मनः सह प्राणैश्च सर्वैः। तमेवैकं जानथ आत्मानमन्या वाचो विमुञ्चथामृतस्यैष सेतुः॥',
    transliteration: 'yasmindyauḥ pṛthivī cāntarikṣamotaṃ manaḥ saha prāṇaiśca sarvaiḥ | tamevaikaṃ jānatha ātmānamanyā vāco vimuñcathāmṛtasyaiṣa setuḥ ||',
    translation: 'In whom heaven, earth, and the space between are woven, along with the mind and all the vital breaths - know Him alone as the one Self. Abandon all other speech! This is the bridge to immortality.',
    explanation: {
      simple: 'All of creation - heaven, earth, space, mind, breath - is woven into one Self. Know that alone. Drop all other talk. This knowledge is the bridge to deathlessness.',
      deeper: '"Abandon other speech" means stop the mental chatter and conceptual elaboration. Focus on the one Self.'
    },
    practicalApplication: 'Stop talking about spirituality and know the Self directly. This knowledge alone bridges death.',
    themes: ['one Self', 'abandon words', 'bridge to immortality'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'mundaka',
    section: 4,
    verse: 6,
    sanskrit: 'अरा इव रथनाभौ संहता यत्र नाड्यः स एषोऽन्तश्चरते बहुधा जायमानः। ओमित्येवं ध्यायथ आत्मानं स्वस्ति वः पाराय तमसः परस्तात्॥',
    transliteration: 'arā iva rathanābhau saṃhatā yatra nāḍyaḥ sa eṣo\'ntaścarate bahudhā jāyamānaḥ | omityevaṃ dhyāyatha ātmānaṃ svasti vaḥ pārāya tamasaḥ parastāt ||',
    translation: 'Where the nadis come together like spokes at the hub of a wheel, there He moves within, being born in many ways. Meditate on the Self with OM. May you be blessed in crossing to the other shore, beyond darkness!',
    explanation: {
      simple: 'The nadis (subtle channels) meet at the heart like wheel spokes at a hub. There the Self dwells, manifesting in many forms. Meditate on it with OM. Cross beyond darkness!',
      deeper: 'The heart is the hub; the nadis are spokes. This is where meditation should focus. "Beyond darkness" means beyond ignorance.'
    },
    practicalApplication: 'Focus at the heart center where all channels meet. Use OM. Cross beyond the darkness of ignorance.',
    themes: ['heart hub', 'nadis', 'beyond darkness'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'mundaka',
    section: 4,
    verse: 7,
    sanskrit: 'यः सर्वज्ञः सर्वविद्यस्यैष महिमा भुवि। दिव्ये ब्रह्मपुरे ह्येष व्योम्न्यात्मा प्रतिष्ठितः॥',
    transliteration: 'yaḥ sarvajñaḥ sarvavidyasyaiṣa mahimā bhuvi | divye brahmapure hyeṣa vyomnyātmā pratiṣṭhitaḥ ||',
    translation: 'He who is all-knowing, all-wise - His is this greatness on earth. In the divine city of Brahman, in the space (of the heart), the Self is established.',
    explanation: {
      simple: 'The all-knowing Self, whose glory is seen on earth, dwells in the "city of Brahman" - the heart-space. There the Self is established.',
      deeper: 'Brahma-pura (city of Brahman) is the heart. Despite being infinite, the Self is "established" there - accessible through the heart.'
    },
    practicalApplication: 'The city of Brahman is your heart. Enter that city through meditation.',
    themes: ['city of Brahman', 'heart', 'all-knowing'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'mundaka',
    section: 4,
    verse: 8,
    sanskrit: 'मनोमयः प्राणशरीरनेता प्रतिष्ठितोऽन्ने हृदयं संनिधाय। तद्विज्ञानेन परिपश्यन्ति धीरा आनन्दरूपममृतं यद्विभाति॥',
    transliteration: 'manomayaḥ prāṇaśarīranetā pratiṣṭhito\'nne hṛdayaṃ saṃnidhāya | tadvijñānena paripaśyanti dhīrā ānandarūpamamṛtaṃ yadvibhāti ||',
    translation: 'Made of mind, leader of the vital breath and body, established in food, resting in the heart - the wise, through knowledge, perceive that blissful, immortal one shining.',
    explanation: {
      simple: 'The Self appears as made of mind, directing breath and body, sustained by food, dwelling in the heart. The wise see it as blissful and immortal, shining.',
      deeper: 'Though the Self appears through mind-body, it is really bliss (ananda) and immortality. Wisdom reveals its true nature.'
    },
    practicalApplication: 'Behind your mind and body, perceive the blissful, immortal Self that shines.',
    themes: ['blissful Self', 'shining', 'wisdom perceives'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'mundaka',
    section: 4,
    verse: 9,
    sanskrit: 'भिद्यते हृदयग्रन्थिश्छिद्यन्ते सर्वसंशयाः। क्षीयन्ते चास्य कर्माणि तस्मिन्दृष्टे परावरे॥',
    transliteration: 'bhidyate hṛdayagranthiśchidyante sarvasaṃśayāḥ | kṣīyante cāsya karmāṇi tasmindṛṣṭe parāvare ||',
    translation: 'The knot of the heart is cut, all doubts are dispelled, and one\'s karmas are exhausted - when That is seen, the higher and lower.',
    explanation: {
      simple: 'When Brahman is seen, three things happen: the heart\'s knot is cut, all doubts vanish, and karma is exhausted. Liberation is complete.',
      deeper: 'These are the three marks of liberation: no more bondage (knot cut), no more confusion (doubts gone), no more karma. Seeing both para and apara Brahman.'
    },
    practicalApplication: 'True seeing dissolves bondage, doubt, and karma all at once. That\'s how you know it\'s real.',
    themes: ['knot cut', 'doubts gone', 'karma exhausted'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'mundaka',
    section: 4,
    verse: 10,
    sanskrit: 'हिरण्मये परे कोशे विरजं ब्रह्म निष्कलम्। तच्छुभ्रं ज्योतिषां ज्योतिस्तद्यदात्मविदो विदुः॥',
    transliteration: 'hiraṇmaye pare kośe virajaṃ brahma niṣkalam | tacchubhraṃ jyotiṣāṃ jyotistadyadātmavido viduḥ ||',
    translation: 'In the supreme golden sheath is Brahman, stainless, without parts. It is pure, the light of lights - that which the knowers of Self know.',
    explanation: {
      simple: 'In the highest golden covering is Brahman - spotless, undivided, pure, the light behind all lights. Those who know the Self know this.',
      deeper: 'The "golden sheath" (hiranyamaya kosha) is the subtlest covering. Within it is Brahman itself - the source of all illumination.'
    },
    practicalApplication: 'There is a light behind all lights. That is what you truly are.',
    themes: ['golden sheath', 'light of lights', 'pure'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'mundaka',
    section: 4,
    verse: 11,
    sanskrit: 'न तत्र सूर्यो भाति न चन्द्रतारकं नेमा विद्युतो भान्ति कुतोऽयमग्निः। तमेव भान्तमनुभाति सर्वं तस्य भासा सर्वमिदं विभाति॥',
    transliteration: 'na tatra sūryo bhāti na candratārakaṃ nemā vidyuto bhānti kuto\'yamagniḥ | tameva bhāntamanubhāti sarvaṃ tasya bhāsā sarvamidaṃ vibhāti ||',
    translation: 'There the sun does not shine, nor moon and stars, nor lightning, much less this fire. When He shines, everything shines after Him; by His light all this is illumined.',
    explanation: {
      simple: 'In that realm of Brahman, sun, moon, stars, lightning, and fire don\'t shine. All of them shine only because Brahman shines first.',
      deeper: 'This famous verse (also in Katha and Shvetashvatara) shows Brahman as the source of all light - physical and metaphysical.'
    },
    practicalApplication: 'Every light derives from one source. Seek that original light - pure consciousness.',
    themes: ['source of light', 'Brahman shines', 'all illumined'],
    difficulty: 'beginner',
    famousVerse: true,
  },
];

// =============================================================================
// SECTION 5: REALIZATION (Mundaka 3, Khanda 1)
// Verses 1-10: The two birds, path to realization
// =============================================================================

const section5Verses: UpanishadVerse[] = [
  {
    upanishad: 'mundaka',
    section: 5,
    verse: 1,
    sanskrit: 'द्वा सुपर्णा सयुजा सखाया समानं वृक्षं परिषस्वजाते। तयोरन्यः पिप्पलं स्वाद्वत्त्यनश्नन्नन्यो अभिचाकशीति॥',
    transliteration: 'dvā suparṇā sayujā sakhāyā samānaṃ vṛkṣaṃ pariṣasvajāte | tayoranyaḥ pippalaṃ svādvattyanaśnannanyo abhicākaśīti ||',
    translation: 'Two birds, beautiful of wing, close companions, cling to the same tree. Of these two, one eats the sweet fruit; the other, not eating, looks on.',
    explanation: {
      simple: 'Two birds sit on the same tree. One eats the fruit (sweet and bitter); the other just watches, eating nothing. This is the soul and the witness Self.',
      deeper: 'The eating bird is the jiva (individual soul) experiencing karma. The watching bird is the Atman (witness consciousness) - uninvolved, just observing.'
    },
    practicalApplication: 'You are both birds - the experiencer and the witness. Learn to rest as the watching bird.',
    themes: ['two birds', 'experiencer and witness', 'same tree'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    upanishad: 'mundaka',
    section: 5,
    verse: 2,
    sanskrit: 'समाने वृक्षे पुरुषो निमग्नोऽनीशया शोचति मुह्यमानः। जुष्टं यदा पश्यत्यन्यमीशमस्य महिमानमिति वीतशोकः॥',
    transliteration: 'samāne vṛkṣe puruṣo nimagno\'nīśayā śocati muhyamānaḥ | juṣṭaṃ yadā paśyatyanyamīśamasya mahimānamiti vītaśokaḥ ||',
    translation: 'On the same tree, the individual soul, immersed and bewildered, grieves due to helplessness. But when it sees the other, the Lord, and His glory, then it becomes free from sorrow.',
    explanation: {
      simple: 'On the same tree, one bird (the soul) is lost in eating and suffers. When it looks up and sees the other bird (the Lord) and its glory, sorrow ends.',
      deeper: 'The cure for suffering is simply to shift attention from experiencing to witnessing - to see the ever-free Self that is our true nature.'
    },
    practicalApplication: 'When suffering, look up. See the witness within you. Its glory ends sorrow.',
    themes: ['suffering ends', 'seeing the Lord', 'shift of attention'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    upanishad: 'mundaka',
    section: 5,
    verse: 3,
    sanskrit: 'यदा पश्यः पश्यते रुक्मवर्णं कर्तारमीशं पुरुषं ब्रह्मयोनिम्। तदा विद्वान्पुण्यपापे विधूय निरञ्जनः परमं साम्यमुपैति॥',
    transliteration: 'yadā paśyaḥ paśyate rukmavarṇaṃ kartāramīśaṃ puruṣaṃ brahmayonim | tadā vidvānpuṇyapāpe vidhūya nirañjanaḥ paramaṃ sāmyamupaiti ||',
    translation: 'When the seer sees the golden-colored creator, the Lord, the Purusha, the source of Brahman - then the wise one, shaking off good and evil, stainless, attains supreme equality.',
    explanation: {
      simple: 'When the seer beholds the golden Lord, source of all, the wise one transcends both good and evil karma, becomes pure, and attains perfect equality with Brahman.',
      deeper: '"Supreme equality" (paramam samyam) is liberation - not merging and disappearing, but realizing equal nature with Brahman.'
    },
    practicalApplication: 'Beyond good and bad, see the golden source. Become equal to what you see.',
    themes: ['golden Lord', 'beyond good and evil', 'equality'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'mundaka',
    section: 5,
    verse: 4,
    sanskrit: 'प्राणो ह्येष यः सर्वभूतैर्विभाति विजानन्विद्वान्भवते नातिवादी। आत्मक्रीड आत्मरतिः क्रियावानेष ब्रह्मविदां वरिष्ठः॥',
    transliteration: 'prāṇo hyeṣa yaḥ sarvabhūtairvibhāti vijānanvidvānbhavate nātivādī | ātmakrīḍa ātmaratiḥ kriyāvāneṣa brahmavidāṃ variṣṭhaḥ ||',
    translation: 'He is indeed the prana that shines through all beings. Knowing this, the wise one does not talk excessively. Delighting in the Self, rejoicing in the Self, performing actions - he is the best among knowers of Brahman.',
    explanation: {
      simple: 'The wise knower recognizes the Self shining in all beings as prana. Such a person doesn\'t talk much, delights in the Self, and is the highest among sages.',
      deeper: 'Self-knowledge brings quietude (not excessive talk), self-sufficiency (delight in Self), and continued activity - but from freedom, not compulsion.'
    },
    practicalApplication: 'Know the Self in all beings. Talk less. Find joy within. Act from freedom.',
    themes: ['Self in all', 'quietude', 'delight in Self'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'mundaka',
    section: 5,
    verse: 5,
    sanskrit: 'सत्येन लभ्यस्तपसा ह्येष आत्मा सम्यग्ज्ञानेन ब्रह्मचर्येण नित्यम्। अन्तःशरीरे ज्योतिर्मयो हि शुभ्रो यं पश्यन्ति यतयः क्षीणदोषाः॥',
    transliteration: 'satyena labhyastapasā hyeṣa ātmā samyagjñānena brahmacaryeṇa nityam | antaḥśarīre jyotirmayo hi śubhro yaṃ paśyanti yatayaḥ kṣīṇadoṣāḥ ||',
    translation: 'This Self is attained by truth, by tapas, by right knowledge, and by constant brahmacharya. Within the body, it is made of light, pure - which the ascetics whose faults have been destroyed see.',
    explanation: {
      simple: 'The Self is gained through truth, austerity, correct understanding, and continuous self-discipline. It shines as light in the body - seen by purified seekers.',
      deeper: 'Four requirements: satya (truth), tapas (discipline), samyag-jnana (right knowledge), brahmacharya (continence). The result: seeing inner light.'
    },
    practicalApplication: 'Truth, discipline, right knowledge, self-control - these reveal the inner light.',
    themes: ['four requirements', 'inner light', 'purification'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'mundaka',
    section: 5,
    verse: 6,
    sanskrit: 'सत्यमेव जयते नानृतं सत्येन पन्था विततो देवयानः। येनाक्रमन्त्यृषयो ह्याप्तकामा यत्र तत्सत्यस्य परमं निधानम्॥',
    transliteration: 'satyameva jayate nānṛtaṃ satyena panthā vitato devayānaḥ | yenākramantyṛṣayo hyāptakāmā yatra tatsatyasya paramaṃ nidhānam ||',
    translation: 'Truth alone triumphs, not falsehood. By truth is laid out the divine path by which the sages, their desires fulfilled, travel to where is that supreme treasure of Truth.',
    explanation: {
      simple: 'Truth wins, not lies. The path to the divine is paved with truth. On it, fulfilled sages travel to the supreme abode of Truth itself.',
      deeper: 'This famous verse is India\'s national motto. Truth is not just ethical - it\'s the actual substance of the path and destination.'
    },
    practicalApplication: 'Commit to truth in all things. The path itself is made of truth.',
    themes: ['truth triumphs', 'divine path', 'supreme truth'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    upanishad: 'mundaka',
    section: 5,
    verse: 7,
    sanskrit: 'बृहच्च तद्दिव्यमचिन्त्यरूपं सूक्ष्माच्च तत्सूक्ष्मतरं विभाति। दूरात्सुदूरे तदिहान्तिके च पश्यत्स्विहैव निहितं गुहायाम्॥',
    transliteration: 'bṛhacca taddivyamacintyarūpaṃ sūkṣmācca tatsūkṣmataraṃ vibhāti | dūrātsuḍūre tadihāntike ca paśyatsvihaiva nihitaṃ guhāyām ||',
    translation: 'Vast is That, divine, inconceivable in form; subtler than the subtle, It shines forth. It is farther than the far, yet here close by - for those who see, it is right here, hidden in the cave.',
    explanation: {
      simple: 'Brahman is vast yet subtle, far yet near. For the seer, it\'s right here in the heart-cave. The paradox resolves in direct experience.',
      deeper: 'All the opposites (big/small, far/near) are reconciled in Brahman. It transcends spatial concepts while being intimate to the seeker.'
    },
    practicalApplication: 'What seems far is actually near. What seems subtle is actually vast. It\'s in your heart right now.',
    themes: ['paradox', 'near and far', 'heart-cave'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'mundaka',
    section: 5,
    verse: 8,
    sanskrit: 'न चक्षुषा गृह्यते नापि वाचा नान्यैर्देवैस्तपसा कर्मणा वा। ज्ञानप्रसादेन विशुद्धसत्त्वस्ततस्तु तं पश्यते निष्कलं ध्यायमानः॥',
    transliteration: 'na cakṣuṣā gṛhyate nāpi vācā nānyairdevaistapasā karmaṇā vā | jñānaprasādena viśuddhasattvastatstu taṃ paśyate niṣkalaṃ dhyāyamānaḥ ||',
    translation: 'It is not grasped by the eye, nor by speech, nor by other senses, nor by tapas or karma. Through the grace of wisdom, when the being is purified, one sees the partless One in meditation.',
    explanation: {
      simple: 'The Self can\'t be caught by senses, speech, or even by austerity and action. When inner clarity comes by grace and the being is pure, meditation reveals the undivided One.',
      deeper: '"Jnana-prasada" (grace of knowledge) indicates that final seeing is a gift, not a achievement - though it comes after purification.'
    },
    practicalApplication: 'Purify yourself, then let grace reveal what effort cannot grasp.',
    themes: ['beyond senses', 'grace', 'pure meditation'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'mundaka',
    section: 5,
    verse: 9,
    sanskrit: 'एषोऽणुरात्मा चेतसा वेदितव्यो यस्मिन्प्राणः पञ्चधा संविवेश। प्राणैश्चित्तं सर्वमोतं प्रजानां यस्मिन्विशुद्धे विभवत्येष आत्मा॥',
    transliteration: 'eṣo\'ṇurātmā cetasā veditavyo yasminprāṇaḥ pañcadhā saṃviveśa | prāṇaiścittaṃ sarvamotaṃ prajānāṃ yasminviśuddhe vibhavatyeṣa ātmā ||',
    translation: 'This subtle Self is to be known by the mind where the fivefold prana has entered. The mind of all beings is pervaded by prana. When it is purified, this Self becomes manifest.',
    explanation: {
      simple: 'The subtle Self is known through the mind where the five pranas dwell. All minds are filled with prana. When the mind is pure, the Self reveals itself.',
      deeper: 'The five pranas (prana, apana, vyana, udana, samana) are the vehicles through which Self expresses in the body-mind.'
    },
    practicalApplication: 'Purify the mind where prana dwells. The Self will become manifest.',
    themes: ['five pranas', 'mind purification', 'Self manifests'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'mundaka',
    section: 5,
    verse: 10,
    sanskrit: 'यं यं लोकं मनसा संविभाति विशुद्धसत्त्वः कामयते यांश्च कामान्। तं तं लोकं जयते तांश्च कामांस्तस्मादात्मज्ञं ह्यर्चयेद्भूतिकामः॥',
    transliteration: 'yaṃ yaṃ lokaṃ manasā saṃvibhāti viśuddhasattvaḥ kāmayate yāṃśca kāmān | taṃ taṃ lokaṃ jayate tāṃśca kāmāṃstasmādātmajñaṃ hyarcayedbhūtikāmaḥ ||',
    translation: 'Whatever world the one of purified mind envisions with clarity, and whatever desires - those worlds and desires are obtained. Therefore, one who desires prosperity should honor the knower of Self.',
    explanation: {
      simple: 'A purified person attains whatever world they envision and whatever they desire. So, if you want prosperity, honor those who know the Self.',
      deeper: 'This acknowledges siddhis (powers) that come with Self-knowledge, while redirecting seekers: honor the Self-knower rather than just seeking powers.'
    },
    practicalApplication: 'The Self-knower can fulfill desires. But better to become a Self-knower yourself.',
    themes: ['powers', 'purified mind', 'honor the wise'],
    difficulty: 'intermediate',
  },
];

// =============================================================================
// SECTION 6: LIBERATION (Mundaka 3, Khanda 2)
// Verses 1-11: Final teachings on liberation
// =============================================================================

const section6Verses: UpanishadVerse[] = [
  {
    upanishad: 'mundaka',
    section: 6,
    verse: 1,
    sanskrit: 'स वेदैतत्परमं ब्रह्म धाम यत्र विश्वं निहितं भाति शुभ्रम्। उपासते पुरुषं ये ह्यकामास्ते शुक्रमेतदतिवर्तन्ति धीराः॥',
    transliteration: 'sa vedaitatparamaṃ brahma dhāma yatra viśvaṃ nihitaṃ bhāti śubhram | upāsate puruṣaṃ ye hyakāmāste śukrametadativartanti dhīrāḥ ||',
    translation: 'He knows this supreme abode of Brahman, in which the universe is placed and shines radiantly. The wise who, free from desires, worship the Purusha, transcend this seed (of rebirth).',
    explanation: {
      simple: 'The knower sees the supreme Brahman in which the universe shines. Those wise ones who worship without desire transcend the seed of rebirth.',
      deeper: '"Shukra" (seed) represents the cause of rebirth. Desireless worship cuts this seed, ending the cycle.'
    },
    practicalApplication: 'Worship without wanting anything. This cuts the root of rebirth.',
    themes: ['supreme abode', 'desireless worship', 'transcend rebirth'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'mundaka',
    section: 6,
    verse: 2,
    sanskrit: 'कामान्यः कामयते मन्यमानः स कामभिर्जायते तत्र तत्र। पर्याप्तकामस्य कृतात्मनस्तु इहैव सर्वे प्रविलीयन्ति कामाः॥',
    transliteration: 'kāmānyaḥ kāmayate manyamānaḥ sa kāmabhirjāyate tatra tatra | paryāptakāmasya kṛtātmanastu ihaiva sarve pravilīyanti kāmāḥ ||',
    translation: 'One who desires objects, thinking of them, is born here and there according to those desires. But for one whose desires are fulfilled, whose self is perfected, all desires dissolve right here.',
    explanation: {
      simple: 'If you desire things, you\'re reborn to fulfill those desires. But for one who is fulfilled and self-realized, all desires dissolve in this very life.',
      deeper: '"Paryapta-kama" means desires are fully satisfied (not suppressed). "Krita-atma" means the self is accomplished. Both are marks of liberation.'
    },
    practicalApplication: 'Desires lead to rebirth. Find fulfillment within, and desires dissolve naturally.',
    themes: ['desire and rebirth', 'fulfillment', 'dissolution of desire'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'mundaka',
    section: 6,
    verse: 3,
    sanskrit: 'नायमात्मा प्रवचनेन लभ्यो न मेधया न बहुना श्रुतेन। यमेवैष वृणुते तेन लभ्यस्तस्यैष आत्मा विवृणुते तनूं स्वाम्॥',
    transliteration: 'nāyamātmā pravacanena labhyo na medhayā na bahunā śrutena | yamevaiṣa vṛṇute tena labhyastasyaiṣa ātmā vivṛṇute tanūṃ svām ||',
    translation: 'This Self is not attained through discourse, nor through intellect, nor through much learning. It is attained only by one whom it chooses. To such a one, the Self reveals its own form.',
    explanation: {
      simple: 'Talking, cleverness, and scholarship don\'t bring Self-realization. The Self chooses whom it will reveal itself to. To that one, it shows its true form.',
      deeper: 'This famous verse (also in Katha) emphasizes grace. The Self is the subject, not object - it reveals itself; we don\'t capture it.'
    },
    practicalApplication: 'Drop the idea that you can "get" the Self through effort. Surrender to be chosen.',
    themes: ['Self chooses', 'grace', 'self-revelation'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'mundaka',
    section: 6,
    verse: 4,
    sanskrit: 'नायमात्मा बलहीनेन लभ्यो न च प्रमादात्तपसो वाप्यलिङ्गात्। एतैरुपायैर्यतते यस्तु विद्वांस्तस्यैष आत्मा विशते ब्रह्मधाम॥',
    transliteration: 'nāyamātmā balahīnena labhyo na ca pramādāttapaso vāpyaliṅgāt | etairupāyairyatate yastu vidvāṃstasyaiṣa ātmā viśate brahmadhāma ||',
    translation: 'This Self is not attained by the weak, nor by the careless, nor by false austerity. But the Self of the wise one who strives by these means enters the abode of Brahman.',
    explanation: {
      simple: 'The Self isn\'t for the weak, lazy, or fake ascetic. But for the wise one who makes genuine effort, the Self enters Brahman\'s abode.',
      deeper: 'Balance: not by effort alone (grace is needed), but not without effort either. Strength, alertness, and authentic practice are required.'
    },
    practicalApplication: 'Be strong, alert, and genuine. Effort is required, even if final realization is grace.',
    themes: ['strength required', 'genuine practice', 'entering Brahman'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'mundaka',
    section: 6,
    verse: 5,
    sanskrit: 'संप्राप्यैनमृषयो ज्ञानतृप्ताः कृतात्मानो वीतरागाः प्रशान्ताः। ते सर्वगं सर्वतः प्राप्य धीरा युक्तात्मानः सर्वमेवाविशन्ति॥',
    transliteration: 'saṃprāpyainamṛṣayo jñānatṛptāḥ kṛtātmāno vītarāgāḥ praśāntāḥ | te sarvagaṃ sarvataḥ prāpya dhīrā yuktātmānaḥ sarvamevāviśanti ||',
    translation: 'The sages who attain Him, satisfied with knowledge, their selves accomplished, free from passion, peaceful - these wise ones, united in self, reaching the all-pervading from all sides, enter into the All.',
    explanation: {
      simple: 'Sages who realize Brahman are satisfied, accomplished, passionless, and peaceful. United within, they enter into everything - the All.',
      deeper: 'Not annihilation but expansion. The sage doesn\'t disappear but "enters the All" - becomes omnipresent.'
    },
    practicalApplication: 'Realization brings satisfaction, peace, and expansion into everything.',
    themes: ['satisfied sages', 'entering the All', 'omnipresence'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'mundaka',
    section: 6,
    verse: 6,
    sanskrit: 'वेदान्तविज्ञानसुनिश्चितार्थाः संन्यासयोगाद्यतयः शुद्धसत्त्वाः। ते ब्रह्मलोकेषु परान्तकाले परामृताः परिमुच्यन्ति सर्वे॥',
    transliteration: 'vedāntavijñānasuniscitārthāḥ saṃnyāsayogādyatayaḥ śuddhasattvāḥ | te brahmalokeṣu parāntakāle parāmṛtāḥ parimucyanti sarve ||',
    translation: 'Those ascetics whose understanding of Vedanta is well-ascertained, who through the yoga of renunciation have purified being - at the time of final death, they are all completely liberated, immortal in the Brahma-worlds.',
    explanation: {
      simple: 'Ascetics with clear Vedantic understanding, purified through renunciation, at the time of death become fully liberated and immortal.',
      deeper: '"Brahma-loka" here means the state of Brahman, not a heavenly realm. They are liberated completely (parimucyanti).'
    },
    practicalApplication: 'Clear understanding plus pure being leads to complete liberation at death.',
    themes: ['Vedanta understanding', 'renunciation', 'complete liberation'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'mundaka',
    section: 6,
    verse: 7,
    sanskrit: 'गताः कलाः पञ्चदश प्रतिष्ठा देवाश्च सर्वे प्रतिदेवतासु। कर्माणि विज्ञानमयश्च आत्मा परेऽव्यये सर्व एकीभवन्ति॥',
    transliteration: 'gatāḥ kalāḥ pañcadaśa pratiṣṭhā devāśca sarve pratidevatāsu | karmāṇi vijñānamayaśca ātmā pare\'vyaye sarva ekībhavanti ||',
    translation: 'The fifteen parts return to their foundations, all the gods to their respective deities, actions and the knowledge-self - all become one in the supreme Imperishable.',
    explanation: {
      simple: 'At liberation, the fifteen parts (bodily functions) return to their cosmic sources. Actions and the knowing self merge into the supreme, unchanging One.',
      deeper: 'The fifteen kalas include ten senses, five pranas. All dissolve into their origins. Even the vijnanamaya atma (intellect-self) merges.'
    },
    practicalApplication: 'Everything returns to its source. You too will merge back into the One.',
    themes: ['dissolution', 'return to source', 'merging'],
    difficulty: 'advanced',
  },
  {
    upanishad: 'mundaka',
    section: 6,
    verse: 8,
    sanskrit: 'यथा नद्यः स्यन्दमानाः समुद्रेऽस्तं गच्छन्ति नामरूपे विहाय। तथा विद्वान्नामरूपाद्विमुक्तः परात्परं पुरुषमुपैति दिव्यम्॥',
    transliteration: 'yathā nadyaḥ syandamānāḥ samudre\'staṃ gacchanti nāmarūpe vihāya | tathā vidvānnāmarūpādvimuktaḥ parātparaṃ puruṣamupaiti divyam ||',
    translation: 'As rivers flowing toward the sea disappear, giving up name and form, so the wise one, freed from name and form, reaches the supreme divine Purusha, higher than the high.',
    explanation: {
      simple: 'Like rivers losing their names and forms when they merge into the ocean, the wise person loses individual identity and merges with the supreme divine Person.',
      deeper: 'This is one of the most beautiful metaphors for liberation. Rivers don\'t cease to exist - they become ocean. Similarly, the self becomes infinite.'
    },
    practicalApplication: 'Let go of name and form. Flow into the infinite ocean of being.',
    themes: ['rivers and ocean', 'losing name and form', 'becoming infinite'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    upanishad: 'mundaka',
    section: 6,
    verse: 9,
    sanskrit: 'स यो ह वै तत्परमं ब्रह्म वेद ब्रह्मैव भवति नास्याब्रह्मवित्कुले भवति। तरति शोकं तरति पाप्मानं गुहाग्रन्थिभ्यो विमुक्तोऽमृतो भवति॥',
    transliteration: 'sa yo ha vai tatparamaṃ brahma veda brahmaiva bhavati nāsyābrahmavitkule bhavati | tarati śokaṃ tarati pāpmānaṃ guhāgranthibhyo vimukto\'mṛto bhavati ||',
    translation: 'One who knows that supreme Brahman becomes Brahman indeed. In their family, no one ignorant of Brahman is born. They cross over sorrow, cross over sin, freed from the knots of the heart, they become immortal.',
    explanation: {
      simple: 'The knower of Brahman becomes Brahman. Their family lineage becomes spiritually elevated. They transcend sorrow and sin, cut the heart\'s knots, become immortal.',
      deeper: '"Brahmaiva bhavati" - this is the great statement: you become what you know. Knowing Brahman is being Brahman.'
    },
    practicalApplication: 'You become what you truly know. Know Brahman and be Brahman.',
    themes: ['become Brahman', 'family blessing', 'immortality'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'mundaka',
    section: 6,
    verse: 10,
    sanskrit: 'तदेतदृचाभ्युक्तम्। क्रियावन्तः श्रोत्रिया ब्रह्मनिष्ठाः स्वयं जुह्वत एकर्षिं श्रद्धयन्तः। तेषामेवैतां ब्रह्मविद्यां वदेत शिरोव्रतं विधिवद्यैस्तु चीर्णम्॥',
    transliteration: 'tadetadṛcābhyuktam | kriyāvantaḥ śrotriyā brahmaniṣṭhāḥ svayaṃ juhvata ekarṣiṃ śraddhayantaḥ | teṣāmevaitāṃ brahmavidyāṃ vadeta śirovrataṃ vidhivadyaistu cīrṇam ||',
    translation: 'This is declared by the verse: This Brahma-vidya should be taught only to those who perform their duties, are learned in Vedas, established in Brahman, who themselves offer to the One Seer with faith, and have duly performed the head-vow.',
    explanation: {
      simple: 'This sacred knowledge should only be given to qualified students: those who are dutiful, learned, Brahman-focused, faithful, and have completed the initiatory vows.',
      deeper: 'The "head-vow" (shirovrata) was an initiatory practice. The Upanishad protects its teaching by specifying prerequisites.'
    },
    practicalApplication: 'Sacred knowledge has requirements. Prepare yourself to be a worthy vessel.',
    themes: ['qualified student', 'prerequisites', 'sacred transmission'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'mundaka',
    section: 6,
    verse: 11,
    sanskrit: 'तदेतत्सत्यमृषिरङ्गिराः पुरोवाच नैतदचीर्णव्रतोऽधीते। नमः परमऋषिभ्यो नमः परमऋषिभ्यः॥',
    transliteration: 'tadetatsatyamṛṣiraṅgirāḥ purovāca naitadacīrṇavrato\'dhīte | namaḥ paramaṛṣibhyo namaḥ paramaṛṣibhyaḥ ||',
    translation: 'This truth the sage Angiras declared of old. Let no one who has not performed the vow study this. Salutation to the supreme sages! Salutation to the supreme sages!',
    explanation: {
      simple: 'The sage Angiras taught this truth long ago. Those who haven\'t taken the vows shouldn\'t study it. The Upanishad ends with salutations to the great sages.',
      deeper: 'The closing honors the lineage. The double salutation emphasizes reverence. The teaching ends as it began - in tradition.'
    },
    practicalApplication: 'Honor the teachers who transmitted this wisdom. The lineage continues through you.',
    themes: ['honoring lineage', 'closing', 'salutation'],
    difficulty: 'beginner',
  },
];

// =============================================================================
// SECTIONS
// =============================================================================

const section1: UpanishadSection = {
  number: 1,
  name: {
    sanskrit: 'प्रथम मुण्डक, प्रथम खण्ड',
    english: 'The Tradition of Knowledge',
  },
  summary: 'The lineage of Brahma-vidya from Brahma to Atharva to Angiras. The ultimate question: What is that by knowing which everything is known?',
  verses: section1Verses,
  isCurated: false,
};

const section2: UpanishadSection = {
  number: 2,
  name: {
    sanskrit: 'प्रथम मुण्डक, द्वितीय खण्ड',
    english: 'Lower vs Higher Knowledge',
  },
  summary: 'The distinction between para and apara vidya. The limitations of ritual - like leaky boats, they cannot bring liberation. The blind leading the blind. Seek a qualified teacher.',
  verses: section2Verses,
  isCurated: false,
};

const section3: UpanishadSection = {
  number: 3,
  name: {
    sanskrit: 'द्वितीय मुण्डक, प्रथम खण्ड',
    english: 'Brahman as the Source',
  },
  summary: 'Brahman as the source from which all beings emerge. The cosmic Person from whom fire, sun, moon, rain, plants, and humans arise.',
  verses: section3Verses,
  isCurated: false,
  totalVerses: 10,
};

const section4: UpanishadSection = {
  number: 4,
  name: {
    sanskrit: 'द्वितीय मुण्डक, द्वितीय खण्ड',
    english: 'The Two Birds',
  },
  summary: 'The famous metaphor of two birds on a tree - one eats the fruit, one watches. The bow and arrow meditation: OM is the bow, Self is the arrow, Brahman is the target.',
  verses: section4Verses,
  isCurated: false,
  totalVerses: 11,
};

const section5: UpanishadSection = {
  number: 5,
  name: {
    sanskrit: 'तृतीय मुण्डक, प्रथम खण्ड',
    english: 'Realization',
  },
  summary: 'The Self is attained by truth, tapas, right knowledge, and constant practice of brahmacharya. It shines in the body as pure light.',
  verses: section5Verses,
  isCurated: false,
  totalVerses: 10,
};

const section6: UpanishadSection = {
  number: 6,
  name: {
    sanskrit: 'तृतीय मुण्डक, द्वितीय खण्ड',
    english: 'Liberation',
  },
  summary: 'The knots of the heart are cut, doubts destroyed. The knower of Brahman becomes Brahman. The rivers merge into the ocean, losing name and form.',
  verses: section6Verses,
  isCurated: false,
  totalVerses: 11,
};

// =============================================================================
// MAIN EXPORT
// =============================================================================

export const mundakaUpanishad: Upanishad = {
  id: 'mundaka',
  name: {
    sanskrit: 'मुण्डकोपनिषद्',
    english: 'Mundaka Upanishad',
    meaning: 'The Upanishad for Those Who Shave (Renunciants)',
  },
  veda: 'atharva',
  summary: 'A profound teaching on the distinction between higher and lower knowledge. Contains the famous metaphors of two birds on a tree and the bow-arrow-target for meditation. Shows the limitation of ritual and points to direct knowledge of Brahman.',
  keyTeachings: [
    'Two kinds of knowledge: para (higher) and apara (lower)',
    'Even the Vedas are lower knowledge; higher knowledge is direct realization',
    'Rituals are like leaky boats - they cannot bring liberation',
    'Two birds on a tree: the enjoyer and the witness',
    'OM as bow, Self as arrow, Brahman as target',
    'The knower of Brahman becomes Brahman',
  ],
  totalVerses: 64,
  includedVerses: 64,
  sections: [section1, section2, section3, section4, section5, section6],
  difficulty: 'intermediate',
};

export default mundakaUpanishad;
