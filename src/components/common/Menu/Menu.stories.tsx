import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { useState } from 'react';
import { Menu } from '.';
import Icon from '../Icon';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Common/Menu',
  component: Menu,
  tags: ['autodocs'],
  args: { onClick: fn() },
  argTypes: {},
} satisfies Meta<typeof Option>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
  render: () => {
    const [selectedItem, setSelectedItem] = useState('');

    const handleSelect = (item: string) => setSelectedItem(item);

    const isSelectedItem = (currentItem: string) => selectedItem === currentItem;

    return (
      <div className='w-[260px] p-12 flex flex-col gap-4'>
        <Menu onClick={() => handleSelect('검색')} isSelected={isSelectedItem('검색')}>
          <Icon name='searchSm_s' width={12} height={12} />
          <Menu.Label>검색</Menu.Label>
        </Menu>
        <Menu onClick={() => handleSelect('홈')} isSelected={isSelectedItem('홈')}>
          <Icon name='home04_s' width={12} height={12} />
          <Menu.Label>홈</Menu.Label>
        </Menu>
        <Menu onClick={() => handleSelect('알림')} isSelected={isSelectedItem('알림')}>
          <Icon name='bell_s' width={12} height={12} />
          <Menu.Label>알림</Menu.Label>
        </Menu>
      </div>
    );
  },
};
