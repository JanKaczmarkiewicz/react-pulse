import path from "path";
import { promises as fs } from "fs";

import matter from "gray-matter";
import { AwaitReturnType } from "./types";

const PATH_TO_ARTICLES = path.join(process.cwd(), "articles");

export const getPostBySlug = async (slug: string) => {
  const fullPath = path.join(PATH_TO_ARTICLES, slug, `index.mdx`);
  const fileContents = await fs.readFile(fullPath, "utf8");
  const {
    data: { title },
    content,
    excerpt = "",
  } = matter(fileContents, { excerpt: true });
  return { title, content, href: `/articles/${slug}`, slug, excerpt };
};

export const getPosts = async () => {
  const fileNames = await fs.readdir(PATH_TO_ARTICLES);
  return Promise.all(fileNames.map(getPostBySlug));
};

export type Article = AwaitReturnType<typeof getPostBySlug>;
