# Dharma Path

**Finally understand Hinduism** — A structured learning path for beginners and those reconnecting with their heritage.

![Version](https://img.shields.io/badge/version-1.0.0-saffron)
![License](https://img.shields.io/badge/license-MIT-blue)

**Live at:** [mydharmapath.com](https://mydharmapath.com)

## The Problem

Hinduism has no "page one." Christianity has Genesis 1:1. Islam has the opening of the Quran. But where does a Hindu begin?

There are 4 Vedas, 108+ Upanishads, 18 Puranas, 2 great epics, countless traditions... and no clear starting point.

**Dharma Path solves this.**

## Features

### Structured Learning Path (110 lessons, 8 levels)
- **Level 1: The Foundation** — Core concepts (Dharma, Karma, Samsara, Moksha, Atman/Brahman)
- **Level 2: The Stories** — Ramayana and Mahabharata simplified
- **Level 3: The Gita** — Chapter by chapter through the Bhagavad Gita
- **Level 4: Going Deeper** — Upanishads, Vedas, and different traditions
- **Level 5: The Puranas** — Bhagavata, Shiva, and Devi Puranas
- **Level 6: Study the Gita** — Read all 18 chapters verse-by-verse
- **Level 7: Study the Upanishads** — Read the 10 principal Upanishads
- **Level 8: Study the Vedic Hymns** — Read the sacred mantras

### Scripture Reader (Verse-by-Verse)
- **Bhagavad Gita** — All 18 chapters, 700 verses
- **Upanishads** — All 13 principal texts, 688 verses
- **Vedic Hymns** — 6 key hymns (Gayatri, Nasadiya, Purusha, Agni, Sri, Shanti)

### Progress Tracking
- Lesson completion tracking
- Streak counter for daily learning
- Achievement badges
- Cloud sync with Supabase (optional sign-in)
- Overall progress visualization

### Additional Features
- **Festival Guide** — 14 Hindu festivals with meanings and celebrations
- **Search** — Full-text search across all content
- **Daily Verse of the Day** — Rotating Gita verses
- **Bookmarks** — Save favorite verses
- **Dark Mode** — Eye-friendly reading

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS with custom sacred color palette
- **Icons:** Lucide React
- **Backend:** Supabase (auth, database, cloud sync)
- **Data:** Bhagavad Gita API + custom scripture data
- **Testing:** Vitest (unit) + Playwright (E2E)
- **Linting:** ESLint with TypeScript
- **Deployment:** Vercel

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/vishutdhar/dharma-path.git

# Navigate to the project
cd dharma-path

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run test         # Run unit tests (watch mode)
npm run test:run     # Run unit tests (single run)
npm run test:e2e     # Run Playwright E2E tests
```

## Project Structure

```
dharma-path/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Home page
│   │   ├── layout.tsx         # Root layout with SEO
│   │   ├── learn/             # Learning path pages
│   │   ├── gita/              # Bhagavad Gita reader
│   │   ├── upanishads/        # Upanishads reader
│   │   ├── vedas/             # Vedic hymns reader
│   │   ├── festivals/         # Festival guide
│   │   ├── search/            # Search page
│   │   └── profile/           # User profile & settings
│   ├── components/            # Reusable UI components
│   ├── data/
│   │   ├── curriculum.ts      # Learning path structure
│   │   ├── lessonContent.ts   # Lesson HTML content
│   │   ├── chapters/          # Gita chapter data
│   │   ├── upanishads/        # Upanishad data
│   │   ├── vedas/             # Vedic hymn data
│   │   └── festivals.ts       # Festival data
│   └── lib/
│       ├── api.ts             # Bhagavad Gita API
│       ├── auth.tsx           # Auth context
│       ├── progress.ts        # Progress tracking
│       ├── search.ts          # Search functionality
│       ├── supabase.ts        # Supabase client
│       └── sync.ts            # Cloud sync logic
├── e2e/                       # Playwright E2E tests
├── public/                    # Static assets
└── package.json
```

## Design System

### Colors
- **Saffron** (#F97316) — Primary, sacred Hindu color
- **Gold** (#D4A54A) — Accents, dividers
- **Maroon** (#8A2241) — Secondary accent
- **Cream** (#FDF9F3) — Background

### Typography
- **Headings:** Playfair Display (serif, timeless)
- **Body:** Source Sans 3 (clean, readable)
- **Sanskrit:** Noto Sans Devanagari

## SEO

The app includes comprehensive SEO:
- Dynamic meta tags for all pages
- Open Graph images
- JSON-LD structured data
- XML sitemap (868+ pages)
- robots.txt

## Support the Project

Dharma Path is free for everyone. Support development:
- **International:** [Stripe Donation](https://donate.stripe.com/fZuaEW12G7NY3iEaod8g000)
- **India:** UPI (available in-app)

## Roadmap

### Completed
- [x] 8 levels, 110 lessons
- [x] Bhagavad Gita reader (18 chapters)
- [x] Upanishads reader (13 texts)
- [x] Vedic Hymns reader (6 hymns)
- [x] Festival guide (14 festivals)
- [x] Cloud sync with Supabase
- [x] SEO foundation
- [x] ESLint setup
- [x] Unit + E2E tests

### Up Next
- [ ] Razorpay integration for India donations
- [ ] Audio pronunciation for Sanskrit
- [ ] Push notifications for daily verse
- [ ] Hindi language support

### Future
- [ ] AI-powered "Ask Krishna" chatbot
- [ ] Native iOS and Android apps
- [ ] Community features
- [ ] Kids mode with stories

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Run tests (`npm run test:run && npm run test:e2e`)
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgments

- [Vedic Scriptures API](https://vedicscriptures.github.io/) for Bhagavad Gita data
- [Ved Vyas Foundation](https://github.com/gita) for open-source scripture resources
- All the scholars and translators whose work makes this possible

---

Made with love for seekers everywhere.

*"You have the right to perform your duty, but you are not entitled to the fruits of your actions."*
— Bhagavad Gita 2.47
