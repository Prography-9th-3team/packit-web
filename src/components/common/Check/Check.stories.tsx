import type { Meta, StoryObj } from '@storybook/react';
import Check from '.';

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
export const Defualt: Story = {
  args: { type: 'default' },
  render: (args) => {
    return (
      <div className='flex gap-5'>
        <Check {...args} />
      </div>
    );
  },
};
