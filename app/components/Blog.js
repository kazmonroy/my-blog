import urlFor from '@/lib/urlFor';
import Image from 'next/image';
import { ArrowRight } from 'react-feather';

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

      <div className='mt-5 p-4 rounded-lg flex-1 flex flex-col transition group-hover:bg-zinc-100/50  dark:bg-zinc-800/50'>
        <p className='text-sm text-zinc-400'>
          {new Date(post._createdAt).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </p>
        <p className='font-medium text-base text-zinc-800 py-2'>{post.title}</p>
        {/* <h1>{post.author.name}</h1> */}
        <p className='line-clamp-2 text-sm text-zinc-600 font-light'>
          {post.body[0].children[0].text}
        </p>
        <p className='flex items-center gap-2 text-sm text-teal-500 pt-4'>
          Read more <ArrowRight className='h-3 w-3 ' />
        </p>
      </div>
    </div>
  );
}
