import { VariantProps } from 'class-variance-authority';
import { createContext, useContext } from 'react';

import { tagMainVariants } from '../ui/TagMain';

interface DefaultValueState extends VariantProps<typeof tagMainVariants> {
  // 공유할 State -> Main뿐만 아니라, Icon, Label에서도 쓰이면 Context로 전달!
  disabled: boolean;
}

export const TagContext = createContext<DefaultValueState | null>(null);

export const useTagState = () => {
  const context = useContext(TagContext);

  if (!context) {
    throw new Error('useTagState는 TagProvider 안에서만 사용 가능합니다.');
  }
  return context;
};
