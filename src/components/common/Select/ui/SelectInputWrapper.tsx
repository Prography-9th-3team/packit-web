import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { PropsWithChildren } from 'react';
import { useSelectState } from '../modules/SelectStateContext';

export interface ISelectInputWrapper extends PropsWithChildren {}

const SelectInputWrapper = ({ children }: ISelectInputWrapper) => {
  const { disabled, isInvalid } = useSelectState();

  return <div className={cn(selectInputWrapperVariants({ disabled, isInvalid }))}>{children}</div>;
};

export default SelectInputWrapper;

export const selectInputWrapperVariants = cva(
  [
    'w-full max-h-48 h-full flex items-center justify-between gap-8 px-16 py-12 border rounded-lg bg-surface border-border hover:border-border-hover',
  ],
  {
    variants: {
      isInvalid: {
        true: 'bg-surface-critical  border-transparent hover:border-critical-hover',
      },
      disabled: {
        true: 'bg-filled-disabled border-transparent hover:border-transparent',
      },
    },
  },
);
