import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

export interface IOptionLabel extends PropsWithChildren {
  className?: string;
}

const OptionLabel = ({ children, className }: IOptionLabel) => {
  return <div className={cn(['flex-1 text-left text-text label-md', className])}>{children}</div>;
};

export default OptionLabel;
