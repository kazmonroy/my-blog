import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href='/' className='flex grow'>
      <Image
        src='/KM-logo.webp'
        width={24}
        height={24}
        priority={true}
        alt='Katherine Monroy logo'
        className='object-cover'
      />

      {/* <span className='font-roboto text-indigo-500 text-xl'>K</span>
      <span className='font-roboto text-cyan-400 text-xl'>M</span> */}
    </Link>
  );
}
