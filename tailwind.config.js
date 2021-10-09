const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.gray
    },
    fontFamily: {
      sans: [ 'Red Hat Text', 'sans-serif' ],
      mono: [ 'Overpass Mono', 'monospace' ]
    }
  },
  variants: {},
  plugins: [
    '@tailwindcss/forms',
    '@tailwindcss/typography'
  ],
};

