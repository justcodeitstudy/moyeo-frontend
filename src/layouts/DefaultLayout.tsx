import styled from "styled-components";
import React from "react";

interface DefaultLayoutProps {
  children?: React.ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <DefaultLayoutContainer>
      <Header />
      <DefaultLayoutContent>{children}</DefaultLayoutContent>
    </DefaultLayoutContainer>
  );
};

const DefaultLayoutContainer = styled("div")``;

const Header = styled("header")`
  height: 72px;
`;

const DefaultLayoutContent = styled("main")`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 120px;
`;
