import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { PropsWithChildren } from 'react';
import { ToastContext } from '../modules/ToastStateContext';

export interface IToastMain extends PropsWithChildren, VariantProps<typeof toastMainVariants> {}

const ToastMain = ({ type, children }: IToastMain) => {
  return (
    <ToastContext.Provider value={''}>
      <div className={cn(toastMainVariants({ type }))}>{children}</div>
    </ToastContext.Provider>
  );
};

export const toastMainVariants = cva(
  ['inline-flex justify-center items-center gap-8 py-12 px-20 rounded-full min-h-48'],
  {
    variants: {
      type: {
        defualt: 'bg-toast',
        success: 'bg-toast-success',
        error: 'bg-toast-error',
      },
    },
    defaultVariants: {
      type: 'defualt',
    },
  },
);

export default ToastMain;
