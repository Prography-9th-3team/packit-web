import type { Meta, StoryObj } from '@storybook/react';
import { ChangeEvent, useState } from 'react';
import { Select } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Common/Select',
  component: Select,
  tags: ['autodocs'],
  args: { type: 'default', placeholder: '플레이스홀더', text: '', onChange: (e) => e },
  argTypes: {
    type: {
      options: ['default', 'invalid'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: { label: 'Label', subText: 'Helptext' },
  render: (args) => {
    const [text, setText] = useState<string>('');
    const [tags, setTags] = useState<Array<string>>([]);

    const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      setText(value);
    };

    const handleAddTag = () => {
      setTags((prev) => [...prev, text]);
      setText('');
    };

    return (
      <div className='flex gap-5'>
        <Select
          {...args}
          text={text}
          tagList={tags}
          onChange={handleChangeText}
          onAddTag={handleAddTag}
        >
          <Select.Label />
          <Select.Input />
          <Select.Text />
        </Select>
      </div>
    );
  },
};
