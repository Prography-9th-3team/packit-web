import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (delay = 0, repeat = false) => {
  const [isInViewport, setIsInViewport] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null); // 타임아웃을 저장할 참조

  useEffect(() => {
    if (!ref.current) return;

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (delay === 0) {
            setIsInViewport(true);
          } else {
            timeoutRef.current = setTimeout(() => {
              setIsInViewport(true);
            }, delay);
          }
        } else {
          if (repeat) {
            setIsInViewport(false);
          }
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
        }
      });
    };

    const options = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver(callback, options);

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return { isInViewport, ref };
};
