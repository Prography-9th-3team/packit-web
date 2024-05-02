import { cn } from '@/lib/utils';
import { ChangeEvent, useState } from 'react';
import Icon from '../Icon';

interface ICheck {
  name?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Check = ({ name, checked: controlledChecked, onChange }: ICheck) => {
  const isControlled = controlledChecked !== undefined;
  const [checked, setChecked] = useState(false);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;

    if (!isControlled) {
      setChecked(checked);
    }
    onChange?.(checked);
  };

  const isChecked = isControlled ? controlledChecked : checked;

  return (
    <div className='inline-flex justify-center items-center'>
      <label>
        <div
          className={cn(
            'box-content w-16 h-16 rounded-[4px] border border-solid transition-all duration-200',
            isChecked ? 'bg-action-primary border-action-primary' : 'border-border',
          )}
        >
          {isChecked && <Icon name='checkOn_f' className={cn('text-icon-on', 'w-16', 'h-16')} />}
        </div>
        <input name={name} type='checkbox' checked={isChecked} onChange={handleOnChange} hidden />
      </label>
    </div>
  );
};

export default Check;
