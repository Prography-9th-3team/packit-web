import Image from 'next/image';
import { AVATAR_SIZE } from './constants';

interface IAvatar {
  profileUrl?: string;
  size?: (typeof AVATAR_SIZE)[keyof typeof AVATAR_SIZE];
}

const Avatar = ({ profileUrl, size = AVATAR_SIZE['LG'] }: IAvatar) => {
  if (!profileUrl) return <div className={`w-${size} h-${size} bg-surface-empty rounded-[50%]`} />;
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
