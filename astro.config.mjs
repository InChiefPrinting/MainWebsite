import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://inchiefprinting.github.io",
  base: "/",
  output: "static",
  vite: {
    plugins: [tailwindcss()],  
  },
});
