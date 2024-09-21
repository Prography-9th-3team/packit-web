import { create } from 'zustand';

type Store = {
  selectedBookmarks: Array<{
    bookmarkId: number;
    url: string;
  }>;
  setSelectedBookmarks: ({ bookmarkId, url }: { bookmarkId: number; url: string }) => void;
  resetSelectedBookmarks: () => void;
  getSelectedBookmarksLength: () => number;
};

const useEditModeStore = create<Store>((set, get) => ({
  selectedBookmarks: [],

  // @desc: 선택된 북마크 추가
  setSelectedBookmarks: ({ bookmarkId, url }) => {
    set((state) => ({
      selectedBookmarks: [...state.selectedBookmarks, { bookmarkId, url }],
    }));
  },

  // @desc: 선택된 북마크 개수 반환
  getSelectedBookmarksLength: () => {
    return get().selectedBookmarks.length;
  },

  // @desc: 선택된 북마크 초기화
  resetSelectedBookmarks: () =>
    set(() => ({
      selectedBookmarks: [],
    })),
}));

export default useEditModeStore;
