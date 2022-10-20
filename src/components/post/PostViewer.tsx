import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import styled, { css } from "styled-components";
import { DefaultLayout } from "layouts/DefaultLayout";
import { NextPageWithLayout } from "pages/_app";
import PostButton from "./PostButton";

const Viewer = dynamic(() => import("./Viewer"), {
  ssr: false,
});

const PostViewer: NextPageWithLayout = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <PageContainer>
      <TitleSection>
        <TitleContainer>
          <Title>온라인 모각코 인원 모집합니다!</Title>
          <ButtonContainer>
            <PostButton name="checkInCircle" checked={true} />
            <PostButton name="write" />
            <PostButton name="delete" />
          </ButtonContainer>
        </TitleContainer>
        <SubTitleContainer>
          <SubTitleLeft>
            <Profile />
            <Nickname>닉네임</Nickname>
            <Date>2022.10.18</Date>
          </SubTitleLeft>
          <SubTitleRight>
            <ViewCount>조회 33</ViewCount>
          </SubTitleRight>
        </SubTitleContainer>
      </TitleSection>
      <InformationSection>
        <Information>
          <GridContainer>
            <GridItem>
              <Label>모집 구분</Label>
              <Content width="192px">스터디</Content>
            </GridItem>
            <GridItem>
              <Label>진행 방식</Label>
              <Content>오프라인</Content>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem>
              <Label style={{ marginTop: "8px" }}>모집 분야</Label>
              <Content width="192px">
                <RecruitmentContainer>
                  <RecruitmentType>디자이너 1명</RecruitmentType>
                  <RecruitmentType>프론트엔드 1명</RecruitmentType>
                </RecruitmentContainer>
              </Content>
            </GridItem>
            <GridItem>
              <Label>연락 방법</Label>
              <Content>카카오톡 오픈채팅, 이메일, 기타</Content>
            </GridItem>
          </GridContainer>
          <SkillContainer>
            <Label>기술 태그</Label>
            <SkillListContainer>
              <Skill />
              <Skill />
              <Skill />
              <Skill />
              <Skill />
              <Skill />
              <Skill />
              <Skill />
              <Skill />
              <Skill />
            </SkillListContainer>
          </SkillContainer>
        </Information>
        <Divider />
        <Viewer />
      </InformationSection>
    </PageContainer>
  );
};

PostViewer.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default PostViewer;

const PageContainer = styled.div`
  margin: 52px 0;
`;

// TODO: Section 컴포넌트로 대체
const TitleSection = styled.div`
  margin-bottom: 12px;
  padding: 34px 32px 32px 32px;
  background-color: ${({ theme }) => theme.colors.general["white"]};
  border: 1px solid ${({ theme }) => theme.colors.general["300"]};
  border-radius: 8px;

  @media (max-width: 767px) {
    padding: 20px 20px 16px 20px;
  }
`;

const TitleContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 11px;
  }
`;

const Title = styled.h1`
  ${({ theme }) => theme.typography.header1};
  color: ${({ theme }) => theme.colors.text.primary};
  word-break: keep-all;

  @media (max-width: 767px) {
    ${({ theme }) => theme.typography.header3};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 767px) {
    justify-content: flex-end;
  }
`;

const SubTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SubTitleLeft = styled.div`
  display: flex;
  align-items: center;
`;

const SubTitleRight = styled.div``;

// TODO: 프로필 컴포넌트로 대체
const Profile = styled.div`
  margin-right: 12px;
  display: inline-block;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.general["200"]};
`;

const Nickname = styled.span`
  margin-right: 20px;
  ${({ theme }) => theme.typography.header4};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const Date = styled.span`
  ${({ theme }) => theme.typography.sm};
  color: ${({ theme }) => theme.colors.general["600"]};
`;

const ViewCount = styled.span`
  ${({ theme }) => theme.typography.sm};
  color: ${({ theme }) => theme.colors.general["600"]};
`;

const InformationSection = styled.div`
  padding: 28px 32px 52px 32px;
  background-color: ${({ theme }) => theme.colors.general["white"]};
  border: 1px solid ${({ theme }) => theme.colors.general["300"]};
  border-radius: 8px;

  @media (max-width: 767px) {
    padding: 20px;
  }
`;

const Information = styled.div``;

const GridContainer = styled.div`
  margin-bottom: 24px;
  display: flex;
  gap: 60px;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const GridItem = styled.div`
  display: flex;
`;

const Label = styled.label`
  width: 92px;
  ${({ theme }) => theme.typography.md};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const Content = styled.div<{ width?: string }>`
  ${({ width }) =>
    width
      ? css`
          width: ${width};
        `
      : css`
          flex: 1 1 0;
        `}
  ${({ theme }) => theme.typography.md};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const SkillContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

const SkillListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
`;

// TODO: 기술 스택 컴포넌트로 대체
const Skill = styled.div`
  display: inline-block;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.general["200"]};
`;

const RecruitmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const RecruitmentType = styled.div`
  padding: 8px;
  height: 40px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.general["100"]};
  border-radius: 4px;
`;

const Divider = styled.div`
  margin-top: 28px;
  margin-bottom: 40px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.general["200"]};
  border-radius: 999px;
`;
