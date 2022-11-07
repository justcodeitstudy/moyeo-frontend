import React from "react";
import PostViewer from "components/post/PostViewer";
import { NextPageWithLayout } from "pages/_app";
import { DefaultLayout } from "layouts/DefaultLayout";

const Post: NextPageWithLayout = () => {
  return <PostViewer />;
  // return <PostEditor />;
};

Post.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Post;
