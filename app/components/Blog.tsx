import urlFor from '@/lib/urlFor';

import Image from 'next/image';

export default function Blog({ post }: any) {
  return (
    <div className='group flex flex-col gap-6'>
      <div className='font-roboto text-indigo-400 text-sm'>
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
      <h2 className='text-xl text-white font-semibold'>{post.title}</h2>
      <p className='line-clamp-2 text-indigo-200 font-light'>
        {post.description}
      </p>
      <p className='font-light hover:text-cyan-400'>Read more</p>
    </div>
  );
}
