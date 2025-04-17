/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",   // pour tout ce qui est React
    "./public/index.html",          // pour les classes dans le HTML
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
