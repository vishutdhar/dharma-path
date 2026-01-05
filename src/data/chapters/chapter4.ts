// =============================================================================
// CHAPTER 4: JNANA KARMA SANYASA YOGA - THE YOGA OF KNOWLEDGE AND ACTION
// =============================================================================
// Krishna reveals the ancient teaching lineage, explains his divine incarnations,
// and shows how knowledge transforms action. The chapter culminates in declaring
// knowledge as the supreme purifier that burns all karma to ashes.
// 42 verses covering: divine lineage, avatar doctrine, action/inaction, types of
// sacrifice, and the supreme power of knowledge.
// =============================================================================

import { VerseContent, ChapterContent } from '../verseTemplate';

const verses: VerseContent[] = [
  // -------------------------------------------------------------------------
  // SECTION 1: THE ETERNAL TEACHING LINEAGE (Verses 1-3)
  // This wisdom has been passed down through ages
  // -------------------------------------------------------------------------
  {
    chapter: 4,
    verse: 1,
    sanskrit: "श्रीभगवानुवाच।\nइमं विवस्वते योगं प्रोक्तवानहमव्ययम्।\nविवस्वान्मनवे प्राह मनुरिक्ष्वाकवेऽब्रवीत्।।",
    transliteration: "śrī-bhagavān uvāca\nimaṁ vivasvate yogaṁ proktavān aham avyayam\nvivasvān manave prāha manur ikṣvākave 'bravīt",

    translation: "The Supreme Lord said: I taught this imperishable yoga to Vivasvan (the sun god), who taught it to Manu, who taught it to Ikshvaku.",

    explanation: {
      simple: "Krishna reveals something astonishing: this teaching isn't new—he taught it at the beginning of creation to the sun god, who passed it to Manu (the first human), who passed it to King Ikshvaku. This wisdom is as old as humanity itself.",
      deeper: "This establishes 'parampara'—the sacred lineage of teacher to student. The teaching is 'avyaya' (imperishable, unchanging)—truth doesn't change with time. By tracing it to the sun god and through royal sages, Krishna shows this isn't sectarian philosophy but universal wisdom meant for leaders who guide humanity."
    },

    practicalApplication: "You're receiving wisdom that has been tested across thousands of years and countless lives. This isn't someone's opinion or a new self-help trend—it's perennial truth. Approach it with the respect due to something that has guided humanity since the beginning.",

    keyTerms: [
      { term: "Yoga", meaning: "Union, the path of spiritual practice" },
      { term: "Avyaya", meaning: "Imperishable, unchanging" },
      { term: "Vivasvan", meaning: "The sun god" },
      { term: "Manu", meaning: "The first human, progenitor of mankind" },
      { term: "Ikshvaku", meaning: "Ancient king, ancestor of Lord Rama" }
    ],

    themes: ["lineage", "tradition", "eternal-wisdom", "transmission"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 4,
    verse: 2,
    sanskrit: "एवं परम्पराप्राप्तमिमं राजर्षयो विदुः।\nस कालेनेह महता योगो नष्टः परन्तप।।",
    transliteration: "evaṁ paramparā-prāptam imaṁ rājarṣayo viduḥ\nsa kāleneha mahatā yogo naṣṭaḥ parantapa",

    translation: "Thus received through the chain of succession, the royal sages knew this yoga. But over a long course of time, O Arjuna, this yoga was lost.",

    explanation: {
      simple: "This knowledge was passed down through generations of wise kings who both ruled and practiced spirituality. But over vast stretches of time, the teaching became corrupted or lost. What Arjuna is hearing is a restoration of something ancient.",
      deeper: "'Rajarshi' (royal sage) indicates this wasn't just for monks but for active leaders. The teaching gets lost ('nashta') not by destruction but by corruption—additions, subtractions, misinterpretations accumulate until the original meaning is obscured. Each age needs the teaching to be renewed."
    },

    practicalApplication: "Truth needs to be rediscovered in every generation. The original insight gets buried under interpretations, rituals, and institutions. When something feels like profound truth to you, you may be recovering something your soul has always known but forgotten.",

    keyTerms: [
      { term: "Parampara", meaning: "Succession, lineage, tradition" },
      { term: "Rajarshi", meaning: "Royal sage, king who is also a sage" },
      { term: "Kala", meaning: "Time" },
      { term: "Nashta", meaning: "Lost, destroyed" }
    ],

    themes: ["lineage", "loss", "time", "restoration"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 4,
    verse: 3,
    sanskrit: "स एवायं मया तेऽद्य योगः प्रोक्तः पुरातनः।\nभक्तोऽसि मे सखा चेति रहस्यं ह्येतदुत्तमम्।।",
    transliteration: "sa evāyaṁ mayā te 'dya yogaḥ proktaḥ purātanaḥ\nbhakto 'si me sakhā ceti rahasyaṁ hy etad uttamam",

    translation: "That same ancient yoga is today being taught by Me to you, because you are My devotee and friend. This is the supreme secret.",

    explanation: {
      simple: "Krishna tells Arjuna: 'I'm teaching you the exact same wisdom I taught at the beginning of creation. Why you? Because you're my devotee and my friend. This is the highest secret, and I'm sharing it with you personally.'",
      deeper: "Two qualifications receive the teaching: 'bhakta' (devotee—having love and faith) and 'sakha' (friend—having intimacy and trust). The teaching is 'rahasya' (secret) not because it's hidden, but because it can only be received by a prepared heart. The unprepared hear the words but miss the meaning."
    },

    practicalApplication: "The deepest truths aren't just intellectual—they require a relationship. You can read the Gita as literature and get nothing. Or you can approach it as Arjuna did: with devotion, friendship, and genuine need. The teaching reveals itself to the degree you're open to receive it.",

    keyTerms: [
      { term: "Puratana", meaning: "Ancient" },
      { term: "Bhakta", meaning: "Devotee" },
      { term: "Sakha", meaning: "Friend" },
      { term: "Rahasya", meaning: "Secret, mystery" },
      { term: "Uttama", meaning: "Supreme, highest" }
    ],

    themes: ["friendship", "devotion", "secret", "transmission"],
    difficulty: "beginner",
    famousVerse: true
  },

  // -------------------------------------------------------------------------
  // SECTION 2: KRISHNA'S DIVINE INCARNATIONS (Verses 4-10)
  // The avatar doctrine - God descends to restore dharma
  // -------------------------------------------------------------------------
  {
    chapter: 4,
    verse: 4,
    sanskrit: "अर्जुन उवाच।\nअपरं भवतो जन्म परं जन्म विवस्वतः।\nकथमेतद्विजानीयां त्वमादौ प्रोक्तवानिति।।",
    transliteration: "arjuna uvāca\naparaṁ bhavato janma paraṁ janma vivasvataḥ\nkatham etad vijānīyāṁ tvam ādau proktavān iti",

    translation: "Arjuna said: Your birth was recent, but Vivasvan's birth was in the distant past. How am I to understand that You taught this in the beginning?",

    explanation: {
      simple: "Arjuna raises an obvious question: 'Wait—you're my age, but the sun god existed at the beginning of creation. How could you have taught him? That was millions of years ago and you were born recently. Please explain.'",
      deeper: "Arjuna isn't doubting Krishna—he's asking for clarification on what sounds impossible. This question sets up Krishna's revelation about his divine nature: that he's not just a human prince but the eternal Lord who takes birth by his own will across countless ages."
    },

    practicalApplication: "Don't be afraid to ask questions that seem naive. Arjuna could have just nodded along, but his honest confusion led to one of the Gita's most important revelations. When something doesn't make sense, ask. Understanding comes through genuine inquiry.",

    keyTerms: [
      { term: "Aparam", meaning: "Later, recent" },
      { term: "Param", meaning: "Earlier, ancient" },
      { term: "Janma", meaning: "Birth" },
      { term: "Adi", meaning: "Beginning" }
    ],

    themes: ["questioning", "time", "incarnation", "inquiry"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 4,
    verse: 5,
    sanskrit: "श्रीभगवानुवाच।\nबहूनि मे व्यतीतानि जन्मानि तव चार्जुन।\nतान्यहं वेद सर्वाणि न त्वं वेत्थ परन्तप।।",
    transliteration: "śrī-bhagavān uvāca\nbahūni me vyatītāni janmāni tava cārjuna\ntāny ahaṁ veda sarvāṇi na tvaṁ vettha parantapa",

    translation: "The Supreme Lord said: Many births of Mine have passed, and many of yours too, O Arjuna. I remember them all, but you do not.",

    explanation: {
      simple: "Krishna's answer is stunning: 'Both of us have had many, many births. The difference? I remember all of them—mine and yours. You've forgotten yours.' This reveals Krishna's divine consciousness that spans all time.",
      deeper: "This verse establishes reincarnation and the difference between divine and human consciousness. The jiva (individual soul) forgets past lives due to the veil of maya. The Lord, being the eternal witness, remembers all. Krishna isn't claiming memory of just his births, but Arjuna's too—he is the consciousness in which all experience occurs."
    },

    practicalApplication: "You've lived before. Your deep attractions, inexplicable fears, natural talents, and soul connections may echo from lives you can't consciously remember. While you can't access those memories, someone does—the eternal witness within you. You are not your current biography.",

    keyTerms: [
      { term: "Bahuni janmani", meaning: "Many births" },
      { term: "Vyatitani", meaning: "Have passed" },
      { term: "Veda", meaning: "Know, remember" },
      { term: "Vettha", meaning: "You know" }
    ],

    themes: ["reincarnation", "memory", "divine-consciousness", "time"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 4,
    verse: 6,
    sanskrit: "अजोऽपि सन्नव्ययात्मा भूतानामीश्वरोऽपि सन्।\nप्रकृतिं स्वामधिष्ठाय सम्भवाम्यात्ममायया।।",
    transliteration: "ajo 'pi sann avyayātmā bhūtānām īśvaro 'pi san\nprakṛtiṁ svām adhiṣṭhāya sambhavāmy ātma-māyayā",

    translation: "Though I am unborn and imperishable, though I am the Lord of all beings, I manifest through My own nature by My own divine power.",

    explanation: {
      simple: "Krishna explains: 'I'm not born like you—I'm actually unborn, eternal, the Lord of everything. But I appear to take birth using my own energy (maya). My birth is not forced by karma like yours; it's a voluntary appearance.'",
      deeper: "This is the theology of avatar: unlike the jiva who is forced to incarnate by karma, Ishvara incarnates by free choice (sva-maya). He's 'aja' (unborn) yet 'sambhavami' (I manifest). His body isn't made of material prakriti but of his own divine nature (sva-prakriti). The incarnation is real but not binding—like an actor who plays a role without becoming the character."
    },

    practicalApplication: "The Divine doesn't just watch from afar—it enters the world. God isn't absent from your struggles; the Divine appears whenever and wherever there's genuine need. This makes the world not a prison to escape but a place where the sacred manifests.",

    keyTerms: [
      { term: "Aja", meaning: "Unborn" },
      { term: "Avyaya", meaning: "Imperishable" },
      { term: "Ishvara", meaning: "Lord, controller" },
      { term: "Prakriti", meaning: "Nature" },
      { term: "Maya", meaning: "Divine power, creative energy" },
      { term: "Sambhavami", meaning: "I manifest, I appear" }
    ],

    themes: ["incarnation", "divine-nature", "maya", "avatar"],
    difficulty: "intermediate",
    famousVerse: true
  },

  {
    chapter: 4,
    verse: 7,
    sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्।।",
    transliteration: "yadā yadā hi dharmasya glānir bhavati bhārata\nabhyutthānam adharmasya tadātmānaṁ sṛjāmy aham",

    translation: "Whenever there is a decline of dharma and rise of adharma, O Arjuna, then I manifest Myself.",

    explanation: {
      simple: "This is one of the most famous verses in the Gita: Whenever righteousness declines and evil rises, I appear. It's a cosmic promise—darkness is never permanent because the Divine intervenes when things go too far wrong.",
      deeper: "'Yada yada' (whenever) indicates this isn't a one-time event but a recurring pattern. 'Glani' suggests not just decline but exhaustion, weakness of dharma. The avatar doesn't come when there's minor trouble but when dharma is genuinely threatened. History is not random—it has a self-correcting mechanism."
    },

    practicalApplication: "In dark times—personal or global—remember this promise. When corruption seems total and good people seem powerless, something shifts. Help comes. This doesn't mean passivity—Arjuna still had to fight. But it means you're never alone in the battle for what's right.",

    keyTerms: [
      { term: "Dharma", meaning: "Righteousness, cosmic order, duty" },
      { term: "Adharma", meaning: "Unrighteousness, disorder" },
      { term: "Glani", meaning: "Decline, exhaustion" },
      { term: "Abhyutthana", meaning: "Rise, increase" },
      { term: "Srijami", meaning: "I create, I manifest" }
    ],

    themes: ["avatar", "dharma", "divine-intervention", "hope"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 4,
    verse: 8,
    sanskrit: "परित्राणाय साधूनां विनाशाय च दुष्कृताम्।\nधर्मसंस्थापनार्थाय सम्भवामि युगे युगे।।",
    transliteration: "paritrāṇāya sādhūnāṁ vināśāya ca duṣkṛtām\ndharma-saṁsthāpanārthāya sambhavāmi yuge yuge",

    translation: "To protect the good, to destroy the wicked, and to establish dharma, I appear age after age.",

    explanation: {
      simple: "Krishna explains the three purposes of his incarnations: protect the virtuous, destroy the evil, and re-establish dharma. And this happens 'yuge yuge'—in every age, repeatedly throughout time. The Divine is actively involved in the moral arc of history.",
      deeper: "The three purposes are interrelated: protecting the righteous and removing the wicked are means to the ultimate goal—'dharma-samsthapana' (establishing dharma). 'Yuge yuge' suggests cyclical time—in each world age (yuga), when the cycle of decline reaches critical mass, restoration comes. The Divine doesn't abandon creation."
    },

    practicalApplication: "You're not alone in your commitment to what's right. When you stand for dharma, you're aligned with a force that has been protecting the good and opposing evil since time began. The universe is not morally indifferent—it bends toward dharma, and you can be part of that bending.",

    keyTerms: [
      { term: "Paritrana", meaning: "Protection, deliverance" },
      { term: "Sadhu", meaning: "Good people, saints" },
      { term: "Vinasha", meaning: "Destruction" },
      { term: "Dushkrita", meaning: "Evil-doers, wicked" },
      { term: "Samsthapana", meaning: "Establishment, restoration" },
      { term: "Yuge yuge", meaning: "Age after age" }
    ],

    themes: ["protection", "justice", "dharma", "cycles"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 4,
    verse: 9,
    sanskrit: "जन्म कर्म च मे दिव्यमेवं यो वेत्ति तत्त्वतः।\nत्यक्त्वा देहं पुनर्जन्म नैति मामेति सोऽर्जुन।।",
    transliteration: "janma karma ca me divyam evaṁ yo vetti tattvataḥ\ntyaktvā dehaṁ punar janma naiti mām eti so 'rjuna",

    translation: "One who truly knows the divine nature of My birth and actions, upon leaving the body, is not reborn but comes to Me, O Arjuna.",

    explanation: {
      simple: "Here's the fruit of understanding: whoever truly grasps the divine nature of Krishna's births and actions won't be reborn again. After death, they go directly to Krishna—liberation. Just understanding this teaching properly leads to freedom.",
      deeper: "'Tattvata' (in truth, in essence) is key—superficial knowledge doesn't liberate. One must understand 'why' Krishna incarnates, 'how' it differs from ordinary birth, and what it reveals about the nature of reality. This isn't intellectual belief but realized knowledge that transforms one's entire being. Such a person dies without any remaining pull toward rebirth."
    },

    practicalApplication: "Liberation isn't earned only through years of meditation—right understanding itself liberates. If you truly grasp that the Divine is present in the world, actively involved in the victory of good, and accessible to those who approach with devotion, something in you shifts. That shift is the beginning of freedom.",

    keyTerms: [
      { term: "Divya", meaning: "Divine, transcendental" },
      { term: "Tattvata", meaning: "In truth, in essence" },
      { term: "Punar janma", meaning: "Rebirth" },
      { term: "Mam eti", meaning: "Comes to Me" }
    ],

    themes: ["knowledge", "liberation", "incarnation", "freedom"],
    difficulty: "intermediate",
    famousVerse: true
  },

  {
    chapter: 4,
    verse: 10,
    sanskrit: "वीतरागभयक्रोधा मन्मया मामुपाश्रिताः।\nबहवो ज्ञानतपसा पूता मद्भावमागताः।।",
    transliteration: "vīta-rāga-bhaya-krodhā man-mayā mām upāśritāḥ\nbahavo jñāna-tapasā pūtā mad-bhāvam āgatāḥ",

    translation: "Free from attachment, fear, and anger, absorbed in Me, taking refuge in Me, purified by the fire of knowledge—many have attained My nature.",

    explanation: {
      simple: "Many people have already achieved liberation this way. How? By becoming free from attachment, fear, and anger; by absorbing their minds in Krishna; by taking refuge in him; and by being purified through wisdom. It's been done before—it can be done.",
      deeper: "The verse lists the process: first 'vita-raga-bhaya-krodha' (freedom from the emotional triad of craving, fear, and anger), then 'man-maya' (absorbed in the Divine), then 'mam upashrita' (surrendered), then 'jnana-tapas' (the austerity of knowledge). The result is 'mad-bhava' (attaining the Divine's own nature). 'Bahava' (many) assures us this isn't for rare souls only."
    },

    practicalApplication: "You're not attempting the impossible. Many have walked this path successfully. The requirements are clear: release attachment, fear, and anger; focus on the Divine; surrender; pursue wisdom. These are doable practices, not superhuman feats. The path is proven.",

    keyTerms: [
      { term: "Vita-raga", meaning: "Free from attachment" },
      { term: "Bhaya", meaning: "Fear" },
      { term: "Krodha", meaning: "Anger" },
      { term: "Man-maya", meaning: "Absorbed in Me" },
      { term: "Jnana-tapas", meaning: "Austerity of knowledge" },
      { term: "Mad-bhava", meaning: "My nature, divine state" }
    ],

    themes: ["liberation", "purification", "knowledge", "attainment"],
    difficulty: "intermediate",
    famousVerse: false
  },

  // -------------------------------------------------------------------------
  // SECTION 3: ALL PATHS LEAD TO KRISHNA (Verses 11-15)
  // However people approach the Divine, the Divine responds
  // -------------------------------------------------------------------------
  {
    chapter: 4,
    verse: 11,
    sanskrit: "ये यथा मां प्रपद्यन्ते तांस्तथैव भजाम्यहम्।\nमम वर्त्मानुवर्तन्ते मनुष्याः पार्थ सर्वशः।।",
    transliteration: "ye yathā māṁ prapadyante tāṁs tathaiva bhajāmy aham\nmama vartmānuvartante manuṣyāḥ pārtha sarvaśaḥ",

    translation: "In whatever way people approach Me, I reciprocate accordingly. All paths, O Arjuna, lead to Me.",

    explanation: {
      simple: "One of the Gita's most inclusive statements: However you approach the Divine, that's how the Divine responds. All paths ultimately lead to the same destination. The form you choose, the name you use, the method you follow—all are valid approaches to the One.",
      deeper: "'Ye yatha...tams tathaiva' (as they approach...so I respond) establishes divine reciprocity. God doesn't impose a single form but responds to the devotee's approach. 'Mama vartma anuvartante' (all follow my path) means that even when people think they're following different paths, they're ultimately moving toward the same goal. Religious diversity is not a problem but the natural expression of the One through many forms."
    },

    practicalApplication: "Stop worrying about whether your spiritual approach is the 'right' one. The Divine meets you where you are. If you approach through devotion, knowledge, service, or meditation—each is valid. What matters is sincerity, not the particular form. All rivers reach the ocean.",

    keyTerms: [
      { term: "Prapadyante", meaning: "Approach, surrender to" },
      { term: "Bhajami", meaning: "I reciprocate, I worship in return" },
      { term: "Vartma", meaning: "Path" },
      { term: "Anuvartante", meaning: "Follow" }
    ],

    themes: ["inclusivism", "paths", "reciprocity", "universalism"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 4,
    verse: 12,
    sanskrit: "काङ्क्षन्तः कर्मणां सिद्धिं यजन्त इह देवताः।\nक्षिप्रं हि मानुषे लोके सिद्धिर्भवति कर्मजा।।",
    transliteration: "kāṅkṣantaḥ karmaṇāṁ siddhiṁ yajanta iha devatāḥ\nkṣipraṁ hi mānuṣe loke siddhir bhavati karma-jā",

    translation: "Those who desire success in their actions worship the gods here. Success from action comes quickly in the human world.",

    explanation: {
      simple: "People who want quick results from their actions worship various gods. And it works—in the human world, karma produces results fast. You act, you get results. That's why most people are focused on action-for-results rather than liberation.",
      deeper: "This verse explains why most people don't pursue liberation: karma-phala (fruits of action) come quickly in the human realm, while liberation seems distant and abstract. Worshipping devas (gods governing various domains) brings material success faster than pursuing the transcendent. This isn't criticized—it's acknowledged as a legitimate stage—but Krishna will show there's something higher."
    },

    practicalApplication: "It's natural to want results now. Material goals feel urgent; spiritual liberation feels abstract. Acknowledge this tendency without judgment. Most spiritual journeys begin with seeking material benefits. The question is whether you'll stop there or eventually ask: 'Is there something beyond success and failure?'",

    keyTerms: [
      { term: "Kankshanta", meaning: "Desiring" },
      { term: "Siddhi", meaning: "Success, perfection" },
      { term: "Devata", meaning: "Gods, deities" },
      { term: "Kshipram", meaning: "Quickly" },
      { term: "Karma-ja", meaning: "Born of action" }
    ],

    themes: ["desire", "action", "results", "worship"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 4,
    verse: 13,
    sanskrit: "चातुर्वर्ण्यं मया सृष्टं गुणकर्मविभागशः।\nतस्य कर्तारमपि मां विद्ध्यकर्तारमव्ययम्।।",
    transliteration: "cātur-varṇyaṁ mayā sṛṣṭaṁ guṇa-karma-vibhāgaśaḥ\ntasya kartāram api māṁ viddhy akartāram avyayam",

    translation: "The four divisions of human society were created by Me according to qualities and work. Though I am the creator of this system, know Me to be the non-doer and imperishable.",

    explanation: {
      simple: "Krishna says he created the four types of people based on their qualities (gunas) and actions (karma)—not birth. But even though he created this system, he remains unattached to it, unchanged by it. The creator transcends his creation.",
      deeper: "This verse is often misused to justify caste by birth. But 'guna-karma-vibhagasha' clearly states the division is by qualities and actions, not by birth. The four varnas describe natural human temperaments: teachers/priests (brahmin), warriors/leaders (kshatriya), merchants/farmers (vaishya), and service workers (shudra). The deeper teaching: even God, though acting, is not bound by action—'kartaram api akartaram' (the doer yet non-doer)."
    },

    practicalApplication: "Your role in society should match your nature and skills, not just your family background. What are your actual qualities? What work naturally fits you? Additionally, learn from Krishna's example: you can act without being bound by action. Create without being defined by your creations.",

    keyTerms: [
      { term: "Chatur-varnya", meaning: "Four divisions, four types" },
      { term: "Guna", meaning: "Qualities" },
      { term: "Karma", meaning: "Work, action" },
      { term: "Vibhaga", meaning: "Division" },
      { term: "Karta", meaning: "Doer" },
      { term: "Akarta", meaning: "Non-doer" }
    ],

    themes: ["social-order", "qualities", "action", "transcendence"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 4,
    verse: 14,
    sanskrit: "न मां कर्माणि लिम्पन्ति न मे कर्मफले स्पृहा।\nइति मां योऽभिजानाति कर्मभिर्न स बध्यते।।",
    transliteration: "na māṁ karmāṇi limpanti na me karma-phale spṛhā\niti māṁ yo 'bhijānāti karmabhir na sa badhyate",

    translation: "Actions do not taint Me, nor do I have desire for their fruits. One who knows Me thus is not bound by actions.",

    explanation: {
      simple: "Even though Krishna creates and acts, actions don't stick to him, and he has no craving for results. This is the secret: action without attachment doesn't create karma. And whoever truly understands this principle becomes free from the binding effects of action.",
      deeper: "'Na limpanti' (do not taint/stain) uses the image of water on a lotus leaf—it doesn't stick. The key is 'na spriha' (no desire) for fruits. It's desire that makes action bind. Without desire, action is just movement—no karmic residue. This knowledge isn't merely intellectual; it's transformative. One who 'abhijanati' (fully knows) this becomes like Krishna—acting without bondage."
    },

    practicalApplication: "The goal isn't to stop acting but to stop craving results. Notice how desire for outcomes creates anxiety before action and disappointment or pride after. What if you could act with full engagement but without needing any particular result? That's freedom in action—and it's available to you.",

    keyTerms: [
      { term: "Limpanti", meaning: "Taint, stain, stick to" },
      { term: "Spriha", meaning: "Desire, craving" },
      { term: "Karma-phala", meaning: "Fruit of action" },
      { term: "Abhijanati", meaning: "Fully knows, understands" },
      { term: "Badhyate", meaning: "Is bound" }
    ],

    themes: ["action", "detachment", "knowledge", "freedom"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 4,
    verse: 15,
    sanskrit: "एवं ज्ञात्वा कृतं कर्म पूर्वैरपि मुमुक्षुभिः।\nकुरु कर्मैव तस्मात्त्वं पूर्वैः पूर्वतरं कृतम्।।",
    transliteration: "evaṁ jñātvā kṛtaṁ karma pūrvair api mumukṣubhiḥ\nkuru karmaiva tasmāt tvaṁ pūrvaiḥ pūrvataraṁ kṛtam",

    translation: "Knowing this, the ancient seekers of liberation also performed action. Therefore, you too should act, following the example of those ancients.",

    explanation: {
      simple: "The ancient sages who sought liberation—they understood this teaching and still performed action. They didn't become passive. So Arjuna should follow their example: understand the secret of action, then act. Action informed by knowledge is the path.",
      deeper: "'Mumukshu' (seekers of liberation) didn't use knowledge as an excuse to avoid action—they acted. 'Purvaih purvataram' (done by the ancient ones of ancient times) emphasizes this is time-tested wisdom. The instruction 'kuru karma eva' (do perform action) is emphatic. Krishna repeatedly pulls Arjuna away from the temptation to withdraw into inaction."
    },

    practicalApplication: "Don't use spiritual understanding to justify inaction. The greatest sages were active—they taught, served, created. Your deepening wisdom should make you more effective in the world, not less. Retreat into pure contemplation might be avoidance disguised as spirituality.",

    keyTerms: [
      { term: "Jnatva", meaning: "Having known" },
      { term: "Mumukshu", meaning: "Seeker of liberation" },
      { term: "Purva", meaning: "Ancient ones" },
      { term: "Purvatara", meaning: "More ancient, earliest" }
    ],

    themes: ["action", "tradition", "knowledge", "example"],
    difficulty: "beginner",
    famousVerse: false
  },

  // -------------------------------------------------------------------------
  // SECTION 4: ACTION, INACTION, AND THE WISE (Verses 16-24)
  // The deep teaching on what action really is
  // -------------------------------------------------------------------------
  {
    chapter: 4,
    verse: 16,
    sanskrit: "किं कर्म किमकर्मेति कवयोऽप्यत्र मोहिताः।\nतत्ते कर्म प्रवक्ष्यामि यज्ज्ञात्वा मोक्ष्यसेऽशुभात्।।",
    transliteration: "kiṁ karma kim akarmeti kavayo 'py atra mohitāḥ\ntat te karma pravakṣyāmi yaj jñātvā mokṣyase 'śubhāt",

    translation: "What is action? What is inaction? Even the wise are confused about this. I will teach you about action, knowing which you will be freed from evil.",

    explanation: {
      simple: "Even intelligent people are confused about what real action is and what real inaction is. It's not as simple as 'moving' versus 'not moving.' Krishna will explain this deeply, and understanding it leads to freedom from negative karma.",
      deeper: "This sets up one of the Gita's subtlest teachings. 'Kavi' (wise, poets, seers) are confused—this isn't easy. 'Ashubha' (inauspicious, evil) refers to karmic bondage. The conventional understanding of action (physical movement) and inaction (physical stillness) is superficial. Krishna will reveal a deeper dimension where the categories invert."
    },

    practicalApplication: "Don't assume you understand what 'action' means. The person frantically busy might be in a state of true inaction (spiritually dormant), while the person sitting still might be engaged in the most profound action (inner transformation). Question your assumptions about productivity and passivity.",

    keyTerms: [
      { term: "Karma", meaning: "Action" },
      { term: "Akarma", meaning: "Inaction" },
      { term: "Kavi", meaning: "Wise person, seer, poet" },
      { term: "Mohita", meaning: "Confused, deluded" },
      { term: "Ashubha", meaning: "Inauspicious, evil" }
    ],

    themes: ["action", "inaction", "confusion", "knowledge"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 4,
    verse: 17,
    sanskrit: "कर्मणो ह्यपि बोद्धव्यं बोद्धव्यं च विकर्मणः।\nअकर्मणश्च बोद्धव्यं गहना कर्मणो गतिः।।",
    transliteration: "karmaṇo hy api boddhavyaṁ boddhavyaṁ ca vikarmaṇaḥ\nakarmaṇaś ca boddhavyaṁ gahanā karmaṇo gatiḥ",

    translation: "You must understand action, forbidden action, and inaction. The nature of action is difficult to understand.",

    explanation: {
      simple: "Krishna introduces three categories: karma (right action), vikarma (wrong/forbidden action), and akarma (inaction). All three must be understood. The path of action is deep and subtle—surface judgments are unreliable.",
      deeper: "'Gahana' (deep, impenetrable) warns us that karma is profound territory. What looks like good action may be vikarma; what looks like inaction may be the highest action. This teaching will culminate in showing that the realized person's action is actually non-action, and the ignorant person's non-action is actually binding action."
    },

    practicalApplication: "Don't judge actions superficially—yours or others'. The busy person might be accumulating bad karma through wrong motivation; the seemingly idle person might be doing the deepest work. Evaluate actions by their source (ego vs. wisdom) and motivation (desire vs. dharma), not just their appearance.",

    keyTerms: [
      { term: "Karma", meaning: "Right action, prescribed duty" },
      { term: "Vikarma", meaning: "Wrong action, forbidden action" },
      { term: "Akarma", meaning: "Inaction, non-action" },
      { term: "Boddhavya", meaning: "Must be understood" },
      { term: "Gahana", meaning: "Deep, profound, difficult" },
      { term: "Gati", meaning: "Path, nature, movement" }
    ],

    themes: ["action", "knowledge", "depth", "discernment"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 4,
    verse: 18,
    sanskrit: "कर्मण्यकर्म यः पश्येदकर्मणि च कर्म यः।\nस बुद्धिमान्मनुष्येषु स युक्तः कृत्स्नकर्मकृत्।।",
    transliteration: "karmaṇy akarma yaḥ paśyed akarmaṇi ca karma yaḥ\nsa buddhimān manuṣyeṣu sa yuktaḥ kṛtsna-karma-kṛt",

    translation: "One who sees inaction in action and action in inaction is wise among humans. Such a person is a yogi and has accomplished all action.",

    explanation: {
      simple: "Here's the paradox: The truly wise person sees non-action in the midst of action, and action in the midst of non-action. This isn't riddle—it's profound truth. Such a person is the real sage, the true yogi, who has understood all action.",
      deeper: "When the wise person acts, the Self remains uninvolved—the action happens through the body-mind but doesn't touch the witnessing consciousness (akarma in karma). When the ignorant person sits idle, the mind is active with desires and plans, creating karmic seeds (karma in akarma). 'Kritsna-karma-krit' (doer of all action) means that by understanding this, one has transcended the entire domain of karma."
    },

    practicalApplication: "Practice this: while acting, notice that the deepest 'you'—awareness itself—isn't actually doing anything; it's witnessing the body act. While sitting still, notice how much mental action continues. The goal is to stabilize in the witnessing Self, from which all action appears as play on the surface of stillness.",

    keyTerms: [
      { term: "Akarma in karma", meaning: "Non-action in action" },
      { term: "Karma in akarma", meaning: "Action in inaction" },
      { term: "Buddhiman", meaning: "Wise, intelligent" },
      { term: "Yukta", meaning: "Yogi, one in union" },
      { term: "Kritsna-karma-krit", meaning: "Performer of all action" }
    ],

    themes: ["wisdom", "paradox", "action", "witness"],
    difficulty: "advanced",
    famousVerse: true
  },

  {
    chapter: 4,
    verse: 19,
    sanskrit: "यस्य सर्वे समारम्भाः कामसङ्कल्पवर्जिताः।\nज्ञानाग्निदग्धकर्माणं तमाहुः पण्डितं बुधाः।।",
    transliteration: "yasya sarve samārambhāḥ kāma-saṅkalpa-varjitāḥ\njñānāgni-dagdha-karmāṇaṁ tam āhuḥ paṇḍitaṁ budhāḥ",

    translation: "One whose every undertaking is free from desire and selfish motive, whose actions are burned in the fire of knowledge—the wise call that person truly learned.",

    explanation: {
      simple: "The real sage is one whose every action is free from desire and selfish planning. All their karma has been burned up by the fire of knowledge. They act, but there's no karmic residue because there's no selfish motive fueling the action.",
      deeper: "'Kama-sankalpa-varjita' (devoid of desire and intention) doesn't mean having no purpose—it means having no selfish agenda. 'Jnanagni-dagdha-karma' (actions burned by the fire of knowledge) is a powerful image: knowledge doesn't prevent action but burns away its binding quality, like fire burns away impurities while leaving gold intact."
    },

    practicalApplication: "Before any undertaking, examine: What do I want from this? Is there a selfish agenda hiding? You can still do the action, but awareness of hidden motives weakens them. Over time, as wisdom grows, even complex actions can be performed without the sticky residue of 'what's in it for me?'",

    keyTerms: [
      { term: "Samarambha", meaning: "Undertaking, endeavor" },
      { term: "Kama-sankalpa", meaning: "Desire and intention" },
      { term: "Varjita", meaning: "Free from, devoid of" },
      { term: "Jnana-agni", meaning: "Fire of knowledge" },
      { term: "Dagdha", meaning: "Burned" },
      { term: "Pandita", meaning: "Learned, wise" }
    ],

    themes: ["knowledge", "desire", "purification", "wisdom"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 4,
    verse: 20,
    sanskrit: "त्यक्त्वा कर्मफलासङ्गं नित्यतृप्तो निराश्रयः।\nकर्मण्यभिप्रवृत्तोऽपि नैव किञ्चित्करोति सः।।",
    transliteration: "tyaktvā karma-phalāsaṅgaṁ nitya-tṛpto nirāśrayaḥ\nkarmaṇy abhipravṛtto 'pi naiva kiñcit karoti saḥ",

    translation: "Having abandoned attachment to the fruits of action, ever content, dependent on nothing—though fully engaged in action, such a person does nothing at all.",

    explanation: {
      simple: "The liberated person has dropped attachment to results, is always content, depends on nothing external for happiness. Even while fully engaged in action, they're essentially not doing anything—because there's no doer-ship, no binding karma being created.",
      deeper: "'Nitya-tripta' (ever content) indicates fullness that doesn't depend on action's outcome. 'Nirashraya' (without support/dependence) means not leaning on external props for security. 'Naiva kinchit karoti' (does nothing at all) seems to contradict 'karmany abhipravritta' (engaged in action)—but it's the paradox of verse 18 in practice. The body acts; the Self is still."
    },

    practicalApplication: "Cultivate inner contentment that doesn't rise and fall with external success. Before you can act without attachment, you need an internal source of fulfillment. If you're acting from emptiness trying to get filled, you'll always be attached to results. Fill up first; then act from overflow.",

    keyTerms: [
      { term: "Karma-phala-asanga", meaning: "Non-attachment to fruits of action" },
      { term: "Nitya-tripta", meaning: "Ever content, always satisfied" },
      { term: "Nirashraya", meaning: "Without dependence, self-sufficient" },
      { term: "Abhipravritta", meaning: "Fully engaged" }
    ],

    themes: ["contentment", "action", "detachment", "independence"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 4,
    verse: 21,
    sanskrit: "निराशीर्यतचित्तात्मा त्यक्तसर्वपरिग्रहः।\nशारीरं केवलं कर्म कुर्वन्नाप्नोति किल्बिषम्।।",
    transliteration: "nirāśīr yata-cittātmā tyakta-sarva-parigrahaḥ\nśārīraṁ kevalaṁ karma kurvan nāpnoti kilbiṣam",

    translation: "Free from expectations, mind and self controlled, having abandoned all possessiveness—performing only bodily action, one incurs no sin.",

    explanation: {
      simple: "The liberated person has no expectations, has controlled their mind, has given up possessiveness over things. Acting only to maintain the body—without agenda—such a person creates no negative karma at all.",
      deeper: "'Nirashi' (without expectations) frees from anxiety about future. 'Yata-citta-atma' (controlled mind and self) provides inner stability. 'Tyakta-sarva-parigraha' (abandoned all acquisition) removes the drive to accumulate. 'Shariram kevalam' (bodily only) indicates action reduced to minimum necessity—not driven by ambition. Such minimal, egoless action generates no 'kilbisha' (sin, fault)."
    },

    practicalApplication: "Notice how much of your action is driven by expectations of future rewards, uncontrolled mental impulses, or desire to acquire and possess. What would remain if those were removed? That's the 'bodily only' action—what's actually necessary, done simply because it needs doing.",

    keyTerms: [
      { term: "Nirashi", meaning: "Without expectations" },
      { term: "Yata-chitta", meaning: "Controlled mind" },
      { term: "Parigraha", meaning: "Acquisition, possessiveness" },
      { term: "Shariram kevalam", meaning: "Bodily only, mere physical" },
      { term: "Kilbisha", meaning: "Sin, fault" }
    ],

    themes: ["renunciation", "action", "purity", "simplicity"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 4,
    verse: 22,
    sanskrit: "यदृच्छालाभसन्तुष्टो द्वन्द्वातीतो विमत्सरः।\nसमः सिद्धावसिद्धौ च कृत्वापि न निबध्यते।।",
    transliteration: "yadṛcchā-lābha-santuṣṭo dvandvātīto vimatsaraḥ\nsamaḥ siddhāv asiddhau ca kṛtvāpi na nibadhyate",

    translation: "Content with whatever comes by chance, beyond the pairs of opposites, free from envy, equal in success and failure—such a person, even while acting, is not bound.",

    explanation: {
      simple: "The free person is happy with whatever comes unsought, has transcended the opposites (pleasure/pain, hot/cold, etc.), has no envy, and treats success and failure the same. Even though they act, they're not bound by action.",
      deeper: "'Yadriccha-labha' (gains that come by chance) indicates not scheming for outcomes but accepting what life brings. 'Dvandva-atita' (beyond dualities) means not being pushed around by opposite experiences. 'Vimatsara' (free from envy) shows no comparison with others. 'Sama' (equal) in success/failure completes the equanimity. This is complete freedom while living and acting in the world."
    },

    practicalApplication: "Practice contentment with whatever comes today—unsought. Notice your reaction to opposites (comfortable vs. uncomfortable) and practice equanimity. Watch for envy when others succeed. These small practices loosen karma's grip. You act, but action doesn't stick.",

    keyTerms: [
      { term: "Yadriccha-labha", meaning: "Chance gain, whatever comes unsought" },
      { term: "Santushta", meaning: "Content" },
      { term: "Dvandva-atita", meaning: "Beyond dualities" },
      { term: "Vimatsara", meaning: "Free from envy" },
      { term: "Sama", meaning: "Equal, balanced" },
      { term: "Siddhi-asiddhi", meaning: "Success and failure" }
    ],

    themes: ["contentment", "equanimity", "freedom", "action"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 4,
    verse: 23,
    sanskrit: "गतसङ्गस्य मुक्तस्य ज्ञानावस्थितचेतसः।\nयज्ञायाचरतः कर्म समग्रं प्रविलीयते।।",
    transliteration: "gata-saṅgasya muktasya jñānāvasthita-cetasaḥ\nyajñāyācarataḥ karma samagraṁ pravilīyate",

    translation: "For one who is free from attachment, liberated, whose mind is established in knowledge, who acts for sacrifice alone—all their karma is completely dissolved.",

    explanation: {
      simple: "When someone is free from attachment, truly liberated, with mind rooted in wisdom, acting only as sacrifice—their karma completely dissolves. It's not just that no new karma is created; the old karma also disappears.",
      deeper: "'Gata-sanga' (attachment gone), 'mukta' (liberated), 'jnana-avasthita-chetasa' (mind established in knowledge), 'yajnaya acharata' (acting for sacrifice)—these describe the complete state. The result: 'samagram praviliyate' (entirely dissolves). Knowledge doesn't just prevent new karma; it burns accumulated karma. This is why jnana (knowledge) is supreme."
    },

    practicalApplication: "As your understanding deepens, not only do you stop creating new karma, but old patterns and their residue begin to dissolve. You might notice old wounds healing, old fears releasing, old compulsions weakening. Knowledge has a cleansing, dissolving power. Trust the process.",

    keyTerms: [
      { term: "Gata-sanga", meaning: "Free from attachment" },
      { term: "Mukta", meaning: "Liberated" },
      { term: "Jnana-avasthita", meaning: "Established in knowledge" },
      { term: "Yajna", meaning: "Sacrifice" },
      { term: "Praviliyate", meaning: "Completely dissolves" }
    ],

    themes: ["knowledge", "liberation", "dissolution", "sacrifice"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 4,
    verse: 24,
    sanskrit: "ब्रह्मार्पणं ब्रह्म हविर्ब्रह्माग्नौ ब्रह्मणा हुतम्।\nब्रह्मैव तेन गन्तव्यं ब्रह्मकर्मसमाधिना।।",
    transliteration: "brahmārpaṇaṁ brahma havir brahmāgnau brahmaṇā hutam\nbrahmaiva tena gantavyaṁ brahma-karma-samādhinā",

    translation: "Brahman is the offering, Brahman is the oblation poured by Brahman into the fire of Brahman. Brahman alone is attained by one absorbed in action as Brahman.",

    explanation: {
      simple: "In the ultimate vision, everything is Brahman (the Absolute). The offering is Brahman, what's offered is Brahman, the fire is Brahman, the one offering is Brahman. One who sees all action as Brahman attains Brahman. There's only the One.",
      deeper: "This verse transforms ritualistic yajna into jnana yajna (sacrifice of knowledge). 'Arpana' (instrument/act of offering), 'havis' (oblation), 'agni' (fire), the 'hota' (offerer)—all are Brahman. This is not pantheism (everything is God) but non-duality: there's only Brahman appearing as the many. 'Brahma-karma-samadhi' (absorption in action as Brahman) is karma yoga's culmination in jnana."
    },

    practicalApplication: "Practice seeing all action as one movement of consciousness. The hand that gives, the gift, the receiver—all one energy in different forms. This dissolves the sense of separate doer and deed. Eating becomes sacred, walking becomes meditation, work becomes worship. Everything is That.",

    keyTerms: [
      { term: "Brahman", meaning: "The Absolute Reality" },
      { term: "Arpana", meaning: "Offering, instrument" },
      { term: "Havis", meaning: "Oblation, what is offered" },
      { term: "Agni", meaning: "Fire" },
      { term: "Huta", meaning: "Offered, sacrificed" },
      { term: "Samadhi", meaning: "Absorption, complete focus" }
    ],

    themes: ["non-duality", "brahman", "sacrifice", "oneness"],
    difficulty: "advanced",
    famousVerse: true
  },

  // -------------------------------------------------------------------------
  // SECTION 5: VARIOUS FORMS OF SACRIFICE (Verses 25-33)
  // Different types of yajna for different temperaments
  // -------------------------------------------------------------------------
  {
    chapter: 4,
    verse: 25,
    sanskrit: "दैवमेवापरे यज्ञं योगिनः पर्युपासते।\nब्रह्माग्नावपरे यज्ञं यज्ञेनैवोपजुह्वति।।",
    transliteration: "daivam evāpare yajñaṁ yoginaḥ paryupāsate\nbrahmāgnāv apare yajñaṁ yajñenaivopajuhvati",

    translation: "Some yogis worship by offering sacrifice to the gods; others offer sacrifice itself into the fire of Brahman.",

    explanation: {
      simple: "Krishna begins describing different types of spiritual practice as 'sacrifice.' Some practitioners worship gods through rituals. Others, more advanced, offer the very act of sacrifice into the fire of Brahman—they've transcended ritual to realize the underlying reality.",
      deeper: "'Daiva yajna' (sacrifice to gods) is external worship—valid but preliminary. 'Brahmagnau yajna' (sacrifice into the fire of Brahman) is internal—the offerings, fire, and act dissolve into the formless Absolute. This progression from external to internal, form to formless, represents spiritual maturation."
    },

    practicalApplication: "External worship (rituals, prayers to deities) is a good beginning. But don't stop there. Eventually, recognize that the worship itself is Brahman worshipping Brahman. The form points to the formless. Use ritual as a doorway, not a stopping point.",

    keyTerms: [
      { term: "Daiva yajna", meaning: "Sacrifice to gods" },
      { term: "Yogin", meaning: "Practitioner of yoga" },
      { term: "Paryupasate", meaning: "Worship, practice" },
      { term: "Brahmani", meaning: "In Brahman" },
      { term: "Upajuhvati", meaning: "Offer as sacrifice" }
    ],

    themes: ["sacrifice", "worship", "progression", "brahman"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 4,
    verse: 26,
    sanskrit: "श्रोत्रादीनीन्द्रियाण्यन्ये संयमाग्निषु जुह्वति।\nशब्दादीन्विषयानन्य इन्द्रियाग्निषु जुह्वति।।",
    transliteration: "śrotrādīnīndriyāṇy anye saṁyamāgniṣu juhvati\nśabdādīn viṣayān anya indriyāgniṣu juhvati",

    translation: "Some offer hearing and other senses into the fire of restraint; others offer sound and other sense objects into the fire of the senses.",

    explanation: {
      simple: "Some practitioners sacrifice by restraining their senses—they offer hearing, sight, etc., into the fire of self-control. Others do the opposite: they consciously engage their senses with objects as a form of sacred offering. Both are valid approaches.",
      deeper: "This presents two opposite-seeming paths. 'Samyama-agni' (fire of restraint) is the ascetic path—withdrawing senses from objects. 'Indriya-agni' (fire of senses) is the tantric path—engaging senses consciously as worship. The first says 'control input,' the second says 'transform the act of sensing itself.' Both can lead to freedom."
    },

    practicalApplication: "Know your temperament. Some people grow through discipline and restraint—limiting sensory input. Others grow through conscious, sacred engagement with life—eating, seeing, touching with full awareness. Neither is superior. What helps you wake up? Use that.",

    keyTerms: [
      { term: "Shrotra", meaning: "Hearing" },
      { term: "Indriya", meaning: "Sense organ" },
      { term: "Samyama", meaning: "Restraint, control" },
      { term: "Vishaya", meaning: "Sense object" },
      { term: "Juhvati", meaning: "Offer into fire" }
    ],

    themes: ["senses", "restraint", "engagement", "paths"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 4,
    verse: 27,
    sanskrit: "सर्वाणीन्द्रियकर्माणि प्राणकर्माणि चापरे।\nआत्मसंयमयोगाग्नौ जुह्वति ज्ञानदीपिते।।",
    transliteration: "sarvāṇīndriya-karmāṇi prāṇa-karmāṇi cāpare\nātma-saṁyama-yogāgnau juhvati jñāna-dīpite",

    translation: "Others offer all the actions of the senses and the functions of the life-breath into the fire of self-control yoga, kindled by knowledge.",

    explanation: {
      simple: "Some practitioners offer ALL sensory activity and even the vital functions (breathing, etc.) into the fire of yoga—the disciplined union of self-control, illuminated by knowledge. Everything becomes fuel for the fire of transformation.",
      deeper: "'Atma-samyama-yoga' (yoga of self-control) is the fire; 'jnana-dipite' (kindled by knowledge) indicates this isn't mere willpower but wisdom-powered discipline. Both 'indriya-karma' (sense activities) and 'prana-karma' (life functions) are offered—nothing is excluded from the sacrifice. The whole of life becomes yajna."
    },

    practicalApplication: "Your entire life—every sensation, every breath—can become an offering. This isn't about suppressing life but transforming it through awareness. Every activity, approached with knowledge and dedication, becomes spiritual practice. There's no secular domain left.",

    keyTerms: [
      { term: "Indriya-karma", meaning: "Actions of the senses" },
      { term: "Prana-karma", meaning: "Functions of life-breath" },
      { term: "Atma-samyama", meaning: "Self-control, self-discipline" },
      { term: "Jnana-dipita", meaning: "Kindled/illumined by knowledge" }
    ],

    themes: ["totality", "self-control", "knowledge", "sacrifice"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 4,
    verse: 28,
    sanskrit: "द्रव्ययज्ञास्तपोयज्ञा योगयज्ञास्तथापरे।\nस्वाध्यायज्ञानयज्ञाश्च यतयः संशितव्रताः।।",
    transliteration: "dravya-yajñās tapo-yajñā yoga-yajñās tathāpare\nsvādhyāya-jñāna-yajñāś ca yatayaḥ saṁśita-vratāḥ",

    translation: "Some offer material possessions as sacrifice; some offer austerity; some offer yoga practice; some offer self-study and knowledge—all with strict vows.",

    explanation: {
      simple: "Krishna lists more types of sacrifice: giving wealth (dravya yajna), practicing austerities (tapas yajna), yoga discipline (yoga yajna), study of scriptures (svadhyaya yajna), and pursuit of knowledge (jnana yajna). Serious practitioners take strict vows in their chosen path.",
      deeper: "This shows the breadth of valid spiritual paths. Charitable giving, ascetic practices, yogic disciplines, scriptural study, philosophical inquiry—all are 'yajna' when done with dedication. 'Samshita-vrata' (strict vows) indicates these aren't casual pursuits but committed practices. Each path suits different temperaments and stages."
    },

    practicalApplication: "What's your yajna? Are you naturally inclined toward generosity (dravya), discipline and austerity (tapas), physical/mental practice (yoga), study (svadhyaya), or philosophical inquiry (jnana)? Choose your path and commit to it with 'strict vows.' Casual dabbling produces little; commitment transforms.",

    keyTerms: [
      { term: "Dravya-yajna", meaning: "Sacrifice of material wealth" },
      { term: "Tapo-yajna", meaning: "Sacrifice of austerity" },
      { term: "Yoga-yajna", meaning: "Sacrifice of yoga practice" },
      { term: "Svadhyaya-yajna", meaning: "Sacrifice of self-study" },
      { term: "Jnana-yajna", meaning: "Sacrifice of knowledge" },
      { term: "Samshita-vrata", meaning: "Strict vows" }
    ],

    themes: ["paths", "sacrifice", "commitment", "diversity"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 4,
    verse: 29,
    sanskrit: "अपाने जुह्वति प्राणं प्राणेऽपानं तथापरे।\nप्राणापानगती रुद्ध्वा प्राणायामपरायणाः।।",
    transliteration: "apāne juhvati prāṇaṁ prāṇe 'pānaṁ tathāpare\nprāṇāpāna-gatī ruddhvā prāṇāyāma-parāyaṇāḥ",

    translation: "Some offer the outgoing breath into the incoming, and the incoming into the outgoing, restraining the movement of both—absorbed in pranayama.",

    explanation: {
      simple: "Some practitioners focus on breath control (pranayama). They offer exhalation into inhalation and vice versa, eventually restraining both. This practice of breath regulation is itself a form of sacrifice.",
      deeper: "'Prana' (outgoing/upward breath) and 'apana' (incoming/downward breath) are the two primary vital currents. 'Ruddhva gati' (restraining movement) refers to kumbhaka—breath retention. Pranayama is literally making the pranas into a sacrifice, offering one breath into another until stillness is achieved. This stills the mind and awakens subtle energy."
    },

    practicalApplication: "Breath practice is accessible to everyone. Even simple conscious breathing is a form of this yajna. Notice your breath; slow it; observe the pause between breaths. The breath connects body and mind. Mastering breath is a doorway to mastering the mind.",

    keyTerms: [
      { term: "Prana", meaning: "Outgoing breath, vital energy" },
      { term: "Apana", meaning: "Incoming breath, downward energy" },
      { term: "Ruddhva", meaning: "Restraining, stopping" },
      { term: "Pranayama", meaning: "Breath control" },
      { term: "Parayana", meaning: "Absorbed in, devoted to" }
    ],

    themes: ["pranayama", "breath", "practice", "sacrifice"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 4,
    verse: 30,
    sanskrit: "अपरे नियताहाराः प्राणान्प्राणेषु जुह्वति।\nसर्वेऽप्येते यज्ञविदो यज्ञक्षपितकल्मषाः।।",
    transliteration: "apare niyatāhārāḥ prāṇān prāṇeṣu juhvati\nsarve 'py ete yajña-vido yajña-kṣapita-kalmaṣāḥ",

    translation: "Others who regulate their food offer the life-breaths into the life-breaths. All these understand sacrifice, and their sins are destroyed by sacrifice.",

    explanation: {
      simple: "Some practice by regulating their diet, offering the vital energies unto themselves. All these practitioners—whatever their specific method—understand the principle of sacrifice. And sacrifice destroys their sins, purifies them.",
      deeper: "'Niyata-ahara' (regulated diet) is another form of yajna—offering at the altar of the body. 'Pranan praneshu juhvati' could mean offering prana to prana through fasting, or unifying the various pranas internally. The key insight: 'sarve yajna-vida' (all know sacrifice)—the specific form matters less than understanding the principle. And all forms purify: 'yajna-kshapita-kalmasha' (sins destroyed by sacrifice)."
    },

    practicalApplication: "The form of your practice matters less than the spirit of sacrifice behind it. Whether you practice through fasting, breath work, study, or service—understand that you're offering something into the fire of transformation. That understanding itself purifies.",

    keyTerms: [
      { term: "Niyata-ahara", meaning: "Regulated diet" },
      { term: "Yajna-vid", meaning: "Knower of sacrifice" },
      { term: "Kshapita", meaning: "Destroyed" },
      { term: "Kalmasha", meaning: "Sin, impurity" }
    ],

    themes: ["diet", "sacrifice", "purification", "diversity"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 4,
    verse: 31,
    sanskrit: "यज्ञशिष्टामृतभुजो यान्ति ब्रह्म सनातनम्।\nनायं लोकोऽस्त्ययज्ञस्य कुतोऽन्यः कुरुसत्तम।।",
    transliteration: "yajña-śiṣṭāmṛta-bhujo yānti brahma sanātanam\nnāyaṁ loko 'sty ayajñasya kuto 'nyaḥ kuru-sattama",

    translation: "Those who partake of the nectar remaining from sacrifice attain the eternal Brahman. This world is not for one who performs no sacrifice, O Arjuna—how then the next?",

    explanation: {
      simple: "Those who enjoy the 'nectar' (blessed remnants) of sacrifice reach the eternal Brahman. But for one who performs no sacrifice at all, even this world is not good—never mind the next world. Sacrifice is essential for any kind of fulfillment.",
      deeper: "'Yajna-shishtamrita' (nectar remnants of sacrifice) suggests that what remains after genuine offering is pure, nourishing, immortal. Such a person 'yanti brahma sanatanam' (goes to eternal Brahman). But 'ayajnasya' (one who sacrifices nothing) fails even in worldly life—they're takers who give nothing. Such a life is unsatisfying here and leads nowhere hereafter."
    },

    practicalApplication: "Life works for those who give. If you're only taking, never offering, life becomes hollow and difficult—even materially, relationships dry up. Those who live as an offering find that what remains is sweet and abundant. The principle of sacrifice isn't religious—it's how the universe works.",

    keyTerms: [
      { term: "Yajna-shishta", meaning: "Remnants of sacrifice" },
      { term: "Amrita", meaning: "Nectar, immortality" },
      { term: "Sanatana", meaning: "Eternal" },
      { term: "Ayajnasya", meaning: "One who performs no sacrifice" }
    ],

    themes: ["sacrifice", "reward", "necessity", "life-principle"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 4,
    verse: 32,
    sanskrit: "एवं बहुविधा यज्ञा वितता ब्रह्मणो मुखे।\nकर्मजान्विद्धि तान्सर्वानेवं ज्ञात्वा विमोक्ष्यसे।।",
    transliteration: "evaṁ bahu-vidhā yajñā vitatā brahmaṇo mukhe\nkarma-jān viddhi tān sarvān evaṁ jñātvā vimokṣyase",

    translation: "Thus many kinds of sacrifice are spread out in the Vedas. Know them all to be born of action. Knowing this, you will be liberated.",

    explanation: {
      simple: "Many different types of sacrifice have been described (in the Vedas and by Krishna). They all emerge from action. Understanding this—that action can be sacrifice, that sacrifice purifies—you will be liberated.",
      deeper: "'Bahu-vidha' (many kinds) acknowledges diversity of paths. 'Brahmano mukhe' (in the mouth/word of Brahman, i.e., the Vedas) gives scriptural authority. 'Karma-jan' (born of action) is crucial: all yajna involves some form of doing. Even jnana yajna requires the 'action' of inquiry and contemplation. Liberation comes through understanding, not through picking the 'right' form of sacrifice."
    },

    practicalApplication: "Don't get lost in comparing paths or feeling you're on the wrong one. All sincere spiritual practice is sacrifice; all sacrifice is action; all conscious action can liberate. Understand this principle, then commit to your path. The understanding itself begins the liberation.",

    keyTerms: [
      { term: "Bahu-vidha", meaning: "Many kinds" },
      { term: "Vitata", meaning: "Spread out, described" },
      { term: "Brahmano mukhe", meaning: "In the Vedas (word of Brahman)" },
      { term: "Karma-ja", meaning: "Born of action" },
      { term: "Vimokshyase", meaning: "You will be liberated" }
    ],

    themes: ["diversity", "action", "knowledge", "liberation"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 4,
    verse: 33,
    sanskrit: "श्रेयान्द्रव्यमयाद्यज्ञाज्ज्ञानयज्ञः परन्तप।\nसर्वं कर्माखिलं पार्थ ज्ञाने परिसमाप्यते।।",
    transliteration: "śreyān dravya-mayād yajñāj jñāna-yajñaḥ parantapa\nsarvaṁ karmākhilaṁ pārtha jñāne parisamāpyate",

    translation: "Superior to the sacrifice of material possessions is the sacrifice of knowledge, O Arjuna. All action, in its entirety, culminates in knowledge.",

    explanation: {
      simple: "While all forms of sacrifice are valid, the sacrifice of knowledge (jnana yajna) is superior to material offerings. Why? Because ALL action ultimately leads to and culminates in knowledge. Knowledge is the destination; action is the path.",
      deeper: "This establishes jnana's supremacy without invalidating other paths. 'Dravya-maya yajna' (material sacrifice) is good but limited—physical offerings bring physical results. 'Jnana yajna' (knowledge sacrifice) brings liberation. 'Sarvam karma...jnane parisamapyate' (all action culminates in knowledge) means karma yoga's fruit is jnana. You act selflessly until wisdom dawns; then action becomes spontaneous expression of wisdom."
    },

    practicalApplication: "Don't chase experiences endlessly—they're meant to lead to understanding. Whatever practice you do, ask: what am I learning? What wisdom is emerging? The goal isn't perpetual doing but the knowledge that transforms the doer. Let your action mature into wisdom.",

    keyTerms: [
      { term: "Shreyan", meaning: "Superior, better" },
      { term: "Dravya-maya yajna", meaning: "Material sacrifice" },
      { term: "Jnana-yajna", meaning: "Knowledge sacrifice" },
      { term: "Akhilam", meaning: "Entire, complete" },
      { term: "Parisamapyate", meaning: "Culminates, concludes" }
    ],

    themes: ["knowledge", "supremacy", "culmination", "sacrifice"],
    difficulty: "intermediate",
    famousVerse: true
  },

  // -------------------------------------------------------------------------
  // SECTION 6: THE POWER OF KNOWLEDGE (Verses 34-42)
  // Knowledge is the supreme purifier
  // -------------------------------------------------------------------------
  {
    chapter: 4,
    verse: 34,
    sanskrit: "तद्विद्धि प्रणिपातेन परिप्रश्नेन सेवया।\nउपदेक्ष्यन्ति ते ज्ञानं ज्ञानिनस्तत्त्वदर्शिनः।।",
    transliteration: "tad viddhi praṇipātena paripraśnena sevayā\nupadekṣyanti te jñānaṁ jñāninas tattva-darśinaḥ",

    translation: "Learn this by humble submission, by questioning, and by service. The wise who have seen the truth will teach you knowledge.",

    explanation: {
      simple: "How do you gain this knowledge? Through three approaches: humble submission (pranipata), sincere questioning (pariprasna), and service (seva). Find teachers who have realized the truth—they will impart knowledge to you.",
      deeper: "The three qualifications for receiving knowledge: 'pranipata' (prostrating, surrendering ego), 'pariprasna' (intelligent questioning, not challenging but seeking clarity), and 'seva' (service, which creates receptivity and shows sincerity). 'Jnaninas tattva-darsina' (wise ones who have seen truth) emphasizes that teachers must have direct realization, not just book learning. Knowledge is transmitted through relationship."
    },

    practicalApplication: "Seeking wisdom? Find a genuine teacher—someone who has realized what they teach. Approach with humility (not pretending you already know), with intelligent questions (not passive acceptance), and with service (showing you value what's being given). This combination opens the channel for transmission.",

    keyTerms: [
      { term: "Pranipata", meaning: "Humble submission, prostration" },
      { term: "Pariprasna", meaning: "Sincere questioning, inquiry" },
      { term: "Seva", meaning: "Service" },
      { term: "Jnanin", meaning: "Wise one" },
      { term: "Tattva-darshin", meaning: "One who has seen truth" },
      { term: "Upadekshyanti", meaning: "Will teach, will instruct" }
    ],

    themes: ["teacher", "student", "learning", "humility"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 4,
    verse: 35,
    sanskrit: "यज्ज्ञात्वा न पुनर्मोहमेवं यास्यसि पाण्डव।\nयेन भूतान्यशेषेण द्रक्ष्यस्यात्मन्यथो मयि।।",
    transliteration: "yaj jñātvā na punar moham evaṁ yāsyasi pāṇḍava\nyena bhūtāny aśeṣeṇa drakṣyasy ātmany atho mayi",

    translation: "Knowing this, you will never again fall into delusion, O Arjuna. By this knowledge, you will see all beings without exception in the Self, and in Me.",

    explanation: {
      simple: "Once you truly know this, delusion will never capture you again. This knowledge shows you that all beings, without exception, exist within the Self—and within Krishna. You'll see the One in all, and all in the One.",
      deeper: "'Na punah moham yasyasi' (will never again go to delusion)—this knowledge is permanent protection. The vision it grants: 'bhutani asheshena atmaniy' (all beings completely in the Self). This isn't metaphor but direct perception. Duality collapses; you see yourself in everything and everything in yourself. And finally: 'mayi' (in Me)—all exists within Krishna/God. Self-knowledge and God-knowledge are one."
    },

    practicalApplication: "Imagine seeing everyone—your family, strangers, enemies—as literally yourself in different forms. That's what this knowledge reveals. Start practicing: look at another person and silently recognize 'That is myself.' This breaks the illusion of separation that causes all suffering.",

    keyTerms: [
      { term: "Moha", meaning: "Delusion" },
      { term: "Asheshena", meaning: "Without exception, completely" },
      { term: "Bhuta", meaning: "Beings" },
      { term: "Atman", meaning: "Self" },
      { term: "Drakshyasi", meaning: "You will see" }
    ],

    themes: ["knowledge", "vision", "unity", "liberation"],
    difficulty: "intermediate",
    famousVerse: true
  },

  {
    chapter: 4,
    verse: 36,
    sanskrit: "अपि चेदसि पापेभ्यः सर्वेभ्यः पापकृत्तमः।\nसर्वं ज्ञानप्लवेनैव वृजिनं सन्तरिष्यसि।।",
    transliteration: "api ced asi pāpebhyaḥ sarvebhyaḥ pāpa-kṛttamaḥ\nsarvaṁ jñāna-plavenaiva vṛjinaṁ santariṣyasi",

    translation: "Even if you are the worst of all sinners, you will cross over all evil by the boat of knowledge alone.",

    explanation: {
      simple: "Even if you're the greatest sinner of all—worse than everyone—knowledge alone will carry you across the ocean of sin. No amount of past wrongdoing can prevent liberation if knowledge dawns. Knowledge is the boat that crosses the ocean of karma.",
      deeper: "'Papa-krittama' (worst sinner) is the extreme case—if even this person is saved by knowledge, no one is excluded. 'Jnana-plavena' (by the boat of knowledge) presents knowledge as a vessel that carries you across 'vrajina' (sin, crookedness). Past karma, however heavy, cannot withstand the fire of knowledge. This is the radical promise of jnana yoga."
    },

    practicalApplication: "Don't let your past prevent your future. Whatever you've done, knowledge can redeem. The person you were made those choices; the person you're becoming through wisdom is not bound by them. This isn't excuse-making—it's the possibility of genuine transformation. Start now.",

    keyTerms: [
      { term: "Papa-krittama", meaning: "Worst sinner" },
      { term: "Jnana-plava", meaning: "Boat of knowledge" },
      { term: "Vrajina", meaning: "Sin, evil, crookedness" },
      { term: "Santarishyasi", meaning: "You will cross over" }
    ],

    themes: ["redemption", "knowledge", "sin", "hope"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 4,
    verse: 37,
    sanskrit: "यथैधांसि समिद्धोऽग्निर्भस्मसात्कुरुतेऽर्जुन।\nज्ञानाग्निः सर्वकर्माणि भस्मसात्कुरुते तथा।।",
    transliteration: "yathaidhāṁsi samiddho 'gnir bhasma-sāt kurute 'rjuna\njñānāgniḥ sarva-karmāṇi bhasma-sāt kurute tathā",

    translation: "As a blazing fire burns wood to ashes, O Arjuna, so does the fire of knowledge burn all karma to ashes.",

    explanation: {
      simple: "Just as a roaring fire reduces wood to ash, the fire of knowledge reduces all karma to ash. Past karma, present karma, karma's results—all burnt up by the blaze of wisdom. Nothing karmic survives this fire.",
      deeper: "'Samiddha agni' (blazing fire) indicates the fire must be fully kindled—not smoldering doubt but roaring certainty. 'Sarva-karmani' (all karmas) means sanchita (accumulated), prarabdha (currently active), and agami (future)—all three kinds are consumed. 'Bhasmasat kurute' (turns to ash) means completely destroyed, no residue. The image is total annihilation of karmic bondage."
    },

    practicalApplication: "Build the fire of knowledge. Half-hearted study leaves karma smoldering. Complete, burning commitment to truth burns everything. This requires intensity—not casual reading but passionate inquiry. Fan the fire until it blazes. Let nothing survive unexamined.",

    keyTerms: [
      { term: "Edhana", meaning: "Firewood, fuel" },
      { term: "Samiddha", meaning: "Blazing, fully kindled" },
      { term: "Agni", meaning: "Fire" },
      { term: "Bhasmasat", meaning: "To ash" },
      { term: "Jnana-agni", meaning: "Fire of knowledge" }
    ],

    themes: ["knowledge", "fire", "purification", "karma"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 4,
    verse: 38,
    sanskrit: "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते।\nतत्स्वयं योगसंसिद्धः कालेनात्मनि विन्दति।।",
    transliteration: "na hi jñānena sadṛśaṁ pavitram iha vidyate\ntat svayaṁ yoga-saṁsiddhaḥ kālenātmani vindati",

    translation: "There is nothing in this world as purifying as knowledge. One who has become perfect in yoga finds it in the Self, in due time.",

    explanation: {
      simple: "Nothing in the world is as purifying as knowledge—nothing. And this knowledge is found within yourself, by one who has perfected their yoga, in time. It's not imported from outside; it's discovered within when you're ready.",
      deeper: "'Na sadrisham pavitram' (nothing equal in purity)—this is an absolute statement. Not rituals, not austerities, not charity—nothing purifies like knowledge. 'Yoga-samsiddha' (perfected in yoga) indicates knowledge comes as the fruit of practice. 'Kaalena' (in time) adds patience—it's not instant. 'Atmani vindati' (finds in the Self)—the knowledge isn't external information but internal recognition."
    },

    practicalApplication: "Trust the process and give it time. Practice purifies; purification reveals knowledge; knowledge was there all along within you. You're not learning something foreign but remembering something intimate. Stay with your practice. In due time, what you seek will emerge from within.",

    keyTerms: [
      { term: "Pavitra", meaning: "Purifying, sacred" },
      { term: "Sadrisham", meaning: "Equal, comparable" },
      { term: "Yoga-samsiddha", meaning: "Perfected through yoga" },
      { term: "Kaalena", meaning: "In time" },
      { term: "Atmani", meaning: "In the Self" },
      { term: "Vindati", meaning: "Finds, discovers" }
    ],

    themes: ["knowledge", "purity", "practice", "time"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 4,
    verse: 39,
    sanskrit: "श्रद्धावाँल्लभते ज्ञानं तत्परः संयतेन्द्रियः।\nज्ञानं लब्ध्वा परां शान्तिमचिरेणाधिगच्छति।।",
    transliteration: "śraddhāvān labhate jñānaṁ tat-paraḥ saṁyatendriyaḥ\njñānaṁ labdhvā parāṁ śāntim acireṇādhigacchati",

    translation: "The one with faith, devoted to it, with senses controlled, attains knowledge. Having attained knowledge, one quickly reaches supreme peace.",

    explanation: {
      simple: "Who gets knowledge? One with faith, dedication, and sense control. What happens after gaining knowledge? Supreme peace comes quickly. Faith opens the door, dedication walks through it, self-control stays the course, and peace is the reward.",
      deeper: "Three prerequisites: 'shraddhavan' (with faith—not blind belief but trusting openness), 'tat-para' (devoted to that—single-pointed focus), 'samyatendriya' (controlled senses—not distracted by every stimulus). The result: 'param shantim' (supreme peace) comes 'achirena' (quickly, without delay). Once knowledge dawns, peace isn't gradual—it's immediate recognition."
    },

    practicalApplication: "Check your prerequisites: Do you have faith that truth exists and can be known? Are you dedicated, making this pursuit primary? Are you exercising enough sense control to stay focused? If these are in place, knowledge will come—and peace will follow swiftly.",

    keyTerms: [
      { term: "Shraddha", meaning: "Faith" },
      { term: "Tat-para", meaning: "Devoted to that" },
      { term: "Samyata-indriya", meaning: "Controlled senses" },
      { term: "Para shanti", meaning: "Supreme peace" },
      { term: "Achirena", meaning: "Quickly, without delay" }
    ],

    themes: ["faith", "devotion", "peace", "attainment"],
    difficulty: "beginner",
    famousVerse: true
  },

  {
    chapter: 4,
    verse: 40,
    sanskrit: "अज्ञश्चाश्रद्दधानश्च संशयात्मा विनश्यति।\nनायं लोकोऽस्ति न परो न सुखं संशयात्मनः।।",
    transliteration: "ajñaś cāśraddadhānaś ca saṁśayātmā vinaśyati\nnāyaṁ loko 'sti na paro na sukhaṁ saṁśayātmanaḥ",

    translation: "The ignorant, the faithless, and the doubter perish. For the doubting soul there is neither this world, nor the next, nor happiness.",

    explanation: {
      simple: "Three types of people fail: the ignorant (who don't seek knowledge), the faithless (who reject it), and the chronic doubter (who can never commit). The doubter especially is lost—they can't enjoy this world, can't prepare for the next, and can never find happiness.",
      deeper: "'Ajña' (ignorant) might awaken someday; 'ashraddadhana' (faithless) has closed the door. But 'samshayatma' (doubting soul) is worst—paralyzed between belief and disbelief, unable to commit either way. Such a person misses worldly success (no confidence to act) and spiritual success (no faith to practice). 'Na sukham' (no happiness) is the inevitable result of endless vacillation."
    },

    practicalApplication: "Doubt has its place—questioning leads to clarity. But chronic, paralyzing doubt destroys. At some point you must commit: to a path, a teacher, a practice. Endless questioning without action is spiritual procrastination. Make a choice. You can always adjust—but you can't steer a parked car.",

    keyTerms: [
      { term: "Ajña", meaning: "Ignorant" },
      { term: "Ashraddadhana", meaning: "Faithless, without faith" },
      { term: "Samshayatma", meaning: "Doubting soul" },
      { term: "Vinashyati", meaning: "Perishes" },
      { term: "Sukha", meaning: "Happiness" }
    ],

    themes: ["doubt", "faith", "commitment", "destruction"],
    difficulty: "beginner",
    famousVerse: false
  },

  {
    chapter: 4,
    verse: 41,
    sanskrit: "योगसंन्यस्तकर्माणं ज्ञानसञ्छिन्नसंशयम्।\nआत्मवन्तं न कर्माणि निबध्नन्ति धनञ्जय।।",
    transliteration: "yoga-sannyasta-karmāṇaṁ jñāna-sañchinna-saṁśayam\nātmavantaṁ na karmāṇi nibadhnanti dhanañjaya",

    translation: "One who has renounced actions through yoga, whose doubts are cut by knowledge, who is established in the Self—actions do not bind such a person, O Arjuna.",

    explanation: {
      simple: "Three things characterize the free person: they've renounced the fruits of action through yoga, their doubts have been cut by knowledge, and they're established in the Self. Such a person acts but isn't bound by action—karma has no grip.",
      deeper: "'Yoga-sannyasta-karma' (actions renounced through yoga)—not physical renunciation but inner renunciation of ownership and results. 'Jnana-sanchinna-samshaya' (doubts cut by knowledge)—not repressed but resolved. 'Atmavanta' (possessed of Self, established in Self)—identity rooted in the eternal, not the temporary. With all three, 'karmani na nibadhnanti' (actions don't bind)—complete freedom while fully engaged."
    },

    practicalApplication: "Work on all three: release attachment to outcomes (through karma yoga), resolve doubts through inquiry and knowledge (not by ignoring them), and identify with the witnessing Self rather than the acting ego. This triple approach leads to acting without bondage.",

    keyTerms: [
      { term: "Yoga-sannyasta-karma", meaning: "Actions renounced through yoga" },
      { term: "Sanchinna", meaning: "Cut, severed" },
      { term: "Samshaya", meaning: "Doubt" },
      { term: "Atmavant", meaning: "Established in Self" },
      { term: "Nibadhnanti", meaning: "Bind" }
    ],

    themes: ["freedom", "action", "doubt", "self"],
    difficulty: "intermediate",
    famousVerse: false
  },

  {
    chapter: 4,
    verse: 42,
    sanskrit: "तस्मादज्ञानसम्भूतं हृत्स्थं ज्ञानासिनात्मनः।\nछित्त्वैनं संशयं योगमातिष्ठोत्तिष्ठ भारत।।",
    transliteration: "tasmād ajñāna-sambhūtaṁ hṛt-sthaṁ jñānāsinātmanaḥ\nchittvainaṁ saṁśayaṁ yogam ātiṣṭhottiṣṭha bhārata",

    translation: "Therefore, with the sword of knowledge, cut this doubt born of ignorance dwelling in your heart. Take refuge in yoga and arise, O Arjuna!",

    explanation: {
      simple: "Krishna's conclusion: Take the sword of Self-knowledge and cut the doubt that's stuck in your heart—doubt born from ignorance. Establish yourself in yoga. Stand up and act! This is the call to decisive action based on understanding.",
      deeper: "'Jnana-asi' (sword of knowledge) is the weapon. 'Hrit-stha' (dwelling in the heart) locates the enemy—doubt isn't intellectual but lodged deep. 'Ajnana-sambhuta' (born of ignorance) identifies the source. 'Yoga' (union) is the stance. 'Uttishtha' (arise!) echoes Krishna's call to Arjuna throughout—stop wavering and act. The chapter ends with a battle cry: armed with knowledge, cut doubt, take your stand, and fight.",
    },

    practicalApplication: "Stop letting doubt keep you sitting. You've received knowledge—now use it. Cut through the hesitation in your heart. Take a yogic stance (balanced, centered, connected to Self) and rise to whatever your life is asking of you. The time for endless deliberation is over. Act!",

    keyTerms: [
      { term: "Jnana-asi", meaning: "Sword of knowledge" },
      { term: "Hrit-stha", meaning: "Dwelling in the heart" },
      { term: "Ajnana-sambhuta", meaning: "Born of ignorance" },
      { term: "Chittva", meaning: "Having cut" },
      { term: "Atishtha", meaning: "Take refuge, be established" },
      { term: "Uttishtha", meaning: "Arise, stand up" }
    ],

    themes: ["action", "knowledge", "doubt", "decision"],
    difficulty: "beginner",
    famousVerse: true
  }
];

// Chapter metadata
const chapter4: ChapterContent = {
  chapter: 4,
  name: {
    sanskrit: "Jnana Karma Sanyasa Yoga",
    english: "The Yoga of Knowledge and Action"
  },
  summary: "Krishna reveals the ancient teaching lineage—how this wisdom was taught at creation's dawn and passed through generations. He explains his divine incarnations: whenever dharma declines, he manifests to protect the good and restore righteousness. The chapter explores the profound relationship between action and knowledge, culminating in the declaration that knowledge is the supreme purifier. Various forms of sacrifice are described, but knowledge-sacrifice is highest. The chapter concludes with a powerful call: cut the doubt in your heart with the sword of knowledge, establish yourself in yoga, and arise!",
  keyThemes: ["knowledge", "incarnation", "avatar", "sacrifice", "action", "liberation", "teacher"],
  verseCount: 42,
  verses: verses
};

export default chapter4;
