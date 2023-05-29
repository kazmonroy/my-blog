import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/typings';
import urlFor from '@/lib/urlFor';
import ClientSideRoute from './ClientSideRoute';

interface Props {
  posts: Post[];
}

export const revalidate = 30;

export default function Bloglist({ posts }: Props) {
  return (
    <div className='flex flex-col items-center gap-6'>
      <h2 className='text-cyan-500 '>Blog</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {posts.map((post) => (
          <ClientSideRoute route={`/post/${post.slug.current}`} key={post._id}>
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
                  className='object-cover rounded-md group-hover:scale-110 origin-center	transition-all ease-out duration-300 '
                />
              </div>
              <h2 className='text-xl text-white font-semibold'>{post.title}</h2>
              <p className='line-clamp-2 text-indigo-200 font-light'>
                {/* {post.body[0].children[0].text} */}
                {post.description}
              </p>
              <small className='font-light hover:text-indigo-500'>
                Read more
              </small>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}
