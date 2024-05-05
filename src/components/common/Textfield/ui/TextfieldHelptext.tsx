import { PropsWithChildren } from 'react';

export interface ITextfieldHelptext extends PropsWithChildren {}

const TextfieldHelptext = ({ children }: ITextfieldHelptext) => {
  return <span className='label-sm text-text-sub'>{children}</span>;
};

export default TextfieldHelptext;
