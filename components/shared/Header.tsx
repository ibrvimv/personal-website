'use client';

import config from '../../lib/config';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
/**
 * The shared header component.
 */
export default function Header() {
  const pathname = usePathname();
  const isCVPage = pathname === '/cv' || pathname === '/' || pathname === '/contacts';

  return (
    <header className={`text-center sm:text-left   fixed top-0 left-0 right-0 z-50 flex md:justify-center justify-normal backdrop-blur-sm backdrop-invert-0  bg-secondary/10 ${!isCVPage ? 'mix-blend-luminosity' : ''}`}>
      <nav className={`flex flex-row md:gap-4 ${!isCVPage ? 'mix-blend-luminosity bg-[#faebd7]' : ''}  w-full  justify-center py-5`} >
        {config.nav.map((item, index) => (
          <Link
            className={`text-base lg:text-3xl  px-3 py-2 hover:text-secondary transition-colors duration-100 ${pathname === item.path ? 'text-secondary' : 'text-white'
              }`}
            key={index}
            href={{ pathname: item.path }}
            prefetch={false}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
