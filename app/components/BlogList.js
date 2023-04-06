import Image from 'next/image';
import urlFor from '@/lib/urlFor';

export default function BlogList({ posts }) {
  console.log(posts[0].body[0].children[0].text);

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id} className='group cursor-pointer'>
          <p>
            {new Date(post._createdAt).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
          <p>{post.title}</p>

          <h1>{post.author.name}</h1>

          <div className='relative w-full h-80 drop-shadow-md group-hover:scale-105 transition-transform duration-200 ease-out'>
            <Image
              className='object-cover object-left'
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>

          <p className='line-clamp-1'>{post.body[0].children[0].text}</p>
        </div>
      ))}
    </div>
  );
}
