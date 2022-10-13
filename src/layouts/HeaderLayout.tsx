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
        <LayoutMainContainer>{children}</LayoutMainContainer>
      </MainLayoutRootContainer>
    </>
  );
}

const MainLayoutRootContainer = styled("div")`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled("header")`
  height: 72px;
  background-color: green;
`;

const Carousel = styled("div")`
  height: 272px;
  background-color: blue;
`;

const LayoutMainContainer = styled("main")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: salmon;
  margin: 0 242px;
`;
