import ClientSideRoute from './ClientSideRoute';
import urlFor from '@/lib/urlFor';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export default function Blog({ post }) {
  return (
    <div className='flex flex-col group cursor-pointer '>
      <div className='relative w-full h-80 drop-shadow-md group-hover:scale-105 transition-transform duration-200 ease-out'>
        <Image
          className='object-cover object-left lg:origin-center'
          src={urlFor(post.mainImage).url()}
          alt={post.author.name}
          fill
        />
      </div>

      <div className='mt-5 flex-1'>
        <p>
          {new Date(post._createdAt).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </p>
        <p>{post.title}</p>
        <h1>{post.author.name}</h1>
        <p className='line-clamp-1'>{post.body[0].children[0].text}</p>
        <p className='flex items-center gap-2'>
          Read more <ArrowRightIcon className='h-4 w-4 text-red-700' />
        </p>
      </div>
    </div>
  );
}
