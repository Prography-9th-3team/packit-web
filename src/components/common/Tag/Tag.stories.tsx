import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Tag } from '.';
import Icon from '../Icon';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Common/Tag',
  component: Tag,
  tags: ['autodocs'],
  args: { onClick: fn() },
  argTypes: {
    size: {
      options: ['default', 'sm', 'xs'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    size: 'default',
    disabled: false,
    isButton: false,
    children: <Tag.Label>Tag</Tag.Label>,
  },
};

export const TagWithRightIcon: Story = {
  args: {
    size: 'default',
    disabled: false,
    isButton: true,
    children: (
      <>
        <Tag.Label>전체</Tag.Label>
        <Icon name='xClose_s' className='w-16 h-16 text-icon-sub' />
      </>
    ),
  },
};

export const TagWithLeftIcon: Story = {
  args: {
    size: 'default',
    disabled: false,
    isButton: true,
    children: (
      <>
        <Icon name='xClose_s' className='w-16 h-16 text-icon-sub' />
        <Tag.Label>전체</Tag.Label>
      </>
    ),
  },
};

export const TagWithLongLabel: Story = {
  args: {
    size: 'default',
    disabled: false,
    isButton: true,
    children: (
      <>
        <Tag.Label>긴태그긴태그긴태그긴태그긴태그</Tag.Label>
        <Icon name='xClose_s' className='w-16 h-16 text-icon-sub' />
      </>
    ),
  },
};
