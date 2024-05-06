import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { PropsWithChildren } from 'react';
import { useSelectState } from '../modules/SelectStateContext';

export interface ISelectInputWrapper extends PropsWithChildren {}

const SelectInputWrapper = ({ children }: ISelectInputWrapper) => {
  const { isDisabled, isInvalid } = useSelectState();

  return (
    <div className={cn(selectInputWrapperVariants({ isDisabled, isInvalid }))}>{children}</div>
  );
};

const selectInputWrapperVariants = cva(
  [
    'w-full max-h-48 h-full flex items-center justify-between gap-8 px-16 py-12 border rounded-lg bg-surface border-border hover:border-border-hover',
  ],
  {
    variants: {
      isInvalid: {
        true: 'bg-surface-critical  border-transparent hover:border-critical-hover',
      },
      isDisabled: {
        true: 'bg-filled-disabled border-transparent hover:border-transparent',
      },
    },
  },
);

export default SelectInputWrapper;
