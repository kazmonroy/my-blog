import Image from 'next/image';
import { Twitter, Instagram, GitHub, Linkedin } from 'react-feather';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className=''>
      <div className='bg-white mx-8 border-x-2 border-x-zinc-100'>
        <div className='max-w-3xl px-16 py-10  flex flex-col gap-y-4'>
          <Image
            className='rounded-full'
            src={'/kaz-monroy-profile-pic.jpeg'}
            width={64}
            height={64}
            alt='Kaz Monroy profile picture'
          />
          <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl '>
            Software designer, founder, and amateur astronaut.
          </h1>
          <p className='text-base leading-loose text-zinc-500 dark:text-zinc-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            natus cum eligendi dicta soluta reiciendis sit at eaque cumque
            consectetur.
          </p>

          <ul className='flex gap-6 '>
            <li>
              <Link href={'https://twitter.com/kazmonroy'} target='_blank'>
                <Twitter
                  className='text-zinc-500 hover:text-zinc-700'
                  size={16}
                />
              </Link>
            </li>
            <li>
              <Link href={'https://instagram.com/kazmonroy'}>
                <Instagram
                  className='text-zinc-500 hover:text-zinc-700'
                  size={16}
                  target='_blank'
                />
              </Link>
            </li>
            <li>
              <Link href={'https://github.com/kazmonroy'} target='_blank'>
                <GitHub
                  className='text-zinc-500 hover:text-zinc-700'
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
                  className='text-zinc-500 hover:text-zinc-700'
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
