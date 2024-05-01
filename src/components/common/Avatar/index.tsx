import { cn } from '@/lib/utils';
import Image from 'next/image';
import { AVATAR_SIZE } from './constants';

export interface IAvatar {
  profileUrl?: string;
  size?: (typeof AVATAR_SIZE)[keyof typeof AVATAR_SIZE];
}

const styleWithSize = (size: number) => {
  switch (size) {
    case AVATAR_SIZE.XS:
      return 'w-24 h-24';

    case AVATAR_SIZE.SM:
      return 'w-32 h-32';

    case AVATAR_SIZE.MD:
      return 'w-40 h-40';

    case AVATAR_SIZE.LG:
      return 'w-48 h-48';

    case AVATAR_SIZE.XL:
      return 'w-64 h-64';

    case AVATAR_SIZE.XXL:
      return 'w-96 h-96';

    default:
      return 'w-48 h-48';
  }
};

const Avatar = ({ profileUrl, size = AVATAR_SIZE.LG }: IAvatar) => {
  if (!profileUrl) {
    const sizeStyle = styleWithSize(size);

    return <div className={cn('bg-surface-empty rounded-[50%]', sizeStyle)} />;
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
