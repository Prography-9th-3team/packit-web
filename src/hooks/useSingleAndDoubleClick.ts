import { useEffect, useState } from 'react';

interface Props {
  handleSingleClick: () => void;
  handleDoubleClick: () => void;
  delay?: number;
}

function useSingleAndDoubleClick({ handleSingleClick, handleDoubleClick, delay = 250 }: Props) {
  const [click, setClick] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      // @DESC: 싱글클릭 시에는 handleSingleClick을 실행하고 click을 초기화
      if (click === 1) handleSingleClick();
      setClick(0);
    }, delay);

    // @DESC: 더블클릭 시에는 clearTimeout을 통해 timer를 초기화하고 handleDoubleClick을 실행
    if (click === 2) handleDoubleClick();

    return () => clearTimeout(timer);
  }, [click]);

  return () => setClick((prev) => prev + 1);
}

export default useSingleAndDoubleClick;
