import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/typings';
import urlFor from '@/lib/urlFor';
import ClientSideRoute from './ClientSideRoute';
import Blog from './Blog';

interface Props {
  posts: Post[];
}

export const revalidate = 30;

export default function Bloglist({ posts }: Props) {
  return (
    <div className='flex flex-col items-center gap-6 md:h-screen place-content-center'>
      <h3 className='text-cyan-500 w-full text-center'>Blog</h3>
      <h2 className='text-white text-4xl text-center font-semibold leading-tight'>
        Thoughts about design and development
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {posts.map((post) => (
          <ClientSideRoute route={`/post/${post.slug.current}`} key={post._id}>
            <Blog post={post} />
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}
