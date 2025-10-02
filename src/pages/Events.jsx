import React from 'react'

const events=[
  {
    id:1,
    date:{month: 'April', year: 2026, date:2},
    title:'Climate Science Symposium 2026',
    description: 'Annual symposium featuring leading researchers presenting latest findings in climate science and sustainability.',
    location: 'Main Auditorium',
    time: '9 am - 10 am',
    seats: 200,
    register: '/'
  },
  {
    id:2,
    date:{month: 'April', year: 2026, date:2},
    title:'Climate Science Symposium 2026',
    description: 'Annual symposium featuring leading researchers presenting latest findings in climate science and sustainability.',
    location: 'Main Auditorium',
    time: '9 am - 10 am',
    seats: 200,
    register: '/'
  },
  {
    id:3,
    date:{month: 'April', year: 2026, date:2},
    title:'Climate Science Symposium 2026',
    description: 'Annual symposium featuring leading researchers presenting latest findings in climate science and sustainability.',
    location: 'Main Auditorium',
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
        <div></div>

    </section>
  )
}

export default Events
