/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Sacred saffron/amber palette
        saffron: {
          50: '#FFF8F0',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
        },
        // Deep maroon for accents
        maroon: {
          50: '#FDF2F4',
          100: '#FCE7EA',
          200: '#F9D0D7',
          300: '#F4A9B6',
          400: '#EC7B90',
          500: '#E04D6B',
          600: '#C73358',
          700: '#A52548',
          800: '#8A2241',
          900: '#6B1D35',
        },
        // Warm cream background
        cream: {
          50: '#FFFDFB',
          100: '#FDF9F3',
          200: '#FAF3E8',
          300: '#F5EAD8',
          400: '#EBDCC2',
          500: '#DCC9A6',
        },
        // Sacred gold
        gold: {
          400: '#D4A54A',
          500: '#C4963C',
          600: '#A67C2E',
        },
      },
      fontFamily: {
        // Elegant serif for headings - spiritual, timeless feel
        heading: ['Playfair Display', 'Georgia', 'serif'],
        // Clean sans for body - readable, modern
        body: ['Source Sans 3', 'system-ui', 'sans-serif'],
        // Sanskrit/Devanagari display
        sanskrit: ['Noto Sans Devanagari', 'sans-serif'],
      },
      backgroundImage: {
        // Subtle sacred geometry pattern
        'sacred-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A54A' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(249, 115, 22, 0.2)' },
          '100%': { boxShadow: '0 0 30px rgba(249, 115, 22, 0.4)' },
        },
      },
    },
  },
  plugins: [],
}
