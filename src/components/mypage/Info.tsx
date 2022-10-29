import Avatar from "components/common/Avatar";
import Section from "components/common/Section";
import { Button, Chip } from "jci-moyeo-design-system";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import styled from "styled-components";
import { InfoForm } from "./InfoForm";

const Viewer = dynamic(() => import("../common/Viewer"), {
  ssr: false,
});

export const myInfo = {
  nickname: "모요미",
  email: "moyomi@gmail.com",
  skills: ["typescript", "react"],
  info: `제 인생에서 1차적인 목표인 장기복무 합격이 올해 이루어졌기 때문에 한동안 많은 생각을 하면서 다음 목표를 정하려고 노력했습니다.
그래서 생각한 것은 상사 진급 및 학사학위 취득입니다.`,
};

export const Info = () => {
  const [showInfoForm, setShowInfoForm] = useState(false);

  const handleShowInfoForm = () => {
    setShowInfoForm(true);
  };

  const handleUpdate = () => {
    setShowInfoForm(false);
  };

  return (
    <InfoContainer>
      {showInfoForm ? (
        <InfoForm onUpdate={handleUpdate} />
      ) : (
        <>
          <ProfileContainer>
            <UserProfileContainer>
              <Avatar id="" />
              <UserNickName>{myInfo.nickname}</UserNickName>
            </UserProfileContainer>
            <PcButton
              variants="outlined"
              color="general"
              onClick={handleShowInfoForm}
            >
              내 정보 수정
            </PcButton>
          </ProfileContainer>
          <Email>연결 계정 · {myInfo.email}</Email>
          <SubCategoryText>기술 스택</SubCategoryText>
          {myInfo.skills.map((skill) => (
            <StyledChip
              key={skill}
              color="basic"
              variants="pill"
              label={skill}
            />
          ))}
          <SubCategoryText>자기 소개</SubCategoryText>
          <Section>
            <InfoText>
              <Viewer initialValue={myInfo.info} />
            </InfoText>
          </Section>

          <MobileButton
            variants="outlined"
            color="general"
            onClick={handleShowInfoForm}
          >
            내 정보 수정
          </MobileButton>
        </>
      )}
    </InfoContainer>
  );
};

const InfoContainer = styled("div")``;

export const ProfileContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 44px 0 16px 0;
`;

export const UserProfileContainer = styled("div")`
  display: flex;
  align-items: center;
`;

export const UserNickName = styled("h2")`
  margin-left: 16px;
  ${({ theme }) => theme.typography.header2};
`;

export const Email = styled("span")`
  ${({ theme }) => theme.typography.md};
  color: ${({ theme }) => theme.colors.black[300]};
`;

export const SubCategoryText = styled("h4")`
  ${({ theme }) => theme.typography.header4};
  margin: 32px 0 13px 0;
`;

const StyledChip = styled(Chip)`
  margin-right: 4px;
`;

const InfoText = styled("div")`
  padding: 20px 20px 32px 20px;
`;

const PcButton = styled(Button)`
  @media (max-width: ${({ theme }) => `${theme.breakpoints.md - 1}px`}) {
    display: none;
  }
`;

const MobileButton = styled(Button)`
  width: 100%;
  margin-top: 16px;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.md - 1}px`}) {
    display: none;
  }
`;
