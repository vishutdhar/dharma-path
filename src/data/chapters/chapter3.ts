// =============================================================================
// CHAPTER 3: KARMA YOGA - THE YOGA OF ACTION
// =============================================================================
// Arjuna is confused: If knowledge is superior, why fight? Krishna explains
// that action is unavoidable and necessary. The key is HOW you act.
// 43 verses covering: necessity of action, yajna, sva-dharma, desire as enemy.
// =============================================================================

import { VerseContent, ChapterContent } from '../verseTemplate';

const verses: VerseContent[] = [
  // -------------------------------------------------------------------------
  // SECTION 1: ARJUNA'S CONFUSION (Verses 1-2)
  // Why act if knowledge is the goal?
  // -------------------------------------------------------------------------
  {
    chapter: 3,
    verse: 1,
    sanskrit: "अर्जुन उवाच।\nज्यायसी चेत्कर्मणस्ते मता बुद्धिर्जनार्दन।\nतत्किं कर्मणि घोरे मां नियोजयसि केशव।।",
    transliteration: "arjuna uvāca\njyāyasī cet karmaṇas te matā buddhir janārdana\ntat kiṁ karmaṇi ghore māṁ niyojayasi keśava",

    translation: "Arjuna said: O Krishna, if you consider knowledge to be superior to action, then why do you urge me to engage in this terrible action of war?",

    explanation: {
      simple: "Arjuna is confused. In Chapter 2, Krishna praised wisdom and the person of steady intellect. So Arjuna thinks: 'If being wise and peaceful is the goal, why are you telling me to fight this horrible war? Isn't fighting the opposite of wisdom?'",
      deeper: "This question arises from a common misunderstanding: that spirituality means withdrawal from action. Arjuna has heard the teaching on the eternal soul and equanimity, and he's trying to use it as an excuse to avoid his duty. Many seekers make this mistake—using spiritual concepts to justify passivity."
    },

    practicalApplication: "Have you ever used 'being spiritual' or 'staying peaceful' as an excuse to avoid difficult action? 'I don't want to create conflict' can be wisdom or avoidance. True spirituality doesn't mean running from challenges—it means facing them with the right attitude.",

    keyTerms: [
      { term: "Jyayasi", meaning: "Superior, better" },
      { term: "Buddhi", meaning: "Wisdom, intellect" },
      { term: "Karma", meaning: "Action" },
      { term: "Ghore", meaning: "Terrible, fierce" }
    ],

    themes: ["confusion", "action-vs-knowledge", "duty"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 3,
    verse: 2,
    sanskrit: "व्यामिश्रेणेव वाक्येन बुद्धिं मोहयसीव मे।\nतदेकं वद निश्चित्य येन श्रेयोऽहमाप्नुयाम्।।",
    transliteration: "vyāmiśreṇeva vākyena buddhiṁ mohayasīva me\ntad ekaṁ vada niścitya yena śreyo 'ham āpnuyām",

    translation: "Your words seem contradictory and confuse my mind. Please tell me decisively the one path by which I can attain the highest good.",

    explanation: {
      simple: "Arjuna says: 'You're confusing me! First you praise wisdom and detachment, then you tell me to fight. Which is it? Just give me ONE clear answer—what should I do to reach the highest good?'",
      deeper: "Arjuna wants a simple, single answer. But reality is nuanced. Krishna has been teaching that wisdom AND action are both important—not contradictory, but complementary. The confusion is in Arjuna's either/or thinking, not in Krishna's teaching."
    },

    practicalApplication: "When spiritual teachings seem contradictory, the problem is often our either/or mindset. 'Be peaceful' AND 'take action' aren't opposites—peace is the internal state, action is the external response. Don't demand oversimplified answers to complex questions.",

    keyTerms: [
      { term: "Vyamishreṇa", meaning: "Mixed, seemingly contradictory" },
      { term: "Mohayasi", meaning: "You confuse" },
      { term: "Shreyas", meaning: "Highest good, ultimate welfare" },
      { term: "Nischitya", meaning: "Decisively, with certainty" }
    ],

    themes: ["confusion", "clarity", "seeking-guidance"],
    difficulty: "beginner",
    famousVerse: false
  },

  // -------------------------------------------------------------------------
  // SECTION 2: TWO PATHS, ONE GOAL (Verses 3-8)
  // Knowledge and Action are both valid paths
  // -------------------------------------------------------------------------
  {
    chapter: 3,
    verse: 3,
    sanskrit: "श्रीभगवानुवाच।\nलोकेऽस्मिन्द्विविधा निष्ठा पुरा प्रोक्ता मयानघ।\nज्ञानयोगेन साङ्ख्यानां कर्मयोगेन योगिनाम्।।",
    transliteration: "śrī-bhagavān uvāca\nloke 'smin dvividhā niṣṭhā purā proktā mayānagha\njñāna-yogena sāṅkhyānāṁ karma-yogena yoginām",

    translation: "The Supreme Lord said: O sinless one, I have already explained that there are two paths in this world—the path of knowledge (Jnana Yoga) for the contemplative, and the path of action (Karma Yoga) for the active.",

    explanation: {
      simple: "Krishna clarifies: There are two legitimate spiritual paths. Some people are naturally contemplative—they pursue liberation through knowledge and meditation (Jnana Yoga). Others are naturally active—they pursue liberation through selfless action (Karma Yoga). Both paths lead to the same goal.",
      deeper: "This is crucial: Krishna doesn't say one path is better. Different temperaments suit different paths. The philosopher type thrives on Jnana Yoga; the active type thrives on Karma Yoga. The goal (liberation) is the same; the approach differs based on one's nature."
    },

    practicalApplication: "Know your temperament. Are you naturally contemplative or active? Do you find truth through thinking and meditation, or through doing and serving? Neither is superior—but following YOUR natural path makes progress easier. Don't force yourself into a path that doesn't fit.",

    keyTerms: [
      { term: "Nishtha", meaning: "Devotion, firm faith, established path" },
      { term: "Jnana Yoga", meaning: "Path of knowledge" },
      { term: "Karma Yoga", meaning: "Path of action" },
      { term: "Sankhya", meaning: "Those who follow the analytical path" }
    ],

    themes: ["paths", "knowledge", "action", "temperament"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 3,
    verse: 4,
    sanskrit: "न कर्मणामनारम्भान्नैष्कर्म्यं पुरुषोऽश्नुते।\nन च संन्यसनादेव सिद्धिं समधिगच्छति।।",
    transliteration: "na karmaṇām anārambhān naiṣkarmyaṁ puruṣo 'śnute\nna ca sannyasanād eva siddhiṁ samadhigacchati",

    translation: "One cannot achieve freedom from action by merely abstaining from action. Nor can one attain perfection by simply renouncing action.",

    explanation: {
      simple: "You can't escape karma by doing nothing. Sitting still doesn't make you free from action—you're still breathing, thinking, existing. And you can't reach spiritual perfection just by quitting your job and becoming a monk. External renunciation without internal transformation is useless.",
      deeper: "The word 'naishkarmya' means freedom from karmic bondage, not absence of physical action. Krishna distinguishes between physical non-action (which doesn't help) and true freedom from karma (which comes from inner detachment). Mere sannyasa (renunciation) without wisdom is just a costume change."
    },

    practicalApplication: "Quitting your responsibilities doesn't make you spiritual. The person who meditates all day but avoids their duties is not more evolved than the parent who changes diapers with love. Freedom isn't in what you do or don't do—it's in how you relate to what you do.",

    keyTerms: [
      { term: "Naishkarmya", meaning: "Freedom from karma, action-less state" },
      { term: "Anarambha", meaning: "Not beginning, abstaining from" },
      { term: "Sannyasa", meaning: "Renunciation" },
      { term: "Siddhi", meaning: "Perfection, success" }
    ],

    themes: ["action", "renunciation", "freedom", "duty"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 3,
    verse: 5,
    sanskrit: "न हि कश्चित्क्षणमपि जातु तिष्ठत्यकर्मकृत्।\nकार्यते ह्यवशः कर्म सर्वः प्रकृतिजैर्गुणैः।।",
    transliteration: "na hi kaścit kṣaṇam api jātu tiṣṭhaty akarma-kṛt\nkāryate hy avaśaḥ karma sarvaḥ prakṛti-jair guṇaiḥ",

    translation: "No one can remain without action even for a moment. Everyone is helplessly driven to act by the qualities born of material nature.",

    explanation: {
      simple: "Here's a simple truth: You cannot NOT act. Even for one second. Your heart beats, your lungs breathe, your mind thinks. Nature's forces (the gunas) are always working through you. The question isn't whether to act—that's not a choice. The question is HOW to act.",
      deeper: "The three gunas (sattva, rajas, tamas) are the fundamental forces of nature that drive all action. Even the desire to 'do nothing' is itself driven by tamas (inertia). There's no escape from nature while embodied. Accepting this, the wise person chooses conscious action over unconscious reaction."
    },

    practicalApplication: "Stop pretending inaction is an option. You're always choosing—even 'not choosing' is a choice with consequences. Since action is unavoidable, focus on acting wisely rather than fantasizing about escape. The only real question is: What kind of actor will you be?",

    keyTerms: [
      { term: "Kshana", meaning: "Moment, instant" },
      { term: "Akarma-krit", meaning: "Doer of non-action" },
      { term: "Prakriti", meaning: "Material nature" },
      { term: "Guna", meaning: "Qualities of nature (sattva, rajas, tamas)" }
    ],

    themes: ["action", "nature", "gunas", "inevitability"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 3,
    verse: 6,
    sanskrit: "कर्मेन्द्रियाणि संयम्य य आस्ते मनसा स्मरन्।\nइन्द्रियार्थान्विमूढात्मा मिथ्याचारः स उच्यते।।",
    transliteration: "karmendriyāṇi saṁyamya ya āste manasā smaran\nindriyārthān vimūḍhātmā mithyācāraḥ sa ucyate",

    translation: "One who restrains the organs of action but sits thinking about sense objects in the mind is deluded and is called a hypocrite.",

    explanation: {
      simple: "If you sit still physically but your mind is running wild with desires, fantasies, and cravings—you're not spiritual, you're a hypocrite. The monk who abstains from food but constantly thinks about eating is worse off than someone who eats mindfully. External control without internal peace is fake.",
      deeper: "Krishna exposes false renunciation. 'Mithyachara' means one whose conduct (achara) is false (mithya). The body might look controlled, but if the mind is enslaved to sense objects (indriyartha), there's no real progress. In fact, there's regression—now you're deluded AND dishonest about it."
    },

    practicalApplication: "Be honest about where you actually are. It's better to acknowledge you still want things than to pretend you don't while secretly craving. Spiritual bypassing—using spiritual practices to avoid dealing with real desires—is a dead end. Deal with your mind, not just your behavior.",

    keyTerms: [
      { term: "Karmendriya", meaning: "Organs of action (hands, feet, speech, etc.)" },
      { term: "Indriya-artha", meaning: "Objects of the senses" },
      { term: "Vimudhatma", meaning: "Deluded soul" },
      { term: "Mithyachara", meaning: "Hypocrite, one of false conduct" }
    ],

    themes: ["hypocrisy", "mind", "action", "authenticity"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 3,
    verse: 7,
    sanskrit: "यस्त्विन्द्रियाणि मनसा नियम्यारभतेऽर्जुन।\nकर्मेन्द्रियैः कर्मयोगमसक्तः स विशिष्यते।।",
    transliteration: "yas tv indriyāṇi manasā niyamyārabhate 'rjuna\nkarmendriyaiḥ karma-yogam asaktaḥ sa viśiṣyate",

    translation: "But one who controls the senses with the mind, O Arjuna, and engages the organs of action in Karma Yoga without attachment—that person excels.",

    explanation: {
      simple: "Here's the right approach: Control your senses with your mind (not just physically), then engage in action without attachment. This person—active in the world but free from craving—is truly excellent. Better than the fake renunciant sitting in a cave dreaming of pleasures.",
      deeper: "The sequence matters: first the mind controls the senses (not vice versa), then the body engages in action. The key word is 'asakta' (without attachment). You act, but you're not clinging to results. This is true Karma Yoga—full engagement with complete freedom."
    },

    practicalApplication: "Be fully engaged in your work and life—but without white-knuckling the outcomes. The surgeon operates with total skill and focus, but isn't destroyed if the patient dies. The parent raises the child with complete love, but accepts they can't control who the child becomes. Full action, released attachment.",

    keyTerms: [
      { term: "Niyamya", meaning: "Controlling, regulating" },
      { term: "Asakta", meaning: "Without attachment" },
      { term: "Vishishyate", meaning: "Excels, is distinguished" },
      { term: "Karma Yoga", meaning: "Yoga of selfless action" }
    ],

    themes: ["action", "detachment", "excellence", "karma-yoga"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 3,
    verse: 8,
    sanskrit: "नियतं कुरु कर्म त्वं कर्म ज्यायो ह्यकर्मणः।\nशरीरयात्रापि च ते न प्रसिद्ध्येदकर्मणः।।",
    transliteration: "niyataṁ kuru karma tvaṁ karma jyāyo hy akarmaṇaḥ\nśarīra-yātrāpi ca te na prasiddhyed akarmaṇaḥ",

    translation: "Perform your prescribed duties, for action is better than inaction. Even the maintenance of your body would not be possible through inaction.",

    explanation: {
      simple: "Just do your duty! Action is better than inaction—period. You can't even keep your body alive without action. You have to eat, which requires getting food, which requires work. The fantasy of total inaction is exactly that—a fantasy.",
      deeper: "'Niyata karma' means prescribed or obligatory duty—the actions that come with your role and position in life. Krishna isn't asking Arjuna to do random acts; he's asking him to fulfill his specific duty as a warrior. Everyone has their niyata karma based on their situation."
    },

    practicalApplication: "What is your 'niyata karma' right now? As a student, study. As a parent, care for your children. As an employee, do your job. As a human, maintain your body and mind. Start with your obvious duties before seeking exotic spiritual practices. The basics are the foundation.",

    keyTerms: [
      { term: "Niyata", meaning: "Prescribed, regulated, obligatory" },
      { term: "Jyaya", meaning: "Better, superior" },
      { term: "Akarma", meaning: "Inaction" },
      { term: "Sharira-yatra", meaning: "Journey/maintenance of the body" }
    ],

    themes: ["duty", "action", "body", "practicality"],
    difficulty: "beginner",
    famousVerse: true
  },

  // -------------------------------------------------------------------------
  // SECTION 3: YAJNA - THE COSMIC EXCHANGE (Verses 9-16)
  // Action as sacrifice maintains the cosmic order
  // -------------------------------------------------------------------------
  {
    chapter: 3,
    verse: 9,
    sanskrit: "यज्ञार्थात्कर्मणोऽन्यत्र लोकोऽयं कर्मबन्धनः।\nतदर्थं कर्म कौन्तेय मुक्तसङ्गः समाचर।।",
    transliteration: "yajñārthāt karmaṇo 'nyatra loko 'yaṁ karma-bandhanaḥ\ntad-arthaṁ karma kaunteya mukta-saṅgaḥ samācara",

    translation: "Work done as sacrifice to the Supreme does not bind. All other work binds one to this world. Therefore, O Arjuna, perform action as sacrifice, free from attachment.",

    explanation: {
      simple: "Here's the secret to freedom in action: Do your work as a sacrifice, as an offering—not for personal gain. Work done for yourself binds you; work done as an offering liberates you. Same action, different motivation, completely different result.",
      deeper: "The concept of 'yajna' (sacrifice) is central to Hindu thought. Originally it meant Vedic fire rituals, but Krishna expands it: any action done without selfish motive, as an offering to something greater, becomes yajna. The word 'mukta-sanga' (free from attachment) is key—attachment is what binds, not the action itself."
    },

    practicalApplication: "Transform your work into offering. The cook who prepares food as an offering to nourish others is free; the cook who cooks only for praise or money is bound. Same cooking, different consciousness. Ask: 'Can I do this as an offering rather than for personal gain?'",

    keyTerms: [
      { term: "Yajna", meaning: "Sacrifice, offering, selfless action" },
      { term: "Karma-bandhana", meaning: "Bondage of action" },
      { term: "Mukta-sanga", meaning: "Free from attachment" },
      { term: "Samachara", meaning: "Perform well, act properly" }
    ],

    themes: ["sacrifice", "freedom", "attachment", "offering"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 3,
    verse: 10,
    sanskrit: "सहयज्ञाः प्रजाः सृष्ट्वा पुरोवाच प्रजापतिः।\nअनेन प्रसविष्यध्वमेष वोऽस्त्विष्टकामधुक्।।",
    transliteration: "saha-yajñāḥ prajāḥ sṛṣṭvā purovāca prajāpatiḥ\nanena prasaviṣyadhvam eṣa vo 'stv iṣṭa-kāma-dhuk",

    translation: "In the beginning, the Creator created humankind along with sacrifice and said: 'By this shall you prosper; may this fulfill all your desires.'",

    explanation: {
      simple: "When the Creator made humans, sacrifice (yajna) came as part of the package. It's built into how the universe works. The Creator said: 'This is how you'll thrive—through giving, offering, sacrifice. This will fulfill your needs.' Generosity is programmed into existence.",
      deeper: "This verse establishes yajna as cosmic law, not just religious ritual. 'Prajapati' (the Creator) designed the universe as an interconnected system of giving and receiving. Everything gives: the sun gives light, clouds give rain, earth gives food. Humans who take without giving break this cosmic order."
    },

    practicalApplication: "You exist within a web of giving and receiving. The air you breathe, the food you eat, the knowledge you have—all came from others. What are you giving back? This isn't about guilt—it's about participating in the flow. Givers thrive; takers stagnate.",

    keyTerms: [
      { term: "Prajapati", meaning: "Lord of creatures, the Creator" },
      { term: "Yajna", meaning: "Sacrifice, offering" },
      { term: "Prasavishyadhvam", meaning: "May you prosper/multiply" },
      { term: "Ishta-kama-dhuk", meaning: "Fulfiller of desires (lit. wish-fulfilling cow)" }
    ],

    themes: ["creation", "sacrifice", "prosperity", "cosmic-law"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 3,
    verse: 11,
    sanskrit: "देवान्भावयतानेन ते देवा भावयन्तु वः।\nपरस्परं भावयन्तः श्रेयः परमवाप्स्यथ।।",
    transliteration: "devān bhāvayatānena te devā bhāvayantu vaḥ\nparasparaṁ bhāvayantaḥ śreyaḥ param avāpsyatha",

    translation: "Nourish the gods with sacrifice, and the gods will nourish you. By nourishing each other, you will attain the highest good.",

    explanation: {
      simple: "It's a two-way street: you support the cosmic forces (devas), and they support you. This mutual nourishment is how everyone thrives. It's not about appeasing angry gods—it's about participating in a system of universal exchange.",
      deeper: "The 'devas' can be understood as cosmic principles—the forces of nature, universal energies. When you act in harmony with these forces (through yajna/sacrifice), they work in your favor. 'Parasparam bhavayantah' (mutually nourishing) describes an ecological, interdependent worldview. Everything is connected."
    },

    practicalApplication: "Think of your relationships as mutual nourishment. In a good marriage, each partner nourishes the other. In a good workplace, employees and employers serve each other. When you only take, the system breaks down. When you give, you receive. This is universal law.",

    keyTerms: [
      { term: "Deva", meaning: "Divine beings, cosmic forces" },
      { term: "Bhavayata", meaning: "Nourish, support, cause to flourish" },
      { term: "Parasparam", meaning: "Mutually, each other" },
      { term: "Shreya", meaning: "Highest good" }
    ],

    themes: ["reciprocity", "cosmic-order", "mutual-support", "interconnection"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 3,
    verse: 12,
    sanskrit: "इष्टान्भोगान्हि वो देवा दास्यन्ते यज्ञभाविताः।\nतैर्दत्तानप्रदायैभ्यो यो भुङ्क्ते स्तेन एव सः।।",
    transliteration: "iṣṭān bhogān hi vo devā dāsyante yajña-bhāvitāḥ\ntair dattān apradāyaibhyo yo bhuṅkte stena eva saḥ",

    translation: "The gods, pleased by sacrifice, will give you the enjoyments you desire. But one who enjoys what is given without offering anything in return is truly a thief.",

    explanation: {
      simple: "When you participate in the cosmic exchange (yajna), you receive what you need. But if you just take without giving back, you're stealing. Strong words! The person who only consumes without contributing is literally called a thief.",
      deeper: "This verse has social implications. Everyone receives from society—education, infrastructure, protection, knowledge passed down through generations. To take all this without contributing is theft. 'Stena eva sah' (he is verily a thief) applies to anyone who only extracts value without adding it."
    },

    practicalApplication: "Look at what you take from the world: clean water, electricity, roads, food, entertainment, knowledge. What are you giving back? If the balance is heavily toward taking, something needs to shift. Contribute to the systems that support you. Otherwise, you're living as a thief.",

    keyTerms: [
      { term: "Ishta bhoga", meaning: "Desired enjoyments" },
      { term: "Yajna-bhavita", meaning: "Pleased/nourished by sacrifice" },
      { term: "Apradaya", meaning: "Without offering in return" },
      { term: "Stena", meaning: "Thief" }
    ],

    themes: ["reciprocity", "theft", "contribution", "responsibility"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 3,
    verse: 13,
    sanskrit: "यज्ञशिष्टाशिनः सन्तो मुच्यन्ते सर्वकिल्बिषैः।\nभुञ्जते ते त्वघं पापा ये पचन्त्यात्मकारणात्।।",
    transliteration: "yajña-śiṣṭāśinaḥ santo mucyante sarva-kilbiṣaiḥ\nbhuñjate te tv aghaṁ pāpā ye pacanty ātma-kāraṇāt",

    translation: "The good who eat the remnants of sacrifice are freed from all sins. But the selfish who cook only for themselves—they eat sin.",

    explanation: {
      simple: "Those who first offer their food (or work, or anything) as a sacrifice, and then enjoy the remainder—they become free from negative karma. But those who just cook and eat for themselves alone, without any sense of offering—they're actually consuming sin with every bite.",
      deeper: "This teaching transforms the mundane act of eating into spiritual practice. 'Yajna-shishta' (remnants of sacrifice) means what's left after offering. The same food, offered first with gratitude and then eaten, becomes purifying. Food grabbed selfishly, without acknowledgment of its source, binds. Consciousness matters more than content."
    },

    practicalApplication: "Before eating, pause and offer gratitude—to nature, to those who grew and prepared the food, to the divine if you're so inclined. This simple practice transforms eating from mere consumption to communion. The same meal, approached differently, has a completely different effect on consciousness.",

    keyTerms: [
      { term: "Yajna-shishta", meaning: "Remnants of sacrifice" },
      { term: "Kilbisha", meaning: "Sin, fault" },
      { term: "Agham", meaning: "Sin, evil" },
      { term: "Atma-karanat", meaning: "For oneself alone" }
    ],

    themes: ["food", "gratitude", "offering", "selfishness"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 3,
    verse: 14,
    sanskrit: "अन्नाद्भवन्ति भूतानि पर्जन्यादन्नसम्भवः।\nयज्ञाद्भवति पर्जन्यो यज्ञः कर्मसमुद्भवः।।",
    transliteration: "annād bhavanti bhūtāni parjanyād anna-sambhavaḥ\nyajñād bhavati parjanyo yajñaḥ karma-samudbhavaḥ",

    translation: "All beings are born from food; food is born from rain; rain is born from sacrifice; and sacrifice is born from action.",

    explanation: {
      simple: "Krishna shows the chain of existence: Beings come from food → Food comes from rain → Rain comes from yajna (sacrifice) → Yajna comes from action. It's a cycle. Your actions participate in the cosmic cycle that ultimately feeds all of existence. Everything is connected.",
      deeper: "This is an ecological teaching before ecology existed. The cycle of matter and energy—biological, meteorological, and spiritual—is one integrated system. 'Yajna' here can mean both Vedic rituals (which were believed to bring rain) and more broadly, righteous action that maintains cosmic harmony."
    },

    practicalApplication: "See yourself as part of an interconnected web. Your actions ripple outward in ways you can't fully trace. Living ethically, working honestly, consuming mindfully—these aren't just personal choices; they contribute to or detract from the health of the whole system. You're never acting in isolation.",

    keyTerms: [
      { term: "Anna", meaning: "Food" },
      { term: "Bhuta", meaning: "Beings, creatures" },
      { term: "Parjanya", meaning: "Rain, rain-god" },
      { term: "Karma-samudbhava", meaning: "Born from action" }
    ],

    themes: ["ecology", "interconnection", "cycle", "action"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 3,
    verse: 15,
    sanskrit: "कर्म ब्रह्मोद्भवं विद्धि ब्रह्माक्षरसमुद्भवम्।\nतस्मात्सर्वगतं ब्रह्म नित्यं यज्ञे प्रतिष्ठितम्।।",
    transliteration: "karma brahmodbhavaṁ viddhi brahmākṣara-samudbhavam\ntasmāt sarva-gataṁ brahma nityaṁ yajñe pratiṣṭhitam",

    translation: "Know that action arises from the Vedas, and the Vedas arise from the Imperishable. Therefore, the all-pervading Brahman is eternally established in sacrifice.",

    explanation: {
      simple: "Following the chain further: Action comes from sacred knowledge (Brahma/Vedas) → Sacred knowledge comes from the eternal, unchanging Reality (Akshara/Brahman). So the ultimate source of everything—the infinite, all-pervading Brahman—is present in every act of sacrifice. When you act selflessly, you're in touch with the Absolute.",
      deeper: "This verse connects the mundane and the transcendent. 'Brahman' (the Absolute Reality) is not distant or abstract—it's 'nitya yajne pratishthitam' (eternally present in sacrifice). Every selfless act is a point of contact with the divine. The cosmic and the personal meet in yajna."
    },

    practicalApplication: "When you act selflessly, you're not just doing good—you're participating in the divine. Every genuine sacrifice, every truly generous act, is a moment when the infinite expresses through the finite. This elevates ordinary action to spiritual practice. Your daily work can become worship.",

    keyTerms: [
      { term: "Brahma", meaning: "Vedas, or the creative principle" },
      { term: "Akshara", meaning: "Imperishable, unchanging" },
      { term: "Sarva-gata", meaning: "All-pervading" },
      { term: "Brahman", meaning: "The Absolute Reality, Supreme Truth" }
    ],

    themes: ["brahman", "sacrifice", "vedas", "transcendence"],
    difficulty: "advanced",
    famousVerse: false
  },

  {
    chapter: 3,
    verse: 16,
    sanskrit: "एवं प्रवर्तितं चक्रं नानुवर्तयतीह यः।\nअघायुरिन्द्रियारामो मोघं पार्थ स जीवति।।",
    transliteration: "evaṁ pravartitaṁ cakraṁ nānuvartayatīha yaḥ\naghāyur indriyārāmo moghaṁ pārtha sa jīvati",

    translation: "One who does not follow this cycle of sacrifice thus set in motion lives in vain, O Arjuna. Such a person, delighting only in the senses, lives a sinful and wasted life.",

    explanation: {
      simple: "If you don't participate in this cosmic wheel of give-and-take, your life is wasted. Living only for sense pleasures, taking but never giving—that's not really living. It's existing like a parasite, missing the whole point of human life.",
      deeper: "The 'chakra' (wheel/cycle) refers to the yajna-cycle described in previous verses. One who opts out—taking from the cosmos without contributing—lives 'mogham' (in vain). 'Indriyarama' (delighting in senses) describes the consumer who only seeks personal pleasure. Such a life, however materially successful, is spiritually bankrupt."
    },

    practicalApplication: "Are you just consuming life or contributing to it? A life spent only pursuing pleasure and comfort, without service or sacrifice, is hollow. You might look successful but feel empty. Meaning comes from participating in something larger than yourself. Find your place in the cycle of giving.",

    keyTerms: [
      { term: "Chakra", meaning: "Wheel, cycle" },
      { term: "Aghayuh", meaning: "Sinful life, harmful existence" },
      { term: "Indriyarama", meaning: "One who delights only in senses" },
      { term: "Mogham", meaning: "In vain, uselessly" }
    ],

    themes: ["purpose", "contribution", "meaninglessness", "cycle"],
    difficulty: "beginner",
    famousVerse: false
  },

  // -------------------------------------------------------------------------
  // SECTION 4: THE SELF-REALIZED PERSON (Verses 17-26)
  // Those who know the Self have nothing to gain, yet they still act
  // -------------------------------------------------------------------------
  {
    chapter: 3,
    verse: 17,
    sanskrit: "यस्त्वात्मरतिरेव स्यादात्मतृप्तश्च मानवः।\nआत्मन्येव च सन्तुष्टस्तस्य कार्यं न विद्यते।।",
    transliteration: "yas tv ātma-ratir eva syād ātma-tṛptaś ca mānavaḥ\nātmany eva ca santuṣṭas tasya kāryaṁ na vidyate",

    translation: "But for one who delights in the Self alone, who is satisfied in the Self, and who is content in the Self—for such a person, there is no duty.",

    explanation: {
      simple: "Here's an exception: someone who is completely fulfilled within themselves—totally content, needing nothing from outside—technically has no obligations. They've found the source of all happiness within. They don't need to act for any gain because they lack nothing.",
      deeper: "This describes the 'jivanmukta' (liberated while living). Having realized the Self (Atman), they find complete fulfillment (triptah) and contentment (santushtah) within. The usual motivations for action—desire, duty, fear—don't apply. They're already at the destination others are trying to reach through action."
    },

    practicalApplication: "This is a high bar that almost no one reaches. Don't use it as an excuse for laziness! If you still want things, if you still feel lacking, you have work to do. This verse describes the rare soul who genuinely needs nothing. Until that's you, keep doing your duty.",

    keyTerms: [
      { term: "Atma-rati", meaning: "Delighting in the Self" },
      { term: "Atma-tripta", meaning: "Satisfied in the Self" },
      { term: "Santushta", meaning: "Content" },
      { term: "Karya", meaning: "Duty, obligatory action" }
    ],

    themes: ["self-realization", "contentment", "freedom", "duty"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 3,
    verse: 18,
    sanskrit: "नैव तस्य कृतेनार्थो नाकृतेनेह कश्चन।\nन चास्य सर्वभूतेषु कश्चिदर्थव्यपाश्रयः।।",
    transliteration: "naiva tasya kṛtenārtho nākṛteneha kaścana\nna cāsya sarva-bhūteṣu kaścid artha-vyapāśrayaḥ",

    translation: "Such a person has nothing to gain from actions done, nor anything to lose from actions not done. They have no need to depend on any being for anything.",

    explanation: {
      simple: "The self-realized person gains nothing by acting and loses nothing by not acting. They don't depend on anyone or anything for their happiness. Complete independence. They might act or not act—either way, their fulfillment doesn't change.",
      deeper: "This is absolute freedom. Most people act from need—needing money, approval, security, meaning. The enlightened one has no such needs. 'Artha-vyapashraya' (dependence on others for purpose) has ended. They interact with the world from fullness, not lack. Action becomes pure expression, not acquisition."
    },

    practicalApplication: "Notice how much of your action is motivated by needing something—approval, money, validation, security. What if you needed nothing? How would you act then? The free person's actions are gifts, not trades. Move toward that: act from fullness, not emptiness.",

    keyTerms: [
      { term: "Krita", meaning: "Done, performed" },
      { term: "Akrita", meaning: "Not done" },
      { term: "Artha", meaning: "Purpose, meaning, wealth" },
      { term: "Vyapashraya", meaning: "Dependence, reliance" }
    ],

    themes: ["freedom", "independence", "self-sufficiency", "liberation"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 3,
    verse: 19,
    sanskrit: "तस्मादसक्तः सततं कार्यं कर्म समाचर।\nअसक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः।।",
    transliteration: "tasmād asaktaḥ satataṁ kāryaṁ karma samācara\nasakto hy ācaran karma param āpnoti pūruṣaḥ",

    translation: "Therefore, always perform your duty without attachment. By working without attachment, one attains the Supreme.",

    explanation: {
      simple: "Here's the practical teaching: Do your duty, but without attachment. Keep doing it, consistently, without clinging to results. This path—selfless action—leads to the highest realization. You don't have to renounce action; you renounce attachment.",
      deeper: "The word 'satatam' (always, constantly) is key. This isn't occasional detachment; it's a way of life. And 'asakta' (without attachment) doesn't mean without caring—it means without clinging. The paradox: by not grasping for the supreme (param), you attain it. Attachment blocks what letting go allows."
    },

    practicalApplication: "Make 'non-attached action' your daily practice. Work hard on your project, but release the outcome. Parent with total devotion, but don't cling to how your children turn out. Give your best in relationships, but don't demand specific responses. This is freedom in action.",

    keyTerms: [
      { term: "Asakta", meaning: "Without attachment" },
      { term: "Satatam", meaning: "Always, constantly" },
      { term: "Karya karma", meaning: "Obligatory action, duty" },
      { term: "Param", meaning: "The Supreme, the highest" }
    ],

    themes: ["detachment", "action", "liberation", "duty"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 3,
    verse: 20,
    sanskrit: "कर्मणैव हि संसिद्धिमास्थिता जनकादयः।\nलोकसंग्रहमेवापि सम्पश्यन्कर्तुमर्हसि।।",
    transliteration: "karmaṇaiva hi saṁsiddhim āsthitā janakādayaḥ\nloka-saṅgraham evāpi sampaśyan kartum arhasi",

    translation: "King Janaka and others attained perfection through action alone. You should also act, considering the welfare of the world.",

    explanation: {
      simple: "Great kings like Janaka achieved spiritual perfection while ruling kingdoms—through action, not by renouncing it. And even if you were already perfect, you should still act for the welfare of others. Your actions influence the world.",
      deeper: "Janaka is the famous philosopher-king who attained realization while fulfilling his royal duties. He proves that worldly responsibility and spiritual liberation aren't opposed. 'Loka-sangraha' (welfare of the world) introduces a new motivation: the enlightened person acts not for personal gain but to benefit others and maintain social order."
    },

    practicalApplication: "You don't have to choose between spiritual growth and worldly responsibilities. Janaka ran a kingdom and was enlightened. Your job, your family duties, your social roles—these can be your spiritual path. And as you grow, your actions increasingly become about serving others, not just yourself.",

    keyTerms: [
      { term: "Samsiddhi", meaning: "Perfection, complete success" },
      { term: "Janaka", meaning: "Famous philosopher-king, father of Sita" },
      { term: "Loka-sangraha", meaning: "Welfare of the world, holding people together" }
    ],

    themes: ["action", "perfection", "service", "leadership"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 3,
    verse: 21,
    sanskrit: "यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः।\nस यत्प्रमाणं कुरुते लोकस्तदनुवर्तते।।",
    transliteration: "yad yad ācarati śreṣṭhas tat tad evetaro janaḥ\nsa yat pramāṇaṁ kurute lokas tad anuvartate",

    translation: "Whatever a great person does, common people follow. Whatever standard they set, the world follows.",

    explanation: {
      simple: "People watch and copy those they look up to. Whatever leaders do becomes the standard. If respected people act ethically, ethics spreads. If they act selfishly, selfishness spreads. Leaders set the tone for everyone else.",
      deeper: "This is a statement about moral influence. 'Shreshtha' (the best, leaders) have disproportionate impact—not just through their direct actions, but through the example they set. 'Pramana' (standard, measure) emphasizes that leaders define what's normal. This creates responsibility: the more influential you are, the more your behavior matters."
    },

    practicalApplication: "You're a leader to someone—children, younger colleagues, students, followers. What example are you setting? Your behavior is being watched and copied. Even small actions matter: how you treat service workers, how you handle frustration, whether you keep your word. Someone is taking notes.",

    keyTerms: [
      { term: "Shreshtha", meaning: "The best, leader, respected person" },
      { term: "Itara jana", meaning: "Common people, others" },
      { term: "Pramana", meaning: "Standard, measure, authority" },
      { term: "Anuvartate", meaning: "Follows, imitates" }
    ],

    themes: ["leadership", "example", "influence", "responsibility"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 3,
    verse: 22,
    sanskrit: "न मे पार्थास्ति कर्तव्यं त्रिषु लोकेषु किञ्चन।\nनानवाप्तमवाप्तव्यं वर्त एव च कर्मणि।।",
    transliteration: "na me pārthāsti kartavyaṁ triṣu lokeṣu kiñcana\nnānavāptam avāptavyaṁ varta eva ca karmaṇi",

    translation: "O Arjuna, there is nothing in the three worlds that I need to do, nothing that I have not attained or need to attain—yet I continue to engage in action.",

    explanation: {
      simple: "Krishna uses himself as an example: 'I have nothing to do, nothing to gain. I already have everything. Yet I keep acting.' If God himself continues to work despite needing nothing, shouldn't you?",
      deeper: "This is profound: the Supreme Lord has no unfulfilled desires, no duties, nothing to achieve. Yet he engages in cosmic action (sustaining the universe, teaching Arjuna, etc.). This models the highest form of action—not driven by need but overflowing from fullness. It's action as divine play (lila), not as desperate striving."
    },

    practicalApplication: "Imagine having nothing to prove, nothing to gain, nothing to fear. How would you act? That's how Krishna acts. That's how the liberated person acts. We're not there yet, but we can move in that direction: letting our actions be more about expression and service, less about acquisition and validation.",

    keyTerms: [
      { term: "Kartavya", meaning: "Duty, what must be done" },
      { term: "Trishu lokeshu", meaning: "In the three worlds (heaven, earth, lower realms)" },
      { term: "Anavaptam", meaning: "Not attained" },
      { term: "Avaptavyam", meaning: "To be attained" }
    ],

    themes: ["divine-action", "selflessness", "example", "fullness"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 3,
    verse: 23,
    sanskrit: "यदि ह्यहं न वर्तेयं जातु कर्मण्यतन्द्रितः।\nमम वर्त्मानुवर्तन्ते मनुष्याः पार्थ सर्वशः।।",
    transliteration: "yadi hy ahaṁ na varteyaṁ jātu karmaṇy atandritaḥ\nmama vartmānuvartante manuṣyāḥ pārtha sarvaśaḥ",

    translation: "If I ever stopped working vigilantly, O Arjuna, all people would follow my path in every way.",

    explanation: {
      simple: "Krishna continues: 'If I stopped working, everyone would follow my example. Humans copy what the highest does. If the Lord became lazy, laziness would become the norm.'",
      deeper: "This reveals divine responsibility. Krishna acts not for himself but because beings follow the divine example. The word 'atandrita' (vigilantly, without laziness) shows that divine action is continuous and alert. The cosmos is maintained by constant divine activity. If God rested, creation would collapse."
    },

    practicalApplication: "Your inaction has consequences too. If you stop doing your part, others who look to you will also slack off. Parents who quit learning signal to children that learning isn't important. Leaders who cut corners permit everyone to cut corners. Your diligence or laziness ripples outward.",

    keyTerms: [
      { term: "Varteyam", meaning: "I would engage, I would continue" },
      { term: "Atandrita", meaning: "Vigilantly, without laziness" },
      { term: "Vartma", meaning: "Path, way" },
      { term: "Sarvashah", meaning: "In every way, completely" }
    ],

    themes: ["example", "responsibility", "leadership", "consequences"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 3,
    verse: 24,
    sanskrit: "उत्सीदेयुरिमे लोका न कुर्यां कर्म चेदहम्।\nसङ्करस्य च कर्ता स्यामुपहन्यामिमाः प्रजाः।।",
    transliteration: "utsīdeyur ime lokā na kuryāṁ karma ced aham\nsaṅkarasya ca kartā syām upahanyām imāḥ prajāḥ",

    translation: "If I did not act, these worlds would perish. I would cause confusion and destroy all these beings.",

    explanation: {
      simple: "Krishna explains the stakes: 'If I stopped acting, the worlds would collapse. I would cause chaos and destruction.' Divine action maintains cosmic order. Withdrawal isn't neutral—it would be catastrophic.",
      deeper: "'Sankara' means confusion, mixing, chaos—the breakdown of order. 'Utsideyuh' (would perish/sink) indicates total collapse. This applies not just to God but to anyone in a position of responsibility. When those who should maintain order abandon their duties, chaos follows. Society depends on people doing their jobs."
    },

    practicalApplication: "What would collapse if you stopped doing your part? Your family? Your team? Your community? You might feel unimportant, but your consistent action is likely holding more together than you realize. Don't underestimate the chaos that your abandonment would cause.",

    keyTerms: [
      { term: "Utsideyuh", meaning: "Would perish, would sink" },
      { term: "Sankara", meaning: "Confusion, mixing, chaos" },
      { term: "Upahanyam", meaning: "I would destroy" },
      { term: "Praja", meaning: "Beings, people, creatures" }
    ],

    themes: ["responsibility", "order", "chaos", "consequences"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 3,
    verse: 25,
    sanskrit: "सक्ताः कर्मण्यविद्वांसो यथा कुर्वन्ति भारत।\nकुर्याद्विद्वांस्तथासक्तश्चिकीर्षुर्लोकसंग्रहम्।।",
    transliteration: "saktāḥ karmaṇy avidvāṁso yathā kurvanti bhārata\nkuryād vidvāṁs tathāsaktaś cikīrṣur loka-saṅgraham",

    translation: "As the ignorant act with attachment, O Arjuna, so should the wise act without attachment, wishing for the welfare of the world.",

    explanation: {
      simple: "Ignorant people work hard—driven by attachment to results. The wise should work just as hard—but without attachment, motivated by the welfare of all. Same intensity of action, completely different inner state.",
      deeper: "This is key: the external action of the wise and ignorant may look identical. Both work diligently. The difference is internal: the ignorant are driven by desire (sakta), the wise are free from it (asakta). And the wise have a different purpose—not personal gain but loka-sangraha (world welfare). The outer form of action is the same; the inner quality is transformed."
    },

    practicalApplication: "Don't reduce your effort—transform your motivation. Work as hard as the most ambitious person, but without their anxiety and clinging. Care deeply about outcomes, but don't let your wellbeing depend on them. This is the subtle shift from attached action to free action.",

    keyTerms: [
      { term: "Sakta", meaning: "Attached" },
      { term: "Avidvamsa", meaning: "Ignorant, unwise" },
      { term: "Vidvan", meaning: "Wise, knowledgeable" },
      { term: "Loka-sangraha", meaning: "Welfare of the world" }
    ],

    themes: ["attachment", "wisdom", "action", "motivation"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 3,
    verse: 26,
    sanskrit: "न बुद्धिभेदं जनयेदज्ञानां कर्मसङ्गिनाम्।\nजोषयेत्सर्वकर्माणि विद्वान्युक्तः समाचरन्।।",
    transliteration: "na buddhi-bhedaṁ janayed ajñānāṁ karma-saṅginām\njoṣayet sarva-karmāṇi vidvān yuktaḥ samācaran",

    translation: "The wise should not unsettle the minds of the ignorant who are attached to action. Acting with focus, the wise should engage others to do all their duties.",

    explanation: {
      simple: "Don't confuse people who aren't ready for higher teachings. If someone is happily doing their duty with attachment, don't disturb them with talks of detachment—they might just stop working altogether. Instead, inspire them to keep doing their duties while you model the higher path.",
      deeper: "This is spiritual pragmatism. 'Buddhi-bheda' (unsettling the intellect) can happen when advanced teachings are given to unprepared minds. Someone might hear 'transcend action' and just become lazy. Better to encourage them to continue their karma-sanga (attached action) with positive spirit. The wise person doesn't preach—they demonstrate through 'yuktah samacharan' (disciplined, focused action)."
    },

    practicalApplication: "Be careful what spiritual teachings you share with whom. Telling your hardworking colleague about detachment might just make them cynical, not enlightened. Meet people where they are. If someone is motivated by attachment, encourage their action rather than confusing them with philosophy they'll misapply.",

    keyTerms: [
      { term: "Buddhi-bheda", meaning: "Confusion of intellect, unsettling the mind" },
      { term: "Ajnana", meaning: "Ignorant ones" },
      { term: "Karma-sangi", meaning: "Attached to action" },
      { term: "Joshayet", meaning: "Should engage, should inspire" }
    ],

    themes: ["teaching", "wisdom", "pragmatism", "meeting-people-where-they-are"],
    difficulty: "intermediate",
    famousVerse: false
  },

  // -------------------------------------------------------------------------
  // SECTION 5: NATURE ACTS, NOT THE SELF (Verses 27-30)
  // The gunas perform all action; the Self is the witness
  // -------------------------------------------------------------------------
  {
    chapter: 3,
    verse: 27,
    sanskrit: "प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः।\nअहङ्कारविमूढात्मा कर्ताहमिति मन्यते।।",
    transliteration: "prakṛteḥ kriyamāṇāni guṇaiḥ karmāṇi sarvaśaḥ\nahaṅkāra-vimūḍhātmā kartāham iti manyate",

    translation: "All actions are performed by the gunas of material nature. One whose mind is deluded by ego thinks, 'I am the doer.'",

    explanation: {
      simple: "In reality, it's nature (prakriti) doing everything through its three qualities (gunas). Your body, mind, and personality are nature. But the ego creates the illusion: 'I am doing this.' This false identification is the root of bondage.",
      deeper: "This is a profound teaching on the mechanics of action. The true Self (Atman) is the witness, not the actor. All action happens through prakriti and its gunas. 'Ahamkara-vimudhatma' (soul deluded by ego) describes our condition: we've identified with the body-mind and think its actions are 'ours.' This misidentification creates karma."
    },

    practicalApplication: "Notice how your body acts almost on its own—digestion, heartbeat, reflexes. Even 'your' decisions emerge from brain processes you didn't consciously create. The sense of 'I am doing' is added after the fact. Watch actions happen and notice: is there really a 'you' doing them, or is nature doing nature?",

    keyTerms: [
      { term: "Prakriti", meaning: "Material nature" },
      { term: "Guna", meaning: "Qualities of nature (sattva, rajas, tamas)" },
      { term: "Ahamkara", meaning: "Ego, sense of 'I'" },
      { term: "Vimudhatma", meaning: "Deluded soul" },
      { term: "Karta", meaning: "Doer" }
    ],

    themes: ["ego", "nature", "action", "illusion"],
    difficulty: "intermediate",
    famousVerse: true
  },

  {
    chapter: 3,
    verse: 28,
    sanskrit: "तत्त्ववित्तु महाबाहो गुणकर्मविभागयोः।\nगुणा गुणेषु वर्तन्त इति मत्वा न सज्जते।।",
    transliteration: "tattva-vit tu mahā-bāho guṇa-karma-vibhāgayoḥ\nguṇā guṇeṣu vartanta iti matvā na sajjate",

    translation: "But one who knows the truth about the division of the gunas and their actions understands that the gunas interact with gunas. Such a person is not attached.",

    explanation: {
      simple: "The wise person sees what's really happening: it's just the gunas interacting with the gunas. The eye (made of gunas) sees a flower (made of gunas). The mind (guna) desires food (guna). It's all nature playing with nature. The Self just watches.",
      deeper: "'Tattva-vit' (knower of truth) sees through the illusion. When you see that action is just gunas interacting with gunas, where is the 'doer'? The senses contact objects, impressions arise, reactions happen—it's a mechanical process. The Self is the witnessing consciousness, uninvolved in the dance. This seeing brings natural detachment (na sajjate)."
    },

    practicalApplication: "Practice watching your life as if it's happening to someone else. The body gets hungry, eats, feels satisfied. Emotions arise, thoughts come. Where are 'you' in all this? The witness watching it all—that's closer to the real you than the person acting in the movie. This perspective brings peace.",

    keyTerms: [
      { term: "Tattva-vit", meaning: "Knower of truth/reality" },
      { term: "Vibhaga", meaning: "Division, classification" },
      { term: "Vartanta", meaning: "Move, engage, interact" },
      { term: "Sajjate", meaning: "Is attached" }
    ],

    themes: ["witness", "gunas", "detachment", "truth"],
    difficulty: "advanced",
    famousVerse: false
  },

  {
    chapter: 3,
    verse: 29,
    sanskrit: "प्रकृतेर्गुणसम्मूढाः सज्जन्ते गुणकर्मसु।\nतानकृत्स्नविदो मन्दान्कृत्स्नविन्न विचालयेत्।।",
    transliteration: "prakṛter guṇa-sammūḍhāḥ sajjante guṇa-karmasu\ntān akṛtsna-vido mandān kṛtsna-vin na vicālayet",

    translation: "Those deluded by the gunas of nature become attached to the actions of the gunas. But the one who knows the whole truth should not disturb those dull-minded partial-knowers.",

    explanation: {
      simple: "Most people are confused by the gunas—they think they're the doer and get attached to their actions. They only see part of the picture. The wise person who sees the whole truth shouldn't upset these people by revealing truths they can't handle.",
      deeper: "'Akrtsna-vid' (partial knower) describes most humans—seeing action but not its source, seeing the body but not the Self. 'Krtsna-vid' (knower of the whole) sees the complete picture. Krishna repeats the caution from verse 26: don't destabilize partial-knowers. They need their illusions to function. Guide them gradually, don't shatter them."
    },

    practicalApplication: "Be gentle with people at different stages of understanding. Everyone has partial knowledge—including you. Don't be arrogant about what you've realized. And don't try to force profound truths on people whose lives would fall apart without their current beliefs. Wisdom includes knowing when not to speak.",

    keyTerms: [
      { term: "Guna-sammudha", meaning: "Deluded by the gunas" },
      { term: "Akrtsna-vid", meaning: "Partial knower" },
      { term: "Manda", meaning: "Dull, slow" },
      { term: "Krtsna-vid", meaning: "Knower of the whole" },
      { term: "Vicalayet", meaning: "Should disturb, should unsettle" }
    ],

    themes: ["delusion", "partial-knowledge", "compassion", "teaching"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 3,
    verse: 30,
    sanskrit: "मयि सर्वाणि कर्माणि संन्यस्याध्यात्मचेतसा।\nनिराशीर्निर्ममो भूत्वा युध्यस्व विगतज्वरः।।",
    transliteration: "mayi sarvāṇi karmāṇi sannyasyādhyātma-cetasā\nnirāśīr nirmamo bhūtvā yudhyasva vigata-jvaraḥ",

    translation: "Surrendering all actions to Me, with consciousness fixed on the Self, free from desire and possessiveness, fight—with your fever gone.",

    explanation: {
      simple: "Krishna summarizes the path: Offer all your actions to Me (God). Stay focused on your true Self. Let go of desires and the sense of 'mine.' Then fight! Your inner fever—the agitation of attachment—will be gone.",
      deeper: "This verse combines Karma Yoga, Jnana Yoga, and Bhakti Yoga: actions surrendered to Krishna (bhakti), consciousness on the Self (jnana), and engagement in duty (karma). 'Vigata-jvara' (fever gone) describes the peace of one who acts from this state—no more burning desires, no more anxious clinging. Action becomes cool, clear, free."
    },

    practicalApplication: "Try this formula before any difficult action: 'I offer this to something greater than myself. I am the eternal witness, not the anxious ego. I have no demands about results. I'll do what's right.' Feel how this shifts your state from fever to peace. Then act.",

    keyTerms: [
      { term: "Sannyasya", meaning: "Surrendering, renouncing" },
      { term: "Adhyatma-chetasa", meaning: "With mind fixed on the Self" },
      { term: "Nirashi", meaning: "Free from desire/expectations" },
      { term: "Nirmama", meaning: "Without possessiveness, without 'mine'" },
      { term: "Vigata-jvara", meaning: "Free from fever/agitation" }
    ],

    themes: ["surrender", "self-awareness", "freedom", "action"],
    difficulty: "beginner",
    famousVerse: true
  },

  // -------------------------------------------------------------------------
  // SECTION 6: FOLLOW YOUR OWN DHARMA (Verses 31-35)
  // Better to do your own duty imperfectly than another's perfectly
  // -------------------------------------------------------------------------
  {
    chapter: 3,
    verse: 31,
    sanskrit: "ये मे मतमिदं नित्यमनुतिष्ठन्ति मानवाः।\nश्रद्धावन्तोऽनसूयन्तो मुच्यन्ते तेऽपि कर्मभिः।।",
    transliteration: "ye me matam idaṁ nityam anutiṣṭhanti mānavāḥ\nśraddhāvanto 'nasūyanto mucyante te 'pi karmabhiḥ",

    translation: "Those who always follow this teaching of Mine with faith, without envy, are freed from the bondage of action.",

    explanation: {
      simple: "Krishna says: People who practice this teaching—acting without attachment, surrendering results—with faith and without resentment, they become free from karma. It works. But you need faith and a good attitude.",
      deeper: "Three qualities make the teaching effective: 'nityam' (constant practice), 'shraddhavanta' (with faith), and 'anasuyanta' (without envy or fault-finding). Many hear teachings but apply them inconsistently, doubt them constantly, or resent the demands they make. Such people don't benefit. Wholehearted commitment to practice is what liberates."
    },

    practicalApplication: "Are you practicing detachment consistently or just when it's convenient? Do you have faith that this path works, or constant doubt? Do you accept the teaching gratefully, or resent that it asks something difficult of you? Your attitude toward the practice determines whether it transforms you.",

    keyTerms: [
      { term: "Mata", meaning: "Opinion, teaching, doctrine" },
      { term: "Shraddha", meaning: "Faith" },
      { term: "Anasuya", meaning: "Without envy, without fault-finding" },
      { term: "Muchyante", meaning: "Are liberated" }
    ],

    themes: ["faith", "practice", "liberation", "attitude"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 3,
    verse: 32,
    sanskrit: "ये त्वेतदभ्यसूयन्तो नानुतिष्ठन्ति मे मतम्।\nसर्वज्ञानविमूढांस्तान्विद्धि नष्टानचेतसः।।",
    transliteration: "ye tv etad abhyasūyanto nānutiṣṭhanti me matam\nsarva-jñāna-vimūḍhāṁs tān viddhi naṣṭān acetasaḥ",

    translation: "But those who criticize and do not follow this teaching—know them to be deluded, devoid of all wisdom, and lost.",

    explanation: {
      simple: "On the other hand, those who criticize this teaching without practicing it are completely lost. They're confused about everything, not just this. They've closed the door to wisdom by refusing to even try.",
      deeper: "'Abhyasuyanta' (finding fault, criticizing) combined with 'na anutishtanti' (not practicing) describes the worst combination: rejection without experimentation. Such people are 'sarva-jnana-vimudha' (deluded about all knowledge)—if they reject this fundamental truth about action and freedom, their entire understanding is compromised. 'Nashtan' (lost) is a strong word: they've forfeited the opportunity for liberation."
    },

    practicalApplication: "Don't criticize what you haven't tried. If you dismiss detachment as impossible without genuinely practicing it, you're not being wise—you're being closed-minded. The only fair criticism comes after sincere effort. Have you actually tried acting without attachment, or just decided it won't work?",

    keyTerms: [
      { term: "Abhyasuyanta", meaning: "Finding fault, criticizing" },
      { term: "Vimudha", meaning: "Deluded, confused" },
      { term: "Nashta", meaning: "Lost, destroyed" },
      { term: "Achetasa", meaning: "Without consciousness, senseless" }
    ],

    themes: ["criticism", "delusion", "closed-mindedness", "loss"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 3,
    verse: 33,
    sanskrit: "सदृशं चेष्टते स्वस्याः प्रकृतेर्ज्ञानवानपि।\nप्रकृतिं यान्ति भूतानि निग्रहः किं करिष्यति।।",
    transliteration: "sadṛśaṁ ceṣṭate svasyāḥ prakṛter jñānavān api\nprakṛtiṁ yānti bhūtāni nigrahaḥ kiṁ kariṣyati",

    translation: "Even a wise person acts according to their own nature. All beings follow their nature—what can repression accomplish?",

    explanation: {
      simple: "Everyone—even the wise—acts according to their nature. It's unavoidable. All creatures follow their inborn tendencies. Trying to suppress your nature by force doesn't work; it just creates internal conflict.",
      deeper: "This is psychologically astute. 'Prakriti' here means individual nature, temperament, tendencies formed by past karma and constitution. Even the jnani (wise one) operates through their prakriti. Krishna isn't endorsing indulgence—he's stating a fact: nature can't be suppressed, only transformed. 'Nigraha' (forceful repression) is futile and counterproductive."
    },

    practicalApplication: "Stop fighting your basic nature and start working with it. If you're naturally active, don't try to become a meditating hermit. If you're naturally contemplative, don't force yourself into constant activity. Transform your nature through practice, don't crush it through willpower. Repression backfires.",

    keyTerms: [
      { term: "Prakriti", meaning: "Nature, individual temperament" },
      { term: "Cheshta", meaning: "Acts, behaves" },
      { term: "Nigraha", meaning: "Repression, control by force" },
      { term: "Jnanavan", meaning: "Wise person" }
    ],

    themes: ["nature", "temperament", "repression", "self-acceptance"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 3,
    verse: 34,
    sanskrit: "इन्द्रियस्येन्द्रियस्यार्थे रागद्वेषौ व्यवस्थितौ।\nतयोर्न वशमागच्छेत्तौ ह्यस्य परिपन्थिनौ।।",
    transliteration: "indriyasyendriyasyārthe rāga-dveṣau vyavasthitau\ntayor na vaśam āgacchet tau hy asya paripanthinau",

    translation: "Attraction and aversion are located in the relationship between each sense and its objects. One should not come under their control, for they are enemies on the path.",

    explanation: {
      simple: "Every sense has things it's attracted to (raga) and things it's repelled by (dvesha). Eyes like beauty, dislike ugliness. Tongue likes sweetness, dislikes bitterness. These attractions and aversions are natural—but don't let them control you. They're your enemies on the spiritual path.",
      deeper: "Krishna locates the problem precisely: raga-dvesha (attraction-aversion) are embedded in the sense-object relationship. They're not external enemies but internal patterns. 'Vyavasthitau' (established, positioned) shows they're always there, waiting. The instruction isn't to eliminate them (impossible) but to not come under their 'vasha' (control). The senses will pull; you don't have to be pulled."
    },

    practicalApplication: "Notice your automatic likes and dislikes. The scroll toward attractive images, the flinch from difficult news, the reach for comfort food. These aren't commands you must obey—they're invitations you can decline. You can't stop attraction and aversion from arising, but you can choose not to be ruled by them.",

    keyTerms: [
      { term: "Indriya", meaning: "Sense organ" },
      { term: "Raga", meaning: "Attraction, attachment" },
      { term: "Dvesha", meaning: "Aversion, hatred" },
      { term: "Vasha", meaning: "Control, power" },
      { term: "Paripanthi", meaning: "Enemy, one who obstructs the path" }
    ],

    themes: ["senses", "attraction", "aversion", "self-control"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 3,
    verse: 35,
    sanskrit: "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्।\nस्वधर्मे निधनं श्रेयः परधर्मो भयावहः।।",
    transliteration: "śreyān sva-dharmo viguṇaḥ para-dharmāt sv-anuṣṭhitāt\nsva-dharme nidhanaṁ śreyaḥ para-dharmo bhayāvahaḥ",

    translation: "Better is one's own dharma, though imperfectly performed, than the dharma of another well performed. Better is death in one's own dharma; the dharma of another brings danger.",

    explanation: {
      simple: "It's better to do your own duty badly than to do someone else's duty well. Even dying while following your own path is better than succeeding at someone else's. Trying to be something you're not is dangerous.",
      deeper: "This is one of the Gita's most famous and controversial verses. 'Sva-dharma' means one's own duty/nature/path—determined by character, circumstances, and stage of life. 'Para-dharma' is another's duty. The verse doesn't justify any action (Arjuna's sva-dharma as a warrior is to fight righteously, not cruelly). It warns against inauthenticity. A crow pretending to be a peacock fails at both. 'Bhayavaha' (fear-bringing, dangerous) emphasizes that abandoning your authentic path for an attractive but alien one leads to psychological and spiritual peril."
    },

    practicalApplication: "Stop trying to be someone you're not. The introvert forcing extraversion, the artist forcing business, the caretaker forcing competitiveness—all suffer. Your own path, even when difficult, fits. Someone else's path, even when successful, chafes. What is YOUR dharma? What work, what life, emerges naturally from who you actually are?",

    keyTerms: [
      { term: "Sva-dharma", meaning: "One's own duty, own nature, own path" },
      { term: "Para-dharma", meaning: "Another's duty, alien path" },
      { term: "Viguna", meaning: "Imperfect, with faults" },
      { term: "Nidhana", meaning: "Death, destruction" },
      { term: "Bhayavaha", meaning: "Dangerous, fear-bringing" }
    ],

    themes: ["authenticity", "duty", "self-knowledge", "danger"],
    difficulty: "beginner",
    famousVerse: true
  },

  // -------------------------------------------------------------------------
  // SECTION 7: DESIRE AS THE ENEMY (Verses 36-43)
  // The root cause of all trouble is desire (kama) and anger (krodha)
  // -------------------------------------------------------------------------
  {
    chapter: 3,
    verse: 36,
    sanskrit: "अर्जुन उवाच।\nअथ केन प्रयुक्तोऽयं पापं चरति पूरुषः।\nअनिच्छन्नपि वार्ष्णेय बलादिव नियोजितः।।",
    transliteration: "arjuna uvāca\natha kena prayukto 'yaṁ pāpaṁ carati pūruṣaḥ\nanicchann api vārṣṇeya balād iva niyojitaḥ",

    translation: "Arjuna said: Then what is it that compels a person to commit sin, O Krishna, even unwillingly, as if driven by force?",

    explanation: {
      simple: "Arjuna asks a crucial question: What makes people do wrong even when they don't want to? We know what's right, yet we do wrong anyway. Something seems to force us against our own will. What is this power?",
      deeper: "This is the perennial question of weakness of will (akrasia in Greek philosophy). Arjuna has heard the teaching on detachment but knows from experience how hard it is. Something overpowers good intentions. 'Balad iva niyojitah' (as if driven by force) captures the helpless feeling of acting against one's better judgment. Arjuna wants to identify the enemy."
    },

    practicalApplication: "Have you ever done something you knew was wrong, wondering afterward 'why did I do that?' The diet broken, the harsh words spoken, the procrastination despite deadlines. Something seems to hijack your will. Before you can defeat this force, you need to know what it is. Krishna is about to reveal it.",

    keyTerms: [
      { term: "Prayukta", meaning: "Impelled, driven" },
      { term: "Papa", meaning: "Sin, wrong action" },
      { term: "Anichchan", meaning: "Unwilling, not wanting to" },
      { term: "Balat", meaning: "By force" },
      { term: "Niyojita", meaning: "Compelled, engaged" }
    ],

    themes: ["sin", "compulsion", "weakness", "question"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 3,
    verse: 37,
    sanskrit: "श्रीभगवानुवाच।\nकाम एष क्रोध एष रजोगुणसमुद्भवः।\nमहाशनो महापाप्मा विद्ध्येनमिह वैरिणम्।।",
    transliteration: "śrī-bhagavān uvāca\nkāma eṣa krodha eṣa rajo-guṇa-samudbhavaḥ\nmahāśano mahā-pāpmā viddhy enam iha vairiṇam",

    translation: "The Supreme Lord said: It is desire, it is anger—born of the quality of rajas. Know this to be the all-devouring, sinful enemy.",

    explanation: {
      simple: "Krishna names the enemy: Desire (kama) and its companion, anger (krodha). They come from rajas—the quality of passion and agitation. This enemy devours everything, causes great harm, and is your true adversary.",
      deeper: "Desire and anger are presented as two forms of one force. Desire (kama) is the wanting of what we don't have; anger (krodha) arises when desire is frustrated. Both emerge from rajas-guna (the mode of passion, activity, ambition). 'Mahaashana' (great eater) shows its insatiable nature—desire is never satisfied. 'Mahapapma' (great sinner) shows it leads to endless wrongdoing. 'Vairinam' (enemy) makes it clear: this is what you're fighting."
    },

    practicalApplication: "Your real enemy isn't outside—it's desire and its shadow, anger. Every frustration, every conflict, every regret usually traces back to wanting something you didn't get. Notice desire arising. Notice how anger follows when desire is blocked. This is your opponent. Know your enemy.",

    keyTerms: [
      { term: "Kama", meaning: "Desire, wanting, lust" },
      { term: "Krodha", meaning: "Anger" },
      { term: "Rajo-guna", meaning: "Quality of passion/activity" },
      { term: "Mahaashana", meaning: "All-devouring, great eater" },
      { term: "Vairin", meaning: "Enemy" }
    ],

    themes: ["desire", "anger", "enemy", "rajas"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 3,
    verse: 38,
    sanskrit: "धूमेनाव्रियते वह्निर्यथादर्शो मलेन च।\nयथोल्बेनावृतो गर्भस्तथा तेनेदमावृतम्।।",
    transliteration: "dhūmenāvriyate vahnir yathādarśo malena ca\nyatholbenāvṛto garbhas tathā tenedam āvṛtam",

    translation: "As fire is covered by smoke, as a mirror by dust, as an embryo by the womb—so is wisdom covered by desire.",

    explanation: {
      simple: "Krishna gives three examples of how desire covers wisdom: Like smoke covers fire (easy to remove), like dust covers a mirror (needs wiping), like the womb covers an embryo (needs time to emerge). Desire hides your true knowing in different degrees.",
      deeper: "Three levels of obstruction are described. Fire/smoke: the covering is thin, easily blown away—this represents light attachment. Mirror/dust: needs deliberate effort to clean—represents moderate attachment. Embryo/womb: requires natural development, time for birth—represents deep-seated desires that take long to transcend. Everyone's wisdom is covered; the question is how thickly."
    },

    practicalApplication: "How thickly is your wisdom covered? Can you see truth through thin smoke (minor preferences), or is it buried under thick dust (strong attachments), or hidden in the womb (unconscious drives)? The smoke needs a breath, the mirror needs a cloth, the embryo needs time. Match your practice to your condition.",

    keyTerms: [
      { term: "Dhuma", meaning: "Smoke" },
      { term: "Vahni", meaning: "Fire" },
      { term: "Adarsha", meaning: "Mirror" },
      { term: "Mala", meaning: "Dust, impurity" },
      { term: "Ulba", meaning: "Womb, membrane" },
      { term: "Garbha", meaning: "Embryo" }
    ],

    themes: ["wisdom", "obstruction", "desire", "covering"],
    difficulty: "intermediate",
    famousVerse: true
  },

  {
    chapter: 3,
    verse: 39,
    sanskrit: "आवृतं ज्ञानमेतेन ज्ञानिनो नित्यवैरिणा।\nकामरूपेण कौन्तेय दुष्पूरेणानलेन च।।",
    transliteration: "āvṛtaṁ jñānam etena jñānino nitya-vairiṇā\nkāma-rūpeṇa kaunteya duṣpūreṇānalena ca",

    translation: "Wisdom is covered by this eternal enemy of the wise, O Arjuna—desire, which is insatiable like fire.",

    explanation: {
      simple: "Even the wise person's knowledge gets covered by this enemy. Desire is a perpetual foe—it never gives up. And it's insatiable, like fire. The more fuel you give fire, the more it wants. The more you feed desire, the hungrier it gets.",
      deeper: "'Nitya-vairin' (eternal enemy) indicates this isn't a one-time battle—desire returns again and again throughout life. 'Dushpurena' (insatiable, difficult to fill) is key: desire can never be satisfied by fulfillment. Like fire fed with butter, giving desire what it wants only increases it. This is why the strategy of 'satisfying desires' always fails."
    },

    practicalApplication: "Stop trying to satisfy desire into submission—it doesn't work. Every fulfilled desire breeds new desires. The new car creates desire for a better car. The achieved goal creates desire for the next goal. The only solution is to weaken desire itself, not to keep feeding it hoping it will be satisfied.",

    keyTerms: [
      { term: "Jnanin", meaning: "Wise person, knower" },
      { term: "Nitya-vairin", meaning: "Eternal enemy" },
      { term: "Kama-rupena", meaning: "In the form of desire" },
      { term: "Dushpurena", meaning: "Insatiable, hard to fill" },
      { term: "Anala", meaning: "Fire" }
    ],

    themes: ["desire", "insatiability", "wisdom", "enemy"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 3,
    verse: 40,
    sanskrit: "इन्द्रियाणि मनो बुद्धिरस्याधिष्ठानमुच्यते।\nएतैर्विमोहयत्येष ज्ञानमावृत्य देहिनम्।।",
    transliteration: "indriyāṇi mano buddhir asyādhiṣṭhānam ucyate\netair vimohayaty eṣa jñānam āvṛtya dehinam",

    translation: "The senses, mind, and intellect are said to be its seat. Through these, it deludes the embodied soul by covering wisdom.",

    explanation: {
      simple: "Where does desire live? In the senses, the mind, and the intellect. These are its headquarters. From these bases, desire attacks—confusing the soul by hiding its natural wisdom. The enemy has infiltrated your perceptual and thinking systems.",
      deeper: "Krishna maps the anatomy of delusion. 'Adhishthana' (seat, base of operations) shows desire isn't floating abstractly—it's lodged in specific faculties. Senses grab pleasant objects; mind dwells on them; intellect rationalizes pursuing them. All three levels are compromised. 'Vimohayati' (deludes) indicates desire's strategy isn't force but confusion. It doesn't break down the door; it makes you forget the door exists."
    },

    practicalApplication: "Notice how desire operates through your systems: the eye sees something attractive (senses), the mind fantasizes about having it (mind), the intellect constructs reasons why you need it (intellect). Recognize this sequence. The enemy uses your own faculties against you. Guard all three levels.",

    keyTerms: [
      { term: "Indriya", meaning: "Senses" },
      { term: "Manas", meaning: "Mind" },
      { term: "Buddhi", meaning: "Intellect" },
      { term: "Adhishthana", meaning: "Seat, base, headquarters" },
      { term: "Vimohayati", meaning: "Deludes, confuses" },
      { term: "Dehin", meaning: "Embodied soul" }
    ],

    themes: ["senses", "mind", "intellect", "delusion"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 3,
    verse: 41,
    sanskrit: "तस्मात्त्वमिन्द्रियाण्यादौ नियम्य भरतर्षभ।\nपाप्मानं प्रजहि ह्येनं ज्ञानविज्ञाननाशनम्।।",
    transliteration: "tasmāt tvam indriyāṇy ādau niyamya bharatarṣabha\npāpmānaṁ prajahi hy enaṁ jñāna-vijñāna-nāśanam",

    translation: "Therefore, O Arjuna, first control the senses, and slay this sinful destroyer of knowledge and realization.",

    explanation: {
      simple: "So what do you do? Start with the senses—control them first. Then kill this sinful enemy (desire) that destroys both theoretical knowledge (jnana) and practical wisdom (vijnana). The battle begins at the sensory gates.",
      deeper: "The strategy is clear: 'adau' (first) indicates priority—begin with sense control because senses are the outermost layer. If you can stop desire at the gates (senses), it won't reach the mind and intellect. 'Jnana-vijnana-nashana' (destroyer of knowledge and realization) shows the stakes: desire doesn't just cause bad behavior, it destroys the capacity to know truth."
    },

    practicalApplication: "Guard your sensory gates. What you watch, what you scroll through, what you listen to, what you taste—these are entry points. Don't let everything in. The ancient practice of sense restraint (indriya-nigraha) isn't repression; it's strategic defense. Control input to protect clarity.",

    keyTerms: [
      { term: "Niyamya", meaning: "Controlling, regulating" },
      { term: "Papmana", meaning: "Sinful one, evil" },
      { term: "Prajahi", meaning: "Slay, abandon" },
      { term: "Jnana", meaning: "Knowledge, theoretical understanding" },
      { term: "Vijnana", meaning: "Realization, practical wisdom" }
    ],

    themes: ["sense-control", "strategy", "knowledge", "action"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 3,
    verse: 42,
    sanskrit: "इन्द्रियाणि पराण्याहुरिन्द्रियेभ्यः परं मनः।\nमनसस्तु परा बुद्धिर्यो बुद्धेः परतस्तु सः।।",
    transliteration: "indriyāṇi parāṇy āhur indriyebhyaḥ paraṁ manaḥ\nmanasas tu parā buddhir yo buddheḥ paratas tu saḥ",

    translation: "The senses are said to be superior to the body; the mind is superior to the senses; the intellect is superior to the mind; and superior to the intellect is the Self.",

    explanation: {
      simple: "Here's the hierarchy of your being: Body < Senses < Mind < Intellect < Self (Atman). Each level is subtler and more powerful than the one below. The senses rule the body, mind rules the senses, intellect rules the mind—and the Self rules all.",
      deeper: "This verse maps the inner architecture for strategic purposes. 'Para' (superior, higher) indicates both subtlety and power. The senses are more powerful than physical body (you can override bodily fatigue with desire), mind more powerful than senses (you can redirect attention), intellect more powerful than mind (you can change beliefs that change emotions), Self more powerful than intellect (abiding as Self transcends all mental movements)."
    },

    practicalApplication: "Work from the top down. Don't just fight desire at the sensory level—that's the weakest approach. Go higher: use mind to override senses, intellect to override mind, and ultimately, rest in the Self that is beyond all these. The higher you position yourself, the easier the battle.",

    keyTerms: [
      { term: "Para", meaning: "Superior, higher, subtler" },
      { term: "Indriya", meaning: "Senses" },
      { term: "Manas", meaning: "Mind" },
      { term: "Buddhi", meaning: "Intellect" },
      { term: "Sa", meaning: "That, the Self" }
    ],

    themes: ["hierarchy", "self", "mind", "strategy"],
    difficulty: "intermediate",
    famousVerse: true
  },

  {
    chapter: 3,
    verse: 43,
    sanskrit: "एवं बुद्धेः परं बुद्ध्वा संस्तभ्यात्मानमात्मना।\nजहि शत्रुं महाबाहो कामरूपं दुरासदम्।।",
    transliteration: "evaṁ buddheḥ paraṁ buddhvā saṁstabhyātmānam ātmanā\njahi śatruṁ mahā-bāho kāma-rūpaṁ durāsadam",

    translation: "Thus knowing the Self to be superior to the intellect, O mighty-armed one, steady the mind with the Self and slay this formidable enemy in the form of desire.",

    explanation: {
      simple: "Here's the final instruction: Know that the Self is higher than even the intellect. Stabilize yourself in that Self. From that position of strength, destroy this difficult enemy called desire. Fight from the highest ground.",
      deeper: "The chapter concludes with the ultimate strategy. 'Buddhva' (having known) the Self's supremacy, 'samstabhya' (having steadied) the lower self with the higher Self, one can then 'jahi' (slay) the enemy. 'Durasada' (difficult to approach, formidable) acknowledges desire's power—this isn't an easy enemy. But fighting from Self-knowledge, you have the advantage. The warrior metaphor is complete: know your position (Self), stabilize your forces (mind/intellect), then engage the enemy (desire)."
    },

    practicalApplication: "When desire attacks, don't fight from ego—you'll lose. Step back into the witnessing awareness that watches desires arise. From that stable place, you have perspective. Desire seems less urgent, less 'you.' From Self-knowledge, say no to desire not as deprivation but as freedom. This is how you win.",

    keyTerms: [
      { term: "Buddhva", meaning: "Having known, understanding" },
      { term: "Samstabhya", meaning: "Having steadied, having stabilized" },
      { term: "Atman", meaning: "Self" },
      { term: "Shatru", meaning: "Enemy" },
      { term: "Kama-rupa", meaning: "In the form of desire" },
      { term: "Durasada", meaning: "Difficult to approach, formidable" }
    ],

    themes: ["self-knowledge", "victory", "desire", "strength"],
    difficulty: "intermediate",
    famousVerse: true
  }
];

// Chapter metadata
const chapter3: ChapterContent = {
  chapter: 3,
  name: {
    sanskrit: "Karma Yoga",
    english: "The Yoga of Action"
  },
  summary: "Arjuna is confused: if knowledge is superior, why should he fight? Krishna explains that action is unavoidable—even doing nothing is a choice with consequences. The key isn't what you do, but how you do it. Action performed as sacrifice (yajna), without attachment to results, doesn't bind. He introduces the cosmic principle of mutual exchange: give and you receive, take without giving and you're a thief. The chapter culminates in identifying desire and anger as the root enemies that obscure wisdom.",
  keyThemes: ["action", "karma-yoga", "sacrifice", "yajna", "duty", "desire", "nature"],
  verseCount: 43,
  verses: verses
};

export default chapter3;
