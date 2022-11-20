import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Search } from "./Search";
import { PostList } from "components/common/PostList";
import Image from "next/image";
import { useInfiniteGetPost } from "../../queries/post";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const Main = () => {
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(loadMoreRef, {});
  const { data, fetchNextPage } = useInfiniteGetPost();

  useEffect(() => {
    if (entry?.isIntersecting) {
      fetchNextPage();
    }
  }, [entry, fetchNextPage]);

  return (
    <>
      <SearchWrapper>
        <Search />
      </SearchWrapper>
      <TitleContainer>
        <Image
          src="/moyomi_01.svg"
          alt="moyomi_01"
          width="36px"
          height="32px"
        />
        <Title>프로젝트/스터디</Title>
      </TitleContainer>
      <PostList postList={data?.pages.flatMap((page) => page.content)} />
      <div ref={loadMoreRef}></div>
    </>
  );
};

export default Main;

const SearchWrapper = styled.div`
  margin-top: 28px;
  margin-bottom: 52px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 20px;

  @media (max-width: ${({ theme }) => `${theme.breakpoints.md - 1}px`}) {
    margin-bottom: 14px;
  }
`;

const Title = styled.h2`
  margin-left: 12px;
  ${({ theme }) => theme.typography.header2};

  @media (max-width: ${({ theme }) => `${theme.breakpoints.md - 1}px`}) {
    ${({ theme }) => theme.typography.header3};
  }
`;
