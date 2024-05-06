import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { PropsWithChildren } from 'react';
import { useTextfieldState } from '../module/TextfieldStateContext';

export interface ITextfieldInput extends PropsWithChildren {}

// TextfieldInput 무조건 들어가야하고, Icon은 선택적으로 들어갈 수 있음.
const TextfieldInputWrapper = ({ children }: ITextfieldInput) => {
  const { isDisabled, isInvalid } = useTextfieldState();

  return (
    <div className={cn(textfieldInputWrapperVariants({ isDisabled, isInvalid }))}>{children}</div>
  );
};

const textfieldInputWrapperVariants = cva(
  [
    'flex gap-8 px-16 py-12 h-48 w-full items-center self-stretch rounded-lg border border-solid border-border',
    'hover:border-border-hover focus-within:border-border-focus',
  ],
  {
    variants: {
      isInvalid: {
        true: 'bg-surface-critical border-surface-critical hover:border-critical-hover focus-within:border-critical-hover',
      },
      isDisabled: {
        true: 'bg-filled-disabled text-text-disabled border-opacity-0 hover:border-opacity-0 focus-within:border-opacity-0',
      },
    },
  },
);

export default TextfieldInputWrapper;
