import Link from "next/link";
import styled from "styled-components";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaRssSquare } from "react-icons/fa";

const FooterWrapper = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  flex-wrap: wrap;
`;

const SocialLinkContainer = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SocialLinkText = styled.span`
  font-size: 16px;
`;

const Footer = () => (
  <FooterWrapper>
    <b>Jan Kaczmarkiewicz</b>
    <div>2021 - present</div>

    <Link href="https://www.linkedin.com/in/jan-kaczmarkiewicz/" passHref>
      <SocialLinkContainer>
        <AiFillLinkedin />
        <SocialLinkText>linkedin</SocialLinkText>
      </SocialLinkContainer>
    </Link>

    <Link href="https://github.com/JanKaczmarkiewicz/" passHref>
      <SocialLinkContainer>
        <AiFillGithub />
        <SocialLinkText>github</SocialLinkText>
      </SocialLinkContainer>
    </Link>

    <Link href="/rss.xml" passHref>
      <SocialLinkContainer>
        <FaRssSquare />
        <SocialLinkText>rss</SocialLinkText>
      </SocialLinkContainer>
    </Link>
  </FooterWrapper>
);

export default Footer;
