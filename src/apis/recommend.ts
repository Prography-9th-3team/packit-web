/* eslint-disable @typescript-eslint/no-explicit-any */

import useAuthStore from '@/stores/authStore';
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { fetchData } from '.';
import { default as apis } from './api';
import { IBookmarkListResponseDataType } from './bookmark';

export const useRecommendBookmarkList = () => {
  const url = apis.recommend.recommend_bookmarks;
  const authStore = useAuthStore();

  return useInfiniteQuery<any, unknown, IBookmarkListResponseDataType, any>({
    queryKey: [apis.bookmark.bookmark_list],
    queryFn: async ({ pageParam }) => {
      const res = await fetchData.get(url, {
        params: { pageNumber: pageParam, size: 8 },
      });

      return res.data;
    },
    initialPageParam: 0,
    getNextPageParam: (page: any) => {
      const { lastPage, pageNumber } = page.result.pageInfo;

      return !lastPage ? pageNumber + 1 : null;
    },
    select: (res: InfiniteData<{ result: IBookmarkListResponseDataType }>) => {
      const content = res.pages.reduce((prev: any, cur: any) => {
        return [...prev, ...cur.result.content];
      }, []);

      return {
        content,
        pageInfo: res.pages[0].result.pageInfo,
      };
    },
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 10,
    enabled: authStore.isLogin(),
  });
};
