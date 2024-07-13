'use client';

import { ICategoryResponseDataType } from '@/apis/category';
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

  const handleModal = () => setIsControlModalOpen((prev) => !prev);

  const handleClickCategory = (categoryId: number) => {
    if (queryTab === String(categoryId ?? '전체')) return;

    setIsControlModalOpen(false);
    updateQueryString('tab', String(categoryId ?? '전체'));
  };

  const { queryParam, updateQueryString } = useQueryString();
  const queryTab = queryParam.get('tab') ?? '전체';

  return (
    <ul
      className={cn(
        'h-40 flex gap-28 whitespace-nowrap hide-scroll relative select-none overflow-x-scroll',
        isControlModalOpen && 'overflow-visible',
      )}
    >
      {tabs.map((tab, index) => (
        <li
          key={tab.categoryId}
          className={cn([
            'cursor-pointer flex gap-2 label-md-bold text-text transition-all duration-150 items-center relative pb-16',
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
              className='w-16 h-16 text-text-minimal absolute left-[calc(100%-2px)]'
              onClick={handleModal}
            />
          )}
          {isControlModalOpen && queryTab === String(tab.categoryId ?? '전체') && (
            <div className='absolute top-[calc(100%-8px)] left-[calc(100%-10px)] w-[165px] h-[100px] flex flex-col gap-4 rounded-lg shadow-layer bg-white overflow-hidden z-10'>
              <Option>
                <Option.Label>이름 수정</Option.Label>
              </Option>
              <Option>
                <Option.Label>삭제</Option.Label>
              </Option>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TabList;
