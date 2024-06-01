'use client';

import useDragUpload from '@/hooks/useDragUpload';
import { cn } from '@/lib/utils';
import useModalStore from '@/stores/modalStore';
import { useState } from 'react';
import { Button } from '../../Button';
import Icon from '../../Icon';
import { Select } from '../../Select';
import { Textfield } from '../../Textfield';
import ModalPortal from '../ModalPortal';

/**
 * ModalName : bookmarkModal
 */
const BookmarkModal = () => {
  const { closeModal } = useModalStore();

  const [category, setCategory] = useState<string>('');
  const [url, setUrl] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [memo, setMemo] = useState<string>('');

  const {
    files,
    isDragged,
    handleUploadFile,
    handleDragenter,
    handleDragover,
    handleDragleave,
    handleDrop,
    handleDeleteFile,
  } = useDragUpload({ maxNum: 1 });

  const handleSaveBookmark = () => {
    alert('북마크 추가');
  };

  const handleCloseModal = () => {
    closeModal('bookmarkModal');
  };

  return (
    <ModalPortal>
      <div className='w-[432px]'>
        <div className='mb-24'>
          <h1 className='text-text heading-2xl-bd '>북마크 추가</h1>
        </div>
        <div className='py-24 flex flex-col gap-32'>
          <div className='flex flex-col gap-16'>
            <Select
              placeholder='카테고리를 선택하거나 입력해 주세요'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <Select.Label>카테고리</Select.Label>
              <Select.InputWrapper>
                <Select.Input />
              </Select.InputWrapper>
            </Select>

            <Textfield
              placeholder='ex) packit.me'
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            >
              <Textfield.Label>URL</Textfield.Label>
              <Textfield.InputWrapper>
                <Textfield.Input />
              </Textfield.InputWrapper>
            </Textfield>

            <Textfield
              placeholder='ex) packit'
              value={name}
              onChange={(e) => setName(e.target.value)}
            >
              <Textfield.Label>이름</Textfield.Label>
              <Textfield.InputWrapper>
                <Textfield.Input />
              </Textfield.InputWrapper>
            </Textfield>

            <Textfield
              placeholder='ex) packit'
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
            >
              <Textfield.Label>메모</Textfield.Label>
              <Textfield.InputWrapper>
                <Textfield.Input />
              </Textfield.InputWrapper>
            </Textfield>
          </div>

          <div
            className={cn([
              'my-0 mx-auto w-[304px] h-[180px] border-dashed border-2 border-border rounded-xl',
              isDragged && 'border-border-hover',
            ])}
            onDragEnter={handleDragenter}
            onDragOver={handleDragover}
            onDragLeave={handleDragleave}
            onDrop={handleDrop}
          >
            {files.length === 0 ? (
              <label className='cursor-pointer py-48 px-[54px] flex flex-col items-center gap-12'>
                <Icon name='filePlus' className='w-32 h-32 text-icon-minimal' />
                <div className='flex flex-col gap-4 items-center'>
                  <div className='text-text body-sm-bold'>북마크 썸네일</div>
                  <p className='text-text-sub body-sm whitespace-nowrap'>
                    최대 5MB의 이미지까지 업로드 가능해요
                  </p>
                  <input type='file' onChange={handleUploadFile} hidden />
                </div>
              </label>
            ) : (
              <div
                className='cursor-pointer w-full h-full flex justify-center items-center'
                onClick={() => handleDeleteFile(files[0].key)}
              >
                {files[0].name}
              </div>
            )}
          </div>
        </div>
        <div className='flex justify-end gap-8'>
          <Button type='secondary' size='large' onClick={handleCloseModal}>
            <Button.Label>닫기</Button.Label>
          </Button>
          <Button type='primary' size='large' onClick={handleSaveBookmark}>
            <Button.Label>추가</Button.Label>
          </Button>
        </div>
      </div>
    </ModalPortal>
  );
};

export default BookmarkModal;
