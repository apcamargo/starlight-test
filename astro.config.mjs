// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://apcamargo.github.io",
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
          autogenerate: { directory: "guides" },
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
