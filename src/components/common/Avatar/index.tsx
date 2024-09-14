import Image from 'next/image';

import { cn } from '@/lib/utils';

import Icon from '../Icon';
import { AVATAR_SIZE } from './constants';

export interface IAvatar {
  profileUrl?: string;
  size?: (typeof AVATAR_SIZE)[keyof typeof AVATAR_SIZE];
}

const styleWithSize = (size: number) => {
  switch (size) {
    case AVATAR_SIZE.XS:
      return {
        boxSize: 'w-24 h-24',
        iconSize: 'w-[10px] h-[10px]',
      };

    case AVATAR_SIZE.SM:
      return {
        boxSize: 'w-32 h-32',
        iconSize: 'w-[10px] h-[10px]',
      };

    case AVATAR_SIZE.MD:
      return {
        boxSize: 'w-40 h-40',
        iconSize: 'w-[14px] h-[14px]',
      };

    case AVATAR_SIZE.LG:
      return {
        boxSize: 'w-48 h-48',
        iconSize: 'w-[18px] h-[18px]',
      };

    case AVATAR_SIZE.XL:
      return {
        boxSize: 'w-64 h-64',
        iconSize: 'w-[26px] h-[26px]',
      };

    case AVATAR_SIZE.XXL:
      return {
        boxSize: 'w-96 h-96',
        iconSize: 'w-[40px] h-[40px]',
      };

    default:
      return {
        boxSize: 'w-48 h-48',
        iconSize: 'w-[26px] h-[26px]',
      };
  }
};

const Avatar = ({ profileUrl, size = AVATAR_SIZE.LG }: IAvatar) => {
  if (!profileUrl) {
    const { boxSize, iconSize } = styleWithSize(size);

    return (
      <div
        className={cn(
          'rounded-[50%] flex justify-center items-center',
          'bg-surface-empty hover:bg-[#0000004D] active:bg-[#00000080]',
          boxSize,
        )}
      >
        <Icon name='user_s' className={cn('text-icon-minimal', iconSize)} />
      </div>
    );
  }

  return (
    <Image
      src={profileUrl}
      alt='avatar'
      width={size}
      height={size}
      className='rounded-[50%]'
      loading='lazy'
    />
  );
};

export default Avatar;
