import React, { useContext, useState } from 'react'
import axios from 'axios'
import { ThemeContext } from '../components/Context'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { api } from '../components/api'

const MemberHandle = () => {


  const { messages, setMessages } = useContext(ThemeContext)
  const [banData, setBanData] = useState({
    email: '',
  })



  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get(`${api}/message/`, {withCredentials: true})
        setMessages(response.data.payload)
      } catch (error) {
        console.log(error)
      }
    }
    fetchMessage()
  }, [setMessages])



  const removeMessage = async (id) => {
    try {
      const response = await axios.delete(`${api}/message/delete`, {
        data: { id }
      })
      toast.success(response.data.message)
    } catch (error) {
      toast.error(error)
    }
  }


  const handleChangeBan = (e) => {
    const { name, value } = e.target
    setBanData((prev) => ({ ...prev, [name]: value }))
  }





  const handleBan = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.put(`${api}/user/updateban`, banData, { withCredentials: true })
      toast.success(response.data.message)
    } catch (error) {
      toast.error(error.response.data.message)

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


      <form onSubmit={handleBan} className='w-full max-w-lg p-6 bg-white rounded-xl shadow-xl border border-gray-300 flex flex-col gap-4'>
        <h2 className='text-2xl font-bold text-gray-800 text-center mb-4'>
          Ban or unban user
        </h2>

        <div className='flex flex-col gap-1'>
          <label htmlFor="email" className='text-sm font-medium text-gray-700'>Email</label>
          <input
            type="email"
            name='email'
            id='email'
            required
            onChange={handleChangeBan}
            value={banData.email}
            className='w-full border border-gray-400 rounded-md p-2 outline-none  transition'
            placeholder='xxxx@example.com'
          />
        </div>



        <button
          type='submit'
          className='mt-4 bg-gray-900 text-white font-bold py-3 px-4 rounded-lg hover:bg-gray-700 transition duration-300 shadow-lg hover:shadow-xl'
        >
          Action
        </button>
      </form>

    </div>
  )
}

export default MemberHandle
