import { ChangeEvent, PropsWithChildren } from 'react';
import { SelectContext } from '../modules/SelectStateContext';

export interface ISelectMain extends PropsWithChildren {
  value: string;
  placeholder?: string;
  disabled?: boolean;
  isInvalid?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SelectMain = ({
  value,
  placeholder,
  onChange,
  disabled = false,
  isInvalid = false,
  children,
}: ISelectMain) => {
  return (
    <SelectContext.Provider value={{ value, placeholder, onChange, disabled, isInvalid }}>
      <div className='flex flex-col gap-6'>{children}</div>
    </SelectContext.Provider>
  );
};

export default SelectMain;
