import { usePathname, useRouter } from 'next/navigation';

import { useBookmarkMoveCategory } from '@/apis/bookmark';
import useEditModeStore, { MovingBookmarkDto } from '@/stores/editModeStore';
import useToastStore from '@/stores/toastStore';

// 실제 API 함수 경로로 수정

const useHandleMoveCategory = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { addToast } = useToastStore();

  const { mutate: moveCategory } = useBookmarkMoveCategory();
  // Zustand 스토어에서 필요한 상태와 함수 가져오기
  const {
    selectedBookmarks,
    setMovedBookmarks,
    resetSelectedBookmarks,
    setEditMode,
    setIsOpenCategoryOptions,
  } = useEditModeStore((state) => ({
    selectedBookmarks: state.selectedBookmarks,
    setMovedBookmarks: state.setMovedBookmarks,
    resetSelectedBookmarks: state.resetSelectedBookmarks,
    setEditMode: state.setEditMode,
    setIsOpenCategoryOptions: state.setIsOpenCategoryOptions,
  }));

  // DTO 생성 함수
  const createMovingBookmarksDtos = (
    bookmarks: typeof selectedBookmarks,
    categoryId: number,
  ): MovingBookmarkDto[] => {
    return bookmarks.map((bookmark) => ({
      originCategoryId: bookmark.categoryDtos.length ? bookmark.categoryDtos[0].categoryId : null,
      bookMarkId: bookmark.bookmarkId,
      movingCategoryId: categoryId,
    }));
  };

  // 복구 DTO 생성 함수
  const createReverseDtos = (dtos: MovingBookmarkDto[]): MovingBookmarkDto[] => {
    return dtos.map((dto) => ({
      originCategoryId: dto.movingCategoryId,
      bookMarkId: dto.bookMarkId,
      movingCategoryId: dto.originCategoryId,
    }));
  };

  // 복구 핸들러 함수
  const handleRestore = (reverseDtos: MovingBookmarkDto[]) => {
    moveCategory(
      {
        bookMarkMovingDtos: reverseDtos,
      },
      {
        onSuccess: () => {
          addToast({
            message: '북마크 이동을 복구했어요.',
            type: 'default',
          });

          setMovedBookmarks(reverseDtos.map((dto) => dto.bookMarkId));

          if (reverseDtos.length > 0) {
            router.replace(`${pathname}/?tab=${reverseDtos[0].movingCategoryId}`);
          }
        },
        onError: () => {
          addToast({
            message: '복구에 실패했어요.',
            type: 'error',
          });
        },
      },
    );
  };

  // 성공 시 처리 함수
  const handleMoveSuccess = (movingBookmarksDtos: MovingBookmarkDto[]) => {
    setMovedBookmarks(selectedBookmarks.map((bookmark) => bookmark.bookmarkId));

    addToast({
      message: '북마크를 이동했어요.',
      type: 'default',
      clickText: '복구하기',
      onClick: () => {
        const reverseDtos = createReverseDtos(movingBookmarksDtos);

        handleRestore(reverseDtos);
      },
    });

    resetSelectedBookmarks();
    setEditMode(false);

    if (movingBookmarksDtos.length > 0) {
      router.replace(`${pathname}/?tab=${movingBookmarksDtos[0].movingCategoryId}`);
    }
  };

  // 에러 핸들러 함수
  const handleMoveError = () => {
    addToast({
      message: '북마크 이동에 실패했어요.',
      type: 'error',
    });
  };

  // 메인 이동 핸들러 함수
  const handleMoveCategory = (categoryId: number) => {
    const movingBookmarksDtos = createMovingBookmarksDtos(selectedBookmarks, categoryId);

    moveCategory(
      {
        bookMarkMovingDtos: movingBookmarksDtos,
      },
      {
        onSuccess: () => handleMoveSuccess(movingBookmarksDtos),
        onError: handleMoveError,
      },
    );

    setIsOpenCategoryOptions(false);
  };

  return { handleMoveCategory };
};

export default useHandleMoveCategory;
