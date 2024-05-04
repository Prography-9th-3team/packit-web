import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { KeyboardEvent } from 'react';
import Icon from '../../Icon';
import { Tag } from '../../Tag';
import { useSelectState } from '../modules/SelectStateContext';

const SelectInput = () => {
  const {
    type,
    text,
    placeholder,
    tagList = [],
    onChange,
    onAddTag,
    onRemoveTag,
    isDisabled: disabled,
  } = useSelectState();

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode == 13 && onAddTag) {
      onAddTag();
    }
  };

  const handleDeleteTag = (id: number) => {
    if (!onRemoveTag) return;
    onRemoveTag(id);
  };

  return (
    <div className={cn(selectInputWrapperVariants({ type, disabled }))}>
      {tagList?.length > 0 && (
        <div className='flex items-center gap-4'>
          {tagList?.map((tag) => (
            <Tag key={tag.id} isButton onClick={() => handleDeleteTag(tag.id)}>
              <Tag.Label>{tag.label}</Tag.Label>
              <Icon name='xClose_s' className='w-16 h-16 stroke-icon-sub' />
            </Tag>
          ))}
        </div>
      )}
      <input
        value={text}
        className={cn(selectInputVariants({ disabled }))}
        placeholder={placeholder}
        onInput={onChange}
        onKeyDown={handleKeyPress}
        disabled={disabled}
      />
      {disabled ||
        (type === 'invalid' && (
          <Icon name='warningTriangle_f' className='w-16 h-16 -icon-critical text-icon-critical' />
        ))}
      <Icon name='chevronDown_s' className='w-16 h-16 stroke-icon-sub' />
    </div>
  );
};

export const selectInputWrapperVariants = cva(
  ['w-full max-h-48 h-full flex items-center justify-between gap-8 px-16 py-12 border rounded-lg'],
  {
    variants: {
      type: {
        default: ' bg-surface border-border hover:border-border-hover',
        invalid: 'bg-surface-critical  border-transparent hover:border-critical-hover',
      },
      disabled: {
        true: 'bg-filled-disabled border-transparent hover:border-transparent',
        false: '',
      },
    },
    defaultVariants: {
      type: 'default',
      disabled: false,
    },
  },
);

export const selectInputVariants = cva(
  [
    'flex-1 outline-none text-text label-lg bg-transparent placeholder:text-text-sub placeholder:label-md',
  ],
  {
    variants: {
      disabled: {
        true: 'placeholder:text-text-disabled',
        false: '',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);

export default SelectInput;
