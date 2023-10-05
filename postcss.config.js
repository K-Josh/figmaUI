export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
      secondary: 'Rajdhani',
    },
    container: {
      padding: {
        DEFAULT: '18px',
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
      },
    },
  },
}
