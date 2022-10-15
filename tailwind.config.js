/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const tailwindColors = require("tailwindcss/colors")
const customColors = require("./styles/colors");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...customColors,
      ...tailwindColors
    },
    extend: {
      fontFamily: {
        sans: ["Dancing Script", ...defaultTheme.fontFamily.sans],
        serif: ["Josefin Slab", ...defaultTheme.fontFamily.serif],
        cursive: ["Heart of stone", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
