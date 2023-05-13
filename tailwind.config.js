/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    "./public/**/*.html",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef9e8',
          100: '#d6efc6',
          200: '#bae4a1',
          300: '#9dd97a',
          400: '#86d15c',
          DEFAULT: '#70c83d',
          600: '#61b835',
          700: '#4ca42b',
          800: '#368f21',
          900: '#006d0c'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
}
