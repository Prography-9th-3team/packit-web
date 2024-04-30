import { VariantProps, cva } from 'class-variance-authority';
import { PropsWithChildren } from 'react';

interface IButtonMain extends PropsWithChildren, VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  isIconMoe?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonMain = ({ children }: IButtonMain) => {
  return <div>{children}</div>;
};

const buttonVariants = cva(['flex justify-center items-center'], {
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
});

export default ButtonMain;
