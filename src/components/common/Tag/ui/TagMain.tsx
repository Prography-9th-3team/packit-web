import { VariantProps, cva } from 'class-variance-authority';
import { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

import { TagContext } from '../modules/TagStateContext';

export enum TAG_SIZE {
  XS = 'xs',
  SM = 'sm',
  DEFAULT = 'default',
}

export interface ITagMain extends PropsWithChildren, VariantProps<typeof tagMainVariants> {
  disabled?: boolean;
  isButton?: boolean;
  onClick?: () => void;
}

const TagMain = ({
  size = TAG_SIZE.DEFAULT,
  disabled = false,
  isButton = false,
  children,
  onClick,
}: ITagMain) => {
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
