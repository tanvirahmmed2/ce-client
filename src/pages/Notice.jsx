import React, { useContext } from 'react'
import { ThemeContext } from '../components/Context'





const Notice = () => {
  const { notices } = useContext(ThemeContext)
  return (
    <section className='w-full min-h-[800px] p-6 flex flex-col items-center justify-center gap-8'>
      <h1 className='text-4xl font-bold text-emerald-600'>Latest Notices</h1>
      <p className='text-base sm:text-lg text-center'>Keep your eyes on notice board for alert, conferences, workshops, and seminars</p>
      <div className='w-full flex flex-col items-center justify-center gap-4'>
        <div className='w-full lg:w-3/4 p-2 flex flex-row items-center justify-between gap-3 px-6 shadow-lg  transition duration-500 border-2'>
          <p>Title</p>
          <p>Download</p>
        </div>
        {
          notices.length >0? notices.map((event) => {
            const { _id, pdf, title } = event
            return <div key={_id} className='w-full lg:w-3/4 p-2 flex flex-row items-center justify-between px-6 gap-3 bg-gray-50 shadow-lg  transition duration-500'>

              <h1 className='text-xl font-semibold'>{title}</h1>
              <a href={pdf} download className='hover:scale-105'>Click</a>

            </div>

          }): <p>No notice found</p>
        }
      </div>
    </section>
  )
}

export default Notice
