import React from "react";
import styled from "styled-components";
import Header from "./Header";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <LayoutRootContainer>
        <LayoutContent>{children}</LayoutContent>
      </LayoutRootContainer>
    </>
  );
};

export default Layout;

const LayoutRootContainer = styled.div`
  width: 100%;
`;

const LayoutContent = styled.main`
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
