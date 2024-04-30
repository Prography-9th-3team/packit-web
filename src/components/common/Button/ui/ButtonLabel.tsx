import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { useButtonState } from '../modules/ButtonStateContext';

export interface IButtonLabel {
  children: React.ReactNode;
}

const ButtonLabel = ({ children }: IButtonLabel) => {
  // TODO(훈석): isLoading, disabled 상태에 따라 스타일 변경 필요
  const { size, type } = useButtonState();

  return <label className={cn(buttonLabelVariants({ size, type }))}>{children}</label>;
};

export const buttonLabelVariants = cva([], {
  variants: {
    size: {
      large: 'label-lg',
      medium: 'label-md',
      small: 'label-md',
      tiny: 'label-sm',
    },
    type: {
      primary: 'text-text-on',
      outline: 'text-text-secondary',
      secondary: 'text-text-secondary',
      critical: 'text-text-on',
    },
  },
});

export default ButtonLabel;
