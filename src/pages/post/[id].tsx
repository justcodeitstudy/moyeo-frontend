import React from "react";
import { DefaultLayout } from "layouts/DefaultLayout";
import { NextPageWithLayout } from "pages/_app";
import PostViewer from "components/post/PostViewer";

const Post: NextPageWithLayout = () => {
  return <PostViewer />;
  // return <PostEditor />;
};

Post.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Post;
