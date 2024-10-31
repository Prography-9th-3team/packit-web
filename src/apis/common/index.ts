import axios from 'axios';

import { fetchData } from '..';
import apis from '../api';
import { IMetaResponseDataType } from './type';

/**
 * 북마크 이미지 업로드
 * TODO : FormData API 추가 필요
 */
export const fetchUploadImage = async (formData: FormData) => {
  const url = apis.fileUpload.file;

  try {
    const res = await axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return res.data;
  } catch {
    console.error('파일 업로드에 실패했습니다.');
  }
  return;
};

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
