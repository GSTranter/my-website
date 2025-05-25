// ./sanity.config.ts|js
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./src/sanity/schema";
import { presentationTool } from "sanity/presentation";
import { resolve } from "./src/sanity/lib/resolve";

export default defineConfig({
    title: "Netlify Astro Sanity",
    projectId: import.meta.env.PUBLIC_SANITY_STUDIO_PROJECT_ID,
    dataset: import.meta.env.PUBLIC_SANITY_STUDIO_DATASET,
    plugins: [
        structureTool(),
        // presentationTool({
        //     resolve,
        //     previewUrl: location.origin,
        // }),
    ],
    schema,
});