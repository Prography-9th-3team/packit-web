'use client';

import useToastStore from '@/stores/toastStore';
import { useEffect } from 'react';
import Icon from '../common/Icon';
import { Toast } from '../common/Toast';

const ToastArea = () => {
  const { toastList } = useToastStore();

  console.log(toastList);

  return (
    <div className='fixed left-1/2 -translate-x-1/2 bottom-64 flex flex-col gap-8'>
      {toastList.map((item) => (
        <ToastWrapper key={item.id} id={item.id} label={item.message} type={item.type} />
      ))}
    </div>
  );
};

export default ToastArea;

interface IToastMessage {
  id: number;
  label: string;
  type: 'default' | 'success' | 'error';
}

const ToastWrapper = ({ id, label, type }: IToastMessage) => {
  const { removeToast } = useToastStore();

  const TOAST_TIME = 3000; // 3초

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      removeToast(id);
    }, TOAST_TIME);

    return () => clearTimeout(timeoutID);
  }, []);

  return (
    <Toast type={type}>
      {type === 'success' ? (
        <Icon name='checkOn_f' className='w-16 h-16 text-icon-on' />
      ) : type === 'error' ? (
        <Icon name='warningTriangle_f' className='w-16 h-16 text-icon-on' />
      ) : (
        ''
      )}
      <Toast.Label>{label}</Toast.Label>
    </Toast>
  );
};
