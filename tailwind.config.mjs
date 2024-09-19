/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
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
