'use client';

import { useBookmarkLike, useGetThumbnailImage } from '@/apis/bookmark';
import { cn } from '@/lib/utils';
import useToastStore from '@/stores/toastStore';
import Image from 'next/image';
import { MouseEvent, useState } from 'react';
import Icon from '../common/Icon';
export interface IBookmarkCard {
  bookMarkId: number;
  categoryNames: Array<number>;
  representImageUrl: string;
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
const BookmarkCard = ({
  bookMarkId,
  representImageUrl,
  title,
  categoryNames,
  memo,
  faviconUrl,
  siteName,
  url,
  imageUUID,
  isFavorite,
  onClick,
}: IBookmarkCard) => {
  const { addToast } = useToastStore();

  // 썸네일 API 요청
  useGetThumbnailImage(imageUUID);

  const { mutateAsync: mutateBookmarkLike } = useBookmarkLike();

  const [isLike, setIsLike] = useState(isFavorite);

  // 북마크 좋아요
  const handleToggleLike = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    mutateBookmarkLike({ bookMarkId, isFavorite: !isLike }).then(() => {
      setIsLike((prev) => !prev);
    });
  };

  const handleCopyUrl = async (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    navigator.clipboard.writeText(url).then(() => {
      addToast('링크가 복사되었습니다.', 'success');
    });
  };

  return (
    <div
      className='cursor-pointer max-h-[342px] mb-40 flex flex-col gap-20 group'
      onClick={onClick}
    >
      <div
        className={cn([
          'h-fit w-fit overflow-hidden rounded-xl',
          'group-hover:shadow-layer group-hover:-translate-y-8 transition-all duration-200',
        ])}
      >
        {representImageUrl ? (
          <img
            className='aspect-[296/180] object-cover'
            src={representImageUrl}
            alt='썸네일'
            width={650}
          />
        ) : (
          <Image
            className='aspect-[296/180] object-cover'
            src='/assets/image/empty_image.png'
            alt='Empty'
            width={650}
            height={400}
          />
        )}
      </div>
      <div className='flex flex-col gap-6 px-10'>
        {categoryNames.length > 0 && (
          <span className='body-sm-bold text-primary'>{categoryNames[0]}</span>
        )}
        <h2 className='body-lg-bold text-text truncate'>{title !== '' ? title : url}</h2>
        <p className='body-md text-text-sub truncate'>{memo}</p>
      </div>
      <div className='relative px-10 flex items-center gap-8'>
        <picture>
          <img
            className='rounded-full'
            src={faviconUrl}
            alt='파비콘'
            width={28}
            height={28}
            onError={(e) => ((e.target as HTMLImageElement).src = '/logo.svg')}
          />
        </picture>
        <span className='body-md text-text truncate'>{siteName}</span>
        <div
          className={cn([
            'absolute right-0 hidden items-center gap-12 bg-surface *:text-icon-minimal group-hover:flex',
            isLike && 'flex',
          ])}
        >
          <button onClick={handleToggleLike}>
            {isLike ? (
              <Icon name='heart_fill' className='w-20 h-20 text-primary' />
            ) : (
              <Icon name='heart' className='w-20 h-20' />
            )}
          </button>
          <button onClick={handleCopyUrl}>
            <Icon name='link_03' className='w-20 h-20' />
          </button>
          <button onClick={(e) => e.stopPropagation()}>
            <Icon name='dotsVertical' className='w-20 h-20' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookmarkCard;
