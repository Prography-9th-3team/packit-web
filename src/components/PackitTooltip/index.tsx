import { cn } from '@/lib/utils';

const PackitTooltip = () => {
  return (
    <div
      className={cn([
        'fixed top-20 right-20 px-10 py-8 bg-text rounded-[10px]',
        'after:absolute after:w-12 after:h-12 after:-top-4 after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:bg-text after:rounded-sm',
      ])}
    >
      <p className='text-white'>패킷을 크롬 상단에 고정해 주세요!</p>
    </div>
  );
};

export default PackitTooltip;
