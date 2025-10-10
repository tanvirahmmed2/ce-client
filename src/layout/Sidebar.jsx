import React, { useContext } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { FaArrowRightLong } from "react-icons/fa6";
import { RiGlobalLine } from "react-icons/ri";
import { ThemeContext } from '../components/Context'

const Sidebar = () => {
  const { sidebar, setSidebar,user, admin } = useContext(ThemeContext)

  const closeSidebar = () => {
    setSidebar(!sidebar)
  }

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/user/logout',{}, {
        withCredentials: true
      })
      alert(response.data.message)
    } catch (error) {
      alert(error.response.data.message)
    }
  }
  
  return (
    <div className={`w-auto min-h-screen fixed bg-gray-800 z-50 right-0 flex ${sidebar ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out flex-col items-end justify-start gap-4 text-white px-6 py-4`}>
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
        <Link to='/tools' className='w-auto  flex justify-center items-center px-2 hover:px-6 border-green-600' onClick={closeSidebar}>Tools</Link>
        <Link to='/notice' className='w-auto  flex justify-center items-center px-2 hover:px-6 border-green-600' onClick={closeSidebar}>Notice</Link>
        {user && <Link to='/profile' className='w-auto  flex justify-center items-center px-2 hover:px-6 border-green-600' onClick={closeSidebar}>Profile</Link>}
        {admin? <Link to='/dashboard' className='w-auto  flex justify-center items-center px-2 hover:px-6 border-green-600' onClick={closeSidebar}>DashBoard</Link>: <p></p>}
        <Link to='/registration' className='w-auto  flex justify-center items-center px-2 hover:px-6 border-green-600' onClick={closeSidebar}>Join us</Link>
        <Link to='/team' className='w-auto  flex justify-center items-center px-2 hover:px-6 border-green-600' onClick={closeSidebar}>Team</Link>
        <Link to='/contact' className='w-auto  flex justify-center items-center px-2 hover:px-6 border-green-600' onClick={closeSidebar}>Contact</Link>
        {user && <a href='/' className='w-auto  flex justify-center items-center px-2 hover:px-6 py-4 border-green-600' onClick={handleLogout}>LogOut</a>}
      </div>

    </div>
  )
}

export default Sidebar
