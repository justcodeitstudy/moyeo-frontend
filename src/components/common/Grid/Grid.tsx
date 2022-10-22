import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import GridItem from "./GridItem";

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Grid = ({ children, ...rest }: GridProps) => {
  return <StyledGrid {...rest}>{children}</StyledGrid>;
};

Grid.Item = GridItem;

export default Grid;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: ${({ theme }) => `${theme.breakpoints.md - 1}px`}) {
    grid-template-columns: 1fr;
  }
`;
