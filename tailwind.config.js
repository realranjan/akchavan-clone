/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ivory': '#FFFFF0',
        'persian-green': '#06B6D4',
        'emperor': '#535353',
        'dove-gray': '#666666',
      },
      fontFamily: {
        'semantic-heading-1': ['Instrument Serif', 'serif'],
        'semantic-heading-2': ['Geist', 'sans-serif'],
      },
    },
  },
  plugins: [],
}