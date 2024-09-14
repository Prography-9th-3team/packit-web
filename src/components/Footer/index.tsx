'use client';

import { usePathname } from 'next/navigation';

import Divider from '../common/Divider';
import Logo from '../common/Logo';

/**
 * TODO :
 * 1차 개발
 */
const Footer = () => {
  const pathName = usePathname();

  const pathList = ['/login', '/onboarding', '/oauth2/redirect'];

  return (
    <>
      {!pathList.includes(pathName) && (
        <footer className='w-full min-h-[152px] py-24 flex flex-col justify-center items-center gap-10 bg-surface'>
          <Logo width={66.56} height={16} className='text-[#15181E] opacity-50' />
          <div className='flex items-center gap-8 text-text-minimal label-md'>
            <a
              href='https://flying-syzygy-563.notion.site/b8f77a5a304c4b2d9edefe988d1d55bb'
              target='_blank'
              rel='noreferrer'
            >
              개인정보처리방침
            </a>
            <Divider direction='vertical' className='h-1/3 bg-divide-minimal' />
            <div>copyright © packit. All rights reserved</div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
