import React, { HTMLAttributes } from "react";
import styled from "styled-components";

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Grid = ({ children, ...rest }: GridProps) => {
  return <StyledGrid {...rest}>{children}</StyledGrid>;
};

export default Grid;

const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => `${theme.breakpoints.md - 1}px`}) {
    flex-direction: column;
  }
`;
