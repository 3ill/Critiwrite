/** @type {import('tailwindcss').Config} */
export default {
  content: ['.index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: '#2A292B',
      secondary: '#E6DCC6',
    },
    fontFamily: {
      work: ['Work Sans', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
};
