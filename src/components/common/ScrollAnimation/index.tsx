'use client';

import { PropsWithChildren } from 'react';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

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
