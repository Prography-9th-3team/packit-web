import { createContext, useContext } from 'react';

interface DefaultValueState {
  onClick?: () => void;
}

export const ToastContext = createContext<DefaultValueState | null>(null);

export const useToastState = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToastState는 ToastProvider 안에서만 사용 가능합니다.');
  }
  return context;
};
