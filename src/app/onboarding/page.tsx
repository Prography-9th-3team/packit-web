import PackitTooltip from '@/components/PackitTooltip';
import Icon from '@/components/common/Icon';
import Image from 'next/image';

const Onboarding = () => {
  return (
    <main className='bg-surface pt-[101px] pb-[157px]'>
      <div className='flex flex-col gap-[30px] items-center'>
        <Icon name='packit_full_logo' className='w-[129px] h-[31px]' />
        <h1 className='heading-5xl-bd text-text text-center'>
          쉽고 간편하게
          <br />
          나만의 인사이트를 관리하세요
        </h1>
      </div>
      <div className='flex justify-center gap-40 mt-80 px-20'>
        <div className='text-center'>
          <Image
            className='max-w-[430px] max-h-[300px] w-full'
            src='/assets/image/onboarding_step_one.png'
            alt='step1'
            width={430}
            height={300}
          />
          <div className='mt-32 inline-block px-10 py-2 min-w-28 rounded-full bg-action-primary-tonal label-md text-primary'>
            Step 1
          </div>
          <p className='mt-16 heading-2xl-bd text-text-minimal'>
            <span className='text-text'>패킷을 크롬 상단에 고정</span>해 주세요
          </p>
        </div>
        <div className='text-center'>
          <Image
            className='max-w-[430px] max-h-[300px] w-full'
            src='/assets/image/onboarding_step_two.png'
            alt='step2'
            width={430}
            height={300}
          />
          <div className='mt-32 inline-block px-10 py-2 min-w-28 rounded-full bg-action-primary-tonal label-md text-primary'>
            Step 2
          </div>
          <p className='mt-16 heading-2xl-bd text-text-minimal'>
            <span className='text-text'>저장하고 싶은 페이지를 발견하면</span>
            <br />
            Pack it 버튼을 눌러주세요
          </p>
        </div>
        <div className='text-center'>
          <Image
            className='max-w-[430px] max-h-[300px] w-full'
            src='/assets/image/onboarding_step_three.png'
            alt='step3'
            width={430}
            height={300}
          />
          <div className='mt-32 inline-block px-10 py-2 min-w-28 rounded-full bg-action-primary-tonal label-md text-primary'>
            Step 3
          </div>
          <p className='mt-16 heading-2xl-bd text-text-minimal'>
            분류가 필요할 땐
            <br />
            <span className='text-text'>카테고리를 만들어 관리</span>해요
          </p>
        </div>
      </div>

      <PackitTooltip />
    </main>
  );
};

export default Onboarding;
