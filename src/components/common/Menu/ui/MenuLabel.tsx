import { PropsWithChildren } from 'react';

export interface IMenuLabel extends PropsWithChildren {}
const MenuLabel = ({ children }: IMenuLabel) => {
  return <label className='label-md'>{children}</label>;
};

export default MenuLabel;
