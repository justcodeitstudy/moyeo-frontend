import { PostCard } from "components/common/PostCard";
import { Chip, Icon, Theme } from "jci-moyeo-design-system";
import React from "react";
import { post } from "./ProjectStudy";

export const Scrap = () => {
  return (
    // TODO: 그리드 컴포넌트로 수정예정
    <PostCard
      title={
        <>
          {post?.title}
          {post?.isScrap && (
            <Icon name="scrapOn" color={Theme.colors.primary[500]} />
          )}
        </>
      }
      content={post?.content}
      footer={post.skills.map((skill) => {
        return <Chip key={skill} color="basic" label={skill} />;
      })}
    />
  );
};
