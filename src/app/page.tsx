import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className='flex text-white h-4/5 w-screen gap-8 items-center'>
        <div className='w-1/2 flex justify-end'>Logo</div>
        <div className='w-1/2 flex flex-col justify-start gap-2'>
          <h2 className='text-4xl text-mf-green font-bold '>
            Empowering Lives
          </h2>
          <h2 className='text-4xl text-mf-green font-bold '>Preventing Harm</h2>
          <h2 className='text-4xl text-mf-green font-bold'>Healing Futures</h2>
        </div>
      </div>
      <div className=' flex flex-col items-center justify-start h-1/5'>
        <h3 className='text-white font-normal text-xl'>Site being updated</h3>
        <h3 className='text-white font-bold text-xl'>
          Please visit{' '}
          <Link className='underline hover:no-underline transition' href='/'>
            Think Different
          </Link>
        </h3>
      </div>
    </div>
  );
}
