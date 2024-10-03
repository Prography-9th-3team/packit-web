import { ChangeEvent, useState } from 'react';

import { cn } from '@/lib/utils';

import Icon from '../Icon';

export interface ICheck {
  name?: string;
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  defaultChecked?: boolean;
  value?: string | number;
}

const Check = ({
  name,
  checked: controlledChecked,
  onChange,
  defaultChecked = false,
  value,
}: ICheck) => {
  const isControlled = !!controlledChecked;
  const [checked, setChecked] = useState(defaultChecked);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;

    if (!isControlled) {
      setChecked(checked);
    }

    onChange?.(e);
  };

  const isChecked = isControlled ? controlledChecked : checked;

  return (
    <div className='inline-flex justify-center items-center'>
      <label>
        <div
          className={cn(
            'box-content w-16 h-16 rounded-[4px] border border-solid transition-all duration-200 bg-white',
            isChecked ? 'bg-action-primary border-action-primary' : 'border-border',
          )}
        >
          {isChecked && <Icon name='checkOn_f' className='text-icon-on w-16 h-16' />}
        </div>
        <input
          name={name}
          type='checkbox'
          checked={isChecked}
          onChange={handleOnChange}
          hidden
          value={value}
        />
      </label>
    </div>
  );
};

export default Check;
