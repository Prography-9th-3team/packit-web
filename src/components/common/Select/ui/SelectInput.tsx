import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { useSelectState } from '../modules/SelectStateContext';

const SelectInput = () => {
  const { value, placeholder, onChange, disabled } = useSelectState();

  return (
    <input
      value={value}
      className={cn(selectInputVariants({ disabled }))}
      placeholder={placeholder}
      onInput={onChange}
      disabled={disabled}
    />
  );
};

export const selectInputVariants = cva(
  [
    'flex-1 outline-none text-text label-lg bg-transparent placeholder:text-text-sub placeholder:label-md',
  ],
  {
    variants: {
      disabled: {
        true: 'placeholder:text-text-disabled',
      },
    },
  },
);

export default SelectInput;
