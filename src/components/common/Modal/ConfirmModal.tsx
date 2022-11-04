import React from "react";
import useModal from "hooks/useModal";
import { Button, Modal } from "jci-moyeo-design-system";
import styled from "styled-components";

export interface ConfirmModalProps {
  title?: string;
  content?: string;
  cancelText?: string;
  confirmText?: string;
  // Todo: any제거
  handleClose?: () => any;
  handleConfirm?: () => any;
}

const ConfirmModal = ({
  title,
  content,
  confirmText = "확인",
  cancelText = "취소",
  handleClose,
  handleConfirm,
}: ConfirmModalProps) => {
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
          <TitleContainer>{title}</TitleContainer>
          <ContentContainer>{content}</ContentContainer>
          <ButtonContainer>
            <Button
              onClick={onConfirm}
              width="100%"
              variants="outlined"
              color="general"
            >
              {confirmText}
            </Button>
            <Button onClick={onClose} width="100%">
              {cancelText}
            </Button>
          </ButtonContainer>
        </ModalContentContainer>
      </Modal.Content>
    </Modal>
  );
};

export default ConfirmModal;

const ModalContentContainer = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 28px 32px;
  width: min-content;
  min-width: 635px;
  white-space: pre-line;
`;

const TitleContainer = styled("span")`
  ${({ theme }) => theme.typography.header2};
`;

const ContentContainer = styled("span")`
  ${({ theme }) => theme.typography.md};
  color: ${({ theme }) => theme.colors.black[300]};
  padding: 28px 0;
`;

const ButtonContainer = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 12px;
`;
