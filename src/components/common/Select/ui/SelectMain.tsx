import { ChangeEvent, PropsWithChildren } from 'react';
import { SelectContext } from '../modules/SelectStateContext';

export interface ISelectMain extends PropsWithChildren {
  value: string;
  placeholder?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SelectMain = ({
  value,
  placeholder,
  onChange,
  isDisabled = false,
  isInvalid = false,
  children,
}: ISelectMain) => {
  return (
    <SelectContext.Provider value={{ value, placeholder, onChange, isDisabled, isInvalid }}>
      <div className='flex flex-col gap-6'>{children}</div>
    </SelectContext.Provider>
  );
};

export default SelectMain;
