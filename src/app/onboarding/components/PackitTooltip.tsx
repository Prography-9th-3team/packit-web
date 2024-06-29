import { cn } from '@/lib/utils';

const PackitTooltip = () => {
  return (
    <div className='fixed top-20 right-20'>
      <div
        className={cn([
          'relative py-[7.5px] px-10 body-md text-text-on bg-text rounded-[10px]',
          'before:content-[""] before:w-12 before:h-12 before:bg-text before:absolute before:-top-4 before:left-1/2 before:-translate-x-1/2 before:rounded-sm before:rotate-45',
        ])}
      >
        패킷을 크롬 상단에 고정해 주세요!
      </div>
    </div>
  );
};

export default PackitTooltip;
