import { create } from 'zustand';

export type CategoryDtoType = {
  categoryId: number;
  categoryName: string;
};

type Store = {
  isEditMode: boolean;
  setEditMode: (isEditMode: boolean) => void;
  selectedBookmarks: Array<{
    bookmarkId: number;
    url: string;
    categoryDtos: CategoryDtoType[];
  }>;
  isSelectedBookmark: (bookmarkId: number) => boolean;
  setSelectedBookmarks: ({
    bookmarkId,
    url,
    categoryDtos,
  }: {
    bookmarkId: number;
    url: string;
    categoryDtos: CategoryDtoType[];
  }) => void;
  resetSelectedBookmarks: () => void;
  getSelectedBookmarksLength: () => number;
};

const useEditModeStore = create<Store>((set, get) => ({
  isEditMode: false,
  selectedBookmarks: [],

  setEditMode: (isEditMode: boolean) => {
    set(() => ({
      isEditMode,
    }));
  },

  // @desc: 선택된 북마크 추가
  setSelectedBookmarks: ({ bookmarkId, url, categoryDtos }) => {
    const isAlreadyExist = get().selectedBookmarks.some((item) => item.bookmarkId === bookmarkId);

    set((state) => ({
      // @desc: toggle 되게끔
      selectedBookmarks: isAlreadyExist
        ? state.selectedBookmarks.filter((item) => item.bookmarkId !== bookmarkId)
        : [...state.selectedBookmarks, { bookmarkId, url, categoryDtos }],
    }));
  },

  isSelectedBookmark: (bookmarkId: number) => {
    return get().selectedBookmarks.some((item) => item.bookmarkId === bookmarkId);
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
