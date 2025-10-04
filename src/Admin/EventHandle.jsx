import React, { useContext } from 'react'
import { ThemeContext } from '../components/Context'

const daysInMonth = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31
];

// Generates an array of years dynamically for better practice
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 5 }, (_, i) => currentYear + i); // 5 years starting from current

const monthNames = [
  "January", 
  "February", 
  "March", 
  "April", 
  "May", 
  "June", 
  "July", 
  "August", 
  "September", 
  "October", 
  "November", 
  "December"
];

const EventHandle = () => {
  const { events } = useContext(ThemeContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Event submitted!");
  }

  const inputStyle = 'w-full border border-gray-400 rounded-md p-2 outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600 transition bg-white text-gray-800';
  const labelStyle = 'text-sm font-medium text-gray-700 block mb-1';

  return (
    <div className='w-full p-4 md:p-8 flex flex-col items-center gap-12  min-h-screen'>
      
      <h1 className='text-center text-3xl font-bold text-gray-900 '>
        Manage Events
      </h1>

      <form onSubmit={handleSubmit} className='w-full p-6 bg-white rounded-xl shadow-xl border border-gray-300 flex flex-col gap-5'>
        <h2 className='text-2xl font-bold text-gray-800 text-center mb-2'>
          Fill Event Details
        </h2>

        <div>
          <label htmlFor="title" className={labelStyle}>Title</label>
          <input type="text" name='title' id='title' required className={inputStyle} placeholder='e.g., Team Sync Meeting' />
        </div>

        <div>
          <label htmlFor="description" className={labelStyle}>Description</label>
          <textarea name="description" id="description" required className={`${inputStyle} resize-y min-h-[80px]`} placeholder='Brief description of the event...'></textarea>
        </div>
        
         <div>
          <label htmlFor="location" className={labelStyle}>Location</label>
          <input type="text" name='location' id='location' required className={inputStyle} placeholder='e.g., Conference Room B' />
        </div>

        <div>
          <h3 className='text-md font-semibold text-gray-700 mb-2'>Date:</h3>
          <div className='w-full flex flex-row gap-4'>
            
            <div className='flex-1'>
              <label htmlFor="day" className={labelStyle}>Day</label>
              <select name="day" id="day" className={inputStyle}>
                {daysInMonth.map((day) => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>
            </div>

            <div className='flex-1'>
              <label htmlFor="month" className={labelStyle}>Month</label>
              <select name="month" id="month" className={inputStyle}>
                {monthNames.map((month) => (
                  <option key={month} value={month}>{month}</option>
                ))}
              </select>
            </div>

            <div className='flex-1'>
              <label htmlFor="year" className={labelStyle}>Year</label>
              <select name="year" id="year" className={inputStyle}>
                {years.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <button 
          type='submit' 
          className='mt-3 bg-gray-900 text-white font-bold py-3 px-4 rounded-lg hover:bg-gray-700 transition duration-300 shadow-lg'
        >
          Add Event
        </button>
      </form>

      <div className='w-full  flex flex-col gap-4'>
        <h2 className='text-2xl font-bold text-gray-800 text-center'>Upcoming Events</h2>
        
        <div className='w-full grid grid-cols-5 gap-4 py-3 px-4 text-sm font-semibold text-gray-900 border-b border-t border-gray-400 bg-gray-200 rounded-md'>
          <p className='truncate'>Title</p>
          <p className='truncate'>Description</p>
          <p className='truncate'>Location</p>
          <p className='truncate'>Date</p> 
          <p className='text-center'>Actions</p>
        </div>

        {events && events.length > 0 ? (
          events.map((event) => {
            const { date, id, title, description, location } = event
            return (
              <div 
                key={id} 
                className='w-full grid grid-cols-5 gap-4 items-center py-3 px-4 text-sm text-gray-700 border-b border-gray-100 hover:bg-gray-50 transition duration-150 rounded-md'
              >
                <h3 className='font-medium text-gray-900 truncate'>{title}</h3>
                <p className='truncate' title={description}>{description.slice(0, 20)}...</p>
                <p className='truncate'>{location || 'N/A'}</p>
                <p className='truncate'>{date.month} {date.day}, {date.year}</p>
                <div className='flex justify-center'>
                  <button className='text-red-600 hover:text-red-800 font-semibold text-xs border border-red-300 py-1 px-3 rounded-full hover:bg-red-50 transition'>
                    Remove
                  </button>
                </div>
              </div>
            )
          })
        ) : (
          <div className='w-full p-6 text-center text-gray-500 border border-dashed border-gray-300 rounded-lg bg-white'>
            No upcoming events found. Add one above!
          </div>
        )}
      </div>
    </div>
  )
}

export default EventHandle