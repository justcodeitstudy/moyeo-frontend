import Avatar from "components/common/Avatar";
import Section from "components/common/Section";
import { Button, Chip } from "jci-moyeo-design-system";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import styled from "styled-components";
import { InfoForm } from "./InfoForm";
import { MyProfileResDTO } from "../../models/user";

const Viewer = dynamic(() => import("../common/Viewer"), {
  ssr: false,
});

interface InfoProps {
  myInfo?: MyProfileResDTO;
}

export const Info = ({ myInfo }: InfoProps) => {
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
        <InfoForm myInfo={myInfo} onUpdate={handleUpdate} />
      ) : (
        <>
          <ProfileContainer>
            <UserProfileContainer>
              <Avatar id="" />
              <UserNickName>{myInfo?.nickname}</UserNickName>
            </UserProfileContainer>
            <PcButtonContainer>
              <Button
                variants="outlined"
                color="general"
                onClick={handleShowInfoForm}
              >
                내 정보 수정
              </Button>
            </PcButtonContainer>
          </ProfileContainer>
          <Email>연결 계정 · {myInfo?.email}</Email>
          <SubCategoryText>기술 스택</SubCategoryText>
          {myInfo?.skillIds.map((skill) => {
            return (
              <StyledChip
                key={skill.id}
                color="basic"
                variants="pill"
                label={skill.name}
              />
            );
          })}
          <SubCategoryText>자기 소개</SubCategoryText>
          <Section>
            <InfoText>
              <Viewer initialValue={myInfo?.introduction} />
            </InfoText>
          </Section>
          <MobileButtonContainer>
            <MobileButton
              variants="outlined"
              color="general"
              onClick={handleShowInfoForm}
            >
              내 정보 수정
            </MobileButton>
          </MobileButtonContainer>
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

const PcButtonContainer = styled("div")`
  @media (max-width: ${({ theme }) => `${theme.breakpoints.md - 1}px`}) {
    display: none;
  }
`;

const MobileButtonContainer = styled("div")`
  @media (min-width: ${({ theme }) => `${theme.breakpoints.md - 1}px`}) {
    display: none;
  }
`;

const MobileButton = styled(Button)`
  width: 100%;
  margin-top: 16px;
`;
