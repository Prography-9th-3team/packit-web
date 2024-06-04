import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const useQueryString = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = new URLSearchParams(searchParams);

  const queryParam = (() => {
    const map = new Map<string, string>();

    query.forEach((value, key) => {
      map.set(key, value);
    });

    return map;
  })();

  const updateQueryString = (type: string, value: string) => {
    query.delete(type, query.get(type) || '');

    if (value) {
      query.append(type, value);
    }
    router.replace(pathname + '?' + query.toString());
  };

  return { queryParam, updateQueryString };
};

export default useQueryString;
