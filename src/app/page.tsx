import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center  gap-8 md:gap-24'>
      {/* Logo and animation */}
      <div className='flex items-center justify-center'>
        <p>Logo</p>
        <div className='flex flex-col h-12 overflow-hidden [&_h2]:h-11 [&_h2]:mb-11 [&_h2]:inline-block'>
          <h2 className='first:animate-text-animation text-4xl'>
            Empowering Lives
          </h2>
          <h2 className='text-4xl'>Preventing Harm</h2>
          <h2 className='text-4xl'>Healing Futures</h2>
        </div>
      </div>

      <div className='bg-mf-blue md:p-16 md:pl-32 md:-ml-24 space-y-2 w-full p-8 rounded-sm'>
        <p className='text-sm md:text-base text-chalk font-bold'>
          The Mindful Foundation is committed to building a world where
          children, men, and women, feel safe, supported, and connected. We work
          across the UK and South Africa to prevent and heal abuse, serving
          at-risk children, young adults, survivors, and those at risk of
          causing harm.
        </p>
        <p className='text-sm md:text-base text-chalk font-bold'>
          Our approaches combine psychotherapy, trauma-informed education, and
          holistic, mindful practices to address the root causes of abuse,
          helping individuals build resilience and strengthen lifelong healing
          and personal growth.
        </p>
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
      </div>
    </div>
  );
}
