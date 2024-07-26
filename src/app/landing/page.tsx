import Icon from '@/components/common/Icon';
import Logo from '@/components/common/Logo';
import ScrollAnimation from '@/components/common/ScrollAnimation';
import { cn } from '@/lib/utils';

const Landing = () => {
  return (
    <main>
      <header className='w-full h-[56px] px-16 md:px-32 py-[14px] md:py-16 sticky top-0 bg-white z-50 flex justify-between'>
        <Logo width={98} height={24} />
      </header>
      <div className='pt-40 md:pt-80'>
        <ScrollAnimation repeat={true}>
          <section className='w-full h-full px-20 flex justify-center items-center flex-col mb-80 md:mb-[147px]'>
            <div className='text-primary body-lg-bold md:heading-2xl-bd mb-20'>Pack it with us</div>
            <div className='text-[#15181E] flex justify-center text-center mb-20 md:mb-32'>
              <p className='hidden md:block heading-4xl-bd md:text-[56px] md:font-bold md:leading-[130%]'>
                북마크를 간편하게 관리하고
                <br />
                나만의 인사이트를 모아보세요
              </p>
              <p className='md:hidden heading-4xl-bd md:text-[56px] md:font-bold'>
                북마크를 간편하게
                <br />
                관리하고 나만의
                <br />
                인사이트를 모아보세요
              </p>
            </div>
            <div className='text-text-minimal text-center heading-lg-bd md:text-[20px] md:font-semibold mb-40 md:mb-48'>
              나만의 인사이트를 놓치지 않고 패킷을 통해 관리할 수 있어요!
            </div>
            <button
              className={cn(
                'flex bg-[#15181E] py-12 px-24 items-center justify-center rounded-full gap-8',
                'label-lg-bold text-white text-center hover:bg-[#242935] md:mb-[88px]',
              )}
            >
              <Icon name='google' className='w-16 h-16' />
              <div>지금 바로 사용해보기</div>
            </button>

            <img
              src='./assets/image/landing_image_1.png'
              alt='landing_image_1'
              className='hidden md:block w-3/4 rounded-[18px] min-w-[768px]'
              loading='lazy'
            />
          </section>
        </ScrollAnimation>

        <section
          className='w-full h-auto px-20 flex flex-col items-center'
          style={{
            background: 'linear-gradient(180deg, #FFF 0%, #F8F9FB 17.91%)',
          }}
        >
          <div className='mb-[149px] flex flex-col gap-80 md:gap-[194px]'>
            <ScrollAnimation repeat={true}>
              <div className='flex flex-col-reverse justify-between items-center md:flex-row gap-32 md:gap-[60px] lg:gap-[100px] 2xl:gap-[194px]'>
                <div className='flex flex-col h-full justify-center'>
                  <div className='text-primary body-md-bold md:heading-2xl-bd mb-8 mb:mb-20'>
                    나만의 인사이트를
                  </div>
                  <div className='text-[#15181E] heading-3xl-bd md:text-[56px] md:font-bold md:leading-[130%] mb-16 md:mb-48'>
                    단 한 번의 클릭으로
                    <br />
                    손쉽게 패킷
                  </div>
                  <div className='text-text-sub heading-md md:text-[20px] md:font-semibold leading-[150%]'>
                    즐겨찾기 기능을 사용하고 있지만, <br className='hidden md:block' />
                    한눈에 보기 어렵고 복잡했다면 여기저기 흩어져 있던{' '}
                    <br className='hidden md:block' />
                    나만의 콘텐츠와 링크를 한 곳에 모아볼 수 있어요
                  </div>
                </div>
                <img
                  src='./assets/image/landing_image_2.png'
                  alt='landing_image_2'
                  className='w-full md:max-w-full md:w-[400px] lg:w-[440px] xl:w-[680px] rounded-[32px]'
                  loading='lazy'
                />
              </div>
            </ScrollAnimation>

            <ScrollAnimation repeat={true}>
              <div className='flex flex-col md:flex-row justify-between items-center gap-32 mb:gap-[80px] lg:gap-[120px]'>
                <img
                  src='./assets/image/landing_image_3.png'
                  alt='landing_image_3'
                  className='w-full md:max-w-full md:w-[400px] lg:w-[440px] xl:w-[680px] rounded-[32px]'
                  loading='lazy'
                />
                <div className='flex flex-col h-full justify-center'>
                  <div className='text-primary body-md-bold md:heading-2xl-bd mb-8 mb:mb-20'>
                    내가 원하는 대로
                  </div>
                  <div className='text-[#15181E] heading-3xl-bd md:text-[56px] md:font-bold md:leading-[130%] mb-16 md:mb-48'>
                    손쉽게 분류가 가능한
                    <br />
                    나만의 카테고리
                  </div>
                  <div className='text-text-sub heading-md md:text-[20px] md:font-semibold leading-[150%]'>
                    지저분하고 정리되지 않은 나의 콘텐츠, 모아보기 어려웠나요?{' '}
                    <br className='hidden md:block' />
                    이제 카테고리를 직접 만들어서 콘텐츠를 효율적으로 관리할 수 있어요
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation repeat={true}>
              <div className='flex flex-col-reverse justify-between items-center md:flex-row gap-32 md:gap-[60px] lg:gap-[100px] 2xl:gap-[194px]'>
                <div className='flex flex-col h-full justify-center'>
                  <div className='text-primary body-md-bold md:heading-2xl-bd mb-8 mb:mb-20'>
                    패킷한 인사이트를
                  </div>
                  <div className='text-[#15181E] heading-3xl-bd md:text-[56px] md:font-bold md:leading-[130%] mb-16 md:mb-48'>
                    동료들과 공유하고
                    <br />
                    지식을 성장시켜 보세요
                  </div>
                  <div className='text-text-sub heading-md md:text-[20px] md:font-semibold leading-[150%]'>
                    나만 보기 아까운 인사이트를 발견하셨나요? <br className='hidden md:block' />
                    ‘공유’ 기능을 통해 동료들에게 빠르게 인사이트를 공유하세요
                  </div>
                </div>
                <img
                  src='./assets/image/landing_image_4.png'
                  alt='landing_image_4'
                  className='w-full md:w-[400px] lg:w-[440px] xl:w-[680px] rounded-[32px]'
                  loading='lazy'
                />
              </div>
            </ScrollAnimation>
          </div>

          <div className='mb-[20px] w-[calc(100%-40px)] h-[413px] rounded-[32px] bg-[#E2E5EC] flex flex-col items-center justify-center'>
            <div className='text-primary body-md-bold md:heading-2xl-bd  mb-[20px]'>
              패킷과 함께
            </div>
            <div className='text-[#15181E] heading-3xl-bd md:text-[56px] md:font-bold md:leading-[130%] text-center mb-[40px]'>
              지금 패킷으로
              <br className='md:hidden' />
              시작하세요
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
      </div>
    </main>
  );
};

export default Landing;
