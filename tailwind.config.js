/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // Adjust paths if needed
  theme: {
    extend: { fontFamily: {title:["Bebas Neue", "serif"] } },
  },
  plugins: [],
};