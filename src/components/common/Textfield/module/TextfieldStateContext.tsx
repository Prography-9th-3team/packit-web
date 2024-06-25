import { createContext, useContext } from 'react';

interface DefaultValueState {
  isDisabled: boolean;
  isInvalid: boolean;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

export const TextfieldContext = createContext<DefaultValueState | null>(null);

export const useTextfieldState = () => {
  const context = useContext(TextfieldContext);

  if (!context) {
    throw new Error('useTextfieldState는 TextfieldProvider 안에서만 사용 가능합니다.');
  }
  return context;
};
