import Image from 'next/image';

export default function Carrousel() {
  return (
    <section className='flex overflow-x-hidden py-8 justify-center gap-5 sm:gap-8 sm:mx-8 sm:border-x-2 border-x-zinc-100/50 dark:border-x-zinc-50/5 bg-white dark:bg-zinc-900'>
      <div className='relative aspect-[9/10] w-44 flex-none  rounded-xl  dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2 bg-zinc-100'>
        <Image
          src={'/malmo.jpeg'}
          className='object-cover rounded-xl'
          fill
        ></Image>
      </div>
      <div className='relative aspect-[9/10] w-44 flex-none  rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2'>
        <Image
          src={'/shanghai.jpeg'}
          className='object-cover rounded-xl'
          fill
        ></Image>
      </div>
      <div className='relative aspect-[9/10] w-44 flex-none  rounded-xl  dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2 bg-zinc-100'>
        <Image
          src={'/iceland.jpeg'}
          className='object-cover rounded-xl'
          fill
        ></Image>
      </div>
      <div className='relative aspect-[9/10] w-44 flex-none  rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2'>
        <Image
          src={'/south-korea.jpeg'}
          className='object-cover rounded-xl'
          fill
        ></Image>
      </div>
      <div className='relative aspect-[9/10] w-44 flex-none  rounded-xl  dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2 bg-zinc-100'>
        <Image
          src={'/singapore.jpeg'}
          className='object-cover rounded-xl'
          fill
        ></Image>
      </div>
    </section>
  );
}
