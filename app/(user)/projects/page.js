import PageHeader from '@/app/components/PageHeader';
import Project from '../../components/Project';

export default function Projects() {
  return (
    <div className=''>
      <PageHeader />
      <section className='grid grid-cols-1 sm:gap-y-16 sm:grid-cols-2 sm:px-4 lg:grid-cols-3 bg-white sm:mx-8 sm:border-x-2 border-x-zinc-100/50 dark:bg-zinc-900 dark:border-x-zinc-50/5 lg:px-16 py-8 max-h-screen	'>
        <Project
          title={'Todo App'}
          description={
            'Creating technology to empower civilians to explore space on their own terms.'
          }
          link={'https://github.com/kazmonroy/todo-app'}
          linkText={'github.com'}
        />
        <Project
          title={'Musik'}
          description={
            'Creating technology to empower civilians to explore space on their own terms.'
          }
          link={'https://github.com/kazmonroy/react-musik-player'}
          linkText={'github.com'}
        />
        <Project
          title={'Portret'}
          description={
            'Creating technology to empower civilians to explore space on their own terms.'
          }
          link={'https://github.com/kazmonroy/portret'}
          linkText={'github.com'}
        />
      </section>
    </div>
  );
}
