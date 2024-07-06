import { PropsWithChildren } from 'react';
import { TextfieldContext } from '../module/TextfieldStateContext';

export interface ITextfieldMain extends PropsWithChildren {
  isDisabled?: boolean;
  isInvalid?: boolean;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name?: string;
}

const TextfieldMain = ({
  children,
  isDisabled = false,
  isInvalid = false,
  placeholder,
  onChange,
  value,
  name,
}: ITextfieldMain) => {
  return (
    <TextfieldContext.Provider
      value={{ isDisabled, isInvalid, placeholder, onChange, value, name }}
    >
      <div className='flex flex-col gap-6 items-start'>{children}</div>
    </TextfieldContext.Provider>
  );
};

export default TextfieldMain;
