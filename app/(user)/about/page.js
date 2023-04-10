import Image from 'next/image';
import Link from 'next/link';
import { Twitter, Instagram, GitHub, Linkedin } from 'react-feather';
import { space_grotesk } from '../../fonts';

export default function About() {
  return (
    <section className='h-full '>
      <div className='h-full px-6 py-12 sm:px-16 md:py-32 bg-white sm:mx-8 sm:border-x-2 border-x-zinc-100/50 dark:bg-zinc-900 dark:border-x-zinc-50/5 lg:px-10'>
        <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12 '>
          <div className='w-60 lg:w-96 lg:pl-20'>
            <Image
              className='rounded-2xl object-cover aspect-square rotate-3 bg-zinc-100 dark:bg-zinc-800'
              src={'/kaz-monroy-profile-pic.jpeg'}
              width={400}
              height={400}
              alt='Kaz Monroy profile picture'
            />
          </div>

          <div className='lg:order-first lg:row-span-2 lg:px-12 flex flex-col gap-6'>
            <h1
              className={`${space_grotesk.className} text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl  sm:leading-tight`}
            >
              I'm Katherine. I live in Malmö, where I design the future.
            </h1>
            <p className='text-base font-regular leading-7 text-zinc-500 dark:text-zinc-400'>
              I've loved making things for as long as I can remember, and wrote
              my first program when I was 6 years old, just two weeks after my
              mom brought home the brand new Macintosh LC 550 that I taught
              myself to type on.
            </p>
            <p className='text-base font-regular leading-7 text-zinc-500 dark:text-zinc-400'>
              The only thing I loved more than computers as a kid was space.
              When I was 8, I climbed the 40-foot oak tree at the back of our
              yard while wearing my older sister's motorcycle helmet, counted
              down from three, and jumped — hoping the tree was tall enough that
              with just a bit of momentum I'd be able to get to orbit.
            </p>

            <p className='text-base font-regular leading-7 text-zinc-500 dark:text-zinc-400'>
              Today, I'm the founder of Planetaria, where we're working on
              civilian space suits and manned shuttle kits you can assemble at
              home so that the next generation of kids really can make it to
              orbit — from the comfort of their own backyards.
            </p>
          </div>

          <div className='lg:pl-20'>
            <ul className='flex gap-6 mb-4'>
              <li>
                <Link href={'https://twitter.com/kazmonroy'} target='_blank'>
                  <Twitter
                    className='text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200'
                    size={16}
                  />
                </Link>
              </li>
              <li>
                <Link href={'https://instagram.com/kazmonroy'}>
                  <Instagram
                    className='text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200'
                    size={16}
                    target='_blank'
                  />
                </Link>
              </li>
              <li>
                <Link href={'https://github.com/kazmonroy'} target='_blank'>
                  <GitHub
                    className='text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200'
                    size={16}
                    target='_blank'
                  />
                </Link>
              </li>
              <li>
                <Link
                  href={'https://www.linkedin.com/in/katherinemonroy/'}
                  target='_blank'
                >
                  <Linkedin
                    className='text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200'
                    size={16}
                    target='_blank'
                  />
                </Link>
              </li>
            </ul>

            <Link
              href={'mailto:hey@kazmonroycom'}
              className=' text-sm text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200'
            >
              hey@kazmonroy.com
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
