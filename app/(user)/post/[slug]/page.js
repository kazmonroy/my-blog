import Link from 'next/link';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '../../../components/RichTextComponents';
import { ArrowLeft } from 'react-feather';

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
    <section className='sm:mx-8 sm:border-x-2 border-x-zinc-100/50 bg-white px-2 py-6 sm:p-6 h-screen dark:bg-zinc-900 dark:border-x-zinc-800/50'>
      <div className='lg:px-52 md:px-20'>
        <Link href={'/'} className='px-4'>
          <button className='p-4 my-4 bg-white rounded-full border border-zinc-100 shadow-lg shadow-zinc-800/5 dark:bg-zinc-800/90 dark:text-zinc-200  dark:border-zinc-50/10'>
            <ArrowLeft className='h-3 w-3 bg-white font-semibold text-zinc-500 hover:text-zinc-800 dark:bg-zinc-800/90 dark:text-zinc-400 dark:hover:text-zinc-100' />
          </button>
        </Link>
        <article className='p-4'>
          <div className='mb-4'>
            <p className='text-base text-zinc-400'>
              {new Date(post._createdAt).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </p>
            <h2 className='mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
              {post.title}
            </h2>
          </div>

          {/* <h1>{post.author.name}</h1> */}

          <PortableText value={post.body} components={RichTextComponents} />
        </article>
      </div>
    </section>
  );
}
