import Image from 'next/image';
import Link from 'next/link';
import { GitHub, Twitter, Linkedin } from 'react-feather';

export default function Hero() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-12 h-screen content-start md:content-center'>
      <div className='max-w-2xl flex flex-col gap-6 grow-0 '>
        <p className='text-indigo-500 font-roboto'>Hi! I&apos;m Kaz</p>
        <h1 className='text-white font-noto text-4xl md:text-5xl font-semibold leading-tight'>
          UX / UI Designer and Frontend Developer
        </h1>
        <p className='font-noto text-indigo-200 font-light'>
          I&apos;m based in Malmö, Sweden. I have a passion for crafting digital
          products that provide a seamless user experience.
        </p>

        <div className='flex gap-8 py-2'>
          <Link
            href='https://github.com/kazmonroy'
            target='_blank'
            className='text-indigo-100 hover:text-indigo-500 transition'
          >
            <GitHub />
          </Link>
          <Link
            href='https://twitter.com/kazmonroy'
            target='_blank'
            className='text-indigo-100 hover:text-indigo-500 transition'
          >
            <Twitter />
          </Link>
          <Link
            href='https://www.linkedin.com/in/katherinemonroy/'
            target='_blank'
            className='text-indigo-100 hover:text-indigo-500 transition'
          >
            <Linkedin />
          </Link>
        </div>
      </div>

      <div className='relative w-full grid justify-center'>
        <div className='relative m-auto max-w-xs md:max-w-sm'>
          <div className='absolute -z-10 p-0.5 bg-gradient-to-r from-sky-500 to-indigo-500 w-full h-full rotate-2 shadow-lg shadow-cyan-500/30 '>
            <div className='w-full h-full bg-indigo-950'></div>
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
      </div>
    </div>
  );
}
