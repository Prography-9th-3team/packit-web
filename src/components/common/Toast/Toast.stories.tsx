import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Common/Toast',
  component: Toast,
  tags: ['autodocs'],
  args: {},
  argTypes: { type: ['defualt', 'success', 'error'] },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Defualt: Story = {
  args: { type: 'defualt' },
};

export const Success: Story = {
  args: { type: 'success' },
};

export const Error: Story = {
  args: { type: 'error' },
};
