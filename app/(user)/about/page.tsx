import Image from 'next/image';
import Link from 'next/link';
import { GitHub, Twitter, Linkedin } from 'react-feather';

export const metadata = {
  title: 'About - Katherine Monroy',
  description: 'About me page',
};

export default function About() {
  return (
    <div className='py-16'>
      <div className='relative self-center max-w-sm mx-20 md:m-0'>
        <div className='absolute -z-10 p-0.5 bg-gradient-to-r from-sky-500 to-indigo-500 h-full w-full rotate-2 shadow-lg shadow-cyan-500/30 '>
          <div className='h-full w-full bg-indigo-950'></div>
        </div>
        <Image
          src='/kaz-monroy-profile-pic.jpeg'
          width={600}
          height={600}
          priority={true}
          alt='Katherine Monroy profile picture'
          className='object-cover'
        />
      </div>

      <div className='max-w-2xl flex flex-col gap-6 mt-16'>
        <p className='text-cyan-400 font-roboto'>Hi! I&apos;m Kaz</p>
        <p className='text-white font-noto text-4xl md:text-5xl font-semibold leading-tight'>
          UX / UI Designer and Frontend Developer
        </p>

        <div className='flex flex-col gap-6'>
          <p className='font-noto text-indigo-200 font-light'>
            I have a diverse background where I&apos;ve spent 8+ years in the
            marketing world then shifting my career into the digital product
            design and development space.
          </p>

          <p className='font-noto text-indigo-200 font-light'>
            I work as a User Experience Designer and I am also a self-taught
            Frontend Developer. I enjoy helping others navigate design
            challenges with simple solutions and seamless digital experiences
            driven by research and testing. I believe that equal access to
            information and digital accessibility has the power to create a more
            just and inclusive world.
          </p>

          <p className='font-noto text-indigo-200 font-light'>
            Today I&apos;m based in Malmö, but originally hail from Guayaquil,
            Ecuador. I have a big love for travel (23 countries and counting),
            beer and good food. When I am not designing, I am coding.
          </p>
        </div>

        <div>
          <Link
            href='mailto:hey@kazmonroy.com'
            className='font-roboto text-indigo-500'
          >
            hey@kazmonroy.com
          </Link>
        </div>

        <div className='flex gap-8 py-2'>
          <Link
            href='https://github.com/kazmonroy'
            target='_blank'
            className='text-indigo-200 hover:text-indigo-500 transition'
          >
            <GitHub />
          </Link>
          <Link
            href='https://twitter.com/kazmonroy'
            target='_blank'
            className='text-indigo-200 hover:text-indigo-500 transition'
          >
            <Twitter />
          </Link>
          <Link
            href='https://www.linkedin.com/in/katherinemonroy/'
            target='_blank'
            className='text-indigo-200 hover:text-indigo-500 transition'
          >
            <Linkedin />
          </Link>
        </div>
      </div>
    </div>
  );
}
