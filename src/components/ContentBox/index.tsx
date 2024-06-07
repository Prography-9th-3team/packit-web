'use client';

import { useBookmarkInfinityAPI } from '@/apis/bookmark';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import BookmarkCard, { IBookmarkCard } from '../BookmarkCard';
import { Button } from '../common/Button';
import Icon from '../common/Icon';

const ContentBox = () => {
  const [ref, inView] = useInView();

  const {
    data: bookmarkData,
    fetchNextPage,
    hasNextPage,
  } = useBookmarkInfinityAPI({
    size: 10,
    direction: 'DESC',
    property: 'id',
    categoryId: null,
    // isFavorite: false,
  });

  const handleOpenBlank = (url: string) => {
    window.open(url, '_blank');
  };

  useEffect(() => {
    if (hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <section className='mx-auto max-w-[1964px] p-40'>
      {bookmarkData?.content.length > 0 ? (
        <>
          <div className='grid gap-20 2xl:xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
            {bookmarkData.content.map((item: IBookmarkCard) => (
              <BookmarkCard
                key={item.bookMarkId}
                {...item}
                onClick={() => handleOpenBlank(item.url)}
              />
            ))}
          </div>
          <div ref={ref}></div>
        </>
      ) : (
        <div className='mx-auto translate-y-3/4 w-fit flex flex-col items-center'>
          <Icon name='bookmark_add' className='w-24 h-24 text-icon-minimal mb-[14px]' />
          <h2 className='heading-lg-bd text-text mb-6'>북마크를 추가해 볼까요?</h2>
          <p className='body-md text-text-sub mb-24'>
            북마크 파일을 끌어당기거나 북마크 추가 버튼을 눌러 등록해 보세요
          </p>
          <Button type='outline' size='small' onClick={() => alert('북마크 추가 모달')}>
            <Button.Label>북마크 추가</Button.Label>
          </Button>
        </div>
      )}
    </section>
  );
};

export default ContentBox;
