import { CustomCookies } from "../utils/cookies";
import { useEffect, useState } from "react";

export const useLoginStatus = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const accessToken = CustomCookies.getCookies("accessToken");
    if (accessToken) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  return { isLogin, setIsLogin };
};
