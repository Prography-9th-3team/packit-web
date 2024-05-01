import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { PropsWithChildren } from 'react';
import { useTagState } from '../modules/TagStateContext';

export interface ITagLabel extends PropsWithChildren {}

const TagLabel = ({ children }: ITagLabel) => {
  const { size, disabled } = useTagState();

  return <span className={cn(tagLabelVariants({ size, disabled }))}>{children}</span>;
};

const tagLabelVariants = cva([], {
  variants: {
    size: {
      xs: 'label-xs',
      sm: 'label-sm',
      default: 'label-md',
    },
    disabled: {
      true: 'text-text-disabled',
      false: 'text-text-sub',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

export default TagLabel;
