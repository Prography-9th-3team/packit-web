import { useUserProfile } from '@/apis/auth';
import { getFormattedYearToDateString } from '@/lib/date';
import { cn } from '@/lib/utils';
import useModalStore from '@/stores/modalStore';

import Avatar from '../common/Avatar';
import { AVATAR_SIZE } from '../common/Avatar/constants';
import { Button } from '../common/Button';
import { BUTTON_SIZE, BUTTON_TYPE } from '../common/Button/ui/ButtonMain';
import Icon from '../common/Icon';
import ModalPortal from '../common/Modal/ModalPortal';
import { MODAL_NAME } from '../common/Modal/types';
import { Tag } from '../common/Tag';
import { TAG_SIZE } from '../common/Tag/ui/TagMain';
import DeleteAccount from './DeleteAccount';

const SettingModal = () => {
  const { closeModal, openModal, isModalOpen } = useModalStore();

  const { data: userProfile } = useUserProfile();

  return (
    <ModalPortal>
      <section className={cn('flex flex-col items-start w-[480px] h-[396px] p-24 pb-16 relative')}>
        <header className='w-full items-center self-stretch heading-2xl-bd pb-24'>환경설정</header>

        <div className='py-24 w-full h-[252px] flex flex-col gap-16 items-center relative'>
          <Avatar profileUrl={userProfile?.imageUrl} size={AVATAR_SIZE.XXL} />
          <div className='w-full flex flex-col gap-4 justify-center'>
            <div className='heading-lg-bd text-text text-center text-ellipsis overflow-hidden whitespace-nowrap'>
              {userProfile?.name}
            </div>
            <div className='body-md text-text-minimal overflow-hidden text-ellipsis whitespace-nowrap text-center'>
              {userProfile?.email}
            </div>
          </div>

          <Tag size={TAG_SIZE.SM}>
            <Tag.Label>{`${getFormattedYearToDateString(userProfile?.createdAt)} 가입`}</Tag.Label>
          </Tag>

          <Button
            type={BUTTON_TYPE.SECONDARY}
            size={BUTTON_SIZE.TINY}
            onClick={() => openModal(MODAL_NAME.DELETE_ACCOUNT_MODAL)}
            className='absolute right-0'
          >
            <Icon name='trash_can' className='w-16 h-16 text-icon-secondary' />
            <Button.Label>계정 삭제</Button.Label>
          </Button>
        </div>

        <footer className='w-full flex justify-end items-center self-stretch'>
          <Button
            type={BUTTON_TYPE.SECONDARY}
            size={BUTTON_SIZE.LARGE}
            onClick={() => closeModal(MODAL_NAME.SETTING_MODAL)}
          >
            <Button.Label>닫기</Button.Label>
          </Button>
        </footer>
        {isModalOpen(MODAL_NAME.DELETE_ACCOUNT_MODAL) && <DeleteAccount />}
      </section>
    </ModalPortal>
  );
};

export default SettingModal;
