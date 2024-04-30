import { createContext, useContext } from 'react';

interface DefaultValueState {
  // 공유할 State -> Main뿐만 아니라, Icon, Label에서도 쓰이면 Context로 전달!
  isLoading: boolean;
  disabled: boolean;
}

export const ButtonContext = createContext<DefaultValueState | null>(null);

export const useButtonState = () => {
  const context = useContext(ButtonContext);

  if (!context) {
    throw new Error('useButtonState는 ButtonProvider 안에서만 사용 가능합니다.');
  }
  return context;
};
