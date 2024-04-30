import { PropsWithChildren } from 'react';
import { useToastState } from '../modules/ToastStateContext';

export interface IToastButton extends PropsWithChildren {}

const ToastButton = ({ children }: IToastButton) => {
  const { handleOnClick } = useToastState();

  return (
    <button className='cursor-pointer label-md text-secondary' onClick={handleOnClick}>
      {children}
    </button>
  );
};

export default ToastButton;
