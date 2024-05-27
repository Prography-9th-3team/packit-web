'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';
import PackitLogoIcon from '../../../public/logo.svg';
import Avatar from '../common/Avatar';
import { Button } from '../common/Button';
import Divider from '../common/Divider';
import Icon from '../common/Icon';
import { Menu } from '../common/Menu';

const Index = () => {
  const [selected, setSelected] = useState<string>('홈');

  const handleChangeMenu = (menu: string) => {
    setSelected(menu);
  };

  return (
    <aside
      className={cn(['h-dvh w-[260px] p-12 flex flex-col border-divide-minimal border-r bg-white'])}
    >
      <div className='p-6'>
        <PackitLogoIcon />
      </div>

      {/* 프로필 영역 */}
      <div className='mt-4 flex flex-col gap-24'>
        <div className='flex flex-col items-center gap-8'>
          <Avatar size={64} />
          <div className='heading-lg-bd'>stay young</div>
        </div>
        <Button onClick={() => {}} isFull>
          <Button.Label>북마크 추가</Button.Label>
          <Icon name='plus_s' className='w-16 h-16 text-icon-on' />
        </Button>
      </div>

      {/* 메뉴 영역 */}
      <div className='mt-24 flex-1 flex flex-col gap-[13px]'>
        <Menu>
          <Icon name='searchSm_s' width={12} height={12} />
          <Menu.Label>검색</Menu.Label>
        </Menu>

        <Divider className='bg-divide-minimal' />
        <nav>
          <Menu isSelected={selected === '홈'} onClick={() => handleChangeMenu('홈')}>
            <Icon name='home04_s' />
            <Menu.Label>홈</Menu.Label>
          </Menu>
        </nav>
      </div>

      {/* 하단 버튼 영역 */}
      <div className='flex flex-col gap-24'>
        <div className='flex flex-col gap-4'>
          <div className='px-12 py-[5px] body-sm-bold text-secondary'>리소스</div>
          <Menu>
            <Icon name='mail' width={12} height={12} />
            <Menu.Label>개선 제안하기</Menu.Label>
          </Menu>
          <Menu>
            <Icon name='setting' width={12} height={12} />
            <Menu.Label>환경설정</Menu.Label>
          </Menu>
        </div>
        <Menu>
          <Icon name='logout' width={12} height={12} />
          <Menu.Label>로그아웃</Menu.Label>
        </Menu>
      </div>
    </aside>
  );
};

export default Index;
