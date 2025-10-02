import React from 'react'
import { Link } from 'react-router-dom';

import { RiGlobalLine } from "react-icons/ri";
import Mission from '../pages/Mission';
import Events from '../pages/Events';
import Contact from '../pages/Contact';
const Home = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center  mt-16'>

      {/* intro */}
      <div className='bg-gradient-to-br from-gray-600 to-emerald-600 w-full h-[600px] text-center text-white flex flex-col items-center justify-center gap-4 p-6'>
        <p className='text-6xl md:text-8xl text-white'><RiGlobalLine /></p>
        <div >
          <h1 className=' text-4xl md:text-5xl font-semibold text-white'>Climate Change & Impact</h1>
          <h1 className=' text-4xl md:text-5xl font-semibold text-emerald-400'>Resonance Lab</h1>
        </div>
        <p className='text-base md:text-lg'>Advancing climate science through innovative research, cutting-edge technology, and collaborative solutions for a sustainable future</p>
        <div className='w-full h-auto flex flex-col sm:flex-row items-center justify-center gap-2'>
          <Link className='sm:py-4 py-2 px-8 w-full sm:w-auto bg-white rounded-lg border-[1px] text-black' to='/research'>Explore Research</Link>
          <Link className='sm:py-4 py-2 px-8 w-full sm:w-auto bg-white/10 rounded-lg border-[1px] text-white' to='/registration'>Join to Community</Link>
        </div>
      </div>

      {/* pages */}
      <Mission/>
      <Events/>
      <Contact/>

    </section>
  )
}

export default Home
