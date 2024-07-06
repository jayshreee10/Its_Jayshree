/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        LayoutBlue:"#111827",
        LayoutLinkedin : "#005E93",
        LayoutMessage:"#2E7546",
        Button :"#11243C" ,
      }
    },
  },
  plugins: [],
  
}

