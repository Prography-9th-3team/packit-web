import ContentBox from '@/components/ContentBox';
import FilterBox from '@/components/FilterBox';
import { Suspense } from 'react';

const Home = () => {
  return (
    <main className='bg-surface'>
      <header className='p-40'>
        <h1 className='text-text heading-3xl-bd'>내 북마크</h1>
      </header>
      <Suspense>
        <FilterBox />
        {/* 컨텐츠 영역 */}
        <ContentBox />
      </Suspense>
    </main>
  );
};

export default Home;
