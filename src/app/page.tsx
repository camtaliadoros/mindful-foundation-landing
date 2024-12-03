import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='lg:grid lg:grid-cols-2 lg:grid-rows-6 flex flex-col h-screen'>
      <div className='bg-mf-blue flex justify-between'>
        <Image
          src='/Mindful Foundation logo.jpeg'
          alt='Mindful Foundation Logo'
          width={280}
          height={100}
          className=' max-w-36 lg:max-w-56 h-fit m-4'
        />
        <p className='font-groteskRegular text-chalk text-right font-bold text-xs md:text-base lg:hidden m-4'>
          Site being updated.
        </p>
      </div>
      <div></div>
      <div className='bg-mf-blue w-full flex self-center h-full items-center justify-center lg:justify-end row-span-4'>
        <div className='[&_h2]:font-groteskMedium lg:justify-self-end lg:mr-4 flex flex-col h-8 lg:h-16 overflow-hidden [&_h2]:text-mf-green [&_h2]:h-8 [&_h2]:lg:h-16  [&_h2]:mb-8 [&_h2]:lg:mb-16 [&_h2]:inline-block [&_h2]:text-center [&_h2]:lg:text-right  items-center'>
          <h2 className='first:animate-text-animation-mobile lg:first:animate-text-animation'>
            Empowering Lives
          </h2>
          <h2>Preventing Harm</h2>
          <h2>Healing Futures</h2>
        </div>
      </div>
      <div className='[&_p]:text-mf-blue [&_p]:font-groteskRegular  [&_p]:text-sm [&_p]:md:text-base m-4 flex flex-col justify-center row-span-4 gap-4'>
        <p>
          The Mindful Foundation is committed to building a world where
          children, men, and women, feel safe, supported, and connected. We work
          across the UK and South Africa to prevent and heal abuse, serving
          at-risk children, young adults, survivors, and those at risk of
          causing harm.
        </p>
        <p>
          Our approaches combine psychotherapy, trauma-informed education, and
          holistic, mindful practices to address the root causes of abuse,
          helping individuals build resilience and strengthen lifelong healing
          and personal growth.
        </p>
      </div>
      <div className='bg-mf-blue lg:flex items-end hidden'>
        <p className='text-chalk font-bold text-xs md:text-base m-4 font-groteskMedium'>
          Site being updated.
        </p>
      </div>
      <div className='[&_h3]:font-groteskMedium p-4 [&_h3]:text-mf-blue [&_h3]:text-sm [&_h3]:lg:text-base [&_h3]:font-bold flex flex-col justify-end'>
        <h3>
          To learn more about our abuse prevention initiative,{' '}
          <Link
            className='link font-groteskMedium  hover:font-black hover:text-mf-green transition'
            href='https://think-different.org/'
            target='_blank'
          >
            visit Think Different.
          </Link>
        </h3>
        <h3>
          For information on how we support and protect victims of abuse,{' '}
          <Link
            className='font-groteskMedium link hover:text-mf-green hover:font-black transition'
            href='https://listenapp.org/'
            target='_blank'
          >
            visit ListenApp.
          </Link>
        </h3>
      </div>
      {/* Logo and animation */}
      {/* <div className='flex items-center justify-center w-screen h-full'>
        <div className='w-1/2 bg-mf-blue'>
          <p>Logo</p>
        </div>
        <div className='flex flex-col h-12 overflow-hidden [&_h2]:h-11 [&_h2]:mb-11 [&_h2]:inline-block w-1/2'>
          <h2 className='first:animate-text-animation text-4xl'>
            Empowering Lives
          </h2>
          <h2 className='text-4xl'>Preventing Harm</h2>
          <h2 className='text-4xl'>Healing Futures</h2>
        </div>
      </div>
      <div className='w-screen'>
        <div className='bg-mf-blue md:p-16 md:pl-32 md:-ml-24 space-y-2 w-1/2 p-8 rounded-sm'>
          <p className='text-sm md:text-base text-chalk font-bold'>
            The Mindful Foundation is committed to building a world where
            children, men, and women, feel safe, supported, and connected. We
            work across the UK and South Africa to prevent and heal abuse,
            serving at-risk children, young adults, survivors, and those at risk
            of causing harm.
          </p>
          <p className='text-sm md:text-base text-chalk font-bold'>
            Our approaches combine psychotherapy, trauma-informed education, and
            holistic, mindful practices to address the root causes of abuse,
            helping individuals build resilience and strengthen lifelong healing
            and personal growth.
          </p>
        </div>
      </div>

      <div className=' flex flex-col items-center justify-start h-1/5 gap-2 p-8 md:p-0'>
        <h3 className='text-mf-blue font-normal text-base md:text-xl mb-4'>
          Site being updated.
        </h3>
        <h3 className='text-mf-blue  font-bold text-lg md:text-xl'>
          To learn more about our abuse prevention initiative,{' '}
          <Link
            className='link   hover:font-black hover:text-mf-green transition'
            href='/'
          >
            visit Think Different.
          </Link>
        </h3>
        <h3 className='text-mf-blue  font-bold text-lg md:text-xl'>
          For information on how we support and protect victims of abuse,{' '}
          <Link
            className='link hover:text-mf-green hover:font-black transition'
            href='/'
          >
            visit ListenApp.
          </Link>
        </h3>
      </div> */}
    </div>
  );
}
