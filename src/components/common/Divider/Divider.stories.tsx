import type { Meta, StoryObj } from '@storybook/react';
import Divider from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Common/Divider',
  component: Divider,
  tags: ['autodocs'],
  args: {
    direction: 'vertical',
  },
  argTypes: {
    direction: {
      options: ['vertical', 'horizontal'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Horizontal: Story = {
  args: {},
  render: () => {
    return (
      <div className='w-full'>
        <Divider />
      </div>
    );
  },
};

export const Vertical: Story = {
  args: {},
  render: () => {
    return (
      <div className='h-[300px]'>
        <Divider direction='vertical' />
      </div>
    );
  },
};
