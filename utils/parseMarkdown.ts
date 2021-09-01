import { serialize } from "next-mdx-remote/serialize";
import remarkHtml from "remark-html";
import remarkPrism from "remark-prism";

const markdownToHtml = async (markdown: string) =>
  serialize(markdown, {
    mdxOptions: {
      remarkPlugins: [remarkHtml, remarkPrism],
      rehypePlugins: [],
    },
  });

export default markdownToHtml;
