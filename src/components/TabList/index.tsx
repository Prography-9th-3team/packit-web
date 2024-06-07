import useQueryString from '@/hooks/useQueyString';
import { cn } from '@/lib/utils';

interface ITabList {
  tabs?: Array<{ title: string; value: string; count: number }>;
}

const TabList = ({ tabs = [] }: ITabList) => {
  const { queryParam, updateQueryString } = useQueryString();
  const queryTab = queryParam.get('tab') ?? '전체';

  return (
    <>
      <ul className='h-40 flex gap-28 overflow-x-scroll whitespace-nowrap'>
        <li
          className={cn([
            'cursor-pointer flex gap-4 label-md-bold text-text',
            queryTab === '전체' && 'border-b-2 border-divide-on',
          ])}
          onClick={() => updateQueryString('tab', '전체')}
        >
          전체 <span className='text-primary'>20</span>
        </li>
        {tabs.map((tab) => (
          <li
            key={tab.value}
            className={cn([
              'cursor-pointer flex gap-4 label-md-bold text-text',
              queryTab === tab.value && 'border-b-2 border-divide-on',
            ])}
            onClick={() => updateQueryString('tab', tab.value)}
          >
            {tab.title} <span className='text-primary'>{tab.count}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TabList;
