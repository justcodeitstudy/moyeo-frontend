import React from "react";
import styled from "styled-components";

export interface SectionProps {
  children?: React.ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Section;

const Wrapper = styled.section<SectionProps>`
  background-color: ${({ theme }) => theme.colors.general["white"]};
  border: 1px solid ${({ theme }) => theme.colors.general["300"]};
  border-radius: 8px;
`;
