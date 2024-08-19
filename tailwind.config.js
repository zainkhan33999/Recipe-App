/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E5B000', 
        secondry:"#374151",
      },
      fontFamily: {
     
        primary: ['Edu VIC WA NT Beginner', 'sans-serif'],
        secondry: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
