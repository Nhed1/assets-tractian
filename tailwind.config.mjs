/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          400: '#D8DFE6',
          600: '#77818C',
          800: '#24292F'
        },
        blue: {
          500: '#2188FF',
          700: '#023B78',
          900: '#17192D'
        },
        red: '#ED3833',
        green: '#52C41A'
      }
    }
  },
  plugins: []
}
