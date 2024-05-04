import { ChangeEvent, PropsWithChildren } from 'react';
import { SelectContext } from '../modules/SelectStateContext';

export interface ISelectMain extends PropsWithChildren {
  type?: 'default' | 'invalid';
  text: string;
  placeholder?: string;
  tagList?: Array<string>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onAddTag?: () => void;
  isDisabled?: boolean;
}

const SelectMain = ({
  type = 'default',
  text,
  placeholder,
  tagList,
  onChange,
  onAddTag,
  children,
  isDisabled,
}: ISelectMain) => {
  return (
    <SelectContext.Provider
      value={{ type, text, placeholder, tagList, onChange, onAddTag, isDisabled }}
    >
      <div className='flex flex-col gap-6'>{children}</div>
    </SelectContext.Provider>
  );
};

export default SelectMain;
