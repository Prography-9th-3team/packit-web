import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { PropsWithChildren } from 'react';
import { MenuContext } from '../module/MenuStateContext';

export interface IMenuMain extends PropsWithChildren {
  onClick?: () => void;
  isSelected?: boolean;
}

const MenuMain = ({ children, onClick, isSelected = false }: IMenuMain) => {
  return (
    <MenuContext.Provider value={{ isSelected }}>
      <button className={cn(menuVariants({ isSelected }))} onClick={onClick}>
        {children}
      </button>
    </MenuContext.Provider>
  );
};

export const menuVariants = cva(
  [
    'flex w-full min-h-[36px] px-12 py-6 items-center gap-12 rounded-md text-text text-ellipsis overflow-hidden',
    'hover:bg-surface-sub',
  ],
  {
    variants: {
      isSelected: {
        true: 'bg-action-primary-tonal text-text-primary hover:bg-action-primary-tonal',
      },
    },
  },
);

export default MenuMain;
