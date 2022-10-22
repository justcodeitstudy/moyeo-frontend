import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import Banner from "components/post/Banner";
import { Button, TextInput } from "jci-moyeo-design-system";
import { DefaultLayout } from "layouts/DefaultLayout";
import { NextPageWithLayout } from "pages/_app";
import PostInformationForm from "./PostInformationForm";

const Editor = dynamic(() => import("./Editor"), {
  ssr: false,
});

const PostEditor: NextPageWithLayout = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <PageContainer>
      <Banner />
      <Information>
        <PostInformationForm />
      </Information>
      <Introduction>
        <IntroductionTitle>모집 소개 작성</IntroductionTitle>
        <TitleTextInput width="100%" placeholder="모집 제목을 입력해주세요." />
        <Editor />
      </Introduction>
      <ButtonContainer>
        <StyledButton color="general" variants="filled">
          취소
        </StyledButton>
        <StyledButton color="primary">모집 등록</StyledButton>
      </ButtonContainer>
    </PageContainer>
  );
};

PostEditor.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default PostEditor;

const PageContainer = styled.div`
  margin: 56px 0;
`;

const Information = styled.div`
  margin-top: 56px;

  @media (max-width: 767px) {
    margin-top: 30px;
  }
`;

const Introduction = styled.div`
  margin-top: 72px;
`;

const IntroductionTitle = styled.h2`
  margin-bottom: 20px;
  ${({ theme }) => theme.typography.header2};

  @media (max-width: 767px) {
    margin-bottom: 12px;
    ${({ theme }) => theme.typography.header3};
  }
`;

const TitleTextInput = styled(TextInput)`
  margin-bottom: 12px;
`;

const ButtonContainer = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

const StyledButton = styled(Button)`
  width: 180px;

  @media (max-width: 767px) {
    width: 100%;
  }
`;
