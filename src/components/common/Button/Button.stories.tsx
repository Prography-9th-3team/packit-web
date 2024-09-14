import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '.';
import Icon from '../Icon';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Common/Button',
  component: Button,
  tags: ['autodocs'],
  args: { onClick: fn() },
  argTypes: {
    type: {
      options: ['primary', 'outline', 'secondary', 'critical'],
      control: { type: 'select' },
    },
    size: {
      options: ['large', 'medium', 'small', 'tiny'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    type: 'primary',
    size: 'large',
    isLoading: false,
    isDisabled: false,
    children: <Button.Label>버튼</Button.Label>,
  },
};

export const OutlineButton: Story = {
  args: {
    type: 'outline',
    size: 'large',
    isLoading: false,
    isDisabled: false,
    children: <Button.Label>버튼</Button.Label>,
  },
};

export const SecondaryButton: Story = {
  args: {
    type: 'secondary',
    size: 'large',
    isLoading: false,
    isDisabled: false,
    children: <Button.Label>버튼</Button.Label>,
  },
};

export const CriticalButton: Story = {
  args: {
    type: 'critical',
    size: 'large',
    isLoading: false,
    isDisabled: true,
    children: <Button.Label>버튼</Button.Label>,
  },
};

export const LeftIconButton: Story = {
  args: {
    type: 'primary',
    size: 'large',
    isLoading: false,
    isDisabled: false,
    children: (
      <>
        <Icon name='placeholder_s' className='w-16 h-16 text-icon-on' />
        <Button.Label>버튼</Button.Label>
      </>
    ),
  },
};

export const RightIconButton: Story = {
  args: {
    type: 'outline',
    size: 'large',
    isLoading: false,
    isDisabled: false,
    children: (
      <>
        <Button.Label>버튼</Button.Label>
        <Icon name='placeholder_s' className='w-16 h-16 text-icon-secondary' />
      </>
    ),
  },
};

export const LoadingButton: Story = {
  args: {
    type: 'primary',
    size: 'large',
    isLoading: true,
    isDisabled: false,
    children: <></>,
  },
};
