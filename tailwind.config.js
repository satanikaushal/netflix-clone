/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{js,jsx,ts,tsx}',
'./src/HomeComponents/*.js'],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
