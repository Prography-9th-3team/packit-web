import { PropsWithChildren } from 'react';

export interface ISelectLabel extends PropsWithChildren {}

const SelectLabel = ({ children }: ISelectLabel) => {
  return <label className='label-md-bold'>{children}</label>;
};

export default SelectLabel;
