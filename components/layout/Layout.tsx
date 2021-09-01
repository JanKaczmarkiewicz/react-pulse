import { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import Footer from "../molecules/Footer/Footer";
import Header from "../molecules/Header/Header";

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

const Layout: FunctionComponent = ({ children }) => (
  <PageContainer>
    <HeaderWrapper>
      <Header />
    </HeaderWrapper>
    <Main>{children}</Main>
    <FooterWrapper>
      <Footer />
    </FooterWrapper>
  </PageContainer>
);

export default Layout;
