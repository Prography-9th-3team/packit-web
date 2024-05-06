import { PropsWithChildren } from 'react';

export interface ITextfieldLabel extends PropsWithChildren {}

const TextfieldLabel = ({ children }: ITextfieldLabel) => {
  return <label className='text-center label-md-bold'>{children}</label>;
};

export default TextfieldLabel;
