/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',           // This will include all HTML files in the root folder.
    './src/**/*.{html,js}' // This will include all HTML and JS files in the src folder and any subdirectories.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
