import useModal from "hooks/useModal";
import { Button, Modal } from "jci-moyeo-design-system";
import React from "react";
import styled from "styled-components";

export interface AlertModalProps {
  title?: string;
  content?: string;
  icon?: React.ReactNode;
  // Todo: any 제거
  confirmText?: string;
  handleClose?: () => any;
  handleConfirm?: () => any;
}

export const AlertModal = ({
  title,
  content,
  icon,
  handleClose,
  confirmText = "확인",
  handleConfirm,
}: AlertModalProps) => {
  const { close } = useModal();

  const onClose = () => {
    if (handleClose) {
      handleClose();
    }
    close();
  };

  const onConfirm = async () => {
    if (handleConfirm) {
      await handleConfirm();
    }
    close();
  };

  return (
    <Modal isOpen={true} onClose={onClose}>
      <Modal.Content>
        <ModalContentContainer>
          <IconContainer>{icon}</IconContainer>
          <TitleContainer>{title}</TitleContainer>
          <ContentContainer>{content}</ContentContainer>
          <Button onClick={onConfirm}>{confirmText}</Button>
        </ModalContentContainer>
      </Modal.Content>
    </Modal>
  );
};

const ModalContentContainer = styled("div")`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 40px 20px 28px 20px;
  width: min-content;
  min-width: 481px;
  text-align: center;
  white-space: pre-line;
`;

const IconContainer = styled("span")`
  ${({ theme }) => theme.typography.header1};
`;

const TitleContainer = styled("span")`
  ${({ theme }) => theme.typography.header1};
  margin-top: 40px;
`;

const ContentContainer = styled("span")`
  ${({ theme }) => theme.typography.md};
  color: ${({ theme }) => theme.colors.black[300]};
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.primary[50]};
  padding: 16px 20px;
  margin-top: 20px;
  margin-bottom: 30px;
`;
