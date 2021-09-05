import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import React from "react";
import ArticleList from "../components/molecules/ArticleList/ArticleList";
import { Article, getPosts } from "../utils/posts";
import Layout from "../components/layout/Layout";

type Props = {
  posts: Article[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  console.log(await getPosts());
  return {
    props: { posts: await getPosts() },
  };
};

const Home: NextPage<Props> = ({ posts }) => (
  <>
    <Head>
      <title>React Pulse</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Blog about react news" />
    </Head>
    <Layout>
      <ArticleList articles={posts} />
    </Layout>
  </>
);

export default Home;
