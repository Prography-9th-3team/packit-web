'use client';

import { useGetThumbnailImage } from '@/apis/bookmark';
import { cn } from '@/lib/utils';
import Image from 'next/image';
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
  onClick: () => void;
}

/**
 * TODO : s3로 변경시 thumbnail 가져오는 api 삭제
 */
const BookmarkCard = ({
  representImageUrl,
  title,
  categoryNames,
  memo,
  faviconUrl,
  siteName,
  imageUUID,
  onClick,
}: IBookmarkCard) => {
  const { data } = useGetThumbnailImage(imageUUID);

  console.log(data);

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
        <h2 className='body-lg-bold text-text'>{title}</h2>
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
        <div className='absolute right-0 hidden items-center gap-12 bg-surface *:text-icon-minimal group-hover:flex'>
          <button onClick={(e) => e.stopPropagation()}>
            <Icon name='heart' className='w-20 h-20' />
          </button>
          <button onClick={(e) => e.stopPropagation()}>
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
