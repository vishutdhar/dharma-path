# Dharma Path

**Finally understand Hinduism** — A structured learning path for beginners and those reconnecting with their heritage.

![Version](https://img.shields.io/badge/version-1.0.0-saffron)
![License](https://img.shields.io/badge/license-MIT-blue)

## 🕉️ The Problem

Hinduism has no "page one." Christianity has Genesis 1:1. Islam has the opening of the Quran. But where does a Hindu begin?

There are 4 Vedas, 108+ Upanishads, 18 Puranas, 2 great epics, countless traditions... and no clear starting point.

**Dharma Path solves this.**

## ✨ Features

### Structured Learning Path
- **Level 1: The Foundation** — Core concepts (Dharma, Karma, Samsara, Moksha, Atman/Brahman)
- **Level 2: The Stories** — Ramayana and Mahabharata simplified
- **Level 3: The Gita** — Your "Bible" — chapter by chapter through the Bhagavad Gita
- **Level 4: Going Deeper** — Upanishads, Vedas, and different traditions

### Bhagavad Gita Reader
- All 18 chapters, 700 verses
- Sanskrit text with transliteration
- Multiple translations and commentaries
- Bookmark your favorite verses
- Daily "Verse of the Day"

### Progress Tracking
- Lesson completion tracking
- Streak counter for daily learning
- Achievement badges
- Overall progress visualization

### Glossary & Search
- Key terms explained (Dharma, Karma, Maya, etc.)
- Sanskrit with pronunciation
- Quick access to popular topics

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS with custom sacred color palette
- **Icons:** Lucide React
- **Data:** Bhagavad Gita API (vedicscriptures.github.io)
- **Storage:** localStorage for progress tracking
- **Deployment:** Ready for Vercel

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/dharma-path.git

# Navigate to the project
cd dharma-path

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
dharma-path/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Home page
│   │   ├── layout.tsx         # Root layout
│   │   ├── globals.css        # Global styles
│   │   ├── learn/             # Learning path pages
│   │   ├── gita/              # Bhagavad Gita reader
│   │   │   └── [chapter]/     # Dynamic chapter pages
│   │   ├── search/            # Search & glossary
│   │   └── profile/           # User profile & achievements
│   ├── components/            # Reusable UI components
│   │   ├── Navigation.tsx     # Bottom nav bar
│   │   ├── LevelCard.tsx      # Level display card
│   │   ├── VerseCard.tsx      # Gita verse display
│   │   └── ProgressRing.tsx   # Circular progress indicator
│   ├── data/
│   │   └── curriculum.ts      # Learning path structure
│   └── lib/
│       ├── api.ts             # Bhagavad Gita API integration
│       └── progress.ts        # Progress tracking utilities
├── public/                    # Static assets
├── tailwind.config.js         # Tailwind configuration
└── package.json
```

## 🎨 Design System

### Colors
- **Saffron** (#F97316) — Primary, sacred Hindu color
- **Gold** (#D4A54A) — Accents, dividers
- **Maroon** (#8A2241) — Secondary accent
- **Cream** (#FDF9F3) — Background

### Typography
- **Headings:** Playfair Display (serif, timeless)
- **Body:** Source Sans 3 (clean, readable)
- **Sanskrit:** Noto Sans Devanagari

## 📱 PWA Ready

The app is designed to work as a Progressive Web App:
- Responsive design for all screen sizes
- Offline-capable with localStorage progress
- Installable on mobile home screens

## 🔌 API Integration

Uses the free [Vedic Scriptures API](https://vedicscriptures.github.io/):
- All 700 verses of the Bhagavad Gita
- Multiple translations and commentaries
- Sanskrit text and transliteration

## 🗺️ Roadmap

### v1.1
- [ ] Audio pronunciation for Sanskrit verses
- [ ] Push notifications for daily verse
- [ ] Share progress on social media

### v1.2
- [ ] AI-powered "Ask Krishna" chatbot
- [ ] Hindi language support
- [ ] Offline mode improvements

### v2.0
- [ ] Native iOS and Android apps
- [ ] Community features
- [ ] Kids mode with stories and illustrations
- [ ] Video content integration

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Vedic Scriptures API](https://vedicscriptures.github.io/) for the Bhagavad Gita data
- [Ved Vyas Foundation](https://github.com/gita) for open-source scripture resources
- All the scholars and translators whose work makes this possible

---

Made with 🧡 for seekers everywhere.

*"You have the right to perform your duty, but you are not entitled to the fruits of your actions."*
— Bhagavad Gita 2.47
