import { useRecoilState } from "recoil";
import { ModalType, modalState } from "recoil/modal";

export default function useModal() {
  const [modal, setModal] = useRecoilState(modalState);

  const open = ({ modalType, modalProps }: ModalType) => {
    setModal({ modalType, modalProps });
  };

  const close = () => {
    setModal(null);
  };

  return {
    open,
    close,
  };
}
