import { PropsWithChildren } from 'react';
import { BUTTON_SIZE, BUTTON_TYPE } from '../types';

interface IButtonMain extends PropsWithChildren {
  type: BUTTON_TYPE[keyof BUTTON_TYPE];
  size: BUTTON_SIZE[keyof BUTTON_SIZE];
  isLoading?: boolean;
  isIconMoe?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonMain = ({ children }: IButtonMain) => {
  return <div>{children}</div>;
};

export default ButtonMain;
