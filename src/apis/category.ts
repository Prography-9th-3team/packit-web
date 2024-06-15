import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { fetchData } from '.';
import apis from './api';

export interface ICategoryResponseDataType {
  categoryId: number;
  categoryName: string;
  bookMarkCount: number;
}

/**
 * 카테고리 목록
 */
export const useCategoryList = () => {
  const url = apis.category.category_list;

  return useQuery<AxiosResponse, AxiosError, Array<ICategoryResponseDataType>>({
    queryKey: [url],
    queryFn: () => fetchData.get(url),
    select: (res) => res.data.result,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
  });
};

/**
 * 카테고리 등록
 */
export const useSaveCategory = () => {
  const queryClient = useQueryClient();
  const url = apis.category.category_save;

  return useMutation<AxiosResponse, AxiosError, string>({
    mutationFn: (data) => fetchData.post(url, {}, { categoryName: decodeURI(data) }),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: [apis.category.category_list],
      }),
  });
};
