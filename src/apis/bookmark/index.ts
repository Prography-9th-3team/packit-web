/* eslint-disable @typescript-eslint/no-explicit-any */
import { InfiniteData, useInfiniteQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

import useAuthStore from '@/stores/authStore';
import useToastStore from '@/stores/toastStore';

import { fetchData } from '..';
import { default as apis, urlParams } from '../api';
import {
  BookmarkLikeDataType,
  IBookmarkListResponseDataType,
  IBookmarkParamDataType,
  IBookmarkSearchListResponseDataType,
  ISaveBookmarkDataType,
} from './type';

/**
 * 북마크 목록
 */
export const useBookmarkInfinityAPI = (params: IBookmarkParamDataType) => {
  const url = apis.bookmark.bookmark_list;
  const authStore = useAuthStore();

  return useInfiniteQuery<any, unknown, IBookmarkListResponseDataType, any>({
    queryKey: [apis.bookmark.bookmark_list, params],
    queryFn: async ({ pageParam }) => {
      const res = await fetchData.get(url, {
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

/**
 * 북마크 등록
 */
export const useSaveBookmark = () => {
  const queryClient = useQueryClient();
  const url = apis.bookmark.bookmark_save;

  return useMutation<AxiosResponse, AxiosError, ISaveBookmarkDataType>({
    mutationFn: (data) => fetchData.post(url, data),
    onSuccess: () => {
      // 북마크 리스트 리패치
      queryClient.removeQueries({
        queryKey: [apis.bookmark.bookmark_list],
      });

      // 카테고리 리스트 리패치
      queryClient.removeQueries({
        queryKey: [apis.category.category_list],
      });
    },
  });
};

/**
 * 북마크 좋아요
 */
export const useBookmarkLike = () => {
  const url = apis.bookmark.bookmark_like;

  return useMutation<AxiosResponse, AxiosError, BookmarkLikeDataType>({
    mutationFn: (data) => fetchData.put(url + urlParams(data)),
  });
};

/**
 * 북마크 읽음 조회
 */
export const fetchBookmarkReadCount = (bookMarkId: number) => {
  const url = apis.bookmark.bookmark_read;

  return fetchData.put(url, { bookMarkId });
};

/**
 * 북마크 삭제
 */
export const useBookmarkDelete = () => {
  const queryClient = useQueryClient();
  const url = apis.bookmark.bookmark_delete;

  return useMutation<AxiosResponse, AxiosError, Array<number>>({
    mutationFn: (data) => fetchData.delete(url, data),
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: [apis.bookmark.bookmark_list],
      });
      queryClient.refetchQueries({
        queryKey: [apis.category.category_list, null],
      });
    },
  });
};

/**
 * 북마크 삭제 Restore
 */
export const useBookmarkRestore = () => {
  const queryClient = useQueryClient();
  const url = apis.bookmark.bookmark_restore;
  const { addToast } = useToastStore();

  return useMutation<AxiosResponse, AxiosError, Array<number>>({
    mutationFn: (data) => fetchData.post(url, data),
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: [apis.bookmark.bookmark_list],
      });
      queryClient.refetchQueries({
        queryKey: [apis.category.category_list],
      });
      addToast({
        message: '북마크가 복구되었어요.',
        type: 'default',
      });
    },
  });
};

/**
 * 북마크 검색
 */
export const useBookmarkSearchInfinityAPI = (params: IBookmarkParamDataType) => {
  const url = apis.bookmark.bookmark_search;
  const authStore = useAuthStore();

  return useInfiniteQuery<any, unknown, IBookmarkSearchListResponseDataType, any>({
    queryKey: [apis.bookmark.bookmark_list, params],
    queryFn: async ({ pageParam }) => {
      const res = await fetchData.get(url, {
        params: { ...params, pageNumber: pageParam },
      });

      return res.data;
    },
    initialPageParam: 0,
    getNextPageParam: (page: any) => {
      const { lastPage, pageNumber } = page.result.pageInfo;

      return !lastPage ? pageNumber + 1 : null;
    },
    select: (res: InfiniteData<{ result: IBookmarkSearchListResponseDataType }>) => {
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
    enabled: authStore.isLogin() && Boolean(params.keyword),
  });
};

/**
 * 북마크 카테고리 이동
 */
export const useBookmarkMoveCategory = () => {
  const queryClient = useQueryClient();
  const url = apis.bookmark.bookmark_move_category;

  return useMutation<
    AxiosResponse,
    AxiosError,
    {
      bookMarkMovingDtos: {
        originCategoryId: number | null;
        movingCategoryId: number | null;
        bookMarkId: number;
      }[];
    }
  >({
    mutationFn: (data) => fetchData.put(url, data),
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: [apis.bookmark.bookmark_list],
      });
      queryClient.refetchQueries({
        queryKey: [apis.category.category_list],
      });
    },
  });
};
