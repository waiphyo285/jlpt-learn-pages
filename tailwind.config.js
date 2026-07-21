import glassmorphism from 'tailwind-glassmorphism';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        japanRed: '#E64A19',
        japanRose: '#FF7043',
        japanDark: '#0f172a',
        sakuraPink: '#fce7f3',
        sakuraLight: '#fff5f7',
      },
      fontFamily: {
        sans: ['Quicksand', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(230, 74, 25, 0.08)',
        'glow': '0 0 20px rgba(230, 74, 25, 0.25)',
      }
    },
  },
  plugins: [
    glassmorphism
  ],
}
