import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { PropsWithChildren } from 'react';

export interface ITextfieldInput extends PropsWithChildren {}

const TextfieldInputWrapper = ({ children }: ITextfieldInput) => {
  return <div className={cn(textfieldInputWrapperVariants({}))}>{children}</div>;
};

const textfieldInputWrapperVariants = cva(
  [
    'flex gap-8 px-16 py-12 h-48 items-center self-stretch rounded-lg border border-solid',
    'hover:border-border-hover focus:border-border-focus placeholder:text-text-sub',
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
