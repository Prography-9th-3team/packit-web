import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import ToastArea from '@/components/common/Toast/ToastArea';
import type { Metadata } from 'next';
import '../../styles/tailwind.css';
import Provider from './Provider';
import RouteGuard from './RouteGuard';

export const metadata: Metadata = {
  title: '패킷',
  description: 'Generated by create next app',
  icons: '/logo.svg',
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
        <RouteGuard />
        <Provider>
          <Sidebar />
          <div className='min-h-dvh w-full flex flex-col overflow-scroll styled-scroll'>
            <div className='flex-1'>{children}</div>
            <Footer />
          </div>
          <ToastArea />
          <div id='modal' className='styled-scroll'></div>
        </Provider>
      </body>
    </html>
  );
}
