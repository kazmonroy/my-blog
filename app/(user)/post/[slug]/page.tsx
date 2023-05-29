import { PortableText } from '@portabletext/react';

import { client } from '@/lib/sanity.client';
import { Post } from '@/typings';
import { groq } from 'next-sanity';
import { RichTextComponents } from '@/app/components/RichTextComponents';

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 30;

const query = groq`
*[_type=='post' && slug.current == $slug][0]
{
    ...,
    author->,
    categories[]->
} 
`;

export async function generateStaticParams() {
  const query = groq`
*[_type=='post']
{
   slug
} 
`;

  const slugs: Post[] = await client.fetch(query);

  const slugRoutes = slugs.map((slug) => slug.slug.current);
  return slugRoutes.map((slug) => ({
    slug,
  }));
}

export default async function Post({ params: { slug } }: Props) {
  const post: Post = await client.fetch(query, { slug });

  return (
    <article className='py-6'>
      <div className='font-roboto text-indigo-400 text-sm'>
        {new Date(post._createdAt).toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </div>
      <h2 className='text-3xl py-10 text-white font-semibold'>{post.title}</h2>

      <PortableText value={post.body} components={RichTextComponents} />
    </article>
  );
}
