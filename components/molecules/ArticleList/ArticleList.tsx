import Link from "next/link";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";
import colors from "../../../styles/colors";
import { Article } from "../../../utils/posts";

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

const ArticleList = ({ articles }: { articles: Article[] }) => (
  <PostsList>
    {articles.map(({ excerpt, href, title }) => (
      <Link key={href} href={href} passHref>
        <PostContainer>
          <PostTitle>{title}</PostTitle>
          {excerpt && <PostExcerpt>{excerpt}</PostExcerpt>}
          <PostCallToAction>
            Read more <AiOutlineArrowRight color={colors.secondaryText} />
          </PostCallToAction>
        </PostContainer>
      </Link>
    ))}
  </PostsList>
);

export default ArticleList;
