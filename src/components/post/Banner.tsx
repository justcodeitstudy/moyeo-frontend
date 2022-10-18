import React from "react";
import styled from "styled-components";

const Banner = () => {
  return (
    <Container>
      <Title>
        <TitleText>함께할 팀원 여기 다 모여!</TitleText>
      </Title>
      <Content>
        <ContentText>
          프로젝트/스터디를 잇는 플랫폼, 모여에서 <br />일 잘하는 사람들을
          모아보세요.
        </ContentText>
      </Content>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  padding: 28px 40px;
  background-color: ${({ theme }) => theme.colors.primary[50]};

  @media (max-width: 767px) {
    padding: 20px 12px;
  }
`;

const Title = styled.div`
  margin-bottom: 8px;
`;

const TitleText = styled.h2`
  color: black;
  ${({ theme }) => theme.typography.header2};

  @media (max-width: 767px) {
    ${({ theme }) => theme.typography.header3};
  }
`;

const Content = styled.div``;

const ContentText = styled.p`
  ${({ theme }) => theme.typography.md};
  color: black;
`;
