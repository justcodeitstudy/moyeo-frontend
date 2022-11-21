import { PostList } from "components/common/PostList";
import React from "react";
import { useGetPostMe } from "../../queries/post";

export const ProjectStudy = () => {
  const { data: postList } = useGetPostMe();

  return <PostList postList={postList?.data} />;
};
