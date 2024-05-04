import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Common/Select',
  component: Select,
  tags: ['autodocs'],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
  render: () => {
    return (
      <div className='flex gap-5'>
        <Select>
          <label>Label</label> <input /> <p>Helptext</p>
        </Select>
      </div>
    );
  },
};
