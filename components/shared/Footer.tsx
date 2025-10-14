import config from '../../lib/config';

/**
 * The shared footer component.
 */
export default function Footer() {
  return (
    <footer className='text-center text-sm py-10 fixed bottom-0 left-0 right-0 '>
      <p>
        Created by{' '}
        <a target='_blank' rel='author'
          className='font-bold uppercase text-secondary transition-all duration-100 animate-pulse'
          href={config.authorUrl}
        >
          {config.author}
        </a>
      </p>
    </footer>
  );
}
