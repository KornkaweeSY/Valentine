/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rainbow1: {
          '0%, 100%': { color: '#FF69B4' },  // Hot Pink
          '25%': { color: '#FF1493' },       // Deep Pink
          '50%': { color: '#FF0066' },       // Strong Pink
          '75%': { color: '#FF69B4' },       // Hot Pink
        },
        rainbow2: {
          '0%, 100%': { color: '#FF1493' },  // Deep Pink
          '25%': { color: '#FF0066' },       // Strong Pink
          '50%': { color: '#FF69B4' },       // Hot Pink
          '75%': { color: '#FF1493' },       // Deep Pink
        },
        rainbow3: {
          '0%, 100%': { color: '#FF0066' },  // Strong Pink
          '25%': { color: '#FF69B4' },       // Hot Pink
          '50%': { color: '#FF1493' },       // Deep Pink
          '75%': { color: '#FF0066' },       // Strong Pink
        },
        rainbow4: {
          '0%, 100%': { color: '#FF69B4' },  // Hot Pink
          '25%': { color: '#FF0066' },       // Strong Pink
          '50%': { color: '#FF1493' },       // Deep Pink
          '75%': { color: '#FF69B4' },       // Hot Pink
        },
        rainbow5: {
          '0%, 100%': { color: '#FF0066' },  // Strong Pink
          '25%': { color: '#FF1493' },       // Deep Pink
          '50%': { color: '#FF69B4' },       // Hot Pink
          '75%': { color: '#FF0066' },       // Strong Pink
        },
        rainbow6: {
          '0%, 100%': { color: '#FF1493' },  // Deep Pink
          '25%': { color: '#FF69B4' },       // Hot Pink
          '50%': { color: '#FF0066' },       // Strong Pink
          '75%': { color: '#FF1493' },       // Deep Pink
        },
      },
      animation: {
        'rainbow-1': 'rainbow1 3s ease-in-out infinite',
        'rainbow-2': 'rainbow2 3s ease-in-out infinite',
        'rainbow-3': 'rainbow3 3s ease-in-out infinite',
        'rainbow-4': 'rainbow4 3s ease-in-out infinite',
        'rainbow-5': 'rainbow5 3s ease-in-out infinite',
        'rainbow-6': 'rainbow6 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
