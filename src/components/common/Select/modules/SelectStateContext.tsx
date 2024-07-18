import { ChangeEvent, createContext, MouseEvent, useContext } from 'react';

interface DefaultValueState {
  value: string;
  placeholder?: string;
  tagList?: Array<{ id: number; label: string }>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  isDisabled?: boolean;
  isInvalid?: boolean;
}

export const SelectContext = createContext<DefaultValueState | null>(null);

export const useSelectState = () => {
  const context = useContext(SelectContext);

  if (!context) {
    throw new Error('useSelectState는 SelectProvider 안에서만 사용 가능합니다.');
  }
  return context;
};
