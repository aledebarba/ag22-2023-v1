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
        sans: [ "Archivo", "Helvetica", "Arial", "sans-serif" ]
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
          primary: {
            DEFAULT: `#E62337`,
            50: '#FFB4AA',
            100: '#FF9D95',
            200: '#FF8580',
            300: '#FF6E6C',
            400: '#FF5558',
            500: '#FA3B45',
            600: '#E01A33',
            700: '#C60021',
            800: '#AC0011',
            900: '#930000',
          },
          secondary: {
            DEFAULT: '#413f41',
            900: '#3a383a',
            800: '#4d4b4d',
            700: '#605e60',
            600: '#737173',
            500: '#888688',
            400: '#9d9a9d',
            300: '#b2b0b2',
            200: '#c8c6c8',
            100: '#dedcde',
            50: '#f5f3f5'
          }
        },
        fontSize: {
          'body': [ '1.25rem', {
            lineHeight: '1.75rem',
            letterSpacing: '0.02em',
            fontWeight: '300',
          }],
          'button': [ '1rem', {
            lineHeight: '1rem',
            letterSpacing: '0em',
            fontWeight: '700',
          }],
          'caption': [ '0.75rem', {
            lineHeight: '0.875rem',
            letterSpacing: '0em',
            fontWeight: '300',
          }],
          'overline': [ '0.625rem', {
            lineHeight: '0.75rem',
            letterSpacing: '0em',
            fontWeight: '300',
          }],
          'h1': [ '3.5rem', {
            lineHeight: '3.75rem',
            letterSpacing: '0em',
          }],
          'h2': [ '3rem', {
            lineHeight: '3.5rem',
            letterSpacing: '0em',
            fontWeight: '600',
          }],
          'h3': [ '2.5rem', {
            lineHeight: '2.75rem',
            letterSpacing: '0em',
            fontWeight: '500',
          }],
          'h4': [ '2rem', {
            lineHeight: '2.25em',
            letterSpacing: '0em',
            fontWeight: '400',
          }],
          'h5': [ '1.5rem', {
            lineHeight: '1.75rem',
            letterSpacing: '0em',
            fontWeight: '300',
          }],
          'h6': [ '1.25rem', {
            lineHeight: '1.5rem',
            letterSpacing: '0em',
            fontWeight: '300',
          }],
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