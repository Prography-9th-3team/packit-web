import useModalStore from '@/stores/modalStore';
import { useEffect } from 'react';
import useEventListener from './useEventListener';

const useEscKeyModalEvent = (modalId: string, eventCallback: () => void) => {
  // DESC: 열려 있는 모달 중 우선순위 설정하는 atom
  const { modalOpen, openModal, closeModal } = useModalStore();

  const handleEscKeyEvent = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && modalOpen[modalOpen.length - 1] === modalId) {
      eventCallback();
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
