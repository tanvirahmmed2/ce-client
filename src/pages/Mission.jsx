import React from 'react'

import { TbMapSearch } from "react-icons/tb";
import { FaHandHoldingHand } from "react-icons/fa6";
import { GiPalmTree } from "react-icons/gi";



const Mission = () => {
  return (
    <section className='w-full min-h-[800px] p-6 bg-gray-100 flex flex-col items-center justify-center gap-8'>
        <h1 className='text-4xl font-bold text-emerald-600'>Our Mission</h1>
        <p className='text-base sm:text-lg text-center'>Dedicated to understanding and addressing climate change through interdisciplinary research and innovation</p>
        <div className='w-full flex flex-col md:flex-row items-center justify-center gap-6'>
          <div className='w-full bg-white p-6 rounded-lg flex flex-col items-start justify-between gap-4 hover:scale-[1.02] transition duration-500'>
              <p className='text-4xl text-orange-400'><TbMapSearch/></p>
              <h1 className='text-xl font-bold'>Research Excellence</h1>
              <p >Conducting groundbreaking research in climate science, environmental modeling, and sustainable technologies to advance our understanding of climate systems.</p>
          </div>
          <div className='w-full bg-white p-6 rounded-lg flex flex-col items-start justify-between gap-4 hover:scale-[1.02] transition duration-500'>
              <p className='text-4xl text-cyan-400'><FaHandHoldingHand/></p>
              <h1 className='text-xl font-bold'>Global Collaboration</h1>
             <p>Building partnerships with institutions worldwide to share knowledge, resources, and expertise in addressing global climate challenges.</p>
          </div>
          <div className='w-full bg-white p-6 rounded-lg flex flex-col items-start justify-between gap-4 hover:scale-[1.02] transition duration-500'>
              <p className='text-4xl text-emerald-400'><GiPalmTree/></p>
              <h1 className='text-xl font-bold'>Sustainable Solutions</h1>
              <p >Developing practical, scalable solutions for climate adaptation and mitigation that can be implemented across communities and industries.</p>
          </div>
        </div>
    </section>
  )
}

export default Mission
