/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
	theme: {
    extend: {
      colors:{
        Beige: "#fff6e5",
        darkRed :"#610a0a",
        darkOrange :"#f26321",
        orangeYellow :"#f26321",
      }
    },
  },
  plugins: [],
}

