import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://inchiefprinting.github.io",
  base: "/MainWebsite",
  output: "static",
  vite: {
    plugins: [tailwindcss()],  
  },
});
