import Link from "next/link";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";
import colors from "../../../styles/colors";

const PostContainer = styled.a`
  display: flex;
  flex-direction: column;
  gap: 16px;

  svg {
    display: none;
  }

  &:hover svg {
    display: block;
  }
`;

const PostTitle = styled.h2`
  font-size: 22px;
`;

const PostExcerpt = styled.span`
  font-size: 16px;
  line-height: 32px;
`;

const PostCallToAction = styled.b`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 16px;
`;

const PostsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
`;

const articles = Array(4)
  .fill(undefined)
  .map((_, i) => ({
    id: i,
    href: "/react-18-progressive-hydration",
    title: "React 18: Progressive hydration",
    excerpt: `New feature added to serverside rendering. Each Suspanse boundary slices app into multiple zones with different priority of loading related javascript code...`,
  }));

const ArticleList = () => {
  return (
    <PostsList>
      {articles.map(({ id, href, title, excerpt }) => (
        <Link key={id} href={href} passHref>
          <PostContainer>
            <PostTitle>{title}</PostTitle>
            <PostExcerpt>{excerpt}</PostExcerpt>
            <PostCallToAction>
              Read more <AiOutlineArrowRight color={colors.secondaryText} />
            </PostCallToAction>
          </PostContainer>
        </Link>
      ))}
    </PostsList>
  );
};

export default ArticleList;
