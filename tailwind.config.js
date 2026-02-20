/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ['Mona-Sans-Light', 'sans-serif'],
        },
        colors: {
            // 'dg-dark': "#121212",
            'dg-dark': "#000",
            'dg-blue': '#72BBEF',
            'dg-outline': '#D9D9D9',
            'dg-light': '#CCCCCC',
            'dg-hero-hr': '#313131',
            'digient-dark': '#2e3be5',
            'digient-light': '#00cae5',
        },
    },
  },
  plugins: [],
}
