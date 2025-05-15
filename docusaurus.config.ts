import { themes} from "prism-react-renderer";

import type { Config } from "@docusaurus/types";
import type { Options as ChangelogOptions } from "@nullbot/docusaurus-plugin-changelog";
import type * as Preset from "@nullbot/docusaurus-preset-nonepress";

// color mode config
const colorMode: Preset.ThemeConfig["colorMode"] = {
  defaultMode: "light",
  respectPrefersColorScheme: true,
};

// navbar config
const navbar: Preset.ThemeConfig["navbar"] = {
  title: "MintCat",
  logo: {
    alt: "MintCat",
    src: "icon.ico",
    href: "/",
    target: "_self",
    height: 32,
    width: 32,
  },
  hideOnScroll: false,
  items: [
  ],
};

// footer config
const footer: Preset.ThemeConfig["footer"] = {
  style: "light",
  logo: {
    alt: "MintCat",
    src: "icon.ico",
    href: "/",
    target: "_self",
    height: 32,
    width: 32,
  },
  copyright: `Copyright © ${new Date().getFullYear()} MintCat. All rights reserved.`,
  links: [
    {
      title: "Learn",
      items: [
        { label: "Introduction", to: "/docs/" },
      ],
    }
  ],
};

// prism config
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const prism: Preset.ThemeConfig["prism"] = {
  theme: lightCodeTheme,
  darkTheme: darkCodeTheme,
  additionalLanguages: ["docker", "ini"],
};

// algolia config
const algolia: Preset.ThemeConfig["algolia"] = {
  appId: "X0X5UACHZQ",
  apiKey: "ac03e1ac2bd0812e2ea38c0cc1ea38c5",
  indexName: "nonebot",
  contextualSearch: true,
};

// nonepress config
const nonepress: Preset.ThemeConfig["nonepress"] = {
  tailwindConfig: require("./tailwind.config"),
  navbar: {
    docsVersionDropdown: {
      dropdownItemsAfter: [
        {
          label: "0.2.x",
          href: "https://github.com/trumank/mint",
        },
        {
          label: "0.3.x",
          href: "https://github.com/iriscats/mintcat",
        },
      ],
    },
    socialLinks: [
      {
        icon: ["fab", "github"],
        href: "https://github.com/iriscats/mintcat",
      },
    ],

  },
  footer: {
    socialLinks: [
      {
        icon: ["fab", "github"],
        href: "https://github.com/iriscats/mintcat",
      },
      {
        icon: ["fab", "qq"],
        href: "https://qm.qq.com/q/ex0ylyy7wk",
      }
    ],
  },
};

// theme config
const themeConfig: Preset.ThemeConfig = {
  colorMode,
  navbar,
  footer,
  prism,
  algolia,
  nonepress,
};

export default async function createConfigAsync() {
  return {
    title: "MintCat",
    tagline: "Unreal Engine Mod 管理工具",
    favicon: "icons/favicon.ico",

    // Set the production url of your site here
    url: "https://mintcat.v1st.net",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: process.env.BASE_URL || "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "mintcat", // Usually your GitHub org/user name.
    projectName: "mintcat", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
      defaultLocale: "zh-Hans",
      locales: ["zh-Hans"],
    },

    presets: [
      [
        "@nullbot/docusaurus-preset-nonepress",
        /** @type {import('@nullbot/docusaurus-preset-nonepress').Options} */
        {
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            // Please change this to your repo.
            editUrl: "https://github.com/iriscats/mintcat",
            showLastUpdateAuthor: true,
            showLastUpdateTime: true,
          },
          sitemap: {
            changefreq: "daily",
            priority: 0.5,
          },
          gtag: {
            trackingID: "G-MRS1GMZG0F",
          },
        },
      ],
    ],

    future: {
      experimental_faster: true,
    },

    plugins: [
      require("./src/plugins/webpack-plugin.ts"),
      [
        "@nullbot/docusaurus-plugin-changelog",
        {
          changelogPath: "docs/changelog/changelog.md",
          changelogHeader: `description: Changelog
toc_max_heading_level: 2
sidebar_custom_props:
  sidebar_id: changelog
  sidebar_version: current`,
        } satisfies ChangelogOptions,
      ],
    ],

    markdown: {
      mdx1Compat: {
        headingIds: true,
      },
    },

    themeConfig,
  } satisfies Config;
}
