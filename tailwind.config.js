/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "blue-facebook": "#1877f2",
        "gray-bg": "#f0f2f5",
        "green-btn": "#36A420"
      }, 
      spacing: {
        '580': "580px",
        "380": "380px",
      }
    },
  },
  plugins: [],
}

