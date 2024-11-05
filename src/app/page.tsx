import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className='flex flex-col text-mf-blue h-4/5 w-screen gap-8 items-center justify-center'>
        <p>Logo</p>
        <h2 className='text-4xl text-mf-blue font-bold '>
          Empowering Lives, Preventing Harm, Healing Futures
        </h2>
      </div>
      <div className=' flex flex-col items-center justify-start h-1/5'>
        <h3 className='text-mf-blue font-normal text-xl'>Site being updated</h3>
        <h3 className='text-mf-blue font-bold text-xl'>
          Please visit{' '}
          <Link className='underline hover:no-underline transition' href='/'>
            Think Different
          </Link>
        </h3>
      </div>
    </div>
  );
}
