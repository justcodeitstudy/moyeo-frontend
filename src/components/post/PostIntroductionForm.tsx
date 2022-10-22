import React from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import { TextInput } from "jci-moyeo-design-system";

const Editor = dynamic(() => import("./Editor"), {
  ssr: false,
});

const PostIntroductionForm = () => {
  return (
    <>
      <Title>모집 소개 작성</Title>
      <TextInputOverride width="100%" placeholder="모집 제목을 입력해주세요." />
      <Editor />
    </>
  );
};

export default PostIntroductionForm;

const Title = styled.h2`
  margin-bottom: 20px;
  ${({ theme }) => theme.typography.header2};

  @media (max-width: 767px) {
    margin-bottom: 12px;
    ${({ theme }) => theme.typography.header3};
  }
`;

const TextInputOverride = styled(TextInput)`
  margin-bottom: 12px;
`;
