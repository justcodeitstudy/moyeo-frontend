import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Banner from "components/post/Banner";
import { DefaultLayout } from "layouts/DefaultLayout";
import { NextPageWithLayout } from "pages/_app";
import PostForm from "./PostForm";

const PostEditor: NextPageWithLayout = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <PageContainer>
      <Banner />
      <FormWrapper>
        <PostForm />
      </FormWrapper>
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

const FormWrapper = styled.div`
  margin-top: 56px;
  margin-bottom: 72px;

  @media (max-width: 767px) {
    margin-top: 30px;
  }
`;
