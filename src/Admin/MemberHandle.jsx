import React, { useContext } from 'react'
import { ThemeContext } from '../components/Context'

const MemberHandle = () => {
  const { messages } = useContext(ThemeContext)
  return (
    <div className='w-full flex flex-col items-center justify-center gap-6'>
      <h1 className='text-2xl font-semibold text-center'>Public Response Section</h1>
      <div className='w-full flex flex-col items-center justify-center gap-4'>
        <h1 className='text-2xl font-semibold'>Message</h1>
        <div className='w-full grid grid-cols-4 gap-2 border-b-2 p-4'>
          <p>From</p>
          <p>Subject</p>
          <p>Message</p>
          <p>Email</p>
        </div>
        {
          messages && messages.map((e, index) => {
            const { name, subject, message, email } = e
            return <div key={index} className='w-full grid grid-cols-4 gap-2 border-b-2 p-2'>
              <h1 className='font-semibold'>{name}</h1>
              <p>{subject}</p>
              <p className='text-justify'>{message}</p>
              <a href={`mailto:${email}`} className=''>Response</a>
            </div>
          })
        }
      </div>

      <div className='w-auto flex flex-col items-center justify-center gap-4 bg-slate-100 p-6 px-20 rounded-lg'>
        <h1>Delete User</h1>
        <input type="email" name='email' id='email' required placeholder='enter user mail' className='w-auto min-w-[300px] border-2 outline-none p-1 px-3'/>
        <button className='bg-red-600 text-white p-1 px-2 rounded-lg'>Delete</button>
      </div>

    </div>
  )
}

export default MemberHandle
