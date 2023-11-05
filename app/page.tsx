import Image from 'next/image'
import Header from './components/layout/_header'
import { Footer } from './components/layout/_footer'

export default function Home() {
  return (
    <>
      <Header isLoggedIn={false} />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        
        <div className='flex flex-col w-full md:flex-row justify-center'>
          <div className='flex w-3/5'>
            <div className="flex relative place-items-center justify-center before:absolute before:h-[400px] before:w-[680px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
              <div className='block justify-center p-2 pl-5'>
                <p className='text-5xl font-bold'>Backstory is the world best novel reading platform.</p>
                <p className='text-lg mt-5'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>

          <div className='flex flex-row justify-center w-2/5 dashboard-images min-w-[600px] min-h-[650px] max-w-[600px]'>
            <div className='flex flex-col justify-center w-1/3 mt-20'>
              <div>
                <Image src="/assets/images/dashboard/1.png" alt='Image 1' width={170} height={265} />
              </div>
            </div>

            <div className='flex flex-col justify-end w-1/3'>
              <div>
                <Image src="/assets/images/dashboard/2.png" alt='Image 2' width={170} height={265} />
              </div>
              <div className='pt-5'>
                <Image src="/assets/images/dashboard/3.png" alt='Image 3' width={170} height={265} />
              </div>
            </div>

            <div className='flex flex-col w-1/3'>
              <div>
                <Image src="/assets/images/dashboard/5.png" alt='Image 5' width={170} height={265} />
              </div>
              <div className='pt-5'>
                <Image src="/assets/images/dashboard/6.png" alt='Image 6' width={170} height={265} />
              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  )
}
