import type { Meta, StoryObj } from '@storybook/react';

import Spinner from '@/components/common/Spinner/Index';

import { SPINNER_SIZE } from './constants';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Common/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  args: {},
  argTypes: {
    size: {
      options: Object.values(SPINNER_SIZE),
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    size: SPINNER_SIZE.LG,
  },
  render: (args) => {
    return (
      <div className='p-12 flex justify-center bg-black'>
        <Spinner {...args} />;
      </div>
    );
  },
};
