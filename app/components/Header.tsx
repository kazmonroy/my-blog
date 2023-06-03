'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Menu } from 'react-feather';
import Logo from './Logo';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className='flex py-4 items-center relative'>
      <Logo />
      <Navbar />

      {/* <nav className=''>
        <Menu className='md:hidden cursor-pointer ' onClick={toggleMenu} />

        <ul className='hidden md:flex gap-12 items-center bg-[#101223]/90`'>
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

        <ul
          ref={ref}
          className={`${
            isOpen
              ? 'absolute z-10 backdrop-blur-sm w-screen  opacity-100 top-14 -left-4 py-4 transition-all ease-in-out border-b border-indigo-950'
              : 'absolute  w-screen  opacity-0 -top-80 -left-4 b py-4 transition-all ease-in-out'
          } flex flex-col gap-6 items-center bg-[#101223]/90 md:hidden`}
        >
          <li className='font-white hover:text-indigo-500 font-light transition-all ease-in-out'>
            <Link onClick={toggleMenu} href='/about'>
              About
            </Link>
          </li>
          <li className='font-white hover:text-indigo-500 font-light transition-all ease-in-out'>
            <Link onClick={toggleMenu} href='/projects'>
              Projects
            </Link>
          </li>
          <li className='font-white hover:text-indigo-500 font-light transition-all ease-in-out'>
            <Link onClick={toggleMenu} href='/blog'>
              Blog
            </Link>
          </li>
        </ul>
      </nav> */}
    </header>
  );
}
