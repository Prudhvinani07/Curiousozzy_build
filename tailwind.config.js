/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1E3D59',
        'primary-teal': '#4ECDC4',
        'primary-coral': '#FF6B6B',
        'primary-mint': '#95E1D3',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        // Add more custom fonts here
      }
    },
  },
  plugins: [],
}

