import { defineConfig } from "astro/config";

// https://astro.build/config
import svelte from "@astrojs/svelte";
import { threeMinifier } from "@yushijinhun/three-minifier-rollup";

// https://astro.build/config
export default defineConfig({
  markdown: {
    syntaxHighlight: "prism",
  },
  site: "https://abban-fahim.github.io/",
  // base: "/personal-site",
  integrations: [svelte()],
  vite: {
    plugins: [threeMinifier()],
  },
});
