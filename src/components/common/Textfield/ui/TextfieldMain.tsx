import { PropsWithChildren } from 'react';
import { TextfieldContext } from '../module/TextfieldStateContext';

export interface ITextfieldMain extends PropsWithChildren {
  disabled?: boolean;
  isInvalid?: boolean;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const TextfieldMain = ({
  children,
  disabled = false,
  isInvalid = false,
  placeholder,
  onChange,
  value,
}: ITextfieldMain) => {
  return (
    <TextfieldContext.Provider value={{ disabled, isInvalid, placeholder, onChange, value }}>
      <div className='flex flex-col gap-6'>{children}</div>
    </TextfieldContext.Provider>
  );
};

export default TextfieldMain;
