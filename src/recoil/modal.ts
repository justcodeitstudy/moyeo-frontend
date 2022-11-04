import { AlertModalProps } from "components/common/Modal/AlertModal";
import { ConfirmModalProps } from "components/common/Modal/ConfirmModal";
import { MODAL_TYPES } from "components/common/Modal/GlobalModal";
import { atom } from "recoil";

export interface ConfirmModalType {
  modalType: typeof MODAL_TYPES.confirm;
  modalProps: ConfirmModalProps;
}

export interface AlertModalType {
  modalType: typeof MODAL_TYPES.alert;
  modalProps: AlertModalProps;
}

export type ModalType = ConfirmModalType | AlertModalType;

export const modalState = atom<ModalType | null>({
  key: "modalState",
  default: null,
});
