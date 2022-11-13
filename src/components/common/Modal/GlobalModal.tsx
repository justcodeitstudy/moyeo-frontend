import React from "react";
import { useRecoilState } from "recoil";
import { AlertModal } from "./AlertModal";
import { modalState } from "recoil/modal";
import { ConfirmModal } from "./ConfirmModal";

export const MODAL_TYPES = {
  alert: "alert",
  confirm: "confirm",
} as const;

const MODAL_COMPONENTS = {
  [MODAL_TYPES.confirm]: ConfirmModal,
  [MODAL_TYPES.alert]: AlertModal,
};

export const GlobalModal = () => {
  const { modalType, modalProps } = useRecoilState(modalState)[0] || {};

  const renderComponent = () => {
    if (!modalType) {
      return null;
    }
    const ModalComponent = MODAL_COMPONENTS[modalType];

    return <ModalComponent {...modalProps} />;
  };

  return <>{renderComponent()}</>;
};
