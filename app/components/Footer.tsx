import Link from 'next/link';
export default function Footer() {
  return (
    <footer className='py-12 mt-8 gap-8 flex flex-col items-center md:flex-row md:justify-between w-full border-t border-indigo-400/30'>
      <ul className='flex gap-12 items-center bg-[#101223]/90` text-sm'>
        <li className='font-white hover:text-indigo-500 font-light transition-all ease-in-out'>
          <Link href='/about'>About</Link>
        </li>
        <li className='font-white hover:text-indigo-500 font-light transition-all ease-in-out'>
          <Link href='/projects'>Projects</Link>
        </li>
        <li className='font-white hover:text-indigo-500 font-light transition-all ease-in-out'>
          <Link href='/blog'>Blog</Link>
        </li>
      </ul>
      <p className='text-slate-500 font-light text-sm'>
        © 2023 Katherine Monroy. All rights reserved.
      </p>
    </footer>
  );
}
