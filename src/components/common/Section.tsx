import React from "react";
import styled from "styled-components";

export interface SectionProps {
  margin?: string;
  padding?: string;
  children?: React.ReactNode;
}

const Section = ({ margin, padding, children }: SectionProps) => {
  return (
    <Wrapper margin={margin} padding={padding}>
      {children}
    </Wrapper>
  );
};

export default Section;

const Wrapper = styled.div<SectionProps>`
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
  background-color: ${({ theme }) => theme.colors.general["white"]};
  border: 1px solid ${({ theme }) => theme.colors.general["300"]};
  border-radius: 8px;
`;
