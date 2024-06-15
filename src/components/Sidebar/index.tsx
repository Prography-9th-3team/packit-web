'use client';

import { useUserProfile } from '@/apis/auth';
import { cn } from '@/lib/utils';
import useAuthStore from '@/stores/authStore';
import useModalStore from '@/stores/modalStore';
import axios from 'axios';
import { cva } from 'class-variance-authority';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import LogoIcon from '../../../public/logo.svg';
import Avatar from '../common/Avatar';
import { AVATAR_SIZE } from '../common/Avatar/constants';
import { Button } from '../common/Button';
import Divider from '../common/Divider';
import Icon from '../common/Icon';
import { Menu } from '../common/Menu';
import BookmarkModal from '../common/Modal/ui/BookmarkModal';

const SideBar = () => {
  const router = useRouter();
  const pathName = usePathname();

  const authStore = useAuthStore();

  const { data: profileData } = useUserProfile();

  const { openModal, isModalOpen } = useModalStore();
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(true);
  const [selected, setSelected] = useState<string>('홈');

  const getIcon = (() => {
    return isOpenSidebar ? 'chevronLeftDouble' : 'chevronRightDouble';
  })();

  // 사이드바 Toggle
  const handleToggleSidebar = () => {
    setIsOpenSidebar((prev) => !prev);
  };

  // 검색바 오픈
  const handleOpenSearch = () => {
    alert('검색바 오픈');
  };

  // 메뉴 탭 변경
  const handleChangeMenu = (menu: string) => {
    setSelected(menu);

    // API 요청
  };

  // 외부 링크 오픈
  const handleNewWindowLink = (url: string) => {
    window.open(url, ' _blank');
  };

  const handleLogout = async () => {
    const res = await axios.delete('/api/auth/cookie');

    if (res.data) {
      router.push('/login');
      // authStore 초기화
      authStore.resetAuth();

      // 익스텐션 로그아웃 진행
      if (chrome && chrome.runtime && chrome.runtime.sendMessage) {
        chrome.runtime.sendMessage(process.env.NEXT_PUBLIC_EXTENSION_ID, {
          isLogin: false,
          accessToken: '',
        });
      }
    }
  };

  return (
    <>
      {pathName !== '/login' && (
        <>
          <aside className={cn(sidebarVariants({ isOpenSidebar }))}>
            <div className='p-6 flex justify-between relative'>
              <LogoIcon />
              <button
                className={cn(sideButtonVariants({ isOpenSidebar }))}
                onClick={handleToggleSidebar}
              >
                <Icon name={getIcon} className='w-16 h-16 text-icon-secondary' />
              </button>
            </div>

            {/* 프로필 영역 */}
            <div className='mt-4 flex flex-col gap-24'>
              <div className='flex flex-col items-center gap-8'>
                <Avatar
                  profileUrl={profileData?.imageUrl}
                  size={isOpenSidebar ? AVATAR_SIZE.XL : AVATAR_SIZE.SM}
                />
                {isOpenSidebar && <div className='heading-lg-bd'>{profileData?.name}</div>}
              </div>
              <Button
                className='min-h-40 min-w-40'
                onClick={() => openModal('bookmarkModal')}
                isFull
              >
                {isOpenSidebar && <Button.Label>북마크 추가</Button.Label>}
                <Icon name='plus_s' className='w-16 h-16 text-icon-on' />
              </Button>
            </div>

            {/* 메뉴 영역 */}
            <div className='mt-24 flex-1 flex flex-col gap-16'>
              <Menu onClick={handleOpenSearch}>
                <Icon name='searchSm_s' className='w-16 h-16 text-icon' />
                {isOpenSidebar && <Menu.Label>검색</Menu.Label>}
              </Menu>

              <Divider className='bg-divide-minimal' />
              <nav>
                <Menu isSelected={selected === '홈'} onClick={() => handleChangeMenu('홈')}>
                  <Icon name='home04_s' />
                  {isOpenSidebar && <Menu.Label>홈</Menu.Label>}
                </Menu>
              </nav>
            </div>

            {/* 하단 버튼 영역 */}
            <div className='flex flex-col gap-24'>
              <div className='flex flex-col gap-4'>
                {isOpenSidebar && (
                  <div className='px-12 py-[5px] body-sm-bold text-secondary'>리소스</div>
                )}
                <Menu onClick={() => handleNewWindowLink('https://forms.gle/dPi5voXeF3Fh7jve9')}>
                  <Icon name='mail' className='w-16 h-16 text-icon' />
                  {isOpenSidebar && <Menu.Label>개선 제안하기</Menu.Label>}
                </Menu>
                <Menu>
                  <Icon name='setting' className='w-16 h-16 text-icon' />
                  {isOpenSidebar && <Menu.Label>환경설정</Menu.Label>}
                </Menu>
              </div>
              <Menu onClick={handleLogout}>
                <Icon name='logout' className='w-16 h-16 text-icon' />
                {isOpenSidebar && <Menu.Label>로그아웃</Menu.Label>}
              </Menu>
            </div>
          </aside>
          {isModalOpen('bookmarkModal') && <BookmarkModal />}
        </>
      )}
    </>
  );
};

export const sidebarVariants = cva(
  [
    'h-dvh p-12 flex flex-col border-divide-minimal border-r  whitespace-nowrap bg-white transition-all duration-300',
  ],
  {
    variants: {
      isOpenSidebar: {
        true: 'w-[260px]',
        false: 'w-[61px] px-10',
      },
    },
  },
);

export const sideButtonVariants = cva(
  ['p-6 rounded-md hover:bg-action-secondary-hover transition-all duration-300'],
  {
    variants: {
      isOpenSidebar: {
        false: 'absolute -right-14 border border-border bg-surface',
      },
    },
  },
);

export default SideBar;
