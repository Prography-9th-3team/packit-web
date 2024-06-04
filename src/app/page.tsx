'use client';

import FilterBox from '@/components/FilterBox';

const Home = () => {
  return (
    <main className='bg-surface'>
      <header className='p-40'>
        <h1 className='text-text heading-3xl-bd'>내 북마크</h1>
      </header>
      {/* filter area */}
      <FilterBox />
    </main>
  );
};

export default Home;
