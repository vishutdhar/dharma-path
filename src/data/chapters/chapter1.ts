// =============================================================================
// CHAPTER 1: ARJUNA VISHADA YOGA - THE YOGA OF ARJUNA'S DEJECTION
// =============================================================================
// The dramatic opening. Two armies face each other. Arjuna sees his teachers,
// grandfathers, and cousins on both sides. Overwhelmed with grief, he drops
// his bow and refuses to fight. This sets the stage for Krishna's teaching.
// 47 verses covering: battlefield setup, Arjuna's crisis, and his surrender.
// =============================================================================

import { VerseContent, ChapterContent } from '../verseTemplate';

const verses: VerseContent[] = [
  // -------------------------------------------------------------------------
  // SECTION 1: THE BATTLEFIELD SCENE (Verses 1-11)
  // Dhritarashtra asks about the battle; Duryodhana surveys the armies
  // -------------------------------------------------------------------------
  {
    chapter: 1,
    verse: 1,
    sanskrit: "धृतराष्ट्र उवाच।\nधर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः।\nमामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय।।",
    transliteration: "dhṛtarāṣṭra uvāca\ndharma-kṣetre kuru-kṣetre samavetā yuyutsavaḥ\nmāmakāḥ pāṇḍavāś caiva kim akurvata sañjaya",

    translation: "Dhritarashtra said: O Sanjaya, assembled on the sacred field of Kurukshetra, eager to fight, what did my sons and the sons of Pandu do?",

    explanation: {
      simple: "The blind king Dhritarashtra asks his secretary Sanjaya what's happening on the battlefield. Notice he says 'my sons' versus 'the sons of Pandu'—revealing his bias. He's already divided in his heart, favoring his own children over his nephews.",
      deeper: "The term 'dharma-kshetra' (field of dharma) is significant. Kurukshetra isn't just a battlefield—it's a sacred place where righteousness will be established. The very first word of the Gita is 'dharma,' signaling that this entire text is about discovering and living one's true duty."
    },

    practicalApplication: "Like Dhritarashtra, we often have blind spots in our own lives—biases we don't recognize. Notice how he immediately separates 'my sons' from others. Where in your life might you be unconsciously favoring 'your side' at the expense of what's right?",

    keyTerms: [
      { term: "Dharma-kshetra", meaning: "Field of righteousness, sacred ground" },
      { term: "Kurukshetra", meaning: "The field of the Kurus, the battlefield" },
      { term: "Sanjaya", meaning: "The narrator, blessed with divine sight to see the battle" }
    ],

    themes: ["dharma", "duty", "bias"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 1,
    verse: 2,
    sanskrit: "सञ्जय उवाच।\nदृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा।\nआचार्यमुपसङ्गम्य राजा वचनमब्रवीत्।।",
    transliteration: "sañjaya uvāca\ndṛṣṭvā tu pāṇḍavānīkaṁ vyūḍhaṁ duryodhanas tadā\nācāryam upasaṅgamya rājā vacanam abravīt",

    translation: "Sanjaya said: Seeing the Pandava army arranged in military formation, King Duryodhana approached his teacher Drona and spoke these words.",

    explanation: {
      simple: "Duryodhana, the leader of the opposing side, sees the Pandava army ready for battle. His first instinct? Run to his teacher Drona. Even though he's a king, when faced with a formidable challenge, he seeks out his mentor.",
      deeper: "Duryodhana's approach to Drona reveals his anxiety. Though he has the larger army, he's worried. The word 'vyudham' (arranged in formation) suggests the Pandavas are well-prepared, which unsettles him."
    },

    practicalApplication: "When facing challenges, we often seek reassurance from those we respect. There's wisdom in seeking counsel, but notice if you're seeking validation for your fears rather than genuine guidance.",

    keyTerms: [
      { term: "Acharya", meaning: "Teacher, spiritual guide" },
      { term: "Drona", meaning: "The martial arts teacher of both armies" },
      { term: "Vyudham", meaning: "Arranged in formation" }
    ],

    themes: ["fear", "seeking guidance", "preparation"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 1,
    verse: 3,
    sanskrit: "पश्यैतां पाण्डुपुत्राणामाचार्य महतीं चमूम्।\nव्यूढां द्रुपदपुत्रेण तव शिष्येण धीमता।।",
    transliteration: "paśyaitāṁ pāṇḍu-putrāṇām ācārya mahatīṁ camūm\nvyūḍhāṁ drupada-putreṇa tava śiṣyeṇa dhīmatā",

    translation: "Behold, O teacher, this mighty army of the sons of Pandu, arranged by your intelligent disciple, the son of Drupada.",

    explanation: {
      simple: "Duryodhana points out that the Pandava army was organized by Dhrishtadyumna—Drona's own student! He's essentially saying: 'Look, your student is now fighting against you.' This is a subtle manipulation to provoke Drona.",
      deeper: "This verse highlights the tragedy of this war—teachers fighting students, family against family. Duryodhana uses this to stir Drona's emotions, hoping anger or hurt will make him fight harder."
    },

    practicalApplication: "Notice when someone is trying to manipulate your emotions by pointing out betrayals or slights. Duryodhana is skilled at pushing buttons. Stay aware of when others (or your own mind) use similar tactics.",

    keyTerms: [
      { term: "Drupada-putra", meaning: "Son of Drupada (Dhrishtadyumna)" },
      { term: "Shishya", meaning: "Disciple, student" }
    ],

    themes: ["manipulation", "divided loyalties", "emotional triggers"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 1,
    verse: 4,
    sanskrit: "अत्र शूरा महेष्वासा भीमार्जुनसमा युधि।\nयुयुधानो विराटश्च द्रुपदश्च महारथः।।",
    transliteration: "atra śūrā maheṣv-āsā bhīmārjuna-samā yudhi\nyuyudhāno virāṭaś ca drupadaś ca mahā-rathaḥ",

    translation: "Here are heroes, mighty archers equal to Bhima and Arjuna in battle—Yuyudhana, Virata, and Drupada, the great warrior.",

    explanation: {
      simple: "Duryodhana starts listing the powerful warriors on the Pandava side. He compares them to Bhima and Arjuna—the two most feared Pandava fighters. This reveals his anxiety; he's cataloging threats.",
      deeper: "By listing these warriors, Duryodhana betrays his fear. A truly confident leader wouldn't obsess over the enemy's strengths. His detailed enumeration shows he's mentally fighting the battle before it begins."
    },

    practicalApplication: "When you find yourself cataloging all the reasons something might go wrong, recognize this as anxiety, not strategy. True preparation acknowledges challenges without obsessing over them.",

    keyTerms: [
      { term: "Shura", meaning: "Hero, brave warrior" },
      { term: "Maharatha", meaning: "Great chariot warrior (can fight 10,000 soldiers)" }
    ],

    themes: ["anxiety", "fear", "preparation"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 1,
    verse: 5,
    sanskrit: "धृष्टकेतुश्चेकितानः काशिराजश्च वीर्यवान्।\nपुरुजित्कुन्तिभोजश्च शैब्यश्च नरपुङ्गवः।।",
    transliteration: "dhṛṣṭaketuś cekitānaḥ kāśirājaś ca vīryavān\npurujit kuntibhojaś ca śaibyaś ca nara-puṅgavaḥ",

    translation: "Dhrishtaketu, Chekitana, the valiant king of Kashi, Purujit, Kuntibhoja, and Shaibya—all great warriors.",

    explanation: {
      simple: "Duryodhana continues his anxious inventory of enemy warriors. Each name represents a king who chose to side with the Pandavas. These weren't just soldiers—they were rulers who brought their entire armies.",
      deeper: "The fact that so many kings allied with the Pandavas, despite Duryodhana having the larger army, speaks to where moral authority lay. Righteousness attracts support."
    },

    practicalApplication: "In conflicts, notice who allies with whom. The side that attracts principled allies often has something the other lacks. Quality of support matters more than quantity.",

    keyTerms: [
      { term: "Vīryavān", meaning: "Valiant, possessing valor" },
      { term: "Nara-pungava", meaning: "Bull among men, excellent warrior" }
    ],

    themes: ["alliances", "moral authority", "quality over quantity"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 1,
    verse: 6,
    sanskrit: "युधामन्युश्च विक्रान्त उत्तमौजाश्च वीर्यवान्।\nसौभद्रो द्रौपदेयाश्च सर्व एव महारथाः।।",
    transliteration: "yudhāmanyuś ca vikrānta uttamaujāś ca vīryavān\nsaubhadro draupadeyāś ca sarva eva mahā-rathāḥ",

    translation: "The courageous Yudhamanyu, the valiant Uttamauja, the son of Subhadra, and the sons of Draupadi—all great chariot warriors.",

    explanation: {
      simple: "More warriors are listed, including Abhimanyu (son of Subhadra and Arjuna) and the five sons of Draupadi. Duryodhana notes they are all 'maharathas'—elite warriors capable of fighting thousands.",
      deeper: "The mention of the sons of Draupadi is significant. These young princes will die in this war, killed deceitfully while sleeping. The tragedy hasn't happened yet, but the seeds are being sown."
    },

    practicalApplication: "Before any conflict, consider who will be affected beyond the main parties. Wars impact generations. What 'sons and daughters' might suffer from conflicts you engage in?",

    keyTerms: [
      { term: "Saubhadra", meaning: "Son of Subhadra (Abhimanyu)" },
      { term: "Draupadeyah", meaning: "Sons of Draupadi" }
    ],

    themes: ["consequences", "generational impact", "cost of conflict"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 1,
    verse: 7,
    sanskrit: "अस्माकं तु विशिष्टा ये तान्निबोध द्विजोत्तम।\nनायका मम सैन्यस्य संज्ञार्थं तान्ब्रवीमि ते।।",
    transliteration: "asmākaṁ tu viśiṣṭā ye tān nibodha dvijottama\nnāyakā mama sainyasya saṁjñārthaṁ tān bravīmi te",

    translation: "But know also, O best of Brahmins, the distinguished commanders of my army. I shall name them for your information.",

    explanation: {
      simple: "Having worried about the enemy, Duryodhana now tries to reassure himself (and Drona) by listing his own champions. 'But wait, look at who WE have!' He's seeking comfort in his own strength.",
      deeper: "Addressing Drona as 'dvijottama' (best of Brahmins) is strategic flattery. Duryodhana is working to secure Drona's full commitment to the fight."
    },

    practicalApplication: "After acknowledging challenges, it's natural to remind yourself of your strengths. Just ensure this isn't denial or false confidence, but genuine assessment of your resources.",

    keyTerms: [
      { term: "Dvijottama", meaning: "Best of the twice-born (Brahmins)" },
      { term: "Nayaka", meaning: "Leader, commander" }
    ],

    themes: ["self-reassurance", "leadership", "taking stock"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 1,
    verse: 8,
    sanskrit: "भवान्भीष्मश्च कर्णश्च कृपश्च समितिञ्जयः।\nअश्वत्थामा विकर्णश्च सौमदत्तिस्तथैव च।।",
    transliteration: "bhavān bhīṣmaś ca karṇaś ca kṛpaś ca samitiñjayaḥ\naśvatthāmā vikarṇaś ca saumadattis tathaiva ca",

    translation: "Yourself, Bhishma, Karna, Kripa the victorious in battle, Ashvatthama, Vikarna, and Somadatta's son.",

    explanation: {
      simple: "Duryodhana lists his champions: Drona himself, the invincible Bhishma, the mighty Karna, and other great warriors. These are legendary fighters, each capable of turning the tide of battle.",
      deeper: "Interestingly, Duryodhana lists Drona first ('yourself'), a subtle form of flattery. Bhishma and Karna, though on the same side, have personal conflicts. This army has internal tensions that will affect the war."
    },

    practicalApplication: "Having talented people on your team matters, but so does their ability to work together. Notice if internal conflicts might undermine collective strength.",

    keyTerms: [
      { term: "Bhishma", meaning: "The grandfather, bound by his vow to protect the throne" },
      { term: "Karna", meaning: "Great warrior, rival of Arjuna" }
    ],

    themes: ["team dynamics", "internal conflict", "strength assessment"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 1,
    verse: 9,
    sanskrit: "अन्ये च बहवः शूरा मदर्थे त्यक्तजीविताः।\nनानाशस्त्रप्रहरणाः सर्वे युद्धविशारदाः।।",
    transliteration: "anye ca bahavaḥ śūrā mad-arthe tyakta-jīvitāḥ\nnānā-śastra-praharaṇāḥ sarve yuddha-viśāradāḥ",

    translation: "And many other heroes, ready to give up their lives for my sake, armed with various weapons, all skilled in warfare.",

    explanation: {
      simple: "Duryodhana boasts that many warriors are ready to die for HIM—'mad-arthe' (for my sake). This reveals his ego; he sees the war as being about him personally, not about dharma or justice.",
      deeper: "The phrase 'tyakta-jivitah' (having given up their lives) is poignant. These warriors have already mentally surrendered their lives to Duryodhana's cause. Many will indeed die for his ambition."
    },

    practicalApplication: "Be careful what causes you ask others to sacrifice for. Duryodhana frames everything as personal loyalty to him. True leaders unite people around principles, not personalities.",

    keyTerms: [
      { term: "Mad-arthe", meaning: "For my sake" },
      { term: "Tyakta-jivitah", meaning: "Having given up their lives, ready to die" }
    ],

    themes: ["ego", "sacrifice", "leadership"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 1,
    verse: 10,
    sanskrit: "अपर्याप्तं तदस्माकं बलं भीष्माभिरक्षितम्।\nपर्याप्तं त्विदमेतेषां बलं भीमाभिरक्षितम्।।",
    transliteration: "aparyāptaṁ tad asmākaṁ balaṁ bhīṣmābhirakṣitam\nparyāptaṁ tv idam eteṣāṁ balaṁ bhīmābhirakṣitam",

    translation: "Our army, protected by Bhishma, is unlimited, while their army, protected by Bhima, is limited.",

    explanation: {
      simple: "Duryodhana claims his army (led by Bhishma) is unlimited/sufficient, while the Pandava army (led by Bhima) is limited. But this translation is debated—some say he's actually expressing doubt, admitting his army may NOT be enough.",
      deeper: "The ambiguity of this verse is intentional. 'Aparyaptam' can mean 'unlimited' or 'insufficient.' Duryodhana's words reveal his unconscious doubt even as he tries to project confidence."
    },

    practicalApplication: "Sometimes our confident statements contain hidden doubts. Pay attention to moments when you're trying too hard to convince yourself or others. What truth might be hiding beneath bravado?",

    keyTerms: [
      { term: "Aparyaptam", meaning: "Unlimited OR insufficient (ambiguous)" },
      { term: "Paryaptam", meaning: "Limited OR sufficient (ambiguous)" }
    ],

    themes: ["self-doubt", "bravado", "hidden fears"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 1,
    verse: 11,
    sanskrit: "अयनेषु च सर्वेषु यथाभागमवस्थिताः।\nभीष्ममेवाभिरक्षन्तु भवन्तः सर्व एव हि।।",
    transliteration: "ayaneṣu ca sarveṣu yathā-bhāgam avasthitāḥ\nbhīṣmam evābhirakṣantu bhavantaḥ sarva eva hi",

    translation: "Therefore, all of you, stationed in your respective positions, must protect Bhishma from all sides.",

    explanation: {
      simple: "Duryodhana gives his order: everyone protect Bhishma! If Bhishma falls, their chances diminish greatly. This reveals that despite his bravado, Duryodhana knows his army's success depends heavily on one man.",
      deeper: "Duryodhana's strategy is defensive—protect the commander rather than attack aggressively. This defensive mindset, rooted in fear, will ultimately contribute to their defeat."
    },

    practicalApplication: "Notice when your strategy becomes primarily defensive—protecting what you have rather than pursuing what's right. Fear-based strategies often lead to the very outcomes we're trying to avoid.",

    keyTerms: [
      { term: "Ayana", meaning: "Strategic position, division of army" },
      { term: "Abhirakṣantu", meaning: "Must protect" }
    ],

    themes: ["defensive strategy", "dependence", "fear-based decisions"],
    difficulty: "beginner",
    famousVerse: false
  },

  // -------------------------------------------------------------------------
  // SECTION 2: THE CONCH SHELLS SOUND (Verses 12-19)
  // War begins with the blowing of conch shells on both sides
  // -------------------------------------------------------------------------
  {
    chapter: 1,
    verse: 12,
    sanskrit: "तस्य सञ्जनयन्हर्षं कुरुवृद्धः पितामहः।\nसिंहनादं विनद्योच्चैः शङ्खं दध्मौ प्रतापवान्।।",
    transliteration: "tasya sañjanayan harṣaṁ kuru-vṛddhaḥ pitāmahaḥ\nsiṁha-nādaṁ vinadyoccaiḥ śaṅkhaṁ dadhmau pratāpavān",

    translation: "Then Bhishma, the grand old man of the Kuru dynasty, the valiant grandsire, blew his conch very loudly, making a sound like a lion's roar, giving joy to Duryodhana.",

    explanation: {
      simple: "Bhishma, sensing Duryodhana's anxiety, blows his conch shell to rally the troops and encourage the young prince. The lion's roar symbolizes courage and power. It's a grandfather encouraging his grandson.",
      deeper: "Bhishma acts out of love for Duryodhana, even though he knows the Pandavas' cause is just. This is the tragedy of the Mahabharata—good people trapped on the wrong side by their loyalties and vows."
    },

    practicalApplication: "Sometimes we support people we love even when we know they're wrong. Bhishma's situation asks us: when does loyalty become complicity? How do we balance love with truth?",

    keyTerms: [
      { term: "Pitamaha", meaning: "Grandfather, grandsire" },
      { term: "Simha-nada", meaning: "Lion's roar" },
      { term: "Shankha", meaning: "Conch shell" }
    ],

    themes: ["loyalty", "encouragement", "moral complexity"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 1,
    verse: 13,
    sanskrit: "ततः शङ्खाश्च भेर्यश्च पणवानकगोमुखाः।\nसहसैवाभ्यहन्यन्त स शब्दस्तुमुलोऽभवत्।।",
    transliteration: "tataḥ śaṅkhāś ca bheryaś ca paṇavānaka-gomukhāḥ\nsahasaivābhyahanyanta sa śabdas tumulo 'bhavat",

    translation: "After that, conches, drums, tabors, trumpets, and horns suddenly sounded together, creating a tumultuous noise.",

    explanation: {
      simple: "Following Bhishma's lead, all the instruments of war sound simultaneously—a cacophony of conches, drums, and horns. The battle is about to begin. The noise is overwhelming, designed to intimidate.",
      deeper: "This tumultuous sound represents the chaos of war itself. Before a single arrow flies, the atmosphere is already violent. Sound was used strategically in ancient warfare to terrify opponents."
    },

    practicalApplication: "Before any conflict escalates to action, there's usually a period of 'noise'—threats, posturing, intimidation. Recognize this phase. It's often the last chance to find another way.",

    keyTerms: [
      { term: "Bheri", meaning: "Large drum" },
      { term: "Panava", meaning: "Small drum" },
      { term: "Tumula", meaning: "Tumultuous, loud" }
    ],

    themes: ["escalation", "intimidation", "chaos"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 1,
    verse: 14,
    sanskrit: "ततः श्वेतैर्हयैर्युक्ते महति स्यन्दने स्थितौ।\nमाधवः पाण्डवश्चैव दिव्यौ शङ्खौ प्रदध्मतुः।।",
    transliteration: "tataḥ śvetair hayair yukte mahati syandane sthitau\nmādhavaḥ pāṇḍavaś caiva divyau śaṅkhau pradadhmatuḥ",

    translation: "Then, seated in their magnificent chariot yoked with white horses, Krishna and Arjuna blew their divine conch shells.",

    explanation: {
      simple: "In response to the Kaurava noise, Krishna and Arjuna—in their grand chariot with white horses—blow their divine conches. White horses symbolize purity; their conches are divine, not ordinary.",
      deeper: "The image is iconic: God himself (Madhava/Krishna) driving the chariot for his devotee (Pandava/Arjuna). This represents the ideal relationship—when we let the divine guide us, we're positioned for victory."
    },

    practicalApplication: "Who is driving your chariot? What force guides your life decisions? When we align with higher principles (symbolized by Krishna as charioteer), we move with purpose and clarity.",

    keyTerms: [
      { term: "Madhava", meaning: "Krishna, Lord of Lakshmi" },
      { term: "Shveta hayair", meaning: "With white horses" },
      { term: "Divya", meaning: "Divine" }
    ],

    themes: ["divine guidance", "purity", "alignment"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 1,
    verse: 15,
    sanskrit: "पाञ्चजन्यं हृषीकेशो देवदत्तं धनञ्जयः।\nपौण्ड्रं दध्मौ महाशङ्खं भीमकर्मा वृकोदरः।।",
    transliteration: "pāñcajanyaṁ hṛṣīkeśo devadattaṁ dhanañjayaḥ\npauṇḍraṁ dadhmau mahā-śaṅkhaṁ bhīma-karmā vṛkodaraḥ",

    translation: "Krishna blew his conch Panchajanya; Arjuna blew Devadatta; and Bhima of terrible deeds blew his great conch Paundra.",

    explanation: {
      simple: "Each warrior has a named conch with its own history and meaning. Krishna's Panchajanya came from a demon he defeated. Arjuna's Devadatta was given by the gods. Bhima's Paundra matches his enormous strength.",
      deeper: "The named conches represent earned power—each was acquired through trials and divine grace. True strength isn't given; it's developed through facing and overcoming challenges."
    },

    practicalApplication: "Your 'conch'—your voice, your power—is shaped by what you've overcome. The challenges you've faced have prepared you. Sound your conch with confidence born of experience.",

    keyTerms: [
      { term: "Hrishikesha", meaning: "Master of the senses (Krishna)" },
      { term: "Dhananjaya", meaning: "Winner of wealth (Arjuna)" },
      { term: "Vrikodara", meaning: "Wolf-bellied (Bhima)" }
    ],

    themes: ["earned strength", "identity", "readiness"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 1,
    verse: 16,
    sanskrit: "अनन्तविजयं राजा कुन्तीपुत्रो युधिष्ठिरः।\nनकुलः सहदेवश्च सुघोषमणिपुष्पकौ।।",
    transliteration: "ananta-vijayaṁ rājā kuntī-putro yudhiṣṭhiraḥ\nakulaḥ sahadevaś ca sughoṣa-maṇipuṣpakau",

    translation: "King Yudhishthira, son of Kunti, blew Anantavijaya; Nakula and Sahadeva blew Sughosha and Manipushpaka.",

    explanation: {
      simple: "Yudhishthira's conch is named 'Endless Victory'—fitting for the king who represents dharma. The twins Nakula and Sahadeva have their own conches. All five Pandava brothers stand united.",
      deeper: "Yudhishthira, despite being the eldest and king, takes a subordinate position in this war. He recognizes that in battle, Arjuna and Bhima are the primary warriors. Good leadership knows when to step back."
    },

    practicalApplication: "True leaders know their role in different situations. Yudhishthira is king but not the best warrior. Recognize when to lead and when to support those better suited for the task at hand.",

    keyTerms: [
      { term: "Ananta-vijaya", meaning: "Endless victory" },
      { term: "Kunti-putra", meaning: "Son of Kunti" }
    ],

    themes: ["unity", "knowing your role", "leadership"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 1,
    verse: 17,
    sanskrit: "काश्यश्च परमेष्वासः शिखण्डी च महारथः।\nधृष्टद्युम्नो विराटश्च सात्यकिश्चापराजितः।।",
    transliteration: "kāśyaś ca parameṣv-āsaḥ śikhaṇḍī ca mahā-rathaḥ\ndhṛṣṭadyumno virāṭaś ca sātyakiś cāparājitaḥ",

    translation: "The king of Kashi, the great archer; Shikhandi, the mighty warrior; Dhrishtadyumna, Virata, and the unconquered Satyaki.",

    explanation: {
      simple: "More Pandava allies blow their conches. Shikhandi is particularly important—he's destined to be the cause of Bhishma's fall. Satyaki is called 'unconquered' (aparajita), highlighting his prowess.",
      deeper: "Each of these warriors has a backstory that connects them to this moment. Shikhandi was born specifically to kill Bhishma. Destiny has assembled this army."
    },

    practicalApplication: "In any major endeavor, you'll find allies whose unique histories and abilities perfectly complement the cause. Recognize and honor the specific gifts each person brings.",

    keyTerms: [
      { term: "Parameṣvāsa", meaning: "Supreme archer" },
      { term: "Aparājita", meaning: "Unconquered" }
    ],

    themes: ["destiny", "diverse strengths", "alliance"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 1,
    verse: 18,
    sanskrit: "द्रुपदो द्रौपदेयाश्च सर्वशः पृथिवीपते।\nसौभद्रश्च महाबाहुः शङ्खान्दध्मुः पृथक्पृथक्।।",
    transliteration: "drupado draupadeyāś ca sarvaśaḥ pṛthivī-pate\nsaubhadraś ca mahā-bāhuḥ śaṅkhān dadhmuḥ pṛthak pṛthak",

    translation: "Drupada, the sons of Draupadi, and the mighty-armed son of Subhadra—all blew their respective conches, O King.",

    explanation: {
      simple: "Sanjaya addresses Dhritarashtra ('O King') as he describes more conches sounding. Drupada (Draupadi's father), her five sons, and Abhimanyu (Arjuna's son) all join the call to battle.",
      deeper: "Multiple generations are present—fathers, sons, grandsons. This family war will affect three generations. The tragedy deepens when we realize many of these young warriors will not survive."
    },

    practicalApplication: "Conflicts often involve multiple generations. Before engaging in disputes, consider: who else will be affected? What legacy are we creating for those who come after?",

    keyTerms: [
      { term: "Prithivi-pate", meaning: "O King (Lord of the Earth)" },
      { term: "Maha-bahu", meaning: "Mighty-armed" }
    ],

    themes: ["generational impact", "family", "consequences"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 1,
    verse: 19,
    sanskrit: "स घोषो धार्तराष्ट्राणां हृदयानि व्यदारयत्।\nनभश्च पृथिवीं चैव तुमुलोऽभ्यनुनादयन्।।",
    transliteration: "sa ghoṣo dhārtarāṣṭrāṇāṁ hṛdayāni vyadārayat\nnabhaś ca pṛthivīṁ caiva tumulo 'bhyanunādayan",

    translation: "That tumultuous sound pierced the hearts of Dhritarashtra's sons, resounding through earth and sky.",

    explanation: {
      simple: "The Pandava response is so powerful that it 'pierces the hearts' of the Kauravas. The sound fills earth and sky—an overwhelming display of unity and strength that shakes the enemy's confidence.",
      deeper: "Sound can pierce hearts. This verse describes psychological warfare. Before the battle, the Kauravas are already spiritually defeated. Their doubt ('pierced hearts') will manifest as defeat in battle."
    },

    practicalApplication: "Confidence is contagious, but so is doubt. When facing opposition, present a united front. Division and doubt in opponents often precede their practical defeat.",

    keyTerms: [
      { term: "Ghosha", meaning: "Sound, tumult" },
      { term: "Vyadarayat", meaning: "Pierced, shattered" },
      { term: "Dharatarastra", meaning: "Sons of Dhritarashtra (the Kauravas)" }
    ],

    themes: ["psychological warfare", "confidence", "unity"],
    difficulty: "beginner",
    famousVerse: false
  },

  // -------------------------------------------------------------------------
  // SECTION 3: ARJUNA'S REQUEST (Verses 20-27)
  // Arjuna asks to survey the battlefield and sees his relatives
  // -------------------------------------------------------------------------
  {
    chapter: 1,
    verse: 20,
    sanskrit: "अथ व्यवस्थितान्दृष्ट्वा धार्तराष्ट्रान्कपिध्वजः।\nप्रवृत्ते शस्त्रसम्पाते धनुरुद्यम्य पाण्डवः।।",
    transliteration: "atha vyavasthitān dṛṣṭvā dhārtarāṣṭrān kapi-dhvajaḥ\npravṛtte śastra-sampāte dhanur udyamya pāṇḍavaḥ",

    translation: "Then, seeing the sons of Dhritarashtra arrayed for battle, as weapons were about to be discharged, Arjuna, whose flag bears the emblem of Hanuman, took up his bow.",

    explanation: {
      simple: "The moment of battle has arrived. Arjuna, with Hanuman on his flag (symbolizing strength and devotion), lifts his bow. He's ready to fight. But something is about to happen that will change everything.",
      deeper: "Hanuman on Arjuna's flag connects him to Lord Rama's story—another righteous war. Arjuna carries that legacy of dharmic warfare. Yet he's about to question everything."
    },

    practicalApplication: "Even when we're prepared and our cause is just, doubt can arise at crucial moments. Being prepared externally doesn't guarantee inner clarity. Both matter.",

    keyTerms: [
      { term: "Kapi-dhvaja", meaning: "One whose flag bears a monkey (Hanuman)" },
      { term: "Shastra-sampata", meaning: "Discharge of weapons, battle" }
    ],

    themes: ["preparation", "symbols", "threshold moments"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 1,
    verse: 21,
    sanskrit: "हृषीकेशं तदा वाक्यमिदमाह महीपते।\nअर्जुन उवाच।\nसेनयोरुभयोर्मध्ये रथं स्थापय मेऽच्युत।।",
    transliteration: "hṛṣīkeśaṁ tadā vākyam idam āha mahī-pate\narjuna uvāca\nsenyor ubhayor madhye rathaṁ sthāpaya me 'cyuta",

    translation: "Arjuna then spoke these words to Krishna: O Infallible One, please place my chariot between the two armies.",

    explanation: {
      simple: "Arjuna asks Krishna to drive him between the two armies—not to fight, but to look. He wants to see who he's about to fight. This simple request will lead to his crisis.",
      deeper: "Arjuna calls Krishna 'Achyuta' (infallible, one who never falls). While Arjuna is about to fall into despair, he unknowingly invokes the one quality that will save him—the infallible nature of divine guidance."
    },

    practicalApplication: "Sometimes we need to pause and really look at a situation before acting. Arjuna's request to see clearly is wise. But be prepared: seeing clearly might shake your assumptions.",

    keyTerms: [
      { term: "Achyuta", meaning: "Infallible, one who never falls" },
      { term: "Ubhayor madhye", meaning: "Between both (armies)" }
    ],

    themes: ["seeking clarity", "pausing before action", "divine guidance"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 1,
    verse: 22,
    sanskrit: "यावदेतान्निरीक्षेऽहं योद्धुकामानवस्थितान्।\nकैर्मया सह योद्धव्यमस्मिन्रणसमुद्यमे।।",
    transliteration: "yāvad etān nirīkṣe 'haṁ yoddhu-kāmān avasthitān\nkair mayā saha yoddhavyam asmin raṇa-samudyame",

    translation: "So that I may observe those who stand here eager to fight, and know with whom I must contend in this great battle.",

    explanation: {
      simple: "Arjuna explains his reason: he wants to identify his opponents. Who exactly is he fighting? It sounds strategic, but it will become deeply personal. He's about to see that 'the enemy' has familiar faces.",
      deeper: "Arjuna says 'yoddhu-kāmān' (eager to fight). He assumes the other side wants this war. But when he looks closely, he'll see teachers and relatives—people bound by circumstance, not hatred."
    },

    practicalApplication: "Before any conflict, look closely at who you're opposing. Often 'the enemy' is more nuanced than our assumptions. They may be people caught in circumstances, not villains.",

    keyTerms: [
      { term: "Nirīkṣe", meaning: "I may observe" },
      { term: "Yoddhu-kāmān", meaning: "Those eager to fight" }
    ],

    themes: ["knowing your opponent", "assumptions", "seeing clearly"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 1,
    verse: 23,
    sanskrit: "योत्स्यमानानवेक्षेऽहं य एतेऽत्र समागताः।\nधार्तराष्ट्रस्य दुर्बुद्धेर्युद्धे प्रियचिकीर्षवः।।",
    transliteration: "yotsyamānān avekṣe 'haṁ ya ete 'tra samāgatāḥ\ndhārtarāṣṭrasya durbuddher yuddhe priya-cikīrṣavaḥ",

    translation: "Let me see those who have come here to fight, wishing to please the evil-minded son of Dhritarashtra.",

    explanation: {
      simple: "Arjuna still sees this simply: Duryodhana ('evil-minded') has assembled people to fight for his selfish cause. He hasn't yet grasped that these 'people' include his own teachers, uncles, and cousins.",
      deeper: "Arjuna uses 'durbuddhi' (evil-minded) for Duryodhana—a judgment that's partially true but incomplete. When he actually sees the army, his black-and-white view will crumble."
    },

    practicalApplication: "It's easy to demonize opposing leaders. But their followers often have complex motivations—duty, loyalty, fear, circumstance. Understanding this doesn't excuse wrong, but it deepens understanding.",

    keyTerms: [
      { term: "Durbuddhi", meaning: "Evil-minded, wicked intellect" },
      { term: "Priya-cikīrṣava", meaning: "Wishing to please" }
    ],

    themes: ["demonization", "complexity", "judgment"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 1,
    verse: 24,
    sanskrit: "सञ्जय उवाच।\nएवमुक्तो हृषीकेशो गुडाकेशेन भारत।\nसेनयोरुभयोर्मध्ये स्थापयित्वा रथोत्तमम्।।",
    transliteration: "sañjaya uvāca\nevam ukto hṛṣīkeśo guḍākeśena bhārata\nsenyor ubhayor madhye sthāpayitvā rathottamam",

    translation: "Sanjaya said: O Dhritarashtra, thus addressed by Arjuna, Krishna drove the magnificent chariot between the two armies.",

    explanation: {
      simple: "Krishna does exactly what Arjuna asks—no questions, no pushback. He places the chariot right in the middle, giving Arjuna an unobstructed view of both sides. A good friend honors such requests.",
      deeper: "Krishna's silence here is significant. He knows what Arjuna will see and how it will affect him. Yet he doesn't prevent it. Sometimes the path to wisdom requires going through crisis, not around it."
    },

    practicalApplication: "Sometimes people need to see difficult truths for themselves. We can't always protect others from necessary realizations. Being a good guide sometimes means letting someone face what they need to face.",

    keyTerms: [
      { term: "Gudakesha", meaning: "Conqueror of sleep (Arjuna)" },
      { term: "Rathottamam", meaning: "Excellent chariot" }
    ],

    themes: ["honoring requests", "facing truth", "wise guidance"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 1,
    verse: 25,
    sanskrit: "भीष्मद्रोणप्रमुखतः सर्वेषां च महीक्षिताम्।\nउवाच पार्थ पश्यैतान्समवेतान्कुरूनिति।।",
    transliteration: "bhīṣma-droṇa-pramukhataḥ sarveṣāṁ ca mahī-kṣitām\nuvāca pārtha paśyaitān samavetān kurūn iti",

    translation: "In front of Bhishma, Drona, and all the rulers of the earth, Krishna said: Behold, O Arjuna, all the Kurus assembled here.",

    explanation: {
      simple: "Krishna positions the chariot directly facing Bhishma and Drona—Arjuna's grandfather and teacher. Then he says simply: 'Look.' This is not accidental positioning. Krishna wants Arjuna to SEE.",
      deeper: "Krishna calls them 'Kurus'—family. Not 'enemies' or 'opponents.' With one word, he reframes the entire situation. These aren't strangers to defeat; they're relatives to face."
    },

    practicalApplication: "How we name things shapes how we see them. 'Enemies' vs 'family' vs 'opponents' vs 'fellow humans'—the label matters. Before conflict, consider: how am I framing the other side?",

    keyTerms: [
      { term: "Pramukhata", meaning: "In front of, facing" },
      { term: "Kuru", meaning: "The family/dynasty (both sides are Kurus)" }
    ],

    themes: ["framing", "perspective", "family"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 1,
    verse: 26,
    sanskrit: "तत्रापश्यत्स्थितान्पार्थः पितॄनथ पितामहान्।\nआचार्यान्मातुलान्भ्रातॄन्पुत्रान्पौत्रान्सखींस्तथा।।",
    transliteration: "tatrāpaśyat sthitān pārthaḥ pitṝn atha pitāmahān\nācāryān mātulān bhrātṝn putrān pautrān sakhīṁs tathā",

    translation: "There Arjuna saw standing: fathers, grandfathers, teachers, maternal uncles, brothers, sons, grandsons, and friends.",

    explanation: {
      simple: "This is the turning point. Arjuna doesn't see an army—he sees his family tree. Fathers (senior relatives), grandfathers (Bhishma), teachers (Drona, Kripa), uncles, brothers, sons of friends, his own nephews, companions from childhood.",
      deeper: "The Sanskrit uses 'pitṝn' (fathers) plural—meaning father-figures, not biological fathers. The war will require killing people who raised him, taught him, played with him. War is no longer abstract."
    },

    practicalApplication: "When conflict becomes personal, everything changes. It's easy to oppose 'the other side' until you see individual faces. Let that seeing happen before, not after, you act.",

    keyTerms: [
      { term: "Pitṝn", meaning: "Fathers, father-figures" },
      { term: "Acharya", meaning: "Teachers" },
      { term: "Matula", meaning: "Maternal uncles" }
    ],

    themes: ["personalization", "seeing individuals", "cost of conflict"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 1,
    verse: 27,
    sanskrit: "श्वशुरान्सुहृदश्चैव सेनयोरुभयोरपि।\nतान्समीक्ष्य स कौन्तेयः सर्वान्बन्धूनवस्थितान्।।",
    transliteration: "śvaśurān suhṛdaś caiva senayor ubhayor api\ntān samīkṣya sa kaunteyaḥ sarvān bandhūn avasthitān",

    translation: "He also saw fathers-in-law and well-wishers in both armies. Seeing all these relatives present there, the son of Kunti...",

    explanation: {
      simple: "It gets worse—fathers-in-law and well-wishers appear on BOTH sides. There's no clean 'us vs. them.' People Arjuna loves are on both sides of the battlefield. This is truly a family war.",
      deeper: "The phrase 'ubhayor api' (in both armies) is devastating. Arjuna can't simply 'pick a side.' Any arrow he shoots might hit someone he loves, regardless of direction."
    },

    practicalApplication: "In many conflicts, the people we care about aren't all on one side. Family disputes, workplace conflicts, community divisions—we often have loved ones on multiple sides. What do we do then?",

    keyTerms: [
      { term: "Shvashura", meaning: "Father-in-law" },
      { term: "Suhrid", meaning: "Well-wisher, friend" },
      { term: "Bandhu", meaning: "Relative, kinsman" }
    ],

    themes: ["complexity", "divided loyalties", "no clean sides"],
    difficulty: "beginner",
    famousVerse: false
  },

  // -------------------------------------------------------------------------
  // SECTION 4: ARJUNA'S DESPAIR (Verses 28-47)
  // Arjuna is overwhelmed with grief and refuses to fight
  // -------------------------------------------------------------------------
  {
    chapter: 1,
    verse: 28,
    sanskrit: "कृपया परयाविष्टो विषीदन्निदमब्रवीत्।\nअर्जुन उवाच।\nदृष्ट्वेमं स्वजनं कृष्ण युयुत्सुं समुपस्थितम्।।",
    transliteration: "kṛpayā parayāviṣṭo viṣīdann idam abravīt\narjuna uvāca\ndṛṣṭvemaṁ sva-janaṁ kṛṣṇa yuyutsuṁ samupasthitam",

    translation: "Overcome with deep compassion, despondent, Arjuna spoke: O Krishna, seeing my own people gathered here, eager to fight...",

    explanation: {
      simple: "Arjuna is overcome by 'kripa' (compassion) that paralyzes him. The warrior who was ready to fight moments ago now can't lift his bow. Seeing his family, he's despondent (vishidan).",
      deeper: "This 'kripa' looks like compassion but is actually attachment dressed as virtue. True compassion would see the larger picture. Arjuna's grief, while understandable, is rooted in 'sva-jana' (MY people)—personal attachment."
    },

    practicalApplication: "Sometimes what feels like compassion is actually attachment or fear in disguise. Real compassion sees clearly and acts wisely. Emotional paralysis, while feeling virtuous, can be a form of avoidance.",

    keyTerms: [
      { term: "Kripa", meaning: "Compassion, pity" },
      { term: "Vishīdan", meaning: "Despondent, grieving" },
      { term: "Sva-jana", meaning: "My own people" }
    ],

    themes: ["compassion vs attachment", "emotional paralysis", "crisis"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 1,
    verse: 29,
    sanskrit: "सीदन्ति मम गात्राणि मुखं च परिशुष्यति।\nवेपथुश्च शरीरे मे रोमहर्षश्च जायते।।",
    transliteration: "sīdanti mama gātrāṇi mukhaṁ ca pariśuṣyati\nvepathuś ca śarīre me roma-harṣaś ca jāyate",

    translation: "My limbs are failing, my mouth is drying up, my body is trembling, and my hair is standing on end.",

    explanation: {
      simple: "Arjuna describes physical symptoms of extreme anxiety: weak limbs, dry mouth, trembling, goosebumps. His body is rebelling against the situation. This is a full-blown anxiety attack.",
      deeper: "These are classic symptoms of the sympathetic nervous system in overdrive—fight-or-flight activated but with no clear action possible. Arjuna is experiencing what we'd today call acute stress response."
    },

    practicalApplication: "Recognize these physical symptoms of overwhelm in yourself: shaking, dry mouth, weakness. Your body communicates before your mind catches up. These signals deserve attention, not suppression.",

    keyTerms: [
      { term: "Gātrāṇi", meaning: "Limbs" },
      { term: "Vepathu", meaning: "Trembling" },
      { term: "Roma-harṣa", meaning: "Hair standing on end, horripilation" }
    ],

    themes: ["physical symptoms", "anxiety", "stress response"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 1,
    verse: 30,
    sanskrit: "गाण्डीवं स्रंसते हस्तात्त्वक्चैव परिदह्यते।\nन च शक्नोम्यवस्थातुं भ्रमतीव च मे मनः।।",
    transliteration: "gāṇḍīvaṁ sraṁsate hastāt tvak caiva paridahyate\nna ca śaknomy avasthātuṁ bhramatīva ca me manaḥ",

    translation: "My bow Gandiva is slipping from my hand, my skin is burning, I am unable to stand, and my mind is reeling.",

    explanation: {
      simple: "Gandiva—Arjuna's divine bow that never failed him—is slipping from his grasp. His skin burns, he can't stand straight, his mind is spinning. The greatest archer in the world can't hold his weapon.",
      deeper: "The bow slipping symbolizes loss of identity. Arjuna IS his bow—it defines him as a warrior. When the bow falls, who is he? This is an identity crisis as much as a moral one."
    },

    practicalApplication: "When your 'tools'—the things that define your competence—feel like they're slipping away, it signals a deeper crisis. What happens when we can't be who we thought we were?",

    keyTerms: [
      { term: "Gandiva", meaning: "Arjuna's divine bow" },
      { term: "Bhramati", meaning: "Reeling, spinning, confused" }
    ],

    themes: ["identity crisis", "losing grip", "mental confusion"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 1,
    verse: 31,
    sanskrit: "निमित्तानि च पश्यामि विपरीतानि केशव।\nन च श्रेयोऽनुपश्यामि हत्वा स्वजनमाहवे।।",
    transliteration: "nimittāni ca paśyāmi viparītāni keśava\nna ca śreyo 'nupaśyāmi hatvā sva-janam āhave",

    translation: "I see bad omens, O Krishna. I cannot see any good coming from killing my own relatives in battle.",

    explanation: {
      simple: "Arjuna now sees negative signs everywhere—interpreting his symptoms as omens of disaster. He can't imagine any good outcome from this war. His mind is building a case for retreat.",
      deeper: "When we're looking for reasons to avoid something, we find them everywhere. Arjuna's 'omens' are his own fear projected onto circumstances. The mind is skilled at finding justification for what it's already decided."
    },

    practicalApplication: "Notice when you're finding 'signs' that conveniently support what you want to do anyway. Are these genuine insights or rationalizations? Fear is creative in generating reasons.",

    keyTerms: [
      { term: "Nimitta", meaning: "Omen, sign, cause" },
      { term: "Viparīta", meaning: "Contrary, inauspicious" },
      { term: "Shreya", meaning: "Good, welfare, benefit" }
    ],

    themes: ["rationalization", "fear", "negative thinking"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 1,
    verse: 32,
    sanskrit: "न काङ्क्षे विजयं कृष्ण न च राज्यं सुखानि च।\nकिं नो राज्येन गोविन्द किं भोगैर्जीवितेन वा।।",
    transliteration: "na kāṅkṣe vijayaṁ kṛṣṇa na ca rājyaṁ sukhāni ca\nkiṁ no rājyena govinda kiṁ bhogair jīvitena vā",

    translation: "I do not desire victory, O Krishna, nor kingdom, nor pleasures. Of what use is kingdom to us, O Govinda, or enjoyments, or even life?",

    explanation: {
      simple: "Arjuna renounces everything he was fighting for—victory, kingdom, pleasures, even life itself. What seemed valuable minutes ago now seems worthless. His values have collapsed.",
      deeper: "This apparent renunciation is actually despair masquerading as wisdom. True renunciation is joyful and clear; Arjuna's is depressed and confused. Krishna will later teach the difference."
    },

    practicalApplication: "In crisis, we might reject everything we previously valued. This isn't enlightenment—it's reaction. True detachment comes from clarity, not despair. Know the difference.",

    keyTerms: [
      { term: "Kāṅkṣe", meaning: "I desire" },
      { term: "Bhoga", meaning: "Enjoyment, pleasure" },
      { term: "Govinda", meaning: "Protector of cows, Krishna" }
    ],

    themes: ["false renunciation", "despair", "collapsed values"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 1,
    verse: 33,
    sanskrit: "येषामर्थे काङ्क्षितं नो राज्यं भोगाः सुखानि च।\nत इमेऽवस्थिता युद्धे प्राणांस्त्यक्त्वा धनानि च।।",
    transliteration: "yeṣām arthe kāṅkṣitaṁ no rājyaṁ bhogāḥ sukhāni ca\nta ime 'vasthitā yuddhe prāṇāṁs tyaktvā dhanāni ca",

    translation: "Those for whose sake we desire kingdom, enjoyments, and pleasures—they stand here in battle, ready to give up their lives and wealth.",

    explanation: {
      simple: "Arjuna realizes: the very people we wanted to enjoy the kingdom WITH are the ones we have to kill to GET it. The goal contradicts the means. What's the point of winning if everyone we wanted to share victory with is dead?",
      deeper: "This is a profound insight wrapped in despair. Arjuna sees the absurdity of the situation but draws the wrong conclusion. The insight is valid; his response to it needs correction."
    },

    practicalApplication: "Sometimes we pursue goals that destroy what we actually value. Success that costs us our relationships, health, or integrity is hollow victory. What are you sacrificing for your goals?",

    keyTerms: [
      { term: "Arthe", meaning: "For the sake of" },
      { term: "Praṇa", meaning: "Life, breath" }
    ],

    themes: ["hollow victory", "cost of success", "means vs ends"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 1,
    verse: 34,
    sanskrit: "आचार्याः पितरः पुत्रास्तथैव च पितामहाः।\nमातुलाः श्वशुराः पौत्राः श्यालाः सम्बन्धिनस्तथा।।",
    transliteration: "ācāryāḥ pitaraḥ putrās tathaiva ca pitāmahāḥ\nmātulāḥ śvaśurāḥ pautrāḥ śyālāḥ sambandinas tathā",

    translation: "Teachers, fathers, sons, grandfathers, maternal uncles, fathers-in-law, grandsons, brothers-in-law, and other relatives.",

    explanation: {
      simple: "Arjuna lists everyone again, emphasizing the relationships. Each word names someone he'll have to kill or see killed. Teachers who taught him. Fathers who raised him. Sons of friends. Grandsons of mentors.",
      deeper: "This repetitive listing is itself a symptom of his mental state—stuck, cycling through the same painful realizations, unable to move forward or find resolution."
    },

    practicalApplication: "When we're overwhelmed, our mind often loops—returning to the same thoughts repeatedly. Recognize when you're stuck in a loop. That's the signal you need outside perspective.",

    keyTerms: [
      { term: "Sambandhin", meaning: "Relatives, relations" },
      { term: "Shyāla", meaning: "Brother-in-law" }
    ],

    themes: ["mental loops", "overwhelm", "relationships"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 1,
    verse: 35,
    sanskrit: "एतान्न हन्तुमिच्छामि घ्नतोऽपि मधुसूदन।\nअपि त्रैलोक्यराज्यस्य हेतोः किं नु महीकृते।।",
    transliteration: "etān na hantum icchāmi ghnato 'pi madhusūdana\napi trailokya-rājyasya hetoḥ kiṁ nu mahī-kṛte",

    translation: "I do not wish to kill them, O Krishna, even if they kill me—not for the sovereignty of the three worlds, let alone this earth.",

    explanation: {
      simple: "Arjuna declares he won't kill them even if they kill him first. Not for all three worlds (heaven, earth, underworld), much less just Earth. He's completely withdrawn from the fight.",
      deeper: "This sounds noble but is actually adharma—abandoning duty out of attachment. A warrior's dharma requires fighting when righteousness demands it. Arjuna is confusing personal sentiment with universal ethics."
    },

    practicalApplication: "Sometimes what feels like the highest choice ('I won't harm anyone') is actually avoidance of necessary difficulty. True ethics requires discernment, not blanket rules that ignore context.",

    keyTerms: [
      { term: "Trailokya", meaning: "Three worlds (heaven, earth, netherworld)" },
      { term: "Ghnata", meaning: "Even if they kill" }
    ],

    themes: ["apparent nobility", "avoidance", "ethics vs sentimentality"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 1,
    verse: 36,
    sanskrit: "निहत्य धार्तराष्ट्रान्नः का प्रीतिः स्याज्जनार्दन।\nपापमेवाश्रयेदस्मान्हत्वैतानाततायिनः।।",
    transliteration: "nihatya dhārtarāṣṭrān naḥ kā prītiḥ syāj janārdana\npāpam evāśrayed asmān hatvaitān ātatāyinaḥ",

    translation: "What pleasure could we have from killing the sons of Dhritarashtra, O Krishna? Sin alone would take hold of us if we kill these aggressors.",

    explanation: {
      simple: "Arjuna asks: what happiness could come from this? He argues that killing them—even though they ARE aggressors (ātatāyin)—would be sinful. He's mixing legal reasoning with emotional anguish.",
      deeper: "Interestingly, Arjuna admits they ARE aggressors (ātatāyin). By dharmic law, killing aggressors in righteous battle incurs no sin. Arjuna knows the rules but his heart overrides his head."
    },

    practicalApplication: "When emotion is strong, we often make arguments that contradict what we know. Arjuna acknowledges they're aggressors yet still claims killing them is sin. Watch for this contradiction in your own reasoning.",

    keyTerms: [
      { term: "Prīti", meaning: "Pleasure, happiness" },
      { term: "Ātatāyin", meaning: "Aggressor (one who attacks, sets fires, poisons, etc.)" },
      { term: "Janārdana", meaning: "One who liberates people (Krishna)" }
    ],

    themes: ["contradiction", "emotion vs logic", "rationalization"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 1,
    verse: 37,
    sanskrit: "तस्मान्नार्हा वयं हन्तुं धार्तराष्ट्रान्स्वबान्धवान्।\nस्वजनं हि कथं हत्वा सुखिनः स्याम माधव।।",
    transliteration: "tasmān nārhā vayaṁ hantuṁ dhārtarāṣṭrān sva-bāndhavān\nsva-janaṁ hi kathaṁ hatvā sukhinaḥ syāma mādhava",

    translation: "Therefore, we should not kill the sons of Dhritarashtra, our own relatives. For how could we be happy after killing our own people, O Madhava?",

    explanation: {
      simple: "Arjuna concludes: therefore we shouldn't kill them. His argument rests on 'we won't be happy afterward.' But happiness isn't always the measure of right action. Sometimes duty requires difficult choices.",
      deeper: "Note the shift from 'I' to 'we'—Arjuna is trying to make his position universal, speaking for all the Pandavas. But this is his personal crisis; he shouldn't assume his brothers share his paralysis."
    },

    practicalApplication: "Be careful of using 'we' when you mean 'I'—projecting your feelings onto others. And remember: personal happiness isn't always the criterion for right action.",

    keyTerms: [
      { term: "Arha", meaning: "Worthy, proper, should" },
      { term: "Sukhin", meaning: "Happy" }
    ],

    themes: ["projection", "happiness as criterion", "universalizing personal feelings"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 1,
    verse: 38,
    sanskrit: "यद्यप्येते न पश्यन्ति लोभोपहतचेतसः।\nकुलक्षयकृतं दोषं मित्रद्रोहे च पातकम्।।",
    transliteration: "yady apy ete na paśyanti lobhopahata-cetasaḥ\nkula-kṣaya-kṛtaṁ doṣaṁ mitra-drohe ca pātakam",

    translation: "Even if they, with intelligence overcome by greed, see no wrong in destroying family or betraying friends...",

    explanation: {
      simple: "Arjuna acknowledges the Kauravas are greedy and can't see the wrong they're doing. They're blinded by greed ('lobha-upahata-cetasah'). He recognizes their moral failure clearly.",
      deeper: "This is accurate analysis. The Kauravas ARE blinded by greed. But Arjuna uses their blindness to justify his own paralysis. 'They can't see, so we must avoid the whole thing.' One error doesn't justify another."
    },

    practicalApplication: "Seeing others' blindness clearly doesn't give you permission to abandon right action. Their moral failure doesn't determine yours. You're responsible for your response, not theirs.",

    keyTerms: [
      { term: "Lobha", meaning: "Greed" },
      { term: "Upahata-cetasa", meaning: "With corrupted/overcome intelligence" },
      { term: "Kula-kṣaya", meaning: "Destruction of family" }
    ],

    themes: ["recognizing others' faults", "justification", "responsibility"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 1,
    verse: 39,
    sanskrit: "कथं न ज्ञेयमस्माभिः पापादस्मान्निवर्तितुम्।\nकुलक्षयकृतं दोषं प्रपश्यद्भिर्जनार्दन।।",
    transliteration: "kathaṁ na jñeyam asmābhiḥ pāpād asmān nivartitum\nkula-kṣaya-kṛtaṁ doṣaṁ prapaśyadbhir janārdana",

    translation: "...why should we, who can see the evil in destroying family, not know enough to turn away from this sin, O Janardana?",

    explanation: {
      simple: "Arjuna argues: 'We CAN see clearly (unlike them), so shouldn't we turn back from this sin?' He's using his clarity about consequences as a reason for inaction.",
      deeper: "Arjuna's logic seems sound but has a fatal flaw: he equates 'seeing bad consequences' with 'this action is wrong.' But difficult actions can be right despite painful consequences. Dharma isn't always comfortable."
    },

    practicalApplication: "Seeing clearly the difficulty of an action doesn't automatically make avoiding it the right choice. Sometimes clarity reveals that the hard path is the correct one.",

    keyTerms: [
      { term: "Jñeya", meaning: "Should be known" },
      { term: "Nivartitum", meaning: "To turn back" }
    ],

    themes: ["clarity vs paralysis", "consequences vs duty", "difficult choices"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 1,
    verse: 40,
    sanskrit: "कुलक्षये प्रणश्यन्ति कुलधर्माः सनातनाः।\nधर्मे नष्टे कुलं कृत्स्नमधर्मोऽभिभवत्युत।।",
    transliteration: "kula-kṣaye praṇaśyanti kula-dharmāḥ sanātanāḥ\ndharme naṣṭe kulaṁ kṛtsnam adharmo 'bhibhavaty uta",

    translation: "With the destruction of a family, its eternal traditions perish. When dharma is lost, the whole family becomes overwhelmed by adharma.",

    explanation: {
      simple: "Arjuna worries about generational consequences. When families are destroyed, traditions die. When traditions die, the next generation loses its moral compass. Chaos follows.",
      deeper: "This argument has validity—wars DO destroy social fabric. But Arjuna ignores that the Kauravas have ALREADY violated dharma. The traditions he wants to preserve have already been broken by Duryodhana's actions."
    },

    practicalApplication: "Protecting tradition is valuable, but not at the cost of justice. When traditions are used to justify oppression, they've already been corrupted. Preservation isn't always the highest value.",

    keyTerms: [
      { term: "Kula-dharma", meaning: "Family traditions, ancestral duties" },
      { term: "Sanatana", meaning: "Eternal, ancient" },
      { term: "Adharma", meaning: "Unrighteousness, lawlessness" }
    ],

    themes: ["tradition", "consequences", "social fabric"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 1,
    verse: 41,
    sanskrit: "अधर्माभिभवात्कृष्ण प्रदुष्यन्ति कुलस्त्रियः।\nस्त्रीषु दुष्टासु वार्ष्णेय जायते वर्णसङ्करः।।",
    transliteration: "adharmābhibhavāt kṛṣṇa praduṣyanti kula-striyaḥ\nstrīṣu duṣṭāsu vārṣṇeya jāyate varṇa-saṅkaraḥ",

    translation: "When adharma prevails, O Krishna, the women of the family become corrupted. When women are corrupted, O descendant of Vrishni, unwanted progeny arise.",

    explanation: {
      simple: "Arjuna continues his social argument: without dharma, women are vulnerable to corruption, leading to 'mixed' progeny. This reflects the social concerns of his era about family lineage and order.",
      deeper: "While this verse reflects ancient social structures, the underlying concern is real: war creates chaos that victimizes the vulnerable. The breakdown of social order during conflict has consequences for generations."
    },

    practicalApplication: "War and social chaos disproportionately affect vulnerable populations. When considering conflict, consider who will suffer most in the breakdown of order—often those with least power.",

    keyTerms: [
      { term: "Kula-striyaḥ", meaning: "Women of the family" },
      { term: "Varṇa-saṅkara", meaning: "Mixture of castes/classes, social disorder" }
    ],

    themes: ["social order", "vulnerability", "generational consequences"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 1,
    verse: 42,
    sanskrit: "सङ्करो नरकायैव कुलघ्नानां कुलस्य च।\nपतन्ति पितरो ह्येषां लुप्तपिण्डोदकक्रियाः।।",
    transliteration: "saṅkaro narakāyaiva kula-ghnānāṁ kulasya ca\npatanti pitaro hy eṣāṁ lupta-piṇḍodaka-kriyāḥ",

    translation: "Such disorder brings the family and its destroyers to hell, for their ancestors fall, deprived of offerings of rice and water.",

    explanation: {
      simple: "Arjuna worries about ancestral rituals. If the family is destroyed, who will offer rice balls and water to ancestors? In Hindu belief, these offerings help the departed. War disrupts this sacred duty.",
      deeper: "Arjuna invokes spiritual consequences—ancestors going to hell without proper rites. He's escalating his argument to cosmic dimensions, but it's still avoiding the central question: what is HIS duty NOW?"
    },

    practicalApplication: "We can create elaborate arguments about cosmic consequences to avoid immediate duty. Notice when you're projecting into distant futures to escape present responsibility.",

    keyTerms: [
      { term: "Naraka", meaning: "Hell" },
      { term: "Piṇḍa-udaka-kriyā", meaning: "Offerings of rice and water to ancestors" },
      { term: "Pitaraḥ", meaning: "Ancestors, forefathers" }
    ],

    themes: ["spiritual consequences", "ancestral duty", "avoidance"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 1,
    verse: 43,
    sanskrit: "दोषैरेतैः कुलघ्नानां वर्णसङ्करकारकैः।\nउत्साद्यन्ते जातिधर्माः कुलधर्माश्च शाश्वताः।।",
    transliteration: "doṣair etaiḥ kula-ghnānāṁ varṇa-saṅkara-kārakaiḥ\nutsādyante jāti-dharmāḥ kula-dharmāś ca śāśvatāḥ",

    translation: "By these sins of the destroyers of family, causing mixing of social orders, community traditions and family customs are destroyed.",

    explanation: {
      simple: "Arjuna summarizes: these sins destroy community and family traditions that have lasted for generations. Once destroyed, they can't easily be rebuilt. He's making a preservationist argument.",
      deeper: "Arjuna speaks of 'shashvata' (eternal) traditions, but Krishna will later explain what is truly eternal (the soul) versus what is temporary (social structures). Arjuna is clinging to forms while missing essence."
    },

    practicalApplication: "We often defend structures and traditions as 'eternal' when they're actually temporary forms. This isn't to dismiss their value, but to recognize what's truly permanent versus what changes.",

    keyTerms: [
      { term: "Jāti-dharma", meaning: "Duties of community/caste" },
      { term: "Śāśvata", meaning: "Eternal, permanent" }
    ],

    themes: ["preservation", "eternal vs temporary", "social structures"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 1,
    verse: 44,
    sanskrit: "उत्सन्नकुलधर्माणां मनुष्याणां जनार्दन।\nनरकेऽनियतं वासो भवतीत्यनुशुश्रुम।।",
    transliteration: "utsanna-kula-dharmāṇāṁ manuṣyāṇāṁ janārdana\nnarake 'niyataṁ vāso bhavatīty anuśuśruma",

    translation: "O Krishna, we have heard that those whose family traditions are destroyed must dwell indefinitely in hell.",

    explanation: {
      simple: "Arjuna cites scripture: 'We have heard' (anuśuśruma) that destroyers of family traditions go to hell. He's appealing to religious authority to support his position.",
      deeper: "Arjuna is selectively citing scripture. The same traditions also teach that a warrior who abandons righteous battle goes to hell. He's picking the texts that support his current emotion while ignoring others."
    },

    practicalApplication: "We can find scriptural or authoritative support for almost any position. Be honest about whether you're seeking truth or seeking confirmation for what you've already decided.",

    keyTerms: [
      { term: "Anuśuśruma", meaning: "We have heard (from tradition)" },
      { term: "Aniyata", meaning: "Indefinite, undetermined" }
    ],

    themes: ["selective citation", "confirmation bias", "authority"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 1,
    verse: 45,
    sanskrit: "अहो बत महत्पापं कर्तुं व्यवसिता वयम्।\nयद्राज्यसुखलोभेन हन्तुं स्वजनमुद्यताः।।",
    transliteration: "aho bata mahat pāpaṁ kartuṁ vyavasitā vayam\nyad rājya-sukha-lobhena hantuṁ sva-janam udyatāḥ",

    translation: "Alas! We are resolved to commit a great sin, for we are prepared to kill our own relatives out of greed for royal pleasures.",

    explanation: {
      simple: "Arjuna laments: 'What a great sin we're about to commit! Killing relatives just for a kingdom!' He sees the Pandavas' cause as no different from the Kauravas'—just greed.",
      deeper: "Arjuna has completely lost perspective. He forgets that the Pandavas didn't seek this war—they were robbed, cheated, exiled, and nearly killed. This isn't greed; it's justice. But grief has clouded his memory."
    },

    practicalApplication: "In emotional crisis, we can completely reframe our own legitimate position as wrong. Don't let momentary despair rewrite the history of genuine injustices you've faced.",

    keyTerms: [
      { term: "Aho bata", meaning: "Alas! What a pity!" },
      { term: "Rājya-sukha-lobha", meaning: "Greed for royal pleasures" }
    ],

    themes: ["lost perspective", "self-condemnation", "reframing"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 1,
    verse: 46,
    sanskrit: "यदि मामप्रतीकारमशस्त्रं शस्त्रपाणयः।\nधार्तराष्ट्रा रणे हन्युस्तन्मे क्षेमतरं भवेत्।।",
    transliteration: "yadi mām apratīkāram aśastraṁ śastra-pāṇayaḥ\ndhārtarāṣṭrā raṇe hanyus tan me kṣemataraṁ bhavet",

    translation: "It would be better for me if the sons of Dhritarashtra, weapons in hand, were to kill me unarmed and unresisting in battle.",

    explanation: {
      simple: "Arjuna declares he'd rather die unarmed than fight. Let the Kauravas kill him—that would be 'better' (kshemataram). This is suicidal thinking presented as virtue.",
      deeper: "This isn't heroic sacrifice; it's depression speaking. Arjuna fantasizes about passive death as escape from an impossible choice. This is the low point—and exactly why Krishna's teaching is needed."
    },

    practicalApplication: "When you find yourself wishing for passive destruction as an 'escape,' recognize this as a signal of crisis, not a viable option. This is when you most need help and perspective.",

    keyTerms: [
      { term: "Apratīkāra", meaning: "Unresisting, not retaliating" },
      { term: "Aśastra", meaning: "Unarmed" },
      { term: "Kṣematara", meaning: "More peaceful, better" }
    ],

    themes: ["despair", "escape fantasy", "crisis point"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 1,
    verse: 47,
    sanskrit: "सञ्जय उवाच।\nएवमुक्त्वार्जुनः सङ्ख्ये रथोपस्थ उपाविशत्।\nविसृज्य सशरं चापं शोकसंविग्नमानसः।।",
    transliteration: "sañjaya uvāca\nevam uktvārjunaḥ saṅkhye rathopastha upāviśat\nvisṛjya sa-śaraṁ cāpaṁ śoka-saṁvigna-mānasaḥ",

    translation: "Sanjaya said: Having spoken thus on the battlefield, Arjuna cast aside his bow and arrows and sat down on the seat of his chariot, his mind overwhelmed with grief.",

    explanation: {
      simple: "The chapter ends with this iconic image: Arjuna, the greatest warrior, puts down his weapons and collapses onto his chariot seat, overcome by sorrow. This is rock bottom—and the perfect setup for Krishna's teaching.",
      deeper: "Arjuna's collapse is necessary. Only when our old certainties completely fail us are we ready for new understanding. His despair creates the opening for transformation. Chapter 2 will begin Krishna's response."
    },

    practicalApplication: "Sometimes we need to hit bottom before we're ready for transformation. The collapse of our normal functioning, painful as it is, can be the doorway to deeper wisdom. Don't rush past the breakdown.",

    keyTerms: [
      { term: "Saṅkhye", meaning: "On the battlefield" },
      { term: "Sa-śara cāpa", meaning: "Bow with arrows" },
      { term: "Śoka-saṁvigna-mānasa", meaning: "Mind overwhelmed with grief" }
    ],

    themes: ["surrender", "breakdown", "readiness for teaching"],
    difficulty: "beginner",
    famousVerse: true
  }
];

const chapter1: ChapterContent = {
  chapter: 1,
  name: {
    sanskrit: "Arjuna Vishada Yoga",
    english: "The Yoga of Arjuna's Dejection"
  },
  summary: "The Bhagavad Gita opens on the battlefield of Kurukshetra. As two armies prepare for war, Arjuna asks Krishna to drive their chariot between them. What he sees—teachers, grandfathers, cousins, and friends on both sides—shatters him. His bow slips from his hands as he contemplates the horror of killing his own family. This chapter captures his complete psychological and spiritual crisis, setting the stage for Krishna's transformative teaching.",
  keyThemes: ["moral crisis", "attachment", "duty", "spiritual distress", "family loyalty"],
  verseCount: 47,
  verses
};

export default chapter1;
