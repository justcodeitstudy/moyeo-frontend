import React from "react";
import styled from "styled-components";
import { Grid } from "./Grid";
import { PostCard } from "./PostCard";
import { Chip, Icon, Modal, Theme } from "jci-moyeo-design-system";
import { Content } from "../../models/post";
import { useDeleteScraps, usePostScraps } from "../../queries/scraps";
import { useLoginStatus } from "../../hooks/useLoginStatus";
import LoginModal from "../../layouts/Header/LoginModal";
import useLoginModal from "../../hooks/useLoginModal";
import { postKeys } from "../../constants/queryKeys";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";

export interface PostListProps {
  postList?: Content[];
  myPageScrap?: boolean;
}

export const PostList = ({ postList, myPageScrap }: PostListProps) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const isLogin = useLoginStatus();
  const {
    isLoginModalOpen,
    handleLoginClick,
    handleLoginModalClose,
    handleSnsSelect,
  } = useLoginModal();
  const { mutate: postScraps } = usePostScraps();
  const { mutate: deleteScraps } = useDeleteScraps();

  const invalidateQueries = () => {
    return queryClient.invalidateQueries(postKeys.postWithQuery(router.query));
  };

  const handleScraps = (postId: string, isScrapped: boolean) => {
    if (!isLogin) {
      handleLoginClick();
    }

    if (isScrapped) {
      return deleteScraps(postId, {
        onSuccess: () => {
          return invalidateQueries();
        },
      });
    }
    if (!isScrapped) {
      return postScraps(postId, {
        onSuccess: () => {
          return invalidateQueries();
        },
      });
    }
  };

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
          const title = (
            <>
              {PostTitle}
              {!myPageScrap && (
                <Icon
                  name={isScrapped ? "scrapOn" : "scrapOff"}
                  size={32}
                  color={
                    isScrapped
                      ? Theme.colors.primary[500]
                      : Theme.colors.general.white["200"]
                  }
                  onClick={() => handleScraps(String(postId), isScrapped)}
                />
              )}
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
      <Modal
        isOpen={isLoginModalOpen}
        onClose={handleLoginModalClose}
        dim="blur"
      >
        <LoginModal onSelect={handleSnsSelect} />
      </Modal>
    </GridOverride>
  );
};

const GridOverride = styled(Grid)`
  gap: 28px 24px;

  @media (max-width: ${({ theme }) => `${theme.breakpoints.md - 1}px`}) {
    gap: 12px 0;
  }
`;
