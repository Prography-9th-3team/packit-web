'use client';

import { useBookmarkLike } from '@/apis/bookmark';
import { cn } from '@/lib/utils';
import useToastStore from '@/stores/toastStore';
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
  // const path = apis.fileUpload.thumbnail(imageUUID ?? '');

  const SEVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

  const { mutateAsync: mutateBookmarkLike } = useBookmarkLike();
  const [isLike, setIsLike] = useState(isFavorite);

  const bookmarkTitle = title !== '' ? title : url;
  const bookmarkSiteName = siteName !== '' ? siteName : url.split('/')[2];

  // 북마크 좋아요
  const handleToggleLike = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    mutateBookmarkLike({ bookMarkId, isFavorite: !isLike }).then(() => {
      setIsLike((prev) => !prev);
    });
  };

  // 북마크 링크 복사
  const handleCopyUrl = async (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    navigator.clipboard.writeText(url).then(() => {
      addToast('링크가 복사되었습니다.', 'success');
    });
  };

  // empty 이미지 랜덤
  const getRandomNumber = () => {
    return Math.random() < 0.5 ? 1 : 2;
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
        {imageUUID ? (
          // 등록한 썸네일 이미지
          <img
            className='aspect-[296/180] object-cover'
            src={`${SEVER_URL}/file/original/${imageUUID}`}
            alt='썸네일'
            width={650}
          />
        ) : representImageUrl ? (
          // url 썸네일 이미지
          <img
            className='aspect-[296/180] object-cover'
            src={representImageUrl}
            alt='썸네일'
            width={650}
          />
        ) : (
          // Default 이미지
          <img
            className='aspect-[296/180] object-cover'
            src={`/assets/image/empty_image_${getRandomNumber()}.png`}
            alt='썸네일'
            width={650}
          />
        )}
      </div>
      <div className='flex flex-col gap-6 px-10'>
        {categoryNames.length > 0 && (
          <span className='body-sm-bold text-primary'>{categoryNames[0]}</span>
        )}
        <h2 className='body-lg-bold text-text truncate'>{bookmarkTitle}</h2>
        <p className='body-md text-text-sub truncate'>{memo}</p>
      </div>
      <div className='px-10 flex items-center justify-between gap-8'>
        <div className='flex items-center gap-8 truncate'>
          <picture>
            <img
              className='rounded-full min-w-28 h-28'
              src={faviconUrl ?? '/logo-white.svg'}
              alt='파비콘'
              width={28}
              height={28}
              onError={(e) => ((e.target as HTMLImageElement).src = '/logo-white.svg')}
            />
          </picture>
          <span className='body-md text-text truncate'>{bookmarkSiteName}</span>
        </div>
        <div
          className={cn([
            'hidden items-center gap-12 *:text-icon-minimal group-hover:flex',
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
