/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        veryDarkBlue: 'hsl(233, 47%, 7%)',
        darkDesaturatedBlue: 'hsl(244, 38%, 16%)',
        softViolet: 'hsl(277, 64%, 61%)',
        white: 'hsl(0, 0%, 100%)',
        mainParagraph: 'hsla(0, 0%, 100%, 0.75)',
        statHeading: 'hsla(0, 0%, 100%, 0.6)',
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        Lexend: ['Lexend Deca', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

