import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Common/Button',
  component: Button,
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const PrimaryButton: Story = {
  args: {
    type: 'primary',
    size: 'large',
    isLoading: false,
    disabled: false,
    children: <Button.Label>버튼</Button.Label>,
  },
};

export const OutlineButton: Story = {
  args: {
    type: 'outline',
    size: 'large',
    isLoading: false,
    disabled: false,
    children: <Button.Label>버튼</Button.Label>,
  },
};

export const SecondaryButton: Story = {
  args: {
    type: 'secondary',
    size: 'large',
    isLoading: false,
    disabled: false,
    children: <Button.Label>버튼</Button.Label>,
  },
};

export const CriticalButton: Story = {
  args: {
    type: 'critical',
    size: 'large',
    isLoading: false,
    disabled: false,
    children: <Button.Label>버튼</Button.Label>,
  },
};
