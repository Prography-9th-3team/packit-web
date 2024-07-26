import Icon from '@/components/common/Icon';
import Logo from '@/components/common/Logo';
import ScrollAnimation from '@/components/common/ScrollAnimation';
import { cn } from '@/lib/utils';

const Landing = () => {
  return (
    <main>
      <header className='w-full h-[56px] px-32 py-16 sticky top-0 bg-white z-50 flex justify-between'>
        <Logo width={98} height={24} />
      </header>

      <ScrollAnimation repeat={true}>
        <section className='w-full h-full flex justify-center items-center flex-col mb-[147px]'>
          <div className='text-primary heading-2xl-bd mb-20'>Pack it with us</div>
          <div className='text-[#15181E] text-[56px] font-bold flex justify-center text-center mb-[32px]'>
            쉽고 간편하게
            <br />
            나만의 인사이트를 관리하세요
          </div>
          <div className='text-text-minimal text-[20px] font-semibold mb-48'>
            나만의 인사이트를 놓치지 않고 패킷을 통해 관리할 수 있어요!
          </div>
          <button
            className={cn(
              'flex bg-[#15181E] py-12 px-24 items-center justify-center rounded-full gap-8',
              'label-lg-bold text-white text-center hover:bg-[#242935] mb-[88px]',
            )}
          >
            <Icon name='google' className='w-16 h-16' />
            <div>지금 바로 사용해보기</div>
          </button>

          <img
            src='./assets/image/landing_image_1.png'
            alt='landing_image_1'
            className='w-3/4 rounded-[18px]'
            loading='lazy'
          />
        </section>
      </ScrollAnimation>

      <section
        className='w-full h-auto flex flex-col items-center'
        style={{
          background: 'linear-gradient(180deg, #FFF 0%, #F8F9FB 17.91%)',
        }}
      >
        <ScrollAnimation repeat={true}>
          <div className='flex justify-between mb-[169px] items-center gap-[194px]'>
            <div className='flex flex-col h-full justify-center'>
              <div className='text-primary heading-2xl-bd mb-20'>나만의 인사이트를</div>
              <div className='text-[#15181E] text-[56px] font-bold mb-48'>
                단 한 번의 클릭으로
                <br />
                손쉽게 패킷
              </div>
              <div className='text-text-sub text-[20px] font-semibold'>
                즐겨찾기 기능을 사용하고 있지만,
                <br />
                한눈에 보기 어렵고 복잡했다면 여기저기 흩어져 있던
                <br />
                나만의 콘텐츠와 링크를 한 곳에 모아볼 수 있어요
              </div>
            </div>
            <img
              src='./assets/image/landing_image_2.png'
              alt='landing_image_2'
              className='w-[680px] rounded-[32px]'
              loading='lazy'
            />
          </div>
        </ScrollAnimation>

        <ScrollAnimation repeat={true}>
          <div className='flex justify-between mb-[169px] items-center gap-[120px]'>
            <img
              src='./assets/image/landing_image_3.png'
              alt='landing_image_3'
              className='w-[680px] rounded-[32px]'
              loading='lazy'
            />
            <div className='flex flex-col h-full justify-center'>
              <div className='text-primary heading-2xl-bd mb-20'>내가 원하는 대로</div>
              <div className='text-[#15181E] text-[56px] font-bold mb-48'>
                손쉽게 분류가 가능한
                <br />
                나만의 카테고리
              </div>
              <div className='text-text-sub text-[20px] font-semibold'>
                지저분하고 정리되지 않은 나의 콘텐츠, 모아보기 어려웠나요?
                <br />
                이제 카테고리를 직접 만들어서 콘텐츠를 효율적으로 관리할 수 있어요
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation repeat={true}>
          <div className='flex justify-between mb-[149px] items-center gap-[194px]'>
            <div className='flex flex-col h-full justify-center'>
              <div className='text-primary heading-2xl-bd mb-20'>패킷한 인사이트를</div>
              <div className='text-[#15181E] text-[56px] font-bold mb-48'>
                다른 사람과 공유하고
                <br />
                지식을 성장시켜 보세요
              </div>
              <div className='text-text-sub text-[20px] font-semibold'>
                나만 알고 싶었지만, 모두가 알았으면 하는 콘텐츠가 있나요?
                <br />
                앞으로는 패킷의 ‘공유’ 기능을 통해 친구들과 동료들에게
                <br />
                나만의 패킷을 공유하고 인사이트를 나눠 보세요
              </div>
            </div>
            <img
              src='./assets/image/landing_image_4.png'
              alt='landing_image_4'
              className='w-[680px] rounded-[32px]'
              loading='lazy'
            />
          </div>
        </ScrollAnimation>

        <div className='mb-[20px] w-[calc(100%-40px)] h-[413px] rounded-[32px] bg-[#E2E5EC] flex flex-col items-center justify-center'>
          <div className='text-primary heading-2xl-bd mb-[20px]'>패킷과 함께</div>
          <div className='text-[56px] font-bold text-[#15181E] mb-[40px]'>
            인사이트를 한 번에 관리해 보세요
          </div>
          <button
            className={cn(
              'flex bg-[#15181E] py-12 px-24 items-center justify-center rounded-full gap-8',
              'label-lg-bold text-white text-center hover:bg-[#242935]',
            )}
          >
            <Icon name='google' className='w-16 h-16' />
            <div>지금 바로 사용해보기</div>
          </button>
        </div>
      </section>
    </main>
  );
};

export default Landing;
