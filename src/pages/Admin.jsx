import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {


  return (

    <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full justify-items-center gap-4 p-6 bg-gray-50 min-h-[800px] text-2xl'>
      <Link to='/admin/member' className='w-full h-full bg-gray-50 hover:bg-gray-200 transition duration-500 flex items-center justify-center shadow-lg rounded-lg py-2'>Member</Link>
      <Link to='/admin/event' className='w-full h-full bg-gray-50 hover:bg-gray-200 transition duration-500 flex items-center justify-center shadow-lg rounded-lg py-2'>Event</Link>
      <Link to='/admin/gallery' className='w-full h-full bg-gray-50 hover:bg-gray-200 transition duration-500 flex items-center justify-center shadow-lg rounded-lg py-2'>Gallery</Link>
      <Link to='/admin/notice' className='w-full h-full bg-gray-50 hover:bg-gray-200 transition duration-500 flex items-center justify-center shadow-lg rounded-lg py-2'>Notice</Link>
      <Link to='/admin/project' className='w-full h-full bg-gray-50 hover:bg-gray-200 transition duration-500 flex items-center justify-center shadow-lg rounded-lg py-2'>Project</Link>
      <Link to='/admin/team' className='w-full h-full bg-gray-50 hover:bg-gray-200 transition duration-500 flex items-center justify-center shadow-lg rounded-lg py-2'>Team</Link>
      <Link to='/admin/update' className='w-full h-full bg-gray-50 hover:bg-gray-200 transition duration-500 flex items-center justify-center shadow-lg rounded-lg py-2'>Update</Link>
      <Link to='/admin/publications' className='w-full h-full bg-gray-50 hover:bg-gray-200 transition duration-500 flex items-center justify-center shadow-lg rounded-lg py-2'>Publications</Link>
      <Link to='/admin/access' className='w-full h-full bg-gray-50 hover:bg-gray-200 transition duration-500 flex items-center justify-center shadow-lg rounded-lg py-2'>Access</Link>
      <Link to='/admin/collaboration' className='w-full h-full bg-gray-50 hover:bg-gray-200 transition duration-500 flex items-center justify-center shadow-lg rounded-lg py-2'>Collaboration</Link>

    </section>
  )
}

export default Admin
