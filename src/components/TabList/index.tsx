'use client';

import { useState } from 'react';

import { ICategoryResponseDataType, useDeleteCategory } from '@/apis/category';
import useQueryString from '@/hooks/useQueyString';
import { cn } from '@/lib/utils';
import useToastStore from '@/stores/toastStore';

import Icon from '../common/Icon';
import { Option } from '../common/Option';
import CategoryEditModal from './CategoryEditModal';

interface ITabList {
  tabs?: Array<ICategoryResponseDataType>;
}

const ALL_TAB_TYPE = '전체';

const TabList = ({ tabs = [] }: ITabList) => {
  const { addToast } = useToastStore();

  const [isHover, setIsHover] = useState<number | null>(null);
  const [isControlModalOpen, setIsControlModalOpen] = useState<boolean>(false);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const { mutateAsync: deleteCategory } = useDeleteCategory();

  const handleModal = () => setIsControlModalOpen((prev) => !prev);

  const handleClickCategory = (categoryId: number) => {
    if (queryTab === String(categoryId ?? ALL_TAB_TYPE)) return;

    setIsControlModalOpen(false);
    updateQueryString('tab', String(categoryId ?? ALL_TAB_TYPE));
  };

  const { queryParam, updateQueryString } = useQueryString();
  const queryTab = queryParam.get('tab') ?? ALL_TAB_TYPE;

  const handleDeleteCategory = async (categoryId: number) => {
    await deleteCategory([categoryId]).then((res) => {
      if (res.status === 200) addToast({ message: '카테고리가 삭제되었어요', type: 'default' });
    });
  };

  const handleCloseModal = () => {
    setIsControlModalOpen(false);
    setIsEditMode(false);
  };

  const isEditableTab = (index: number, categoryId: number | string) => {
    return (
      (categoryId !== null && isHover === index) ||
      (isControlModalOpen && queryTab === String(categoryId))
    );
  };

  return (
    <div className='h-40 relative w-[calc(100%-100px)]'>
      {/* @TODO: 여기에 터치 x 스크롤 달아야함 */}
      <ul
        className={cn(
          'absolute w-full h-[40px] flex gap-28 whitespace-nowrap hide-scroll select-none overflow-x-scroll',
          isControlModalOpen && 'h-[700px]',
        )}
      >
        {tabs.map((tab, index) => (
          <li
            key={tab.categoryId}
            className={cn([
              'cursor-pointer flex h-[40px] gap-2 label-md-bold text-text transition-all duration-150 items-center relative pb-16',
              queryTab === String(tab.categoryId ?? ALL_TAB_TYPE) && 'border-b-2 border-divide-on',
            ])}
            onClick={() => handleClickCategory(tab.categoryId)}
            onMouseEnter={() => setIsHover(index)}
            onMouseLeave={() => setIsHover(null)}
          >
            <div className='flex gap-4'>
              {tab.categoryName} <span className='text-primary'>{tab.bookMarkCount}</span>
            </div>
            {isEditableTab(index, tab.categoryId) && (
              <Icon
                name='dotsVertical'
                className='w-16 h-16 text-text-minimal absolute left-[calc(100%-2px)] top-[2.7px]'
                onClick={handleModal}
              />
            )}
            {!isEditMode && isControlModalOpen && queryTab === String(tab.categoryId) && (
              <div className='absolute top-[calc(100%-8px)] shadow-layer left-[calc(100%-10px)] w-[165px] h-[100px] flex flex-col gap-4 rounded-lg bg-white overflow-hidden z-10'>
                <Option onClick={() => setIsEditMode(true)}>
                  <Option.Label>이름 수정</Option.Label>
                </Option>
                <Option onClick={() => handleDeleteCategory(tab.categoryId)}>
                  <Option.Label>
                    <span className='text-text-critical'>삭제</span>
                  </Option.Label>
                </Option>
              </div>
            )}
            {isEditMode && isControlModalOpen && queryTab === String(tab.categoryId) && (
              <CategoryEditModal
                categoryName={tab.categoryName}
                categoryId={tab.categoryId}
                handleCloseModal={handleCloseModal}
              />
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
