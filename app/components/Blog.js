import urlFor from '@/lib/urlFor';
import Image from 'next/image';
import { ArrowRight } from 'react-feather';
import { space_grotesk } from '../fonts';

export default function Blog({ post }) {
  return (
    <div className='flex flex-col group cursor-pointer '>
      {/* <div className='relative w-full h-80 drop-shadow-md group-hover:scale-105 transition-transform duration-200 ease-out'>
        <Image
          className='object-cover object-left lg:origin-center'
          src={urlFor(post.mainImage).url()}
          alt={post.author.name}
          fill
        />
      </div> */}

      <div className='mt-5 p-8 rounded-xl flex-1 flex flex-col transition group-hover:bg-zinc-100/50  dark:bg-zinc-900 dark:group-hover:bg-zinc-800/70'>
        <p className='text-sm text-zinc-400'>
          {new Date(post._createdAt).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </p>
        <p
          className={`${space_grotesk.className} font-medium md:min-h-[68px] text-base text-zinc-800 py-4 dark:text-zinc-100`}
        >
          {post.title}
        </p>
        <p className='line-clamp-2 leading-6 text-sm text-zinc-600 font-regular dark:text-zinc-400'>
          {post.body[0].children[0].text}
        </p>
        <p className='flex items-center gap-2 text-sm text-teal-500 pt-6'>
          Read more <ArrowRight className='h-3 w-3' />
        </p>
      </div>
    </div>
  );
}
