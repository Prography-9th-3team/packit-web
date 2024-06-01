import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Option } from '.';
import Check from '../Check';
import Icon from '../Icon';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Common/Option',
  component: Option,
  tags: ['autodocs'],
  args: { isSelected: false, onClick: fn() },
  argTypes: {},
} satisfies Meta<typeof Option>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
  render: (args) => {
    return (
      <div className='w-[500px] flex flex-col gap-20'>
        <Option {...args}>
          <Option.Label>Text</Option.Label>
        </Option>
        <Option {...args}>
          <Check />
          <Option.Label>Text</Option.Label>
        </Option>
        <Option {...args}>
          <Option.Label>Text</Option.Label>
          <Icon name='chevronDown_s' className='w-16 h-16 text-text-minimal' />
        </Option>
        <Option {...args}>
          <Check defaultChecked />
          <Option.Label>Text</Option.Label>
          <Icon name='chevronDown_s' className='w-16 h-16 text-text-minimal' />
        </Option>
      </div>
    );
  },
};

export const Selected_Option: Story = {
  args: { isSelected: true },
  render: (args) => {
    return (
      <div className='w-[500px] flex flex-col gap-20'>
        <Option {...args}>
          <Option.Label>Text</Option.Label>
        </Option>
        <Option {...args}>
          <Check />
          <Option.Label>Text</Option.Label>
        </Option>
        <Option {...args}>
          <Option.Label>Text</Option.Label>
          <Icon name='chevronDown_s' className='w-16 h-16 stroke-text-minimal' />
        </Option>
        <Option {...args}>
          <Check defaultChecked />
          <Option.Label>Text</Option.Label>
          <Icon name='chevronDown_s' className='w-16 h-16 stroke-text-minimal' />
        </Option>
      </div>
    );
  },
};

export const Option_List: Story = {
  args: {},
  render: (args) => {
    return (
      <div className='w-[500px]'>
        <div className='flex flex-col gap-4 p-8 rounded-lg shadow-layer'>
          <Option {...args} isSelected>
            <Option.Label>Text</Option.Label>
          </Option>
          <Option {...args}>
            <Option.Label>Text</Option.Label>
          </Option>
          <Option {...args}>
            <Option.Label>Text</Option.Label>
          </Option>
          <Option {...args}>
            <Option.Label>Text</Option.Label>
          </Option>
        </div>
      </div>
    );
  },
};
