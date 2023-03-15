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
          ag22Pink: "#e85ca2",
          ag22Blue: "#61ebf5",
          ag22Black: "#2d2d2d",   
          ag22Rose: "#facada",
          ag22White: "#d8d8d8",
          ag22Coral: "#ff6d50",
          ag22Gray: "#8d8d8d",
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