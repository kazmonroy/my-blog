import { draftMode } from 'next/headers';
import { client } from '@/lib/sanity.client';
import { groq } from 'next-sanity';
import { PreviewSuspense } from 'next-sanity/preview';
import PreviewBlogList from '@/app/components/PreviewBlogList';
import Bloglist from '@/app/components/Bloglist';

const query = groq`
 *[_type=='post']{
  ...,
  author->,
  categories[]->
 } | order(_createdAt desc)
  
`;

export const revalidate = 30;

export const metadata = {
  title: 'Blog - Katherine Monroy',
  description: 'Blog page',
};

export default async function Blog() {
  const posts = await client.fetch(query);

  const { isEnabled } = draftMode();

  if (isEnabled) {
    return (
      <PreviewSuspense fallback={<p>Loading Preview Data...</p>}>
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  return <Bloglist posts={posts} />;
}
