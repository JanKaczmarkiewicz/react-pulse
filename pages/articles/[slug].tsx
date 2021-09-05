import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Layout from "../../components/layout/Layout";
import { getPostBySlug, getArticleSlugs } from "../../utils/posts";
import { getMDXComponent } from "mdx-bundler/client";
import styled, { css } from "styled-components";
import { ComponentType, useMemo } from "react";
import Image, { ImageProps } from "next/image";

type Params = { slug: string };

type ArticleProps = {
  title: string;
  code: string;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const posts = await getArticleSlugs();

  const paths = posts.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ArticleProps, Params> = async ({
  params,
}) => {
  const { title, code } = await getPostBySlug(params?.slug || "");

  return {
    props: { title, code },
  };
};

const spaceBottomStyles = css`
  margin-bottom: 32px;
`;

const P = styled.p`
  ${spaceBottomStyles}
  line-height: 32px;
  font-size: 19px;
`;

const H1 = styled.p`
  ${spaceBottomStyles}
  font-size: 38px;
`;

const Pre = styled.pre`
  ${spaceBottomStyles}
  margin-bottom: 32px !important;
`;

const ImageWrapper = styled.div`
  ${spaceBottomStyles}
  margin-bottom: 32px;
`;

const MdxImage = (props: ImageProps) => (
  <ImageWrapper>
    <Image {...props} alt="image" />
  </ImageWrapper>
);

const Article = ({ title, code }: ArticleProps) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Blog about react news" />
      </Head>
      <Layout>
        <Component
          components={{
            p: P,
            h1: H1,
            pre: Pre,
            Image: MdxImage as ComponentType<{}>,
          }}
        />
      </Layout>
    </>
  );
};

export default Article;
