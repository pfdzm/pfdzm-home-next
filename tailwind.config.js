const colors = require('tailwindcss/colors')
const { maxWidth, minWidth } = require('tailwindcss/defaultTheme')
const theme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    options: {
      safeList: ['transition-transform'],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    ...theme,
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: colors.blue,
      rose: colors.rose,
      white: colors.white,
      amber: colors.amber,
      gray: colors.warmGray,
    },
    fontFamily: {
      body: [
        'Poppins',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
    maxWidth: {
      ...maxWidth,
      xs: '256px',
      24: '24rem',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
    },
    minWidth: {
      ...minWidth,
      xs: '256px',
      24: '24rem',
    },

    extend: {},
  },
  variants: {
    extend: {
      visibility: ['hover', 'focus'],
    },
  },
  plugins: [],
}
