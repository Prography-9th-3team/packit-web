import { useDeleteAccount } from '@/apis/auth';
import { cn } from '@/lib/utils';
import useModalStore from '@/stores/modalStore';
import axios from 'axios';
import { Button } from '../common/Button';
import { BUTTON_SIZE, BUTTON_TYPE } from '../common/Button/ui/ButtonMain';
import { MODAL_NAME } from '../common/Modal/types';

const DeleteAccount = () => {
  const { mutateAsync: deleteAccount } = useDeleteAccount();
  const { closeModal } = useModalStore();

  const handleDeleteAccount = async () => {
    // const responseOfDeleteCookies = await axios.delete('/api/auth/cookies');
    const responseOfDeleteAccount = await deleteAccount();
    const res = await axios.delete('/api/auth/cookie');

    if (responseOfDeleteAccount.data && res) {
      closeModal(MODAL_NAME.SETTING_MODAL);
    }
  };

  return (
    <div
      className={cn(
        'absolute left-[80px] top-[104px] bg-surface shadow-modal w-[320px] flex flex-col items-start z-10',
        'rounded-2xl h-[188px] p-24 pb-16 items-center',
      )}
    >
      <div className='gap-16 flex flex-col pb-24'>
        <div className='text-center heading-xl-bd text-text'>계정 삭제</div>
        <div className='text-center body-md text-text-sub'>
          계정을 삭제하시면 저장된 북마크를 다시 복원할
          <br />수 없어요. 정말로 삭제하시겠어요?
        </div>
      </div>
      <div className='w-full justify-end flex gap-8'>
        <Button
          type={BUTTON_TYPE.SECONDARY}
          size={BUTTON_SIZE.MEDIUM}
          onClick={() => {
            closeModal(MODAL_NAME.DELETE_ACCOUNT_MODAL);
          }}
        >
          닫기
        </Button>
        <Button type={BUTTON_TYPE.CRITICAL} size={BUTTON_SIZE.MEDIUM} onClick={handleDeleteAccount}>
          <Button.Label>삭제</Button.Label>
        </Button>
      </div>
    </div>
  );
};

export default DeleteAccount;
