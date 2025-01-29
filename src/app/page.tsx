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
        <div className='[&_h3]:font-groteskMedium  [&_h3]:text-mf-blue [&_h3]:text-sm [&_h3]:lg:text-base [&_h3]:font-bold flex flex-col justify-end space-y-2'>
          <h3>
            We are currently running initiatives towards preventing abuse and
            protecting those that experience it. Please visit the websites below
            for information on these projects:
          </h3>
          <ul className='[&_li]:font-groteskMedium  [&_li]:lg:text-base [&_li]:text-sm space-y-2 mb-2'>
            <li>
              <Link
                className='link font-groteskMedium  hover:text-mf-green transition'
                href='https://think-different.org/'
                target='_blank'
              >
                ⁠Think Different: Abuse Prevention & Support Course
              </Link>
            </li>
            <li>
              {' '}
              <Link
                className='font-groteskMedium link hover:text-mf-green  transition'
                href='https://listenapp.org/'
                target='_blank'
              >
                ListenApp: a secret mobile app to protect victims of abuse using
                advanced technology
              </Link>
            </li>
          </ul>
        </div>
        <p>
          Please contact us at{' '}
          <Link
            className='font-groteskMedium link hover:text-mf-green  transition'
            href='mailto:info@themindfulfoundation.org'
          >
            info@themindfulfoundation.org
          </Link>{' '}
          for information, queries, or support.
        </p>
      </div>
      <div className='bg-mf-blue lg:flex items-end hidden'>
        <p className='text-chalk font-bold text-xs md:text-base m-4 font-groteskMedium'>
          Site being updated.
        </p>
      </div>
    </div>
  );
}
