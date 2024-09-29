import useEventListener from './useEventListener';

interface useKeyEventType {
  targetKey: string[];
  callback: () => void;
}

export default function useKeyEvent({ targetKey, callback }: useKeyEventType) {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (targetKey.includes(e.key)) {
      callback();
    }
  };

  useEventListener('keydown', handleKeyDown);
}
