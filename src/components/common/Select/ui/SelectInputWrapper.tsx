import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { PropsWithChildren } from 'react';
import Icon from '../../Icon';
import { useSelectState } from '../modules/SelectStateContext';

export interface ISelectInputWrapper extends PropsWithChildren {}

const SelectInputWrapper = ({ children }: ISelectInputWrapper) => {
  const { isDisabled, isInvalid } = useSelectState();

  return (
    <div className={cn(selectInputWrapperVariants({ isDisabled, isInvalid }))}>
      <div className='flex-1 flex items-center justify-between gap-8 overflow-y-scroll scroll-hide'>
        {children}
      </div>
      <Icon name='chevronDown_s' className='w-16 h-16 stroke-icon-sub' />
    </div>
  );
};

const selectInputWrapperVariants = cva(
  [
    'w-full max-h-48 h-full px-16 py-12',
    'flex items-center justify-between gap-8',
    'bg-surface border rounded-lg border-border hover:border-border-hover focus-within:border-border-focus focus-within:hover:border-border-focus caret-border-focus',
  ],
  {
    variants: {
      isInvalid: {
        true: 'bg-surface-critical  border-transparent hover:border-critical-hover focus-within:border-critical-hover',
      },
      isDisabled: {
        true: 'bg-filled-disabled border-transparent hover:border-transparent',
      },
    },
  },
);

export default SelectInputWrapper;
