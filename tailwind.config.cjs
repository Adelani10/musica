/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        quickSand: " 'Quicksand', sans-serif;"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
