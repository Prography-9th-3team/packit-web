import { ChangeEvent, PropsWithChildren } from 'react';
import { SelectContext } from '../modules/SelectStateContext';

export interface ISelectMain extends PropsWithChildren {
  text: string;
  placeholder?: string;
  tagList?: Array<string>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onAddTag?: () => void;
}

const SelectMain = ({ text, placeholder, tagList, onChange, onAddTag, children }: ISelectMain) => {
  return (
    <SelectContext.Provider value={{ text, placeholder, tagList, onChange, onAddTag }}>
      <div className='flex flex-col gap-6'>{children}</div>
    </SelectContext.Provider>
  );
};

export default SelectMain;
