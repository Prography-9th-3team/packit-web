'use client';

import {
  ISaveBookmarkDataType,
  fetchGetMetaData,
  fetchUploadImage,
  useSaveBookmark,
} from '@/apis/bookmark';
import { useCategoryList, useSaveCategory } from '@/apis/category';
import useDragUpload from '@/hooks/useDragUpload';
import useEscKeyModalEvent from '@/hooks/useEscKeyModalEvent';
import { cn } from '@/lib/utils';
import useModalStore from '@/stores/modalStore';
import useToastStore from '@/stores/toastStore';
import { useFormik } from 'formik';
import { debounce } from 'lodash';
import { ChangeEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import * as yup from 'yup';
import { Button } from '../../Button';
import Check from '../../Check';
import Icon from '../../Icon';
import { Option } from '../../Option';
import { Select } from '../../Select';
import { Tag } from '../../Tag';
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
  const { data: categoryData } = useCategoryList();
  const { mutateAsync: mutateSaveCategory } = useSaveCategory();

  const {
    file,
    isDragged,
    handleUploadFile,
    handleDragenter,
    handleDragover,
    handleDragleave,
    handleDrop,
  } = useDragUpload({ extension: ['png', 'jpg', 'jpeg'] });

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
      memo: yup.string().max(200, '200자 이내로 작성해주세요.'),
      url: yup.string().required('URL을 입력해 주세요.'),
    }),
    onSubmit: (values) => {
      saveBookmark(values);
    },
  });

  const categoryRef = useRef<HTMLDivElement>(null);

  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [category, setCategory] = useState<string>('');
  const [selectCategory, setSelectCategory] = useState<Array<{ label: string; value: number }>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // 카테고리 선태
  const handleSelectCategory = async () => {
    const res = await mutateSaveCategory(category);

    handleCheckCategory(category, res.data.result);
    setCategory('');
  };

  // 카테고리 체크
  const handleCheckCategory = (label: string, value: number) => {
    setSelectCategory((prev) => [...prev, { label, value }]);
  };

  // 카테고리 삭제
  const handleRemoveCategory = (id: number) => {
    setSelectCategory((prev) => prev.filter((item) => item.value !== id));
  };

  const handleChangeUrl = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    formik.setFieldValue('url', value);
    delayedHTML(value);
  };

  const handleChangeCategory = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    const checked = e.target.checked;

    if (checked) {
      const findCategory = categoryData?.find((item) => item.categoryId === value);

      if (findCategory) {
        handleCheckCategory(findCategory.categoryName, findCategory.categoryId);
      }
    } else {
      handleRemoveCategory(value);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const delayedHTML = useCallback(
    debounce((url) => getMetaTag(url), 600),
    [],
  );

  // 메타 데이터 가져오기
  const getMetaTag = async (url: string) => {
    setIsLoading(true);

    const result = await fetchGetMetaData(url);

    if (result) {
      const meta = result.meta;

      formik.setFieldValue('title', meta.title);
      formik.setFieldValue('memo', meta.description.substring(0, 200));
      formik.setFieldValue('favicon', meta.favicon);
      formik.setFieldValue('representImageUrl', meta.image);
      formik.setFieldValue('siteName', meta.siteName);
    } else {
      formik.setFieldError('url', '등록할 수 없는 URL이에요.');
    }

    const MIN_LAZY_TIME = 1000;

    setTimeout(() => {
      setIsLoading(false);
    }, MIN_LAZY_TIME);
  };

  // 북마크 등록
  const saveBookmark = async (values: ISaveBookmarkDataType) => {
    const formData = new FormData();

    if (file) {
      formData.append('file', file.originFile);
      const res = await fetchUploadImage(formData);

      if (res?.message === 'OK') {
        values.userInsertRepresentImage = res.result;
      } else {
        return;
      }
    }

    values.categoryIds = selectCategory.map((item) => item.value);

    mutateSaveBookmark(values).then(() => {
      addToast('북마크가 추가되었어요.', 'success');

      closeModal('bookmarkModal');
    });
  };

  const categoryDataFormat = useMemo(() => {
    return (
      categoryData?.map((item) => ({
        ...item,
        checked: !!selectCategory.find((cat) => cat.value === item.categoryId) || !item.categoryId,
      })) ?? []
    );
  }, [categoryData, selectCategory]);

  // 카테고리 옵션 외부 클릭시 닫힘
  useEffect(() => {
    const handleCloseOptionBox = (e: Event) => {
      const target = e.target as HTMLElement;

      if (isFocus && !categoryRef.current?.contains(target)) setIsFocus(false);
    };

    window.addEventListener('click', handleCloseOptionBox);

    return () => window.removeEventListener('click', handleCloseOptionBox);
  }, [isFocus]);

  return (
    <ModalPortal>
      <div className='w-[432px] overflow-hidden'>
        <div className='mb-24'>
          <h1 className='text-text heading-2xl-bd'>북마크 추가</h1>
        </div>
        <div className='py-24 flex flex-col gap-32'>
          <div className='flex flex-col gap-16'>
            {/* 카테고리 영역 START */}
            <div className='relative h-fit' ref={categoryRef}>
              <Select
                placeholder={'카테고리를 선택하거나 입력해 주세요'}
                value={category}
                onChange={(e) => setCategory(e.target.value.substring(0.12))}
                onClick={() => setIsFocus(true)}
              >
                <Select.Label>카테고리</Select.Label>
                <Select.InputWrapper>
                  {!isFocus && selectCategory.length > 0 && (
                    <div className='flex items-center gap-4'>
                      {selectCategory.map((item) => {
                        return (
                          <Tag
                            key={item.value}
                            isButton
                            onClick={() => handleRemoveCategory(item.value)}
                          >
                            <Tag.Label>{item.label}</Tag.Label>
                            <Icon name='xClose_s' className='w-16 h-16 text-icon-sub' />
                          </Tag>
                        );
                      })}
                    </div>
                  )}
                  <Select.Input />
                </Select.InputWrapper>
              </Select>
              {isFocus && (
                <div className='absolute top-[calc(100%+8px)] w-full max-h-320 flex flex-col gap-4 p-8 bg-surface rounded-lg shadow-layer overflow-y-scroll'>
                  {!categoryData?.find((item) => item.categoryName === category) && (
                    <Option onClick={handleSelectCategory}>
                      <Option.Label>
                        <b className='body-md-bold'>추가</b>"{category}"
                      </Option.Label>
                      <Icon name='plus_square' className='w-20 h-20 text-text-minimal' />
                    </Option>
                  )}
                  {categoryDataFormat?.map((item) => (
                    <Option key={item.categoryId}>
                      <Check
                        value={item.categoryId ?? 0}
                        onChange={handleChangeCategory}
                        defaultChecked={item.checked}
                      />
                      <Option.Label>{item.categoryName}</Option.Label>
                    </Option>
                  ))}
                </div>
              )}
            </div>
            {/* 카테고리 영역  END*/}

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
              isDisabled={isLoading}
            >
              <Textfield.Label>이름</Textfield.Label>
              <Textfield.InputWrapper>
                <Textfield.Input />
              </Textfield.InputWrapper>
            </Textfield>

            <Textfield
              name='memo'
              placeholder='ex) 북마크 아카이빙 사이트'
              value={formik.values.memo}
              onChange={formik.handleChange}
              isDisabled={isLoading}
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
              isDragged && 'bg-action-secondary-pressed',
              !file && 'border-2 hover:bg-action-secondary-hover',
            ])}
            onDragEnter={handleDragenter}
            onDragOver={handleDragover}
            onDragLeave={handleDragleave}
            onDrop={handleDrop}
          >
            <label className='cursor-pointer'>
              {!file ? (
                <div className='py-48 px-[54px] flex flex-col items-center gap-12'>
                  <Icon name='filePlus' className='w-32 h-32 text-icon-minimal' />
                  <div className='flex flex-col gap-4 items-center'>
                    <div className='text-text body-sm-bold'>북마크 썸네일</div>
                    <p className='text-text-sub body-sm whitespace-nowrap'>
                      최대 5MB의 이미지까지 업로드 가능해요
                    </p>
                  </div>
                </div>
              ) : (
                <div className='relative w-full h-full flex justify-center items-center group'>
                  <img
                    className='aspect-[300/180] object-cover group-hover:opacity-60'
                    src={String(file.src)}
                    alt='썸네일'
                  />

                  <div
                    className={cn([
                      'flex justify-center items-center min-w-64 px-12 py-8 rounded-lg bg-surface border-[1px] border-solid border-border',
                      'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2',
                      'hover:bg-action-secondary-hover active:bg-action-secondary-pressed',
                      'hidden group-hover:block',
                    ])}
                  >
                    <span className='label-md text-text-secondary'>재업로드</span>
                  </div>
                </div>
              )}
              <input type='file' onChange={handleUploadFile} hidden accept='image/*' />
            </label>
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
