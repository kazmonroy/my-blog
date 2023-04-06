import Header from '../components/Header';
import Hero from '../components/Hero';
import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import PreviewSuspense from '../components/PreviewSuspense';
import PreviewBlogList from '../components/PreviewBlogList';
import BlogList from '../components/BlogList';

export const metadata = {
  title: 'Home',
  icons: {
    icon: '/vercel.svg',
  },
};

export const revalidate = 30;

const query = groq`
  *[_type=='post']{
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

export default async function Home() {
  if (previewData()) {
    return (
      <PreviewSuspense fallback={<h1>Loading preview data</h1>}>
        {/* <Header /> */}
        <Hero />

        <PreviewBlogList query={query} />
        <h1 className='text-3xl'>Preview mode</h1>
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);

  return (
    <main>
      {/* <Header /> */}
      <Hero />

      <BlogList posts={posts} />
      {/* Blog list */}
    </main>
  );
}
