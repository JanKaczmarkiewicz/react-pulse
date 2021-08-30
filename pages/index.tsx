import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import styled, { css } from "styled-components";
import Header from "../components/molecules/Header/Header";
import Footer from "../components/molecules/Footer/Footer";
import ArticleList from "../components/molecules/ArticleList/ArticleList";

const sectionStyles = css`
  width: min(800px, calc(100vw - 48px));
  margin: 0 auto;
`;

const Main = styled.main`
  ${sectionStyles}
`;

const PageContainer = styled.div`
  display: flex;
  gap: 96px;
  flex-direction: column;
  margin: 24px auto;
`;

const HeaderWrapper = styled.header`
  ${sectionStyles}
`;

const FooterWrapper = styled.footer`
  ${sectionStyles}
`;

const Home: NextPage = () => (
  <PageContainer>
    <Head>
      <title>React Pulse</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Blog about react news" />
    </Head>
    <HeaderWrapper>
      <Header />
    </HeaderWrapper>
    <Main>
      <ArticleList />
    </Main>
    <FooterWrapper>
      <Footer />
    </FooterWrapper>
  </PageContainer>
);

export default Home;
