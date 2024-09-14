import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

import { useSelectState } from '../modules/SelectStateContext';

const SelectInput = () => {
  const { value, placeholder, onChange, isDisabled } = useSelectState();

  return (
    <input
      value={value}
      className={cn(selectInputVariants({ isDisabled }))}
      placeholder={placeholder}
      onChange={onChange}
      disabled={isDisabled}
    />
  );
};

const selectInputVariants = cva(
  [
    'flex-1 outline-none text-text label-lg bg-transparent placeholder:text-text-sub placeholder:label-md',
  ],
  {
    variants: {
      isDisabled: {
        true: 'placeholder:text-text-disabled',
      },
    },
  },
);

export default SelectInput;
