/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mont': ['Montserrat', 'Arial', 'sans-serif']
      },
      colors: {
        primary: '#1e6cd9',
        'primary-hover': '#125ec7',
      }
    },
  },
  plugins: [],
}