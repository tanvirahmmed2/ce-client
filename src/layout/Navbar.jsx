import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { TbMenuDeep } from "react-icons/tb";
import { RiGlobalLine } from "react-icons/ri";
import { ThemeContext } from '../components/Context';

const Navbar = () => {
  const { sidebar, setSidebar } = useContext(ThemeContext)
  return (
    <nav className='w-full h-16 fixed flex flex-row items-center justify-between px-2 md:px-6 shadow-md z-40'>
      <a href="/" className='w-auto h-full flex flex-row items-center justify-center gap-2'>
        <p className='text-green-600 text-4xl'><RiGlobalLine /></p>
        <div className='w-auto h-full flex flex-col items-start justify-center'>
          <h1 className='font-semibold'>CCIRL</h1>
          <p className='text-[10px]'>Climate Change and Impact Resonance Lab</p>
        </div>
      </a>
      <div className='w-auto h-full hidden sm:flex flex-row items-center justify-center'>
        <Link to='/' className='w-auto h-full flex justify-center items-center px-2 hover:border-b-2 border-green-600'>Home</Link>
        <Link to='/mission' className='w-auto h-full flex justify-center items-center px-2 hover:border-b-2 border-green-600'>Mission</Link>
        <Link to='/reserach' className='w-auto h-full flex justify-center items-center px-2 hover:border-b-2 border-green-600'>Research</Link>
        <Link to='/news' className='w-auto h-full hidden md:flex justify-center items-center px-2 hover:border-b-2 border-green-600'>News</Link>
        <Link to='/events' className='w-auto h-full flex justify-center items-center px-2 hover:border-b-2 border-green-600'>Events</Link>
        <Link to='/gallery' className='w-auto h-full hidden lg:flex justify-center items-center px-2 hover:border-b-2 border-green-600'>Gallery</Link>
        <Link to='/council' className='w-auto h-full hidden lg:flex justify-center items-center px-2 hover:border-b-2 border-green-600'>Council</Link>
        <Link to='/contact' className='w-auto h-full hidden md:flex justify-center items-center px-2 hover:border-b-2 border-green-600'>Contact</Link>
      </div>
      <div className='w-auto h-full flex flex-row items-center justify-center gap-2'>
        <Link to='/registration' className='w-auto  flex justify-center items-center px-2 sm:px-4 lg:px-6 bg-green-500 text-white p-1 rounded-lg'>Join</Link>
        <button onClick={() => setSidebar(!sidebar)} className='w-auto h-full flex md:hidden justify-center items-center px-2  text-2xl'><TbMenuDeep /></button>
      </div>

    </nav>
  )
}

export default Navbar
