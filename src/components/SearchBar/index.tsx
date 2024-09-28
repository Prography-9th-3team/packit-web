import { debounce } from 'lodash-es';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { useBookmarkSearchInfinityAPI } from '@/apis/bookmark';
import useEscKeyModalEvent from '@/hooks/useEscKeyModalEvent';
import useQueryString from '@/hooks/useQueyString';
import { cn } from '@/lib/utils';
import useModalStore from '@/stores/modalStore';

import SearchItem from '../SearchItem';
import Dim from '../common/Dim';
import Icon from '../common/Icon';
import { MODAL_NAME } from '../common/Modal/types';
import Spinner from '../common/Spinner/Index';
import { SPINNER_SIZE } from '../common/Spinner/constants';

const SearchBar = () => {
  const [ref, inView] = useInView();

  const router = useRouter();

  const { updateQueryString } = useQueryString();
  const { closeModal } = useModalStore();

  useEscKeyModalEvent(MODAL_NAME.SEARCH_MODAL);

  const [searchInput, setSearchInput] = useState<string>();

  const {
    data: bookmarkData,
    fetchNextPage,
    hasNextPage,
  } = useBookmarkSearchInfinityAPI({
    size: 10,
    direction: 'DESC',
    property: 'title',
    keyword: searchInput,
    categoryId: null,
  });

  const handleOnChange = debounce((e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const value = target.value;

    setSearchInput(value);
  }, 300);

  const handleMoveSearchList = () => {
    router.push(`/search?search=${searchInput}`);

    handleCloseModal();
  };

  const handleCloseModal = () => {
    closeModal(MODAL_NAME.SEARCH_MODAL);
  };

  const handleResetSearchKeyword = () => {
    setSearchInput('');
    updateQueryString('search', '');
  };

  const handleEnterKeyEvent = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && (bookmarkData?.pageInfo.total ?? 0) > 0) {
      handleMoveSearchList();
    }
  };

  useEffect(() => {
    if (hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  // Enter Key Event
  useEffect(() => {
    window.addEventListener('keydown', handleEnterKeyEvent);

    return () => {
      window.removeEventListener('keydown', handleEnterKeyEvent);
    };
  }, [handleEnterKeyEvent]);

  return (
    <div className=''>
      <Dim visible zIndex={10} handleClick={handleCloseModal} />
      <div>
        <div className='absolute top-[20%] left-1/2 -translate-x-1/2 z-50 w-full max-w-[480px] bg-white rounded-2xl '>
          <div
            className={cn([
              'py-16 px-20 flex items-center gap-12',
              'w-full max-w-[480px] h-[60px]',
              searchInput && 'rounded-b-none border-b',
            ])}
          >
            <Icon name='searchSm_s' className='w-20 h-20' />
            <input
              className='w-full outline-none heading-lg text-text placeholder:heading-lg placeholder:text-text-sub'
              placeholder='검색어 입력'
              defaultValue={searchInput}
              onChange={handleOnChange}
            />
            <button className='p-6 bg-surface-sub rounded-full' onClick={handleResetSearchKeyword}>
              <Icon name='xClose_s' className='w-10 h-10 text-icon-sub' />
            </button>
          </div>
          {searchInput && (
            // 북마크가 있을 경우
            <div className='max-h-[370px] w-full max-w-[480px] p-8 flex flex-col gap-8 overflow-y-auto styled-scroll'>
              {bookmarkData?.content.length ?? 0 > 0 ? (
                <>
                  {bookmarkData?.content.map((item) => (
                    <SearchItem key={item.bookMarkId} {...item} onClick={handleMoveSearchList} />
                  ))}
                  {hasNextPage && (
                    <div ref={ref} className='flex justify-center'>
                      <Spinner size={SPINNER_SIZE.SM} />
                    </div>
                  )}
                </>
              ) : (
                <div className='p-16 flex flex-col gap-6 items-center'>
                  <h4 className='body-lg text-text-minimal'>
                    <span className='text-text'>“{searchInput}”</span>에 대한 검색결과가 없어요
                  </h4>
                  <p className='body-sm text-text-minimal'>
                    잘못 입력한 정보가 있는지 확인해 보세요.
                  </p>
                </div>
              )}
            </div>
          )}
          {(bookmarkData?.pageInfo?.total ?? 0) > 5 && (
            <div className='pb-8 px-8'>
              <div
                className='cursor-pointer h-48 py-8 px-12 flex items-center justify-between body-lg text-text-sub'
                onClick={handleMoveSearchList}
              >
                {bookmarkData?.pageInfo.total}개 항목 전체보기
                <Icon name='chevronRight' className='w-20 h-20 text-icon-sub' />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
