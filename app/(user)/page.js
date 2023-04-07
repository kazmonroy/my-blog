import Hero from '../components/Hero';
import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import PreviewSuspense from '../components/PreviewSuspense';
import PreviewBlogList from '../components/PreviewBlogList';
import BlogList from '../components/BlogList';
import Script from 'next/script';
import Carrousel from '../components/Carrousel';

export const metadata = {
  title: 'Home',
  icons: {
    icon: '/favicon.svg',
  },
  creator: 'Katherine Monroy',
  authors: [{ name: 'Katherine Monroy' }],
  keywords: [
    'User Experience Designer',
    'UX Designer',
    'UI Designer',
    'Notion',
    'Web Developer',
    'Next.js',
    'React',
    'JavaScript',
  ],
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
        <Hero />

        <PreviewBlogList query={query} />
        <h1 className='text-3xl'>Preview mode</h1>
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);

  return (
    <main>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=G-Y24TCHSHVD'
        strategy='afterInteractive'
      />

      <Script id='google-analytics' strategy='afterInteractive'>
        {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
         
           gtag('config', 'G-Y24TCHSHVD');
        `}
      </Script>

      <Hero />
      <Carrousel />

      <BlogList posts={posts} />
    </main>
  );
}
