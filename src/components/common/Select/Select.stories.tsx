import type { Meta, StoryObj } from '@storybook/react';
import { ChangeEvent, useState } from 'react';
import { Select } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Common/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    type: 'default',
    placeholder: '플레이스홀더',
    text: '',
    onChange: (e) => e,
  },
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
  args: {},
  render: (args) => {
    const [idx, setIdx] = useState<number>(0);
    const [text, setText] = useState<string>('');
    const [tags, setTags] = useState<Array<{ id: number; label: string }>>([]);

    const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      setText(value);
    };

    const handleAddTag = () => {
      setTags((prev) => [...prev, { id: idx, label: text }]);
      setText('');
      setIdx((prev) => prev + 1);
    };

    const handleRemoveTag = (id: number) => {
      setTags((prev) => prev.filter((tag) => tag.id !== id));
    };

    return (
      <div className='w-[500px] flex flex-col gap-32'>
        <Select
          {...args}
          text={text}
          tagList={tags}
          onChange={handleChangeText}
          onAddTag={handleAddTag}
          onRemoveTag={handleRemoveTag}
        >
          <Select.Label>Label</Select.Label>
          <Select.Input />
          <Select.Text>HelpText</Select.Text>
        </Select>

        <Select
          {...args}
          text={text}
          tagList={tags}
          onChange={handleChangeText}
          onAddTag={handleAddTag}
          onRemoveTag={handleRemoveTag}
        >
          <Select.Input />
          <Select.Text>HelpText</Select.Text>
        </Select>

        <Select
          {...args}
          text={text}
          tagList={tags}
          onChange={handleChangeText}
          onAddTag={handleAddTag}
          onRemoveTag={handleRemoveTag}
        >
          <Select.Label>Label</Select.Label>
          <Select.Input />
        </Select>

        <Select
          {...args}
          text={text}
          tagList={tags}
          onChange={handleChangeText}
          onAddTag={handleAddTag}
          onRemoveTag={handleRemoveTag}
        >
          <Select.Input />
        </Select>
      </div>
    );
  },
};

export const Invalid: Story = {
  args: { type: 'invalid' },
  render: (args) => {
    const [idx, setIdx] = useState<number>(0);
    const [text, setText] = useState<string>('');
    const [tags, setTags] = useState<Array<{ id: number; label: string }>>([]);

    const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      setText(value);
    };

    const handleAddTag = () => {
      setTags((prev) => [...prev, { id: idx, label: text }]);
      setText('');
      setIdx((prev) => prev + 1);
    };

    const handleRemoveTag = (id: number) => {
      setTags((prev) => prev.filter((tag) => tag.id !== id));
    };

    return (
      <div className='w-[500px] flex flex-col gap-32'>
        <Select
          {...args}
          text={text}
          tagList={tags}
          onChange={handleChangeText}
          onAddTag={handleAddTag}
          onRemoveTag={handleRemoveTag}
        >
          <Select.Label>Label</Select.Label>
          <Select.Input />
          <Select.Text>HelpText</Select.Text>
        </Select>

        <Select
          {...args}
          text={text}
          tagList={tags}
          onChange={handleChangeText}
          onAddTag={handleAddTag}
          onRemoveTag={handleRemoveTag}
        >
          <Select.Input />
          <Select.Text>HelpText</Select.Text>
        </Select>

        <Select
          {...args}
          text={text}
          tagList={tags}
          onChange={handleChangeText}
          onAddTag={handleAddTag}
          onRemoveTag={handleRemoveTag}
        >
          <Select.Label>Label</Select.Label>
          <Select.Input />
        </Select>

        <Select
          {...args}
          text={text}
          tagList={tags}
          onChange={handleChangeText}
          onAddTag={handleAddTag}
          onRemoveTag={handleRemoveTag}
        >
          <Select.Input />
        </Select>
      </div>
    );
  },
};

export const Disabled: Story = {
  args: { isDisabled: true },
  render: (args) => {
    const [idx, setIdx] = useState<number>(0);
    const [text, setText] = useState<string>('');
    const [tags, setTags] = useState<Array<{ id: number; label: string }>>([]);

    const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      setText(value);
    };

    const handleAddTag = () => {
      setTags((prev) => [...prev, { id: idx, label: text }]);
      setText('');
      setIdx((prev) => prev + 1);
    };

    const handleRemoveTag = (id: number) => {
      setTags((prev) => prev.filter((tag) => tag.id !== id));
    };

    return (
      <div className='w-[500px] flex flex-col gap-32'>
        <Select
          {...args}
          text={text}
          tagList={tags}
          onChange={handleChangeText}
          onAddTag={handleAddTag}
          onRemoveTag={handleRemoveTag}
        >
          <Select.Label>Label</Select.Label>
          <Select.Input />
          <Select.Text>HelpText</Select.Text>
        </Select>

        <Select
          {...args}
          text={text}
          tagList={tags}
          onChange={handleChangeText}
          onAddTag={handleAddTag}
          onRemoveTag={handleRemoveTag}
        >
          <Select.Input />
          <Select.Text>HelpText</Select.Text>
        </Select>

        <Select
          {...args}
          text={text}
          tagList={tags}
          onChange={handleChangeText}
          onAddTag={handleAddTag}
          onRemoveTag={handleRemoveTag}
        >
          <Select.Label>Label</Select.Label>
          <Select.Input />
        </Select>

        <Select
          {...args}
          text={text}
          tagList={tags}
          onChange={handleChangeText}
          onAddTag={handleAddTag}
          onRemoveTag={handleRemoveTag}
        >
          <Select.Input />
        </Select>
      </div>
    );
  },
};
