'use client';

import { useRecommendBookmarkList } from '@/apis/recommend';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import BookmarkCard from '../BookmarkCard';

const Feed = () => {
  const pathName = usePathname();

  const pathList = ['/login', '/onboarding', '/oauth2/redirect', '/landing'];

  const { data: bookmarkData } = useRecommendBookmarkList();

  const handleOpenBlank = ({ url }: { url: string }) => {
    window.open(url, '_blank');
  };

  return (
    <>
      {!pathList.includes(pathName) && (
        <div
          className={cn(
            'overflow-scroll h-full w-[260px] right-0 flex px-12 pt-40 gap-[14px] flex-col bg-surface',
            'border-l border-[#E9E9EA] styled-scroll',
          )}
        >
          <h1 className='heading-lg-bd'>이런 사이트는 어때요?</h1>
          <div className='flex flex-col gap-24'>
            {bookmarkData?.content.map((item) => (
              <BookmarkCard
                key={item.bookMarkId}
                {...item}
                imageUUID={item.userInsertRepresentImage?.uuid}
                onClick={() => handleOpenBlank({ url: item.url })}
                isRecommendCard={true}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Feed;
