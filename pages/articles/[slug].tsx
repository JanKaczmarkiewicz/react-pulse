import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Layout from "../../components/layout/Layout";
import parseMarkdown from "../../utils/parseMarkdown";
import { getPostBySlug, getPosts } from "../../utils/posts";
import { MDXRemote } from "next-mdx-remote";
import { AwaitReturnType } from "../../utils/types";
import styled from "styled-components";

type Params = { slug: string };

type ArticleProps = {
  title: string;
  source: AwaitReturnType<typeof parseMarkdown>;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const posts = await getPosts();

  const paths = posts.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ArticleProps, Params> = async ({
  params,
}) => {
  const { content, title } = await getPostBySlug(params?.slug || "");
  const source = await parseMarkdown(content);

  return {
    props: { title, source },
  };
};

const P = styled.p`
  line-height: 32px;
  font-size: 19px;
  margin-bottom: 32px;
`;

const H1 = styled.p`
  font-size: 38px;
  margin-bottom: 32px;
`;

const Pre = styled.pre`
  margin-bottom: 32px !important;
`;

const Article = ({ title, source }: ArticleProps) => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Blog about react news" />
    </Head>
    <Layout>
      <MDXRemote
        {...source}
        components={{
          p: P,
          h1: H1,
          pre: Pre,
        }}
      />
    </Layout>
  </>
);

export default Article;
