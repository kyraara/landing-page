/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        dark: '#0f172a',
        you: '#64748b',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

