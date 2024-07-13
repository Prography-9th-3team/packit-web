'use client';

import { useCategoryList, useSaveCategory } from '@/apis/category';
import useQueryString from '@/hooks/useQueyString';
import { cn } from '@/lib/utils';
import useToastStore from '@/stores/toastStore';
import { ChangeEvent, useState } from 'react';
import TabList from '../TabList';
import { Button } from '../common/Button';
import Divider from '../common/Divider';
import Icon from '../common/Icon';
import AddCategory from './AddCategory';

const FilterBox = () => {
  const { queryParam, updateQueryString } = useQueryString();

  const { addToast } = useToastStore();
  const { data: categoryData } = useCategoryList();
  const { mutateAsync: mutateSaveCategory } = useSaveCategory();

  const isLikeChecked = queryParam.get('like-check') === 'true'; // 종아요 항목 표시
  const viewType = queryParam.get('view') ?? 'grid'; // list 타입 grid | list

  const [isOpenCategory, setIsOpenCategory] = useState<boolean>(false); // 카테고리 모달 오픈
  const [category, setCategory] = useState<string>(''); // 카테고리 텍스트
  const [isError, setIsError] = useState<boolean>(false); // 카테고리 에러

  const handleChangeCategory = (e: ChangeEvent<HTMLInputElement>) => {
    if (isError) {
      setIsError(false);
    }
    setCategory(e.target.value);
  };

  /**
   * TODO :
   * - 유효성 검증 case 추가 필요
   * - 카테고리 영역 밖 클릭 or esc 닫기
   */
  const handleAddCategory = () => {
    if (!category) {
      addToast('카테고리를 입력해주세요', 'error');

      return;
    }
    if (category === '전체') {
      setIsError(true);
      addToast('카테고리가 이미 존재해요', 'error');
      return;
    }

    mutateSaveCategory(category).then((res) => {
      if (res) {
        addToast('카테고리가 추가되었어요', 'success');
        setIsOpenCategory(false);
        setCategory('');
      }
    });
  };

  return (
    <div>
      <div className='px-40 flex justify-between'>
        <TabList tabs={categoryData} />
        <div className='relative'>
          <Button
            type='text'
            size='medium'
            onClick={() => setIsOpenCategory((prev) => !prev)}
            className='p-0 pb-16 text-icon hover:text-secondary-hover'
          >
            <Icon name='plus_circle' className='w-16 h-16' />
            <Button.Label className='label-md-bold text-inherit'>카테고리 추가</Button.Label>
          </Button>
          {isOpenCategory && (
            <AddCategory
              category={category}
              isError={isError}
              handleChangeCategory={handleChangeCategory}
              handleAddCategory={handleAddCategory}
              handleCloseModal={() => setIsOpenCategory(false)}
            />
          )}
        </div>
      </div>
      <Divider />
      <div className='px-40 py-16 flex justify-between bg-surface-minimal'>
        <Button
          type='text'
          size='medium'
          onClick={() => updateQueryString('like-check', String(!isLikeChecked))}
          className='p-0'
        >
          <Icon
            name='check_circle'
            className={cn(['w-16 h-16 text-icon-minimal', isLikeChecked && 'text-icon-primary'])}
          />
          <Button.Label className={cn(['text-text-minimal', isLikeChecked && 'text-primary'])}>
            좋아요 항목만 표시
          </Button.Label>
        </Button>
        <div className='flex items-center gap-12'>
          <span className='cursor-pointer mr-4 flex items-center gap-4 label-md text-text-minimal'>
            최신순 <Icon name='chevronDown_s' className='w-20 h-20 ' />
          </span>
          <button onClick={() => updateQueryString('view', 'grid')}>
            <Icon
              name='grid'
              className={cn([
                'w-20 h-20 text-icon-minimal hover:text-icon',
                viewType === 'grid' && 'text-icon',
              ])}
            />
          </button>
          <button onClick={() => updateQueryString('view', 'list')}>
            <Icon
              name='list'
              className={cn([
                'w-20 h-20 text-icon-minimal hover:text-icon',
                viewType === 'list' && 'text-icon',
              ])}
            />
          </button>
          <Divider direction='vertical' className='h-1/2 mx-2' />
          <span className='cursor-pointer flex items-center gap-4 label-md text-text-minimal'>
            <Icon name='setting' className='w-20 h-20' /> 편집
          </span>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default FilterBox;
