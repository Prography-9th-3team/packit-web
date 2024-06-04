'use client';

import FilterBox from '@/components/FilterBox';
import { Button } from '@/components/common/Button';
import Icon from '@/components/common/Icon';

const Home = () => {
  return (
    <main className='bg-surface'>
      <header className='p-40'>
        <h1 className='text-text heading-3xl-bd'>내 북마크</h1>
      </header>
      {/* filter area */}
      <FilterBox />
      {/* 컨텐츠 영역 */}
      <div>
        {/* Empty Content */}
        <div className='mx-auto translate-y-3/4 w-fit flex flex-col items-center'>
          <Icon name='bookmark_add' className='w-24 h-24 text-icon-minimal mb-[14px]' />
          <h2 className='heading-lg-bd text-text mb-6'>북마크를 추가해 볼까요?</h2>
          <p className='body-md text-text-sub mb-24'>
            북마크 파일을 끌어당기거나 북마크 추가 버튼을 눌러 등록해 보세요
          </p>
          <Button type='outline' size='small' onClick={() => alert('북마크 추가 모달')}>
            <Button.Label>북마크 추가</Button.Label>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Home;
