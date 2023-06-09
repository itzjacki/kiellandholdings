/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-main": "url('/hero-main.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
