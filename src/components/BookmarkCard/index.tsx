interface IBookmarkCard {
  image: string;
  title: string;
  category: string;
  description: string;
  faviconUrl: string;
  onClick: () => void;
}

const BookmarkCard = ({
  image,
  title,
  category,
  description,
  faviconUrl,
  onClick,
}: IBookmarkCard) => {
  return (
    <div className='cursor-pointer max-h-[342px] flex flex-col gap-20' onClick={onClick}>
      <div className='h-fit w-fit overflow-hidden rounded-xl'>
        <img className='aspect-[296/180] object-cover' src={image} alt='' />
      </div>
      <div className='flex flex-col gap-6'>
        <span className='body-sm-bold text-primary'>{category}</span>
        <h2 className='body-lg-bold text-text'>{title}</h2>
        <p className='body-md text-text-sub'>{description}</p>
      </div>
      <img className='rounded-full' src={faviconUrl} alt='' width={28} height={28} />
    </div>
  );
};

export default BookmarkCard;
