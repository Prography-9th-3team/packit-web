'use client';

import Logo from '@/components/common/Logo';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import GoogleButton from './components/GoogleButton';

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    const handleTokenSaved = (event: MessageEvent) => {
      if (event.origin === window.location.origin && event.data.tokenSaved) {
        // router.push('/');
        location.href = '/';
      }
    };

    if (document.cookie.includes('accessToken')) {
      router.push('/');
    }

    window.addEventListener('message', handleTokenSaved);

    return () => {
      window.removeEventListener('message', handleTokenSaved);
    };
  }, [router]);

  return (
    <>
      {/* Desktop 뷰 */}
      <div className='hidden h-full md:grid grid-cols-2'>
        {/* 좌측 영역 */}
        <div className='h-full flex items-center justify-center flex-col'>
          <div className='flex flex-col gap-32 justify-center items-center w-360 mb-[26px]'>
            <Logo type='default' width={126} height={30} />
            <span className='text-center heading-3xl-bd'>
              패킷으로 쉽고 간편하게
              <br />
              나만의 인사이트를 관리하세요
            </span>
            <GoogleButton />
          </div>
          <span className='body-sm text-center text-text-minimal'>
            로그인 시 서비스의 <span className='underline'>개인 정보 보호 정책</span> 및{' '}
            <span className='underline'>서비스 약관</span>에 동의하게 되며,
            <br /> 서비스 이용을 위해 이메일과 이름, 프로필 이미지를 수집합니다.
          </span>
        </div>
        {/* 우측 영역 */}
        <div className='w-full flex items-center bg-black overflow-hidden'>
          <img
            className='ml-[120px] w-min-[722px] h-min-[440px] w-full h-auto aspect-[843/722]'
            src='/assets/image/login_image.png'
            alt='로그인 이미지'
          />
        </div>
      </div>
      {/* Mobile 뷰 */}
      <div className='h-full md:hidden'>
        <div className='pt-32 px-10 flex flex-col gap-32'>
          <div className='flex flex-col gap-20 justify-center items-center mb-[26px]'>
            <Logo type='default' width={126} height={30} />
            <span className='text-center heading-3xl-bd'>
              패킷으로 쉽고 간편하게
              <br />
              나만의 인사이트를
              <br />
              관리하세요
            </span>
          </div>
          <div
            className='w-full flex items-center border border-[] rounded-2xl overflow-hidden'
            style={{
              border: '1px solid rgba(0, 0, 0, 0.03)',
              background:
                'linear-gradient(180deg, rgba(226, 229, 236, 0.80) 0%, rgba(226, 229, 236, 0.60) 100%)',
            }}
          >
            <div className='pt-[38px] pl-[36px]'>
              <img
                className='w-full h-auto aspect-[843/722]'
                src='/assets/image/login_image.png'
                alt='로그인 이미지'
              />
            </div>
          </div>
        </div>

        <div
          className='px-20 pt-24 pb-20 w-full flex flex-col gap-12 sticky bottom-0'
          style={{
            background:
              'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.07) 0.78%, rgba(255, 255, 255, 0.15) 1.7%, rgba(255, 255, 255, 0.25) 3.19%, #FFF 14.17%)',
          }}
        >
          <GoogleButton />
          <span className='body-sm text-center text-text-minimal'>
            로그인 시 서비스의 <span className='underline'>개인 정보 보호 정책</span> 및{' '}
            <span className='underline'>서비스 약관</span>에 동의하게 되며,
            <br /> 서비스 이용을 위해 이메일과 이름, 프로필 이미지를 수집합니다.
          </span>
        </div>
      </div>
    </>
  );
};

export default Login;
