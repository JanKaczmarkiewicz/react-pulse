const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  pageExtensions: ["mdx", "tsx"],
};

module.exports = withMDX(config);
