import { PropsWithChildren } from 'react';

export interface ITextfieldMain extends PropsWithChildren {}

const TextfieldMain = ({ children }: ITextfieldMain) => {
  return <div className='flex flex-col gap-6'>{children}</div>;
};

export default TextfieldMain;
