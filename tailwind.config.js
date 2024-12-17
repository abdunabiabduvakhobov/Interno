/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        NTSomic: ["NTSomic","sans-serif",],
      },
      fontFamily: {
        Roboto: ["Roboto","sans-serif",],
      },
      backgroundImage: {
        'primary-gradient' :" radial-gradient(50% 50% at 50% 50%, #EB9038 0%, #F3C0C6 33.85%, #F3C3CF 66.67%, #8DC4F3 100%);",
      },
    },
  },
  plugins: [],
}