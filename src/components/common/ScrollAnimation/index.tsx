'use client';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { PropsWithChildren } from 'react';

interface IScrollAnimation extends PropsWithChildren {
  delay?: number;
  repeat?: boolean;
  className?: string;
}

const ScrollAnimation = ({
  children,
  delay = 0,
  repeat = false,
  className = '',
}: IScrollAnimation) => {
  const { isInViewport, ref } = useScrollAnimation(delay, repeat);

  return (
    <div
      ref={ref}
      className={`${className} ${isInViewport ? 'animate-fade animate-delay-100' : ''}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
