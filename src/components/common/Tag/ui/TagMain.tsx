import { cva } from 'class-variance-authority';

const TagMain = () => {
  return <div>TagMain</div>;
};

export const tagMainVariants = cva(
  ['inline-flex items-center bg-surface-sub rounded-[9999px] backdrop-blur-[6px]'],
  {
    variants: {
      size: {
        xs: 'min-w-20 px-6 py-4 gap-2',
        sm: 'min-w-24 px-8 py-4 gap-4',
        default: 'min-28 px-10 py-2 gap-4',
      },
    },
  },
);

export default TagMain;
