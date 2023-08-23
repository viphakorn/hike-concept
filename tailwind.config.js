/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#ff2e17",
        orange: "#ffae47",
        "light-gray": "#e0e0e0",
        silver: "#b0b1b3",
        gray: "#595b61",
        "dark-gray": "#2c2e35",
        midnight: "#202121",
      },
      fontFamily: {
        "labor-union": ["Labor Union", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        nickainley: ["Nickainley", "cursive"],
      },
    },
  },
  plugins: [],
}
