import React from "react";
import styled from "styled-components";
import { Grid } from "components/common/Grid";
import { TextInput } from "jci-moyeo-design-system";

// TODO: Select width 오류 해결 후 적용
// 모집 구분
// const recruitmentOptions = [
//   {
//     id: 1,
//     value: "프로젝트",
//     label: "프로젝트",
//   },
//   {
//     id: 2,
//     value: "스터디",
//     label: "스터디",
//   },
//   {
//     id: 3,
//     value: "미지정",
//     label: "미지정",
//   },
// ];

// 진행 방식
// const progressOptions = [
//   {
//     id: 1,
//     value: "온라인",
//     label: "온라인",
//   },
//   {
//     id: 2,
//     value: "오프라인",
//     label: "오프라인",
//   },
// ];

// 기술 태스
// const skillOptions = [
//   {
//     id: 1,
//     value: "javascript",
//     label: "javascript",
//   },
//   {
//     id: 2,
//     value: "typescript",
//     label: "typescript",
//   },
//   {
//     id: 3,
//     value: "react",
//     label: "react",
//   },
// ];

const PostInformationForm = () => {
  return (
    <>
      <Title>모집 기본정보 입력</Title>
      <GridOverride>
        <Grid.Item>
          <TextInput width="100%" label="모집 구분" />
        </Grid.Item>
        <Grid.Item>
          <TextInput width="100%" label="진행 방식" />
        </Grid.Item>
        <Grid.Item>
          <TextInput width="100%" label="모집 분야" />
        </Grid.Item>
        <Grid.Item>
          <TextInput width="100%" label="연락 방법" />
        </Grid.Item>
      </GridOverride>
      <SkillWrapper>
        <SkillWrapperItem>
          <TextInput width="100%" label="기술 태그" />
        </SkillWrapperItem>
      </SkillWrapper>
    </>
  );
};

export default PostInformationForm;

const Title = styled.h2`
  margin-bottom: 20px;
  ${({ theme }) => theme.typography.header2};

  @media (max-width: 767px) {
    margin-bottom: 14px;
    ${({ theme }) => theme.typography.header3};
  }
`;

const GridOverride = styled(Grid)`
  gap: 24px 28px;
`;

const SkillWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const SkillWrapperItem = styled.div`
  margin-top: 24px;
  width: calc(50% - 14px);

  @media (max-width: ${({ theme }) => `${theme.breakpoints.md - 1}px`}) {
    width: 100%;
  }
`;
