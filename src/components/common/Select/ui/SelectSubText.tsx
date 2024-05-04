import { PropsWithChildren } from 'react';

export interface ISelectSubText extends PropsWithChildren {}

const SelectSubText = ({ children }: ISelectSubText) => {
  return <p className='text-text-sub label-sm'>{children}</p>;
};

export default SelectSubText;
