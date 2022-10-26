import React from "react";
import { DefaultLayout } from "layouts/DefaultLayout";
import { NextPageWithLayout } from "pages/_app";
import PostEditor from "components/post/PostEditor";

const PostRegister: NextPageWithLayout = () => {
  return <PostEditor />;
};

PostRegister.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default PostRegister;
