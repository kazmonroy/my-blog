import Image from 'next/image';
import Link from 'next/link';
import { Twitter, Instagram, GitHub, Linkedin } from 'react-feather';
import { space_grotesk } from '../../fonts';

export default function About() {
  return (
    <section className='h-full '>
      <div className='h-full px-6 sm:px-8 py-12 md:px-10 md:py-32 bg-white sm:mx-8 sm:border-x-2 border-x-zinc-100/50 dark:bg-zinc-900 dark:border-x-zinc-50/5'>
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
              Hi, I'm Katherine. UX/UI designer and self-taught frontend
              developer.
            </h1>
            <p className='text-base font-regular leading-7 text-zinc-500 dark:text-zinc-400'>
              I have a diverse background where I’ve spent 8+ years in the
              marketing world then shifting my career into the digital product
              design and development space.
            </p>
            <p className='text-base font-regular leading-7 text-zinc-500 dark:text-zinc-400'>
              I work as a User Experience Designer and I am also a self-taught
              Frontend Developer. I enjoy helping others navigate design
              challenges with simple solutions and seamless digital experiences
              driven by research and testing. I believe that equal access to
              information and digital accessibility has the power to create a
              more just and inclusive world.
            </p>

            <p className='text-base font-regular leading-7 text-zinc-500 dark:text-zinc-400'>
              Today I'm based in Malmö, but originally hail from Guayaquil,
              Ecuador. I have a big love for travel (23 countries and counting),
              beer and good food. When I am not designing, I am coding.
            </p>
            <p className='text-base font-regular leading-7 text-zinc-500 dark:text-zinc-400'>
              Let's connect to talk about all things design and tech!
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
