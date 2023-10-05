/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    './src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    fontFamily: {
      primary: 'Poppins',
      secondary: 'Rajdhani',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary:'#66BB69',
        secondary: '#4CAF4F'
      },
    },
  },
  plugins: [],
}

