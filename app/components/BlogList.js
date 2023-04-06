import Image from 'next/image';
import urlFor from '@/lib/urlFor';
import ClientSideRoute from './ClientSideRoute';
import Blog from './Blog';

export default function BlogList({ posts }) {
  return (
    <div className='grid grid-cols-1 p-10 gap-10 md:grid-cols-2'>
      {posts.map((post) => (
        <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
          <Blog post={post} />
        </ClientSideRoute>
      ))}
    </div>
  );
}
