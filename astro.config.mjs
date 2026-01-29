// @ts-check
import { defineConfig } from "astro/config";
import Icons from "starlight-plugin-icons";
import UnoCSS from "unocss/astro";
import cloudflare from "@astrojs/cloudflare";
import starlightThemeSix from "@six-tech/starlight-theme-six";

// https://astro.build/config
export default defineConfig({
  site: "https://LibreCoach.com",

  integrations: [
    UnoCSS(),
    Icons({
      starlight: {
        title: "LibreCoach",
        plugins: [
          starlightThemeSix({
            //optional
            footerText:
              "LibreCoach - Smart, Local Control for Your RV | [GitHub](https://github.com/Backroads4Me) | [Community Forum](https://forum.LibreCoach.com) | [Privacy Policy](/community/privacy/) | [Disclaimer](/community/disclaimer/)",
          }),
        ],
        customCss: ["./src/styles/custom.css"],
        components: {
          Card: "starlight-plugin-icons/components/Card.astro",
        },
        favicon: "/icons/favicon-64.png",
        logo: {
          src: "./public/logo.svg",
          replacesTitle: false,
        },
        lastUpdated: false,
        editLink: {
          baseUrl: "https://github.com/Backroads4Me/librecoach-site/edit/main/",
        },
        social: [
          {
            icon: "github",
            label: "GitHub",
            href: "https://github.com/Backroads4Me",
          },
          {
            icon: "discourse",
            label: "Community Forum",
            href: "https://forum.LibreCoach.com",
          },
        ],
        sidebar: [
          {
            label: "Start Here",
            autogenerate: { directory: "start-here" },
          },
          {
            label: "Build",
            autogenerate: { directory: "build" },
          },
          {
            label: "Configuration",
            autogenerate: { directory: "configuration" },
          },
          {
            label: "User Guide",
            autogenerate: { directory: "user-guide" },
          },
          {
            label: "Advanced Setup",
            autogenerate: { directory: "advanced-setup" },
          },
          {
            label: "Community",
            autogenerate: { directory: "community" },
          },
          {
            label: "Reference",
            autogenerate: { directory: "reference" },
          },
          {
            label: "Troubleshooting",
            autogenerate: { directory: "troubleshooting" },
          },
        ],
      },
    }),
  ],

  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
    imageService: "compile",
  }),
});
