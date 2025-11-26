/** @type {import('tailwindcss').Config} */
export default {
  // Forteller Tailwind hvor den skal lete etter klasser. 
  // Dette er viktig for at Tailwind skal fungere optimalt med Astro.
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}', 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}