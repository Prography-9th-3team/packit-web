'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { getCookie } from '@/lib/utils';

const RouteGuard = () => {
  const router = useRouter();

  const protectedPath = ['/'];
  const unProtectedPath = ['/login'];

  const path = usePathname();

  useEffect(() => {
    // auth 접속 가능
    if (protectedPath.includes(path)) {
      if (!document.cookie.includes('accessToken')) {
        router.push('/login');
      }
    }

    // auth 접속 불가능
    if (unProtectedPath.includes(path)) {
      if (document.cookie.includes('accessToken')) {
        router.push('/');
      }
    }

    // 익스텐션 로그인 메시지 전달
    const token = getCookie('accessToken');

    if (
      typeof window !== 'undefined' &&
      window.chrome &&
      window.chrome.runtime &&
      window.chrome.runtime.sendMessage
    ) {
      window.chrome.runtime.sendMessage(process.env.NEXT_PUBLIC_EXTENSION_ID, {
        isLogin: !!token,
        accessToken: token ?? '',
      });
    }
  }, []);

  return <></>;
};

export default RouteGuard;
