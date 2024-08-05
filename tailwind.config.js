/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors:{
        primaryColor: "#3955ea",
         secondaryColor: "yellow",
         thirdColor: "#FFF",

      }
    },

    fontFamily:{
      primaryFont: "Caveat"
    }
  },
  plugins: [],
}

