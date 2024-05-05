import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { PropsWithChildren } from 'react';
import { useTextfieldState } from '../module/TextfieldStateContext';

export interface ITextfieldInput extends PropsWithChildren {}

// TextfieldInput 무조건 들어가야하고, Icon은 선택적으로 들어갈 수 있음.
const TextfieldInputWrapper = ({ children }: ITextfieldInput) => {
  const { disabled, isInvalid } = useTextfieldState();

  return (
    <div className={cn(textfieldInputWrapperVariants({ disabled, isInvalid }))}>{children}</div>
  );
};

const textfieldInputWrapperVariants = cva(
  [
    'flex gap-8 px-16 py-12 h-48 w-full items-center self-stretch rounded-lg border border-solid',
    'hover:border-border-hover focus-within:border-border-focus',
  ],
  {
    variants: {
      disabled: {
        true: 'bg-filled-disabled text-text-disabled border-none hover:border-none focus-within:border-none',
      },
      isInvalid: {
        true: 'bg-surface-critical border-surface-critical hover:border-1 hover:border-critical-hover  focus-within:border-critical-hover focus-within:border',
      },
    },
  },
);

export default TextfieldInputWrapper;