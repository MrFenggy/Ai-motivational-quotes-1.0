/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        primary: '#007AFF',
        secondary: '#5856D6',
        dark: {
          DEFAULT: '#000000',
          100: '#0A0B0E',
          200: '#16181D',
          300: '#16181D',
          500: '#0F1115',
          700: '#202125'
        }
      },
      backdropBlur: {
        'md': '12px'
      }
    },
  },
  plugins: [],
}