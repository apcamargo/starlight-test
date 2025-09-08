// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { remarkHeadingId } from "remark-custom-heading-id";
import mermaid from "astro-mermaid";

// https://astro.build/config
export default defineConfig({
  site: "https://apcamargo.github.io",
  base: "/starlight-test",
  markdown: {
    rehypePlugins: [
      remarkHeadingId,
    ],
  },
  integrations: [
    mermaid(),
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
            { label: "Linux", slug: "guides/linux" },
            { label: "Resources", slug: "guides/resources" },
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
