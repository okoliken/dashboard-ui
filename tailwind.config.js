/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        text: [
          {
            10: '#646668'
          }
        ]
      }
    }
  },
  plugins: []
}

