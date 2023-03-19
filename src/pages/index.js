import { MemoryIcon, ReactionIcon, VerbalIcon, VisualIcon } from '@/components/Icons'
import Row from '@/components/Row'
import Head from 'next/head'

function HomePage() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Results summary component</title>
      </Head>
      <div className='bg-white md:rounded-2xl flex flex-col md:flex-row'>
        <div className='md:w-1/2 bg-gradient-to-b from-[#7857ff] via-[#2e2be9] to-[#2e2be9] flex flex-col items-center gap-3 md:justify-between px-10 py-5 rounded-b-2xl md:rounded-t-2xl'>
          <div className='text-[#c8c7ff] font-semibold text-sm'>Your Result</div>
          <div className='bg-gradient-to-b from-[#2421ca] via-[#2421ca] to-[#4e21ca] rounded-full px-10 md:px-12 py-8 md:py-10 text-center'>
            <div className='text-white font-bold text-3xl md:text-4xl'>76</div>
            <div className='text-[#c8c7ff] text-xs md:text-sm'>of 100</div>
          </div>
          <div className='flex flex-col items-center gap-1'>
            <p className='text-[#ebf1ff] font-semibold text-xl'>Great</p>
            <p className='text-[#ebf1ff] text-xs text-center'>
              You scored higher than 65% of the people who have taken these tests.
            </p>
          </div>
        </div>
        <div className='md:w-1/2 flex flex-col gap-5 p-5'>
          <div className='font-bold text-sm'>Summary</div>
          <div className='flex flex-col gap-2'>
            <Row bgColor={'bg-[#ff5757]'} textColor={'text-[#ff5757]'} title={'Reaction'} amount={80}>
              <ReactionIcon />
            </Row>
            <Row bgColor={'bg-[#ffb01f]'} textColor={'text-[#ffb01f]'} title={'Memory'} amount={92}>
              <MemoryIcon />
            </Row>
            <Row bgColor={'bg-[#00bd91]'} textColor={'text-[#00bd91]'} title={'Verbal'} amount={61}>
              <VerbalIcon />
            </Row>
            <Row bgColor={'bg-[#1125d4]'} textColor={'text-[#1125d4]'} title={'Visual'} amount={72}>
              <VisualIcon />
            </Row>
          </div>
          <div>
            <button className='w-full bg-[#303b5a] bg-gradient-to-b hover:from-[#7857ff] hover:to-[#2e2be9] text-white py-2 text-sm font-semibold rounded-3xl'>
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
