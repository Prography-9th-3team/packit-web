'use client';

import { ChangeEvent, useRef, useState } from 'react';

import { useCategoryList, useSaveCategory } from '@/apis/category';
import useQueryString from '@/hooks/useQueyString';
import useEditModeStore from '@/stores/editModeStore';
import useToastStore from '@/stores/toastStore';

import TabList from '../TabList';
import { Button } from '../common/Button';
import Divider from '../common/Divider';
import Icon from '../common/Icon';
import AddCategory from './AddCategory';
import EditMode from './EditMode';
import FilterMode from './FilterMode';

const FilterBox = () => {
  const { queryParam } = useQueryString();

  const search = queryParam.get('search');

  const { addToast } = useToastStore();
  const { data: categoryData } = useCategoryList(search);
  const { mutateAsync: mutateSaveCategory } = useSaveCategory();

  const buttonRef = useRef<HTMLDivElement>(null);

  const { isEditMode, setEditMode } = useEditModeStore();

  const [isOpenCategory, setIsOpenCategory] = useState<boolean>(false); // 카테고리 모달 오픈
  const [category, setCategory] = useState<string>(''); // 카테고리 텍스트
  const [isError, setIsError] = useState<boolean>(false); // 카테고리 에러

  const handleChangeCategory = (e: ChangeEvent<HTMLInputElement>) => {
    if (isError) {
      setIsError(false);
    }
    setCategory(e.target.value);
  };

  const handleAddCategory = () => {
    const trimValue = category.trimStart();

    if (!trimValue) {
      addToast({ message: '카테고리를 입력해주세요', type: 'error' });

      return;
    }
    if (trimValue === '전체') {
      setIsError(true);
      addToast({ message: '카테고리가 이미 존재해요', type: 'error' });
      return;
    }

    mutateSaveCategory(trimValue).then((res) => {
      if (res.data.code === 'C002') {
        setIsError(true);
        addToast({ message: res.data.message, type: 'error' });
      } else {
        addToast({ message: '카테고리가 추가되었어요', type: 'success' });
        setIsOpenCategory(false);
        setCategory('');
      }
    });
  };

  return (
    <div>
      <div className='px-40 flex justify-between'>
        <TabList tabs={categoryData} />
        <div className='relative w-[100px]'>
          <div ref={buttonRef} className='w-[100px]'>
            <Button
              type='text'
              size='medium'
              onClick={() => setIsOpenCategory((prev) => !prev)}
              className='p-0 pb-16 text-icon hover:text-secondary-hover'
            >
              <Icon name='plus_circle' className='w-16 h-16' />
              <Button.Label className='label-md-bold text-inherit'>카테고리 추가</Button.Label>
            </Button>
          </div>
          {isOpenCategory && (
            <AddCategory
              category={category}
              isError={isError}
              handleChangeCategory={handleChangeCategory}
              handleAddCategory={handleAddCategory}
              handleCloseModal={() => setIsOpenCategory(false)}
              buttonRef={buttonRef}
            />
          )}
        </div>
      </div>
      <Divider />
      <div className='px-40 py-16 h-[56px] flex justify-between bg-surface-minimal w-full'>
        {isEditMode ? (
          <EditMode handleEditMode={() => setEditMode(false)} />
        ) : (
          <FilterMode handleEditMode={() => setEditMode(true)} />
        )}
      </div>
      <Divider />
    </div>
  );
};

export default FilterBox;
