'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const OAuth2RedirectHandler = () => {
  const router = useRouter();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const token = query.get('token');
    const error = query.get('error');

    if (window.opener) {
      window.opener.postMessage({ token, error }, '*');
      window.close(); // 팝업 창 닫기 (필요없으면 지우기)
    } else {
      if (token) {
        console.log('Received token:', token);
        // 토큰 처리 로직 추가
      }
      if (error) {
        console.error('Error received:', error);
      }
      router.push('/'); // 메인 페이지? 혹은 필요한 위치로 리디렉션
    }
  }, [router]);

  return null;
};

export default OAuth2RedirectHandler;
