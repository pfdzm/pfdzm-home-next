const colors = require('tailwindcss/colors')
const theme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
      xs: '256px',
      24: '24rem',
    },
    minWidth: {
      xs: '256px',
      24: '24rem',
    },
    ...theme,
    extend: {},
  },
  variants: {
    extend: {
      visibility: ['hover', 'focus'],
    },
  },
  plugins: [],
}
