// src/stores/modalStore.js
import { create } from 'zustand';

type Store = {
  // modalContent: React.ReactNode;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  // setModalContent: (content: React.ReactNode) => void;
};

const useModalStore = create<Store>((set) => ({
  // modalContent: '',
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
  // setModalContent: (content: React.ReactNode) => set({ modalContent: content }),
}));

export default useModalStore;
