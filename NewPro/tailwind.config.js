/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'primary': "#23ae12",
        'anuj': 'green',
      },
      fontFamily : {
         'taha-font' : ["Inter", 'sans-serif']  
      }
    },
  },
  plugins: [],
}

