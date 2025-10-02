import React from 'react'


const events = [
  {
    id: 1,
    date: { month: 'April', year: 2026, date: 2 },
    title: 'Climate Science Symposium 2026',
    description: 'Annual symposium featuring leading researchers presenting latest findings in climate science and sustainability.',
    location: 'Main Auditorium',
    time: '9 am - 10 am',
    seats: 200,
    register: '/'
  },
  {
    id: 2,
    date: { month: 'April', year: 2026, date: 22 },
    title: 'Workshop: Climate Data Analysis',
    description: 'Hands-on workshop teaching advanced techniques for analyzing climate datasets using modern tools.',
    location: 'Computer Lab B',
    time: '9 am - 10 am',
    seats: 200,
    register: '/'
  },
  {
    id: 3,
    date: { month: 'May', year: 2026, date: 18 },
    title: 'Public Lecture: Future of Climate Science',
    description: 'Open lecture discussing emerging technologies and methodologies in climate research.',
    location: 'University Hall',
    time: '9 am - 10 am',
    seats: 200,
    register: '/'
  },
]

const Events = () => {
  return (
    <section className='w-full min-h-[800px] p-6 flex flex-col items-center justify-center gap-8'>
      <h1 className='text-4xl font-bold text-emerald-600'>Upcoming Events</h1>
      <p className='text-base sm:text-lg text-center'>Join us for conferences, workshops, and seminars</p>
      <div className='w-full flex flex-col items-center justify-center gap-4'>
        {
          events.map((event) => {
            const { id, date, title, description, location, time, seats, register } = event
            return <div key={id} className='w-full lg:w-3/4 p-2 flex flex-col md:flex-row md:items-center justify-between gap-3 bg-gray-50 shadow-lg hover:scale-[1.02] transition duration-500'>
              <div className='w-auto h-full flex flex-col items-center justify-center  bg-black/20 p-10'>
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
