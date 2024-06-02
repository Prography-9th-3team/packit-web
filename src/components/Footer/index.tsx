import Logo from '../common/Logo';

/**
 * TODO :
 * 이후 LOGO Icon으로 변경 예정
 * 1차 개발
 */
const Footer = () => {
  return (
    <footer className='w-full h-[148px] py-24 flex flex-col justify-center items-center gap-10 bg-surface'>
      <Logo width={66.56} height={16} className='text-[#15181E] opacity-50' />
      <div className='text-text-minimal label-md'>copyright © packit. All rights reserved</div>
    </footer>
  );
};

export default Footer;
