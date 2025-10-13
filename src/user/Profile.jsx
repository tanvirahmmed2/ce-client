import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { RxAvatar } from "react-icons/rx"
import { FaMapMarkedAlt } from "react-icons/fa"
import { ThemeContext } from '../components/Context'
import axios from 'axios'

const Profile = () => {
  const { user, author } = useContext(ThemeContext)
  const [add, setAdd] = useState(false)
  const [publicationData, setPublicationData] = useState({
    authorId: user._id,
    title: '',
    description: '',
    link: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setPublicationData((prev) => ({ ...prev, [name]: value }))
  }

  const addPublication = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'http://localhost:5000/api/user/addpublication',
        publicationData,
        { withCredentials: true }
      )
      toast.success(response.data.message)
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to add publication')
    }
  }

  const deletePub = async (authorId, pubId) => {
    try {
      const response = await axios.delete(
        'http://localhost:5000/api/user/removepublication',
        {
          data: { authorId, pubId },
          withCredentials: true
        }
      )
      toast.success(response.data.message)
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to remove publication')
    }
  }

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/user/logout',
        {},
        { withCredentials: true }
      )
      toast.success(response.data.message)
      window.location.replace('/')
    } catch (error) {
      toast.error(error.response?.data?.message || 'Logout failed')
    }
  }

  return (
    <section className='w-full min-h-screen bg-gray-50 p-6 flex flex-col items-center gap-10'>

      
      <div className='w-full bg-gradient-to-r from-black to-gray-800 text-white rounded-md shadow-md py-10 flex flex-col items-center justify-center'>
        <h1 className='text-3xl sm:text-4xl font-extrabold tracking-tight'>
          Welcome to <span className='text-yellow-300'>CCIRL</span>
        </h1>
      </div>

    
      <div className='w-full bg-white shadow-md rounded-xl p-8 flex flex-col md:flex-row items-center justify-around gap-8 border border-gray-200'>
        <div className='flex-shrink-0'>
          {user.profileImage ? (
            <img
              src={user.profileImage}
              alt="profile"
              className='w-40 h-40 object-cover rounded-full border-4 border-emerald-500 shadow-md'
            />
          ) : (
            <div className='text-9xl text-emerald-500 border-4 border-emerald-500 rounded-full p-2 bg-white'>
              <RxAvatar />
            </div>
          )}
        </div>

        <div className='text-center md:text-left flex flex-col gap-4'>
          <h1 className='text-4xl font-bold text-gray-800 tracking-tight'>{user.name}</h1>
          <p className='italic font-medium text-emerald-600 mb-2'>{user.role}</p>
        </div>
      </div>

      <div className='w-full bg-white shadow-md rounded-xl p-8 border border-gray-200'>
        <h2 className='text-2xl font-semibold mb-4 text-gray-700 border-b pb-2'>
          Personal & Academic Details
        </h2>

        <div className='flex flex-col gap-3 text-gray-700 leading-relaxed'>

          
          {user.education?.length > 0 && user.education.map((edu) => {
            const { _id, degree, institution, field, startYear, endYear } = edu
            const currentYear = new Date().getFullYear()

            return (
              <div key={_id} className='p-3 rounded-md bg-gray-50 border border-gray-100'>
                <div>
                  {endYear < currentYear ? <p>Studied at</p> : <p>Studies at</p>}
                  <span className='font-semibold'>{degree}</span> in {field} at {institution}
                </div>
                <p className='text-sm text-gray-500'>Started: {startYear}</p>
                {endYear < currentYear
                  ? <p className='text-sm text-gray-500'>Completed: {endYear}</p>
                  : <p className='text-sm text-gray-500'>Current</p>}
              </div>
            )
          })}

          {/* Work */}
          {user.work?.length > 0 && user.work.map((job) => {
            const { _id, position, company } = job
            return (
              <div key={_id} className='p-3 rounded-md bg-gray-50 border border-gray-100'>
                <p>Works as <span className='font-semibold'>{position}</span> at {company}</p>
              </div>
            )
          })}

          {/* Contact Info */}
          <p><span className='font-semibold'>Date of Birth:</span> {user.dateOfBirth}</p>
          <p><span className='font-semibold'>Email:</span> <span className='text-emerald-600 underline'>{user.email}</span></p>
          <p><span className='font-semibold'>Phone:</span> {user.phone}</p>
          <p className='flex flex-row gap-2 items-center font-semibold text-gray-600'>
            <FaMapMarkedAlt className='text-red-500' /> {user.country}
          </p>
        </div>
      </div>

      {/* Publications */}
      {author && (
        <div className='w-full bg-white shadow-md rounded-xl p-8 border border-gray-200'>
          <h2 className='text-2xl font-semibold text-gray-700 mb-4'>Contributions</h2>

          <div className='w-full grid grid-cols-4 p-3 border-b font-semibold text-gray-600 bg-gray-50 rounded-t-lg text-sm sm:text-base'>
            <p className='text-left'>Title</p>
            <p className='hidden sm:block text-left'>Description</p>
            <p className='text-right'>Abstract</p>
            <p>Action</p>
          </div>

          {user.publications?.map((paper) => {
            const { title, _id, link, description } = paper
            return (
              <div key={_id} className='grid grid-cols-4 p-3 items-center border-b last:border-none hover:bg-gray-50 transition'>
                <h1 className='font-medium text-gray-800'>{title}</h1>
                <p className='text-gray-600 text-sm hidden sm:block'>{description}</p>
                <a
                  href={link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-emerald-600 font-semibold text-right hover:underline'
                >
                  Abstract
                </a>
                <button
                  onClick={() => deletePub(user._id, _id)}
                  className='text-red-500 hover:text-red-700 font-semibold transition'
                >
                  Remove
                </button>
              </div>
            )
          })}

          <button
            onClick={() => setAdd(!add)}
            className='text-emerald-600 font-medium hover:text-emerald-800 cursor-pointer mt-4 text-center transition'
          >
            Add more +
          </button>

          {add && (
            <form
              onSubmit={addPublication}
              className='w-full p-6 mt-4 bg-gray-50 rounded-xl shadow-inner border border-gray-300 flex flex-col gap-5'
            >
              <h1 className='text-xl font-semibold text-gray-700 mb-2'>Add Publication Data</h1>

              <div>
                <label htmlFor="title" className='block text-sm font-medium text-gray-700 mb-1'>Title</label>
                <input
                  type="text"
                  name='title'
                  id='title'
                  onChange={handleChange}
                  value={publicationData.title}
                  className='w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-emerald-500'
                  placeholder='Publication title'
                />
              </div>

              <div>
                <label htmlFor="description" className='block text-sm font-medium text-gray-700 mb-1'>Description</label>
                <textarea
                  name="description"
                  id="description"
                  required
                  onChange={handleChange}
                  value={publicationData.description}
                  className='w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-emerald-500'
                />
              </div>

              <div>
                <label htmlFor="link" className='block text-sm font-medium text-gray-700 mb-1'>Abstract Link</label>
                <input
                  type="text"
                  name='link'
                  id='link'
                  required
                  onChange={handleChange}
                  value={publicationData.link}
                  className='w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-emerald-500'
                  placeholder='Enter abstract link of your publication'
                />
              </div>

              <button
                type='submit'
                className='py-2 px-6 font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition rounded-full shadow-md'
              >
                Submit
              </button>
            </form>
          )}
        </div>
      )}

      {/* Buttons */}
      <div className='flex flex-row items-center justify-center gap-6 p-3 mt-6 mb-10'>
        <Link
          to='/updateprofile'
          className='py-2 px-6 font-semibold text-white bg-emerald-500 hover:bg-emerald-600 transition duration-300 rounded-full shadow-md transform hover:scale-105'
        >
          Update Profile
        </Link>

        <button
          onClick={handleLogout}
          className='py-2 px-6 font-semibold text-white bg-black hover:bg-gray-800 transition duration-300 rounded-full shadow-md transform hover:scale-105'
        >
          Log out
        </button>
      </div>
    </section>
  )
}

export default Profile
