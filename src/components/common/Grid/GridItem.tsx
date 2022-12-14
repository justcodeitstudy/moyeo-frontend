import React, { HTMLAttributes } from "react";
import styled from "styled-components";

export interface GridItemProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const GridItem = ({ children, ...rest }: GridItemProps) => {
  return <StyledGridItem {...rest}>{children}</StyledGridItem>;
};

export default GridItem;

const StyledGridItem = styled.div`
  @media (max-width: ${({ theme }) => `${theme.breakpoints.md - 1}px`}) {
    width: 100%;
  }
`;
