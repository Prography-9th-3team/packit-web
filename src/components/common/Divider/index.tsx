import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export interface IDivider {
  direction?: 'vertical' | 'horizontal';
  className?: string;
}

const Divider = ({ direction, className }: IDivider) => {
  return <div className={cn(className, dividerVariants({ direction }))} />;
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
