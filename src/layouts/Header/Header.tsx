import axios from "axios";
import { Button, Icon, Modal } from "jci-moyeo-design-system";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LoginModal, { SnsType } from "./LoginModal";
import SignupModal from "./SignupModal";

const Popover = dynamic(
  () => import("jci-moyeo-design-system").then((r) => r.Popover),
  {
    ssr: false,
  },
);

const Header = () => {
  const [hasMounted, setHasMounted] = useState(false);

  // TODO : 임시 변수
  const isLogin = false;
  const [isSignup, setIsSignup] = useState(false);

  const router = useRouter();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleWriteButtonClick = () => {
    router.push("/post/register");
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleLoginModalClose = () => {
    setIsLoginModalOpen(false);
  };

  const handleSnsSelect = (sns: SnsType) => {
    const socialLoginMap: Record<SnsType, () => void> = {
      kakaotalk: () => {
        Kakao.Auth.login({
          success: (response) => {
            // FIXME: kakao login test 코드
            axios
              .get(
                `http://ec2-15-164-250-89.ap-northeast-2.compute.amazonaws.com:8080/oauth/token/kakao`,
                {
                  data: {
                    accesskey: response.access_token,
                  },
                },
              )
              .then((res) => console.log(`success`, res))
              .catch((err) => console.log(`failed`, err));
          },
          fail: (error) => {
            console.log(error);
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
    // setIsSignup(true);
  };

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <StyledHeader>
      <Link href="/">
        <a href=" ">
          <Image src="/logo.svg" alt="moyoe-logo" width={140} height={36} />
        </a>
      </Link>

      <ControlBox>
        <WriteButton
          color="general"
          variants="outlined"
          onClick={handleWriteButtonClick}
        >
          모집 글 작성하기
          <Icon name="write" strokeWidth={50} />
        </WriteButton>
        {isLogin ? (
          <Popover
            anchorPosition={{
              x: 0,
              y: 8,
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            opener={
              <ProfileBox
                onClick={() => {
                  setIsProfileOpen(true);
                }}
              >
                <Image
                  src="/default_profile.svg"
                  alt="기본 프로필 이미지"
                  width={36}
                  height={36}
                  layout="fixed"
                />
                <Icon name="down" />
              </ProfileBox>
            }
            isOpen={isProfileOpen}
            onClose={() => setIsProfileOpen(false)}
          >
            <OptionUl>
              <li>마이페이지</li>
              <li>로그아웃</li>
            </OptionUl>
          </Popover>
        ) : (
          <>
            <Button onClick={handleLoginClick}>로그인</Button>
            <Modal
              isOpen={isLoginModalOpen}
              onClose={handleLoginModalClose}
              dim="blur"
            >
              <LoginModal onSelect={handleSnsSelect} />
            </Modal>
          </>
        )}
        <Modal isOpen={isSignup} onClose={() => setIsSignup(false)} dim="blur">
          <SignupModal />
        </Modal>
      </ControlBox>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 20px 120px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.general["300"]};
`;

const WriteButton = styled(Button)`
  display: flex;
  column-gap: 4px;
`;

const ControlBox = styled.div`
  display: flex;
  column-gap: 12px;
`;

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const OptionUl = styled.ul`
  padding: 6px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.general["white"]};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);

  li {
    width: 189px;
    padding: 8px 12px;
    color: ${({ theme }) => theme.colors.black["300"]};
    transition: background-color 0.2s, color 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary["50"]};
      color: ${({ theme }) => theme.colors.black["400"]};
      border-radius: 4px;
      cursor: pointer;
    }
  }
`;

export default Header;
