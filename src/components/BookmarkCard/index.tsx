'use client';

import { MouseEvent, useRef, useState } from 'react';

import { useBookmarkLike } from '@/apis/bookmark';
import { bookmarkValidateSiteName } from '@/constants/data';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { isValidUrl } from '@/lib/url';
import { cn } from '@/lib/utils';
import useEditModeStore from '@/stores/editModeStore';
import useToastStore from '@/stores/toastStore';

import Icon from '../common/Icon';
import { Option } from '../common/Option';

export interface IBookmarkCard {
  bookMarkId: number;
  categoryDtos: Array<{ categoryName: string; categoryId: number }>;
  representImageUrl: string;
  title: string;
  memo: string;
  faviconUrl: string;
  siteName: string;
  url: string;
  fileName?: string;
  isFavorite?: boolean;
  onClick: () => void;
  onDelete?: () => void;
  onModify?: () => void;
  isRecommendCard?: boolean;
  type?: 'default' | 'search';
}

const BookmarkCard = ({
  bookMarkId,
  representImageUrl,
  title,
  categoryDtos,
  memo,
  faviconUrl,
  siteName,
  url,
  fileName,
  isFavorite,
  onClick,
  onDelete,
  isRecommendCard = false,
  type = 'default',
}: IBookmarkCard) => {
  const { addToast } = useToastStore();
  const { isSelectedBookmark, isEditMode } = useEditModeStore();

  const optionRef = useRef<HTMLButtonElement>(null);

  const { mutateAsync: mutateBookmarkLike } = useBookmarkLike();

  const [isLike, setIsLike] = useState(isFavorite);
  const [isShowOption, setIsShowOption] = useState<boolean>(false);

  useOnClickOutside([optionRef], () => setIsShowOption(false));

  const bookmarkTitle = title !== '' ? title : url;
  const bookmarkSiteName = siteName !== '' ? siteName : url.split('/')[2];

  // 이미지 url
  const userImageUrl = process.env.NEXT_PUBLIC_AWS_S3_URL;

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
      addToast({ message: '링크가 복사되었습니다.', type: 'success' });
    });
  };

  // 북마크 옵션 오픈
  const handleOpenOption = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    setIsShowOption((prev) => !prev);
  };

  // empty 이미지 랜덤
  const getRandomNumber = () => {
    return Math.random() < 0.5 ? 1 : 2;
  };

  return (
    <div
      className='cursor-pointer max-h-[342px] mb-40 flex flex-col gap-20 group relative'
      onClick={onClick}
    >
      <div
        className={cn([
          'h-fit w-fit overflow-hidden rounded-xl',
          'group-hover:shadow-layer group-hover:-translate-y-8 transition-all duration-200',
        ])}
      >
        {isEditMode && !isRecommendCard && (
          <div className='absolute top-16 left-16'>
            <div
              className={cn(
                'box-content w-16 h-16 rounded-[4px] border border-solid transition-all duration-200 bg-white',
                isSelectedBookmark(bookMarkId)
                  ? 'bg-action-primary border-action-primary'
                  : 'border-border',
              )}
            >
              {isSelectedBookmark(bookMarkId) && (
                <Icon name='checkOn_f' className='text-icon-on w-16 h-16' />
              )}
            </div>
          </div>
        )}
        {fileName ? (
          // 등록한 썸네일 이미지
          <img
            className='aspect-[296/180] object-cover'
            src={`${userImageUrl}/${fileName}`}
            alt='썸네일'
            width={650}
            onError={(e) =>
              ((e.target as HTMLImageElement).src =
                `/assets/image/empty_image_${getRandomNumber()}.png`)
            }
          />
        ) : representImageUrl &&
          !bookmarkValidateSiteName.includes(siteName ?? '') &&
          isValidUrl(representImageUrl) ? (
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
        {categoryDtos && categoryDtos.length > 0 && (
          <span className='body-sm-bold text-primary'>{categoryDtos[0].categoryName}</span>
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
        {!isRecommendCard && (
          <div
            className={cn([
              'hidden items-center gap-12 *:text-icon-minimal group-hover:flex',
              (isLike || isShowOption) && 'flex',
            ])}
          >
            {/* 타입이 search가 아닌 경우 노출 */}
            {type !== 'search' && (
              <button onClick={handleToggleLike}>
                {isLike ? (
                  <Icon name='heart_fill' className='w-20 h-20 text-primary' />
                ) : (
                  <Icon name='heart' className='w-20 h-20' />
                )}
              </button>
            )}
            <button onClick={handleCopyUrl}>
              <Icon name='link_03' className='w-20 h-20' />
            </button>
            {/* 타입이 search가 아닌 경우 노출 */}
            {type !== 'search' && (
              <button className='relative' onClick={handleOpenOption} ref={optionRef}>
                <Icon name='dotsVertical' className='w-20 h-20' />
                {isShowOption && (
                  <div className='absolute top-[calc(100%+8px)] w-[165px] flex flex-col gap-4 p-8 bg-surface rounded-lg shadow-layer z-10'>
                    {/* <Option onClick={onModify}>
                  <Option.Label>수정</Option.Label>
                </Option> */}
                    <Option onClick={onDelete}>
                      <Option.Label className='text-critical'>삭제</Option.Label>
                    </Option>
                  </div>
                )}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookmarkCard;
