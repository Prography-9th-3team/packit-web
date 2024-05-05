import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { PropsWithChildren } from 'react';

export interface ITextfieldInput extends PropsWithChildren {
  disabled?: boolean;
  isInvalid?: boolean;
}

// TextfieldInput 무조건 들어가야하고, Icon은 선택적으로 들어갈 수 있음.
const TextfieldInputWrapper = ({
  children,
  disabled = false,
  isInvalid = false,
}: ITextfieldInput) => {
  return (
    <div className={cn(textfieldInputWrapperVariants({ disabled, isInvalid }))}>{children}</div>
  );
};

const textfieldInputWrapperVariants = cva(
  [
    'flex gap-8 px-16 py-12 h-48 w-full items-center self-stretch rounded-lg border border-solid',
    'hover:border-border-hover focus:border-border-focus',
  ],
  {
    variants: {
      disabled: {
        true: 'bg-filled-disabled text-text-disabled',
      },
      isInvalid: {
        true: 'bg-surface-critical hover:border-critical-hover focus:border-critical-hover',
      },
    },
  },
);

export default TextfieldInputWrapper;
