/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT")
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6ECCFF",
        accent: "#FFBCDD",
        background: "#F2F6FF",
        ampink: "#FFBCDD",
      },
      fontFamily: {
        headline: ["SF Pro Display"],
        sans: ["SF Pro Display", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        theme: {
          "base-100": "#ffffff", // dark or light theme
          primary: "#6eccff",
          secondary: "#ffbcdd",
          accent: "#1FB2A6",
          neutral: "#191D24",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  variants: {
    linearGradients: ["hover", "responsive"],
  },
})
