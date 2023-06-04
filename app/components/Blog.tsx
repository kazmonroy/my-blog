import urlFor from '@/lib/urlFor';

import Image from 'next/image';

export default function Blog({ post }: any) {
  return (
    <div className='group flex flex-col gap-4'>
      <div>
        <div className='font-roboto py-4 text-indigo-400 text-sm'>
          {new Date(post._createdAt).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </div>
        <div className='relative rounded-md w-full h-80 overflow-hidden '>
          <Image
            src={urlFor(post.mainImage).url()}
            alt=''
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='object-cover rounded-md group-hover:scale-110 origin-center	transition-all ease-out duration-300 '
          />
        </div>
      </div>

      <h2 className='text-xl text-white font-semibold'>{post.title}</h2>
      <p className='line-clamp-2 text-indigo-200 font-light'>
        {post.description}
      </p>
    </div>
  );
}
