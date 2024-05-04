import { KeyboardEvent, PropsWithChildren } from 'react';
import { Tag } from '../../Tag';
import { useSelectState } from '../modules/SelectStateContext';

export interface ISelectInput extends PropsWithChildren {}

const SelectInput = ({ children }: ISelectInput) => {
  const { text, placeholder, tagList = [], onChange, onAddTag } = useSelectState();

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode == 13 && onAddTag) {
      onAddTag();
    }
  };

  return (
    <div className='min-w-[300px] min-h-[54px] flex items-center justify-between gap-8 px-16 py-10 border border-primary rounded-lg'>
      {tagList?.length > 0 && (
        <div className='flex items-center gap-4'>
          {tagList?.map((tag, idx) => (
            <Tag key={idx}>
              <Tag.Label>{tag}</Tag.Label>
            </Tag>
          ))}
        </div>
      )}
      <input
        value={text}
        className='flex-1 outline-none text-text label-lg placeholder:text-text-sub placeholder:label-md'
        placeholder={placeholder}
        onInput={onChange}
        onKeyDown={handleKeyPress}
      />
      {children}
    </div>
  );
};

export default SelectInput;
