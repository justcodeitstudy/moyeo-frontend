import { Card } from "jci-moyeo-design-system";
import React from "react";
import styled from "styled-components";

interface PostCardProps {
  title?: React.ReactNode;
  content?: string;
  footer?: React.ReactNode;
}

export const PostCard = ({ title, content, footer }: PostCardProps) => {
  return (
    <StyledCard>
      <StyledCardTitle>{title}</StyledCardTitle>
      <StyledCardContent>{content}</StyledCardContent>
      <Divider />
      <StyledCardFooter>{footer}</StyledCardFooter>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  width: 486px;

  @media (max-width: 767px) {
    width: 343px;
  }
`;

const StyledCardTitle = styled("header")`
  ${({ theme }) => theme.typography.header3};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 56px;
`;

const StyledCardContent = styled("div")`
  ${({ theme }) => theme.typography.sm};
  color: ${({ theme }) => theme.colors.general[600]};
  height: 22px;
`;

const StyledCardFooter = styled("footer")`
  height: 36px;
  display: flex;
  align-items: center;
`;

const Divider = styled("hr")`
  background-color: ${({ theme }) => theme.colors.black[100]};
  border: none;
  height: 1px;
`;
