import useToastStore from '@/stores/toastStore';
import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from '.';
import { Button } from '../Button';
import ToastArea from './ToastArea';
import ToastIcon from './ui/ToastIcon';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Common/Toast',
  component: Toast,
  tags: ['autodocs'],
  args: { onClick: () => alert('Toast Click') },
  argTypes: {
    type: { options: ['default', 'success', 'error'], control: { type: 'select' } },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: { type: 'default' },
  render: (args) => {
    return (
      <div className='flex gap-5'>
        <Toast {...args}>
          <ToastIcon />
          <Toast.Label>텍스트</Toast.Label>
          <Toast.Button>버튼</Toast.Button>
        </Toast>

        <Toast {...args}>
          <ToastIcon />
          <Toast.Label>텍스트</Toast.Label>
        </Toast>

        <Toast {...args}>
          <Toast.Label>텍스트</Toast.Label>
          <Toast.Button>버튼</Toast.Button>
        </Toast>

        <Toast {...args}>
          <Toast.Label>텍스트</Toast.Label>
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
          <Toast.Label>텍스트</Toast.Label>
          <Toast.Button>버튼</Toast.Button>
        </Toast>

        <Toast {...args}>
          <ToastIcon />
          <Toast.Label>텍스트</Toast.Label>
        </Toast>

        <Toast {...args}>
          <Toast.Label>텍스트</Toast.Label>
          <Toast.Button>버튼</Toast.Button>
        </Toast>

        <Toast {...args}>
          <Toast.Label>텍스트</Toast.Label>
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
          <ToastIcon />
          <Toast.Label>텍스트</Toast.Label>
          <Toast.Button>버튼</Toast.Button>
        </Toast>

        <Toast {...args}>
          <ToastIcon />
          <Toast.Label>텍스트</Toast.Label>
        </Toast>

        <Toast {...args}>
          <Toast.Label>텍스트</Toast.Label>
          <Toast.Button>버튼</Toast.Button>
        </Toast>

        <Toast {...args}>
          <Toast.Label>텍스트</Toast.Label>
        </Toast>
      </div>
    );
  },
};

export const ToastMotion: Story = {
  args: { type: 'error' },
  decorators: () => {
    const { addToast } = useToastStore();

    return (
      <div className='flex gap-8'>
        <Button
          onClick={() => addToast({ message: 'Success Toast', type: 'success' })}
          type='primary'
        >
          <Button.Label>Success</Button.Label>
        </Button>
        <Button onClick={() => addToast({ message: 'Error Toast', type: 'error' })} type='critical'>
          <Button.Label>Error</Button.Label>
        </Button>
        <Button
          onClick={() => addToast({ message: 'Default Toast', type: 'default' })}
          type='outline'
        >
          <Button.Label>Default</Button.Label>
        </Button>

        <ToastArea />
      </div>
    );
  },
};
