import { createContext, useContext } from 'react';

interface DefaultValueState {
  isSelected?: boolean;
}

export const MenuContext = createContext<DefaultValueState | null>(null);

export const useMenuState = () => {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error('useMenuState는 MenuProvider 안에서만 사용 가능합니다.');
  }
  return context;
};
