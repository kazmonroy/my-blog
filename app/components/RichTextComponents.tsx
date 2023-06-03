import urlFor from '@/lib/urlFor';
import Image from 'next/image';
import Link from 'next/link';

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className='relative h-80 top-0 w-full  '>
          <Image
            className='object-contain'
            src={urlFor(value).url()}
            alt='Blog Post Image'
            fill
          />
        </div>
      );
    },
  },

  block: {
    h1: ({ children }: any) => (
      <h1 className='text-5xl py-2 mt-4 text-indigo-50'>{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className='text-4xl py-2 mt-4 text-indigo-50'>{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className='text-3xl text-indigo-50 py-2 mt-4 dark:text-zinc-300'>
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className='text-2xl py-2 mt-4 text-indigo-50'>{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className='border-l-yellow-300 text-zinc-400'>
        {children}
      </blockquote>
    ),
    normal: ({ children }: any) => (
      <p className='text-slate-400 font-light leading-7	'>{children}</p>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className='font-white hover:text-indigo-500 font-light transition-all ease-in-out'
        >
          {children}
        </Link>
      );
    },
  },
};
