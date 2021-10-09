const colors = require("tailwindcss/colors") 

module.exports = {
  mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      primary: "#16161d",
      secondary: {
        DEFAULT: "#ff5757",
        dark: "#CB4646"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
