/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}", 
],
  theme: {
    extend: {
      screens:{
        md: '800px'
      },
      colors:{
        primary: '#915EFF',
        dark: '#050816'
      }
    },
  },
  plugins: [],
}

