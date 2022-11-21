import { useMutation, useQuery } from "@tanstack/react-query";
import { scrapsKeys } from "../constants/queryKeys";
import { deleteScraps, getScraps, postScraps } from "../api/scraps";

export const useGetScraps = () => {
  return useQuery(scrapsKeys.scraps, getScraps);
};

export const usePostScraps = () => {
  return useMutation((postId: string) => postScraps(postId));
};

export const useDeleteScraps = () => {
  return useMutation((postId: string) => deleteScraps(postId));
};
