import { PropsWithChildren } from 'react';

export interface IToastLabel extends PropsWithChildren {}

const ToastLabel = ({ children }: IToastLabel) => {
  return <span className='body-lg text-text-on'>{children}</span>;
};

export default ToastLabel;
