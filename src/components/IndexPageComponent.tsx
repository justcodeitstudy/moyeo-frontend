import { Chip, Icon, Theme } from "jci-moyeo-design-system";
import React from "react";
import styled from "styled-components";
import { PostCard } from "./common/PostCard";

export const IndexPageComponent = () => {
  const post = {
    title: "태블릿 펜을 이용한 그림심리 검사앱",
    isScrap: true,
    content: "작성일 2022.00.00 · 조회 33",
    skills: ["php", "nodejs", "python"],
  };

  return (
    <>
      <span>main</span>
      <PostCard
        title={
          <>
            <span>{post?.title}</span>
            {post?.isScrap && (
              <Icon name="scrapOn" color={Theme.colors.primary[500]} />
            )}
          </>
        }
        content={post?.content}
        footer={post.skills.map((skill) => {
          return <StyledChip key={skill} color="basic" label={skill} />;
        })}
      />
    </>
  );
};

const StyledChip = styled(Chip)`
  margin-right: 40px;
`;
