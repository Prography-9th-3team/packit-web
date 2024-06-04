'use client';

import TabList from '@/components/TabList';

const TAB_LIST = [
  {
    title: '레퍼런스',
    value: '레퍼런스',
    count: 8,
  },
  {
    title: '아이데이션',
    value: '아이데이션',
    count: 22,
  },
  {
    title: '기타',
    value: '기타',
    count: 5,
  },
];

const Home = () => {
  return (
    <main className='bg-surface'>
      <header className='p-40'>
        <h1 className='text-text heading-3xl-bd'>내 북마크</h1>
      </header>
      {/* filter area */}
      <div>
        <TabList tabs={TAB_LIST} />
      </div>
    </main>
  );
};

export default Home;
