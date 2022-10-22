import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Banner from "components/post/Banner";
import { Button } from "jci-moyeo-design-system";
import { DefaultLayout } from "layouts/DefaultLayout";
import { NextPageWithLayout } from "pages/_app";
import PostInformationForm from "./PostInformationForm";
import PostIntroductionForm from "./PostIntroductionForm";

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
        <PostIntroductionForm />
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
