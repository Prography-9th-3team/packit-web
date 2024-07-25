'use client';
import useAuthStore from '@/stores/authStore';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Redirect = () => {
  const router = useRouter();
  const authStore = useAuthStore();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const getTokenFromURL = () => {
        const urlParams = new URLSearchParams(window.location.search);

        return urlParams.get('token');
      };

      const saveTokenAndRedirect = () => {
        const token = getTokenFromURL();

        if (token) {
          document.cookie = `accessToken=${token}; path=/;`;
          authStore.setAccessToken(token);

          // TODO: 이쪽 부분에서 extension <> web 로그인 통신 진행
          if (
            typeof window !== 'undefined' &&
            window.chrome &&
            window.chrome.runtime &&
            window.chrome.runtime.sendMessage
          ) {
            window.chrome.runtime.sendMessage(process.env.NEXT_PUBLIC_EXTENSION_ID, {
              isLogin: true,
              accessToken: token,
            });
          }

          window.close();
          window.opener.postMessage({ tokenSaved: true }, window.location.origin);
        }
      };

      saveTokenAndRedirect();
    }
  }, [router]);

  return <></>;
};

export default Redirect;
