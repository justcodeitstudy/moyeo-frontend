import React from "react";
import styled from "styled-components";
import BannerCarousel from "../components/main/BannerCarousel";

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
  display: flex;
  flex-direction: column;
`;

const Header = styled("header")`
  height: 72px;
  background-color: green;
`;

const MainLayoutContent = styled("main")`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 120px;
`;
