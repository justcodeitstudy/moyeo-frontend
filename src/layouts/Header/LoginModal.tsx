import React from "react";
import { Modal } from "jci-moyeo-design-system";
import styled from "styled-components";
import Image from "next/image";

type Props = {
  onSelect: () => void;
};
const LoginModal = ({ onSelect }: Props) => {
  const snsList = ["google", "kakaotalk", "github"];

  return (
    <LoginModalContent>
      <LoginModalTitleBox>
        <Image src="/logo.svg" alt="moyoe-logo" width={197} height={50} />
        <p>쉬운 프로젝트 찾기 여기 다 모여!</p>
      </LoginModalTitleBox>
      <LoginModalSnsOptionBox>
        {snsList.map((sns) => (
          <LoginModalSnsButton key={sns} onClick={onSelect}>
            <Image
              src={`/${sns}.svg`}
              alt={`${sns}-logo`}
              width={80}
              height={80}
              layout="fixed"
            />
          </LoginModalSnsButton>
        ))}
      </LoginModalSnsOptionBox>
    </LoginModalContent>
  );
};

const LoginModalContent = styled(Modal.Content)`
  padding: 64px 120px 56px;
  box-shadow: 0px 5px 18px rgba(0, 0, 0, 0.15);
  ${({ theme }) => theme.typography.header4};
  text-align: center;

  display: flex;
  flex-direction: column;
  row-gap: 32px;
`;

const LoginModalTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

const LoginModalSnsOptionBox = styled.div`
  display: flex;
  column-gap: 16px;
`;

const LoginModalSnsButton = styled.button`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  background: none;
  cursor: pointer;
`;

export default LoginModal;
