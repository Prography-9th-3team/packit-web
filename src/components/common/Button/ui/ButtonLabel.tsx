import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { PropsWithChildren } from 'react';
import { useButtonState } from '../modules/ButtonStateContext';

export interface IButtonLabel extends PropsWithChildren {
  // TODO: 나중에 필요한 props 있으면 추가!
}

const ButtonLabel = ({ children }: IButtonLabel) => {
  // TODO(훈석): isLoading 상태에 따라 스타일 변경 필요
  const { size, type, isDisabled } = useButtonState();

  return <label className={cn(buttonLabelVariants({ size, type, isDisabled }))}>{children}</label>;
};

export const buttonLabelVariants = cva(['cursor-pointer'], {
  variants: {
    size: {
      large: 'label-lg',
      medium: 'label-md',
      small: 'label-md',
      tiny: 'label-sm',
    },
    type: {
      primary: 'text-text-on',
      outline: 'text-text-secondary',
      secondary: 'text-text-secondary',
      critical: 'text-text-on',
    },
    isDisabled: {
      true: 'cursor-default text-text-disabled',
    },
  },
});

export default ButtonLabel;
