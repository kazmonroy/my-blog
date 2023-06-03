import Link from 'next/link';

export default function Logo() {
  return (
    <Link href='/' className='flex grow'>
      <span className='font-roboto text-indigo-500 text-xl'>K</span>
      <span className='font-roboto text-cyan-400 text-xl'>M</span>
    </Link>
  );
}
