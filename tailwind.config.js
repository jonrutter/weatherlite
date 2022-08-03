const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    transitionDuration: {
      DEFAULT: '300ms',
    },
    extend: {
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
        number: ['Nunito', ...defaultTheme.fontFamily.sans],
        heading: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        purple: {
          50: '#f6f4fa',
          100: '#eceaf6',
          200: '#d4cee8',
          300: '#b1a8d1',
          400: '#8d82b5',
          500: '#6d6293',
          600: '#5a527a',
          700: '#4d4667',
          800: '#423c58',
          900: '#1d1929',
        },
        teal: {
          50: '#f0f9ff',
          100: '#e1f7fe',
          200: '#c3eefd',
          300: '#96d3ee',
          400: '#5aaad8',
          500: '#3b98ce',
          600: '#2672a1',
          700: '#1a5d89',
          800: '#0e5781',
          900: '#141e24',
        },
        mint: {
          50: '#f0fff8',
          100: '#e6fef3',
          200: '#c5fce3',
          300: '#86eabd',
          400: '#4eda9b',
          500: '#32c884',
          600: '#00d1c0',
          700: '#009e91',
          800: '#008075',
          900: '#003833',
        },
      },
    },
  },
  plugins: [],
};
