/**
 * @fileoverview Dim component for modal or etc
 *
 * 모달이나 기타 컴포넌트에 배경으로 사용되는 배경 컴포넌트
 */
import { useEffect } from 'react';

import { cn } from '@/lib/utils';

interface DimProps {
  zIndex?: number;
  visible?: boolean;
  className?: string;
  handleClick?: () => void;
}

export default function Dim({
  visible = false,
  handleClick,
  zIndex = 0,
  className = '',
}: DimProps) {
  const combinedClassName = cn(
    visible ? 'block' : 'hidden',
    zIndex ? `z-${zIndex}` : '',
    className,
  );

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [visible]);

  return (
    <div
      onClick={handleClick}
      className={cn(combinedClassName, 'fixed top-0 left-0 w-full h-full bg-[#E2E5E9B2]')}
    />
  );
}
