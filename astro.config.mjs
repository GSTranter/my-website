import { defineConfig } from "astro/config";
import sanityIntegration from "@sanity/astro";
import react from "@astrojs/react";
import { loadEnv } from "vite";
import netlify from "@astrojs/netlify";

const { PUBLIC_SANITY_STUDIO_PROJECT_ID, PUBLIC_SANITY_STUDIO_DATASET } = loadEnv( process.env.NODE_ENV, process.cwd(), '');

export default defineConfig({
    site: "https://george-tranter.netlify.app/",
    trailingSlash: "always",
    output: "server",
    integrations: [
        sanityIntegration({
          projectId: PUBLIC_SANITY_STUDIO_PROJECT_ID,
          dataset: PUBLIC_SANITY_STUDIO_DATASET,
          useCdn: false,
          studioBasePath: '/admin',
        }),
      react(),
    ],
    adapter: netlify(),
});