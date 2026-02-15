/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryTitle: "#2d2d2d",
        primaryContent: "#4a4a4a",
        primarySubcontent: "#9b9b9b",
        primaryBase: "#f5f5f5",
        primaryAccent: "#c05621",
        primaryBg: "#fffaf0",
      },
    },
  },
  plugins: [],
};
