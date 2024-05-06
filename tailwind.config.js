/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#ffb703",
      github: "#023047",
      darkblue: "#1c1e53",
      black: "#000000",
      white: "#ffffff",
    },
  },
  plugins: [require("tailwindcss-elevation")],
};
