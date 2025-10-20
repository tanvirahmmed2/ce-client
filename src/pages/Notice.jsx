import React, { useContext } from 'react'
import { ThemeContext } from '../components/Context'





const Notice = () => {
  const { notices } = useContext(ThemeContext)
  return (
    <section className='w-full min-h-[800px] p-6 flex flex-col items-center justify-center gap-8'>
      <h1 className='text-4xl font-bold text-emerald-600'>Latest Notices</h1>
      <p className='text-base sm:text-lg text-center'>Keep your eyes on notice board for alert, conferences, workshops, and seminars</p>
      <div className='w-full max-w-[700px] border-2 min-h-96 flex flex-col items-start justify-start rounded-lg overflow-hidden border-emerald-600 gap-2'>
          <p className='w-full text-center border-b-2 border-emerald-600 p-2'>Notice</p>
       
        <div className='w-full flex flex-col items-center justify-start '>
          {
          notices.length >0? notices.map((event) => {
            const { _id, pdf, title } = event
            return <div className='w-full flex-row flex items-center justify-between p-2 border-b-2  pl-3' key={_id}>
              <p className=' italic'>{title}</p>
              <a href={pdf} className='w-auto px-3 bg-emerald-800 text-white rounded-xl'>Click</a>
            </div>

          }): <p>No notice found</p>
        }
        </div>
      </div>
    </section>
  )
}

export default Notice
