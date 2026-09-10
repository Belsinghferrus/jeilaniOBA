/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          maroon: {
            DEFAULT: '#660033', // Deep Maroon
            light: '#8A0044',
            dark: '#4A0025',
          },
          gold: {
            DEFAULT: '#D4AF37', // Accent for highlights
            light: '#E5C55A',
          },
          offwhite: '#F8F9FA',  // Background color
        },
        fontFamily: {
          // Ensure Tamil text is readable on all devices
          sans: ['Inter', 'Noto Sans Tamil', 'sans-serif'],
        }
      },
    },
    plugins: [],
  }