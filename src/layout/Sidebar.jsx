import React, { useContext } from 'react'

import { Link } from 'react-router-dom'

import { FaArrowRightLong } from "react-icons/fa6";
import { RiGlobalLine } from "react-icons/ri";
import { ThemeContext } from '../components/Context'

const Sidebar = () => {
  const { sidebar, setSidebar } = useContext(ThemeContext)
  console.log(sidebar)
  return (
    <div className={`w-[250px] min-h-screen fixed bg-gray-600 z-50 right-0 flex md:hidden ${sidebar ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out flex-col items-end justify-start gap-4 text-white px-6 py-6`}>
      <a href="/" className='w-auto  flex flex-col items-end justify-center gap-2'>

        <p className='text-green-600 text-4xl'><RiGlobalLine /></p>
        <div className='w-auto  flex flex-col items-end justify-center'>
          <h1 className='font-semibold'>CCIRL</h1>
          <p className='text-[10px]'>Climate Change and Impact Resonance Lab</p>
        </div>
      </a>
      <div className='w-  flex flex-col items-end justify-center gap-2'>
        <Link to='/' className='w-auto  flex justify-center items-center px-2 hover:px-6 border-green-600'>Home</Link>
        <Link to='/mission' className='w-auto  flex justify-center items-center px-2 hover:px-6 border-green-600'>Mission</Link>
        <Link to='/reserach' className='w-auto  flex justify-center items-center px-2 hover:px-6 border-green-600'>Research</Link>
        <Link to='/news' className='w-auto flex justify-center items-center px-2 hover:px-6 border-green-600'>News</Link>
        <Link to='/events' className='w-auto  flex justify-center items-center px-2 hover:px-6 border-green-600'>Events</Link>
        <Link to='/gallery' className='w-auto  flex justify-center items-center px-2 hover:px-6 border-green-600'>Gallery</Link>
        <Link to='/council' className='w-auto  flex justify-center items-center px-2 hover:px-6 border-green-600'>Council</Link>
        <Link to='/contact' className='w-auto  flex justify-center items-center px-2 hover:px-6 border-green-600'>Contact</Link>
        <Link to='/registration' className='w-auto  flex justify-center items-center px-2 hover:px-6 border-green-600'>Join to Community</Link>
      </div>
      <button onClick={() => setSidebar(!sidebar)} className='w-auto  flex  justify-center items-center px-2  text-2xl mt-10'><FaArrowRightLong /></button>
    </div>
  )
}

export default Sidebar
