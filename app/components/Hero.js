import Image from 'next/image';
import { Twitter, Instagram, GitHub, Linkedin } from 'react-feather';
import Link from 'next/link';
import { space_grotesk } from '../fonts';

export default function Hero() {
  return (
    <section className=''>
      <div className='flex bg-white sm:mx-8 sm:border-x-2 border-x-zinc-100/50 dark:bg-zinc-900 dark:border-x-zinc-50/5 lg:px-10 '>
        <div className='max-w-3xl px-6 sm:px-8 md:px-12 lg:px-16 py-12 flex flex-col gap-y-8'>
          <Image
            className='rounded-full'
            src={'/kaz-monroy-profile-pic.jpeg'}
            width={64}
            height={64}
            alt='Kaz Monroy profile picture'
          />
          <h1
            className={`${space_grotesk.className} text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl sm:leading-tight`}
          >
            Software designer, founder, and amateur astronaut.
          </h1>
          <p className='text-base font-regular leading-7 text-zinc-500 dark:text-zinc-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            natus cum eligendi dicta soluta reiciendis sit at eaque cumque
            consectetur.
          </p>

          <ul className='flex gap-6 '>
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
        </div>
      </div>
    </section>
  );
}
