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
        "sw": "20%",
        "wd": "26%",
        "wide": "30%",
        "wider": "49%"
      },
      height: {
        "tall": "200%"
      },
    },
    fontFamily: {
      concertOne: ["Concert One", "sans-serif"]
    }
  },
  plugins: [],
}

