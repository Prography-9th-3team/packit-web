import { cn } from '@/lib/utils';
import useModalStore from '@/stores/modalStore';
import { MouseEvent, PropsWithChildren, useRef } from 'react';

export interface IModal extends PropsWithChildren {}

const ModalLayout = ({ children }: IModal) => {
  const { closeModal } = useModalStore();

  const modalRef = useRef(null);

  const handleCloseModal = (e: MouseEvent<HTMLElement>) => {
    if (modalRef.current === e.target) {
      closeModal();
    }
  };

  return (
    <div ref={modalRef} className='fixed top-0 left-0 bottom-0 right-0' onClick={handleCloseModal}>
      <div
        className={cn([
          'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
          'p-24 rounded-2xl bg-surface shadow-modal',
        ])}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalLayout;
