import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { PropsWithChildren } from 'react';
import { TagContext } from '../modules/TagStateContext';

export interface ITagMain extends PropsWithChildren, VariantProps<typeof tagMainVariants> {
  disabled?: boolean;
  isButton?: boolean;
  onClick?: () => void;
}

const TagMain = ({ size, disabled = false, isButton = false, children, onClick }: ITagMain) => {
  return (
    <TagContext.Provider value={{ size, disabled }}>
      {isButton ? (
        <button className={cn(tagMainVariants({ size }))} onClick={!disabled ? onClick : () => {}}>
          {children}
        </button>
      ) : (
        <div className={cn(tagMainVariants({ size }))}>{children}</div>
      )}
    </TagContext.Provider>
  );
};

export const tagMainVariants = cva(
  ['inline-flex items-center bg-surface-sub rounded-full backdrop-blur-[6px]'],
  {
    variants: {
      size: {
        xs: 'min-w-20 px-6 py-4 gap-2',
        sm: 'min-w-24 px-8 py-4 gap-4',
        default: 'min-28 px-10 py-2 gap-4',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

export default TagMain;
