import Link from 'next/link';
export default function Header() {
  return (
    <header>
      <nav>
        <ul className='flex gap-4'>
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/about'}>About</Link>
          </li>
          <li>
            <Link href={'/blog'}>Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
