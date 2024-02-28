/** @type {import('tailwindcss').Config} */

// add opactiy channel to colors
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !==undefined) {
      return `hsla(var(${variableName}), ${opacityValue})`
    }
    return `hsl(var(${variableName}))`
  }
}

export default {
  darkMode: 'class', // or 'media' or 'class'
  content: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
        '4xl': '2560px',
        '5xl': '3160px',
        '6xl': '3830px',
        '7xl': '4564px',
      },
      colors: {
        'upstore-primary-400': withOpacity('--color-upstore-primary-400'),
        'upstore-primary-500': withOpacity('--color-upstore-primary-500'),
        'upstore-primary-600': withOpacity('--color-upstore-primary-600'),
        'upstore-grey-100': withOpacity('--color-upstore-grey-100'),
        'upstore-grey-200': withOpacity('--color-upstore-grey-200'),
        'upstore-grey-400': withOpacity('--color-upstore-grey-400'),
        'upstore-grey-500': withOpacity('--color-upstore-grey-500'),
        'upstore-grey-600': withOpacity('--color-upstore-grey-600'),
        'upstore-grey-700': withOpacity('--color-upstore-grey-700'),
        'upstore-grey-800': withOpacity('--color-upstore-grey-800'),
        'upstore-grey-900': withOpacity('--color-upstore-grey-900'),
        'upstore-icon-bg': withOpacity('--color-upstore-icon-bg'),
        'upstore-pdt-flirt': withOpacity('--color-upstore-pdt-flirt'),
        'upstore-pdt-banana': withOpacity('--color-upstore-pdt-banana'),
        'upstore-pdt-silver': withOpacity('--color-upstore-pdt-silver'),
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        hover: {
          '0%': { transform: 'translateY(0)'},
          '30%': { transform: 'translateY(-20px)'},
          '60%': { transform: 'translateY(0)'},
          '90%': { transform: 'translateY(20px)'},
        },
        hoverIcon: {
          '0%': { transform: 'translateY(0)'},
          '30%': { transform: 'translateY(-2px)'},
          '60%': { transform: 'translateY(0)'},
          '90%': { transform: 'translateY(2px)'},
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        flyIn: {
          '0%': { transform: 'translateX(70px)', opacity: 0 },
          '95%': { transform: 'translateX(0)', opacity: 100 },
        },
        flyOut: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      animation: {
        hover: 'hover 1.5s linear infinite',
        hoverIcon: 'hoverIcon 1s linear infinite',
        wave: 'wave 2s linear infinite',
        flyIn: 'flyIn 0.4s linear',
        flyOut: 'flyOut 0.1s linear',
      }
    },
  },
  plugins: [],
}

