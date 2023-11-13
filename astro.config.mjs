import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // site map
  site: "https://docs.astro.build/ja/",
  integrations: [sitemap()],

  server: {
    open: true,
  },

  vite: {
    build: {
      cssTraget: "safari14",
    },
  },
});
