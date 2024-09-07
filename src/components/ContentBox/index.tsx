'use client';

import {
  fetchBookmarkReadCount,
  useBookmarkDelete,
  useBookmarkInfinityAPI,
  useBookmarkRestore,
} from '@/apis/bookmark';
import useQueryString from '@/hooks/useQueyString';
import { cn } from '@/lib/utils';
import useModalStore from '@/stores/modalStore';
import useToastStore from '@/stores/toastStore';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import BookmarkCard from '../BookmarkCard';
import BookmarkItem from '../BookmarkItem';
import { Button } from '../common/Button';
import Divider from '../common/Divider';
import Icon from '../common/Icon';
import { MODAL_NAME } from '../common/Modal/types';

const ContentBox = () => {
  const [ref, inView] = useInView();

  const { queryParam } = useQueryString();
  const { openModal } = useModalStore();
  const { addToast } = useToastStore();

  const { mutateAsync: mutateBookmarkDelete } = useBookmarkDelete();
  const { mutateAsync: mutateBookmarkRestore } = useBookmarkRestore();

  // 카테고리
  const categoryId =
    queryParam.get('tab') === null || queryParam.get('tab') === '전체'
      ? null
      : queryParam.get('tab');
  // 목록 view
  const listView = queryParam.get('view') ?? 'grid';

  const {
    data: bookmarkData,
    fetchNextPage,
    hasNextPage,
  } = useBookmarkInfinityAPI({
    size: 10,
    direction: String(
      queryParam.get('sort') === 'title' ? 'ASC' : queryParam.get('sort') ?? 'DESC',
    ),
    property: queryParam.get('sort') !== 'title' ? 'createdAt' : 'title',
    categoryId,
    isFavorite: queryParam.get('favorite') === 'true',
  });

  const handleOpenBlank = ({ url, bookMarkId }: { url: string; bookMarkId: number }) => {
    fetchBookmarkReadCount(bookMarkId);

    window.open(url, '_blank');
  };

  // 북마크 수정
  const handleRestoreBookmark = async (bookMarkId: number) => {
    await mutateBookmarkRestore([bookMarkId]);
  };

  // 북마크 삭제
  const handleDeleteBookmark = async (bookMarkId: number) => {
    const res = await mutateBookmarkDelete([bookMarkId]);

    if (res.data.code === '200') {
      addToast({
        message: '북마크가 삭제되었어요',
        type: 'default',
        clickText: '복구하기 ',
        onClick: () => {
          handleRestoreBookmark(bookMarkId);
        },
      });
    }
  };

  useEffect(() => {
    if (hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <section className={cn(['mx-auto max-w-[1964px]', listView === 'grid' && 'p-40'])}>
      {bookmarkData?.content.length ?? 0 > 0 ? (
        <>
          {listView === 'grid' ? (
            <div className='grid gap-20 2xl:xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 grid-cols-2'>
              {bookmarkData?.content.map((item) => (
                <BookmarkCard
                  key={item.bookMarkId}
                  {...item}
                  imageUUID={item.userInsertRepresentImage?.uuid}
                  onClick={() => handleOpenBlank({ url: item.url, bookMarkId: item.bookMarkId })}
                  onDelete={() => handleDeleteBookmark(item.bookMarkId)}
                  // onModify={() => handleDeleteBookmark(item.bookMarkId)}
                />
              ))}
            </div>
          ) : (
            <>
              <div className='py-12 px-40 grid grid-cols-[1fr,160px,140px,152px] body-md'>
                <div>이름</div>
                <div className='px-8 text-end'>사이트</div>
                <div className='px-8 text-end'>카테고리</div>
              </div>
              <Divider />
              <div className='flex flex-col'>
                {bookmarkData?.content.map((item) => (
                  <BookmarkItem
                    key={item.bookMarkId}
                    {...item}
                    imageUUID={item.userInsertRepresentImage?.uuid}
                    onClick={() => handleOpenBlank({ url: item.url, bookMarkId: item.bookMarkId })}
                    onDelete={() => handleDeleteBookmark(item.bookMarkId)}
                  />
                ))}
              </div>
            </>
          )}
          <div ref={ref}></div>
        </>
      ) : (
        <div className='mx-auto translate-y-3/4 w-fit flex flex-col items-center'>
          <Icon name='bookmark_add' className='w-24 h-24 text-icon-minimal mb-[14px]' />
          <h2 className='heading-lg-bd text-text mb-6'>북마크를 추가해 볼까요?</h2>
          <p className='body-md text-text-sub mb-24'>
            {/* 북마크 파일을 끌어당기거나 북마크 추가 버튼을 눌러 등록해 보세요 */}
            북마크 추가 버튼을 눌러 등록해 보세요
          </p>
          <Button type='outline' size='small' onClick={() => openModal(MODAL_NAME.BOOKMARK_MODAL)}>
            <Button.Label>북마크 추가</Button.Label>
          </Button>
        </div>
      )}
    </section>
  );
};

export default ContentBox;
