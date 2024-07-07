'use client';

import { useBookmarkLike } from '@/apis/bookmark';
import { MouseEvent, useState } from 'react';
import Icon from '../common/Icon';
export interface IBookmarkCard {
  bookMarkId: number;
  categoryNames: Array<number>;
  title: string;
  memo: string;
  faviconUrl: string;
  siteName: string;
  url: string;
  imageUUID?: string;
  isFavorite: boolean;
  onClick: () => void;
}

/**
 * TODO : s3로 변경시 thumbnail 가져오는 api 삭제
 */
const BookmarkItem = ({
  bookMarkId,
  title,
  categoryNames,
  memo,
  faviconUrl,
  siteName,
  // imageUUID,
  isFavorite,
  onClick,
}: IBookmarkCard) => {
  // const { data } = useGetThumbnailImage(imageUUID);

  const { mutateAsync: mutateBookmarkLike } = useBookmarkLike();

  const [isLike, setIsLike] = useState(isFavorite);

  // 북마크 좋아요
  const handleToggleLike = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    mutateBookmarkLike({ bookMarkId, isFavorite: !isLike }).then(() => {
      setIsLike((prev) => !prev);
    });
  };

  return (
    <div
      className='cursor-pointer h-[66px] px-40 grid grid-cols-[1fr,160px,140px,152px] even:bg-surface-sub hover:bg-action-primary-tonal'
      onClick={onClick}
    >
      <div className='flex flex-col justify-center gap-4 px-8 overflow-hidden'>
        <h2 className='body-md text-text truncate'>{title}</h2>
        <p className='body-sm text-text-sub truncate'>{memo}</p>
      </div>
      <div className='flex items-center justify-end gap-8 px-8'>
        <span className='body-md text-text truncate'>{siteName}</span>
        <img
          className='rounded-full'
          src={faviconUrl}
          alt='파비콘'
          width={20}
          height={20}
          onError={(e) => ((e.target as HTMLImageElement).src = '/logo.svg')}
        />
      </div>
      <div className='flex items-center justify-end px-8'>
        {categoryNames.length > 0 && <span className='body-md text-text'>{categoryNames[0]}</span>}
      </div>
      <div className='flex items-center justify-center gap-4 *:text-icon-minimal'>
        <button className='w-40 h-40 flex items-center justify-center' onClick={handleToggleLike}>
          {isLike ? (
            <Icon name='heart_fill' className='w-16 h-16 text-primary' />
          ) : (
            <Icon name='heart' className='w-16 h-16' />
          )}
        </button>
        <button
          className='w-40 h-40 flex items-center justify-center'
          onClick={(e) => e.stopPropagation()}
        >
          <Icon name='link_03' className='w-16 h-16' />
        </button>
        <button
          className='w-40 h-40 flex items-center justify-center'
          onClick={(e) => e.stopPropagation()}
        >
          <Icon name='dotsVertical' className='w-20 h-20' />
        </button>
      </div>
    </div>
  );
};

export default BookmarkItem;
