import { VerseContent, ChapterContent } from '../verseTemplate';

const verses: VerseContent[] = [
  {
    chapter: 18,
    verse: 1,
    sanskrit: "अर्जुन उवाच\nसंन्यासस्य महाबाहो तत्त्वमिच्छामि वेदितुम्।\nत्यागस्य च हृषीकेश पृथक्केशिनिषूदन॥",
    transliteration: "arjuna uvāca\nsannyāsasya mahā-bāho tattvam icchāmi veditum\ntyāgasya ca hṛṣīkeśa pṛthak keśi-niṣūdana",
    translation: "Arjuna said: O mighty-armed one, I wish to understand the truth about renunciation (sannyasa) and about relinquishment (tyaga), O Hrishikesha, O slayer of Keshi.",
    explanation: {
      simple: "Arjuna asks Krishna to explain the difference between two types of giving up - sannyasa (complete renunciation of actions) and tyaga (giving up the fruits of actions).",
      deeper: "This question reflects Arjuna's maturity. After hearing 17 chapters, he seeks final clarity on the practical path. Sannyasa traditionally means renouncing all actions, while tyaga means performing actions without attachment. The three names used for Krishna (Mahabaho, Hrishikesha, Keshinisudhana) suggest Arjuna recognizes Krishna's power, mastery over senses, and ability to slay demons of confusion."
    },
    practicalApplication: "Before making major life decisions, seek clarity on the underlying principles. Don't confuse external renunciation with internal detachment - both have their place.",
    keyTerms: [
      { term: "Sannyasa", meaning: "complete renunciation of actions" },
      { term: "Tyaga", meaning: "relinquishment of fruits of actions" },
      { term: "Hrishikesha", meaning: "master of the senses" }
    ],
    themes: ["renunciation", "spiritual inquiry", "discrimination"],
    difficulty: "intermediate",
    famousVerse: true
  },
  {
    chapter: 18,
    verse: 2,
    sanskrit: "श्रीभगवानुवाच\nकाम्यानां कर्मणां न्यासं संन्यासं कवयो विदुः।\nसर्वकर्मफलत्यागं प्राहुस्त्यागं विचक्षणाः॥",
    transliteration: "śrī bhagavān uvāca\nkāmyānāṁ karmaṇāṁ nyāsaṁ sannyāsaṁ kavayo viduḥ\nsarva-karma-phala-tyāgaṁ prāhus tyāgaṁ vicakṣaṇāḥ",
    translation: "The Blessed Lord said: The sages understand sannyasa as the renunciation of desire-prompted actions; the wise declare tyaga as the relinquishment of the fruits of all actions.",
    explanation: {
      simple: "Krishna explains: Sannyasa means giving up actions done for selfish desires. Tyaga means doing all actions but giving up attachment to their results.",
      deeper: "Krishna presents two respected viewpoints from the tradition. Sannyasa focuses on eliminating desire-driven actions (kamya karma), while tyaga allows all actions but transforms the inner attitude. Both paths aim at freedom from bondage, but tyaga is more practical for most people living in the world."
    },
    practicalApplication: "You don't need to stop all activities to be spiritual. Transform your motivation - do what needs to be done, but release your grip on specific outcomes.",
    keyTerms: [
      { term: "Kamya karma", meaning: "desire-motivated actions" },
      { term: "Kavi", meaning: "wise sages, seers" },
      { term: "Vicakshana", meaning: "the discriminating wise" }
    ],
    themes: ["renunciation", "action", "wisdom traditions"],
    difficulty: "intermediate"
  },
  {
    chapter: 18,
    verse: 3,
    sanskrit: "त्याज्यं दोषवदित्येके कर्म प्राहुर्मनीषिणः।\nयज्ञदानतपःकर्म न त्याज्यमिति चापरे॥",
    transliteration: "tyājyaṁ doṣavad ity eke karma prāhur manīṣiṇaḥ\nyajña-dāna-tapaḥ-karma na tyājyam iti cāpare",
    translation: "Some learned ones declare that all action should be abandoned as evil; others say that acts of sacrifice, charity, and austerity should not be given up.",
    explanation: {
      simple: "Different teachers have different views. Some say give up all actions because they create bondage. Others say certain good actions like worship, giving, and self-discipline should never be abandoned.",
      deeper: "Krishna presents the philosophical debate of his time. Extreme renunciates (like some Jains and Buddhists) advocated total inaction. Orthodox Vedantins maintained that sacred duties purify and should continue. Krishna will resolve this apparent contradiction by distinguishing types of renunciation."
    },
    practicalApplication: "When faced with conflicting advice from experts, don't get paralyzed. Listen to multiple viewpoints, then seek the underlying principle that reconciles them.",
    keyTerms: [
      { term: "Dosha", meaning: "fault, defect" },
      { term: "Yajna", meaning: "sacrifice, worship" },
      { term: "Dana", meaning: "charity, giving" },
      { term: "Tapas", meaning: "austerity, self-discipline" }
    ],
    themes: ["philosophical debate", "action vs inaction", "spiritual practices"],
    difficulty: "intermediate"
  },
  {
    chapter: 18,
    verse: 4,
    sanskrit: "निश्चयं शृणु मे तत्र त्यागे भरतसत्तम।\nत्यागो हि पुरुषव्याघ्र त्रिविधः संप्रकीर्तितः॥",
    transliteration: "niścayaṁ śṛṇu me tatra tyāge bharata-sattama\ntyāgo hi puruṣa-vyāghra tri-vidhaḥ samprakīrtitaḥ",
    translation: "Hear from Me the conclusion about tyaga, O best of the Bharatas. Tyaga, O tiger among men, has been declared to be of three kinds.",
    explanation: {
      simple: "Krishna says He will now give the final answer about relinquishment. There are three types of tyaga (giving up), based on the three gunas.",
      deeper: "The terms 'Bharatasattama' (best of Bharatas) and 'Purusha-vyaghra' (tiger among men) honor Arjuna and signal that this teaching requires courage and discrimination. The threefold classification based on gunas will help Arjuna understand not just what to renounce, but how the quality of renunciation matters."
    },
    practicalApplication: "The quality of how you let go matters as much as what you let go of. Giving something up reluctantly is different from releasing it with understanding.",
    keyTerms: [
      { term: "Nischaya", meaning: "definite conclusion, certainty" },
      { term: "Tri-vidha", meaning: "threefold" },
      { term: "Purusha-vyaghra", meaning: "tiger among men" }
    ],
    themes: ["threefold classification", "renunciation", "gunas"],
    difficulty: "beginner"
  },
  {
    chapter: 18,
    verse: 5,
    sanskrit: "यज्ञदानतपःकर्म न त्याज्यं कार्यमेव तत्।\nयज्ञो दानं तपश्चैव पावनानि मनीषिणाम्॥",
    transliteration: "yajña-dāna-tapaḥ-karma na tyājyaṁ kāryam eva tat\nyajño dānaṁ tapaś caiva pāvanāni manīṣiṇām",
    translation: "Acts of sacrifice, charity, and austerity should not be abandoned; they must certainly be performed. Sacrifice, charity, and austerity are purifying for the wise.",
    explanation: {
      simple: "Krishna's clear answer: Never give up worship, giving, and self-discipline. These three practices purify even wise people and should always be continued.",
      deeper: "This is Krishna's definitive stance in the debate. While desire-driven actions can be abandoned, these three categories of action are intrinsically purifying (pavana). Even the wise (manishinam) - not just beginners - benefit from continued practice. This prevents spiritual bypassing where people think they're 'beyond' basic practices."
    },
    practicalApplication: "Maintain your spiritual practices regardless of how advanced you feel. Regular acts of devotion, generosity, and self-discipline keep purifying you throughout life.",
    keyTerms: [
      { term: "Pavana", meaning: "purifying" },
      { term: "Karya", meaning: "must be done, duty" },
      { term: "Manishin", meaning: "the wise, intelligent ones" }
    ],
    themes: ["purification", "spiritual practice", "duty"],
    difficulty: "beginner"
  },
  {
    chapter: 18,
    verse: 6,
    sanskrit: "एतान्यपि तु कर्माणि सङ्गं त्यक्त्वा फलानि च।\nकर्तव्यानीति मे पार्थ निश्चितं मतमुत्तमम्॥",
    transliteration: "etāny api tu karmāṇi saṅgaṁ tyaktvā phalāni ca\nkartavyānīti me pārtha niścitaṁ matam uttamam",
    translation: "But even these actions should be performed giving up attachment and fruits—this is My definite and highest teaching, O Partha.",
    explanation: {
      simple: "Even good actions like worship and charity should be done without attachment to them or their results. This is Krishna's final, highest instruction.",
      deeper: "The key word is 'api' (even) - even purifying actions can bind if done with attachment. The solution isn't stopping them but transforming the inner attitude. 'Nischitam matam uttamam' (definite highest opinion) signals this is Krishna's conclusive teaching on action, synthesizing all previous discussions."
    },
    practicalApplication: "Do your spiritual practices without pride ('I'm so disciplined') or expectation ('This meditation better make me enlightened'). The practice itself is the reward.",
    keyTerms: [
      { term: "Sanga", meaning: "attachment" },
      { term: "Phala", meaning: "fruit, result" },
      { term: "Uttama mata", meaning: "highest teaching/opinion" }
    ],
    themes: ["detachment", "nishkama karma", "highest teaching"],
    difficulty: "intermediate",
    famousVerse: true
  },
  {
    chapter: 18,
    verse: 7,
    sanskrit: "नियतस्य तु संन्यासः कर्मणो नोपपद्यते।\nमोहात्तस्य परित्यागस्तामसः परिकीर्तितः॥",
    transliteration: "niyatasya tu sannyāsaḥ karmaṇo nopapadyate\nmohāt tasya parityāgas tāmasaḥ parikīrtitaḥ",
    translation: "Renunciation of obligatory duties is not proper. Abandoning them through delusion is declared to be tamasic.",
    explanation: {
      simple: "It's wrong to give up your required duties. If you abandon responsibilities because of confusion or laziness, that's the lowest type of renunciation - tamasic.",
      deeper: "Niyata karma (obligatory duties) includes daily duties (nitya) and occasional duties (naimittika). These maintain cosmic and social order. Abandoning them from 'moha' (delusion) - thinking oneself above such actions or simply being lazy - is tamasic renunciation. It masquerades as spirituality but is actually ignorance."
    },
    practicalApplication: "Don't use spiritual excuses to avoid responsibilities. 'I'm too enlightened for housework' or 'I'm detached from my job' can be tamas in disguise.",
    keyTerms: [
      { term: "Niyata karma", meaning: "obligatory, prescribed duties" },
      { term: "Moha", meaning: "delusion, confusion" },
      { term: "Tamasa", meaning: "of the nature of tamas, ignorant" }
    ],
    themes: ["tamasic renunciation", "duty", "spiritual bypassing"],
    difficulty: "intermediate"
  },
  {
    chapter: 18,
    verse: 8,
    sanskrit: "दुःखमित्येव यत्कर्म कायक्लेशभयात्त्यजेत्।\nस कृत्वा राजसं त्यागं नैव त्यागफलं लभेत्॥",
    transliteration: "duḥkham ity eva yat karma kāya-kleśa-bhayāt tyajet\nsa kṛtvā rājasaṁ tyāgaṁ naiva tyāga-phalaṁ labhet",
    translation: "One who abandons action merely because it is painful or from fear of bodily discomfort—such renunciation is rajasic and does not yield the fruit of true relinquishment.",
    explanation: {
      simple: "If you give up duties just because they're difficult or uncomfortable, that's rajasic renunciation. You won't get the real benefits of letting go.",
      deeper: "Rajasic tyaga is motivated by avoidance of pain (duhkha) and physical effort (kaya-klesha). The person isn't seeking truth but comfort. Such renunciation provides temporary relief but no spiritual liberation because the attachment (to comfort) remains. The 'fruit of tyaga' is freedom, which requires facing difficulties, not fleeing them."
    },
    practicalApplication: "Notice when you're quitting something because it's genuinely wrong versus because it's hard. Growth often requires pushing through discomfort, not avoiding it.",
    keyTerms: [
      { term: "Kaya-klesha", meaning: "bodily difficulty, physical hardship" },
      { term: "Bhaya", meaning: "fear" },
      { term: "Rajasa tyaga", meaning: "passionate/restless renunciation" }
    ],
    themes: ["rajasic renunciation", "avoidance", "comfort-seeking"],
    difficulty: "intermediate"
  },
  {
    chapter: 18,
    verse: 9,
    sanskrit: "कार्यमित्येव यत्कर्म नियतं क्रियतेऽर्जुन।\nसङ्गं त्यक्त्वा फलं चैव स त्यागः सात्त्विको मतः॥",
    transliteration: "kāryam ity eva yat karma niyataṁ kriyate 'rjuna\nsaṅgaṁ tyaktvā phalaṁ caiva sa tyāgaḥ sāttviko mataḥ",
    translation: "When obligatory action is performed simply because it ought to be done, O Arjuna, abandoning attachment and fruit—that renunciation is considered sattvic.",
    explanation: {
      simple: "The best renunciation is doing your duties simply because they should be done, without attachment to the action itself or its results. This is sattvic tyaga.",
      deeper: "Sattvic tyaga has three elements: (1) Niyata karma - doing prescribed duties, not arbitrary actions; (2) Karya iti - done because it's right, not for pleasure or gain; (3) Sanga-phala tyaga - without attachment to action or results. This is the synthesis of karma yoga - full engagement with complete detachment."
    },
    practicalApplication: "Do what needs to be done because it's the right thing to do. Not for recognition, not for reward, not even because you enjoy it - simply because it's your dharma.",
    keyTerms: [
      { term: "Karya", meaning: "ought to be done, duty" },
      { term: "Sattvika tyaga", meaning: "pure renunciation" },
      { term: "Niyata karma", meaning: "prescribed, obligatory duty" }
    ],
    themes: ["sattvic renunciation", "nishkama karma", "duty"],
    difficulty: "intermediate",
    famousVerse: true
  },
  {
    chapter: 18,
    verse: 10,
    sanskrit: "न द्वेष्ट्यकुशलं कर्म कुशले नानुषज्जते।\nत्यागी सत्त्वसमाविष्टो मेधावी छिन्नसंशयः॥",
    transliteration: "na dveṣṭy akuśalaṁ karma kuśale nānuṣajjate\ntyāgī sattva-samāviṣṭo medhāvī chinna-saṁśayaḥ",
    translation: "The wise renouncer, imbued with sattva and free from doubt, neither hates unpleasant work nor is attached to pleasant work.",
    explanation: {
      simple: "A true renouncer doesn't hate difficult tasks or cling to enjoyable ones. Filled with clarity and wisdom, they are free from all doubt about what to do.",
      deeper: "This verse describes the psychology of the sattvic tyagi. They have equanimity toward both pleasant (kushala) and unpleasant (akushala) duties. 'Sattva-samavishta' means saturated with clarity. 'Medhavi' indicates practical wisdom. 'Chinna-samshaya' (doubt-free) recalls the goal stated in Chapter 4 - the sword of knowledge cuts all doubts."
    },
    practicalApplication: "Work on developing equanimity toward your tasks. Don't rush toward what you enjoy and drag your feet on what you dislike. Give both your full presence.",
    keyTerms: [
      { term: "Akushala", meaning: "unpleasant, inauspicious work" },
      { term: "Kushala", meaning: "pleasant, skillful, auspicious work" },
      { term: "Chinna-samshaya", meaning: "whose doubts are cut, doubt-free" }
    ],
    themes: ["equanimity", "wisdom", "doubt-free living"],
    difficulty: "intermediate"
  },
  {
    chapter: 18,
    verse: 11,
    sanskrit: "न हि देहभृता शक्यं त्यक्तुं कर्माण्यशेषतः।\nयस्तु कर्मफलत्यागी स त्यागीत्यभिधीयते॥",
    transliteration: "na hi deha-bhṛtā śakyaṁ tyaktuṁ karmāṇy aśeṣataḥ\nyas tu karma-phala-tyāgī sa tyāgīty abhidhīyate",
    translation: "It is indeed impossible for an embodied being to abandon actions entirely. But one who relinquishes the fruits of action is called a true renouncer.",
    explanation: {
      simple: "As long as you have a body, you cannot stop all action completely - you must breathe, eat, move. The real renouncer is one who gives up attachment to results, not actions themselves.",
      deeper: "This is Krishna's practical resolution of the sannyasa-tyaga question. Physical renunciation of all action is impossible for embodied beings (deha-bhrita). Even monks must eat and breathe. True renunciation (tyaga) is internal - releasing the fruits. This makes liberation accessible to everyone, not just forest-dwelling ascetics."
    },
    practicalApplication: "Stop trying to escape action and start transforming your relationship with outcomes. You can be a renouncer while fully engaged in life's activities.",
    keyTerms: [
      { term: "Deha-bhrit", meaning: "embodied being, one who bears a body" },
      { term: "Asheshata", meaning: "entirely, completely" },
      { term: "Karma-phala-tyagi", meaning: "one who renounces fruits of action" }
    ],
    themes: ["embodiment", "practical renunciation", "accessibility"],
    difficulty: "beginner",
    famousVerse: true
  },
  {
    chapter: 18,
    verse: 12,
    sanskrit: "अनिष्टमिष्टं मिश्रं च त्रिविधं कर्मणः फलम्।\nभवत्यत्यागिनां प्रेत्य न तु संन्यासिनां क्वचित्॥",
    transliteration: "aniṣṭam iṣṭaṁ miśraṁ ca tri-vidhaṁ karmaṇaḥ phalam\nbhavaty atyāgināṁ pretya na tu sannyāsināṁ kvacit",
    translation: "The threefold fruit of action—undesirable, desirable, and mixed—accrues after death to those who have not renounced, but never to those who have truly renounced.",
    explanation: {
      simple: "Actions produce three types of results: bad, good, or mixed. Those attached to fruits experience these results after death. True renouncers are completely free from karmic consequences.",
      deeper: "This verse explains the karmic mechanism. Attachment to fruits (not action itself) creates the bondage that continues after death (pretya). The three types of fruit correspond to painful, pleasant, and mixed rebirths. Sannyasins (true renouncers of fruits) break this cycle entirely. This is the ultimate benefit of tyaga - liberation from the wheel of karma."
    },
    practicalApplication: "Every action done with attachment creates future consequences. Working without attachment now frees you from accumulating future karmic debt.",
    keyTerms: [
      { term: "Anishta", meaning: "undesirable, unpleasant" },
      { term: "Ishta", meaning: "desirable, pleasant" },
      { term: "Mishra", meaning: "mixed" },
      { term: "Pretya", meaning: "after death, in the next life" }
    ],
    themes: ["karma", "three fruits", "liberation"],
    difficulty: "intermediate"
  },
  {
    chapter: 18,
    verse: 13,
    sanskrit: "पञ्चैतानि महाबाहो कारणानि निबोध मे।\nसाङ्ख्ये कृतान्ते प्रोक्तानि सिद्धये सर्वकर्मणाम्॥",
    transliteration: "pañcaitāni mahā-bāho kāraṇāni nibodha me\nsāṅkhye kṛtānte proktāni siddhaye sarva-karmaṇām",
    translation: "Learn from Me, O mighty-armed, these five causes as declared in the Sankhya philosophy for the accomplishment of all actions.",
    explanation: {
      simple: "Krishna begins teaching about the five factors needed for any action to happen, according to the ancient Sankhya philosophy.",
      deeper: "Krishna shifts to Sankhya analysis to help Arjuna understand action philosophically. 'Kritanta' can mean conclusion or Vedanta - indicating this is established doctrine. Understanding these five causes removes the false notion 'I alone am the doer,' which is the root of bondage. This prepares Arjuna for battle without ego."
    },
    practicalApplication: "When you understand that many factors contribute to any outcome, you naturally become humbler about success and less devastated by failure.",
    keyTerms: [
      { term: "Sankhya", meaning: "philosophical analysis, enumeration school" },
      { term: "Karana", meaning: "cause, factor" },
      { term: "Siddhi", meaning: "accomplishment, success" }
    ],
    themes: ["Sankhya philosophy", "causation", "action analysis"],
    difficulty: "intermediate"
  },
  {
    chapter: 18,
    verse: 14,
    sanskrit: "अधिष्ठानं तथा कर्ता करणं च पृथग्विधम्।\nविविधाश्च पृथक्चेष्टा दैवं चैवात्र पञ्चमम्॥",
    transliteration: "adhiṣṭhānaṁ tathā kartā karaṇaṁ ca pṛthag-vidham\nvividhāś ca pṛthak ceṣṭā daivaṁ caivātra pañcamam",
    translation: "The body (seat of action), the doer, the various instruments, the many kinds of efforts, and divine providence as the fifth—these are the five factors.",
    explanation: {
      simple: "Five things make any action possible: (1) the body as the base, (2) the individual soul as the doer, (3) the senses and organs as instruments, (4) the various efforts made, and (5) divine will or fate.",
      deeper: "Adhishthana (body) provides the platform. Karta (doer) is the individual self with its sense of agency. Karana (instruments) includes sense organs, motor organs, and mind. Cheshta (efforts) are the vital forces and movements. Daiva (providence) represents cosmic forces, past karma, and grace. No action occurs without all five cooperating."
    },
    practicalApplication: "Before taking credit or blame for outcomes, remember these five factors. Your effort is only one of five components. This isn't fatalism—it's accurate understanding.",
    keyTerms: [
      { term: "Adhishthana", meaning: "seat, base, body" },
      { term: "Karta", meaning: "doer, agent" },
      { term: "Karana", meaning: "instruments, senses" },
      { term: "Cheshta", meaning: "efforts, movements" },
      { term: "Daiva", meaning: "divine providence, fate" }
    ],
    themes: ["five factors", "causation", "humility"],
    difficulty: "intermediate",
    famousVerse: true
  },
  {
    chapter: 18,
    verse: 15,
    sanskrit: "शरीरवाङ्मनोभिर्यत्कर्म प्रारभते नरः।\nन्याय्यं वा विपरीतं वा पञ्चैते तस्य हेतवः॥",
    transliteration: "śarīra-vāṅ-manobhir yat karma prārabhate naraḥ\nnyāyyaṁ vā viparītaṁ vā pañcaite tasya hetavaḥ",
    translation: "Whatever action a person performs with body, speech, or mind—whether right or wrong—these five are its causes.",
    explanation: {
      simple: "Every action - physical, verbal, or mental - whether good or bad, requires all five factors. These five causes apply to all types of actions without exception.",
      deeper: "This universalizes the teaching. Actions through body (sharira), speech (vak), and mind (manas) - the threefold classification of karma - all depend on these five factors. Importantly, even wrong (viparita) actions require the same five factors. This isn't to excuse wrongdoing, but to show that no individual is the sole author of any action."
    },
    practicalApplication: "Understand that even your mistakes aren't solely 'yours.' Many factors contributed. This doesn't remove responsibility but reduces crushing guilt and supports learning.",
    keyTerms: [
      { term: "Sharira", meaning: "body" },
      { term: "Vak", meaning: "speech" },
      { term: "Manas", meaning: "mind" },
      { term: "Nyayya", meaning: "right, just, proper" },
      { term: "Viparita", meaning: "wrong, opposite, improper" }
    ],
    themes: ["universal causation", "three modes of action", "moral complexity"],
    difficulty: "intermediate"
  },
  {
    chapter: 18,
    verse: 16,
    sanskrit: "तत्रैवं सति कर्तारमात्मानं केवलं तु यः।\nपश्यत्यकृतबुद्धित्वान्न स पश्यति दुर्मतिः॥",
    transliteration: "tatraivam sati kartāram ātmānaṁ kevalaṁ tu yaḥ\npaśyaty akṛta-buddhitvān na sa paśyati durmatiḥ",
    translation: "This being so, one who due to impure understanding sees oneself alone as the doer does not truly see—such a person is of corrupted intelligence.",
    explanation: {
      simple: "Given that five factors are involved in every action, anyone who thinks 'I alone did this' has faulty understanding. They don't see reality clearly.",
      deeper: "The term 'akrita-buddhi' means unrefined or uncultivated intelligence - one who hasn't done the philosophical work to understand causation. 'Kevalam' (alone, solely) is the error - attributing complete agency to oneself. This ego-doer ('I did it') is the fundamental spiritual mistake. 'Durmati' (corrupted intellect) is strong language emphasizing the seriousness of this error."
    },
    practicalApplication: "Notice when you think 'I accomplished this all by myself.' Remember the body that supported you, the people who taught you, the circumstances that allowed it, and grace.",
    keyTerms: [
      { term: "Akrita-buddhi", meaning: "uncultivated intelligence" },
      { term: "Kevala", meaning: "alone, solely" },
      { term: "Durmati", meaning: "corrupted intelligence, fool" }
    ],
    themes: ["ego", "false doership", "ignorance"],
    difficulty: "intermediate"
  },
  {
    chapter: 18,
    verse: 17,
    sanskrit: "यस्य नाहंकृतो भावो बुद्धिर्यस्य न लिप्यते।\nहत्वापि स इमाँल्लोकान्न हन्ति न निबध्यते॥",
    transliteration: "yasya nāhaṁkṛto bhāvo buddhir yasya na lipyate\nhatvāpi sa imāl lokān na hanti na nibadhyate",
    translation: "One who is free from egoistic notion, whose intelligence is not tainted—even though slaying these people, does not slay and is not bound.",
    explanation: {
      simple: "A person free from ego ('I am the doer') and whose mind remains pure is not truly killing even when fighting in battle, and accumulates no karmic bondage.",
      deeper: "This addresses Arjuna's original dilemma directly. 'Ahamkrita bhava' is the ego-sense of doership. 'Na lipyate' means unstained, like a lotus leaf in water. From the absolute perspective, the Self neither kills nor is killed (as stated in Chapter 2). One established in this understanding acts without creating karma. This is not license for violence, but recognition that dharmic action performed without ego doesn't bind."
    },
    practicalApplication: "When you must take difficult necessary actions, do so with clarity rather than ego. Acting from dharmic duty without personal agenda keeps your conscience clear.",
    keyTerms: [
      { term: "Ahamkrita", meaning: "egoistic, 'I-made'" },
      { term: "Na lipyate", meaning: "is not tainted, stained" },
      { term: "Nibadhyate", meaning: "is bound" }
    ],
    themes: ["ego-free action", "non-binding karma", "warrior wisdom"],
    difficulty: "advanced",
    famousVerse: true
  },
  {
    chapter: 18,
    verse: 18,
    sanskrit: "ज्ञानं ज्ञेयं परिज्ञाता त्रिविधा कर्मचोदना।\nकरणं कर्म कर्तेति त्रिविधः कर्मसंग्रहः॥",
    transliteration: "jñānaṁ jñeyaṁ parijñātā tri-vidhā karma-codanā\nkaraṇaṁ karma karteti tri-vidhaḥ karma-saṅgrahaḥ",
    translation: "Knowledge, the object of knowledge, and the knower—these three impel action. The instrument, the action, and the agent—these three constitute the basis of action.",
    explanation: {
      simple: "Three things motivate action: knowing, what's known, and the knower. Three things comprise action: the tools used, the act itself, and the doer. Together, these six cover all aspects of action.",
      deeper: "Krishna presents two triads. The first (jnana, jneya, parijnata) is epistemological - how we know and decide to act. The second (karana, karma, karta) is operational - how action manifests. Understanding these components analytically dissolves the unified sense of 'I am doing this' into its constituent parts, reducing ego."
    },
    practicalApplication: "Break down your actions analytically: What knowledge drove this? What was I trying to achieve? What tools did I use? This analysis reduces ego and increases precision.",
    keyTerms: [
      { term: "Jnana", meaning: "knowledge" },
      { term: "Jneya", meaning: "object of knowledge" },
      { term: "Parijnata", meaning: "knower" },
      { term: "Karma-sangraha", meaning: "basis or aggregate of action" }
    ],
    themes: ["analysis of action", "epistemology", "components of karma"],
    difficulty: "advanced"
  },
  {
    chapter: 18,
    verse: 19,
    sanskrit: "ज्ञानं कर्म च कर्ता च त्रिधैव गुणभेदतः।\nप्रोच्यते गुणसंख्याने यथावच्छृणु तान्यपि॥",
    transliteration: "jñānaṁ karma ca kartā ca tridhaiva guṇa-bhedataḥ\nprocyate guṇa-saṅkhyāne yathāvac chṛṇu tāny api",
    translation: "Knowledge, action, and the agent are declared to be threefold according to the distinction of gunas in the Sankhya teaching. Hear properly about these also.",
    explanation: {
      simple: "Knowledge, action, and the doer each come in three varieties based on the three gunas (sattva, rajas, tamas). Krishna will now explain each type.",
      deeper: "This introduces the systematic threefold classification that will occupy verses 20-40. Rather than abstract philosophy, Krishna gives practical categories to help Arjuna (and us) evaluate our own knowledge, actions, and motivations. 'Guna-sankhyane' refers to the Sankhya enumeration system. Self-diagnosis using these categories enables spiritual progress."
    },
    practicalApplication: "Learn to identify whether your knowledge, actions, and self-image are sattvic, rajasic, or tamasic. This self-diagnosis is the first step toward transformation.",
    keyTerms: [
      { term: "Guna-bheda", meaning: "distinction by gunas" },
      { term: "Sankhya", meaning: "enumeration, analytical philosophy" },
      { term: "Yathavat", meaning: "properly, as it truly is" }
    ],
    themes: ["threefold classification", "gunas", "self-analysis"],
    difficulty: "intermediate"
  },
  {
    chapter: 18,
    verse: 20,
    sanskrit: "सर्वभूतेषु येनैकं भावमव्ययमीक्षते।\nअविभक्तं विभक्तेषु तज्ज्ञानं विद्धि सात्त्विकम्॥",
    transliteration: "sarva-bhūteṣu yenaikaṁ bhāvam avyayam īkṣate\navibhaktaṁ vibhakteṣu taj jñānaṁ viddhi sāttvikam",
    translation: "Know that knowledge to be sattvic by which one sees the one imperishable Reality in all beings—undivided in the divided.",
    explanation: {
      simple: "Sattvic knowledge is seeing the same unchanging spiritual essence in all beings. Though bodies and minds differ, the underlying consciousness is one and the same everywhere.",
      deeper: "This is the highest knowledge - perceiving unity in diversity. 'Avyaya' (imperishable) refers to the eternal Brahman or Atman. 'Avibhakta' in 'vibhakta' - undivided in the divided - captures the paradox of spiritual vision. While empirically seeing differences, the sattvic knower simultaneously perceives the underlying oneness. This is the vision that ends all conflict."
    },
    practicalApplication: "Practice seeing the same essential awareness in everyone you meet - regardless of their appearance, status, or behavior. This transforms how you treat all beings.",
    keyTerms: [
      { term: "Eka bhava", meaning: "one essence, single reality" },
      { term: "Avyaya", meaning: "imperishable, changeless" },
      { term: "Avibhakta", meaning: "undivided" },
      { term: "Vibhakta", meaning: "divided, separate" }
    ],
    themes: ["unity in diversity", "sattvic knowledge", "oneness"],
    difficulty: "advanced",
    famousVerse: true
  },
  {
    chapter: 18,
    verse: 21,
    sanskrit: "पृथक्त्वेन तु यज्ज्ञानं नानाभावान्पृथग्विधान्।\nवेत्ति सर्वेषु भूतेषु तज्ज्ञानं विद्धि राजसम्॥",
    transliteration: "pṛthaktvena tu yaj jñānaṁ nānā-bhāvān pṛthag-vidhān\nvetti sarveṣu bhūteṣu taj jñānaṁ viddhi rājasam",
    translation: "But that knowledge which sees in all beings various distinct entities of different kinds as separate from one another—know that knowledge to be rajasic.",
    explanation: {
      simple: "Rajasic knowledge sees only differences and separateness. It perceives many distinct types of beings but misses the underlying unity connecting them all.",
      deeper: "Rajasic knowledge is accurate at the empirical level but incomplete. It sees 'nana-bhava' (many essences) and 'prithag-vidha' (different kinds) - the diversity of creation. This knowledge enables worldly success and classification but maintains the sense of separation that causes competition, conflict, and suffering. It's not wrong, just partial."
    },
    practicalApplication: "Notice when you're categorizing and separating people into groups ('us vs them'). This is useful for some purposes but incomplete. Ask: what do we share?",
    keyTerms: [
      { term: "Prithaktva", meaning: "separateness, distinctness" },
      { term: "Nana-bhava", meaning: "many essences, diverse natures" },
      { term: "Prithag-vidha", meaning: "of different kinds" }
    ],
    themes: ["rajasic knowledge", "separation", "diversity without unity"],
    difficulty: "intermediate"
  },
  {
    chapter: 18,
    verse: 22,
    sanskrit: "यत्तु कृत्स्नवदेकस्मिन्कार्ये सक्तमहैतुकम्।\nअतत्त्वार्थवदल्पं च तत्तामसमुदाहृतम्॥",
    transliteration: "yat tu kṛtsnavad ekasmin kārye saktam ahaitukam\na-tattvārthavad alpaṁ ca tat tāmasam udāhṛtam",
    translation: "But that knowledge which clings to one single effect as if it were the whole, which is irrational, without basis in truth, and trivial—that is declared to be tamasic.",
    explanation: {
      simple: "Tamasic knowledge is narrow and obsessive - treating one small thing as if it were everything, without reason or connection to truth. It's petty and deluded thinking.",
      deeper: "Tamasic knowledge has several defects: 'kritsnavat ekasmin' - treating a fragment as complete; 'sakta' - obsessive attachment; 'ahaituka' - without rational basis; 'a-tattvarthavat' - not connected to truth; 'alpa' - trivial, petty. This describes fundamentalism, superstition, and narrow obsession. Such 'knowledge' distorts rather than illuminates."
    },
    practicalApplication: "Watch for when you're treating small issues as if they're everything, or holding beliefs without examining their basis. Tamasic knowledge feels certain but leads astray.",
    keyTerms: [
      { term: "Kritsnavat", meaning: "as if complete, as if the whole" },
      { term: "Ahaituka", meaning: "without reason, irrational" },
      { term: "Atattvarthavat", meaning: "not according to truth" },
      { term: "Alpa", meaning: "small, trivial, petty" }
    ],
    themes: ["tamasic knowledge", "delusion", "narrowness"],
    difficulty: "intermediate"
  },
  {
    chapter: 18,
    verse: 23,
    sanskrit: "नियतं सङ्गरहितमरागद्वेषतः कृतम्।\nअफलप्रेप्सुना कर्म यत्तत्सात्त्विकमुच्यते॥",
    transliteration: "niyataṁ saṅga-rahitam arāga-dveṣataḥ kṛtam\naphala-prepsunā karma yat tat sāttvikam ucyate",
    translation: "Action that is ordained, performed without attachment, without love or hate, by one not desiring fruit—that action is called sattvic.",
    explanation: {
      simple: "Sattvic action is doing your duty without attachment, without being driven by likes or dislikes, and without craving the results. It's pure, clean action.",
      deeper: "Four qualities define sattvic action: 'Niyata' - ordained/prescribed duty, not whimsical; 'Sanga-rahita' - without attachment to the act; 'Araga-dvesha' - free from attraction and aversion; 'Aphala-prepsu' - not desiring fruits. This is karma yoga perfected. The action flows naturally from dharma, not ego."
    },
    practicalApplication: "Before acting, check: Is this my duty? Am I attached to doing it or avoiding it? Am I driven by like/dislike? Am I fixated on outcomes? Adjust accordingly.",
    keyTerms: [
      { term: "Niyata", meaning: "ordained, prescribed" },
      { term: "Sanga-rahita", meaning: "free from attachment" },
      { term: "Araga-dvesha", meaning: "without attraction or aversion" },
      { term: "Aphala-prepsu", meaning: "not desiring fruit" }
    ],
    themes: ["sattvic action", "karma yoga", "detachment"],
    difficulty: "intermediate"
  },
  {
    chapter: 18,
    verse: 24,
    sanskrit: "यत्तु कामेप्सुना कर्म साहंकारेण वा पुनः।\nक्रियते बहुलायासं तद्राजसमुदाहृतम्॥",
    transliteration: "yat tu kāmepsunā karma sāhaṁkāreṇa vā punaḥ\nkriyate bahulāyāsaṁ tad rājasam udāhṛtam",
    translation: "But action performed with desire for fruits, or with egoism, or with much effort—that is declared to be rajasic.",
    explanation: {
      simple: "Rajasic action is done to get something you want, with a sense of 'I'm doing this,' and requires lots of strain and struggle. It's effortful, ego-driven action.",
      deeper: "'Kamepsuna' - desire for results drives the action. 'Sahamkara' - performed with ego, 'I am the doer.' 'Bahulayasa' - requires excessive effort, suggesting force rather than flow. Rajasic action may achieve worldly results but exhausts the doer and creates karmic bonds. The struggle and strain indicate resistance to natural flow."
    },
    practicalApplication: "Notice when work feels like a struggle. Is ego driving? Are you forcing outcomes? Are you exhausting yourself? This signals rajasic mode - consider stepping back.",
    keyTerms: [
      { term: "Kamepsu", meaning: "desiring objects, wanting results" },
      { term: "Sahamkara", meaning: "with ego, with 'I-sense'" },
      { term: "Bahulayasa", meaning: "much effort, excessive strain" }
    ],
    themes: ["rajasic action", "ego-driven effort", "desire"],
    difficulty: "intermediate"
  },
  {
    chapter: 18,
    verse: 25,
    sanskrit: "अनुबन्धं क्षयं हिंसामनपेक्ष्य च पौरुषम्।\nमोहादारभ्यते कर्म यत्तत्तामसमुच्यते॥",
    transliteration: "anubandhaṁ kṣayaṁ hiṁsām anapekṣya ca pauruṣam\nmohād ārabhyate karma yat tat tāmasam ucyate",
    translation: "Action undertaken from delusion, without considering consequences, loss, injury to others, or one's own capacity—that is declared to be tamasic.",
    explanation: {
      simple: "Tamasic action is done in confusion, without thinking about the results, harm to others, damage to yourself, or whether you can actually do it. It's blind, reckless action.",
      deeper: "Four failures mark tamasic action: ignoring 'anubandha' (consequences, bondage); ignoring 'kshaya' (destruction, loss); ignoring 'himsa' (harm to others); ignoring 'paurushya' (one's own capacity/limitations). 'Moha' (delusion) is the root - a cloudedness that prevents seeing clearly. Such action harms self and others while creating heavy karma."
    },
    practicalApplication: "Before major actions, pause: What are the consequences? What might be destroyed? Who could be hurt? Can I actually do this? Skipping this check is tamasic.",
    keyTerms: [
      { term: "Anubandha", meaning: "consequence, binding result" },
      { term: "Kshaya", meaning: "destruction, loss" },
      { term: "Himsa", meaning: "injury, harm to others" },
      { term: "Paurusha", meaning: "one's capacity, capability" }
    ],
    themes: ["tamasic action", "delusion", "recklessness"],
    difficulty: "intermediate"
  },
  {
    chapter: 18,
    verse: 26,
    sanskrit: "मुक्तसङ्गोऽनहंवादी धृत्युत्साहसमन्वितः।\nसिद्ध्यसिद्ध्योर्निर्विकारः कर्ता सात्त्विक उच्यते॥",
    transliteration: "mukta-saṅgo 'nahaṁ-vādī dhṛty-utsāha-samanvitaḥ\nsiddhy-asiddhyor nirvikāraḥ kartā sāttvika ucyate",
    translation: "The agent who is free from attachment, non-egoistic, endowed with fortitude and enthusiasm, and unchanged by success or failure—is called sattvic.",
    explanation: {
      simple: "A sattvic doer is free from attachment, doesn't boast 'I did it,' has steady courage and energy, and remains the same whether things succeed or fail.",
      deeper: "Five marks of the sattvic karta: 'Mukta-sanga' - free from attachment; 'Anahamvadi' - without ego-proclamation; 'Dhriti' - fortitude, steady resolve; 'Utsaha' - enthusiasm, energy; 'Nirvikara' - unchanged by outcomes. This describes someone acting from inner fullness rather than need. Success doesn't inflate them; failure doesn't crush them."
    },
    practicalApplication: "Cultivate these five qualities: release attachment, drop self-promotion, maintain steady resolve, bring genuine enthusiasm, and stay equanimous with results.",
    keyTerms: [
      { term: "Mukta-sanga", meaning: "free from attachment" },
      { term: "Anahamvadi", meaning: "without ego-speech, non-boasting" },
      { term: "Dhriti", meaning: "fortitude, steadiness" },
      { term: "Utsaha", meaning: "enthusiasm, energy" },
      { term: "Nirvikara", meaning: "unchanged, unaffected" }
    ],
    themes: ["sattvic agent", "equanimity", "egolessness"],
    difficulty: "intermediate",
    famousVerse: true
  },
  {
    chapter: 18,
    verse: 27,
    sanskrit: "रागी कर्मफलप्रेप्सुर्लुब्धो हिंसात्मकोऽशुचिः।\nहर्षशोकान्वितः कर्ता राजसः परिकीर्तितः॥",
    transliteration: "rāgī karma-phala-prepsur lubdho hiṁsātmako 'śuciḥ\nharṣa-śokānvitaḥ kartā rājasaḥ parikīrtitaḥ",
    translation: "The agent who is passionate, desirous of the fruits of action, greedy, harmful, impure, and subject to joy and sorrow—is declared to be rajasic.",
    explanation: {
      simple: "A rajasic doer is attached, wants results, is greedy and willing to harm others, is impure in methods, and swings between elation and depression based on outcomes.",
      deeper: "Six negative qualities mark the rajasic agent: 'Ragi' - passionate attachment; 'Karma-phala-prepsu' - craving results; 'Lubdha' - greedy, covetous; 'Himsatmaka' - prone to harm others; 'Ashuchi' - impure in means; 'Harsha-shoka-anvita' - tossed by joy and grief. This describes the driven achiever whose success comes at great personal and ethical cost."
    },
    practicalApplication: "Recognize these patterns in yourself: Am I driven by passion? Do I bend ethics for results? Am I on an emotional rollercoaster? These signal rajasic mode.",
    keyTerms: [
      { term: "Ragi", meaning: "passionate, attached" },
      { term: "Lubdha", meaning: "greedy" },
      { term: "Himsatmaka", meaning: "of harmful nature" },
      { term: "Ashuchi", meaning: "impure" },
      { term: "Harsha-shoka", meaning: "joy and sorrow" }
    ],
    themes: ["rajasic agent", "passion", "ethical compromise"],
    difficulty: "intermediate"
  },
  {
    chapter: 18,
    verse: 28,
    sanskrit: "अयुक्तः प्राकृतः स्तब्धः शठो नैष्कृतिकोऽलसः।\nविषादी दीर्घसूत्री च कर्ता तामस उच्यते॥",
    transliteration: "ayuktaḥ prākṛtaḥ stabdhaḥ śaṭho naiṣkṛtiko 'lasaḥ\nviṣādī dīrgha-sūtrī ca kartā tāmasa ucyate",
    translation: "The agent who is undisciplined, vulgar, stubborn, deceitful, malicious, lazy, despondent, and procrastinating—is called tamasic.",
    explanation: {
      simple: "A tamasic doer is uncontrolled, crude, rigid, dishonest, spiteful, lazy, depressed, and always putting things off. They lack the energy and clarity for right action.",
      deeper: "Eight qualities define the tamasic agent: 'Ayukta' - undisciplined, disconnected; 'Prakrita' - vulgar, uncultured; 'Stabdha' - obstinate, rigid; 'Shatha' - deceitful; 'Naishkritika' - malicious, causing others' ruin; 'Alasa' - lazy; 'Vishadi' - despondent; 'Dirgha-sutri' - procrastinating (literally 'long-threaded'). This paints a picture of darkness and dysfunction."
    },
    practicalApplication: "If you recognize procrastination, dishonesty, laziness, or chronic negativity in yourself, acknowledge the tamasic influence. The first step out is honest self-assessment.",
    keyTerms: [
      { term: "Ayukta", meaning: "undisciplined, unconnected" },
      { term: "Stabdha", meaning: "stubborn, obstinate" },
      { term: "Shatha", meaning: "deceitful" },
      { term: "Alasa", meaning: "lazy, idle" },
      { term: "Dirgha-sutri", meaning: "procrastinator" }
    ],
    themes: ["tamasic agent", "dysfunction", "darkness"],
    difficulty: "intermediate"
  },
  {
    chapter: 18,
    verse: 29,
    sanskrit: "बुद्धेर्भेदं धृतेश्चैव गुणतस्त्रिविधं शृणु।\nप्रोच्यमानमशेषेण पृथक्त्वेन धनञ्जय॥",
    transliteration: "buddher bhedaṁ dhṛteś caiva guṇatas tri-vidhaṁ śṛṇu\nprocyamānam aśeṣeṇa pṛthaktvena dhanañjaya",
    translation: "Hear now, O Dhananjaya, the threefold distinction of intellect and also of fortitude according to the gunas, explained completely and separately.",
    explanation: {
      simple: "Krishna will now explain three types of intellect (buddhi) and three types of determination (dhriti), based on the three gunas - sattva, rajas, and tamas.",
      deeper: "Having covered knowledge, action, and agent, Krishna now addresses buddhi (discriminative faculty) and dhriti (sustaining willpower). 'Asheshena' (completely) and 'prithaktvena' (separately) indicate thorough, detailed teaching. Dhananjaya (conqueror of wealth) reminds Arjuna of his capacity for achievement - now directed inward."
    },
    practicalApplication: "Understanding how your decision-making faculty and willpower are affected by the gunas helps you make better choices and sustain good practices.",
    keyTerms: [
      { term: "Buddhi", meaning: "intellect, discriminative faculty" },
      { term: "Dhriti", meaning: "fortitude, sustaining will" },
      { term: "Dhananjaya", meaning: "conqueror of wealth" }
    ],
    themes: ["threefold intellect", "threefold fortitude", "discrimination"],
    difficulty: "beginner"
  },
  {
    chapter: 18,
    verse: 30,
    sanskrit: "प्रवृत्तिं च निवृत्तिं च कार्याकार्ये भयाभये।\nबन्धं मोक्षं च या वेत्ति बुद्धिः सा पार्थ सात्त्विकी॥",
    transliteration: "pravṛttiṁ ca nivṛttiṁ ca kāryākārye bhayābhaye\nbandhaṁ mokṣaṁ ca yā vetti buddhiḥ sā pārtha sāttvikī",
    translation: "That intellect which knows when to act and when to withdraw, what ought to be done and what not, what to fear and what not, what binds and what liberates—that, O Partha, is sattvic.",
    explanation: {
      simple: "Sattvic intellect clearly knows: when to engage and when to hold back, right action from wrong, real dangers from false ones, and what leads to bondage versus freedom.",
      deeper: "Four pairs of discrimination define sattvic buddhi: 'Pravritti-nivritti' - engagement and withdrawal; 'Karya-akarya' - duty and non-duty; 'Bhaya-abhaya' - proper and improper fear; 'Bandha-moksha' - bondage and liberation. This comprehensive discernment navigates all life situations wisely. It sees correctly at both practical and spiritual levels."
    },
    practicalApplication: "Develop discrimination through reflection: Is this the right time to act? Should I do this? What should I actually fear? Does this free me or bind me?",
    keyTerms: [
      { term: "Pravritti", meaning: "engagement, outward action" },
      { term: "Nivritti", meaning: "withdrawal, inward turning" },
      { term: "Karya-akarya", meaning: "ought and ought not" },
      { term: "Bandha-moksha", meaning: "bondage and liberation" }
    ],
    themes: ["sattvic intellect", "discrimination", "wisdom"],
    difficulty: "intermediate",
    famousVerse: true
  },
  {
    chapter: 18,
    verse: 31,
    sanskrit: "यया धर्ममधर्मं च कार्यं चाकार्यमेव च।\nअयथावत्प्रजानाति बुद्धिः सा पार्थ राजसी॥",
    transliteration: "yayā dharmam adharmaṁ ca kāryaṁ cākāryam eva ca\nayathāvat prajānāti buddhiḥ sā pārtha rājasī",
    translation: "That intellect which incorrectly understands dharma and adharma, and what ought to be done and what ought not—that, O Partha, is rajasic.",
    explanation: {
      simple: "Rajasic intellect gets confused about right and wrong, duty and non-duty. It has some understanding but makes mistakes about what's truly ethical or required.",
      deeper: "'Ayathavat' means 'not as it truly is' - partial or distorted understanding. The rajasic buddhi isn't completely dark but sees through the lens of desire and ego, leading to rationalization and self-serving interpretations of dharma. It justifies wrong actions and neglects true duties because passion clouds judgment."
    },
    practicalApplication: "Notice when you're rationalizing something questionable as 'okay' or dismissing a duty as 'unnecessary.' Passion can distort your ethical compass.",
    keyTerms: [
      { term: "Dharma-adharma", meaning: "right and wrong, righteousness and unrighteousness" },
      { term: "Ayathavat", meaning: "incorrectly, not as it is" },
      { term: "Prajanati", meaning: "understands, knows" }
    ],
    themes: ["rajasic intellect", "distorted understanding", "rationalization"],
    difficulty: "intermediate"
  },
  {
    chapter: 18,
    verse: 32,
    sanskrit: "अधर्मं धर्ममिति या मन्यते तमसावृता।\nसर्वार्थान्विपरीतांश्च बुद्धिः सा पार्थ तामसी॥",
    transliteration: "adharmaṁ dharmam iti yā manyate tamasāvṛtā\nsarvārthān viparītāṁś ca buddhiḥ sā pārtha tāmasī",
    translation: "That intellect which, enveloped in darkness, regards adharma as dharma and sees all things in a perverted way—that, O Partha, is tamasic.",
    explanation: {
      simple: "Tamasic intellect is completely backwards - it thinks wrong is right. Covered in darkness, it sees everything in a twisted, inverted way.",
      deeper: "'Tamasavrrita' - enveloped in darkness, indicates the root cause. This isn't partial understanding but complete inversion. The tamasic mind genuinely believes adharma is dharma. 'Sarva-arthan viparitan' - it sees all meanings/purposes inverted. This describes moral blindness, where harmful actions are celebrated and beneficial ones condemned."
    },
    practicalApplication: "Be wary when you're certain you're right while everyone wise disagrees. Complete conviction combined with inverted values is the hallmark of tamasic intellect.",
    keyTerms: [
      { term: "Tamasavrrita", meaning: "covered by darkness" },
      { term: "Viparita", meaning: "perverted, inverted, opposite" },
      { term: "Sarva-artha", meaning: "all meanings, all purposes" }
    ],
    themes: ["tamasic intellect", "moral inversion", "darkness"],
    difficulty: "intermediate"
  },
  {
    chapter: 18,
    verse: 33,
    sanskrit: "धृत्या यया धारयते मनःप्राणेन्द्रियक्रियाः।\nयोगेनाव्यभिचारिण्या धृतिः सा पार्थ सात्त्विकी॥",
    transliteration: "dhṛtyā yayā dhārayate manaḥ-prāṇendriya-kriyāḥ\nyogenāvyabhicāriṇyā dhṛtiḥ sā pārtha sāttvikī",
    translation: "The fortitude by which one holds firm the activities of mind, prana, and senses through unswerving yoga—that, O Partha, is sattvic.",
    explanation: {
      simple: "Sattvic fortitude is the steady willpower that keeps your mind, energy, and senses under control through consistent spiritual practice. It doesn't waver.",
      deeper: "'Dharayate' (holds firm) indicates sustained control. The three domains - manas (mind), prana (vital energy), and indriya (senses) - cover all internal activity. 'Avyabhicharini' means unswerving, completely faithful to the practice. This dhriti enables yoga to work over time, maintaining discipline through difficulties."
    },
    practicalApplication: "Cultivate the willpower to maintain your spiritual practices consistently - not just when you feel like it. Sattvic fortitude means not abandoning your path.",
    keyTerms: [
      { term: "Dhriti", meaning: "fortitude, sustaining willpower" },
      { term: "Manas", meaning: "mind" },
      { term: "Prana", meaning: "vital energy, life force" },
      { term: "Indriya", meaning: "senses" },
      { term: "Avyabhicharini", meaning: "unswerving, unfailing" }
    ],
    themes: ["sattvic fortitude", "self-discipline", "yoga"],
    difficulty: "intermediate"
  },
  {
    chapter: 18,
    verse: 34,
    sanskrit: "यया तु धर्मकामार्थान्धृत्या धारयतेऽर्जुन।\nप्रसङ्गेन फलाकाङ्क्षी धृतिः सा पार्थ राजसी॥",
    transliteration: "yayā tu dharma-kāmārthān dhṛtyā dhārayate 'rjuna\nprasaṅgena phalākāṅkṣī dhṛtiḥ sā pārtha rājasī",
    translation: "But the fortitude by which one holds to dharma, desire, and wealth with attachment, craving their fruits, O Arjuna—that, O Partha, is rajasic.",
    explanation: {
      simple: "Rajasic fortitude is the willpower used to pursue righteousness, pleasure, and wealth with attachment, always wanting the rewards they bring.",
      deeper: "The three purusharthas - dharma (duty), kama (desire), artha (wealth) - are legitimate goals, but 'prasangena' (with attachment) and 'phalakankshi' (desiring fruits) transform the pursuit. Rajasic dhriti sustains effort but for self-centered rewards. It can achieve worldly success but doesn't lead to liberation because attachment remains."
    },
    practicalApplication: "You can have strong willpower and still be rajasic. Check your motivation: Are you pursuing goals for the rewards, or from a sense of dharma?",
    keyTerms: [
      { term: "Dharma-kama-artha", meaning: "duty, desire, wealth (three goals)" },
      { term: "Prasanga", meaning: "attachment" },
      { term: "Phalakankshi", meaning: "desiring fruit, wanting results" }
    ],
    themes: ["rajasic fortitude", "attached pursuit", "worldly goals"],
    difficulty: "intermediate"
  },
  {
    chapter: 18,
    verse: 35,
    sanskrit: "यया स्वप्नं भयं शोकं विषादं मदमेव च।\nन विमुञ्चति दुर्मेधा धृतिः सा पार्थ तामसी॥",
    transliteration: "yayā svapnaṁ bhayaṁ śokaṁ viṣādaṁ madam eva ca\nna vimuñcati durmedhā dhṛtiḥ sā pārtha tāmasī",
    translation: "The fortitude by which a fool does not give up excess sleep, fear, grief, depression, and arrogance—that, O Partha, is tamasic.",
    explanation: {
      simple: "Tamasic fortitude is the stubborn clinging to sleep, fear, sadness, despair, and pride. It's the 'willpower' that keeps you stuck in negative states.",
      deeper: "'Durmedha' (dull-witted, fool) characterizes the tamasic person. The five things clung to - 'svapna' (excess sleep/fantasy), 'bhaya' (fear), 'shoka' (grief), 'vishada' (depression), 'mada' (arrogance) - represent darkness. Tamasic dhriti is perverse persistence in harmful states, refusing to change. It takes willpower to stay depressed when help is available."
    },
    practicalApplication: "Notice what negative states you stubbornly maintain. Sometimes we perversely cling to our suffering, fears, or pride. That's tamasic willpower misapplied.",
    keyTerms: [
      { term: "Svapna", meaning: "sleep, dream, fantasy" },
      { term: "Vishada", meaning: "despair, depression" },
      { term: "Mada", meaning: "arrogance, intoxication" },
      { term: "Durmedha", meaning: "dull-witted, fool" }
    ],
    themes: ["tamasic fortitude", "clinging to negativity", "perverse persistence"],
    difficulty: "intermediate"
  },
  {
    chapter: 18,
    verse: 36,
    sanskrit: "सुखं त्विदानीं त्रिविधं शृणु मे भरतर्षभ।\nअभ्यासाद्रमते यत्र दुःखान्तं च निगच्छति॥",
    transliteration: "sukhaṁ tv idānīṁ tri-vidhaṁ śṛṇu me bharatarṣabha\nabhyāsād ramate yatra duḥkhāntaṁ ca nigacchati",
    translation: "Now hear from Me, O bull among the Bharatas, about the threefold happiness. That happiness in which one rejoices through practice and reaches the end of sorrow...",
    explanation: {
      simple: "Krishna introduces three types of happiness. True happiness comes through practice and leads to the complete end of suffering.",
      deeper: "This verse sets up the happiness discussion and begins describing sattvic happiness. 'Abhyasa' (practice, repeated effort) indicates that the highest happiness isn't instantly available but develops through spiritual discipline. 'Duhkhanta' (end of sorrow) is the ultimate test - does this happiness lead to permanent peace or continued suffering?"
    },
    practicalApplication: "Evaluate your pleasures: Does this happiness require practice to appreciate? Does it lead toward less suffering or more? This distinguishes true from false happiness.",
    keyTerms: [
      { term: "Sukha", meaning: "happiness, pleasure" },
      { term: "Abhyasa", meaning: "practice, repeated effort" },
      { term: "Duhkhanta", meaning: "end of sorrow" },
      { term: "Bharatarshabha", meaning: "bull among Bharatas" }
    ],
    themes: ["threefold happiness", "practice", "end of suffering"],
    difficulty: "beginner"
  },
  {
    chapter: 18,
    verse: 37,
    sanskrit: "यत्तदग्रे विषमिव परिणामेऽमृतोपमम्।\nतत्सुखं सात्त्विकं प्रोक्तमात्मबुद्धिप्रसादजम्॥",
    transliteration: "yat tad agre viṣam iva pariṇāme 'mṛtopamam\ntat sukhaṁ sāttvikaṁ proktam ātma-buddhi-prasāda-jam",
    translation: "That happiness which is like poison in the beginning but like nectar in the end, born from the clarity of self-knowledge—that is declared to be sattvic.",
    explanation: {
      simple: "Sattvic happiness seems difficult at first (like poison) but becomes nectar-like over time. It comes from the clear, peaceful mind that knows the Self.",
      deeper: "The metaphor is powerful: 'agre visham iva' - like poison initially, referring to the effort of discipline, early morning practices, giving up pleasures. 'Pariname amritopamam' - transforms into nectar-like immortality. 'Atma-buddhi-prasadaja' - born from the serenity of self-aware intellect. This happiness is earned and permanent."
    },
    practicalApplication: "Don't judge practices by initial experience. Meditation may feel boring at first, discipline painful. Persist - the nectar comes later. Short-term discomfort, long-term bliss.",
    keyTerms: [
      { term: "Visha", meaning: "poison" },
      { term: "Amrita", meaning: "nectar, immortality" },
      { term: "Pariṇama", meaning: "result, outcome, transformation" },
      { term: "Atma-buddhi-prasada", meaning: "serenity of self-knowing intellect" }
    ],
    themes: ["sattvic happiness", "delayed gratification", "spiritual joy"],
    difficulty: "intermediate",
    famousVerse: true
  },
  {
    chapter: 18,
    verse: 38,
    sanskrit: "विषयेन्द्रियसंयोगाद्यत्तदग्रेऽमृतोपमम्।\nपरिणामे विषमिव तत्सुखं राजसं स्मृतम्॥",
    transliteration: "viṣayendriya-saṁyogād yat tad agre 'mṛtopamam\npariṇāme viṣam iva tat sukhaṁ rājasaṁ smṛtam",
    translation: "That happiness which arises from the contact of senses with objects, which is like nectar in the beginning but like poison in the end—that is remembered as rajasic.",
    explanation: {
      simple: "Rajasic happiness comes from sense pleasures - it seems wonderful at first but turns poisonous over time. Think of addiction, overindulgence, or unhealthy attachments.",
      deeper: "'Vishaya-indriya-samyoga' - the union of senses with sense objects - is the source. This happiness is immediate ('agre amritopamam') but degrades ('pariname visham iva'). Examples include substance addiction, lustful relationships, excessive eating - delightful initially, destructive eventually. The reversal of the sattvic pattern is exact and instructive."
    },
    practicalApplication: "When something feels amazing immediately with no effort, be cautious. Ask: What will this feel like in a year? In ten years? Instant gratification often leads to long-term regret.",
    keyTerms: [
      { term: "Vishaya-indriya-samyoga", meaning: "contact of senses with objects" },
      { term: "Agre", meaning: "in the beginning" },
      { term: "Parinama", meaning: "in the end, result" }
    ],
    themes: ["rajasic happiness", "sense pleasure", "addiction"],
    difficulty: "intermediate"
  },
  {
    chapter: 18,
    verse: 39,
    sanskrit: "यदग्रे चानुबन्धे च सुखं मोहनमात्मनः।\nनिद्रालस्यप्रमादोत्थं तत्तामसमुदाहृतम्॥",
    transliteration: "yad agre cānubandhe ca sukhaṁ mohanam ātmanaḥ\nnidrālasya-pramādotthaṁ tat tāmasam udāhṛtam",
    translation: "That happiness which deludes the self both in the beginning and in consequence, arising from sleep, laziness, and negligence—that is declared to be tamasic.",
    explanation: {
      simple: "Tamasic happiness fools you from start to finish. It comes from oversleeping, laziness, and carelessness - feeling good about doing nothing meaningful.",
      deeper: "'Mohanam atmanah' - it deludes the self, meaning the person doesn't even recognize the problem. Unlike rajasic pleasure (which eventually reveals its poison), tamasic 'happiness' maintains delusion throughout ('agre' and 'anubandhe'). 'Nidra-alasya-pramada' - sleep, sloth, heedlessness - are its sources. This is the contentment of unconsciousness."
    },
    practicalApplication: "Notice the 'happiness' of avoidance - staying in bed, binge-watching, numbing out. It feels okay but goes nowhere. This isn't rest; it's tamasic escapism.",
    keyTerms: [
      { term: "Mohana", meaning: "deluding, bewildering" },
      { term: "Nidra", meaning: "sleep, drowsiness" },
      { term: "Alasya", meaning: "laziness, sloth" },
      { term: "Pramada", meaning: "negligence, heedlessness" }
    ],
    themes: ["tamasic happiness", "delusion", "escapism"],
    difficulty: "intermediate"
  },
  {
    chapter: 18,
    verse: 40,
    sanskrit: "न तदस्ति पृथिव्यां वा दिवि देवेषु वा पुनः।\nसत्त्वं प्रकृतिजैर्मुक्तं यदेभिः स्यात्त्रिभिर्गुणैः॥",
    transliteration: "na tad asti pṛthivyāṁ vā divi deveṣu vā punaḥ\nsattvaṁ prakṛti-jair muktaṁ yad ebhiḥ syāt tribhir guṇaiḥ",
    translation: "There is no being on earth or in heaven among the gods that is free from these three gunas born of prakriti.",
    explanation: {
      simple: "Nothing in all creation - whether on earth or in heaven - is free from the three gunas. Even the gods are influenced by sattva, rajas, and tamas.",
      deeper: "This verse concludes the threefold analysis with a universal statement. 'Prithivyam' (on earth) and 'divi deveshu' (in heaven among gods) covers all manifested existence. 'Prakriti-ja' - born from material nature - indicates the gunas are inherent to creation itself. Only transcendence of prakriti (through liberation) frees one from guna influence."
    },
    practicalApplication: "Don't expect perfection while embodied. The goal isn't eliminating gunas but recognizing their influence and progressively cultivating sattva while transcending all three.",
    keyTerms: [
      { term: "Prithivi", meaning: "earth" },
      { term: "Divi", meaning: "in heaven" },
      { term: "Deva", meaning: "gods, divine beings" },
      { term: "Prakriti-ja", meaning: "born of material nature" }
    ],
    themes: ["universality of gunas", "material nature", "all creation"],
    difficulty: "intermediate"
  },
  {
    chapter: 18,
    verse: 41,
    sanskrit: "ब्राह्मणक्षत्रियविशां शूद्राणां च परन्तप।\nकर्माणि प्रविभक्तानि स्वभावप्रभवैर्गुणैः॥",
    transliteration: "brāhmaṇa-kṣatriya-viśāṁ śūdrāṇāṁ ca parantapa\nkarmāṇi pravibhaktāni svabhāva-prabhavair guṇaiḥ",
    translation: "The duties of Brahmanas, Kshatriyas, Vaishyas, and Shudras, O scorcher of foes, are distributed according to the qualities born of their own nature.",
    explanation: {
      simple: "The duties of the four social groups are assigned based on the natural qualities and tendencies each person is born with, not arbitrary rules.",
      deeper: "'Svabhava-prabhava' (born from one's own nature) is crucial - varna is based on inherent qualities (guna) and tendencies (karma), not birth alone. This psychological interpretation sees the four varnas as representing different human temperaments: contemplative, protective, enterprising, and service-oriented. Everyone has a natural disposition that determines their optimal role."
    },
    practicalApplication: "Find work aligned with your natural temperament. Don't force yourself into roles that contradict your inherent nature. Self-knowledge reveals your optimal contribution.",
    keyTerms: [
      { term: "Brahmana", meaning: "priestly/scholarly class" },
      { term: "Kshatriya", meaning: "warrior/administrator class" },
      { term: "Vaishya", meaning: "merchant/farmer class" },
      { term: "Shudra", meaning: "service/artisan class" },
      { term: "Svabhava", meaning: "one's own nature" }
    ],
    themes: ["varna", "natural duty", "social roles"],
    difficulty: "intermediate"
  },
  {
    chapter: 18,
    verse: 42,
    sanskrit: "शमो दमस्तपः शौचं क्षान्तिरार्जवमेव च।\nज्ञानं विज्ञानमास्तिक्यं ब्रह्मकर्म स्वभावजम्॥",
    transliteration: "śamo damas tapaḥ śaucaṁ kṣāntir ārjavam eva ca\njñānaṁ vijñānam āstikyaṁ brahma-karma svabhāva-jam",
    translation: "Serenity, self-control, austerity, purity, patience, uprightness, knowledge, wisdom, and faith—these are the duties of the Brahmana, born of his nature.",
    explanation: {
      simple: "The natural work of a Brahmana involves nine qualities: mental peace, sense control, discipline, cleanliness, forbearance, honesty, learning, wisdom, and spiritual faith.",
      deeper: "Nine qualities define the Brahmana temperament: 'Shama' - mental tranquility; 'Dama' - sense control; 'Tapa' - austerity; 'Shaucha' - purity; 'Kshanti' - patience; 'Arjava' - straightforwardness; 'Jnana' - theoretical knowledge; 'Vijnana' - applied wisdom; 'Astikyam' - faith in scriptures and spiritual reality. These describe the contemplative, teaching personality."
    },
    practicalApplication: "If you naturally gravitate toward learning, teaching, reflection, and spiritual matters, honor that temperament. Cultivate these nine qualities to fulfill your nature.",
    keyTerms: [
      { term: "Shama", meaning: "mental serenity" },
      { term: "Dama", meaning: "sense control" },
      { term: "Kshanti", meaning: "patience, forbearance" },
      { term: "Jnana-vijnana", meaning: "knowledge and wisdom" },
      { term: "Astikyam", meaning: "faith" }
    ],
    themes: ["Brahmana dharma", "contemplative nature", "nine qualities"],
    difficulty: "intermediate"
  },
  {
    chapter: 18,
    verse: 43,
    sanskrit: "शौर्यं तेजो धृतिर्दाक्ष्यं युद्धे चाप्यपलायनम्।\nदानमीश्वरभावश्च क्षात्रं कर्म स्वभावजम्॥",
    transliteration: "śauryaṁ tejo dhṛtir dākṣyaṁ yuddhe cāpy apalāyanam\ndānam īśvara-bhāvaś ca kṣātraṁ karma svabhāva-jam",
    translation: "Valor, brilliance, fortitude, skillfulness, not fleeing from battle, generosity, and lordly nature—these are the duties of the Kshatriya, born of his nature.",
    explanation: {
      simple: "The natural work of a Kshatriya includes seven qualities: courage, energy, determination, competence, steadfastness in conflict, giving generously, and leadership ability.",
      deeper: "Seven qualities define the Kshatriya temperament: 'Shaurya' - heroism; 'Teja' - brilliance/vigor; 'Dhriti' - firmness; 'Dakshya' - resourcefulness; 'Yuddhe apalaynam' - not retreating in battle; 'Dana' - generosity; 'Ishvara-bhava' - leadership capacity. This describes the protective, administrative, governing personality - natural warriors and leaders."
    },
    practicalApplication: "If you're naturally courageous, energetic, and drawn to leadership and protection, honor that temperament. Develop these qualities for responsible use of power.",
    keyTerms: [
      { term: "Shaurya", meaning: "valor, heroism" },
      { term: "Tejas", meaning: "brilliance, vigor" },
      { term: "Dakshya", meaning: "skill, resourcefulness" },
      { term: "Ishvara-bhava", meaning: "lordliness, leadership nature" }
    ],
    themes: ["Kshatriya dharma", "warrior nature", "leadership"],
    difficulty: "intermediate"
  },
  {
    chapter: 18,
    verse: 44,
    sanskrit: "कृषिगौरक्ष्यवाणिज्यं वैश्यकर्म स्वभावजम्।\nपरिचर्यात्मकं कर्म शूद्रस्यापि स्वभावजम्॥",
    transliteration: "kṛṣi-gau-rakṣya-vāṇijyaṁ vaiśya-karma svabhāva-jam\nparicaryātmakaṁ karma śūdrasyāpi svabhāva-jam",
    translation: "Agriculture, cattle-rearing, and trade are the natural work of the Vaishya. Service is the natural work of the Shudra.",
    explanation: {
      simple: "Vaishyas are naturally suited for farming, animal husbandry, and commerce. Shudras find fulfillment in service and supporting others' work.",
      deeper: "Vaishya karma involves 'krishi' (agriculture), 'gau-rakshya' (cattle protection), and 'vanijya' (trade) - productive and commercial activities. Shudra karma is 'paricharya' (service) - supporting and assisting. These aren't inferior; they're different natural orientations. A society needs all four functions. Each temperament finds fulfillment in its appropriate work."
    },
    practicalApplication: "If you're naturally entrepreneurial, productive, or service-oriented, embrace that. Every role serves society. Fulfillment comes from doing your nature's work excellently.",
    keyTerms: [
      { term: "Krishi", meaning: "agriculture" },
      { term: "Gau-rakshya", meaning: "cattle protection" },
      { term: "Vanijya", meaning: "trade, commerce" },
      { term: "Paricharya", meaning: "service, attendance" }
    ],
    themes: ["Vaishya dharma", "Shudra dharma", "productive work"],
    difficulty: "beginner"
  },
  {
    chapter: 18,
    verse: 45,
    sanskrit: "स्वे स्वे कर्मण्यभिरतः संसिद्धिं लभते नरः।\nस्वकर्मनिरतः सिद्धिं यथा विन्दति तच्छृणु॥",
    transliteration: "sve sve karmaṇy abhirataḥ saṁsiddhiṁ labhate naraḥ\nsva-karma-nirataḥ siddhiṁ yathā vindati tac chṛṇu",
    translation: "Each person devoted to their own duty attains perfection. Hear how one engaged in their own work finds success.",
    explanation: {
      simple: "A person achieves fulfillment by dedicating themselves to their natural work. Krishna will explain how following your own path leads to perfection.",
      deeper: "'Sve sve karmani' - each in their own duty - emphasizes individual dharma over comparative judgment. 'Abhirata' suggests loving engagement, not mere compliance. 'Samsiddhi' is spiritual perfection, not just worldly success. This democratizes liberation - any sincere person doing their proper work with the right attitude can achieve the highest goal."
    },
    practicalApplication: "Stop comparing your path to others. Find your natural work and devote yourself to it completely. Perfection comes through depth, not through imitating someone else's dharma.",
    keyTerms: [
      { term: "Sve sve karmani", meaning: "each in their own duty" },
      { term: "Abhirata", meaning: "devoted, delighting in" },
      { term: "Samsiddhi", meaning: "complete perfection" },
      { term: "Sva-karma", meaning: "one's own work" }
    ],
    themes: ["svadharma", "perfection through duty", "individual path"],
    difficulty: "intermediate",
    famousVerse: true
  },
  {
    chapter: 18,
    verse: 46,
    sanskrit: "यतः प्रवृत्तिर्भूतानां येन सर्वमिदं ततम्।\nस्वकर्मणा तमभ्यर्च्य सिद्धिं विन्दति मानवः॥",
    transliteration: "yataḥ pravṛttir bhūtānāṁ yena sarvam idaṁ tatam\nsva-karmaṇā tam abhyarcya siddhiṁ vindati mānavaḥ",
    translation: "From whom all beings arise and by whom all this is pervaded—worshipping Him through one's own duty, a person attains perfection.",
    explanation: {
      simple: "The Divine is the source of all beings and pervades everything. By performing your natural work as worship of this Divine, you achieve spiritual perfection.",
      deeper: "This transforms all work into worship. 'Yatah pravrittih bhutanam' - from whom all activity arises; 'yena sarvam idam tatam' - by whom all this is pervaded. Recognizing the Divine as source and substance of all, your work becomes offering (abhyarcya). 'Svakarma' as worship is the synthesis of karma and bhakti yoga."
    },
    practicalApplication: "See your work as service to the Divine who pervades all. Whatever your job, perform it as an offering. This attitude transforms mundane work into spiritual practice.",
    keyTerms: [
      { term: "Pravritti", meaning: "activity, emanation" },
      { term: "Tatam", meaning: "pervaded, spread throughout" },
      { term: "Abhyarchya", meaning: "worshipping, honoring" },
      { term: "Svakarma", meaning: "one's own duty/work" }
    ],
    themes: ["work as worship", "Divine immanence", "karma-bhakti synthesis"],
    difficulty: "intermediate",
    famousVerse: true
  },
  {
    chapter: 18,
    verse: 47,
    sanskrit: "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्।\nस्वभावनियतं कर्म कुर्वन्नाप्नोति किल्बिषम्॥",
    transliteration: "śreyān sva-dharmo viguṇaḥ para-dharmāt svanuṣṭhitāt\nsvabhāva-niyataṁ karma kurvan nāpnoti kilbiṣam",
    translation: "Better is one's own dharma, though imperfectly performed, than the dharma of another well performed. Performing action ordained by one's nature, one incurs no sin.",
    explanation: {
      simple: "It's better to do your own duty imperfectly than someone else's duty perfectly. When you act according to your true nature, you don't accumulate negative karma.",
      deeper: "This crucial verse (repeated from 3.35) emphasizes authenticity. 'Svadharmo viguna' - one's own dharma, even defective, trumps 'para-dharma svanuṣṭhita' - another's duty well-performed. 'Svabhava-niyatam' grounds dharma in nature, not imposition. 'Na apnoti kilbisham' - no sin accrues - because you're aligned with your essential being."
    },
    practicalApplication: "Don't try to be someone else, even someone 'better.' Your authentic path, however humble, leads to freedom. Imitation, however impressive, leads to bondage.",
    keyTerms: [
      { term: "Svadharma", meaning: "one's own duty/nature" },
      { term: "Paradharma", meaning: "another's duty" },
      { term: "Viguna", meaning: "defective, imperfect" },
      { term: "Kilbisha", meaning: "sin, fault" }
    ],
    themes: ["svadharma", "authenticity", "individual path"],
    difficulty: "intermediate",
    famousVerse: true
  },
  {
    chapter: 18,
    verse: 48,
    sanskrit: "सहजं कर्म कौन्तेय सदोषमपि न त्यजेत्।\nसर्वारम्भा हि दोषेण धूमेनाग्निरिवावृताः॥",
    transliteration: "sahajaṁ karma kaunteya sa-doṣam api na tyajet\nsarvārambhā hi doṣeṇa dhūmenāgnir ivāvṛtāḥ",
    translation: "One should not abandon one's natural duty, O son of Kunti, even though it has defects. For all undertakings are covered by defects as fire by smoke.",
    explanation: {
      simple: "Don't abandon your natural work even if it has problems. Every activity has some imperfection, just as fire is always accompanied by smoke.",
      deeper: "The fire-smoke analogy is brilliant. Fire is never without smoke, yet we value fire. Similarly, no action is perfect ('sarva arambha dosha'), yet action is necessary. 'Sahaja karma' (inborn duty) should be performed despite imperfections. This prevents paralysis from perfectionism and validates humble, sincere effort over impossible ideals."
    },
    practicalApplication: "Don't wait for perfect conditions or perfect skill to act. Every endeavor has flaws. Do your duty despite imperfections - that's better than doing nothing.",
    keyTerms: [
      { term: "Sahaja karma", meaning: "inborn, natural duty" },
      { term: "Sadosha", meaning: "with defects" },
      { term: "Sarvarambha", meaning: "all undertakings" },
      { term: "Dhuma", meaning: "smoke" }
    ],
    themes: ["imperfection", "natural duty", "pragmatic action"],
    difficulty: "intermediate"
  },
  {
    chapter: 18,
    verse: 49,
    sanskrit: "असक्तबुद्धिः सर्वत्र जितात्मा विगतस्पृहः।\nनैष्कर्म्यसिद्धिं परमां संन्यासेनाधिगच्छति॥",
    transliteration: "asakta-buddhiḥ sarvatra jitātmā vigata-spṛhaḥ\nnaiṣkarmya-siddhiṁ paramāṁ sannyāsenādhigacchati",
    translation: "One whose intellect is unattached everywhere, who has conquered the self, and is free from desire—attains the supreme state of freedom from action through renunciation.",
    explanation: {
      simple: "A person with unattached mind, self-control, and freedom from craving achieves the highest state where actions no longer bind - this is true renunciation.",
      deeper: "Three qualifications lead to naishkarmya (actionlessness): 'Asakta-buddhi' - unattached intellect; 'Jitatma' - conquered self/mind; 'Vigata-spriha' - free from craving. 'Naishkarmya-siddhi' isn't inaction but freedom from karmic consequences of action. This 'parama' (supreme) state is liberation while still acting - the goal of karma yoga."
    },
    practicalApplication: "Work on these three: detach your mind from outcomes, master your reactions, and reduce craving. These lead to acting freely without karmic bondage.",
    keyTerms: [
      { term: "Asakta-buddhi", meaning: "unattached intellect" },
      { term: "Jitatma", meaning: "self-conquered" },
      { term: "Vigata-spriha", meaning: "free from desire" },
      { term: "Naishkarmya-siddhi", meaning: "perfection of non-action" }
    ],
    themes: ["inner renunciation", "freedom from karma", "liberation"],
    difficulty: "advanced"
  },
  {
    chapter: 18,
    verse: 50,
    sanskrit: "सिद्धिं प्राप्तो यथा ब्रह्म तथाप्नोति निबोध मे।\nसमासेनैव कौन्तेय निष्ठा ज्ञानस्य या परा॥",
    transliteration: "siddhiṁ prāpto yathā brahma tathāpnoti nibodha me\nsamāsenaiva kaunteya niṣṭhā jñānasya yā parā",
    translation: "Learn from Me in brief, O son of Kunti, how one who has attained perfection also attains Brahman—that supreme state of knowledge.",
    explanation: {
      simple: "Krishna will now briefly explain how a perfected person attains Brahman (the Absolute), which is the highest destination of spiritual knowledge.",
      deeper: "'Siddhi prapta' refers to one perfected through the previous teachings. Now Krishna describes the final step: attaining Brahman itself. 'Jnanasya para nishtha' - the supreme abode of knowledge - indicates this is where all paths culminate. 'Samasena' (briefly) signals a condensed, powerful teaching to follow."
    },
    practicalApplication: "The path isn't complete with mere self-mastery. There's a final step - union with the Absolute. Keep this ultimate goal in mind as you work on preliminary practices.",
    keyTerms: [
      { term: "Siddhi", meaning: "perfection, attainment" },
      { term: "Brahma", meaning: "the Absolute, Supreme Reality" },
      { term: "Nishtha", meaning: "abode, steady state" },
      { term: "Para", meaning: "supreme, highest" }
    ],
    themes: ["Brahman realization", "knowledge culmination", "final teaching"],
    difficulty: "advanced"
  },
  {
    chapter: 18,
    verse: 51,
    sanskrit: "बुद्ध्या विशुद्धया युक्तो धृत्यात्मानं नियम्य च।\nशब्दादीन्विषयांस्त्यक्त्वा रागद्वेषौ व्युदस्य च॥",
    transliteration: "buddhyā viśuddhayā yukto dhṛtyātmānaṁ niyamya ca\nśabdādīn viṣayāṁs tyaktvā rāga-dveṣau vyudasya ca",
    translation: "Endowed with purified intellect, controlling the self with fortitude, relinquishing sense objects beginning with sound, and casting aside attraction and aversion...",
    explanation: {
      simple: "The path to Brahman begins with: pure intelligence, self-control through willpower, giving up attachment to sense pleasures, and being free from likes and dislikes.",
      deeper: "This verse (continuing into the next) lists prerequisites. 'Vishuddha buddhi' - purified intellect, free from distortion. 'Dhriti' - fortitude sustains the discipline. 'Shabdadin vishayan tyaktva' - renouncing sense objects (sound, touch, form, taste, smell). 'Raga-dvesha vyudasya' - throwing out attraction and aversion. This is comprehensive inner preparation."
    },
    practicalApplication: "Purify your thinking, strengthen your willpower, reduce dependence on sensory pleasures, and work on your automatic likes and dislikes. These prepare the ground for realization.",
    keyTerms: [
      { term: "Vishuddha buddhi", meaning: "purified intellect" },
      { term: "Dhriti", meaning: "fortitude" },
      { term: "Shabdadi", meaning: "sound and other (sense objects)" },
      { term: "Raga-dvesha", meaning: "attraction and aversion" }
    ],
    themes: ["purification", "sense control", "preparation for realization"],
    difficulty: "advanced"
  },
  {
    chapter: 18,
    verse: 52,
    sanskrit: "विविक्तसेवी लघ्वाशी यतवाक्कायमानसः।\nध्यानयोगपरो नित्यं वैराग्यं समुपाश्रितः॥",
    transliteration: "vivikta-sevī laghv-āśī yata-vāk-kāya-mānasaḥ\ndhyāna-yoga-paro nityaṁ vairāgyaṁ samupāśritaḥ",
    translation: "Dwelling in solitude, eating lightly, controlling speech, body, and mind, constantly engaged in meditation yoga, taking refuge in dispassion...",
    explanation: {
      simple: "Continue with: seeking solitude, eating moderately, controlling speech and body and mind, practicing meditation consistently, and being established in detachment.",
      deeper: "'Vivikta-sevi' - frequenting solitary places for practice. 'Laghvashi' - light eating to support alertness. 'Yata-vak-kaya-manasa' - restraint of the three instruments. 'Dhyana-yoga-para' - devoted to meditation. 'Vairagya samupashrita' - taking shelter in dispassion. These are practical disciplines supporting realization."
    },
    practicalApplication: "Create conditions for inner work: find solitude regularly, don't overeat, practice silence, still the body, calm the mind, meditate daily, and cultivate non-attachment.",
    keyTerms: [
      { term: "Vivikta-sevi", meaning: "frequenting solitude" },
      { term: "Laghvashi", meaning: "eating lightly" },
      { term: "Yata", meaning: "controlled, restrained" },
      { term: "Dhyana-yoga", meaning: "meditation yoga" },
      { term: "Vairagya", meaning: "dispassion, detachment" }
    ],
    themes: ["spiritual discipline", "meditation", "renunciation"],
    difficulty: "advanced"
  },
  {
    chapter: 18,
    verse: 53,
    sanskrit: "अहंकारं बलं दर्पं कामं क्रोधं परिग्रहम्।\nविमुच्य निर्ममः शान्तो ब्रह्मभूयाय कल्पते॥",
    transliteration: "ahaṁkāraṁ balaṁ darpaṁ kāmaṁ krodhaṁ parigraham\nvimucya nirmamaḥ śānto brahma-bhūyāya kalpate",
    translation: "Abandoning ego, force, arrogance, desire, anger, and possessiveness, free from 'mine-ness' and peaceful—one becomes fit for union with Brahman.",
    explanation: {
      simple: "By giving up ego, aggression, pride, lust, anger, and greed, becoming free from possessiveness and peaceful, a person becomes ready to merge with the Absolute.",
      deeper: "Six obstacles to transcendence: 'Ahamkara' - ego; 'Bala' - force/violence; 'Darpa' - arrogance; 'Kama' - desire; 'Krodha' - anger; 'Parigraha' - possessiveness. 'Nirmama' - free from 'mine'; 'Shanta' - peaceful. 'Brahma-bhuyaya kalpate' - becomes fit for becoming Brahman. This verse lists what must be released for final liberation."
    },
    practicalApplication: "Identify which of these six obstacles is strongest in you: ego, aggression, pride, desire, anger, or possessiveness. Work specifically on releasing that one first.",
    keyTerms: [
      { term: "Ahamkara", meaning: "ego, I-sense" },
      { term: "Darpa", meaning: "arrogance, pride" },
      { term: "Parigraha", meaning: "possessiveness, acquisitiveness" },
      { term: "Nirmama", meaning: "free from 'mine'" },
      { term: "Brahma-bhuyaya", meaning: "for becoming Brahman" }
    ],
    themes: ["obstacles to liberation", "ego dissolution", "fitness for Brahman"],
    difficulty: "advanced"
  },
  {
    chapter: 18,
    verse: 54,
    sanskrit: "ब्रह्मभूतः प्रसन्नात्मा न शोचति न काङ्क्षति।\nसमः सर्वेषु भूतेषु मद्भक्तिं लभते पराम्॥",
    transliteration: "brahma-bhūtaḥ prasannātmā na śocati na kāṅkṣati\nsamaḥ sarveṣu bhūteṣu mad-bhaktiṁ labhate parām",
    translation: "Established in Brahman, serene in self, one neither grieves nor desires. Equal to all beings, one attains supreme devotion to Me.",
    explanation: {
      simple: "One who has become Brahman is deeply peaceful, free from grief and craving, sees all beings equally, and attains the highest devotion to Krishna.",
      deeper: "'Brahma-bhuta' - having become Brahman - describes the realized state. 'Prasannatma' - serene self - indicates stable inner peace. 'Na shochati na kankshati' - neither grieves nor craves - shows freedom from the pairs of opposites. 'Sama sarvesha bhuteshu' - equal to all beings. Remarkably, this jnana culminates in 'para bhakti' - supreme devotion, uniting knowledge and love."
    },
    practicalApplication: "The highest knowledge doesn't make you cold or distant. True realization brings serenity, equality toward all, and the deepest love. Seek integration, not escape.",
    keyTerms: [
      { term: "Brahma-bhuta", meaning: "become Brahman, established in Absolute" },
      { term: "Prasannatma", meaning: "serene self" },
      { term: "Sama", meaning: "equal, same" },
      { term: "Para bhakti", meaning: "supreme devotion" }
    ],
    themes: ["Brahman realization", "jnana-bhakti unity", "equality"],
    difficulty: "advanced",
    famousVerse: true
  },
  {
    chapter: 18,
    verse: 55,
    sanskrit: "भक्त्या मामभिजानाति यावान्यश्चास्मि तत्त्वतः।\nततो मां तत्त्वतो ज्ञात्वा विशते तदनन्तरम्॥",
    transliteration: "bhaktyā mām abhijānāti yāvān yaś cāsmi tattvataḥ\ntato māṁ tattvato jñātvā viśate tad-anantaram",
    translation: "Through devotion one comes to know Me, what and who I am in truth. Then, knowing Me in truth, one enters into Me immediately.",
    explanation: {
      simple: "Only through devotion can you truly know Krishna - who and what He really is. Once you know Him truly, you immediately enter into union with Him.",
      deeper: "'Bhaktya' emphasizes that devotion is the final means of knowing God truly ('tattvatah'). 'Yavan yah cha' - how great and who I am - indicates the full scope and personal nature of divine knowledge. 'Vishate' - enters into - describes union. 'Tad-anantaram' - immediately after - shows that true knowledge and union are not separated by time."
    },
    practicalApplication: "Intellectual understanding isn't enough. Devotion is what allows true knowing. Love your way into the truth - then union follows naturally.",
    keyTerms: [
      { term: "Bhakti", meaning: "devotion" },
      { term: "Abhijanati", meaning: "comes to know fully" },
      { term: "Tattvatah", meaning: "in truth, in reality" },
      { term: "Vishate", meaning: "enters into" }
    ],
    themes: ["devotion as knowledge", "divine union", "tattva jnana"],
    difficulty: "advanced",
    famousVerse: true
  },
  {
    chapter: 18,
    verse: 56,
    sanskrit: "सर्वकर्माण्यपि सदा कुर्वाणो मद्व्यपाश्रयः।\nमत्प्रसादादवाप्नोति शाश्वतं पदमव्ययम्॥",
    transliteration: "sarva-karmāṇy api sadā kurvāṇo mad-vyapāśrayaḥ\nmat-prasādād avāpnoti śāśvataṁ padam avyayam",
    translation: "Performing all actions always, one who takes refuge in Me, by My grace attains the eternal, imperishable state.",
    explanation: {
      simple: "Even while doing all your duties, if you take shelter in Krishna, by His grace you attain the eternal, unchanging spiritual state.",
      deeper: "'Sarva karmani kurvana' - performing all actions - confirms that liberation doesn't require abandoning duties. 'Mad-vyapashraya' - taking complete refuge in Me - is the key. 'Mat-prasadat' - by My grace - shows that the final attainment is gifted, not earned. 'Shashvatam padam avyayam' - the eternal, imperishable state - is moksha."
    },
    practicalApplication: "You don't need to quit your life to be liberated. Keep doing your duties with devotion to the Divine, and grace will carry you to the eternal.",
    keyTerms: [
      { term: "Mad-vyapashraya", meaning: "taking refuge in Me" },
      { term: "Prasada", meaning: "grace" },
      { term: "Shashvata", meaning: "eternal" },
      { term: "Avyaya", meaning: "imperishable" }
    ],
    themes: ["grace", "action with devotion", "eternal state"],
    difficulty: "intermediate"
  },
  {
    chapter: 18,
    verse: 57,
    sanskrit: "चेतसा सर्वकर्माणि मयि संन्यस्य मत्परः।\nबुद्धियोगमुपाश्रित्य मच्चित्तः सततं भव॥",
    transliteration: "cetasā sarva-karmāṇi mayi sannyasya mat-paraḥ\nbuddhi-yogam upāśritya mac-cittaḥ satataṁ bhava",
    translation: "Mentally renouncing all actions in Me, devoted to Me as the supreme goal, resorting to buddhi yoga, be always thinking of Me.",
    explanation: {
      simple: "In your mind, offer all your actions to Krishna. Make Him your highest goal. Practice the yoga of discernment. Keep your mind always fixed on Him.",
      deeper: "'Chetasa sarva karmani mayi sannyasya' - mentally renouncing all actions to Me - is inner sannyasa. 'Mat-para' - having Me as supreme - sets the direction. 'Buddhi-yoga' - the yoga of wisdom/discernment. 'Mac-chitta satatam' - always with mind on Me. This combines karma yoga, jnana yoga, and bhakti yoga in one instruction."
    },
    practicalApplication: "Practice mental offering: 'This is for You.' Make the Divine your ultimate priority. Use your intelligence to stay connected. Keep awareness turned Godward.",
    keyTerms: [
      { term: "Chetasa", meaning: "with the mind, mentally" },
      { term: "Sannyasya", meaning: "renouncing, offering" },
      { term: "Mat-para", meaning: "devoted to Me as supreme" },
      { term: "Buddhi-yoga", meaning: "yoga of intelligence/discernment" }
    ],
    themes: ["mental renunciation", "constant remembrance", "integrated yoga"],
    difficulty: "intermediate"
  },
  {
    chapter: 18,
    verse: 58,
    sanskrit: "मच्चित्तः सर्वदुर्गाणि मत्प्रसादात्तरिष्यसि।\nअथ चेत्त्वमहंकारान्न श्रोष्यसि विनङ्क्ष्यसि॥",
    transliteration: "mac-cittaḥ sarva-durgāṇi mat-prasādāt tariṣyasi\natha cet tvam ahaṁkārān na śroṣyasi vinaṅkṣyasi",
    translation: "With your mind fixed on Me, you will cross over all difficulties by My grace. But if, because of ego, you do not listen, you will perish.",
    explanation: {
      simple: "If you keep your mind on Krishna, by His grace you will overcome all obstacles. But if your ego prevents you from listening, you will be destroyed.",
      deeper: "'Sarva durgani' - all difficulties, obstacles - will be crossed ('tarishyasi') by divine grace when the mind is fixed on God. The warning follows: 'ahamkarat' - from ego - if you don't listen ('na shroshyasi'), you will perish ('vinankshyasi'). This is direct, personal counsel to Arjuna - and to all of us."
    },
    practicalApplication: "Divine connection helps you through all difficulties. But ego that won't listen leads to ruin. Stay humble and receptive to guidance greater than yourself.",
    keyTerms: [
      { term: "Durga", meaning: "difficulties, obstacles, fortress" },
      { term: "Tarishyasi", meaning: "you will cross over" },
      { term: "Ahamkara", meaning: "ego, pride" },
      { term: "Vinankshyasi", meaning: "you will perish, be destroyed" }
    ],
    themes: ["grace overcomes obstacles", "ego as danger", "listening"],
    difficulty: "intermediate"
  },
  {
    chapter: 18,
    verse: 59,
    sanskrit: "यदहंकारमाश्रित्य न योत्स्य इति मन्यसे।\nमिथ्यैष व्यवसायस्ते प्रकृतिस्त्वां नियोक्ष्यति॥",
    transliteration: "yad ahaṁkāram āśritya na yotsya iti manyase\nmithyaiṣa vyavasāyas te prakṛtis tvāṁ niyokṣyati",
    translation: "If, taking shelter in ego, you think 'I will not fight,' that resolve is vain. Your own nature will compel you.",
    explanation: {
      simple: "If your ego makes you think 'I won't fight,' that decision is false. Your own warrior nature will force you to fight anyway.",
      deeper: "Krishna addresses Arjuna's potential evasion. 'Ahamkaram ashritya' - relying on ego (not genuine wisdom) - might lead to false renunciation. 'Mithya' - vain, false - this resolve won't hold. 'Prakriti niyokshyati' - your own nature will compel you. Svabhava (innate nature) cannot be denied indefinitely. A warrior must eventually fight."
    },
    practicalApplication: "You can't escape your nature through denial. If something is truly your dharma, suppressing it creates more problems than facing it. Accept who you are.",
    keyTerms: [
      { term: "Ahamkara", meaning: "ego" },
      { term: "Vyavasaya", meaning: "resolve, determination" },
      { term: "Mithya", meaning: "vain, false" },
      { term: "Prakriti", meaning: "nature" },
      { term: "Niyokshyati", meaning: "will compel, engage" }
    ],
    themes: ["nature's compulsion", "false renunciation", "svabhava"],
    difficulty: "intermediate"
  },
  {
    chapter: 18,
    verse: 60,
    sanskrit: "स्वभावजेन कौन्तेय निबद्धः स्वेन कर्मणा।\nकर्तुं नेच्छसि यन्मोहात्करिष्यस्यवशोऽपि तत्॥",
    transliteration: "svabhāva-jena kaunteya nibaddhaḥ svena karmaṇā\nkartuṁ necchasi yan mohāt kariṣyasy avaśo 'pi tat",
    translation: "Bound by your own karma born of your nature, O son of Kunti, what through delusion you wish not to do, you will do even helplessly.",
    explanation: {
      simple: "You are bound by actions arising from your nature. What you refuse to do now due to confusion, you will end up doing anyway, even against your will.",
      deeper: "'Svabhava-jena svena karmana nibaddha' - bound by action born of your own nature. Past karma and inherent tendencies create momentum. 'Mohat' - due to delusion - the refusal is misguided. 'Avasho api' - even helplessly, without control. This isn't fatalism but recognition of karmic consequences and the power of svabhava."
    },
    practicalApplication: "Delaying inevitable duties often means doing them under worse conditions. Better to act consciously now than be forced by circumstances later.",
    keyTerms: [
      { term: "Svabhava-ja", meaning: "born of one's own nature" },
      { term: "Nibaddha", meaning: "bound" },
      { term: "Avasha", meaning: "helplessly, without control" },
      { term: "Moha", meaning: "delusion" }
    ],
    themes: ["karmic bondage", "inevitability", "conscious action"],
    difficulty: "intermediate"
  },
  {
    chapter: 18,
    verse: 61,
    sanskrit: "ईश्वरः सर्वभूतानां हृद्देशेऽर्जुन तिष्ठति।\nभ्रामयन्सर्वभूतानि यन्त्रारूढानि मायया॥",
    transliteration: "īśvaraḥ sarva-bhūtānāṁ hṛd-deśe 'rjuna tiṣṭhati\nbhrāmayan sarva-bhūtāni yantrārūḍhāni māyayā",
    translation: "The Lord dwells in the heart of all beings, O Arjuna, causing all beings to revolve by His maya, as if mounted on a machine.",
    explanation: {
      simple: "God lives in the heart of every creature. Through His creative power (maya), He causes all beings to move and act, like figures mounted on a machine.",
      deeper: "'Ishvara hrid-deshe tishthati' - the Lord dwells in the heart-region of all. This immanent presence is the inner controller (antaryamin). 'Bhramayan' - causing to revolve/wander. 'Yantra-arudhani' - mounted on a machine (the body-mind complex). 'Maya' is the divine power creating this cosmic play. All movement ultimately comes from this inner Lord."
    },
    practicalApplication: "Recognize the Divine dwelling in every heart - yours and others'. The body is a vehicle; the real driver is within. Seek connection with that inner presence.",
    keyTerms: [
      { term: "Ishvara", meaning: "Lord, controller" },
      { term: "Hrid-desha", meaning: "heart region" },
      { term: "Yantra", meaning: "machine, mechanism" },
      { term: "Maya", meaning: "divine creative power" }
    ],
    themes: ["Divine immanence", "inner controller", "cosmic machine"],
    difficulty: "advanced",
    famousVerse: true
  },
  {
    chapter: 18,
    verse: 62,
    sanskrit: "तमेव शरणं गच्छ सर्वभावेन भारत।\nतत्प्रसादात्परां शान्तिं स्थानं प्राप्स्यसि शाश्वतम्॥",
    transliteration: "tam eva śaraṇaṁ gaccha sarva-bhāvena bhārata\ntat-prasādāt parāṁ śāntiṁ sthānaṁ prāpsyasi śāśvatam",
    translation: "Take refuge in Him alone with your whole being, O Bharata. By His grace you will attain supreme peace and the eternal abode.",
    explanation: {
      simple: "Surrender completely to that Lord in your heart. Through His grace, you will find the highest peace and reach the eternal home.",
      deeper: "'Tam eva sharanam gachcha' - go to Him alone for refuge. 'Sarva-bhavena' - with your entire being, completely. 'Tat-prasadat' - by His grace (not self-effort alone). 'Param shantim' - supreme peace. 'Shashvatam sthanam' - eternal abode. This points toward the climactic teaching coming in verse 66."
    },
    practicalApplication: "Complete surrender isn't weakness - it's wisdom. Give yourself entirely to the Divine presence within. Grace will take you home to eternal peace.",
    keyTerms: [
      { term: "Sharanam", meaning: "refuge, surrender" },
      { term: "Sarva-bhavena", meaning: "with whole being" },
      { term: "Para shanti", meaning: "supreme peace" },
      { term: "Shashvata sthana", meaning: "eternal abode" }
    ],
    themes: ["complete surrender", "grace", "eternal peace"],
    difficulty: "intermediate",
    famousVerse: true
  },
  {
    chapter: 18,
    verse: 63,
    sanskrit: "इति ते ज्ञानमाख्यातं गुह्याद्गुह्यतरं मया।\nविमृश्यैतदशेषेण यथेच्छसि तथा कुरु॥",
    transliteration: "iti te jñānam ākhyātaṁ guhyād guhyataraṁ mayā\nvimṛśyaitad aśeṣeṇa yathecchasi tathā kuru",
    translation: "Thus, I have imparted to you knowledge more secret than all secrets. Reflect on this fully, and then do as you wish.",
    explanation: {
      simple: "Krishna has now shared the most secret knowledge. He tells Arjuna to think about it completely, and then choose freely what to do.",
      deeper: "'Guhyat guhyataram' - more secret than the secret - indicates the profound depth of this teaching. 'Vimrishya asheshena' - reflecting fully, completely. 'Yatha icchasi tatha kuru' - do as you wish - is remarkable. Krishna gives ultimate freedom. No coercion. True spiritual teaching respects human freedom to choose."
    },
    practicalApplication: "Real wisdom doesn't force. After understanding deeply, you are free to choose. But make sure you reflect completely before deciding - don't react superficially.",
    keyTerms: [
      { term: "Guhyat guhyatara", meaning: "more secret than the secret" },
      { term: "Vimrishya", meaning: "reflecting, considering" },
      { term: "Yatha icchasi", meaning: "as you wish" }
    ],
    themes: ["secret knowledge", "free will", "complete reflection"],
    difficulty: "intermediate"
  },
  {
    chapter: 18,
    verse: 64,
    sanskrit: "सर्वगुह्यतमं भूयः शृणु मे परमं वचः।\nइष्टोऽसि मे दृढमिति ततो वक्ष्यामि ते हितम्॥",
    transliteration: "sarva-guhyatamaṁ bhūyaḥ śṛṇu me paramaṁ vacaḥ\niṣṭo 'si me dṛḍham iti tato vakṣyāmi te hitam",
    translation: "Hear again My supreme word, the most secret of all. You are dearly beloved to Me, therefore I will speak what is good for you.",
    explanation: {
      simple: "Listen once more to Krishna's highest teaching, the deepest secret. Because Arjuna is very dear to Him, Krishna will share what's truly beneficial.",
      deeper: "'Sarva-guhyatamam' - most secret of all - even more than 'guhyatara' just mentioned. 'Paramam vachah' - supreme word. 'Ishto asi me dridham' - you are firmly/dearly beloved to Me - Krishna expresses personal love. 'Tato vakshyami te hitam' - therefore I will tell you what's good for you. Love motivates this final, highest teaching."
    },
    practicalApplication: "The deepest teachings come through love. When someone truly cares for you, they share what's best for you. Be open to receiving such wisdom.",
    keyTerms: [
      { term: "Sarva-guhyatama", meaning: "most secret of all" },
      { term: "Parama vacha", meaning: "supreme word" },
      { term: "Ishta", meaning: "beloved, dear" },
      { term: "Hita", meaning: "benefit, good" }
    ],
    themes: ["supreme secret", "divine love", "beneficial teaching"],
    difficulty: "intermediate"
  },
  {
    chapter: 18,
    verse: 65,
    sanskrit: "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु।\nमामेवैष्यसि सत्यं ते प्रतिजाने प्रियोऽसि मे॥",
    transliteration: "man-manā bhava mad-bhakto mad-yājī māṁ namaskuru\nmām evaiṣyasi satyaṁ te pratijāne priyo 'si me",
    translation: "Fix your mind on Me, be devoted to Me, worship Me, bow to Me. You shall certainly come to Me. I promise you truly, for you are dear to Me.",
    explanation: {
      simple: "Keep your mind on Krishna, love Him, worship Him, bow to Him. You will definitely reach Him - this is His true promise because Arjuna is dear to Him.",
      deeper: "Four practices: 'Man-mana' - mind on Me; 'Mad-bhakta' - devoted to Me; 'Mad-yaji' - worshiping Me; 'Mam namaskuru' - bow to Me. 'Mam eva eshyasi' - you will come to Me alone. 'Satyam te pratijane' - I promise you truly - a divine oath. 'Priyo asi me' - you are dear to Me - the relationship is personal. This verse appeared earlier (9.34) but now with the solemn promise."
    },
    practicalApplication: "Make God the center: think of Him, love Him, serve Him, honor Him. This isn't complicated technique - it's simple devotion. And the promise is certain.",
    keyTerms: [
      { term: "Man-mana", meaning: "mind on Me" },
      { term: "Mad-bhakta", meaning: "My devotee" },
      { term: "Pratijane", meaning: "I promise" },
      { term: "Priya", meaning: "dear, beloved" }
    ],
    themes: ["fourfold devotion", "divine promise", "personal relationship"],
    difficulty: "intermediate",
    famousVerse: true
  },
  {
    chapter: 18,
    verse: 66,
    sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।\nअहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥",
    transliteration: "sarva-dharmān parityajya mām ekaṁ śaraṇaṁ vraja\nahaṁ tvā sarva-pāpebhyo mokṣayiṣyāmi mā śucaḥ",
    translation: "Abandoning all dharmas, take refuge in Me alone. I will liberate you from all sins; do not grieve.",
    explanation: {
      simple: "Give up all other paths and duties - surrender completely to Krishna alone. He will free you from all sins and karmic consequences. Don't worry.",
      deeper: "This is the 'charama shloka' - the ultimate verse. 'Sarva dharman parityajya' - abandoning all dharmas (plural) - not immorality but transcending even righteous duties when complete surrender is achieved. 'Mam ekam' - Me alone. 'Sharanam vraja' - go to refuge. 'Aham tva mokshayishyami' - I will liberate you. 'Sarva papebhya' - from all sins. 'Ma shucha' - don't grieve. This is unconditional grace."
    },
    practicalApplication: "When all else fails, when you don't know what's right, when you're overwhelmed - surrender completely. Let go and let God. Liberation is promised.",
    keyTerms: [
      { term: "Sarva dharman", meaning: "all dharmas, all duties" },
      { term: "Parityajya", meaning: "abandoning completely" },
      { term: "Ekam sharanam", meaning: "sole refuge" },
      { term: "Mokshayishyami", meaning: "I will liberate" },
      { term: "Ma shucha", meaning: "do not grieve" }
    ],
    themes: ["complete surrender", "unconditional grace", "liberation"],
    difficulty: "advanced",
    famousVerse: true
  },
  {
    chapter: 18,
    verse: 67,
    sanskrit: "इदं ते नातपस्काय नाभक्ताय कदाचन।\nन चाशुश्रूषवे वाच्यं न च मां योऽभ्यसूयति॥",
    transliteration: "idaṁ te nātapaskāya nābhaktāya kadācana\nna cāśuśrūṣave vācyaṁ na ca māṁ yo 'bhyasūyati",
    translation: "This teaching should never be spoken to one without austerity, nor to one without devotion, nor to one who does not wish to hear, nor to one who speaks ill of Me.",
    explanation: {
      simple: "Don't share this sacred teaching with those who lack discipline, devotion, or willingness to learn, or with those who criticize Krishna.",
      deeper: "Four disqualifications: 'Atapaska' - without austerity/discipline; 'Abhakta' - without devotion; 'Ashushrusha' - unwilling to serve/listen; and one who 'abhyasuyati' - envies or criticizes Krishna. Sacred knowledge requires qualified recipients. Sharing with the unprepared wastes the teaching and potentially harms both giver and receiver."
    },
    practicalApplication: "Be discerning about sharing spiritual wisdom. Not everyone is ready. Look for sincerity, discipline, and openness before sharing deep teachings.",
    keyTerms: [
      { term: "Atapaska", meaning: "without austerity" },
      { term: "Abhakta", meaning: "without devotion" },
      { term: "Ashushrusha", meaning: "unwilling to serve/hear" },
      { term: "Abhyasuyati", meaning: "envies, criticizes" }
    ],
    themes: ["qualified recipients", "protecting sacred knowledge", "discernment"],
    difficulty: "intermediate"
  },
  {
    chapter: 18,
    verse: 68,
    sanskrit: "य इमं परमं गुह्यं मद्भक्तेष्वभिधास्यति।\nभक्तिं मयि परां कृत्वा मामेवैष्यत्यसंशयः॥",
    transliteration: "ya imaṁ paramaṁ guhyaṁ mad-bhakteṣv abhidhāsyati\nbhaktiṁ mayi parāṁ kṛtvā mām evaiṣyaty asaṁśayaḥ",
    translation: "One who shares this supreme secret with My devotees, showing utmost devotion to Me, will without doubt come to Me.",
    explanation: {
      simple: "Anyone who teaches this highest secret to sincere devotees, demonstrating supreme devotion to Krishna, will certainly attain Him.",
      deeper: "'Paramam guhyam' - supreme secret - referring to the Gita's teaching. 'Mad-bhakteshu' - among My devotees - the qualified recipients. 'Abhidhasyati' - will declare/teach. 'Param bhaktim kritva' - having done supreme devotion. 'Mam eva eshyati' - will come to Me alone. 'Asamshaya' - without doubt. Teaching the Gita to sincere seekers is itself a path to liberation."
    },
    practicalApplication: "Sharing authentic spiritual wisdom with sincere seekers is itself a spiritual practice. Teaching deepens your own understanding and devotion.",
    keyTerms: [
      { term: "Parama guhya", meaning: "supreme secret" },
      { term: "Abhidhasyati", meaning: "will teach, share" },
      { term: "Asamshaya", meaning: "without doubt" }
    ],
    themes: ["teaching as devotion", "sharing wisdom", "certain attainment"],
    difficulty: "intermediate"
  },
  {
    chapter: 18,
    verse: 69,
    sanskrit: "न च तस्मान्मनुष्येषु कश्चिन्मे प्रियकृत्तमः।\nभविता न च मे तस्मादन्यः प्रियतरो भुवि॥",
    transliteration: "na ca tasmān manuṣyeṣu kaścin me priya-kṛttamaḥ\nbhavitā na ca me tasmād anyaḥ priya-taro bhuvi",
    translation: "No one among humans does dearer service to Me than such a person, and there will never be anyone on earth dearer to Me.",
    explanation: {
      simple: "No human being does anything more pleasing to Krishna than one who teaches this wisdom. No one will ever be more dear to Him.",
      deeper: "'Priya-krittama' - one who does the dearest service. 'Manuṣyeṣu' - among humans. 'Bhavita na anyah priyatara' - there will be no one dearer. 'Bhuvi' - on earth. This extraordinary statement elevates teaching the Gita to the highest service. Krishna considers no service more valuable than spreading this wisdom."
    },
    practicalApplication: "Want to please the Divine? Share authentic spiritual wisdom with those ready to receive it. This is considered the highest service possible.",
    keyTerms: [
      { term: "Priya-krittama", meaning: "doing the dearest service" },
      { term: "Priyatara", meaning: "more dear" },
      { term: "Bhuvi", meaning: "on earth" }
    ],
    themes: ["highest service", "divine pleasure", "teaching dharma"],
    difficulty: "intermediate"
  },
  {
    chapter: 18,
    verse: 70,
    sanskrit: "अध्येष्यते च य इमं धर्म्यं संवादमावयोः।\nज्ञानयज्ञेन तेनाहमिष्टः स्यामिति मे मतिः॥",
    transliteration: "adhyeṣyate ca ya imaṁ dharmyaṁ saṁvādam āvayoḥ\njñāna-yajñena tenāham iṣṭaḥ syām iti me matiḥ",
    translation: "And one who will study this sacred dialogue of ours—by that sacrifice of knowledge, I shall be worshipped. This is My view.",
    explanation: {
      simple: "Anyone who studies this holy conversation between Krishna and Arjuna worships Krishna through the sacrifice of knowledge. This is Krishna's considered opinion.",
      deeper: "'Dharmyam samvadam' - righteous dialogue. 'Adhyeshyate' - will study. 'Jnana-yajna' - sacrifice of knowledge - one of the highest forms of yajna. 'Ishtah syam' - I will be worshipped. 'Iti me mati' - this is My view/considered opinion. Simply studying the Gita is equivalent to worship through the sacrifice of wisdom."
    },
    practicalApplication: "Regular study of the Gita is itself a form of worship. You don't need elaborate rituals - deep, sincere study of sacred wisdom honors the Divine.",
    keyTerms: [
      { term: "Dharmya samvada", meaning: "righteous dialogue" },
      { term: "Adhyeṣyate", meaning: "will study" },
      { term: "Jnana-yajna", meaning: "sacrifice of knowledge" },
      { term: "Mati", meaning: "view, opinion, conclusion" }
    ],
    themes: ["study as worship", "jnana yajna", "sacred dialogue"],
    difficulty: "beginner"
  },
  {
    chapter: 18,
    verse: 71,
    sanskrit: "श्रद्धावाननसूयश्च शृणुयादपि यो नरः।\nसोऽपि मुक्तः शुभाँल्लोकान्प्राप्नुयात्पुण्यकर्मणाम्॥",
    transliteration: "śraddhāvān anasūyaś ca śṛṇuyād api yo naraḥ\nso 'pi muktaḥ śubhāl lokān prāpnuyāt puṇya-karmaṇām",
    translation: "And anyone who listens to this with faith and without envy—even such a person, being liberated, will attain the auspicious realms of the righteous.",
    explanation: {
      simple: "Even just listening to the Gita with faith and an open heart brings liberation and leads to the blessed worlds attained by virtuous people.",
      deeper: "'Shraddhavan' - with faith. 'Anasuya' - without envy or fault-finding. 'Shrinuyat' - even if one merely listens (doesn't study deeply). 'Mukta' - liberated. 'Shubhan lokan' - auspicious worlds. 'Punya-karmanam' - of those with meritorious deeds. Even passive but sincere listening brings benefit. The Gita's teaching works at multiple levels of receptivity."
    },
    practicalApplication: "Even if you can't study deeply, listen to the Gita with faith and openness. Simply hearing with the right attitude brings spiritual benefit.",
    keyTerms: [
      { term: "Shraddhavan", meaning: "having faith" },
      { term: "Anasuya", meaning: "without envy, non-critical" },
      { term: "Shubha loka", meaning: "auspicious worlds" },
      { term: "Punya-karman", meaning: "of meritorious deeds" }
    ],
    themes: ["faith", "listening", "merit"],
    difficulty: "beginner"
  },
  {
    chapter: 18,
    verse: 72,
    sanskrit: "कच्चिदेतच्छ्रुतं पार्थ त्वयैकाग्रेण चेतसा।\nकच्चिदज्ञानसंमोहः प्रनष्टस्ते धनञ्जय॥",
    transliteration: "kaccid etac chrutaṁ pārtha tvayaikāgreṇa cetasā\nkaccid ajñāna-saṁmohaḥ praṇaṣṭas te dhanañjaya",
    translation: "Have you heard this with one-pointed mind, O Partha? Has your delusion born of ignorance been destroyed, O Dhananjaya?",
    explanation: {
      simple: "Krishna asks Arjuna: Did you listen with full attention? Has your confusion caused by ignorance been removed?",
      deeper: "'Ekagra chetasa' - with one-pointed mind - Krishna asks about the quality of attention. 'Ajnana-sammoha' - delusion born of ignorance - recalls Arjuna's original confusion. 'Pranashta' - destroyed completely. Krishna checks if the teaching has achieved its purpose. The caring teacher verifies understanding before concluding."
    },
    practicalApplication: "After receiving important teaching, reflect: Did I really listen? Has my confusion lifted? If not, revisit the teaching. Understanding must be verified.",
    keyTerms: [
      { term: "Ekagra chetasa", meaning: "with one-pointed mind" },
      { term: "Ajnana-sammoha", meaning: "delusion born of ignorance" },
      { term: "Pranashta", meaning: "completely destroyed" }
    ],
    themes: ["attention", "verification", "destruction of delusion"],
    difficulty: "beginner"
  },
  {
    chapter: 18,
    verse: 73,
    sanskrit: "अर्जुन उवाच\nनष्टो मोहः स्मृतिर्लब्धा त्वत्प्रसादान्मयाच्युत।\nस्थितोऽस्मि गतसन्देहः करिष्ये वचनं तव॥",
    transliteration: "arjuna uvāca\nnaṣṭo mohaḥ smṛtir labdhā tvat-prasādān mayācyuta\nsthito 'smi gata-sandehaḥ kariṣye vacanaṁ tava",
    translation: "Arjuna said: My delusion is destroyed, and I have regained my memory through Your grace, O Achyuta. I stand firm with doubts gone. I will do Your word.",
    explanation: {
      simple: "Arjuna declares: My confusion is gone, my true understanding has returned by Krishna's grace. I am now firm, doubt-free, and will follow Krishna's instructions.",
      deeper: "'Nashto moha' - delusion destroyed. 'Smritir labdha' - memory regained - recollection of his true nature. 'Tvat-prasadat' - by Your grace. 'Achyuta' - unfailing one. 'Sthito asmi' - I stand firm. 'Gata-sandeha' - doubts gone. 'Karishye vachanam tava' - I will do Your word. Complete transformation from Chapter 1's despair to resolute clarity."
    },
    practicalApplication: "This is the fruit of true teaching: delusion destroyed, true nature remembered, firmness established, doubts resolved, ready to act. Seek this clarity.",
    keyTerms: [
      { term: "Moha", meaning: "delusion" },
      { term: "Smriti", meaning: "memory, remembrance" },
      { term: "Prasada", meaning: "grace" },
      { term: "Gata-sandeha", meaning: "doubts gone" },
      { term: "Achyuta", meaning: "unfailing, infallible" }
    ],
    themes: ["transformation", "clarity", "resolution"],
    difficulty: "beginner",
    famousVerse: true
  },
  {
    chapter: 18,
    verse: 74,
    sanskrit: "सञ्जय उवाच\nइत्यहं वासुदेवस्य पार्थस्य च महात्मनः।\nसंवादमिममश्रौषमद्भुतं रोमहर्षणम्॥",
    transliteration: "sañjaya uvāca\nity ahaṁ vāsudevasya pārthasya ca mahātmanaḥ\nsaṁvādam imam aśrauṣam adbhutaṁ roma-harṣaṇam",
    translation: "Sanjaya said: Thus I have heard this wonderful dialogue between Vasudeva and the great-souled Partha, which makes the hair stand on end.",
    explanation: {
      simple: "Sanjaya tells Dhritarashtra: I have heard this amazing conversation between Krishna and the noble Arjuna. It's so wonderful it makes my hair stand on end with spiritual ecstasy.",
      deeper: "The narrative frame returns. Sanjaya, given divine vision by Vyasa, has witnessed this 'adbhutam' (wonderful) 'samvadam' (dialogue). 'Roma-harshana' - causing horripilation - indicates the profound spiritual impact. Even as a witness, Sanjaya is transformed by hearing. This models how we too can benefit from hearing the Gita."
    },
    practicalApplication: "When spiritual truth moves you so deeply that you feel it physically - that's the sign of genuine transmission. Be open to such transformative encounters.",
    keyTerms: [
      { term: "Vasudeva", meaning: "Krishna (son of Vasudeva)" },
      { term: "Mahatma", meaning: "great-souled" },
      { term: "Adbhuta", meaning: "wonderful, miraculous" },
      { term: "Roma-harshana", meaning: "making hair stand on end" }
    ],
    themes: ["witnessing", "wonder", "transformative dialogue"],
    difficulty: "beginner"
  },
  {
    chapter: 18,
    verse: 75,
    sanskrit: "व्यासप्रसादाच्छ्रुतवानेतद्गुह्यमहं परम्।\nयोगं योगेश्वरात्कृष्णात्साक्षात्कथयतः स्वयम्॥",
    transliteration: "vyāsa-prasādāc chrutavān etad guhyam ahaṁ param\nyogaṁ yogeśvarāt kṛṣṇāt sākṣāt kathayataḥ svayam",
    translation: "By the grace of Vyasa, I have heard this supreme secret yoga directly from Krishna, the Lord of Yoga, speaking it Himself.",
    explanation: {
      simple: "Through Vyasa's blessing of divine vision, Sanjaya has directly heard this highest secret yoga from Krishna Himself, the master of all yoga.",
      deeper: "'Vyasa-prasadat' - by Vyasa's grace (who gave divine sight). 'Guhyam param' - supreme secret. 'Yogam' - the teaching of yoga. 'Yogeshvara' - Lord of Yoga - a title for Krishna. 'Sakshat' - directly. 'Kathayatah svayam' - speaking Himself. Sanjaya confirms he received this directly, not second-hand. The teaching has an unbroken lineage."
    },
    practicalApplication: "Authentic spiritual teaching comes through a lineage of grace. Honor the chain of transmission that brings wisdom to you - teachers and texts.",
    keyTerms: [
      { term: "Vyasa-prasada", meaning: "Vyasa's grace" },
      { term: "Yogeshvara", meaning: "Lord of Yoga" },
      { term: "Sakshat", meaning: "directly, in person" },
      { term: "Guhya", meaning: "secret" }
    ],
    themes: ["lineage", "grace", "direct transmission"],
    difficulty: "beginner"
  },
  {
    chapter: 18,
    verse: 76,
    sanskrit: "राजन्संस्मृत्य संस्मृत्य संवादमिममद्भुतम्।\nकेशवार्जुनयोः पुण्यं हृष्यामि च मुहुर्मुहुः॥",
    transliteration: "rājan saṁsmṛtya saṁsmṛtya saṁvādam imam adbhutam\nkeśavārjunayoḥ puṇyaṁ hṛṣyāmi ca muhur muhuḥ",
    translation: "O King, remembering again and again this wonderful and sacred dialogue between Keshava and Arjuna, I rejoice repeatedly.",
    explanation: {
      simple: "O King Dhritarashtra, as I remember this amazing, sacred conversation between Krishna and Arjuna again and again, I feel joy over and over.",
      deeper: "'Samsmritya samsmritya' - remembering and remembering - repetition shows continuous meditation. 'Adbhutam punyam' - wonderful and sacred. 'Hrishyami muhur muhuh' - I rejoice again and again. Sanjaya's joy increases with each recollection. The Gita's wisdom isn't diminished by repetition - it deepens. Each reading reveals new facets."
    },
    practicalApplication: "Return to sacred texts repeatedly. Each reading with fresh eyes brings new joy and insight. The Gita is meant to be studied throughout life, not just once.",
    keyTerms: [
      { term: "Samsmritya", meaning: "remembering" },
      { term: "Punya", meaning: "sacred, meritorious" },
      { term: "Hrishyami", meaning: "I rejoice" },
      { term: "Muhur muhuh", meaning: "again and again" }
    ],
    themes: ["repeated study", "joy", "living scripture"],
    difficulty: "beginner"
  },
  {
    chapter: 18,
    verse: 77,
    sanskrit: "तच्च संस्मृत्य संस्मृत्य रूपमत्यद्भुतं हरेः।\nविस्मयो मे महान्राजन्हृष्यामि च पुनः पुनः॥",
    transliteration: "tac ca saṁsmṛtya saṁsmṛtya rūpam aty-adbhutaṁ hareḥ\nvismayo me mahān rājan hṛṣyāmi ca punaḥ punaḥ",
    translation: "And remembering again and again that most wonderful form of Hari, great is my amazement, O King, and I rejoice again and again.",
    explanation: {
      simple: "Also recalling Krishna's supremely wondrous cosmic form again and again, I am filled with great amazement and repeated joy.",
      deeper: "'Rupam aty-adbhutam Hareh' - the most wonderful form of Hari (Chapter 11's vishvarupa). 'Vismaya mahan' - great amazement. Sanjaya was also privileged to witness the cosmic form. The memory of that direct vision of the infinite continues to generate wonder and joy. Such experiences don't fade but deepen."
    },
    practicalApplication: "Genuine spiritual experiences leave lasting impressions. Recall your moments of wonder and let them renew your practice. The memory itself is spiritually nourishing.",
    keyTerms: [
      { term: "Rupa", meaning: "form" },
      { term: "Aty-adbhuta", meaning: "most wonderful" },
      { term: "Hari", meaning: "Krishna (remover of sorrow)" },
      { term: "Vismaya", meaning: "amazement, wonder" }
    ],
    themes: ["cosmic form", "wonder", "transformative vision"],
    difficulty: "beginner"
  },
  {
    chapter: 18,
    verse: 78,
    sanskrit: "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः।\nतत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम॥",
    transliteration: "yatra yogeśvaraḥ kṛṣṇo yatra pārtho dhanur-dharaḥ\ntatra śrīr vijayo bhūtir dhruvā nītir matir mama",
    translation: "Where there is Krishna, the Lord of Yoga, and where there is Arjuna, the wielder of the bow, there will certainly be prosperity, victory, glory, and righteousness. This is my conviction.",
    explanation: {
      simple: "Wherever Krishna the Lord of Yoga and Arjuna the great warrior are together, there will surely be wealth, victory, power, and righteous conduct. This is Sanjaya's firm belief.",
      deeper: "The magnificent conclusion. 'Yogeshvara Krishna' - the Lord of Yoga (divine wisdom and power). 'Partha dhanur-dhara' - Arjuna the archer (human effort and skill). Their union guarantees four results: 'Shri' - prosperity; 'Vijaya' - victory; 'Bhuti' - glory/power; 'Dhruva niti' - firm righteousness. 'Matir mama' - this is my conviction. The human united with the Divine is invincible."
    },
    practicalApplication: "When dedicated human effort combines with divine grace, success is certain. Bring your best while staying connected to the Divine. This partnership guarantees victory.",
    keyTerms: [
      { term: "Yogeshvara", meaning: "Lord of Yoga" },
      { term: "Dhanur-dhara", meaning: "bow-wielder, archer" },
      { term: "Shri", meaning: "prosperity, fortune" },
      { term: "Vijaya", meaning: "victory" },
      { term: "Bhuti", meaning: "glory, power" },
      { term: "Dhruva niti", meaning: "firm righteousness" }
    ],
    themes: ["divine-human partnership", "certain victory", "conclusion"],
    difficulty: "intermediate",
    famousVerse: true
  }
];

const chapter18: ChapterContent = {
  chapter: 18,
  name: {
    sanskrit: "Moksha Sannyasa Yoga",
    english: "The Yoga of Liberation Through Renunciation"
  },
  summary: "The final and longest chapter serves as a grand summary of all teachings. Krishna distinguishes between sannyasa and tyaga, provides threefold classifications according to the gunas, covers duties according to one's nature, and culminates in the supreme secret teaching of complete surrender to the Divine. The chapter concludes with Arjuna's resolution and Sanjaya's inspiring summary.",
  keyThemes: ["sannyasa vs tyaga", "five factors of action", "threefold classifications", "svadharma", "supreme surrender", "liberation"],
  verseCount: 78,
  verses
};

export default chapter18;
