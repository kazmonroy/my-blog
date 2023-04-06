import Link from 'next/link';
export default function Header() {
  return (
    <header className='mx-8 border-x-2 border-x-zinc-100'>
      <nav className='bg-white flex justify-center py-4 '>
        <ul className='flex rounded-full px-4 gap-6 justify-center py-2 border shadow-lg shadow-zinc-800/5  backdrop-blur text-sm  text-zinc-700 font-medium ring-zinc-900/5'>
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
