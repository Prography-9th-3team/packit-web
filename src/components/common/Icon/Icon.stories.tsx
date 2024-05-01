import type { Meta, StoryObj } from '@storybook/react';
import Icon from '.';
import * as iconTypes from './lib/index';

const meta = {
  title: 'Common/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      options: Object.keys(iconTypes),
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: 'xClose_s',
    className: 'w-[100px] h-[100px] stroke-critical',
  },
};
