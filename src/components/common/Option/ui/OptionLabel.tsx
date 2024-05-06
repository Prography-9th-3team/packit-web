import { PropsWithChildren } from 'react';

export interface IOptionLabel extends PropsWithChildren {}

const OptionLabel = ({ children }: PropsWithChildren) => {
  return <div className='flex-1 text-left text-text label-md '>{children}</div>;
};

export default OptionLabel;
