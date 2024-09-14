import { useEffect } from 'react';

import useModalStore from '@/stores/modalStore';

import useEventListener from './useEventListener';

const useEscKeyModalEvent = (modalId: string, eventCallback?: () => void) => {
  const { modalOpen, openModal, closeModal } = useModalStore();

  const handleEscKeyEvent = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && modalOpen[modalOpen.length - 1] === modalId) {
      eventCallback && eventCallback();
      closeModal(modalId);
    }
  };

  useEventListener('keydown', handleEscKeyEvent);

  useEffect(() => {
    openModal(modalId);

    return () => {
      // 모달이 닫힐 때 스택에서 제거
      closeModal(modalId);
    };
  }, [modalId, openModal, closeModal]);
};

export default useEscKeyModalEvent;
