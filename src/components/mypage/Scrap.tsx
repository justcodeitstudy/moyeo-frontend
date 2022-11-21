import { PostList } from "components/common/PostList";
import React from "react";
import { useGetScraps } from "../../queries/scraps";

export const Scrap = () => {
  const { data: postList } = useGetScraps();

  return <PostList postList={postList?.data} />;
};
