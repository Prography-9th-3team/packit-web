import type { Meta, StoryObj } from '@storybook/react';
import Footer from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Footer',
  component: Footer,
  tags: ['autodocs'],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
  render: () => {
    return <Footer />;
  },
};
