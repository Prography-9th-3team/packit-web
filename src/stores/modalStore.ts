// src/stores/modalStore.js
import { create } from 'zustand';

type Store = {
  modalOpen: Array<string>;
  isModalOpen: (modalName: string) => boolean;
  openModal: (modalName: string) => void;
  closeModal: (modalName: string) => void;
  resetModal: () => void;
};

const useModalStore = create<Store>((set, get) => ({
  modalOpen: [],
  isModalOpen: (modalName: string) => {
    return get().modalOpen.includes(modalName);
  },
  openModal: (modalName: string) =>
    set((state) => ({
      modalOpen: [...state.modalOpen, modalName],
    })),
  closeModal: (modalName: string) =>
    set((state) => ({
      modalOpen: state.modalOpen.filter((item) => item !== modalName),
    })),
  resetModal: () => set({ modalOpen: [] }),
}));

export default useModalStore;
