import { cn } from '@/lib/utils';
import { ChangeEvent, useState } from 'react';
import TabList from '../TabList';
import { Button } from '../common/Button';
import Divider from '../common/Divider';
import Icon from '../common/Icon';
import { Textfield } from '../common/Textfield';
import TextfieldInput from '../common/Textfield/ui/TextfieldInput';
import TextfieldInputWrapper from '../common/Textfield/ui/TextfieldInputWrapper';

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

const FilterBox = () => {
  const [checked, setChecked] = useState(false); // 종아요 항목 표시
  const [isOpenCategory, setIsOpenCategory] = useState<boolean>(false); // 카테고리 모달 오픈
  const [category, setCategory] = useState<string>(''); // 카테고리 텍스트
  const [isError, setIsError] = useState<boolean>(false); // 카테고리 에러

  const [viewType, setViewType] = useState<string>('grid'); // list 타입 grid | list

  const handleChangeCategory = (e: ChangeEvent<HTMLInputElement>) => {
    if (isError) {
      setIsError(false);
    }
    setCategory(e.target.value);
  };

  /**
   * TODO :
   * - 카테고리 등록 API
   * - 유효성 검증 case 추가 필요
   * - 카테고리 영역 밖 크릭 or esc 닫기
   */
  const handleAddCategory = () => {
    if (!category) {
      alert('카테고리를 입력해주세요.');
    }
    if (category === '전체') {
      setIsError(true);
    }
    // category API

    alert('카테고리가 추가되었어요.');
  };

  return (
    <div>
      <div className='px-40 flex justify-between'>
        <TabList tabs={TAB_LIST} />
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
            <div className='absolute right-0 top-[calc(100%-8px)] p-8 grid grid-cols-[300px_1fr] gap-8 bg-surface rounded-xl shadow-layer'>
              <Textfield
                value={category}
                onChange={handleChangeCategory}
                placeholder='새 카테고리 추가'
                isInvalid={isError}
              >
                <TextfieldInputWrapper>
                  <TextfieldInput />
                  {isError && (
                    <Icon name='warningTriangle_f' className='w-16 h-16 text-icon-critical' />
                  )}
                </TextfieldInputWrapper>
              </Textfield>
              <Button type='primary' size='large' onClick={handleAddCategory}>
                <Button.Label>추가</Button.Label>
              </Button>
            </div>
          )}
        </div>
      </div>
      <Divider />
      <div className='px-40 py-16 flex justify-between bg-surface-minimal'>
        <Button
          type='text'
          size='medium'
          onClick={() => setChecked((prev) => !prev)}
          className='p-0'
        >
          <Icon
            name='check_circle'
            className={cn(['w-16 h-16 text-icon-minimal', checked && 'text-icon-primary'])}
          />
          <Button.Label className={cn(['text-text-minimal', checked && 'text-primary'])}>
            좋아요 항목만 표시
          </Button.Label>
        </Button>
        <div className='flex items-center gap-12'>
          <span className='cursor-pointer mr-4 flex items-center gap-4 label-md text-text-minimal'>
            최신순 <Icon name='chevronDown_s' className='w-20 h-20 ' />
          </span>
          <button onClick={() => setViewType('grid')}>
            <Icon
              name='grid'
              className={cn([
                'w-20 h-20 text-icon-minimal hover:text-icon',
                viewType === 'grid' && 'text-icon',
              ])}
            />
          </button>
          <button onClick={() => setViewType('list')}>
            <Icon
              name='list'
              className={cn([
                'w-20 h-20 text-icon-minimal hover:text-icon',
                viewType === 'list' && 'text-icon',
              ])}
            />
          </button>
          <Divider direction='vertical' className='h-1/2 mx-2' />
          <span className='cursor-pointer  flex items-center gap-4 label-md text-text-minimal'>
            <Icon name='setting' className='w-20 h-20 ' /> 편집
          </span>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default FilterBox;
