/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        'primary':["Poppins","sans-serif"],
        'secondary':["Syne","sans-serif"]
      },
      colors:{
        'heroBG':"#F4F1DE",
        'para':"rgb(0 0 0 / 80%)",
        'primary':"#F4F1DE",
        'secondary':"#E0E7DA",
        'coffee-brown':"#4B3621",
        'text':"#3C3C3C",
        'button':"#FBC02D"
        
      }
    },
  },
  plugins: [],
}

