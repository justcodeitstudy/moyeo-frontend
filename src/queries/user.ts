import { useMutation, useQuery } from "@tanstack/react-query";
import { getUserDetail, getUserMe, patchUserMe } from "api/user";
import { userKeys } from "constants/queryKeys";
import { EditProfileReqDTO } from "../models/user";

/**
 *
 * user-controller hooks
 */

export const useGetUserMe = () => useQuery(userKeys.getUserMe, getUserMe);

export const usePatchUserMe = () =>
  useMutation((params: EditProfileReqDTO) => patchUserMe(params));

export const useGetUserDetail = (userId: string) => {
  return useQuery(userKeys.getUser(userId), () => getUserDetail(userId));
};
