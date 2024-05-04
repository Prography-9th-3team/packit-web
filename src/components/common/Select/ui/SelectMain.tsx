import { PropsWithChildren } from 'react';
import { SelectContext } from '../modules/SelectStateContext';

export interface ISelectMain extends PropsWithChildren {}

const SelectMain = ({ children }: ISelectMain) => {
  return (
    <SelectContext.Provider value={''}>
      <div className='flex flex-col'>{children}</div>
    </SelectContext.Provider>
  );
};

export default SelectMain;
