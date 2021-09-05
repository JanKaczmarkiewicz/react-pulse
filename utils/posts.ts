import path from "path";
import { promises as fs } from "fs";
import { AwaitReturnType } from "./types";
import { bundleMDX } from "mdx-bundler";

const PATH_TO_ARTICLES = path.join(process.cwd(), "articles");

export const getPostBySlug = async (slug: string) => {
  const pathToArticle = path.join(PATH_TO_ARTICLES, slug, `index.mdx`);

  const fileContents = await fs.readFile(pathToArticle, "utf8");

  const { code, frontmatter } = await bundleMDX(fileContents);

  return {
    code,
    href: `/articles/${slug}`,
    frontmatter,
    title: frontmatter.title,
  };
};

export const getArticleSlugs = () => fs.readdir(PATH_TO_ARTICLES);

export const getPosts = async () => {
  const slugs = await getArticleSlugs();
  return Promise.all(slugs.map(getPostBySlug));
};

export type Article = AwaitReturnType<typeof getPostBySlug>;
