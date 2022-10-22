import React from "react";
import styled from "styled-components";
import { Grid } from "./Grid";
import { PostCard } from "./PostCard";
import { Chip, Icon, Theme } from "jci-moyeo-design-system";

// NOTE: 임시로 만들어놓음 변경될 수 있음
export interface Skill {
  id: number;
  name: string;
}

// NOTE: 임시로 만들어놓음 변경될 수 있음
export interface PostListResponse {
  id: number;
  title: string;
  type: "프로젝트" | "스터디" | "미지정";
  status: "모집중" | "모집완료";
  viewCount: number;
  skills: Skill[];
  isScrap: boolean;
  createdAt: string;
}

export interface PostListProps {
  postList: PostListResponse[]; // TODO: API의 응답 List로 수정
}

export const PostList = ({ postList }: PostListProps) => {
  return (
    <GridOverride>
      {postList.map(
        ({ id, title: postTitle, viewCount, skills, isScrap, createdAt }) => {
          const title = (
            <>
              <span>{postTitle}</span>
              {isScrap && (
                <Icon name="scrapOn" color={Theme.colors.primary[500]} />
              )}
            </>
          );
          const content = `${createdAt} · 조회 ${viewCount}`;
          const footer = skills.map(({ id, name }) => (
            <Chip key={id} color="basic" variants="pill" label={name} />
          ));

          return (
            <Grid.Item key={id}>
              <PostCard title={title} content={content} footer={footer} />
            </Grid.Item>
          );
        },
      )}
    </GridOverride>
  );
};

const GridOverride = styled(Grid)`
  gap: 28px 24px;

  @media (max-width: ${({ theme }) => `${theme.breakpoints.md - 1}px`}) {
    gap: 12px 0;
  }
`;
