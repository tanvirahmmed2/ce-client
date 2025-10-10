import axios from 'axios'
import React, { useState } from 'react'

const AccessHandle = () => {
  const [problem, setProblem] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    role: '',
  })



  const handleChangeUpdate = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }


  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.put('http://localhost:5000/api/user/updaterole', formData, { withCredentials: true })
      setProblem(response.data.message)
    } catch (error) {
      console.log(error.response.data.message)

    }
  }

  const [deleteData, setDeleteData]= useState({
    email:''
  })

  const handleDeleteData=(e)=>{
    const {name, value}= e.target
    setDeleteData((prev)=>({...prev,[name]: value}))
  }
  const handleDelete=async(e)=>{
    e.preventDefault()
    try {
      const response= await axios.delete('http://localhost:5000/api/user/delete', deleteData, {withCredentials: true})
      console.log(response.data.message)
    } catch (error) {
      console.log(error)
      
    }
  }


  return (
    <div className='w-full p-4 md:p-8 flex items-center justify-center flex-col gap-10 '>

      <h1 className='text-center text-3xl font-bold text-gray-900  pb-2'>
        Access Manager
      </h1>

      <div className='w-full flex flex-col gap-4'>


        <div className='w-full flex flex-col md:flex-row items-start md:items-center justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-gray-200'>
          <div className='w-full md:w-auto flex flex-col gap-1 mb-3 md:mb-0'>
            <h1 className='text-lg font-bold text-gray-900'>Nazrul Islam</h1>
            <p className='text-sm text-gray-600'>Email: nazrulislam@gmail.com</p>
          </div>

          <div className='w-full md:w-auto flex flex-col gap-1 mb-3 md:mb-0'>
            <label htmlFor="role" className='text-sm font-medium text-gray-700'>Role:</label>
            <select name="role" id="role" className='bg-white border border-gray-400 rounded-md p-2 outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition'>
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="author">Author</option>
            </select>
          </div>

          <div className='w-full md:w-auto flex flex-row md:flex-col gap-2'>
            <button className='w-full md:w-auto bg-gray-800 text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300 shadow-sm'>
              Update
            </button>
            <button className='w-full md:w-auto border border-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-md hover:bg-gray-100 transition duration-300 shadow-sm'>
              Remove
            </button>
          </div>
        </div>


      </div>

      <p>{problem}</p>

      <form onSubmit={handleUpdate} className='w-full max-w-lg p-6 bg-white rounded-xl shadow-xl border border-gray-300 flex flex-col gap-4'>
        <h2 className='text-2xl font-bold text-gray-800 text-center mb-4'>
          Add New Access Manager
        </h2>

        <div className='flex flex-col gap-1'>
          <label htmlFor="email" className='text-sm font-medium text-gray-700'>Email</label>
          <input
            type="email"
            name='email'
            id='email'
            required
            onChange={handleChangeUpdate}
            value={formData.email}
            className='w-full border border-gray-400 rounded-md p-2 outline-none  transition'
            placeholder='xxxx@example.com'
          />
        </div>


        <div className='w-full md:w-auto flex flex-col gap-1 mb-3 md:mb-0'>
          <label htmlFor="role" className='text-sm font-medium text-gray-700'>Role</label>
          <select name="role" id="role" onChange={handleChangeUpdate} value={formData.role} required className='bg-white border border-gray-400 rounded-md p-2 outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition'>
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="author">Author</option>
            <option value="member">Member</option>
          </select>
        </div>


        <button
          type='submit'
          className='mt-4 bg-gray-900 text-white font-bold py-3 px-4 rounded-lg hover:bg-gray-700 transition duration-300 shadow-lg hover:shadow-xl'
        >
          Add
        </button>
      </form>

      <form onSubmit={handleDelete} className='w-full max-w-lg flex flex-col items-center justify-center gap-4  p-6 px-20 rounded-lg shadow-md'>
        <h1>Delete User</h1>
        <input type="email" name='email' id='email' value={deleteData.email} onChange={handleDeleteData} required placeholder='enter user mail' className='w-auto min-w-[300px] border-2 outline-none p-1 px-3' />
        <button type='submit' className='bg-red-600 text-white p-1 px-2 rounded-lg'>Delete</button>
      </form>


    </div>
  )
}

export default AccessHandle