import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { PropsWithChildren } from 'react';
import { ToastContext } from '../modules/ToastStateContext';

export interface IToastMain extends PropsWithChildren, VariantProps<typeof toastMainVariants> {}

const ToastMain = (props: IToastMain) => {
  const { type } = props;

  return (
    <ToastContext.Provider value={''}>
      <div className={cn(toastMainVariants({ type }))}>텍스트</div>
    </ToastContext.Provider>
  );
};

export const toastMainVariants = cva(
  ['inline-flex justify-center items-center gap-8 py-16 px-20 rounded-full'],
  {
    variants: {
      // size: {
      //   large: 'min-w-80 px-16 py-12 rounded-lg gap-8',
      //   medium: 'min-w-64 px-12 py-8 rounded-lg gap-8',
      //   small: 'px-12 py-4 rounded-md gap-4',
      //   tiny: 'px-8 py-6 rounded-md gap-4',
      // },
      type: {
        primary: 'bg-action-primary',
        secondary: '',
        critical: 'bg-icon-critical',
      },
    },
    defaultVariants: {
      type: 'primary',
    },
  },
);

export default ToastMain;
