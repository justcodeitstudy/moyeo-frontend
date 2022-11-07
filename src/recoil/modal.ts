import { AlertModalProps } from "components/common/Modal/AlertModal";
import { ConfirmModalProps } from "components/common/Modal/ConfirmModal";
import { MODAL_TYPES } from "components/common/Modal/GlobalModal";
import { atom } from "recoil";

export interface ModalType {
  modalType: typeof MODAL_TYPES.confirm | typeof MODAL_TYPES.alert;
  modalProps: ConfirmModalProps | AlertModalProps;
}

export const modalState = atom<ModalType | null>({
  key: "modalState",
  default: null,
});
