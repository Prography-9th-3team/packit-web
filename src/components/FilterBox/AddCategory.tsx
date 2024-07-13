import { useRef } from 'react';

import useEscKeyModalEvent from '@/hooks/useEscKeyModalEvent';
import useOnClickOutside from '@/hooks/useOnClickOutside';

import { Button } from '../common/Button';
import Icon from '../common/Icon';
import { Textfield } from '../common/Textfield';
import TextfieldInput from '../common/Textfield/ui/TextfieldInput';
import TextfieldInputWrapper from '../common/Textfield/ui/TextfieldInputWrapper';

interface IAddCategory {
  category: string;
  isError: boolean;
  handleChangeCategory: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddCategory: () => void;
  handleCloseModal: () => void;
  buttonRef: React.RefObject<HTMLDivElement>;
}

const AddCategory = ({
  category,
  isError,
  handleChangeCategory,
  handleAddCategory,
  handleCloseModal,
  buttonRef,
}: IAddCategory) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEscKeyModalEvent('addCategory', () => handleCloseModal());
  useOnClickOutside([modalRef, buttonRef], () => handleCloseModal());

  return (
    <div
      className='absolute right-0 top-[calc(100%-8px)] p-8 grid grid-cols-[300px_1fr] gap-8 bg-surface rounded-xl shadow-layer'
      ref={modalRef}
    >
      <Textfield
        value={category}
        onChange={handleChangeCategory}
        placeholder='새 카테고리 추가'
        isInvalid={isError}
      >
        <TextfieldInputWrapper>
          <TextfieldInput />
          {isError && <Icon name='warningTriangle_f' className='w-16 h-16 text-icon-critical' />}
        </TextfieldInputWrapper>
      </Textfield>
      <Button type='primary' size='large' onClick={handleAddCategory}>
        <Button.Label>추가</Button.Label>
      </Button>
    </div>
  );
};

export default AddCategory;
