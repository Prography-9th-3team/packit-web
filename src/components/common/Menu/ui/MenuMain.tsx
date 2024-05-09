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
      ])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MenuMain;
