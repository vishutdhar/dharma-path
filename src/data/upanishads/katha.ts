/**
 * Katha Upanishad (कठोपनिषद्)
 *
 * One of the most beloved Upanishads, telling the story of young Nachiketa
 * who meets Yama (Death) and receives teachings on the immortal Self.
 * Contains the famous chariot metaphor for the body-mind-Self relationship.
 *
 * From: Krishna Yajur Veda
 * Structure: 2 Adhyayas, 6 Vallis (sections), ~119 verses
 */

import { Upanishad, UpanishadVerse, UpanishadSection } from './types';

// =============================================================================
// SECTION 1: THE STORY OF NACHIKETA (Adhyaya 1, Valli 1)
// Verses 1-29: Nachiketa's journey to the realm of Death
// =============================================================================

const section1Verses: UpanishadVerse[] = [
  {
    upanishad: 'katha',
    section: 1,
    verse: 1,
    sanskrit: 'उशन् ह वै वाजश्रवसः सर्ववेदसं ददौ। तस्य ह नचिकेता नाम पुत्र आस॥',
    transliteration: 'uśan ha vai vājaśravasaḥ sarvavedasaṃ dadau | tasya ha naciketā nāma putra āsa ||',
    translation: 'Vajashravasa, desiring rewards, performed a sacrifice in which he gave away all his possessions. He had a son named Nachiketa.',
    explanation: {
      simple: 'The story begins with a father performing a sacrifice, giving away all he owned to gain spiritual merit. His young son Nachiketa watched carefully.',
      deeper: 'This sets up the contrast between external ritual (giving possessions) and true spiritual seeking. The father seeks worldly rewards through sacrifice.'
    },
    practicalApplication: 'Notice when your spiritual practices are motivated by gain versus genuine seeking.',
    themes: ['sacrifice', 'father-son', 'motivation'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'katha',
    section: 1,
    verse: 2,
    sanskrit: 'तं ह कुमारं सन्तं दक्षिणासु नीयमानासु श्रद्धाविवेश सोऽमन्यत॥',
    transliteration: `taṃ ha kumāraṃ santaṃ dakṣiṇāsu nīyamānāsu śraddhāviveśa so'manyata ||`,
    translation: 'When the gifts were being distributed, faith entered young Nachiketa. He thought to himself:',
    explanation: {
      simple: 'While watching the sacrifice, a deep faith and sincerity arose in young Nachiketa. He began to question what he saw.',
      deeper: 'Shraddha (faith) here means not blind belief but genuine spiritual aspiration. The child sees more clearly than the adults.'
    },
    practicalApplication: 'Cultivate the pure questioning mind of a child - curious, sincere, unafraid to see truth.',
    themes: ['faith', 'sincerity', 'youth'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'katha',
    section: 1,
    verse: 3,
    sanskrit: 'पीतोदका जग्धतृणा दुग्धदोहा निरिन्द्रियाः। अनन्दा नाम ते लोकास्तान् स गच्छति ता ददत्॥',
    transliteration: 'pītodakā jagdhatṛṇā dugdhadohā nirindriyāḥ | anandā nāma te lokāstān sa gacchati tā dadat ||',
    translation: '"These cows have drunk their last water, eaten their last grass, given their last milk, and are barren. Joyless are the worlds to which he goes who gives such gifts."',
    explanation: {
      simple: 'Nachiketa noticed his father was giving away old, useless cows - not truly sacrificing anything valuable. This was not real generosity.',
      deeper: 'The boy perceives that hollow ritual without genuine sacrifice leads to hollow results. True giving requires giving what costs us something.'
    },
    practicalApplication: 'When you give or serve, give your best - not your leftovers. Real sacrifice transforms the giver.',
    themes: ['generosity', 'authenticity', 'sacrifice'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'katha',
    section: 1,
    verse: 4,
    sanskrit: 'स होवाच पितरं तत कस्मै मां दास्यसीति। द्वितीयं तृतीयं तं होवाच मृत्यवे त्वा ददामीति॥',
    transliteration: 'sa hovāca pitaraṃ tata kasmai māṃ dāsyasīti | dvitīyaṃ tṛtīyaṃ taṃ hovāca mṛtyave tvā dadāmīti ||',
    translation: 'He said to his father: "Father, to whom will you give me?" He asked this a second and third time. The father replied in anger: "I give you to Death!"',
    explanation: {
      simple: 'Nachiketa asked his father "To whom will you give me?" - pointing out that true sacrifice might include what we love most. Angered, the father cursed him to Death.',
      deeper: 'The father\'s angry words, though spoken in haste, become true - showing the power of speech and the working of karma. Nachiketa accepts his fate with courage.'
    },
    practicalApplication: 'Speak carefully, especially in anger. Words have power. Also notice: Nachiketa\'s courage transforms a curse into an opportunity.',
    themes: ['speech', 'courage', 'karma'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    upanishad: 'katha',
    section: 1,
    verse: 5,
    sanskrit: 'बहूनामेमि प्रथमो बहूनामेमि मध्यमः। किं स्विद्यमस्य कर्तव्यं यन्मयाद्य करिष्यति॥',
    transliteration: 'bahūnāmemi prathamo bahūnāmemi madhyamaḥ | kiṃ svidyamasya kartavyaṃ yanmayādya kariṣyati ||',
    translation: 'Nachiketa thought: "Among many, I go as the first; among many, I go as the middle. What purpose of Yama will be served by my going to him today?"',
    explanation: {
      simple: 'Nachiketa reflects on death - he\'s not the first or last to die. He wonders what purpose his journey to Death will serve.',
      deeper: 'This shows remarkable composure. Rather than fear, Nachiketa contemplates the meaning of his journey. He seeks purpose even in apparent misfortune.'
    },
    practicalApplication: 'When facing difficulty, ask: What can I learn? What purpose might this serve? Transform obstacles into opportunities.',
    themes: ['death', 'purpose', 'contemplation'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'katha',
    section: 1,
    verse: 6,
    sanskrit: 'अनुपश्य यथा पूर्वे प्रतिपश्य तथापरे। सस्यमिव मर्त्यः पच्यते सस्यमिवाजायते पुनः॥',
    transliteration: 'anupaśya yathā pūrve pratipaśya tathāpare | sasyamiva martyaḥ pacyate sasyamivājāyate punaḥ ||',
    translation: '"Look back at those who came before, look forward to those who will come. Like grain, mortals ripen and fall; like grain, they spring up again."',
    explanation: {
      simple: 'Nachiketa contemplates the cycle of life and death - people come and go like crops that grow, ripen, and are harvested, only to grow again.',
      deeper: 'This is one of the earliest expressions of the cycle of rebirth (samsara). Death is not an end but part of a continuous cycle.'
    },
    practicalApplication: 'Reflect on impermanence not with despair but with perspective. You are part of an eternal cycle.',
    themes: ['cycle', 'rebirth', 'impermanence'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'katha',
    section: 1,
    verse: 7,
    sanskrit: 'वैश्वानरः प्रविशत्यतिथिर्ब्राह्मणो गृहान्। तस्यैतां शान्तिं कुर्वन्ति हर वैवस्वतोदकम्॥',
    transliteration: 'vaiśvānaraḥ praviśatyatithirbrāhmaṇo gṛhān | tasyaitāṃ śāntiṃ kurvanti hara vaivasvatodakam ||',
    translation: 'When a Brahmin guest enters a house like fire, the householder must offer him water and a seat. Bring water, O Vaivasvata (Yama)!',
    explanation: {
      simple: 'Nachiketa arrived at Yama\'s house, but Yama was away. For three nights, the boy waited without food or water - a serious breach of hospitality.',
      deeper: 'A guest is considered sacred, like fire entering the home. Neglecting a guest brings misfortune. Yama\'s servants remind him of this duty.'
    },
    practicalApplication: 'Honor your guests. In Indian tradition, "Atithi Devo Bhava" - the guest is God.',
    themes: ['hospitality', 'duty', 'tradition'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'katha',
    section: 1,
    verse: 8,
    sanskrit: 'आशाप्रतीक्षे संगतं सूनृतां चेष्टापूर्ते पुत्रपशूंश्च सर्वान्। एतद्वृङ्क्ते पुरुषस्याल्पमेधसो यस्यानश्नन्वसति ब्राह्मणो गृहे॥',
    transliteration: 'āśāpratīkṣe saṃgataṃ sūnṛtāṃ ceṣṭāpūrte putrapaśūṃśca sarvān | etadvṛṅkte puruṣasyālpamedaso yasyānaśnanvasati brāhmaṇo gṛhe ||',
    translation: 'Hope and expectation, the fruits of association and sweet speech, sacrifices and good works, sons and cattle - all these are lost to the foolish man in whose house a Brahmin guest stays without food.',
    explanation: {
      simple: 'Yama\'s attendants warn him: letting a guest go hungry destroys all one\'s merit - hopes, friendships, good deeds, family blessings - everything.',
      deeper: 'This emphasizes the supreme importance of hospitality in Vedic culture. Even Death himself must honor this dharma.'
    },
    practicalApplication: 'Never let a guest go hungry. This simple act of hospitality is considered supremely meritorious.',
    themes: ['hospitality', 'merit', 'dharma'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'katha',
    section: 1,
    verse: 9,
    sanskrit: 'तिस्रो रात्रीर्यदवात्सीर्गृहे मेऽनश्नन्ब्रह्मन्नतिथिर्नमस्यः। नमस्तेऽस्तु ब्रह्मन् स्वस्ति मेऽस्तु तस्मात्प्रति त्रीन्वरान्वृणीष्व॥',
    transliteration: 'tisro rātrīryadavātsīrgṛhe me\'naśnanbrahmannatithirnamasyaḥ | namaste\'stu brahman svasti me\'stu tasmātprati trīnvarānvṛṇīṣva ||',
    translation: 'Yama said: "O Brahmin, since you, a venerable guest, have stayed three nights in my house without food, I bow to you. May good come to me! Therefore, choose three boons."',
    explanation: {
      simple: 'Yama returns and is distressed to find Nachiketa has fasted for three nights. To make amends, he offers the boy three boons - one for each night.',
      deeper: 'Even Yama, the Lord of Death, must honor dharma. His humility before a young guest shows the supremacy of righteousness over power.'
    },
    practicalApplication: 'Even those in power must honor ethical principles. True greatness includes humility.',
    themes: ['humility', 'boons', 'dharma'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    upanishad: 'katha',
    section: 1,
    verse: 10,
    sanskrit: 'शान्तसंकल्पः सुमना यथा स्याद्वीतमन्युर्गौतमो माभि मृत्यो। त्वत्प्रसृष्टं माभिवदेत्प्रतीत एतत्त्रयाणां प्रथमं वरं वृणे॥',
    transliteration: 'śāntasaṃkalpaḥ sumanā yathā syādvītamanyurgautamo mābhi mṛtyo | tvatprasṛṣṭaṃ mābhivadetpratīta etatttrayāṇāṃ prathamaṃ varaṃ vṛṇe ||',
    translation: '"May my father Gautama be calmed in mind, free from anger, and kindly disposed toward me when I return. This is the first of the three boons I choose."',
    explanation: {
      simple: 'For his first boon, Nachiketa asks that his father\'s anger be pacified and that he be welcomed back with love.',
      deeper: 'Despite his father\'s harsh words, Nachiketa\'s first thought is reconciliation. He values family harmony over personal gain.'
    },
    practicalApplication: 'Prioritize family peace and reconciliation. Don\'t let anger create permanent rifts.',
    themes: ['forgiveness', 'family', 'love'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'katha',
    section: 1,
    verse: 11,
    sanskrit: 'यथा पुरस्ताद्भविता प्रतीत औद्दालकिरारुणिर्मत्प्रसृष्टः। सुखं रात्रीः शयिता वीतमन्युस्त्वां ददृशिवान्मृत्युमुखात्प्रमुक्तम्॥',
    transliteration: 'yathā purastādbhavitā pratīta auddālakirāruṇirmatprasṛṣṭaḥ | sukhaṃ rātrīḥ śayitā vītamanyustvāṃ dadṛśivānmṛtyumukhātpramuktam ||',
    translation: 'Yama said: "Your father Auddalaki Aruni will recognize you and be as he was before. Released by me, seeing you freed from the jaws of death, he will sleep peacefully, his anger gone."',
    explanation: {
      simple: 'Yama grants the first boon - Nachiketa\'s father will welcome him back with love, all anger forgotten, relieved to see his son alive.',
      deeper: 'This shows that even Death respects the bond between parent and child. The father\'s angry words are forgiven and undone.'
    },
    practicalApplication: 'Parents and children can always reconcile. No angry word need be permanent.',
    themes: ['reconciliation', 'blessing', 'family'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'katha',
    section: 1,
    verse: 12,
    sanskrit: 'स्वर्गे लोके न भयं किञ्चनास्ति न तत्र त्वं न जरया बिभेति। उभे तीर्त्वाशनायापिपासे शोकातिगो मोदते स्वर्गलोके॥',
    transliteration: 'svarge loke na bhayaṃ kiñcanāsti na tatra tvaṃ na jarayā bibheti | ubhe tīrtvāśanāyāpipāse śokātigo modate svargaloke ||',
    translation: '"In the heavenly world there is no fear; you (Death) are not there, nor does one fear old age. Having crossed over both hunger and thirst, one rejoices in heaven beyond sorrow."',
    explanation: {
      simple: 'Nachiketa describes heaven as a place free from fear, death, old age, hunger, thirst, and sorrow - a realm of pure joy.',
      deeper: 'This sets up his second boon - he wants to know the fire sacrifice that leads to heaven. But this is still seeking limited results.'
    },
    practicalApplication: 'Notice what you seek - temporary pleasures of heaven, or something beyond even that?',
    themes: ['heaven', 'freedom', 'desire'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'katha',
    section: 1,
    verse: 13,
    sanskrit: 'स त्वमग्निं स्वर्ग्यमध्येषि मृत्यो प्रब्रूहि त्वं श्रद्दधानाय मह्यम्। स्वर्गलोका अमृतत्वं भजन्त एतद्द्वितीयेन वृणे वरेण॥',
    transliteration: 'sa tvamagnuṃ svargyamadhyeṣi mṛtyo prabrūhi tvaṃ śraddadhānāya mahyam | svargalokā amṛtatvaṃ bhajanta etaddvitīyena vṛṇe vareṇa ||',
    translation: '"You know, O Death, the fire sacrifice that leads to heaven. Teach it to me, for I am full of faith. Heaven-dwellers attain immortality. This I choose as my second boon."',
    explanation: {
      simple: 'For his second boon, Nachiketa asks to learn the sacred fire ritual that leads to heaven and a kind of immortality.',
      deeper: 'This shows spiritual progress - from worldly concern (family) to religious aspiration (heaven). But there is still further to go.'
    },
    practicalApplication: 'Spiritual growth is gradual. First we seek worldly good, then heavenly reward, finally liberation itself.',
    themes: ['fire sacrifice', 'heaven', 'immortality'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'katha',
    section: 1,
    verse: 14,
    sanskrit: 'प्र ते ब्रवीमि तदु मे निबोध स्वर्ग्यमग्निं नचिकेतः प्रजानन्। अनन्तलोकाप्तिमथो प्रतिष्ठां विद्धि त्वमेतं निहितं गुहायाम्॥',
    transliteration: 'pra te bravīmi tadu me nibodha svargyamagniṃ naciketaḥ prajānan | anantalokāptimatha pratiṣṭhāṃ viddhi tvametaṃ nihitaṃ guhāyām ||',
    translation: 'Yama said: "I will teach you - listen carefully, O Nachiketa. I know the fire that leads to heaven and infinite worlds. Know it as the foundation, hidden in the secret cave."',
    explanation: {
      simple: 'Yama agrees to teach the fire sacrifice, describing it as hidden in the "secret cave" - hinting at deeper meanings beyond the ritual.',
      deeper: 'The "cave" (guha) refers both to the fire altar and to the heart where the true Self dwells. The teaching operates on multiple levels.'
    },
    practicalApplication: 'The deepest truths are "hidden in the cave" of your own heart. Look within.',
    themes: ['teaching', 'fire', 'heart'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 1,
    verse: 15,
    sanskrit: 'लोकादिमग्निं तमुवाच तस्मै या इष्टका यावतीर्वा यथा वा। स चापि तत्प्रत्यवदद्यथोक्तमथास्य मृत्युः पुनरेवाह तुष्टः॥',
    transliteration: 'lokādimagniṃ tamuvāca tasmai yā iṣṭakā yāvatīrvā yathā vā | sa cāpi tatpratyavadadyathoktamathāsya mṛtyuḥ punarevāha tuṣṭaḥ ||',
    translation: 'Yama described to him the fire that is the source of the worlds, what bricks are needed, how many, and how arranged. Nachiketa repeated it exactly. Then Death, pleased, spoke again.',
    explanation: {
      simple: 'Yama taught the complete fire ritual - the materials, construction, and procedure. Nachiketa learned it perfectly, impressing Death.',
      deeper: 'Nachiketa\'s ability to repeat the teaching exactly shows his exceptional focus and retention - qualities of an ideal student.'
    },
    practicalApplication: 'Be an attentive student. Listen fully, then verify your understanding by repeating back.',
    themes: ['learning', 'attention', 'mastery'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'katha',
    section: 1,
    verse: 16,
    sanskrit: 'तमब्रवीत्प्रीयमाणो महात्मा वरं तवेहाद्य ददामि भूयः। तवैव नाम्ना भवितायमग्निः सृङ्कां चेमामनेकरूपां गृहाण॥',
    transliteration: 'tamabravītprīyamāṇo mahātmā varaṃ tavehādya dadāmi bhūyaḥ | tavaiva nāmnā bhavitāyamagniḥ sṛṅkāṃ cemāmanekarūpāṃ gṛhāṇa ||',
    translation: 'The great-souled Yama, delighted, said: "I give you another boon today. This fire shall be known by your name! Accept also this many-colored chain."',
    explanation: {
      simple: 'So pleased was Yama that he gave an extra gift - the fire sacrifice would forever be named after Nachiketa, and he received a beautiful chain.',
      deeper: 'The "Nachiketa fire" became famous in Vedic tradition. The chain may symbolize the linking of different worlds through sacrifice.'
    },
    practicalApplication: 'Excellence brings unexpected rewards. When you give your best, the universe responds generously.',
    themes: ['reward', 'excellence', 'legacy'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'katha',
    section: 1,
    verse: 17,
    sanskrit: 'त्रिणाचिकेतस्त्रिभिरेत्य सन्धिं त्रिकर्मकृत्तरति जन्ममृत्यू। ब्रह्मजज्ञं देवमीड्यं विदित्वा निचाय्येमां शान्तिमत्यन्तमेति॥',
    transliteration: 'triṇāciketastribhiretya sandhiṃ trikarmakṛttarati janmamṛtyū | brahmajajñaṃ devamīḍyaṃ viditvā nicāyyemāṃ śāntimatyantameti ||',
    translation: '"One who has performed the Nachiketa fire three times, being united with the three (mother, father, teacher), performing the three duties, crosses over birth and death. Knowing the adorable, divine, born of Brahman, one attains eternal peace."',
    explanation: {
      simple: 'Yama explains the fruits of this sacrifice: one who performs it properly transcends the cycle of birth and death and attains lasting peace.',
      deeper: 'The "three" refers to multiple triads - relationships (parents, teacher), actions (study, sacrifice, charity), or the three Vedas.'
    },
    practicalApplication: 'Honoring your relationships and duties is part of the spiritual path, not separate from it.',
    themes: ['liberation', 'duty', 'peace'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 1,
    verse: 18,
    sanskrit: 'त्रिणाचिकेतस्त्रयमेतद्विदित्वा य एवं विद्वांश्चिनुते नाचिकेतम्। स मृत्युपाशान्पुरतः प्रणोद्य शोकातिगो मोदते स्वर्गलोके॥',
    transliteration: 'triṇāciketastrayametadviditvā ya evaṃ vidvāṃścinute nāciketam | sa mṛtyupāśānpurataḥ praṇodya śokātigo modate svargaloke ||',
    translation: '"One who knows these three, and with this knowledge builds the Nachiketa fire, throws off the bonds of death, passes beyond sorrow, and rejoices in heaven."',
    explanation: {
      simple: 'The reward for this knowledge and practice is freedom from death\'s grip and attainment of heavenly joy.',
      deeper: 'But notice - this is still heavenly joy, not ultimate liberation. The third boon will go even further.'
    },
    practicalApplication: 'Religious practices bring peace and heavenly rewards. But is there something even beyond heaven?',
    themes: ['heaven', 'liberation', 'knowledge'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 1,
    verse: 19,
    sanskrit: 'एष तेऽग्निर्नचिकेतः स्वर्ग्यो यमवृणीथा द्वितीयेन वरेण। एतमग्निं तवैव प्रवक्ष्यन्ति जनासस्तृतीयं वरं नचिकेतो वृणीष्व॥',
    transliteration: 'eṣa te\'gnirnaciketaḥ svargyo yamavṛṇīthā dvitīyena vareṇa | etamagniṃ tavaiva pravakṣyanti janāsastṛtīyaṃ varaṃ naciketo vṛṇīṣva ||',
    translation: 'Yama said: "This is the fire leading to heaven, which you chose as your second boon. People will call this fire by your name. Now, Nachiketa, choose your third boon."',
    explanation: {
      simple: 'Yama confirms the second boon is granted - the fire ritual will bear Nachiketa\'s name forever. Now comes the crucial third boon.',
      deeper: 'The stage is set for the main teaching. The first two boons were preparation - reconciliation with the world, knowledge of heaven.'
    },
    practicalApplication: 'Sometimes we need to address worldly and religious concerns before we\'re ready for ultimate truth.',
    themes: ['preparation', 'progression', 'readiness'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'katha',
    section: 1,
    verse: 20,
    sanskrit: 'येयं प्रेते विचिकित्सा मनुष्ये अस्तीत्येके नायमस्तीति चैके। एतद्विद्यामनुशिष्टस्त्वयाहं वराणामेष वरस्तृतीयः॥',
    transliteration: 'yeyaṃ prete vicikitsā manuṣye astītyeke nāyamastīti caike | etadvidyāmanuśiṣṭastvayāhaṃ varāṇāmeṣa varastṛtīyaḥ ||',
    translation: '"When a person dies, there is this doubt: Some say he exists; others say he does not. I want to know this, taught by you. This is the third of my boons."',
    explanation: {
      simple: 'For his third boon, Nachiketa asks the ultimate question: What happens after death? Does the Self continue to exist, or not?',
      deeper: 'This is the central question of all philosophy and religion. Nachiketa cuts through all lesser concerns to ask what truly matters.'
    },
    practicalApplication: 'What is your deepest question? Are you willing to pursue it with Nachiketa\'s determination?',
    themes: ['death', 'Self', 'ultimate question'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    upanishad: 'katha',
    section: 1,
    verse: 21,
    sanskrit: 'देवैरत्रापि विचिकित्सितं पुरा न हि सुविज्ञेयमणुरेष धर्मः। अन्यं वरं नचिकेतो वृणीष्व मा मोपरोत्सीरति मा सृजैनम्॥',
    transliteration: 'devairatrāpi vicikitsitaṃ purā na hi suvijñeyamaṇureṣa dharmaḥ | anyaṃ varaṃ naciketo vṛṇīṣva mā moparotsīrati mā sṛjainam ||',
    translation: 'Yama said: "Even the gods had doubts about this in ancient times. It is not easy to understand - this truth is subtle. Choose another boon, O Nachiketa! Do not press me! Release me from this!"',
    explanation: {
      simple: 'Yama hesitates. Even gods have wondered about this! The answer is so subtle that Death himself is reluctant to reveal it.',
      deeper: 'Yama\'s reluctance is partly a test - does Nachiketa truly want this knowledge, or will he accept something easier?'
    },
    practicalApplication: 'Ultimate truth is subtle and hard to grasp. Are you prepared to persist when even the teacher hesitates?',
    themes: ['subtlety', 'difficulty', 'testing'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'katha',
    section: 1,
    verse: 22,
    sanskrit: 'देवैरत्रापि विचिकित्सितं किल त्वं च मृत्यो यन्न सुविज्ञेयमात्थ। वक्ता चास्य त्वादृगन्यो न लभ्यो नान्यो वरस्तुल्य एतस्य कश्चित्॥',
    transliteration: 'devairatrāpi vicikitsitaṃ kila tvaṃ ca mṛtyo yanna suvijñeyamāttha | vaktā cāsya tvādṛganyo na labhyo nānyo varastulya etasya kaścit ||',
    translation: 'Nachiketa said: "You say that even the gods had doubts, and that it is not easy to know. No other teacher like you can be found, and no other boon equals this."',
    explanation: {
      simple: 'Nachiketa refuses to be deterred. He reasons: If even gods wonder about this, I need the best teacher - and who better than Death himself?',
      deeper: 'Nachiketa shows the qualities of an ideal seeker: determination, clarity about what he wants, and recognition of a true teacher.'
    },
    practicalApplication: 'When you find a true teacher, value the opportunity. Don\'t settle for lesser gifts.',
    themes: ['determination', 'discernment', 'teacher'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'katha',
    section: 1,
    verse: 23,
    sanskrit: 'शतायुषः पुत्रपौत्रान्वृणीष्व बहून्पशून्हस्तिहिरण्यमश्वान्। भूमेर्महदायतनं वृणीष्व स्वयं च जीव शरदो यावदिच्छसि॥',
    transliteration: 'śatāyuṣaḥ putrapautrānvṛṇīṣva bahūnpaśūnhastihiraṇyamaśvān | bhūmermhadāyatanaṃ vṛṇīṣva svayaṃ ca jīva śarado yāvadicchasi ||',
    translation: 'Yama said: "Choose sons and grandsons who will live a hundred years, many cattle, elephants, gold, and horses. Choose a vast estate on earth and live as many years as you wish."',
    explanation: {
      simple: 'Yama tempts Nachiketa with worldly blessings: long-lived descendants, wealth, animals, gold, land, and an unnaturally long life.',
      deeper: 'This is the classic test - will the seeker abandon ultimate knowledge for worldly gains? Yama offers everything material.'
    },
    practicalApplication: 'What would tempt you away from your deepest seeking? Know your vulnerabilities.',
    themes: ['temptation', 'wealth', 'longevity'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    upanishad: 'katha',
    section: 1,
    verse: 24,
    sanskrit: 'एतत्तुल्यं यदि मन्यसे वरं वृणीष्व वित्तं चिरजीविकां च। महाभूमौ नचिकेतस्त्वमेधि कामानां त्वा कामभाजं करोमि॥',
    transliteration: 'etattulyaṃ yadi manyase varaṃ vṛṇīṣva vittaṃ cirajīvikāṃ ca | mahābhūmau naciketastvamedhi kāmānāṃ tvā kāmabhājaṃ karomi ||',
    translation: '"If you think any boon equal to this, choose it - wealth and long life! Be a king over the vast earth, O Nachiketa! I will make you the enjoyer of all desires."',
    explanation: {
      simple: 'Yama sweetens the offer: kingship over the whole earth, satisfaction of every desire, wealth beyond measure.',
      deeper: 'Yama is offering dominion over the material world. But Nachiketa seeks dominion over death itself.'
    },
    practicalApplication: 'Would you trade enlightenment for being king of the world? This is not a hypothetical question.',
    themes: ['power', 'desire', 'kingship'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'katha',
    section: 1,
    verse: 25,
    sanskrit: 'ये ये कामा दुर्लभा मर्त्यलोके सर्वान्कामांश्छन्दतः प्रार्थयस्व। इमा रामाः सरथाः सतूर्या न हीदृशा लम्भनीया मनुष्यैः। आभिर्मत्प्रत्ताभिः परिचारयस्व नचिकेतो मरणं मानुप्राक्षीः॥',
    transliteration: 'ye ye kāmā durlabhā martyaloke sarvānkāmāṃśchandataḥ prārthayasva | imā rāmāḥ sarathāḥ satūryā na hīdṛśā lambhanīyā manuṣyaiḥ | ābhirmatprattābhiḥ paricārayasva naciketo maraṇaṃ mānuprākṣīḥ ||',
    translation: '"Whatever desires are hard to obtain in the mortal world, ask for all of them according to your wish. These celestial nymphs with chariots and musical instruments - such are not obtainable by mortals. Be served by these whom I give you, O Nachiketa! Do not ask about death."',
    explanation: {
      simple: 'Yama offers heavenly pleasures - celestial maidens, divine music, pleasures beyond human imagination. "Just don\'t ask about death!"',
      deeper: 'This is the final, most seductive temptation - not just earthly but heavenly pleasures. Yama tries everything to distract him.'
    },
    practicalApplication: 'Even spiritual seekers can be distracted by subtle pleasures. Stay focused on what truly matters.',
    themes: ['temptation', 'pleasure', 'focus'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'katha',
    section: 1,
    verse: 26,
    sanskrit: 'श्वोभावा मर्त्यस्य यदन्तकैतत्सर्वेन्द्रियाणां जरयन्ति तेजः। अपि सर्वं जीवितमल्पमेव तवैव वाहास्तव नृत्यगीते॥',
    transliteration: 'śvobhāvā martyasya yadantakaitat sarvendriyāṇāṃ jarayanti tejaḥ | api sarvaṃ jīvitamalpameva tavaiva vāhāstava nṛtyagīte ||',
    translation: 'Nachiketa said: "Ephemeral are these things, O Death, and they wear out the vigor of all the senses. Even a long life is short indeed. Keep your horses, dances, and songs for yourself!"',
    explanation: {
      simple: 'Nachiketa refuses everything. All pleasures are temporary and actually drain our vitality. Even a long life is brief compared to eternity.',
      deeper: 'This is the turning point. Nachiketa demonstrates viveka (discrimination) - seeing through the illusion of worldly pleasures.'
    },
    practicalApplication: 'Pleasures seem appealing but fade quickly and drain energy. Seek what lasts.',
    themes: ['impermanence', 'discrimination', 'renunciation'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    upanishad: 'katha',
    section: 1,
    verse: 27,
    sanskrit: 'न वित्तेन तर्पणीयो मनुष्यो लप्स्यामहे वित्तमद्राक्ष्म चेत्त्वा। जीविष्यामो यावदीशिष्यसि त्वं वरस्तु मे वरणीयः स एव॥',
    transliteration: 'na vittena tarpaṇīyo manuṣyo lapsyāmahe vittamadrākṣma cettvā | jīviṣyāmo yāvadīśiṣyasi tvaṃ varastu me varaṇīyaḥ sa eva ||',
    translation: '"No man can be satisfied with wealth. If we have seen you, we shall obtain wealth; we shall live as long as you rule. But the boon I choose is that one alone."',
    explanation: {
      simple: 'Nachiketa declares: wealth never satisfies anyone. Having met Death, getting wealth or life is not the issue. He wants only the ultimate answer.',
      deeper: 'This profound statement - "no one is satisfied by wealth" - cuts through all materialistic delusion. Nachiketa has passed the test.'
    },
    practicalApplication: 'Has wealth ever truly satisfied you? Or does desire just grow? Recognize this pattern.',
    themes: ['satisfaction', 'wealth', 'insight'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    upanishad: 'katha',
    section: 1,
    verse: 28,
    sanskrit: 'अजीर्यताममृतानामुपेत्य जीर्यन्मर्त्यः क्वधःस्थः प्रजानन्। अभिध्यायन्वर्णरतिप्रमोदानतिदीर्घे जीविते को रमेत॥',
    transliteration: 'ajīryatāmamṛtānāmupetya jīryanmartyaḥ kvadhaḥsthaḥ prajānan | abhidhyāyanvarṇaratipramodānatidīrghe jīvite ko rameta ||',
    translation: '"Having approached the undecaying immortals, what decaying mortal here below, knowing this, contemplating the pleasures of beauty and sense enjoyment, would delight in an over-long life?"',
    explanation: {
      simple: 'Nachiketa asks: Once you\'ve glimpsed the immortal, who would settle for temporary pleasures? Who would want a long life of mere sense enjoyment?',
      deeper: 'Having tasted the possibility of immortal truth, worldly pleasures lose their appeal. This is the natural result of spiritual discrimination.'
    },
    practicalApplication: 'Have you glimpsed something higher? Let that glimpse guide your choices rather than settling for less.',
    themes: ['immortality', 'discrimination', 'higher taste'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 1,
    verse: 29,
    sanskrit: 'यस्मिन्निदं विचिकित्सन्ति मृत्यो यत्साम्पराये महति ब्रूहि नस्तत्। योऽयं वरो गूढमनुप्रविष्टो नान्यं तस्मान्नचिकेता वृणीते॥',
    transliteration: 'yasminidaṃ vicikitsanti mṛtyo yatsāmparāye mahati brūhi nastat | yo\'yaṃ varo gūḍhamanupraviṣṭo nānyaṃ tasmānnaciketā vṛṇīte ||',
    translation: '"Tell me, O Death, of that great beyond about which people have doubt - this boon which penetrates the mystery. No other boon than this does Nachiketa choose."',
    explanation: {
      simple: 'Nachiketa makes his final, unshakeable request: Tell me about the mystery beyond death. I choose nothing else.',
      deeper: 'The section ends with Nachiketa\'s complete determination. He has rejected all temptations and stands firm. Yama must now teach.'
    },
    practicalApplication: 'When your resolve is complete and unshakeable, the universe responds. What do you truly seek?',
    themes: ['determination', 'mystery', 'resolve'],
    difficulty: 'beginner',
    famousVerse: true,
  },
];

// =============================================================================
// SECTION 2: THE SECRET OF DEATH (Adhyaya 1, Valli 2)
// Verses 1-25: Yama begins teaching the ultimate truth
// =============================================================================

const section2Verses: UpanishadVerse[] = [
  {
    upanishad: 'katha',
    section: 2,
    verse: 1,
    sanskrit: 'अन्यच्छ्रेयोऽन्यदुतैव प्रेयस्ते उभे नानार्थे पुरुषं सिनीतः। तयोः श्रेय आददानस्य साधु भवति हीयतेऽर्थाद्य उ प्रेयो वृणीते॥',
    transliteration: 'anyacchreyo\'nyadutaiva preyaste ubhe nānārthe puruṣaṃ sinītaḥ | tayoḥ śreya ādadānasya sādhu bhavati hīyate\'rthādya u preyo vṛṇīte ||',
    translation: 'Yama said: "The good (shreya) is one thing; the pleasant (preya) is another. Both bind a person with different ends. Good comes to one who chooses the good; one who chooses the pleasant misses the goal."',
    explanation: {
      simple: 'Yama begins his teaching with a crucial distinction: there\'s what feels good (pleasant) and what IS good (beneficial). They\'re not the same.',
      deeper: 'Shreya is the lasting good, preya is immediate pleasure. Most people choose preya. The wise choose shreya, even when it\'s harder.'
    },
    practicalApplication: 'Before every choice, ask: Is this truly good for me, or just pleasant? Choose the good.',
    themes: ['good vs pleasant', 'discrimination', 'choice'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    upanishad: 'katha',
    section: 2,
    verse: 2,
    sanskrit: 'श्रेयश्च प्रेयश्च मनुष्यमेतस्तौ सम्परीत्य विविनक्ति धीरः। श्रेयो हि धीरोऽभिप्रेयसो वृणीते प्रेयो मन्दो योगक्षेमाद्वृणीते॥',
    transliteration: 'śreyaśca preyaśca manuṣyametastau samparītya vivinakti dhīraḥ | śreyo hi dhīro\'bhipreyaso vṛṇīte preyo mando yogakṣemādvṛṇīte ||',
    translation: '"Both the good and the pleasant present themselves to a person. The wise, examining both, distinguishes between them. The wise prefers the good over the pleasant; the fool chooses the pleasant for worldly gain."',
    explanation: {
      simple: 'Everyone faces this choice constantly. The wise person examines both options carefully and chooses what\'s truly beneficial. The fool grabs what\'s pleasant.',
      deeper: 'Yoga-kshema (acquisition and security) represents worldly concerns. The fool sacrifices spiritual good for material security.'
    },
    practicalApplication: 'Be "dhira" (wise/steady) - take time to examine options rather than grabbing the first pleasant thing.',
    themes: ['wisdom', 'examination', 'choice'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'katha',
    section: 2,
    verse: 3,
    sanskrit: 'स त्वं प्रियान्प्रियरूपांश्च कामानभिध्यायन्नचिकेतोऽत्यस्राक्षीः। नैतां सृङ्कां वित्तमयीमवाप्तो यस्यां मज्जन्ति बहवो मनुष्याः॥',
    transliteration: 'sa tvaṃ priyānpriyarūpāṃśca kāmānabhidhyāyannaciketoatyasrākṣīḥ | naitāṃ sṛṅkāṃ vittamayīmavāpto yasyāṃ majjanti bahavo manuṣyāḥ ||',
    translation: '"You, O Nachiketa, pondering on dear desires and their forms, have let them go. You have not taken the chain of wealth in which many men sink and drown."',
    explanation: {
      simple: 'Yama praises Nachiketa: You considered worldly pleasures but released them. You didn\'t grab the "wealth chain" that drowns most people.',
      deeper: 'The "chain" offered earlier was both a gift and a trap. Nachiketa recognized that worldly wealth binds as much as it rewards.'
    },
    practicalApplication: 'Wealth is a chain that drowns many. Ask yourself: Am I owning my possessions, or do they own me?',
    themes: ['renunciation', 'wealth', 'freedom'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'katha',
    section: 2,
    verse: 4,
    sanskrit: 'दूरमेते विपरीते विषूची अविद्या या च विद्येति ज्ञाता। विद्याभीप्सिनं नचिकेतसं मन्ये न त्वा कामा बहवोऽलोलुपन्त॥',
    transliteration: 'dūramete viparīte viṣūcī avidyā yā ca vidyeti jñātā | vidyābhīpsinaṃ naciketasaṃ manye na tvā kāmā bahavo\'lolupanta ||',
    translation: '"Far apart and leading to different ends are these two: ignorance (avidya) and what is known as knowledge (vidya). I consider Nachiketa a seeker of knowledge, for many desires did not tempt you away."',
    explanation: {
      simple: 'Yama distinguishes two opposite paths: ignorance leads one way, knowledge another. Nachiketa clearly seeks knowledge since desires couldn\'t sway him.',
      deeper: 'Avidya and vidya represent not just learning but seeing clearly versus being deluded. The choice between them shapes our entire destiny.'
    },
    practicalApplication: 'Which path are you on - growing in clear seeing, or accumulating pleasant illusions?',
    themes: ['knowledge', 'ignorance', 'paths'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 2,
    verse: 5,
    sanskrit: 'अविद्यायामन्तरे वर्तमानाः स्वयं धीराः पण्डितंमन्यमानाः। दन्द्रम्यमाणाः परियन्ति मूढा अन्धेनैव नीयमाना यथान्धाः॥',
    transliteration: 'avidyāyāmantare vartamānāḥ svayaṃ dhīrāḥ paṇḍitaṃmanyamānāḥ | dandramyamāṇāḥ pariyanti mūḍhā andhenaiva nīyamānā yathāndhāḥ ||',
    translation: '"Living in the midst of ignorance, thinking themselves wise and learned, the deluded go round and round, like the blind led by the blind."',
    explanation: {
      simple: 'Those deep in ignorance believe they are wise! They wander in circles, like blind people following other blind people.',
      deeper: 'This is one of the most powerful images in the Upanishads. Self-delusion is the greatest obstacle - we don\'t know what we don\'t know.'
    },
    practicalApplication: 'Be humble about your knowledge. Ask: What am I blind to? Who is truly wise?',
    themes: ['delusion', 'humility', 'blindness'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    upanishad: 'katha',
    section: 2,
    verse: 6,
    sanskrit: 'न साम्परायः प्रतिभाति बालं प्रमाद्यन्तं वित्तमोहेन मूढम्। अयं लोको नास्ति पर इति मानी पुनः पुनर्वशमापद्यते मे॥',
    transliteration: 'na sāmparāyaḥ pratibhāti bālaṃ pramādyantaṃ vittamohena mūḍham | ayaṃ loko nāsti para iti mānī punaḥ punarvaśamāpadyate me ||',
    translation: '"The hereafter does not shine forth to the careless child, deluded by the glamour of wealth. Thinking \'This world alone exists, there is no other,\' he falls again and again into my power."',
    explanation: {
      simple: 'Yama reveals why people fear death: distracted by wealth, they never consider the afterlife. Thinking only this world matters, they die and return again and again.',
      deeper: 'The materialist view - "only this world is real" - keeps one trapped in the cycle of rebirth. Death claims such people repeatedly.'
    },
    practicalApplication: 'Do you live as if only this material world exists? What would change if you truly considered the hereafter?',
    themes: ['materialism', 'rebirth', 'death'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 2,
    verse: 7,
    sanskrit: 'श्रवणायापि बहुभिर्यो न लभ्यः शृण्वन्तोऽपि बहवो यं न विद्युः। आश्चर्यो वक्ता कुशलोऽस्य लब्धाश्चर्यो ज्ञाता कुशलानुशिष्टः॥',
    transliteration: 'śravaṇāyāpi bahubhiryo na labhyaḥ śṛṇvanto\'pi bahavo yaṃ na vidyuḥ | āścaryo vaktā kuśalo\'sya labdhāścaryo jñātā kuśalānuśiṣṭaḥ ||',
    translation: '"Many do not even get to hear of the Self; many, hearing, do not understand it. Wonderful is the one who speaks of it; rare is the one who attains it; wonderful is the one who knows it, taught by a skilled teacher."',
    explanation: {
      simple: 'The Self is hard to learn about - many never hear of it. Even hearing, most don\'t understand. A true teacher is rare, and a true knower is even rarer.',
      deeper: 'Four levels of rarity: hearing the teaching, understanding it, finding a qualified teacher, and actually realizing the truth.'
    },
    practicalApplication: 'Value your spiritual opportunities. Not everyone gets to hear these teachings, let alone understand them.',
    themes: ['rarity', 'teaching', 'understanding'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'katha',
    section: 2,
    verse: 8,
    sanskrit: 'न नरेणावरेण प्रोक्त एष सुविज्ञेयो बहुधा चिन्त्यमानः। अनन्यप्रोक्ते गतिरत्र नास्त्यणीयान्ह्यतर्क्यमणुप्रमाणात्॥',
    transliteration: 'na nareṇāvareṇa prokta eṣa suvijñeyo bahudhā cintyamānaḥ | ananyaprokte gatiratra nāstyaṇīyānhyatarkyamaṇupramāṇāt ||',
    translation: '"This Self, when taught by an inferior person, is not easily understood, being thought of in many ways. Unless taught by one who knows it as identical with oneself, there is no way to it, for it is subtler than the subtle, beyond reasoning."',
    explanation: {
      simple: 'The Self can\'t be properly taught by someone who hasn\'t realized it. It\'s too subtle for ordinary logic - subtler than the subtlest atom.',
      deeper: 'The teacher must be "ananya" - one who knows the Self as non-different from their own being. Book learning is insufficient.'
    },
    practicalApplication: 'Seek teachers who have realized what they teach, not just studied it. The Self is beyond mere logic.',
    themes: ['teacher', 'subtlety', 'beyond logic'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 2,
    verse: 9,
    sanskrit: 'नैषा तर्केण मतिरापनेया प्रोक्तान्येनैव सुज्ञानाय प्रेष्ठ। यां त्वमापः सत्यधृतिर्बतासि त्वादृङ्नो भूयान्नचिकेतः प्रष्टा॥',
    transliteration: 'naiṣā tarkeṇa matirāpaneyā proktānyenaiva sujñānāya preṣṭha | yāṃ tvamāpaḥ satyadhṛtirbatāsi tvādṛṅno bhūyānnaciketaḥ praṣṭā ||',
    translation: '"This understanding is not attained by reasoning alone. It must be taught by another for easy comprehension, dear one. You have attained it, firm in truth. May there be more seekers like you, Nachiketa!"',
    explanation: {
      simple: 'Yama confirms: mere reasoning won\'t get you there. You need teaching from a realized soul. Nachiketa has succeeded through his firm resolve.',
      deeper: 'Truth (satya) and firm resolve (dhriti) are the qualities that make Nachiketa an ideal student. Yama wishes for more like him.'
    },
    practicalApplication: 'Combine reasoning with direct teaching. Hold firm to truth even when it\'s difficult.',
    themes: ['reasoning', 'teaching', 'resolve'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 2,
    verse: 10,
    sanskrit: 'जानाम्यहं शेवधिरित्यनित्यं न ह्यध्रुवैः प्राप्यते हि ध्रुवं तत्। ततो मया नाचिकेतश्चितोऽग्निरनित्यैर्द्रव्यैः प्राप्तवानस्मि नित्यम्॥',
    transliteration: 'jānāmyahaṃ śevadhirityaniytaṃ na hyadhruvaiḥ prāpyate hi dhruvaṃ tat | tato mayā nāciketaścito\'gniranityairdravyaiḥ prāptavānasmi nityam ||',
    translation: 'Yama continued: "I know that treasure is impermanent. The eternal cannot be reached through non-eternal things. Yet I built the Nachiketa fire with impermanent materials and attained the relatively permanent."',
    explanation: {
      simple: 'Yama reflects: worldly treasures are impermanent. The truly eternal can\'t be reached through temporary things. Yet even he used ritual (temporary) to reach higher states.',
      deeper: 'This shows the limitation of even heavenly attainments. Ritual brings higher results but not ultimate liberation.'
    },
    practicalApplication: 'Religious practices have their place but can\'t grant the eternal. Use them as stepping stones, not final goals.',
    themes: ['impermanence', 'ritual', 'eternal'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 2,
    verse: 11,
    sanskrit: 'कामस्याप्तिं जगतः प्रतिष्ठां क्रतोरानन्त्यमभयस्य पारम्। स्तोममहदुरुगायं प्रतिष्ठां दृष्ट्वा धृत्या धीरो नचिकेतोऽत्यस्राक्षीः॥',
    transliteration: 'kāmasyāptiṃ jagataḥ pratiṣṭhāṃ kratorānantyamabhayasya pāram | stomamahardurugāyaṃ pratiṣṭhāṃ dṛṣṭvā dhṛtyā dhīro naciketo\'tyasrākṣīḥ ||',
    translation: '"Having seen the fulfillment of desire, the foundation of the world, the endlessness of ritual, the shore of fearlessness, the great, wide-spread goal, you, wise Nachiketa, through steadfastness let them all go."',
    explanation: {
      simple: 'Yama praises Nachiketa for seeing all worldly and heavenly attainments - and still letting them go with steadfast wisdom.',
      deeper: 'Nachiketa had the discrimination to see that even these great attainments are limited compared to the knowledge of the Self.'
    },
    practicalApplication: 'Can you see something as valuable yet still let it go for something higher? That\'s true discrimination.',
    themes: ['renunciation', 'discrimination', 'steadfastness'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 2,
    verse: 12,
    sanskrit: 'तं दुर्दर्शं गूढमनुप्रविष्टं गुहाहितं गह्वरेष्ठं पुराणम्। अध्यात्मयोगाधिगमेन देवं मत्वा धीरो हर्षशोकौ जहाति॥',
    transliteration: 'taṃ durdṛśaṃ gūḍhamanupraviṣṭaṃ guhāhitaṃ gahvareṣṭhaṃ purāṇam | adhyātmayogādhigamena devaṃ matvā dhīro harṣaśokau jahāti ||',
    translation: '"The wise, knowing the Self - hard to see, deeply hidden, set in the cave of the heart, dwelling in the deep - through the yoga of the inner self, leaves behind both joy and sorrow."',
    explanation: {
      simple: 'The Self is hidden in the cave of the heart, difficult to see. The wise person, through inner yoga, realizes it and transcends both joy and sorrow.',
      deeper: 'The "cave" (guha) is the heart center. "Adhyatma yoga" is the discipline of turning attention inward. True knowledge brings equanimity.'
    },
    practicalApplication: 'Turn your attention inward. The Self you seek is hidden in your own heart, not somewhere outside.',
    themes: ['heart', 'inner yoga', 'equanimity'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'katha',
    section: 2,
    verse: 13,
    sanskrit: 'एतच्छ्रुत्वा सम्परिगृह्य मर्त्यः प्रवृह्य धर्म्यमणुमेतमाप्य। स मोदते मोदनीयं हि लब्ध्वा विवृतं सद्म नचिकेतसं मन्ये॥',
    transliteration: 'etacchrutvā samparigṛhya martyaḥ pravṛhya dharmyamaṇumetamāpya | sa modate modanīyaṃ hi labdhvā vivṛtaṃ sadma naciketasaṃ manye ||',
    translation: '"A mortal who has heard this, fully grasped it, drawn out this subtle essence of dharma and attained it - he truly rejoices, having obtained what is worthy of rejoicing. I consider the house of Nachiketa wide open."',
    explanation: {
      simple: 'One who hears this teaching, truly grasps it, and realizes the subtle Self - that person has real cause for joy. Nachiketa is fully ready.',
      deeper: '"House wide open" means Nachiketa\'s heart is open to receive the highest teaching. He has prepared himself completely.'
    },
    practicalApplication: 'True joy comes from Self-realization, not worldly pleasures. Open your heart to receive wisdom.',
    themes: ['joy', 'realization', 'readiness'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 2,
    verse: 14,
    sanskrit: 'अन्यत्र धर्मादन्यत्राधर्मादन्यत्रास्मात्कृताकृतात्। अन्यत्र भूताच्च भव्याच्च यत्तत्पश्यसि तद्वद॥',
    transliteration: 'anyatra dharmādanyatrādharmādanyatrāsmātkṛtākṛtāt | anyatra bhūtācca bhavyācca yattatpaśyasi tadvada ||',
    translation: 'Nachiketa said: "Tell me what you see as beyond dharma and adharma, beyond what is done and not done, beyond past and future."',
    explanation: {
      simple: 'Nachiketa asks for the ultimate: What lies beyond good and evil, beyond action and inaction, beyond time itself?',
      deeper: 'He seeks the Absolute that transcends all dualities - ethical, temporal, and karmic. This is the realm of pure Being.'
    },
    practicalApplication: 'Can you glimpse something beyond all pairs of opposites - beyond good/bad, past/future? That\'s what Nachiketa seeks.',
    themes: ['absolute', 'beyond duality', 'ultimate'],
    difficulty: 'advanced',
  },
  {
    upanishad: 'katha',
    section: 2,
    verse: 15,
    sanskrit: 'सर्वे वेदा यत्पदमामनन्ति तपांसि सर्वाणि च यद्वदन्ति। यदिच्छन्तो ब्रह्मचर्यं चरन्ति तत्ते पदं संग्रहेण ब्रवीम्योमित्येतत्॥',
    transliteration: 'sarve vedā yatpadamāmananti tapāṃsi sarvāṇi ca yadvadanti | yadicchanto brahmacaryaṃ caranti tatte padaṃ saṃgraheṇa bravīmyomityetat ||',
    translation: 'Yama said: "That goal which all the Vedas proclaim, which all austerities declare, desiring which people practice brahmacharya - that goal I tell you briefly: it is OM."',
    explanation: {
      simple: 'Everything in Vedic spirituality points to one goal. All practices aim at one thing. Yama reveals it in one word: OM.',
      deeper: 'OM (AUM) is the sonic symbol of Brahman, the Absolute. It encapsulates all teachings in a single syllable.'
    },
    practicalApplication: 'Begin meditating on OM. This one syllable contains the goal of all spiritual practice.',
    themes: ['OM', 'goal', 'Vedas'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    upanishad: 'katha',
    section: 2,
    verse: 16,
    sanskrit: 'एतद्ध्येवाक्षरं ब्रह्म एतद्ध्येवाक्षरं परम्। एतद्ध्येवाक्षरं ज्ञात्वा यो यदिच्छति तस्य तत्॥',
    transliteration: 'etaddhyevākṣaraṃ brahma etaddhyevākṣaraṃ param | etaddhyevākṣaraṃ jñātvā yo yadicchati tasya tat ||',
    translation: '"This syllable OM is indeed Brahman. This syllable is indeed the supreme. Whoever knows this syllable obtains whatever they desire."',
    explanation: {
      simple: 'OM is Brahman itself - the supreme reality. Knowing the true meaning of OM grants all wishes because you become one with the source of all.',
      deeper: '"Akshara" means both "syllable" and "imperishable." OM is the imperishable Absolute in sound form.'
    },
    practicalApplication: 'Chant OM with understanding, not mechanically. Know it as the Imperishable itself.',
    themes: ['OM', 'Brahman', 'fulfillment'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 2,
    verse: 17,
    sanskrit: 'एतदालम्बनं श्रेष्ठमेतदालम्बनं परम्। एतदालम्बनं ज्ञात्वा ब्रह्मलोके महीयते॥',
    transliteration: 'etadālambanaṃ śreṣṭhametadālambanaṃ param | etadālambanaṃ jñātvā brahmaloke mahīyate ||',
    translation: '"This is the best support; this is the supreme support. Knowing this support, one is honored in the world of Brahman."',
    explanation: {
      simple: 'OM is the best thing to hold onto in meditation - the supreme support. One who knows this gains the highest spiritual state.',
      deeper: 'Alambana means "support" for meditation. OM serves as the anchor for the mind, leading to Brahma-loka (the realm of Brahman).'
    },
    practicalApplication: 'Use OM as your meditation support. Let it anchor your wandering mind.',
    themes: ['meditation', 'support', 'OM'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 2,
    verse: 18,
    sanskrit: 'न जायते म्रियते वा विपश्चिन्नायं कुतश्चिन्न बभूव कश्चित्। अजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे॥',
    transliteration: 'na jāyate mriyate vā vipaścihnāyaṃ kutaścinna babhūva kaścit | ajo nityaḥ śāśvato\'yaṃ purāṇo na hanyate hanyamāne śarīre ||',
    translation: '"The Self is not born, nor does it die. It did not come from anywhere, nor did anything come from it. Unborn, eternal, everlasting, ancient - it is not killed when the body is killed."',
    explanation: {
      simple: 'Now Yama reveals the answer to Nachiketa\'s question: The Self never dies because it was never born. It\'s eternal, beyond the body.',
      deeper: 'This directly answers "Does the Self exist after death?" - It was never subject to birth or death. The body dies; the Self does not.'
    },
    practicalApplication: 'You are not the body. The essence of you was never born and cannot die. Contemplate this.',
    themes: ['eternal Self', 'immortality', 'birthless'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    upanishad: 'katha',
    section: 2,
    verse: 19,
    sanskrit: 'हन्ता चेन्मन्यते हन्तुं हतश्चेन्मन्यते हतम्। उभौ तौ न विजानीतो नायं हन्ति न हन्यते॥',
    transliteration: 'hantā cenmanyate hantuṃ hataścenmanyate hatam | ubhau tau na vijānīto nāyaṃ hanti na hanyate ||',
    translation: '"If the slayer thinks he slays, if the slain thinks he is slain, both of them do not understand. This one neither slays nor is slain."',
    explanation: {
      simple: 'The Self cannot kill or be killed. Both killer and victim are confused if they think otherwise - they identify with bodies, not the Self.',
      deeper: 'This verse appears also in the Bhagavad Gita (2.19). It\'s a fundamental teaching: the Atman is beyond all action and change.'
    },
    practicalApplication: 'When you fear death or harm, remember: your true Self is untouched by any physical event.',
    themes: ['immortality', 'action', 'Self'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'katha',
    section: 2,
    verse: 20,
    sanskrit: 'अणोरणीयान्महतो महीयानात्मास्य जन्तोर्निहितो गुहायाम्। तमक्रतुः पश्यति वीतशोको धातुः प्रसादान्महिमानमात्मनः॥',
    transliteration: 'aṇoraṇīyānmahato mahīyānātmāsya jantornihito guhāyām | tamakratuḥ paśyati vītaśoko dhātuḥ prasādānmahimānamātmanaḥ ||',
    translation: '"Subtler than the subtle, greater than the great, the Self is hidden in the heart of every creature. One who is free from desires, with mind and senses calmed, sees the glory of the Self through the grace of the Creator."',
    explanation: {
      simple: 'The Self is smaller than the smallest and greater than the greatest - it\'s in every being\'s heart. One sees it when desires cease and the mind is calm.',
      deeper: 'This verse emphasizes that realization comes through grace (prasada) and through becoming free from craving (akratu).'
    },
    practicalApplication: 'To see the Self, calm your desires and senses. Grace flows when you prepare the ground.',
    themes: ['subtlety', 'heart', 'grace'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'katha',
    section: 2,
    verse: 21,
    sanskrit: 'आसीनो दूरं व्रजति शयानो याति सर्वतः। कस्तं मदामदं देवं मदन्यो ज्ञातुमर्हति॥',
    transliteration: 'āsīno dūraṃ vrajati śayāno yāti sarvataḥ | kastaṃ madāmadaṃ devaṃ madanyo jñātumarhati ||',
    translation: '"Sitting still, it travels far; lying down, it goes everywhere. Who but I can know that radiant being who rejoices and rejoices not?"',
    explanation: {
      simple: 'The Self doesn\'t move yet is everywhere. It seems to experience joy and sorrow, yet is beyond both. Who but Death can reveal such a paradox?',
      deeper: 'This describes the apparent contradiction of the Self - immovable yet omnipresent, involved yet untouched.'
    },
    practicalApplication: 'Notice: you don\'t have to go anywhere to reach the Self. It\'s already here, already everywhere.',
    themes: ['paradox', 'omnipresence', 'stillness'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 2,
    verse: 22,
    sanskrit: 'अशरीरं शरीरेष्वनवस्थेष्ववस्थितम्। महान्तं विभुमात्मानं मत्वा धीरो न शोचति॥',
    transliteration: 'aśarīraṃ śarīreṣvanavastheṣvavasthitam | mahāntaṃ vibhumātmānaṃ matvā dhīro na śocati ||',
    translation: '"Knowing the Self as bodiless within bodies, stable amid the unstable, great and all-pervading, the wise person grieves not."',
    explanation: {
      simple: 'The Self is bodiless though in bodies, unchanging though amid change, vast though seemingly limited. Knowing this, the wise don\'t grieve.',
      deeper: 'Grief comes from identifying with the changing body. Knowing the unchanging Self ends all grief.'
    },
    practicalApplication: 'When you grieve, ask: What is it that never changes? Rest in that.',
    themes: ['bodiless', 'unchanging', 'end of grief'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 2,
    verse: 23,
    sanskrit: 'नायमात्मा प्रवचनेन लभ्यो न मेधया न बहुना श्रुतेन। यमेवैष वृणुते तेन लभ्यस्तस्यैष आत्मा विवृणुते तनूं स्वाम्॥',
    transliteration: 'nāyamātmā pravacanena labhyo na medhayā na bahunā śrutena | yamevaiṣa vṛṇute tena labhyastasyaiṣa ātmā vivṛṇute tanūṃ svām ||',
    translation: '"This Self cannot be attained by discourse, nor by intellect, nor by much learning. It is attained by the one whom it chooses. To such a one, the Self reveals its own form."',
    explanation: {
      simple: 'The Self isn\'t gained by clever talk, sharp intellect, or vast learning. It chooses who will realize it. To that chosen one, it reveals itself.',
      deeper: 'This emphasizes grace. Though effort is necessary, final realization is a gift - the Self reveals itself when conditions are right.'
    },
    practicalApplication: 'Do your practice, but don\'t force it. Create conditions, then surrender to grace.',
    themes: ['grace', 'self-revelation', 'humility'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'katha',
    section: 2,
    verse: 24,
    sanskrit: 'नाविरतो दुश्चरितान्नाशान्तो नासमाहितः। नाशान्तमानसो वापि प्रज्ञानेनैनमाप्नुयात्॥',
    transliteration: 'nāvirato duścaritānnāśānto nāsamāhitaḥ | nāśāntamānaso vāpi prajñānenainamāpnuyāt ||',
    translation: '"One who has not ceased from bad conduct, who is not tranquil, who is not collected, whose mind is not at peace, cannot attain this Self through knowledge."',
    explanation: {
      simple: 'The Self isn\'t realized by one who acts badly, lacks tranquility, isn\'t focused, or has a restless mind. Ethics and inner peace are prerequisites.',
      deeper: 'This lists the qualifications: good conduct, tranquility, concentration, and mental peace. Without these, knowledge remains merely intellectual.'
    },
    practicalApplication: 'Before seeking higher knowledge, establish ethical conduct and inner peace. These are the foundation.',
    themes: ['ethics', 'tranquility', 'qualification'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 2,
    verse: 25,
    sanskrit: 'यस्य ब्रह्म च क्षत्रं च उभे भवत ओदनः। मृत्युर्यस्योपसेचनं क इत्था वेद यत्र सः॥',
    transliteration: 'yasya brahma ca kṣatraṃ ca ubhe bhavata odanaḥ | mṛtyuryasyopasecanaṃ ka itthā veda yatra saḥ ||',
    translation: '"For whom both the priestly and warrior classes are food, and death itself is a condiment - who can know where that Self dwells?"',
    explanation: {
      simple: 'This Self "consumes" everything - even the highest social powers, even death itself! Who can know the dwelling place of such an infinite reality?',
      deeper: 'This shocking image shows the Self as transcending all categories, including death. Death, which Nachiketa faced, is just a "condiment" to the Self.'
    },
    practicalApplication: 'The Self you seek is greater than anything you can imagine - even greater than Death.',
    themes: ['transcendence', 'infinity', 'mystery'],
    difficulty: 'intermediate',
  },
];

// =============================================================================
// SECTION 3: THE ETERNAL SELF (Adhyaya 1, Valli 3)
// Verses 1-17: The famous chariot metaphor
// =============================================================================

const section3Verses: UpanishadVerse[] = [
  {
    upanishad: 'katha',
    section: 3,
    verse: 1,
    sanskrit: 'ऋतं पिबन्तौ सुकृतस्य लोके गुहां प्रविष्टौ परमे परार्धे। छायातपौ ब्रह्मविदो वदन्ति पञ्चाग्नयो ये च त्रिणाचिकेताः॥',
    transliteration: 'ṛtaṃ pibantau sukṛtasya loke guhāṃ praviṣṭau parame parārdhe | chāyātapau brahmavido vadanti pañcāgnayo ye ca triṇāciketāḥ ||',
    translation: '"There are two who drink the fruits of karma in the world of good deeds, entered into the cave, in the highest space. Knowers of Brahman call them shadow and light, as do householders who perform the five fires and the triple Nachiketa fire."',
    explanation: {
      simple: 'Two entities dwell in the heart\'s cave: the individual self (jiva) and the supreme Self (Atman). One experiences karma (shadow), the other is pure light.',
      deeper: 'This introduces the famous "two birds" metaphor found in the Mundaka Upanishad - one eats the fruits, the other watches.'
    },
    practicalApplication: 'Within you are two: the experiencer caught in action, and the witness untouched by it. Know both.',
    themes: ['two selves', 'cave', 'karma'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 3,
    verse: 2,
    sanskrit: 'यः सेतुरीजानानामक्षरं ब्रह्म यत्परम्। अभयं तितीर्षतां पारं नाचिकेतं शकेमहि॥',
    transliteration: 'yaḥ seturījānānāmakṣaraṃ brahma yatparam | abhayaṃ titīrṣatāṃ pāraṃ nāciketaṃ śakemahi ||',
    translation: '"May we master the Nachiketa fire, which is the bridge for sacrificers, the imperishable Brahman, the fearless shore for those who seek to cross over."',
    explanation: {
      simple: 'The Nachiketa fire serves as a bridge to cross the ocean of worldly existence and reach the fearless shore of Brahman.',
      deeper: 'This verse honors the ritual teaching while pointing beyond it to the imperishable Brahman that the ritual symbolizes.'
    },
    practicalApplication: 'Use spiritual practices as bridges to cross over, not as ends in themselves.',
    themes: ['bridge', 'crossing over', 'fearlessness'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 3,
    verse: 3,
    sanskrit: 'आत्मानं रथिनं विद्धि शरीरं रथमेव तु। बुद्धिं तु सारथिं विद्धि मनः प्रग्रहमेव च॥',
    transliteration: 'ātmānaṃ rathinaṃ viddhi śarīraṃ rathameva tu | buddhiṃ tu sārathiṃ viddhi manaḥ pragrahameva ca ||',
    translation: '"Know the Self as the rider of the chariot, the body as the chariot. Know the intellect as the charioteer, and the mind as the reins."',
    explanation: {
      simple: 'This is the famous chariot metaphor: You (the Self) are the passenger. Your body is the vehicle. Your intellect is the driver. Your mind is the reins that control the horses.',
      deeper: 'This image shows the proper hierarchy: Self is master, intellect serves Self, mind is controlled by intellect. When this order is reversed, suffering follows.'
    },
    practicalApplication: 'Are you the rider directing your life, or have the horses (senses) taken over? Restore proper order.',
    themes: ['chariot', 'Self', 'hierarchy'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    upanishad: 'katha',
    section: 3,
    verse: 4,
    sanskrit: 'इन्द्रियाणि हयानाहुर्विषयांस्तेषु गोचरान्। आत्मेन्द्रियमनोयुक्तं भोक्तेत्याहुर्मनीषिणः॥',
    transliteration: 'indriyāṇi hayānāhurviṣayāṃsteṣu gocarān | ātmendriyamanoyuktaṃ bhoktetyāhurmanīṣiṇaḥ ||',
    translation: '"The senses are said to be the horses; their roads are the sense objects. The Self, joined with the senses and mind, the wise call the enjoyer."',
    explanation: {
      simple: 'The senses are like horses that run toward sense objects (sights, sounds, etc.). The Self, connected to mind and senses, is called the "enjoyer" - the one who experiences.',
      deeper: 'The Self becomes bound by identifying with experiences. It\'s not the senses that bind us, but our attachment to what they reveal.'
    },
    practicalApplication: 'Notice how your senses pull you toward objects. You are the experiencer, not the experience itself.',
    themes: ['senses', 'objects', 'enjoyer'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    upanishad: 'katha',
    section: 3,
    verse: 5,
    sanskrit: 'यस्त्वविज्ञानवान्भवत्ययुक्तेन मनसा सदा। तस्येन्द्रियाण्यवश्यानि दुष्टाश्वा इव सारथेः॥',
    transliteration: 'yastvavijñānavānbhavatyayuktena manasā sadā | tasyendriyāṇyavaśyāni duṣṭāśvā iva sāratheḥ ||',
    translation: '"One who lacks discrimination, whose mind is always uncontrolled, has senses that are unmanageable, like wild horses for a charioteer."',
    explanation: {
      simple: 'Without wisdom and focus, your senses become wild horses that drag you wherever they want, like a bad driver with untrained horses.',
      deeper: 'The key is "avijñana" (lack of discrimination). Without clear seeing, the mind cannot control the senses, and chaos results.'
    },
    practicalApplication: 'When you feel out of control, check: Is the intellect asleep? Is the mind (reins) slack?',
    themes: ['control', 'discrimination', 'wild senses'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'katha',
    section: 3,
    verse: 6,
    sanskrit: 'यस्तु विज्ञानवान्भवति युक्तेन मनसा सदा। तस्येन्द्रियाणि वश्यानि सदश्वा इव सारथेः॥',
    transliteration: 'yastu vijñānavānbhavati yuktena manasā sadā | tasyendriyāṇi vaśyāni sadaśvā iva sāratheḥ ||',
    translation: '"But one who has discrimination, whose mind is always controlled, has senses that are manageable, like good horses for a charioteer."',
    explanation: {
      simple: 'With wisdom and mental focus, your senses become well-trained horses that obey your direction, like good horses with a skilled driver.',
      deeper: 'The contrast with the previous verse shows that the same senses can be a curse or blessing depending on whether discrimination guides them.'
    },
    practicalApplication: 'Train your mind and senses gradually. Don\'t fight them - train them like a good driver trains horses.',
    themes: ['control', 'discrimination', 'trained senses'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'katha',
    section: 3,
    verse: 7,
    sanskrit: 'यस्त्वविज्ञानवान्भवत्यमनस्कः सदाशुचिः। न स तत्पदमाप्नोति संसारं चाधिगच्छति॥',
    transliteration: 'yastvavijñānavānbhavatyamanaskaḥ sadāśuciḥ | na sa tatpadamāpnoti saṃsāraṃ cādhigacchati ||',
    translation: '"One who lacks discrimination, who is mindless and always impure, does not reach that goal but wanders in the cycle of rebirth."',
    explanation: {
      simple: 'Without wisdom, attention, and purity, you miss the spiritual goal and keep cycling through births and deaths.',
      deeper: 'Three requirements: vijñana (discrimination), manas (mindful attention), and shuddhi (purity). Without these, liberation is impossible.'
    },
    practicalApplication: 'Work on all three: clarity of understanding, quality of attention, and purity of heart and action.',
    themes: ['samsara', 'discrimination', 'purity'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 3,
    verse: 8,
    sanskrit: 'यस्तु विज्ञानवान्भवति समनस्कः सदा शुचिः। स तु तत्पदमाप्नोति यस्माद्भूयो न जायते॥',
    transliteration: 'yastu vijñānavānbhavati samanaskaḥ sadā śuciḥ | sa tu tatpadamāpnoti yasmādbhūyo na jāyate ||',
    translation: '"But one who has discrimination, who is mindful and always pure, reaches that goal from which one is not born again."',
    explanation: {
      simple: 'With wisdom, attention, and purity, you reach the supreme goal - liberation from the cycle of rebirth. You don\'t have to be born again.',
      deeper: 'This is moksha - freedom from samsara. The formula is clear: discrimination + mindfulness + purity = liberation.'
    },
    practicalApplication: 'Liberation is possible. It requires sustained effort in these three areas. Are you committed?',
    themes: ['liberation', 'no rebirth', 'goal'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'katha',
    section: 3,
    verse: 9,
    sanskrit: 'विज्ञानसारथिर्यस्तु मनःप्रग्रहवान्नरः। सोऽध्वनः पारमाप्नोति तद्विष्णोः परमं पदम्॥',
    transliteration: 'vijñānasārathiryastu manaḥpragrahavānnaraḥ | so\'dhvanaḥ pāramāpnoti tadviṣṇoḥ paramaṃ padam ||',
    translation: '"The person who has discrimination as charioteer and the mind as well-controlled reins reaches the end of the journey - that supreme state of Vishnu."',
    explanation: {
      simple: 'With wisdom as driver and a focused mind as reins, you complete the journey and reach the highest state - called here "Vishnu\'s supreme abode."',
      deeper: 'Vishnu here represents the all-pervading Reality (from "vish" - to pervade). The "supreme state" is liberation.'
    },
    practicalApplication: 'You have everything needed for the journey. Just establish the right order: intellect guides, mind obeys.',
    themes: ['journey', 'Vishnu', 'destination'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 3,
    verse: 10,
    sanskrit: 'इन्द्रियेभ्यः परा ह्यर्था अर्थेभ्यश्च परं मनः। मनसस्तु परा बुद्धिर्बुद्धेरात्मा महान्परः॥',
    transliteration: 'indriyebhyaḥ parā hyarthā arthebhyaśca paraṃ manaḥ | manasastu parā buddhirbuddherātmā mahānparaḥ ||',
    translation: '"Beyond the senses are the objects; beyond the objects is the mind. Beyond the mind is the intellect; beyond the intellect is the great Self."',
    explanation: {
      simple: 'A hierarchy of subtlety: sense objects are subtler than senses, mind subtler than objects, intellect subtler than mind, and the great Self subtlest of all.',
      deeper: 'This shows where to direct attention: inward toward increasingly subtle levels, culminating in the Atman.'
    },
    practicalApplication: 'Move attention progressively inward: from senses to mind to intellect to Self.',
    themes: ['hierarchy', 'subtle', 'inward'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'katha',
    section: 3,
    verse: 11,
    sanskrit: 'महतः परमव्यक्तमव्यक्तात्पुरुषः परः। पुरुषान्न परं किञ्चित्सा काष्ठा सा परा गतिः॥',
    transliteration: 'mahataḥ paramavyaktamavyaktātpuruṣaḥ paraḥ | puruṣānna paraṃ kiñcitsā kāṣṭhā sā parā gatiḥ ||',
    translation: '"Beyond the great Self is the Unmanifest; beyond the Unmanifest is the Purusha (Supreme Person). Beyond the Purusha there is nothing. That is the end, that is the supreme goal."',
    explanation: {
      simple: 'The hierarchy continues: beyond the individual self is the Unmanifest (prakriti), beyond that is Purusha (pure consciousness). Nothing is beyond That.',
      deeper: 'Purusha is the final reality - pure awareness before any manifestation. This is the ultimate goal of spiritual seeking.'
    },
    practicalApplication: 'There is an end to seeking. Purusha - pure awareness - is the final destination, nothing beyond.',
    themes: ['Purusha', 'unmanifest', 'ultimate'],
    difficulty: 'advanced',
  },
  {
    upanishad: 'katha',
    section: 3,
    verse: 12,
    sanskrit: 'एष सर्वेषु भूतेषु गूढोत्मा न प्रकाशते। दृश्यते त्वग्र्यया बुद्ध्या सूक्ष्मया सूक्ष्मदर्शिभिः॥',
    transliteration: 'eṣa sarveṣu bhūteṣu gūḍhotmā na prakāśate | dṛśyate tvagryayā buddhyā sūkṣmayā sūkṣmadarśibhiḥ ||',
    translation: '"This Self, hidden in all beings, does not shine forth. But it is seen by the subtle seers through their sharp, subtle intellect."',
    explanation: {
      simple: 'The Self is hidden in everyone but doesn\'t obviously show itself. Only those with refined, subtle perception can see it.',
      deeper: 'The Self is always present but veiled by grosser layers. Refinement of intellect removes these veils.'
    },
    practicalApplication: 'Refine your perception. The Self is here but hidden. Subtle seeing reveals it.',
    themes: ['hidden Self', 'subtle perception', 'refinement'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 3,
    verse: 13,
    sanskrit: 'यच्छेद्वाङ्मनसी प्राज्ञस्तद्यच्छेज्ज्ञान आत्मनि। ज्ञानमात्मनि महति नियच्छेत्तद्यच्छेच्छान्त आत्मनि॥',
    transliteration: 'yacchedvāṅmanasī prājñastadyacchejjñāna ātmani | jñānamātmani mahati niyacchettadyaccheccchānta ātmani ||',
    translation: '"The wise should merge speech into mind, mind into the knowing self, the knowing self into the great Self, and that into the peaceful Self."',
    explanation: {
      simple: 'A meditation instruction: withdraw speech into mind, mind into intellect, intellect into the cosmic Self, and that into pure peaceful Awareness.',
      deeper: 'This describes the process of progressive interiorization - withdrawing from gross to subtle to subtlest.'
    },
    practicalApplication: 'In meditation, progressively withdraw: from outer speech, to inner thought, to pure awareness, to peace.',
    themes: ['meditation', 'withdrawal', 'peace'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 3,
    verse: 14,
    sanskrit: 'उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत। क्षुरस्य धारा निशिता दुरत्यया दुर्गं पथस्तत्कवयो वदन्ति॥',
    transliteration: 'uttiṣṭhata jāgrata prāpya varānnibodhata | kṣurasya dhārā niśitā duratyayā durgaṃ pathastatkavayo vadanti ||',
    translation: '"Arise! Awake! Having obtained the great teachers, understand! The wise say the path is sharp as a razor\'s edge, difficult to tread."',
    explanation: {
      simple: 'Wake up! Find good teachers and learn! But know that the spiritual path is razor-sharp and difficult - the sages warn us.',
      deeper: 'This famous verse is a call to action and a warning. The path requires vigilance - one slip and you fall.'
    },
    practicalApplication: 'Don\'t be complacent. The spiritual path requires constant alertness. One moment of carelessness can set you back.',
    themes: ['awakening', 'difficulty', 'razor\'s edge'],
    difficulty: 'beginner',
    famousVerse: true,
  },
  {
    upanishad: 'katha',
    section: 3,
    verse: 15,
    sanskrit: 'अशब्दमस्पर्शमरूपमव्ययं तथारसं नित्यमगन्धवच्च यत्। अनाद्यनन्तं महतः परं ध्रुवं निचाय्य तन्मृत्युमुखात्प्रमुच्यते॥',
    transliteration: 'aśabdamasparśamarūpamavyayaṃ tathārasaṃ nityamagandhavcca yat | anādyanantaṃ mahataḥ paraṃ dhruvaṃ nicāyya tanmṛtyumukhātpramucyate ||',
    translation: '"Realizing that which is soundless, touchless, formless, unfading, tasteless, eternal, odorless, without beginning or end, beyond the great, unchanging - one is freed from the jaws of death."',
    explanation: {
      simple: 'The Self has no sensory qualities - no sound, touch, form, taste, or smell. It\'s eternal, unchanging, infinite. Knowing this frees you from death.',
      deeper: 'By negation (neti neti), we approach what the Self truly is - beyond all qualities, yet the source of all.'
    },
    practicalApplication: 'The Self you seek has no sensory qualities. Stop looking for it with the senses; know it by being it.',
    themes: ['beyond senses', 'freedom from death', 'negation'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'katha',
    section: 3,
    verse: 16,
    sanskrit: 'नाचिकेतमुपाख्यानं मृत्युप्रोक्तं सनातनम्। उक्त्वा श्रुत्वा च मेधावी ब्रह्मलोके महीयते॥',
    transliteration: 'nāciketamupākhyānaṃ mṛtyuproktaṃ sanātanam | uktvā śrutvā ca medhāvī brahmaloke mahīyate ||',
    translation: '"The wise one who tells or hears this ancient story of Nachiketa, told by Death, is honored in the world of Brahman."',
    explanation: {
      simple: 'Sharing or hearing this eternal teaching of Nachiketa brings great spiritual merit and honor in the highest realm.',
      deeper: 'This emphasizes the value of both teaching and learning - both the speaker and listener benefit from this sacred knowledge.'
    },
    practicalApplication: 'Share what you learn. Teaching deepens your own understanding and benefits others.',
    themes: ['teaching', 'merit', 'transmission'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'katha',
    section: 3,
    verse: 17,
    sanskrit: 'य इमं परमं गुह्यं श्रावयेद्ब्रह्मसंसदि। प्रयतः श्राद्धकाले वा तदानन्त्याय कल्पते। तदानन्त्याय कल्पते॥',
    transliteration: 'ya imaṃ paramaṃ guhyaṃ śrāvayedbrahmasaṃsadi | prayataḥ śrāddhakāle vā tadānantyāya kalpate | tadānantyāya kalpate ||',
    translation: '"One who, with effort, recites this supreme secret in an assembly of Brahmins, or at the time of ancestral rites, gains infinite merit. Gains infinite merit indeed!"',
    explanation: {
      simple: 'Reciting this teaching in sacred gatherings or during rituals for ancestors brings infinite spiritual benefit.',
      deeper: 'The repetition of "infinite merit" emphasizes this point. Sacred knowledge shared in sacred contexts multiplies its power.'
    },
    practicalApplication: 'Create sacred contexts for sharing wisdom. The setting amplifies the teaching.',
    themes: ['merit', 'sacred context', 'infinity'],
    difficulty: 'beginner',
  },
];

// =============================================================================
// SECTION 4: THE INNER CONTROLLER (Adhyaya 2, Valli 1)
// Verses 1-15: The Self dwells within
// =============================================================================

const section4Verses: UpanishadVerse[] = [
  {
    upanishad: 'katha',
    section: 4,
    verse: 1,
    sanskrit: 'पराञ्चि खानि व्यतृणत्स्वयम्भूस्तस्मात्पराङ्पश्यति नान्तरात्मन्। कश्चिद्धीरः प्रत्यगात्मानमैक्षदावृत्तचक्षुरमृतत्वमिच्छन्॥',
    transliteration: 'parāñci khāni vyatṛṇatsvayambhūstasmātparāṅpaśyati nāntarātman | kaściddhīraḥ pratyagātmānamaikṣadāvṛttacakṣuramṛtatvamicchan ||',
    translation: '"The Self-existent pierced the openings outward; therefore one looks outward, not within. Some wise one, seeking immortality, turned the eyes inward and saw the Self."',
    explanation: {
      simple: 'Our senses are made to look outward at the world. Most people never look within. A rare wise person turns attention inward and discovers the immortal Self.',
      deeper: 'The Creator made the senses point outward for survival. But the seeker must reverse this direction to find what\'s eternal.'
    },
    practicalApplication: 'Your whole life you\'ve looked outward. What would happen if you turned attention inward?',
    themes: ['inward turning', 'senses', 'immortality'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'katha',
    section: 4,
    verse: 2,
    sanskrit: 'पराचः कामाननुयन्ति बालास्ते मृत्योर्यन्ति विततस्य पाशम्। अथ धीरा अमृतत्वं विदित्वा ध्रुवमध्रुवेष्विह न प्रार्थयन्ते॥',
    transliteration: 'parācaḥ kāmānanuyanti bālāste mṛtyoryanti vitatasya pāśam | atha dhīrā amṛtatvaṃ viditvā dhruvamadhruvṣviha na prārthayante ||',
    translation: '"The childish pursue external desires and walk into the snare of death spread wide. But the wise, knowing immortality, seek not the stable among unstable things here."',
    explanation: {
      simple: 'Immature people chase outer pleasures and fall into death\'s trap. The wise, knowing what\'s truly eternal, don\'t seek permanence in impermanent things.',
      deeper: 'Death\'s snare is identification with what changes. The wise know the difference between dhruva (stable) and adhruva (unstable).'
    },
    practicalApplication: 'What are you seeking that\'s truly permanent? Or are you chasing stability in unstable things?',
    themes: ['desire', 'death\'s snare', 'discernment'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 4,
    verse: 3,
    sanskrit: 'येन रूपं रसं गन्धं शब्दान्स्पर्शांश्च मैथुनान्। एतेनैव विजानाति किमत्र परिशिष्यते। एतद्वै तत्॥',
    transliteration: 'yena rūpaṃ rasaṃ gandhaṃ śabdānsparśāṃśca maithunān | etenaiva vijānāti kimatra pariśiṣyate | etadvai tat ||',
    translation: '"That by which one perceives form, taste, smell, sound, touch, and the pleasures of love - by that alone one knows. What remains here that is not this? This verily is That."',
    explanation: {
      simple: 'The same consciousness that perceives all sensations is the Self you\'re looking for. What is there besides this awareness? This is Brahman.',
      deeper: '"Etad vai tat" - This indeed is That. The perceiving awareness is itself the supreme Reality you seek.'
    },
    practicalApplication: 'The awareness reading these words - that\'s what you\'re seeking. It was never lost.',
    themes: ['awareness', 'perception', 'This is That'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 4,
    verse: 4,
    sanskrit: 'स्वप्नान्तं जागरितान्तं चोभौ येनानुपश्यति। महान्तं विभुमात्मानं मत्वा धीरो न शोचति॥',
    transliteration: 'svapnāntaṃ jāgaritāntaṃ cobhau yenānupaśyati | mahāntaṃ vibhumātmānaṃ matvā dhīro na śocati ||',
    translation: '"That by which one perceives both the dream state and the waking state - knowing that great, all-pervading Self, the wise person does not grieve."',
    explanation: {
      simple: 'The same awareness witnesses both dreaming and waking. Recognizing this unchanging witness as your true Self ends all grief.',
      deeper: 'The Self is the constant witness through all changing states. Identifying with this witness rather than states brings peace.'
    },
    practicalApplication: 'What is present in both waking and dreaming? That unchanging presence is you.',
    themes: ['witness', 'states', 'no grief'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 4,
    verse: 5,
    sanskrit: 'य इमं मध्वदं वेद आत्मानं जीवमन्तिकात्। ईशानं भूतभव्यस्य न ततो विजुगुप्सते। एतद्वै तत्॥',
    transliteration: 'ya imaṃ madhvadaṃ veda ātmānaṃ jīvamantikāt | īśānaṃ bhūtabhavyasya na tato vijugupsate | etadvai tat ||',
    translation: '"One who knows this Self, the experiencer of sweetness, the living one, always near, the lord of past and future - from that one shrinks not. This verily is That."',
    explanation: {
      simple: 'The Self is the enjoyer of all experiences, always present, master of time itself. Knowing this, you fear nothing. This is the answer to Nachiketa\'s question.',
      deeper: '"Madhvada" (honey-eater) suggests the Self tastes the essence of all experience. It rules past and future yet is ever-present.'
    },
    practicalApplication: 'You are the experiencer of all experiences, lord of time. Why would you fear anything?',
    themes: ['experiencer', 'lord of time', 'fearlessness'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 4,
    verse: 6,
    sanskrit: 'यः पूर्वं तपसो जातमद्भ्यः पूर्वमजायत। गुहां प्रविश्य तिष्ठन्तं यो भूतेभिर्व्यपश्यत। एतद्वै तत्॥',
    transliteration: 'yaḥ pūrvaṃ tapaso jātamadbhyaḥ pūrvamajāyata | guhāṃ praviśya tiṣṭhantaṃ yo bhūtebhirvyapaśyat | etadvai tat ||',
    translation: '"That which was born before cosmic heat, born before the waters, which entered the cave and dwells there, which is seen through beings - This verily is That."',
    explanation: {
      simple: 'The Self existed before creation itself - before heat, before water, before anything. It entered the heart-cave and can be seen through all creatures.',
      deeper: 'This establishes the primordial nature of Atman - not created, but the source from which creation emerged.'
    },
    practicalApplication: 'You are not a product of creation. Your essence precedes the universe itself.',
    themes: ['primordial', 'before creation', 'heart-cave'],
    difficulty: 'advanced',
  },
  {
    upanishad: 'katha',
    section: 4,
    verse: 7,
    sanskrit: 'या प्राणेन संभवत्यदितिर्देवतामयी। गुहां प्रविश्य तिष्ठन्तीं या भूतेभिर्व्यजायत। एतद्वै तत्॥',
    transliteration: 'yā prāṇena saṃbhavatyaditirdevatāmayī | guhāṃ praviśya tiṣṭhantīṃ yā bhūtebhirvyajāyata | etadvai tat ||',
    translation: '"Aditi, consisting of all the gods, who arises with the breath of life, who entered the cave and dwells there, who was born through beings - This verily is That."',
    explanation: {
      simple: 'Aditi (the infinite, mother of gods) is another name for this Reality. It manifests through life-force and dwells in the heart.',
      deeper: 'Aditi means "unbounded" - the infinite that contains all divine powers yet resides in the cave of the heart.'
    },
    practicalApplication: 'The infinite divine dwells in your heart. All divine powers are accessible there.',
    themes: ['Aditi', 'life-force', 'divine powers'],
    difficulty: 'advanced',
  },
  {
    upanishad: 'katha',
    section: 4,
    verse: 8,
    sanskrit: 'अरण्योर्निहितो जातवेदा गर्भ इव सुभृतो गर्भिणीभिः। दिवे दिव ईड्यो जागृवद्भिर्हविष्मद्भिर्मनुष्येभिरग्निः। एतद्वै तत्॥',
    transliteration: 'araṇyornihito jātavedā garbha iva subhṛto garbhiṇībhiḥ | dive diva īḍyo jāgṛvadbhihaviṣmadbhirmanuṣyebhiragniḥ | etadvai tat ||',
    translation: '"Agni, the all-knowing, hidden in the fire-sticks like a child well-carried by pregnant women, to be worshipped day after day by wakeful ones bearing offerings - This verily is That."',
    explanation: {
      simple: 'Just as fire hides in wood until rubbed, the divine Self hides in all beings until awakened through practice.',
      deeper: 'The fire-stick metaphor shows how the Self is latent (hidden) but can be kindled through spiritual practice.'
    },
    practicalApplication: 'The divine fire is hidden in you, waiting to be kindled. Daily practice "rubs the sticks."',
    themes: ['hidden fire', 'latent divinity', 'practice'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 4,
    verse: 9,
    sanskrit: 'यतश्चोदेति सूर्योऽस्तं यत्र च गच्छति। तं देवाः सर्वेऽर्पितास्तदु नात्येति कश्चन। एतद्वै तत्॥',
    transliteration: 'yataścodeti sūryo\'staṃ yatra ca gacchati | taṃ devāḥ sarve\'rpitāstadu nātyeti kaścana | etadvai tat ||',
    translation: '"That from which the sun rises and into which it sets - in That all the gods are established, and none goes beyond it. This verily is That."',
    explanation: {
      simple: 'The sun rises from and sets into this Reality. All divine powers rest in it. Nothing transcends it - it is the ultimate.',
      deeper: 'Even the sun, source of all earthly life, is subordinate to Brahman. All gods are contained within it.'
    },
    practicalApplication: 'Everything you worship is contained in this one Reality. Know the source.',
    themes: ['source', 'sun', 'ultimate'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 4,
    verse: 10,
    sanskrit: 'यदेवेह तदमुत्र यदमुत्र तदन्विह। मृत्योः स मृत्युमाप्नोति य इह नानेव पश्यति॥',
    transliteration: 'yadeveha tadamutra yadamutra tadanviha | mṛtyoḥ sa mṛtyumāpnoti ya iha nāneva paśyati ||',
    translation: '"What is here is there; what is there is also here. One who sees difference here goes from death to death."',
    explanation: {
      simple: 'The same Reality exists everywhere - here and there, in this world and beyond. Seeing differences where there is only One leads to repeated death.',
      deeper: 'The illusion of multiplicity (nana - manyness) is the cause of bondage. Unity is the truth; diversity is appearance.'
    },
    practicalApplication: 'Stop seeing separation. The same One is everywhere. Practice seeing unity.',
    themes: ['unity', 'no difference', 'death to death'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'katha',
    section: 4,
    verse: 11,
    sanskrit: 'मनसैवेदमाप्तव्यं नेह नानास्ति किञ्चन। मृत्योः स मृत्युं गच्छति य इह नानेव पश्यति॥',
    transliteration: 'manasaivedamāptavyaṃ neha nānāsti kiñcana | mṛtyoḥ sa mṛtyuṃ gacchati ya iha nāneva paśyati ||',
    translation: '"By mind alone this is to be realized: there is no diversity here at all. One who sees diversity here goes from death to death."',
    explanation: {
      simple: 'This truth must be grasped by the purified mind: there is NO real diversity. Seeing multiplicity leads to endless deaths.',
      deeper: 'The repetition emphasizes: nana (diversity) is the root error. The mind must be trained to see unity.'
    },
    practicalApplication: 'Train your mind to see the One in the many. This is the end of death.',
    themes: ['mind', 'no diversity', 'unity'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 4,
    verse: 12,
    sanskrit: 'अङ्गुष्ठमात्रः पुरुषो मध्य आत्मनि तिष्ठति। ईशानो भूतभव्यस्य न ततो विजुगुप्सते। एतद्वै तत्॥',
    transliteration: 'aṅguṣṭhamātraḥ puruṣo madhya ātmani tiṣṭhati | īśāno bhūtabhavyasya na tato vijugupsate | etadvai tat ||',
    translation: '"The Purusha, of the size of a thumb, dwells in the middle of the self. Lord of past and future, one does not shrink from That. This verily is That."',
    explanation: {
      simple: 'The supreme Person dwells in the heart (thumb-sized space). It rules all time - past and future. Knowing this, one fears nothing.',
      deeper: 'The "thumb size" represents the heart center. The infinite appears finite when dwelling in the heart.'
    },
    practicalApplication: 'The infinite Lord dwells in your heart\'s small space. Focus there.',
    themes: ['heart', 'thumb-sized', 'fearlessness'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 4,
    verse: 13,
    sanskrit: 'अङ्गुष्ठमात्रः पुरुषो ज्योतिरिवाधूमकः। ईशानो भूतभव्यस्य स एवाद्य स उ श्वः। एतद्वै तत्॥',
    transliteration: 'aṅguṣṭhamātraḥ puruṣo jyotirivādhūmakaḥ | īśāno bhūtabhavyasya sa evādya sa u śvaḥ | etadvai tat ||',
    translation: '"The Purusha, of the size of a thumb, is like a flame without smoke. Lord of past and future, it is the same today and tomorrow. This verily is That."',
    explanation: {
      simple: 'The Self in the heart shines like a smokeless flame - pure light. It is unchanged by time - the same yesterday, today, and forever.',
      deeper: '"Smokeless flame" suggests pure consciousness without the obscuration of thought. It transcends time entirely.'
    },
    practicalApplication: 'Your true nature is unchanging light. What was true of you yesterday is true today and tomorrow.',
    themes: ['light', 'unchanging', 'timeless'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 4,
    verse: 14,
    sanskrit: 'यथोदकं दुर्गे वृष्टं पर्वतेषु विधावति। एवं धर्मान्पृथक्पश्यंस्तानेवानुविधावति॥',
    transliteration: 'yathodakaṃ durge vṛṣṭaṃ parvateṣu vidhāvati | evaṃ dharmānpṛthakpaśyaṃstānevānuvidhāvati ||',
    translation: '"As water rained on a height scatters among the hills, so one who sees things as separate runs after them."',
    explanation: {
      simple: 'Like rain water scattering down different mountain slopes, one who sees reality as many separate things gets scattered chasing them all.',
      deeper: 'Seeing multiplicity fragments attention and energy. The seeker gets lost chasing countless separate goals.'
    },
    practicalApplication: 'Don\'t scatter yourself chasing separate things. See the unity and your energy consolidates.',
    themes: ['scattering', 'separation', 'unity'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'katha',
    section: 4,
    verse: 15,
    sanskrit: 'यथोदकं शुद्धे शुद्धमासिक्तं तादृगेव भवति। एवं मुनेर्विजानत आत्मा भवति गौतम॥',
    transliteration: 'yathodakaṃ śuddhe śuddhamāsiktaṃ tādṛgeva bhavati | evaṃ munervijānata ātmā bhavati gautama ||',
    translation: '"As pure water poured into pure water becomes just like it, so the Self of the discerning sage becomes one (with Brahman), O Gautama."',
    explanation: {
      simple: 'Like pure water merging with pure water becomes indistinguishable, the pure Self of the knower merges with Brahman - becoming one.',
      deeper: 'This describes liberation: the individual self realizes its identity with Brahman, like water merging with water.'
    },
    practicalApplication: 'Purify yourself, and you naturally merge with the pure. There\'s no separate "you" to merge.',
    themes: ['merging', 'purity', 'oneness'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
];

// =============================================================================
// SECTION 5: THE CITY OF ELEVEN GATES (Adhyaya 2, Valli 2)
// Verses 1-15: The body as a city
// =============================================================================

const section5Verses: UpanishadVerse[] = [
  {
    upanishad: 'katha',
    section: 5,
    verse: 1,
    sanskrit: 'पुरमेकादशद्वारमजस्यावक्रचेतसः। अनुष्ठाय न शोचति विमुक्तश्च विमुच्यते। एतद्वै तत्॥',
    transliteration: 'puramekadasadvāramajasyāvakracetasaḥ | anuṣṭhāya na śocati vimuktaśca vimucyate | etadvai tat ||',
    translation: '"The city of eleven gates belongs to the unborn one of unwavering consciousness. Meditating on Him, one grieves not and, liberated, becomes free. This verily is That."',
    explanation: {
      simple: 'The body is a city with 11 gates (openings). The unborn Self rules this city. Meditating on this Self brings freedom from grief and liberation.',
      deeper: 'The 11 gates are: 2 eyes, 2 ears, 2 nostrils, mouth, navel, 2 lower openings, and the crown (brahmarandhra).'
    },
    practicalApplication: 'Your body is the Self\'s dwelling place. Know the ruler within the city.',
    themes: ['body as city', 'eleven gates', 'liberation'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 5,
    verse: 2,
    sanskrit: 'हंसः शुचिषद्वसुरन्तरिक्षसद्धोता वेदिषदतिथिर्दुरोणसत्। नृषद्वरसदृतसद्व्योमसदब्जा गोजा ऋतजा अद्रिजा ऋतं बृहत्॥',
    transliteration: 'haṃsaḥ śuciṣadvasurantarikṣasaddhotā vediṣadatithirduroṇasat | nṛṣadvarasadṛtasadvyomasadabjā gojā ṛtajā adrijā ṛtaṃ bṛhat ||',
    translation: '"The Self is the sun dwelling in the sky, air dwelling in space, fire dwelling on the altar, guest dwelling in the house. It dwells in humans, in the gods, in truth, in space. It is born of water, earth, truth, and mountains - the great Truth."',
    explanation: {
      simple: 'The one Self appears as sun, air, fire, and the guest. It dwells everywhere - in humans, gods, truth, space. It\'s the source of all.',
      deeper: 'Hamsa (swan/goose) is a symbol for the Self. This verse shows the Self\'s all-pervading nature in various forms.'
    },
    practicalApplication: 'See the same Self in the sun, in fire, in your guest, in yourself. It\'s all One.',
    themes: ['all-pervading', 'Hamsa', 'many forms'],
    difficulty: 'advanced',
  },
  {
    upanishad: 'katha',
    section: 5,
    verse: 3,
    sanskrit: 'ऊर्ध्वं प्राणमुन्नयत्यपानं प्रत्यगस्यति। मध्ये वामनमासीनं विश्वे देवा उपासते॥',
    transliteration: 'ūrdhvaṃ prāṇamunnayatyapānaṃ pratyagasyati | madhye vāmanamāsīnaṃ viśve devā upāsate ||',
    translation: '"It sends the prana upward and casts the apana downward. All the gods worship that adorable one seated in the middle."',
    explanation: {
      simple: 'The Self controls the upward (prana) and downward (apana) life-forces. Seated in the heart\'s center, it is worshipped by all divine powers.',
      deeper: 'This describes the Self as controller of vital forces. "Vamana" (adorable/dwarf) sits in the heart controlling all energies.'
    },
    practicalApplication: 'The breath you breathe is controlled by the Self within. Honor that inner controller.',
    themes: ['prana', 'apana', 'inner controller'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 5,
    verse: 4,
    sanskrit: 'अस्य विस्रंसमानस्य शरीरस्थस्य देहिनः। देहाद्विमुच्यमानस्य किमत्र परिशिष्यते। एतद्वै तत्॥',
    transliteration: 'asya visraṃsamānasya śarīrasthasya dehinaḥ | dehādvimucyamānasya kimatra pariśiṣyate | etadvai tat ||',
    translation: '"When this embodied self dwelling in the body is released from the body as it falls apart, what remains here? This verily is That."',
    explanation: {
      simple: 'When the body falls away and the Self is released, what remains? The answer to Nachiketa\'s original question: the eternal Self remains.',
      deeper: 'This directly answers the question about death. The body perishes; the dehi (embodied one) is released, unchanged.'
    },
    practicalApplication: 'What will remain when your body falls away? Know that now, and you\'ll fear nothing.',
    themes: ['death', 'release', 'what remains'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 5,
    verse: 5,
    sanskrit: 'न प्राणेन नापानेन मर्त्यो जीवति कश्चन। इतरेण तु जीवन्ति यस्मिन्नेतावुपाश्रितौ॥',
    transliteration: 'na prāṇena nāpānena martyo jīvati kaścana | itareṇa tu jīvanti yasminnetāvupāśritau ||',
    translation: '"No mortal lives by prana or apana. They live by something else, on which both these depend."',
    explanation: {
      simple: 'Life doesn\'t come from breath alone. There\'s something deeper that both inhalation and exhalation depend on - that\'s what truly gives life.',
      deeper: 'Prana and apana are effects, not causes. The cause is the Atman, on which all vital functions depend.'
    },
    practicalApplication: 'Your life doesn\'t depend on breath - breath depends on Life itself. Know that source.',
    themes: ['source of life', 'beyond breath', 'Atman'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 5,
    verse: 6,
    sanskrit: 'हन्त त इदं प्रवक्ष्यामि गुह्यं ब्रह्म सनातनम्। यथा च मरणं प्राप्य आत्मा भवति गौतम॥',
    transliteration: 'hanta ta idaṃ pravakṣyāmi guhyaṃ brahma sanātanam | yathā ca maraṇaṃ prāpya ātmā bhavati gautama ||',
    translation: '"Come, I will tell you this secret, the eternal Brahman, and what happens to the Self after death, O Gautama."',
    explanation: {
      simple: 'Yama now reveals the final secret: the nature of eternal Brahman and what happens to the Self at death.',
      deeper: 'This is the climax of the teaching - the answer Nachiketa sought. Death (Yama) himself reveals death\'s secret.'
    },
    practicalApplication: 'The secret of death is being revealed. Pay attention to what follows.',
    themes: ['secret', 'death', 'revelation'],
    difficulty: 'beginner',
  },
  {
    upanishad: 'katha',
    section: 5,
    verse: 7,
    sanskrit: 'योनिमन्ये प्रपद्यन्ते शरीरत्वाय देहिनः। स्थाणुमन्येऽनुसंयन्ति यथाकर्म यथाश्रुतम्॥',
    transliteration: 'yonimanye prapadyante śarīratvāya dehinaḥ | sthāṇumanye\'nusaṃyanti yathākarma yathāśrutam ||',
    translation: '"Some embodied souls enter wombs for rebirth; others go into stationary forms (plants) - according to their deeds and knowledge."',
    explanation: {
      simple: 'After death, some souls are reborn in moving bodies, others in immobile forms like plants - determined by their karma and understanding.',
      deeper: 'Rebirth follows karma (action) and shruta (knowledge/hearing). The quality of both determines the next birth.'
    },
    practicalApplication: 'Your actions and understanding now are shaping your future. Choose wisely.',
    themes: ['rebirth', 'karma', 'knowledge'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 5,
    verse: 8,
    sanskrit: 'य एष सुप्तेषु जागर्ति कामं कामं पुरुषो निर्मिमाणः। तदेव शुक्रं तद्ब्रह्म तदेवामृतमुच्यते। तस्मिंल्लोकाः श्रिताः सर्वे तदु नात्येति कश्चन। एतद्वै तत्॥',
    transliteration: 'ya eṣa supteṣu jāgarti kāmaṃ kāmaṃ puruṣo nirmimāṇaḥ | tadeva śukraṃ tadbrahma tadevāmṛtamucyate | tasmiṃllokāḥ śritāḥ sarve tadu nātyeti kaścana | etadvai tat ||',
    translation: '"That Purusha who remains awake in those who sleep, creating desire after desire - that alone is the Pure, that is Brahman, that alone is called the Immortal. In it all worlds rest; none goes beyond it. This verily is That."',
    explanation: {
      simple: 'While the body sleeps, the Self stays awake, creating dreams. This pure, immortal Self is Brahman. Everything rests in it; nothing transcends it.',
      deeper: 'The dream-creator reveals the Self\'s independent activity - it doesn\'t depend on waking consciousness.'
    },
    practicalApplication: 'What creates your dreams? That awareness is the immortal Self, always awake.',
    themes: ['dream-creator', 'always awake', 'Brahman'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'katha',
    section: 5,
    verse: 9,
    sanskrit: 'अग्निर्यथैको भुवनं प्रविष्टो रूपं रूपं प्रतिरूपो बभूव। एकस्तथा सर्वभूतान्तरात्मा रूपं रूपं प्रतिरूपो बहिश्च॥',
    transliteration: 'agniryathaiko bhuvanaṃ praviṣṭo rūpaṃ rūpaṃ pratirūpo babhūva | ekastathā sarvabhūtāntarātmā rūpaṃ rūpaṃ pratirūpo bahiśca ||',
    translation: '"As the one fire, entering the world, becomes varied in shape according to the shape of each object, so the inner Self of all beings becomes varied according to each form, yet remains outside as well."',
    explanation: {
      simple: 'Like one fire taking the shape of whatever it burns, the one Self takes the form of each being it inhabits, yet also remains beyond all forms.',
      deeper: 'This is a key non-dual teaching: the Self is both immanent (inside all) and transcendent (beyond all).'
    },
    practicalApplication: 'The Self in you is the same as in all beings. Forms differ; the fire is one.',
    themes: ['one in many', 'fire', 'immanent and transcendent'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'katha',
    section: 5,
    verse: 10,
    sanskrit: 'वायुर्यथैको भुवनं प्रविष्टो रूपं रूपं प्रतिरूपो बभूव। एकस्तथा सर्वभूतान्तरात्मा रूपं रूपं प्रतिरूपो बहिश्च॥',
    transliteration: 'vāyuryathaiko bhuvanaṃ praviṣṭo rūpaṃ rūpaṃ pratirūpo babhūva | ekastathā sarvabhūtāntarātmā rūpaṃ rūpaṃ pratirūpo bahiśca ||',
    translation: '"As the one air, entering the world, becomes varied according to each form, so the inner Self of all beings becomes varied according to each form, yet remains outside as well."',
    explanation: {
      simple: 'Like air taking different forms in different spaces yet remaining one air, the Self appears different in each being yet remains one.',
      deeper: 'Air in a pot seems separate from air outside, but it\'s the same air. Similarly, the Self seems individual but is universal.'
    },
    practicalApplication: 'The life-breath in you is the same life-breath in all. Feel this unity.',
    themes: ['one air', 'apparent separation', 'unity'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 5,
    verse: 11,
    sanskrit: 'सूर्यो यथा सर्वलोकस्य चक्षुर्न लिप्यते चाक्षुषैर्बाह्यदोषैः। एकस्तथा सर्वभूतान्तरात्मा न लिप्यते लोकदुःखेन बाह्यः॥',
    transliteration: 'sūryo yathā sarvalokasya cakṣurna lipyate cākṣuṣairbāhyadoṣaiḥ | ekastathā sarvabhūtāntarātmā na lipyate lokaduḥkhena bāhyaḥ ||',
    translation: '"As the sun, the eye of the whole world, is not tainted by the external faults seen by the eye, so the inner Self of all beings is not tainted by the suffering of the world, being outside it."',
    explanation: {
      simple: 'The sun illuminates dirty things but isn\'t dirtied itself. Similarly, the Self witnesses all suffering but is never touched by it.',
      deeper: 'This is crucial: the Self is the witness of suffering, not the sufferer. It illuminates experience without being affected.'
    },
    practicalApplication: 'You can witness suffering without being the sufferer. Learn to rest in that witnessing awareness.',
    themes: ['untainted', 'witness', 'sun'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'katha',
    section: 5,
    verse: 12,
    sanskrit: 'एको वशी सर्वभूतान्तरात्मा एकं रूपं बहुधा यः करोति। तमात्मस्थं येऽनुपश्यन्ति धीरास्तेषां सुखं शाश्वतं नेतरेषाम्॥',
    transliteration: 'eko vaśī sarvabhūtāntarātmā ekaṃ rūpaṃ bahudhā yaḥ karoti | tamātmasthaṃ ye\'nupaśyanti dhīrāsteṣāṃ sukhaṃ śāśvataṃ netareṣām ||',
    translation: '"The one Controller, the inner Self of all beings, who makes the one form manifold - to the wise who see Him in their own selves belongs eternal bliss, not to others."',
    explanation: {
      simple: 'The one Self multiplies itself into many forms. Those wise ones who see this Self within themselves attain eternal happiness - others don\'t.',
      deeper: '"Vashi" (controller) emphasizes the Self\'s mastery. Seeing it "within oneself" is the key to eternal bliss.'
    },
    practicalApplication: 'Eternal happiness isn\'t outside - it\'s found by seeing the Self within yourself.',
    themes: ['one controller', 'eternal bliss', 'seeing within'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'katha',
    section: 5,
    verse: 13,
    sanskrit: 'नित्योऽनित्यानां चेतनश्चेतनानामेको बहूनां यो विदधाति कामान्। तमात्मस्थं येऽनुपश्यन्ति धीरास्तेषां शान्तिः शाश्वती नेतरेषाम्॥',
    transliteration: 'nityo\'nityānāṃ cetanaścetanānāmeko bahūnāṃ yo vidadhāti kāmān | tamātmasthaṃ ye\'nupaśyanti dhīrāsteṣāṃ śāntiḥ śāśvatī netareṣām ||',
    translation: '"The eternal among the non-eternal, the conscious among the conscious, the one among many, who fulfills desires - to the wise who see Him in their own selves belongs eternal peace, not to others."',
    explanation: {
      simple: 'Among all impermanent things, the Self is permanent. Among all conscious beings, it is the source of consciousness. Those who see it within themselves find eternal peace.',
      deeper: 'This verse is almost identical to the previous one but emphasizes "shanti" (peace) rather than "sukha" (happiness).'
    },
    practicalApplication: 'Seek the one permanent thing among impermanent things. That\'s where lasting peace is found.',
    themes: ['eternal peace', 'the One', 'consciousness'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'katha',
    section: 5,
    verse: 14,
    sanskrit: 'तदेतदिति मन्यन्तेऽनिर्देश्यं परमं सुखम्। कथं नु तद्विजानीयां किमु भाति विभाति वा॥',
    transliteration: `tadetaditi manyante'nirdeśyaṃ paramaṃ sukham | kathaṃ nu tadvijānīyāṃ kimu bhāti vibhāti vā ||`,
    translation: `"This is That" - thus they realize the indescribable supreme bliss. How can I know it? Does it shine by itself, or does it shine by reflection?`,
    explanation: {
      simple: 'Nachiketa asks: How can I know this indescribable bliss? Does the Self shine by its own light, or does something else illuminate it?',
      deeper: 'This question about the Self\'s self-luminosity leads to the final answer about the nature of consciousness.'
    },
    practicalApplication: 'Does awareness need another light to be known? Or is it self-luminous?',
    themes: ['self-luminosity', 'how to know', 'inquiry'],
    difficulty: 'advanced',
  },
  {
    upanishad: 'katha',
    section: 5,
    verse: 15,
    sanskrit: 'न तत्र सूर्यो भाति न चन्द्रतारकं नेमा विद्युतो भान्ति कुतोऽयमग्निः। तमेव भान्तमनुभाति सर्वं तस्य भासा सर्वमिदं विभाति॥',
    transliteration: 'na tatra sūryo bhāti na candratārakaṃ nemā vidyuto bhānti kuto\'yamagniḥ | tameva bhāntamanubhāti sarvaṃ tasya bhāsā sarvamidaṃ vibhāti ||',
    translation: '"The sun does not shine there, nor the moon and stars, nor these lightnings, much less this fire. When He shines, everything shines after Him; by His light all this is illumined."',
    explanation: {
      simple: 'The Self is the source of all light. Sun, moon, stars, lightning, fire - they all shine because of the Self\'s light. It illuminates everything.',
      deeper: 'This famous verse appears in multiple Upanishads and the Gita. The Self is the light of lights, the source of all illumination.'
    },
    practicalApplication: 'Every light you see - sun, moon, fire - shines by the light of consciousness. Know that original light.',
    themes: ['light of lights', 'self-luminous', 'source'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
];

// =============================================================================
// SECTION 6: THE IMPERISHABLE (Adhyaya 2, Valli 3)
// Verses 1-18: Liberation of Nachiketa
// =============================================================================

const section6Verses: UpanishadVerse[] = [
  {
    upanishad: 'katha',
    section: 6,
    verse: 1,
    sanskrit: 'ऊर्ध्वमूलोऽवाक्शाख एषोऽश्वत्थः सनातनः। तदेव शुक्रं तद्ब्रह्म तदेवामृतमुच्यते। तस्मिंल्लोकाः श्रिताः सर्वे तदु नात्येति कश्चन। एतद्वै तत्॥',
    transliteration: 'ūrdhvamūlo\'vākśākha eṣo\'śvatthaḥ sanātanaḥ | tadeva śukraṃ tadbrahma tadevāmṛtamucyate | tasmiṃllokāḥ śritāḥ sarve tadu nātyeti kaścana | etadvai tat ||',
    translation: '"This eternal ashvattha tree has its roots above and branches below. That alone is the Pure, that is Brahman, that alone is called the Immortal. In it all worlds rest; none goes beyond it. This verily is That."',
    explanation: {
      simple: 'The cosmic tree has its roots in Brahman (above) and branches spreading into the world (below). This tree is Brahman itself - the immortal source of all worlds.',
      deeper: 'The inverted tree symbolizes manifestation from the unmanifest. The root (source) is transcendent; branches (effects) spread into multiplicity.'
    },
    practicalApplication: 'Trace all manifestation back to its root. Don\'t get lost in the branches.',
    themes: ['cosmic tree', 'roots above', 'Brahman'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'katha',
    section: 6,
    verse: 2,
    sanskrit: 'यदिदं किञ्च जगत्सर्वं प्राण एजति निःसृतम्। महद्भयं वज्रमुद्यतं य एतद्विदुरमृतास्ते भवन्ति॥',
    transliteration: 'yadidaṃ kiñca jagatsarvaṃ prāṇa ejati niḥsṛtam | mahadbhayaṃ vajramudyataṃ ya etadviduramṛtāste bhavanti ||',
    translation: '"Whatever exists in this entire world trembles in prana, having come forth from it. This is a great terror, like an upraised thunderbolt. Those who know this become immortal."',
    explanation: {
      simple: 'Everything in the universe vibrates within the cosmic life-force (prana). Brahman is like a raised thunderbolt - terrifying in its power. Knowing this brings immortality.',
      deeper: 'The "terror" isn\'t negative - it\'s the awesome power of Brahman that keeps all creation in order through reverence.'
    },
    practicalApplication: 'Feel the awesome power that sustains all existence. That same power is your source.',
    themes: ['prana', 'cosmic power', 'immortality'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 6,
    verse: 3,
    sanskrit: 'भयादस्याग्निस्तपति भयात्तपति सूर्यः। भयादिन्द्रश्च वायुश्च मृत्युर्धावति पञ्चमः॥',
    transliteration: 'bhayādasyāgnistapati bhayāttapati sūryaḥ | bhayādindraśca vāyuśca mṛtyurdhāvati pañcamaḥ ||',
    translation: '"From fear of Him, fire burns; from fear, the sun shines; from fear, Indra, Vayu, and Death, the fifth, run their courses."',
    explanation: {
      simple: 'Out of reverence for Brahman, fire burns, sun shines, wind blows, Indra rules, and even Death performs his duty. All cosmic forces obey Brahman.',
      deeper: '"Fear" here means deep respect and obedience. Even the greatest powers - including Death - are subordinate to Brahman.'
    },
    practicalApplication: 'Even death obeys a higher power. That power is what you truly are.',
    themes: ['cosmic order', 'reverence', 'even Death obeys'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'katha',
    section: 6,
    verse: 4,
    sanskrit: 'इह चेदशकद्बोद्धुं प्राक्शरीरस्य विस्रसः। ततः सर्गेषु लोकेषु शरीरत्वाय कल्पते॥',
    transliteration: 'iha cedaśakadboddhum prākśarīrasya visrasaḥ | tataḥ sargeṣu lokeṣu śarīratvāya kalpate ||',
    translation: '"If one is able to realize (Brahman) here before the falling of the body, one is liberated; if not, one is fit for embodiment in created worlds."',
    explanation: {
      simple: 'Realize the Self before death, and you\'re liberated. Fail to realize it, and you return to take another body in one of the worlds.',
      deeper: 'This emphasizes urgency: liberation must happen while alive. Death itself doesn\'t liberate - only knowledge does.'
    },
    practicalApplication: 'Don\'t postpone realization. This life is your opportunity. Use it.',
    themes: ['urgency', 'realization in life', 'rebirth'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 6,
    verse: 5,
    sanskrit: 'यथादर्शे तथात्मनि यथा स्वप्ने तथा पितृलोके। यथाप्सु परीव ददृशे तथा गन्धर्वलोके छायातपयोरिव ब्रह्मलोके॥',
    transliteration: 'yathādarśe tathātmani yathā svapne tathā pitṛloke | yathāpsu parīva dadṛśe tathā gandharvaloke chāyātapayoriva brahmaloke ||',
    translation: '"As in a mirror, so in one\'s self; as in a dream, so in the world of the fathers; as in water, so in the world of the Gandharvas; as between shadow and light, so in the world of Brahman."',
    explanation: {
      simple: 'Different levels of clarity exist: reflection in a mirror, dream-images, water-reflections, shadow-light contrasts. In Brahma-loka, the Self is seen most clearly.',
      deeper: 'This describes progressive clarity of Self-vision across different planes of existence, culminating in Brahma-loka.'
    },
    practicalApplication: 'Seek the clearest vision of Self. Don\'t settle for dim reflections.',
    themes: ['degrees of clarity', 'reflection', 'planes'],
    difficulty: 'advanced',
  },
  {
    upanishad: 'katha',
    section: 6,
    verse: 6,
    sanskrit: 'इन्द्रियाणां पृथग्भावमुदयास्तमयौ च यत्। पृथगुत्पद्यमानानां मत्वा धीरो न शोचति॥',
    transliteration: 'indriyāṇāṃ pṛthagbhāvamudayāstamayau ca yat | pṛthagutpadyamānānāṃ matvā dhīro na śocati ||',
    translation: '"Understanding the separate nature of the senses, their rising and setting, and that they arise separately, the wise person grieves not."',
    explanation: {
      simple: 'Knowing that senses arise and disappear, each functioning separately, the wise person doesn\'t grieve. Senses come and go; the Self remains.',
      deeper: 'Detachment from senses comes from understanding their transient, mechanical nature. They\'re not the Self.'
    },
    practicalApplication: 'Watch your senses arise and fade. You remain. Don\'t identify with what comes and goes.',
    themes: ['senses', 'impermanence', 'no grief'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 6,
    verse: 7,
    sanskrit: 'इन्द्रियेभ्यः परं मनो मनसः सत्त्वमुत्तमम्। सत्त्वादधि महानात्मा महतोऽव्यक्तमुत्तमम्॥',
    transliteration: 'indriyebhyaḥ paraṃ mano manasaḥ sattvamuttamam | sattvādadhi mahānātmā mahato\'vyaktamuttamam ||',
    translation: '"Beyond the senses is the mind; beyond the mind is the intellect (sattva); beyond the intellect is the great Self; beyond the great is the Unmanifest."',
    explanation: {
      simple: 'A hierarchy again: senses < mind < intellect < great Self < Unmanifest. Each level is subtler and more fundamental than the previous.',
      deeper: 'This recapitulates the earlier teaching, leading to the final pinnacle in the next verse.'
    },
    practicalApplication: 'Keep going deeper. Beyond senses, beyond mind, beyond intellect, beyond the great Self...',
    themes: ['hierarchy', 'subtle', 'beyond'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 6,
    verse: 8,
    sanskrit: 'अव्यक्तात्पुरुषः परो व्यापको लिङ्ग एव च। यं ज्ञात्वा मुच्यते जन्तुरमृतत्वं च गच्छति॥',
    transliteration: 'avyaktātpuruṣaḥ paro vyāpako liṅga eva ca | yaṃ jñātvā mucyate janturamṛtatvaṃ ca gacchati ||',
    translation: '"Beyond the Unmanifest is the Purusha, all-pervading and without any mark. Knowing Him, a creature is liberated and attains immortality."',
    explanation: {
      simple: 'The highest is Purusha - pure consciousness beyond all manifestation, all-pervading, with no characteristics. Knowing this brings liberation and immortality.',
      deeper: '"Alinga" (without mark) means beyond all attributes. This Purusha cannot be described - only realized.'
    },
    practicalApplication: 'The ultimate is beyond all description. Drop all concepts and BE that.',
    themes: ['Purusha', 'beyond marks', 'liberation'],
    difficulty: 'advanced',
  },
  {
    upanishad: 'katha',
    section: 6,
    verse: 9,
    sanskrit: 'न संदृशे तिष्ठति रूपमस्य न चक्षुषा पश्यति कश्चनैनम्। हृदा मनीषा मनसाभिक्लृप्तो य एतद्विदुरमृतास्ते भवन्ति॥',
    transliteration: 'na saṃdṛśe tiṣṭhati rūpamāsya na cakṣuṣā paśyati kaścanainam | hṛdā manīṣā manasābhiklṛpto ya etadviduramṛtāste bhavanti ||',
    translation: '"His form is not to be seen; no one sees Him with the eye. By the heart, by wisdom, by the mind, He is revealed. Those who know this become immortal."',
    explanation: {
      simple: 'The Self isn\'t visible to physical eyes. It\'s known through the heart, wisdom, and purified mind. Those who know it this way become immortal.',
      deeper: 'Three inner faculties work together: heart (feeling), manisha (wisdom), and purified mind. All three are needed for realization.'
    },
    practicalApplication: 'Stop trying to see the Self with your eyes. Know it with heart, wisdom, and concentrated mind.',
    themes: ['not seen by eyes', 'heart', 'immortality'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 6,
    verse: 10,
    sanskrit: 'यदा पञ्चावतिष्ठन्ते ज्ञानानि मनसा सह। बुद्धिश्च न विचेष्टते तामाहुः परमां गतिम्॥',
    transliteration: 'yadā pañcāvatiṣṭhante jñānāni manasā saha | buddhiśca na viceṣṭate tāmāhuḥ paramāṃ gatim ||',
    translation: '"When the five senses together with the mind cease and the intellect does not stir - that, they say, is the supreme state."',
    explanation: {
      simple: 'When all five senses stop, the mind quiets, and even the intellect is still - that complete stillness is the highest state.',
      deeper: 'This describes the state of deep meditation or samadhi - complete cessation of mental and sensory activity.'
    },
    practicalApplication: 'Practice stilling the senses, mind, and intellect. In that stillness, the supreme is revealed.',
    themes: ['stillness', 'supreme state', 'cessation'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'katha',
    section: 6,
    verse: 11,
    sanskrit: 'तां योगमिति मन्यन्ते स्थिरामिन्द्रियधारणाम्। अप्रमत्तस्तदा भवति योगो हि प्रभवाप्ययौ॥',
    transliteration: 'tāṃ yogamiti manyante sthirāmindriydhāraṇām | apramattastadā bhavati yogo hi prabhavāpyayau ||',
    translation: '"This they consider to be yoga - the firm holding of the senses. Then one becomes undistracted. Yoga indeed is the origin and dissolution."',
    explanation: {
      simple: 'Yoga is defined as the steady restraint of the senses. In this state, one becomes fully attentive. Yoga is both the beginning and end of the spiritual path.',
      deeper: '"Prabhavapyaya" means both origin and dissolution - yoga is the alpha and omega, the method and the goal.'
    },
    practicalApplication: 'Practice holding the senses steady. This is yoga - both the practice and the realization.',
    themes: ['yoga', 'sense restraint', 'attention'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 6,
    verse: 12,
    sanskrit: 'नैव वाचा न मनसा प्राप्तुं शक्यो न चक्षुषा। अस्तीति ब्रुवतोऽन्यत्र कथं तदुपलभ्यते॥',
    transliteration: 'naiva vācā na manasā prāptuṃ śakyo na cakṣuṣā | astīti bruvato\'nyatra kathaṃ tadupalabhyate ||',
    translation: '"He cannot be attained by speech, mind, or eye. How can He be realized by anyone other than one who says \'He is\'?"',
    explanation: {
      simple: 'The Self can\'t be reached through words, thoughts, or sight. Only one who affirms "It exists" can realize it.',
      deeper: 'The negative path (neti neti) has limits. At some point, one must affirm existence. Faith ("asti" - it is) opens the door.'
    },
    practicalApplication: 'Affirm the Self\'s existence. This faith creates the opening for realization.',
    themes: ['beyond speech and mind', 'faith', 'it is'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 6,
    verse: 13,
    sanskrit: 'अस्तीत्येवोपलब्धव्यस्तत्त्वभावेन चोभयोः। अस्तीत्येवोपलब्धस्य तत्त्वभावः प्रसीदति॥',
    transliteration: 'astītyevopalabdhavyastattvabhāvena cobhayoḥ | astītyevopalabdhasya tattvabhāvaḥ prasīdati ||',
    translation: '"He is to be realized first as existing, and then as His true nature. Of the two, to one who has realized \'He exists,\' His true nature becomes clear."',
    explanation: {
      simple: 'First realize "The Self exists." Then its true nature becomes clear. Start with faith in its existence; understanding follows.',
      deeper: 'Two stages: existential certainty first, then knowledge of essence. You can\'t know what something is until you know that it is.'
    },
    practicalApplication: 'Start with the simple conviction: "The Self exists." Deeper understanding will follow.',
    themes: ['existence first', 'two stages', 'becoming clear'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 6,
    verse: 14,
    sanskrit: 'यदा सर्वे प्रमुच्यन्ते कामा येऽस्य हृदि श्रिताः। अथ मर्त्योऽमृतो भवत्यत्र ब्रह्म समश्नुते॥',
    transliteration: 'yadā sarve pramucyante kāmā ye\'sya hṛdi śritāḥ | atha martyo\'mṛto bhavatyatra brahma samaśnute ||',
    translation: '"When all desires that dwell in the heart are released, then the mortal becomes immortal and attains Brahman here."',
    explanation: {
      simple: 'When all desires in the heart are let go, the mortal becomes immortal and realizes Brahman - right here, in this life.',
      deeper: 'Desire is the root of mortality. Its complete release brings immortality - not after death, but "atra" (here, now).'
    },
    practicalApplication: 'Release desires from your heart. Immortality isn\'t after death - it\'s available now.',
    themes: ['release of desire', 'immortality now', 'Brahman'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'katha',
    section: 6,
    verse: 15,
    sanskrit: 'यदा सर्वे प्रभिद्यन्ते हृदयस्येह ग्रन्थयः। अथ मर्त्योऽमृतो भवत्येतावद्ध्यनुशासनम्॥',
    transliteration: 'yadā sarve prabhidyante hṛdayasyeha granthayaḥ | atha martyo\'mṛto bhavatyetāvaddhyanuśāsanam ||',
    translation: '"When all the knots of the heart are cut here, then the mortal becomes immortal. This is the teaching."',
    explanation: {
      simple: 'When all the knots in the heart are cut, the mortal becomes immortal. This is the essence of the entire teaching.',
      deeper: 'The "knots" (granthis) are attachments, identifications, and ignorance. Cutting them is liberation. "This is the teaching" - it\'s that simple.'
    },
    practicalApplication: 'Cut the knots of the heart. That\'s the whole teaching. What are your knots?',
    themes: ['knots of heart', 'liberation', 'essence'],
    difficulty: 'intermediate',
    famousVerse: true,
  },
  {
    upanishad: 'katha',
    section: 6,
    verse: 16,
    sanskrit: 'शतं चैका च हृदयस्य नाड्यस्तासां मूर्धानमभिनिःसृतैका। तयोर्ध्वमायन्नमृतत्वमेति विष्वङ्ङन्या उत्क्रमणे भवन्ति॥',
    transliteration: 'śataṃ caikā ca hṛdayasya nāḍyastāsāṃ mūrdhānamabhiniḥsṛtaikā | tayordhvamāyannamṛtatvameti viṣvaṅṅanyā utkramaṇe bhavanti ||',
    translation: '"There are a hundred and one arteries of the heart. One of them leads to the crown of the head. Going upward through that, one attains immortality. The others lead to various paths of departure."',
    explanation: {
      simple: 'The heart has 101 subtle channels. One leads upward to the crown; departing through it brings immortality. Other channels lead to rebirth.',
      deeper: 'This yogic teaching says the liberated soul exits through the crown (brahmarandhra). The sushumna nadi leads there.'
    },
    practicalApplication: 'At death, direct consciousness upward. In life, practice keeping attention elevated.',
    themes: ['nadis', 'crown', 'departure'],
    difficulty: 'advanced',
  },
  {
    upanishad: 'katha',
    section: 6,
    verse: 17,
    sanskrit: 'अङ्गुष्ठमात्रः पुरुषोऽन्तरात्मा सदा जनानां हृदये सन्निविष्टः। तं स्वाच्छरीरात्प्रवृहेन्मुञ्जादिवेषीकां धैर्येण। तं विद्याच्छुक्रममृतं तं विद्याच्छुक्रममृतमिति॥',
    transliteration: 'aṅguṣṭhamātraḥ puruṣo\'ntarātmā sadā janānāṃ hṛdaye sanniviṣṭaḥ | taṃ svāccharīrātpravṛhenmuñjādiveṣīkāṃ dhairyeṇa | taṃ vidyācchukramamṛtaṃ taṃ vidyācchukramamṛtamiti ||',
    translation: '"The Purusha, of the size of a thumb, the inner Self, is always seated in the heart of creatures. One should draw Him out from one\'s body with steadfastness, as one draws the stalk from the munja grass. One should know Him as the pure, the immortal - yes, one should know Him as the pure, the immortal."',
    explanation: {
      simple: 'The Self in the heart should be carefully extracted from identification with the body - like pulling a reed from its sheath. Know it as pure and immortal.',
      deeper: 'The munja grass metaphor shows that the Self must be separated from its sheath (body) with care and steadiness.'
    },
    practicalApplication: 'With steady practice, separate your true Self from body-identification. It can be done.',
    themes: ['extraction', 'munja grass', 'pure immortal'],
    difficulty: 'intermediate',
  },
  {
    upanishad: 'katha',
    section: 6,
    verse: 18,
    sanskrit: 'मृत्युप्रोक्तां नचिकेतोऽथ लब्ध्वा विद्यामेतां योगविधिं च कृत्स्नम्। ब्रह्मप्राप्तो विरजोऽभूद्विमृत्युरन्योऽप्येवं यो विदध्यात्ममेव॥',
    transliteration: 'mṛtyuproktāṃ naciketo\'tha labdhvā vidyāmetāṃ yogavidhiṃ ca kṛtsnam | brahmaprāpto virajo\'bhūdvimṛtyuranyo\'pyevaṃ yo vidadhyātmameva ||',
    translation: '"Nachiketa, having received from Death this knowledge and the complete teaching of yoga, attained Brahman, became free from passion and death. So also shall any other who thus knows the Self."',
    explanation: {
      simple: 'Nachiketa received the complete teaching from Death - knowledge of Self and yoga practice. He realized Brahman, transcended desire and death. Anyone who knows this can do the same.',
      deeper: 'The story concludes: Nachiketa achieved what he sought. The path is open to all who follow the same teaching.'
    },
    practicalApplication: 'The path Nachiketa walked is open to you. The same knowledge, the same liberation is available.',
    themes: ['Nachiketa\'s attainment', 'liberation', 'available to all'],
    difficulty: 'beginner',
    famousVerse: true,
  },
];

// =============================================================================
// SECTIONS
// =============================================================================

const section1: UpanishadSection = {
  number: 1,
  name: {
    sanskrit: 'प्रथम वल्ली',
    english: 'The Story of Nachiketa',
  },
  summary: 'Young Nachiketa, sent to Death by his father\'s angry words, waits three nights at Yama\'s door. Yama offers three boons. For the third, Nachiketa asks the ultimate question: Does the Self exist after death?',
  verses: section1Verses,
  isCurated: false,
};

const section2: UpanishadSection = {
  number: 2,
  name: {
    sanskrit: 'द्वितीय वल्ली',
    english: 'The Secret of Death',
  },
  summary: 'Yama begins his teaching: the difference between good and pleasant, the nature of OM, and the eternal, birthless, deathless Self hidden in the heart of all beings.',
  verses: section2Verses,
  isCurated: false,
};

const section3: UpanishadSection = {
  number: 3,
  name: {
    sanskrit: 'तृतीय वल्ली',
    english: 'The Eternal Self',
  },
  summary: 'The famous chariot metaphor: the body is the chariot, intellect the driver, mind the reins, senses the horses, Self the rider. Only through self-control does one reach the supreme goal.',
  verses: section3Verses,
  isCurated: false,
  totalVerses: 17,
};

const section4: UpanishadSection = {
  number: 4,
  name: {
    sanskrit: 'चतुर्थ वल्ली',
    english: 'The Inner Controller',
  },
  summary: 'The Self dwells within yet most people look outward. Like fragrance in a flower, the Self pervades but is not seen. Rare is the one who turns inward.',
  verses: section4Verses,
  isCurated: false,
  totalVerses: 15,
};

const section5: UpanishadSection = {
  number: 5,
  name: {
    sanskrit: 'पञ्चम वल्ली',
    english: 'The City of Eleven Gates',
  },
  summary: 'The body as a city with eleven gates (openings). The Self as the ruler within, undying, watching over birth and death. The nature of the inner light.',
  verses: section5Verses,
  isCurated: false,
  totalVerses: 15,
};

const section6: UpanishadSection = {
  number: 6,
  name: {
    sanskrit: 'षष्ठ वल्ली',
    english: 'The Imperishable',
  },
  summary: 'The cosmic tree with roots above and branches below. The nature of Brahman. When all knots of the heart are cut, the mortal becomes immortal. Nachiketa attains liberation.',
  verses: section6Verses,
  isCurated: false,
  totalVerses: 18,
};

// =============================================================================
// MAIN EXPORT
// =============================================================================

export const kathaUpanishad: Upanishad = {
  id: 'katha',
  name: {
    sanskrit: 'कठोपनिषद्',
    english: 'Katha Upanishad',
    meaning: 'The Upanishad of the Katha School',
  },
  veda: 'yajur',
  summary: 'One of the most beloved Upanishads, telling the story of young Nachiketa who meets Yama (Death) and through persistence receives teachings on the immortal Self. Contains the famous chariot metaphor for the body-mind-Self relationship and profound teachings on choosing the good over the pleasant.',
  keyTeachings: [
    'The difference between shreya (good) and preya (pleasant)',
    'The Self is birthless, deathless, eternal',
    'The chariot metaphor for body, mind, senses, and Self',
    'OM as the symbol of Brahman',
    'The Self cannot be taught by intellect alone - it reveals itself through grace',
    'One who controls the senses reaches the supreme goal',
  ],
  totalVerses: 119,
  includedVerses: 119,
  sections: [section1, section2, section3, section4, section5, section6],
  difficulty: 'beginner',
  estimatedReadTime: '60 min',
};

export default kathaUpanishad;
