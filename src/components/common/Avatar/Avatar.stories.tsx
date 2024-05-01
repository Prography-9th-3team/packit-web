import type { Meta, StoryObj } from '@storybook/react';

import Avatar from '.';
import { AVATAR_SIZE } from './constants';

const meta = {
  title: 'Common/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: Object.values(AVATAR_SIZE),
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: AVATAR_SIZE.LG,
  },
};

export const PhotoAvatar: Story = {
  args: {
    profileUrl: 'https://avatars.githubusercontent.com/u/56246060?v=4',
    size: AVATAR_SIZE.LG,
  },
};
