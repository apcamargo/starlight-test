// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://apcamargo.github.io/starlight-test/",
  base: "/starlight-test",
  integrations: [
    starlight({
      title: "CATG",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Pixi", slug: "guides/pixi" },
            { label: "Apptainer", slug: "guides/apptainer" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      customCss: [
        "@fontsource-variable/inter",
        "@fontsource-variable/inter/wght-italic.css",
        "@fontsource-variable/jetbrains-mono",
        "./src/styles/custom.css",
      ],
    }),
  ],
});
