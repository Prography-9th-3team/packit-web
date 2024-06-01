import useModalStore from '@/stores/modalStore';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import Modal from './ModalLayout';
import ModalPortal from './ModalPortal';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
  render: () => {
    const { openModal } = useModalStore();

    return (
      <>
        <Button type='outline' onClick={openModal}>
          <Button.Label>Open</Button.Label>
        </Button>

        <div id='modal'></div>

        <ModalPortal>
          <div>Modal Open</div>
        </ModalPortal>
      </>
    );
  },
};
