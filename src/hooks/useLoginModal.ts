import { useState } from "react";
import { SnsType } from "../layouts/Header/LoginModal";
import { useRouter } from "next/router";

const UseLoginModal = () => {
  const router = useRouter();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleLoginModalClose = () => {
    setIsLoginModalOpen(false);
  };

  const handleSnsSelect = (sns: SnsType) => {
    const socialLoginMap: Record<SnsType, () => void> = {
      kakaotalk: () => {
        router.push({
          pathname: "https://kauth.kakao.com/oauth/authorize",
          query: {
            response_type: "code",
            client_id: process.env.NEXT_PUBLIC_KAKAO_KEY,
            // TODO Redirect URI 추가
            redirect_uri: "http://localhost:8080/callback/kakao",
          },
        });
      },
      github: () => {
        console.log(`github login`);
      },
      google: () => {
        console.log(`google login`);
      },
    };

    socialLoginMap[sns]();
    setIsLoginModalOpen(false);
  };

  return {
    isLoginModalOpen,
    handleLoginClick,
    handleLoginModalClose,
    handleSnsSelect,
  };
};

export default UseLoginModal;
