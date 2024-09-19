// See https://observablehq.com/framework/config for documentation.
export default {
  // The app’s title; used in the sidebar and webpage titles.
  title: "Open Maps Meeting",

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
  head: ({ title }) =>
    `<link rel="icon" href="favicon.png" type="image/png" sizes="32x32">
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="Open Maps Meeting taking place at the Dutch National Archives and National Library on November 5 & 6 2024" />
    <meta property="og:image" content="./_file/assets/hero.jpg" />`,

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
