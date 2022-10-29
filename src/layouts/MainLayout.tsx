import React from "react";
import styled from "styled-components";
import Header from "./Header";
import BannerCarousel from "components/main/BannerCarousel";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <BannerCarousel />
      <MainLayoutRootContainer>
        <MainLayoutContent>{children}</MainLayoutContent>
      </MainLayoutRootContainer>
    </>
  );
}

const MainLayoutRootContainer = styled("div")`
  width: 100%;
`;

const MainLayoutContent = styled("main")`
  margin: 0 auto;
  width: ${({ theme }) => `${theme.breakpoints.xl - 16 * 2}px`};

  @media (max-width: ${({ theme }) => `${theme.breakpoints.xl - 1}px`}) {
    width: ${({ theme }) => `${theme.breakpoints.md - 16 * 2}px`};
  }

  @media (max-width: 767px) {
    margin: 0 16px;
    width: auto;
  }
`;
