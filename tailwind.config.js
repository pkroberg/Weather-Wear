/** @type {import('tailwindcss').Config} */
module.exports={
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'palette-green1': '#DAD7CD',
        'palette-green2': '#A3B18A',
        'palette-green3': '#588157',
        'palette-green4': '#3A5A40',
        'palette-green5': '#344E41',
      }
    },
  },
  plugins: [],
}