import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const useQueryString = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [queryParam, setQueryParam] = useState(new Map<string, string>());

  // 쿼리는 객체로 변환
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const paramMap = new Map<string, string>(
      Array.from(searchParams.entries()).map(([key, value]) => [key, value]),
    );

    setQueryParam(paramMap);
  }, []);

  // 쿼리 업데이트
  const updateQueryString = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (searchParams.has(type)) {
      searchParams.delete(type);
    }

    if (value) {
      searchParams.append(type, value);
    }

    router.replace(`${pathname}?${searchParams.toString()}`);
  };

  return { queryParam, updateQueryString };
};

export default useQueryString;
