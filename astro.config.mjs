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
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
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
      // Set Portuguese as default language for this site
      defaultLocale: 'pt-br',
      locales: {
        pt-br: { label: 'Português', }
        en:    { label: 'English', }
      },
    }),
  ],
});
