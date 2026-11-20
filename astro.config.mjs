import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// The site lives at https://jefo.github.io/portfolio/.
// Change `base` to "/" when it moves to a root domain.
export default defineConfig({
  site: "https://jefo.github.io",
  base: "/portfolio/",
  trailingSlash: "always",
  outDir: "./docs",
  build: { format: "directory", inlineStylesheets: "never" },
  vite: { plugins: [tailwindcss()] },
});
