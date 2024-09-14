import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

export interface IDivider {
  direction?: 'vertical' | 'horizontal';
  className?: string;
}

const Divider = ({ direction, className }: IDivider) => {
  return <div className={cn([dividerVariants({ direction }), className])} />;
};

export default Divider;

export const dividerVariants = cva(['bg-divide'], {
  variants: {
    direction: {
      horizontal: 'w-full h-1',
      vertical: 'h-full w-1',
    },
  },
  defaultVariants: {
    direction: 'horizontal',
  },
});
