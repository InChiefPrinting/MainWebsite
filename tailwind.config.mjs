/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,ts,jsx,tsx,vue,svelte}"
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          black: "#0A0A0A",
          dark: "#111111",
          gray: "#1F1F1F",
          light: "#F5F5F5",
          blue: "#2563EB"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      }
    },
  },
  plugins: [],
};