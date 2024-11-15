/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'vsm': '400px', // Add this custom screen size
      ...require('tailwindcss/defaultTheme').screens, // Keep the existing default screens
    },
    extend: {
      'main-bg': "url('/assets/bg.png')",
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ["Montserrat", 'sans-serif'],
      },
    },
  },
  plugins: [],
}

