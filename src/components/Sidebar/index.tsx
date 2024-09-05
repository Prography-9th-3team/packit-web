'use client';

import { useUserProfile } from '@/apis/auth';
import { cn } from '@/lib/utils';
import useAuthStore from '@/stores/authStore';
import useModalStore from '@/stores/modalStore';
import axios from 'axios';
import { cva } from 'class-variance-authority';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import LogoIcon from '../../../public/logo.svg';
import SearchBar from '../SearchBar';
import SettingModal from '../Setting/SettingModal';
import Avatar from '../common/Avatar';
import { AVATAR_SIZE } from '../common/Avatar/constants';
import { Button } from '../common/Button';
import Divider from '../common/Divider';
import Icon from '../common/Icon';
import { Menu } from '../common/Menu';
import { MODAL_NAME } from '../common/Modal/types';
import BookmarkModal from '../common/Modal/ui/BookmarkModal';

const IMPROVEMENT_URL = 'https://forms.gle/dPi5voXeF3Fh7jve9'; // 개선 제안 링크

export enum SIDEBAR_MENU {
  HOME = '홈',
  SEARCH = '검색',
  IMPROVEMENT = '개선 제안하기',
  SETTING = '환경설정',
  LOGOUT = '로그아웃',
}

const SideBar = () => {
  const router = useRouter();
  const pathName = usePathname();

  const pathList = ['/login', '/onboarding', '/oauth2/redirect', '/landing'];

  const authStore = useAuthStore();

  const { data: profileData } = useUserProfile();

  const { openModal, isModalOpen } = useModalStore();
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(true);
  const [selected, setSelected] = useState<SIDEBAR_MENU>(SIDEBAR_MENU.HOME);
  const [isOpenSearchBar, setIsSearchBar] = useState<boolean>(false);

  const getIcon = (() => {
    return isOpenSidebar ? 'chevronLeftDouble' : 'chevronRightDouble';
  })();

  // 사이드바 Toggle
  const handleToggleSidebar = () => {
    setIsOpenSidebar((prev) => !prev);
  };

  // 검색바 오픈
  const handleOpenSearch = () => {
    setIsSearchBar(true);
  };

  // 메뉴 탭 변경
  const handleChangeMenu = (menu: SIDEBAR_MENU) => {
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
      if (
        typeof window !== 'undefined' &&
        window.chrome &&
        window.chrome.runtime &&
        window.chrome.runtime.sendMessage
      ) {
        window.chrome.runtime.sendMessage(process.env.NEXT_PUBLIC_EXTENSION_ID, {
          isLogin: false,
          accessToken: '',
        });
      }
    }
  };

  // 최소 width 1024 설정
  useEffect(() => {
    if (!isOpenSidebar) {
      document.body.style.minWidth = '1024px';
    } else {
      document.body.style.minWidth = '';
    }
  }, [isOpenSidebar]);

  return (
    <>
      {!pathList.includes(pathName) && (
        <>
          <aside className={cn(sidebarVariants({ isOpenSidebar }))}>
            <div className='p-6 flex justify-between relative'>
              <LogoIcon />
              <div
                className={cn([
                  'hidden group-hover:block h-28',
                  !isOpenSidebar && 'w-60 h-40 text-right absolute -right-[60px]',
                ])}
              >
                <button
                  className={cn(sideButtonVariants({ isOpenSidebar }))}
                  onClick={handleToggleSidebar}
                >
                  <Icon name={getIcon} className='w-16 h-16 text-icon-secondary' />
                </button>
              </div>
            </div>

            {/* 프로필 영역 */}
            <div className='mt-4 flex flex-col gap-24'>
              <div className='flex flex-col items-center gap-8'>
                <Avatar
                  profileUrl={profileData?.imageUrl}
                  size={isOpenSidebar ? AVATAR_SIZE.XL : AVATAR_SIZE.SM}
                />
                {isOpenSidebar && (
                  <div className='text-text heading-lg-bd'>{profileData?.name}</div>
                )}
              </div>
              <Button
                className='min-h-40 min-w-40'
                onClick={() => openModal(MODAL_NAME.BOOKMARK_MODAL)}
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
                {isOpenSidebar && <Menu.Label>{SIDEBAR_MENU.SEARCH}</Menu.Label>}
              </Menu>

              <Divider className='bg-divide-minimal' />
              <nav>
                <Menu
                  isSelected={selected === SIDEBAR_MENU.HOME}
                  onClick={() => handleChangeMenu(SIDEBAR_MENU.HOME)}
                >
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
                <Menu onClick={() => handleNewWindowLink(IMPROVEMENT_URL)}>
                  <Icon name='mail' className='w-16 h-16 text-icon' />
                  {isOpenSidebar && <Menu.Label>{SIDEBAR_MENU.IMPROVEMENT}</Menu.Label>}
                </Menu>
                {/* 환경설정 */}
                <Menu onClick={() => openModal(MODAL_NAME.SETTING_MODAL)}>
                  <Icon name='setting' className='w-16 h-16 text-icon' />
                  {isOpenSidebar && <Menu.Label>{SIDEBAR_MENU.SETTING}</Menu.Label>}
                </Menu>
              </div>
              <Menu onClick={handleLogout}>
                <Icon name='logout' className='w-16 h-16 text-icon' />
                {isOpenSidebar && <Menu.Label>{SIDEBAR_MENU.LOGOUT}</Menu.Label>}
              </Menu>
            </div>
          </aside>
          {/* 북마크 모달 START */}
          {isModalOpen(MODAL_NAME.BOOKMARK_MODAL) && <BookmarkModal />}
          {/* 설정 모달 START */}
          {isModalOpen(MODAL_NAME.SETTING_MODAL) && <SettingModal />}
          {/* 검색바 START */}
          {isOpenSearchBar && <SearchBar handleClick={() => setIsSearchBar(false)} />}
        </>
      )}
    </>
  );
};

export const sidebarVariants = cva(
  [
    'h-dvh p-12 flex flex-col border-divide-minimal border-r  whitespace-nowrap bg-white transition-all duration-300',
    'group',
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
  ['p-6 h-fit rounded-md hover:bg-action-secondary-hover transition-all duration-300'],
  {
    variants: {
      isOpenSidebar: {
        false: 'border border-border bg-surface',
      },
    },
  },
);

export default SideBar;
