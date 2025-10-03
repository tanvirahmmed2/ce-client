import React from 'react'
import { Link } from 'react-router-dom'


import { RxAvatar } from "react-icons/rx";
import { FaMapMarkedAlt } from "react-icons/fa";

const Profile = () => {
  return (
    <section className='w-full min-h-screen p-4 sm:p-6 md:p-10 lg:p-12 flex flex-col items-center gap-10 bg-gray-50'>
      
      <div className='w-full  h-32 bg-emerald-600/90 text-white shadow-sm rounded-sm flex items-center justify-center p-6'>
        <h1 className='text-3xl sm:text-4xl font-extrabold tracking-tight'>Welcome to <span className='text-yellow-300'>CCIRL</span></h1>
      </div>
      
      <div className='w-full  bg-white shadow-lg rounded-sm p-8 flex flex-col md:flex-row items-center justify-center gap-8 border border-gray-100'>
        
        <div className='flex-shrink-0'>
          <p className='text-9xl text-emerald-500 border-4 border-emerald-500 rounded-full p-2 bg-white'><RxAvatar /></p>
        </div>
        
        <div className='text-center md:text-left'>
          <h1 className='text-4xl font-bold text-gray-800 tracking-tight'>Md Nazrul Islam</h1>
          <p className='italic font-medium text-emerald-600 mb-2'>Mentor, CCIRL</p>
          <p className='text-lg text-gray-600'>Studies at Mymensingh Engineering College</p>
        </div>
      </div>

      <div className='w-full  bg-white shadow-sm rounded-sm p-6 border border-gray-100'>
        <h2 className='text-2xl font-semibold mb-4 text-gray-700 border-b pb-2'>Personal & Academic Details</h2>
        <div className='flex flex-col gap-3 text-gray-700'>
          <p className='font-medium'>Currentry Studying in BSc in Engineering in Civil Engineering</p>
          <p><span className='font-semibold'>Date of Birth:</span> January 01, 2000 (Placeholder)</p>
          <p><span className='font-semibold'>Email:</span> <span className='text-emerald-600 hover:underline'>xxxx@gmail.com</span></p>
          <p><span className='font-semibold'>Phone:</span> +8801234567890</p>
          <p className='flex flex-row gap-2 items-center font-semibold text-gray-600'><FaMapMarkedAlt className='text-red-500' /> Bangladesh</p>
        </div>
      </div>
      
      <div className='w-full  flex flex-col gap-4 bg-white shadow-sm rounded-sm p-6 border border-gray-100'>
        <h2 className='text-2xl font-semibold text-gray-700'>Contributions</h2>
        
        <div className='w-full flex justify-between p-3 border-b-2 font-bold text-gray-600 bg-gray-50 rounded-t-lg text-sm sm:text-base'>
          <p className='w-1/5 text-left'>Date</p>
          <p className='w-2/5 text-left'>Title</p>
          <p className='hidden sm:block w-1/5 text-left'>Abstract</p>
          <p className='w-1/5 text-right'>Action</p>
        </div>
        
        <div className='w-full flex justify-between p-3 border-b text-gray-700 hover:bg-gray-50 transition duration-150 text-sm sm:text-base'>
            <p className='w-1/5 text-left'>12/01/24</p>
            <p className='w-2/5 text-left font-medium truncate'>A study on sustainable infra...</p>
            <p className='hidden sm:block w-1/5 text-left text-xs text-gray-500 truncate'>Research summary...</p>
            <p className='w-1/5 text-right text-emerald-500 font-medium cursor-pointer'>View</p>
        </div>

        <p className='text-emerald-600 font-medium hover:text-emerald-800 cursor-pointer mt-2 text-center'>Add more+</p>
      </div>
      
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

    </section>
  )
}

export default Profile