/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'cursive'],
      },
      colors: {
        'retro-bg': '#0f380f',
        'retro-light': '#306230',
        'retro-lighter': '#8bac0f',
        'retro-lightest': '#9bbc0f',
        'retro-text': '#0f380f',
      },
      boxShadow: {
        'pixel': '4px 4px 0px 0px rgba(0, 0, 0, 0.25)',
        'pixel-lg': '8px 8px 0px 0px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in-out',
        'slideInUp': 'slideInUp 0.5s ease-out',
        'slideInDown': 'slideInDown 0.5s ease-out',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
