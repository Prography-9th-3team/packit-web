import type { Meta, StoryObj } from '@storybook/react';
import { ChangeEvent, useState } from 'react';
import { Select } from '.';
import Icon from '../Icon';
import { Tag } from '../Tag';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Common/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    placeholder: '플레이스홀더',
    value: '',
    onChange: (e) => e,
  },
  argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
  render: (args) => {
    const { isInvalid } = args;
    const [text, setText] = useState<string>('');

    const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      setText(value);
    };

    return (
      <div className='w-[500px] flex flex-col gap-32'>
        <Select {...args} value={text} onChange={handleChangeText}>
          <Select.Label>Label</Select.Label>
          <Select.InputWrapper>
            <Select.Input />
            <Icon name='chevronDown_s' className='w-16 h-16 stroke-icon-sub' />
          </Select.InputWrapper>
          <Select.Text>HelpText</Select.Text>
        </Select>

        <Select {...args} value={text} onChange={handleChangeText}>
          <Select.InputWrapper>
            <Select.Input />
            {isInvalid && (
              <Icon
                name='warningTriangle_f'
                className='w-16 h-16 -icon-critical text-icon-critical'
              />
            )}
            <Icon name='chevronDown_s' className='w-16 h-16 stroke-icon-sub' />
          </Select.InputWrapper>
          <Select.Text>HelpText</Select.Text>
        </Select>

        <Select {...args} value={text} onChange={handleChangeText}>
          <Select.Label>Label</Select.Label>
          <Select.InputWrapper>
            <Select.Input />
            {isInvalid && (
              <Icon
                name='warningTriangle_f'
                className='w-16 h-16 -icon-critical text-icon-critical'
              />
            )}
            <Icon name='chevronDown_s' className='w-16 h-16 stroke-icon-sub' />
          </Select.InputWrapper>
        </Select>

        <Select {...args} value={text} onChange={handleChangeText}>
          <Select.InputWrapper>
            <Select.Input />
            {isInvalid && (
              <Icon
                name='warningTriangle_f'
                className='w-16 h-16 -icon-critical text-icon-critical'
              />
            )}
            <Icon name='chevronDown_s' className='w-16 h-16 stroke-icon-sub' />
          </Select.InputWrapper>
        </Select>
      </div>
    );
  },
};

