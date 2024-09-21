'use client';

import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/common/Button';
import Divider from '@/components/common/Divider';
import Icon from '@/components/common/Icon';
import { Option } from '@/components/common/Option';
import Tooltip from '@/components/common/Tooltip';
import useQueryString from '@/hooks/useQueyString';
import { cn } from '@/lib/utils';

const sortList = [
  { label: '최신순', value: 'DESC' },
  { label: '이름순', value: 'title' },
  { label: '오래된순', value: 'ASC' },
];

interface Props {
  handleEditMode: () => void;
}

const FilterMode = ({ handleEditMode }: Props) => {
  const { queryParam, updateQueryString } = useQueryString();

  const isLikeChecked = queryParam.get('favorite') === 'true'; // 종아요 항목 표시
  const sortType = queryParam.get('sort') ?? 'DESC'; // 정렬 항목 표시
  const viewType = queryParam.get('view') ?? 'grid'; // list 타입 grid | list

  const [isShowSort, setIsShowSort] = useState<boolean>(false);

  const sortTabRef = useRef<HTMLDivElement>(null);

  const handleSelectSortOption = (value: string) => {
    updateQueryString('sort', value);
    setIsShowSort(false);
  };

  // 정렬 option 외부 클릭시 닫힘
  useEffect(() => {
    const handleCloseSortOption = (e: Event) => {
      const target = e.target as HTMLElement;

      if (isShowSort && !sortTabRef.current?.contains(target)) setIsShowSort(false);
    };

    window.addEventListener('click', handleCloseSortOption);

    return () => window.removeEventListener('click', handleCloseSortOption);
  }, [isShowSort]);

  return (
    <>
      <Button
        type='text'
        size='medium'
        onClick={() => updateQueryString('favorite', String(!isLikeChecked))}
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
        {/* 정렬 START */}
        <div className='relative' ref={sortTabRef}>
          <span
            className='cursor-pointer mr-4 flex items-center gap-4 label-md text-text-minimal select-none'
            onClick={() => {
              setIsShowSort((prev) => !prev);
            }}
          >
            {sortList.find((item) => item.value === sortType)?.label}
            {isShowSort ? (
              <Icon name='chevronUp' className='w-20 h-20 ' />
            ) : (
              <Icon name='chevronDown_s' className='w-20 h-20 ' />
            )}
          </span>
          {isShowSort && (
            <div className='absolute top-[calc(100%+8px)] w-[165px] flex flex-col gap-4 p-8 bg-surface rounded-lg shadow-layer z-10'>
              {sortList.map((item) => (
                <Option key={item.value} onClick={() => handleSelectSortOption(item.value)}>
                  <Option.Label>{item.label}</Option.Label>
                </Option>
              ))}
            </div>
          )}
        </div>

        {/* 정렬 END */}
        <button className='relative group' onClick={() => updateQueryString('view', 'grid')}>
          <Icon
            name='grid'
            className={cn([
              'w-20 h-20 text-icon-minimal hover:text-icon',
              viewType === 'grid' && 'text-icon',
            ])}
          />
          <div className='absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 hidden group-hover:block'>
            <Tooltip label='카드 보기' />
          </div>
        </button>
        <button className='relative group' onClick={() => updateQueryString('view', 'list')}>
          <Icon
            name='list'
            className={cn([
              'w-20 h-20 text-icon-minimal hover:text-icon',
              viewType === 'list' && 'text-icon',
            ])}
          />
          <div className='absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 hidden group-hover:block'>
            <Tooltip label='리스트 보기' />
          </div>
        </button>
        <Divider direction='vertical' className='h-1/2 mx-2' />
        <span
          className='cursor-pointer flex items-center gap-4 label-md text-text-minimal'
          onClick={handleEditMode}
        >
          <Icon name='setting' className='w-20 h-20' /> 편집
        </span>
      </div>
    </>
  );
};

export default FilterMode;
