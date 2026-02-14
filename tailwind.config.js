/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryTitle: '#213448',
        primaryContent: '#213448',
        primarySubcontent: '#547792',
        primaryBase: '#F6F6F6',
        primaryAccent: '#94B4C1',
        primaryBg: '#EAE0CF',
      }
    },
  },
  plugins: [],
}

