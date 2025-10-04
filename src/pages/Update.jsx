import React, { useContext } from 'react'

import {Link} from 'react-router-dom'
import { ThemeContext } from '../components/Context';




const Update = () => {
  const {news}= useContext(ThemeContext)
  return (
    <section className="w-full min-h-[800px] bg-gray-50 p-6 flex flex-col items-center justify-center gap-8">
      <h1 className='text-4xl font-bold text-emerald-600'>Latest Updates</h1>
      <p className='text-base sm:text-lg text-center'>Stay updated with our recent discoveries and announcements</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
        {
          news && news.map((news) => {
            const { id, author, title, description, date } = news
            return <div key={id} className='w-full flex flex-col gap-4 bg-gray-50 p-4 rounded-lg shadow-xl hover:scale-[1.03] transition duration-500'>
              <p className='font-semibold text-lg'>{title}</p>
              <div className='w-full flex flex-row items-center justify-between text-emerald-700'>
                <p className='font-semibold italic'>{author}</p>
                <p className='text-xs italic'>{date}</p>

              </div>
              {
                description.length > 100 && <p className='text-xs'>{description.slice(0,150)} .... <Link to={`/update/${id}`} className='italic text-green-600'>see more</Link></p>
              }
            </div>
          })
        }

      </div>

    </section>
  )
}

export default Update
