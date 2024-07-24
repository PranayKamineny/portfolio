/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#2AAA8A",
        "secondary" : "#B2BEB5",
        "tertiary" : "#000000"
      }
    },
    screens: {
      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}