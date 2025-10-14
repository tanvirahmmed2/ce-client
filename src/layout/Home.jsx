import React from 'react'
import { Link } from 'react-router-dom';
import Mission from '../pages/Mission';
import Contact from '../pages/Contact';
import Scope from '../pages/Scope';
import Projects from '../pages/Projects';
import Collaboration from '../pages/Collaboration';
const Home = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center '>

      <div className='bg-gradient-to-br from-gray-600 to-emerald-600 w-full h-[800px] text-center text-white flex flex-col items-center justify-center gap-4 p-6'>

        
        <div >
          <h1 className=' text-4xl md:text-5xl font-semibold text-white'>Climate Change Impact and</h1>
          <h1 className=' text-4xl md:text-5xl font-semibold text-emerald-400'>Resilience Lab</h1>
        </div>
        <p className='md:text-base text-[14px] w-full md:w-3/4 text-center my-2'>The escalating impacts of climate change demand immediate, data-driven solutions to ensure environmental sustainability and societal resilience. The Climate Impact and Resilience Lab aims to address these challenges by conducting multidisciplinary research that integrates geospatial technologies, machine learning, and environmental sciences to develop innovative and actionable solutions</p>
        <div className='w-full h-auto flex flex-col sm:flex-row items-center justify-center gap-2'>
          <Link className='sm:py-4 py-2 px-8 w-full sm:w-auto bg-white hover:bg-white/80 transition duration-500 rounded-lg border-[1px] text-black' to='/projects'>Explore Projects</Link>
          <Link className='sm:py-4 py-2 px-8 w-full sm:w-auto bg-white/10 hover:bg-white/20 transition duration-500 rounded-lg border-[1px] text-white' to='/registration'>Join to Community</Link>
        </div>
      </div>

      {/* pages */}
      <Mission />
      <Scope />
      <Projects />
      <Collaboration/>
      <Contact />

    </section>
  )
}

export default Home
