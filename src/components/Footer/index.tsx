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

  return (
    <>
      {pathName !== '/login' && (
        <footer className='w-full h-[148px] py-24 flex flex-col justify-center items-center gap-10 bg-surface'>
          <Logo width={66.56} height={16} className='text-[#15181E] opacity-50' />
          <div className='flex items-center gap-8 text-text-minimal label-md'>
            <a href='#'>개인정보처리방침</a>
            <Divider direction='vertical' className='h-1/3 bg-divide-minimal' />
            <div>copyright © packit. All rights reserved</div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
