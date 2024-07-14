'use client';

import { ICategoryResponseDataType, useDeleteCategory } from '@/apis/category';
import useQueryString from '@/hooks/useQueyString';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import Icon from '../common/Icon';
import { Option } from '../common/Option';

interface ITabList {
  tabs?: Array<ICategoryResponseDataType>;
}

const TabList = ({ tabs = [] }: ITabList) => {
  const [isHover, setIsHover] = useState<number | null>(null);
  const [isControlModalOpen, setIsControlModalOpen] = useState<boolean>(false);

  const { mutateAsync: deleteCategory } = useDeleteCategory();

  const handleModal = () => setIsControlModalOpen((prev) => !prev);

  const handleClickCategory = (categoryId: number) => {
    if (queryTab === String(categoryId ?? '전체')) return;

    setIsControlModalOpen(false);
    updateQueryString('tab', String(categoryId ?? '전체'));
  };

  const { queryParam, updateQueryString } = useQueryString();
  const queryTab = queryParam.get('tab') ?? '전체';

  const handleDeleteCategory = async (categoryId: number) => {
    await deleteCategory([categoryId]).then((res) => {
      if (res.status === 200) console.log(res.status);
    });
  };

  return (
    <div className='h-40 relative w-[calc(100%-100px)]'>
      <ul
        className={cn(
          'absolute w-full h-[500px] flex gap-28 whitespace-nowrap hide-scroll select-none overflow-x-scroll',
        )}
      >
        {tabs.map((tab, index) => (
          <li
            key={tab.categoryId}
            className={cn([
              'cursor-pointer flex h-[40px] gap-2 label-md-bold text-text transition-all duration-150 items-center relative pb-16',
              queryTab === String(tab.categoryId ?? '전체') && 'border-b-2 border-divide-on',
            ])}
            onClick={() => handleClickCategory(tab.categoryId)}
            onMouseEnter={() => setIsHover(index)}
            onMouseLeave={() => setIsHover(null)}
          >
            <div className='flex gap-4'>
              {tab.categoryName} <span className='text-primary'>{tab.bookMarkCount}</span>
            </div>
            {(isHover === index ||
              (isControlModalOpen && queryTab === String(tab.categoryId ?? '전체'))) && (
              <Icon
                name='dotsVertical'
                className='w-16 h-16 text-text-minimal absolute left-[calc(100%-2px)] top-[2.7px]'
                onClick={handleModal}
              />
            )}
            {isControlModalOpen && queryTab === String(tab.categoryId ?? '전체') && (
              <div className='absolute top-[calc(100%-8px)] shadow-layer left-[calc(100%-10px)] w-[165px] h-[100px] flex flex-col gap-4 rounded-lg bg-white overflow-hidden z-10'>
                <Option>
                  <Option.Label>이름 수정</Option.Label>
                </Option>
                <Option onClick={() => handleDeleteCategory(tab.categoryId)}>
                  <Option.Label>
                    <span className='text-text-critical'>삭제</span>
                  </Option.Label>
                </Option>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div
        className='w-20 h-24 absolute right-0'
        style={{
          background:
            'linear-gradient(270deg, #FFF 0%, rgba(255, 255, 255, 0.95) 25%, rgba(255, 255, 255, 0.85) 41.02%, rgba(255, 255, 255, 0.78) 50.13%, rgba(255, 255, 255, 0.65) 61.75%, rgba(255, 255, 255, 0.45) 73.87%, rgba(255, 255, 255, 0.25) 86.25%, rgba(255, 255, 255, 0.00) 100%)',
        }}
      />
    </div>
  );
};

export default TabList;
