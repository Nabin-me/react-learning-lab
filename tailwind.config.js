/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      },
      colors: {
        primary: "#0F0F13",
        accent: "#D1E8FF",
      },
    },
  },
  plugins: [],
};
