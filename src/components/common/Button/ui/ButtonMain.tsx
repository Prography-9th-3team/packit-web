import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { PropsWithChildren } from 'react';
import Spinner from '../../Spinner/Index';
import { SPINNER_SIZE } from '../../Spinner/constants';
import { ButtonContext } from '../modules/ButtonStateContext';

export enum BUTTON_SIZE {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
  TINY = 'tiny',
}

export enum BUTTON_TYPE {
  PRIMARY = 'primary',
  OUTLINE = 'outline',
  SECONDARY = 'secondary',
  CRITICAL = 'critical',
  TEXT = 'text',
}

export interface IButtonMain extends PropsWithChildren, VariantProps<typeof buttonMainVariants> {
  isLoading?: boolean;
  isDisabled?: boolean;
  isFull?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  buttonRef?: React.RefObject<HTMLButtonElement>;
}

const ButtonMain = ({
  size = BUTTON_SIZE.MEDIUM,
  type = BUTTON_TYPE.PRIMARY,
  children,
  onClick,
  isLoading = false,
  isDisabled = false,
  isFull = false,
  className,
  buttonRef,
}: IButtonMain) => {
  return (
    <ButtonContext.Provider value={{ size, type, isLoading, isDisabled }}>
      <button
        className={cn([buttonMainVariants({ type, size, isDisabled, isFull }), className])}
        onClick={onClick}
        disabled={isDisabled}
        ref={buttonRef}
      >
        {isLoading && <Spinner size={SPINNER_SIZE.SM} />}
        {children}
      </button>
    </ButtonContext.Provider>
  );
};

export const buttonMainVariants = cva(['flex justify-center items-center gap-4'], {
  variants: {
    size: {
      large: 'min-w-80 px-16 py-12 rounded-lg gap-8',
      medium: 'min-w-64 px-12 py-8 rounded-lg gap-8',
      small: 'px-12 py-4 rounded-md gap-4',
      tiny: 'px-8 py-6 rounded-md gap-4',
    },
    type: {
      primary: 'bg-action-primary hover:bg-action-primary-hover active:bg-action-primary-pressed',
      outline:
        'bg-surface border-[1px] border-solid border-border hover:bg-action-secondary-hover active:bg-action-secondary-pressed',
      secondary: 'hover:bg-action-secondary-hover active:bg-action-secondary-pressed',
      critical: 'bg-critical hover:bg-critical-hover active:bg-critical-pressed',
      text: 'bg-transparent',
    },
    isDisabled: {
      true: '',
    },
    isFull: {
      true: 'w-full',
    },
  },
  compoundVariants: [
    {
      type: 'primary',
      isDisabled: true,
      className:
        'bg-action-primary-disabled hover:bg-action-primary-disabled active:bg-action-primary-disabled',
    },
    {
      type: 'outline',
      isDisabled: true,
      className:
        ' bg-action-secondary-disabled hover:bg-action-secondary-disabled active:bg-action-secondary-disabled',
    },
    {
      type: 'secondary',
      isDisabled: true,
      className:
        'bg-action-secondary-disabled hover:bg-action-secondary-disabled active:bg-action-secondary-disabled',
    },
    {
      type: 'critical',
      isDisabled: true,
      className:
        'bg-action-critical-disabled hover:bg-action-critical-disabled active:bg-action-critical-disabled',
    },
  ],
});

export default ButtonMain;
