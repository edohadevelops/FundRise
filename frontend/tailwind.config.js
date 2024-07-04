/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#187070",
        tertiary: "#0b2929",
        subtle: "#fafafa"
      }
    },
  },
  plugins: [],
}

