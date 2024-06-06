import useModalStore from '@/stores/modalStore';
import { PropsWithChildren } from 'react';
import ReactDom from 'react-dom';
import ModalLayout from './ModalLayout';

interface IModalPortal extends PropsWithChildren {}

const ModalPortal = ({ children }: IModalPortal) => {
  const { isModalOpen } = useModalStore();

  if (!isModalOpen) return null;

  const modalElement = document.getElementById('modal');

  if (!modalElement) {
    throw new Error('해당 요소가 존재하지 않습니다.');
  }

  return ReactDom.createPortal(<ModalLayout>{children}</ModalLayout>, modalElement);
};

export default ModalPortal;
