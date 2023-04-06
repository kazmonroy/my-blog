import Link from 'next/link';
export default function Header() {
  return (
    <header className='sm:mx-8 border-x-2 border-x-zinc-100/50 dark:border-x-zinc-50/10'>
      <nav className='bg-white dark:bg-zinc-900 flex justify-center py-4 '>
        <ul className='flex rounded-full px-4 gap-6 justify-center py-2 border border-zinc-100 shadow-lg shadow-zinc-800/5  text-sm  text-zinc-700 font-medium dark:bg-zinc-800/90 dark:text-zinc-200  dark:border-zinc-50/10'>
          <li className='relative block  transition hover:text-teal-500  dark:hover:text-teal-400'>
            <Link href={'/'}>Home</Link>
          </li>
          <li className='relative block  transition hover:text-teal-500 dark:hover:text-teal-400'>
            <Link href={'/about'}>About</Link>
          </li>
          <li className='relative block  transition hover:text-teal-500  dark:hover:text-teal-400'>
            <Link href={'/blog'}>Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
