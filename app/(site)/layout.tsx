import '../globals.css';

import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';

import { IBM_Plex_Mono } from 'next/font/google';

import clsx from 'clsx';

const ibm_plex_mono = IBM_Plex_Mono({
  weight: ['400', '700'],
  subsets: ['latin', 'cyrillic'],
});

export const metadata = {
  title: 'Magzhan Serikuly',
  description: 'Magzhan Serikuly is a Project & Product Manager based in Almaty, Kazakhstan',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <body
        className={clsx(
          ibm_plex_mono.className,
          'max-w-7xl m-auto flex flex-col justify-between flex-grow h-screen'
        )}
      >
        <div>
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
      </body>
      <GoogleAnalytics gaId='G-VG95DB2TKE' />
    </html>
  );
}
