// Festival data for Dharma Path
// Each festival includes significance, mythology, how to celebrate, and spiritual meaning

export interface Festival {
  id: string;
  name: string;
  sanskrit?: string;
  alternateNames?: string[];
  month: string;
  duration?: string;
  summary: string;
  significance: string;
  mythology: string;
  howToCelebrate: string;
  spiritualMeaning: string;
  traditions?: string[];
  foods?: string[];
  relatedDeities?: string[];
  themes: string[];
  region?: string;
}

export const festivals: Festival[] = [
  {
    id: 'diwali',
    name: 'Diwali',
    sanskrit: 'दीपावली',
    alternateNames: ['Deepavali', 'Festival of Lights'],
    month: 'October - November',
    duration: '5 days',
    summary: 'The festival of lights celebrating the victory of light over darkness and good over evil.',
    significance: `
      <p>Diwali is the most widely celebrated Hindu festival, marking the triumph of light over darkness, knowledge over ignorance, and good over evil. The word "Diwali" comes from the Sanskrit "Deepavali," meaning "row of lights."</p>
      <p>The festival holds deep significance across India:</p>
      <ul>
        <li><strong>North India:</strong> Celebrates Lord Rama's return to Ayodhya after 14 years of exile and his victory over Ravana</li>
        <li><strong>South India:</strong> Commemorates Lord Krishna's victory over the demon Narakasura</li>
        <li><strong>West India:</strong> Marks the day Lord Vishnu sent the demon King Bali to rule the netherworld</li>
        <li><strong>East India:</strong> Dedicated to the worship of Goddess Kali</li>
      </ul>
      <p>Diwali also marks the beginning of the Hindu New Year in many regions and is considered the most auspicious time for new beginnings, business ventures, and investments.</p>
    `,
    mythology: `
      <p>The most popular legend associated with Diwali is the story of Lord Rama from the epic Ramayana.</p>
      <p>Prince Rama, the heir to the throne of Ayodhya, was exiled for 14 years due to a promise his father King Dasharatha had made. Rama left for the forest with his wife Sita and brother Lakshmana.</p>
      <p>During their exile, Sita was abducted by the demon king Ravana of Lanka. Rama, with the help of Hanuman and an army of vanaras (monkey warriors), waged a great war against Ravana and rescued Sita.</p>
      <p>When Rama, Sita, and Lakshmana finally returned to Ayodhya after completing their exile, the people of the kingdom lit thousands of oil lamps (diyas) to welcome them home and celebrate the victory of their righteous prince.</p>
      <p>This tradition of lighting lamps continues today, symbolizing the light of wisdom dispelling the darkness of ignorance.</p>
    `,
    howToCelebrate: `
      <h3>The Five Days of Diwali</h3>
      <p><strong>Day 1 - Dhanteras:</strong> Clean your home, buy gold or new utensils, light the first diya at dusk.</p>
      <p><strong>Day 2 - Naraka Chaturdashi (Choti Diwali):</strong> Wake before sunrise for an oil bath, light diyas, prepare sweets.</p>
      <p><strong>Day 3 - Diwali (Main Day):</strong> Perform Lakshmi Puja in the evening, light diyas throughout the home, burst firecrackers, exchange gifts.</p>
      <p><strong>Day 4 - Govardhan Puja:</strong> Prepare a mountain of food as offering, worship cattle, celebrate the bond between humans and nature.</p>
      <p><strong>Day 5 - Bhai Dooj:</strong> Sisters pray for their brothers' well-being, brothers give gifts to sisters.</p>

      <h3>Lakshmi Puja</h3>
      <ul>
        <li>Clean and decorate your puja area with rangoli</li>
        <li>Place idols or images of Lakshmi and Ganesha</li>
        <li>Light a diya with ghee</li>
        <li>Offer flowers, sweets, fruits, and coins</li>
        <li>Chant Lakshmi mantras or aarti</li>
        <li>Keep doors and windows open to welcome the goddess</li>
      </ul>
    `,
    spiritualMeaning: `
      <p>At its deepest level, Diwali represents the inner journey from darkness to light—the awakening of consciousness.</p>
      <p>The external lights we kindle are reminders to ignite our inner light. Just as we clean our homes, we are encouraged to cleanse our minds of negative thoughts, ego, and attachments.</p>
      <p>The goddess Lakshmi represents not just material wealth, but spiritual abundance—the wealth of wisdom, compassion, and inner peace. Her blessings are sought not for greed, but for the resources needed to fulfill one's dharma.</p>
      <p>Lord Ganesha, worshipped alongside Lakshmi, represents the removal of obstacles on the spiritual path. Together, they symbolize the prosperity that comes when our path is clear and our intentions are pure.</p>
      <blockquote>"From the unreal lead me to the real, from darkness lead me to light, from death lead me to immortality." — Brihadaranyaka Upanishad</blockquote>
    `,
    traditions: ['Lighting diyas', 'Rangoli', 'Lakshmi Puja', 'Fireworks', 'Gift exchange', 'New clothes'],
    foods: ['Mithai (sweets)', 'Kheer', 'Gulab Jamun', 'Kaju Katli', 'Samosas', 'Namkeen'],
    relatedDeities: ['Lakshmi', 'Ganesha', 'Rama', 'Krishna', 'Kali'],
    themes: ['light', 'victory', 'prosperity', 'new beginnings', 'family'],
    region: 'Pan-India',
  },
  {
    id: 'holi',
    name: 'Holi',
    sanskrit: 'होली',
    alternateNames: ['Festival of Colors', 'Festival of Spring', 'Festival of Love'],
    month: 'February - March',
    duration: '2 days',
    summary: 'A joyous celebration of spring, colors, and the eternal love of Radha and Krishna.',
    significance: `
      <p>Holi is one of the most vibrant and joyous Hindu festivals, celebrating the arrival of spring, the end of winter, and the blossoming of love. It's a time when social norms are relaxed, and people of all backgrounds come together to play with colors.</p>
      <p>The festival has multiple layers of significance:</p>
      <ul>
        <li><strong>Triumph of Good:</strong> Celebrates the burning of the demoness Holika and the survival of devotee Prahlad</li>
        <li><strong>Divine Love:</strong> Commemorates the playful love between Radha and Krishna</li>
        <li><strong>Spring Festival:</strong> Marks the end of winter and celebrates new life and harvest</li>
        <li><strong>Social Unity:</strong> A day when all barriers of caste, class, age, and gender dissolve in color</li>
      </ul>
    `,
    mythology: `
      <p>The primary legend of Holi comes from the story of Prahlad and Holika.</p>
      <p>Hiranyakashipu was a powerful demon king who demanded everyone worship only him. But his own son, Prahlad, was an ardent devotee of Lord Vishnu and refused to worship his father.</p>
      <p>Furious, Hiranyakashipu tried many ways to kill his son, but Prahlad was always protected by Lord Vishnu. Finally, Hiranyakashipu's sister Holika, who had a boon that made her immune to fire, sat in a burning pyre with Prahlad in her lap.</p>
      <p>However, because she used her boon for evil, Holika was burned to ashes, while Prahlad emerged unharmed, protected by his devotion. This victory of a devotee over evil is celebrated as Holika Dahan on the eve of Holi.</p>
      <p>The colorful celebration the next day is associated with Krishna's playful nature. Young Krishna, who had dark blue skin, was jealous of Radha's fair complexion. His mother Yashoda playfully suggested he color Radha's face. This divine play (leela) of colors between Radha and Krishna became the inspiration for Holi celebrations.</p>
    `,
    howToCelebrate: `
      <h3>Holika Dahan (Night Before)</h3>
      <ul>
        <li>Gather around a community bonfire</li>
        <li>Offer prayers and circumambulate the fire</li>
        <li>Throw coconut and grains into the flames as offerings</li>
        <li>Sing devotional songs</li>
      </ul>

      <h3>Rangwali Holi (Main Day)</h3>
      <ul>
        <li>Wear old white clothes that can get stained</li>
        <li>Apply oil on skin and hair for easier cleanup</li>
        <li>Play with organic, natural colors (gulal) and colored water</li>
        <li>Use water guns (pichkaris) and water balloons</li>
        <li>Dance to dhol beats and Holi songs</li>
        <li>Share thandai (spiced milk drink) and sweets</li>
        <li>Embrace friends and family, saying "Bura na mano, Holi hai!" (Don't mind, it's Holi!)</li>
      </ul>

      <h3>Tips</h3>
      <ul>
        <li>Use organic colors to protect skin and environment</li>
        <li>Stay hydrated</li>
        <li>Respect others' boundaries—not everyone wants to play</li>
        <li>Wash off colors gently afterward</li>
      </ul>
    `,
    spiritualMeaning: `
      <p>Holi carries profound spiritual symbolism beyond its exuberant celebrations.</p>
      <p><strong>Burning of Ego:</strong> The Holika bonfire represents the burning of our inner demons—ego, anger, lust, and attachment. Just as Holika was consumed by fire, we symbolically offer our negative qualities to the flames.</p>
      <p><strong>Unity in Diversity:</strong> When everyone is covered in the same colors, distinctions of caste, class, and status disappear. Holi teaches that beneath our external differences, we are all one.</p>
      <p><strong>Divine Play (Leela):</strong> The colors represent the playful nature of the divine. Krishna's leelas remind us not to take life too seriously—the universe itself is a divine play of consciousness.</p>
      <p><strong>Renewal:</strong> As spring brings new life to nature, Holi invites us to shed old grudges, forgive, and start fresh in our relationships.</p>
      <blockquote>"Let the colors of Holi spread the message of peace and happiness." — Ancient saying</blockquote>
    `,
    traditions: ['Holika Dahan', 'Playing with colors', 'Water balloons', 'Thandai', 'Dancing', 'Forgiveness'],
    foods: ['Gujiya', 'Thandai', 'Malpua', 'Dahi Bhalla', 'Puran Poli', 'Mathri'],
    relatedDeities: ['Krishna', 'Radha', 'Vishnu', 'Prahlad'],
    themes: ['colors', 'spring', 'love', 'forgiveness', 'unity', 'joy'],
    region: 'Pan-India (especially North India)',
  },
  {
    id: 'navratri',
    name: 'Navratri',
    sanskrit: 'नवरात्रि',
    alternateNames: ['Nine Nights', 'Durga Puja', 'Sharad Navratri'],
    month: 'September - October',
    duration: '9 nights',
    summary: 'Nine nights dedicated to the worship of the Divine Mother in her various forms.',
    significance: `
      <p>Navratri, meaning "nine nights," is a major Hindu festival dedicated to the worship of Shakti—the divine feminine energy that powers the universe. It celebrates the goddess Durga and her victory over the buffalo demon Mahishasura.</p>
      <p>The nine nights are divided into sets of three, honoring different aspects of the Divine Mother:</p>
      <ul>
        <li><strong>Days 1-3:</strong> Goddess Durga (strength, protection, destruction of evil)</li>
        <li><strong>Days 4-6:</strong> Goddess Lakshmi (prosperity, wealth, abundance)</li>
        <li><strong>Days 7-9:</strong> Goddess Saraswati (knowledge, wisdom, arts)</li>
      </ul>
      <p>The tenth day, Vijayadashami (Dussehra), celebrates the ultimate victory of good over evil.</p>
    `,
    mythology: `
      <p>The most celebrated legend of Navratri is Durga's battle with the demon Mahishasura.</p>
      <p>Mahishasura had received a boon that no man or god could kill him. Drunk with power, he conquered the three worlds and drove the gods from heaven.</p>
      <p>In desperation, the gods combined their powers, and from this collective divine energy emerged Goddess Durga—a radiant warrior goddess riding a lion. Each god contributed a weapon: Shiva's trident, Vishnu's discus, Indra's thunderbolt, and more.</p>
      <p>For nine nights, Durga battled Mahishasura, who kept changing forms to escape death. Finally, on the tenth day, she slew him in his buffalo form, liberating the three worlds.</p>
      <p>This victory is celebrated as Vijayadashami—the "Tenth Day of Victory." Navratri reminds us that when demonic forces seem invincible, divine grace manifests to restore balance.</p>
    `,
    howToCelebrate: `
      <h3>Daily Practices</h3>
      <ul>
        <li>Fast or eat only sattvic (pure) food</li>
        <li>Wake early for prayers and meditation</li>
        <li>Recite Durga Chalisa or Durga Saptashati</li>
        <li>Light a lamp (akhand jyoti) that burns all nine days</li>
        <li>Wear colors associated with each day</li>
      </ul>

      <h3>Colors of Navratri</h3>
      <p>Each day is associated with a color and a form of the goddess (Navadurga):</p>
      <ul>
        <li>Day 1: Yellow - Shailaputri</li>
        <li>Day 2: Green - Brahmacharini</li>
        <li>Day 3: Grey - Chandraghanta</li>
        <li>Day 4: Orange - Kushmanda</li>
        <li>Day 5: White - Skandamata</li>
        <li>Day 6: Red - Katyayani</li>
        <li>Day 7: Royal Blue - Kalaratri</li>
        <li>Day 8: Pink - Mahagauri</li>
        <li>Day 9: Purple - Siddhidatri</li>
      </ul>

      <h3>Regional Celebrations</h3>
      <ul>
        <li><strong>Gujarat:</strong> Garba and Dandiya Raas dances</li>
        <li><strong>West Bengal:</strong> Elaborate Durga Puja pandals</li>
        <li><strong>South India:</strong> Golu (display of dolls), Saraswati Puja</li>
      </ul>
    `,
    spiritualMeaning: `
      <p>Navratri represents the spiritual journey from darkness to enlightenment through the grace of the Divine Mother.</p>
      <p><strong>Durga (Days 1-3):</strong> We first invoke the fierce protective aspect to help us overcome our inner demons—anger, ego, and negative habits. Durga gives us the strength to fight our internal battles.</p>
      <p><strong>Lakshmi (Days 4-6):</strong> Once inner obstacles are cleared, we cultivate positive qualities. Lakshmi represents not just material wealth, but the wealth of virtues—patience, compassion, and generosity.</p>
      <p><strong>Saraswati (Days 7-9):</strong> Finally, with a pure heart and noble qualities, we're ready for true knowledge. Saraswati grants wisdom—not just information, but the knowledge of our true nature.</p>
      <p>The journey through these three phases mirrors the spiritual path: purification, cultivation, and illumination.</p>
      <blockquote>"Ya Devi Sarvabhuteshu Shakti Rupena Samsthita" — She who dwells in all beings as power</blockquote>
    `,
    traditions: ['Fasting', 'Garba dance', 'Durga Puja', 'Kanya Puja', 'Golu display', 'Akhand Jyoti'],
    foods: ['Sabudana Khichdi', 'Kuttu Ki Puri', 'Singhare Ka Halwa', 'Fruits', 'Milk products'],
    relatedDeities: ['Durga', 'Lakshmi', 'Saraswati', 'Navadurga'],
    themes: ['divine feminine', 'victory', 'devotion', 'transformation', 'strength'],
    region: 'Pan-India',
  },
  {
    id: 'ganesh-chaturthi',
    name: 'Ganesh Chaturthi',
    sanskrit: 'गणेश चतुर्थी',
    alternateNames: ['Vinayaka Chaturthi', 'Ganeshotsav'],
    month: 'August - September',
    duration: '10 days',
    summary: 'The birthday celebration of Lord Ganesha, the remover of obstacles and god of new beginnings.',
    significance: `
      <p>Ganesh Chaturthi celebrates the birth of Lord Ganesha, the beloved elephant-headed god who is worshipped before any new venture or undertaking. He is known as Vighnaharta (remover of obstacles) and Prathamapujya (the first to be worshipped).</p>
      <p>The festival is especially grand in Maharashtra, where it was popularized by Lokmanya Tilak during the freedom struggle as a way to unite people across caste and class divisions.</p>
      <p>Key aspects of Ganesha:</p>
      <ul>
        <li><strong>Elephant head:</strong> Symbolizes wisdom, understanding, and a discriminating intellect</li>
        <li><strong>Large ears:</strong> Listen more, talk less</li>
        <li><strong>Small eyes:</strong> Concentrate and focus</li>
        <li><strong>Big belly:</strong> Digest all experiences, good and bad</li>
        <li><strong>Mouse vehicle:</strong> Control of desires; even small efforts lead to big results</li>
      </ul>
    `,
    mythology: `
      <p>The story of Ganesha's birth is beloved across India.</p>
      <p>Goddess Parvati, wishing to bathe in privacy, created a boy from the turmeric paste on her body and breathed life into him. She appointed him as her guard and went to bathe.</p>
      <p>When Lord Shiva returned home, the boy didn't recognize him and blocked his entry. Enraged, Shiva severed the boy's head with his trident.</p>
      <p>Parvati was devastated and demanded Shiva restore her son. Shiva sent his ganas (attendants) to bring the head of the first creature they found sleeping with its head facing north. They found an elephant and brought its head.</p>
      <p>Shiva placed the elephant head on the boy's body and brought him back to life. He declared this child would be worshipped first before any other god and named him Ganapati—Lord of the Ganas.</p>
      <p>This story teaches that obstacles can become opportunities, and from apparent destruction can come greater blessings.</p>
    `,
    howToCelebrate: `
      <h3>Bringing Ganesha Home</h3>
      <ul>
        <li>Purchase or create a clay Ganesha idol</li>
        <li>Install the idol with proper puja (Pranapratishtha)</li>
        <li>Decorate with flowers, especially red flowers and durva grass</li>
        <li>Offer modak (sweet dumplings), Ganesha's favorite</li>
        <li>Chant Ganesha mantras and sing aarti</li>
      </ul>

      <h3>Daily Worship (10 days)</h3>
      <ul>
        <li>Morning and evening aarti</li>
        <li>Offer fresh flowers and prasad daily</li>
        <li>Recite Ganesh Atharvashirsha or Ganapati Stotra</li>
        <li>Visit community pandals (public installations)</li>
      </ul>

      <h3>Visarjan (Immersion)</h3>
      <ul>
        <li>Can be done on day 1.5, 3, 5, 7, or 10</li>
        <li>Process to a water body with music and dancing</li>
        <li>Bid farewell saying "Ganpati Bappa Morya, Pudchya Varshi Lavkar Ya!" (Lord Ganesha, come again soon next year!)</li>
        <li>Immerse the idol, symbolizing Ganesha's return to his parents</li>
        <li>Use eco-friendly idols that dissolve without polluting</li>
      </ul>
    `,
    spiritualMeaning: `
      <p>Lord Ganesha represents the awakened state of consciousness—the wisdom that removes obstacles on the spiritual path.</p>
      <p><strong>The Elephant Head:</strong> The large head symbolizes thinking big and the wisdom to know what to accept and what to reject. The trunk can uproot trees or pick up a needle—signifying both strength and precision in our actions.</p>
      <p><strong>Broken Tusk:</strong> Ganesha broke his own tusk to write the Mahabharata. This teaches sacrifice—sometimes we must give up something valuable to accomplish a greater purpose.</p>
      <p><strong>The Mouse:</strong> The tiny mouse as Ganesha's vehicle represents desire and ego. A being of Ganesha's size riding a mouse shows complete mastery over desires. The mouse also symbolizes how divine grace helps us navigate through the smallest openings.</p>
      <p><strong>Visarjan:</strong> The immersion teaches non-attachment. We welcome Ganesha with love, worship him, and then let him go—a beautiful metaphor for how we should approach all relationships and possessions in life.</p>
      <blockquote>"Vakratunda Mahakaya Suryakoti Samaprabha, Nirvighnam Kuru Me Deva Sarva Karyeshu Sarvada"</blockquote>
    `,
    traditions: ['Idol installation', 'Modak offering', 'Community pandals', 'Visarjan procession', 'Aarti'],
    foods: ['Modak', 'Ladoo', 'Puran Poli', 'Karanji', 'Coconut sweets'],
    relatedDeities: ['Ganesha', 'Shiva', 'Parvati'],
    themes: ['new beginnings', 'wisdom', 'obstacle removal', 'devotion', 'community'],
    region: 'Pan-India (especially Maharashtra)',
  },
  {
    id: 'janmashtami',
    name: 'Janmashtami',
    sanskrit: 'जन्माष्टमी',
    alternateNames: ['Krishna Janmashtami', 'Gokulashtami', 'Sri Krishna Jayanti'],
    month: 'August',
    duration: '2 days',
    summary: 'The celebration of Lord Krishna\'s birth at midnight in Mathura prison.',
    significance: `
      <p>Janmashtami celebrates the birth of Lord Krishna, the eighth avatar of Vishnu and one of the most beloved deities in Hinduism. Krishna is worshipped as the Supreme Being in many traditions, particularly in Vaishnavism.</p>
      <p>Krishna's life and teachings, especially in the Bhagavad Gita, form the cornerstone of Hindu philosophy. He embodies:</p>
      <ul>
        <li><strong>Divine Love:</strong> As the beloved of the gopis and Radha</li>
        <li><strong>Supreme Wisdom:</strong> As the teacher of Arjuna in the Gita</li>
        <li><strong>Playful Joy:</strong> As the mischievous butter-thief of Vrindavan</li>
        <li><strong>Righteous Action:</strong> As the charioteer who guided dharma's victory</li>
      </ul>
    `,
    mythology: `
      <p>Krishna was born at midnight on the eighth day (Ashtami) of the dark fortnight in the month of Bhadrapada.</p>
      <p>The tyrant king Kamsa had imprisoned his sister Devaki and her husband Vasudeva because of a prophecy that their eighth child would kill him. Kamsa had already killed their first seven children.</p>
      <p>When Krishna was born, the prison doors miraculously opened, the guards fell asleep, and Vasudeva was able to carry the newborn across the flooding Yamuna River. The river parted to let them pass, and the divine serpent Shesha protected them from the rain.</p>
      <p>Vasudeva reached Gokul and exchanged Krishna with the newborn daughter of Nanda and Yashoda. When Kamsa tried to kill this baby, she transformed into Goddess Yogamaya and warned him that his destroyer had already been born elsewhere.</p>
      <p>Krishna grew up in Vrindavan with his foster parents, enchanting everyone with his divine leelas (plays) before eventually fulfilling the prophecy and liberating Mathura from Kamsa's tyranny.</p>
    `,
    howToCelebrate: `
      <h3>The Fast</h3>
      <ul>
        <li>Devotees fast the entire day until midnight</li>
        <li>Some observe nirjala (without water) fast</li>
        <li>The fast is broken after midnight puja with prasad</li>
      </ul>

      <h3>Midnight Celebration</h3>
      <ul>
        <li>Temples are decorated elaborately</li>
        <li>A cradle is prepared for baby Krishna's idol</li>
        <li>At midnight, the idol is bathed (abhisheka) and placed in the cradle</li>
        <li>Devotees rock the cradle singing lullabies</li>
        <li>Offer butter, milk, curd, and sweets—Krishna's favorites</li>
      </ul>

      <h3>Dahi Handi (Maharashtra)</h3>
      <ul>
        <li>Teams form human pyramids to break a pot of curd hung high</li>
        <li>Recreates Krishna's childhood mischief of stealing butter</li>
        <li>Accompanied by music, dance, and celebration</li>
      </ul>

      <h3>Raas Leela</h3>
      <ul>
        <li>Dramatic performances depicting Krishna's life</li>
        <li>Especially popular in Mathura and Vrindavan</li>
        <li>Children dress as Krishna and Radha</li>
      </ul>
    `,
    spiritualMeaning: `
      <p>Krishna's birth in a prison symbolizes how divine consciousness can manifest even in the darkest circumstances of our lives.</p>
      <p><strong>The Midnight Birth:</strong> Krishna is born at the darkest hour, teaching us that spiritual awakening often comes at our lowest moments. The light appears precisely when the darkness is deepest.</p>
      <p><strong>Crossing the Yamuna:</strong> Vasudeva carrying Krishna across the flooded river represents the soul carrying divine consciousness across the ocean of worldly existence (samsara). With God in our hearts, we can cross any obstacle.</p>
      <p><strong>The Prison Opening:</strong> The locked doors of Kamsa's prison opening signify that no material bondage can contain the divine. When we invite God into our hearts, all chains fall away.</p>
      <p><strong>Krishna's Leelas:</strong> The playful stories of Krishna remind us that the divine doesn't have to be serious and stern. Spirituality can be joyful, loving, and even mischievous.</p>
      <blockquote>"Whenever dharma declines and adharma prevails, I manifest myself. For the protection of the good, for the destruction of evil, and for the establishment of dharma, I am born in every age." — Bhagavad Gita 4.7-8</blockquote>
    `,
    traditions: ['Midnight puja', 'Fasting', 'Dahi Handi', 'Raas Leela', 'Cradle ceremony', 'Bhajan singing'],
    foods: ['Makhan (butter)', 'Panjiri', 'Kheer', 'Chappan Bhog', 'Makhana', 'Peda'],
    relatedDeities: ['Krishna', 'Vishnu', 'Radha', 'Devaki', 'Yashoda'],
    themes: ['divine birth', 'love', 'joy', 'protection', 'dharma'],
    region: 'Pan-India (especially Mathura, Vrindavan)',
  },
  {
    id: 'maha-shivaratri',
    name: 'Maha Shivaratri',
    sanskrit: 'महाशिवरात्रि',
    alternateNames: ['The Great Night of Shiva', 'Shivaratri'],
    month: 'February - March',
    duration: '1 night',
    summary: 'The most sacred night dedicated to Lord Shiva, celebrated with fasting and all-night vigil.',
    significance: `
      <p>Maha Shivaratri, "The Great Night of Shiva," is considered the most significant spiritual night of the year. It falls on the 14th day of the dark fortnight in the month of Phalguna.</p>
      <p>The night is sacred for multiple reasons:</p>
      <ul>
        <li>The night Shiva performed the cosmic dance of creation, preservation, and destruction (Tandava)</li>
        <li>The night Shiva married Parvati</li>
        <li>The night Shiva drank the poison (Halahala) that emerged during the churning of the ocean, saving the universe</li>
        <li>The night when Shiva manifested as an infinite pillar of light (Jyotirlinga)</li>
      </ul>
      <p>Unlike other festivals, Shivaratri is celebrated at night, in darkness and stillness—qualities associated with Shiva himself.</p>
    `,
    mythology: `
      <p>Several legends are associated with Maha Shivaratri.</p>
      <p><strong>The Cosmic Dance:</strong> On this night, Lord Shiva performed the Tandava—the cosmic dance that creates, sustains, and dissolves the universe. This dance represents the eternal cycle of existence.</p>
      <p><strong>The Divine Wedding:</strong> This is the night Shiva and Parvati were married after Parvati's long penance to win him as her husband. Their union represents the perfect balance of masculine and feminine, consciousness and energy.</p>
      <p><strong>The Saving of the World:</strong> During the Samudra Manthan (churning of the ocean), a deadly poison emerged that threatened to destroy all existence. Shiva drank the poison to save the universe, but Parvati held his throat to prevent it from entering his body. This turned his throat blue, earning him the name Neelakantha (blue-throated one).</p>
      <p><strong>The Hunter's Story:</strong> A popular folk tale tells of a hunter who, lost in the forest, climbed a Bilva tree on Shivaratri night. Unknowingly, he stayed awake all night, and the Bilva leaves he plucked fell on a Shiva Lingam below. His accidental worship pleased Shiva so much that he was blessed with liberation.</p>
    `,
    howToCelebrate: `
      <h3>The Fast</h3>
      <ul>
        <li>Many devotees observe a complete fast (nirjala)</li>
        <li>Others consume only fruits and milk</li>
        <li>The fast begins at sunrise and ends the next morning</li>
      </ul>

      <h3>Night Vigil (Jagaran)</h3>
      <ul>
        <li>Stay awake the entire night in meditation and worship</li>
        <li>The night is divided into four praharas (watches) of three hours each</li>
        <li>Special pujas are performed during each prahara</li>
        <li>Chant "Om Namah Shivaya" throughout the night</li>
      </ul>

      <h3>Shiva Puja</h3>
      <ul>
        <li>Bathe the Shiva Lingam with milk, honey, curd, ghee, and water</li>
        <li>Offer Bilva (Bael) leaves—Shiva's favorite</li>
        <li>Offer white flowers, especially Datura</li>
        <li>Apply sandalwood paste and vibhuti (sacred ash)</li>
        <li>Light a diya with sesame oil</li>
      </ul>

      <h3>Temple Visits</h3>
      <ul>
        <li>Visit Shiva temples, especially Jyotirlinga temples</li>
        <li>Special abhishekas throughout the night</li>
        <li>Grand celebrations at Varanasi, Ujjain, and other sacred sites</li>
      </ul>
    `,
    spiritualMeaning: `
      <p>Maha Shivaratri is the most powerful night for spiritual practice, when the planetary positions support inward journey.</p>
      <p><strong>Why Night?</strong> Shiva represents that which is beyond form—pure consciousness. Night symbolizes the dissolution of the visible world, pointing us toward the formless. In the stillness of night, we can more easily turn inward.</p>
      <p><strong>Why Fasting?</strong> Fasting lightens the body and sharpens awareness. When we're not digesting food, our energy is available for spiritual practice. The slight discomfort also keeps us wakeful.</p>
      <p><strong>Why the Vigil?</strong> Sleep is a form of unconsciousness. By staying awake on Shivaratri, we practice maintaining awareness even as the world sleeps—a training for maintaining consciousness at the moment of death.</p>
      <p><strong>The Shiva Tattva:</strong> Shiva represents the witness consciousness—that unchanging awareness behind all experience. Shivaratri is an opportunity to recognize and rest in that awareness.</p>
      <blockquote>"Om Namah Shivaya" — I bow to Shiva, the inner Self, the pure consciousness that I truly am.</blockquote>
    `,
    traditions: ['Fasting', 'Night vigil', 'Lingam worship', 'Bilva leaves offering', 'Chanting Om Namah Shivaya'],
    foods: ['Fruits', 'Milk', 'Sabudana dishes', 'Thandai (in some regions)', 'Prasad after puja'],
    relatedDeities: ['Shiva', 'Parvati', 'Nandi', 'Ganesha', 'Kartikeya'],
    themes: ['meditation', 'transcendence', 'auspiciousness', 'devotion', 'consciousness'],
    region: 'Pan-India',
  },
  {
    id: 'ram-navami',
    name: 'Ram Navami',
    sanskrit: 'राम नवमी',
    alternateNames: ['Sri Rama Navami', 'Rama\'s Birthday'],
    month: 'March - April',
    duration: '1 day',
    summary: 'The celebration of Lord Rama\'s birth, the ideal king and embodiment of dharma.',
    significance: `
      <p>Ram Navami celebrates the birth of Lord Rama, the seventh avatar of Vishnu and the protagonist of the epic Ramayana. Rama is revered as Maryada Purushottam—the ideal man who perfectly upheld dharma in every situation.</p>
      <p>Rama embodies:</p>
      <ul>
        <li><strong>The Ideal Son:</strong> Who honored his father's word even at great personal cost</li>
        <li><strong>The Ideal Husband:</strong> Devoted entirely to his wife Sita</li>
        <li><strong>The Ideal King:</strong> Who put his subjects' welfare above his own happiness</li>
        <li><strong>The Ideal Brother:</strong> Loved by Bharata, Lakshmana, and Shatrughna</li>
      </ul>
      <p>The festival falls on the ninth day (Navami) of the bright fortnight in the month of Chaitra, which is also the last day of Chaitra Navratri.</p>
    `,
    mythology: `
      <p>Lord Rama was born in Ayodhya to King Dasharatha and Queen Kaushalya.</p>
      <p>Dasharatha had performed the Putrakameshti Yagna (sacrifice for sons) as he had no heirs. From the sacred fire emerged a divine being carrying a bowl of payasam (sacred pudding). The king distributed this among his three queens.</p>
      <p>From Kaushalya was born Rama, from Kaikeyi was born Bharata, and from Sumitra were born twins Lakshmana and Shatrughna. Rama, born at noon on Navami, was an incarnation of Lord Vishnu himself.</p>
      <p>Rama's life became the foundation of the Ramayana—his training under Sage Vishwamitra, his marriage to Sita, his exile, the abduction of Sita by Ravana, the great war with the help of Hanuman and the vanara army, and finally, his return to Ayodhya and coronation as king.</p>
      <p>His reign, known as Rama Rajya, became the ideal of perfect governance—where justice, prosperity, and dharma prevailed.</p>
    `,
    howToCelebrate: `
      <h3>Morning Rituals</h3>
      <ul>
        <li>Wake early and bathe</li>
        <li>Fast or consume only fruits and milk</li>
        <li>Set up images or idols of Rama, Sita, Lakshmana, and Hanuman</li>
      </ul>

      <h3>Noon Puja (Birth Time)</h3>
      <ul>
        <li>Rama was born at noon—perform special puja at this time</li>
        <li>Place infant Rama in a cradle</li>
        <li>Chant "Sri Ram Jai Ram Jai Jai Ram"</li>
        <li>Recite Ramacharitmanas or Ramayana passages</li>
        <li>Offer tulsi leaves, fruits, and sweets</li>
      </ul>

      <h3>Ramayana Reading</h3>
      <ul>
        <li>Many begin or complete reading the Ramayana on this day</li>
        <li>Temples organize continuous recitation (akhand path)</li>
        <li>Discourses on Rama's teachings</li>
      </ul>

      <h3>Processions</h3>
      <ul>
        <li>Rath Yatras (chariot processions) with Rama, Sita, Lakshmana idols</li>
        <li>Bhajan and kirtan singing</li>
        <li>Distribution of Panakam (jaggery water) and neer mor (buttermilk)</li>
      </ul>
    `,
    spiritualMeaning: `
      <p>Ram Navami reminds us of the possibility of living a life of perfect dharma—not through renunciation, but through engagement with the world.</p>
      <p><strong>Dharma in Action:</strong> Rama didn't retreat to the forest seeking liberation—he was exiled. Yet he turned every challenge into an opportunity to demonstrate dharma. His life teaches that spirituality is proven in how we handle difficult situations, not in avoiding them.</p>
      <p><strong>The Power of Relationship:</strong> Rama's greatness is inseparable from his relationships—his devotion to parents, love for Sita, brotherhood with Lakshmana, and friendship with Hanuman. Dharma isn't practiced in isolation but in how we treat others.</p>
      <p><strong>Ram Rajya:</strong> The ideal of Rama's kingdom represents a vision where external order reflects inner dharma. When leaders embody righteousness, society flourishes.</p>
      <p><strong>Rama as Inner Light:</strong> "Ram" is also interpreted as the light of consciousness within. Celebrating Ram Navami is remembering the divine presence within our own hearts.</p>
      <blockquote>"Sri Ram Jai Ram Jai Jai Ram" — This name itself is said to carry the essence of all spiritual practice.</blockquote>
    `,
    traditions: ['Fasting', 'Noon puja', 'Ramayana recitation', 'Rath Yatra', 'Temple visits'],
    foods: ['Panakam', 'Neer Mor', 'Kosambari', 'Fruits', 'Payasam'],
    relatedDeities: ['Rama', 'Sita', 'Lakshmana', 'Hanuman', 'Vishnu'],
    themes: ['dharma', 'righteousness', 'ideal conduct', 'devotion', 'victory'],
    region: 'Pan-India (especially North India)',
  },
  {
    id: 'raksha-bandhan',
    name: 'Raksha Bandhan',
    sanskrit: 'रक्षा बन्धन',
    alternateNames: ['Rakhi', 'Rakhi Purnima', 'Brother-Sister Festival'],
    month: 'August',
    duration: '1 day',
    summary: 'A celebration of the sacred bond between brothers and sisters through the tying of a protective thread.',
    significance: `
      <p>Raksha Bandhan, meaning "the bond of protection," celebrates the loving relationship between brothers and sisters. On this day, sisters tie a sacred thread (rakhi) on their brothers' wrists, and brothers promise to protect their sisters.</p>
      <p>The festival transcends biological relationships—anyone can become a brother or sister through the bond of rakhi:</p>
      <ul>
        <li>It celebrates all protective relationships</li>
        <li>The thread symbolizes love, care, and the sister's prayers for her brother's well-being</li>
        <li>The brother's gift and promise represent his commitment to protect and support</li>
        <li>It reinforces family bonds and social harmony</li>
      </ul>
      <p>The festival falls on the full moon day (Purnima) of the Hindu month of Shravana.</p>
    `,
    mythology: `
      <p>Several stories illustrate the power of the rakhi bond.</p>
      <p><strong>Indra and Sachi:</strong> When the gods were losing a battle against the demons, Indra's wife Sachi tied a blessed thread on his wrist. This gave Indra the strength to defeat the demons and reclaim heaven.</p>
      <p><strong>Draupadi and Krishna:</strong> When Krishna cut his finger on the Sudarshana Chakra, Draupadi tore a piece of her sari and bandaged his wound. Touched by her concern, Krishna declared her his sister and promised to protect her. Years later, he fulfilled this promise by providing her with an endless sari during her humiliation in the Kaurava court.</p>
      <p><strong>Yama and Yamuna:</strong> The river goddess Yamuna tied a rakhi to her brother Yama, the god of death. Moved by her love, Yama blessed her that any brother who receives a rakhi and protects his sister would become immortal.</p>
      <p><strong>Historical accounts:</strong> Rani Karnavati of Mewar sent a rakhi to Mughal Emperor Humayun seeking protection against invasion. Despite religious differences, Humayun honored the bond and came to her aid.</p>
    `,
    howToCelebrate: `
      <h3>Preparation</h3>
      <ul>
        <li>Sisters select or make beautiful rakhis</li>
        <li>Prepare a puja thali with rakhi, roli (vermillion), rice, diya, and sweets</li>
        <li>Brothers prepare gifts for their sisters</li>
      </ul>

      <h3>The Ritual</h3>
      <ul>
        <li>Brothers and sisters dress in new or festive clothes</li>
        <li>Sister applies tilak (vermillion mark) on brother's forehead</li>
        <li>She performs aarti with the diya</li>
        <li>She ties the rakhi on his right wrist while chanting prayers</li>
        <li>She offers sweets to the brother</li>
        <li>Brother gives gifts and promises protection</li>
        <li>They feed each other sweets</li>
      </ul>

      <h3>Modern Celebrations</h3>
      <ul>
        <li>Send rakhis by mail to distant brothers</li>
        <li>Video calls for the ceremony when apart</li>
        <li>Sisters also tie rakhi to soldiers, who become "brothers of the nation"</li>
        <li>Environmental activists tie rakhis to trees</li>
      </ul>
    `,
    spiritualMeaning: `
      <p>Raksha Bandhan beautifully illustrates how Hindu spirituality is woven into family relationships.</p>
      <p><strong>The Thread of Love:</strong> The simple thread has no intrinsic power—its strength comes from the love and prayers infused into it. This teaches that it's intention, not material value, that makes something sacred.</p>
      <p><strong>Mutual Protection:</strong> Though traditionally the brother promises protection, the sister's prayers and the rakhi itself also protect the brother. True relationships are reciprocal.</p>
      <p><strong>Expanding Family:</strong> Raksha Bandhan shows that family isn't limited to blood relations. Anyone can become a brother or sister through love and commitment. This expands our sense of belonging and responsibility.</p>
      <p><strong>The Feminine Shakti:</strong> The sister's blessing carries spiritual power. In tying the rakhi, she transfers protective energy (shakti) to her brother. This acknowledges the spiritual strength of the feminine.</p>
      <blockquote>"The thread of love and protection binds hearts across all distances and differences."</blockquote>
    `,
    traditions: ['Rakhi tying', 'Tilak ceremony', 'Gift exchange', 'Sweet sharing', 'Family gathering'],
    foods: ['Barfi', 'Kaju Katli', 'Ghevar', 'Coconut Ladoo', 'Special family meals'],
    relatedDeities: ['Lakshmi', 'Narayana', 'Yama', 'Yamuna'],
    themes: ['protection', 'sibling love', 'family bonds', 'commitment', 'blessing'],
    region: 'Pan-India (especially North India)',
  },
  {
    id: 'karwa-chauth',
    name: 'Karwa Chauth',
    sanskrit: 'करवा चौथ',
    alternateNames: ['Karva Chauth', 'Karak Chaturthi'],
    month: 'October - November',
    duration: '1 day',
    summary: 'A day-long fast observed by married women for the longevity and well-being of their husbands.',
    significance: `
      <p>Karwa Chauth is observed by married Hindu women who fast from sunrise to moonrise for the long life, prosperity, and well-being of their husbands. The word "Karwa" refers to an earthen pot, and "Chauth" means the fourth day—the festival falls on the fourth day after the full moon in the month of Kartik.</p>
      <p>Key aspects:</p>
      <ul>
        <li>One of the most rigorous fasts—no food or water until moonrise</li>
        <li>Celebrates the sacred bond of marriage</li>
        <li>Demonstrates a wife's love, devotion, and sacrifice</li>
        <li>Believed to strengthen the marital bond</li>
        <li>Increasingly, some husbands also fast for their wives</li>
      </ul>
    `,
    mythology: `
      <p>Several stories inspire the observance of Karwa Chauth.</p>
      <p><strong>Queen Veervati:</strong> A beautiful queen observed Karwa Chauth but couldn't bear the hunger. Her brothers, seeing her distress, tricked her by lighting a fire behind a tree that resembled the moon. She broke her fast, and immediately her husband fell ill and died. Devastated, she prayed continuously for a year, and her devotion moved the goddess Parvati, who restored her husband to life.</p>
      <p><strong>Savitri and Satyavan:</strong> Savitri's unwavering devotion to her husband Satyavan impressed even Yama, the god of death. When Yama came to claim Satyavan's soul, Savitri followed him, arguing with wisdom and devotion until Yama restored her husband's life. Her story exemplifies the power of a devoted wife's love.</p>
      <p><strong>Karwa's Story:</strong> A woman named Karwa's husband was caught by a crocodile. With the power of her devotion and chastity, she bound the crocodile with cotton thread and threatened the god of death. Impressed by her power, Yama killed the crocodile and saved her husband.</p>
    `,
    howToCelebrate: `
      <h3>Pre-Dawn (Sargi)</h3>
      <ul>
        <li>Wake before sunrise (around 4 AM)</li>
        <li>Eat sargi—a pre-dawn meal prepared by mother-in-law</li>
        <li>Includes fruits, sweets, and fennel water</li>
        <li>Fast begins at sunrise</li>
      </ul>

      <h3>During the Day</h3>
      <ul>
        <li>Married women dress in wedding-like finery (often red)</li>
        <li>Apply mehndi (henna) on hands</li>
        <li>Wear sindoor, bangles, and wedding jewelry</li>
        <li>Visit friends to share karwa chauth stories</li>
        <li>Prepare special thali for evening puja</li>
      </ul>

      <h3>Evening Puja</h3>
      <ul>
        <li>Gather with other fasting women</li>
        <li>Listen to or recite the Karwa Chauth katha (story)</li>
        <li>Worship the karwa (earthen pot) filled with water</li>
        <li>Make offerings to Goddess Parvati</li>
      </ul>

      <h3>Moonrise</h3>
      <ul>
        <li>Wait for the moon to rise</li>
        <li>View the moon through a sieve (chalni)</li>
        <li>Then view husband's face through the sieve</li>
        <li>Husband offers water and the first morsel of food</li>
        <li>Break the fast together</li>
        <li>Husband gives gifts</li>
      </ul>
    `,
    spiritualMeaning: `
      <p>Karwa Chauth reveals deep spiritual principles embedded in Hindu marriage traditions.</p>
      <p><strong>Tapasya (Austerity):</strong> The rigorous fast is a form of tapasya—disciplined practice that generates spiritual power. This power is directed toward the husband's well-being, demonstrating how love expresses itself through sacrifice.</p>
      <p><strong>The Moon Symbolism:</strong> Breaking the fast only at moonrise connects the ritual to lunar energy, which in Hindu tradition is associated with the mind and emotions. The moon also represents beauty and coolness—qualities the wife seeks to bring into her marriage.</p>
      <p><strong>The Sieve:</strong> Viewing through the sieve symbolizes filtering—seeing the beloved without the interference of ego, expectations, or judgments. It's about perceiving the divine in your partner.</p>
      <p><strong>Marriage as Spiritual Partnership:</strong> Hindu marriage isn't just a social contract but a spiritual partnership where both partners support each other's growth. Karwa Chauth celebrates this sacred dimension of marriage.</p>
      <p><strong>Modern Interpretation:</strong> Today, many couples observe this fast together, honoring mutual love and commitment rather than one-sided devotion.</p>
    `,
    traditions: ['Sargi meal', 'Daylong fasting', 'Mehndi', 'Evening puja', 'Moon viewing', 'Sieve ritual'],
    foods: ['Sargi', 'Feni', 'Mathri', 'Special dinner after moonrise', 'Sweets'],
    relatedDeities: ['Parvati', 'Shiva', 'Ganesha', 'Moon god'],
    themes: ['marriage', 'devotion', 'sacrifice', 'longevity', 'love'],
    region: 'North India (Punjab, Haryana, UP, Rajasthan)',
  },
  {
    id: 'makar-sankranti',
    name: 'Makar Sankranti',
    sanskrit: 'मकर संक्रान्ति',
    alternateNames: ['Uttarayan', 'Maghi', 'Pongal (Tamil Nadu)', 'Lohri (Punjab)'],
    month: 'January',
    duration: '1 day',
    summary: 'The harvest festival marking the sun\'s transition into Capricorn and the beginning of longer days.',
    significance: `
      <p>Makar Sankranti is one of the few Hindu festivals based on the solar calendar rather than the lunar calendar, which is why it falls on the same date (January 14 or 15) each year.</p>
      <p>"Makar" means Capricorn, and "Sankranti" means transition. The festival marks:</p>
      <ul>
        <li>The sun's transition from Sagittarius to Capricorn (Makar Rashi)</li>
        <li>The end of winter solstice and beginning of longer days</li>
        <li>The start of Uttarayan—the sun's northward journey (auspicious period)</li>
        <li>Harvest time—gratitude for the earth's abundance</li>
      </ul>
      <p>This is considered one of the most auspicious days for spiritual practices, charity, and holy dips in sacred rivers.</p>
    `,
    mythology: `
      <p>Makar Sankranti is associated with several important legends.</p>
      <p><strong>Bhishma's Choice:</strong> The great warrior Bhishma of the Mahabharata, who had the boon to choose the moment of his death, waited on his bed of arrows until the sun entered Uttarayan. He believed dying during this auspicious period would lead to liberation. This is why Makar Sankranti is considered especially powerful for spiritual elevation.</p>
      <p><strong>Ganga's Descent:</strong> On this day, the sacred river Ganga followed King Bhagiratha to the ocean, passing through the ashram of Sage Kapila and liberating his 60,000 ancestors. Bathing in the Ganges on Makar Sankranti is believed to be especially purifying.</p>
      <p><strong>Lord Vishnu's Victory:</strong> On this day, Lord Vishnu ended the demons' reign by burying them under the Mandara mountain, bringing peace to the universe. This represents the victory of positive forces.</p>
      <p><strong>Agricultural Significance:</strong> Beyond mythology, the festival has always been tied to harvest—it's the time when farmers reap their winter crops and express gratitude for abundance.</p>
    `,
    howToCelebrate: `
      <h3>Holy Bath</h3>
      <ul>
        <li>Bathe in sacred rivers, especially the Ganges</li>
        <li>The Kumbh Mela bathing tradition is linked to this day</li>
        <li>If rivers aren't accessible, add Ganges water to your bath</li>
      </ul>

      <h3>Charity (Daan)</h3>
      <ul>
        <li>This is one of the most important days for charity</li>
        <li>Donate sesame seeds, jaggery, blankets, and food to the needy</li>
        <li>Give to Brahmins and the poor</li>
        <li>"Til gul ghya, god god bola" (Accept sesame-jaggery and speak sweetly)</li>
      </ul>

      <h3>Kite Flying</h3>
      <ul>
        <li>Major tradition in Gujarat and parts of North India</li>
        <li>Sky fills with colorful kites</li>
        <li>Symbolizes reaching toward the sun/higher consciousness</li>
      </ul>

      <h3>Regional Celebrations</h3>
      <ul>
        <li><strong>Pongal (Tamil Nadu):</strong> Four-day harvest festival with special rice dish</li>
        <li><strong>Lohri (Punjab):</strong> Bonfire celebration the night before</li>
        <li><strong>Bihu (Assam):</strong> Harvest festival with feasts and dancing</li>
        <li><strong>Uttarayan (Gujarat):</strong> International kite festival</li>
      </ul>
    `,
    spiritualMeaning: `
      <p>Makar Sankranti carries profound spiritual symbolism.</p>
      <p><strong>Light Returning:</strong> The sun's northward journey represents the return of light and the triumph of illumination over darkness. Spiritually, this encourages us to move from ignorance (darkness) toward knowledge (light).</p>
      <p><strong>Uttarayan - The Auspicious Path:</strong> In Hindu tradition, the six months of Uttarayan (sun moving north) are considered more auspicious than Dakshinayan (sun moving south). Bhishma waited for this period to leave his body, believing it leads to the path of light and liberation.</p>
      <p><strong>Sesame and Jaggery:</strong> Sesame represents tiny seeds of virtue that, when combined with the sweetness of jaggery (right intention), grow into great spiritual merit. Sharing these sweets with others spreads positivity.</p>
      <p><strong>New Beginnings:</strong> Just as the sun begins its new journey, we're encouraged to let go of old patterns and embrace new, more conscious ways of living.</p>
      <blockquote>"As the sun moves toward light, may we too journey from darkness to light, from untruth to truth, from mortality to immortality."</blockquote>
    `,
    traditions: ['Holy bath', 'Charity', 'Kite flying', 'Sesame-jaggery sweets', 'Bonfire'],
    foods: ['Til Gul (sesame-jaggery)', 'Khichdi', 'Pongal', 'Gajak', 'Rewri', 'Makki ki Roti'],
    relatedDeities: ['Surya (Sun god)', 'Vishnu', 'Shani'],
    themes: ['harvest', 'gratitude', 'light', 'new beginnings', 'charity'],
    region: 'Pan-India (different names in different regions)',
  },
  {
    id: 'onam',
    name: 'Onam',
    sanskrit: 'ओणम्',
    alternateNames: ['Thiruvonam', 'Kerala\'s Harvest Festival'],
    month: 'August - September',
    duration: '10 days',
    summary: 'Kerala\'s grand harvest festival celebrating the annual homecoming of the beloved King Mahabali.',
    significance: `
      <p>Onam is the biggest festival of Kerala, celebrated by Malayalis regardless of religion. It marks the harvest season and commemorates the return of the legendary King Mahabali to visit his people.</p>
      <p>Key aspects:</p>
      <ul>
        <li>A rare festival that honors an Asura (demon) king—testament to his greatness</li>
        <li>Celebrates the golden age of Kerala under Mahabali's rule</li>
        <li>Harvest festival expressing gratitude for abundance</li>
        <li>Time for family reunions and homecoming</li>
        <li>Showcases Kerala's rich cultural heritage</li>
      </ul>
      <p>The festival spans ten days (Atham to Thiruvonam), with Thiruvonam being the most important day.</p>
    `,
    mythology: `
      <p>Onam's legend is unique—it honors an Asura king who was so righteous that even the gods were threatened.</p>
      <p>Mahabali was an Asura king who, through his devotion and righteous rule, became extremely powerful. His kingdom of Kerala was a paradise where everyone was equal, there was no poverty, and dharma prevailed perfectly.</p>
      <p>The gods grew concerned that Mahabali might become too powerful. Lord Vishnu took the avatar of Vamana, a dwarf Brahmin boy, and approached Mahabali during a yajna (sacred ritual).</p>
      <p>Vamana asked for just three paces of land. Mahabali, known for his generosity, readily agreed. Vamana then grew to cosmic proportions—with one step he covered the earth, with the second he covered the heavens. For the third step, Mahabali offered his own head.</p>
      <p>Impressed by Mahabali's humility and devotion, Vishnu granted him a boon: he could return to visit his beloved people once a year. Onam celebrates this annual homecoming. Before pushing him to the netherworld, Vishnu also made Mahabali immortal and the ruler of Sutala, a realm even more beautiful than heaven.</p>
    `,
    howToCelebrate: `
      <h3>Pookalam (Flower Carpet)</h3>
      <ul>
        <li>Create intricate designs using flower petals</li>
        <li>Start small on day 1, grow larger each day</li>
        <li>Thiruvonam's pookalam is the grandest</li>
        <li>Traditionally uses ten types of flowers</li>
      </ul>

      <h3>Onasadya (Feast)</h3>
      <ul>
        <li>Elaborate vegetarian feast served on banana leaves</li>
        <li>Traditionally includes 24-28 dishes</li>
        <li>Served in specific order and arrangement</li>
        <li>Eaten while sitting on the floor</li>
        <li>Must include rice, sambar, avial, and payasam</li>
      </ul>

      <h3>Cultural Programs</h3>
      <ul>
        <li><strong>Vallamkali:</strong> Snake boat races on backwaters</li>
        <li><strong>Pulikali:</strong> Tiger dance—performers painted as tigers</li>
        <li><strong>Thiruvathira Kali:</strong> Women's graceful dance around a lamp</li>
        <li><strong>Onam games:</strong> Traditional sports and competitions</li>
      </ul>

      <h3>Other Traditions</h3>
      <ul>
        <li>Wear new clothes (Onakkodi), traditionally cream and gold</li>
        <li>Exchange gifts</li>
        <li>Visit family and temples</li>
        <li>Place clay pyramid (Thrikkakara Appan) representing Mahabali</li>
      </ul>
    `,
    spiritualMeaning: `
      <p>Onam teaches profound spiritual lessons through the story of Mahabali.</p>
      <p><strong>True Dharma:</strong> Mahabali, despite being an Asura, ruled with such righteousness that his kingdom became paradise. This teaches that dharma transcends birth and ancestry—anyone who lives dharmically attains greatness.</p>
      <p><strong>Surrender and Humility:</strong> When Vamana asked for the third step, Mahabali offered his own head. This ultimate surrender transformed apparent defeat into eternal glory. True spiritual victory often comes through surrender, not conquest.</p>
      <p><strong>The Divine Tests:</strong> Mahabali's guru Shukracharya warned him that Vamana was Vishnu in disguise. But Mahabali chose to honor his word over self-preservation. His integrity cost him his kingdom but earned him immortality.</p>
      <p><strong>Eternal Love:</strong> That a people would celebrate their king's return for millennia speaks to the power of righteous rule. When leaders truly serve their people, they are remembered forever.</p>
      <blockquote>"When there was Mahabali, all were equal; there was no discrimination. That golden age returns each Onam."</blockquote>
    `,
    traditions: ['Pookalam', 'Onasadya feast', 'Vallamkali boat race', 'Pulikali', 'New clothes', 'Family gathering'],
    foods: ['Sadya (feast)', 'Payasam', 'Avial', 'Olan', 'Sambar', 'Banana chips', 'Pachadi'],
    relatedDeities: ['Vishnu (as Vamana)', 'Mahabali'],
    themes: ['homecoming', 'harvest', 'equality', 'righteousness', 'generosity', 'cultural pride'],
    region: 'Kerala',
  },
  {
    id: 'guru-purnima',
    name: 'Guru Purnima',
    sanskrit: 'गुरु पूर्णिमा',
    alternateNames: ['Vyasa Purnima', 'Teacher\'s Day (in spiritual context)'],
    month: 'July',
    duration: '1 day',
    summary: 'A day to honor spiritual teachers and the sacred tradition of knowledge transmission.',
    significance: `
      <p>Guru Purnima falls on the full moon day (Purnima) in the Hindu month of Ashadha. It's dedicated to honoring the Guru—the spiritual teacher who guides seekers from darkness to light.</p>
      <p>The word "Guru" comes from "gu" (darkness) and "ru" (remover)—one who removes darkness.</p>
      <p>Key aspects:</p>
      <ul>
        <li>Honors Sage Vyasa, who compiled the Vedas and wrote the Mahabharata</li>
        <li>Celebrates the tradition of guru-shishya (teacher-student) relationship</li>
        <li>Day to express gratitude to all teachers—spiritual and worldly</li>
        <li>Particularly important in yoga and meditation traditions</li>
        <li>Also celebrated in Buddhism and Jainism</li>
      </ul>
    `,
    mythology: `
      <p>Guru Purnima is also called Vyasa Purnima, honoring the great sage Vyasa.</p>
      <p>Sage Vyasa is one of the most revered figures in Hindu tradition. Born as Krishna Dvaipayana (the dark one born on an island), he became known as "Vyasa" (compiler) for his monumental contributions:</p>
      <ul>
        <li>Compiled and organized the Vedas into four parts</li>
        <li>Authored the Mahabharata, the longest epic ever written</li>
        <li>Wrote the 18 Puranas</li>
        <li>Composed the Brahma Sutras</li>
      </ul>
      <p>Vyasa represents the ideal guru—one who takes infinite knowledge and makes it accessible to students of all levels. His birthday is celebrated as Guru Purnima.</p>
      <p>In yogic tradition, this day marks when Shiva, the first yogi (Adi Yogi), became the first guru (Adi Guru) by beginning to transmit yoga to his seven disciples, who became the Sapta Rishis.</p>
    `,
    howToCelebrate: `
      <h3>Honor Your Teachers</h3>
      <ul>
        <li>Visit your spiritual teacher if you have one</li>
        <li>Offer flowers, fruits, and dakshina (offering)</li>
        <li>Touch their feet seeking blessings</li>
        <li>Express gratitude to all teachers who've guided you</li>
      </ul>

      <h3>Spiritual Practices</h3>
      <ul>
        <li>Begin new spiritual practices or intensify existing ones</li>
        <li>Meditate on your guru or the guru principle</li>
        <li>Read scriptures, especially works by Vyasa</li>
        <li>Chant the Guru Stotra or Guru Gita</li>
      </ul>

      <h3>Puja and Offerings</h3>
      <ul>
        <li>Perform puja to images of your guru or to Vyasa</li>
        <li>Offer food to Brahmins and teachers</li>
        <li>Donate to educational causes</li>
        <li>Fast or eat only sattvic food</li>
      </ul>

      <h3>Satsang and Learning</h3>
      <ul>
        <li>Attend satsang (spiritual gathering)</li>
        <li>Listen to discourses by spiritual teachers</li>
        <li>Reflect on the teachings you've received</li>
        <li>Commit to deepening your practice</li>
      </ul>
    `,
    spiritualMeaning: `
      <p>Guru Purnima points to one of the most essential principles in spiritual life—the need for a guide.</p>
      <p><strong>The Necessity of the Guru:</strong> While books and practices are helpful, the direct transmission from a realized teacher accelerates spiritual growth immeasurably. The guru sees what we cannot see in ourselves and guides us accordingly.</p>
      <p><strong>The Full Moon:</strong> Purnima (full moon) represents the mind at its fullest capacity. On this day, the mind is most receptive to receiving wisdom. The guru is like the full moon—reflecting the light of the ultimate truth so we can perceive it.</p>
      <p><strong>The Guru Principle:</strong> Beyond any individual teacher, there's a universal guru principle—the divine intelligence that guides all beings toward awakening. This principle manifests through teachers, through experiences, even through difficulties.</p>
      <p><strong>Gratitude Opens:</strong> The act of honoring the guru isn't for the guru's benefit—it's for ours. Gratitude opens the heart and mind to receive. The more grateful we are, the more receptive we become.</p>
      <blockquote>"Gurur Brahma, Gurur Vishnu, Gurur Devo Maheshwara, Guru Sakshat Para Brahma, Tasmai Shri Gurave Namaha" — The Guru is Brahma, Vishnu, and Shiva. The Guru is the Supreme Reality itself. To that Guru I bow.</blockquote>
    `,
    traditions: ['Guru puja', 'Offering dakshina', 'Pada puja (foot worship)', 'Fasting', 'Satsang', 'Scripture reading'],
    foods: ['Sattvic food', 'Fruits', 'Kheer', 'Prasad from guru'],
    relatedDeities: ['Vyasa', 'Shiva (as Adi Guru)', 'Dattatreya'],
    themes: ['gratitude', 'wisdom', 'discipleship', 'learning', 'transmission'],
    region: 'Pan-India',
  },
  {
    id: 'hanuman-jayanti',
    name: 'Hanuman Jayanti',
    sanskrit: 'हनुमान जयन्ती',
    alternateNames: ['Hanuman\'s Birthday', 'Hanuman Janmotsav'],
    month: 'March - April',
    duration: '1 day',
    summary: 'Celebration of the birth of Lord Hanuman, the embodiment of devotion, strength, and selfless service.',
    significance: `
      <p>Hanuman Jayanti celebrates the birth of Lord Hanuman, one of the most beloved deities in Hinduism. Hanuman is worshipped as the ideal devotee, whose entire life was dedicated to serving Lord Rama.</p>
      <p>Hanuman represents:</p>
      <ul>
        <li><strong>Bhakti (Devotion):</strong> His love for Rama is the gold standard of devotion</li>
        <li><strong>Brahmacharya:</strong> Celibacy and channeled energy</li>
        <li><strong>Shakti (Strength):</strong> Both physical and spiritual power</li>
        <li><strong>Seva (Service):</strong> Selfless service without expectation</li>
        <li><strong>Humility:</strong> Despite immense powers, always a servant</li>
      </ul>
      <p>The festival is typically celebrated on the full moon day of the Hindu month of Chaitra, though dates vary regionally.</p>
    `,
    mythology: `
      <p>Hanuman's birth story shows his divine nature from the very beginning.</p>
      <p>Anjana was an apsara (celestial being) cursed to be born as a vanara (monkey). The curse would be lifted when she gave birth to an incarnation of Lord Shiva. She performed intense penance to Shiva, who blessed her.</p>
      <p>Meanwhile, King Dasharatha was performing a yajna for sons. The sacred payasam from the yajna was carried by a divine kite to where Anjana was meditating. Receiving it as divine blessing, she consumed it and became pregnant with Hanuman.</p>
      <p>Born with immense powers, baby Hanuman once mistook the sun for a ripe mango and leaped toward it. Indra, fearing for the sun, struck Hanuman with his thunderbolt. Hanuman fell unconscious, and his father Vayu (wind god) withdrew all air from the world in anger.</p>
      <p>The gods, gasping for breath, quickly blessed Hanuman with immortality and numerous divine powers. From Brahma he received the power to go anywhere, from Shiva immunity from his weapons, from Varuna protection from water, and from Vishnu the discus as protection.</p>
      <p>Hanuman later became Rama's greatest devotee, playing a crucial role in the Ramayana.</p>
    `,
    howToCelebrate: `
      <h3>Early Morning Worship</h3>
      <ul>
        <li>Wake before sunrise (Brahma Muhurta)</li>
        <li>Bathe and wear clean clothes</li>
        <li>Visit Hanuman temple at dawn</li>
        <li>Apply sindoor (vermillion) to Hanuman's idol</li>
      </ul>

      <h3>Temple Celebrations</h3>
      <ul>
        <li>Special abhisheka (ritual bathing) of Hanuman idol</li>
        <li>Offering of sindoor, oil, flowers, and ladoos</li>
        <li>Recitation of Hanuman Chalisa (40 verses praising Hanuman)</li>
        <li>Reading of Sundara Kanda from Ramayana</li>
        <li>Continuous chanting of "Jai Shri Ram"</li>
      </ul>

      <h3>Personal Practice</h3>
      <ul>
        <li>Recite Hanuman Chalisa (ideally 7 or 11 times)</li>
        <li>Fast or eat only fruits</li>
        <li>Wear orange or red clothes (Hanuman's colors)</li>
        <li>Meditate on Hanuman's qualities</li>
      </ul>

      <h3>Acts of Service</h3>
      <ul>
        <li>Feed monkeys as representatives of Hanuman</li>
        <li>Donate food to the needy</li>
        <li>Perform selfless service in Hanuman's spirit</li>
      </ul>
    `,
    spiritualMeaning: `
      <p>Hanuman embodies the spiritual qualities every seeker aspires to develop.</p>
      <p><strong>The Power of Devotion:</strong> Hanuman's strength came from his love for Rama. When asked what he was, he replied: "When I don't know who I am, I serve you (Rama). When I know who I am, you and I are one." This captures the essence of bhakti—devotion that leads to union.</p>
      <p><strong>Remembering Our Power:</strong> There's a famous scene where Hanuman forgot his powers and needed to be reminded. When reminded, he leaped across the ocean. We too often forget our divine nature and need reminders to access our full potential.</p>
      <p><strong>Ego-less Service:</strong> Despite having powers that could humble the gods, Hanuman remained a humble servant. His example teaches that true greatness lies in service, not in displays of power.</p>
      <p><strong>The Chest Opening:</strong> When asked where Rama was, Hanuman tore open his chest to reveal Rama and Sita in his heart. This dramatic image shows that God isn't in temples alone—the true temple is the devoted heart.</p>
      <blockquote>"Jai Hanuman Gyan Gun Sagar, Jai Kapis Tihun Lok Ujagar" — Victory to Hanuman, ocean of wisdom and virtues, Victory to the Lord of monkeys, illuminator of the three worlds.</blockquote>
    `,
    traditions: ['Temple visits', 'Hanuman Chalisa recitation', 'Sindoor offering', 'Fasting', 'Sundara Kanda reading'],
    foods: ['Boondi ladoo', 'Fruits', 'Prasad', 'Simple sattvic food'],
    relatedDeities: ['Hanuman', 'Rama', 'Sita', 'Shiva', 'Vayu'],
    themes: ['devotion', 'strength', 'service', 'loyalty', 'celibacy'],
    region: 'Pan-India',
  },
  {
    id: 'ugadi',
    name: 'Ugadi',
    sanskrit: 'युगादि',
    alternateNames: ['Gudi Padwa (Maharashtra)', 'Telugu/Kannada New Year', 'Chaitra Shukla Pratipada'],
    month: 'March - April',
    duration: '1 day',
    summary: 'The New Year celebration for Telugu, Kannada, and Marathi communities, marking new beginnings.',
    significance: `
      <p>Ugadi (or Yugadi) marks the beginning of a new year according to the Hindu lunisolar calendar. The word comes from "yuga" (age/era) and "adi" (beginning)—the beginning of a new age.</p>
      <p>Key aspects:</p>
      <ul>
        <li>Falls on the first day of Chaitra month (Chaitra Shukla Pratipada)</li>
        <li>Believed to be the day Brahma created the universe</li>
        <li>Time to hear predictions for the new year (Panchanga Shravanam)</li>
        <li>New year resolutions and fresh starts</li>
        <li>Spring festival—nature is renewing itself</li>
      </ul>
      <p>Different names: Ugadi (Telugu/Kannada), Gudi Padwa (Marathi), Navreh (Kashmiri), Sajibu Cheiraoba (Manipuri).</p>
    `,
    mythology: `
      <p>Several legends are associated with Ugadi.</p>
      <p><strong>Brahma's Creation:</strong> According to tradition, this is the day when Lord Brahma began creating the universe. The very first day of creation became the first day of the calendar—making Ugadi the cosmic New Year.</p>
      <p><strong>Satya Yuga's Beginning:</strong> Some traditions hold that Satya Yuga (the age of truth, the first and most righteous of the four yugas) began on this day.</p>
      <p><strong>Rama's Coronation:</strong> In some regions, Ugadi marks the day Lord Rama was crowned king of Ayodhya after his 14-year exile and victory over Ravana.</p>
      <p><strong>Victory Celebration:</strong> In Maharashtra, Gudi Padwa commemorates the victories of the Maratha warrior king Shivaji. The "gudi" (decorated pole) symbolizes victory and is raised outside homes.</p>
    `,
    howToCelebrate: `
      <h3>Morning Rituals</h3>
      <ul>
        <li>Wake early and take an oil bath</li>
        <li>Apply oil on head and body before bathing</li>
        <li>Wear new clothes</li>
        <li>Decorate home with mango leaf torans (garlands) on doorways</li>
      </ul>

      <h3>Ugadi Pachadi (Special Dish)</h3>
      <ul>
        <li>A unique preparation with six tastes representing life's experiences:</li>
        <li><strong>Sweet (jaggery):</strong> Happiness</li>
        <li><strong>Sour (tamarind):</strong> Challenges</li>
        <li><strong>Salty (salt):</strong> Life's flavor</li>
        <li><strong>Bitter (neem flowers):</strong> Sadness</li>
        <li><strong>Spicy (pepper):</strong> Anger</li>
        <li><strong>Tangy (raw mango):</strong> Surprise</li>
      </ul>

      <h3>Gudi (Maharashtra)</h3>
      <ul>
        <li>Erect a "gudi"—a decorated pole outside the home</li>
        <li>Bamboo stick with silk cloth, neem leaves, mango leaves</li>
        <li>Topped with a copper pot (kalash)</li>
        <li>Symbolizes victory and auspiciousness</li>
      </ul>

      <h3>Panchanga Shravanam</h3>
      <ul>
        <li>Listen to the reading of the new year's Panchang (almanac)</li>
        <li>Forecasts for the coming year</li>
        <li>Auspicious times for important events</li>
        <li>Usually done by a priest or elder</li>
      </ul>
    `,
    spiritualMeaning: `
      <p>Ugadi carries beautiful spiritual symbolism about life and renewal.</p>
      <p><strong>The Six Tastes:</strong> Ugadi Pachadi's six tastes teach profound wisdom—life contains all experiences, not just pleasant ones. By consuming all tastes together, we learn to accept life fully, finding equanimity in both joy and sorrow.</p>
      <p><strong>Spring Renewal:</strong> Ugadi falls when spring arrives—trees blossom, nature renews. It reminds us that we too can shed the old and embrace new growth. Every day can be a new beginning.</p>
      <p><strong>The Neem and Jaggery:</strong> Neem (bitter) and jaggery (sweet) eaten together represent the balance needed in life. We must accept difficulties with the same grace as we accept pleasures.</p>
      <p><strong>Cosmic Cycles:</strong> The concept of "yugadi" (beginning of an era) connects our personal New Year to cosmic time. We're reminded of our place in the vast cycles of creation.</p>
      <blockquote>"Each new year offers the possibility of new growth—may we have the wisdom to embrace both the sweet and bitter that come our way."</blockquote>
    `,
    traditions: ['Oil bath', 'New clothes', 'Ugadi Pachadi', 'Gudi raising', 'Panchanga reading', 'Temple visits'],
    foods: ['Ugadi Pachadi', 'Holige/Puran Poli', 'Bobbatlu', 'Pulihora', 'Payasam'],
    relatedDeities: ['Brahma', 'Vishnu'],
    themes: ['new beginnings', 'acceptance', 'victory', 'renewal', 'balance'],
    region: 'Telugu, Kannada, Marathi regions',
  },
];

// Helper function to get festival by ID
export function getFestivalById(id: string): Festival | undefined {
  return festivals.find(f => f.id === id);
}

// Get all festival IDs for static generation
export function getAllFestivalIds(): string[] {
  return festivals.map(f => f.id);
}
