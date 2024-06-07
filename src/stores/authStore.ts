// src/stores/modalStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Store {
  accessToken: string;
  setAccessToken: (accessToken: string) => void;
  isLogin: () => boolean;
  resetAuth: () => void;
}

const useAuthStore = create(
  persist<Store>(
    (set, get) => ({
      accessToken: '',
      setAccessToken: (accessToken: string) =>
        set(() => ({
          accessToken,
        })),
      isLogin: () => {
        return get().accessToken ? true : false;
      },
      resetAuth: () => {
        set(() => ({
          accessToken: '',
        }));
      },
    }),
    {
      name: 'auth-storage',
    },
  ),
);

export default useAuthStore;
