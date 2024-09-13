/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Jersey: ["Jersey 10", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Amsterdam: ["New Amsterdam", "sans-serif"]
      },
    },
  },
  plugins: [],
}