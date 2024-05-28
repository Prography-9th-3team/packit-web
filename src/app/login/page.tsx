'use client';

import apis from '@/apis/api';
import Icon from '@/components/common/Icon';
import Logo from '@/components/common/Logo';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Login = () => {
  const router = useRouter();

  const handleLogin = () => {
    try {
      const popupWidth = 600;
      const popupHeight = 730;

      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      const popupLeft = (screenWidth - popupWidth) / 2 + window.screenX;
      const popupTop = (screenHeight - popupHeight) / 2 + window.screenY;

      const redirectUri = apis.auth.google_login('http://localhost:3000/oauth2/redirect');

      window.open(
        redirectUri,
        'Packit Login',
        `width=${popupWidth},height=${popupHeight},left=${popupLeft},top=${popupTop},scrollbars=yes,resizable=yes`,
      );
    } catch (error) {
      console.error('Error during Google login:', error);
    }
  };

  useEffect(() => {
    const handleTokenSaved = (event: MessageEvent) => {
      if (event.origin === window.location.origin && event.data.tokenSaved) {
        console.log('Token saved message received');
        router.push('/');
      }
    };

    // Check for the accessToken in cookies
    if (document.cookie.includes('accessToken')) {
      router.push('/');
    }

    // Add event listener for message from popup
    window.addEventListener('message', handleTokenSaved);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('message', handleTokenSaved);
    };
  }, [router]);

  return (
    <div className='w-full h-full flex items-center justify-center flex-col'>
      <div className='flex flex-col gap-32 justify-center items-center w-360 mb-[26px]'>
        <Logo type='symbol' />
        <span className='text-center heading-3xl-bd'>
          패킷으로 쉽고 간편하게
          <br />
          나만의 인사이트를 관리하세요
        </span>
        <button
          onClick={handleLogin}
          className='w-full h-48 px-16 py-12 border border-border rounded-lg heading-md-bold flex items-center gap-[65px]'
        >
          <Icon name='google' />
          <span>Google 계정으로 로그인</span>
        </button>
      </div>
      <span className='body-sm text-center text-icon-sub'>
        로그인 시 서비스의 <span className='underline'>개인 정보 보호 정책</span> 및{' '}
        <span className='underline'>서비스 약관</span>에 동의하게 되며,
        <br /> 서비스 이용을 위해 이메일과 이름, 프로필 이미지를 수집합니다.
      </span>
    </div>
  );
};

export default Login;
