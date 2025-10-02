import React from 'react'

import { GiModernCity } from "react-icons/gi";
import { SlEnergy } from "react-icons/sl";
import { GiFruitTree } from "react-icons/gi"
import { GiHills } from "react-icons/gi";
import { GiWaveCrest } from "react-icons/gi";
import { FaTemperatureLow } from "react-icons/fa";

const fields=[
  {
    id: 1,
    icon: <FaTemperatureLow className='text-red-600'/>,
    title: 'Climate Modeling',
    description: 'Advanced computational models to predict climate patterns and assess future scenarios.'
  },
  {
    id: 2,
    icon: <GiWaveCrest className='text-blue-600'/>,
    title: 'Ocean Science',
    description: 'Studying ocean currents, temperature changes, and marine ecosystem impacts.'
  },
  {
    id: 3,
    icon: <GiHills className='text-orange-500'/>,
    title: 'Glaciology',
    description: 'Research on ice sheet dynamics, glacier retreat, and polar climate systems.'
  },
  {
    id: 4,
    icon: <GiFruitTree className='text-emerald-500'/>,
    title: 'Ecosystem Dynamics',
    description: 'Understanding how climate change affects biodiversity and ecosystem services.'
  },
  {
    id: 5,
    icon: <SlEnergy/>,
    title: 'Urban Climate',
    description: 'Studying urban heat islands and sustainable city planning strategies.'
  },
  {
    id: 6,
    icon: <GiModernCity className='text-cyan-400'/>,
    title: 'Renewable Energy',
    description: 'Developing sustainable energy solutions and storage technologies.'
  },
]

const Research = () => {
  return (
    <section className="w-full min-h-[800px] bg-gray-50 p-6 flex flex-col items-center justify-center gap-8">
      <h1 className='text-4xl font-bold text-emerald-600'>Research Fields</h1>
      <p className='text-base sm:text-lg text-center'>Our multidisciplinary approach spans various fields of climate science and environmental research</p>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8'>
      {
        fields && fields.map((field)=>{
          const {id, icon, title, description}= field
          return <div key={id} className='w-full flex flex-col items-start justify-start gap-2  shadow-xl rounded-lg p-6 hover:scale-[1.02] transition duration-500'>
            <p className='text-4xl'>{icon}</p>
            <p className='text-lg font-semibold text-emerald-600'>{title}</p>
            <p>{description}</p>

          </div>
        })
      }
     </div>

    </section>
  )
}

export default Research
