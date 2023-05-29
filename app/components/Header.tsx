import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex py-4 items-center '>
      <Link href='/' className='flex grow'>
        <span className='font-roboto text-indigo-500 text-xl'>K</span>
        <span className='font-roboto text-cyan-400 text-xl'>M</span>
      </Link>

      <nav>
        <ul className='flex gap-12 items-center'>
          <li className='font-white hover:text-indigo-500 font-light transition-all ease-in-out'>
            <Link href=''>About</Link>
          </li>
          <li className='font-white hover:text-indigo-500 font-light transition-all ease-in-out'>
            <Link href=''>Work</Link>
          </li>
          <li className='font-white hover:text-indigo-500 font-light transition-all ease-in-out'>
            <Link href=''>Blog</Link>
          </li>
          <li className='font-roboto px-4 py-2 text-cyan-400 backdrop-blur ring-1 ring-cyan-900 font-light rounded-full hover:bg-cyan-500 hover:text-white hover:transition-all'>
            <Link href=''>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
