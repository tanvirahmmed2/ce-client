import React, { useContext } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { FaArrowRightLong } from "react-icons/fa6";
import { RiGlobalLine } from "react-icons/ri";
import { ThemeContext } from '../components/Context'
import { toast } from 'react-toastify';

const Sidebar = () => {
  const { sidebar, setSidebar,user, admin } = useContext(ThemeContext)

  const closeSidebar = () => {
    setSidebar(!sidebar)
  }

  const handleLogout = async () => {
    try {
      const response = await axios.post('https://ce-server-5tje.onrender.com/api/user/logout',{}, {
        withCredentials: true
      })
      toast.success(response.data.message)
      window.location.replace('/');
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  
  return (
    <div className={`fixed right-0 top-0 h-screen max-h-screen overflow-y-auto bg-emerald-950 text-white z-50 flex flex-col items-end px-6 py-4 gap-4  transition-transform duration-500 ease-in-out ${sidebar ? 'translate-x-0' : 'translate-x-full'}`}>
      <button onClick={() => setSidebar(!sidebar)} className='w-full bg-white/20  flex  justify-center items-center px-2  text-2xl '><FaArrowRightLong /></button>
      <a href="/" className='w-auto  flex flex-col items-end justify-center gap-2'>

        <p className='text-green-600 text-4xl'><RiGlobalLine /></p>
        <div className='w-auto  flex flex-col items-end justify-center'>
          <h1 className='font-semibold'>CCIRL</h1>
          <p className='text-[10px]'>Climate Change Impact and Resilience Lab</p>
        </div>
      </a>
      <div className='w-auto  flex flex-col items-end justify-center gap-2'>
        <Link to='/' className='w-auto  flex justify-center items-center px-2 hover:px-6 border-green-600' onClick={closeSidebar}>Home</Link>
        <Link to='/mission' className='w-auto  flex justify-center items-center px-2 hover:px-6 border-green-600' onClick={closeSidebar}>Mission</Link>
        <Link to='/scope' className='w-auto  flex justify-center items-center px-2 hover:px-6 border-green-600' onClick={closeSidebar}>Scope</Link>
        <Link to='/publications' className='w-auto  flex justify-center items-center px-2 hover:px-6 border-green-600' onClick={closeSidebar}>Publications</Link>
        <Link to='/library' className='w-auto  flex justify-center items-center px-2 hover:px-6 border-green-600' onClick={closeSidebar}>Library</Link>
        <Link to='/events' className='w-auto  flex justify-center items-center px-2 hover:px-6 border-green-600' onClick={closeSidebar}>Events</Link>
        <Link to='/update' className='w-auto flex justify-center items-center px-2 hover:px-6 border-green-600' onClick={closeSidebar}>Update</Link>
        <Link to='/projects' className='w-auto flex justify-center items-center px-2 hover:px-6 border-green-600' onClick={closeSidebar}>Projects</Link>
        <Link to='/gallery' className='w-auto  flex justify-center items-center px-2 hover:px-6 border-green-600' onClick={closeSidebar}>Gallery</Link>
        <Link to='/notice' className='w-auto  flex justify-center items-center px-2 hover:px-6 border-green-600' onClick={closeSidebar}>Notice</Link>
        {user && <Link to='/profile' className='w-auto  flex justify-center items-center px-2 hover:px-6 border-green-600' onClick={closeSidebar}>Profile</Link>}
        {admin? <Link to='/admin' className='w-auto  flex justify-center items-center px-2 hover:px-6 border-green-600' onClick={closeSidebar}>Admin</Link>: <p></p>}
        <Link to='/login' className='w-auto  flex justify-center items-center px-2 hover:px-6 border-green-600' onClick={closeSidebar}>Join us</Link>
        <Link to='/team' className='w-auto  flex justify-center items-center px-2 hover:px-6 border-green-600' onClick={closeSidebar}>Team</Link>
        <Link to='/contact' className='w-auto  flex justify-center items-center px-2 hover:px-6 border-green-600' onClick={closeSidebar}>Contact</Link>
        {user && <button className='w-auto  flex justify-center items-center px-2 hover:px-6 py-4 border-green-600' onClick={handleLogout}>LogOut</button>}
      </div>

    </div>
  )
}

export default Sidebar
