'use client';

import { MouseEvent, PropsWithChildren, useRef } from 'react';

import useModalStore from '@/stores/modalStore';

export interface IModal extends PropsWithChildren {}

const ModalLayout = ({ children }: IModal) => {
  const { resetModal } = useModalStore();

  const modalRef = useRef(null);

  const handleCloseModal = (e: MouseEvent<HTMLElement>) => {
    if (modalRef.current === e.target) {
      resetModal();
    }
  };

  return (
    <div
      ref={modalRef}
      className='fixed top-0 left-0 bottom-0 right-0 p-40 flex flex-col justify-center items-center bg-[#E2E5E9B2]'
      onClick={handleCloseModal}
    >
      <div className='max-h-[900px] rounded-2xl bg-surface shadow-modal overflow-scroll hide-scroll'>
        {children}
      </div>
    </div>
  );
};

export default ModalLayout;
