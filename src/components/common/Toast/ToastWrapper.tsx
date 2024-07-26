import useToastStore from '@/stores/toastStore';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Toast } from '.';
import Icon from '../Icon';

interface IToastWrapper {
  id: number;
  label: string;
  type: 'default' | 'success' | 'error';
  time?: number;
  clickText?: string;
  onClick?: () => void;
}

const ToastWrapper = ({ id, label, type, time = 3000, clickText, onClick }: IToastWrapper) => {
  const { removeToast } = useToastStore();

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      removeToast(id);
    }, time);

    return () => clearTimeout(timeoutID);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 48 }}
    >
      <Toast type={type} onClick={onClick}>
        {type === 'success' ? (
          <Icon name='checkOn_f' className='w-16 h-16 text-icon-on' />
        ) : type === 'error' ? (
          <Icon name='warningTriangle_f' className='w-16 h-16 text-icon-on' />
        ) : (
          ''
        )}
        <Toast.Label>{label}</Toast.Label>
        {clickText && <Toast.Button>{clickText}</Toast.Button>}
      </Toast>
    </motion.div>
  );
};

export default ToastWrapper;
