import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Textfield } from '.';
import Icon from '../Icon';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Common/Textfield',
  component: Textfield,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
  },
} satisfies Meta<typeof Textfield>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    placeholder: '입력해주세요.',
    value: '',
    onChange: () => {},
    disabled: false,
    isInvalid: false,
  },
  render: ({ placeholder, value, onChange, disabled, isInvalid }) => {
    const [value_2, setValue] = useState(value);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      onChange(e);
    };

    return (
      <div className='w-[300px]'>
        <Textfield
          placeholder={placeholder}
          value={value_2}
          onChange={handleChange}
          disabled={disabled}
          isInvalid={isInvalid}
        >
          <Textfield.Label>Label</Textfield.Label>
          <Textfield.InputWrapper>
            <Textfield.Input />
            <Icon name='searchSm_s' className='w-16 h-16 stroke-icon-sub' />
          </Textfield.InputWrapper>
          <Textfield.HelpText>HelpText</Textfield.HelpText>
        </Textfield>
      </div>
    );
  },
};

export const No_Label_Textfield: Story = {
  args: {
    placeholder: '입력해주세요.',
    value: '',
    onChange: () => {},
    disabled: false,
    isInvalid: false,
  },
  render: ({ placeholder, value, onChange, disabled, isInvalid }) => {
    const [value_2, setValue] = useState(value);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      onChange(e);
    };

    return (
      <div className='w-[300px]'>
        <Textfield
          placeholder={placeholder}
          value={value_2}
          onChange={handleChange}
          disabled={disabled}
          isInvalid={isInvalid}
        >
          <Textfield.InputWrapper>
            <Textfield.Input />
            <Icon name='searchSm_s' className='w-16 h-16 stroke-icon-sub' />
          </Textfield.InputWrapper>
          <Textfield.HelpText>HelpText</Textfield.HelpText>
        </Textfield>
      </div>
    );
  },
};

export const Pure_Textfield: Story = {
  args: {
    placeholder: '입력해주세요.',
    value: '',
    onChange: () => {},
    disabled: false,
    isInvalid: false,
  },
  render: ({ placeholder, value, onChange, disabled, isInvalid }) => {
    const [value_2, setValue] = useState(value);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      onChange(e);
    };

    return (
      <div className='w-[300px]'>
        <Textfield
          placeholder={placeholder}
          value={value_2}
          onChange={handleChange}
          disabled={disabled}
          isInvalid={isInvalid}
        >
          <Textfield.InputWrapper>
            <Textfield.Input />
            <Icon name='searchSm_s' className='w-16 h-16 stroke-icon-sub' />
          </Textfield.InputWrapper>
        </Textfield>
      </div>
    );
  },
};
