import { useQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { fetchData } from '.';
import apis from './api';

interface IUserProfileResponseDataType {
  name: string;
  email: string;
  imageUrl: string;
  createdAt: string;
}

/**
 * 우저 정보
 */
export const useUserProfile = () => {
  const isLogin = document.cookie.includes('accessToken');

  const url = apis.auth.user_profile;

  return useQuery<AxiosResponse, AxiosError, IUserProfileResponseDataType>({
    queryKey: [url],
    queryFn: async () => await fetchData.get(url),
    select: (res) => res?.data.result,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
    enabled: isLogin,
  });
};
