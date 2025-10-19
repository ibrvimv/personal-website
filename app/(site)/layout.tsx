import '../globals.css';

import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';
import { Analytics } from "@vercel/analytics/next"
import { IBM_Plex_Mono, Montserrat, Roboto, Inter, Quicksand, Outfit } from 'next/font/google';

import clsx from 'clsx';

const ibm_plex_mono = Outfit({
  weight: ['400', '700'],
  subsets: ['latin'],
});
// const ibm_plex_mono = IBM_Plex_Mono({
//   weight: ['400', '700'],
//   subsets: ['latin', 'cyrillic'],
// });

export const metadata = {
  title: 'ADLET IBRAIMOV',
  description: 'Adlet Ibraimov is a Frontend, Shopify and Web Developer based in Milan, Italy',
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
          ' m-auto flex flex-col justify-between flex-grow h-screen'
        )}
      >
        <div>
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
        <Analytics />
      </body>
      <GoogleAnalytics gaId='G-VG95DB2TKE' />
    </html>
  );
}
