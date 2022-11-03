import React from "react";
import styled from "styled-components";
import { Search } from "./Search";
import { PostList } from "components/common/PostList";
import Image from "next/image";
import { useExampleApi } from "queries/example";

const Main = () => {
  const { data: exampleResponse } = useExampleApi();
  console.log(exampleResponse?.data);

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
      <PostList postList={[]} />
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
