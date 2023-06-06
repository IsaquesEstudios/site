/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: {
          100: "#dfdfdf",
          200: "#bbbcbd",
          300: "#989a9b",
          400: "#77797b",
          500: "#393d40",
          600: "#333739",
          700: "#181819",
          800: "rgb(19,19,19)",
          900: "#0e0e0e"
        },
        yellow: {
          500: "#FAD200",
          600: "#FFDA2A",
          700: "#EAD13D",
          800: "#E8BD00",
          900: "#EA9C00"
        },
        white: {
          900: "#ffffff"
        }
      },
      spacing: {
        px: '1px',
        0: '0',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
        100: '28rem',
        104: '32rem'
      },
      screens: {
        'wide-tablet': {'max':'1450px'},
        'tablet':{'max':'1100px'},
        'mobile':{'max':'768px'},
        'min-mobile':{'max':'527px'}
      },
      gradientMenu: {
        grad: 'linear-gradient(106deg, rgba(51,55,57,1) 0%, rgba(24,24,25,1) 48%, rgba(51,55,57,1) 100%)'
      }
    },
  },
  plugins: [],
}
