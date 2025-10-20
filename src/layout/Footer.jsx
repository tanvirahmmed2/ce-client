import React from 'react'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center border-t-2 border-emerald-600  '>
      <footer className='w-full flex flex-col md:flex-row px-6 py-7 items-centerjustify-center gap-4'>
        <div className='w-full flex flex-col items-start justify-center gap-4'>
          <img src={`https://res.cloudinary.com/dq4gmh1z6/image/upload/v1760450691/CCIRL_zvnbcp.png`} alt='' className='w-12 ' />
          <div className='w-auto  flex flex-col items-start justify-center'>
            <h1 className='font-semibold text-emerald-700'>CCIRL</h1>
            <p className='text-xs'>Climate Change Impact and Resilience Lab</p>
          </div>
        </div>
        <div className='w-full flex flex-col items-start justify-center gap-4'>
          <h1 className='font-semibold text-emerald-700'>Quick links</h1>
          <div className='flex flex-col'>
            <Link to='/mission'>Mission</Link>
            <Link to='/events'>Events</Link>
            <Link to='/notice'>Notice</Link>
            <Link to='/publications'>Publications</Link>
          </div>
        </div>
        <div className='w-full flex flex-col items-start justify-center gap-4'>
          <h1 className='font-semibold text-emerald-700'>Important</h1>
          <div className='flex flex-col'>
            <Link to='/admin'>Admin</Link>
            <Link to='/login'>Join us</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/collaboration'>Collaboration</Link>
          </div>
        </div>

        <div className='w-full flex flex-col items-start justify-center gap-4'>
          <h1 className='font-semibold text-emerald-700'>Connect</h1>
          <div className='flex flex-col'>
            <a href="mailto:ccirl.mec@gmail.com">ccirl.mec@gmail.com</a>
            <a href="tel:+8801306556358">+8801306556358</a>
            <a href="https://www.facebook.com/ccirl.mec/">Facebook</a>
            <a href='https://www.linkedin.com/company/ccirl-mec/'>Linkedin</a>
          </div>
        </div>

      </footer>
      <div className='w-full bg-emerald-950 flex flex-col gap-4 text-white items-center justify-center px-5 py-8 text-center border-t-2'>
        <p className='text-xs sm:text-base'>© 2025 Climate Change Impact and Resilience Lab. All rights reserved.</p>
        <p className='text-xs sm:text-base'>Designed & Doveloped by <a className='' href="https://disibin.com">Disibin</a></p>

      </div>
    </section>
  )
}

export default Footer
