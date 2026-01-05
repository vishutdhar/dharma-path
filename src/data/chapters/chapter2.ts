// =============================================================================
// CHAPTER 2: SANKHYA YOGA - THE ETERNAL SOUL
// =============================================================================
// The most important chapter of the Gita. Krishna begins his teaching.
// 72 verses covering: soul's nature, duty, detachment, and wisdom.
// =============================================================================

import { VerseContent, ChapterContent } from '../verseTemplate';

const verses: VerseContent[] = [
  // -------------------------------------------------------------------------
  // SECTION 1: ARJUNA'S DESPAIR (Verses 1-10)
  // Krishna sees Arjuna overwhelmed and begins to address his confusion
  // -------------------------------------------------------------------------
  {
    chapter: 2,
    verse: 1,
    sanskrit: "सञ्जय उवाच।\nतं तथा कृपयाविष्टमश्रुपूर्णाकुलेक्षणम्।\nविषीदन्तमिदं वाक्यमुवाच मधुसूदनः।।",
    transliteration: "sañjaya uvāca\ntaṁ tathā kṛpayāviṣṭam aśru-pūrṇākulekṣaṇam\nviṣīdantam idaṁ vākyam uvāca madhusūdanaḥ",

    translation: "Sanjaya said: Seeing Arjuna overwhelmed with compassion, his eyes filled with tears and full of sorrow, Krishna spoke these words.",

    explanation: {
      simple: "This verse sets the scene. Arjuna has just thrown down his weapons, refusing to fight. He's crying, confused, and paralyzed. Now Krishna, his friend and charioteer, is about to respond. What follows is one of the most important spiritual teachings in human history.",
      deeper: "The word 'Madhusudana' (slayer of the demon Madhu) reminds us that Krishna is not just Arjuna's friend—he is the Supreme Lord who destroys evil. This foreshadows that Krishna's teaching will help Arjuna overcome his inner demons of confusion and despair."
    },

    practicalApplication: "We all have moments when we're overwhelmed—when the right path isn't clear and emotions take over. This is exactly when we need guidance. Recognize when you're in an 'Arjuna moment' and seek wisdom rather than making decisions from a place of confusion.",

    keyTerms: [
      { term: "Kripa", meaning: "Compassion, pity" },
      { term: "Madhusudana", meaning: "Slayer of the demon Madhu (a name for Krishna)" }
    ],

    themes: ["compassion", "confusion", "guidance"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 2,
    verse: 2,
    sanskrit: "श्रीभगवानुवाच।\nकुतस्त्वा कश्मलमिदं विषमे समुपस्थितम्।\nअनार्यजुष्टमस्वर्ग्यमकीर्तिकरमर्जुन।।",
    transliteration: "śrī-bhagavān uvāca\nkutas tvā kaśmalam idaṁ viṣame samupasthitam\nanārya-juṣṭam asvargyam akīrti-karam arjuna",

    translation: "The Supreme Lord said: Arjuna, where has this weakness come from at such a critical moment? It is not fitting for a noble person. It will not lead to heaven, and it will only bring disgrace.",

    explanation: {
      simple: "Krishna doesn't coddle Arjuna. He challenges him directly: 'Why are you acting like this?' This isn't the time for weakness. Krishna points out that Arjuna's despair isn't noble—it's actually going to lead to dishonor. Sometimes we need someone to shake us out of our self-pity.",
      deeper: "Krishna uses three powerful arguments: this behavior is 'anarya' (not befitting a noble person), 'asvargyam' (won't lead to higher realms), and 'akīrti-karam' (brings infamy). He appeals to Arjuna's sense of honor, spiritual aspiration, and reputation—addressing all levels of motivation."
    },

    practicalApplication: "When you're stuck in despair or avoidance, ask yourself: Is this really the noble path? Sometimes we dress up our fear as compassion, our laziness as wisdom. A true friend, like Krishna, will call us out. Be open to hearing hard truths.",

    keyTerms: [
      { term: "Bhagavan", meaning: "The Supreme Lord, one who possesses all opulences" },
      { term: "Kashmalamam", meaning: "Weakness, dejection, impurity of heart" },
      { term: "Anarya", meaning: "Not befitting a noble person" }
    ],

    themes: ["courage", "duty", "honor", "tough-love"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 2,
    verse: 3,
    sanskrit: "क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते।\nक्षुद्रं हृदयदौर्बल्यं त्यक्त्वोत्तिष्ठ परन्तप।।",
    transliteration: "klaibyaṁ mā sma gamaḥ pārtha naitat tvayy upapadyate\nkṣudraṁ hṛdaya-daurbalyaṁ tyaktvottiṣṭha parantapa",

    translation: "Do not yield to unmanliness, Arjuna. It does not suit you. Shake off this petty weakness of heart and stand up, O scorcher of enemies!",

    explanation: {
      simple: "Krishna gets even more direct: 'This cowardice doesn't suit you.' He reminds Arjuna of who he really is—a great warrior called 'Parantapa' (scorcher of enemies). Krishna is saying: 'You're better than this. Get up and be who you are.'",
      deeper: "The word 'klaibyam' (impotence/unmanliness) is strong language. Krishna isn't being insensitive—he's using shock to break through Arjuna's mental paralysis. Sometimes compassion means being firm. The phrase 'hridaya-daurbalyam' (weakness of heart) identifies the real problem: it's not external circumstances, but Arjuna's internal state."
    },

    practicalApplication: "When facing a difficult situation, ask: Am I avoiding this because it's truly wrong, or because I'm afraid? There's a difference between wise restraint and cowardly avoidance. Don't let weakness of heart disguise itself as wisdom.",

    keyTerms: [
      { term: "Klaibyam", meaning: "Unmanliness, impotence, cowardice" },
      { term: "Parantapa", meaning: "Scorcher of enemies (epithet for Arjuna)" },
      { term: "Hridaya-daurbalyam", meaning: "Weakness of heart" }
    ],

    themes: ["courage", "identity", "strength", "action"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 2,
    verse: 4,
    sanskrit: "अर्जुन उवाच।\nकथं भीष्ममहं सङ्ख्ये द्रोणं च मधुसूदन।\nइषुभिः प्रतियोत्स्यामि पूजार्हावरिसूदन।।",
    transliteration: "arjuna uvāca\nkathaṁ bhīṣmam ahaṁ saṅkhye droṇaṁ ca madhusūdana\niṣubhiḥ pratiyotsyāmi pūjārhāv arisūdana",

    translation: "Arjuna said: O Krishna, how can I fight with arrows against Bhishma and Drona in battle? They are worthy of my worship, O destroyer of enemies.",

    explanation: {
      simple: "Arjuna explains his dilemma: Bhishma is his grandfather, and Drona is his teacher—both men he deeply respects. How can he shoot arrows at people he should be bowing down to? This is a genuine moral conflict, not just cowardice.",
      deeper: "Arjuna uses the word 'pujarhau' (worthy of worship) for his opponents. In Indian culture, teachers and elders hold sacred status. Arjuna isn't making excuses—he's raising a legitimate ethical question about dharma (duty) when duties conflict. This sets up Krishna's profound teaching."
    },

    practicalApplication: "Life often presents situations where our duties conflict. Your job might ask you to do something that conflicts with your values. Family expectations might clash with personal truth. Recognizing these genuine dilemmas—rather than pretending they don't exist—is the first step to resolving them.",

    keyTerms: [
      { term: "Bhishma", meaning: "Arjuna's great-grandfather, commander of the opposing army" },
      { term: "Drona", meaning: "Arjuna's martial arts teacher" },
      { term: "Pujarhau", meaning: "Worthy of worship/reverence" }
    ],

    themes: ["moral-conflict", "respect", "duty", "teachers"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 2,
    verse: 5,
    sanskrit: "गुरूनहत्वा हि महानुभावान्\nश्रेयो भोक्तुं भैक्ष्यमपीह लोके।\nहत्वार्थकामांस्तु गुरूनिहैव\nभुञ्जीय भोगान् रुधिरप्रदिग्धान्।।",
    transliteration: "gurūn ahatvā hi mahānubhāvān\nśreyo bhoktuṁ bhaikṣyam apīha loke\nhatvārtha-kāmāṁs tu gurūn ihaiva\nbhuñjīya bhogān rudhira-pradigdhān",

    translation: "It would be better to live as a beggar in this world than to kill these noble teachers. If I kill them, everything I enjoy will be stained with their blood.",

    explanation: {
      simple: "Arjuna says he'd rather be homeless and beg for food than kill his teachers. Even if he wins the war and gains the kingdom, how could he enjoy it? Every pleasure would remind him of the blood he spilled to get it.",
      deeper: "This verse reveals Arjuna's integrity. He's not thinking about victory or defeat—he's thinking about how he could live with himself afterward. The phrase 'rudhira-pradigdhan' (smeared with blood) is visceral. Arjuna understands that some victories cost more than they're worth."
    },

    practicalApplication: "Before pursuing any goal, ask: What will this cost me internally? A promotion gained through betrayal, money earned through exploitation—these 'victories' are stained with blood. True success is one you can enjoy with a clear conscience.",

    keyTerms: [
      { term: "Guru", meaning: "Teacher, spiritual guide" },
      { term: "Bhaikshyam", meaning: "Living on alms, begging" },
      { term: "Rudhira-pradigdhan", meaning: "Smeared/stained with blood" }
    ],

    themes: ["conscience", "integrity", "teachers", "consequences"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 2,
    verse: 6,
    sanskrit: "न चैतद्विद्मः कतरन्नो गरीयो\nयद्वा जयेम यदि वा नो जयेयुः।\nयानेव हत्वा न जिजीविषाम-\nस्तेऽवस्थिताः प्रमुखे धार्तराष्ट्राः।।",
    transliteration: "na caitad vidmaḥ kataran no garīyo\nyad vā jayema yadi vā no jayeyuḥ\nyān eva hatvā na jijīviṣāmas\nte 'vasthitāḥ pramukhe dhārtarāṣṭrāḥ",

    translation: "I don't even know which is better—to conquer them or be conquered by them. The sons of Dhritarashtra stand before us, and if we kill them, we wouldn't want to live anyway.",

    explanation: {
      simple: "Arjuna is completely confused. He can't figure out what's right anymore. Win or lose, he feels like he loses either way. The people he'd have to kill to win are the same people whose death would make life meaningless.",
      deeper: "This is the paralysis of moral confusion—when every option seems wrong. Arjuna uses 'na jijivishamah' (we would not wish to live). He's not being dramatic; he genuinely cannot see a path forward that preserves his integrity. This is precisely why he needs Krishna's wisdom."
    },

    practicalApplication: "When you're stuck in analysis paralysis, where every option seems bad, that's a sign you need a higher perspective. You're likely missing something. Seek guidance from someone wiser, or step back to examine your underlying assumptions.",

    keyTerms: [
      { term: "Dhartarashtrah", meaning: "Sons of Dhritarashtra (the Kauravas, the opposing side)" }
    ],

    themes: ["confusion", "moral-dilemma", "paralysis"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 2,
    verse: 7,
    sanskrit: "कार्पण्यदोषोपहतस्वभावः\nपृच्छामि त्वां धर्मसम्मूढचेताः।\nयच्छ्रेयः स्यान्निश्चितं ब्रूहि तन्मे\nशिष्यस्तेऽहं शाधि मां त्वां प्रपन्नम्।।",
    transliteration: "kārpaṇya-doṣopahata-svabhāvaḥ\npṛcchāmi tvāṁ dharma-sammūḍha-cetāḥ\nyac chreyaḥ syān niścitaṁ brūhi tan me\nśiṣyas te 'haṁ śādhi māṁ tvāṁ prapannam",

    translation: "My heart is overcome with weakness. My mind is confused about my duty. I ask you: tell me clearly what is best for me. I am your student. Please teach me—I surrender to you.",

    explanation: {
      simple: "This is the turning point. Arjuna stops arguing and genuinely asks for help. He admits he's confused, admits he's weak, and surrenders to Krishna as his teacher. This humility opens the door for the entire Gita teaching.",
      deeper: "The words 'shishyas te aham' (I am your student) and 'tvam prapannam' (I surrender to you) transform the relationship. Until now, Krishna was Arjuna's friend and charioteer. Now he becomes his Guru. Without this surrender, no teaching is possible. The student must be ready."
    },

    practicalApplication: "When you're truly stuck, drop your ego and ask for help. Say 'I don't know' and mean it. The moment you stop pretending to have all the answers is the moment real learning can begin. Surrender isn't weakness—it's the prerequisite for wisdom.",

    keyTerms: [
      { term: "Karpanya", meaning: "Miserliness, weakness, pitifulness" },
      { term: "Dharma-sammudha", meaning: "Confused about duty/righteousness" },
      { term: "Shishya", meaning: "Student, disciple" },
      { term: "Prapannam", meaning: "Surrendered, taken refuge" }
    ],

    themes: ["surrender", "humility", "guidance", "student"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 2,
    verse: 8,
    sanskrit: "न हि प्रपश्यामि ममापनुद्याद्\nयच्छोकमुच्छोषणमिन्द्रियाणाम्।\nअवाप्य भूमावसपत्नमृद्धं\nराज्यं सुराणामपि चाधिपत्यम्।।",
    transliteration: "na hi prapaśyāmi mamāpanudyād\nyac chokam ucchoṣaṇam indriyāṇām\navāpya bhūmāv asapatnam ṛddhaṁ\nrājyaṁ surāṇām api cādhipatyam",

    translation: "I see nothing that can remove this sorrow that is drying up my senses—not even if I win an unrivaled kingdom on earth or lordship over the gods themselves.",

    explanation: {
      simple: "Arjuna says: 'Nothing can fix how I feel right now. Even if I won everything—the whole kingdom, even if I became king of heaven—this grief wouldn't go away.' He's hit rock bottom emotionally.",
      deeper: "The phrase 'ucchoṣaṇam indriyāṇām' (drying up the senses) describes what we'd now call depression—the loss of ability to feel pleasure. Arjuna recognizes that external success can't cure internal suffering. This insight prepares him for Krishna's spiritual solution."
    },

    practicalApplication: "Material success doesn't cure spiritual emptiness. You can win every external battle and still feel hollow inside. When you notice that achievement isn't bringing fulfillment, that's a signal to look inward. The problem—and the solution—is internal.",

    keyTerms: [
      { term: "Shoka", meaning: "Grief, sorrow" },
      { term: "Ucchoṣaṇam", meaning: "Drying up, withering" },
      { term: "Indriya", meaning: "Senses" }
    ],

    themes: ["suffering", "depression", "materialism", "inner-work"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 2,
    verse: 9,
    sanskrit: "सञ्जय उवाच।\nएवमुक्त्वा हृषीकेशं गुडाकेशः परन्तपः।\nन योत्स्य इति गोविन्दमुक्त्वा तूष्णीं बभूव ह।।",
    transliteration: "sañjaya uvāca\nevam uktvā hṛṣīkeśaṁ guḍākeśaḥ parantapaḥ\nna yotsya iti govindam uktvā tūṣṇīṁ babhūva ha",

    translation: "Sanjaya said: Having spoken thus to Krishna, Arjuna, the conqueror of sleep and scorcher of enemies, said 'I will not fight' and fell silent.",

    explanation: {
      simple: "The narrator Sanjaya describes the scene: After pouring out his heart, Arjuna declares 'I will not fight' and goes completely silent. He's said everything he can. Now the ball is in Krishna's court.",
      deeper: "The epithets used are significant: 'Gudakesha' (conqueror of sleep) reminds us Arjuna is no ordinary man—he's a disciplined warrior who has mastered his body. Yet even such a person can be overwhelmed by moral confusion. 'Tushnim babhuva' (became silent) indicates he's genuinely receptive now."
    },

    practicalApplication: "After asking for guidance, stop talking and listen. Many people ask for advice but keep interrupting with their own thoughts. Arjuna's silence is active—he's creating space for wisdom to enter. When you seek help, truly receive it.",

    keyTerms: [
      { term: "Gudakesha", meaning: "Conqueror of sleep (epithet for Arjuna)" },
      { term: "Govinda", meaning: "One who gives pleasure to the senses (name for Krishna)" },
      { term: "Tushnim", meaning: "Silent" }
    ],

    themes: ["silence", "receptivity", "listening"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 2,
    verse: 10,
    sanskrit: "तमुवाच हृषीकेशः प्रहसन्निव भारत।\nसेनयोरुभयोर्मध्ये विषीदन्तमिदं वचः।।",
    transliteration: "tam uvāca hṛṣīkeśaḥ prahasann iva bhārata\nsenayoḥ ubhayor madhye viṣīdantam idaṁ vacaḥ",

    translation: "O Dhritarashtra, then Krishna, with a smile, spoke these words to the grieving Arjuna, there between the two armies.",

    explanation: {
      simple: "Krishna responds—and he's smiling. Not mocking, but the smile of someone who sees the bigger picture. While Arjuna sees only tragedy, Krishna sees an opportunity for profound teaching. He's about to transform this crisis into enlightenment.",
      deeper: "The word 'prahasann iva' (as if smiling) is beautiful. Krishna isn't laughing at Arjuna's pain—he's smiling because he knows this confusion will lead to liberation. The greatest teachings often emerge from our darkest moments. What seems like a curse becomes a blessing."
    },

    practicalApplication: "When you're struggling and someone wiser remains calm, don't resent their peace—learn from it. They see something you don't. Your crisis might be the doorway to your greatest growth. Trust the process.",

    keyTerms: [
      { term: "Hrishikesha", meaning: "Lord of the senses (name for Krishna)" },
      { term: "Prahasann", meaning: "Smiling, laughing gently" }
    ],

    themes: ["perspective", "wisdom", "crisis-as-opportunity"],
    difficulty: "beginner",
    famousVerse: false
  },

  // -------------------------------------------------------------------------
  // SECTION 2: THE IMMORTAL SOUL (Verses 11-30)
  // Krishna's core teaching begins - the soul cannot be killed
  // -------------------------------------------------------------------------
  {
    chapter: 2,
    verse: 11,
    sanskrit: "श्रीभगवानुवाच।\nअशोच्यानन्वशोचस्त्वं प्रज्ञावादांश्च भाषसे।\nगतासूनगतासूंश्च नानुशोचन्ति पण्डिताः।।",
    transliteration: "śrī-bhagavān uvāca\naśocyān anvaśocas tvaṁ prajñā-vādāṁś ca bhāṣase\ngatāsūn agatāsūṁś ca nānuśocanti paṇḍitāḥ",

    translation: "The Supreme Lord said: You grieve for those who should not be grieved for, yet you speak words of wisdom. The wise grieve neither for the living nor for the dead.",

    explanation: {
      simple: "Krishna's teaching begins with a gentle rebuke: 'You're talking like a philosopher, but acting like a fool.' Arjuna used sophisticated arguments about dharma, but his grief shows he doesn't understand the most basic truth—the soul is eternal. Those who truly know this don't grieve for death.",
      deeper: "This verse introduces the central theme: the distinction between the body (which dies) and the soul (which is eternal). The word 'pandita' (wise/learned) isn't about intellectual knowledge—it's about realized wisdom. A true pandita has internalized that death is not an ending."
    },

    practicalApplication: "Check if your actions match your beliefs. You might intellectually know that 'everything happens for a reason' or 'this too shall pass,' but do you live it when times get hard? Wisdom isn't what you can explain—it's what you embody.",

    keyTerms: [
      { term: "Ashochya", meaning: "Not to be grieved for" },
      { term: "Prajna-vada", meaning: "Words of wisdom" },
      { term: "Pandita", meaning: "Wise person, one who has realized knowledge" }
    ],

    themes: ["wisdom", "soul", "death", "grief"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 2,
    verse: 12,
    sanskrit: "न त्वेवाहं जातु नासं न त्वं नेमे जनाधिपाः।\nन चैव न भविष्यामः सर्वे वयमतः परम्।।",
    transliteration: "na tv evāhaṁ jātu nāsaṁ na tvaṁ neme janādhipāḥ\nna caiva na bhaviṣyāmaḥ sarve vayam ataḥ param",

    translation: "There was never a time when I did not exist, nor you, nor any of these kings. And there will never be a time when any of us shall cease to exist.",

    explanation: {
      simple: "Krishna drops a truth bomb: 'We have always existed and will always exist.' You, me, everyone here—we're not temporary beings who appeared at birth and disappear at death. We are eternal. The soul has no beginning and no end.",
      deeper: "Note that Krishna maintains individual identity ('I', 'you', 'these kings') even while teaching eternal existence. This counters the idea that enlightenment means merging into an impersonal void. We remain distinct conscious beings, but our true nature is eternal, not physical."
    },

    practicalApplication: "You are not a temporary accident. Your existence matters because you are eternal. This reframes everything: setbacks become lessons, not tragedies. Death becomes transition, not ending. Your choices ripple through eternity.",

    keyTerms: [
      { term: "Jatu", meaning: "Ever, at any time" },
      { term: "Janadhipah", meaning: "Rulers, kings" }
    ],

    themes: ["soul", "eternity", "identity", "immortality"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 2,
    verse: 13,
    sanskrit: "देहिनोऽस्मिन्यथा देहे कौमारं यौवनं जरा।\nतथा देहान्तरप्राप्तिर्धीरस्तत्र न मुह्यति।।",
    transliteration: "dehino 'smin yathā dehe kaumāraṁ yauvanaṁ jarā\ntathā dehāntara-prāptir dhīras tatra na muhyati",

    translation: "Just as the soul passes through childhood, youth, and old age in this body, so too does it pass into another body at death. The wise person is not disturbed by this.",

    explanation: {
      simple: "Your body has already changed completely many times. The infant you were, the child, the teenager—those bodies are gone. Yet 'you' continued through all those changes. Death is just one more transition. The wise understand this and aren't disturbed.",
      deeper: "This is one of the Gita's most brilliant analogies. We don't grieve when a child becomes an adult—we celebrate it. Why then do we grieve at death? Both are transformations of the body while the soul (dehi) continues. The 'dhira' (steady person) sees through the illusion of bodily identification."
    },

    practicalApplication: "Look at a childhood photo of yourself. That body is completely gone—every cell replaced—yet you continued. Death is the same principle, just a bigger jump. This doesn't mean you shouldn't care for your body, but don't confuse it with who you truly are.",

    keyTerms: [
      { term: "Dehi", meaning: "The embodied one, the soul" },
      { term: "Kaumaram", meaning: "Childhood" },
      { term: "Yauvanam", meaning: "Youth" },
      { term: "Jara", meaning: "Old age" },
      { term: "Dhira", meaning: "Steady, wise, undisturbed" }
    ],

    themes: ["soul", "body", "change", "reincarnation"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 2,
    verse: 14,
    sanskrit: "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः।\nआगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत।।",
    transliteration: "mātrā-sparśās tu kaunteya śītoṣṇa-sukha-duḥkha-dāḥ\nāgamāpāyino 'nityās tāṁs titikṣasva bhārata",

    translation: "The contact of the senses with their objects, O son of Kunti, gives rise to cold and heat, pleasure and pain. They come and go and do not last forever. Bear them patiently, O Bharata.",

    explanation: {
      simple: "Hot and cold, pleasure and pain—these are just your senses reacting to the world. They come and go like weather. Don't get too attached to the good feelings or too disturbed by the bad ones. They're temporary. Just bear them.",
      deeper: "The word 'titiksha' (patient endurance) is a key spiritual quality. It doesn't mean suppression or denial—it means maintaining equanimity knowing that all sensations are temporary. Like sitting through a storm knowing it will pass. This is the beginning of freedom from reactivity."
    },

    practicalApplication: "Next time you feel extreme pleasure or pain, remind yourself: 'This is temporary.' Not to dismiss the experience, but to hold it lightly. The promotion high will fade. The rejection sting will pass. Equanimity comes from knowing the weather always changes.",

    keyTerms: [
      { term: "Matra-sparsha", meaning: "Contact of senses with objects" },
      { term: "Shita-ushna", meaning: "Cold and heat" },
      { term: "Anitya", meaning: "Impermanent, temporary" },
      { term: "Titiksha", meaning: "Patient endurance, forbearance" }
    ],

    themes: ["impermanence", "equanimity", "senses", "patience"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 2,
    verse: 15,
    sanskrit: "यं हि न व्यथयन्त्येते पुरुषं पुरुषर्षभ।\nसमदुःखसुखं धीरं सोऽमृतत्वाय कल्पते।।",
    transliteration: "yaṁ hi na vyathayanty ete puruṣaṁ puruṣarṣabha\nsama-duḥkha-sukhaṁ dhīraṁ so 'mṛtatvāya kalpate",

    translation: "O best among men, the person who is not disturbed by pleasure and pain, who remains steady in both—that wise one becomes eligible for immortality.",

    explanation: {
      simple: "The person who stays balanced in good times and bad times is ready for liberation. It's not about being emotionless—it's about not being thrown off center by every experience. This stability is the foundation for spiritual growth.",
      deeper: "The word 'amritatva' means 'immortality' or 'liberation.' Krishna links equanimity directly to enlightenment. Why? Because being tossed around by pleasure and pain keeps us identified with the body. When we stand steady in the Self, we realize our eternal nature."
    },

    practicalApplication: "Practice equanimity in small things first. When stuck in traffic, stay centered. When someone praises you, don't inflate. When criticized, don't collapse. This training in daily life prepares you for the bigger challenges.",

    keyTerms: [
      { term: "Sama-duhkha-sukham", meaning: "Equal in pain and pleasure" },
      { term: "Dhira", meaning: "Steady, wise one" },
      { term: "Amritatva", meaning: "Immortality, liberation" }
    ],

    themes: ["equanimity", "liberation", "stability", "wisdom"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 2,
    verse: 16,
    sanskrit: "नासतो विद्यते भावो नाभावो विद्यते सतः।\nउभयोरपि दृष्टोऽन्तस्त्वनयोस्तत्त्वदर्शिभिः।।",
    transliteration: "nāsato vidyate bhāvo nābhāvo vidyate sataḥ\nubhayor api dṛṣṭo 'ntas tv anayos tattva-darśibhiḥ",

    translation: "The unreal has no existence; the real never ceases to exist. Those who see the truth have concluded this about both.",

    explanation: {
      simple: "What's real is always real. What's unreal was never truly real. The body changes and dies—so it's not ultimately real. The soul never changes—so it's the only true reality. Wise people see this clearly.",
      deeper: "This verse establishes the philosophical foundation: 'sat' (that which exists, being, truth) versus 'asat' (non-existence, untruth). The body belongs to 'asat'—it appears, changes, disappears. The soul is 'sat'—unchanging, eternal. This is the core insight of Vedanta philosophy."
    },

    practicalApplication: "When you're upset about something changing or ending, ask: 'Was this ever permanent?' Relationships change, bodies age, jobs end—this is their nature. Don't expect permanence from impermanent things. Invest in what's truly real: your character, your consciousness, your soul.",

    keyTerms: [
      { term: "Sat", meaning: "That which exists, reality, truth" },
      { term: "Asat", meaning: "That which doesn't truly exist, unreality" },
      { term: "Tattva-darshi", meaning: "Seer of truth, one who perceives reality" }
    ],

    themes: ["reality", "truth", "philosophy", "impermanence"],
    difficulty: "intermediate",
    famousVerse: true
  },

  {
    chapter: 2,
    verse: 17,
    sanskrit: "अविनाशि तु तद्विद्धि येन सर्वमिदं ततम्।\nविनाशमव्ययस्यास्य न कश्चित्कर्तुमर्हति।।",
    transliteration: "avināśi tu tad viddhi yena sarvam idaṁ tatam\nvināśam avyayasyāsya na kaścit kartum arhati",

    translation: "Know that which pervades the entire body to be indestructible. No one can destroy the imperishable soul.",

    explanation: {
      simple: "The soul fills your entire body, giving it life and consciousness. This soul cannot be destroyed by anyone or anything. Swords can't cut it, fire can't burn it, water can't wet it. It's beyond all physical harm.",
      deeper: "The soul is described as 'tatam' (pervading)—it's not located in one spot like the heart or brain. Consciousness pervades the whole body, which is why you feel sensation everywhere. Yet unlike the body, this pervading presence is 'avyaya' (imperishable) and 'avinashi' (indestructible)."
    },

    practicalApplication: "When facing fear—whether of death, failure, or loss—remember that your essential self cannot be harmed. Bodies can be hurt, reputations can be damaged, possessions can be lost. But the real you is beyond all destruction. This is the ultimate security.",

    keyTerms: [
      { term: "Avinashi", meaning: "Indestructible" },
      { term: "Tatam", meaning: "Pervading, spread throughout" },
      { term: "Avyaya", meaning: "Imperishable, unchanging" }
    ],

    themes: ["soul", "indestructibility", "consciousness"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 2,
    verse: 18,
    sanskrit: "अन्तवन्त इमे देहा नित्यस्योक्ताः शरीरिणः।\nअनाशिनोऽप्रमेयस्य तस्माद्युध्यस्व भारत।।",
    transliteration: "antavanta ime dehā nityasyoktāḥ śarīriṇaḥ\nanāśino 'prameyasya tasmād yudhyasva bhārata",

    translation: "The body is perishable, but the soul dwelling within is eternal, indestructible, and immeasurable. Therefore, O Arjuna, fight!",

    explanation: {
      simple: "Krishna draws the practical conclusion: Bodies are going to end anyway—that's their nature. But the soul within never ends. Understanding this, why hesitate? Fight! You cannot kill what cannot be killed.",
      deeper: "This is the first of Krishna's 'therefore, fight!' conclusions. The logic is clear: if the soul is eternal (nitya), indestructible (anashina), and beyond measurement (aprameya), then death is an illusion. Arjuna's grief is based on a misunderstanding of what death actually is."
    },

    practicalApplication: "When you understand deeply that you are not the body, you can act with courage. Fear of physical harm, fear of death, fear of failure—all these diminish. You're free to do what's right because the real you cannot be threatened.",

    keyTerms: [
      { term: "Antavanta", meaning: "Perishable, having an end" },
      { term: "Nitya", meaning: "Eternal" },
      { term: "Sharirin", meaning: "The embodied one, soul" },
      { term: "Aprameya", meaning: "Immeasurable, beyond comprehension" }
    ],

    themes: ["soul", "body", "courage", "action"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 2,
    verse: 19,
    sanskrit: "य एनं वेत्ति हन्तारं यश्चैनं मन्यते हतम्।\nउभौ तौ न विजानीतो नायं हन्ति न हन्यते।।",
    transliteration: "ya enaṁ vetti hantāraṁ yaś cainaṁ manyate hatam\nubhau tau na vijānīto nāyaṁ hanti na hanyate",

    translation: "One who thinks the soul can kill, or one who thinks it can be killed—both are ignorant. The soul neither kills nor is killed.",

    explanation: {
      simple: "If you think you can kill someone's soul, you're wrong. If you think your soul can be killed, you're also wrong. The soul doesn't kill and can't be killed. Both the 'killer' and the 'killed' are operating under an illusion.",
      deeper: "This verse echoes the Katha Upanishad. It points to a profound truth: action belongs to the body/mind, not the soul. The soul is the witness, not the doer. In the ultimate reality, there is no killing happening because the soul is beyond action. This doesn't excuse violence—it corrects our understanding of what death is."
    },

    practicalApplication: "This teaching isn't a license to harm—it's a correction of perception. The body can be harmed, and causing harm creates karma. But fear of death, and grief over death, come from misidentifying with the body. Correct understanding liberates.",

    keyTerms: [
      { term: "Hantaram", meaning: "Killer" },
      { term: "Hatam", meaning: "Killed" },
      { term: "Vijanitah", meaning: "Understand, know truly" }
    ],

    themes: ["soul", "killing", "ignorance", "truth"],
    difficulty: "intermediate",
    famousVerse: true
  },

  {
    chapter: 2,
    verse: 20,
    sanskrit: "न जायते म्रियते वा कदाचिन्\nनायं भूत्वा भविता वा न भूयः।\nअजो नित्यः शाश्वतोऽयं पुराणो\nन हन्यते हन्यमाने शरीरे।।",
    transliteration: "na jāyate mriyate vā kadācin\nnāyaṁ bhūtvā bhavitā vā na bhūyaḥ\najo nityaḥ śāśvato 'yaṁ purāṇo\nna hanyate hanyamāne śarīre",

    translation: "The soul is never born, nor does it ever die. It has not come into being, does not come into being, and will not come into being. It is unborn, eternal, everlasting, and primeval. It is not killed when the body is killed.",

    explanation: {
      simple: "This is one of the most important verses in the Gita. The soul was never born—so it can never die. It doesn't 'begin' at conception or 'end' at death. It is eternal, ancient, and forever. When the body dies, the soul continues, completely unaffected.",
      deeper: "Six adjectives describe the soul: unborn (aja), eternal (nitya), everlasting (shashvata), primeval (purana), not killed (na hanyate), and beyond becoming (na bhavita). This isn't poetry—it's a precise philosophical statement. The soul exists outside of time and causation."
    },

    practicalApplication: "Meditate on this: 'I was never born, and I will never die.' Not your body—that was born and will die. But the awareness reading these words right now—that was never created and will never be destroyed. Rest in this identity.",

    keyTerms: [
      { term: "Aja", meaning: "Unborn" },
      { term: "Nitya", meaning: "Eternal" },
      { term: "Shashvata", meaning: "Everlasting, permanent" },
      { term: "Purana", meaning: "Ancient, primeval" }
    ],

    themes: ["soul", "eternity", "death", "immortality"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 2,
    verse: 21,
    sanskrit: "वेदाविनाशिनं नित्यं य एनमजमव्ययम्।\nकथं स पुरुषः पार्थ कं घातयति हन्ति कम्।।",
    transliteration: "vedāvināśinaṁ nityaṁ ya enam ajam avyayam\nkathaṁ sa puruṣaḥ pārtha kaṁ ghātayati hanti kam",

    translation: "O Arjuna, how can a person who knows the soul to be indestructible, eternal, unborn, and unchanging—how can such a person kill anyone or cause anyone to be killed?",

    explanation: {
      simple: "Krishna asks a rhetorical question: If you truly understand that the soul cannot be destroyed, what exactly are you killing? The body will die anyway. The soul cannot die ever. So what is there to grieve about?",
      deeper: "This verse challenges our entire concept of 'killing.' We think killing means ending someone's existence—but the soul's existence cannot be ended. What we call death is just the soul leaving one body. The wise person knows this, so they act without the delusion that they're destroying anything real."
    },

    practicalApplication: "This doesn't justify violence—it corrects our understanding of it. When you deeply realize that consciousness is eternal, you stop fearing death (yours or others'). You can then act from wisdom rather than fear. Do what's right, without the paralysis of fearing you'll 'destroy' something eternal.",

    keyTerms: [
      { term: "Veda", meaning: "Knows, understands" },
      { term: "Avinashinam", meaning: "Indestructible" },
      { term: "Avyayam", meaning: "Unchanging, imperishable" },
      { term: "Ghatayati", meaning: "Causes to be killed" }
    ],

    themes: ["soul", "killing", "knowledge", "understanding"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 2,
    verse: 22,
    sanskrit: "वासांसि जीर्णानि यथा विहाय नवानि गृह्णाति नरोऽपराणि।\nतथा शरीराणि विहाय जीर्णान्यन्यानि संयाति नवानि देही।।",
    transliteration: "vāsāṁsi jīrṇāni yathā vihāya navāni gṛhṇāti naro 'parāṇi\ntathā śarīrāṇi vihāya jīrṇāny anyāni saṁyāti navāni dehī",

    translation: "Just as a person discards worn-out clothes and puts on new ones, so the soul discards worn-out bodies and enters new ones.",

    explanation: {
      simple: "This is one of the most famous verses in the Gita. Your body is like clothing for your soul. When clothes get old and worn, you throw them away and get new ones without any trauma. Death works the same way—the soul simply changes bodies. The real 'you' continues.",
      deeper: "This analogy is brilliant in its simplicity. We don't grieve when we change clothes—we might even look forward to new ones. Similarly, the soul's journey through bodies is natural, even progressive. This reframes death not as a tragedy but as a transition—reducing our fear and attachment to the physical form."
    },

    practicalApplication: "When facing loss—whether aging, illness, or death of loved ones—remember this image. The physical form is temporary but the essence continues. This doesn't eliminate grief, but offers perspective. You are not your body; you are the consciousness experiencing through it. Treat your body well, but don't confuse it with your identity.",

    keyTerms: [
      { term: "Vasansi", meaning: "Clothes, garments" },
      { term: "Jirnani", meaning: "Worn out, old" },
      { term: "Dehi", meaning: "The embodied one, the soul" },
      { term: "Sharira", meaning: "Body" }
    ],

    themes: ["soul", "death", "reincarnation", "body", "impermanence"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 2,
    verse: 23,
    sanskrit: "नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः।\nन चैनं क्लेदयन्त्यापो न शोषयति मारुतः।।",
    transliteration: "nainaṁ chindanti śastrāṇi nainaṁ dahati pāvakaḥ\nna cainaṁ kledayanty āpo na śoṣayati mārutaḥ",

    translation: "Weapons cannot cut the soul, fire cannot burn it, water cannot wet it, and wind cannot dry it.",

    explanation: {
      simple: "Krishna uses the four elements to drive home the point: nothing physical can affect the soul. Swords? Useless. Fire? Can't touch it. Water? Doesn't apply. Wind? No effect. The soul is completely beyond physical harm.",
      deeper: "This verse addresses every possible way we might imagine something being destroyed. In ancient thought, everything was made of earth, water, fire, and air. Krishna says the soul is beyond all of these—it's not made of matter at all. It exists on a completely different plane of reality."
    },

    practicalApplication: "When you feel threatened—physically, emotionally, professionally—remember that the core of you is untouchable. People can harm your body, damage your reputation, take your possessions. But the real you? Invulnerable. This isn't about being reckless—protect your body. But don't let fear of physical harm stop you from doing what's right.",

    keyTerms: [
      { term: "Shastra", meaning: "Weapons" },
      { term: "Pavaka", meaning: "Fire" },
      { term: "Apah", meaning: "Water" },
      { term: "Maruta", meaning: "Wind, air" }
    ],

    themes: ["soul", "indestructibility", "elements", "fearlessness"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 2,
    verse: 24,
    sanskrit: "अच्छेद्योऽयमदाह्योऽयमक्लेद्योऽशोष्य एव च।\nनित्यः सर्वगतः स्थाणुरचलोऽयं सनातनः।।",
    transliteration: "acchedyo 'yam adāhyo 'yam akledyo 'śoṣya eva ca\nnityaḥ sarva-gataḥ sthāṇur acalo 'yaṁ sanātanaḥ",

    translation: "The soul cannot be cut, burned, wetted, or dried. It is eternal, all-pervading, stable, immovable, and everlasting.",

    explanation: {
      simple: "This verse reinforces the previous one with positive descriptions. The soul is: eternal (always exists), all-pervading (everywhere), stable (unchanging), immovable (nothing can shift it), and everlasting (will always exist). It's the most permanent thing there is.",
      deeper: "The word 'sarva-gatah' (all-pervading) is significant. The soul isn't trapped 'inside' the body like a bird in a cage. It pervades the body while also being connected to the universal consciousness. Some interpret this as the individual soul being a part of the cosmic soul (Brahman)."
    },

    practicalApplication: "Contemplate your own unchanging awareness. Thoughts come and go, emotions rise and fall, even your sense of self has shifted over the years—but something has remained constant: the awareness that witnesses it all. That witness is 'sthanu' (stable) and 'achala' (immovable). Rest in that.",

    keyTerms: [
      { term: "Acchedya", meaning: "Cannot be cut" },
      { term: "Sarva-gata", meaning: "All-pervading" },
      { term: "Sthanu", meaning: "Stable, firm" },
      { term: "Sanatana", meaning: "Eternal, everlasting" }
    ],

    themes: ["soul", "eternity", "consciousness", "stability"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 2,
    verse: 25,
    sanskrit: "अव्यक्तोऽयमचिन्त्योऽयमविकार्योऽयमुच्यते।\nतस्मादेवं विदित्वैनं नानुशोचितुमर्हसि।।",
    transliteration: "avyakto 'yam acintyo 'yam avikāryo 'yam ucyate\ntasmād evaṁ viditvainaṁ nānuśocitum arhasi",

    translation: "The soul is said to be invisible, inconceivable, and unchangeable. Knowing this, you should not grieve.",

    explanation: {
      simple: "You can't see the soul with your eyes, you can't fully grasp it with your mind, and it never changes no matter what happens to the body. Once you truly understand this, grief becomes unnecessary—there's nothing to mourn because nothing real has been lost.",
      deeper: "These three qualities explain why the soul is hard to understand: 'avyakta' (unmanifest/invisible) means it can't be perceived by senses; 'achintya' (inconceivable) means the mind can't fully comprehend it; 'avikarya' (unchangeable) means it's beyond cause and effect. We can only know it through direct experience, not through thinking about it."
    },

    practicalApplication: "If you've been trying to 'figure out' your soul through thinking, stop. The soul is beyond thought. It can only be experienced directly through meditation and self-inquiry. When you sit in stillness and ask 'Who am I?', the awareness that remains when all thoughts stop—that's closer to the soul than any concept about it.",

    keyTerms: [
      { term: "Avyakta", meaning: "Unmanifest, invisible" },
      { term: "Achintya", meaning: "Inconceivable, beyond thought" },
      { term: "Avikarya", meaning: "Unchangeable" },
      { term: "Vidita", meaning: "Having known" }
    ],

    themes: ["soul", "knowledge", "grief", "understanding"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 2,
    verse: 26,
    sanskrit: "अथ चैनं नित्यजातं नित्यं वा मन्यसे मृतम्।\nतथापि त्वं महाबाहो नैवं शोचितुमर्हसि।।",
    transliteration: "atha cainaṁ nitya-jātaṁ nityaṁ vā manyase mṛtam\ntathāpi tvaṁ mahā-bāho naivaṁ śocitum arhasi",

    translation: "But even if you think the soul is constantly born and constantly dies, O mighty-armed one, you still have no reason to grieve.",

    explanation: {
      simple: "Krishna now argues from the opposite position: 'Okay, let's say you don't accept the soul is eternal. Let's say you believe it's born and dies. Even then—why grieve?' If birth and death are natural cycles, there's still nothing tragic about them. It's just nature doing what nature does.",
      deeper: "This shows Krishna's skill as a teacher. He's made the case for the eternal soul, but now addresses someone who might not accept that philosophy. Even from a materialist viewpoint where consciousness emerges from matter and ends with the body, grief is still illogical—it's just atoms rearranging. Either way, excessive grief doesn't make sense."
    },

    practicalApplication: "Whatever your beliefs about the soul—eternal or not—excessive grief is still unproductive. If life is eternal, death is transition. If life is finite, death is natural. Either way, spending your limited time grieving rather than living doesn't serve you. Honor loss, then return to life.",

    keyTerms: [
      { term: "Nitya-jatam", meaning: "Constantly being born" },
      { term: "Mritam", meaning: "Dies, dead" },
      { term: "Mahabaho", meaning: "Mighty-armed (epithet for Arjuna)" }
    ],

    themes: ["grief", "death", "philosophy", "logic"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 2,
    verse: 27,
    sanskrit: "जातस्य हि ध्रुवो मृत्युर्ध्रुवं जन्म मृतस्य च।\nतस्मादपरिहार्येऽर्थे न त्वं शोचितुमर्हसि।।",
    transliteration: "jātasya hi dhruvo mṛtyur dhruvaṁ janma mṛtasya ca\ntasmād aparihārye 'rthe na tvaṁ śocitum arhasi",

    translation: "For one who is born, death is certain; and for one who has died, birth is certain. Therefore, you should not grieve over the inevitable.",

    explanation: {
      simple: "Here's a simple truth: everything born will die, and what dies will be reborn. This is the cycle of nature, as certain as the sun rising. You can't change it. So why waste energy grieving over something that's absolutely guaranteed to happen?",
      deeper: "The word 'dhruva' means fixed, certain, unavoidable. Krishna isn't being cold—he's being practical. Death isn't a tragedy that befell us; it's a feature of having a body. Accepting this truth frees us from the anxiety of trying to avoid the unavoidable. It also points to the cycle of rebirth (samsara)."
    },

    practicalApplication: "Accept mortality—not morbidly, but maturely. Everyone you love will die. You will die. This isn't pessimism; it's reality. When you stop resisting this truth, you can actually live more fully. Cherish today because it won't last. Tell people you love them now, not later.",

    keyTerms: [
      { term: "Jatasya", meaning: "Of that which is born" },
      { term: "Dhruva", meaning: "Certain, inevitable" },
      { term: "Aparihārya", meaning: "Unavoidable, inevitable" }
    ],

    themes: ["death", "birth", "cycle", "acceptance", "inevitability"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 2,
    verse: 28,
    sanskrit: "अव्यक्तादीनि भूतानि व्यक्तमध्यानि भारत।\nअव्यक्तनिधनान्येव तत्र का परिदेवना।।",
    transliteration: "avyaktādīni bhūtāni vyakta-madhyāni bhārata\navyakta-nidhanāny eva tatra kā paridevanā",

    translation: "All beings are unmanifest before birth, manifest in the middle, and unmanifest again after death. What is there to grieve about?",

    explanation: {
      simple: "Before you were born, where were you? Unmanifest—not visible in this world. Now you're here, manifest. After death, you'll be unmanifest again. This is like waves in the ocean—they rise, exist for a while, then return to the ocean. The wave wasn't destroyed; it just returned to its source.",
      deeper: "The cycle is: unmanifest → manifest → unmanifest. We only see the middle part and think that's the whole story. But existence continues before and after the 'manifest' phase. Grief comes from thinking manifestation is the only reality. When you see the bigger picture, grief seems unnecessary."
    },

    practicalApplication: "Think about where you were before birth—not nowhere, but in a different state. Think about where you'll be after death—not nowhere, but again in a different state. This manifest life is like a brief appearance on stage between two vast backstage periods. Make your time on stage count, but don't cling to it.",

    keyTerms: [
      { term: "Avyakta", meaning: "Unmanifest, not visible" },
      { term: "Vyakta", meaning: "Manifest, visible" },
      { term: "Bhutani", meaning: "Beings" },
      { term: "Paridevana", meaning: "Lamentation, grief" }
    ],

    themes: ["manifestation", "existence", "cycle", "grief"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 2,
    verse: 29,
    sanskrit: "आश्चर्यवत्पश्यति कश्चिदेनमाश्चर्यवद्वदति तथैव चान्यः।\nआश्चर्यवच्चैनमन्यः शृणोति श्रुत्वाप्येनं वेद न चैव कश्चित्।।",
    transliteration: "āścarya-vat paśyati kaścid enam āścarya-vad vadati tathaiva cānyaḥ\nāścarya-vac cainam anyaḥ śṛṇoti śrutvāpy enaṁ veda na caiva kaścit",

    translation: "Some see the soul as amazing, some speak of it as amazing, some hear of it as amazing, and yet others, even after hearing about it, cannot understand it at all.",

    explanation: {
      simple: "The soul is truly wondrous—those who catch even a glimpse of it are amazed. Some can describe this wonder, others can hear about it and be moved. But many people, even after hearing the teaching repeatedly, just don't get it. The soul remains mysterious.",
      deeper: "This verse acknowledges the rarity of genuine spiritual understanding. The soul isn't like a math problem that can be solved through effort. It requires a certain readiness, a certain grace. Krishna isn't criticizing those who don't understand—he's noting that direct realization is rare and precious."
    },

    practicalApplication: "If this teaching about the eternal soul resonates with you, don't take it for granted—that recognition itself is significant. If it feels abstract or unreal, don't force it. Keep listening, keep contemplating. Sometimes understanding comes suddenly after years of hearing. Stay open.",

    keyTerms: [
      { term: "Ashcharya", meaning: "Wonder, amazing, miraculous" },
      { term: "Pashyati", meaning: "Sees" },
      { term: "Shrinoti", meaning: "Hears" },
      { term: "Veda", meaning: "Knows, understands" }
    ],

    themes: ["soul", "wonder", "understanding", "mystery"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 2,
    verse: 30,
    sanskrit: "देही नित्यमवध्योऽयं देहे सर्वस्य भारत।\nतस्मात्सर्वाणि भूतानि न त्वं शोचितुमर्हसि।।",
    transliteration: "dehī nityam avadhyo 'yaṁ dehe sarvasya bhārata\ntasmāt sarvāṇi bhūtāni na tvaṁ śocitum arhasi",

    translation: "O Arjuna, the soul dwelling in every body can never be killed. Therefore, you should not grieve for any living being.",

    explanation: {
      simple: "Krishna summarizes his teaching on the soul: In every single body—human, animal, all living beings—there is an eternal soul that cannot be killed. Ever. By anyone. Knowing this, grief over death makes no sense. The body dies, but the being within continues.",
      deeper: "This verse extends the teaching beyond humans to 'sarvani bhutani' (all beings). The soul in an ant is of the same nature as the soul in a human—eternal and indestructible. This is the basis for the Hindu concept of 'ahimsa' (non-violence) and respect for all life."
    },

    practicalApplication: "Look at every living being—people, animals, insects—and recognize: there's an eternal soul in there. This doesn't mean you never defend yourself or eat food, but it shifts your relationship with life. You start seeing the sacred in everything. Grief transforms into reverence.",

    keyTerms: [
      { term: "Dehi", meaning: "The embodied soul" },
      { term: "Avadhya", meaning: "Cannot be killed, inviolable" },
      { term: "Sarvani bhutani", meaning: "All beings" }
    ],

    themes: ["soul", "universality", "grief", "respect-for-life"],
    difficulty: "beginner",
    famousVerse: false
  },

  // -------------------------------------------------------------------------
  // SECTION 3: WARRIOR DUTY (Verses 31-38)
  // Krishna now argues from the perspective of Arjuna's social duty (dharma)
  // -------------------------------------------------------------------------
  {
    chapter: 2,
    verse: 31,
    sanskrit: "स्वधर्ममपि चावेक्ष्य न विकम्पितुमर्हसि।\nधर्म्याद्धि युद्धाच्छ्रेयोऽन्यत्क्षत्रियस्य न विद्यते।।",
    transliteration: "sva-dharmam api cāvekṣya na vikampitum arhasi\ndharmyād dhi yuddhāc chreyo 'nyat kṣatriyasya na vidyate",

    translation: "Considering your own duty as a warrior, you should not waver. For a warrior, there is nothing better than a righteous war.",

    explanation: {
      simple: "Now Krishna argues from a different angle: your role in society. You're a Kshatriya—a warrior. Fighting for righteousness is literally your job, your purpose. For a warrior, a just war is the greatest opportunity. You shouldn't hesitate to do what you were born to do.",
      deeper: "The concept of 'sva-dharma' (one's own duty) is central to the Gita. Each person has a role to play based on their nature and position. Arjuna's dharma as a Kshatriya is to protect the righteous and fight injustice. Abandoning this duty would be more harmful than fulfilling it."
    },

    practicalApplication: "What is your 'sva-dharma'—your unique role and responsibility? A parent protects their children, a teacher educates, a healer heals. When your duty feels hard, remember: this is what you're here to do. Shirking it doesn't make you noble; it makes you absent when you're needed most.",

    keyTerms: [
      { term: "Sva-dharma", meaning: "One's own duty, personal calling" },
      { term: "Kshatriya", meaning: "Warrior class, protector" },
      { term: "Dharmya yuddha", meaning: "Righteous war" }
    ],

    themes: ["duty", "warrior", "dharma", "purpose"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 2,
    verse: 32,
    sanskrit: "यदृच्छया चोपपन्नं स्वर्गद्वारमपावृतम्।\nसुखिनः क्षत्रियाः पार्थ लभन्ते युद्धमीदृशम्।।",
    transliteration: "yadṛcchayā copapannaṁ svarga-dvāram apāvṛtam\nsukhinaḥ kṣatriyāḥ pārtha labhante yuddham īdṛśam",

    translation: "O Arjuna, happy are the warriors who are presented with such an unsought opportunity for battle—it opens the gates of heaven.",

    explanation: {
      simple: "Krishna says: 'You should be grateful! A righteous battle like this doesn't come every day. For a warrior, dying in such a battle guarantees heaven. Other warriors would consider themselves lucky to have this opportunity.'",
      deeper: "The concept of 'svarga' (heaven) for warriors dying in righteous battle appears across many cultures—Norse Valhalla, Islamic Jannah for martyrs, etc. Krishna appeals to the worldly rewards Arjuna might care about. If even Arjuna doesn't believe in the eternal soul, he should fight for the honor and heavenly reward."
    },

    practicalApplication: "Sometimes duty brings opportunity. The challenge you're facing might be exactly what you need for growth, recognition, or achievement. Reframe obstacles as opportunities. The hard project at work, the difficult conversation you've been avoiding—these might be the 'gates of heaven' for your particular life path.",

    keyTerms: [
      { term: "Yadricchaya", meaning: "Unsought, by chance" },
      { term: "Svarga-dvaram", meaning: "Gate of heaven" },
      { term: "Sukhinah", meaning: "Happy, fortunate" }
    ],

    themes: ["duty", "opportunity", "heaven", "warrior"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 2,
    verse: 33,
    sanskrit: "अथ चेत्त्वमिमं धर्म्यं सङ्ग्रामं न करिष्यसि।\nततः स्वधर्मं कीर्तिं च हित्वा पापमवाप्स्यसि।।",
    transliteration: "atha cet tvam imaṁ dharmyaṁ saṅgrāmaṁ na kariṣyasi\ntataḥ sva-dharmaṁ kīrtiṁ ca hitvā pāpam avāpsyasi",

    translation: "But if you do not fight this righteous battle, you will abandon your duty and your honor, and you will incur sin.",

    explanation: {
      simple: "Krishna turns to consequences: 'If you don't fight, here's what happens—you lose your duty, you lose your honor, and you actually gain sin.' Running away isn't the pure choice Arjuna thinks it is. It has real negative consequences.",
      deeper: "This is important: inaction is also action. Arjuna thinks not fighting is the 'safe' choice. Krishna shows it isn't. By not fighting, Arjuna would: (1) abandon sva-dharma (personal duty), (2) lose kirti (reputation/honor), and (3) accumulate papa (sin/negative karma). Non-action doesn't exempt you from consequences."
    },

    practicalApplication: "When you avoid difficult decisions, you're not avoiding consequences—you're just choosing different ones. Staying in a bad job 'to avoid change' has consequences. Not having hard conversations 'to keep peace' has consequences. There is no neutral—only different kinds of action and their results.",

    keyTerms: [
      { term: "Dharmya sangrama", meaning: "Righteous battle" },
      { term: "Kirti", meaning: "Fame, honor, reputation" },
      { term: "Papa", meaning: "Sin, negative karma" }
    ],

    themes: ["duty", "consequences", "honor", "sin"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 2,
    verse: 34,
    sanskrit: "अकीर्तिं चापि भूतानि कथयिष्यन्ति तेऽव्ययाम्।\nसम्भावितस्य चाकीर्तिर्मरणादतिरिच्यते।।",
    transliteration: "akīrtiṁ cāpi bhūtāni kathayiṣyanti te 'vyayām\nsambhāvitasya cākīrtir maraṇād atiricyate",

    translation: "People will speak of your everlasting dishonor. For one who has been honored, dishonor is worse than death.",

    explanation: {
      simple: "Krishna appeals to Arjuna's pride: 'Everyone will talk about how you fled from battle. Forever. For someone as respected as you, living with that shame would be worse than dying.' This is a practical, worldly argument—Arjuna cares about his reputation.",
      deeper: "The word 'avyayam' (everlasting) is used here for dishonor—ironic, since Krishna just used it for the soul. The implication: your body will die anyway, but the story of your cowardice will outlive you. Legacy matters to warriors. Krishna meets Arjuna where he is, using arguments that will move him."
    },

    practicalApplication: "Consider your legacy. What story will be told about how you handled challenges? Not that you should live for others' approval, but recognize that how you act in difficult moments defines you. Would you rather be remembered for courage or avoidance? For doing what's right or what's comfortable?",

    keyTerms: [
      { term: "Akirti", meaning: "Dishonor, infamy" },
      { term: "Avyayam", meaning: "Everlasting" },
      { term: "Sambhavita", meaning: "Honored, esteemed" }
    ],

    themes: ["honor", "reputation", "legacy", "courage"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 2,
    verse: 35,
    sanskrit: "भयाद्रणादुपरतं मंस्यन्ते त्वां महारथाः।\nयेषां च त्वं बहुमतो भूत्वा यास्यसि लाघवम्।।",
    transliteration: "bhayād raṇād uparataṁ maṁsyante tvāṁ mahā-rathāḥ\nyeṣāṁ ca tvaṁ bahu-mato bhūtvā yāsyasi lāghavam",

    translation: "The great warriors will think you fled from battle out of fear. Those who once held you in high esteem will look down on you.",

    explanation: {
      simple: "The great warriors on both sides—these are people who currently respect you, Arjuna—they'll think you ran away because you were scared. You'll go from being admired to being dismissed. All that respect you've earned? Gone.",
      deeper: "Krishna understands Arjuna's psychology. As a warrior prince, Arjuna has built his entire identity on valor and skill. 'Maharatha' (great warrior) is the highest military rank. Being seen as a coward by these peers would be psychologically devastating. Krishna uses this to motivate action."
    },

    practicalApplication: "The people you respect—colleagues, mentors, friends—are watching. Not to judge, but they do notice. When you face your challenges head-on, you earn their respect. When you avoid them, you lose something. Care about the opinion of people you admire, not everyone, and let that inform your courage.",

    keyTerms: [
      { term: "Bhayat", meaning: "From fear" },
      { term: "Maharatha", meaning: "Great warrior (lit. great charioteer)" },
      { term: "Bahu-mata", meaning: "Highly esteemed" },
      { term: "Laghavam", meaning: "Lightness, insignificance" }
    ],

    themes: ["fear", "respect", "reputation", "courage"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 2,
    verse: 36,
    sanskrit: "अवाच्यवादांश्च बहून्वदिष्यन्ति तवाहिताः।\nनिन्दन्तस्तव सामर्थ्यं ततो दुःखतरं नु किम्।।",
    transliteration: "avācya-vādāṁś ca bahūn vadiṣyanti tavāhitāḥ\nnindantas tava sāmarthyaṁ tato duḥkha-taraṁ nu kim",

    translation: "Your enemies will speak many unspeakable words, slandering your ability. What could be more painful than that?",

    explanation: {
      simple: "And it gets worse—your enemies will mock you mercilessly. They'll say terrible things about your capabilities, your courage, everything you've achieved. Is there anything more painful than being ridiculed by your enemies, knowing you could have proven them wrong?",
      deeper: "Krishna now shifts from 'what respected people think' to 'what enemies will say.' The Kauravas would love nothing more than to see Arjuna humiliated. His retreat would become their propaganda for generations. Sometimes the best motivation isn't inspiration but the thought of giving satisfaction to those who wish you harm."
    },

    practicalApplication: "Think of people who doubt you or wish you'd fail. Do you want to prove them right? Sometimes that thought—'I refuse to give them the satisfaction'—can be powerful motivation. Use it wisely. Not out of bitterness, but as fuel to do what you know you should do anyway.",

    keyTerms: [
      { term: "Avachya-vada", meaning: "Unspeakable words, slander" },
      { term: "Ahitah", meaning: "Enemies, ill-wishers" },
      { term: "Nindanta", meaning: "Criticizing, slandering" },
      { term: "Samarthyam", meaning: "Ability, capability" }
    ],

    themes: ["enemies", "slander", "motivation", "pride"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 2,
    verse: 37,
    sanskrit: "हतो वा प्राप्स्यसि स्वर्गं जित्वा वा भोक्ष्यसे महीम्।\nतस्मादुत्तिष्ठ कौन्तेय युद्धाय कृतनिश्चयः।।",
    transliteration: "hato vā prāpsyasi svargaṁ jitvā vā bhokṣyase mahīm\ntasmād uttiṣṭha kaunteya yuddhāya kṛta-niścayaḥ",

    translation: "If you are killed, you will attain heaven; if you win, you will enjoy the earth. Therefore, arise, O son of Kunti, and fight with determination!",

    explanation: {
      simple: "Krishna presents a win-win: Die in battle? You go to heaven. Win the battle? You get the kingdom. Either way, you win! So stop hesitating. Stand up with firm resolve and fight.",
      deeper: "This verse completes the practical argument. Krishna has used philosophy (soul is eternal), duty (this is your dharma), honor (your reputation is at stake), and now outcome (you win either way). He's addressing every possible angle of Arjuna's resistance. The phrase 'krita-nischaya' (with firm determination) indicates the shift needed—from paralysis to resolve."
    },

    practicalApplication: "When facing a difficult challenge, consider: what's the worst that could happen? Often the 'worst case' isn't that bad—and might even have its own benefits. What's the best case? Usually pretty good. When both outcomes are acceptable, there's no reason for paralysis. Decide and act.",

    keyTerms: [
      { term: "Hata", meaning: "Killed" },
      { term: "Svarga", meaning: "Heaven" },
      { term: "Jitvā", meaning: "Having conquered" },
      { term: "Krita-nischaya", meaning: "With firm determination" }
    ],

    themes: ["courage", "determination", "outcome", "action"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 2,
    verse: 38,
    sanskrit: "सुखदुःखे समे कृत्वा लाभालाभौ जयाजयौ।\nततो युद्धाय युज्यस्व नैवं पापमवाप्स्यसि।।",
    transliteration: "sukha-duḥkhe same kṛtvā lābhālābhau jayājayau\ntato yuddhāya yujyasva naivaṁ pāpam avāpsyasi",

    translation: "Treating pleasure and pain, gain and loss, victory and defeat as the same—engage in battle. Thus you will incur no sin.",

    explanation: {
      simple: "Here's the key: approach the battle without caring whether you feel pleasure or pain, whether you gain or lose, whether you win or lose. Just do your duty. When you act with this equanimity, you don't accumulate negative karma. It's not the action that binds you—it's the attachment.",
      deeper: "This verse introduces the crucial concept of 'nishkama karma' (desireless action) that will be fully developed in Chapter 3. The problem isn't action—it's acting with selfish attachment to results. When you do your duty with equanimity toward outcomes, the action becomes pure and doesn't create karmic bondage."
    },

    practicalApplication: "Before any important action, mentally release attachment to specific outcomes. Tell yourself: 'I'll do my absolute best, and accept whatever result comes.' This doesn't mean you don't care—it means you're not enslaved by caring. You act fully, but you're not destroyed by results.",

    keyTerms: [
      { term: "Sama", meaning: "Equal, balanced" },
      { term: "Labha-alabha", meaning: "Gain and loss" },
      { term: "Jaya-ajaya", meaning: "Victory and defeat" },
      { term: "Yujyasva", meaning: "Engage, be united with" }
    ],

    themes: ["equanimity", "detachment", "action", "karma"],
    difficulty: "beginner",
    famousVerse: true
  },

  // -------------------------------------------------------------------------
  // SECTION 4: INTRODUCTION TO BUDDHI YOGA (Verses 39-40)
  // Transition to the teaching of discriminative wisdom
  // -------------------------------------------------------------------------
  {
    chapter: 2,
    verse: 39,
    sanskrit: "एषा तेऽभिहिता सांख्ये बुद्धिर्योगे त्विमां शृणु।\nबुद्ध्या युक्तो यया पार्थ कर्मबन्धं प्रहास्यसि।।",
    transliteration: "eṣā te 'bhihitā sāṅkhye buddhir yoge tv imāṁ śṛṇu\nbuddhyā yukto yayā pārtha karma-bandhaṁ prahāsyasi",

    translation: "I have explained to you the wisdom of Sankhya (knowledge). Now listen to the wisdom of Yoga (action). United with this wisdom, O Arjuna, you will be free from the bondage of karma.",

    explanation: {
      simple: "Krishna says: 'Everything I've told you so far is Sankhya—the path of knowledge and understanding. Now I'll teach you Yoga—the path of action. With this wisdom, you'll be free from being bound by the consequences of your actions.'",
      deeper: "This verse marks a transition. Sankhya is analytical wisdom—understanding the soul's nature. Yoga here means Karma Yoga—the yoga of action. Krishna will show how to act in the world without creating karmic bondage. The goal is 'karma-bandha prahasyasi' (throwing off the bondage of karma)—liberation while still acting."
    },

    practicalApplication: "Knowledge and action must work together. Understanding that the soul is eternal (Sankhya) is the foundation. Acting with equanimity (Yoga) is the practice. You need both—truth without practice is academic; practice without understanding is blind. Integrate them.",

    keyTerms: [
      { term: "Sankhya", meaning: "Philosophy of knowledge and analysis" },
      { term: "Yoga", meaning: "Path of action, union" },
      { term: "Buddhi", meaning: "Wisdom, discriminative intelligence" },
      { term: "Karma-bandha", meaning: "Bondage of action/karma" }
    ],

    themes: ["knowledge", "action", "yoga", "liberation"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 2,
    verse: 40,
    sanskrit: "नेहाभिक्रमनाशोऽस्ति प्रत्यवायो न विद्यते।\nस्वल्पमप्यस्य धर्मस्य त्रायते महतो भयात्।।",
    transliteration: "nehābhikrama-nāśo 'sti pratyavāyo na vidyate\nsvalpam apy asya dharmasya trāyate mahato bhayāt",

    translation: "On this path, no effort is ever wasted and there is no failure. Even a little practice of this dharma protects one from great fear.",

    explanation: {
      simple: "Here's encouraging news: On this spiritual path, nothing you do is wasted. You can't 'fail' at this. Even small efforts count. A little practice of this teaching protects you from the greatest fear—the cycle of death and rebirth, or simply the fear of life itself.",
      deeper: "This verse is profoundly reassuring. Unlike worldly endeavors where efforts can be completely wasted, spiritual effort always accumulates. Even if you don't achieve liberation in this life, your progress carries forward. 'Mahato bhayat' (from great fear) likely refers to samsara—the cycle of repeated birth and death—the ultimate fear that spiritual practice dissolves."
    },

    practicalApplication: "Don't wait until you can practice perfectly. Start now, with whatever small effort you can manage. Five minutes of meditation counts. One moment of equanimity counts. Reading one verse of scripture counts. Every effort toward wisdom and right action accumulates. There's no wasted spiritual effort.",

    keyTerms: [
      { term: "Abhikrama", meaning: "Effort, endeavor, undertaking" },
      { term: "Pratyavaya", meaning: "Contrary result, diminution, loss" },
      { term: "Svalpam", meaning: "Very little, small" },
      { term: "Mahato bhayat", meaning: "From great fear" }
    ],

    themes: ["encouragement", "effort", "protection", "progress"],
    difficulty: "beginner",
    famousVerse: true
  },

  // -------------------------------------------------------------------------
  // SECTION 5: KARMA YOGA - FOCUSED ACTION (Verses 41-53)
  // The core teaching on how to act without attachment
  // -------------------------------------------------------------------------
  {
    chapter: 2,
    verse: 41,
    sanskrit: "व्यवसायात्मिका बुद्धिरेकेह कुरुनन्दन।\nबहुशाखा ह्यनन्ताश्च बुद्धयोऽव्यवसायिनाम्।।",
    transliteration: "vyavasāyātmikā buddhir ekeha kuru-nandana\nbahu-śākhā hy anantāś ca buddhayo 'vyavasāyinām",

    translation: "Those on this path have one-pointed determination; their aim is single. But those who lack determination have minds that are endlessly scattered in many directions.",

    explanation: {
      simple: "Successful people have one clear focus—their mind points in a single direction. But people without resolve? Their minds scatter in a million directions, chasing endless desires. One arrow aimed at the target vs. arrows flying everywhere. Which hits the mark?",
      deeper: "The word 'vyavasaya' means firm resolve or determination. The mind that's focused on a single purpose has power. The scattered mind dissipates energy across countless desires, goals, and distractions. This isn't just about action—it's about the quality of mind that makes effective action possible."
    },

    practicalApplication: "What is your one thing? When your mind scatters across dozens of goals, you achieve none well. Pick the most important aim and align your energy behind it. This doesn't mean you can't have varied interests—but you need a central organizing principle. Otherwise you're a ship without a rudder.",

    keyTerms: [
      { term: "Vyavasaya", meaning: "Determination, firm resolve" },
      { term: "Eka", meaning: "One, single" },
      { term: "Buddhi", meaning: "Intelligence, understanding" },
      { term: "Bahu-shakha", meaning: "Many-branched, scattered" }
    ],

    themes: ["focus", "determination", "mind", "purpose"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 2,
    verse: 42,
    sanskrit: "यामिमां पुष्पितां वाचं प्रवदन्त्यविपश्चितः।\nवेदवादरताः पार्थ नान्यदस्तीति वादिनः।।",
    transliteration: "yām imāṁ puṣpitāṁ vācaṁ pravadanty avipaścitaḥ\nveda-vāda-ratāḥ pārtha nānyad astīti vādinaḥ",

    translation: "The unwise speak flowery words, delighting in the letter of the Vedas, saying 'There is nothing else.'",

    explanation: {
      simple: "Some people get lost in beautiful religious words without understanding their meaning. They memorize scriptures, quote them impressively, but miss the actual point. They think following rituals perfectly is all there is. They're experts in the words, beginners in the wisdom.",
      deeper: "Krishna is critiquing ritualistic religion—people who perform elaborate ceremonies for worldly benefits (wealth, heaven, status) while missing the deeper goal of liberation. 'Pushpitam vacham' (flowery speech) describes impressive-sounding but ultimately shallow religious talk. The Gita consistently values inner transformation over external performance."
    },

    practicalApplication: "Don't confuse religious performance with spiritual growth. You can memorize every scripture, attend every ceremony, and still miss the point. Ask yourself: Is my practice transforming me? Am I becoming more peaceful, wise, and loving? Or am I just accumulating religious credentials?",

    keyTerms: [
      { term: "Pushpitam vacham", meaning: "Flowery speech, ornate words" },
      { term: "Avipashchita", meaning: "Unwise, lacking discrimination" },
      { term: "Veda-vada-rata", meaning: "Attached to Vedic rituals" }
    ],

    themes: ["wisdom", "ritual", "discernment", "spirituality"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 2,
    verse: 43,
    sanskrit: "कामात्मानः स्वर्गपरा जन्मकर्मफलप्रदाम्।\nक्रियाविशेषबहुलां भोगैश्वर्यगतिं प्रति।।",
    transliteration: "kāmātmānaḥ svarga-parā janma-karma-phala-pradām\nkriyā-viśeṣa-bahulāṁ bhogaiśvarya-gatiṁ prati",

    translation: "Full of desires, with heaven as their highest goal, they perform elaborate rituals aimed at pleasure, power, and better births—leading only to more rebirth.",

    explanation: {
      simple: "These ritualists are full of desires: they want heaven, wealth, power, and a good rebirth. So they perform complex ceremonies to get these things. But here's the problem—all this just keeps them spinning in the cycle of rebirth. They get what they want, but miss liberation.",
      deeper: "The rituals Krishna describes (karma-kanda) are not wrong—they're incomplete. They give results (better births, heavenly pleasures) but these results are temporary. The performer remains bound by karma, endlessly cycling through births. The goal should be moksha (liberation), not svarga (heaven)."
    },

    practicalApplication: "What are you really working toward? If all your efforts are aimed at better circumstances—more money, higher status, more comfort—you're on the treadmill. These things aren't bad, but if they're your ultimate goal, you'll never find lasting peace. Aim higher: inner transformation, not just outer improvement.",

    keyTerms: [
      { term: "Kamatmana", meaning: "Full of desires" },
      { term: "Svarga-para", meaning: "With heaven as the goal" },
      { term: "Bhoga-aishwarya", meaning: "Enjoyment and power" },
      { term: "Janma-karma-phala", meaning: "Results of birth and action" }
    ],

    themes: ["desire", "ritual", "rebirth", "goals"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 2,
    verse: 44,
    sanskrit: "भोगैश्वर्यप्रसक्तानां तयापहृतचेतसाम्।\nव्यवसायात्मिका बुद्धिः समाधौ न विधीयते।।",
    transliteration: "bhogaiśvarya-prasaktānāṁ tayāpahṛta-cetasām\nvyavasāyātmikā buddhiḥ samādhau na vidhīyate",

    translation: "Those who cling to pleasure and power have their minds stolen by these desires. They cannot achieve the focused determination needed for spiritual absorption.",

    explanation: {
      simple: "When your mind is obsessed with getting pleasure and power, it can't focus. The determination required for spiritual progress becomes impossible. Your attention is 'stolen' by desires—you're not in control, your wants are.",
      deeper: "The word 'apahrita-chetasam' (those whose minds are stolen) is powerful. Desire doesn't just distract us—it hijacks us. We think we're pursuing what we want, but actually our wants are driving us. This mental slavery makes 'samadhi' (spiritual absorption, deep meditation) impossible. Freedom begins with recognizing the hijacker."
    },

    practicalApplication: "Notice when desires hijack your attention. You plan to meditate, but suddenly you're checking your phone. You want to focus on important work, but get pulled into entertainment. This isn't weakness—it's the mind being 'stolen.' The first step is simply noticing when it happens, without judgment.",

    keyTerms: [
      { term: "Prasaktanam", meaning: "Attached, clinging to" },
      { term: "Apahrita-chetasam", meaning: "Those whose minds are stolen" },
      { term: "Samadhi", meaning: "Spiritual absorption, deep meditation" }
    ],

    themes: ["desire", "focus", "meditation", "mind"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 2,
    verse: 45,
    sanskrit: "त्रैगुण्यविषया वेदा निस्त्रैगुण्यो भवार्जुन।\nनिर्द्वन्द्वो नित्यसत्त्वस्थो निर्योगक्षेम आत्मवान्।।",
    transliteration: "trai-guṇya-viṣayā vedā nistrai-guṇyo bhavārjuna\nnirdvandvo nitya-sattva-stho niryoga-kṣema ātmavān",

    translation: "The Vedas deal with the three gunas (qualities of nature). Rise above these three gunas, O Arjuna. Be free from duality, ever established in purity, unconcerned with security, and centered in the Self.",

    explanation: {
      simple: "The Vedas address the material world, which operates through three qualities: sattva (purity), rajas (passion), and tamas (inertia). Rise above all three. Don't get caught in opposites like pleasure/pain, gain/loss. Stay centered in your true Self. Stop worrying about protecting what you have or getting what you don't.",
      deeper: "This is a remarkable statement—Krishna tells Arjuna to transcend even the Vedas! The point: scriptures guide us through the material world, but the goal is to transcend that world entirely. 'Nirdvandva' (beyond pairs of opposites) and 'niryoga-kshema' (unconcerned with acquisition/preservation) describe the liberated state where external circumstances no longer determine inner peace."
    },

    practicalApplication: "Notice how much mental energy you spend on 'yoga' (getting things) and 'kshema' (keeping things). This constant acquisition-protection cycle is exhausting. Practice being satisfied with what is. Not passive, but content. From this stable base, you can act effectively without being driven by anxiety.",

    keyTerms: [
      { term: "Traigunya", meaning: "Three gunas (sattva, rajas, tamas)" },
      { term: "Nirdvandva", meaning: "Beyond pairs of opposites" },
      { term: "Yoga-kshema", meaning: "Acquisition and preservation" },
      { term: "Atmavan", meaning: "Centered in the Self" }
    ],

    themes: ["transcendence", "gunas", "equanimity", "self-realization"],
    difficulty: "advanced",
    famousVerse: false
  },

  {
    chapter: 2,
    verse: 46,
    sanskrit: "यावानर्थ उदपाने सर्वतः सम्प्लुतोदके।\nतावान्सर्वेषु वेदेषु ब्राह्मणस्य विजानतः।।",
    transliteration: "yāvān artha udapāne sarvataḥ samplutodake\ntāvān sarveṣu vedeṣu brāhmaṇasya vijānataḥ",

    translation: "All the purposes served by a small well are fulfilled by a great reservoir. Similarly, all the purposes of the Vedas are fulfilled for one who knows the Supreme Truth.",

    explanation: {
      simple: "Why dig small wells when you have the ocean? The Vedas offer many benefits—heaven, wealth, good karma. But once you realize the Supreme Truth (Brahman), you have everything. It's like still carrying a cup when you own the entire river. The lesser goals become irrelevant.",
      deeper: "This analogy is profound. The Vedic rituals are like small wells—useful, but limited. Self-realization is like an infinite reservoir—it contains everything the wells offered and infinitely more. Once you taste that ocean, why obsess over the well? This doesn't reject the Vedas—it puts them in perspective."
    },

    practicalApplication: "What are the 'small wells' you're digging? Status, money, approval, security—these are wells. They have their use, but they're limited. Keep your eye on the larger truth. The specific goals you achieve matter less than the quality of consciousness you develop. The ocean of self-knowledge contains everything.",

    keyTerms: [
      { term: "Udapana", meaning: "Well, water reservoir" },
      { term: "Samplutodaka", meaning: "Water flooding everywhere, reservoir" },
      { term: "Brahmana", meaning: "One who knows Brahman (Supreme Reality)" },
      { term: "Vijanata", meaning: "One who truly knows" }
    ],

    themes: ["knowledge", "transcendence", "purpose", "realization"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 2,
    verse: 47,
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि।।",
    transliteration: "karmaṇy evādhikāras te mā phaleṣu kadācana\nmā karma-phala-hetur bhūr mā te saṅgo 'stv akarmaṇi",

    translation: "You have the right to work, but never to the fruit of work. You should never act for the sake of reward, nor should you be attached to inaction.",

    explanation: {
      simple: "This is the most famous verse in the Gita. Krishna says: Focus on doing your best work, not on what you'll get from it. When we obsess over results—promotions, praise, money—we get anxious and make poor decisions. But this doesn't mean be lazy. Do your work fully, just release attachment to outcomes.",
      deeper: "This verse introduces 'Nishkama Karma'—selfless action. The ego wants credit and reward. By releasing attachment to fruits, we free ourselves from the emotional rollercoaster of success and failure, and act from a place of clarity rather than craving. Note that Krishna also warns against 'akarman' (inaction)—detachment isn't passivity."
    },

    practicalApplication: "Before starting any task, tell yourself: 'I will do my absolute best, and then let go of what happens.' Whether it's a job interview, exam, or difficult conversation—prepare fully, execute with presence, then release. This reduces anxiety and paradoxically often leads to better results because you're not paralyzed by fear of failure.",

    keyTerms: [
      { term: "Karma", meaning: "Action, work" },
      { term: "Adhikara", meaning: "Right, authority" },
      { term: "Phala", meaning: "Fruit, result" },
      { term: "Akarma", meaning: "Inaction" },
      { term: "Sanga", meaning: "Attachment" }
    ],

    themes: ["action", "detachment", "duty", "karma-yoga", "results"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 2,
    verse: 48,
    sanskrit: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।\nसिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते।।",
    transliteration: "yoga-sthaḥ kuru karmāṇi saṅgaṁ tyaktvā dhanañjaya\nsiddhy-asiddhyoḥ samo bhūtvā samatvaṁ yoga ucyate",

    translation: "Established in yoga, perform your actions, abandoning attachment, O Arjuna. Be equal in success and failure, for such equanimity is called yoga.",

    explanation: {
      simple: "Do your work while staying centered in inner balance. Let go of attachment. Treat success and failure the same way. This evenness of mind—not getting elated by success or crushed by failure—this is what 'yoga' really means.",
      deeper: "Here Krishna defines yoga not as postures or breathing exercises, but as 'samatvam' (equanimity). The root 'yuj' means union—and this union is achieved when the mind is no longer pulled apart by reactions to outcomes. When success doesn't inflate you and failure doesn't deflate you, you're established in yoga."
    },

    practicalApplication: "After every outcome—good or bad—practice returning to center. Got the job? Feel the happiness, then return to center. Didn't get it? Feel the disappointment, then return to center. The goal isn't to suppress emotions but to not let them take you hostage. You feel, but you're not lost in feelings.",

    keyTerms: [
      { term: "Yoga-stha", meaning: "Established in yoga" },
      { term: "Siddhi-asiddhi", meaning: "Success and failure" },
      { term: "Samatvam", meaning: "Equanimity, evenness" },
      { term: "Sama", meaning: "Equal, balanced" }
    ],

    themes: ["yoga", "equanimity", "action", "detachment"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 2,
    verse: 49,
    sanskrit: "दूरेण ह्यवरं कर्म बुद्धियोगाद्धनञ्जय।\nबुद्धौ शरणमन्विच्छ कृपणाः फलहेतवः।।",
    transliteration: "dūreṇa hy avaraṁ karma buddhi-yogād dhanañjaya\nbuddhau śaraṇam anviccha kṛpaṇāḥ phala-hetavaḥ",

    translation: "Action with selfish desire is far inferior to action with equanimity, O Arjuna. Seek refuge in wisdom. Those who work only for reward are miserable.",

    explanation: {
      simple: "Work done for selfish gain is low-quality compared to work done with wisdom and equanimity. Take shelter in this understanding. People who only work for rewards are actually pitiable—they're slaves to outcomes, never at peace.",
      deeper: "The word 'kripanah' (miserable/pitiable) describes those who work only for results. They might seem successful, but they're constantly anxious about outcomes, never satisfied with what they have, always chasing the next reward. This is a poverty of spirit despite possible material wealth."
    },

    practicalApplication: "Watch people who are obsessed with rewards—they're never satisfied. The promotion leads to wanting the next promotion. The bonus leads to wanting a bigger bonus. There's no peace in this cycle. Shift your orientation: do excellent work for its own sake. The satisfaction of meaningful work well done is more valuable than any external reward.",

    keyTerms: [
      { term: "Avaram karma", meaning: "Inferior action" },
      { term: "Buddhi-yoga", meaning: "Union through wisdom/intelligence" },
      { term: "Kripanah", meaning: "Miserable, pitiable, miserly" },
      { term: "Phala-hetavah", meaning: "Those motivated by results" }
    ],

    themes: ["wisdom", "action", "reward", "misery"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 2,
    verse: 50,
    sanskrit: "बुद्धियुक्तो जहातीह उभे सुकृतदुष्कृते।\nतस्माद्योगाय युज्यस्व योगः कर्मसु कौशलम्।।",
    transliteration: "buddhi-yukto jahātīha ubhe sukṛta-duṣkṛte\ntasmād yogāya yujyasva yogaḥ karmasu kauśalam",

    translation: "One who is united with wisdom casts off both good and bad deeds in this very life. Therefore, devote yourself to yoga. Yoga is skill in action.",

    explanation: {
      simple: "The wise person transcends even the distinction between 'good' and 'bad' karma—both bind you to the cycle of rebirth. So practice yoga. And what is yoga? It's defined beautifully here: 'skill in action.' Not just doing things, but doing them with mastery and awareness.",
      deeper: "This verse contains one of the most quoted definitions of yoga: 'yogah karmasu kaushalam' (yoga is skill in action). Yoga isn't about renouncing action—it's about transforming how you act. The skilled yogi acts without creating karmic bondage, whether from 'good' deeds (leading to good rebirth) or 'bad' deeds (leading to suffering). Both are transcended."
    },

    practicalApplication: "Become a craftsman of action. Don't just get things done—master how you do them. The quality of attention you bring, the absence of anxiety, the presence in the moment—this is skill. A surgeon who operates with total presence, a teacher who teaches with full attention—this is yoga in action.",

    keyTerms: [
      { term: "Buddhi-yukta", meaning: "United with wisdom" },
      { term: "Sukrita-dushkrita", meaning: "Good and bad deeds" },
      { term: "Kaushalam", meaning: "Skill, expertise, artistry" }
    ],

    themes: ["yoga", "skill", "transcendence", "karma"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 2,
    verse: 51,
    sanskrit: "कर्मजं बुद्धियुक्ता हि फलं त्यक्त्वा मनीषिणः।\nजन्मबन्धविनिर्मुक्ताः पदं गच्छन्त्यनामयम्।।",
    transliteration: "karma-jaṁ buddhi-yuktā hi phalaṁ tyaktvā manīṣiṇaḥ\njanma-bandha-vinirmuktāḥ padaṁ gacchanty anāmayam",

    translation: "The wise, possessed of knowledge, giving up the fruits of action, are freed from the bondage of birth and attain the state beyond all suffering.",

    explanation: {
      simple: "Wise people act with full effort but let go of results. By doing this, they break free from the cycle of birth and death. They reach a state where there's no more suffering—not just less suffering, but freedom from the very possibility of suffering.",
      deeper: "This verse promises 'anāmayam padam' (the state beyond disease/suffering). The Gita sees rebirth as bondage—even 'good' rebirths eventually involve suffering. By acting without attachment to fruits, the wise don't create new karma, don't generate new births, and attain complete liberation. Action itself isn't the problem—attachment is."
    },

    practicalApplication: "Liberation isn't about escaping life—it's about how you engage with life. You can be fully active in the world and still be internally free. The key is releasing attachment to outcomes. Do your work, then let the results go. This inner freedom is available now, not just after death.",

    keyTerms: [
      { term: "Karma-jam phalam", meaning: "Fruit born of action" },
      { term: "Manishinah", meaning: "The wise, intelligent ones" },
      { term: "Janma-bandha", meaning: "Bondage of birth" },
      { term: "Anamayam", meaning: "Beyond suffering, perfect health" }
    ],

    themes: ["liberation", "wisdom", "rebirth", "freedom"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 2,
    verse: 52,
    sanskrit: "यदा ते मोहकलिलं बुद्धिर्व्यतितरिष्यति।\nतदा गन्तासि निर्वेदं श्रोतव्यस्य श्रुतस्य च।।",
    transliteration: "yadā te moha-kalilaṁ buddhir vyatitariṣyati\ntadā gantāsi nirvedaṁ śrotavyasya śrutasya ca",

    translation: "When your intellect crosses beyond the mire of delusion, then you will become indifferent to what has been heard and what is yet to be heard.",

    explanation: {
      simple: "When your understanding cuts through confusion, you'll reach a point where you're no longer impressed by teachings—whether ones you've heard before or new ones. Not because they're worthless, but because you've gone beyond the need for them. You've found what they were pointing to.",
      deeper: "This describes a spiritual maturity where even scriptures become secondary. The 'moha-kalilam' (mire of delusion) is the confusion that makes us seek external answers. Once the intellect transcends this, there's 'nirveda' (dispassion/indifference) toward teachings. Not disrespect—just no longer needing them as crutches. You've arrived."
    },

    practicalApplication: "Spiritual teachings, including this one, are like a finger pointing at the moon. At some point, you look at the moon itself, not the finger. Keep studying, keep learning, but hold teachings loosely. The goal isn't to accumulate knowledge—it's to realize the truth directly. Then the teachings have served their purpose.",

    keyTerms: [
      { term: "Moha-kalilam", meaning: "Mire of delusion" },
      { term: "Nirveda", meaning: "Dispassion, indifference" },
      { term: "Shrotavya", meaning: "What is to be heard" },
      { term: "Shruta", meaning: "What has been heard" }
    ],

    themes: ["delusion", "transcendence", "knowledge", "realization"],
    difficulty: "advanced",
    famousVerse: false
  },

  {
    chapter: 2,
    verse: 53,
    sanskrit: "श्रुतिविप्रतिपन्ना ते यदा स्थास्यति निश्चला।\nसमाधावचला बुद्धिस्तदा योगमवाप्स्यसि।।",
    transliteration: "śruti-vipratipannā te yadā sthāsyati niścalā\nsamādhāv acalā buddhis tadā yogam avāpsyasi",

    translation: "When your intellect, now bewildered by conflicting teachings, becomes steady and immovable in meditation, then you will attain yoga.",

    explanation: {
      simple: "Right now your mind is confused by different teachings that seem to contradict each other. When that mind becomes rock-steady, unshaken even in deep meditation—that's when you truly achieve yoga. Not temporary focus, but unshakeable stability.",
      deeper: "The phrase 'shruti-vipratipanna' (confused by scriptures) acknowledges that teachings can bewilder seekers. Different texts say different things. But when the intellect becomes 'nischala' (unmoving) and 'achala' (immovable) in samadhi, these apparent contradictions resolve. The still mind perceives the unity behind diverse teachings."
    },

    practicalApplication: "Don't be frustrated when spiritual teachings seem contradictory. This confusion is part of the journey. Keep practicing. As your mind stabilizes through meditation and contemplation, the apparent contradictions will resolve themselves. You'll see how different teachings point to the same truth from different angles.",

    keyTerms: [
      { term: "Shruti-vipratipanna", meaning: "Confused by scriptures/teachings" },
      { term: "Nischala", meaning: "Unmoving, steady" },
      { term: "Achala", meaning: "Immovable" },
      { term: "Samadhi", meaning: "Deep meditation, spiritual absorption" }
    ],

    themes: ["confusion", "stability", "meditation", "yoga"],
    difficulty: "intermediate",
    famousVerse: false
  },

  // -------------------------------------------------------------------------
  // SECTION 6: THE WISE PERSON (Sthitaprajna) - Verses 54-60
  // Arjuna asks what a realized person looks like; Krishna describes
  // -------------------------------------------------------------------------
  {
    chapter: 2,
    verse: 54,
    sanskrit: "अर्जुन उवाच।\nस्थितप्रज्ञस्य का भाषा समाधिस्थस्य केशव।\nस्थितधीः किं प्रभाषेत किमासीत व्रजेत किम्।।",
    transliteration: "arjuna uvāca\nsthita-prajñasya kā bhāṣā samādhi-sthasya keśava\nsthita-dhīḥ kiṁ prabhāṣeta kim āsīta vrajeta kim",

    translation: "Arjuna said: O Krishna, what are the characteristics of one who is stable in wisdom and absorbed in deep meditation? How does such a person speak? How does he sit? How does he walk?",

    explanation: {
      simple: "Arjuna asks a practical question: 'Okay, you've described this wise, realized person. But what do they actually look like? How would I recognize one? How do they talk, sit, and move through the world?'",
      deeper: "This is one of the most important questions in the Gita. Arjuna wants a practical description of 'sthitaprajna' (one with stable wisdom). What follows (verses 55-72) is Krishna's profound portrait of the realized person—their inner state and outer behavior. This becomes a map for spiritual seekers."
    },

    practicalApplication: "This is a great question to ask about any spiritual teaching: 'What does it look like in practice?' Theory is useful, but you need to know how wisdom manifests in daily life. How would a wise person handle my situation? This concrete modeling is how we learn.",

    keyTerms: [
      { term: "Sthitaprajna", meaning: "One with stable wisdom" },
      { term: "Samadhi-stha", meaning: "Established in meditation/absorption" },
      { term: "Sthita-dhi", meaning: "One with steady intellect" }
    ],

    themes: ["wisdom", "practical-spirituality", "characteristics"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 2,
    verse: 55,
    sanskrit: "श्रीभगवानुवाच।\nप्रजहाति यदा कामान्सर्वान्पार्थ मनोगतान्।\nआत्मन्येवात्मना तुष्टः स्थितप्रज्ञस्तदोच्यते।।",
    transliteration: "śrī-bhagavān uvāca\nprajahāti yadā kāmān sarvān pārtha mano-gatān\nātmany evātmanā tuṣṭaḥ sthita-prajñas tadocyate",

    translation: "The Supreme Lord said: When a person completely gives up all desires of the mind and is satisfied in the Self alone, by the Self, then they are called stable in wisdom.",

    explanation: {
      simple: "Krishna answers: A truly wise person has let go of all mental desires. They're satisfied by themselves, in themselves. They don't need external things to be happy—their happiness comes from within. This is what stable wisdom looks like.",
      deeper: "The key phrase is 'atmani eva atmana tushtah' (satisfied in the Self by the Self). The wise person's fulfillment is self-contained—not dependent on acquiring objects, achieving goals, or being treated a certain way. This isn't repression of desire; it's the natural fading of desire when the source of all happiness (the Self) is discovered within."
    },

    practicalApplication: "Ask yourself: How much of my happiness depends on external circumstances? The wise person's contentment comes from within. Start cultivating this: spend time in silence, discover the peace that exists independent of what's happening outside. The more you contact this inner source, the less you'll need from the world.",

    keyTerms: [
      { term: "Kaman", meaning: "Desires" },
      { term: "Mano-gatan", meaning: "Arising in the mind" },
      { term: "Atman", meaning: "Self" },
      { term: "Tushta", meaning: "Satisfied, content" }
    ],

    themes: ["desire", "contentment", "self-realization", "wisdom"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 2,
    verse: 56,
    sanskrit: "दुःखेष्वनुद्विग्नमनाः सुखेषु विगतस्पृहः।\nवीतरागभयक्रोधः स्थितधीर्मुनिरुच्यते।।",
    transliteration: "duḥkheṣv anudvigna-manāḥ sukheṣu vigata-spṛhaḥ\nvīta-rāga-bhaya-krodhaḥ sthita-dhīr munir ucyate",

    translation: "One whose mind is not disturbed in sorrow, who has no craving for pleasure, and who is free from attachment, fear, and anger—such a person is called a sage of steady wisdom.",

    explanation: {
      simple: "The wise person doesn't get shaken by pain or crave pleasure. They're free from three major afflictions: attachment (clinging to things), fear (of losing things or facing threats), and anger (when things don't go their way). This freedom is what makes them a true sage.",
      deeper: "Note the balance: undisturbed by sorrow AND without craving for pleasure. This isn't numbness—it's equilibrium. The three freedoms (vita-raga-bhaya-krodha) address the full range of reactive emotions: attachment to the pleasant, fear of the unpleasant, and anger when obstructed. The sage has transcended this entire mechanism."
    },

    practicalApplication: "Observe your own raga (attachment), bhaya (fear), and krodha (anger). These three drive most of human suffering. Notice what you cling to, what you fear losing, and what triggers your anger. These are maps to your attachments. As you understand them, they gradually loosen their grip.",

    keyTerms: [
      { term: "Anudvigna-mana", meaning: "Mind not disturbed" },
      { term: "Vigata-spriha", meaning: "Free from craving" },
      { term: "Raga", meaning: "Attachment" },
      { term: "Bhaya", meaning: "Fear" },
      { term: "Krodha", meaning: "Anger" },
      { term: "Muni", meaning: "Sage, silent one" }
    ],

    themes: ["equanimity", "freedom", "attachment", "fear", "anger"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 2,
    verse: 57,
    sanskrit: "यः सर्वत्रानभिस्नेहस्तत्तत्प्राप्य शुभाशुभम्।\nनाभिनन्दति न द्वेष्टि तस्य प्रज्ञा प्रतिष्ठिता।।",
    transliteration: "yaḥ sarvatrānabhisnehas tat tat prāpya śubhāśubham\nnābhinandati na dveṣṭi tasya prajñā pratiṣṭhitā",

    translation: "One who is without attachment everywhere, who neither rejoices upon receiving good nor despairs upon receiving evil—that person's wisdom is firmly established.",

    explanation: {
      simple: "The wise person isn't attached to anything. When good things happen, they don't get overly excited. When bad things happen, they don't get overly upset. This even response to life's ups and downs shows that their wisdom is rock-solid.",
      deeper: "The phrase 'anabhisneha' (without attachment) doesn't mean cold or uncaring—it means not clinging. The sage can appreciate good fortune without clinging to it, and face misfortune without being destroyed by it. Their inner state remains stable regardless of what the outer world brings. This stability is 'prajna pratishthita' (established wisdom)."
    },

    practicalApplication: "Practice neutral observation of your reactions. When something good happens, notice the excitement without drowning in it. When something bad happens, notice the disappointment without being overwhelmed. Create a slight gap between event and reaction. In that gap, wisdom grows.",

    keyTerms: [
      { term: "Anabhisneha", meaning: "Without attachment, without clinging" },
      { term: "Shubha-ashubham", meaning: "Good and bad, auspicious and inauspicious" },
      { term: "Abhinandati", meaning: "Rejoices, welcomes" },
      { term: "Dveshti", meaning: "Hates, despises" },
      { term: "Prajna pratishthita", meaning: "Wisdom firmly established" }
    ],

    themes: ["attachment", "equanimity", "wisdom", "stability"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 2,
    verse: 58,
    sanskrit: "यदा संहरते चायं कूर्मोऽङ्गानीव सर्वशः।\nइन्द्रियाणीन्द्रियार्थेभ्यस्तस्य प्रज्ञा प्रतिष्ठिता।।",
    transliteration: "yadā saṁharate cāyaṁ kūrmo 'ṅgānīva sarvaśaḥ\nindriyāṇīndriyārthebhyas tasya prajñā pratiṣṭhitā",

    translation: "When one can withdraw the senses from sense objects completely, as a tortoise withdraws its limbs into its shell, that person's wisdom is firmly established.",

    explanation: {
      simple: "Like a tortoise pulling its head and legs into its shell when threatened, the wise person can pull their senses back from external objects at will. They're not enslaved by what they see, hear, taste, smell, and touch. They have control.",
      deeper: "The tortoise analogy is beautiful—the limbs are there, they can be used, but they can also be completely withdrawn. The sage hasn't destroyed the senses; they've mastered them. This is 'pratyahara' (sense withdrawal), the fifth limb of classical yoga. It's not about never enjoying sense experiences, but having the freedom to disengage."
    },

    practicalApplication: "Practice deliberate sense withdrawal. Turn off your phone for an hour. Sit in silence. Fast for a meal. Not as punishment, but as training. The goal is freedom—the ability to engage or disengage as wisdom dictates, rather than being helplessly pulled by every notification, craving, or distraction.",

    keyTerms: [
      { term: "Kurma", meaning: "Tortoise" },
      { term: "Anga", meaning: "Limbs" },
      { term: "Indriya", meaning: "Senses" },
      { term: "Indriya-artha", meaning: "Sense objects" },
      { term: "Samharate", meaning: "Withdraws, draws in" }
    ],

    themes: ["senses", "control", "pratyahara", "wisdom"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 2,
    verse: 59,
    sanskrit: "विषया विनिवर्तन्ते निराहारस्य देहिनः।\nरसवर्जं रसोऽप्यस्य परं दृष्ट्वा निवर्तते।।",
    transliteration: "viṣayā vinivartante nirāhārasya dehinaḥ\nrasa-varjaṁ raso 'py asya paraṁ dṛṣṭvā nivartate",

    translation: "Sense objects turn away from one who abstains from feeding on them, but the taste for them remains. Even this taste disappears for one who has seen the Supreme.",

    explanation: {
      simple: "If you just force yourself to give up pleasures, the objects might leave but the desire stays. You're still craving them. But when you experience something higher—the Supreme Reality—even the taste for those old pleasures naturally fades. The craving dissolves because you've found something better.",
      deeper: "This is crucial: willpower-based renunciation leaves 'rasa' (taste/desire) intact. The celibate who secretly craves, the dieter who obsesses about food, the monk who resents his poverty—they've given up objects but not attachment. True freedom comes when something greater is experienced. Then lesser pleasures simply lose their appeal."
    },

    practicalApplication: "Don't just suppress desires—find what they're really seeking. Every craving points to a deeper need: security, love, meaning. When you connect with the source of these (through meditation, devotion, self-inquiry), the symptoms (cravings) naturally diminish. Replace, don't just repress.",

    keyTerms: [
      { term: "Vishaya", meaning: "Sense objects" },
      { term: "Nirahara", meaning: "One who abstains, one who doesn't feed" },
      { term: "Rasa", meaning: "Taste, relish, desire" },
      { term: "Param", meaning: "Supreme, higher" }
    ],

    themes: ["desire", "renunciation", "realization", "transformation"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 2,
    verse: 60,
    sanskrit: "यततो ह्यपि कौन्तेय पुरुषस्य विपश्चितः।\nइन्द्रियाणि प्रमाथीनि हरन्ति प्रसभं मनः।।",
    transliteration: "yatato hy api kaunteya puruṣasya vipaścitaḥ\nindriyāṇi pramāthīni haranti prasabhaṁ manaḥ",

    translation: "O Arjuna, the turbulent senses can forcibly carry away the mind even of a wise person who is striving for self-control.",

    explanation: {
      simple: "Krishna gives a warning: Even smart, disciplined people can be overwhelmed by their senses. The senses are powerful—they can drag away the mind by force. Don't underestimate them. Just because you're wise doesn't mean you're immune to temptation.",
      deeper: "This is important humility. The word 'prasabham' (forcibly) indicates that sense temptation isn't subtle—it can be violent, overwhelming. Even 'vipashchit' (the wise, learned one) who is 'yatata' (striving earnestly) can be overpowered. This warns against spiritual pride and complacency. The battle with the senses requires constant vigilance."
    },

    practicalApplication: "Don't overestimate your self-control. The senses are stronger than you think. Wise people arrange their environment to reduce temptation rather than relying on willpower alone. Remove junk food from your house. Limit exposure to triggering content. Create structures that support your intentions.",

    keyTerms: [
      { term: "Vipashchit", meaning: "Wise, learned" },
      { term: "Pramathini", meaning: "Turbulent, agitating, forceful" },
      { term: "Prasabham", meaning: "Forcibly, violently" },
      { term: "Haranti", meaning: "Carry away, seize" }
    ],

    themes: ["senses", "warning", "humility", "vigilance"],
    difficulty: "beginner",
    famousVerse: false
  },

  // -------------------------------------------------------------------------
  // SECTION 7: MASTERING THE SENSES (Verses 61-72)
  // The conclusion of the Sthitaprajna teaching and the chapter's finale
  // -------------------------------------------------------------------------
  {
    chapter: 2,
    verse: 61,
    sanskrit: "तानि सर्वाणि संयम्य युक्त आसीत मत्परः।\nवशे हि यस्येन्द्रियाणि तस्य प्रज्ञा प्रतिष्ठिता।।",
    transliteration: "tāni sarvāṇi saṁyamya yukta āsīta mat-paraḥ\nvaśe hi yasyendriyāṇi tasya prajñā pratiṣṭhitā",

    translation: "Having restrained all the senses, one should sit steadily with Me as the supreme goal. One whose senses are under control—that person's wisdom is firmly established.",

    explanation: {
      simple: "Control your senses, sit in meditation, and focus on the Divine as your highest goal. When your senses are truly under your control (not suppressed, but mastered), that's when wisdom becomes stable. The key: devotion to something higher than sense pleasures.",
      deeper: "The phrase 'mat-parah' (with Me as the supreme goal) introduces the element of devotion. Sense control isn't just willpower—it becomes natural when there's a higher focus. The senses quiet down when the mind is absorbed in something greater. This anticipates the Bhakti Yoga teaching in later chapters."
    },

    practicalApplication: "Pure willpower rarely works long-term. But when you have something more compelling—a purpose, a devotion, a calling—sense control becomes easier. What is your 'mat-parah' (supreme goal)? Connect daily with what matters most to you. From that connection, discipline flows naturally.",

    keyTerms: [
      { term: "Samyamya", meaning: "Having controlled, restrained" },
      { term: "Yukta", meaning: "United, disciplined, steadfast" },
      { term: "Mat-parah", meaning: "With Me (God) as the supreme goal" },
      { term: "Vashe", meaning: "Under control" }
    ],

    themes: ["senses", "control", "devotion", "meditation"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 2,
    verse: 62,
    sanskrit: "ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते।\nसङ्गात्सञ्जायते कामः कामात्क्रोधोऽभिजायते।।",
    transliteration: "dhyāyato viṣayān puṁsaḥ saṅgas teṣūpajāyate\nsaṅgāt sañjāyate kāmaḥ kāmāt krodho 'bhijāyate",

    translation: "When a person contemplates sense objects, attachment to them arises. From attachment comes desire; from desire comes anger.",

    explanation: {
      simple: "Here's how the downfall begins: You think about something pleasurable. Thinking leads to attachment. Attachment leads to desire (wanting it). And when desire is frustrated? Anger. This is the chain reaction that destroys peace.",
      deeper: "This verse maps the psychology of suffering with precision: dhyana (contemplation) → sanga (attachment) → kama (desire) → krodha (anger). The problem isn't the sense objects themselves—it's the dwelling on them. The mind creates attachment through repeated attention. This is why the sages teach: 'Watch your thoughts.'"
    },

    practicalApplication: "Notice what you dwell on mentally. That scrolling through social media, imagining possessions, fantasizing about scenarios—this isn't harmless. It builds attachment. And attachment sets you up for desire and anger. Be selective about what you allow your mind to chew on.",

    keyTerms: [
      { term: "Dhyayato", meaning: "Contemplating, thinking about" },
      { term: "Vishayan", meaning: "Sense objects" },
      { term: "Sanga", meaning: "Attachment" },
      { term: "Kama", meaning: "Desire" },
      { term: "Krodha", meaning: "Anger" }
    ],

    themes: ["psychology", "attachment", "desire", "anger", "mind"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 2,
    verse: 63,
    sanskrit: "क्रोधाद्भवति सम्मोहः सम्मोहात्स्मृतिविभ्रमः।\nस्मृतिभ्रंशाद्बुद्धिनाशो बुद्धिनाशात्प्रणश्यति।।",
    transliteration: "krodhād bhavati sammohaḥ sammohāt smṛti-vibhramaḥ\nsmṛti-bhraṁśād buddhi-nāśo buddhi-nāśāt praṇaśyati",

    translation: "From anger comes delusion; from delusion, confusion of memory; from confused memory, the destruction of reason; and when reason is destroyed, one is lost.",

    explanation: {
      simple: "The chain continues: Anger leads to delusion (you can't think clearly). Delusion confuses your memory (you forget what matters, what's true). Confused memory destroys your ability to reason. And without reason? You're completely lost. This is how one bad thought leads to total destruction.",
      deeper: "This is the complete arc of psychological destruction: krodha → sammoha → smriti-vibhrama → buddhi-nasha → pranashyati. Each step makes the next more likely. Anger clouds judgment, which distorts perception, which corrupts reason, which leads to ruin. The teaching: catch the process early, at the thought stage, before the cascade begins."
    },

    practicalApplication: "When you're very angry, notice: your thinking becomes black-and-white, you forget the other person's good qualities, you make poor decisions. This is the chain in action. Learn to recognize anger as a warning sign that your judgment is compromised. Step back before acting. Let the anger pass before making decisions.",

    keyTerms: [
      { term: "Sammoha", meaning: "Delusion, confusion" },
      { term: "Smriti-vibhrama", meaning: "Confusion of memory" },
      { term: "Buddhi-nasha", meaning: "Destruction of reason/intelligence" },
      { term: "Pranashyati", meaning: "Is completely ruined, perishes" }
    ],

    themes: ["anger", "delusion", "destruction", "psychology"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 2,
    verse: 64,
    sanskrit: "रागद्वेषवियुक्तैस्तु विषयानिन्द्रियैश्चरन्।\nआत्मवश्यैर्विधेयात्मा प्रसादमधिगच्छति।।",
    transliteration: "rāga-dveṣa-viyuktais tu viṣayān indriyaiś caran\nātma-vaśyair vidheyātmā prasādam adhigacchati",

    translation: "But a self-disciplined person, moving among sense objects with senses freed from attraction and aversion and under their own control, attains serenity.",

    explanation: {
      simple: "Here's the alternative path: You can engage with the world—you don't have to run away from it—but do so without craving (attraction) or aversion (dislike). When your senses are under your control, not the other way around, you find deep peace. Enjoy life without being enslaved by it.",
      deeper: "The key phrase is 'raga-dvesha-viyuktaih' (freed from attraction and aversion). The sage doesn't avoid sense objects—they move among them (vishayan charan). But without the pull of like and dislike. This is freedom in engagement, not freedom through avoidance. The result is 'prasada'—grace, serenity, clarity."
    },

    practicalApplication: "You don't need to renounce the world to be at peace. You need to change your relationship with it. Enjoy food without being controlled by cravings. Appreciate beauty without becoming obsessed. Use technology without being addicted. This balanced engagement is the path to serenity.",

    keyTerms: [
      { term: "Raga", meaning: "Attraction, attachment" },
      { term: "Dvesha", meaning: "Aversion, dislike" },
      { term: "Atma-vashya", meaning: "Under self-control" },
      { term: "Prasada", meaning: "Serenity, clarity, grace" }
    ],

    themes: ["equanimity", "freedom", "senses", "peace"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 2,
    verse: 65,
    sanskrit: "प्रसादे सर्वदुःखानां हानिरस्योपजायते।\nप्रसन्नचेतसो ह्याशु बुद्धिः पर्यवतिष्ठते।।",
    transliteration: "prasāde sarva-duḥkhānāṁ hānir asyopajāyate\nprasanna-cetaso hy āśu buddhiḥ paryavatiṣṭhate",

    translation: "In that serenity, all sorrow is destroyed. For the serene-minded, wisdom soon becomes firmly established.",

    explanation: {
      simple: "When you achieve that inner serenity, all your suffering dissolves. And once the mind is truly peaceful, wisdom stabilizes quickly. Peace first, then wisdom—not the other way around. You can't think clearly when agitated. Calm the mind, and clarity follows.",
      deeper: "The sequence matters: prasada (serenity) leads to duhkha-hani (destruction of sorrow) leads to buddhi-paritishthate (wisdom firmly established). This shows that peace isn't the result of wisdom—it's the condition for wisdom. The agitated mind can't perceive truth. Still the waters, and you see the bottom."
    },

    practicalApplication: "Don't try to think your way to peace—find peace first, then think. Meditation, breath work, nature, silence—use whatever works to calm your mind. From that calm state, solutions appear, wisdom arises, and right action becomes clear. The order matters.",

    keyTerms: [
      { term: "Prasada", meaning: "Serenity, peace" },
      { term: "Duhkhanam hani", meaning: "Destruction of sorrows" },
      { term: "Prasanna-chetasa", meaning: "One with a serene mind" },
      { term: "Ashau", meaning: "Quickly, soon" }
    ],

    themes: ["peace", "wisdom", "suffering", "clarity"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 2,
    verse: 66,
    sanskrit: "नास्ति बुद्धिरयुक्तस्य न चायुक्तस्य भावना।\nन चाभावयतः शान्तिरशान्तस्य कुतः सुखम्।।",
    transliteration: "nāsti buddhir ayuktasya na cāyuktasya bhāvanā\nna cābhāvayataḥ śāntir aśāntasya kutaḥ sukham",

    translation: "There is no wisdom for one who is not united (with the Self). For one without unity, there is no meditation. For one without meditation, there is no peace. And for one without peace, how can there be happiness?",

    explanation: {
      simple: "Krishna lays out a chain of cause and effect: Without being connected to your true Self, you can't have real wisdom. Without wisdom, you can't truly meditate. Without meditation, you can't have peace. And without peace, happiness is impossible. It all connects.",
      deeper: "This verse shows the necessary sequence: yoga (union with Self) → buddhi (wisdom) → bhavana (meditation/cultivation) → shanti (peace) → sukha (happiness). Each depends on the previous. Many people seek happiness directly, but happiness is the end of a chain that must start with spiritual connection. Skip the foundation, and the structure collapses."
    },

    practicalApplication: "If you're chasing happiness directly, you'll keep missing it. Work backwards: To be happy, you need peace. For peace, you need consistent meditation/practice. For effective practice, you need some wisdom. For wisdom, you need connection to something deeper than your ego. Start there.",

    keyTerms: [
      { term: "Ayukta", meaning: "One not united, uncontrolled" },
      { term: "Bhavana", meaning: "Meditation, cultivation, feeling" },
      { term: "Shanti", meaning: "Peace" },
      { term: "Sukha", meaning: "Happiness" }
    ],

    themes: ["wisdom", "meditation", "peace", "happiness", "connection"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 2,
    verse: 67,
    sanskrit: "इन्द्रियाणां हि चरतां यन्मनोऽनुविधीयते।\nतदस्य हरति प्रज्ञां वायुर्नावमिवाम्भसि।।",
    transliteration: "indriyāṇāṁ hi caratāṁ yan mano 'nuvidhīyate\ntad asya harati prajñāṁ vāyur nāvam ivāmbhasi",

    translation: "When the mind runs after the wandering senses, it carries away one's wisdom, as the wind carries away a ship on the water.",

    explanation: {
      simple: "When your mind follows your senses wherever they go—chasing every attractive sight, sound, taste—it's like a ship being blown off course by the wind. Your wisdom, your clarity, your direction—all lost. The wandering senses can completely hijack your life.",
      deeper: "The ship analogy is vivid: the ship (your wisdom/purpose) on water (life), being blown by wind (the senses/mind). A ship without control of its sails is at the mercy of the wind. Similarly, a person whose mind follows every sensory pull loses all direction. The sages teach: the mind should direct the senses, not the reverse."
    },

    practicalApplication: "Notice how sense-driven living destroys focus. You sit down to work, then check your phone, then get a snack, then notice something outside—two hours pass and nothing is accomplished. Your 'ship' went nowhere because every 'wind' pushed you around. Take control of the sails.",

    keyTerms: [
      { term: "Indriya", meaning: "Senses" },
      { term: "Charatam", meaning: "Wandering, roaming" },
      { term: "Prajna", meaning: "Wisdom" },
      { term: "Vayu", meaning: "Wind" },
      { term: "Nava", meaning: "Ship, boat" }
    ],

    themes: ["senses", "mind", "wisdom", "distraction"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 2,
    verse: 68,
    sanskrit: "तस्माद्यस्य महाबाहो निगृहीतानि सर्वशः।\nइन्द्रियाणीन्द्रियार्थेभ्यस्तस्य प्रज्ञा प्रतिष्ठिता।।",
    transliteration: "tasmād yasya mahā-bāho nigṛhītāni sarvaśaḥ\nindriyāṇīndriyārthebhyas tasya prajñā pratiṣṭhitā",

    translation: "Therefore, O mighty-armed one, whose senses are completely withdrawn from their objects—that person's wisdom is firmly established.",

    explanation: {
      simple: "Krishna concludes: Therefore, the person who has mastered their senses—who can pull them back from sense objects at will—that person's wisdom is rock-solid. Sense mastery equals wisdom stability. This is the bottom line.",
      deeper: "The word 'nigrihitani' means held back, restrained, mastered. Not destroyed, not suppressed, but under control. This is the third time Krishna uses 'prajna pratishthita' (wisdom firmly established) as the gold standard. And each time, it's connected to sense mastery. The message is clear: wisdom requires sovereignty over the senses."
    },

    practicalApplication: "Evaluate your own sense mastery. Can you stop eating when full? Can you turn off entertainment when needed? Can you resist buying things you don't need? Each small victory strengthens your 'wisdom muscles.' Each loss to temptation weakens them. Practice daily.",

    keyTerms: [
      { term: "Nigrihitani", meaning: "Held back, restrained, mastered" },
      { term: "Sarvashah", meaning: "Completely, in all ways" },
      { term: "Prajna pratishthita", meaning: "Wisdom firmly established" }
    ],

    themes: ["senses", "control", "wisdom", "mastery"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 2,
    verse: 69,
    sanskrit: "या निशा सर्वभूतानां तस्यां जागर्ति संयमी।\nयस्यां जाग्रति भूतानि सा निशा पश्यतो मुनेः।।",
    transliteration: "yā niśā sarva-bhūtānāṁ tasyāṁ jāgarti saṁyamī\nyasyāṁ jāgrati bhūtāni sā niśā paśyato muneḥ",

    translation: "What is night for all beings is the time of awakening for the self-controlled. And what is the time of awakening for all beings is night for the seeing sage.",

    explanation: {
      simple: "The wise person is awake to what others sleep through, and asleep to what keeps others awake. While most people are 'asleep' to spiritual reality and 'awake' to worldly pursuits, the sage is the opposite—fully alive to truth, unmoved by what excites the masses.",
      deeper: "This is a profound statement about different levels of consciousness. The worldly person is 'awake' to sense pleasures, status, possessions—but 'asleep' to the Self, to eternal truth. The sage is 'awake' to what's real and permanent, 'asleep' to what's unreal and temporary. They live in different worlds while walking the same earth."
    },

    practicalApplication: "What are you 'awake' to? What occupies your attention, keeps you up at night, gets you excited? For most people, it's career, money, relationships, entertainment. The sage is awake to something deeper. Consider: what would it mean to 'wake up' to what the sage sees? What would fade in importance?",

    keyTerms: [
      { term: "Nisha", meaning: "Night" },
      { term: "Jagarti", meaning: "Is awake" },
      { term: "Samyami", meaning: "Self-controlled person" },
      { term: "Muni", meaning: "Sage" },
      { term: "Pashyatah", meaning: "One who sees" }
    ],

    themes: ["wisdom", "awareness", "perspective", "consciousness"],
    difficulty: "intermediate",
    famousVerse: true
  },

  {
    chapter: 2,
    verse: 70,
    sanskrit: "आपूर्यमाणमचलप्रतिष्ठं समुद्रमापः प्रविशन्ति यद्वत्।\nतद्वत्कामा यं प्रविशन्ति सर्वे स शान्तिमाप्नोति न कामकामी।।",
    transliteration: "āpūryamāṇam acala-pratiṣṭhaṁ samudram āpaḥ praviśanti yadvat\ntadvat kāmā yaṁ praviśanti sarve sa śāntim āpnoti na kāma-kāmī",

    translation: "Just as the ocean remains calm and unmoved though rivers flow into it from all sides, so the person into whom all desires flow without disturbing remains at peace—not one who strives to satisfy desires.",

    explanation: {
      simple: "Picture the ocean: countless rivers pour into it constantly, yet it stays perfectly still, unchanged. The wise person is like that—desires and experiences flow into them, but they remain undisturbed, peaceful. They don't chase desires; they let them come and go. That's the secret to peace.",
      deeper: "This is one of the Gita's most beautiful images. The ocean (samudra) is 'acala-pratishtha' (firmly established, unmoving). Rivers don't disturb it because it's so vast and deep. Similarly, the sage's consciousness is so expanded that desires entering are like rivers meeting the ocean—they lose their force, get absorbed, cause no ripple. The desire-chaser (kama-kami) can never achieve this peace."
    },

    practicalApplication: "Become like the ocean. When desires arise—and they will—don't chase them and don't fight them. Let them flow into your awareness like rivers into the sea. Watch them come, watch them dissolve. The more spacious your awareness becomes, the less any single desire can disturb you. This is true peace.",

    keyTerms: [
      { term: "Samudra", meaning: "Ocean" },
      { term: "Acala-pratishtha", meaning: "Firmly established, unmoving" },
      { term: "Apah", meaning: "Waters, rivers" },
      { term: "Kama", meaning: "Desires" },
      { term: "Kama-kami", meaning: "One who desires desires, one who chases desires" }
    ],

    themes: ["peace", "desire", "equanimity", "consciousness"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 2,
    verse: 71,
    sanskrit: "विहाय कामान्यः सर्वान्पुमांश्चरति निःस्पृहः।\nनिर्ममो निरहङ्कारः स शान्तिमधिगच्छति।।",
    transliteration: "vihāya kāmān yaḥ sarvān pumāṁś carati niḥspṛhaḥ\nnirmamo nirahaṅkāraḥ sa śāntim adhigacchati",

    translation: "One who has abandoned all desires and moves about without craving, without any sense of 'mine' and without ego—that person attains peace.",

    explanation: {
      simple: "The person who has given up all selfish desires, who has no craving, no possessiveness ('this is mine'), and no ego ('I am great')—that person finds real peace. These are the three things you need to let go of: desire, possessiveness, and ego. Drop them, and peace is yours.",
      deeper: "Three conditions for peace: nihspriha (without craving), nirmama (without 'mine-ness'), and nirahamkara (without ego). These correspond to desire, attachment, and identification. The ego creates the sense of a separate self that desires and claims ownership. When the ego dissolves, what's left is peace—not acquired, but revealed."
    },

    practicalApplication: "Examine these three in yourself: What do you crave? What do you claim as 'mine' (possessions, relationships, reputation, ideas)? What does your ego need to maintain (being right, being respected, being special)? Each attachment is a point of vulnerability. Loosening these grips brings freedom.",

    keyTerms: [
      { term: "Nihspriha", meaning: "Without craving" },
      { term: "Nirmama", meaning: "Without mine-ness, without possessiveness" },
      { term: "Nirahamkara", meaning: "Without ego, without I-ness" },
      { term: "Shanti", meaning: "Peace" }
    ],

    themes: ["desire", "ego", "peace", "freedom"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 2,
    verse: 72,
    sanskrit: "एषा ब्राह्मी स्थितिः पार्थ नैनां प्राप्य विमुह्यति।\nस्थित्वास्यामन्तकालेऽपि ब्रह्मनिर्वाणमृच्छति।।",
    transliteration: "eṣā brāhmī sthitiḥ pārtha naināṁ prāpya vimuhyati\nsthitvāsyām anta-kāle 'pi brahma-nirvāṇam ṛcchati",

    translation: "This is the state of realization, O Arjuna. Having attained this, one is never again deluded. Being established in this even at the hour of death, one attains liberation in Brahman.",

    explanation: {
      simple: "This is it—the ultimate state. Once you achieve this realization, you're never confused again. And if you're in this state when you die, you attain complete liberation, union with the Absolute. This is the goal of all spiritual practice. Krishna has now given Arjuna the complete teaching.",
      deeper: "The chapter concludes with 'Brahmi sthiti' (established in Brahman). The one who attains this is beyond delusion (vimuhyati). And even at 'anta-kale' (the final moment, death), they achieve 'Brahma-nirvana' (liberation in the Absolute). The teaching is complete: from Arjuna's despair to the vision of ultimate freedom."
    },

    practicalApplication: "The goal isn't just peace in easy times, but peace in all times—including death. How you live shapes how you die. Practice equanimity now, in small things, so it becomes your nature. When the final test comes, you'll be ready. Everything Krishna has taught points to this: a state of unshakeable peace that survives even death.",

    keyTerms: [
      { term: "Brahmi sthiti", meaning: "Established in Brahman, state of God-realization" },
      { term: "Vimuhyati", meaning: "Is deluded, confused" },
      { term: "Anta-kale", meaning: "At the end time, at death" },
      { term: "Brahma-nirvana", meaning: "Liberation in the Absolute" }
    ],

    themes: ["liberation", "death", "realization", "ultimate-peace"],
    difficulty: "intermediate",
    famousVerse: true
  }
];

// Chapter metadata
const chapter2: ChapterContent = {
  chapter: 2,
  name: {
    sanskrit: "Sankhya Yoga",
    english: "The Eternal Soul"
  },
  summary: "This is the most important chapter of the Gita—it contains the essence of the entire teaching. Arjuna is paralyzed by grief and confusion. Krishna begins by teaching the eternal nature of the soul: it cannot be killed, it was never born, and it will never die. He then introduces the core concepts of Karma Yoga (selfless action), detachment from results, and the characteristics of a wise person. This chapter is foundational—understand it well, and the rest of the Gita becomes clear.",
  keyThemes: ["soul", "immortality", "duty", "detachment", "equanimity", "wisdom"],
  verseCount: 72,
  verses: verses
};

export default chapter2;
