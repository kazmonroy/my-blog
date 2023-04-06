import ClientSideRoute from './ClientSideRoute';
import Blog from './Blog';

export default function BlogList({ posts }) {
  return (
    <div className='grid grid-cols-1 p-2 gap-4 sm:p-10 lg:px-20 sm:gap-10 md:grid-cols-2 bg-white sm:mx-8 sm:border-x-2 border-x-zinc-100/50 dark:bg-zinc-900 dark:border-x-zinc-50/5'>
      {posts.map((post) => (
        <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
          <Blog post={post} />
        </ClientSideRoute>
      ))}
    </div>
  );
}
