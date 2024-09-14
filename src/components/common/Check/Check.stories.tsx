import type { Meta, StoryObj } from '@storybook/react';
import { ChangeEvent, useState } from 'react';

import Check from '.';
import { Button } from '../Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Common/Check',
  component: Check,
  tags: ['autodocs'],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Check>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
  render: (args) => {
    return (
      <div className='flex gap-5'>
        <Check {...args} />
      </div>
    );
  },
};

export const Checked: Story = {
  args: {},
  render: (args) => {
    return (
      <div className='flex gap-5'>
        <Check {...args} defaultChecked />
      </div>
    );
  },
};

export const Controlled_Checkbox: Story = {
  args: {},
  render: (args) => {
    const [checked, setChecked] = useState(false);

    const handleChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
      const checked = e.target.checked;

      setChecked(checked);
    };

    const toggleChecked = () => {
      setChecked((prev) => !prev);
    };

    return (
      <div className='flex gap-5'>
        <Check {...args} checked={checked} onChange={handleChangeChecked} />

        <Button type='outline' onClick={toggleChecked}>
          <Button.Label>{String(checked)}</Button.Label>
        </Button>
      </div>
    );
  },
};
