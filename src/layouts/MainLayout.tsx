import React from "react";
import styled from "styled-components";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Carousel />
      <MainLayoutRootContainer>
        <MainLayoutContent>{children}</MainLayoutContent>
      </MainLayoutRootContainer>
    </>
  );
}

const MainLayoutRootContainer = styled("div")`
  width: 100%;
`;

const Header = styled("header")`
  height: 72px;
`;

const Carousel = styled("div")`
  height: 272px;
`;

const MainLayoutContent = styled("main")`
  width: ${({ theme }) => `${theme.breakpoints.xl - 16 * 2}px`};
  margin: 0 auto;

  @media (max-width: ${({ theme }) => `${theme.breakpoints.xl - 1}px`}) {
    width: ${({ theme }) => `${theme.breakpoints.md - 16 * 2}px`};
  }

  @media (max-width: 767px) {
    width: auto;
    margin: 0 16px;
  }
`;
