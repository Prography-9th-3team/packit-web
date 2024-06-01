'use client';

import { Button } from '@/components/common/Button';
import BookmarkModal from '@/components/common/Modal/ui/BookmarkModal';
import useModalStore from '@/stores/modalStore';

const Home = () => {
  const { openModal } = useModalStore();

  return (
    <main>
      <Button onClick={openModal}>
        <Button.Label>북마크 추가</Button.Label>
      </Button>

      <BookmarkModal />
    </main>
  );
};

export default Home;
