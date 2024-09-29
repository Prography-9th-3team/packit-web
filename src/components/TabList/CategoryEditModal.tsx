import { useRef, useState } from 'react';

import { useEditCategory } from '@/apis/category';
import useEscKeyModalEvent from '@/hooks/useEscKeyModalEvent';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import useToastStore from '@/stores/toastStore';

import { Button } from '../common/Button';
import Icon from '../common/Icon';
import { MODAL_NAME } from '../common/Modal/types';
import { Textfield } from '../common/Textfield';
import TextfieldInput from '../common/Textfield/ui/TextfieldInput';
import TextfieldInputWrapper from '../common/Textfield/ui/TextfieldInputWrapper';

interface ICategoryEditModal {
  categoryId: number;
  categoryName: string;
  handleCloseModal: () => void;
  categoryEditRef: React.RefObject<HTMLDivElement>;
}

const CategoryEditModal = ({
  categoryId,
  categoryName,
  handleCloseModal,
  categoryEditRef,
}: ICategoryEditModal) => {
  const { addToast } = useToastStore();

  const modalRef = useRef<HTMLDivElement>(null);

  const [editCategoryName, setEditCategoryName] = useState(categoryName);
  const isError = editCategoryName === '';

  useEscKeyModalEvent(MODAL_NAME.CATEGORY_EDIT_MODAL, () => handleCloseModal());
  useOnClickOutside([modalRef], () => handleCloseModal());

  const { mutateAsync: editCategory } = useEditCategory();

  const handleEditCategory = async () => {
    await editCategory({ categoryId, categoryName: editCategoryName }).then((res) => {
      if (res.status === 200) {
        addToast({ message: '카테고리 이름이 수정되었어요', type: 'default' });
        handleCloseModal();
      }
    });
  };

  return (
    <div ref={categoryEditRef}>
      <div
        className='absolute top-[calc(100%-10px)] p-8 grid grid-cols-[300px_1fr] gap-8 bg-surface rounded-xl shadow-layer'
        ref={modalRef}
      >
        <Textfield
          value={editCategoryName}
          onChange={(e) => setEditCategoryName(e.target.value)}
          placeholder='변경할 카테고리 이름을 입력해 주세요'
          isInvalid={isError}
        >
          <TextfieldInputWrapper>
            <TextfieldInput />
            {isError && <Icon name='warningTriangle_f' className='w-16 h-16 text-icon-critical' />}
          </TextfieldInputWrapper>
        </Textfield>
        <Button
          type='primary'
          size='large'
          onClick={handleEditCategory}
          isDisabled={isError || editCategoryName === categoryName}
        >
          <Button.Label>수정</Button.Label>
        </Button>
      </div>
    </div>
  );
};

export default CategoryEditModal;
