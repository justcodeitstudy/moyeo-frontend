import React from "react";
import styled from "styled-components";

const Banner = () => {
  return (
    <Wrapper>
      <Title>
        <TitleText>함께할 팀원 여기 다 모여!</TitleText>
      </Title>
      <Content>
        <ContentText>
          프로젝트/스터디를 잇는 플랫폼, 모여에서 <br />일 잘하는 사람들을
          모아보세요.
        </ContentText>
      </Content>
    </Wrapper>
  );
};

export default Banner;

const Wrapper = styled.div`
  padding: 28px 40px;
  background-color: ${({ theme }) => theme.colors.primary[50]};
`;

const Title = styled.div`
  margin-bottom: 8px;
`;

const TitleText = styled.h2`
  ${({ theme }) => theme.typography.header2};
  color: black;
`;

const Content = styled.div``;

const ContentText = styled.p`
  ${({ theme }) => theme.typography.md};
  color: black;
`;
