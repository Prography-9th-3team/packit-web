import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const useQueryString = () => {
  const router = useRouter();
  const pathname = usePathname();
  const queryParam = useSearchParams();
  const searchParam = new URLSearchParams(queryParam);

  // 쿼리 업데이트
  const updateQueryString = (type: string, value: string) => {
    if (searchParam.has(type)) {
      searchParam.delete(type);
    }

    if (value) {
      searchParam.append(type, value);
    }

    router.replace(`${pathname}?${searchParam.toString()}`);
  };

  return { queryParam, updateQueryString };
};

export default useQueryString;
