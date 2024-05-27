import { SPINNER_SIZE } from './constants';

export interface ISinner {
  size?: (typeof SPINNER_SIZE)[keyof typeof SPINNER_SIZE];
}

const Index = ({ size = SPINNER_SIZE.LG }: ISinner) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 64 64'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M61.44 32C62.8538 32 64.0106 33.148 63.8977 34.5573C63.4287 40.4076 61.3576 46.0344 57.8885 50.8091C53.9164 56.2762 48.3155 60.3456 41.8885 62.4338C35.4616 64.5221 28.5384 64.5221 22.1115 62.4338C15.6845 60.3456 10.0836 56.2762 6.11145 50.8091C2.13936 45.342 -1.54445e-06 38.7577 -9.53674e-07 32C-3.62894e-07 25.2423 2.13936 18.658 6.11146 13.1909C10.0836 7.72375 15.6845 3.65444 22.1115 1.56619C27.7245 -0.257588 33.7159 -0.488568 39.4248 0.87325C40.8 1.20131 41.5344 2.65625 41.0975 4.0009C40.6606 5.34555 39.2177 6.06858 37.8376 5.76152C33.1627 4.72138 28.2779 4.94608 23.6936 6.4356C18.295 8.18973 13.5902 11.6079 10.2536 16.2003C6.91706 20.7927 5.12 26.3235 5.12 32C5.12 37.6765 6.91706 43.2073 10.2536 47.7997C13.5902 52.392 18.295 55.8103 23.6936 57.5644C29.0923 59.3185 34.9077 59.3185 40.3064 57.5644C45.705 55.8103 50.4098 52.392 53.7464 47.7997C56.5796 43.9 58.3028 39.3238 58.7582 34.5562C58.8926 33.1488 60.0261 32 61.44 32Z'
        fill='url(#paint0_angular_55_554)'
      />
      <defs>
        <radialGradient
          id='paint0_angular_55_554'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(32 32) rotate(-90) scale(32 32)'
        >
          <stop offset='0.25' stopColor='white' stopOpacity='0' />
          <stop offset='1' stopColor='white' />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default Index;
