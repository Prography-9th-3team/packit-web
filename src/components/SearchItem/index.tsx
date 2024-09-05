import Icon from '../common/Icon';

interface ISearchItemProps {
  bookMarkId: number;
  faviconUrl: string;
  memo: string;
  title: string;
}

const SearchItem = ({ faviconUrl, memo, title }: ISearchItemProps) => {
  return (
    <div className='cursor-pointer h-[62px] py-8 px-12 flex items-center gap-12 rounded-lg hover:bg-surface-sub group/item'>
      <img
        className='rounded-full min-w-20 h-20'
        src={faviconUrl ?? '/logo-white.svg'}
        alt='파비콘'
        width={20}
        height={20}
        onError={(e) => ((e.target as HTMLImageElement).src = '/logo-white.svg')}
      />
      <div className='flex-1 overflow-hidden'>
        <h3 className='body-lg text-text-minimal truncate'>{title}</h3>
        {memo && <p className='body-sm text-text-minimal truncate'>{memo}</p>}
      </div>
      <div className='relative hidden group-hover/item:block group/button'>
        <Icon name='arrow_right' className='w-20 h-20 text-icon-sub' />
        {/* <div className='fixed top-[calc(100%+8px)] left-1/2 -translate-x-1/2 hidden group-hover/button:block'>
          <Tooltip label='리스트로 이동' />
        </div> */}
      </div>
    </div>
  );
};

export default SearchItem;
