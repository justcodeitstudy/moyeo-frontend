import React from "react";
import PostEditor from "components/post/PostEditor";
import { NextPageWithLayout } from "pages/_app";
import { DefaultLayout } from "layouts/DefaultLayout";

const PostRegister: NextPageWithLayout = () => {
  return <PostEditor />;
};

PostRegister.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default PostRegister;
