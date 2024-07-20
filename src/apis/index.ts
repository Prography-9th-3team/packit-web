import { deleteCookie, getCookie } from '@/lib/utils';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL;

const axiosInstance = axios.create({
  // baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = getCookie('accessToken');

  config.headers['authorization'] = 'Bearer ' + accessToken;

  return config;
});

axiosInstance.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    const res = error.response.data;

    // token 만료
    if (res.status === 401) {
      deleteCookie('accessToken');
    }
  },
);

export interface IFetchResponse<T> {
  code: string;
  message: string;
  result: T;
}

export const fetchData = {
  get: async <T, R = AxiosResponse<IFetchResponse<T>>, D = unknown>(
    url: string,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> => {
    const res = await axiosInstance.get<IFetchResponse<T>, R, D>(url, config);

    return res;
  },

  post: async <T>(url: string, data: unknown, param?: unknown) => {
    const res = await axiosInstance<IFetchResponse<T>>({
      method: 'post',
      url: url,
      data,
      params: param,
    });

    return res;
  },

  put: async <T>(url: string, data?: unknown) => {
    const res = await axiosInstance<T>({
      method: 'put',
      url: url,
      data,
    });

    return res;
  },

  delete: async <T>(url: string, data: unknown) => {
    const res = await axiosInstance<T>({
      method: 'delete',
      url: url,
      data,
    });

    return res;
  },
};
