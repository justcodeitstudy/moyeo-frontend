import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import { postKeys } from "../constants/queryKeys";
import { getPost, getPostMe, postPost } from "../api/post";
import { useRouter } from "next/router";
import { PostRequest } from "../models/post";

export const useGetPostMe = () => {
  return useQuery(postKeys.postMe, getPostMe, {});
};

export const useInfiniteGetPost = () => {
  const router = useRouter();
  return useInfiniteQuery(
    postKeys.postWithQuery(router.query),
    async ({ pageParam = 1 }) => {
      const response = await getPost({ page: pageParam, ...router.query });
      return {
        ...response,
        pageParam,
      };
    },
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.last) {
          return undefined;
        }
        return lastPage.pageParam + 1;
      },
    },
  );
};

export const usePost = () => {
  return useMutation((parmas: PostRequest) => postPost(parmas));
};
