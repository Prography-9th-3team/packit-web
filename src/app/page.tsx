'use client';

import TabList from '@/components/TabList';
import { Button } from '@/components/common/Button';
import Divider from '@/components/common/Divider';
import Icon from '@/components/common/Icon';

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
        <div className='px-40 flex justify-between'>
          <TabList tabs={TAB_LIST} />
          <Button
            type='text'
            size='medium'
            onClick={() => alert('카테고리 모달')}
            className='p-0 pb-16 text-secondary'
          >
            <Icon name='plus_circle' className='w-16 h-16 text-icon' />
            <Button.Label className='label-md-bold'>카테고리 추가</Button.Label>
          </Button>
        </div>
        <Divider />
        <div></div>
      </div>
    </main>
  );
};

export default Home;
