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
        primary: {
          light: '#93C5FD',
          DEFAULT: '#3B82F6',
          dark: '#1D4ED8',
        },
      },
    },
  },
  plugins: [],
}