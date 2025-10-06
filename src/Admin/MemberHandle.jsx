import React, { useContext } from 'react'
import axios from 'axios'
import { ThemeContext } from '../components/Context'
import { useEffect } from 'react'

const MemberHandle = () => {
  const { messages, setMessages } = useContext(ThemeContext)

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/message/')
        setMessages(response.data.payload)
      } catch (error) {
        console.log(error)
      }
    }
    fetchMessage()
  }, [setMessages])

  const removeMessage = async (id) => {
    try {
      const response = await axios.delete('http://localhost:5000/api/message/delete', {
      data: { id } 
    })
      console.log(response.data.message)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='w-full flex flex-col items-center justify-center gap-6'>
      <h1 className='text-2xl font-semibold text-center'>Public Response Section</h1>
      <div className='w-full flex flex-col items-center justify-center gap-4'>
        <h1 className='text-2xl font-semibold'>Message</h1>
        <div className='w-full grid grid-cols-5 gap-2 border-b-2 p-4 justify-items-center'>
          <p>From</p>
          <p>Subject</p>
          <p>Message</p>
          <p>Email</p>
          <p>Remove</p>
        </div>
        {
          messages && messages.map((e) => {
            const { name, subject, message, email, _id } = e
            return <div key={_id} className='w-full grid grid-cols-5 gap-2 border-b-2 p-2 shadow-sm hover:shadow-md transition duration-500 justify-items-center'>
              <h1 className='font-semibold'>{name}</h1>
              <p>{subject}</p>
              <p className='text-justify'>{message}</p>
              <a href={`mailto:${email}`} className=''>Response</a>
              <button onClick={() => removeMessage(_id)}>Action</button>
            </div>
          })
        }
      </div>

      <div className='w-auto flex flex-col items-center justify-center gap-4 bg-slate-100 p-6 px-20 rounded-lg shadow-md'>
        <h1>Delete User</h1>
        <input type="email" name='email' id='email' required placeholder='enter user mail' className='w-auto min-w-[300px] border-2 outline-none p-1 px-3' />
        <button className='bg-red-600 text-white p-1 px-2 rounded-lg'>Delete</button>
      </div>

    </div>
  )
}

export default MemberHandle
