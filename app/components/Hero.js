import Image from 'next/image';

export default function Hero() {
  return (
    <section>
      <Image
        className='rounded-full'
        src={'/kaz-monroy-profile-pic.jpeg'}
        width={48}
        height={48}
        alt='Kaz Monroy profile picture'
      />
      <h1 className='text-3xl'>Home!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam natus
        cum eligendi dicta soluta reiciendis sit at eaque cumque consectetur.
      </p>
    </section>
  );
}
