import Image from 'next/image';
import Link from 'next/link';
import urlFor from '@/lib/urlFor';

export const RichTextComponents = {
  types: {
    image: ({ value }) => {
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
    h1: ({ children }) => (
      <h1 className='text-5xl my-4 dark:text-zinc-300'>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className='text-4xl my-4 dark:text-zinc-300'>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className='text-3xl text-zinc-800 py-2 dark:text-zinc-300'>
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className='text-2xl my-4 dark:text-zinc-300'>{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className='border-l-yellow-300 text-zinc-400'>
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className='text-zinc-400 leading-relaxed	'>{children}</p>
    ),
  },

  listItem: {
    bullet: ({ children }) => (
      <li className='text-zinc-400 leading-relaxed py-4'>{children}</li>
    ),

    checkmarks: ({ children }) => <li>{children}</li>,
  },

  list: {
    bullet: ({ children }) => (
      <ul className='py-4 sm:px-8 list-none  '>{children}</ul>
    ),
    number: ({ children }) => (
      <ol className='py-4  ml-6 list-none '>{children}</ol>
    ),

    checkmarks: ({ children }) => <ul className=''>{children}</ul>,
  },

  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className='text-zinc-800 hover:text-teal-600'
        >
          {children}
        </Link>
      );
    },
  },
};
