import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from '.';
import ToastButton from './ui/ToastButton';
import ToastIcon from './ui/ToastIcon';
import ToastLabel from './ui/ToastLabel';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Common/Toast',
  component: Toast,
  tags: ['autodocs'],
  args: { handleOnClick: () => alert('Toast Click') },
  argTypes: {
    type: { options: ['default', 'success', 'error'], control: { type: 'select' } },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Defualt: Story = {
  args: { type: 'default' },
  render: (args) => {
    return (
      <div className='flex gap-5'>
        <Toast {...args}>
          <ToastIcon />
          <ToastLabel>텍스트</ToastLabel>
          <ToastButton>버튼</ToastButton>
        </Toast>

        <Toast {...args}>
          <ToastIcon />
          <ToastLabel>텍스트</ToastLabel>
        </Toast>

        <Toast {...args}>
          <ToastLabel>텍스트</ToastLabel>
          <ToastButton>버튼</ToastButton>
        </Toast>

        <Toast {...args}>
          <ToastLabel>텍스트</ToastLabel>
        </Toast>
      </div>
    );
  },
};

export const Success: Story = {
  args: { type: 'success' },
  render: (args) => {
    return (
      <div className='flex gap-5'>
        <Toast {...args}>
          <ToastIcon />
          <ToastLabel>텍스트</ToastLabel>
          <ToastButton>버튼</ToastButton>
        </Toast>

        <Toast {...args}>
          <ToastIcon />
          <ToastLabel>텍스트</ToastLabel>
        </Toast>

        <Toast {...args}>
          <ToastLabel>텍스트</ToastLabel>
          <ToastButton>버튼</ToastButton>
        </Toast>

        <Toast {...args}>
          <ToastLabel>텍스트</ToastLabel>
        </Toast>
      </div>
    );
  },
};

export const Error: Story = {
  args: { type: 'error' },
  render: (args) => {
    return (
      <div className='flex gap-5'>
        <Toast {...args}>
          <ToastLabel>텍스트</ToastLabel>
          <ToastButton>버튼</ToastButton>
        </Toast>

        <Toast {...args}>
          <ToastIcon />
          <ToastLabel>텍스트</ToastLabel>
        </Toast>

        <Toast {...args}>
          <ToastLabel>텍스트</ToastLabel>
          <ToastButton>버튼</ToastButton>
        </Toast>

        <Toast {...args}>
          <ToastLabel>텍스트</ToastLabel>
        </Toast>
      </div>
    );
  },
};
