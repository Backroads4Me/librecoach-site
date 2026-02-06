// @ts-check
import { defineConfig } from "astro/config";
import Icons from "starlight-plugin-icons";
import UnoCSS from "unocss/astro";
import cloudflare from "@astrojs/cloudflare";
import starlightThemeSix from "@six-tech/starlight-theme-six";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://LibreCoach.com",

  integrations: [
    sitemap(),
    UnoCSS(),
    Icons({
      starlight: {
        title: "LibreCoach",
        head: [
          {
            tag: "meta",
            attrs: {
              property: "og:image",
              content: "https://LibreCoach.com/og-default.png",
            },
          },
          {
            tag: "meta",
            attrs: {
              name: "twitter:image",
              content: "https://LibreCoach.com/og-default.png",
            },
          },
          {
            tag: "meta",
            attrs: {
              name: "norton-safeweb-site-verification",
              content:
                "2CAFY2-JTFV318TRCA6HVVHXGVUKGXHZFW01BAVPJQXC4XQM-G31G3WKGL1MI-4FXXQNWN1BS41PYTT86QXOWS1IKORDUX990EUUDKXZ-XFZKZ6KW2T95YN9DL9J9LRM",
            },
          },
          {
            tag: "link",
            attrs: { rel: "sitemap", href: "/sitemap-index.xml" },
          },
        ],
        plugins: [
          starlightThemeSix({
            //optional
            footerText:
              'LibreCoach - Take Your RV Further • <a href="/community/about/">About</a> • <a href="https://discord.gg/VZCAESHn2h" target="_blank" rel="noopener">Discord Forum</a> • <a href="/community/privacy/" target="_blank" rel="noopener">Privacy Policy</a>',
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
          baseUrl: "https://github.com/backroads4me/librecoach-site/edit/main/",
        },
        social: [
          {
            icon: "github",
            label: "GitHub",
            href: "https://github.com/Backroads4Me/ha-addons",
          },
          {
            icon: "discord",
            label: "Discord",
            href: "https://discord.gg/VZCAESHn2h",
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
            label: "Support",
            autogenerate: { directory: "support" },
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
