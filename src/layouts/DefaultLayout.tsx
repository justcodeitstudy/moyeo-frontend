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
