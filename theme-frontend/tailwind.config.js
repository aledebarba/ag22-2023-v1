/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    aspectRatio: false,
  },
    plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-clip-path')
  ],
  theme: {
    fontFamily: {
        display: [ "August", "Georgia", "serif"],
        serif: [ "Newsreader", "Arial", "sans-serif" ],
        sans: [ "Montserrat", "Helvetica", "Arial", "sans-serif" ]
    },   
    extend: {
        colors: {
          customPink: "#e85ca2",
          customBlue: "#61ebf5",
          customBlack: "#2d2d2d",   
          customRose: "#facada",
          customWhite: "#d8d8d8",
          customCoral: "#ff6d50",
          customGray: "#8d8d8d",
        }
      }
  },
  content: [
    "./src/_app.js",
    "./src/components/**/*.js",
    "./src/components/**/*.jsx",
    "./src/pages/**/*.js",
    "./src/pages/**/*.jsx",
    "./src/styles/*.css",
    "./src/styles/*.pcss",
    "./src/styles/*.scss",
]
}