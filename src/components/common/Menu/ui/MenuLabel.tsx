import { PropsWithChildren } from 'react';

export interface IMenuLabel extends PropsWithChildren {}
const MenuLabel = ({ children }: IMenuLabel) => {
  return <label className='label-md cursor-pointer'>{children}</label>;
};

export default MenuLabel;
