'use client';

import { useBookmarkLike } from '@/apis/bookmark';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import useToastStore from '@/stores/toastStore';
import { MouseEvent, useRef, useState } from 'react';
import Icon from '../common/Icon';
import { Option } from '../common/Option';
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
  onModify?: () => void;
  onDelete?: () => void;
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
  url,
  isFavorite,
  onClick,
  onDelete,
}: IBookmarkCard) => {
  const { addToast } = useToastStore();

  const optionRef = useRef<HTMLButtonElement>(null);

  const { mutateAsync: mutateBookmarkLike } = useBookmarkLike();
  const [isLike, setIsLike] = useState(isFavorite);
  const [isShowOption, setIsShowOption] = useState<boolean>(false);

  const bookmarkTitle = title !== '' ? title : url;
  const bookmarkSiteName = siteName !== '' ? siteName : url.split('/')[2];

  useOnClickOutside([optionRef], () => setIsShowOption(false));

  // 북마크 좋아요
  const handleToggleLike = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    mutateBookmarkLike({ bookMarkId, isFavorite: !isLike }).then(() => {
      setIsLike((prev) => !prev);
    });
  };

  const handleCopyUrl = (e: MouseEvent<HTMLButtonElement>) => {
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

  return (
    <div
      className='cursor-pointer h-[66px] px-40 grid grid-cols-[1fr,160px,140px,152px] even:bg-surface-sub hover:bg-action-primary-tonal'
      onClick={onClick}
    >
      <div className='flex flex-col justify-center gap-4 px-8 overflow-hidden'>
        <h2 className='body-md text-text truncate'>{bookmarkTitle}</h2>
        <p className='body-sm text-text-sub truncate'>{memo}</p>
      </div>
      <div className='flex items-center justify-end gap-8 px-8'>
        <span className='body-md text-text truncate'>{bookmarkSiteName}</span>
        <img
          className='rounded-full'
          src={faviconUrl ?? '/logo-white.svg'}
          alt='파비콘'
          width={20}
          height={20}
          onError={(e) => ((e.target as HTMLImageElement).src = '/logo-white.svg')}
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
        <button className='w-40 h-40 flex items-center justify-center' onClick={handleCopyUrl}>
          <Icon name='link_03' className='w-16 h-16' />
        </button>
        <button
          className='relative w-40 h-40 flex items-center justify-center'
          onClick={handleOpenOption}
          ref={optionRef}
        >
          <Icon name='dotsVertical' className='w-20 h-20' />
          {isShowOption && (
            <div className='absolute top-[calc(100%+8px)] right-0 w-[165px] flex flex-col gap-4 p-8 bg-surface rounded-lg shadow-layer z-10'>
              {/* <Option onClick={onModify}>
                  <Option.Label>수정</Option.Label>
                </Option> */}
              <Option onClick={onDelete}>
                <Option.Label className='text-critical'>삭제</Option.Label>
              </Option>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default BookmarkItem;
