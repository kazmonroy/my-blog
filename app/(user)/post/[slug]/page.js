import Link from 'next/link';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import urlFor from '@/lib/urlFor';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '../../../components/RichTextComponents';

export const revalidate = 30;

export async function generateStaticParams() {
  const query = groq`
  *[_type=='post' ]{
    slug
  } 
`;

  const slugs = await client.fetch(query);

  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({ slug }));
}

export default async function PostPage({ params: { slug } }) {
  const query = groq`
  *[_type=='post' && slug.current == $slug][0]{
    ...,
    author->,
    categories[]->
  } 
`;

  const post = await client.fetch(query, { slug });

  return (
    <article className='p-4'>
      <p>
        {new Date(post._createdAt).toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </p>
      <p>{post.title}</p>
      <h1>{post.author.name}</h1>
      <div></div>
      <PortableText value={post.body} components={RichTextComponents} />

      <Link href={'/'}>Go back</Link>
    </article>
  );
}