export const Invalid: Story = {
  args: { isInvalid: true },
  render: (args) => {
    const { isInvalid } = args;
    const [text, setText] = useState<string>('');

    const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      setText(value);
    };

    return (
      <div className='w-[500px] flex flex-col gap-32'>
        <Select {...args} value={text} onChange={handleChangeText}>
          <Select.Label>Label</Select.Label>
          <Select.InputWrapper>
            <Select.Input />
            {isInvalid && (
              <Icon
                name='warningTriangle_f'
                className='w-16 h-16 -icon-critical text-icon-critical'
              />
            )}
            <Icon name='chevronDown_s' className='w-16 h-16 stroke-icon-sub' />
          </Select.InputWrapper>
          <Select.Text>HelpText</Select.Text>
        </Select>

        <Select {...args} value={text} onChange={handleChangeText}>
          <Select.InputWrapper>
            <Select.Input />
            {isInvalid && (
              <Icon
                name='warningTriangle_f'
                className='w-16 h-16 -icon-critical text-icon-critical'
              />
            )}
            <Icon name='chevronDown_s' className='w-16 h-16 stroke-icon-sub' />
          </Select.InputWrapper>
          <Select.Text>HelpText</Select.Text>
        </Select>

        <Select {...args} value={text} onChange={handleChangeText}>
          <Select.Label>Label</Select.Label>
          <Select.InputWrapper>
            <Select.Input />
            {isInvalid && (
              <Icon
                name='warningTriangle_f'
                className='w-16 h-16 -icon-critical text-icon-critical'
              />
            )}
            <Icon name='chevronDown_s' className='w-16 h-16 stroke-icon-sub' />
          </Select.InputWrapper>
        </Select>

        <Select {...args} value={text} onChange={handleChangeText}>
          <Select.InputWrapper>
            <Select.Input />
            {isInvalid && (
              <Icon
                name='warningTriangle_f'
                className='w-16 h-16 -icon-critical text-icon-critical'
              />
            )}
            <Icon name='chevronDown_s' className='w-16 h-16 stroke-icon-sub' />
          </Select.InputWrapper>
        </Select>
      </div>
    );
  },
};

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => {
    const { isInvalid, value } = args;
    const [text, setText] = useState<string>('');

    const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      setText(value);
    };

    return (
      <div className='w-[500px] flex flex-col gap-32'>
        <Select {...args} value={value} onChange={handleChangeText}>
          <Select.Label>Label</Select.Label>
          <Select.InputWrapper>
            <Select.Input />
            {isInvalid && (
              <Icon
                name='warningTriangle_f'
                className='w-16 h-16 -icon-critical text-icon-critical'
              />
            )}
            <Icon name='chevronDown_s' className='w-16 h-16 stroke-icon-sub' />
          </Select.InputWrapper>
          <Select.Text>HelpText</Select.Text>
        </Select>

        <Select {...args} value={text} onChange={handleChangeText}>
          <Select.InputWrapper>
            <Select.Input />
            {isInvalid && (
              <Icon
                name='warningTriangle_f'
                className='w-16 h-16 -icon-critical text-icon-critical'
              />
            )}
            <Icon name='chevronDown_s' className='w-16 h-16 stroke-icon-sub' />
          </Select.InputWrapper>
          <Select.Text>HelpText</Select.Text>
        </Select>

        <Select {...args} value={text} onChange={handleChangeText}>
          <Select.Label>Label</Select.Label>
          <Select.InputWrapper>
            <Select.Input />
            {isInvalid && (
              <Icon
                name='warningTriangle_f'
                className='w-16 h-16 -icon-critical text-icon-critical'
              />
            )}
            <Icon name='chevronDown_s' className='w-16 h-16 stroke-icon-sub' />
          </Select.InputWrapper>
        </Select>

        <Select {...args} value={text} onChange={handleChangeText}>
          <Select.InputWrapper>
            <Select.Input />
            {isInvalid && (
              <Icon
                name='warningTriangle_f'
                className='w-16 h-16 -icon-critical text-icon-critical'
              />
            )}
            <Icon name='chevronDown_s' className='w-16 h-16 stroke-icon-sub' />
          </Select.InputWrapper>
        </Select>
      </div>
    );
  },
};

export const Tag_Select: Story = {
  args: {},
  render: (args) => {
    const { isInvalid } = args;

    const [idx, setIdx] = useState<number>(2);
    const [text, setText] = useState<string>('');
    const [tags, setTags] = useState<Array<{ id: number; label: string }>>([
      {
        id: 0,
        label: 'Tag',
      },
      {
        id: 1,
        label: 'Tag',
      },
    ]);

    const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      setText(value);
    };

    const handleAddTag = () => {
      setText('');
      setTags((prev) => [...prev, { id: idx, label: text }]);
      setIdx((prev) => prev + 1);
    };

    const handleRemoveTag = (id: number) => {
      setTags((prev) => prev.filter((tag) => tag.id !== id));
    };

    return (
      <div className='w-[500px] flex flex-col gap-32'>
        <div className='relative'>
          <Select {...args} value={text} onChange={handleChangeText}>
            <Select.Label>Label</Select.Label>
            <Select.InputWrapper>
              {tags?.length > 0 && (
                <div className='flex items-center gap-4'>
                  {tags?.map((tag) => (
                    <Tag key={tag.id} isButton onClick={() => handleRemoveTag(tag.id)}>
                      <Tag.Label>{tag.label}</Tag.Label>
                      <Icon name='xClose_s' className='w-16 h-16 stroke-icon-sub' />
                    </Tag>
                  ))}
                </div>
              )}
              <Select.Input />
              {isInvalid && (
                <Icon
                  name='warningTriangle_f'
                  className='w-16 h-16 -icon-critical text-icon-critical'
                />
              )}
              <Icon name='chevronDown_s' className='w-16 h-16 stroke-icon-sub' />
            </Select.InputWrapper>
            <Select.Text>HelpText</Select.Text>
          </Select>
          {text && (
            <div className='absolute -bottom-24 w-full p-8 bg-white rounded-lg shadow-layer'>
              <div onClick={handleAddTag}>추가 "{text}"</div>
            </div>
          )}
        </div>
      </div>
    );
  },
};
