/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        primary: "#fcfcfc",
        secondary: "#183B4E",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}