import { Suspense } from 'react';

import FilterBox from '@/components/FilterBox';
import SearchContentBox from '@/components/SearchContentBox';

import SearchHeader from './components/SearchHeader';

const Search = () => {
  return (
    <main className='min-w-[755px] bg-surface'>
      <Suspense>
        <SearchHeader />
        <FilterBox />
        {/* 컨텐츠 영역 */}
        <SearchContentBox />
      </Suspense>
    </main>
  );
};

export default Search;
