/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        "sm": "480px" 
      },
      spacing: {
        "big": "40rem"
      },
      width: {
        "wider": "49%"
      }
    },
    fontFamily: {
      concertOne: ["Concert One", "sans-serif"]
    }
  },
  plugins: [],
}

