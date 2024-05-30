import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Modal from '.';
import { Button } from '../Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: { isShow: false, onCloseModal() {} },
  argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
  render: (args) => {
    const [isShow, setIsShow] = useState(args.isShow);

    const closeModal = () => {
      setIsShow(false);
    };

    return (
      <>
        <Button type='outline' onClick={() => setIsShow(true)}>
          <Button.Label>Open</Button.Label>
        </Button>

        <Modal isShow={isShow} onCloseModal={closeModal} />
      </>
    );
  },
};
