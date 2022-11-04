import React from "react";
import styled from "styled-components";
import { Search } from "./Search";
import { PostList } from "components/common/PostList";
import Image from "next/image";
import useModal from "hooks/useModal";
import { Icon } from "jci-moyeo-design-system";

const Main = () => {
  const { open } = useModal();

  // const handleClickAlertModal = () => {
  //   open({
  //     modalType: "alert",
  //     modalProps: {
  //       icon: <Icon name="checkInCircle" size={80} color="#06CBF7" />,
  //       title: "모여에 오신걸\n환영합니다!",
  //       content: `계정으로 회원가입이 성공적으로 완료되었습니다.\n아래 로그인 버튼을 눌러 다시한번 로그인 해주세요.`,
  //       confirmText: "로그인",
  //       handleConfirm: () => {
  //         console.log("handle confirm");
  //       },
  //     },
  //   });
  // };

  // const handleClickConfirmModal = () => {
  //   open({
  //     modalType: "confirm",
  //     modalProps: {
  //       title: "잠깐, 뒤로 가실 건가요?",
  //       content: `지금까지 작성된 글이 모두 사라져요!\n그래도 뒤로 가시겠어요?`,
  //       confirmText: "예",
  //       cancelText: "아니요",
  //       handleConfirm: () => {
  //         console.log("handle confirm");
  //       },
  //     },
  //   });
  // };

  return (
    <>
      <SearchWrapper>
        <Search />
      </SearchWrapper>
      <TitleContainer>
        <Image
          src="/moyomi_01.svg"
          alt="moyomi_01"
          width="36px"
          height="32px"
        />
        <Title>프로젝트/스터디</Title>
        {/* <button onClick={handleClickAlertModal}>alert modal</button>
        <button onClick={handleClickConfirmModal}>confirm modal</button> */}
      </TitleContainer>
      <PostList postList={[]} />
    </>
  );
};

export default Main;

const SearchWrapper = styled.div`
  margin-top: 28px;
  margin-bottom: 52px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 20px;

  @media (max-width: ${({ theme }) => `${theme.breakpoints.md - 1}px`}) {
    margin-bottom: 14px;
  }
`;

const Title = styled.h2`
  margin-left: 12px;
  ${({ theme }) => theme.typography.header2};

  @media (max-width: ${({ theme }) => `${theme.breakpoints.md - 1}px`}) {
    ${({ theme }) => theme.typography.header3};
  }
`;
