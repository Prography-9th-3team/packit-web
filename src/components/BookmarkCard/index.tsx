import Image from 'next/image';

export interface IBookmarkCard {
  bookMarkId: number;
  categoryNames: Array<number>;
  representImageUrl: string;
  title: string;
  category: string;
  memo: string;
  faviconUrl: string;
  siteName: string;
  url: string;
  onClick: () => void;
}

const BookmarkCard = ({
  representImageUrl,
  title,
  category,
  memo,
  faviconUrl,
  onClick,
}: IBookmarkCard) => {
  return (
    <div className='cursor-pointer max-h-[342px] flex flex-col gap-20' onClick={onClick}>
      <div className='h-fit w-fit overflow-hidden rounded-xl shadow-layer'>
        {representImageUrl ? (
          <img
            className='aspect-[296/180] object-cover'
            src={representImageUrl}
            alt=''
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
      <div className='flex flex-col gap-6'>
        <span className='body-sm-bold text-primary'>{category}</span>
        <h2 className='body-lg-bold text-text'>{title}</h2>
        <p className='body-md text-text-sub'>{memo}</p>
      </div>
      <img className='rounded-full' src={faviconUrl} alt='' width={28} height={28} />
    </div>
  );
};

export default BookmarkCard;
