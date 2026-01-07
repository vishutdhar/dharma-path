/**
 * Brihadaranyaka Upanishad (बृहदारण्यकोपनिषद्)
 *
 * The largest and one of the oldest principal Upanishads, from the Yajur Veda.
 * Contains the famous Mahavakya "Aham Brahmasmi" (I am Brahman).
 * Features the great sage Yajnavalkya and his profound dialogues.
 *
 * From: Shukla Yajur Veda
 * Structure: 6 Chapters (Adhyayas), 435+ verses total
 * This file: Curated selection of ~70 most important verses
 *
 * Curated Sections:
 * - 1.4: Creation and the Self (key excerpts)
 * - 2.4: Maitreyi Dialogue I - The immortal Self
 * - 3.8: Gargi's Questions - The Imperishable
 * - 4.3-4.4: Yajnavalkya's Final Teaching - States of consciousness
 * - 4.5: Maitreyi Dialogue II - The Self is all
 */

import { Upanishad, UpanishadVerse, UpanishadSection } from './types';

// =============================================================================
// CHAPTER 1.4: CREATION AND THE SELF (Key excerpts - 10 verses)
// How the one Self became many
// =============================================================================

const chapter1_4Verses: UpanishadVerse[] = [
  {
    upanishad: 'brihadaranyaka',
    section: 1,
    verse: 1,
    sanskrit: 'आत्मैवेदमग्र आसीत्पुरुषविधः। सोऽनुवीक्ष्य नान्यदात्मनोऽपश्यत्। सोऽहमस्मीत्यग्रे व्याहरत्। ततोऽहंनामाभवत्॥',
    transliteration: 'ātmaivedamagra āsītpuruṣavidhaḥ | so\\\'nuvīkṣya nānyadātmano\\\'paśyat | so\\\'hamasmītyagre vyāharat | tato\\\'haṃnāmābhavat ||',
    translation: 'In the beginning, this was Self alone, in the form of a Person. Looking around, he saw nothing other than himself. He first said: "I am." Therefore the name "I" arose.',
    explanation: {
      simple: 'Before creation, there was only the Self in human-like form. Looking around, seeing nothing else, it said "I am" - creating the first sense of self-identity.',
      deeper: 'This describes the primordial moment of self-awareness. The "I" (aham) is the first word, the origin of all identity and duality.',
    },
    practicalApplication: 'Your sense of "I" comes from the original Self-awareness. Trace "I" back to its source.',
    themes: ['origin', 'I am', 'first word', 'self-awareness'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'brihadaranyaka',
    section: 1,
    verse: 2,
    sanskrit: 'सोऽबिभेत्। तस्मादेकाकी बिभेति। स हायमीक्षां चक्रे यन्मदन्यन्नास्ति कस्मान्नु बिभेमीति। तत एवास्य भयं वीयाय। कस्माद्ध्यभेष्यत्। द्वितीयाद्वै भयं भवति॥',
    transliteration: 'so\\\'bibhet | tasmādekākī bibheti | sa hāyamīkṣāṃ cakre yanmadanyannāsti kasmānnu bibhemīti | tata evāsya bhayaṃ vīyāya | kasmāddhyabheṣyat | dvitīyādvai bhayaṃ bhavati ||',
    translation: 'He was afraid. Therefore one who is alone is afraid. But he thought: "Since there is nothing other than myself, of what am I afraid?" Then his fear departed. Of what indeed should he be afraid? Fear arises from a second.',
    explanation: {
      simple: 'Even the primal Self felt fear when alone. But realizing there was nothing other than itself, fear vanished. Fear comes only when there seems to be a "second" (other).',
      deeper: 'Dvitiya (second/other) is the root of fear. Non-duality is the end of fear. This is a key Advaitic insight.',
    },
    practicalApplication: 'Your fears arise from seeing something "other." Recognize all as your Self, and fear ends.',
    themes: ['fear', 'aloneness', 'second', 'non-duality'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'brihadaranyaka',
    section: 1,
    verse: 3,
    sanskrit: 'स वै नैव रेमे। तस्मादेकाकी न रमते। स द्वितीयमैच्छत्। स हैतावानास यथा स्त्रीपुमांसौ सम्परिष्वक्तौ। स इममेवात्मानं द्वेधापातयत्। ततः पतिश्च पत्नी चाभवताम्॥',
    transliteration: 'sa vai naiva reme | tasmādekākī na ramate | sa dvitīyamaicchat | sa haitāvānāsa yathā strīpumāṃsau samPariṣvaktau | sa imamevātmānaṃ dvedhāpātayat | tataḥ patiśca patnī cābhavatām ||',
    translation: 'He was not happy. Therefore one who is alone is not happy. He desired a second. He was as large as a man and woman embracing. He divided this very self into two. From that, husband and wife arose.',
    explanation: {
      simple: 'The Self was not happy alone and desired company. It split itself in two - husband and wife. This is how duality and relationship began.',
      deeper: 'Desire for a second (dvitiya) creates the world. The male-female split is the primal division from which all creation flows.',
    },
    practicalApplication: 'Loneliness drives creation. Your desire for relationship reflects the cosmic desire for the "other."',
    themes: ['loneliness', 'desire', 'male-female', 'division'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'brihadaranyaka',
    section: 1,
    verse: 4,
    sanskrit: 'तस्मादिदमर्धबृगलमिव स्वः इति ह स्माह याज्ञवल्क्यः। तस्मादयमाकाशः स्त्रिया पूर्यत एव। तां समभवत्। ततो मनुष्या अजायन्त॥',
    transliteration: 'tasmādidamardhabhṛgalamiva svaḥ iti ha smāha yājñavalkyaḥ | tasmādayamākāśaḥ striyā pūryata eva | tāṃ samabhavat | tato manuṣyā ajāyanta ||',
    translation: 'Therefore this body is like half of a split pea, as Yajnavalkya said. Therefore this space is filled by woman. He united with her, and from that humans were born.',
    explanation: {
      simple: 'Each person is half of a whole - like a split pea. Men and women unite, and humanity is born.',
      deeper: 'Yajnavalkya is quoted, establishing his authority. Each being is incomplete without its complement.',
    },
    practicalApplication: 'You are half of a whole. The longing for union reflects the original wholeness.',
    themes: ['half', 'union', 'humanity', 'Yajnavalkya'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'brihadaranyaka',
    section: 1,
    verse: 5,
    sanskrit: 'सा हेयमीक्षां चक्रे कथं नु मात्मन एव जनयित्वा सम्भवति। हन्त तिरोऽसानीति। सा गौरभवत्। ऋषभ इतरः। तां समेवाभवत्। ततो गावोऽजायन्त॥',
    transliteration: 'sā heyamīkṣāṃ cakre kathaṃ nu mātmana eva janayitvā sambhavati | hanta tiro\\\'sānīti | sā gaurabhavat | ṛṣabha itaraḥ | tāṃ samevābhavat | tato gāvo\\\'jāyanta ||',
    translation: 'She thought: "How can he unite with me after producing me from himself? Let me hide." She became a cow; he became a bull and united with her. From that, cattle were born.',
    explanation: {
      simple: 'The female tried to hide by becoming a cow. He became a bull and united with her. Cattle were born. This pattern continues through all species.',
      deeper: 'Creation unfolds through desire, flight, and union. All species arise from the primal pair taking different forms.',
    },
    practicalApplication: 'All life forms arise from the same source. The one Self plays as all creatures.',
    themes: ['all species', 'transformation', 'union', 'creation'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'brihadaranyaka',
    section: 1,
    verse: 6,
    sanskrit: 'साश्वाभवत्। अश्ववृष इतरः। सा गर्दभी। गर्दभ इतरः। तां समेवाभवत्। तत एकशफमजायत। अजाभवत्। अज इतरः। अविरभवत्। मेष इतरः। तां समेवाभवत्। ततोऽजावयोऽजायन्त। एवमेव यदिदं किंच मिथुनं आ पिपीलिकाभ्यः तत्सर्वमसृजत॥',
    transliteration: 'sāśvābhavat | aśvavṛṣa itaraḥ | sā gardabhī | gardabha itaraḥ | tāṃ samevābhavat | tata ekaśaphamajāyata | ajābhavat | aja itaraḥ | avirabhavat | meṣa itaraḥ | tāṃ samevābhavat | tato\\\'jāvayo\\\'jāyanta | evameva yadidaṃ kiṃca mithunaṃ ā pipīlikābhyaḥ tatsarvamasṛjata ||',
    translation: 'She became a mare, he a stallion. She a she-donkey, he a donkey. She a ewe, he a ram. He united with her. Thus all pairs were created, down to the ants.',
    explanation: {
      simple: 'The pattern continued - mare/stallion, donkey/she-donkey, sheep/ram - down to the smallest ants. All paired creatures came from this.',
      deeper: 'Every species, down to the tiniest, arises from the primal Self playing as pairs. Mithuna (pair/couple) is the creative principle.',
    },
    practicalApplication: 'See all creatures as expressions of the one Self. From elephants to ants - all are the Self playing.',
    themes: ['all creatures', 'pairs', 'down to ants', 'one Self'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'brihadaranyaka',
    section: 1,
    verse: 7,
    sanskrit: 'सोऽवेत्। अहं वाव सृष्टिरस्मि। अहं हीदं सर्वमसृक्षीति। ततः सृष्टिरभवत्। सृष्ट्यां हास्यैतस्यां भवति य एवं वेद॥',
    transliteration: 'so\\\'vet | ahaṃ vāva sṛṣṭirasmi | ahaṃ hīdaṃ sarvamasṛkṣīti | tataḥ sṛṣṭirabhavat | sṛṣṭyāṃ hāsyaitasyāṃ bhavati ya evaṃ veda ||',
    translation: 'He knew: "I indeed am creation, for I have created all this." Thus creation arose. One who knows this becomes a creator in this creation.',
    explanation: {
      simple: 'The Self realized: "I am creation itself - I created all this." The one who understands this becomes a creator.',
      deeper: 'The creator and the creation are one. Knowing this identity makes one creative and powerful within creation.',
    },
    practicalApplication: 'Know yourself as the creative principle. You are not separate from creation - you are it.',
    themes: ['I am creation', 'identity', 'creative power'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'brihadaranyaka',
    section: 1,
    verse: 8,
    sanskrit: 'तद्धेदं तर्ह्यव्याकृतमासीत्। तन्नामरूपाभ्यामेव व्याक्रियत। असौ नामायमिदंरूप इति। तदिदमप्येतर्हि नामरूपाभ्यामेव व्याक्रियते। असौ नामायमिदंरूप इति॥',
    transliteration: 'tadhedaṃ tarhyavyākṛtamāsīt | tannāmarūpābhyāmeva vyākriyata | asau nāmāyamidaṃrūpa iti | tadidamapyetarhi nāmarūpābhyāmeva vyākriyate | asau nāmāyamidaṃrūpa iti ||',
    translation: 'Then all this was undifferentiated. It became differentiated by name and form: "This has this name, this has this form." Even today, all is differentiated by name and form.',
    explanation: {
      simple: 'Originally everything was undifferentiated. Then name and form appeared, creating distinction. This process continues today.',
      deeper: 'Name-and-form (nama-rupa) is the principle of manifestation. Reality is one; name and form create apparent multiplicity.',
    },
    practicalApplication: 'See beyond names and forms to the undifferentiated reality. Names are labels; forms are appearances.',
    themes: ['name and form', 'differentiation', 'manifestation'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'brihadaranyaka',
    section: 1,
    verse: 9,
    sanskrit: 'स एष इह प्रविष्ट आ नखाग्रेभ्यः। यथा क्षुरः क्षुरधाने हितः। यथा वा अग्निर्गार्हपत्ये। तं न पश्यन्ति। अकृत्स्नो हि सः॥',
    transliteration: 'sa eṣa iha praviṣṭa ā nakhāgrebhyaḥ | yathā kṣuraḥ kṣuradhāne hitaḥ | yathā vā agnirgārhapatye | taṃ na paśyanti | akṛtsno hi saḥ ||',
    translation: 'That Self has entered here up to the fingertips, like a razor in its case, like fire in its source. They do not see it, for it is incomplete when seen.',
    explanation: {
      simple: 'The Self has entered the body completely, like a razor hidden in its case or fire latent in wood. But we don\'t see it directly.',
      deeper: 'The Self is fully present but hidden. "Incomplete when seen" means: when perceived through limited faculties, it appears partial.',
    },
    practicalApplication: 'The Self is within you completely, but hidden. Look beyond the case (body) to find the razor (Self).',
    themes: ['hidden Self', 'razor in case', 'fire in wood', 'immanence'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'brihadaranyaka',
    section: 1,
    verse: 10,
    sanskrit: 'आत्मैवेदमग्र आसीदेक एव। सोऽकामयत। जाया मे स्याद्। अथ प्रजायेय। अथ वित्तं मे स्यात्। अथ कर्म कुर्वीयेति। एतावान्वै कामः। नेच्छंश्चापि एततो भूयो विन्देत। तस्मादप्येतर्ह्येक आकाङ्क्षति जाया मे स्यादथ प्रजायेयाथ वित्तं मे स्यादथ कर्म कुर्वीयेति। स यावदप्येतेषामेकैकं न प्राप्नोति अकृत्स्न एव तावत्मन्यते॥',
    transliteration: 'ātmaivedamagra āsīdeka eva | so\\\'kāmayata | jāyā me syād | atha prajāyeya | atha vittaṃ me syāt | atha karma kurvīyeti | etāvānvai kāmaḥ | necchaṃścāpi etato bhūyo vindeta | tasmādapyetarhyeka ākāṅkṣati jāyā me syādatha prajāyeyātha vittaṃ me syādatha karma kurvīyeti | sa yāvadapyeteṣāmekaikaṃ na prāpnoti akṛtsna eva tāvātmanyate ||',
    translation: 'In the beginning this was Self alone, one only. He desired: "May I have a wife, may I procreate, may I have wealth, may I perform work." This is the full extent of desire. Even if one wishes, one cannot obtain more than this. Therefore even today one desires these: "May I have a wife, may I procreate, may I have wealth, may I work." As long as one doesn\'t obtain each of these, one considers oneself incomplete.',
    explanation: {
      simple: 'The primal Self had four desires: spouse, children, wealth, action. These are the extent of all worldly desires. Without these, people feel incomplete.',
      deeper: 'The four purusarthas (human goals) are traced to the original Self. Feeling incomplete drives worldly pursuit.',
    },
    practicalApplication: 'Recognize these as universal desires from the primal Self. Are you seeking completion in externals?',
    themes: ['four desires', 'completeness', 'worldly goals', 'kama'],
    difficulty: 'intermediate',
  },
];

// =============================================================================
// CHAPTER 2.4: MAITREYI DIALOGUE I (Complete - 14 verses)
// Yajnavalkya teaches his wife about the immortal Self
// =============================================================================

const chapter2_4Verses: UpanishadVerse[] = [
  {
    upanishad: 'brihadaranyaka',
    section: 2,
    verse: 1,
    sanskrit: 'मैत्रेयीति होवाच याज्ञवल्क्यः उद्यास्यन्वा अहमस्मात्स्थानादस्मि। हन्त तेऽनया कात्यायन्या अन्तं करवाणीति॥',
    transliteration: 'maitreyīti hovāca yājñavalkyaḥ udyāsyanvā ahamasmātsthānādasmi | hanta te\\\'nayā kātyāyanyā antaṃ karavāṇīti ||',
    translation: '"Maitreyi!" said Yajnavalkya, "I am about to renounce this life. Let me make a settlement between you and Katyayani."',
    explanation: {
      simple: 'Sage Yajnavalkya tells his wife Maitreyi he will renounce worldly life. He offers to divide his wealth between her and his other wife Katyayani.',
      deeper: 'This famous dialogue occurs as Yajnavalkya prepares for sannyasa. Maitreyi\'s response will reveal her wisdom.',
    },
    practicalApplication: 'When the time comes, are you prepared to renounce? What would you ask for?',
    themes: ['renunciation', 'Yajnavalkya', 'Maitreyi', 'settlement'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'brihadaranyaka',
    section: 2,
    verse: 2,
    sanskrit: 'सा होवाच मैत्रेयी यन्नु म इयं भगोः सर्वा पृथिवी वित्तेन पूर्णा स्यात्कथं तेनामृता स्यामिति। नेति होवाच याज्ञवल्क्यः यथैवोपकरणवतां जीवितं तथैव ते जीवितं स्याद्। अमृतत्वस्य तु नाशास्ति वित्तेनेति॥',
    transliteration: 'sā hovāca maitreyī yannu ma iyaṃ bhagoḥ sarvā pṛthivī vittena pūrṇā syātkатhaṃ tenāmṛtā syāmiti | neti hovāca yājñavalkyaḥ yathaivopakaraṇavatāṃ jīvitaṃ tathaiva te jīvitaṃ syāt | amṛtatvasya tu nāśāsti vitteneti ||',
    translation: 'Maitreyi said: "Sir, if this entire earth filled with wealth were mine, would I become immortal through it?" "No," said Yajnavalkya, "your life would be like that of the wealthy. Through wealth there is no hope of immortality."',
    explanation: {
      simple: 'Maitreyi asks: Even with all the wealth in the world, would I become immortal? Yajnavalkya says: No, wealth cannot give immortality.',
      deeper: 'Maitreyi shows wisdom by asking the crucial question. Wealth gives comfort, not freedom from death.',
    },
    practicalApplication: 'No amount of wealth makes you immortal. Seek what wealth cannot buy.',
    themes: ['wealth', 'immortality', 'Maitreyi\'s wisdom', 'questioning'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    upanishad: 'brihadaranyaka',
    section: 2,
    verse: 3,
    sanskrit: 'सा होवाच मैत्रेयी येनाहं नामृता स्यां किमहं तेन कुर्याम्। यदेव भगवान्वेद तदेव मे ब्रूहीति॥',
    transliteration: 'sā hovāca maitreyī yenāhaṃ nāmṛtā syāṃ kimahaṃ tena kuryām | yadeva bhagavānveda tadeva me brūhīti ||',
    translation: 'Maitreyi said: "What shall I do with that which will not make me immortal? Tell me, sir, what you know (about immortality)."',
    explanation: {
      simple: 'Maitreyi rejects wealth: What use is it if it won\'t make me immortal? Teach me what leads to immortality!',
      deeper: 'This is the mark of a true seeker: rejecting what cannot liberate, demanding the highest knowledge.',
    },
    practicalApplication: 'Ask yourself: Am I pursuing things that cannot give immortality? Seek the eternal.',
    themes: ['rejection of wealth', 'seeking immortality', 'true seeker'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    upanishad: 'brihadaranyaka',
    section: 2,
    verse: 4,
    sanskrit: 'स होवाच याज्ञवल्क्यः प्रिया बतारे नः सती प्रियं भाषसे। एहि उपविश व्याख्यास्यामि ते। व्याचक्षाणस्य तु मे निदिध्यासस्वेति॥',
    transliteration: 'sa hovāca yājñavalkyaḥ priyā batāre naḥ satī priyaṃ bhāṣase | ehi upaviśa vyākhyāsyāmi te | vyācakṣāṇasya tu me nididhyāsasveti ||',
    translation: 'Yajnavalkya said: "Dear one, you were dear to me before, and now you say what is dear. Come, sit. I will explain to you. While I am explaining, reflect on it."',
    explanation: {
      simple: 'Yajnavalkya is pleased: You were dear, now even dearer for asking this. Sit down, I\'ll explain. But you must reflect deeply on it.',
      deeper: 'The teacher recognizes the student\'s readiness. The instruction to nididhyasana (deep meditation) is already given.',
    },
    practicalApplication: 'When receiving wisdom, reflect deeply. Don\'t just hear - contemplate, internalize.',
    themes: ['teacher-student', 'reflection', 'nididhyasana', 'dear one'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'brihadaranyaka',
    section: 2,
    verse: 5,
    sanskrit: 'स होवाच। न वा अरे पत्युः कामाय पतिः प्रियो भवति। आत्मनस्तु कामाय पतिः प्रियो भवति। न वा अरे जायायै कामाय जाया प्रिया भवति। आत्मनस्तु कामाय जाया प्रिया भवति॥',
    transliteration: 'sa hovāca | na vā are patyuḥ kāmāya patiḥ priyo bhavati | ātmanastu kāmāya patiḥ priyo bhavati | na vā are jāyāyai kāmāya jāyā priyā bhavati | ātmanastu kāmāya jāyā priyā bhavati ||',
    translation: 'He said: "It is not for the sake of the husband that the husband is dear, but for the sake of the Self. It is not for the sake of the wife that the wife is dear, but for the sake of the Self."',
    explanation: {
      simple: 'You don\'t love your husband for his sake - you love him for your own Self\'s sake. Same with wife. All love is Self-love.',
      deeper: 'This revolutionary insight: all relationships are ultimately about the Self. The beloved is dear because of the Self\'s reflection.',
    },
    practicalApplication: 'Examine your loves. Whom do you really love in your beloved? It is the Self.',
    themes: ['Self-love', 'relationships', 'true object of love'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'brihadaranyaka',
    section: 2,
    verse: 6,
    sanskrit: 'न वा अरे पुत्राणां कामाय पुत्राः प्रियाः भवन्ति। आत्मनस्तु कामाय पुत्राः प्रियाः भवन्ति। न वा अरे वित्तस्य कामाय वित्तं प्रियं भवति। आत्मनस्तु कामाय वित्तं प्रियं भवति॥',
    transliteration: 'na vā are putrāṇāṃ kāmāya putrāḥ priyāḥ bhavanti | ātmanastu kāmāya putrāḥ priyāḥ bhavanti | na vā are vittasya kāmāya vittaṃ priyaṃ bhavati | ātmanastu kāmāya vittaṃ priyaṃ bhavati ||',
    translation: '"It is not for the sake of sons that sons are dear, but for the sake of the Self. It is not for the sake of wealth that wealth is dear, but for the sake of the Self."',
    explanation: {
      simple: 'Sons are not dear for their own sake, but for your Self. Wealth is not dear for itself, but for the Self.',
      deeper: 'The pattern extends to children and possessions. What we think we love for themselves, we actually love for the Self.',
    },
    practicalApplication: 'Your love for children and wealth is really Self-love. Know this and find the true source of love.',
    themes: ['children', 'wealth', 'Self-love', 'true source'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'brihadaranyaka',
    section: 2,
    verse: 7,
    sanskrit: 'न वा अरे ब्रह्मणः कामाय ब्रह्म प्रियं भवति। आत्मनस्तु कामाय ब्रह्म प्रियं भवति। न वा अरे क्षत्रस्य कामाय क्षत्रं प्रियं भवति। आत्मनस्तु कामाय क्षत्रं प्रियं भवति। न वा अरे लोकानां कामाय लोकाः प्रियाः भवन्ति। आत्मनस्तु कामाय लोकाः प्रियाः भवन्ति॥',
    transliteration: 'na vā are brahmaṇaḥ kāmāya brahma priyaṃ bhavati | ātmanastu kāmāya brahma priyaṃ bhavati | na vā are kṣatrasya kāmāya kṣatraṃ priyaṃ bhavati | ātmanastu kāmāya kṣatraṃ priyaṃ bhavati | na vā are lokānāṃ kāmāya lokāḥ priyāḥ bhavanti | ātmanastu kāmāya lokāḥ priyāḥ bhavanti ||',
    translation: '"Not for the sake of brahminhood is brahminhood dear, but for the Self. Not for the sake of power is power dear, but for the Self. Not for the sake of worlds are worlds dear, but for the Self."',
    explanation: {
      simple: 'Status (brahminhood), power, even heavenly worlds - all are loved for the Self\'s sake, not their own.',
      deeper: 'Even spiritual and cosmic attainments are desired for the Self. The Self is the ultimate value behind all values.',
    },
    practicalApplication: 'Even your spiritual aspirations are for the Self. Know the Self directly.',
    themes: ['status', 'power', 'worlds', 'Self-love'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'brihadaranyaka',
    section: 2,
    verse: 8,
    sanskrit: 'न वा अरे देवानां कामाय देवाः प्रियाः भवन्ति। आत्मनस्तु कामाय देवाः प्रियाः भवन्ति। न वा अरे भूतानां कामाय भूतानि प्रियाणि भवन्ति। आत्मनस्तु कामाय भूतानि प्रियाणि भवन्ति। न वा अरे सर्वस्य कामाय सर्वं प्रियं भवति। आत्मनस्तु कामाय सर्वं प्रियं भवति॥',
    transliteration: 'na vā are devānāṃ kāmāya devāḥ priyāḥ bhavanti | ātmanastu kāmāya devāḥ priyāḥ bhavanti | na vā are bhūtānāṃ kāmāya bhūtāni priyāṇi bhavanti | ātmanastu kāmāya bhūtāni priyāṇi bhavanti | na vā are sarvasya kāmāya sarvaṃ priyaṃ bhavati | ātmanastu kāmāya sarvaṃ priyaṃ bhavati ||',
    translation: '"Not for the sake of gods are gods dear, but for the Self. Not for the sake of beings are beings dear, but for the Self. Not for the sake of all is all dear, but for the Self. It is the Self that should be seen, heard, reflected upon, and meditated on."',
    explanation: {
      simple: 'Even gods and all beings are loved for the Self. Therefore, see, hear, reflect on, and meditate on the Self.',
      deeper: 'The climax: everything loved is loved for the Self. Four practices: shravana, manana, nididhyasana (hearing, reflection, meditation).',
    },
    practicalApplication: 'Direct all your love-energy to the Self. See it, hear it, contemplate it, meditate on it.',
    themes: ['gods', 'all beings', 'everything', 'four practices'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'brihadaranyaka',
    section: 2,
    verse: 9,
    sanskrit: 'आत्मा वा अरे द्रष्टव्यः श्रोतव्यो मन्तव्यो निदिध्यासितव्यः। मैत्रेयि आत्मनो वा अरे दर्शनेन श्रवणेन मत्या विज्ञानेनेदं सर्वं विदितम्॥',
    transliteration: 'ātmā vā are draṣṭavyaḥ śrotavyo mantavyo nididhyāsitavyaḥ | maitreyi ātmano vā are darśanena śravaṇena matyā vijñānenedaṃ sarvaṃ viditam ||',
    translation: '"The Self, O Maitreyi, should be seen, should be heard, should be reflected upon, should be deeply meditated on. By seeing, hearing, reflecting, and knowing the Self, all this is known."',
    explanation: {
      simple: 'See the Self, hear about it, reflect on it, meditate deeply on it. Through knowing the Self, everything is known.',
      deeper: 'This is the Vedantic methodology: shravana (hearing), manana (reflection), nididhyasana (deep meditation). The result: knowing all.',
    },
    practicalApplication: 'Follow the path: hear the teaching, reflect on it, meditate deeply. By knowing Self, know all.',
    themes: ['four practices', 'knowing Self', 'knowing all', 'Vedantic method'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'brihadaranyaka',
    section: 2,
    verse: 10,
    sanskrit: 'ब्रह्म तं परादाद्योऽन्यत्रात्मनो ब्रह्म वेद। क्षत्रं तं परादाद्योऽन्यत्रात्मनः क्षत्रं वेद। लोकास्तं परादुर्योऽन्यत्रात्मनो लोकान्वेद। देवास्तं परादुर्योऽन्यत्रात्मनो देवान्वेद। भूतानि तं परादुर्योऽन्यत्रात्मनो भूतानि वेद। सर्वं तं परादाद्योऽन्यत्रात्मनः सर्वं वेद॥',
    transliteration: 'brahma taṃ parādādyo\\\'nyatrātmano brahma veda | kṣatraṃ taṃ parādādyo\\\'nyatrātmanaḥ kṣatraṃ veda | lokāstaṃ parāduryo\\\'nyatrātmano lokānveda | devāstaṃ parāduryo\\\'nyatrātmano devānveda | bhūtāni taṃ parāduryo\\\'nyatrātmano bhūtāni veda | sarvaṃ taṃ parādādyo\\\'nyatrātmanaḥ sarvaṃ veda ||',
    translation: '"Brahminhood abandons one who knows brahminhood as other than the Self. Kshatriya-hood abandons one who knows it as other than the Self. The worlds, the gods, the beings, everything abandons one who knows them as other than the Self."',
    explanation: {
      simple: 'If you think brahminhood, status, worlds, gods, beings, or anything is separate from the Self, they abandon you.',
      deeper: 'Separation consciousness leads to loss. Only by knowing all as Self does one truly possess anything.',
    },
    practicalApplication: 'Don\'t see anything as separate from the Self. That separation causes loss and alienation.',
    themes: ['separation', 'abandonment', 'non-dual knowing'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'brihadaranyaka',
    section: 2,
    verse: 11,
    sanskrit: 'इदं ब्रह्म इदं क्षत्रम् इमे लोका इमे देवा इमानि भूतानि इदं सर्वं यदयमात्मा॥',
    transliteration: 'idaṃ brahma idaṃ kṣatram ime lokā ime devā imāni bhūtāni idaṃ sarvaṃ yadayamātmā ||',
    translation: '"This brahminhood, this kshatriya-hood, these worlds, these gods, these beings, all this is the Self."',
    explanation: {
      simple: 'All distinctions - brahmin, warrior, worlds, gods, beings, everything - all this IS the Self.',
      deeper: 'The non-dual conclusion: subject and object, sacred and mundane, all is Atman. This is Advaita.',
    },
    practicalApplication: 'See everything as the Self. Nothing is outside. All is your own being.',
    themes: ['all is Self', 'non-duality', 'Advaita'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'brihadaranyaka',
    section: 2,
    verse: 12,
    sanskrit: 'स यथा दुन्दुभेर्हन्यमानस्य न बाह्यान्शब्दान्शक्नुयाद्ग्रहणाय। दुन्दुभेस्तु ग्रहणेन दुन्दुभ्याघातस्य वा शब्दो गृहीतः॥',
    transliteration: 'sa yathā dundubherhanyamānasya na bāhyānśabdānśaknuyādgrahaṇāya | dundubhestu grahaṇena dundubhyāghātasya vā śabdo gṛhītaḥ ||',
    translation: '"Just as one cannot catch the various sounds of a drum being beaten, but by grasping the drum or the drummer, the sounds are grasped."',
    explanation: {
      simple: 'You can\'t catch all the sounds of a drum individually. But grasp the drum or drummer - all sounds are grasped.',
      deeper: 'The analogy: chase individual things (sounds) and fail. Grasp the source (Self) and all effects are known.',
    },
    practicalApplication: 'Stop chasing effects. Grasp the cause - the Self - and all effects are included.',
    themes: ['drum analogy', 'cause and effect', 'grasp the source'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    upanishad: 'brihadaranyaka',
    section: 2,
    verse: 13,
    sanskrit: 'स यथाऽर्द्रऽएधाग्नेरभ्याहितस्य पृथग्धूमा विनिश्चरन्त्येवं वा अरेऽस्य महतो भूतस्य निःश्वसितमेतद्यदृग्वेदो यजुर्वेदः सामवेदोऽथर्वाङ्गिरस इतिहासः पुराणं विद्या उपनिषदः श्लोकाः सूत्राण्यनुव्याख्यानानि व्याख्यानानि। अस्यैवैतानि सर्वाणि निःश्वसितानि॥',
    transliteration: 'sa yathā\\\'rdrа edhāgnerabhyāhitasya pṛthagdhūmā viniścarantyevaṃ vā are\\\'sya mahato bhūtasya niḥśvasitametadyadṛgvedo yajurvedaḥ sāmavedo\\\'tharvāṅgirasa itihāsaḥ purāṇaṃ vidyā upaniṣadaḥ ślokāḥ sūtrāṇyanuvyākhyānāni vyākhyānāni | asyaivaitāni sarvāṇi niḥśvasitāni ||',
    translation: '"Just as smoke issues from a fire made of damp fuel, so from this great Being have been breathed forth the Rigveda, Yajurveda, Samaveda, Atharvangirasa, history, mythology, sciences, Upanishads, verses, sutras, explanations - all these are its breath."',
    explanation: {
      simple: 'As smoke comes from a fire, all the Vedas, sciences, and scriptures have been breathed forth from this great Being (Brahman).',
      deeper: 'All knowledge - sacred and secular - is the out-breathing of Brahman. Scripture is not human composition but divine exhalation.',
    },
    practicalApplication: 'All knowledge comes from the one Source. Honor its divine origin.',
    themes: ['Vedas', 'divine origin', 'breath of Brahman', 'all knowledge'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'brihadaranyaka',
    section: 2,
    verse: 14,
    sanskrit: 'स यथा सर्वासामपां समुद्र एकायनमेवं सर्वेषां स्पर्शानां त्वगेकायनमेवं सर्वेषां गन्धानां नासिकैकायनमेवं सर्वेषां रसानां जिह्वैकायनमेवं सर्वेषां रूपाणां चक्षुरेकायनमेवं सर्वेषां शब्दानां श्रोत्रमेकायनमेवं सर्वेषां संकल्पानां मन एकायनमेवं सर्वासां विद्यानां हृदयमेकायनमेवं सर्वेषां कर्मणां हस्तावेकायनमेवं सर्वेषामानन्दानामुपस्थ एकायनमेवं सर्वेषां विसर्गाणां पायुरेकायनमेवं सर्वेषामध्वनां पादावेकायनमेवं सर्वेषां वेदानां वागेकायनम्॥',
    transliteration: 'sa yathā sarvāsāmapāṃ samudra ekāyanamevaṃ sarveṣāṃ sparśānāṃ tvagekāyanamevaṃ sarveṣāṃ gandhānāṃ nāsikaikāyanamevaṃ sarveṣāṃ rasānāṃ jihvaikāyanamevaṃ sarveṣāṃ rūpāṇāṃ cakṣurekāyanamevaṃ sarveṣāṃ śabdānāṃ śrotramekāyanamevaṃ sarveṣāṃ saṃkalpānāṃ mana ekāyanamevaṃ sarvāsāṃ vidyānāṃ hṛdayamekāyanamevaṃ sarveṣāṃ karmaṇāṃ hastāvekāyanamevaṃ sarveṣāmānandānāmupastha ekāyanamevaṃ sarveṣāṃ visargāṇāṃ pāyurekāyanamevaṃ sarveṣāmadhvanāṃ pādāvekāyanamevaṃ sarveṣāṃ vedānāṃ vāgekāyanam ||',
    translation: '"As the ocean is the one goal of all waters, as the skin is the one goal of all touches, as the nose is of all smells, as the tongue of all tastes, as the eye of all forms, as the ear of all sounds, as the mind of all resolves, as the heart of all knowledge, as the hands of all actions, as the organ of generation of all pleasure, as the anus of all evacuations, as the feet of all walking, as speech of all the Vedas..."',
    explanation: {
      simple: 'Just as all waters flow to the ocean, all sensations have their organ as destination. All knowledge converges on the heart.',
      deeper: 'Everything has an ekayana (one goal/home). All experiences converge to their source. Ultimately, all converges on the Self.',
    },
    practicalApplication: 'See how all experiences converge to one. That one goal is the Self.',
    themes: ['convergence', 'ekayana', 'one goal', 'ocean'],
    difficulty: 'intermediate',
  },
];

// =============================================================================
// CHAPTER 3.8: GARGI'S QUESTIONS (Key excerpts - 8 verses)
// The Imperishable (Akshara) behind all
// =============================================================================

const chapter3_8Verses: UpanishadVerse[] = [
  {
    upanishad: 'brihadaranyaka',
    section: 3,
    verse: 1,
    sanskrit: 'सा होवाच गार्गी। याज्ञवल्क्य यदिदं सर्वमप्स्वोतं च प्रोतं च कस्मिन्नु खल्वाप ओताश्च प्रोताश्चेति। वायौ गार्गीति॥',
    transliteration: 'sā hovāca gārgī | yājñavalkya yadidaṃ sarvamapsv otaṃ ca protaṃ ca kasminnu khalvāpa otāśca protāśceti | vāyau gārgīti ||',
    translation: 'Gargi said: "Yajnavalkya, if all this is woven, warp and woof, on water, on what is water woven?" "On air, Gargi."',
    explanation: {
      simple: 'Gargi asks: Everything is woven on water - but what is water woven on? Yajnavalkya answers: Air.',
      deeper: 'Gargi\'s questioning method traces causes back progressively. She seeks the ultimate ground of all.',
    },
    practicalApplication: 'Keep asking: What is this based on? Trace causes back to the ultimate.',
    themes: ['Gargi', 'tracing causes', 'warp and woof', 'elements'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'brihadaranyaka',
    section: 3,
    verse: 2,
    sanskrit: 'कस्मिन्नु खलु वायुरोतश्च प्रोतश्चेति। अन्तरिक्षलोकेषु गार्गीति। कस्मिन्नु खल्वन्तरिक्षलोका ओताश्च प्रोताश्चेति। गन्धर्वलोकेषु गार्गीति॥',
    transliteration: 'kasminnu khalu vāyurotaśca protaśceti | antarikṣalokeṣu gārgīti | kasminnu khalvantarikṣalokā otāśca protāśceti | gandharvalokеṣu gārgīti ||',
    translation: '"On what is air woven?" "On the mid-space worlds." "On what are the mid-space worlds woven?" "On the gandharva-worlds."',
    explanation: {
      simple: 'Air is woven on mid-space; mid-space on gandharva-worlds. The questioning continues upward.',
      deeper: 'The progression moves through cosmic realms, each dependent on a higher cause.',
    },
    practicalApplication: 'See how each level depends on a higher. What is the highest on which all depends?',
    themes: ['hierarchy', 'dependence', 'cosmic realms'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'brihadaranyaka',
    section: 3,
    verse: 3,
    sanskrit: 'कस्मिन्नु खलु गन्धर्वलोका ओताश्च प्रोताश्चेति। आदित्यलोकेषु गार्गीति। कस्मिन्नु खल्वादित्यलोका ओताश्च प्रोताश्चेति। चन्द्रलोकेषु गार्गीति। कस्मिन्नु खलु चन्द्रलोका ओताश्च प्रोताश्चेति। नक्षत्रलोकेषु गार्गीति। कस्मिन्नु खलु नक्षत्रलोका ओताश्च प्रोताश्चेति। देवलोकेषु गार्गीति। कस्मिन्नु खलु देवलोका ओताश्च प्रोताश्चेति। इन्द्रलोकेषु गार्गीति। कस्मिन्नु खलु इन्द्रलोका ओताश्च प्रोताश्चेति। प्रजापतिलोकेषु गार्गीति। कस्मिन्नु खलु प्रजापतिलोका ओताश्च प्रोताश्चेति। ब्रह्मलोकेषु गार्गीति। कस्मिन्नु खलु ब्रह्मलोका ओताश्च प्रोताश्चेति॥',
    transliteration: 'kasminnu khalu gandharvalokā otāśca protāśceti | ādityalokeṣu gārgīti ... brahmalokеṣu gārgīti | kasminnu khalu brahmalokā otāśca protāśceti ||',
    translation: '"On what are the gandharva-worlds woven?" "On the sun-worlds." "On what the sun-worlds?" "On the moon-worlds." "The moon-worlds?" "On the star-worlds." "The star-worlds?" "On the deva-worlds." "The deva-worlds?" "On Indra\'s worlds." "Indra\'s worlds?" "On Prajapati\'s worlds." "Prajapati\'s worlds?" "On the Brahma-worlds." "On what are the Brahma-worlds woven?"',
    explanation: {
      simple: 'The questioning traces through all cosmic realms: sun, moon, stars, gods, Indra, Prajapati, Brahma. Finally: On what is even Brahma-world woven?',
      deeper: 'Even the highest creator-realm (Brahmaloka) must have a ground. What is the ultimate support of all?',
    },
    practicalApplication: 'Even the highest realm rests on something. Seek that ultimate ground.',
    themes: ['cosmic hierarchy', 'Brahmaloka', 'ultimate question'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'brihadaranyaka',
    section: 3,
    verse: 4,
    sanskrit: 'स होवाच। गार्गि मातिप्राक्षीर्मा ते मूर्धा विपतिष्यति। अनतिप्रश्न्यां वै देवतामतिपृच्छसि। गार्गि मातिप्राक्षीरिति॥',
    transliteration: 'sa hovāca | gārgi mātiprākṣīrmā te mūrdhā vipatiṣyati | anatiPraśnyāṃ vai devatāmatipṛcchasi | gārgi mātiprākṣīriti ||',
    translation: 'He said: "Gargi, do not ask too much, lest your head fall off. You are asking about a deity that is not to be questioned further. Do not ask too much, Gargi."',
    explanation: {
      simple: 'Yajnavalkya warns: Stop questioning or your head will fall off! You\'re asking about what cannot be questioned further.',
      deeper: 'The warning indicates the approach to the ultimate. Beyond Brahmaloka is the unquestionable - the Akshara (Imperishable).',
    },
    practicalApplication: 'There is a point beyond which questioning fails. That is the Imperishable.',
    themes: ['warning', 'limit of questioning', 'Imperishable'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'brihadaranyaka',
    section: 3,
    verse: 5,
    sanskrit: 'तथ होवाच गार्गी वाचक्नवी। ब्राह्मणा भगवन्तोऽहं वः प्रश्नौ प्रक्ष्यामि। तौ चेन्मे वक्ष्यसि। न वै जातु युष्माकमिमं कश्चिद्ब्रह्मोद्यं जेतेति। पृच्छ गार्गीति॥',
    transliteration: 'tatha hovāca gārgī vācaknavī | brāhmaṇā bhagavanto\\\'haṃ vaḥ praśnau prakṣyāmi | tau cenme vakṣyasi | na vai jātu yuṣmākаmimaṃ kaścidbrahmodуaṃ jeteti | pṛccha gārgīti ||',
    translation: 'Then Gargi Vacaknavi said: "Venerable Brahmins, I will ask him two questions. If he answers them, none of you will defeat him in argument about Brahman." "Ask, Gargi."',
    explanation: {
      simple: 'Gargi returns with two final questions. She stakes everything: If he answers these, no one can defeat him in debate about Brahman.',
      deeper: 'This is the climactic confrontation. Gargi\'s persistence leads to the highest teaching.',
    },
    practicalApplication: 'Persist in questioning. The deepest truths come from not giving up.',
    themes: ['persistence', 'two questions', 'debate', 'Gargi\'s courage'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'brihadaranyaka',
    section: 3,
    verse: 6,
    sanskrit: 'सा होवाच याज्ञवल्क्य यद्ऊर्ध्वं दिवो यदवाक्पृथिव्या यदन्तरा द्यावापृथिवी इमे यद्भूतं च भवच्च भविष्यच्चेत्याचक्षते कस्मिंस्तदोतं च प्रोतं चेति॥',
    transliteration: 'sā hovāca yājñavalkya yadūrdhvaṃ divo yadavākpṛthivyā yadantarā dyāvāpṛthivī ime yadbhūtaṃ ca bhavacca bhaviṣyaccety ācakṣate kasminstadotaṃ ca protaṃ ceti ||',
    translation: 'She said: "Yajnavalkya, that which is above the sky, below the earth, between heaven and earth, that which they call past, present, and future - on what is that woven, warp and woof?"',
    explanation: {
      simple: 'Gargi asks: All of space (above, below, between) and all of time (past, present, future) - on what is all this woven?',
      deeper: 'She encompasses everything: space and time, the entire cosmic and temporal order. What is its ground?',
    },
    practicalApplication: 'Ask: What is the ground of space and time? What supports the entire manifest universe?',
    themes: ['space', 'time', 'ground of all', 'comprehensive question'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'brihadaranyaka',
    section: 3,
    verse: 7,
    sanskrit: 'स होवाच। यद्ऊर्ध्वं गार्गि दिवो यदवाक्पृथिव्या यदन्तरा द्यावापृथिवी इमे यद्भूतं च भवच्च भविष्यच्चेत्याचक्षत आकाशे तदोतं च प्रोतं चेति॥',
    transliteration: 'sa hovāca | yadūrdhvaṃ gārgi divo yadavākpṛthivyā yadantarā dyāvāpṛthivī ime yadbhūtaṃ ca bhavacca bhaviṣyaccеtyācakṣata ākāśе tadotaṃ ca protaṃ ceti ||',
    translation: 'He said: "That which is above the sky, below the earth, between heaven and earth, that which is called past, present, and future - that is woven on space (akasha)."',
    explanation: {
      simple: 'Yajnavalkya answers: All of space and time is woven on akasha (space/ether - the subtle element).',
      deeper: 'Akasha here is the unmanifest substrate of all manifest space-time. But Gargi will ask further.',
    },
    practicalApplication: 'All manifest reality rests on the subtle space. Akasha is the ground of the physical.',
    themes: ['akasha', 'space', 'ground of manifest'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'brihadaranyaka',
    section: 3,
    verse: 8,
    sanskrit: 'सा होवाच कस्मिन्नु खल्वाकाश ओतश्च प्रोतश्चेति। स होवाच। एतद्वै तदक्षरं गार्गि ब्राह्मणा अभिवदन्त्यस्थूलमनणु अह्रस्वमदीर्घम्। अलोहितमस्नेहमच्छायमतमोऽवायवनाकाशमसङ्गमरसमगन्धमचक्षुष्कमश्रोत्रमवाक्कममनस्कमतेजस्कमप्राणममुखममात्रमनन्तरमबाह्यम्। न तदश्नाति किंचन न तदश्नाति कश्चन॥',
    transliteration: 'sā hovāca kasminnu khalvākāśa otaśca protaścеti | sa hovāca | etadvai tadakṣaraṃ gārgi brāhmaṇā abhivadantyasthūlamanaṇu ahrasvamadīrgham | alohitamasnеhamacchāyamatamo\\\'vāyаvanākāśamasaṅgamarasamagandhamacakṣuṣkamaśrotramavākkamamanaskamatejaSkамaprāṇamamukhaмamātramаnantarambāhyam | na tadaśnāti kiṃcana na tadaśnāti kaścana ||',
    translation: 'She said: "On what is space woven?" He said: "That, O Gargi, the brahmins call the Imperishable (Akshara). It is not gross, not subtle, not short, not long, not red, not adhesive, shadowless, dark-less, wind-less, space-less, unattached, taste-less, smell-less, sight-less, hearing-less, speech-less, mind-less, light-less, breath-less, mouth-less, measure-less, without inside or outside. It eats nothing, and nothing eats it."',
    explanation: {
      simple: 'What is space woven on? The Imperishable (Akshara). It has no qualities we can name - not gross or subtle, no color, taste, sense. Beyond everything describable.',
      deeper: 'This is the via negativa - describing the ultimate by negation. Akshara (Imperishable) is beyond all categories.',
    },
    practicalApplication: 'The ultimate cannot be described positively. It is beyond all qualities. Know it by negating all descriptions.',
    themes: ['Akshara', 'Imperishable', 'neti neti', 'via negativa'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
];

// =============================================================================
// CHAPTER 4.4: THE SELF IN DEEP SLEEP AND DEATH (Key excerpts - 12 verses)
// What happens when we sleep and when we die
// =============================================================================

const chapter4_4Verses: UpanishadVerse[] = [
  {
    upanishad: 'brihadaranyaka',
    section: 4,
    verse: 1,
    sanskrit: 'स यत्रायं प्राणेनोक्रामत्यथैनमेते सर्वे प्राणा अभ्युक्क्रामन्ति। स विज्ञानमेव अनुविज्ञानं भवति। तं विद्यामानां अनुविद्या अन्वावर्तन्ते॥',
    transliteration: 'sa yatrāyaṃ prāṇenotkrāmatyathainamete sarve prāṇā abhyutkrāmanti | sa vijñānameva anuvijñānaṃ bhavati | taṃ vidyāmanāṃ anuviдyā anvāvartante ||',
    translation: 'When this person departs with the life-breath, all the vital breaths follow him. He becomes pure knowledge, and what he knows follows him.',
    explanation: {
      simple: 'At death, when the life-breath leaves, all vital functions follow. The person becomes pure consciousness, and his knowledge goes with him.',
      deeper: 'At death, prana departs first, then all organs. The Self, now pure vijnana (consciousness), carries its knowledge (karma/samskara).',
    },
    practicalApplication: 'Your knowledge and tendencies go with you at death. Cultivate what you want to carry.',
    themes: ['death', 'departure of prana', 'pure consciousness', 'karma follows'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'brihadaranyaka',
    section: 4,
    verse: 2,
    sanskrit: 'स यथा तृणजलायुका तृणस्यान्तं गत्वाऽन्यमाक्रममाक्रम्यात्मानमुपसंहरत्येवमेवायमात्मेदं शरीरं निहत्याविद्यां गमयित्वाऽन्यमाक्रममाक्रम्यात्मानमुपसंहरति॥',
    transliteration: 'sa yathā tṛṇajalāyukā tṛṇasyāntaṃ gatvā\\\'nyamākramamākramyātmānamupasaṃharatyеvamevāyamātmedaṃ śarīraṃ nihatyāvidyāṃ gamayitvā\\\'nyamākramamākramyātmānaṃ upasaṃharati ||',
    translation: 'Just as a caterpillar, reaching the end of a blade of grass, takes hold of another blade and draws itself over, so does the Self, after leaving this body and dispelling ignorance, take hold of another and draw itself over.',
    explanation: {
      simple: 'Like a caterpillar moving from one grass blade to another, the Self leaves one body and moves to the next.',
      deeper: 'The caterpillar analogy: the Self secures the next body before leaving the current one. Death is a transition, not an end.',
    },
    practicalApplication: 'Death is transition, not extinction. The Self moves from body to body like a caterpillar between grass blades.',
    themes: ['caterpillar', 'transmigration', 'transition', 'rebirth'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    upanishad: 'brihadaranyaka',
    section: 4,
    verse: 3,
    sanskrit: 'स यथा पेशस्कारी पेशसो मात्रामुपादायान्यन्नवतरं कल्याणतरं रूपं तनुत एवमेवायमात्मेदं शरीरं निहत्याविद्यां गमयित्वान्यन्नवतरं कल्याणतरं रूपं कुरुते। पित्र्यं वा गान्धर्वं वा दैवं वा प्राजापत्यं वा ब्राह्मं वा अन्येषां वा भूतानाम्॥',
    transliteration: 'sa yathā peśaskārī peśaso mātrāmupādāyānyаnnavataraṃ kalyāṇataraṃ rūpaṃ tanuta evamevāyamātmedaṃ śarīraṃ nihatyāvidyāṃ gamayitvānyannavataraṃ kalyāṇataraṃ rūpaṃ kurute | pitryaṃ vā gāndharvaṃ vā daivaṃ vā prājāpatyaṃ vā brāhmaṃ vā anyeṣāṃ vā bhūtānām ||',
    translation: 'Just as a goldsmith, taking a piece of gold, fashions a newer and more beautiful form, so does the Self, casting off this body and dispelling ignorance, make for itself a newer and more beautiful form - of the fathers, gandharvas, gods, Prajapati, Brahma, or other beings.',
    explanation: {
      simple: 'Like a goldsmith melting gold to make a new ornament, the Self leaves this body and fashions a new one - human, celestial, or divine.',
      deeper: 'The goldsmith analogy: the Self is the constant material; bodies are temporary forms. The next form depends on karma.',
    },
    practicalApplication: 'You are the gold, not the ornament. Bodies are temporary forms the eternal Self takes.',
    themes: ['goldsmith', 'new form', 'various births', 'eternal Self'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    upanishad: 'brihadaranyaka',
    section: 4,
    verse: 4,
    sanskrit: 'स वा अयमात्मा ब्रह्म। विज्ञानमयो मनोमयः प्राणमयो वाङ्मयश्चक्षुर्मयः श्रोत्रमयः पृथिवीमय आपोमयो वायुमय आकाशमयस्तेजोमयोऽतेजोमयः काममयोऽकाममयः क्रोधमयोऽक्रोधमयो धर्ममयोऽधर्ममयः सर्वमयस्तद्यदेतदिदंमयोऽदोमय इति॥',
    transliteration: 'sa vā ayamātmā brahma | vijñānamayo manomayaḥ prāṇamayo vāṅmayaścakṣurmayaḥ śrotramayaḥ pṛthivīmaya āpomayo vāyumaya ākāśamayastejomayo\\\'tejomayaḥ kāmamayo\\\'kāmamayaḥ krodhamayo\\\'krodhamayaḥ dharmamayo\\\'dharmamayaḥ sarvamayastadyadetadidaṃmayo\\\'domaya iti ||',
    translation: 'This Self is Brahman. It is made of consciousness, made of mind, made of breath, made of speech, made of sight, made of hearing, made of earth, water, air, space, light and dark, desire and desirelessness, anger and peace, dharma and adharma. It is made of all this - "made of this, made of that."',
    explanation: {
      simple: 'The Self is Brahman. It appears to be made of mind, senses, elements, emotions, ethics - "made of this and that" (idammaya, adomaya).',
      deeper: 'Aham Brahmasmi is implicit. The Self appears as everything through limiting adjuncts, but is really Brahman.',
    },
    practicalApplication: 'You are Brahman appearing as all these qualities. Don\'t identify with the qualities - know the Self.',
    themes: ['Self is Brahman', 'made of all', 'idammaya adomaya', 'Aham Brahmasmi'],
    difficulty: 'intermediate',
    famousVerse: true,
    mahavakya: {
      statement: 'अयमात्मा ब्रह्म',
      transliteration: 'Ayam Ātmā Brahma',
      meaning: 'This Self is Brahman',
    },
  },
  {
    upanishad: 'brihadaranyaka',
    section: 4,
    verse: 5,
    sanskrit: 'यथाकारी यथाचारी तथा भवति। साधुकारी साधुर्भवति पापकारी पापो भवति। पुण्यः पुण्येन कर्मणा भवति पापः पापेन॥',
    transliteration: 'yathākārī yathācārī tathā bhavati | sādhukārī sādhurbhavati pāpakārī pāpo bhavati | puṇyaḥ puṇyena karmaṇā bhavati pāpaḥ pāpena ||',
    translation: 'As one acts, as one conducts oneself, so does one become. The doer of good becomes good; the doer of evil becomes evil. One becomes virtuous by virtuous action, sinful by sinful action.',
    explanation: {
      simple: 'You become what you do. Good actions make you good; bad actions make you bad. Action shapes destiny.',
      deeper: 'This is the law of karma. Character is formed by action. The next birth is determined by accumulated karma.',
    },
    practicalApplication: 'Be conscious of your actions. What you do, you become. Choose wisely.',
    themes: ['karma', 'action shapes destiny', 'becoming'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    upanishad: 'brihadaranyaka',
    section: 4,
    verse: 6,
    sanskrit: 'अथो खल्वाहुः काममय एवायं पुरुष इति। स यथाकामो भवति तत्क्रतुर्भवति। यत्क्रतुर्भवति तत्कर्म कुरुते। यत्कर्म कुरुते तदभिसम्पद्यते॥',
    transliteration: 'atho khalvāhuḥ kāmamaya evāyaṃ puruṣa iti | sa yathākāmo bhavati tatkraturbhavati | yatkraturbhavati tatkarma kurute | yatkarma kurute tadabhisaṃpadyate ||',
    translation: 'They say a person is made of desire. As is one\'s desire, so is one\'s will. As is one\'s will, so is one\'s action. As is one\'s action, so is what one attains.',
    explanation: {
      simple: 'You are made of desire. Desire shapes will, will shapes action, action shapes attainment. Desire is the root.',
      deeper: 'The causal chain: kama (desire) → kratu (will/resolve) → karma (action) → phala (result). Desire is the origin of becoming.',
    },
    practicalApplication: 'Watch your desires - they create your will, actions, and destiny. Transform desire at the root.',
    themes: ['desire', 'will', 'action', 'result', 'causal chain'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'brihadaranyaka',
    section: 4,
    verse: 7,
    sanskrit: 'तदेष श्लोको भवति। तदेव सक्तः सह कर्मणैति लिङ्गं मनो यत्र निषक्तमस्य। प्राप्यान्तं कर्मणस्तस्य यत्किंचेह करोत्ययम्। तस्माल्लोकात्पुनरैत्यस्मै लोकाय कर्मण इति॥',
    transliteration: 'tadeṣa śloko bhavati | tadeva saktaḥ saha karmaṇaiti liṅgaṃ mano yatra niṣaktamasya | prāpyāntaṃ karmaṇastasya yatkiṃceha karotyayam | tasmāllokātpunaraityasmai lokāya karmaṇa iti ||',
    translation: 'There is this verse: "Attached to that, he goes with his work to wherever his mind is fixed. Having exhausted the karma of whatever he does here, he returns from that world to this world for (more) work."',
    explanation: {
      simple: 'You go to the realm your mind is attached to. After exhausting karma there, you return for more action. The cycle continues.',
      deeper: 'The mechanics of rebirth: attachment → destination → exhaustion of karma → return. This is samsara.',
    },
    practicalApplication: 'What is your mind attached to? That determines where you go. Release attachment to end the cycle.',
    themes: ['attachment', 'rebirth cycle', 'samsara', 'karma exhaustion'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'brihadaranyaka',
    section: 4,
    verse: 8,
    sanskrit: 'नु कामयमानः। अथाकामयमानो योऽकामो निष्काम आप्तकाम आत्मकामो न तस्य प्राणा उत्क्रामन्ति। ब्रह्मैव सन्ब्रह्माप्येति॥',
    transliteration: 'nu kāmayamānaḥ | athākāmayamāno yo\\\'kāmo niṣkāma āptakāma ātmakāmo na tasya prāṇā utkrāmanti | brahmaiva sanbrahmāpyeti ||',
    translation: 'That is for one who desires. But one who is without desire, who is free from desire, whose desire is fulfilled, whose desire is the Self - his vital breaths do not depart. Being Brahman, he goes to Brahman.',
    explanation: {
      simple: 'For the desireless person - whose desire is fulfilled in the Self - the pranas don\'t depart. Already being Brahman, he merges into Brahman.',
      deeper: 'The liberated person (atmakama - whose desire is Self) doesn\'t undergo transmigration. Already Brahman, he realizes Brahman.',
    },
    practicalApplication: 'Become desireless - not by suppression, but by fulfillment in the Self. Then you go nowhere; you ARE Brahman.',
    themes: ['desirelessness', 'atmakama', 'liberation', 'brahmaiva sanbrahmapyeti'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'brihadaranyaka',
    section: 4,
    verse: 9,
    sanskrit: 'तदेष श्लोको भवति। यदा सर्वे प्रमुच्यन्ते कामा येऽस्य हृदि श्रिताः। अथ मर्त्योऽमृतो भवति अत्र ब्रह्म समश्नुत इति॥',
    transliteration: 'tadeṣa śloko bhavati | yadā sarve pramucyante kāmā ye\\\'sya hṛdi śritāḥ | atha martyo\\\'mṛto bhavati atra brahma samaśnuta iti ||',
    translation: 'There is this verse: "When all the desires that dwell in the heart are released, then the mortal becomes immortal and attains Brahman here."',
    explanation: {
      simple: 'When all desires lodged in the heart are released, the mortal becomes immortal and attains Brahman right here, in this life.',
      deeper: 'Liberation is possible here and now (ihaiva). It requires complete release of desire, not physical death.',
    },
    practicalApplication: 'Liberation is available now, when desires are released. You don\'t need to die - you need to release.',
    themes: ['release of desires', 'immortality here', 'jivanmukti', 'liberation now'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'brihadaranyaka',
    section: 4,
    verse: 10,
    sanskrit: 'तद्यथाहिनिर्ल्वयनी वल्मीके मृता प्रत्यस्ता शयीतैवमेवेदं शरीरं शेते। अथायमशरीरोऽमृतः प्राणो ब्रह्मैव तेज एव॥',
    transliteration: 'tadyathāhinirlvayanī valmīke mṛtā pratyastā śayītaivamevedaṃ śarīraṃ śete | athāyamaśarīro\\\'mṛtaḥ prāṇo brahmaiva teja eva ||',
    translation: 'Just as the slough of a snake lies dead and cast off on an ant-hill, so does this body lie. But this bodiless, immortal Life (Prana) is Brahman indeed, is light indeed.',
    explanation: {
      simple: 'Like a snake\'s shed skin lying on an anthill, the body lies dead. But the Self - bodiless, immortal - is Brahman, is light.',
      deeper: 'The snake-skin analogy: the body is discarded like an old skin. What remains is the deathless Self, which is Brahman.',
    },
    practicalApplication: 'You shed bodies like a snake sheds skin. The immortal Self remains - that is Brahman, that is light.',
    themes: ['snake skin', 'shedding body', 'immortal Self', 'Brahman', 'light'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'brihadaranyaka',
    section: 4,
    verse: 11,
    sanskrit: 'स वा एष महानज आत्मा योऽयं विज्ञानमयः प्राणेषु। य एषोऽन्तर्हृदय आकाशस्तस्मिञ्छेते। सर्वस्य वशी सर्वस्येशानः सर्वस्याधिपतिः। स न साधुना कर्मणा भूयान्नो एवासाधुना कनीयान्। एष सर्वेश्वरः एष भूताधिपतिरेष भूतपाल एष सेतुर्विधरण एषां लोकानामसम्भेदाय॥',
    transliteration: 'sa vā eṣa mahānaja ātmā yo\\\'yaṃ vijñānamayaḥ prāṇеṣu | ya eṣo\\\'ntarhṛdaya ākāśastasmiñchеte | sarvasya vaśī sarvasyеśānaḥ sarvasyādhipatiḥ | sa na sādhunā karmaṇā bhūyānno evāsādhunā kanīyān | eṣa sarveśvaraḥ eṣa bhūtādhipatireṣa bhūtapāla eṣa seturvidharaṇа eṣāṃ lokānāmasambhedāya ||',
    translation: 'This great unborn Self, made of consciousness, dwells in the space within the heart. It is the controller of all, the lord of all, the ruler of all. It does not become greater by good action nor smaller by bad action. It is the lord of all beings, the protector of beings, the bridge that holds these worlds apart.',
    explanation: {
      simple: 'The great, unborn Self in the heart is lord and ruler of all. It is unchanged by good or bad action. It is the bridge that keeps worlds separate.',
      deeper: 'The Self is unborn (aja), unchangeable by karma, the Ishvara (lord) of all. It is the dam (setu) preventing cosmic collapse.',
    },
    practicalApplication: 'Know the Self in your heart as the unborn lord. It is unaffected by your actions - yet it rules all.',
    themes: ['unborn Self', 'lord of all', 'unchanged by karma', 'setu', 'heart'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'brihadaranyaka',
    section: 4,
    verse: 12,
    sanskrit: 'तमेतं वेदानुवचनेन ब्राह्मणा विविदिषन्ति। यज्ञेन दानेन तपसाऽनाशकेन। एतमेव विदित्वा मुनिर्भवति। एतमेव प्रव्राजिनो लोकमिच्छन्तः प्रव्रजन्ति॥',
    transliteration: 'tametaṃ vedānuvacanena brāhmaṇā vividyṣanti | yajñena dānena tapasā\\\'nāśakena | etameva viditvā munirbhavati | etameva pravrājino lokamicchantaḥ pravrajanti ||',
    translation: 'The Brahmins seek to know this Self through Vedic study, sacrifice, charity, austerity, and fasting. Knowing this alone, one becomes a sage. It is this world that the renunciates desire when they leave home.',
    explanation: {
      simple: 'People seek the Self through study, rituals, charity, austerity, and fasting. Knowing the Self, one becomes a sage. Renunciates leave home seeking this.',
      deeper: 'Various means (study, yajna, dana, tapas) all aim at Self-knowledge. Sannyasa is for those who directly pursue this goal.',
    },
    practicalApplication: 'All spiritual practices aim at knowing the Self. Know this, and you become a sage.',
    themes: ['means to Self-knowledge', 'study', 'yajna', 'tapas', 'sannyasa'],
    difficulty: 'intermediate',
  },
];

// =============================================================================
// SECTION DEFINITIONS
// =============================================================================

const section1_4: UpanishadSection = {
  number: 1,
  name: {
    sanskrit: 'प्रथमोध्यायः (१.४)',
    english: 'Creation and the Self',
  },
  summary: 'How the one Self became many through fear, loneliness, and desire. The primal division into male and female, the creation of all species down to ants, and the Self\'s entry into creation. "I am creation" - the identity of creator and creation.',
  verses: chapter1_4Verses,
  isCurated: true,
  totalVerses: 17,
};

const section2_4: UpanishadSection = {
  number: 2,
  name: {
    sanskrit: 'द्वितीयोध्यायः (२.४)',
    english: 'Maitreyi Dialogue I - The Immortal Self',
  },
  summary: 'The famous dialogue between Yajnavalkya and his wife Maitreyi. He offers her wealth before renouncing; she asks for immortality instead. The teaching that all love is Self-love, and that through knowing the Self, all is known.',
  verses: chapter2_4Verses,
  isCurated: false,
  totalVerses: 14,
};

const section3_8: UpanishadSection = {
  number: 3,
  name: {
    sanskrit: 'तृतीयोध्यायः (३.८)',
    english: 'Gargi\'s Questions - The Imperishable',
  },
  summary: 'The courageous woman philosopher Gargi challenges Yajnavalkya with progressive questions: On what is everything woven? Tracing causes through all cosmic realms, she arrives at the Akshara (Imperishable) - beyond all description, the ultimate ground of all.',
  verses: chapter3_8Verses,
  isCurated: true,
  totalVerses: 12,
};

const section4_4: UpanishadSection = {
  number: 4,
  name: {
    sanskrit: 'चतुर्थोध्यायः (४.४)',
    english: 'Death, Karma, and Liberation',
  },
  summary: 'What happens at death: the caterpillar and goldsmith analogies. How karma determines rebirth, and how desire is the root. Liberation for the desireless: "Being Brahman, he goes to Brahman." The Self in the heart as the unborn lord of all.',
  verses: chapter4_4Verses,
  isCurated: true,
  totalVerses: 25,
};

// =============================================================================
// MAIN EXPORT
// =============================================================================

export const brihadaranyakaUpanishad: Upanishad = {
  id: 'brihadaranyaka',
  name: {
    sanskrit: 'बृहदारण्यकोपनिषद्',
    english: 'Brihadaranyaka Upanishad',
    meaning: 'The Great Forest Upanishad',
  },
  veda: 'yajur',
  summary: 'The largest and one of the oldest principal Upanishads, from the Shukla Yajur Veda. Features the great sage Yajnavalkya in his debates with scholars and teachings to his wives. Contains profound dialogues with Maitreyi on immortality, with Gargi on the Imperishable, and detailed teachings on death, rebirth, and liberation. The source of the Mahavakya "Aham Brahmasmi" (I am Brahman).',
  keyTeachings: [
    'Aham Brahmasmi - I am Brahman (the Mahavakya)',
    'All love is ultimately Self-love',
    'Know the Self, and all is known',
    'Fear arises from a second (duality)',
    'The Self is the Akshara (Imperishable) beyond all description',
    'As is desire, so is will; as is will, so is action; as is action, so is attainment',
    'The desireless one, being Brahman, goes to Brahman',
    'When all desires are released, the mortal becomes immortal here',
  ],
  totalVerses: 435,
  includedVerses: 44,
  sections: [section1_4, section2_4, section3_8, section4_4],
  difficulty: 'advanced',
  estimatedReadTime: '35 min',
  mahavakya: {
    statement: 'अहं ब्रह्मास्मि',
    transliteration: 'Aham Brahmāsmi',
    meaning: 'I am Brahman',
  },
};
