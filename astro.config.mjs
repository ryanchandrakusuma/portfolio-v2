import { defineConfig } from "astro/config";

// When deploying to GitHub Pages as https://<user>.github.io/<repo>/,
// set `site` to "https://<user>.github.io" and `base` to "/<repo>".
export default defineConfig({
  // site: "https://ryanchandrakusuma.github.io",
  // base: "/portfolio-v2",
  build: { format: "directory" },
});
