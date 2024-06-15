/* eslint-disable @typescript-eslint/no-explicit-any */
import useAuthStore from '@/stores/authStore';
import { InfiniteData, useInfiniteQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { fetchData } from '.';
import { default as apis } from './api';

interface IBookmarkParamDataType {
  pageNumber?: number;
  size: number;
  direction: 'ASC' | 'DESC';
  property: string;
  categoryId?: number | null;
  isFavorite?: boolean;
}

interface IBookmarkListResponseDataType {
  pageInfo: {
    pageNumber: number;
    size: number;
    total: number;
    lastPage: number;
  };
  content: [];
}

/**
 * 북마크 목록
 */
export const useBookmarkInfinityAPI = (params: IBookmarkParamDataType) => {
  const url = apis.bookmark.bookmark_list;
  const authStore = useAuthStore();

  return useInfiniteQuery<any, unknown, any, any>({
    queryKey: [apis.bookmark.bookmark_list, params],
    queryFn: async ({ pageParam }) => {
      const res = await fetchData.get<IBookmarkListResponseDataType, any, any>(url, {
        params: { ...params, pageNumber: pageParam },
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

export interface ISaveBookmarkDataType {
  categoryIds: Array<number>;
  url: string;
  title: string;
  memo: string;
  favicon?: string;
  siteName?: string;
  representImageUrl: string;
  userInsertRepresentImage?: {
    name: string;
    file: string;
    uuid: string;
    size: number;
    extension: string;
  };
}

/**
 * 북마크 등록
 */
export const useSaveBookmark = () => {
  const queryClient = useQueryClient();
  const url = apis.bookmark.bookmark_save;

  return useMutation<AxiosResponse, AxiosError, ISaveBookmarkDataType>({
    mutationFn: (data) => fetchData.post(url, data),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: [apis.bookmark.bookmark_list],
      }),
  });
};

interface IMetaResponseDataType {
  title: string;
  siteName: string;
  favicon: string;
  description: string;
  image: string;
}

/**
 * Meta tag 가져오기
 */
export const fetchGetMetaData = async (url: string) => {
  try {
    const res = await fetchData.get<{ meta: IMetaResponseDataType }>('/api/meta', {
      params: { url },
    });

    return res.data.result;
  } catch {
    console.error('북마크를 할 수 없는 페이지입니다');
  }
};
