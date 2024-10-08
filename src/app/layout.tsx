import type { Metadata } from 'next';

import Feed from '@/components/Feed';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import ToastArea from '@/components/common/Toast/ToastArea';
import GoogleAnalytics from '@/lib/GoogleAnalytics';

import '../../styles/tailwind.css';
import Provider from './Provider';
import RouteGuard from './RouteGuard';

export const metadata: Metadata = {
  title: '패킷 - 성장하는 사람들을 위한 웹클리퍼',
  description: '패킷으로 쉽고 간편하게 나만의 인사이트를 관리하세요.',
  icons: '/logo.svg',
  openGraph: {
    title: '패킷 - 성장하는 사람들을 위한 웹클리퍼',
    description: '패킷으로 쉽고 간편하게 나만의 인사이트를 관리하세요.',
    images: ['https://github.com/user-attachments/assets/6fadd17d-2bcf-4147-8b32-7f07ebbcde65'],
    siteName: '패킷 - 성장하는 사람들을 위한 웹클리퍼',
    type: 'website',
    locale: 'ko_KR',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/logo.svg' />
      </head>
      <body className='flex'>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        )}
        <Provider>
          <Sidebar />
          <div className='min-h-dvh flex-1 flex flex-col overflow-y-scroll styled-scroll'>
            <div className='flex-1'>{children}</div>
            <Footer />
          </div>
          <Feed />
          <ToastArea />
          <div id='modal' className='styled-scroll'></div>
        </Provider>
        <RouteGuard />
      </body>
    </html>
  );
}
