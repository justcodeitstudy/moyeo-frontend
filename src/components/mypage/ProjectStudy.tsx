import { PostCard } from "components/common/PostCard";
import { Chip } from "jci-moyeo-design-system";
import React from "react";
import styled from "styled-components";

export const post = {
  title: "태블릿 펜을 이용한 그림심리 검사앱",
  isScrap: true,
  content: "작성일 2022.00.00 · 조회 33",
  skills: ["php", "nodejs", "python"],
};

export const ProjectStudy = () => {
  return (
    // TODO: 그리드 컴포넌트로 수정예정
    <PostCard
      title={post?.title}
      content={post?.content}
      footer={post.skills.map((skill) => {
        return <StyledChip key={skill} color="basic" label={skill} />;
      })}
    />
  );
};

const StyledChip = styled(Chip)`
  margin-right: 4px;
`;
