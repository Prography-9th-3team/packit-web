import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { PropsWithChildren } from 'react';
import { ButtonContext } from '../modules/ButtonStateContext';

export interface IButtonMain extends PropsWithChildren, VariantProps<typeof buttonMainVariants> {
  isLoading?: boolean;
  disabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonMain = ({
  size,
  type,
  children,
  onClick,
  isLoading = false,
  disabled = false,
}: IButtonMain) => {
  return (
    <ButtonContext.Provider value={{ size, type, isLoading, disabled }}>
      <button className={cn(buttonMainVariants({ type, size }))} onClick={onClick}>
        {children}
      </button>
    </ButtonContext.Provider>
  );
};

export const buttonMainVariants = cva(['flex justify-center items-center'], {
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
    },
  },

  defaultVariants: {
    size: 'medium',
    type: 'primary',
  },
});

export default ButtonMain;
