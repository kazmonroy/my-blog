import { space_grotesk } from '../fonts';

export default function PageHeader() {
  return (
    <section className='w-full'>
      <div className='flex bg-white sm:mx-8 sm:border-x-2 border-x-zinc-100/50 dark:bg-zinc-900 dark:border-x-zinc-50/5 lg:px-10 sm:pt-24'>
        <div className='max-w-3xl px-6 sm:px-8 md:px-12 lg:px-16 py-12 flex flex-col gap-y-8'>
          <h1
            className={`${space_grotesk.className} text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl sm:leading-tight`}
          >
            Things I have designed and built to learn and grow.
          </h1>
          <p className='text-base font-regular leading-7 text-zinc-500 dark:text-zinc-400'>
            I enjoy crafting seamless digital experiences that are both
            aesthetically pleasing and functional. Take a look at my portfolio
            to see some of the projects I've worked on.
          </p>
        </div>
      </div>
    </section>
  );
}
