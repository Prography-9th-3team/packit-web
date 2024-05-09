import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

export interface IMenuMain extends PropsWithChildren {
  onClick?: () => void;
}

const MenuMain = ({ children, onClick }: IMenuMain) => {
  return (
    <button
      className={cn([
        'flex w-full px-12 py-6 items-center gap-12 rounded-md text-text text-ellipsis',
        'hover:bg-surface-sub',
        'focus-within:bg-action-primary-tonal focus-within:text-text-primary',
      ])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MenuMain;
