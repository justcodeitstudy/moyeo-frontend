import { useMutation } from "@tanstack/react-query";
import { deleteAuth } from "../api/auth";
import { CustomCookies } from "../utils/cookies";
import { useLoginStatus } from "../hooks/useLoginStatus";
import { useRouter } from "next/router";

export const useDeleteAuth = () => {
  const { setIsLogin } = useLoginStatus();
  const router = useRouter();
  return useMutation(() => deleteAuth(), {
    onSettled: () => {
      CustomCookies.removeCookies("accessToken");
      setIsLogin(false);
      router.reload();
    },
  });
};
