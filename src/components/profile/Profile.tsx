import React from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import Section from "components/common/Section";
import { Chip } from "jci-moyeo-design-system";
import Avatar from "components/common/Avatar";

const Viewer = dynamic(() => import("../common/Viewer"), {
  ssr: false,
});

const initialValue = `제 인생에서 1차적인 목표인 장기복무 합격이 올해 이루어졌기 때문에
한동안 많은 생각을 하면서 다음 목표를 정하려고 노력했습니다. 그래서
생각한 것은 상사 진급 및 학사학위 취득입니다.`;

const Profile = () => {
  return (
    <PageContainer>
      <Title>
        안녕하세요 <TitleNickname>모요미</TitleNickname>입니다.
      </Title>
      <UserContainer>
        <Avatar id="" />
        <Nickname>모요미</Nickname>
      </UserContainer>
      <Info>
        <SubTitle>기술 스택</SubTitle>
        <SkillContainer>
          <Chip color="basic" variants="pill" label="React" />
          <Chip color="basic" variants="pill" label="React" />
          <Chip color="basic" variants="pill" label="React" />
          <Chip color="basic" variants="pill" label="React" />
          <Chip color="basic" variants="pill" label="React" />
          <Chip color="basic" variants="pill" label="React" />
          <Chip color="basic" variants="pill" label="React" />
          <Chip color="basic" variants="pill" label="React" />
          <Chip color="basic" variants="pill" label="React" />
          <Chip color="basic" variants="pill" label="React" />
        </SkillContainer>
      </Info>
      <Info>
        <SubTitle>자기소개</SubTitle>
        <Section>
          <Introduction>
            <Viewer initialValue={initialValue} />
          </Introduction>
        </Section>
      </Info>
    </PageContainer>
  );
};

export default Profile;

const PageContainer = styled.div`
  margin: 64px 0;
`;

const Title = styled.h1`
  margin-bottom: 40px;
  ${({ theme }) => theme.typography.header1};
  color: ${({ theme }) => theme.colors.text.title};

  @media (max-width: ${({ theme }) => `${theme.breakpoints.md - 1}px`}) {
    margin-bottom: 32px;
    ${({ theme }) => theme.typography.header2};
  }
`;

const TitleNickname = styled.span`
  color: ${({ theme }) => theme.colors.primary["500"]};
`;

const UserContainer = styled.div`
  margin-bottom: 32px;
  display: flex;
  align-items: center;
`;

const Nickname = styled.span`
  margin-left: 16px;
  ${({ theme }) => theme.typography.header2};
  color: ${({ theme }) => theme.colors.text.title};

  @media (max-width: ${({ theme }) => `${theme.breakpoints.md - 1}px`}) {
    ${({ theme }) => theme.typography.header3};
  }
`;

const Info = styled.div`
  margin-bottom: 36px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SubTitle = styled.div`
  margin-bottom: 12px;
  ${({ theme }) => theme.typography.md};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const SkillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
`;

const Introduction = styled.div`
  margin: 20px 20px 32px 20px;
  ${({ theme }) => theme.typography.sm};
`;
