import React from 'react'
import { Link } from 'react-router-dom';

import { RiGlobalLine } from "react-icons/ri";

const Footer = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center  text-white/60'>
      <footer className='w-full flex flex-col md:flex-row px-6 py-7 items-center bg-gray-700 justify-center gap-4'>
        <div className='w-full flex flex-col items-start justify-center gap-4'>
          <p className='text-green-600 text-4xl'><RiGlobalLine /></p>
          <div className='w-auto  flex flex-col items-start justify-center'>
            <h1 className='font-semibold text-white'>CCIRL</h1>
            <p className='text-xs'>Climate Change Impact and Resilience Lab</p>
          </div>
        </div>
        <div className='w-full flex flex-col items-start justify-center gap-4'>
          <h1 className='font-semibold text-white'>Quick links</h1>
          <div className='flex flex-col'>
            <Link to='/mission'>Mission</Link>
            <Link to='/scope'>Scope</Link>
            <Link to='/news'>News</Link>
            <Link to='/events'>Events</Link>
            <Link to='/notice'>Notice</Link>
          </div>
        </div>
        <div className='w-full flex flex-col items-start justify-center gap-4'>
          <h1 className='font-semibold text-white'>Important</h1>
          <div className='flex flex-col'>
            <Link to='/publications'>Publications</Link>
            <Link to='dashboard'>DashBoard</Link>
            <Link to='/profile'>Profile</Link>
            <Link to='/library'>Library</Link>
            <Link to='/projects'>Projects</Link>
          </div>
        </div>

        <div className='w-full flex flex-col items-start justify-center gap-4'>
          <h1 className='font-semibold text-white'>Connect</h1>
          <div className='flex flex-col'>
            <a href="mailto:info@ccirl.edu">info@ccirl.edu</a>
            <a href="tel:+1 (555) 123-4567">+1 (555) 123-4567</a>
            <p>Twitter</p>
            <p>Linkedin</p>
          </div>
        </div>

      </footer>
      <div className='w-full bg-gray-900 flex flex-col gap-4 items-center justify-center px-5 py-7 text-center border-t-2'>
        <p className='text-xs sm:text-base'>© 2025 Climate Change Impact and Resilience Lab. All rights reserved.</p>
        <p >Designed by <a className='text-white' href="https://disibin.com">Disibin</a></p>

      </div>
    </section>
  )
}

export default Footer
