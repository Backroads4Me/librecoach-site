// @ts-check
import { defineConfig } from "astro/config";
import Icons from "starlight-plugin-icons";
import UnoCSS from "unocss/astro";
import starlightThemeSix from "@six-tech/starlight-theme-six";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://LibreCoach.com",
  output: "static",

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
              'LibreCoach - Take Your RV Further • <a href="/community/about/">About</a> • <a href="/community/privacy/" target="_blank" rel="noopener">Privacy Policy</a>',
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
            icon: "facebook",
            label: "Facebook",
            href: "https://www.facebook.com/groups/librecoach/",
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
            items: [{ autogenerate: { directory: "start-here" } }],
          },
          {
            label: "Build",
            items: [{ autogenerate: { directory: "build" } }],
          },
          {
            label: "Configuration",
            items: [{ autogenerate: { directory: "configuration" } }],
          },
          {
            label: "Advanced Setup",
            items: [{ autogenerate: { directory: "advanced-setup" } }],
          },
          {
            label: "Community",
            items: [{ autogenerate: { directory: "community" } }],
          },
          {
            label: "Reference",
            items: [{ autogenerate: { directory: "reference" } }],
          },
        ],
      },
    }),
  ],

});
