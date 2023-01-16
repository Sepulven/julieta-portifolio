/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./statics/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: true
  }
}