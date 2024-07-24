import useAuthStore from '@/stores/authStore';
import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
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
  const url = apis.auth.user_profile;
  const authStore = useAuthStore();

  return useQuery<AxiosResponse, AxiosError, IUserProfileResponseDataType>({
    queryKey: [url],
    queryFn: async () => await fetchData.get(url),
    select: (res) => res?.data.result,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
    enabled: authStore.isLogin(),
  });
};

export const useDeleteAccount = () => {
  const router = useRouter();
  const url = apis.auth.delete_account;

  return useMutation<AxiosResponse, AxiosError, void>({
    mutationFn: async () => await fetchData.put(url),
    onSuccess: () => router.push('/login'),
  });
};
