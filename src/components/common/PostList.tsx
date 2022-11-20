import React from "react";
import styled from "styled-components";
import { Grid } from "./Grid";
import { PostCard } from "./PostCard";
import { Chip, Icon, Theme } from "jci-moyeo-design-system";
import { Content } from "../../models/post";

export interface PostListProps {
  postList?: Content[]; // TODO: API의 응답 List로 수정
}

export const PostList = ({ postList }: PostListProps) => {
  return (
    <GridOverride>
      {postList?.map(
        ({
          title: PostTitle,
          postId,
          viewCount,
          isScrapped,
          skillList,
          createdAt,
        }: Content) => {
          // TODO 스크랩
          const title = (
            <>
              {PostTitle}
              <Icon
                name={isScrapped ? "scrapOn" : "scrapOff"}
                size={32}
                color={
                  isScrapped
                    ? Theme.colors.primary[500]
                    : Theme.colors.general.white["200"]
                }
              />
            </>
          );
          const content = `${createdAt} · 조회 ${viewCount}`;
          const footer = skillList?.map(({ name }, index) => (
            <Chip key={index} color="basic" variants="pill" label={name} />
          ));

          return (
            <Grid.Item key={postId}>
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
