import Link from 'next/link';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import urlFor from '@/lib/urlFor';
import Image from 'next/image';

export default async function PostPage({ params: { slug } }) {
  const query = groq`
  *[_type=='post' && slug.current == $slug][0]{
    ...,
    author->,
    categories[]->
  } 
`;

  const post = await client.fetch(query, { slug });
  console.log(post);

  return (
    <article className='p-4'>
      {/* <section>
        <div className='relative h-80 top-0 w-full  '>
          <Image
            className='absolute object-cover object-center mx-auto'
            src={urlFor(post.mainImage).url()}
            alt={post.author.name}
            fill
          />
        </div>
      </section> */}
      <p>
        {new Date(post._createdAt).toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </p>
      <p>{post.title}</p>
      <h1>{post.author.name}</h1>
      <p className='text-red-400'>{post.body[0].children[0].text}</p>

      <Link href={'/'}>Go back</Link>
    </article>
  );
}
