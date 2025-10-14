import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { TbMenuDeep } from "react-icons/tb";
import { ThemeContext } from '../components/Context';

const Navbar = () => {
  const { sidebar, setSidebar } = useContext(ThemeContext)
  return (
    <nav className='w-full h-16 fixed flex flex-row items-center justify-between px-2 md:px-6 shadow-sm z-40 bg-white text-emerald-950'>
      <a href="/" className='w-auto h-full flex flex-row items-center justify-center gap-2'>
        <img src={`https://res.cloudinary.com/dq4gmh1z6/image/upload/v1760450691/CCIRL_zvnbcp.png`} alt=""  className='h-16'/>
        <div className='w-auto h-full flex flex-col items-start justify-center'>
          <h1 className='font-semibold'>CCIRL</h1>
          <p className='text-[10px]'>Climate Change Impact and Resilience Lab</p>
        </div>
      </a>
      <div className='w-auto h-full hidden sm:flex flex-row items-center justify-center'>
        <Link to='/' className='w-auto h-full flex justify-center items-center px-2 hover:border-b-2 border-green-600'>Home</Link>
        <Link to='/scope' className='w-auto h-full flex justify-center items-center px-2 hover:border-b-2 border-green-600'>Scope</Link>
        <Link to='/update' className='w-auto h-full hidden md:flex justify-center items-center px-2 hover:border-b-2 border-green-600'>Update</Link>
        <Link to='/projects' className='w-auto h-full hidden lg:flex justify-center items-center px-2 hover:border-b-2 border-green-600'>Projects</Link>
        <Link to='/collaboration' className='w-auto h-full hidden lg:flex justify-center items-center px-2 hover:border-b-2 border-green-600'>Collaborations</Link>
        <Link to='/events' className='w-auto h-full flex justify-center items-center px-2 hover:border-b-2 border-green-600'>Events</Link>
        <Link to='/gallery' className='w-auto h-full hidden lg:flex justify-center items-center px-2 hover:border-b-2 border-green-600'>Gallery</Link>
        <Link to='/team' className='w-auto h-full hidden lg:flex justify-center items-center px-2 hover:border-b-2 border-green-600'>Team</Link>
        <Link to='/notice' className='w-auto h-full flex justify-center items-center px-2 hover:border-b-2 border-green-600'>Notice</Link>
        <Link to='/contact' className='w-auto h-full hidden md:flex justify-center items-center px-2 hover:border-b-2 border-green-600'>Contact</Link>
      </div>
      <div className='w-auto h-full flex flex-row items-center justify-center gap-2'>
        <button onClick={() => setSidebar(!sidebar)} className='w-auto h-full flex justify-center items-center px-2  text-2xl'><TbMenuDeep /></button>
      </div>

    </nav>
  )
}

export default Navbar
