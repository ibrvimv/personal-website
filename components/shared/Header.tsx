'use client';

import config from '../../lib/config';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
/**
 * The shared header component.
 */
export default function Header() {
  const pathname = usePathname();

  return (
    <header className='text-center sm:text-left pt-5 pb-5 md:pb-16 px-0 md:px-5 fixed top-0 left-0 right-0 z-50 mix-blend-difference flex md:justify-center justify-normal'>
      <nav className='flex flex-row md:gap-4'>
        {config.nav.map((item, index) => (
          <Link
            className={`text-base px-3 py-2 hover:text-secondary  transition-colors duration-100 ${pathname === item.path ? 'text-secondary' : ''
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
