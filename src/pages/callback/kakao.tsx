import { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import client from "../../api";
import { CustomCookies } from "../../utils/cookies";

const Kakao: NextPage = () => {
  const router = useRouter();
  const { code: authCode, error: kakaoServerError } = router.query;

  const loginHandler = useCallback(
    async (code: string | string[]) => {
      try {
        const response = await client.get("/oauth/auth/kakao", {
          params: { code },
        });
        const token = response.headers["x-moyeo-auth-token"];
        CustomCookies.setCookies("accessToken", token, {
          path: "/",
          maxAge: 3600 * 2,
        });
        await router.replace("/");
      } catch (e) {
        // TODO 실패시
        console.log("err");
      }
    },
    [router],
  );

  useEffect(() => {
    if (authCode) {
      loginHandler(authCode);

      // TODO 인가코드 없을시 에러
    } else if (kakaoServerError) {
      router.push("/");
    }
  }, [loginHandler, authCode, kakaoServerError, router]);

  return <div>로그인 중...</div>;
};

export default Kakao;
