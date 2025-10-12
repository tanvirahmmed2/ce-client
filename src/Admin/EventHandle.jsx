import React, { useContext } from 'react'
import axios from 'axios';
import { ThemeContext } from '../components/Context'
import { useState } from 'react';

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
  const [problem, setProblem] = useState('')
  const { events } = useContext(ThemeContext)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    day: '2',
    month: 'February',
    year: '2025',
    registration:''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:5000/api/event/add', formData, { withCredentials: true })
      setProblem(response.data.message)
    } catch (error) {
      console.log(error)
      setProblem('Event creation failed')
    }
  }


  const removeEvent=async(id)=>{
    try {
      const response= await axios.delete('http://localhost:5000/api/event/delete', {data: {id}, withCredentials: true})
      console.log(response.data.message)
    } catch (error) {
      console.log(error)
      
    }
  }

  const inputStyle = 'w-full border border-gray-400 rounded-md p-2 outline-none  transition bg-white text-gray-800';
  const labelStyle = 'text-sm font-medium text-gray-700 block mb-1';

  return (
    <div className='w-full p-4 md:p-8 flex flex-col items-center gap-12  min-h-[800px]'>

      <h1 className='text-center text-3xl font-bold text-gray-900 '>
        Manage Events
      </h1>

      <form onSubmit={handleSubmit} className='w-full p-6 bg-white rounded-xl shadow-xl border border-gray-300 flex flex-col gap-5'>
        <h2 className='text-2xl font-bold text-gray-800 text-center mb-2'>
          Fill Event Details
        </h2>

        <div>
          <label htmlFor="title" className={labelStyle}>Title</label>
          <input type="text" name='title' id='title' required className={inputStyle} placeholder='e.g., Team Sync Meeting' onChange={handleChange} value={formData.title} />
        </div>

        <div>
          <label htmlFor="description" className={labelStyle}>Description</label>
          <textarea name="description" id="description" required className={`${inputStyle} resize-y min-h-[80px]`} placeholder='Brief description of the event...' onChange={handleChange} value={formData.description}></textarea>
        </div>

        <div>
          <label htmlFor="location" className={labelStyle}>Location</label>
          <input type="text" name='location' id='location' required className={inputStyle} placeholder='e.g., Conference Room B' onChange={handleChange} value={formData.location} />
        </div>
        <div>
          <label htmlFor="registration" className={labelStyle}>Registration link</label>
          <input type="text" name='registration' id='registration' required className={inputStyle} placeholder='google form link' onChange={handleChange} value={formData.registration} />
        </div>

        <div>
          <h3 className='text-md font-semibold text-gray-700 mb-2'>Date:</h3>
          <div className='w-full flex flex-row gap-4'>

            <div className='flex-1'>
              <label htmlFor="day" className={labelStyle}>Day</label>
              <select name="day" id="day" className={inputStyle} onChange={handleChange} value={formData.day}>
                {daysInMonth.map((day) => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>
            </div>

            <div className='flex-1'>
              <label htmlFor="month" className={labelStyle}>Month</label>
              <select name="month" id="month" className={inputStyle} onChange={handleChange} value={formData.month}>
                {monthNames.map((month) => (
                  <option key={month} value={month}>{month}</option>
                ))}
              </select>
            </div>

            <div className='flex-1'>
              <label htmlFor="year" className={labelStyle}>Year</label>
              <select name="year" id="year" className={inputStyle} onChange={handleChange} value={formData.year}>
                {years.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <p>{problem}</p>
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
            const { day, month,year, _id, title, description, location } = event
            return (
              <div
                key={_id}
                className='w-full grid grid-cols-5 gap-4 items-center py-3 px-4 text-sm text-gray-700 border-b border-gray-100 hover:bg-gray-50 transition duration-150 rounded-md'
              >
                <h3 className='font-medium text-gray-900 truncate'>{title}</h3>
                <p className='truncate' title={description}>{description.slice(0, 20)}...</p>
                <p className='truncate'>{location || 'N/A'}</p>
                <p className='truncate'>{month} {day}, {year}</p>
                <div className='flex justify-center'>
                  <button onClick={()=>removeEvent(_id)} className='text-red-600 hover:text-red-800 font-semibold text-xs border border-red-300 py-1 px-3 rounded-full hover:bg-red-50 transition'>
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