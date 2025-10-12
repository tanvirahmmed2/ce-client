import React, { useContext } from 'react'
import { Link } from 'react-router-dom'


import { RxAvatar } from "react-icons/rx";
import { FaMapMarkedAlt } from "react-icons/fa";
import { ThemeContext } from '../components/Context';

const Profile = () => {
  const { user, author } = useContext(ThemeContext)



  return (
    <section className='w-full min-h-screen p-4 sm:p-6   flex flex-col items-center gap-10 justify-center'>

      <div className='w-full h-auto'>
        <div className='w-full  h-32 bg-emerald-600/90 text-white shadow-sm rounded-sm flex items-center justify-center p-6'>
          <h1 className='text-3xl sm:text-4xl font-extrabold tracking-tight'>Welcome to <span className='text-yellow-300'>CCIRL</span></h1>
        </div>

        <div className='w-full  bg-white shadow-lg rounded-sm p-8 flex flex-col md:flex-row items-center justify-around gap-8 border border-gray-100'>

          <div className='flex-shrink-0'>
            {
              user.profileImage ? <img src={user.profileImage} alt="" /> : <p className='text-9xl text-emerald-500 border-4 border-emerald-500 rounded-full p-2 bg-white'><RxAvatar /></p>
            }
          </div>

          <div className='text-center md:text-left'>
            <h1 className='text-4xl font-bold text-gray-800 tracking-tight'>{user.name}</h1>
            <p className='italic font-medium text-emerald-600 mb-2'>{user.role}</p>
            <p className='text-lg text-gray-600'>Studies at Mymensingh Engineering College</p>
          </div>
        </div>

        <div className='w-full  bg-white shadow-sm rounded-sm p-6 border border-gray-100'>
          <h2 className='text-2xl font-semibold mb-4 text-gray-700 border-b pb-2'>Personal & Academic Details</h2>
          <div className='flex flex-col gap-3 text-gray-700'>
            <p className='font-medium'>Currentry Studying in BSc in Engineering in Civil Engineering</p>
            <p><span className='font-semibold'>Date of Birth:</span> {user.dateOfBirth}</p>
            <p><span className='font-semibold'>Email:</span> <span className='text-emerald-600 '>{user.email}</span></p>
            <p><span className='font-semibold'>Phone:</span> {user.phone}</p>
            <p className='flex flex-row gap-2 items-center font-semibold text-gray-600'><FaMapMarkedAlt className='text-red-500' /> {user.country}</p>
          </div>
        </div>

        {
          author ? <div className='w-full  flex flex-col gap-4 bg-white shadow-sm rounded-sm p-6 border border-gray-100'>
            <h2 className='text-2xl font-semibold text-gray-700'>Contributions</h2>

            <div className='w-full flex justify-between p-3 border-b-2 font-bold text-gray-600 bg-gray-50 rounded-t-lg text-sm sm:text-base'>
              <p className='w-2/5 text-left'>Title</p>
              <p className='hidden sm:block w-1/5 text-left'>Details</p>
              <p className='w-1/5 text-right'>Abstruct</p>
            </div>
            {
              user.publications && user.publications.map((paper) => {
                const { title, _id, link, description } = paper
                return <div key={(_id)}>
                  <h1>{title}</h1>
                  <p>{description}</p>
                  <a href={link}>Abstruct</a>
                </div>
              })
            }
            <p className='text-emerald-600 font-medium hover:text-emerald-800 cursor-pointer mt-2 text-center'>Add more+</p>
          </div>
            : <p></p>
        }
        <div className='flex flex-row items-center justify-center gap-6 p-3   mt-4 mb-10'>

          <Link
            to='/dashboard'
            className='py-2 px-6 font-semibold text-white bg-emerald-500 hover:bg-emerald-600 transition duration-300 rounded-full shadow-md transform hover:scale-105'
          >
            Update Profile
          </Link>

          <button
            className='py-2 px-6 font-semibold text-white bg-red-500 hover:bg-red-600 transition duration-300 rounded-full shadow-md transform hover:scale-105'
          >
            Delete ID
          </button>
        </div>
      </div>


    </section>
  )
}

export default Profile