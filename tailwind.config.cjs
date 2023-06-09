/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      blue: {
        100: "#CCD9FF",
        200: "#A1B2E5",
        300: "#8298D9",
        400: "#6078BF",
        500: "#425BA6",
        600: "#28418C",
        700: "#172E73",
        800: "#0C2366",
        900: "#021859",
      },
      pink: "#ff49db",
      orange: {
        100: "#FFE5CC",
        200: "#FFD8B2",
        300: "#FFCB99",
        400: "#FABA7D",
        500: "#F5AA62",
        600: "#F39433",
        700: "#F08723",
        800: "#E5770E",
        900: "#CC6400",
      },
      green: {
        200: "#99FFC2",
        300: "#78F0A8",
        400: "#47CC7C",
        500: "#7ACC87",
        600: "#4BAF5A",
        700: "#268034",
      },
      red: {
        500: "#FF6666",
        600: "#FD4646",
        700: "#CC2929",
      },
      "gray-dark": "#30343e",
      gray: {
        100: "#F7F8F9",
        200: "#E1E4E8",
        300: "#C9CED6",
        500: "#A7AEBB",
        700: "#8A94A6",
        900: "#191D26",
      },
      "gray-light": "#f0f3ff",
      transparent: "transparent",
      white: "#fff",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
