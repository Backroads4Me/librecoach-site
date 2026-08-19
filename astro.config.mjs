// @ts-check
import { defineConfig } from "astro/config";
import Icons from "starlight-plugin-icons";
import UnoCSS from "unocss/astro";
import starlightThemeSix from "@six-tech/starlight-theme-six";

import sitemap from "@astrojs/sitemap";

// @six-tech/starlight-theme-six (latest as of 1.0.16) ships an invalid
// selector in styles/base.css: `:after :before` where it intends the
// pseudo-element reset `*::before, *::after`. lightningcss (Vite's CSS
// minifier) rejects it and fails the build, so correct the rule before it
// reaches the minifier. Remove this once fixed upstream.
function fixThemeSixBaseCss() {
  return {
    name: "fix-theme-six-base-css",
    enforce: "pre",
    transform(code, id) {
      if (!id.includes("starlight-theme-six") || !id.endsWith("base.css")) {
        return;
      }
      if (!code.includes(":after :before")) {
        return;
      }
      return {
        code: code.replace(/:after\s+:before/g, "*::before,\n  *::after"),
        map: null,
      };
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: "https://LibreCoach.com",
  output: "static",
  vite: {
    plugins: [fixThemeSixBaseCss()],
  },

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
