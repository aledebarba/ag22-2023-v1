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