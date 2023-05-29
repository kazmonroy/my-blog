import Image from 'next/image';
import Link from 'next/link';
import { GitHub, Twitter, Linkedin } from 'react-feather';

export default function Hero() {
  return (
    <div className='flex gap-12 py-36  items-center'>
      <div className='max-w-2xl flex flex-col gap-6'>
        <p className='text-indigo-500 font-roboto'>Hi! I&apos;m Kaz</p>
        <p className='text-white font-noto text-5xl font-semibold leading-tight'>
          UX / UI Designer and Frontend Developer
        </p>
        <p className='font-noto text-indigo-50 font-light'>
          I&apos;m based in Malmö, Sweden. I have a passion for crafting digital
          products that provide a seamless user experience.
        </p>

        <div className='flex gap-6 py-2'>
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
      <div className=''>
        <Image
          src='/kaz-monroy-profile-pic.jpeg'
          width={500}
          height={500}
          priority={true}
          alt='Katherine Monroy profile picture'
        />
      </div>
    </div>
  );
}
