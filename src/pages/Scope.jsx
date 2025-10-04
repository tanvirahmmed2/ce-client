import React from 'react'

import { GiModernCity } from "react-icons/gi";
import { GiFruitTree } from "react-icons/gi"
import { GiHills } from "react-icons/gi";
import { GiWaveCrest } from "react-icons/gi";
import { MdOutlineMonitorHeart } from "react-icons/md";
import { CgDanger } from "react-icons/cg";

const fields=[
  {
    id: 1,
    icon: <MdOutlineMonitorHeart className='text-red-600'/>,
    title: 'Climate Change and Environmental Monitoring',
    description: [
      '- Monitoring the impacts of climate change on infrastructure, ecosystems and communities.',
      '-Analyzing temperature, precipitation, and extreme weather trends using climate models.',
      '- Assessing the socio-economic and environmental vulnerabilities to climate change. '
    ]
  },
  {
    id: 2,
    icon: <CgDanger className='text-blue-600'/>,
    title: 'Disaster Risk Reduction and Resilience ',
    description:[
      '- Flood mapping and hazard assessment using GIS and remote sensing tools',
      '- Developing early warning systems for natural disasters (floods, droughts, cyclones).',
      ' - Creating nature-based solutions for disaster resilience (e.g., mangrove restoration).'
    ]
  },
  {
    id: 3,
    icon: <GiWaveCrest className='text-orange-500'/>,
    title: 'Water Resources and Quality Management',
    description: [
      '- Monitoring surface and groundwater availability and quality using field data and remote sensing ',
      '- Assessing the impacts of land use, pollution, and climate variability on water resources.',
      '- Water quality mapping to identify sources of pollution and develop mitigation strategies.'
    ]
  },
  {
    id: 4,
    icon: <GiHills className='text-emerald-500'/>,
    title: 'Geotechnical and Soil Resilience',
    description: [
      '- Investigating climate impacts on soil stability, erosion, and slope failure. ',
      '- Designing climate-resilient geotechnical infrastructure (foundations, embankments).',
      '- Restoring degraded soils and enhancing land productivity post-disaster.'
    ]
  },
  {
    id: 5,
    icon: <GiModernCity/>,
    title: 'Urban Resilience and Infrastructure Sustainability',
    description: [
      '- Assessing urban flooding risks and designing resilient drainage systems',
      ' - Climate vulnerability assessments for critical infrastructure (roads, bridges, buildings).',
      '- Incorporating climate adaptation strategies into urban planning.',
    ]
  },
  {
    id: 6,
    icon: <GiFruitTree className='text-cyan-400'/>,
    title: 'Agriculture and Food Security ',
    description: [
      '- Monitoring crop health and estimating yields using satellite data and machine learning.',
      ' - Precision agriculture for water and nutrient management to optimize productivity.',
      '-Studying the impacts of climate change on food security and agricultural systems.'
    ]
  },
]

const Scope = () => {
  return (
    <section className="w-full min-h-[800px] p-6 flex flex-col items-center justify-center gap-8">
      <h1 className='text-4xl font-bold text-emerald-600'>Scope of CCIRL</h1>
      <p className='text-base sm:text-lg text-center'>Our multidisciplinary approach spans various fields of climate science and environmental research</p>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8'>
      {
        fields && fields.map((field)=>{
          const {id, icon, title, description}= field
          return <div key={id} className='w-full flex flex-col items-start justify-start gap-2  shadow-xl rounded-lg p-6 py-12 border-2 hover:scale-[1.02] transition duration-500'>
            <p className='text-4xl'>{icon}</p>
            <p className='text-lg font-semibold text-emerald-600'>{title}</p>
            {description && description.map((e)=>{
              return <p key={e.i}>{e}</p>
            })}

          </div>
        })
      }
     </div>

    </section>
  )
}

export default Scope
