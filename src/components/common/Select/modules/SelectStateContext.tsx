import { ChangeEvent, createContext, useContext } from 'react';

interface DefaultValueState {
  type: 'default' | 'invalid';
  text: string;
  placeholder?: string;
  tagList?: Array<{ id: number; label: string }>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onAddTag?: () => void;
  onRemoveTag?: (id: number) => void;
  isDisabled?: boolean;
}

export const SelectContext = createContext<DefaultValueState | null>(null);

export const useSelectState = () => {
  const context = useContext(SelectContext);

  if (!context) {
    throw new Error('useSelectState는 SelectProvider 안에서만 사용 가능합니다.');
  }
  return context;
};
