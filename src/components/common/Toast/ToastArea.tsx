'use client';

import { AnimatePresence } from 'framer-motion';

import useToastStore from '@/stores/toastStore';

import ToastWrapper from './ToastWrapper';

const TOAST_TIME = 3000; // 3초

const ToastArea = () => {
  const { toastList } = useToastStore();

  return (
    <div className='fixed left-1/2 -translate-x-1/2 bottom-64 flex flex-col items-center gap-8'>
      <AnimatePresence>
        {toastList.map((item) => (
          <ToastWrapper
            key={item.id}
            label={item.message}
            id={item.id ?? 0}
            type={item.type ?? 'default'}
            time={TOAST_TIME}
            onClick={item.onClick}
            clickText={item.clickText}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ToastArea;
