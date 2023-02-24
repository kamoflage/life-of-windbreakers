/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors:{
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
    }

    font-family:{
        sans: ['Ariel', 'san-serif']
    }

    extend: {

    },
  },
  plugins: [],
  prefix: 'tw-';
}
