import styled from "styled-components";
import React from "react";

interface DefaultLayoutProps {
  children?: React.ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <DefaultLayoutContainer>
      <Header />
      <DefaultLayoutMain>{children}</DefaultLayoutMain>
    </DefaultLayoutContainer>
  );
};

const DefaultLayoutContainer = styled("div")`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled("header")`
  height: 72px;
  background-color: green;
`;

const DefaultLayoutMain = styled("main")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: salmon;
  margin: 0 242px;
`;
