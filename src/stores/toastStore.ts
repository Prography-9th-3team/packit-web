// src/stores/modalStore.js
import { create } from 'zustand';

type ToastType = 'default' | 'success' | 'error';

type Store = {
  toastList: Array<{ id: number; message: string; type: ToastType }>;
  addToast: (message: string, type?: ToastType) => void;
  removeToast: (id: number) => void;
  resetToast: () => void;
};

const useToastStore = create<Store>((set) => ({
  toastList: [],
  addToast: (message, type = 'default') =>
    set((state) => {
      const id = Date.now(); // 유니크한 ID 생성
      const newToast = { id, message, type };

      return {
        toastList: [...state.toastList, newToast],
      };
    }),
  removeToast: (id) =>
    set((state) => ({
      toastList: state.toastList.filter((item) => item.id !== id),
    })),
  resetToast: () => set({ toastList: [] }),
}));

export default useToastStore;
