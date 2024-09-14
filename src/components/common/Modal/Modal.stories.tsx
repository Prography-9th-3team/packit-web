import type { Meta, StoryObj } from '@storybook/react';

import useModalStore from '@/stores/modalStore';

import { Button } from '../Button';
import Modal from './ModalLayout';
import BookmarkModal from './ui/BookmarkModal';

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
export const Bookmark: Story = {
  args: {},
  render: () => {
    const { openModal, isModalOpen } = useModalStore();

    return (
      <>
        <Button type='outline' onClick={() => openModal('bookmarkModal')}>
          <Button.Label>Open</Button.Label>
        </Button>

        <div id='modal'></div>

        {isModalOpen('bookmarkModal') && <BookmarkModal />}
      </>
    );
  },
};
