import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { cn } from '@/lib/utils';

import Icon from '../Icon';

export interface IRankMenu {
  order: number;
  title: string;
  linkIconUrl: string;
  linkUrl: string;
}

// Todo: Hover 시, Icon 클릭 fn 추가 필요
const RankMenu = ({ order, title, linkIconUrl, linkUrl }: IRankMenu) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link
      href={linkUrl}
      target='_blank'
      rel='noreferrer noopener'
      className='flex items-center gap-8 w-[236px] px-12 py-6 bg-surface rounded-md hover:bg-surface-sub'
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className='label-md-bold text-text w-[18px] h-full flex justify-center items-center'>
        {order}
      </div>
      <div
        className={cn(
          'text-text-sub label-md flex-grow items-center h-full truncate',
          `${!isHover ? 'w-[162px]' : 'w-[138px]'}`,
        )}
      >
        {title}
      </div>
      {!isHover ? (
        <Image
          src={linkIconUrl}
          height={16}
          width={16}
          className='overflow-hidden rounded-[50%]'
          alt='Icon'
        />
      ) : (
        <>
          <Icon
            name='bookmark_add'
            width={16}
            height={16}
            className='text-icon-minimal cursor-pointer'
          />
          <Icon
            name='link_03'
            width={16}
            height={16}
            className='text-icon-minimal cursor-pointer'
          />
        </>
      )}
    </Link>
  );
};

export default RankMenu;
