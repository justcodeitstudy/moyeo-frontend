import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { postKeys } from "../constants/queryKeys";
import { getPost } from "../api/post";
import { useRouter } from "next/router";
import { GetPostRequest } from "../models/post";

export const useGetPost = (params: GetPostRequest) => {
  return useQuery(postKeys.post, () => getPost(params), {});
};

export const useInfiniteGetPost = () => {
  const router = useRouter();
  return useInfiniteQuery(
    [postKeys.postWithQuery, router.query],
    ({ pageParam = 1 }) => getPost({ page: pageParam, ...router.query }),

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
