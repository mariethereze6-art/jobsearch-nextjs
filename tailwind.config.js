/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00C896",
          dark: "#00A67E",
          light: "#E9F9F3",
        },
        ink: {
          DEFAULT: "#0D0D0D",
          dark: "#0B2B26",
        },
        gray: {
          text: "#6B7280",
          light: "#F1F1F1",
          border: "#E5E7EB",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      borderRadius: {
        card: "12px",
      },
    },
  },
  plugins: [],
};