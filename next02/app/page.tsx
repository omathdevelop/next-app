import Link from 'next/link';

export default function Home() {
  return (
    <main className={'bg-slate-300 opacity-50 min-h-screen w-full'}>
      <div className="w-full flex justify-center items-center flex-col gap-2">
      <h1 className={'text-2xl font-bold font-serif '}>Home Page</h1>
      <p>
        <Link href={'/users'} className={'text-center text-1xl font-bold text-blue-900  p-2  bg-blue-400 rounded-md'}> Wiki 👉 </Link>
      </p>
      </div>
    </main>
  )
};


