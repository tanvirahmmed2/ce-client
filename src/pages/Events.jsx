import React, { useContext } from 'react'
import { ThemeContext } from '../components/Context'





const Events = () => {
  const {events}= useContext(ThemeContext)
  return (
    <section className='w-full min-h-[800px] p-6 flex flex-col items-center justify-center gap-8'>
      <h1 className='text-4xl font-bold text-emerald-600'>Upcoming Events</h1>
      <p className='text-base sm:text-lg text-center'>Join us for conferences, workshops, and seminars</p>
      <div className='w-full flex flex-col items-center justify-center gap-4'>
        {
          events.map((event) => {
            const { id, date, title, description, location, time, seats, register } = event
            return <div key={id} className='w-full lg:w-3/4 p-2 flex flex-col md:flex-row md:items-center justify-between gap-3 bg-gray-50 shadow-lg hover:scale-[1.02] transition duration-500'>
              <div className='w-auto h-full flex flex-col items-center justify-center  bg-gradient-to-br from-gray-600 to-emerald-600 text-white p-10'>
                <p className='text-xl font-semibold'>{date.month}</p>
                <p className='text-4xl font-bold'>{date.date}</p>
                <p className='text-xl'>{date.year}</p>
              </div>
              <div className='w-full h-full flex flex-col items-start justify-center gap-2'>
                <h1 className='text-xl font-semibold'>{title}</h1>
                <p>{description}</p>
                <div className='w-auto h-full flex flex-row items-center justify-center gap-4 text-xs'>
                  <p>Venue: {location}</p>
                  <p>Time: {time}</p>
                  <p>Seat: {seats}</p>
                </div>

              </div>
              <a href={register} className='m-0 md:m-4 bg-emerald-400 p-1 px-3 rounded-lg text-white'>Register</a>

            </div>

          })
        }
      </div>
    </section>
  )
}

export default Events
