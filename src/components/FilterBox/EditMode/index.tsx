import { useRef, useState } from 'react';

import { fetchBookmarkReadCount } from '@/apis/bookmark';
import { useCategoryList } from '@/apis/category';
import { Button } from '@/components/common/Button';
import Divider from '@/components/common/Divider';
import Icon from '@/components/common/Icon';
import { Option } from '@/components/common/Option';
import useEventListener from '@/hooks/useEventListener';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { cn } from '@/lib/utils';
import useEditModeStore from '@/stores/editModeStore';

interface Props {
  handleEditMode: () => void;
}

const EditMode = ({ handleEditMode }: Props) => {
  const { selectedBookmarks, getSelectedBookmarksLength, resetSelectedBookmarks } =
    useEditModeStore();

  const { data: categoryData } = useCategoryList();

  const [isOpenCategoryOptions, setIsOpenCategoryOptions] = useState<boolean>(false);
  const moveDivRef = useRef<HTMLDivElement>(null);

  useOnClickOutside([moveDivRef], () => setIsOpenCategoryOptions(false));

  const handleEscKeyEvent = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && isOpenCategoryOptions) {
      setIsOpenCategoryOptions(false);
    }
  };

  useEventListener('keydown', handleEscKeyEvent);

  const openNewBlankTab = async () => {
    selectedBookmarks.forEach((bookmark) => {
      fetchBookmarkReadCount(bookmark.bookmarkId)
        .then(() => {
          window.open(bookmark.url, bookmark.url);
        })
        .catch((error) => {
          console.error(error);
        });
    });
  };

  return (
    <>
      <div className='flex items-center'>
        <div className='flex items-center gap-8 mr-12'>
          <div
            className={cn(
              'box-content w-16 h-16 rounded-[4px] border border-solid transition-all duration-200 cursor-pointer',
              getSelectedBookmarksLength() > 0
                ? 'bg-action-primary border-action-primary'
                : 'border-border',
            )}
            onClick={resetSelectedBookmarks}
          >
            {getSelectedBookmarksLength() > 0 && (
              <Icon name='minus' className='text-icon-on w-16 h-16' />
            )}
          </div>
          <span className='body-md'>
            <span className='text-primary'>{`${getSelectedBookmarksLength()}개`}</span>
            {' 선택'}
          </span>
        </div>

        <Divider direction={'vertical'} className='mr-12' />

        <div className='flex items-center gap-8'>
          <Button
            type={'outline'}
            size={'small'}
            onClick={openNewBlankTab}
            isDisabled={getSelectedBookmarksLength() !== 1}
          >
            <Icon name='share' className='w-16 h-16 text-icon-secondary' />
            <Button.Label>새탭 열기</Button.Label>
          </Button>
          <div className='relative' ref={moveDivRef}>
            <Button
              type={'outline'}
              size={'small'}
              isDisabled={getSelectedBookmarksLength() === 0}
              onClick={() => setIsOpenCategoryOptions((prev) => !prev)}
            >
              <Icon name='flip_forward' className='w-16 h-16 text-icon-secondary' />
              <Button.Label>이동</Button.Label>
            </Button>

            {isOpenCategoryOptions && (
              <div className='absolute top-[calc(100%+8px)] py-8 gap-4 z-[200] bg-white w-[280px] flex flex-col items-start rounded-[8px] shadow-layer'>
                {categoryData
                  ?.filter((category) => !!category.categoryId)
                  .map((category) => (
                    <Option
                      key={category.categoryId}
                      className='w-full cursor-pointer'
                      onClick={() => console.log(category.categoryId)}
                    >
                      <Option.Label>{category.categoryName}</Option.Label>
                    </Option>
                  ))}
              </div>
            )}
          </div>
          <Button
            type={'outline'}
            size={'small'}
            isDisabled={getSelectedBookmarksLength() === 0}
            onClick={() => {
              console.log('삭제');
            }}
          >
            <Icon name='trash_can' className='w-16 h-16 text-icon-secondary' />
            <Button.Label>삭제</Button.Label>
          </Button>
        </div>
      </div>
      <div className='flex gap-8 items-center'>
        <Button
          type={'secondary'}
          size={'small'}
          className='h-32'
          onClick={() => {
            resetSelectedBookmarks();
            handleEditMode();
          }}
        >
          <Button.Label>취소</Button.Label>
        </Button>
        {/* <Button type={'primary'} size={'small'} className='h-32' isDisabled>
          <Button.Label>저장</Button.Label>
        </Button> */}
      </div>
    </>
  );
};

export default EditMode;
