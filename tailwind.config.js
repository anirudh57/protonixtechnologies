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
            // Header tech gradient (brown → black)
            'header-from': '#1a1510',
            'header-to': '#0a0806',
            'header-border': '#2a221a',
            'header-text': '#e5e0d8',  // warm off-white, aligns with brown tones
        },
    },
  },
  plugins: [],
}
