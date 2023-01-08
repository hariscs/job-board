/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: { body: '0.938rem' },
      colors: {
        primary: 'hsl(180, 29%, 50%)',
        secondary: 'hsl(180, 14%, 20%)',
        tertiary: 'hsl(180, 52%, 96%)',
        lightCyan: '#edf6f3',
        lightGrayishCyan: 'hsl(180, 31%, 95%)',
        darkGrayishCyan: 'hsl(180, 8%, 52%)',
      },
    },
    fontFamily: {
      sans: ['var(--font-leagueSpartan)'],
    },
  },
  plugins: [],
}
