import { PropsWithChildren } from 'react';
import { useToastState } from '../modules/ToastStateContext';

export interface IToastButton extends PropsWithChildren {}

const ToastButton = ({ children }: IToastButton) => {
  const { onClick } = useToastState();

  return (
    <button className='cursor-pointer label-md text-secondary' onClick={onClick}>
      {children}
    </button>
  );
};

export default ToastButton;
