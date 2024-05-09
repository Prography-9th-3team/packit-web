import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { PropsWithChildren } from 'react';

export interface IOptionMain extends PropsWithChildren {
  isSelected?: boolean;
  onClick?: () => void;
}

const OptionMain = ({ isSelected, onClick, children }: IOptionMain) => {
  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();

    if (onClick) onClick();
  };

  return (
    <div className={cn(optionMainVariants({ isSelected }))} onClick={handleOnClick}>
      {children}
    </div>
  );
};

export default OptionMain;

const optionMainVariants = cva(
  ['min-h-48 flex items-center justify-between gap-8 py-8 px-12 rounded-lg hover:bg-surface-sub'],
  {
    variants: {
      isSelected: {
        true: 'bg-action-primary-tonal hover:bg-action-primary-tonal',
      },
    },
  },
);
