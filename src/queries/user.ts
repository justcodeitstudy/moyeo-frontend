import { useMutation, useQuery } from "@tanstack/react-query";
import { getUserDetail, getUserMe, patchUserMe } from "api/user";
import { userKeys } from "constants/queryKeys";

/**
 *
 * user-controller hooks
 */
const useUser = () => {
  return {
    useGetUserMe: () => useQuery(userKeys.getUserMe, getUserMe),
    usePatchUserMe: () => useMutation(patchUserMe),
    useGetUserDetail: (userId: string) => {
      return useQuery(userKeys.getUser(userId), () => getUserDetail(userId));
    },
  };
};

export default useUser;
