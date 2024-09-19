// See https://observablehq.com/framework/config for documentation.
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { join } from "node:path/posix";

const SITE_NAME = "Open Maps Meeting";
const HTTP_ROOT = "https://tu-delft-heritage.github.io/openmapsmeeting/";
const SRC_ROOT = "src";

export default {
  // The app’s title; used in the sidebar and webpage titles.
  title: SITE_NAME,

  // The pages and sections in the sidebar. If you don’t specify this option,
  // all pages will be listed in alphabetical order. Listing pages explicitly
  // lets you organize them into sections and have unlisted pages.
  pages: [
    { name: "Introduction", path: "/introduction" },
    { name: "Practical information", path: "/practical" },
    { name: "Programme", path: "/programme" },
    { name: "Register", path: "/register" },
  ],

  // Content to add to the head of the page, e.g. for a favicon:
  head,

  // The path to the source root.
  root: "src",

  // Some additional configuration options and their defaults:
  style: "custom-style.css",
  // theme: "glacier", // try "light", "dark", "slate", etc.
  // header: "", // what to show in the header (HTML)
  footer:
    'Design by <a href="https://luukvandeven.nl/">Luuk van de Ven</a>. Built with <a href="https://observablehq.com/framework/">Observable Framework</a>.', // what to show in the footer (HTML)
  // sidebar: true, // whether to show the sidebar
  // toc: true, // whether to show the table of contents
  pager: false, // whether to show previous & next links in the footer
  // output: "dist", // path to the output root for build
  // search: true, // activate search
  // linkify: true, // convert URLs in Markdown to links
  // typographer: false, // smart quotes and other typographic improvements
  // cleanUrls: true, // drop .html from URLs
};

function head({ path, title }) {
  return `<meta property="og:title" content=${JSON.stringify(
    title ?? SITE_NAME
  )}>
  <meta property="og:description" content="Open Maps Meeting: November 5 & 6 2024 at the Dutch National Archives and National Library" />
  ${og_image()}`;
}

// From:
// https://github.com/observablehq/framework/discussions/1199#discussioncomment-10624165
// https://github.com/fil/pangea/blob/main/observablehq.config.ts#L97

function og_image() {
  try {
    // computes the same hash as framework 🌶
    const contents = readFileSync(join(SRC_ROOT, `assets/hero.jpg`));
    const key = createHash("sha256").update(contents).digest("hex").slice(0, 8);
    const esc_img = JSON.stringify(`${HTTP_ROOT}_file/assets/hero.${key}.jpg`);
    return `<link href="/assets/hero.jpg">
<meta property="og:image" content=${esc_img} />
<meta property="twitter:image" content=${esc_img} />
`;
  } catch (error) {
    return "";
  }
}
