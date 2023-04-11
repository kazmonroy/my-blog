import Link from 'next/link';
import { Link2 } from 'react-feather';

export default function Project({ title, description, link, linkText }) {
  return (
    <div
      key={link}
      className='flex flex-col gap-4 items-start rounded-lg cursor-pointer  p-8 transition hover:bg-zinc-100/50  dark:bg-zinc-900 dark:hover:bg-zinc-800/70'
    >
      <h1 className='font-medium text-base text-zinc-800 py-2 dark:text-zinc-100'>
        {title}
      </h1>
      <p className=' leading-6 text-sm text-zinc-600 font-regular dark:text-zinc-400'>
        {description}
      </p>
      <Link
        href={link}
        className='flex items-center gap-2 text-sm text-teal-500 pt-4'
      >
        <Link2 className='h-3 w-3' /> {linkText}
      </Link>
    </div>
  );
}
