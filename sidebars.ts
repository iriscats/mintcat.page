/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
import path from "path";

import { getChangelogItemsSync } from "@nullbot/docusaurus-plugin-changelog";

import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const changelogPath = path.join(__dirname, "src/changelog/changelog.md");
const changelogItems = getChangelogItemsSync(changelogPath, 10);

const sidebars: SidebarsConfig = {
  tutorial: [
    {
      type: "category",
      label: "开始",
      collapsible: false,
      items: ["index"],
    }
  ],
  changelog: [
    {
      type: "category",
      label: "更新日志",
      collapsible: false,
      items: changelogItems.map<{ type: "link"; label: string; href: string }>(
        (chunk, index) => ({
          type: "link",
          label: chunk[0]!.title,
          href: `/changelog/${index > 0 ? index.toString() : ""}`,
        })
      ),
    },
  ],
};

export default sidebars;
