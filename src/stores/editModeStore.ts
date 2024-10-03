import { create } from 'zustand';

export type CategoryDtoType = {
  categoryId: number;
  categoryName: string;
};

type Bookmark = {
  bookmarkId: number;
  url: string;
  categoryDtos: CategoryDtoType[];
};

export type MovingBookmarkDto = {
  originCategoryId: number | null;
  bookMarkId: number;
  movingCategoryId: number | null;
};

type Store = {
  isEditMode: boolean;
  setEditMode: (isEditMode: boolean) => void;
  selectedBookmarks: Bookmark[];
  movedBookmarks: number[];
  deletedBookmarks: number[];
  isSelectedBookmark: (bookmarkId: number) => boolean;
  setSelectedBookmarks: (bookmark: Bookmark) => void;
  resetEditMode: () => void;
  resetSelectedBookmarks: () => void;
  getSelectedBookmarksLength: () => number;
  setMovedBookmarks: (bookmarkIds: number[]) => void;
  setDeletedBookmarks: (bookmarkIds: number[]) => void;
  isOpenCategoryOptions: boolean;
  setIsOpenCategoryOptions: (isOpen: boolean) => void;
};

const useEditModeStore = create<Store>((set, get) => ({
  isEditMode: false,
  selectedBookmarks: [],
  movedBookmarks: [],
  deletedBookmarks: [],
  isOpenCategoryOptions: false,

  setEditMode: (isEditMode: boolean) => {
    set({ isEditMode });
  },

  setSelectedBookmarks: (bookmark: Bookmark) => {
    const isAlreadyExist = get().selectedBookmarks.some(
      (item) => item.bookmarkId === bookmark.bookmarkId,
    );

    set({
      selectedBookmarks: isAlreadyExist
        ? get().selectedBookmarks.filter((item) => item.bookmarkId !== bookmark.bookmarkId)
        : [...get().selectedBookmarks, bookmark],
    });
  },

  setMovedBookmarks: (bookmarkIds: number[]) => {
    set({
      movedBookmarks: [...get().movedBookmarks, ...bookmarkIds],
    });
  },

  setDeletedBookmarks: (bookmarkIds: number[]) => {
    set({
      deletedBookmarks: [...get().deletedBookmarks, ...bookmarkIds],
    });
  },

  isSelectedBookmark: (bookmarkId: number) => {
    return get().selectedBookmarks.some((item) => item.bookmarkId === bookmarkId);
  },

  getSelectedBookmarksLength: () => {
    return get().selectedBookmarks.length;
  },

  resetSelectedBookmarks: () => {
    set({ selectedBookmarks: [] });
  },

  resetEditMode: () => {
    set({
      selectedBookmarks: [],
      movedBookmarks: [],
      deletedBookmarks: [],
      isEditMode: false,
    });
  },

  setIsOpenCategoryOptions: (isOpen: boolean) => {
    set({ isOpenCategoryOptions: isOpen });
  },
}));

export default useEditModeStore;
