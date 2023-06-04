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
    </header>
  );
}
