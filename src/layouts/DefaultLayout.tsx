import styled from "styled-components";
import React from "react";
import Header from "./Header/Header";

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

const DefaultLayoutContainer = styled("div")`
  width: 100%;
  box-sizing: border-box;
`;

const DefaultLayoutContent = styled("main")`
  width: ${({ theme }) => `${theme.breakpoints.xl - 16 * 2}px`};
  margin: 0 auto;

  @media (max-width: ${({ theme }) => `${theme.breakpoints.xl - 1}px`}) {
    width: ${({ theme }) => `${theme.breakpoints.md - 16 * 2}px`};
  }

  @media (max-width: ${({ theme }) => `${theme.breakpoints.md - 1}px`}) {
    width: auto;
    margin: 0 16px;
  }
`;
