// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://LibreCoach.com",

  integrations: [
    starlight({
      title: "Libre Coach",
      favicon: "/favicon-64x64.png",
      logo: {
        src: "./src/assets/logo.svg",
        replacesTitle: true,
      },
      lastUpdated: true,
      editLink: {
        baseUrl: "https://github.com/Backroads4Me/libre-coach-site/edit/main/",
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
    }),
  ],

  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
    imageService: "compile",
  }),
});
