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
  box-sizing: border-box;
`;

const Header = styled("header")`
  height: 72px;
`;

const Carousel = styled("div")`
  height: 272px;
`;

const MainLayoutContent = styled("main")`
  width: 1168px;
  margin: 0 auto;

  @media (max-width: 1199px) {
    width: 736px;
  }

  @media (max-width: 767px) {
    width: auto;
    margin: 0 16px;
  }
`;
