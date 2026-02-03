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
  description: 'Adlet Ibraimov is a Frontend, Shopify and Web Developer based in Milan, Italy, specializing in creating modern, responsive, and user-friendly websites and applications using modern web technologies such as React, Next.js, Tailwind CSS, Node.js and more. With a strong focus on performance, accessibility, and user experience, Adlet is dedicated to delivering high-quality solutions that meet the unique needs of each client. He works closely with international clients to bring their digital visions to life, whether it\'s building a new website from scratch or enhancing an existing one. He was involved in various e-commerce projects such as Chiara Ferragni Store, Off-white, Moschino, Maserati, and more.',
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
