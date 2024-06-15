'use client';

import ContentBox from '@/components/ContentBox';
import FilterBox from '@/components/FilterBox';
import { useRouter } from 'next/navigation';
import { Suspense, useEffect } from 'react';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    if (!document.cookie.includes('accessToken')) {
      router.push('/login');
    }
  }, []);

  return (
    <main className='bg-surface'>
      <header className='p-40'>
        <h1 className='text-text heading-3xl-bd'>내 북마크</h1>
      </header>
      {/* filter area
        TODO : Suspense fallback Component
      */}
      <Suspense>
        <FilterBox />
      </Suspense>
      {/* 컨텐츠 영역 */}
      <ContentBox />
    </main>
  );
};

export default Home;
