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
        ivory: '#FFFFF7',
        'persian-green': {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2'
        },
        emperor: {
          DEFAULT: '#555555',
          dark: '#E0E0E0'
        },
        'dove-gray': {
          DEFAULT: '#666666',
          dark: '#CCCCCC'
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s forwards',
        'ripple': 'ripple 1.5s ease-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(5px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        ripple: {
          '0%': { opacity: 0.7, transform: 'scale(1)' },
          '100%': { opacity: 0, transform: 'scale(1.5)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 0%' },
        },
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'card-dark': '0 4px 20px -2px rgba(0, 0, 0, 0.2)',
        'cyan-glow': '0 0 20px rgba(6, 182, 212, 0.25)',
      },
      transitionProperty: {
        'transform-opacity': 'transform, opacity',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}