import { RefObject } from 'react';

import useEventListener from './useEventListener';

type Handler = (event: MouseEvent) => void;

export default function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  refs: RefObject<T>[],
  handler: Handler,
  mouseEvent: 'mousedown' | 'mouseup' = 'mousedown',
): void {
  useEventListener(mouseEvent, (event) => {
    const els = refs.map((ref) => ref?.current);

    const isContain = els.some((el) => el?.contains(event.target as Node));

    // DESC: Do nothing if clicking ref's element or descendent elements
    if (!els || isContain) {
      return;
    }
    handler(event);
  });
}
