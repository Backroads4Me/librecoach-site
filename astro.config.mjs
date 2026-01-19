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
        title: "Libre Coach",
        plugins: [
          starlightThemeSix({
            //optional
            footerText: "Libre Coach - Smarthome Control for Your RV | [GitHub](https://github.com/Backroads4Me) | [Community Forum](https://forum.LibreCoach.com)",
          }),
        ],
        customCss: ["./src/styles/custom.css"],
        components: {
          Card: "starlight-plugin-icons/components/Card.astro",
        },
        favicon: "/favicon-64x64.png",
        logo: {
          src: "./src/assets/logo.svg",
          replacesTitle: false,
        },
        lastUpdated: false,
        editLink: {
          baseUrl:
            "https://github.com/Backroads4Me/libre-coach-site/edit/main/",
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
            label: "Introduction",
            autogenerate: { directory: "introduction" },
          },
          {
            label: "Installation Guide",
            autogenerate: { directory: "installation" },
          },
          {
            label: "Home Assistant Setup",
            autogenerate: { directory: "home-assistant" },
          },
          {
            label: "Reference",
            autogenerate: { directory: "reference" },
          },
          {
            label: "Troubleshooting",
            autogenerate: { directory: "troubleshooting" },
          },
          {
            label: "Community",
            autogenerate: { directory: "community" },
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
