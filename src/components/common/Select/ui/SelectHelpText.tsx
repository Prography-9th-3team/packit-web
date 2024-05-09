import { PropsWithChildren } from 'react';

export interface ISelectSubText extends PropsWithChildren {}

const SelectHelpText = ({ children }: ISelectSubText) => {
  return <p className='text-text-sub label-sm'>{children}</p>;
};

export default SelectHelpText;
