import { createContext, useContext } from 'react';
import { BUTTON_SIZE } from '../types';

interface DefaultValueState {
  isLoading: boolean;
  disabled: boolean;
  type: BUTTON_SIZE[keyof BUTTON_SIZE];
  size: BUTTON_SIZE[keyof BUTTON_SIZE];
}

export const ButtonContext = createContext<DefaultValueState | null>(null);

export const useButtonState = () => {
  const context = useContext(ButtonContext);

  if (!context) {
    throw new Error('useButtonState는 ButtonProvider 안에서만 사용 가능합니다.');
  }
  return context;
};
