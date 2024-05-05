import { PropsWithChildren } from 'react';

export interface ITextfieldLabel extends PropsWithChildren {}

const TextfieldLabel = ({ children }: ITextfieldLabel) => {
  return <span className='text-center label-md-bold'>{children}</span>;
};

export default TextfieldLabel;
