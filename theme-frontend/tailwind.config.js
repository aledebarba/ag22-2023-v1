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
          'body': [ '1rem', {
            lineHeight: '1.2',
            letterSpacing: '0.02em',
            fontWeight: '360',
          }],
          'menu': [ '1rem', {
            lineHeight: '1.2',
            letterSpacing: '0.02em',
            fontWeight: '360',            
          }],
          'button': [ '1rem', {
            lineHeight: '1rem',
            letterSpacing: '0em',
            fontWeight: '700',
          }],
          'caption': [ '0.75rem', {
            lineHeight: '0.875rem',
            letterSpacing: '0em',
            fontWeight: '360',
          }],
          'detail': [ '0.90rem', {
            lineHeight: '1.08rem',
            fontWeight: '380',
          }],
          'overline': [ '0.625rem', {
            lineHeight: '0.75rem',
            letterSpacing: '0em',
            fontWeight: '330',
          }],
          'h1': [ '3.5rem', {
            lineHeight: '3.75rem',
            letterSpacing: '0em',
          }],
          'h2': [ 'clamp(2rem, calc(1rem+2vw), 3rem)', {
            lineHeight: '1.2',
            letterSpacing: '0em',
            fontWeight: '600',
          }],
          'h3': [ 'clamp(2.2rem, 2.2vw, 2.5rem)', {
            lineHeight: '2.75rem',
            letterSpacing: '0em',
            fontWeight: '500',
          }],
          'h4': [ 'clamp(1.5rem, 1.5vw, 2rem)', {
            lineHeight: '2.25em',
            letterSpacing: '0em',
            fontWeight: '400',
          }],
          'h5': [ 'clamp(0.875rem, 1.0313rem + -0.7813vw, 0.09375rem);', {
            lineHeight: '1.75rem',
            letterSpacing: '0em',
            fontWeight: '300',
          }],
          'h6': [ '1.225rem', {
            lineHeight: '1.6rem',
            letterSpacing: '0em',
            fontWeight: '360',
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