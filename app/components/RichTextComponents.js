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

    list: {
      bullet: ({ children }) => (
        <ul className='mt-xl list-disc text-red-400'>{children}</ul>
      ),
      number: ({ children }) => (
        <ol className='mt-lg list-decimal'>{children}</ol>
      ),

      checkmarks: ({ children }) => (
        <ol className='m-auto text-lg'>{children}</ol>
      ),
    },
  },

  block: {
    h1: ({ children }) => <h1 className='text-5xl my-4'>{children}</h1>,
    h2: ({ children }) => <h2 className='text-4xl my-4'>{children}</h2>,
    h3: ({ children }) => (
      <h3 className='text-3xl text-teal-600 my-4'>{children}</h3>
    ),
    h4: ({ children }) => <h4 className='text-2xl my-4'>{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className='border-l-purple-500 text-zinc-400'>
        {children}
      </blockquote>
    ),
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
