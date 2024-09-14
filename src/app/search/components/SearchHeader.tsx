'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import { useBookmarkSearchInfinityAPI } from '@/apis/bookmark';
import { Button } from '@/components/common/Button';
import ButtonLabel from '@/components/common/Button/ui/ButtonLabel';
import Icon from '@/components/common/Icon';
import { MODAL_NAME } from '@/components/common/Modal/types';
import useModalStore from '@/stores/modalStore';

const SearchHeader = () => {
  const params = useSearchParams();
  const router = useRouter();

  const search = params.get('search') ?? '';

  const { openModal } = useModalStore();

  const { data: bookmarkData } = useBookmarkSearchInfinityAPI({
    size: 10,
    direction: 'DESC',
    property: 'title',
    keyword: search,
  });

  // 재 검색
  const handleReSearch = () => {
    router.back();
    openModal(MODAL_NAME.SEARCH_MODAL);
  };

  return (
    <header className='p-40 flex items-center justify-between'>
      <h1 className='text-text heading-3xl-bd'>
        "{search}"에 대한{' '}
        <span className='text-text-primary'>{bookmarkData?.pageInfo.total ?? 0}</span>개의 검색
        결과에요
      </h1>

      <Button type='text' onClick={handleReSearch}>
        <Icon name='searchSm_s' className='w-16 h-16 text-text-secondary' />
        <ButtonLabel>다시검색</ButtonLabel>
      </Button>
    </header>
  );
};

export default SearchHeader;
