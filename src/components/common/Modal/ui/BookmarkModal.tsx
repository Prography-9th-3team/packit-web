'use client';

import {
  ISaveBookmarkDataType,
  fetchGetMetaData,
  fetchUploadImage,
  useSaveBookmark,
} from '@/apis/bookmark';
import useDragUpload from '@/hooks/useDragUpload';
import useEscKeyModalEvent from '@/hooks/useEscKeyModalEvent';
import { cn } from '@/lib/utils';
import useModalStore from '@/stores/modalStore';
import useToastStore from '@/stores/toastStore';
import { useFormik } from 'formik';
import { debounce } from 'lodash';
import { ChangeEvent, useCallback, useState } from 'react';
import * as yup from 'yup';
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
  const { addToast } = useToastStore();

  useEscKeyModalEvent('bookmarkModal');

  const { mutateAsync: mutateSaveBookmark } = useSaveBookmark();

  const {
    files,
    isDragged,
    handleUploadFile,
    handleDragenter,
    handleDragover,
    handleDragleave,
    handleDrop,
    handleDeleteFile,
  } = useDragUpload({ maxNum: 1, extension: ['png', 'jpg', 'jpeg'] });

  const formik = useFormik<ISaveBookmarkDataType>({
    initialValues: {
      categoryIds: [0],
      title: '',
      url: '',
      memo: '',
      representImageUrl: '',
      favicon: '',
      siteName: '',
    },
    validationSchema: yup.object({
      url: yup.string().required('URL을 입력해 주세요.'),
    }),
    onSubmit: (values) => {
      saveBookmark(values);
    },
  });

  const [category, setCategory] = useState<string>('');

  const handleChangeUrl = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    formik.setFieldValue('url', value);
    delayedHTML(value);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const delayedHTML = useCallback(
    debounce((url) => getMetaTag(url), 1000),
    [],
  );

  const getMetaTag = async (url: string) => {
    const result = await fetchGetMetaData(url);

    if (result) {
      const meta = result.meta;

      formik.setFieldValue('title', meta.title);
      formik.setFieldValue('memo', meta.description);
      formik.setFieldValue('favicon', meta.favicon);
      formik.setFieldValue('representImageUrl', meta.image);
      formik.setFieldValue('siteName', meta.siteName);
    } else {
      formik.setFieldError('url', '등록할 수 없는 URL이에요.');
    }
  };

  // 북마크 등록
  const saveBookmark = async (values: ISaveBookmarkDataType) => {
    const formData = new FormData();

    if (files.length > 0) {
      formData.append('file', files[0].originFile);
      const res = await fetchUploadImage(formData);

      if (res?.message === 'OK') {
        values.userInsertRepresentImage = res.result;
      } else {
        return;
      }
    }

    mutateSaveBookmark(values).then(() => {
      addToast('북마크가 추가되었어요.', 'success');

      closeModal('bookmarkModal');
    });
  };

  return (
    <ModalPortal>
      <div className='w-[432px] overflow-hidden'>
        <div className='mb-24'>
          <h1 className='text-text heading-2xl-bd'>북마크 추가</h1>
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
              name='url'
              placeholder='ex) packit.me'
              value={formik.values.url}
              onChange={handleChangeUrl}
              isInvalid={!!formik.errors.url}
            >
              <Textfield.Label>URL</Textfield.Label>
              <Textfield.InputWrapper>
                <Textfield.Input />
              </Textfield.InputWrapper>
              {formik.errors.url && <Textfield.HelpText>{formik.errors.url}</Textfield.HelpText>}
            </Textfield>

            <Textfield
              name='title'
              placeholder='ex) packit'
              value={formik.values.title}
              onChange={formik.handleChange}
            >
              <Textfield.Label>이름</Textfield.Label>
              <Textfield.InputWrapper>
                <Textfield.Input />
              </Textfield.InputWrapper>
            </Textfield>

            <Textfield
              name='memo'
              placeholder='ex) packit'
              value={formik.values.memo}
              onChange={formik.handleChange}
            >
              <Textfield.Label>메모</Textfield.Label>
              <Textfield.InputWrapper>
                <Textfield.Input />
              </Textfield.InputWrapper>
            </Textfield>
          </div>

          <div
            className={cn([
              'my-0 mx-auto w-[304px] h-[180px] border-dashed border-border rounded-xl overflow-hidden',
              'hover:bg-action-secondary-hover',
              isDragged && 'bg-action-secondary-pressed',
              files.length === 0 && 'border-2',
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
                  <input type='file' onChange={handleUploadFile} hidden accept='image/*' />
                </div>
              </label>
            ) : (
              <div
                className='cursor-pointer w-full h-full flex justify-center items-center'
                onClick={() => handleDeleteFile(files[0].key)}
              >
                <img
                  className='aspect-[300/180] object-cover'
                  src={String(files[0].src)}
                  alt='썸네일'
                />
              </div>
            )}
          </div>
        </div>
        <div className='flex justify-end gap-8'>
          <Button type='secondary' size='large' onClick={() => closeModal('bookmarkModal')}>
            <Button.Label>닫기</Button.Label>
          </Button>
          <Button type='primary' size='large' onClick={() => formik.handleSubmit()}>
            <Button.Label>추가</Button.Label>
          </Button>
        </div>
      </div>
    </ModalPortal>
  );
};

export default BookmarkModal;
