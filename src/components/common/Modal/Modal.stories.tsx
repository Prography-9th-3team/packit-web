import useModalStore from '@/stores/modalStore';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { Textfield } from '../Textfield';
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
          <div className='w-[432px]'>
            <div className='mb-24'>
              <h1 className='text-text heading-2xl-bd '>북마크 추가</h1>
            </div>
            <div className='pt-24 flex flex-col gap-16'>
              <Textfield
                placeholder='카테고리를 선택하거나 입력 해주세요'
                value=''
                onChange={() => {}}
              >
                <Textfield.Label>카테고리</Textfield.Label>
                <Textfield.InputWrapper>
                  <Textfield.Input />
                </Textfield.InputWrapper>
              </Textfield>

              <Textfield placeholder='ex) packit.me' value='' onChange={() => {}}>
                <Textfield.Label>URL</Textfield.Label>
                <Textfield.InputWrapper>
                  <Textfield.Input />
                </Textfield.InputWrapper>
              </Textfield>

              <Textfield placeholder='ex) packit' value='' onChange={() => {}}>
                <Textfield.Label>이름</Textfield.Label>
                <Textfield.InputWrapper>
                  <Textfield.Input />
                </Textfield.InputWrapper>
              </Textfield>
            </div>
          </div>
        </ModalPortal>
      </>
    );
  },
};
